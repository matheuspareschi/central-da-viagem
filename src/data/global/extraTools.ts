import { Calculator, Car, Footprints, ListChecks, Scale, ShoppingCart, Trash2, type LucideIcon } from "lucide-react";

export type ExtraToolId = "conversor" | "desconto-imposto" | "mercado" | "lixo" | "antes-de-viajar" | "pedagio" | "calcado";

export interface ExtraTool {
  id: ExtraToolId;
  /** Título curto do quadradinho. */
  tileTitle: string;
  /** Título da subpágina. */
  pageTitle: string;
  /** Apoio do quadradinho quando não depende do que o usuário marcou. */
  tileSupport?: string;
  /** Linha de apoio da subpágina. */
  description: string;
  /** Nome completo para leitores de tela. */
  tileAriaLabel: string;
  icon: LucideIcon;
  /** Fundo e cor do ícone circular. */
  iconClasses: string;
  /** A ferramenta desenha os próprios cartões, sem o cartão-moldura da subpágina. */
  hasOwnCards?: boolean;
}

/** Ferramentas da aba Extras, na ordem em que aparecem na grade. */
export const extraTools: ExtraTool[] = [
  {
    id: "conversor",
    tileTitle: "Conversor",
    pageTitle: "Conversor de peso",
    tileSupport: "Libras ↔ quilos",
    description: "Para o limite das malas e o preço por libra nos mercados.",
    tileAriaLabel: "Abrir Conversor de peso",
    icon: Scale,
    iconClasses: "bg-[#e3e2dc] text-ink",
  },
  {
    id: "desconto-imposto",
    tileTitle: "Desconto e imposto",
    pageTitle: "Desconto e imposto",
    tileSupport: "Preço final com % off",
    description: "O desconto vem primeiro; o imposto é cobrado depois, sobre o preço já com desconto.",
    tileAriaLabel: "Abrir Desconto e imposto",
    icon: Calculator,
    iconClasses: "bg-citrus-tint text-citrus-text",
  },
  {
    id: "mercado",
    tileTitle: "Mercado",
    pageTitle: "Compras básicas de mercado",
    description: "Marque o que já foi comprado. Dá para incluir itens próprios.",
    tileAriaLabel: "Abrir Compras básicas de mercado",
    icon: ShoppingCart,
    iconClasses: "bg-palm-tint text-[#1f5a40]",
  },
  {
    id: "lixo",
    tileTitle: "Instruções do lixo",
    pageTitle: "Instruções para o Lixo",
    tileSupport: "Descarte do lixo",
    description: "Storey Lake Resort",
    tileAriaLabel: "Abrir Instruções do lixo",
    icon: Trash2,
    iconClasses: "bg-[#dfe3f0] text-[#2f3f73]",
  },
  {
    id: "antes-de-viajar",
    tileTitle: "Antes de viajar",
    pageTitle: "Antes de viajar",
    description: "O que resolver ainda no Brasil.",
    tileAriaLabel: "Abrir Antes de viajar",
    icon: ListChecks,
    iconClasses: "bg-gold-tint text-[#6b4a0b]",
  },
  {
    id: "pedagio",
    tileTitle: "Pedágio",
    pageTitle: "Visitor Toll Pass",
    tileSupport: "Visitor Toll Pass",
    description: "Recomendado para turistas em Orlando.",
    tileAriaLabel: "Abrir Pedágio, Visitor Toll Pass",
    icon: Car,
    iconClasses: "bg-[#d9ecee] text-[#1d5560]",
    hasOwnCards: true,
  },
  {
    id: "calcado",
    tileTitle: "Calçados",
    pageTitle: "Conversor de Tamanho de Calçado",
    tileSupport: "Numeração BR x EUA",
    description: "Numeração brasileira x americana, pra conferir na hora de comprar tênis/sapatos nos outlets.",
    tileAriaLabel: "Abrir Conversor de tamanho de calçado",
    icon: Footprints,
    iconClasses: "bg-[#e3e2dc] text-ink",
  },
];

export function findExtraTool(id: string | undefined): ExtraTool | undefined {
  return extraTools.find((tool) => tool.id === id);
}
