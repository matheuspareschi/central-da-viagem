interface NumberFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (text: string) => void;
  /** Unidade à direita (ex.: lb) ou prefixo à esquerda (ex.: US$). */
  unit?: string;
  unitPosition?: "prefix" | "suffix";
  hint?: string;
  error?: string;
}

/** Campo decimal com rótulo visível, 52px de altura e número em Fraunces. */
export function NumberField({ id, label, value, onChange, unit, unitPosition = "suffix", hint, error }: NumberFieldProps) {
  const messageId = `${id}-message`;
  const message = error ?? hint;
  const unitElement = unit && <span className="shrink-0 font-mono text-sm text-ink-soft">{unit}</span>;

  return (
    <div className="min-w-0 flex-1">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <div
        className={`mt-1 flex h-13 items-center gap-2 rounded-xl border bg-paper-inset px-3 focus-within:outline-2 focus-within:outline-citrus ${
          error ? "border-emergency" : "border-line"
        }`}
      >
        {unitPosition === "prefix" && unitElement}
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          className="min-w-0 flex-1 bg-transparent font-serif text-2xl font-semibold text-ink outline-none"
        />
        {unitPosition === "suffix" && unitElement}
      </div>
      {message && (
        <p id={messageId} className={`mt-1 text-xs ${error ? "font-semibold text-emergency" : "text-ink-soft"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export function ClearButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-3 min-h-11 rounded-xl border border-line px-4 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-citrus"
    >
      Limpar
    </button>
  );
}
