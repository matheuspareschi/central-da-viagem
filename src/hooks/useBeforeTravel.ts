import { BEFORE_TRAVEL_STORAGE_KEY, beforeTravelItems } from "../data/global/beforeTravel";
import { useLocalStorageSet } from "./useLocalStorageSet";
import { usePedagio } from "./usePedagio";

/** Itens de "Antes de viajar" e quantos ainda faltam fazer (inclui o Visitor Toll Pass, que vem dos passos do Pedágio). */
export function useBeforeTravel() {
  const done = useLocalStorageSet(BEFORE_TRAVEL_STORAGE_KEY);
  const toll = usePedagio();
  const pendingOwnItems = beforeTravelItems.filter((item) => !done.set.has(item.id)).length;
  const pendingCount = pendingOwnItems + (toll.isPreTripDone ? 0 : 1);
  return { items: beforeTravelItems, done, toll, pendingCount };
}
