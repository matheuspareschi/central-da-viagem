import type { NarcizoCity } from "../narcizo/types";

export interface CityStyle {
  /** Barra lateral do card e amostra da legenda. */
  hex: string;
  /** Fundo e texto da etiqueta da cidade. */
  tint: string;
  text: string;
}

/** Uma cor por cidade da viagem da família Narcizo, todas distintas das três categorias do roteiro principal. */
export const narcizoCityStyles: Record<NarcizoCity, CityStyle> = {
  Miami: { hex: "#d6336c", tint: "#fbdce8", text: "#8f1a45" },
  Washington: { hex: "#5b6b7c", tint: "#e3e8ee", text: "#34414f" },
  "Nova York": { hex: "#6b4bb8", tint: "#e6def6", text: "#47318a" },
};

export const narcizoCities = Object.keys(narcizoCityStyles) as NarcizoCity[];
