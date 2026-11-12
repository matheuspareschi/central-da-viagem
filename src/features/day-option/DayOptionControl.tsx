import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SWITCH_OPTION_TITLE } from "../../lib/dayOption";
import type { DayOption } from "../../types";
import { OptionSheet } from "./OptionSheet";

interface DayOptionControlProps {
  options: DayOption[];
  currentOption: DayOption;
  /** Pergunta que a folha faz quando abre sozinha; vazio quando ela só abre pelo botão. */
  openingQuestion?: string;
  onChoose: (optionId: string, alwaysUse: boolean) => void;
  className?: string;
}

type SheetMode = "question" | "switch" | null;

/**
 * Botão "Variação: <rótulo> ▾" que abre a folha de escolha. Com `openingQuestion`, a folha já abre
 * com a pergunta; fechá-la sem escolher mantém a opção atual e não salva nada.
 */
export function DayOptionControl({ options, currentOption, openingQuestion, onChoose, className = "" }: DayOptionControlProps) {
  const [sheetMode, setSheetMode] = useState<SheetMode>(openingQuestion ? "question" : null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (wasOpen.current && sheetMode === null) buttonRef.current?.focus();
    wasOpen.current = sheetMode !== null;
  }, [sheetMode]);

  function confirm(optionId: string, alwaysUse: boolean) {
    onChoose(optionId, alwaysUse);
    setSheetMode(null);
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setSheetMode("switch")}
        aria-haspopup="dialog"
        className={`flex min-h-11 max-w-full items-center gap-1.5 rounded-xl border border-line bg-cardbg px-3 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus ${className}`}
      >
        <span className="min-w-0 [overflow-wrap:anywhere]">Variação: {currentOption.label}</span>
        <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
      </button>
      {sheetMode && (
        <OptionSheet
          title={sheetMode === "question" && openingQuestion ? openingQuestion : SWITCH_OPTION_TITLE}
          options={options}
          preselectedId={currentOption.id}
          onConfirm={confirm}
          onClose={() => setSheetMode(null)}
        />
      )}
    </>
  );
}
