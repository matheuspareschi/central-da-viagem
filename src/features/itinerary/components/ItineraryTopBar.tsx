import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { DayData } from "../../../types";

interface ItineraryTopBarProps {
  prevDay: DayData | null;
  nextDay: DayData | null;
  onNavigate: (dateISO: string) => void;
}

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus";
const dayButtonClasses = `flex min-h-11 items-center gap-1 rounded-xl border border-line bg-cardbg px-3 text-sm font-semibold text-ink ${focusRing}`;

export function ItineraryTopBar({ prevDay, nextDay, onNavigate }: ItineraryTopBarProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <Link to="/calendario" className={`flex min-h-11 items-center text-sm font-semibold text-citrus-text ${focusRing}`}>
        ← Calendário
      </Link>
      <div className="flex gap-2">
        {prevDay && (
          <button type="button" onClick={() => onNavigate(prevDay.dateISO)} className={dayButtonClasses}>
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Dia {prevDay.day}
          </button>
        )}
        {nextDay && (
          <button type="button" onClick={() => onNavigate(nextDay.dateISO)} className={dayButtonClasses}>
            Dia {nextDay.day}
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
