import { useState } from "react";
import { baseGroceryItems, GROCERY_CHECKED_STORAGE_KEY, GROCERY_CUSTOM_STORAGE_KEY, GROCERY_REMOVED_STORAGE_KEY, type GroceryItem } from "../data/listaMercado";
import { readStorage, writeStorage } from "../lib/storage";
import { useLocalStorageSet } from "./useLocalStorageSet";

function useCustomGroceryItems() {
  const [items, setItems] = useState<GroceryItem[]>(() => readStorage(GROCERY_CUSTOM_STORAGE_KEY, []));

  function save(next: GroceryItem[]) {
    setItems(next);
    writeStorage(GROCERY_CUSTOM_STORAGE_KEY, next);
  }

  return {
    items,
    add: (name: string) => save([...items, { id: `custom-${Date.now()}`, name }]),
  };
}

/** Itens base + incluídos pelo usuário (menos os apagados), o que está marcado e quantos já estão no carrinho. */
export function useGroceryList() {
  const checked = useLocalStorageSet(GROCERY_CHECKED_STORAGE_KEY);
  const custom = useCustomGroceryItems();
  const removed = useLocalStorageSet(GROCERY_REMOVED_STORAGE_KEY);
  const items = [...baseGroceryItems, ...custom.items].filter((item) => !removed.set.has(item.id));
  const checkedCount = items.filter((item) => checked.set.has(item.id)).length;

  return {
    items,
    checked,
    checkedCount,
    addItem: custom.add,
    removeItem: (id: string) => removed.replace([...removed.items, id]),
    restoreItem: (id: string) => removed.replace(removed.items.filter((removedId) => removedId !== id)),
  };
}
