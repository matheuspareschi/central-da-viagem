import type { DayPeriod } from "../types";

const HOME_DESTINATION = /storey lake/i;

export function isHomeDestination(destinationName: string): boolean {
  return HOME_DESTINATION.test(destinationName);
}

const CLOCK_TIME = /^\d{1,2}:\d{2}$/;

/** Do horário do primeiro passo ao do último passo do período; passos "A definir" ficam de fora. */
export function formatPeriodRange({ steps }: DayPeriod): string {
  const times = steps.map((step) => step.time).filter((time) => CLOCK_TIME.test(time));
  return times.length > 0 ? `${times[0]} – ${times[times.length - 1]}` : steps[0].time;
}

/** "Black Bean Deli (almoço)" vira nome "Black Bean Deli" e subtítulo "Almoço". */
export function splitStopName(name: string): { title: string; subtitle?: string } {
  const match = name.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (!match) return { title: name };
  const [, title, detail] = match;
  return { title, subtitle: detail.charAt(0).toUpperCase() + detail.slice(1) };
}

const MINUTES_PER_HOUR = 60;

export function toMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * MINUTES_PER_HOUR + minutes;
}
