// Catálogo de atrações do parque Universal Islands of Adventure.
// Fonte: docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf (transcrito sem alterações). Os textos ainda passarão por revisão.
import type { ParkAttraction, ParkArea } from "../../types";

export const islandsOfAdventureAreas: ParkArea[] = [
  { key: "marvel-super-hero-island", label: "Marvel Super Hero Island" },
  { key: "toon-lagoon-and-skull-island", label: "Toon Lagoon & Skull Island" },
  { key: "seuss-landing-and-the-lost-continent", label: "Seuss Landing & The Lost Continent" },
  { key: "jurassic-park", label: "Jurassic Park" },
  { key: "the-wizarding-world-of-harry-potter-hogsmeade", label: "The Wizarding World of Harry Potter - Hogsmeade" },
];

export const islandsOfAdventure: ParkAttraction[] = [
  { id: "the-incredible-hulk-coaster", parkId: "islands-of-adventure", area: "marvel-super-hero-island", name: "The Incredible Hulk Coaster", type: "Montanha-Russa de Lançamento", kind: "attraction", description: "Lançamento de 0 a 64 km/h em túnel inclinado com 7 inversões sobre a lagoa." },
  { id: "doctor-dooms-fearfall", parkId: "islands-of-adventure", area: "marvel-super-hero-island", name: "Doctor Doom's Fearfall", type: "Torre de Queda Livre", kind: "attraction", description: "Lançamento vertical de 50 metros de altura seguido por queda em gravidade zero." },
  { id: "the-amazing-adventures-of-spider-man", parkId: "islands-of-adventure", area: "marvel-super-hero-island", name: "The Amazing Adventures of Spider-Man", type: "Simulador 3D / 4D", kind: "attraction", description: "Passeio imersivo em veículos Scoop combatendo o Sexteto Sinistro." },
  { id: "dudley-do-rights-ripsaw-falls", parkId: "islands-of-adventure", area: "toon-lagoon-and-skull-island", name: "Dudley Do-Right’s Ripsaw Falls", type: "Log Flume (Aquática)", kind: "attraction", description: "Barco em calha d'água com uma queda livre final de 23 metros." },
  { id: "popeye-and-blutos-bilge-rat-barges", parkId: "islands-of-adventure", area: "toon-lagoon-and-skull-island", name: "Popeye & Bluto’s Bilge-Rat Barges", type: "Raft de Corredeiras", kind: "attraction", description: "Bote circular de corredeiras famoso por molhar completamente os passageiros." },
  { id: "skull-island-reign-of-kong", parkId: "islands-of-adventure", area: "toon-lagoon-and-skull-island", name: "Skull Island: Reign of Kong", type: "Simulador de Caminhão 3D", kind: "attraction", description: "Expedição por cavernas sombrias finalizando com animatrônico gigante do King Kong." },
  { id: "the-cat-in-the-hat", parkId: "islands-of-adventure", area: "seuss-landing-and-the-lost-continent", name: "The Cat in the Hat", type: "Dark Ride Infantil", kind: "attraction", description: "Carrinhos em formato de sofá passando pela história do livro do O Gato de Chapéu." },
  { id: "the-high-in-the-sky-seuss-trolley-train", parkId: "islands-of-adventure", area: "seuss-landing-and-the-lost-continent", name: "The High in the Sky Seuss Trolley Train!", type: "Monotrilho Panorâmico", kind: "attraction", description: "Passeio elevado que percorre Seuss Landing e o teto dos edifícios." },
  { id: "mystic-fountain", parkId: "islands-of-adventure", area: "seuss-landing-and-the-lost-continent", name: "Mystic Fountain", type: "Fonte Interativa", kind: "attraction", description: "Fonte que conversa, faz piadas e espirra água nos visitantes desavisados." },
  { id: "jurassic-park-river-adventure", parkId: "islands-of-adventure", area: "jurassic-park", name: "Jurassic Park River Adventure", type: "Passeio de Barco Aquático", kind: "attraction", description: "Navegação entre dinossauros soltos com queda na água de 26 metros de altura." },
  { id: "jurassic-world-velocicoaster", parkId: "islands-of-adventure", area: "jurassic-park", name: "Jurassic World VelociCoaster", type: "Montanha-Russa Extrema", kind: "attraction", description: "A mais rápida do parque (112 km/h), com 2 lançamentos, 4 inversões e queda de 80°." },
  { id: "raptor-encounter", parkId: "islands-of-adventure", area: "jurassic-park", name: "Raptor Encounter", type: "Encontro com Personagem", kind: "attraction", description: "Fotos e interação realista com velociraptores com suporte de tratadores." },
  { id: "pteranodon-flyers", parkId: "islands-of-adventure", area: "jurassic-park", name: "Pteranodon Flyers", type: "Voo Suspenso Infantil", kind: "attraction", description: "Cadeirinhas voadoras por cima das árvores de Camp Jurassic (restrito a crianças com acompanhante)." },
  { id: "harry-potter-and-the-forbidden-journey", parkId: "islands-of-adventure", area: "the-wizarding-world-of-harry-potter-hogsmeade", name: "Harry Potter & the Forbidden Journey", type: "Simulador de Braço Robótico", kind: "attraction", description: "Voo mágico ao redor do Castelo de Hogwarts em assentos robotizados." },
  { id: "hagrids-magical-creatures-motorbike", parkId: "islands-of-adventure", area: "the-wizarding-world-of-harry-potter-hogsmeade", name: "Hagrid’s Magical Creatures Motorbike", type: "Montanha-Russa de Lançamentos", kind: "attraction", description: "Coaster na moto do Hagrid com 7 lançamentos e trechos para trás na Floresta Proibida." },
  { id: "flight-of-the-hippogriff", parkId: "islands-of-adventure", area: "the-wizarding-world-of-harry-potter-hogsmeade", name: "Flight of the Hippogriff", type: "Montanha-Russa Familiar", kind: "attraction", description: "Passeio suave de coaster sobrevoando a cabana do Hagrid e o Hipogrifo." },
];
