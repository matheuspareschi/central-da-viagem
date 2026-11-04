import { useMemo } from "react";
import { parkCatalogs, type ParkCatalog } from "../../../data/parks";
import { useLocalStorageSet } from "../../../hooks/useLocalStorageSet";
import {
  isAddedEntryId,
  moveEntry,
  reconcileOrder,
  restoreOriginalOrder,
  toAddedEntry,
  toAddedEntryId,
  toDayEntry,
  type ChecklistEntry,
} from "../../../lib/parkChecklist";
import type { ChecklistItem, ParkAttraction } from "../../../types";

interface UseParkChecklistOptions {
  storageId: string;
  items: ChecklistItem[];
  parkId?: string;
}

const NO_CATALOG: ParkCatalog = { name: "", areas: [], attractions: [] };

/**
 * Estado do checklist de um dia de parque, guardado só no aparelho: o que foi feito,
 * a ordem das linhas e as atrações incluídas do catálogo.
 */
export function useParkChecklist({ storageId, items, parkId }: UseParkChecklistOptions) {
  const done = useLocalStorageSet(`checklist-marcados-${storageId}`, []);
  const order = useLocalStorageSet(`roteiro:ordem:${storageId}`, []);
  const catalog = (parkId && parkCatalogs[parkId]) || NO_CATALOG;

  const model = useMemo(() => {
    const linkedIds = new Set(items.map((item) => item.attractionId));
    const addable = catalog.attractions.filter((attraction) => !linkedIds.has(attraction.id));
    const dayEntries = items.map((item) =>
      toDayEntry(item, catalog.attractions.find((attraction) => attraction.id === item.attractionId), catalog.areas),
    );
    const addedEntries = addable.map((attraction) => toAddedEntry(attraction, catalog.areas));
    const entriesById = new Map<string, ChecklistEntry>([...dayEntries, ...addedEntries].map((entry) => [entry.id, entry]));
    return { addable, dayEntryIds: dayEntries.map((entry) => entry.id), entriesById };
  }, [items, catalog]);

  const orderedIds = reconcileOrder(order.items, model.dayEntryIds, model.addable.map((attraction) => toAddedEntryId(attraction.id)));
  const entries = orderedIds.flatMap((id) => model.entriesById.get(id) ?? []);
  const includedIds = new Set(orderedIds.filter(isAddedEntryId));
  const orderDiffersFromData = orderedIds.some((id, index) => id !== model.dayEntryIds[index]);

  return {
    entries,
    doneIds: done.set,
    toggleDone: done.toggle,
    catalog,
    addableAttractions: model.addable,
    isIncluded: (attraction: ParkAttraction) => includedIds.has(toAddedEntryId(attraction.id)),
    include: (attraction: ParkAttraction) => order.replace([...orderedIds, toAddedEntryId(attraction.id)]),
    exclude: (attraction: ParkAttraction) => order.replace(orderedIds.filter((id) => id !== toAddedEntryId(attraction.id))),
    move: (entryId: string, offset: -1 | 1) => order.replace(moveEntry(orderedIds, entryId, offset)),
    restoreOrder: () => order.replace(restoreOriginalOrder(orderedIds, model.dayEntryIds)),
    canRestoreOrder: orderDiffersFromData,
    canAddAttractions: catalog.attractions.length > 0,
  };
}
