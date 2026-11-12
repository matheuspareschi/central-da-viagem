import type { ShopRegion, Store } from "../types";

export type StoreGroup = "esportivo" | "casual" | "preppy" | "infantil" | "outras" | "fechadas";

export const storeGroupLabels: Record<StoreGroup, string> = {
  esportivo: "Esportivo",
  casual: "Casual",
  preppy: "Preppy",
  infantil: "Infantil",
  outras: "Outras",
  fechadas: "Fechadas",
};

/** Ordem em que os filtros aparecem depois de "Favoritas". */
export const storeGroupOrder: StoreGroup[] = ["esportivo", "casual", "preppy", "infantil", "outras", "fechadas"];

const groupByCategory: Record<string, StoreGroup> = {
  "Esportivo/Performance": "esportivo",
  "Casual do Dia a Dia": "casual",
  "Preppy/Casual Elevado": "preppy",
  Infantil: "infantil",
  "Outras (não-vestuário)": "outras",
  Alimentação: "outras",
  "Não confirmadas / provavelmente fechadas": "fechadas",
};

/** Categoria sem mapeamento cai em "Outras". */
export function storeGroupOf(store: Store): StoreGroup {
  return groupByCategory[store.category] ?? "outras";
}

/** Chave de um filtro da lista de lojas: o grupo, quando a categoria pertence a um; senão a própria categoria. */
export function storeFilterKeyOf(store: Store): string {
  return groupByCategory[store.category] ?? store.category;
}

export function storeFilterLabel(filterKey: string): string {
  return storeGroupLabels[filterKey as StoreGroup] ?? filterKey;
}

const isGroupKey = (filterKey: string): filterKey is StoreGroup => filterKey in storeGroupLabels;

/** Filtros da região: grupos conhecidos, depois as demais categorias (na ordem em que aparecem) e por fim as fechadas. */
export function listStoreFilterKeys(region: ShopRegion): string[] {
  const keys = new Set(region.stores.map(storeFilterKeyOf));
  const knownGroups = storeGroupOrder.filter((group) => group !== "fechadas" && keys.has(group));
  const otherCategories = [...keys].filter((key) => !isGroupKey(key));
  return [...knownGroups, ...otherCategories, ...(keys.has("fechadas") ? ["fechadas"] : [])];
}

export const isStoreClosed = (store: Store) => storeGroupOf(store) === "fechadas";

export interface StoreSummary {
  openStores: Store[];
  /** Favoritas abertas, na ordem em que foram favoritadas. */
  favoriteStores: Store[];
  visitedFavoritesCount: number;
}

/** Lojas fechadas ou não confirmadas ficam fora de favoritas e de qualquer total. */
export function summarizeStores(region: ShopRegion, favoriteIds: string[], visitedIds: Set<string>): StoreSummary {
  const openStores = region.stores.filter((store) => !isStoreClosed(store));
  const openById = new Map(openStores.map((store) => [store.id, store]));
  const favoriteStores = favoriteIds.flatMap((id) => openById.get(id) ?? []);
  const visitedFavoritesCount = favoriteStores.filter((store) => visitedIds.has(store.id)).length;
  return { openStores, favoriteStores, visitedFavoritesCount };
}

export function describeShopStop(summary: StoreSummary): string {
  const { favoriteStores, visitedFavoritesCount, openStores } = summary;
  return `Favoritas ${visitedFavoritesCount} de ${favoriteStores.length} · ${openStores.length} lojas`;
}
