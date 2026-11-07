import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-21",
  calendarTitle: "Busch Gardens Tampa",
  day: 21,
  park: {
    name: "Busch Gardens Tampa",
    departure: "7h00",
    opening: "9h",
    closing: "21h",
  },
  weekday: "Seg",
  liturgicalWeekday: "Semana de Natal",
  category: "parque",
  reading: {
    label: "Semana de Natal",
    oldTestamentReading: "1 Samuel 1:1–18",
    gospelReading: "Mateus 1:18–25",
  },
 title: "Busch Gardens Tampa",
  itinerary: {
    kind: "checklist",
    parkId: "busch-gardens-tampa",
    summary: "Todas as montanhas-russas. Circuito anti-horário: Edge of Africa → Egypt → Nairobi → Pantopia → Congo → Wild Oasis → Stanleyville → Bird Gardens → Morocco, com a Montu por último.",
    group: "Grupo só de radicais (acima de 1,38 m)",
    journey: {
      tiles: [{ label: "Parque aberto", value: "9h–21h" }],
      notes: [
        { icon: "info", text: "Quem não quiser fazer a Montu espera na saída ou usa o Rider Switch." },
        { icon: "info", text: "O roteiro completo termina por volta das 19h, então o Tampa Outlet só cabe saindo do parque até ~17h e cortando os extras (Lory Land, Habitat Hideaway, Ubanga-Banga, teatros, Walkabout Way, Congo River Rapids)." },
      ],
      alerts: ["Confirmar: horários sugeridos assumem abertura às 9h."],
    },
    attractions: [
      {
        id: "visao-geral",
        name: "Visão geral e logística",
        icon: "parking",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço / Estacionamento",
            paragraphs: [
              "10165 McKinley Dr, Tampa, FL. Cerca de 1h30 a 1h45 de carro de Orlando pela I-4 Oeste (~100 km, sujeito a trânsito). Estacionamento pago à parte.",
              "Sugestão: acordar 6h00, sair do Storey Lake às 7h00 e chegar entre ~8h30 e ~8h45, de 15 a 30 minutos antes de abrir.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: [
              "Confirmar no site oficial o horário de abertura e fechamento de 21/12 e se há evento de Natal com programação diferente.",
            ],
          },
          {
            color: "palm",
            icon: "lightbulb",
            title: "Fura-fila e transporte interno",
            list: [
              "Quick Queue: comprar no dia, depois de ver as filas. Em dezembro vale considerar para Iron Gwazi, SheiKra e Tigris.",
              "Serengeti Railway (trenzinho): gratuito, dá a volta na savana e poupa as pernas.",
              "Skyride: US$ 5 por viagem entre Edge of Africa e Stanleyville.",
              "Rider Switch: permite revezar numa atração sem pegar a fila de novo.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            list: [
              "Conferir no app/mapa se há atrações fechadas e onde fica a entrada em relação a Morocco e Egypt.",
              "A Kumba fechou em 2026 e não entra no plano.",
              "Confirmar se pode entrar com comida e se aceitam dinheiro (leitora relata que não aceitam dinheiro, não permitem comida de fora e só há armários pagos).",
            ],
          },
        ],
      },
      {
        id: "cheetah-hunt",
        attractionId: "cheetah-hunt",
        name: "Cheetah Hunt",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Edge of Africa. Montanha-russa de 3 lançamentos, sem looping, até 100 km/h, 1.220 m de percurso. Foi a primeira de 3 lançamentos da Flórida.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Primeira do dia (~10h): a fila costuma ser grande porque aceita crianças maiores.",
            ],
          },
        ],
      },
      {
        id: "cheetah-run",
        name: "Cheetah Run",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Edge of Africa. Safari a pé com guepardos, hipopótamos, hienas, leões e suricatos. Cerca de 20 minutos.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Logo depois da Cheetah Hunt (~10h40): de manhã os animais costumam estar mais ativos.",
            ],
          },
        ],
      },
      {
        id: "lion-hyena-ridge",
        name: "Lion & Hyena Ridge",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Edge of Africa. Habitat novo cercado por vidros, com visão de até 270° do terreno. Os leões chegam bem perto do vidro.",
            ],
          },
          {
            color: "gold",
            icon: "camera",
            title: "Dica",
            paragraphs: ["Bom para fotos. Fica no mesmo bloco da Cheetah Run."],
          },
        ],
      },
      {
        id: "cobra-curse",
        attractionId: "cobrass-curse",
        name: "Cobra's Curse",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Egypt. Montanha-russa que gira no próprio eixo, até 64 km/h, ~3m30, com trechos de ré. Um elevador vertical sobe 21 m antes de começar.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "~11h30. Na fila dá para ver cobras venenosas de perto, atrás de vidro.",
            ],
          },
        ],
      },
      {
        id: "sheikra",
        attractionId: "sheikra",
        name: "SheiKra",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Stanleyville. Montanha-russa de queda livre de 90°, com pernas soltas, mais de 110 km/h. O carrinho trava ~3 segundos no topo antes de cair.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "~16h15. Usar o Quick Queue se a fila estiver grande.",
            ],
          },
        ],
      },
      {
        id: "tigris",
        attractionId: "tigris",
        name: "Tigris",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Stanleyville. Montanha-russa de 3 lançamentos, 45 m de altura, 100 km/h, com marcha à ré. Inaugurada em 2019.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Fica ao lado da SheiKra: faça as duas em sequência."],
          },
        ],
      },
      {
        id: "stanleyville-theater",
        name: "Stanleyville Theater",
        icon: "camera",
        sections: [
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Stanleyville. Apresentações sazonais, como shows de música e acrobacias.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Ver a programação do dia. O VPD sugere gastar o tempo com outras atrações.",
            ],
          },
        ],
      },
      {
        id: "serengeti-safari",
        name: "Serengeti Safari",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Nairobi (Serengeti Outpost). Passeio de caminhão de ~30 min pela savana, com girafas, zebras, elefantes e rinocerontes. Dá para alimentar as girafas com alface.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "~12h. Reservar horário com antecedência. É pago à parte, a partir de US$ 39,99 em dia útil (confirmar valor de dezembro). Crianças menores de 5 anos não participam.",
            ],
          },
        ],
      },
      {
        id: "animal-care-center",
        name: "Animal Care Center",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Nairobi. Centro de tratamento e reabilitação com salas de nutrição, raio X e cirurgia. Dá para observar procedimentos feitos nos animais do próprio parque.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["~12h45. Passe só se sobrar tempo."],
          },
        ],
      },
      {
        id: "elephant-interaction-area",
        name: "Elephant Interaction Area",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: ["Nairobi. Espaço dedicado aos elefantes."],
          },
          {
            color: "gold",
            icon: "camera",
            title: "Dica",
            paragraphs: ["Parada rápida de fotos, no mesmo trecho da Safari."],
          },
        ],
      },
      {
        id: "penguin-point",
        name: "Penguin Point",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: ["Nairobi. Piscinas e habitats dos pinguins."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Parada curta, no mesmo trecho."],
          },
        ],
      },
      {
        id: "animal-connections",
        name: "Animal Connections",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Nairobi. Interação com animais como flamingos e lêmures. Em alguns horários é possível alimentá-los.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Os horários variam. Conferir nos guias fornecidos na entrada do parque.",
            ],
          },
        ],
      },
      {
        id: "almoco",
        name: "Almoço",
        icon: "burger",
        sections: [
          {
            color: "citrus",
            icon: "burger",
            title: "Onde comer (~13h30)",
            list: [
              "Dragon Fire Grill & Pub (Pantopia): grande, coberto e com ar-condicionado, com comida americana, tex-mex, asiática e sanduíches. Opção principal.",
              "Serengeti Overlook (Edge of Africa): considerado o melhor do parque, um pouco mais caro, com vista para a savana.",
              "Zambia Smokehouse (Stanleyville): costela e frango grelhados, ambiente com ar-condicionado.",
              "Chick-fil-A: também dentro do parque.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Almoçar leve: ainda vêm torre de queda, balanço e várias montanhas-russas. Avaliar o All Day Dining Deal (refeições de 90 em 90 min) se o grupo come bastante no parque.",
            ],
          },
        ],
      },
      {
        id: "falcon-fury",
        name: "Falcon's Fury",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Pantopia. Torre de queda de 102 m, a maior da América. No topo os bancos giram e você fica de frente para o chão, antes de cair a 96 km/h com 3,5 G (quase 6 segundos).",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["~14h15. Altura mínima de 1,38 m."],
          },
        ],
      },
      {
        id: "serengeti-flyer",
        attractionId: "serengeti-flyer",
        name: "Serengeti Flyer",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Pantopia. Balanço gigante com dois pêndulos, 41 m de altura e até 109 km/h. É o screamin' swing mais alto e rápido do mundo.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Faça logo depois da Falcon's Fury, no mesmo bloco."],
          },
        ],
      },
      {
        id: "phoenix-rising",
        name: "Phoenix Rising",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Pantopia. Montanha-russa invertida de 2024, 558 m e até 70 km/h. É a única do parque com áudio integrado.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Curta e tranquila, boa para fechar o bloco de Pantopia.",
            ],
          },
        ],
      },
      {
        id: "pantopia-theater",
        name: "Pantopia Theater",
        icon: "camera",
        sections: [
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Pantopia. Show interativo com animais (Animal Tales) sobre preservação ambiental.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "O VPD não recomenda e diz que não vale o tempo. Só se o horário bater e sobrar tempo.",
            ],
          },
        ],
      },
      {
        id: "congo-river-rapids",
        name: "Congo River Rapids",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Congo. Bote redondo para 12 pessoas em rio artificial com corredeiras. Molha muito. Pessoas do lado de fora podem acertar vocês com pistolas de água.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Só vale se estiver calor. Levar roupa extra. Altura mínima de 1,07 m.",
            ],
          },
        ],
      },
      {
        id: "ubanga-banga-bumper-cars",
        name: "Ubanga-Banga Bumper Cars",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: ["Congo. Réplica simples dos carrinhos de bate-bate."],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "O VPD não recomenda. Só se estiver sem fila.",
            ],
          },
        ],
      },
      {
        id: "habitat-hideaway",
        name: "Habitat Hideaway",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Wild Oasis. Espaço com capivaras, tamanduás-bandeira, macacos e aves tropicais.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Está dentro de uma área infantil. Só vale se estiver no caminho.",
            ],
          },
        ],
      },
      {
        id: "walkabout-way",
        name: "Walkabout Way",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Bird Gardens. Cangurus e outros animais típicos da Austrália.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["~17h15. Leva menos de 10 minutos."],
          },
        ],
      },
      {
        id: "lory-land",
        name: "Lory Land",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Bird Gardens. Grande viveiro de pássaros, com tratadores disponíveis e, às vezes, interação.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["O VPD não recomenda. Só se sobrar tempo."],
          },
        ],
      },
      {
        id: "iron-gwazi",
        attractionId: "iron-gwazi",
        name: "Iron Gwazi",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Morocco. Híbrida de madeira e aço, 63 m de altura, até 122 km/h, queda de 91° e 3 inversões. Substituiu a antiga Gwazi.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "~17h40. É a que mais enche: usar o Quick Queue. Se for a prioridade número 1 do grupo, considerar ir direto a ela na abertura (conferir o mapa).",
            ],
          },
        ],
      },
      {
        id: "myombe-reserve",
        name: "Myombe Reserve",
        icon: "leaf",
        sections: [
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: ["Morocco. Mini-trilha com gorilas e chimpanzés."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Logo depois da Iron Gwazi, no mesmo bloco."],
          },
        ],
      },
      {
        id: "moroccan-palace-theatre",
        name: "Moroccan Palace Theatre",
        icon: "camera",
        sections: [
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Morocco. Show de patinação no gelo criado por diretores de musicais da Broadway. Segundo o VPD, é o melhor show do parque.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Em dezembro a programação pode mudar. Encaixar só se o horário coincidir.",
            ],
          },
        ],
      },
      {
        id: "montu",
        attractionId: "montu",
        name: "Montu",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Egypt. Montanha-russa de pernas soltas, 7 inversões e mais de 96 km/h. Foi a com mais inversões do mundo quando inaugurou.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "É a última do dia (~18h40). Quem não for fazer espera na saída ou usa o Rider Switch. Altura mínima de 1,38 m.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;