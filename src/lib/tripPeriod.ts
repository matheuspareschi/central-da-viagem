import { allDays } from "../data/days";
import { parseISODate, toISODate } from "./date";

export const firstTripDateISO = allDays[0].dateISO;
export const lastTripDateISO = allDays[allDays.length - 1].dateISO;

export type TripPhase = "before" | "during" | "after";

/** A fase vem da data local (ISO), sem depender de horário. */
export function getTripPhase(now: Date): TripPhase {
  const todayISO = toISODate(now);
  if (todayISO < firstTripDateISO) return "before";
  if (todayISO > lastTripDateISO) return "after";
  return "during";
}

export function daysUntilTrip(now: Date): number {
  const today = parseISODate(toISODate(now));
  return Math.round((parseISODate(firstTripDateISO).getTime() - today.getTime()) / 86_400_000);
}
