// Informações do aeroporto de Orlando (MCO), usadas na chegada do grupo (dia 6) e na busca do Rafael (dia 20).
import type { DetailSection } from "../types";

export const MCO_ADDRESS = "1 Jeff Fuqua Blvd, Orlando, FL 32827";

export const mcoSections: DetailSection[] = [
  {
    color: "gold",
    icon: "lightbulb",
    title: "Informação",
    paragraphs: ["Imigração, desembarque e bagagem."],
  },
  {
    color: "gold",
    icon: "sparkle",
    title: "Curiosidades e fotos",
    paragraphs: [
      "A sigla MCO vem da antiga base militar McCoy Air Force Base. Para fotos, aproveite os **átrios internos** com jardins tropicais e fontes naturais, ou a arquitetura futurista e envidraçada do **novo Terminal C**.",
    ],
  },
  {
    color: "palm",
    icon: "lightbulb",
    title: "Dica para aproveitar",
    paragraphs: [
      "Use o serviço **gratuito** MCO Reserve para agendar horário e furar a fila da segurança na volta, além de conferir as lojas temáticas da Disney, Universal e NASA ainda dentro do terminal.",
    ],
  },
];
