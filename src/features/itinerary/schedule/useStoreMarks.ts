import { useLocalStorageSet } from "../../../hooks/useLocalStorageSet";
import { summarizeStores } from "../../../lib/stores";
import type { ShopRegion } from "../../../types";

/** Favoritas e visitadas de uma região de compras, guardadas só no aparelho (mesmas chaves de antes). */
export function useStoreMarks(region: ShopRegion) {
  const defaultFavoriteIds = region.stores.filter((store) => store.defaultFavorite).map((store) => store.id);
  const favorites = useLocalStorageSet(`shop-fav-${region.id}`, defaultFavoriteIds);
  const visited = useLocalStorageSet(`shop-visited-${region.id}`, []);

  return {
    summary: summarizeStores(region, favorites.items, visited.set),
    favoriteIds: favorites.set,
    visitedIds: visited.set,
    toggleFavorite: favorites.toggle,
    toggleVisited: visited.toggle,
  };
}

export type StoreMarks = ReturnType<typeof useStoreMarks>;
