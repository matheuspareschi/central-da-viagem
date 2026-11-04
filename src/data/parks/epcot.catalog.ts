// Catálogo de atrações do EPCOT.
// Fonte: docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf (transcrito sem alterações). Os textos ainda passarão por revisão.
import type { ParkAttraction, ParkArea } from "../../types";

export const epcotAreas: ParkArea[] = [
  { key: "world-celebration-world-discovery", label: "World Celebration & World Discovery" },
  { key: "world-nature", label: "World Nature" },
  { key: "world-showcase-pavilhoes-dos-paises", label: "World Showcase (Pavilhões dos Países)" },
];

export const epcot: ParkAttraction[] = [
  { id: "spaceship-earth", parkId: "epcot", area: "world-celebration-world-discovery", name: "Spaceship Earth", type: "Dark Ride / Omnimover", kind: "attraction", description: "Viagem por dentro do símbolo do parque narrando a história da comunicação humana." },
  { id: "guardians-of-the-galaxy-cosmic-rewind", parkId: "epcot", area: "world-celebration-world-discovery", name: "Guardians of the Galaxy: Cosmic Rewind", type: "Montanha-Russa de Lançamento", kind: "attraction", description: "Montanha-russa interna com rotação 360° dos carrinhos e lançamento reverso ao som de clássicos do rock." },
  { id: "mission-space", parkId: "epcot", area: "world-celebration-world-discovery", name: "Mission: SPACE", type: "Simulador de Centrífuga", kind: "attraction", description: "Simulador de missão a Marte com força G real (Equipe Laranja) ou voo suave pela Terra (Verde)." },
  { id: "test-track", parkId: "epcot", area: "world-celebration-world-discovery", name: "Test Track", type: "Montanha-Russa Automotiva", kind: "attraction", description: "Atração de teste de veículos que encerra com circuito de alta velocidade ao ar livre." },
  { id: "soarin-around-the-world", parkId: "epcot", area: "world-nature", name: "Soarin’ Around the World", type: "Simulador de Voo Panorâmico", kind: "attraction", description: "Voo suspenso diante de tela gigante IMAX sobrevoando marcos dos continentes." },
  { id: "living-with-the-land", parkId: "epcot", area: "world-nature", name: "Living with the Land", type: "Passeio de Barco Educativo", kind: "attraction", description: "Cruzeiro relaxante pelas estufas agrícolas do parque onde alimentos são cultivados." },
  { id: "journey-into-imagination-with-figment", parkId: "epcot", area: "world-nature", name: "Journey into Imagination with Figment", type: "Dark Ride Infantil", kind: "attraction", description: "Passeio pelo laboratório dos sentidos acompanhado do dragão Figment." },
  { id: "the-seas-with-nemo-and-friends", parkId: "epcot", area: "world-nature", name: "The Seas with Nemo & Friends", type: "Dark Ride & Aquário", kind: "attraction", description: "Carrinhos em formato de concha no fundo do mar desaguando em um aquário real." },
  { id: "journey-of-water-moana", parkId: "epcot", area: "world-nature", name: "Journey of Water (Moana)", type: "Trilha Interativa (Walkthrough)", kind: "attraction", description: "Percurso a pé com águas mágicas que reagem aos movimentos dos visitantes." },
  { id: "frozen-ever-after-noruega", parkId: "epcot", area: "world-showcase-pavilhoes-dos-paises", name: "Frozen Ever After (Noruega)", type: "Dark Ride Aquática", kind: "attraction", description: "Passeio de barco pelo reino de Arendelle com músicas icônicas e animatrônicos." },
  { id: "remys-ratatouille-adventure-franca", parkId: "epcot", area: "world-showcase-pavilhoes-dos-paises", name: "Remy’s Ratatouille Adventure (França)", type: "Dark Ride 4D sem Trilhos", kind: "attraction", description: "Experiência que encolhe o visitante ao tamanho do ratinho Remy pela cozinha." },
  { id: "grand-fiesta-tour-mexico", parkId: "epcot", area: "world-showcase-pavilhoes-dos-paises", name: "Grand Fiesta Tour (México)", type: "Passeio de Barco Tranquilo", kind: "attraction", description: "Navegação relaxante dentro da pirâmide maia com Zé Carioca e Donald." },
  { id: "canada-china-far-and-wide", parkId: "epcot", area: "world-showcase-pavilhoes-dos-paises", name: "Canada / China Far & Wide", type: "Filmes 360° Circle-Vision", kind: "attraction", description: "Cinemas de tela circular imersiva mostrando a cultura e paisagens desses países." },
  { id: "luminous-the-symphony-of-us", parkId: "epcot", area: "world-showcase-pavilhoes-dos-paises", name: "Luminous The Symphony of Us", type: "Show Noturno na Lagoa", kind: "show", description: "Espetáculo de encerramento no lago central com fogos, fontes dançantes e lasers." },
];
