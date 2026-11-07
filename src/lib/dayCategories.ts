import type { DayCategory, DayData } from "../types";

/** Dia dividido tem duas categorias; os demais, uma só (ou nenhuma, se ainda indefinida). */
export function getDayCategories(day: DayData): DayCategory[] {
  if (day.split) return day.split;
  return day.category ? [day.category] : [];
}
