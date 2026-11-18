import { useEffect, useRef } from "react";

interface UndoToastProps {
  message: string;
  onUndo: () => void;
  /** Chamado quando o tempo para desfazer acaba. */
  onDismiss: () => void;
}

const UNDO_WINDOW_MS = 5000;

/** Aviso curto sobre a barra de navegação, com "Desfazer" por alguns segundos. Troque a `key` para reiniciar o tempo. */
export function UndoToast({ message, onUndo, onDismiss }: UndoToastProps) {
  const onDismissRef = useRef(onDismiss);
  useEffect(() => {
    onDismissRef.current = onDismiss;
  });

  useEffect(() => {
    const timer = setTimeout(() => onDismissRef.current(), UNDO_WINDOW_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div role="status" className="fixed inset-x-4 bottom-[calc(var(--spacing-bottom-nav)+env(safe-area-inset-bottom)+0.75rem)] z-40 mx-auto flex max-w-[448px] items-center justify-between gap-3 rounded-xl bg-ink px-4 py-2 text-sm text-paper shadow-sheet">
      <span className="min-w-0 [overflow-wrap:anywhere]">{message}</span>
      <button type="button" onClick={onUndo} className="min-h-11 shrink-0 px-2 font-bold text-advent-gold focus-visible:outline-2 focus-visible:outline-citrus">
        Desfazer
      </button>
    </div>
  );
}
