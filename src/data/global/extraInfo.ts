import { Footprints, Trash2, type LucideIcon } from "lucide-react";

export type ExtraInfoContent =
  | { kind: "externalLink"; href: string }
  | { kind: "shoeSizeChart" }
  | { kind: "trashInstructions" };

export interface ExtraInfoItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  content: ExtraInfoContent;
}

/** Informações úteis da viagem: conteúdo exibido no próprio cartão ou link para fora do app. */
export const extraInfoItems: ExtraInfoItem[] = [
  {
    id: "conversor-calcado",
    title: "Conversor de Tamanho de Calçado",
    description: "Numeração brasileira x americana, pra conferir na hora de comprar tênis/sapatos nos outlets.",
    icon: Footprints,
    content: { kind: "shoeSizeChart" },
  },
  {
    id: "instrucoes-lixo",
    title: "Instruções para o Lixo",
    description: "Storey Lake Resort",
    icon: Trash2,
    content: { kind: "trashInstructions" },
  },
];
