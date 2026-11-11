import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-08",
  calendarTitle: "Compras em Kissimmee",
  day: 8,
  weekday: "Ter",
  liturgicalWeekday: "2ª sem. do Advento",
  reading: {
    label: "2ª sem. do Advento",
    oldTestamentReading: "Isaías 4:2–6",
    gospelReading: "Lucas 3:1–18",
  },
  category: "compras",
  title: "Loop West, The Loop, Crosslands e Disney Springs",
  itinerary: {
    kind: "schedule",
    summary: "Manhã toda no Loop West, tarde no núcleo do The Loop, fim de tarde no The Crosslands e noite no Disney Springs.",
    group: "Grupo completo · 10 pessoas · 2 carros",
    journey: {
      tiles: [
        { label: "Acordar", value: "8h00" },
        { label: "Sair de casa", value: "9h00" },
      ],
      notes: [],
      alerts: [],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          {
            kind: "stop",
            time: "08:15", // REVISAR: antes 07:30, antes do novo horário de acordar (8h00)
            stopId: "",
            name: "Café da manhã em casa",
            icon: "house",
          },
          {
            kind: "transit",
            time: "09:00",
            duration: "10–15 min",
            destinationName: "Loop West",
          },
          {
            kind: "stop",
            time: "09:30", // REVISAR: sem a parada duplicada do TJ Maxx, o Loop West começa na chegada
            stopId: "loop-west",
            name: "Loop West",
            icon: "bag",
          },
        ],
      },
      {
        title: "Tarde",
        steps: [
          {
            kind: "transit",
            time: "12:45", // REVISAR: trajeto até o Olive Garden, duração copiada dos trajetos vizinhos
            duration: "10–15 min",
            destinationName: "Olive Garden",
          },
          {
            kind: "stop",
            time: "13:00",
            stopId: "olive-garden",
            name: "Olive Garden (almoço)",
            icon: "burger",
          },
          {
            kind: "transit",
            time: "14:00",
            duration: "10–15 min",
            destinationName: "The Loop",
          },
          {
            kind: "stop",
            time: "14:15",
            stopId: "the-loop",
            name: "The Loop",
            icon: "bag",
          },
          {
            kind: "transit",
            time: "16:15",
            duration: "5–10 min",
            destinationName: "The Crosslands",
          },
          {
            kind: "stop",
            time: "16:30",
            stopId: "the-crosslands",
            name: "The Crosslands",
            icon: "bag",
          },
        ],
      },
      {
        title: "Noite",
        steps: [
          {
            kind: "transit",
            time: "17:30",
            duration: "10–15 min",
            destinationName: "Storey Lake Resort",
          },
          {
            kind: "stop",
            time: "18:00", // REVISAR: horário derivado do antigo "Jantar em casa"
            stopId: "",
            name: "Em casa: lanche rápido e descarregar as compras",
            icon: "house",
          },
          {
            kind: "transit",
            time: "19:30",
            duration: "20–25 min",
            destinationName: "Disney Springs",
          },
          {
            kind: "stop",
            time: "20:00",
            stopId: "disney-springs",
            name: "Disney Springs",
            icon: "target",
          },
          {
            kind: "transit",
            time: "22:30",
            duration: "20–25 min",
            destinationName: "Storey Lake Resort",
          },
          {
            kind: "stop",
            time: "23:00", // REVISAR: derivado da volta de Disney Springs (22:30 + ~25 min)
            stopId: "",
            name: "Preparar lanches para o dia 09 (Epcot)",
            icon: "house",
          },
        ],
      },
    ],
    cards: [
      {
        id: "olive-garden",
        name: "Olive Garden (almoço)",
        icon: "burger",
        time: "13:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["A definir."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário de funcionamento",
            paragraphs: ["A definir."],
          },
        ],
      },
      {
        id: "loop-west",
        name: "Loop West",
        icon: "bag",
        time: "09:30",
        shopRegionId: "loop-west",
        sections: [
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            list: [
              "Nike Clearance (prioridade)",
              "Converse Clearance",
              "Tommy Hilfiger Company Store",
              "DSW",
              "Skechers Factory Outlet",
              "G by Guess",
              "Tilly's",
              "Burlington",
              "GNC",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Todas as lojas ficam no mesmo trecho da W Osceola Pkwy — dá para fazer a pé sem mover o carro.",
            ],
          },
        ],
      },
      {
        id: "the-loop",
        name: "The Loop",
        icon: "bag",
        time: "14:15",
        shopRegionId: "the-loop",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["3208 N John Young Pkwy, Kissimmee, FL 34741"],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            list: [
              "Kohl's",
              "JCPenney",
              "Best Buy",
              "Old Navy",
              "Michael's",
              "Ulta Beauty",
              "Books-A-Million",
              "Five Below",
              "Petco",
              "Ross",
              "Zales Outlet",
              "Aeropostale",
            ],
          },
        ],
      },
      {
        id: "the-crosslands",
        name: "The Crosslands",
        icon: "bag",
        time: "16:30",
        shopRegionId: "the-crosslands",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["1100 W Osceola Pkwy, Kissimmee, FL 34741"],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            list: [
              "Hobby Lobby",
              "Ross",
              "Marshalls/HomeGoods",
              "Academy Sports",
              "Havertys",
              "PetSmart",
              "Fresh Market",
              "Boot Barn",
              "Kirkland's",
              "Sephora",
              "Carter's",
              "Discovery Clothing Company",
              "GNC",
            ],
          },
        ],
      },
      {
        id: "disney-springs",
        name: "Disney Springs",
        icon: "target",
        time: "20:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e Estacionamento",
            paragraphs: [
              "1486 E Buena Vista Dr, Lake Buena Vista, FL 32830",
              "Entrada e estacionamento gratuitos.",
            ],
          },
          {
            color: "citrus",
            icon: "tree",
            title: "Natal",
            list: [
              "Christmas Tree Stroll (Marketplace, perto do Earl of Sandwich)",
              "Neve artificial noturna no Town Center",
              "World of Disney",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Christmas Tree Stroll roda de 13/nov/2026 a 6/jan/2027.",
            ],
          },
          {
            color: "navy",
            icon: "lightbulb",
            title: "Horário de funcionamento",
            paragraphs: ["Em geral até 23h (sexta e sábado até 23h30)."], // REVISAR: informado pelo Thiago, não consta nos dados
          },
        ],
      },
    ],
  },
} satisfies DayData;
