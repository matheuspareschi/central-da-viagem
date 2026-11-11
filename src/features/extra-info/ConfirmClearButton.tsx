import { useState } from "react";

const buttonClasses = "min-h-11 rounded-xl border border-line px-3.5 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-citrus";

interface ConfirmClearButtonProps {
  onConfirm: () => void;
  disabled: boolean;
  question: string;
}

/** "Desmarcar tudo" discreto que pede confirmação antes de agir. */
export function ConfirmClearButton({ onConfirm, disabled, question }: ConfirmClearButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  function confirm() {
    onConfirm();
    setIsConfirming(false);
  }

  if (!isConfirming) {
    return (
      <button type="button" onClick={() => setIsConfirming(true)} disabled={disabled} className={`${buttonClasses} text-ink-soft disabled:opacity-40`}>
        Desmarcar tudo
      </button>
    );
  }

  return (
    <>
      <span className="text-sm text-ink">{question}</span>
      <button type="button" onClick={confirm} className={buttonClasses}>
        Desmarcar
      </button>
      <button type="button" onClick={() => setIsConfirming(false)} className={buttonClasses}>
        Cancelar
      </button>
    </>
  );
}
