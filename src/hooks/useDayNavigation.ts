import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { allDays } from "../data/days";
import type { DayData } from "../types";

// Dia com conteúdo mais completo — usado como padrão quando a URL não
// especifica um dia.
const FALLBACK_DAY_ISO = "2026-12-11";

interface DayNavigation {
  dayInfo: DayData | undefined;
  prevDay: DayData | null;
  nextDay: DayData | null;
  navigateToDay: (dateISO: string) => void;
}

/**
 * Resolve o dia atual a partir da URL, os vizinhos pra navegação
 * anterior/próximo, e redireciona pra Home se o dateISO da URL não
 * corresponder a nenhum dia da viagem.
 */
export function useDayNavigation(dateISOParam: string | undefined): DayNavigation {
  const navigate = useNavigate();
  const location = useLocation();
  const dateISO = dateISOParam || FALLBACK_DAY_ISO;
  const dayIndex = allDays.findIndex((d) => d.dateISO === dateISO);

  useEffect(() => {
    if (dayIndex === -1) navigate("/", { replace: true });
  }, [dayIndex, navigate]);

  const dayInfo = allDays[dayIndex];
  const prevDay = dayIndex > 0 ? allDays[dayIndex - 1] : null;
  const nextDay = dayIndex >= 0 && dayIndex < allDays.length - 1 ? allDays[dayIndex + 1] : null;

  function navigateToDay(nextDateISO: string) {
    // Mantém o `state` (ex.: origem do botão "Voltar") ao trocar de dia.
    navigate(`/roteiro/${nextDateISO}`, { replace: true, state: location.state });
  }

  return { dayInfo, prevDay, nextDay, navigateToDay };
}
