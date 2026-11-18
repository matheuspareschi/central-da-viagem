import { selectTripDays, type TripDays } from "../lib/tripDays";
import { useNarcizoMode } from "./useNarcizoMode";

/** Dias do app (calendário, Hoje, roteiro): só inclui os da família Narcizo quando o modo está ativo. */
export function useTripDays(): TripDays {
  return selectTripDays(useNarcizoMode().isEnabled);
}
