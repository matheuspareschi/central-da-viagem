import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { parseISODate } from "../lib/date";

// PROVISÓRIO (teste visual): abrir `#/?hoje=2026-12-09` simula essa data como "hoje".
// A escolha fica na sessão; `?hoje=` vazio limpa. Remover antes da viagem.
const SIMULATED_DAY_PARAM = "hoje";
const SIMULATED_DAY_STORAGE_KEY = "simulated-today";
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function useSimulatedDay(): string | null {
  const [searchParams] = useSearchParams();
  const fromUrl = searchParams.get(SIMULATED_DAY_PARAM);

  try {
    if (fromUrl !== null) {
      if (ISO_DATE_PATTERN.test(fromUrl)) sessionStorage.setItem(SIMULATED_DAY_STORAGE_KEY, fromUrl);
      else sessionStorage.removeItem(SIMULATED_DAY_STORAGE_KEY);
    }
    return sessionStorage.getItem(SIMULATED_DAY_STORAGE_KEY);
  } catch {
    return fromUrl && ISO_DATE_PATTERN.test(fromUrl) ? fromUrl : null;
  }
}

/** Data/hora atual, atualizada a cada minuto (ou o dia simulado, ver acima). */
export function useNow(): Date {
  const [now, setNow] = useState(() => new Date());
  const simulatedDay = useSimulatedDay();

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!simulatedDay) return now;
  const simulated = parseISODate(simulatedDay);
  simulated.setHours(12);
  return simulated;
}
