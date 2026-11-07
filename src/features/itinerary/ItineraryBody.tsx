import { useSearchParams } from "react-router-dom";
import { TrackTabs } from "../../components";
import { useSelectedTrack } from "../../hooks/useSelectedTrack";
import { listDayTracks } from "../../lib/dayTracks";
import type { DayData, SplitTrack } from "../../types";
import { TrackView } from "./TrackView";

const TRACK_QUERY_PARAM = "trilha";

function EmptyItinerary() {
  return (
    <div className="mt-6 rounded-xl border border-dashed border-ink/15 bg-cardbg px-6 py-16 text-center text-sm text-ink-soft">
      Roteiro deste dia ainda não fechado.
    </div>
  );
}

function SplitDay({ dayInfo, splitTracks }: { dayInfo: DayData; splitTracks: SplitTrack[] }) {
  const [searchParams] = useSearchParams();
  const { selectedTrack, select } = useSelectedTrack(dayInfo.dateISO, splitTracks, searchParams.get(TRACK_QUERY_PARAM));
  const dayTrack = listDayTracks(dayInfo).find((track) => track.key === selectedTrack.key);

  return (
    <>
      <TrackTabs tracks={splitTracks} selected={selectedTrack} onSelect={select} className="mt-4" />
      {dayTrack && <TrackView key={dayTrack.key} dateISO={dayInfo.dateISO} track={dayTrack} />}
    </>
  );
}

export function ItineraryBody({ dayInfo }: { dayInfo: DayData }) {
  const { itinerary } = dayInfo;
  if (!itinerary) return <EmptyItinerary />;

  if (itinerary.kind === "split") return <SplitDay dayInfo={dayInfo} splitTracks={itinerary.tracks} />;

  const [track] = listDayTracks(dayInfo);
  return <TrackView dateISO={dayInfo.dateISO} track={track} />;
}
