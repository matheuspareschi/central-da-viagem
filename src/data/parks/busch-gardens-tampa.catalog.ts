// Catálogo de atrações do parque Busch Gardens Tampa Bay.
// Fonte: docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf (transcrito sem alterações). Os textos ainda passarão por revisão.
import type { ParkAttraction, ParkArea } from "../../types";

export const buschGardensTampaAreas: ParkArea[] = [
  { key: "atracoes", label: "Atrações" },
];

export const buschGardensTampa: ParkAttraction[] = [
  { id: "iron-gwazi", parkId: "busch-gardens-tampa", area: "atracoes", name: "Iron Gwazi", type: "Montanha-Russa Híbrida", kind: "attraction", description: "Uma das melhores coasters do mundo: queda de 91°, 76 km/h e inversões intensas." },
  { id: "sheikra", parkId: "busch-gardens-tampa", area: "atracoes", name: "SheiKra", type: "Dive Coaster (Queda Vertical)", kind: "attraction", description: "Montanha-russa que para a 60m de altura antes de uma queda vertical de 90°." },
  { id: "cheetah-hunt", parkId: "busch-gardens-tampa", area: "atracoes", name: "Cheetah Hunt", type: "Montanha-Russa de Lançamento Múltiplo", kind: "attraction", description: "Três lançamentos velozes simulam a agilidade de um guepardo pela savana." },
  { id: "montu", parkId: "busch-gardens-tampa", area: "atracoes", name: "Montu", type: "Montanha-Russa Invertida", kind: "attraction", description: "Clássica coaster com os pés pendurados, 7 inversões e trincheiras subterrâneas." },
  { id: "tigris", parkId: "busch-gardens-tampa", area: "atracoes", name: "Tigris", type: "Montanha-Russa de Lançamento", kind: "attraction", description: "Lançamentos para frente e para trás culminando em uma rotação no topo da torre." },
  { id: "cobrass-curse", parkId: "busch-gardens-tampa", area: "atracoes", name: "Cobras's Curse", type: "Montanha-Russa Giratória", kind: "attraction", description: "Subida por elevador vertical e vagões que giram livremente pelo circuito." },
  { id: "serengeti-flyer", parkId: "busch-gardens-tampa", area: "atracoes", name: "Serengeti Flyer", type: "Pêndulo Gigante", kind: "attraction", description: "Balanço gigante a 109 km/h com vista panorâmica da savana africana." },
  { id: "serengeti-express", parkId: "busch-gardens-tampa", area: "atracoes", name: "Serengeti Express", type: "Trem Panorâmico Safári", kind: "attraction", description: "Trem a vapor que percorre a savana do parque permitindo ver animais soltos." },
];
