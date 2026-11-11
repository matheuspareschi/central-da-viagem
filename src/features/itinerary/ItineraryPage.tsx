import { useParams } from "react-router-dom";
import type { DayData } from "../../types";
import { useDayVariant } from "../../hooks/useDayVariant";
import { useDayNavigation } from "../../hooks/useDayNavigation";
import { formatCardDate } from "../../lib/date";
import { ItineraryTopBar } from "./components";
import { VariantPicker } from "./components/VariantPicker";
import { ItineraryBody } from "./ItineraryBody";

export function ItineraryPage() {
  const { day } = useParams<{ day: string }>();
  const { dayInfo, prevDay, nextDay, navigateToDay } = useDayNavigation(day);

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

/** Corpo do dia; em dia com variantes, o seletor de versão fica logo abaixo do título. */
function DayBody({ day }: { day: DayData }) {
  const { options, selectedVariant, effectiveDay, select } = useDayVariant(day);

  return (
    <>
      {selectedVariant && options.length > 1 && <VariantPicker options={options} selected={selectedVariant} onSelect={select} />}
      <ItineraryBody key={selectedVariant?.key} dayInfo={effectiveDay} />
    </>
  );
}
