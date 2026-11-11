import { BEFORE_TRAVEL_STORAGE_KEY, beforeTravelItems } from "../data/global/beforeTravel";
import { useLocalStorageSet } from "./useLocalStorageSet";

/** Itens de "Antes de viajar" e quantos ainda faltam fazer. */
export function useBeforeTravel() {
  const done = useLocalStorageSet(BEFORE_TRAVEL_STORAGE_KEY);
  const pendingCount = beforeTravelItems.filter((item) => !done.set.has(item.id)).length;
  return { items: beforeTravelItems, done, pendingCount };
}
