import type { ChecklistItem, DetailSection, IconName, ParkAttraction, ParkArea } from "../types";

const ADDED_ENTRY_PREFIX = "catalogo:";

/** Linha do checklist de parque: item do dia ou atração incluída do catálogo. */
export interface ChecklistEntry {
  id: string;
  name: string;
  icon: IconName;
  /** Área + tipo, exibido no cabeçalho dos detalhes. */
  subtitle?: string;
  /** Só a área do parque, exibida na linha da lista. */
  areaLabel?: string;
  sections: DetailSection[];
  isAdded: boolean;
}

export const toAddedEntryId = (attractionId: string) => `${ADDED_ENTRY_PREFIX}${attractionId}`;
export const isAddedEntryId = (entryId: string) => entryId.startsWith(ADDED_ENTRY_PREFIX);

function findAreaLabel(attraction: ParkAttraction, areas: ParkArea[]): string {
  return areas.find((area) => area.key === attraction.area)?.label ?? attraction.area;
}

export function describeAttraction(attraction: ParkAttraction, areas: ParkArea[]): string {
  return `${findAreaLabel(attraction, areas)} · ${attraction.type}`;
}

export function toDayEntry(item: ChecklistItem, linked: ParkAttraction | undefined, areas: ParkArea[]): ChecklistEntry {
  return {
    id: item.id,
    name: item.name,
    icon: item.icon,
    subtitle: linked ? describeAttraction(linked, areas) : undefined,
    areaLabel: item.area,
    sections: item.sections,
    isAdded: false,
  };
}

export function toAddedEntry(attraction: ParkAttraction, areas: ParkArea[]): ChecklistEntry {
  const areaLabel = findAreaLabel(attraction, areas);
  return {
    id: toAddedEntryId(attraction.id),
    name: attraction.name,
    icon: attraction.kind === "show" ? "sparkle" : "target",
    subtitle: `${describeAttraction(attraction, areas)} · adicionada`,
    areaLabel,
    sections: [
      { color: "navy", icon: "parking", title: "Onde fica", paragraphs: [areaLabel] },
      { color: "citrus", icon: "target", title: "Sobre", paragraphs: [attraction.description] },
    ],
    isAdded: true,
  };
}

/**
 * Ordem exibida: a salva, ignorando ids que não existem mais, com os itens novos do dia no fim.
 * `addableEntryIds` são as inclusões do catálogo que ainda são válidas.
 */
export function reconcileOrder(savedOrder: string[], dayEntryIds: string[], addableEntryIds: string[]): string[] {
  const validIds = new Set([...dayEntryIds, ...addableEntryIds]);
  const keptIds = [...new Set(savedOrder)].filter((id) => validIds.has(id));
  const newDayIds = dayEntryIds.filter((id) => !keptIds.includes(id));
  return [...keptIds, ...newDayIds];
}

export function moveEntry(order: string[], entryId: string, offset: -1 | 1): string[] {
  const from = order.indexOf(entryId);
  const to = from + offset;
  if (from < 0 || to < 0 || to >= order.length) return order;
  const next = [...order];
  [next[from], next[to]] = [next[to], next[from]];
  return next;
}

/** Volta os itens do dia à ordem dos dados; as inclusões ficam no fim, na ordem atual. */
export function restoreOriginalOrder(order: string[], dayEntryIds: string[]): string[] {
  return [...dayEntryIds, ...order.filter(isAddedEntryId)];
}
