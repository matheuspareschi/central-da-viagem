import { WifiOff } from "lucide-react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

/** Aviso discreto no topo do conteúdo; não bloqueia nada. */
export function OfflineNotice() {
  if (useOnlineStatus()) return null;

  return (
    <p role="status" className="-mt-2 mb-4 flex items-center gap-2 rounded-xl bg-paper-dark px-3 py-2 text-xs font-semibold text-ink-soft">
      <WifiOff className="h-4 w-4 shrink-0" aria-hidden="true" />
      Sem conexão: mostrando dados salvos
    </p>
  );
}
