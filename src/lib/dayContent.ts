import type { DayData, DayItinerary } from "../types";

/** Subtítulo mostrado abaixo do título "Roteiro N" — vazio pra dias
 * split (as abas já cumprem esse papel). */
export function resolveSubtitle(dayInfo: DayData, itinerary: DayItinerary | undefined): string | null {
  if (!itinerary || itinerary.kind === "split") return null;
  if (dayInfo.title) return dayInfo.title;
  if (itinerary.kind === "schedule") return itinerary.cards.map((c) => c.name).join(" · ");
  return null;
}
