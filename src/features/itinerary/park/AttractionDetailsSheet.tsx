import { BottomSheet, DetailSections, IconBadge } from "../../../components";
import type { ChecklistEntry } from "../../../lib/parkChecklist";

interface AttractionDetailsSheetProps {
  entry: ChecklistEntry;
  isDone: boolean;
  onToggleDone: () => void;
  onClose: () => void;
}

export function AttractionDetailsSheet({ entry, isDone, onToggleDone, onClose }: AttractionDetailsSheetProps) {
  return (
    <BottomSheet
      title={entry.name}
      onClose={onClose}
      header={
        <div className="flex items-center gap-2.5">
          <IconBadge name={entry.icon} />
          <div className="min-w-0">
            <h3 className="font-serif text-xl font-bold leading-tight text-ink">{entry.name}</h3>
            {entry.subtitle && <p className="text-xs text-ink-soft">{entry.subtitle}</p>}
          </div>
        </div>
      }
      footer={
        <button
          type="button"
          onClick={onToggleDone}
          className="min-h-[50px] w-full rounded-xl bg-ink text-[15px] font-semibold text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus"
        >
          {isDone ? "Desmarcar como feita" : "Marcar como feita"}
        </button>
      }
    >
      <DetailSections sections={entry.sections} />
    </BottomSheet>
  );
}
