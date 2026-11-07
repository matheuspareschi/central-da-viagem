import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-10",
  calendarTitle: "Outlet Marketplace e Islands of Adventure",
  day: 10,
  weekday: "Qui",
  liturgicalWeekday: "3ª sem. do Advento",
  category: "compras",
  title: "Outlet Marketplace e Universal",
  reading: {
    label: "3ª sem. do Advento",
    oldTestamentReading: "Habacuque 2:1–5",
    gospelReading: "Lucas 1:5–17",
  },
  itinerary: {
    kind: "schedule",
    summary: "Compras no Orlando Outlet Marketplace, jantar no Epic McDonald's, Islands of Adventure à noite (Hulk e Hagrid's) e CityWalk depois do fechamento do parque.",
    group: "Grupo completo · 10 pessoas · 2 carros",
    journey: {
      tiles: [{ label: "Compras no outlet", value: "10h–17h" }],
      notes: [
        { icon: "info", text: "Horários são sugestões e podem mudar conforme o andamento das compras." },
      ],
      alerts: [],
    },
    periods: [
      {
        title: "Manhã",
        note: "Almoço livre: cada um come quando quiser, com os snacks do carro ou algo rápido no local.",
        steps: [
          {
            kind: "transit",
            time: "09:05",
            duration: "~25–30 min",
            destinationName: "Orlando Outlet Marketplace",
          },
          {
            kind: "stop",
            time: "09:35",
            stopId: "outlet-marketplace",
            name: "Orlando Outlet Marketplace (abre às 10h)",
            icon: "bag",
          },
        ],
      },
      {
        title: "Tarde",
        steps: [
          {
            kind: "transit",
            time: "17:00",
            duration: "~10 min",
            destinationName: "Epic McDonald's",
          },
          {
            kind: "stop",
            time: "17:10",
            stopId: "epic-mcdonalds",
            name: "Epic McDonald's — jantar",
            icon: "burger",
          },
        ],
      },
      {
        title: "Noite",
        steps: [
          {
            kind: "transit",
            time: "18:30",
            duration: "~15–20 min",
            destinationName: "Universal's Islands of Adventure",
          },
          {
            kind: "stop",
            time: "18:50",
            stopId: "islands-of-adventure",
            name: "Islands of Adventure — Hulk e Hagrid's",
            icon: "target",
          },
          {
            kind: "stop",
            time: "19:30",
            stopId: "hogwarts-lights",
            name: "Castelo de Hogwarts iluminado",
            icon: "camera",
          },
          {
            kind: "stop",
            time: "20:15",
            stopId: "citywalk",
            name: "CityWalk — passeio a pé",
            icon: "tree",
          },
          {
            kind: "transit",
            time: "21:30",
            duration: "~25–30 min",
            destinationName: "Storey Lake Resort",
          },
        ],
      },
    ],
    cards: [
      {
        id: "outlet-marketplace",
        name: "Orlando Outlet Marketplace",
        icon: "bag",
        time: "09:35",
        shopRegionId: "outlet-marketplace",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "5269 International Dr, Orlando, FL 32819 — duas quadras ao sul do International Premium Outlets.",
            ],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            paragraphs: [
              "Outlet de clearance com descontos de 25% a 65%. Esta é a única visita ao Marketplace na viagem, então vale usar o dia todo.",
            ],
            list: [
              "Nike Clearance Store",
              "Under Armour Factory House",
              "Lacoste Clearance",
              "Levi's",
              "Calvin Klein",
              "Skechers, U.S. Polo Assn., Guess Factory, Tommy Hilfiger (confirmar no mapa do centro)",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: [
              "Abre às 10h (horário padrão do centro; confirmar no site oficial da Premium Outlets para 10/12). Chegue às 9h35 para estar na porta na abertura. Plano: compras das 10h às 17h.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Combinem um ponto de encontro e um horário de reunião às 16h45, antes da saída às 17h. Algumas lojas listadas em sites de terceiros (ex.: ASICS, VF Outlet) podem já ter fechado.",
            ],
          },
        ],
      },
      {
        id: "epic-mcdonalds",
        name: "Epic McDonald's",
        icon: "burger",
        time: "17:10",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "6875 Sand Lake Rd, Orlando, FL 32819 (esquina com a International Drive). Aberto 24h, todos os dias.",
            ],
          },
          {
            color: "citrus",
            icon: "burger",
            title: "Sobre",
            paragraphs: [
              "World's Largest Entertainment McDonald's: quase 20.000 pés quadrados, mais de um andar, arcade, PlayPlace e um Ronald McDonald de neon de cerca de 9 metros na fachada. Os quiosques têm itens exclusivos desta unidade.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Jantar barato e rápido, de 17h10 às 18h30. Peça pelos quiosques para evitar fila no balcão e saia às 18h30 para o parque.",
            ],
          },
        ],
      },
      {
        id: "islands-of-adventure",
        name: "Universal's Islands of Adventure",
        icon: "target",
        time: "18:50",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e estacionamento",
            paragraphs: [
              "6000 Universal Blvd, Orlando, FL 32819. A ideia é chegar depois das 18h para pegar o estacionamento gratuito do Universal (regra a confirmar para dezembro/2026).",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Foco da noite",
            paragraphs: [
              "Objetivo: aproveitar as montanhas-russas mais disputadas durante a noite.",
            ],
            list: [
              "The Incredible Hulk Coaster — altura mínima 54\" (137 cm). Fica mais perto da entrada e tem fila de single rider, geralmente rápida.",
              "Hagrid's Magical Creatures Motorbike Adventure — altura mínima 48\" (122 cm). Fica em Hogsmeade. A fila de single rider é inconsistente.",
              "Sugestão de ordem: Hulk primeiro (19h00), depois caminhar até Hogsmeade e entrar na fila do Hagrid's antes das 20h.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Quem já está na fila de uma atração no fechamento do parque ainda é atendido. Celulares, carteiras e bolsas ficam nos armários antes de entrar nas filas, então levem só uma bolsa pequena por pessoa.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Fechamento do parque previsto para 20h (horário oficial de 10/12 ainda a confirmar). O parque rende cerca de 1h10, então se a fila do Hulk estiver grande, vá direto ao Hagrid's. O ingresso multi-dia começa a valer em 10/12. Confirme as alturas de todos antes de entrar na fila.",
            ],
          },
        ],
      },
      {
        id: "hogwarts-lights",
        name: "Castelo de Hogwarts iluminado",
        icon: "camera",
        time: "19:30",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "Hogsmeade, dentro do Islands of Adventure (The Wizarding World of Harry Potter).",
            ],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Em dezembro, o castelo recebe o show de projeção \"The Magic of Christmas at Hogwarts Castle\" (cerca de 8 minutos), do anoitecer até o fechamento. Hogsmeade também ganha decoração de Natal.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "O horário exato dos shows de 10/12 ainda não está publicado (ver o app do Universal no dia). Enquanto esperam na fila do Hagrid's, dá para ver o castelo iluminado. Levem casaco leve.",
            ],
          },
        ],
      },
      {
        id: "citywalk",
        name: "CityWalk",
        icon: "tree",
        time: "20:15",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "CityWalk, na entrada dos parques do Universal (6000 Universal Blvd, Orlando).",
            ],
          },
          {
            color: "citrus",
            icon: "tree",
            title: "Sobre",
            paragraphs: [
              "Passeio a pé pelas lojas, luzes e decoração de Natal depois do fechamento do parque. Sem compromisso de horário.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Saída para o Storey Lake por volta de 21h30. No dia seguinte o Hollywood Studios abre às 9h e o grupo acorda às 7h15, então corte o CityWalk se alguém estiver cansado.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
