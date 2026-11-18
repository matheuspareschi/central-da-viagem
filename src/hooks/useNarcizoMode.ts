import { useSyncExternalStore } from "react";
import { getNarcizoEnabled, setNarcizoEnabled, subscribeNarcizoMode } from "../lib/narcizoMode";

/** Se o roteiro da família Narcizo (a partir de 25/12) está sendo mostrado; a escolha é salva no aparelho. */
export function useNarcizoMode() {
  const isEnabled = useSyncExternalStore(subscribeNarcizoMode, getNarcizoEnabled);
  return { isEnabled, setEnabled: setNarcizoEnabled };
}
