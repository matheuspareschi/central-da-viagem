// Catálogo de atrações do parque Disney's Hollywood Studios.
// Fonte: docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf (transcrito sem alterações). Os textos ainda passarão por revisão.
import type { ParkAttraction, ParkArea } from "../../types";

export const hollywoodStudiosAreas: ParkArea[] = [
  { key: "hollywood-and-sunset-boulevard", label: "Hollywood & Sunset Boulevard" },
  { key: "toy-story-land", label: "Toy Story Land" },
  { key: "echo-lake-and-animation-courtyard", label: "Echo Lake & Animation Courtyard" },
  { key: "star-wars-galaxys-edge-and-espetaculos", label: "Star Wars: Galaxy's Edge & Espetáculos" },
];

export const hollywoodStudios: ParkAttraction[] = [
  { id: "mickey-and-minnies-runaway-railway", parkId: "hollywood-studios", area: "hollywood-and-sunset-boulevard", name: "Mickey & Minnie’s Runaway Railway", type: "Dark Ride sem Trilhos", kind: "attraction", description: "Viagem imersiva e colorida dentro de um desenho animado do Mickey." },
  { id: "tower-of-terror", parkId: "hollywood-studios", area: "hollywood-and-sunset-boulevard", name: "Tower of Terror", type: "Torre de Queda Livre", kind: "attraction", description: "Elevador desgovernado em hotel abandonado com sequências de quedas aleatórias." },
  { id: "rock-n-roller-coaster-aerosmith", parkId: "hollywood-studios", area: "hollywood-and-sunset-boulevard", name: "Rock 'n' Roller Coaster Aerosmith", type: "Montanha-Russa de Lançamento", kind: "attraction", description: "Lançamento de 0 a 92 km/h no escuro com inversões e trilha de rock." },
  { id: "beauty-and-the-beast-live-on-stage", parkId: "hollywood-studios", area: "hollywood-and-sunset-boulevard", name: "Beauty and the Beast – Live on Stage", type: "Show Musical ao Vivo", kind: "show", description: "Apresentação estilo Broadway em teatro aberto recontando o clássico filme." },
  { id: "toy-story-mania", parkId: "hollywood-studios", area: "toy-story-land", name: "Toy Story Mania!", type: "Jogo Interativo 4D", kind: "attraction", description: "Tiro ao alvo 3D competitivo em carrinhos guiados ao lado dos brinquedos do Andy." },
  { id: "alien-swirling-saucers", parkId: "hollywood-studios", area: "toy-story-land", name: "Alien Swirling Saucers", type: "Atração Giratória", kind: "attraction", description: "Carrinhos puxados pelos alienígenas verdes girando ao som de músicas espaciais." },
  { id: "slinky-dog-dash", parkId: "hollywood-studios", area: "toy-story-land", name: "Slinky Dog Dash", type: "Montanha-Russa Familiar", kind: "attraction", description: "Coaster suave com dois lançamentos percorrendo o quintal montado pelo Andy." },
  { id: "indiana-jones-epic-stunt-spectacular", parkId: "hollywood-studios", area: "echo-lake-and-animation-courtyard", name: "Indiana Jones Epic Stunt Spectacular!", type: "Show de Acrobacias", kind: "show", description: "Demonstração ao vivo dos bastidores e efeitos especiais das cenas de Indiana Jones." },
  { id: "star-tours-the-adventures-continue", parkId: "hollywood-studios", area: "echo-lake-and-animation-courtyard", name: "Star Tours – The Adventures Continue", type: "Simulador de Voo 3D", kind: "attraction", description: "Viagem espacial em Star Speeder com combinação aleatória de múltiplos destinos." },
  { id: "frozen-sing-along-celebration", parkId: "hollywood-studios", area: "echo-lake-and-animation-courtyard", name: "Frozen Sing-Along Celebration", type: "Show Interativo Musical", kind: "show", description: "Apresentação cômica dos historiadores de Arendelle cantando as músicas de Frozen." },
  { id: "the-little-mermaid-musical-adventure", parkId: "hollywood-studios", area: "echo-lake-and-animation-courtyard", name: "The Little Mermaid – Musical Adventure", type: "Show Musical ao Vivo", kind: "show", description: "Espetáculo renovado com atores, fantoches e efeitos aquáticos." },
  { id: "millennium-falcon-smugglers-run", parkId: "hollywood-studios", area: "star-wars-galaxys-edge-and-espetaculos", name: "Millennium Falcon: Smugglers Run", type: "Simulador Interativo de Voo", kind: "attraction", description: "Pilote a nave de Han Solo em cabine de 6 pessoas (pilotos, atiradores e engenheiros)." },
  { id: "star-wars-rise-of-the-resistance", parkId: "hollywood-studios", area: "star-wars-galaxys-edge-and-espetaculos", name: "Star Wars: Rise of the Resistance", type: "Dark Ride Avançada", kind: "attraction", description: "Atração épica sem trilhos simulando uma fuga de uma nave da Primeira Ordem." },
  { id: "fantasmic", parkId: "hollywood-studios", area: "star-wars-galaxys-edge-and-espetaculos", name: "Fantasmic!", type: "Show Noturno na Lagoa", kind: "show", description: "Espetáculo de encerramento com Mickey Feiticeiro, projeções na água, fogos e lasers." },
];
