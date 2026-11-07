import type { DayData } from "../../types";

const modules = import.meta.glob<{ default: DayData }>("./*.ts", { eager: true });

export const allDays: DayData[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.dateISO.localeCompare(b.dateISO));

export const daysByDate: Record<string, DayData> = Object.fromEntries(
  allDays.map((d) => [d.dateISO, d])
);
