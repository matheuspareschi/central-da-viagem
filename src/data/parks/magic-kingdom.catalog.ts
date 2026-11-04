// Catálogo de atrações do Magic Kingdom.
// Fonte: lista fornecida pelo Thiago (resumo de vídeo). Os textos ainda passarão por revisão.
// `verify: true` marca itens que precisam ser conferidos antes da viagem.
import type { ParkAttraction, ParkArea } from "../../types";

export const magicKingdomAreas: ParkArea[] = [
  { key: "main-street", label: "Main Street, U.S.A." },
  { key: "adventureland", label: "Adventureland" },
  { key: "frontierland", label: "Frontierland" },
  { key: "liberty-square", label: "Liberty Square" },
  { key: "fantasyland", label: "Fantasyland" },
  { key: "tomorrowland", label: "Tomorrowland" },
  { key: "shows", label: "Shows e desfiles" },
];

export const magicKingdom: ParkAttraction[] = [
  { id: "rail", parkId: "magic-kingdom", area: "main-street", name: "Walt Disney World Railroad", type: "Trem a vapor", kind: "attraction", description: "Percorre 1,5 milha ao redor do parque, passando por Adventureland, Frontierland e Tomorrowland." },
  { id: "town", parkId: "magic-kingdom", area: "main-street", name: "Town Square Theater", type: "Encontro com personagem", kind: "attraction", description: "Encontro com o Mickey Mouse vestido de mágico." },
  { id: "pirates", parkId: "magic-kingdom", area: "adventureland", name: "Pirates of the Caribbean", type: "Passeio de barco no escuro", kind: "attraction", description: "Cavernas misteriosas, pequena queda na água e batalhas navais com o Capitão Jack Sparrow." },
  { id: "swiss", parkId: "magic-kingdom", area: "adventureland", name: "Swiss Family Treehouse", type: "Caminhada", kind: "attraction", description: "Subida por degraus e pontes de corda numa árvore temática, com vista panorâmica do parque." },
  { id: "carpets", parkId: "magic-kingdom", area: "adventureland", name: "The Magic Carpets of Aladdin", type: "Carrossel aéreo", kind: "attraction", description: "Tapetes voadores giratórios. Você controla a altura e tenta escapar da água dos camelos." },
  { id: "tiki", parkId: "magic-kingdom", area: "adventureland", name: "Walt Disney's Enchanted Tiki Room", type: "Show animatrônico", kind: "attraction", description: "Show musical climatizado, pioneiro no uso de animatrônicos no parque." },
  { id: "jungle", parkId: "magic-kingdom", area: "adventureland", name: "Jungle Cruise", type: "Passeio de barco", kind: "attraction", description: "Rios tropicais com animais de réplica e um skipper cheio de piadas." },
  { id: "tiana", parkId: "magic-kingdom", area: "frontierland", name: "Tiana's Bayou Adventure", type: "Atração aquática", kind: "attraction", description: "Barco em percurso aquático com animatrônicos avançados, músicas de A Princesa e o Sapo e queda final de 16 metros." },
  { id: "bigthunder", parkId: "magic-kingdom", area: "frontierland", name: "Big Thunder Mountain Railroad", type: "Montanha-russa temática", kind: "attraction", description: "O \"trem desgovernado da mina\", por desfiladeiros e cavernas do Velho Oeste. Estava em reforma no vídeo de origem: conferir.", verify: true },
  { id: "bears", parkId: "magic-kingdom", area: "frontierland", name: "Country Bear Musical Jamboree", type: "Show animatrônico", kind: "attraction", description: "Ursos animatrônicos tocando clássicos da Disney em estilo bluegrass e country. Reformulado em 2024." },
  { id: "hall", parkId: "magic-kingdom", area: "liberty-square", name: "The Hall of Presidents", type: "Show teatral", kind: "attraction", description: "Animatrônicos de todos os presidentes dos Estados Unidos no mesmo palco." },
  { id: "haunted", parkId: "magic-kingdom", area: "liberty-square", name: "Haunted Mansion", type: "Passeio no escuro", kind: "attraction", description: "Viagem nos Doom Buggies por uma mansão mal-assombrada, com 999 fantasmas." },
  { id: "dwarfs", parkId: "magic-kingdom", area: "fantasyland", name: "Seven Dwarfs Mine Train", type: "Montanha-russa familiar", kind: "attraction", description: "Trechos externos e uma mina iluminada com animatrônicos dos Sete Anões e vagões que balançam para os lados." },
  { id: "carrousel", parkId: "magic-kingdom", area: "fantasyland", name: "Prince Charming Regal Carrousel", type: "Carrossel clássico", kind: "attraction", description: "90 cavalos entalhados à mão e cenas da história da Cinderela." },
  { id: "philhar", parkId: "magic-kingdom", area: "fantasyland", name: "Mickey's PhilharMagic", type: "Cinema 3D", kind: "attraction", description: "O Pato Donald causa uma confusão musical entre clássicos da Disney, em 3D." },
  { id: "teacups", parkId: "magic-kingdom", area: "fantasyland", name: "Mad Tea Party", type: "Atração giratória", kind: "attraction", description: "As xícaras giratórias, com velocidade controlada pelos próprios passageiros." },
  { id: "peterpan", parkId: "magic-kingdom", area: "fantasyland", name: "Peter Pan's Flight", type: "Passeio suspenso no escuro", kind: "attraction", description: "Navios piratas suspensos que sobrevoam Londres rumo à Terra do Nunca." },
  { id: "smallworld", parkId: "magic-kingdom", area: "fantasyland", name: "It's a Small World", type: "Passeio de barco", kind: "attraction", description: "Mais de 300 bonecos animatrônicos de crianças do mundo todo cantando a música-tema." },
  { id: "pooh", parkId: "magic-kingdom", area: "fantasyland", name: "The Many Adventures of Winnie the Pooh", type: "Passeio no escuro", kind: "attraction", description: "Potes de mel pelo Bosque dos 100 Acres." },
  { id: "mermaid", parkId: "magic-kingdom", area: "fantasyland", name: "Under the Sea: Journey of The Little Mermaid", type: "Passeio no escuro", kind: "attraction", description: "Carrinhos em forma de concha contam a história de Ariel." },
  { id: "casey", parkId: "magic-kingdom", area: "fantasyland", name: "Casey Jr. Splash 'N' Soak Station", type: "Área infantil aquática", kind: "attraction", description: "Espaço temático de circo com jatos d'água (Storybook Circus)." },
  { id: "dumbo", parkId: "magic-kingdom", area: "fantasyland", name: "Dumbo the Flying Elephant", type: "Carrossel aéreo", kind: "attraction", description: "Voo clássico no Dumbo, com fila num parquinho coberto (Storybook Circus)." },
  { id: "barn", parkId: "magic-kingdom", area: "fantasyland", name: "The Barnstormer", type: "Montanha-russa infantil", kind: "attraction", description: "Montanha-russa curta para crianças pequenas, com o Pateta acrobata (Storybook Circus)." },
  { id: "space", parkId: "magic-kingdom", area: "tomorrowland", name: "Space Mountain", type: "Montanha-russa no escuro", kind: "attraction", description: "Montanha-russa interna, totalmente no escuro, simulando uma viagem pelo espaço." },
  { id: "tron", parkId: "magic-kingdom", area: "tomorrowland", name: "TRON Lightcycle / Run", type: "Montanha-russa de alta velocidade", kind: "attraction", description: "Atração mais rápida do parque: motos futuristas a quase 100 km/h no mundo de TRON." },
  { id: "astro", parkId: "magic-kingdom", area: "tomorrowland", name: "Astro Orbiter", type: "Carrossel aéreo elevado", kind: "attraction", description: "Foguetes giratórios numa plataforma elevada, com ótima vista do parque." },
  { id: "laugh", parkId: "magic-kingdom", area: "tomorrowland", name: "Monsters, Inc. Laugh Floor", type: "Show de comédia interativo", kind: "attraction", description: "Show digital ao vivo, com piadas dos monstros em tempo real." },
  { id: "buzz", parkId: "magic-kingdom", area: "tomorrowland", name: "Buzz Lightyear's Space Ranger Spin", type: "Passeio interativo de tiro", kind: "attraction", description: "Carrinhos giratórios com armas laser. Estava em reforma no vídeo de origem: conferir." },
  { id: "progress", parkId: "magic-kingdom", area: "tomorrowland", name: "Walt Disney's Carousel of Progress", type: "Show em teatro rotativo", kind: "attraction", description: "O auditório gira e mostra a evolução da tecnologia nas casas americanas." },
  { id: "peoplemover", parkId: "magic-kingdom", area: "tomorrowland", name: "Tomorrowland Transit Authority PeopleMover", type: "Passeio panorâmico elevado", kind: "attraction", description: "Trem elétrico que passa por dentro da Space Mountain." },
  { id: "speedway", parkId: "magic-kingdom", area: "tomorrowland", name: "Tomorrowland Speedway", type: "Pista de corrida", kind: "attraction", description: "Autorama a gasolina, a até 11 km/h." },
  { id: "begin", parkId: "magic-kingdom", area: "shows", name: "Let the Magic Begin", type: "Show de abertura", kind: "show", description: "Cerimônia da manhã no palco do Castelo, com Mickey e amigos." },
  { id: "faire", parkId: "magic-kingdom", area: "shows", name: "Mickey's Magical Friendship Faire", type: "Show de palco", kind: "show", description: "Show musical diurno no palco do castelo, com princesas e personagens." },
  { id: "parade", parkId: "magic-kingdom", area: "shows", name: "Festival of Fantasy Parade", type: "Parada diurna", kind: "show", description: "Carros alegóricos gigantes e o dragão da Malévola, que solta fogo de verdade." },
  { id: "happily", parkId: "magic-kingdom", area: "shows", name: "Happily Ever After", type: "Show noturno", kind: "show", description: "Fogos, luzes, trilha marcante e projeções no castelo." },
  { id: "starlight", parkId: "magic-kingdom", area: "shows", name: "Disney Starlight", type: "Parada noturna", kind: "show", description: "Desfile noturno com trajes iluminados pela Main Street, U.S.A." },
];
