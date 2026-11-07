import { useState } from "react";
import { Plus } from "lucide-react";
import { BottomSheet } from "../../../components";
import type { ParkCatalog } from "../../../data/parks";
import { describeAttraction } from "../../../lib/parkChecklist";
import type { ParkAttraction } from "../../../types";

const ALL_AREAS = "Todas";

const actionClasses =
  "flex min-h-11 shrink-0 items-center gap-1 rounded-xl border-[1.5px] bg-transparent px-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-citrus";

interface AddAttractionSheetProps {
  catalog: ParkCatalog;
  options: ParkAttraction[];
  isIncluded: (attraction: ParkAttraction) => boolean;
  onInclude: (attraction: ParkAttraction) => void;
  onExclude: (attraction: ParkAttraction) => void;
  onClose: () => void;
}

export function AddAttractionSheet({ catalog, options, isIncluded, onInclude, onExclude, onClose }: AddAttractionSheetProps) {
  const [areaKey, setAreaKey] = useState(ALL_AREAS);
  const visibleOptions = options.filter((attraction) => areaKey === ALL_AREAS || attraction.area === areaKey);
  const notIncludedCount = options.filter((attraction) => !isIncluded(attraction)).length;

  return (
    <BottomSheet
      title="Adicionar atração"
      onClose={onClose}
      header={
        <div>
          <h3 className="font-serif text-xl font-bold text-ink">Adicionar atração</h3>
          <p className="text-xs text-ink-soft">{notIncludedCount} opções fora do roteiro · toque para incluir no dia</p>
        </div>
      }
    >
      <AreaFilters
        areas={[{ key: ALL_AREAS, label: ALL_AREAS }, ...catalog.areas]}
        selectedKey={areaKey}
        onSelect={setAreaKey}
      />
      <ul>
        {visibleOptions.map((attraction) => (
          <li key={attraction.id} className="flex items-center gap-3 border-b border-dashed border-line py-3 last:border-b-0">
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold text-ink">{attraction.name}</p>
              <p className="text-xs text-ink-soft">{describeAttraction(attraction, catalog.areas)}</p>
              <p className="line-clamp-2 text-[13px] text-ink-soft">{attraction.description}</p>
            </div>
            {isIncluded(attraction) ? (
              <button type="button" onClick={() => onExclude(attraction)} className={`${actionClasses} border-line text-ink`}>
                Remover
              </button>
            ) : (
              <button type="button" onClick={() => onInclude(attraction)} className={`${actionClasses} border-citrus text-citrus-text`}>
                <Plus className="h-4 w-4" aria-hidden="true" />
                Incluir
              </button>
            )}
          </li>
        ))}
      </ul>
    </BottomSheet>
  );
}

interface AreaFiltersProps {
  areas: { key: string; label: string }[];
  selectedKey: string;
  onSelect: (key: string) => void;
}

function AreaFilters({ areas, selectedKey, onSelect }: AreaFiltersProps) {
  return (
    <div className="scrollbar-hide -mx-4 mb-1 flex gap-2 overflow-x-auto px-4 pb-2">
      {areas.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          aria-pressed={key === selectedKey}
          onClick={() => onSelect(key)}
          className={`min-h-11 shrink-0 rounded-full border border-line px-3.5 text-sm font-semibold ${
            key === selectedKey ? "bg-ink text-paper" : "bg-cardbg text-ink"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
