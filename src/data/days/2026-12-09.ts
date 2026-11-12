import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-09",
  calendarTitle: "Epcot",
  day: 9,
  park: {
    name: "Epcot",
    departure: "7h30",
    opening: "9h",
    closing: "21h",
  },
  weekday: "Qua",
  liturgicalWeekday: "2ª sem. do Advento",
  reading: {
    label: "2ª sem. do Advento",
    oldTestamentReading: "Malaquias 2:10–3:1",
    gospelReading: "Marcos 2:18–22",
  },
  category: "parque",
  title: "Epcot",
  itinerary: {
    kind: "checklist",
    parkId: "epcot",
    summary: "Dia de parque único, sem trilha paralela de compras. Ritmo rápido em World Celebration, World Discovery e World Nature pela manhã, para deixar a tarde/noite inteira livre no World Showcase.",
    journey: {
      tiles: [{ label: "Acordar", value: "6h30" }, { label: "Sair do resort", value: "7h30" }, { label: "Estacionamento abre", value: "8h00" }, { label: "Parque aberto", value: "9h–21h" }],
      notes: [
        { icon: "car", text: "~25 min até os portões." },
        { icon: "info", text: "Utilizar early entry (não hóspedes)." },
        { icon: "info", text: "Café da manhã leve em casa antes de sair; levar lanches próprios (queijo, frutas, snacks) para o meio da manhã." },
        { icon: "info", text: "No World Showcase, preferir quiosques baratos a restaurantes table-service." },
        { icon: "info", text: "Fotos da Disney: compradas antes da viagem, no Brasil." },
      ],
      alerts: [],
    },
    attractions: [
      {
        id: "guardians-cosmic-rewind",
        name: "Guardiões da Galáxia: Cosmic Rewind",
        area: "World Discovery",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Discovery, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Radical."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Deve ser a primeira parada do dia, antes até da Spaceship Earth — chegar na fila standby nos primeiros minutos de abertura, pois depois das 10h a espera cresce rápido (histórico de até 150+ min). Sentar no último carrinho dá mais sensação de giro.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "É a primeira montanha-russa do Epcot; a trilha sonora é sorteada entre 6 músicas diferentes a cada volta, então cada passeio é uma experiência diferente.",
            ],
          },
          {
            color: "gold",
            icon: "tree",
            title: "Destaques do pavilhão",
            list: ["World Discovery reúne também Mission: Space e Test Track."],
          },
        ],
      },
      {
        id: "spaceship-earth",
        attractionId: "spaceship-earth",
        name: "Spaceship Earth",
        area: "World Celebration",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Celebration, Epcot (entrada principal)."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Ir logo depois de Guardiões, antes de encher; sentar do lado direito do veículo para ver melhor as cenas.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "A esfera geodésica tem 55 metros de diâmetro e pesa ~7.900 toneladas; é uma das maiores estruturas esféricas do mundo, mas não é uma esfera perfeita — tem um sistema de drenagem interno para evitar acúmulo de água da chuva.",
            ],
          },
          {
            color: "gold",
            icon: "tree",
            title: "Destaques do pavilhão",
            list: [
              "World Celebration reúne também o encontro com Mickey and Friends e o Dreamers Point (fotos com a bola ao fundo).",
            ],
          },
        ],
      },
      {
        id: "spaceship-earth-photo",
        name: "Foto com a Bola (Dreamers Point)",
        area: "World Celebration",
        icon: "camera",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "World Celebration, Epcot — em frente à Spaceship Earth.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Fazer logo depois de sair da Spaceship Earth, antes do meio-dia — ponto tradicional de foto em grupo, com a esfera geodésica ao fundo.",
            ],
          },
        ],
      },
      {
        id: "mickey-friends",
        name: "Mickey and Friends (meet & greet)",
        area: "World Celebration",
        icon: "camera",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Celebration, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Ir logo após a Spaceship Earth, antes do horário de pico do meio-dia.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Ponto tradicional de fotos com a bola ao fundo — ótimo para a foto de capa do dia.",
            ],
          },
        ],
      },
      {
        id: "mission-space",
        attractionId: "mission-space",
        name: "Mission: Space",
        area: "World Discovery",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Discovery, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Radical."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Escolher o lado laranja para simulação mais intensa (giro real) ou o lado verde para versão mais suave, sem a centrifugação.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Foi desenvolvida em parceria com a NASA; o lado laranja já foi criticado por causar enjoo em muitos visitantes devido à força G real gerada pela centrífuga.",
            ],
          },
          {
            color: "gold",
            icon: "tree",
            title: "Destaques do pavilhão",
            list: [
              "World Discovery reúne também Guardiões da Galáxia: Cosmic Rewind e Test Track.",
            ],
          },
        ],
      },
      {
        id: "test-track",
        attractionId: "test-track",
        name: "Test Track",
        area: "World Discovery",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Discovery, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Radical."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Ir na parte da manhã, antes do calor do meio-dia deixar a fila mais desconfortável.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              'Ao final, os visitantes passam por uma área onde podem "projetar" seu próprio carro virtual e depois ver o design exibido em telas no showroom da Chevrolet.',
            ],
          },
          {
            color: "gold",
            icon: "tree",
            title: "Destaques do pavilhão",
            list: [
              "World Discovery reúne também Guardiões da Galáxia: Cosmic Rewind e Mission: Space.",
            ],
          },
        ],
      },
      {
        id: "soarin",
        attractionId: "soarin-around-the-world",
        name: "Soarin' Around the World",
        area: "World Nature",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Nature, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Outro."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Escolher assentos das fileiras do meio para a melhor visão central da tela.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "A edição temática dos 250 anos dos EUA insere trechos com paisagens americanas históricas na sequência de voo, além do circuito clássico por marcos mundiais.",
            ],
          },
        ],
      },
      {
        id: "coca-cola-store",
        name: "Loja da Coca-Cola (Coca-Cola Club)",
        area: "World Nature",
        icon: "bag",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Nature, Epcot — próxima ao pavilhão The Land."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Outro."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Parada rápida logo após o almoço/lanche, no mesmo trecho de Soarin'; combinar com fotos na área temática de Moana ao lado.",
            ],
          },
        ],
      },
      {
        id: "moana-photo",
        name: "Fotos na área temática de Moana",
        area: "World Nature",
        icon: "camera",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "World Nature, Epcot — próxima ao pavilhão The Land / Journey of Water.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Fazer logo após a parada na loja da Coca-Cola, antes de seguir para o World Showcase.",
            ],
          },
        ],
      },
      {
        id: "showcase-canada",
        name: "World Showcase — Canadá",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Passagem rápida — sem atração prioritária neste pavilhão.",
            ],
          },
        ],
      },
      {
        id: "showcase-uk",
        name: "World Showcase — Reino Unido",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Entrar no pub Rose & Crown mesmo sem consumir, só para ver a decoração; conferir a loja Queen's Table para itens de chá.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Personagens de Alice no País das Maravilhas costumam circular por essa área com frequência maior que outras.",
            ],
          },
        ],
      },
      {
        id: "showcase-france",
        name: "World Showcase — França (Remy's Ratatouille Adventure)",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Outro."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Ida obrigatória — fila costuma ser menor no fim da tarde do que no meio do dia. Aproveitar para procurar Bela e a Fera na área.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              'Os visitantes "encolhem" ao tamanho de um rato durante o passeio, usando óculos 3D sem a armação visível, criando sensação real de escala reduzida pela cozinha do restaurante.',
            ],
          },
        ],
      },
      {
        id: "showcase-morocco",
        name: "World Showcase — Marrocos",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Reservar tempo extra para fotos — é considerado um dos cenários mais detalhados do parque. Ficar de olho na Jasmine, que costuma fazer meet-and-greet nessa área.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "É o único pavilhão do World Showcase construído com apoio direto do governo do país (não de uma empresa privada) — o Marrocos enviou artesãos para fazer os mosaicos no local.",
            ],
          },
        ],
      },
      {
        id: "showcase-japan",
        name: "World Showcase — Japão",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Ir ao quiosque de Pick-a-Pearl (escolher uma ostra e ganhar uma pérola de verdade) e depois parar no torii em frente ao lago para foto e descanso.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "O torii vermelho na beira da lagoa é uma réplica inspirada no santuário de Itsukushima; à noite, com a iluminação dos fogos ao fundo, é um dos pontos de foto mais procurados do parque.",
            ],
          },
        ],
      },
      {
        id: "showcase-usa",
        name: "World Showcase — EUA (The American Adventure)",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Show."],
          },
        ],
      },
      {
        id: "showcase-italy",
        name: "World Showcase — Itália",
        area: "World Showcase",
        icon: "bag",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Boa parada para perfumes na Il Bel Cristallo; usar a área como ponto de encontro do grupo para os fogos, já que fica de frente para a lagoa.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "A torre do Campanile e a praça central são réplicas inspiradas em Veneza e na Piazza San Marco.",
            ],
          },
        ],
      },
      {
        id: "showcase-germany",
        name: "World Showcase — Alemanha",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Fotos."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: ["Passar pelo pub alemão."],
          },
        ],
      },
      {
        id: "showcase-china",
        name: "World Showcase — China",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Show."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Só entrar se o tempo permitir — não é prioridade do dia.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Mulan e Mushu costumam fazer aparições perto desse pavilhão, já que a história dela se passa na China.",
            ],
          },
        ],
      },
      {
        id: "showcase-norway",
        name: "World Showcase — Noruega (Frozen Ever After)",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Outro."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Priorizar a atração em vez do meet-and-greet com Anna/Elsa (Royal Sommerhus fecha 18h30, mais cedo que o horário do roteiro).",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Reaproveita o mesmo sistema de trilhos da antiga atração Maelstrom, mas com efeitos e cenas totalmente novos de Arendelle.",
            ],
          },
        ],
      },
      {
        id: "showcase-mexico",
        name: "World Showcase — México (Gran Fiesta Tour)",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["World Showcase, Epcot."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Outro."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Ir ao anoitecer — a fila costuma ser menor e a pirâmide iluminada por fora fica mais bonita para foto na saída.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Zé Carioca é um dos três protagonistas do passeio junto com José (Pato Donald) e Panchito — uma rara aparição do personagem brasileiro em atração permanente da Disney.",
            ],
          },
        ],
      },
      {
        id: "epcot-fireworks",
        name: "Fogos (show noturno)",
        area: "World Showcase",
        icon: "tree",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["Vista da lagoa, próximo à Itália, World Showcase."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: ["Show."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Voltar para a área da Itália com antecedência para garantir lugar de frente para a lagoa antes do início do show.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
