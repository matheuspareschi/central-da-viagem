// Catálogo de atrações do parque Universal Epic Universe.
// Fonte: docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf (transcrito sem alterações). Os textos ainda passarão por revisão.
import type { ParkAttraction, ParkArea } from "../../types";

export const epicUniverseAreas: ParkArea[] = [
  { key: "celestial-park", label: "Celestial Park" },
  { key: "sem-area", label: "Sem área informada" },
  { key: "donkey-kong", label: "Donkey Kong" },
  { key: "isle-of-berk", label: "Isle of Berk" },
  { key: "harry-potter", label: "Harry Potter" },
  { key: "dark-universe", label: "Dark Universe" },
];

export const epicUniverse: ParkAttraction[] = [
  { id: "stardust-racers", parkId: "epic-universe", area: "celestial-park", name: "Stardust Racers", type: "Montanha-Russa Dupla", kind: "attraction", description: "Dueling coaster atingindo 100 km/h com manobra cruzada Celestial Spin." },
  { id: "mario-kart-bowsers-challenge", parkId: "epic-universe", area: "sem-area", name: "Mario Kart: Bowser’s Challenge", type: "Dark Ride em AR", kind: "attraction", description: "Corrida imersiva usando óculos de realidade aumentada no Reino Cogumelo." },
  { id: "mine-cart-madness", parkId: "epic-universe", area: "donkey-kong", name: "Mine-Cart Madness", type: "Montanha-Russa Inovadora", kind: "attraction", description: "Sistema de trilho oculto que simula o carrinho saltando sobre os trilhos quebrados." },
  { id: "hiccups-wing-gliders", parkId: "epic-universe", area: "isle-of-berk", name: "Hiccup’s Wing Gliders", type: "Montanha-Russa Familiar", kind: "attraction", description: "Voo desgovernado de planador por cima da vila dos Vikings e da lagoa." },
  { id: "battle-at-the-ministry", parkId: "epic-universe", area: "harry-potter", name: "Battle at the Ministry", type: "Dark Ride Avançada", kind: "attraction", description: "Elevador mágico pela rede Floo no Ministério da Magia britânico." },
  { id: "monsters-unchained", parkId: "epic-universe", area: "dark-universe", name: "Monsters Unchained", type: "Dark Ride Escura de Terror", kind: "attraction", description: "Fuga intensa no laboratório de Frankenstein com monstros clássicos soltos." },
];
