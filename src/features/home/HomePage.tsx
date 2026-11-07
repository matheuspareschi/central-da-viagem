import { useNow } from "../../hooks/useNow";
import { toISODate } from "../../lib/date";
import { getTripPhase } from "../../lib/tripPeriod";
import { AdventCard } from "./AdventCard";
import { TodaySection } from "./TodaySection";
import { TopBar } from "./TopBar";

export function HomePage() {
  const now = useNow();

  return (
    <div className="-mt-7 flex flex-col gap-4">
      <TopBar />
      <TodaySection now={now} />
      {getTripPhase(now) !== "after" && <AdventCard dateISO={toISODate(now)} />}
    </div>
  );
}
