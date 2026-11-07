interface TapCheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label: string;
}

/** Caixa de marcar de 26px dentro de um alvo de toque de 44px. */
export function TapCheckbox({ checked, onToggle, label }: TapCheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onToggle}
      className="flex h-11 w-11 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-citrus"
    >
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
    </button>
  );
}
