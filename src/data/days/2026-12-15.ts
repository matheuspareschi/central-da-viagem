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
