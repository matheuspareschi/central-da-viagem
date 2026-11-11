import { mapSearchUrl } from "../../lib/maps";
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
    summary: "Dia único com o grupo completo. Jantar na praça de alimentação do Florida Mall.",
    group: "Grupo completo · 10 pessoas",
    journey: {
      tiles: [],
      notes: [
        { icon: "car", text: "Deslocamento: ~1h10–1h15 de carro no total (aeroporto → Florida Mall → Storey Lake Resort → Walmart e volta)." },
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
            time: "15:15",
            stopId: "",
            name: "Pouso em MCO",
            icon: "target",
          },
          {
            kind: "stop",
            time: "15:15",
            stopId: "",
            name: "Desembarque, imigração e bagagem",
            icon: "target",
          },
          {
            kind: "stop",
            time: "16:15",
            stopId: "retirada-carros",
            name: "Retirada dos carros e pedágio",
            icon: "target",
          },
          {
            kind: "transit",
            time: "16:50",
            duration: "~20–25 min",
            destinationName: "Florida Mall",
          },
          {
            kind: "stop",
            time: "17:15",
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
            time: "18:00",
            stopId: "jantar-florida-mall",
            name: "Jantar no Florida Mall (praça de alimentação)",
            icon: "burger",
          },
          {
            kind: "transit",
            time: "19:15",
            duration: "~30 min",
            destinationName: "Storey Lake Resort, Kissimmee",
          },
          {
            kind: "stop",
            time: "19:45",
            stopId: "chegada-resort",
            name: "Chegada ao Storey Lake Resort — acomodação",
            icon: "house",
          },
          {
            kind: "transit",
            time: "19:45",
            duration: "~15 min",
            destinationName: "Walmart Supercenter (só quem for)",
          },
          {
            kind: "stop",
            time: "20:00",
            stopId: "walmart-chegada",
            name: "Walmart Supercenter — Compras da Semana",
            icon: "bag",
          },
          {
            kind: "transit",
            time: "20:30",
            duration: "~15 min",
            destinationName: "Storey Lake Resort, Kissimmee",
          },
        ],
      },
    ],
    cards: [
      {
        id: "retirada-carros",
        name: "Retirada dos carros e pedágio",
        icon: "target",
        time: "16:15",
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
              "Resolver o transponder de pedágio (PlatePass/E-Pass da locadora, ou SunPass) já no balcão, para não precisar parar depois.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Confirmar disponibilidade na locadora — ou levar/comprar SunPass à parte.",
            ],
          },
        ],
      },
      {
        id: "apple-store",
        name: "Apple Store (Florida Mall)",
        icon: "bag",
        time: "17:15",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e Estacionamento",
            paragraphs: [
              "8001 S Orange Blossom Trail, Orlando, FL 32809.",
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
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Fazer essa parada antes do jantar garante folga do horário de fechamento (19h aos domingos) — é a única janela do dia, já que nem Apple Millenia nem Apple Florida Mall abrem além disso no domingo.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Confirmar no site oficial da Apple se a loja mantém 11h–19h no domingo específico da viagem.",
            ],
          },
        ],
      },
      {
        id: "jantar-florida-mall",
        link: mapSearchUrl("Jantar no Florida Mall", "8001 S Orange Blossom Trail, Orlando, FL 32809"),
        name: "Jantar no Florida Mall (praça de alimentação)",
        icon: "burger",
        time: "18:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "8001 S Orange Blossom Trail, Orlando, FL 32809.",
            ],
          },
          {
            color: "citrus",
            icon: "burger",
            title: "Sobre",
            paragraphs: [
              "Praça de alimentação do shopping — várias opções rápidas, sem reserva.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Aproveitar o wi-fi do mall para ativar o eSIM/chip digital durante a refeição, sem precisar de loja física.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Confirmar horário do restaurante escolhido — praça de alimentação costuma abrir mais tarde que as lojas.",
            ],
          },
        ],
      },
      {
        id: "chegada-resort",
        name: "Chegada ao Storey Lake Resort",
        icon: "house",
        time: "19:45",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "4715 Kings Castle Circle, Kissimmee, FL 34746.",
            ],
          },
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
        action: "groceryList",
        name: "Walmart Supercenter — Compras da Semana",
        icon: "bag",
        time: "20:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "4444 W Vine St, Kissimmee, FL 34746.",
            ],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas",
            paragraphs: [
              "Walmart Supercenter.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Mesmo eixo do resort, sem desviar da rota. Compras rápidas de mercado/essenciais da semana (~30 min).",
            ],
          },
          {
            color: "palm",
            icon: "target",
            title: "Dica de desconto",
            paragraphs: [
              "Walmart costuma sair 22–28% mais barato que o Publix em cesta básica comparável — bom como mercado principal da semana. Publix vale pontualmente para promoções BOGO ou frescos, se topar um no caminho em outro dia.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
