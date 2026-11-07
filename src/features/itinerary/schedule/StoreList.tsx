import { useState } from "react";
import { Heart } from "lucide-react";
import { DetailSections, TapCheckbox } from "../../../components";
import { isStoreClosed, storeGroupLabels, storeGroupOf, storeGroupOrder, type StoreGroup } from "../../../lib/stores";
import type { DetailSection, ShopRegion, Store } from "../../../types";
import type { StoreMarks } from "./useStoreMarks";

type StoreFilter = "favoritas" | StoreGroup;

function describeStoreProfile(store: Store): DetailSection[] {
  const fields: [DetailSection["color"], string, string | undefined][] = [
    ["navy", "Perfil", store.styleProfile],
    ["gold", "Público", store.targetAudience],
    ["citrus", "Forte em", store.strengths],
    ["palm", "Observação", store.notes],
  ];
  return fields.flatMap(([color, title, text]) => (text ? [{ color, icon: "target" as const, title, paragraphs: [text] }] : []));
}

function pickStores(region: ShopRegion, marks: StoreMarks, filter: StoreFilter): Store[] {
  if (filter === "favoritas") return marks.summary.favoriteStores;
  return region.stores.filter((store) => storeGroupOf(store) === filter);
}

interface StoreListProps {
  region: ShopRegion;
  marks: StoreMarks;
}

/** Lojas de uma região: filtros por tipo, visitadas, favoritas e ficha completa de uma loja por vez. */
export function StoreList({ region, marks }: StoreListProps) {
  const [filter, setFilter] = useState<StoreFilter>("favoritas");
  const [expandedStoreId, setExpandedStoreId] = useState<string | null>(null);
  const { favoriteStores, visitedFavoritesCount } = marks.summary;
  const stores = pickStores(region, marks, filter);

  return (
    <div>
      <StoreFilters region={region} favoritesCount={favoriteStores.length} selected={filter} onSelect={setFilter} />
      <p className="mt-1 text-[13px] font-semibold text-citrus-text">
        Favoritas visitadas: {visitedFavoritesCount} de {favoriteStores.length}
      </p>
      {stores.length === 0 && (
        <p className="py-6 text-center text-sm text-ink-soft">
          {filter === "favoritas" ? "Nenhuma favorita ainda. Toque no coração de uma loja." : "Nenhuma loja aqui."}
        </p>
      )}
      <ul>
        {stores.map((store) => (
          <StoreRow
            key={store.id}
            store={store}
            isVisited={marks.visitedIds.has(store.id)}
            isFavorite={marks.favoriteIds.has(store.id)}
            isExpanded={expandedStoreId === store.id}
            onToggleVisited={() => marks.toggleVisited(store.id)}
            onToggleFavorite={() => marks.toggleFavorite(store.id)}
            onToggleExpanded={() => setExpandedStoreId(expandedStoreId === store.id ? null : store.id)}
          />
        ))}
      </ul>
    </div>
  );
}

interface StoreFiltersProps {
  region: ShopRegion;
  favoritesCount: number;
  selected: StoreFilter;
  onSelect: (filter: StoreFilter) => void;
}

function StoreFilters({ region, favoritesCount, selected, onSelect }: StoreFiltersProps) {
  const groupsInRegion = storeGroupOrder.filter((group) => region.stores.some((store) => storeGroupOf(store) === group));
  const filters: { key: StoreFilter; label: string }[] = [
    { key: "favoritas", label: `Favoritas ${favoritesCount}` },
    ...groupsInRegion.map((group) => ({ key: group, label: storeGroupLabels[group] })),
  ];

  return (
    <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          aria-pressed={key === selected}
          onClick={() => onSelect(key)}
          className={`min-h-11 shrink-0 rounded-full border border-line px-3.5 text-sm font-semibold ${
            key === selected ? "bg-ink text-paper" : "bg-cardbg text-ink"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

interface StoreRowProps {
  store: Store;
  isVisited: boolean;
  isFavorite: boolean;
  isExpanded: boolean;
  onToggleVisited: () => void;
  onToggleFavorite: () => void;
  onToggleExpanded: () => void;
}

function StoreRow({ store, isVisited, isFavorite, isExpanded, onToggleVisited, onToggleFavorite, onToggleExpanded }: StoreRowProps) {
  return (
    <li className="border-b border-dashed border-line py-1 last:border-b-0">
      <div className="flex items-center gap-1">
        <TapCheckbox
          checked={isVisited}
          onToggle={onToggleVisited}
          label={isVisited ? `Desmarcar ${store.name}` : `Marcar ${store.name} como visitada`}
        />
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={onToggleExpanded}
          className="min-h-11 min-w-0 flex-1 py-1 text-left focus-visible:outline-2 focus-visible:outline-citrus"
        >
          <span className={`block text-[15px] font-semibold text-ink ${isVisited ? "line-through" : ""}`}>{store.name}</span>
          {store.strengths && !isExpanded && <span className="line-clamp-2 block text-[13px] text-ink-soft">{store.strengths}</span>}
        </button>
        {!isStoreClosed(store) && <FavoriteButton name={store.name} isFavorite={isFavorite} onToggle={onToggleFavorite} />}
      </div>
      {isExpanded && (
        <div className="pb-2 pl-11">
          <DetailSections sections={describeStoreProfile(store)} />
        </div>
      )}
    </li>
  );
}

function FavoriteButton({ name, isFavorite, onToggle }: { name: string; isFavorite: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? `Remover ${name} dos favoritos` : `Favoritar ${name}`}
      className="flex h-11 w-11 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-citrus"
    >
      <Heart
        className={`h-[22px] w-[22px] ${isFavorite ? "text-citrus" : "text-ink-soft"}`}
        fill={isFavorite ? "currentColor" : "none"}
        aria-hidden="true"
      />
    </button>
  );
}
