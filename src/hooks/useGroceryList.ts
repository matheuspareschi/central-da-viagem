import { useState } from "react";
import { baseGroceryItems, GROCERY_CHECKED_STORAGE_KEY, GROCERY_CUSTOM_STORAGE_KEY, type GroceryItem } from "../data/listaMercado";
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
    remove: (id: string) => save(items.filter((item) => item.id !== id)),
  };
}

/** Itens base + incluídos pelo usuário, o que está marcado e quantos já estão no carrinho. */
export function useGroceryList() {
  const checked = useLocalStorageSet(GROCERY_CHECKED_STORAGE_KEY);
  const custom = useCustomGroceryItems();
  const items = [...baseGroceryItems, ...custom.items];
  const checkedCount = items.filter((item) => checked.set.has(item.id)).length;

  return {
    items,
    customIds: new Set(custom.items.map((item) => item.id)),
    checked,
    checkedCount,
    addItem: custom.add,
    removeItem: (id: string) => {
      custom.remove(id);
      checked.replace(checked.items.filter((checkedId) => checkedId !== id));
    },
  };
}
