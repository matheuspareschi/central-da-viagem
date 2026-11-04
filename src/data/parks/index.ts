import type { ParkArea, ParkAttraction } from "../../types";
import { epcot, epcotAreas } from "./epcot.catalog";
import { magicKingdom, magicKingdomAreas } from "./magic-kingdom.catalog";

export interface ParkCatalog {
  name: string;
  areas: ParkArea[];
  attractions: ParkAttraction[];
}

/** Catálogos por `parkId`. Parques sem catálogo ainda não oferecem "Adicionar atração". */
export const parkCatalogs: Record<string, ParkCatalog> = {
  "magic-kingdom": { name: "Magic Kingdom", areas: magicKingdomAreas, attractions: magicKingdom },
  epcot: { name: "EPCOT", areas: epcotAreas, attractions: epcot },
};
