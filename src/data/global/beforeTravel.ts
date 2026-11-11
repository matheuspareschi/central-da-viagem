export interface BeforeTravelItem {
  id: string;
  text: string;
}

export const BEFORE_TRAVEL_STORAGE_KEY = "antes-de-viajar";

export const beforeTravelItems: BeforeTravelItem[] = [
  { id: "fotos-disney", text: "Comprar as fotos da Disney (PhotoPass) antes da viagem, no Brasil" },
];
