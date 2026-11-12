import { useLayoutEffect } from "react";
import { useNavigationType, useParams } from "react-router-dom";
import type { DayData } from "../../types";
import { useDayNavigation } from "../../hooks/useDayNavigation";
import { useDayOption } from "../../hooks/useDayOption";
import { useNow } from "../../hooks/useNow";
import { formatCardDate, toISODate } from "../../lib/date";
import { optionQuestion } from "../../lib/dayOption";
import { takeScrollForReturn } from "../../lib/scrollReturn";
import { DayOptionControl } from "../day-option";
import { ItineraryTopBar } from "./components";
import { ItineraryBody } from "./ItineraryBody";

export function ItineraryPage() {
  const { day } = useParams<{ day: string }>();
  const { dayInfo, prevDay, nextDay, navigateToDay } = useDayNavigation(day);

  useRestoredScroll(dayInfo?.dateISO);

  if (!dayInfo) return null; // redirecionando pra Home, ver useDayNavigation

  return (
    <div>
      <ItineraryTopBar prevDay={prevDay} nextDay={nextDay} onNavigate={navigateToDay} />
      <p className="mt-3 text-xs font-bold uppercase tracking-widest text-ink-soft">{formatCardDate(dayInfo.dateISO)}</p>
      <h1 className="mt-1 font-serif text-[28px] font-bold text-ink">Roteiro do dia {dayInfo.day}</h1>
      <DayBody key={dayInfo.dateISO} day={dayInfo} />
    </div>
  );
}

/** Voltando de um atalho (ex.: Extras), devolve a rolagem em que o dia estava. */
function useRestoredScroll(dateISO: string | undefined) {
  const isReturning = useNavigationType() === "POP";
  useLayoutEffect(() => {
    if (!isReturning || !dateISO) return;
    const scrollY = takeScrollForReturn(`/roteiro/${dateISO}`);
    if (scrollY !== undefined) window.scrollTo(0, scrollY);
  }, [isReturning, dateISO]);
}

/** Corpo do dia; em dia com opções, o botão de variação fica logo abaixo do título. */
function DayBody({ day }: { day: DayData }) {
  return day.options ? <DayWithOptions day={day} /> : <ItineraryBody dayInfo={day} />;
}

function DayWithOptions({ day }: { day: DayData }) {
  const { options, currentOption, hasChosen, effectiveDay, choose } = useDayOption(day);
  const todayISO = toISODate(useNow());

  return (
    <>
      <DayOptionControl
        options={options}
        currentOption={currentOption}
        openingQuestion={hasChosen ? undefined : optionQuestion(day.dateISO, todayISO)}
        onChoose={choose}
        className="mt-3"
      />
      <ItineraryBody key={currentOption.id} dayInfo={effectiveDay} />
    </>
  );
}
