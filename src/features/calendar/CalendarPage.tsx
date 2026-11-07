import { useEffect } from "react";
import { Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { CategoryIcon, type BackTarget } from "../../components";
import { allDays } from "../../data/days";
import { categoryStyles } from "../../data/presentation/categoryStyles";
import { useNow } from "../../hooks/useNow";
import { getDayCategories } from "../../lib/dayCategories";
import { formatWeekdayAbbreviation, toISODate } from "../../lib/date";
import type { DayCategory, DayData } from "../../types";

const calendarBackTarget: BackTarget = { path: "/calendario", label: "Voltar para o Calendário" };
const categories = Object.keys(categoryStyles) as DayCategory[];
const monoLabelClasses = "font-mono text-xs uppercase tracking-[0.06em] text-ink-soft";

export function CalendarPage() {
  const todayISO = toISODate(useNow());
  const isTripDay = allDays.some((day) => day.dateISO === todayISO);

  useEffect(() => {
    if (!isTripDay) window.scrollTo(0, 0);
  }, [isTripDay]);

  return (
    <div className="-mx-4 -mt-7">
      <h1 className="px-4 pt-7 font-serif text-[28px] font-bold leading-tight tracking-tight">Calendário</h1>
      <CategoryLegend />
      <ul className="m-0 mt-4 grid list-none grid-cols-[repeat(2,minmax(0,1fr))] gap-3 p-0 px-4">
        {allDays.map((day) => (
          <li key={day.dateISO} className="flex">
            <DayTile day={day} isToday={day.dateISO === todayISO} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoryLegend() {
  return (
    <ul className={`m-0 mt-2 flex list-none flex-wrap gap-x-[18px] gap-y-1.5 p-0 px-4 ${monoLabelClasses}`}>
      {categories.map((category) => (
        <li key={category} className="inline-flex items-center gap-1.5">
          <CategoryIcon category={category} className="h-4 w-4" />
          {categoryStyles[category].label}
        </li>
      ))}
    </ul>
  );
}

function scrollToCenter(element: HTMLElement | null) {
  element?.scrollIntoView({ block: "center" });
}

function DayTile({ day, isToday }: { day: DayData; isToday: boolean }) {
  return (
    <Link
      ref={isToday ? scrollToCenter : undefined}
      to={`/roteiro/${day.dateISO}`}
      state={{ backTarget: calendarBackTarget }}
      aria-current={isToday ? "date" : undefined}
      className={`relative flex w-full flex-col gap-1 overflow-hidden rounded-[14px] border border-line bg-cardbg py-3 pl-[17px] pr-3 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus ${
        isToday ? "shadow-today" : "shadow-day-card"
      }`}
    >
      <CategoryStripe categories={getDayCategories(day)} />
      <div className="flex items-center gap-2">
        <span className="font-serif text-[30px] font-semibold leading-none">{day.day}</span>
        <span className={`font-medium ${monoLabelClasses}`}>{formatWeekdayAbbreviation(day.dateISO)}</span>
        {isToday && <TodayBadge />}
        <DayTileIcon categories={getDayCategories(day)} />
      </div>
      <p className="text-sm font-semibold leading-[1.3]">{day.calendarTitle}</p>
      {day.split && <p className="text-xs text-ink-soft">2 roteiros</p>}
    </Link>
  );
}

function DayTileIcon({ categories }: { categories: DayCategory[] }) {
  const isSplit = categories.length > 1;

  return (
    <span className="ml-auto">
      {isSplit ? (
        <Layers className="h-[18px] w-[18px] text-ink-soft" strokeWidth={1.9} aria-hidden="true" />
      ) : (
        categories[0] && <CategoryIcon category={categories[0]} className="h-[18px] w-[18px]" />
      )}
    </span>
  );
}

function CategoryStripe({ categories }: { categories: DayCategory[] }) {
  return (
    <span aria-hidden="true" className="absolute inset-y-0 left-0 flex w-[5px] flex-col">
      {categories.map((category) => (
        <span key={category} className="flex-1" style={{ backgroundColor: categoryStyles[category].hex }} />
      ))}
    </span>
  );
}

function TodayBadge() {
  return (
    <span className="rounded-md bg-ink px-1.5 py-0.5 text-xs font-bold tracking-[0.08em] text-paper">HOJE</span>
  );
}
