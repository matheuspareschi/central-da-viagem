import type { LanchesCategory } from "../../data/global/lanches";
import type { LanchesFilter } from "../../lib/lanches";

interface LanchesFilterChipsProps {
  categories: LanchesCategory[];
  favoritesCount: number;
  selected: LanchesFilter;
  onSelect: (filter: LanchesFilter) => void;
}

/** Linha de chips rolável na horizontal: Todos, Favoritos e uma categoria por chip. */
export function LanchesFilterChips({ categories, favoritesCount, selected, onSelect }: LanchesFilterChipsProps) {
  const chips: { filter: LanchesFilter; label: string }[] = [
    { filter: "todos", label: "Todos" },
    { filter: "favoritos", label: `Favoritos (${favoritesCount})` },
    ...categories.map((category) => ({ filter: category.id, label: category.nome })),
  ];

  return (
    <div role="group" aria-label="Filtrar redes" className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 py-1">
      {chips.map(({ filter, label }) => (
        <button
          key={filter}
          type="button"
          aria-pressed={filter === selected}
          onClick={() => onSelect(filter)}
          className={`min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus ${
            filter === selected ? "border-citrus bg-citrus text-cardbg" : "border-line bg-cardbg text-ink"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
