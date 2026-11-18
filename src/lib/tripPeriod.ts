import type { DayData } from "../types";
import { parseISODate, toISODate } from "./date";

export type TripPhase = "before" | "during" | "after";

const firstTripDateISO = (days: DayData[]) => days[0].dateISO;
const lastTripDateISO = (days: DayData[]) => days[days.length - 1].dateISO;

/** A fase vem da data local (ISO), sem depender de horário; `days` em ordem de data. */
export function getTripPhase(now: Date, days: DayData[]): TripPhase {
  const todayISO = toISODate(now);
  if (todayISO < firstTripDateISO(days)) return "before";
  if (todayISO > lastTripDateISO(days)) return "after";
  return "during";
}

export function daysUntilTrip(now: Date, days: DayData[]): number {
  const today = parseISODate(toISODate(now));
  return Math.round((parseISODate(firstTripDateISO(days)).getTime() - today.getTime()) / 86_400_000);
}
