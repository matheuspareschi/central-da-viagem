import { useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown, ChevronRight, Plus } from "lucide-react";
import { IconBadge, TapCheckbox } from "../../../components";
import type { ChecklistEntry } from "../../../lib/parkChecklist";
import type { ChecklistItem } from "../../../types";
import { AddAttractionSheet } from "./AddAttractionSheet";
import { AttractionDetailsSheet } from "./AttractionDetailsSheet";
import { useParkChecklist } from "./useParkChecklist";

interface ParkChecklistProps {
  storageId: string;
  items: ChecklistItem[];
  parkId?: string;
}

const toolbarButtonClasses =
  "flex min-h-11 items-center gap-1.5 rounded-xl border-[1.5px] bg-transparent px-3.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus";

/**
 * Checklist de atrações de um dia de parque: marcar o que foi feito, abrir detalhes,
 * reordenar e incluir atrações do catálogo do parque.
 */
export function ParkChecklist({ storageId, items, parkId }: ParkChecklistProps) {
  const checklist = useParkChecklist({ storageId, items, parkId });
  const [isReordering, setIsReordering] = useState(false);
  const [detailsEntryId, setDetailsEntryId] = useState<string | null>(null);
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);

  const { entries, doneIds } = checklist;
  const doneCount = entries.filter((entry) => doneIds.has(entry.id)).length;
  const detailsEntry = entries.find((entry) => entry.id === detailsEntryId);

  return (
    <section aria-labelledby="checklist-title" className="rounded-[20px] border border-line bg-cardbg p-4">
      <div className="flex items-baseline justify-between gap-2">
        <h3 id="checklist-title" className="font-serif text-[22px] font-bold text-ink">
          Roteiro do dia
        </h3>
        <span className="text-sm font-semibold text-citrus-text">
          {doneCount} de {entries.length}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {checklist.canAddAttractions && (
          <button type="button" onClick={() => setIsAddSheetOpen(true)} className={`${toolbarButtonClasses} border-citrus text-citrus-text`}>
            <Plus className="h-4 w-4" aria-hidden="true" />
            Adicionar atração
          </button>
        )}
        <button
          type="button"
          onClick={() => setIsReordering((current) => !current)}
          className={`${toolbarButtonClasses} border-line text-ink`}
        >
          <ArrowUpDown className="h-4 w-4" aria-hidden="true" />
          {isReordering ? "Concluir" : "Reordenar"}
        </button>
      </div>
      {isReordering && checklist.canRestoreOrder && (
        <button type="button" onClick={checklist.restoreOrder} className="mt-1 min-h-11 text-sm font-semibold text-ink-soft underline">
          Restaurar ordem original
        </button>
      )}

      <ul className="mt-2">
        {entries.map((entry, index) => (
          <ChecklistRow
            key={entry.id}
            entry={entry}
            isDone={doneIds.has(entry.id)}
            isReordering={isReordering}
            isFirst={index === 0}
            isLast={index === entries.length - 1}
            onToggleDone={() => checklist.toggleDone(entry.id)}
            onOpenDetails={() => setDetailsEntryId(entry.id)}
            onMove={(offset) => checklist.move(entry.id, offset)}
          />
        ))}
      </ul>

      {detailsEntry && (
        <AttractionDetailsSheet
          entry={detailsEntry}
          isDone={doneIds.has(detailsEntry.id)}
          onToggleDone={() => checklist.toggleDone(detailsEntry.id)}
          onClose={() => setDetailsEntryId(null)}
        />
      )}
      {isAddSheetOpen && (
        <AddAttractionSheet
          catalog={checklist.catalog}
          options={checklist.addableAttractions}
          isIncluded={checklist.isIncluded}
          onInclude={checklist.include}
          onExclude={checklist.exclude}
          onClose={() => setIsAddSheetOpen(false)}
        />
      )}
    </section>
  );
}

interface ChecklistRowProps {
  entry: ChecklistEntry;
  isDone: boolean;
  isReordering: boolean;
  isFirst: boolean;
  isLast: boolean;
  onToggleDone: () => void;
  onOpenDetails: () => void;
  onMove: (offset: -1 | 1) => void;
}

function ChecklistRow({ entry, isDone, isReordering, isFirst, isLast, onToggleDone, onOpenDetails, onMove }: ChecklistRowProps) {
  const label = (
    <>
      <IconBadge name={entry.icon} />
      <span className="min-w-0 flex-1">
        <span className={`block text-base font-semibold text-ink ${isDone ? "line-through" : ""}`}>{entry.name}</span>
        {entry.subtitle && <span className="block text-xs text-ink-soft">{entry.subtitle}</span>}
      </span>
    </>
  );

  return (
    <li className="flex items-center gap-1 border-b border-dashed border-line py-1 last:border-b-0">
      <TapCheckbox checked={isDone} onToggle={onToggleDone} label={isDone ? `Desmarcar ${entry.name}` : `Marcar ${entry.name}`} />
      {isReordering ? (
        <>
          <div className="flex min-h-11 min-w-0 flex-1 items-center gap-2.5 text-left">{label}</div>
          <MoveButton direction="up" disabled={isFirst} name={entry.name} onClick={() => onMove(-1)} />
          <MoveButton direction="down" disabled={isLast} name={entry.name} onClick={() => onMove(1)} />
        </>
      ) : (
        <button
          type="button"
          onClick={onOpenDetails}
          className="flex min-h-11 min-w-0 flex-1 items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-citrus"
        >
          {label}
          <ChevronRight className="h-5 w-5 shrink-0 text-ink-soft" aria-hidden="true" />
        </button>
      )}
    </li>
  );
}

interface MoveButtonProps {
  direction: "up" | "down";
  disabled: boolean;
  name: string;
  onClick: () => void;
}

function MoveButton({ direction, disabled, name, onClick }: MoveButtonProps) {
  const Icon = direction === "up" ? ArrowUp : ArrowDown;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={`Mover ${name} para ${direction === "up" ? "cima" : "baixo"}`}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-paper-inset text-ink disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-citrus"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
