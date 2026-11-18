import { useState } from "react";
import { lanchesCategories, lanchesChains, lanchesPriceLegend, LANCHES_STORAGE_KEY, type LanchesPrice } from "../../data/global/lanches";
import { useLocalStorageSet } from "../../hooks/useLocalStorageSet";
import { countFavorites, formatFavoritesCount, groupByCategory, pickChains, type LanchesFilter, type LanchesGroup } from "../../lib/lanches";
import { LanchesCard } from "./LanchesCard";
import { LanchesFilterChips } from "./LanchesFilterChips";

/** Redes de fast food de Orlando e Kissimmee, por categoria, com favoritas guardadas no aparelho. */
export function LanchesList() {
  const favorites = useLocalStorageSet(LANCHES_STORAGE_KEY);
  const [filter, setFilter] = useState<LanchesFilter>("todos");
  const favoritesCount = countFavorites(lanchesChains, favorites.set);
  const groups = groupByCategory(pickChains(lanchesChains, filter, favorites.set), lanchesCategories);

  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-citrus-text">{formatFavoritesCount(favoritesCount)}</p>
      <LanchesFilterChips categories={lanchesCategories} favoritesCount={favoritesCount} selected={filter} onSelect={setFilter} />
      {filter === "favoritos" && favoritesCount === 0 ? (
        <p className="py-8 text-center text-sm text-ink-soft">Nenhuma favorita ainda. Toque na estrela de uma rede para marcar.</p>
      ) : (
        groups.map((group) => <CategoryGroup key={group.category.id} group={group} favoriteIds={favorites.set} onToggleFavorite={favorites.toggle} />)
      )}
      <PriceLegend />
    </div>
  );
}

interface CategoryGroupProps {
  group: LanchesGroup;
  favoriteIds: Set<string>;
  onToggleFavorite: (chainId: string) => void;
}

function CategoryGroup({ group, favoriteIds, onToggleFavorite }: CategoryGroupProps) {
  return (
    <section className="mt-5" aria-labelledby={`lanches-${group.category.id}`}>
      <h2 id={`lanches-${group.category.id}`} className="mb-2 font-serif text-xl font-bold leading-tight text-ink">
        {group.category.nome} <span className="font-sans text-sm font-semibold text-ink-soft">({group.chains.length})</span>
      </h2>
      <ul className="flex list-none flex-col gap-2.5 p-0">
        {group.chains.map((chain) => (
          <LanchesCard key={chain.id} chain={chain} isFavorite={favoriteIds.has(chain.id)} onToggleFavorite={() => onToggleFavorite(chain.id)} />
        ))}
      </ul>
    </section>
  );
}

function describePrice(price: LanchesPrice): string {
  const { label, detail } = lanchesPriceLegend[price];
  return `${price} = ${label}${detail ? ` (${detail})` : ""}`;
}

function PriceLegend() {
  const prices = Object.keys(lanchesPriceLegend) as LanchesPrice[];
  return <p className="mt-6 text-xs text-ink-soft">{prices.map(describePrice).join(" · ")}</p>;
}
