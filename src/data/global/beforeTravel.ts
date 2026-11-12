export interface BeforeTravelItem {
  id: string;
  title: string;
  subtitle: string;
}

export const BEFORE_TRAVEL_STORAGE_KEY = "antes-de-viajar";

export const beforeTravelItems: BeforeTravelItem[] = [
  { id: "fotos-disney", title: "Comprar as fotos da Disney (PhotoPass)", subtitle: "Decisão: **comprar no Brasil**, antes da viagem." },
];
