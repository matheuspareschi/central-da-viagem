import type { ChecklistItem, DayCategory, DayData, DayPeriod, StopCard, TrackExtras } from "../types";

export type TrackContent =
  | { mode: "checklist"; attractions: ChecklistItem[] }
  | { mode: "schedule"; periods: DayPeriod[]; cards: StopCard[] };

/** Uma trilha de um dia dividido, ou o dia inteiro quando ele não é dividido. */
export interface DayTrack {
  key: string;
  /** Prefixo das chaves de armazenamento local; igual ao usado antes das trilhas virarem abas. */
  storageId: string;
  title: string;
  category?: DayCategory;
  extras: TrackExtras;
  content: TrackContent;
}

/** Trilhas do dia na ordem dos dados; vazio para dias sem roteiro fechado (ou lista de paradas). */
export function listDayTracks(day: DayData): DayTrack[] {
  const itinerary = day.itinerary;
  if (!itinerary) return [];

  if (itinerary.kind === "split") {
    return itinerary.tracks.map((track) => ({
      key: track.key,
      storageId: `${day.dateISO}-${track.key}`,
      title: track.title,
      category: track.category,
      extras: track,
      content: track.mode === "checklist"
        ? { mode: "checklist", attractions: track.attractions }
        : { mode: "schedule", periods: track.periods, cards: track.cards },
    }));
  }

  return [{
    key: day.dateISO,
    storageId: day.dateISO,
    title: day.title ?? day.calendarTitle,
    category: day.category,
    extras: itinerary,
    content: itinerary.kind === "checklist"
      ? { mode: "checklist", attractions: itinerary.attractions }
      : { mode: "schedule", periods: itinerary.periods, cards: itinerary.cards },
  }];
}
