import type { ParkArea, ParkAttraction } from "../../types";
import { epcot, epcotAreas } from "./epcot.catalog";
import { hollywoodStudios, hollywoodStudiosAreas } from "./hollywood-studios.catalog";
import { islandsOfAdventure, islandsOfAdventureAreas } from "./islands-of-adventure.catalog";
import { universalStudiosFlorida, universalStudiosFloridaAreas } from "./universal-studios-florida.catalog";
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
  "hollywood-studios": { name: "Disney's Hollywood Studios", areas: hollywoodStudiosAreas, attractions: hollywoodStudios },
  "islands-of-adventure": { name: "Universal Islands of Adventure", areas: islandsOfAdventureAreas, attractions: islandsOfAdventure },
  "universal-studios-florida": { name: "Universal Studios Florida", areas: universalStudiosFloridaAreas, attractions: universalStudiosFlorida },
};
