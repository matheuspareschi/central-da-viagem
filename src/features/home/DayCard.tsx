import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CategoryIcon } from "../../components";
import { useDayOption } from "../../hooks/useDayOption";
import { useNow } from "../../hooks/useNow";
import { describeParkSchedule, getDayCardContent, type DayCardContent, type DayCardStop } from "../../lib/dayCard";
import { getDayCategories } from "../../lib/dayCategories";
import { formatCardDate, toISODate } from "../../lib/date";
import { optionQuestion } from "../../lib/dayOption";
import type { DayCategory, DayData, ParkVisit } from "../../types";
import { DayOptionControl, OptionQuestionCard } from "../day-option";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus";
const cardClasses = "rounded-[22px] border border-line bg-cardbg p-5 text-ink shadow-card";

/** Cartão do dia na Home: o cartão inteiro leva ao roteiro do dia. */
export function DayCard({ day }: { day: DayData }) {
  return day.options ? <DayWithOptionsCard day={day} /> : <SingleDayCard day={day} />;
}

function SingleDayCard({ day }: { day: DayData }) {
  const [category] = getDayCategories(day);

  return (
    <Link to={`/roteiro/${day.dateISO}`} className={`block ${cardClasses} ${focusRing}`}>
      <DateLine dateISO={day.dateISO} category={category} />
      <DayContent dayNumber={day.day} content={getDayCardContent(day)} />
      <OpenItineraryButton />
    </Link>
  );
}

/** Dia com opções: a pergunta enquanto não há escolha; depois, o roteiro da opção com o botão de variação no alto. */
function DayWithOptionsCard({ day }: { day: DayData }) {
  const { options, currentOption, hasChosen, effectiveDay, choose } = useDayOption(day);
  const todayISO = toISODate(useNow());

  if (!hasChosen) {
    return <OptionQuestionCard question={optionQuestion(day.dateISO, todayISO)} options={options} onChoose={(optionId) => choose(optionId, true)} />;
  }

  const [category] = getDayCategories(effectiveDay);
  return (
    <section aria-label="Hoje" className={cardClasses}>
      <DateLine dateISO={day.dateISO} category={category} />
      <DayOptionControl options={options} currentOption={currentOption} onChoose={choose} className="mt-3" />
      <Link to={`/roteiro/${day.dateISO}`} className={`block ${focusRing}`}>
        <DayContent dayNumber={day.day} content={getDayCardContent(effectiveDay)} />
        <OpenItineraryButton />
      </Link>
    </section>
  );
}

function DateLine({ dateISO, category }: { dateISO: string; category?: DayCategory }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">{formatCardDate(dateISO)}</p>
      {category && <CategoryIcon category={category} />}
    </div>
  );
}

function DayContent({ dayNumber, content }: { dayNumber: number; content: DayCardContent }) {
  return (
    <div className="mt-2.5 flex items-center gap-[18px]">
      <DayNumber value={dayNumber} />
      <DayCardBody content={content} />
    </div>
  );
}

function DayNumber({ value }: { value: number }) {
  return (
    <span className="min-w-[60px] self-start font-serif text-[96px] font-semibold leading-[0.85] tracking-tighter">{value}</span>
  );
}

function DayCardBody({ content }: { content: DayCardContent }) {
  return content.kind === "park" ? <ParkSummary park={content.park} /> : <StopList stops={content.stops} />;
}

function ParkSummary({ park }: { park: ParkVisit }) {
  const schedule = describeParkSchedule(park);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1.5 self-center">
      <span className="min-w-0 font-serif text-[38px] font-bold leading-none tracking-tight [overflow-wrap:anywhere]">{park.name}</span>
      {schedule && <span className="text-sm leading-[1.35] text-ink-soft">{schedule}</span>}
    </div>
  );
}

function StopList({ stops }: { stops: DayCardStop[] }) {
  return (
    <ol className="flex min-w-0 flex-1 flex-col gap-[9px]">
      {stops.map((stop, index) => (
        <li key={stop.name} className="flex items-start gap-2.5">
          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-citrus text-xs font-bold text-citrus-text">
            {index + 1}
          </span>
          <span className="flex min-w-0 flex-col gap-px">
            <span className="text-base font-semibold leading-tight [overflow-wrap:anywhere]">{stop.name}</span>
            {stop.note && <span className="text-[13px] leading-snug text-ink-soft">{stop.note}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}

function OpenItineraryButton() {
  return (
    <span className="mt-5 flex min-h-[52px] items-center justify-center gap-2 rounded-[14px] bg-ink text-base font-semibold text-paper">
      Ver roteiro do dia
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
