import type { DayCategory, DayData, DayOption } from "../types";
import { readStorage, writeStorage } from "./storage";

const ALWAYS_USE_FLAG = "1";

export const optionStorageKey = (dateISO: string) => `roteiro:variante:${dateISO}`;
export const alwaysUseStorageKey = (dateISO: string) => `roteiro:padrao:${dateISO}`;

export const SWITCH_OPTION_TITLE = "Trocar de roteiro";

/** Pergunta da escolha de roteiro, conforme o dia seja hoje, futuro ou passado. */
export function optionQuestion(dateISO: string, todayISO: string): string {
  if (dateISO === todayISO) return "Hoje você vai seguir qual roteiro?";
  return dateISO > todayISO ? "Qual roteiro você quer seguir neste dia?" : "Qual roteiro você fez neste dia?";
}

export function findOption(day: DayData, optionId: string | undefined): DayOption | undefined {
  return day.options?.find((option) => option.id === optionId);
}

export function getDefaultOption(day: DayData): DayOption | undefined {
  return day.options?.find((option) => option.isDefault);
}

function readStoredOptionId(day: DayData): string | undefined {
  const optionId = readStorage<string>(optionStorageKey(day.dateISO), "");
  return findOption(day, optionId)?.id;
}

/** Opção que o dia mostra quando ninguém escolheu nada: a última escolha guardada ou a padrão do dia. */
export function getFallbackOption(day: DayData): DayOption | undefined {
  return findOption(day, readStoredOptionId(day)) ?? getDefaultOption(day);
}

/** Opção guardada com "Usar sempre esta opção neste dia"; vale em todo o app e dispensa a pergunta. */
export function readSavedOption(day: DayData): DayOption | undefined {
  const alwaysUse = readStorage<string>(alwaysUseStorageKey(day.dateISO), "") === ALWAYS_USE_FLAG;
  return alwaysUse ? findOption(day, readStoredOptionId(day)) : undefined;
}

export function saveOption(dateISO: string, option: DayOption): void {
  writeStorage(optionStorageKey(dateISO), option.id);
  writeStorage(alwaysUseStorageKey(dateISO), ALWAYS_USE_FLAG);
}

function distinctCategories(categories: DayCategory[]): DayCategory[] {
  return [...new Set(categories)];
}

/** O dia só com as trilhas da opção (na ordem dela); a categoria acompanha as trilhas que ficaram. */
export function applyOption(day: DayData, option: DayOption): DayData {
  const itinerary = day.itinerary;
  if (itinerary?.kind !== "split") return day;

  const tracks = option.trackKeys.flatMap((key) => itinerary.tracks.filter((track) => track.key === key));
  const [first, second] = distinctCategories(tracks.map((track) => track.category));
  return {
    ...day,
    category: first,
    split: second ? [first, second] : undefined,
    itinerary: { kind: "split", tracks },
  };
}
