// Catálogo de atrações do parque Universal Epic Universe.
// Fonte: docs/fontes/Guia_Completo_de_Atracoes_dos_Parques_de_Orlando.pdf (transcrito sem alterações) e lista da Wikipedia "List of Universal Epic Universe attractions" (atrações que faltavam, descrições resumidas em português). Os textos ainda passarão por revisão.
import type { ParkAttraction, ParkArea } from "../../types";

export const epicUniverseAreas: ParkArea[] = [
  { key: "celestial-park", label: "Celestial Park" },
  { key: "super-nintendo-world", label: "Super Nintendo World" },
  { key: "isle-of-berk", label: "Isle of Berk" },
  { key: "harry-potter", label: "Harry Potter" },
  { key: "dark-universe", label: "Dark Universe" },
];

export const epicUniverse: ParkAttraction[] = [
  { id: "stardust-racers", parkId: "epic-universe", area: "celestial-park", name: "Stardust Racers", type: "Montanha-Russa Dupla", kind: "attraction", description: "Dueling coaster atingindo 100 km/h com manobra cruzada Celestial Spin." },
  { id: "mario-kart-bowsers-challenge", parkId: "epic-universe", area: "super-nintendo-world", name: "Mario Kart: Bowser’s Challenge", type: "Dark Ride em AR", kind: "attraction", description: "Corrida imersiva usando óculos de realidade aumentada no Reino Cogumelo." },
  { id: "mine-cart-madness", parkId: "epic-universe", area: "super-nintendo-world", name: "Mine-Cart Madness", type: "Montanha-Russa Inovadora", kind: "attraction", description: "Sistema de trilho oculto que simula o carrinho saltando sobre os trilhos quebrados." },
  { id: "hiccups-wing-gliders", parkId: "epic-universe", area: "isle-of-berk", name: "Hiccup’s Wing Gliders", type: "Montanha-Russa Familiar", kind: "attraction", description: "Voo desgovernado de planador por cima da vila dos Vikings e da lagoa." },
  { id: "battle-at-the-ministry", parkId: "epic-universe", area: "harry-potter", name: "Battle at the Ministry", type: "Dark Ride Avançada", kind: "attraction", description: "Elevador mágico pela rede Floo no Ministério da Magia britânico." },
  { id: "monsters-unchained", parkId: "epic-universe", area: "dark-universe", name: "Monsters Unchained", type: "Dark Ride Escura de Terror", kind: "attraction", description: "Fuga intensa no laboratório de Frankenstein com monstros clássicos soltos." },
  { id: "astronomica", parkId: "epic-universe", area: "celestial-park", name: "Astronomica", type: "Área Aquática Infantil", kind: "attraction", description: "Área de brincadeiras com água para crianças, temática de uma bússola gigante que \"aponta\" para os portais e as atrações do parque. Tem efeitos de iluminação à noite." },
  { id: "constellation-carousel", parkId: "epic-universe", area: "celestial-park", name: "Constellation Carousel", type: "Carrossel Temático", kind: "attraction", description: "Carrossel com tema da Via Láctea, com música, luzes e carruagens em forma de animais que se movem em várias direções, chegando a subir cerca de 1,8 m no ar." },
  { id: "curse-of-the-werewolf", parkId: "epic-universe", area: "dark-universe", name: "Curse of the Werewolf", type: "Montanha-Russa Giratória de Lançamentos", kind: "attraction", description: "Montanha-russa giratória com vários lançamentos, da Mack Rides, com uma história que usa personagens de O Lobisomem (1941)." },
  { id: "darkmoor-monster-makeup-experience", parkId: "epic-universe", area: "dark-universe", name: "Darkmoor Monster Makeup Experience", type: "Loja e Maquiagem", kind: "attraction", description: "Experiência de compras e maquiagem com artistas, ambientada no antigo laboratório do Dr. Pretorius, personagem do filme A Noiva de Frankenstein (1935)." },
  { id: "dragon-racers-rally", parkId: "epic-universe", area: "isle-of-berk", name: "Dragon Racer’s Rally", type: "Atração Giratória (Sky Fly)", kind: "attraction", description: "Brinquedo giratório Sky Fly, da Gerstlauer: os visitantes sentam individualmente e conseguem provocar giros e voltas presos a um braço pendular rotativo." },
  { id: "fyre-drill", parkId: "epic-universe", area: "isle-of-berk", name: "Fyre Drill", type: "Passeio de Barco Interativo", kind: "attraction", description: "Passeio de barco em que os visitantes dos dois lados atiram canhões de água, a até 8,5 m, em alvos que reagem com som, movimento e efeitos de água." },
  { id: "le-cirque-arcanus", parkId: "epic-universe", area: "harry-potter", name: "Le Cirque Arcanus", type: "Show de Teatro", kind: "show", description: "Espetáculo teatral completo na Place Cachée, com artistas ao vivo, marionetes e efeitos especiais." },
  { id: "the-untrainable-dragon", parkId: "epic-universe", area: "isle-of-berk", name: "The Untrainable Dragon", type: "Show de Palco", kind: "show", description: "Espetáculo de palco temático de Como Treinar o Seu Dragão." },
  { id: "yoshis-adventure", parkId: "epic-universe", area: "super-nintendo-world", name: "Yoshi’s Adventure", type: "Passeio Omnimover", kind: "attraction", description: "Passeio omnimover pelo Super Nintendo World." },
];
