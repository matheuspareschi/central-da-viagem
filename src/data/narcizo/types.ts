import type { DayData } from "../../types";

export const ORIGEM_NARCIZO = "narcizo";

export type NarcizoCity = "Miami" | "Washington" | "Nova York";

/** Dia do roteiro da família Narcizo: o mesmo formato de `DayData`, marcado com `origem` para poder ser ocultado ou mostrado. */
export type NarcizoDay = DayData & {
  origem: typeof ORIGEM_NARCIZO;
  /** Cidade onde a família dorme no fim do dia, mostrada como etiqueta no calendário (em dia de viagem, o destino). */
  cidade: NarcizoCity;
};

export function isNarcizoDay(day: DayData): day is NarcizoDay {
  return (day as Partial<NarcizoDay>).origem === ORIGEM_NARCIZO;
}
