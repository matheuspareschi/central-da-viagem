import { useState } from "react";
import { convertTyped, kgParaLb, lbParaKg } from "../../utils/weight";

const fieldClasses =
  "mt-1 min-h-11 w-full rounded-xl border border-line bg-paper-inset px-3 text-base text-ink focus-visible:outline-2 focus-visible:outline-citrus";

interface WeightFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (text: string) => void;
}

function WeightField({ id, label, value, onChange }: WeightFieldProps) {
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <input id={id} type="text" inputMode="decimal" autoComplete="off" value={value} onChange={(event) => onChange(event.target.value)} className={fieldClasses} />
    </div>
  );
}

/** Libras e quilos lado a lado: digitar em um calcula o outro na hora. */
export function WeightConverter() {
  const [pounds, setPounds] = useState("");
  const [kilograms, setKilograms] = useState("");

  function typePounds(text: string) {
    setPounds(text);
    setKilograms(convertTyped(text, lbParaKg));
  }

  function typeKilograms(text: string) {
    setKilograms(text);
    setPounds(convertTyped(text, kgParaLb));
  }

  function clear() {
    setPounds("");
    setKilograms("");
  }

  return (
    <div>
      <div className="flex gap-3">
        <WeightField id="weight-pounds" label="Libras (lb)" value={pounds} onChange={typePounds} />
        <WeightField id="weight-kilograms" label="Quilos (kg)" value={kilograms} onChange={typeKilograms} />
      </div>
      <button
        type="button"
        onClick={clear}
        className="mt-3 min-h-11 rounded-xl border border-line px-4 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-citrus"
      >
        Limpar
      </button>
    </div>
  );
}
