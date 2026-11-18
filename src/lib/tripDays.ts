import { allDays } from "../data/days";
import { narcizoDays } from "../data/narcizo";
import type { DayData } from "../types";

export interface TripDays {
  days: DayData[];
  daysByDate: Record<string, DayData>;
}

function toTripDays(days: DayData[]): TripDays {
  return { days, daysByDate: Object.fromEntries(days.map((day) => [day.dateISO, day])) };
}

const mainTripDays = toTripDays(allDays);
const tripDaysWithNarcizo = toTripDays([...allDays, ...narcizoDays].sort((a, b) => a.dateISO.localeCompare(b.dateISO)));

/** Os dias do roteiro principal; com o modo Narcizo ativo, seguidos dos dias da família Narcizo. */
export function selectTripDays(isNarcizoEnabled: boolean): TripDays {
  return isNarcizoEnabled ? tripDaysWithNarcizo : mainTripDays;
}
