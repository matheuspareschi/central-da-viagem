import { useSyncExternalStore } from "react";
import { readStorage, writeStorage } from "../../../lib/storage";

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Estacionamento escolhido numa parada, guardado só no aparelho. A linha do cronograma e a folha de detalhes
 * leem a mesma escolha; escolher o mesmo de novo desfaz a escolha.
 */
export function useParkingChoice(cardId: string) {
  const storageKey = `parking-choice-${cardId}`;
  const chosenId = useSyncExternalStore(
    subscribe,
    () => readStorage<string | null>(storageKey, null),
    () => null,
  );

  function toggle(optionId: string) {
    writeStorage(storageKey, chosenId === optionId ? null : optionId);
    listeners.forEach((listener) => listener());
  }

  return { chosenId, toggle };
}

export type ParkingChoice = ReturnType<typeof useParkingChoice>;
