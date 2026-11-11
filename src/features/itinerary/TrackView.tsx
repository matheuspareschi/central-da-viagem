import type { DayTrack } from "../../lib/dayTracks";
import { ParkChecklist } from "./park/ParkChecklist";
import { JourneyCard, TrackHeader } from "./components";
import { ScheduleView } from "./schedule/ScheduleView";

interface TrackViewProps {
  dateISO: string;
  track: DayTrack;
}

/** Uma trilha do dia: título, resumo, "Horários e trajeto" e o checklist ou cronograma. */
export function TrackView({ dateISO, track }: TrackViewProps) {
  const { title, category, extras, content, storageId } = track;

  return (
    <div>
      <TrackHeader title={title} category={category} group={extras.group} summary={extras.summary} />
      <JourneyCard journey={extras.journey} category={category} />
      <div className="mt-5">
        {content.mode === "checklist" ? (
          <ParkChecklist key={storageId} storageId={storageId} dateISO={dateISO} trackKey={track.key} items={content.attractions} parkId={extras.parkId} />
        ) : (
          <ScheduleView key={storageId} dateISO={dateISO} periods={content.periods} cards={content.cards} />
        )}
      </div>
    </div>
  );
}
