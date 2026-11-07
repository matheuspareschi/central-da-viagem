const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus";

interface TrackTabsProps<Track extends { key: string; title: string }> {
  tracks: Track[];
  selected: Track;
  onSelect: (track: Track) => void;
  className?: string;
}

/** Controle segmentado que alterna entre as trilhas de um dia dividido. */
export function TrackTabs<Track extends { key: string; title: string }>({
  tracks,
  selected,
  onSelect,
  className = "",
}: TrackTabsProps<Track>) {
  return (
    <div role="tablist" aria-label="Roteiro do dia" className={`flex gap-1 rounded-[14px] bg-paper-dark p-1 ${className}`}>
      {tracks.map((track) => (
        <button
          key={track.key}
          type="button"
          role="tab"
          id={`tab-${track.key}`}
          aria-selected={track === selected}
          onClick={() => onSelect(track)}
          className={`min-h-11 flex-1 rounded-[11px] px-2 text-sm font-semibold ${focusRing} ${
            track === selected ? "bg-ink text-paper" : "text-ink"
          }`}
        >
          {track.title}
        </button>
      ))}
    </div>
  );
}
