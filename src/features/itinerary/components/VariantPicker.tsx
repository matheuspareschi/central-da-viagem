import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BottomSheet } from "../../../components";
import type { ItineraryVariant } from "../../../types";

interface VariantPickerProps {
  options: ItineraryVariant[];
  selected: ItineraryVariant;
  onSelect: (variantKey: string) => void;
}

/** Controle discreto: um botão de texto que abre uma folha com as versões do roteiro (rádio). */
export function VariantPicker({ options, selected, onSelect }: VariantPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function choose(variantKey: string) {
    onSelect(variantKey);
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        className="mt-2 flex min-h-11 items-center gap-1 text-[13px] text-ink-soft focus-visible:outline-2 focus-visible:outline-citrus"
      >
        {selected.label}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      {isOpen && (
        <BottomSheet
          title="Versão do roteiro"
          onClose={() => setIsOpen(false)}
          header={<h3 className="font-serif text-xl font-bold leading-tight text-ink">Versão do roteiro</h3>}
        >
          <div role="radiogroup" aria-label="Versão do roteiro" className="flex flex-col gap-2">
            {options.map((option) => (
              <label
                key={option.key}
                className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-line px-3 text-[15px] font-semibold text-ink has-[:checked]:border-citrus has-[:checked]:bg-citrus-tint"
              >
                <input
                  type="radio"
                  name="variant"
                  value={option.key}
                  checked={option.key === selected.key}
                  onChange={() => choose(option.key)}
                  className="h-5 w-5 accent-[#c1481f]"
                />
                {option.label}
              </label>
            ))}
          </div>
        </BottomSheet>
      )}
    </>
  );
}
