import type { ReactNode } from "react";

interface TapCheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label: string;
  /** Com conteúdo, a linha inteira (caixa + texto) vira o alvo de toque. */
  children?: ReactNode;
}

function CheckMark({ checked }: { checked: boolean }) {
  return (
    <span
      className={`flex h-[26px] w-[26px] items-center justify-center rounded-[9px] border-[1.5px] ${
        checked ? "border-citrus bg-citrus-tint" : "border-ink/55 bg-cardbg"
      }`}
    >
      {checked && (
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-citrus-text" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 8.5 6.3 12 13 4" />
        </svg>
      )}
    </span>
  );
}

/** Caixa de marcar de 26px dentro de um alvo de toque de 44px. */
export function TapCheckbox({ checked, onToggle, label, children }: TapCheckboxProps) {
  const layoutClasses = children ? "min-h-12 min-w-0 flex-1 gap-1 text-left" : "h-11 w-11 justify-center";

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onToggle}
      className={`flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-citrus ${layoutClasses}`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center">
        <CheckMark checked={checked} />
      </span>
      {children}
    </button>
  );
}
