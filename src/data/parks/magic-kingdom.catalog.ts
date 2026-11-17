// Catálogo de atrações do Magic Kingdom.
// Fonte: docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf (tipo e descrição das atrações); shows e desfiles vêm da lista fornecida pelo Thiago (resumo de vídeo). Os textos ainda passarão por revisão.
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
  { id: "rail", parkId: "magic-kingdom", area: "main-street", name: "Walt Disney World Railroad", type: "Trem a Vapor", kind: "attraction", description: "Percorra 1,5 milha ao redor do parque, passando por diversas áreas temáticas." },
  { id: "town", parkId: "magic-kingdom", area: "main-street", name: "Town Square Theater", type: "Encontro com Personagem", kind: "attraction", description: "Ponto oficial para foto e interação com o Mickey Mouse em trajes de mágico." },
  { id: "pirates", parkId: "magic-kingdom", area: "adventureland", name: "Pirates of the Caribbean", type: "Dark Ride Aquática", kind: "attraction", description: "Passeio de barco por cenários piratas com pequenas quedas e Capitão Jack Sparrow." },
  { id: "swiss", parkId: "magic-kingdom", area: "adventureland", name: "Swiss Family Treehouse", type: "Caminhada (Walkthrough)", kind: "attraction", description: "Exploração da casa na árvore da Família Swiss com pontes de corda e vista panorâmica." },
  { id: "carpets", parkId: "magic-kingdom", area: "adventureland", name: "The Magic Carpets of Aladdin", type: "Carrossel Aéreo", kind: "attraction", description: "Tapetes voadores giratórios com controle de altura pelo próprio visitante." },
  { id: "tiki", parkId: "magic-kingdom", area: "adventureland", name: "Walt Disney's Enchanted Tiki Room", type: "Show Animatrônico", kind: "attraction", description: "Apresentação musical climatizada com pássaros e flores animatrônicas pioneiras." },
  { id: "jungle", parkId: "magic-kingdom", area: "adventureland", name: "Jungle Cruise", type: "Passeio de Barco", kind: "attraction", description: "Navegação bem-humorada por rios exóticos acompanhada de piadas do skipper." },
  { id: "tiana", parkId: "magic-kingdom", area: "frontierland", name: "Tiana's Bayou Adventure", type: "Atração Aquática (Log Flume)", kind: "attraction", description: "Percurso musical com personagens de A Princesa e o Sapo e queda de 16 metros." },
  { id: "bigthunder", parkId: "magic-kingdom", area: "frontierland", name: "Big Thunder Mountain Railroad", type: "Montanha-Russa Temática", kind: "attraction", description: "Montanha-russa do \"trem desgovernado\" através de desfiladeiros e cavernas do Velho Oeste. Estava em reforma no vídeo de origem: conferir.", verify: true },
  { id: "bears", parkId: "magic-kingdom", area: "frontierland", name: "Country Bear Musical Jamboree", type: "Show Animatrônico", kind: "attraction", description: "Show com ursos animatrônicos apresentando sucessos estilo bluegrass e country." },
  { id: "hall", parkId: "magic-kingdom", area: "liberty-square", name: "The Hall of Presidents", type: "Show Animatrônico", kind: "attraction", description: "Apresentação teatral com robôs animatrônicos de todos os presidentes dos EUA." },
  { id: "haunted", parkId: "magic-kingdom", area: "liberty-square", name: "Haunted Mansion", type: "Dark Ride Escura", kind: "attraction", description: "Viagem em Doom Buggies por uma mansão mal-assombrada com 999 fantasmas." },
  { id: "dwarfs", parkId: "magic-kingdom", area: "fantasyland", name: "Seven Dwarfs Mine Train", type: "Montanha-Russa Familiar", kind: "attraction", description: "Montanha-russa na mina dos Sete Anões com vagões que balançam lateralmente." },
  { id: "carrousel", parkId: "magic-kingdom", area: "fantasyland", name: "Prince Charming Regal Carrousel", type: "Carrossel Clássico", kind: "attraction", description: "Carrossel tradicional com 90 cavalos entalhados à mão e temática de Cinderela." },
  { id: "philhar", parkId: "magic-kingdom", area: "fantasyland", name: "Mickey's PhilharMagic", type: "Cinema 3D / Show", kind: "attraction", description: "Filme 3D imersivo e musical estrelado pelo Pato Donald." },
  { id: "teacups", parkId: "magic-kingdom", area: "fantasyland", name: "Mad Tea Party", type: "Atração Giratória", kind: "attraction", description: "Xícaras giratórias onde o visitante controla a rotação do carrinho." },
  { id: "peterpan", parkId: "magic-kingdom", area: "fantasyland", name: "Peter Pan's Flight", type: "Dark Ride Suspensa", kind: "attraction", description: "Voo em navio pirata suspenso sobre a cidade de Londres e a Terra do Nunca." },
  { id: "smallworld", parkId: "magic-kingdom", area: "fantasyland", name: "It's a Small World", type: "Passeio de Barco", kind: "attraction", description: "Percurso sereno com mais de 300 bonecos animatrônicos celebrando a união global." },
  { id: "pooh", parkId: "magic-kingdom", area: "fantasyland", name: "The Many Adventures of Winnie the Pooh", type: "Dark Ride Infantil", kind: "attraction", description: "Passeio em potes de mel pelos cenários do Bosque dos 100 Acres." },
  { id: "mermaid", parkId: "magic-kingdom", area: "fantasyland", name: "Under the Sea: Journey of The Little Mermaid", type: "Dark Ride Infantil", kind: "attraction", description: "Carrinhos em formato de concha recontando a clássica história da Ariel." },
  { id: "casey", parkId: "magic-kingdom", area: "fantasyland", name: "Casey Jr. Splash 'N' Soak Station", type: "Área Infantil Aquática", kind: "attraction", description: "Espaço temático cirquense de jogos e jatos d'água para crianças." },
  { id: "dumbo", parkId: "magic-kingdom", area: "fantasyland", name: "Dumbo the Flying Elephant", type: "Carrossel Aéreo", kind: "attraction", description: "Voo a bordo do Dumbo com parquinho coberto interativo na fila." },
  { id: "barn", parkId: "magic-kingdom", area: "fantasyland", name: "The Barnstormer", type: "Montanha-Russa Infantil", kind: "attraction", description: "Coaster suave temática do Pateta como piloto acrobático." },
  { id: "space", parkId: "magic-kingdom", area: "tomorrowland", name: "Space Mountain", type: "Montanha-Russa no Escuro", kind: "attraction", description: "Clássica montanha-russa totalmente no escuro simulando viagem espacial." },
  { id: "tron", parkId: "magic-kingdom", area: "tomorrowland", name: "TRON Lightcycle / Run", type: "Montanha-Russa de Lançamento", kind: "attraction", description: "Motos futuristas de alta velocidade atingindo quase 100 km/h sob uma cobertura iluminada." },
  { id: "astro", parkId: "magic-kingdom", area: "tomorrowland", name: "Astro Orbiter", type: "Carrossel Aéreo Elevado", kind: "attraction", description: "Foguetes giratórios em uma torre elevada com vista panorâmica do parque." },
  { id: "laugh", parkId: "magic-kingdom", area: "tomorrowland", name: "Monsters, Inc. Laugh Floor", type: "Show de Comédia Interativo", kind: "attraction", description: "Monstros em telas interativas fazendo piadas em tempo real com a plateia." },
  { id: "buzz", parkId: "magic-kingdom", area: "tomorrowland", name: "Buzz Lightyear's Space Ranger Spin", type: "Dark Ride Interativa de Tiro", kind: "attraction", description: "Carrinhos giratórios de 360° com pistolas laser para acumular pontos contra Zurg. Estava em reforma no vídeo de origem: conferir." },
  { id: "progress", parkId: "magic-kingdom", area: "tomorrowland", name: "Walt Disney's Carousel of Progress", type: "Teatro Rotativo", kind: "attraction", description: "Auditório giratório mostrando a evolução tecnológica nas casas do século XX." },
  { id: "peoplemover", parkId: "magic-kingdom", area: "tomorrowland", name: "Tomorrowland Transit Authority PeopleMover", type: "Passeio Panorâmico Elevado", kind: "attraction", description: "Trem elétrico silencioso que percorre Tomorrowland por cima dos edifícios." },
  { id: "speedway", parkId: "magic-kingdom", area: "tomorrowland", name: "Tomorrowland Speedway", type: "Pista de Corrida", kind: "attraction", description: "Autorama onde crianças e adultos dirigem pequenos carros a combustível." },
  { id: "begin", parkId: "magic-kingdom", area: "shows", name: "Let the Magic Begin", type: "Show de abertura", kind: "show", description: "Cerimônia da manhã no palco do Castelo, com Mickey e amigos." },
  { id: "faire", parkId: "magic-kingdom", area: "shows", name: "Mickey's Magical Friendship Faire", type: "Show de palco", kind: "show", description: "Show musical diurno no palco do castelo, com princesas e personagens." },
  { id: "parade", parkId: "magic-kingdom", area: "shows", name: "Festival of Fantasy Parade", type: "Parada diurna", kind: "show", description: "Carros alegóricos gigantes e o dragão da Malévola, que solta fogo de verdade." },
  { id: "happily", parkId: "magic-kingdom", area: "shows", name: "Happily Ever After", type: "Show noturno", kind: "show", description: "Fogos, luzes, trilha marcante e projeções no castelo." },
  { id: "starlight", parkId: "magic-kingdom", area: "shows", name: "Disney Starlight", type: "Parada noturna", kind: "show", description: "Desfile noturno com trajes iluminados pela Main Street, U.S.A." },
];
