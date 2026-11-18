import type { DetailSection, IconName, SectionColor, StopStep, TransitStep } from "../../types";

export const FAMILIA_NARCIZO = "Família Narcizo · 4 pessoas (Rafael, Silvana, Gabriel e Isabela)";

/** Parada do cronograma; `stopId` vazio = parada sem cartão de detalhes. */
export function stop(time: string, name: string, icon: IconName, stopId = ""): StopStep {
  return { kind: "stop", time, stopId, name, icon };
}

export function transit(time: string, destinationName: string, duration?: string): TransitStep {
  return duration ? { kind: "transit", time, duration, destinationName } : { kind: "transit", time, destinationName };
}

export function textSection(color: SectionColor, icon: IconName, title: string, ...paragraphs: string[]): DetailSection {
  return { color, icon, title, paragraphs };
}

export function listSection(color: SectionColor, icon: IconName, title: string, list: string[]): DetailSection {
  return { color, icon, title, list };
}

export function addressSection(address: string, ...extraParagraphs: string[]): DetailSection {
  return textSection("navy", "parking", "Endereço", address, ...extraParagraphs);
}

export function confirmedSection(...paragraphs: string[]): DetailSection {
  return textSection("palm", "target", "Reserva confirmada", ...paragraphs);
}

export function attentionSection(...paragraphs: string[]): DetailSection {
  return textSection("attn", "alert", "Atenção", ...paragraphs);
}
