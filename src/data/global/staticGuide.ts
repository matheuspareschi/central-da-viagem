export type GuideTagTone = "green" | "orange";

export interface GuideTag {
  label: string;
  tone: GuideTagTone;
}

export interface GuideRow {
  name: string;
  /** Texto curto; `**trecho**` vira negrito (ver docs/guia-de-negrito.md). */
  text?: string;
  tag?: GuideTag;
}

export interface GuideGroup {
  id: string;
  title: string;
  rows: GuideRow[];
}

/** Tela estática de Extras: cartões por grupo, um cartão de destaque opcional e um rodapé. */
export interface StaticGuide {
  highlight?: GuideGroup;
  groups: GuideGroup[];
  footer: string;
}

export const green = (label: string): GuideTag => ({ label, tone: "green" });
export const orange = (label: string): GuideTag => ({ label, tone: "orange" });
