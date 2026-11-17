import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-15",
  calendarTitle: "Islands of Adventure",
  day: 15,
  park: {
    name: "Islands of Adventure",
    departure: "7h15",
    opening: "9h",
    closing: "19h",
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
    summary: "Primeira visita ao Islands of Adventure, na ordem do roteiro.",
    journey: {
      tiles: [{ label: "Acordar", value: "6h15" }, { label: "Sair de casa", value: "7h15" }, { label: "Estacionamento abre", value: "8h00" }, { label: "Parque aberto", value: "9h–19h" }],
      notes: [
        { icon: "info", text: "Tem early entry (para não hóspedes)." },
        { icon: "info", text: "Se chegar antes das 8h00, ir na Hulk (se conseguir entrar antes)." },
      ],
      alerts: [],
    },
    attractions: [
      {
        id: "velocicoaster",
        attractionId: "jurassic-world-velocicoaster",
        name: "Velocicoaster",
        area: "Jurassic Park",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 1."],
          },
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: ["Lançamento de ~113 km/h, 4 inversões, pico de 47 m. **Altura mínima 1,30 m**."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Foto do castelo na ponte para o Jurassic Park no caminho. Armário **obrigatório**; Single Rider vale a pena. Olhar o Raptor Stable na fila."],
          },
        ],
      },
      {
        id: "forbidden-journey",
        attractionId: "harry-potter-and-the-forbidden-journey",
        name: "Harry Potter and the Forbidden Journey",
        area: "Harry Potter (Hogsmeade)",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 2."],
          },
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: ["Dark ride com simulador dentro do castelo. **Altura mínima 1,22 m**. A fila é a melhor parte (quadros falantes, escritório do Dumbledore)."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Armários **grátis** do lado de fora. Quem enjoa com vídeo em movimento pode pedir o Castle Tour."],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Os guias divergem sobre Single Rider aqui: **perguntar na porta**."],
          },
        ],
      },
      {
        id: "hagrids",
        attractionId: "hagrids-magical-creatures-motorbike",
        name: "Hagrid's Magical Creatures Motorbike Adventure",
        area: "Harry Potter (Hogsmeade)",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 3. Fazer se tiver menos de 1h de fila."],
          },
          {
            color: "navy",
            icon: "house",
            title: "Endereço",
            paragraphs: ["The Wizarding World of Harry Potter – Hogsmeade, Islands of Adventure."],
          },
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: ["Montanha-russa temática, ~80 km/h, sem inversões, altura mínima 1,22 m. **Fila é a pior do parque** o dia todo."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Ir à direita no lago, por Seuss Landing e Lost Continent, até Hogsmeade (~10 min) e entrar direto na fila. Armário **obrigatório**. Decidir antes quem vai de moto e quem vai no sidecar; os primeiros carrinhos são mais emocionantes. Single Rider disponível."],
          },
        ],
      },
      {
        id: "honeydukes",
        name: "Dedos de mel (Honeydukes)",
        area: "Harry Potter (Hogsmeade)",
        icon: "bag",
        sections: [
          {
            color: "gold",
            icon: "bag",
            title: "Roteiro",
            paragraphs: ["Passar na Honeydukes para comprar os dedos de mel."],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            list: ["Honeydukes (sapo de chocolate)"],
          },
        ],
      },
      {
        id: "ponte-castelo",
        name: "Foto na ponte do castelo",
        area: "Harry Potter (Hogsmeade)",
        icon: "camera",
        sections: [
          {
            color: "palm",
            icon: "camera",
            title: "Foto",
            paragraphs: ["Tirar foto na ponte do castelo."],
          },
        ],
      },
      {
        id: "expresso-hogwarts",
        name: "Foto no Expresso de Hogwarts",
        area: "Harry Potter (Hogsmeade)",
        icon: "camera",
        sections: [
          {
            color: "palm",
            icon: "camera",
            title: "Foto",
            paragraphs: ["Tirar foto no Expresso de Hogwarts."],
          },
        ],
      },
      {
        id: "hipogrifo",
        attractionId: "flight-of-the-hippogriff",
        name: "Voo do Hipogrifo",
        area: "Harry Potter (Hogsmeade)",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 4."],
          },
        ],
      },
      {
        id: "river-adventure",
        attractionId: "jurassic-park-river-adventure",
        name: "Jurassic Park River Adventure",
        area: "Jurassic Park",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 5."],
          },
        ],
      },
      {
        id: "kong",
        attractionId: "skull-island-reign-of-kong",
        name: "Kong (Skull Island)",
        area: "Skull Island",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 6."],
          },
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: ["Dark ride com simulador e telas 3D. Altura mínima 0,92 m. **Sem armário**."],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Jurassic Park River Adventure está FECHADA (reabertura prevista ~16–17/12). Thunder Falls Terrace também está **fechado** para reforma."],
          },
        ],
      },
      {
        id: "dudley",
        attractionId: "dudley-do-rights-ripsaw-falls",
        name: "Dudley Do-Right's Ripsaw Falls",
        area: "Toon Lagoon",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 7."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: ["Ripsaw Falls: montanha-russa aquática, queda de ~23 m, **Single Rider**, altura mínima 1,12 m."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Não sentar no primeiro barquinho do Ripsaw."],
          },
        ],
      },
      {
        id: "popeye",
        attractionId: "popeye-and-blutos-bilge-rat-barges",
        name: "Popeye & Bluto's Bilge-Rat Barges",
        area: "Toon Lagoon",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 8."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: ["Bilge-Rat Barges: bote em corredeiras, altura mínima 1,07 m, **armários pagos**."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Levar capa de chuva e chinelo ou meia seca. Secador humano custa **~US$7**."],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Se a previsão for de máxima abaixo de ~21 °C, **pular as Barges** ou fazer só o Ripsaw."],
          },
        ],
      },
      {
        id: "spider-man",
        attractionId: "the-amazing-adventures-of-spider-man",
        name: "Spider-Man",
        area: "Marvel",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 9."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: ["Simulador 3D, mínimo 1,02 m. A fila passa por dentro do **Daily Bugle**."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Fotos com personagens da Marvel."],
          },
        ],
      },
      {
        id: "elevador-destino",
        attractionId: "doctor-dooms-fearfall",
        name: "Elevador do Destino",
        area: "Marvel",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 10."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Fearfall só com fila de **até 15 min**."],
          },
        ],
      },
      {
        id: "hulk",
        attractionId: "the-incredible-hulk-coaster",
        name: "The Incredible Hulk Coaster",
        area: "Marvel",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração 11."],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: ["Hulk Coaster: ~107 km/h, 7 inversões, mínimo 1,37–1,38 m, **armário na frente**, Single Rider."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: ["Pular o Hulk se já andou nele na quinta 10/12."],
          },
        ],
      },
      {
        id: "fim-do-dia-fogos",
        name: "Show de fogos",
        area: "Fim do dia",
        icon: "camera",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Roteiro",
            paragraphs: ["Assistir o show de fogos. Verificar no app se há show no dia."],
          },
        ],
      },
    ],
  },
} satisfies DayData;
