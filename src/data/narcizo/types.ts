import type { DayData } from "../../types";

export const ORIGEM_NARCIZO = "narcizo";

/** Dia do roteiro da família Narcizo: o mesmo formato de `DayData`, marcado com `origem` para poder ser ocultado ou mostrado. */
export type NarcizoDay = DayData & { origem: typeof ORIGEM_NARCIZO };
