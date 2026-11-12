import type { DayData, ParkVisit, SplitTrack } from "../types";

export interface DayCardStop {
  name: string;
  note?: string;
}

export type DayCardContent =
  | { kind: "park"; park: ParkVisit }
  | { kind: "outing"; stops: DayCardStop[] };

function namesToStops(names: string[]): DayCardStop[] {
  return names.map((name) => ({ name }));
}

function outingStops(day: DayData): DayCardStop[] {
  const itinerary = day.itinerary;
  switch (itinerary?.kind) {
    case "schedule":
      return namesToStops(itinerary.cards.map((card) => card.name));
    case "checklist":
      return namesToStops(itinerary.attractions.map((attraction) => attraction.name));
    case "split":
      return namesToStops(itinerary.tracks.map((track) => track.title));
    case undefined:
      return [];
  }
}

function trackStops(track: SplitTrack): DayCardStop[] {
  const names = track.mode === "schedule" ? track.cards.map((card) => card.name) : track.attractions.map((attraction) => attraction.name);
  return namesToStops(names);
}

/** Trilha de parque mostra o parque (mesmo sem horários cadastrados); as demais, as paradas. */
export function getTrackCardContent(track: SplitTrack): DayCardContent {
  return track.category === "parque"
    ? { kind: "park", park: track.park ?? { name: track.title } }
    : { kind: "outing", stops: trackStops(track) };
}

/** Dia com uma trilha só (ex.: uma opção escolhida) mostra a trilha; com várias, o título de cada uma. */
export function getDayCardContent(day: DayData): DayCardContent {
  if (day.park) return { kind: "park", park: day.park };
  const itinerary = day.itinerary;
  if (itinerary?.kind === "split" && itinerary.tracks.length === 1) return getTrackCardContent(itinerary.tracks[0]);
  return { kind: "outing", stops: outingStops(day) };
}

/** Ex.: "Saída 7h30 · parque 9h–21h"; vazio quando o dia não tem horários cadastrados. */
export function describeParkSchedule({ departure, opening, closing }: ParkVisit): string {
  const departurePart = departure && `Saída ${departure}`;
  const hoursPart = opening && (closing ? `parque ${opening}–${closing}` : `abre ${opening}`);
  return [departurePart, hoursPart].filter(Boolean).join(" · ");
}
