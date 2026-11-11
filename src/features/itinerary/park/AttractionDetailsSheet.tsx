import { BottomSheet, DetailSections, IconBadge } from "../../../components";
import type { ChecklistEntry } from "../../../lib/parkChecklist";

interface AttractionDetailsSheetProps {
  entry: ChecklistEntry;
  isDone: boolean;
  onToggleDone: () => void;
  onRemove: () => void;
  onClose: () => void;
}

export function AttractionDetailsSheet({ entry, isDone, onToggleDone, onRemove, onClose }: AttractionDetailsSheetProps) {
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
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={onToggleDone}
            className="min-h-[50px] w-full rounded-xl bg-ink text-[15px] font-semibold text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus"
          >
            {isDone ? "Desmarcar como feita" : "Marcar como feita"}
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="min-h-11 w-full rounded-xl text-sm font-semibold text-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus"
          >
            Remover do roteiro
          </button>
        </div>
      }
    >
      <DetailSections sections={entry.sections} />
    </BottomSheet>
  );
}
