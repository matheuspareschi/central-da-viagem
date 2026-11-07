import { Calendar, House, Info, Sun, type LucideIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

export interface NavDestination {
  label: string;
  icon: LucideIcon;
  path: string;
}

export const navigationDestinations: NavDestination[] = [
  { label: "Hoje", icon: Sun, path: "/" },
  { label: "Calendário", icon: Calendar, path: "/calendario" },
  { label: "Essenciais", icon: House, path: "/casa" },
  { label: "Extras", icon: Info, path: "/informacoes-extra" },
];

const ITINERARY_PATH_PREFIX = "/roteiro/";
const ITINERARY_PARENT_PATH = "/calendario";

/** A barra aparece nas telas principais e no roteiro do dia (onde "Calendário" fica ativo). */
export function useShowsBottomNav(): boolean {
  const { pathname } = useLocation();
  return pathname.startsWith(ITINERARY_PATH_PREFIX) || navigationDestinations.some((destination) => destination.path === pathname);
}

/** O roteiro de um dia pertence ao Calendário; as demais telas ficam ativas na própria rota. */
export function isDestinationActive(destinationPath: string, pathname: string): boolean {
  if (pathname.startsWith(ITINERARY_PATH_PREFIX)) return destinationPath === ITINERARY_PARENT_PATH;
  return destinationPath === pathname;
}
