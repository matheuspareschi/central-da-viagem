import { useState } from "react";
import { convertTyped, kgParaLb, lbParaKg } from "../../utils/weight";
import { ClearButton, NumberField } from "./NumberField";

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
      <div className="flex items-end gap-2">
        <NumberField id="weight-pounds" label="Libras (lb)" value={pounds} onChange={typePounds} unit="lb" />
        <span aria-hidden="true" className="flex h-13 shrink-0 items-center text-xl text-ink-soft">
          ⇄
        </span>
        <NumberField id="weight-kilograms" label="Quilos (kg)" value={kilograms} onChange={typeKilograms} unit="kg" />
      </div>
      <ClearButton onClick={clear} />
      <p className="mt-3 text-xs text-ink-soft">Referência: 50 lb ≈ 22,7 kg</p>
    </div>
  );
}
