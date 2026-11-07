export type IconName =
  | "alert"
  | "bag"
  | "burger"
  | "camera"
  | "corn"
  | "house"
  | "leaf"
  | "lightbulb"
  | "parking"
  | "sparkle"
  | "target"
  | "tree";

export type DayCategory = "parque" | "compras" | "turismo";

export interface AdventReading {
  label: string;
  oldTestamentReading: string;
  gospelReading: string;
}

export interface TransitStep {
  kind: "transit";
  time: string;
  duration?: string;
  destinationName: string;
}

export interface StopStep {
  kind: "stop";
  time: string;
  stopId: string;
  name: string;
  icon: IconName;
}

export type Step = TransitStep | StopStep;

export interface DayPeriod {
  title: string;
  note?: string;
  steps: Step[];
}

export type SectionColor = "navy" | "citrus" | "palm" | "gold" | "attn";

export interface DetailSection {
  color: SectionColor;
  icon: IconName;
  title: string;
  paragraphs?: string[];
  list?: string[];
}

export interface StopCard {
  id: string;
  name: string;
  icon: IconName;
  time?: string;
  shopRegionId?: string;
  sections: DetailSection[];
}

export interface ScheduleDay {
  dateISO: string;
  title?: string;
  periods: DayPeriod[];
  cards: StopCard[];
}

/** Item do checklist de um dia de parque; `attractionId` liga ao catálogo do parque. */
export interface ChecklistItem {
  id: string;
  attractionId?: string;
  name: string;
  icon: IconName;
  sections: DetailSection[];
}

export interface ParkChecklistDay {
  dateISO: string;
  title: string;
  attractions: ChecklistItem[];
}

export interface JourneyTile {
  label: string;
  value: string;
}

export interface JourneyNote {
  icon: "car" | "transit" | "info";
  text: string;
}

/** Conteúdo do cartão "Horários e trajeto". */
export interface Journey {
  tiles: JourneyTile[];
  notes: JourneyNote[];
  alerts: string[];
}

/**
 * Campos que toda trilha (ou o dia inteiro, quando não é dividido) tem além do conteúdo.
 * A categoria vem de `DayData.category` (dia inteiro) ou de `SplitTrack.category` (trilha).
 */
export interface TrackExtras {
  summary: string;
  group?: string;
  journey: Journey;
  /** Só em trilhas de parque: aponta para o catálogo em `data/parks`. */
  parkId?: string;
}

export interface ParkArea {
  key: string;
  label: string;
}

/** Atração do catálogo de um parque. */
export interface ParkAttraction {
  id: string;
  parkId: string;
  area: string;
  name: string;
  type: string;
  kind: "attraction" | "show";
  description: string;
  verify?: boolean;
}

interface SplitTrackBase extends TrackExtras {
  key: string;
  category: DayCategory;
  /** Horários da trilha quando ela é uma visita a parque (aparece no cartão da Home). */
  park?: ParkVisit;
  title: string;
}

export type SplitTrack =
  | (SplitTrackBase & { mode: "checklist"; attractions: ChecklistItem[] })
  | (SplitTrackBase & { mode: "schedule"; periods: DayPeriod[]; cards: StopCard[] });

export type StoreValueTier = "outlet" | "premium";

export interface Store {
  id: string;
  name: string;
  category: string;
  styleProfile?: string;
  targetAudience?: string;
  strengths?: string;
  notes?: string;
  defaultFavorite?: boolean;
  valueTier?: StoreValueTier;
  featured?: boolean;
}

export interface ShopRegion {
  id: string;
  address: string;
  parking: string;
  stores: Store[];
}

export type DayItinerary =
  | ({ kind: "schedule" } & Omit<ScheduleDay, "dateISO" | "title"> & TrackExtras)
  | ({ kind: "checklist" } & Omit<ParkChecklistDay, "dateISO" | "title"> & TrackExtras)
  | { kind: "split"; tracks: SplitTrack[] };

/** Visita a um parque: horários como texto de exibição (ex.: "7h30"). */
export interface ParkVisit {
  name: string;
  departure?: string;
  opening?: string;
  closing?: string;
}

export interface DayData {
  dateISO: string;
  day: number;
  weekday: string;
  liturgicalWeekday: string;
  /** Título curto exibido no Calendário (o roteiro usa `title`). */
  calendarTitle: string;
  category?: DayCategory;
  park?: ParkVisit;
  title?: string;
  split?: [DayCategory, DayCategory];
  reading?: AdventReading;
  itinerary?: DayItinerary;
}
