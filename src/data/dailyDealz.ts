// Daily Dealz (loja de devoluções e liquidação da Amazon): endereço e descrição, usados em mais de um dia do roteiro.
import type { DetailSection } from "../types";

export const DAILY_DEALZ_ADDRESS = "7802 S Orange Blossom Trl, Orlando, FL";

export const dailyDealzAboutSections: DetailSection[] = [
  { color: "navy", icon: "parking", title: "Endereço", paragraphs: [`${DAILY_DEALZ_ADDRESS}. Mesma área da Aviva Florida.`] },
  {
    color: "citrus",
    icon: "bag",
    title: "Sobre",
    paragraphs: ["Loja de devoluções e liquidação da Amazon, com preços por caixa/lote. O estoque muda todo dia, então **não dá para planejar** o que vai achar."],
  },
];
