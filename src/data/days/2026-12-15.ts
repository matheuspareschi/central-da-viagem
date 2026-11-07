import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-15",
  calendarTitle: "Islands of Adventure",
  day: 15,
  park: {
    name: "Islands of Adventure",
    departure: "7h15",
    opening: "9h",
    closing: "20h",
  },
  weekday: "Ter",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "parque",
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "2 Reis 2:9–22",
    gospelReading: "Lucas 3:1–6",
  },
  title: "Islands of Adventure",
  itinerary: {
    kind: "checklist",
    parkId: "islands-of-adventure",
    // REVISAR (notes): Item "Chegada e preparação" redistribuído; conferir.
    summary: "Primeira visita ao Islands: máximo aproveitamento até ~16h. Single Rider para ganhar tempo.",
    journey: {
      tiles: [{ label: "Acordar", value: "6h15" }, { label: "Sair de Storey Lake", value: "7h15" }, { label: "No portão", value: "~8h15" }, { label: "Parque aberto", value: "9h–20h" }],
      notes: [
        { icon: "car", text: "~35 min + caminhada." },
        { icon: "info", text: "Tem early entry (para não hóspedes). Se chegar antes das 8:00, ir na Hulk (se conseguir entrar antes)." },
        { icon: "info", text: "Estacionamento: 6000 Universal Blvd (~US$35); da garagem ao portão são ~15–20 min a pé; o Islands fica à esquerda depois do CityWalk." },
        { icon: "info", text: "Se já andou no Hagrid's e no Hulk na quinta 10/12, abra direto na VelociCoaster e pule o Hulk." },
      ],
      alerts: ["Confirmar no app: horário assumido 09h–20h."],
    },
    attractions: [
      {
        id: "velocicoaster",
        attractionId: "jurassic-world-velocicoaster",
        name: "Jurassic World VelociCoaster",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 10h05."] },
          { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Lançamento de ~113 km/h, 4 inversões, pico de 47 m. Altura mínima 1,30 m."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Foto do castelo na ponte para o Jurassic Park no caminho. Armário obrigatório; Single Rider vale a pena. Olhar o Raptor Stable na fila."] },
        ],
      },
      {
        id: "forbidden-journey",
        attractionId: "harry-potter-and-the-forbidden-journey",
        name: "Harry Potter and the Forbidden Journey",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 11h00."] },
          { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Dark ride com simulador dentro do castelo. Altura mínima 1,22 m. A fila é a melhor parte (quadros falantes, escritório do Dumbledore)."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Armários grátis do lado de fora. Quem enjoa com vídeo em movimento pode pedir o Castle Tour."] },
          { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Os guias divergem sobre Single Rider aqui: perguntar na porta."] },
        ],
      },
      {
        id: "hagrids",
        name: "Hagrid's Motorbike Adventure",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 9h10."] },
          { color: "navy", icon: "house", title: "Endereço", paragraphs: ["The Wizarding World of Harry Potter – Hogsmeade, Islands of Adventure."] },
          { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Montanha-russa temática, ~80 km/h, sem inversões, altura mínima 1,22 m. Fila é a pior do parque o dia todo."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Ir à direita no lago, por Seuss Landing e Lost Continent, até Hogsmeade (~10 min) e entrar direto na fila. Armário obrigatório. Decidir antes quem vai de moto e quem vai no sidecar; os primeiros carrinhos são mais emocionantes. Single Rider disponível."] },
        ],
      },
      {
        id: "three-broomsticks",
        name: "Almoço no Três Vassouras",
        icon: "burger",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 11h50."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Sem reserva; chegar antes das 12h15. Fish and chips, shepherd's pie ou frango com costela (~US$21 em 2025, porção farta, dá para dividir). Cerveja amanteigada frozen, para dividir."] },
          { color: "navy", icon: "burger", title: "Alternativas", list: ["Blondie (Toon Lagoon): sanduíche Dagwood", "Cafe4 (Marvel): pizzas e massas", "Confisco Grille (Port of Entry)"] },
        ],
      },
      {
        id: "hogsmeade-shops",
        name: "Lojas de Hogsmeade",
        icon: "bag",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 12h30."] },
          { color: "citrus", icon: "bag", title: "Lojas", list: ["Honeydukes (sapo de chocolate)", "Dervish and Banges", "Filch's Emporium", "Owl Post (cartão-postal com carimbo especial)"] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Não comprar varinha agora; a escolha da varinha é melhor à noite (Ollivanders, 18h)."] },
        ],
      },
      {
        id: "kong",
        attractionId: "skull-island-reign-of-kong",
        name: "Skull Island: Reign of Kong",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 13h00."] },
          { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Dark ride com simulador e telas 3D. Altura mínima 0,92 m. Sem armário."] },
          { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Jurassic Park River Adventure está FECHADA (reabertura prevista ~16–17/12). Thunder Falls Terrace também está fechado para reforma."] },
        ],
      },
      {
        id: "discovery-center",
        name: "Jurassic Park Discovery Center (descanso)",
        icon: "leaf",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 13h45."] },
        ],
      },
      {
        id: "toon-lagoon",
        name: "Toon Lagoon: Ripsaw Falls e Bilge-Rat Barges",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 14h00. Brinquedos que molham só na hora mais quente (14h–15h30)."] },
          { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Ripsaw Falls: montanha-russa aquática, queda de ~23 m, Single Rider, altura mínima 1,12 m. Bilge-Rat Barges: bote em corredeiras, altura mínima 1,07 m, armários pagos."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Não sentar no primeiro barquinho do Ripsaw. Levar capa de chuva e chinelo ou meia seca. Secador humano custa ~US$7."] },
          { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Se a previsão for de máxima abaixo de ~21 °C, pular as Barges ou fazer só o Ripsaw."] },
        ],
      },
      {
        id: "marvel",
        name: "Marvel: Spider-Man e Hulk",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 15h15."] },
          { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Spider-Man: simulador 3D, mínimo 1,02 m, fila dentro do Daily Bugle. Hulk Coaster: ~107 km/h, 7 inversões, mínimo 1,37–1,38 m, armário na frente, Single Rider."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Pular o Hulk se já andou nele na quinta 10/12. Fearfall só com fila de até 15 min. Fotos com personagens da Marvel."] },
        ],
      },
      {
        id: "jantar",
        name: "Jantar (parque ou CityWalk)",
        icon: "burger",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 17h15. Parque fecha ~20h; CityWalk depois, se quiserem."] },
          { color: "navy", icon: "burger", title: "Opção A: no parque", paragraphs: ["Mythos (Lost Continent), com reserva pelo app, às 17h15, ou Três Vassouras às 17h30. Depois, o bloco de Hogsmeade completo."] },
          { color: "navy", icon: "burger", title: "Opção B: CityWalk", paragraphs: ["Snack de proteína às 17h30, aproveitar a hora extra em Hogsmeade e jantar depois do fechamento (~20h) no Hard Rock Cafe."] },
          { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Lost Continent está em fechamento permanente em fases (sem data): confirmar no app se o Mythos está aberto."] },
        ],
      },
      {
        id: "ollivanders",
        name: "Ollivanders e varinha",
        icon: "bag",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 18h00."] },
          { color: "citrus", icon: "bag", title: "Sobre", paragraphs: ["Show interativo de ~10 min + loja. À noite a fila é menor e é quando a escolha da varinha mais acontece. Grupo só de adultos tem mais chance de ser escolhido."] },
          { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Varinha interativa (etiqueta dourada) custava US$65–85 em 2025; só vale se alguém for gastar tempo nas magias. Cada varinha vem com mapa dos pontos."] },
        ],
      },
      {
        id: "hogs-head",
        name: "Hog's Head: cerveja amanteigada",
        icon: "burger",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Por volta das 18h45."] },
        ],
      },
      {
        id: "projecao-natal",
        name: "Projeção de Natal no castelo",
        icon: "camera",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário", paragraphs: ["Por volta das 19h00. \"The Magic of Christmas at Hogwarts Castle\": horário só no app; chegar 20–30 min antes para ter lugar. Entrar na fila da repetição (Hagrid's ou VelociCoaster) até ~19h15, antes do fechamento."] },
          { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Horário de fechamento do parque (~20h) assumido a partir de dezembro/2025; confirmar no app Universal Orlando Resort."] },
        ],
      },
      {
        id: "repeticao",
        name: "Repetição: Hagrid's ou VelociCoaster (Single Rider)",
        icon: "target",
        sections: [
          { color: "gold", icon: "lightbulb", title: "Horário sugerido", paragraphs: ["Entrar na fila até ~19h15, antes do fechamento."] },
        ],
      },
    ],
  },
} satisfies DayData;
