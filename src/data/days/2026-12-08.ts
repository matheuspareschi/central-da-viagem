import { mapSearchUrl } from "../../lib/maps";
import type { DayData } from "../../types";

const ADDRESSES = {
  loopWest: "2001 W Osceola Pkwy, Kissimmee, FL",
  oliveGarden: "1604 W Osceola Pkwy, Kissimmee, FL 34741.",
  theLoop: "3208 N John Young Pkwy, Kissimmee, FL 34741",
  theCrosslands: "1100 W Osceola Pkwy, Kissimmee, FL 34741",
  disneySprings: "1486 E Buena Vista Dr, Lake Buena Vista, FL 32830",
} as const;

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
        { label: "Disney Springs", value: "18h40" },
        { label: "Voltar para casa", value: "21h00" },
      ],
      notes: [
        { icon: "info", text: "**Levar snacks leves** (queijo, fruta, salgadinho) para acompanhar durante as compras." }, // REVISAR: mesmo texto da nota do dia 7
      ],
      alerts: ["Ao voltar para casa, **preparar os lanches** para o dia 09 (Epcot)."],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          {
            kind: "transit",
            time: "09:00",
            duration: "10–15 min",
            destinationName: "Loop West",
          },
          {
            kind: "stop",
            time: "09:30",
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
            time: "12:45",
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
            time: "17:45",
            stopId: "",
            name: "Em casa: lanche rápido e descarregar as compras",
            icon: "house",
          },
          {
            kind: "transit",
            time: "18:15",
            duration: "20–25 min",
            destinationName: "Disney Springs",
          },
          {
            kind: "stop",
            time: "18:40",
            stopId: "disney-springs",
            name: "Disney Springs",
            icon: "target",
          },
          {
            kind: "transit",
            time: "20:35",
            duration: "20–25 min",
            destinationName: "Storey Lake Resort",
          },
        ],
      },
    ],
    cards: [
      {
        id: "olive-garden",
        link: mapSearchUrl("Olive Garden", ADDRESSES.oliveGarden),
        name: "Olive Garden (almoço)",
        icon: "burger",
        time: "13:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [ADDRESSES.oliveGarden],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário de funcionamento",
            paragraphs: ["Terça: 11h às 22h."], 
          },
        ],
      },
      {
        id: "loop-west",
        link: mapSearchUrl("Loop West", ADDRESSES.loopWest),
        name: "Loop West",
        icon: "bag",
        time: "09:30",
        shopRegionId: "loop-west",
        sections: [
          { color: "navy", icon: "parking", title: "Endereço", paragraphs: [ADDRESSES.loopWest] },
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
              "Todas as lojas ficam no mesmo trecho da W Osceola Pkwy — dá para fazer a pé **sem mover o carro**.",
            ],
          },
          { color: "gold", icon: "lightbulb", title: "Curiosidades", paragraphs: ["Faz parte do complexo The Loop, dividido em **Loop West e Loop East**."] },
        ],
      },
      {
        id: "the-loop",
        link: mapSearchUrl("The Loop", ADDRESSES.theLoop),
        name: "The Loop",
        icon: "bag",
        time: "14:15",
        shopRegionId: "the-loop",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [ADDRESSES.theLoop],
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
          {
            color: "gold",
            icon: "lightbulb",
            title: "Curiosidades",
            list: [
              "**Inaugurado em 2007**, tem cerca de **78.000 m²** em um único piso, na esquina da John Young Pkwy com a Osceola Pkwy.",
              "É dividido em duas áreas, Loop West e Loop East.",
              "Tem cinema Regal.",
            ],
          },
        ],
      },
      {
        id: "the-crosslands",
        link: mapSearchUrl("The Crosslands", ADDRESSES.theCrosslands),
        name: "The Crosslands",
        icon: "bag",
        time: "16:30",
        shopRegionId: "the-crosslands",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [ADDRESSES.theCrosslands],
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
        link: mapSearchUrl("Disney Springs", ADDRESSES.disneySprings),
        name: "Disney Springs",
        icon: "target",
        time: "18:40",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e Estacionamento",
            paragraphs: [
              ADDRESSES.disneySprings,
              "**Entrada e estacionamento gratuitos.**",
            ],
          },
          {
            color: "navy",
            icon: "lightbulb",
            title: "Horário de funcionamento",
            paragraphs: ["Em geral **até 23h** (sexta e sábado até 23h30)."], // REVISAR: informado pelo Thiago, não consta nos dados
          },
          {
            color: "citrus",
            icon: "tree",
            title: "Natal",
            list: [
              "**Christmas Tree Stroll** (até 6/jan/2027): árvores com temas Disney, Pixar e Star Wars. Em geral, mapa e adesivos grátis, trocados por um pin.",
              "**Neve** toda noite no Town Center.",
              "**Papai Noel** até 24/dez; horário no app My Disney Experience.",
              "**World of Disney**, a maior coleção de produtos Disney do mundo.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Curiosidades",
            list: [
              "**150+ lojas e restaurantes** em 120 acres, em 4 bairros: Town Center, The Landing, Marketplace e West Side.",
              "**Aerophile:** o maior balão cativo de hélio do mundo.",
              "**Drawn to Life:** a única produção do Cirque du Soleil na Flórida.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
