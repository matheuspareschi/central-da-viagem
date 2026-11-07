import { BookOpen } from "lucide-react";
import { useState } from "react";
import { daysByDate } from "../../data/days";
import { readStorage, writeStorage } from "../../lib/storage";
import type { AdventReading } from "../../types";

const checkedReadingsKey = (dateISO: string) => `advento:${dateISO}`;

function listReadings({ oldTestamentReading, gospelReading }: AdventReading): string[] {
  return [oldTestamentReading, gospelReading];
}

function useCheckedReadings(dateISO: string) {
  const [checked, setChecked] = useState<number[]>(() => readStorage<number[]>(checkedReadingsKey(dateISO), []));

  function toggle(index: number) {
    const next = checked.includes(index) ? checked.filter((i) => i !== index) : [...checked, index];
    setChecked(next);
    writeStorage(checkedReadingsKey(dateISO), next);
  }

  return { checked, toggle };
}

/** Leituras do Advento do dia, sempre abertas, com marcação salva por dia. */
export function AdventCard({ dateISO }: { dateISO: string }) {
  const reading = daysByDate[dateISO]?.reading;
  if (!reading) return null;

  return <ReadingsChecklist key={dateISO} dateISO={dateISO} readings={listReadings(reading)} />;
}

function ReadingsChecklist({ dateISO, readings }: { dateISO: string; readings: string[] }) {
  const { checked, toggle } = useCheckedReadings(dateISO);

  return (
    <section aria-label="Leituras do Advento" className="rounded-[20px] bg-advent px-4 pb-2 pt-4 text-white">
      <header className="flex items-center gap-3 pb-3">
        <BookOpen className="h-[22px] w-[22px] shrink-0 text-advent-gold" strokeWidth={1.8} aria-hidden="true" />
        <div className="flex flex-1 flex-col gap-0.5">
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-advent-gold">Advento</span>
          <h2 className="text-[17px] font-semibold">Leituras de hoje</h2>
        </div>
        <span className="text-sm font-semibold text-advent-gold">
          {checked.length} de {readings.length}
        </span>
      </header>
      {readings.map((reading, index) => (
        <label key={reading} className="flex min-h-[52px] cursor-pointer items-center gap-3.5 border-t border-white/[0.14] py-1.5">
          <input
            type="checkbox"
            className="advent-checkbox"
            checked={checked.includes(index)}
            onChange={() => toggle(index)}
          />
          <span className={`text-[17px] leading-[1.3] ${checked.includes(index) ? "line-through opacity-65" : ""}`}>{reading}</span>
        </label>
      ))}
    </section>
  );
}
