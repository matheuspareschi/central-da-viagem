import { useState } from "react";
import { BottomSheet, TapCheckbox } from "../../components";
import type { DayOption } from "../../types";

interface OptionSheetProps {
  title: string;
  options: DayOption[];
  /** Opção que já vem marcada: a atual, a última escolha ou a padrão do dia. */
  preselectedId: string;
  onConfirm: (optionId: string, alwaysUse: boolean) => void;
  onClose: () => void;
}

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus";

function OptionRadioCard({ option, checked, onSelect }: { option: DayOption; checked: boolean; onSelect: () => void }) {
  return (
    <label className="flex min-h-16 cursor-pointer items-center gap-3 rounded-[14px] border border-line px-3 py-2 text-ink has-[:checked]:border-citrus has-[:checked]:bg-citrus-tint has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-citrus">
      <input type="radio" name="day-option" value={option.id} checked={checked} onChange={onSelect} className="h-5 w-5 shrink-0 accent-[#c1481f]" />
      <span className="flex min-w-0 flex-col">
        <span className="text-base font-semibold leading-tight [overflow-wrap:anywhere]">{option.label}</span>
        <span className="text-[13px] leading-snug text-ink-soft [overflow-wrap:anywhere]">{option.supportLine}</span>
      </span>
    </label>
  );
}

/** Folha de escolha do roteiro do dia: uma opção por cartão (rádio) e a caixa "Usar sempre esta opção neste dia". */
export function OptionSheet({ title, options, preselectedId, onConfirm, onClose }: OptionSheetProps) {
  const [selectedId, setSelectedId] = useState(preselectedId);
  const [alwaysUse, setAlwaysUse] = useState(true);

  return (
    <BottomSheet
      title={title}
      onClose={onClose}
      header={<h3 className="font-serif text-xl font-bold leading-tight text-ink">{title}</h3>}
      footer={
        <div className="flex flex-col gap-2">
          <TapCheckbox checked={alwaysUse} onToggle={() => setAlwaysUse(!alwaysUse)} label="Usar sempre esta opção neste dia">
            <span className="text-[15px] font-semibold text-ink">Usar sempre esta opção neste dia</span>
          </TapCheckbox>
          <button
            type="button"
            onClick={() => onConfirm(selectedId, alwaysUse)}
            className={`min-h-[50px] rounded-[14px] bg-ink text-base font-semibold text-paper ${focusRing}`}
          >
            Ver este roteiro
          </button>
        </div>
      }
    >
      <div role="radiogroup" aria-label={title} className="flex flex-col gap-2">
        {options.map((option) => (
          <OptionRadioCard key={option.id} option={option} checked={option.id === selectedId} onSelect={() => setSelectedId(option.id)} />
        ))}
      </div>
    </BottomSheet>
  );
}
