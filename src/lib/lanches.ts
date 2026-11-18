import type { LanchesCategory, LanchesCategoryId, LanchesChain } from "../data/global/lanches";

/** Chip ativo da tela: tudo, só as favoritas ou uma categoria. */
export type LanchesFilter = "todos" | "favoritos" | LanchesCategoryId;

export interface LanchesGroup {
  category: LanchesCategory;
  chains: LanchesChain[];
}

export function pickChains(chains: LanchesChain[], filter: LanchesFilter, favoriteIds: ReadonlySet<string>): LanchesChain[] {
  if (filter === "todos") return chains;
  if (filter === "favoritos") return chains.filter((chain) => favoriteIds.has(chain.id));
  return chains.filter((chain) => chain.categoria === filter);
}

/** Um grupo por categoria, na ordem de `categories`; categorias sem rede ficam de fora. */
export function groupByCategory(chains: LanchesChain[], categories: LanchesCategory[]): LanchesGroup[] {
  return categories
    .map((category) => ({ category, chains: chains.filter((chain) => chain.categoria === category.id) }))
    .filter((group) => group.chains.length > 0);
}

export function countFavorites(chains: LanchesChain[], favoriteIds: ReadonlySet<string>): number {
  return chains.filter((chain) => favoriteIds.has(chain.id)).length;
}

export function formatFavoritesCount(count: number): string {
  return count === 1 ? "1 favorito" : `${count} favoritos`;
}
