import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-06",
  calendarTitle: "Chegada em Orlando",
  day: 6,
  weekday: "Dom",
  liturgicalWeekday: "2º Domingo do Advento",
  category: "compras",
  title: "Chegada em Orlando",
  reading: {
    label: "2º Domingo do Advento",
    oldTestamentReading: "Isaías 40:1–11",
    gospelReading: "Marcos 1:1–8",
  },
  itinerary: {
    kind: "schedule",
    summary: "Dia único com o grupo completo. Jantar no Florida Mall.",
    group: "Grupo completo · 10 pessoas",
    journey: {
      tiles: [
        { label: "Pouso em MCO", value: "15h40" },
        { label: "Saída do aeroporto", value: "17h10" },
        { label: "Chegada na casa", value: "20h05" },
        { label: "Tempo de deslocamento", value: "1h15" },
      ],
      notes: [
        { icon: "info", text: "Aproveitar o wi-fi do shopping para ativar o eSIM/chip digital durante a refeição." },
      ],
      alerts: [],
    },
    periods: [
      {
        title: "Tarde",
        steps: [
          {
            kind: "stop",
            time: "15:40", 
            stopId: "pouso-mco",
            name: "Pouso em MCO",
            icon: "target",
          },
          {
            kind: "stop",
            time: "16:35",
            stopId: "retirada-carros",
            name: "Retirada dos carros e pedágio",
            icon: "target",
          },
          {
            kind: "transit",
            time: "17:10",
            duration: "~20–25 min",
            destinationName: "Florida Mall",
          },
          {
            kind: "stop",
            time: "17:35", 
            stopId: "apple-store",
            name: "Apple Store (Florida Mall)",
            icon: "bag",
          },
        ],
      },
      {
        title: "Noite",
        steps: [
          {
            kind: "stop",
            time: "18:20",
            stopId: "florida-mall",
            name: "Jantar no Florida Mall",
            icon: "burger",
          },
          {
            kind: "transit",
            time: "19:35",
            duration: "~30 min",
            destinationName: "Storey Lake Resort, Kissimmee",
          },
          {
            kind: "stop",
            time: "20:05",
            stopId: "chegada-resort",
            name: "Chegada na casa",
            icon: "house",
          },
          {
            kind: "transit",
            time: "20:20",
            duration: "~15 min",
            destinationName: "Walmart Supercenter (só quem for)",
          },
          {
            kind: "stop",
            time: "20:35",
            stopId: "walmart-chegada",
            name: "Walmart Supercenter",
            icon: "bag",
          },
          {
            kind: "transit",
            time: "22:00",
            duration: "~15 min",
            destinationName: "Storey Lake Resort, Kissimmee",
          },
        ],
      },
    ],
    cards: [
      {
        id: "pouso-mco",
        name: "Pouso em MCO",
        icon: "target",
        time: "15:40",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Informação",
            paragraphs: ["Imigração, desembarque e bagagem."],
          },
          {
            color: "gold",
            icon: "sparkle",
            title: "Curiosidades e fotos",
            paragraphs: [
              "A sigla MCO vem da antiga base militar McCoy Air Force Base. Para fotos, aproveite os átrios internos com jardins tropicais e fontes naturais, ou a arquitetura futurista e envidraçada do novo Terminal C.",
            ],
          },
          {
            color: "palm",
            icon: "lightbulb",
            title: "Dica para aproveitar",
            paragraphs: [
              "Use o serviço gratuito MCO Reserve para agendar horário e furar a fila da segurança na volta, além de conferir as lojas temáticas da Disney, Universal e NASA ainda dentro do terminal.",
            ],
          },
        ],
      },
      {
        id: "retirada-carros",
        extraLink: { label: "Ver passo a passo do pedágio", route: "/informacoes-extra/pedagio", icon: "car" },
        name: "Retirada dos carros e pedágio",
        icon: "target",
        time: "16:35",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "Aeroporto Internacional de Orlando (MCO).",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Conferir passo a passo na seção extra"
            ],
          },
        ],
      },
      {
        id: "florida-mall",
        name: "The Florida Mall",
        icon: "bag",
        sections: [
          {
            color: "gold",
            icon: "sparkle",
            title: "Curiosidades e fotos",
            paragraphs: [
              "Maior shopping tradicional de Orlando, rende ótimas fotos na colorida parede de chocolates da M&M's World, na vitrine interativa da Crayola Experience e ao lado dos carros elétricos expostos na loja da Tesla.",
            ],
          },
          {
            color: "palm",
            icon: "lightbulb",
            title: "Dica para aproveitar",
            paragraphs: [
              "Vá direto à Primark (dois andares) para comprar itens oficiais da Disney e malas baratas, passe nas máquinas de pelúcia da Gatcha e retire o livro de cupons de desconto gratuitos no balcão de atendimento ao cliente (Guest Services).",
            ],
          },
        ],
      },
      {
        id: "apple-store",
        address: "8001 S Orange Blossom Trail, Orlando, FL 32809",
        name: "Apple Store (Florida Mall)",
        icon: "bag",
        time: "17:35",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Estacionamento",
            paragraphs: [
              "Estacionamento do Florida Mall, gratuito.",
            ],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            paragraphs: [
              "Apple Store.",
            ],
          },
          {
            color: "gold",
            icon: "sparkle",
            title: "Curiosidades e fotos",
            paragraphs: [
              "É uma das unidades mais procuradas por turistas graças ao imposto menor de Orlando (6,5%, contra 7% de Miami). Em dias de lançamento de iPhone, a equipe faz um corredor de aplausos na entrada para receber os compradores.",
            ],
          },
          {
            color: "palm",
            icon: "lightbulb",
            title: "Dica para aproveitar",
            paragraphs: [
              "Compre pelo site ou aplicativo antes da viagem e escolha a opção de retirada rápida (Pick Up) para pegar seu aparelho sem enfrentar filas e sem risco de estoque esgotado.",
            ],
          },
        ],
      },
      {
        id: "chegada-resort",
        address: "4801 Dedication St, Kissimmee, FL 34746",
        name: "Chegada na casa",
        icon: "house",
        time: "20:05",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Sobre",
            paragraphs: [
              "Guardar as malas e se instalar. Nem todo o grupo precisa ir ao Walmart — só um carro/grupo menor segue para o mercado.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Definir com antecedência quem vai ao Walmart, para não haver indecisão na hora.",
            ],
          },
        ],
      },
      {
        id: "walmart-chegada",
        extraLink: { label: "Abrir lista de Mercado", route: "/informacoes-extra/mercado", icon: "cart" },
        address: "4444 W Vine St, Kissimmee, FL 34746",
        name: "Walmart Supercenter",
        icon: "bag",
        time: "20:20",
        sections: [
          {
            color: "navy",
            icon: "lightbulb",
            title: "Horário de funcionamento",
            paragraphs: ["Fecha às 23h00."],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            paragraphs: [
              "Walmart Supercenter.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
