import { useEffect, useState } from "react";
import { readStorage, writeStorage } from "../lib/storage";

export function useLocalStorageSet(storageKey: string, initial: string[] = []) {
  const [items, setItems] = useState<string[]>(() => readStorage(storageKey, initial));

  useEffect(() => {
    setItems(readStorage(storageKey, initial));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const set = new Set(items);

  function toggle(id: string) {
    const next = set.has(id) ? items.filter((i) => i !== id) : [...items, id];
    setItems(next);
    writeStorage(storageKey, next);
  }

  function replace(next: string[]) {
    setItems(next);
    writeStorage(storageKey, next);
  }

  return { items, set, toggle, replace };
}
