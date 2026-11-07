import { useEffect, useState } from "react";
import type { ScheduleDay } from "../types";
import { toISODate } from "../lib/date";
import { toMinutes } from "../lib/schedule";

interface CurrentAgenda {
  currentStepKey: string | null;
  currentCardId: string | null;
}

function computeCurrentAgenda(day: ScheduleDay | undefined, now: Date): CurrentAgenda {
  const noAgenda: CurrentAgenda = { currentStepKey: null, currentCardId: null };

  if (!day || day.dateISO !== toISODate(now)) return noAgenda;

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const stops = day.periods.flatMap((p) => p.steps).filter((s) => s.kind === "stop");

  const currentStop = stops.findLast((s) => toMinutes(s.time) <= nowMinutes);
  if (!currentStop) return noAgenda;

  const isLastStop = stops.at(-1) === currentStop;
  if (isLastStop && nowMinutes - toMinutes(currentStop.time) > 180) return noAgenda;

  return {
    currentStepKey: `${currentStop.time}-${currentStop.name}`,
    currentCardId: currentStop.stopId || null,
  };
}

export function useCurrentAgenda(day: ScheduleDay | undefined): CurrentAgenda {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  return computeCurrentAgenda(day, now);
}
