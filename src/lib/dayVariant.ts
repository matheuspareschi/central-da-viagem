import type { DayData, ItineraryVariant } from "../types";
import { readStorage } from "./storage";

export const variantStorageKey = (dateISO: string) => `roteiro:variante:${dateISO}`;

export function findVariant(day: DayData, variantKey: string | undefined): ItineraryVariant | undefined {
  const variants = day.variants;
  if (!variants) return undefined;
  const options = variants.options;
  return options.find((option) => option.key === variantKey) ?? options.find((option) => option.key === variants.defaultKey);
}

/** O dia como ele fica na versão pedida: roteiro e campos alterados trocados, o resto igual. */
export function applyVariant(day: DayData, variantKey: string | undefined): DayData {
  const variant = findVariant(day, variantKey);
  return variant ? { ...day, ...variant.overrides, itinerary: variant.itinerary } : day;
}

/** O dia na versão salva no aparelho (ou na padrão), para telas que só leem, como Home e Calendário. */
export function applySelectedVariant(day: DayData): DayData {
  return day.variants ? applyVariant(day, readStorage<string>(variantStorageKey(day.dateISO), "")) : day;
}
