import { readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { parkCatalogs } from "../src/data/parks/index.ts";
import { shopRegions } from "../src/data/shopping/index.ts";
import { applyVariant } from "../src/lib/dayVariant.ts";
import { listDayTracks, type DayTrack } from "../src/lib/dayTracks.ts";
import { toMinutes } from "../src/lib/schedule.ts";
import type { DayData, JourneyTile, ParkAttraction, StopStep, TransitStep } from "../src/types";

const MAX_JOURNEY_TILES = 4;
const daysDirectory = resolve(import.meta.dirname, "../src/data/days");

async function loadDays(): Promise<DayData[]> {
  const files = readdirSync(daysDirectory).filter((file) => /^\d{4}-\d{2}-\d{2}\.ts$/.test(file));
  const modules = await Promise.all(files.map((file) => import(pathToFileURL(resolve(daysDirectory, file)).href)));
  return modules.map((module) => module.default as DayData);
}

function describeTrack(day: DayData, track: DayTrack): string {
  return day.itinerary?.kind === "split" ? `dia ${day.day}, trilha "${track.key}"` : `dia ${day.day}`;
}

function findDuplicates(ids: string[]): string[] {
  return [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
}

function checkUniqueIds(scope: string, ids: string[]): string[] {
  return findDuplicates(ids).map((id) => `${scope}: id repetido "${id}"`);
}

function checkRequiredFields(where: string, { category, extras }: DayTrack): string[] {
  const errors: string[] = [];
  if (!category) errors.push(`${where}: sem category`);
  if (!extras.summary) errors.push(`${where}: sem summary`);
  if (!extras.journey) errors.push(`${where}: sem journey`);
  else if (extras.journey.tiles.length > MAX_JOURNEY_TILES) {
    errors.push(`${where}: journey.tiles tem ${extras.journey.tiles.length} blocos (máximo ${MAX_JOURNEY_TILES})`);
  }
  return errors;
}

function checkChecklist(where: string, { extras, content }: DayTrack): string[] {
  if (content.mode !== "checklist") return [];
  const errors = checkUniqueIds(where, content.attractions.map((item) => item.id));
  if (!extras.parkId) return errors;

  const catalog = parkCatalogs[extras.parkId];
  if (!catalog) return [...errors, `${where}: parkId "${extras.parkId}" não existe em data/parks`];

  const catalogIds = new Set(catalog.attractions.map((attraction) => attraction.id));
  const unknownLinks = content.attractions
    .filter((item) => item.attractionId && !catalogIds.has(item.attractionId))
    .map((item) => `${where}: attractionId "${item.attractionId}" (item "${item.id}") não existe no catálogo "${extras.parkId}"`);
  return [...errors, ...unknownLinks];
}

function checkSchedule(where: string, { content }: DayTrack): string[] {
  if (content.mode !== "schedule") return [];
  // stopId vazio = parada sem cartão de detalhes (ex.: café em casa); os demais precisam de cartão.
  const stops = content.periods
    .flatMap((period) => period.steps)
    .filter((step): step is StopStep => step.kind === "stop" && step.stopId !== "");
  const cardIds = new Set(content.cards.map((card) => card.id));

  return [
    ...checkUniqueIds(`${where} (cartões)`, content.cards.map((card) => card.id)),
    ...stops.filter((stop) => !cardIds.has(stop.stopId)).map((stop) => `${where}: parada "${stop.stopId}" sem cartão`),
    ...content.cards
      .filter((card) => card.shopRegionId && !shopRegions[card.shopRegionId])
      .map((card) => `${where}: shopRegionId "${card.shopRegionId}" (cartão "${card.id}") não existe`),
  ];
}

const MINUTES_PER_HOUR = 60;

/** "Volta a Storey Lake": horário do último trajeto mais a duração dele (ex.: 17:50 + ~30 min = ~18h20). */
function deriveReturnTime(transits: TransitStep[]): string | undefined {
  const last = transits.at(-1);
  const durationMinutes = Number(last?.duration?.match(/\d+/)?.[0]);
  if (!last || Number.isNaN(durationMinutes)) return undefined;
  const total = toMinutes(last.time) + durationMinutes;
  return `~${Math.floor(total / MINUTES_PER_HOUR)}h${String(total % MINUTES_PER_HOUR).padStart(2, "0")}`;
}

/** Blocos "Paradas" e "Volta a Storey Lake" não podem ficar diferentes do que o cronograma diz. */
function checkDerivedTiles(where: string, { extras, content }: DayTrack): string[] {
  if (content.mode !== "schedule") return [];
  const steps = content.periods.flatMap((period) => period.steps);
  const expectedByLabel: Record<string, string | undefined> = {
    Paradas: String(steps.filter((step) => step.kind === "stop").length),
    "Volta a Storey Lake": deriveReturnTime(steps.filter((step): step is TransitStep => step.kind === "transit")),
  };
  return extras.journey.tiles.flatMap(({ label, value }) => {
    const expected = expectedByLabel[label];
    return expected && expected !== value ? [`${where}: bloco "${label}" diz "${value}", mas o cronograma indica "${expected}"`] : [];
  });
}

const REQUIRED_ATTRACTION_TEXT_FIELDS = ["name", "type", "description"] as const;

function checkEmptyTextFields(scope: string, attractions: ParkAttraction[]): string[] {
  return attractions.flatMap((attraction) =>
    REQUIRED_ATTRACTION_TEXT_FIELDS.filter((field) => !attraction[field].trim()).map(
      (field) => `${scope}: atração "${attraction.id}" com ${field} vazio`,
    ),
  );
}

const CLOCK_LABEL = /^~?(\d{1,2})h(\d{2})?$/;

function parseClockLabel(label: string): number | undefined {
  const match = CLOCK_LABEL.exec(label);
  return match ? Number(match[1]) * MINUTES_PER_HOUR + Number(match[2] ?? 0) : undefined;
}

interface ParkTimeTiles {
  wakeUp?: string;
  leave?: string;
  parkingOpens?: string;
  parkHours?: string;
}

function pickParkTimeTiles(tiles: JourneyTile[]): ParkTimeTiles {
  const valueOf = (matches: (label: string) => boolean) => tiles.find((tile) => matches(tile.label))?.value;
  return {
    wakeUp: valueOf((label) => label === "Acordar"),
    leave: valueOf((label) => label.startsWith("Sair")),
    parkingOpens: valueOf((label) => label === "Estacionamento abre"),
    parkHours: valueOf((label) => label.startsWith("Parque ab")),
  };
}

function findInvalidClockLabels(times: ParkTimeTiles): string[] {
  const [opening, closing] = times.parkHours?.split("–") ?? [];
  const labels = [times.wakeUp, times.leave, times.parkingOpens, opening, closing];
  return labels.filter((label): label is string => label !== undefined && parseClockLabel(label) === undefined);
}

function isStrictlyAscending(minutes: (number | undefined)[]): boolean {
  const known = minutes.filter((value): value is number => value !== undefined);
  return known.every((value, index) => index === 0 || known[index - 1] < value);
}

/** Acordar < Sair de casa < Estacionamento abre ≤ abertura do parque < fechamento. */
function checkParkTimes(where: string, { category, extras }: DayTrack): string[] {
  if (category !== "parque") return [];
  const times = pickParkTimeTiles(extras.journey.tiles);
  const invalid = findInvalidClockLabels(times).map((label) => `${where}: horário "${label}" fora do formato do app (ex.: 6h15, 8h00)`);
  if (invalid.length > 0) return invalid;

  const [opening, closing] = times.parkHours?.split("–") ?? [];
  const [wakeUp, leave, parkingOpens, opens, closes] = [times.wakeUp, times.leave, times.parkingOpens, opening, closing].map(
    (label) => (label === undefined ? undefined : parseClockLabel(label)),
  );
  const errors: string[] = [];
  if (!isStrictlyAscending([wakeUp, leave, parkingOpens])) errors.push(`${where}: "Acordar", "Sair" e "Estacionamento abre" fora de ordem`);
  if (parkingOpens !== undefined && opens !== undefined && parkingOpens > opens) errors.push(`${where}: o estacionamento abre depois do parque`);
  if (opens !== undefined && closes !== undefined && closes <= opens) errors.push(`${where}: o parque fecha antes de abrir`);
  return errors;
}

/** Avisos não derrubam o build: apontam dados fora do padrão que ainda não foram pedidos para corrigir. */
const warnings: string[] = [];

const STEP_TIME_FORMAT = /^\d{2}:\d{2}$/;
const UNDEFINED_STEP_TIME = "A definir";

/** Horários dos passos no formato do app (HH:MM) e em ordem crescente dentro de cada período. */
function checkStepTimes(where: string, { content }: DayTrack): string[] {
  if (content.mode !== "schedule") return [];
  return content.periods.flatMap((period) => {
    const timedSteps = period.steps.filter((step) => step.time !== UNDEFINED_STEP_TIME);
    const invalid = timedSteps.filter((step) => !STEP_TIME_FORMAT.test(step.time));
    if (invalid.length > 0) {
      invalid.forEach((step) => warnings.push(`${where}, período "${period.title}": horário "${step.time}" fora do formato HH:MM`));
      return [];
    }
    const minutes = timedSteps.map((step) => toMinutes(step.time));
    const isOutOfOrder = minutes.some((value, index) => index > 0 && value < minutes[index - 1]);
    return isOutOfOrder ? [`${where}, período "${period.title}": horários fora de ordem crescente`] : [];
  });
}

const DOES_NOT_COUNT_AS_STORE_NAME = /\s*\([^)]*\)\s*$/;

/** Um passo solto com o nome de uma loja de uma região visitada no dia duplica a loja (ex.: "TJ Maxx" no Loop West). */
function checkDuplicatedStoreStops(where: string, { content }: DayTrack): string[] {
  if (content.mode !== "schedule") return [];
  const regions = content.cards.flatMap((card) => (card.shopRegionId ? [shopRegions[card.shopRegionId]] : [])).filter(Boolean);
  const storeNames = new Set(regions.flatMap((region) => region.stores.map((store) => store.name.toLowerCase())));
  content.periods
    .flatMap((period) => period.steps)
    .filter((step): step is StopStep => step.kind === "stop")
    .filter((step) => storeNames.has(step.name.replace(DOES_NOT_COUNT_AS_STORE_NAME, "").toLowerCase()))
    .forEach((step) => warnings.push(`${where}: passo "${step.name}" duplica uma loja que já está na lista de lojas de uma parada`));
  return [];
}

/** Ids de cartões e de itens de checklist não se repetem em nenhuma trilha do dia. */
function checkDayIds(day: DayData): string[] {
  const ids = listDayTracks(day).flatMap(({ content }) =>
    content.mode === "checklist" ? content.attractions.map((item) => item.id) : content.cards.map((card) => card.id),
  );
  return checkUniqueIds(`dia ${day.day} (todas as trilhas)`, ids);
}

function checkGuide(where: string, { extras }: DayTrack): string[] {
  const guide = extras.journey.guide;
  if (!guide) return [];
  const errors: string[] = [];
  if (!guide.title.trim()) errors.push(`${where}: journey.guide sem title`);
  if (guide.items.length === 0) errors.push(`${where}: journey.guide sem itens`);
  guide.items.forEach((item, index) => {
    if (!item.label.trim() || !item.text.trim()) errors.push(`${where}: journey.guide item ${index + 1} com label ou text vazio`);
  });
  return errors;
}

function checkVariants(day: DayData): string[] {
  const variants = day.variants;
  if (!variants) return [];
  const scope = `dia ${day.day} (variantes)`;
  const keys = variants.options.map((option) => option.key);
  return [
    ...(keys.includes(variants.defaultKey) ? [] : [`${scope}: defaultKey "${variants.defaultKey}" não existe nas opções`]),
    ...(keys.length >= 2 ? [] : [`${scope}: precisa de pelo menos duas variantes`]),
    ...checkUniqueIds(scope, keys),
    ...variants.options
      .filter((option) => !option.label.trim() || listDayTracks(applyVariant(day, option.key)).length === 0)
      .map((option) => `${scope}: variante "${option.key}" incompleta (sem label ou sem trilhas)`),
  ];
}

function checkCatalogs(): string[] {
  return Object.entries(parkCatalogs).flatMap(([parkId, { areas, attractions }]) => {
    const scope = `catálogo "${parkId}"`;
    const areaKeys = new Set(areas.map((area) => area.key));
    return [
      ...checkUniqueIds(scope, attractions.map((attraction) => attraction.id)),
      ...checkEmptyTextFields(scope, attractions),
      ...attractions
        .filter((attraction) => !areaKeys.has(attraction.area))
        .map((attraction) => `${scope}: atração "${attraction.id}" com área inexistente "${attraction.area}"`),
      ...attractions
        .filter((attraction) => attraction.parkId !== parkId)
        .map((attraction) => `${scope}: atração "${attraction.id}" com parkId "${attraction.parkId}" diferente da chave do índice`),
    ];
  });
}

function checkDay(day: DayData): string[] {
  const trackErrors = listDayTracks(day).flatMap((track) => {
    const where = describeTrack(day, track);
    return [
      ...checkRequiredFields(where, track),
      ...checkChecklist(where, track),
      ...checkSchedule(where, track),
      ...checkStepTimes(where, track),
      ...checkDuplicatedStoreStops(where, track),
      ...checkDerivedTiles(where, track),
      ...checkParkTimes(where, track),
      ...checkGuide(where, track),
    ];
  });
  return [...trackErrors, ...checkDayIds(day)];
}

/** Cada variante é validada como um dia inteiro, com a mensagem dizendo de qual versão veio o erro. */
function checkDayAndVariants(day: DayData): string[] {
  if (!day.variants) return checkDay(day);
  const variantErrors = day.variants.options.flatMap((option) =>
    checkDay(applyVariant(day, option.key)).map((error) => `[variante ${option.key}] ${error}`),
  );
  return [...checkVariants(day), ...variantErrors];
}

const days = await loadDays();
const errors = [
  ...checkUniqueIds("dias", days.map((day) => day.dateISO)),
  ...checkCatalogs(),
  ...days.flatMap(checkDayAndVariants),
];

if (errors.length > 0) {
  console.error(`validar:dados falhou com ${errors.length} erro(s):\n${errors.map((error) => `  - ${error}`).join("\n")}`);
  process.exit(1);
}
if (warnings.length > 0) console.warn(`avisos (${warnings.length}):\n${warnings.map((warning) => `  - ${warning}`).join("\n")}`);
console.log(`validar:dados ok (${days.length} dias, ${Object.keys(parkCatalogs).length} catálogo(s)).`);
