import { useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { useSheetBehavior } from "../../hooks/useSheetBehavior";

interface BottomSheetProps {
  /** Nome acessível do diálogo. */
  title: string;
  onClose: () => void;
  /** Conteúdo fixo ao lado do botão de fechar. */
  header: ReactNode;
  /** Altura máxima em % da tela. */
  maxHeightPercent?: number;
  /** Faixa fixa logo abaixo do cabeçalho (ex.: abas). */
  subheader?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

const DEFAULT_MAX_HEIGHT_PERCENT = 66;

/**
 * Folha que sobe de baixo. Monte-a só enquanto estiver aberta: o foco, o histórico
 * (botão voltar), o Esc e a trava de rolagem valem do mount ao unmount.
 */
export function BottomSheet({
  title,
  onClose,
  header,
  maxHeightPercent = DEFAULT_MAX_HEIGHT_PERCENT,
  subheader,
  footer,
  children,
}: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  useSheetBehavior(sheetRef, onClose);


  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-scrim" onClick={onClose} aria-hidden="true" />
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        style={{ maxHeight: `${maxHeightPercent}dvh` }}
        className={`relative flex w-full max-w-[480px] flex-col rounded-t-[22px] bg-cardbg shadow-sheet outline-none animate-sheet-up motion-reduce:animate-none`}
      >
        <div className="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-line" aria-hidden="true" />
        <div className="flex shrink-0 items-start gap-2 px-4 pt-2">
          <div className="min-w-0 flex-1 py-1">{header}</div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-soft focus-visible:outline-2 focus-visible:outline-citrus"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        {subheader && <div className="shrink-0 px-4 pt-1">{subheader}</div>}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-2">{children}</div>
        {footer && (
          <div className="shrink-0 border-t border-line px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3">{footer}</div>
        )}
      </div>
    </div>
  );
}
