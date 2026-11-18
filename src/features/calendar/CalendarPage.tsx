import { useEffect } from "react";
import { Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { CategoryIcon, SpecialDayIcon, type BackTarget } from "../../components";
import { categoryStyles } from "../../data/presentation/categoryStyles";
import { narcizoStyle } from "../../data/presentation/narcizoStyle";
import { isNarcizoDay } from "../../data/narcizo/types";
import { useNarcizoMode } from "../../hooks/useNarcizoMode";
import { useNow } from "../../hooks/useNow";
import { useTripDays } from "../../hooks/useTripDays";
import { getDayCategories } from "../../lib/dayCategories";
import { formatWeekdayAbbreviation, toISODate } from "../../lib/date";
import { applyOption, readSavedOption } from "../../lib/dayOption";
import type { DayCategory, DayData, IconName } from "../../types";
import { NarcizoToggle } from "./NarcizoToggle";

const calendarBackTarget: BackTarget = { path: "/calendario", label: "Voltar para o Calendário" };
const categories = Object.keys(categoryStyles) as DayCategory[];
const monoLabelClasses = "font-mono text-xs uppercase tracking-[0.06em] text-ink-soft";

export function CalendarPage() {
  const todayISO = toISODate(useNow());
  const { isEnabled: isNarcizoEnabled } = useNarcizoMode();
  const { days } = useTripDays();
  const isTripDay = days.some((day) => day.dateISO === todayISO);
  const mainDays = days.filter((day) => !isNarcizoDay(day));
  const narcizoDays = days.filter(isNarcizoDay);

  useEffect(() => {
    if (!isTripDay) window.scrollTo(0, 0);
  }, [isTripDay]);

  return (
    <div className="-mx-4 -mt-7">
      <h1 className="px-4 pt-7 font-serif text-[28px] font-bold leading-tight tracking-tight">Calendário</h1>
      <CategoryLegend showsNarcizo={isNarcizoEnabled} />
      <ul className="m-0 mt-4 grid list-none grid-cols-[repeat(2,minmax(0,1fr))] gap-3 p-0 px-4">
        {mainDays.map((day) => (
          <DayTileItem key={day.dateISO} day={day} todayISO={todayISO} />
        ))}
        <li className="col-span-2 -mt-1 flex justify-end">
          <NarcizoToggle />
        </li>
        {narcizoDays.map((day) => (
          <DayTileItem key={day.dateISO} day={day} todayISO={todayISO} />
        ))}
      </ul>
    </div>
  );
}

function DayTileItem({ day, todayISO }: { day: DayData; todayISO: string }) {
  return (
    <li className="flex">
      <DayTile day={day} isToday={day.dateISO === todayISO} />
    </li>
  );
}

function CategoryLegend({ showsNarcizo }: { showsNarcizo: boolean }) {
  return (
    <ul className={`m-0 mt-2 flex list-none flex-wrap gap-x-[18px] gap-y-1.5 p-0 px-4 ${monoLabelClasses}`}>
      {categories.map((category) => (
        <li key={category} className="inline-flex items-center gap-1.5">
          <CategoryIcon category={category} className="h-4 w-4" />
          {categoryStyles[category].label}
        </li>
      ))}
      {showsNarcizo && (
        <li className="inline-flex items-center gap-1.5">
          <span aria-hidden="true" className="h-4 w-[5px] rounded-full" style={{ backgroundColor: narcizoStyle.hex }} />
          {narcizoStyle.label}
        </li>
      )}
    </ul>
  );
}

function scrollToCenter(element: HTMLElement | null) {
  element?.scrollIntoView({ block: "center" });
}

const CHOOSE_OPTION_HINT = "Escolha o roteiro";

/** Dia com opções mostra a opção escolhida (guardada com "Usar sempre"); sem escolha, pede para escolher. */
function DayTile({ day: scheduledDay, isToday }: { day: DayData; isToday: boolean }) {
  const savedOption = scheduledDay.options && readSavedOption(scheduledDay);
  const day = savedOption ? applyOption(scheduledDay, savedOption) : scheduledDay;
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
      <SideStripe colors={stripeColors(day)} />
      <div className="flex items-center gap-2">
        <span className="font-serif text-[30px] font-semibold leading-none">{day.day}</span>
        <span className={`font-medium ${monoLabelClasses}`}>{formatWeekdayAbbreviation(day.dateISO)}</span>
        {isToday && <TodayBadge />}
        <DayTileIcon categories={getDayCategories(day)} specialIcon={day.specialIcon} />
      </div>
      <p className="text-sm font-semibold leading-[1.3] [overflow-wrap:anywhere]">{savedOption ? (savedOption.calendarTitle ?? savedOption.label) : day.calendarTitle}</p>
      {isNarcizoDay(day) && <CityBadge city={day.cidade} />}
      {day.options && !savedOption && <p className="text-xs text-ink-soft">{CHOOSE_OPTION_HINT}</p>}
    </Link>
  );
}

function DayTileIcon({ categories, specialIcon }: { categories: DayCategory[]; specialIcon?: IconName }) {
  const isSplit = categories.length > 1;
  if (specialIcon) return <span className="ml-auto"><SpecialDayIcon name={specialIcon} className="h-[18px] w-[18px]" /></span>;

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

/** Dia da família Narcizo tem barra própria; os demais usam a cor da categoria (duas, no dia dividido). */
function stripeColors(day: DayData): string[] {
  if (isNarcizoDay(day)) return [narcizoStyle.hex];
  return getDayCategories(day).map((category) => categoryStyles[category].hex);
}

function SideStripe({ colors }: { colors: string[] }) {
  return (
    <span aria-hidden="true" className="absolute inset-y-0 left-0 flex w-[5px] flex-col">
      {colors.map((color) => (
        <span key={color} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}

function CityBadge({ city }: { city: string }) {
  return (
    <span className="mt-0.5 self-start rounded-md bg-narcizo-tint px-1.5 py-0.5 font-mono text-xs uppercase tracking-[0.06em] text-narcizo-text">
      {city}
    </span>
  );
}

function TodayBadge() {
  return (
    <span className="rounded-md bg-ink px-1.5 py-0.5 text-xs font-bold tracking-[0.08em] text-paper">HOJE</span>
  );
}
