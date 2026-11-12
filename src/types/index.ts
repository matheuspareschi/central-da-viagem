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

export interface ExtraLink {
  label: string;
  /** Rota interna da ferramenta, ex.: "/informacoes-extra/pedagio". */
  route: string;
  icon: "car" | "cart";
}

export interface StopCard {
  id: string;
  name: string;
  icon: IconName;
  time?: string;
  shopRegionId?: string;
  /** Link "Abrir no mapa", montado com `mapSearchUrl` a partir do nome e do endereço dos dados. */
  link?: string;
  /** Site oficial, só quando os dados já informam. */
  siteUrl?: string;
  /** Endereço mostrado na linha do cronograma, fora do cartão, como link para o mapa. */
  address?: string;
  /** Botão no fim da folha de detalhe que leva a uma ferramenta de Extras. */
  extraLink?: ExtraLink;
  /** Botão extra na folha de detalhe. */
  action?: "groceryList";
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
  /** Área ou pavilhão do parque, exibido sob o título na lista. */
  area?: string;
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
  icon: "car" | "transit" | "return" | "info";
  text: string;
}

export interface JourneyGuideItem {
  label: string;
  text: string;
}

/** Aba "Regras do dia" do cartão "Horários e trajeto" (chegada, estacionamento, filas...). */
export interface JourneyGuide {
  title: string;
  items: JourneyGuideItem[];
}

/** Conteúdo do cartão "Horários e trajeto". */
export interface Journey {
  tiles: JourneyTile[];
  notes: JourneyNote[];
  alerts: string[];
  guide?: JourneyGuide;
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

/** Um jeito de seguir um dia com mais de uma trilha (ex.: Magic Kingdom ou Compras e Jardins). */
export interface DayOption {
  id: string;
  /** Rótulo curto, usado no botão de variação, na folha de escolha e no Calendário. */
  label: string;
  /** Linha de apoio: quem vai. */
  supportLine: string;
  /** Trilhas do dia que compõem a opção; uma trilha pode entrar em mais de uma opção. */
  trackKeys: string[];
  /** A opção mostrada enquanto o dia não tem escolha; exatamente uma por dia. */
  isDefault?: boolean;
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
  /** Dia dividido em trilhas: as opções de roteiro entre as quais se escolhe (pelo menos duas). */
  options?: DayOption[];
}
