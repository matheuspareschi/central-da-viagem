import { useState } from "react";
import { applyVariant, findVariant, variantStorageKey } from "../lib/dayVariant";
import { readStorage, writeStorage } from "../lib/storage";
import type { DayData, ItineraryVariant } from "../types";

/** Versão escolhida do roteiro de um dia com variantes (ex.: com ou sem Daily Dealz), salva por dia no aparelho. */
export function useDayVariant(day: DayData) {
  const [selectedKey, setSelectedKey] = useState(() => readStorage<string>(variantStorageKey(day.dateISO), ""));
  const selectedVariant: ItineraryVariant | undefined = findVariant(day, selectedKey);

  function select(variantKey: string) {
    setSelectedKey(variantKey);
    writeStorage(variantStorageKey(day.dateISO), variantKey);
  }

  return {
    options: day.variants?.options ?? [],
    selectedVariant,
    effectiveDay: applyVariant(day, selectedKey),
    select,
  };
}
