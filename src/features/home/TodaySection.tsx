import { Link } from "react-router-dom";
import { daysByDate } from "../../data/days";
import { toISODate } from "../../lib/date";
import { daysUntilTrip, getTripPhase } from "../../lib/tripPeriod";
import { DayCard } from "./DayCard";

const cardClasses = "rounded-[22px] border border-line bg-cardbg p-5 text-center text-ink shadow-card";

/** Cartão do dia durante a viagem; antes, a contagem regressiva; depois, o encerramento. */
export function TodaySection({ now }: { now: Date }) {
  const day = daysByDate[toISODate(now)];
  const phase = getTripPhase(now);

  if (day) return <DayCard day={day} />;
  if (phase === "before") return <Countdown days={daysUntilTrip(now)} />;
  if (phase === "after") return <TripCompleted />;
  return <p className={`${cardClasses} text-[15px] font-semibold text-ink-soft`}>Roteiro deste dia ainda não fechado</p>;
}

function Countdown({ days }: { days: number }) {
  return (
    <section aria-label="Contagem regressiva" className={cardClasses}>
      <p className="font-serif text-[80px] font-semibold leading-none">{days}</p>
      <p className="mt-1 text-[15px] font-semibold text-ink-soft">{days === 1 ? "dia para embarcar" : "dias para embarcar"}</p>
    </section>
  );
}

function TripCompleted() {
  return (
    <section aria-label="Viagem concluída" className={cardClasses}>
      <h2 className="font-serif text-[28px] font-bold leading-tight">Viagem concluída</h2>
      <p className="mt-1.5 text-base text-ink-soft">Graças a Deus.</p>
      <Link
        to="/calendario"
        className="mt-5 flex min-h-[52px] items-center justify-center rounded-[14px] bg-ink text-base font-semibold text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus"
      >
        Ver calendário
      </Link>
    </section>
  );
}
