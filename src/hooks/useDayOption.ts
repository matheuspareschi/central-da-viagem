import { useState } from "react";
import { applyOption, findOption, getFallbackOption, readSavedOption, saveOption } from "../lib/dayOption";
import type { DayData, DayOption } from "../types";

/**
 * Opção de roteiro de um dia com opções. A escolha com "Usar sempre" é guardada por data e vale em todo o app;
 * sem ela, a escolha vale só enquanto a tela está aberta e a pergunta volta na próxima vez.
 * Só chame com um dia que tem `options`.
 */
export function useDayOption(day: DayData) {
  const [chosenOption, setChosenOption] = useState<DayOption | undefined>(() => readSavedOption(day));
  const [fallbackOption] = useState(() => getFallbackOption(day));
  const currentOption = chosenOption ?? fallbackOption ?? day.options![0];

  function choose(optionId: string, alwaysUse: boolean) {
    const option = findOption(day, optionId);
    if (!option) return;
    setChosenOption(option);
    if (alwaysUse) saveOption(day.dateISO, option);
  }

  return {
    options: day.options ?? [],
    currentOption,
    hasChosen: chosenOption !== undefined,
    effectiveDay: applyOption(day, currentOption),
    choose,
  };
}
