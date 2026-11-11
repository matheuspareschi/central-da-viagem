import { allTollSteps, preTripTollStepIds, TOLL_STORAGE_KEY } from "../data/pedagio";
import { useLocalStorageSet } from "./useLocalStorageSet";

/** Passos do Visitor Toll Pass marcados, e quantos dos que acontecem antes da viagem já foram feitos. */
export function usePedagio() {
  const checked = useLocalStorageSet(TOLL_STORAGE_KEY);
  const preTripDoneCount = preTripTollStepIds.filter((id) => checked.set.has(id)).length;

  return {
    checked,
    checkedCount: allTollSteps.filter((step) => checked.set.has(step.id)).length,
    totalCount: allTollSteps.length,
    preTripDoneCount,
    preTripTotalCount: preTripTollStepIds.length,
    isPreTripDone: preTripDoneCount === preTripTollStepIds.length,
  };
}
