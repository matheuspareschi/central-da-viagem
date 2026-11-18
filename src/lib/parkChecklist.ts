import type { ChecklistItem, DetailSection, IconName, ParkAttraction, ParkArea } from "../types";

const ADDED_ENTRY_PREFIX = "catalogo:";
const CURIOSITIES_TITLE = "Curiosidades";
const TIP_TITLE = "Dica";

/** Linha do checklist de parque: item do dia ou atração incluída do catálogo. */
export interface ChecklistEntry {
  id: string;
  name: string;
  icon: IconName;
  /** Área + tipo, exibido no cabeçalho dos detalhes. */
  subtitle?: string;
  /** Só a área do parque, exibida na linha da lista. */
  areaLabel?: string;
  sections: DetailSection[];
  isAdded: boolean;
}

export const toAddedEntryId = (attractionId: string) => `${ADDED_ENTRY_PREFIX}${attractionId}`;
export const isAddedEntryId = (entryId: string) => entryId.startsWith(ADDED_ENTRY_PREFIX);

function findAreaLabel(attraction: ParkAttraction, areas: ParkArea[]): string {
  return areas.find((area) => area.key === attraction.area)?.label ?? attraction.area;
}

export function describeAttraction(attraction: ParkAttraction, areas: ParkArea[]): string {
  return `${findAreaLabel(attraction, areas)} · ${attraction.type}`;
}

export const linkedAttractionIds = (item: ChecklistItem): string[] =>
  [item.attractionId, ...(item.attractionIds ?? [])].filter((id): id is string => Boolean(id));

/** Área e categoria da atração; item que junta várias atrações lista as categorias de todas. */
function describeLinked(linked: ParkAttraction[], areas: ParkArea[]): string | undefined {
  if (linked.length === 0) return undefined;
  if (linked.length === 1) return describeAttraction(linked[0], areas);
  return `${findAreaLabel(linked[0], areas)} · ${linked.map((attraction) => attraction.type).join(" + ")}`;
}

function curiosityParagraphs(linked: ParkAttraction[]): string[] {
  return linked.length === 1 ? [linked[0].description] : linked.map((attraction) => `**${attraction.name}:** ${attraction.description}`);
}

function mergeCuriosities(sections: DetailSection[], linked: ParkAttraction[]): DetailSection[] {
  if (linked.length === 0) return sections;
  const catalogParagraphs = curiosityParagraphs(linked);
  const hasCuriosities = sections.some((section) => section.title === CURIOSITIES_TITLE);
  if (!hasCuriosities) return [...sections, { color: "palm", icon: "camera", title: CURIOSITIES_TITLE, paragraphs: catalogParagraphs }];
  return sections.map((section) =>
    section.title === CURIOSITIES_TITLE ? { ...section, paragraphs: [...(section.paragraphs ?? []), ...catalogParagraphs] } : section,
  );
}

function tipSection(linked: ParkAttraction[]): DetailSection | undefined {
  const tips = linked.filter((attraction) => attraction.tip);
  if (tips.length === 0) return undefined;
  const paragraphs = tips.length === 1 && linked.length === 1 ? [tips[0].tip!] : tips.map((attraction) => `**${attraction.name}:** ${attraction.tip}`);
  return { color: "gold", icon: "lightbulb", title: TIP_TITLE, paragraphs };
}

/**
 * A descrição do catálogo vira "Curiosidades"; se o item do dia já tem as suas, ela entra junto, depois delas.
 * A dica do catálogo só aparece quando o item do dia não tem a sua.
 */
function withCatalogInfo(sections: DetailSection[], linked: ParkAttraction[]): DetailSection[] {
  if (linked.length === 0) return sections;
  const withCuriosities = mergeCuriosities(sections, linked);
  const tip = tipSection(linked);
  const hasOwnTip = sections.some((section) => section.title === TIP_TITLE);
  return tip && !hasOwnTip ? [...withCuriosities, tip] : withCuriosities;
}

export function toDayEntry(item: ChecklistItem, linked: ParkAttraction[], areas: ParkArea[]): ChecklistEntry {
  return {
    id: item.id,
    name: item.name,
    icon: item.icon,
    subtitle: describeLinked(linked, areas),
    areaLabel: item.area,
    sections: withCatalogInfo(item.sections, linked),
    isAdded: false,
  };
}

export function toAddedEntry(attraction: ParkAttraction, areas: ParkArea[]): ChecklistEntry {
  const areaLabel = findAreaLabel(attraction, areas);
  return {
    id: toAddedEntryId(attraction.id),
    name: attraction.name,
    icon: attraction.kind === "show" ? "sparkle" : "target",
    subtitle: `${describeAttraction(attraction, areas)} · adicionada`,
    areaLabel,
    sections: [
      { color: "navy", icon: "parking", title: "Onde fica", paragraphs: [areaLabel] },
      { color: "citrus", icon: "target", title: "Sobre", paragraphs: [attraction.description] },
      ...(attraction.tip ? [{ color: "gold" as const, icon: "lightbulb" as const, title: TIP_TITLE, paragraphs: [attraction.tip] }] : []),
    ],
    isAdded: true,
  };
}

/**
 * Ordem exibida: a salva, ignorando ids que não existem mais, com os itens novos do dia no fim.
 * `addableEntryIds` são as inclusões do catálogo que ainda são válidas.
 */
export function reconcileOrder(savedOrder: string[], dayEntryIds: string[], addableEntryIds: string[]): string[] {
  const validIds = new Set([...dayEntryIds, ...addableEntryIds]);
  const keptIds = [...new Set(savedOrder)].filter((id) => validIds.has(id));
  const newDayIds = dayEntryIds.filter((id) => !keptIds.includes(id));
  return [...keptIds, ...newDayIds];
}

export function moveEntry(order: string[], entryId: string, offset: -1 | 1): string[] {
  const from = order.indexOf(entryId);
  const to = from + offset;
  if (from < 0 || to < 0 || to >= order.length) return order;
  const next = [...order];
  [next[from], next[to]] = [next[to], next[from]];
  return next;
}

/** Volta os itens do dia à ordem dos dados; as inclusões ficam no fim, na ordem atual. */
export function restoreOriginalOrder(order: string[], dayEntryIds: string[]): string[] {
  return [...dayEntryIds, ...order.filter(isAddedEntryId)];
}
