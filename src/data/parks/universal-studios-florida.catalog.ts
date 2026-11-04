// Catálogo de atrações do parque Universal Studios Florida.
// Fonte: docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf (transcrito sem alterações). Os textos ainda passarão por revisão.
import type { ParkAttraction, ParkArea } from "../../types";

export const universalStudiosFloridaAreas: ParkArea[] = [
  { key: "minion-land", label: "Minion Land" },
  { key: "new-york", label: "New York" },
  { key: "san-francisco-and-hollywood", label: "San Francisco & Hollywood" },
  { key: "world-expo-and-dreamworks-land", label: "World Expo & DreamWorks Land" },
  { key: "springfield-and-diagon-alley-harry-potter", label: "Springfield & Diagon Alley (Harry Potter)" },
];

export const universalStudiosFlorida: ParkAttraction[] = [
  { id: "despicable-me-minion-mayhem", parkId: "universal-studios-florida", area: "minion-land", name: "Despicable Me Minion Mayhem", type: "Simulador de Movimento", kind: "attraction", description: "Treinamento caótico para se transformar em Minion na casa do Gru." },
  { id: "villain-con-minion-blast", parkId: "universal-studios-florida", area: "minion-land", name: "Villain-Con Minion Blast", type: "Atração Interativa (Walkthrough)", kind: "attraction", description: "Caminhada em esteira rolante usando blasters para atirar em alvos virtuais." },
  { id: "illumination-theater", parkId: "universal-studios-florida", area: "minion-land", name: "Illumination Theater", type: "Encontro com Personagens", kind: "attraction", description: "Fotos e encontro com personagens de Meu Malvado Favorito e Sing." },
  { id: "transformers-the-ride-3d", parkId: "universal-studios-florida", area: "new-york", name: "TRANSFORMERS: The Ride-3D", type: "Simulador de Movimento 3D", kind: "attraction", description: "Batalha em carrinhos móveis junto aos Autobots contra Decepticons." },
  { id: "race-through-new-york-jimmy-fallon", parkId: "universal-studios-florida", area: "new-york", name: "Race Through New York Jimmy Fallon", type: "Simulador de Movimento 3D", kind: "attraction", description: "Corrida divertida pelos pontos turísticos de NY com o apresentador Jimmy Fallon." },
  { id: "revenge-of-the-mummy", parkId: "universal-studios-florida", area: "new-york", name: "Revenge of the Mummy", type: "Montanha-Russa no Escuro", kind: "attraction", description: "Coaster interna rápida com fogo real, múmias animatrônicas e acelerações repentinas." },
  { id: "shows-de-rua-blues-brothers-beat-builders", parkId: "universal-studios-florida", area: "new-york", name: "Shows de Rua (Blues Brothers / Beat Builders)", type: "Shows de Música ao Vivo", kind: "show", description: "Apresentações musicais de rua com clássicos de blues e percussão de obra." },
  { id: "fast-and-furious-supercharged", parkId: "universal-studios-florida", area: "san-francisco-and-hollywood", name: "Fast & Furious - Supercharged", type: "Simulador de Ônibus", kind: "attraction", description: "Perseguição em alta velocidade ao lado da família de Velozes e Furiosos." },
  { id: "horror-make-up-show", parkId: "universal-studios-florida", area: "san-francisco-and-hollywood", name: "Horror Make-Up Show", type: "Show de Comédia / Bastidores", kind: "show", description: "Demonstração bem-humorada da criação de maquiagens e monstros de cinema." },
  { id: "the-bourne-stuntacular", parkId: "universal-studios-florida", area: "san-francisco-and-hollywood", name: "The Bourne Stuntacular", type: "Show de Acrobacias ao Vivo", kind: "show", description: "Dublês em tempo real integrados com uma tela LED gigante de alta definição." },
  { id: "men-in-black-alien-attack", parkId: "universal-studios-florida", area: "world-expo-and-dreamworks-land", name: "MEN IN BLACK Alien Attack", type: "Dark Ride de Tiro Interativa", kind: "attraction", description: "Carrinhos de 6 lugares equipados com lasers para caçar alienígenas nas ruas." },
  { id: "e-t-adventure", parkId: "universal-studios-florida", area: "world-expo-and-dreamworks-land", name: "E.T. Adventure", type: "Dark Ride Clássica", kind: "attraction", description: "Voo de bicicleta até o planeta natal do E.T.; única atração original do parque ainda em operação." },
  { id: "trolls-trollercoaster", parkId: "universal-studios-florida", area: "world-expo-and-dreamworks-land", name: "Trolls Trollercoaster", type: "Montanha-Russa Infantil", kind: "attraction", description: "Passeio suave no Catabus em formato de lagarta para crianças." },
  { id: "shreks-swamp-and-pos-kung-fu-camp", parkId: "universal-studios-florida", area: "world-expo-and-dreamworks-land", name: "Shrek's Swamp & Po's Kung Fu Camp", type: "Playgrounds & Shows", kind: "attraction", description: "Áreas de brincadeiras temáticas do Shrek e Kung Fu Panda com personagens." },
  { id: "the-simpsons-ride", parkId: "universal-studios-florida", area: "springfield-and-diagon-alley-harry-potter", name: "The Simpsons Ride", type: "Simulador de Movimento", kind: "attraction", description: "Passeio virtual caótico pelo parque do Krusty cheio de humor ácido." },
  { id: "harry-potter-and-escape-from-gringotts", parkId: "universal-studios-florida", area: "springfield-and-diagon-alley-harry-potter", name: "Harry Potter & Escape from Gringotts", type: "Montanha-Russa 3D Multi-sensorial", kind: "attraction", description: "Viagem pelos cofres do banco Gringotes com telas 3D, trilhos e animatrônicos." },
  { id: "hogwarts-express-kings-cross", parkId: "universal-studios-florida", area: "springfield-and-diagon-alley-harry-potter", name: "Hogwarts Express (King's Cross)", type: "Trem Temático de Conexão", kind: "attraction", description: "Viagem de trem até Hogsmeade com projeções exclusivas nas janelas da cabine." },
  { id: "ollivanders-wand-shop", parkId: "universal-studios-florida", area: "springfield-and-diagon-alley-harry-potter", name: "Ollivanders Wand Shop", type: "Show Curto / Loja", kind: "attraction", description: "Experiência imersiva onde a varinha escolhe o bruxo em uma cerimônia mágica." },
];
