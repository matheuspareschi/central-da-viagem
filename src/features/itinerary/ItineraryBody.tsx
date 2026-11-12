import { listDayTracks } from "../../lib/dayTracks";
import type { DayData } from "../../types";
import { TrackView } from "./TrackView";

function EmptyItinerary() {
  return (
    <div className="mt-6 rounded-xl border border-dashed border-ink/15 bg-cardbg px-6 py-16 text-center text-sm text-ink-soft">
      Roteiro deste dia ainda não fechado.
    </div>
  );
}

/** Todas as trilhas do dia, uma abaixo da outra (num dia com opções, só as da opção escolhida). */
export function ItineraryBody({ dayInfo }: { dayInfo: DayData }) {
  const tracks = listDayTracks(dayInfo);
  if (tracks.length === 0) return <EmptyItinerary />;

  return (
    <>
      {tracks.map((track) => (
        <TrackView key={track.key} dateISO={dayInfo.dateISO} track={track} />
      ))}
    </>
  );
}
