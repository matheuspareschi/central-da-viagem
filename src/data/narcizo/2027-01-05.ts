import { attentionSection, FAMILIA_NARCIZO, listSection, stop } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  cidade: "Nova York",
  dateISO: "2027-01-05",
  calendarTitle: "Últimas compras e voo de volta",
  day: 5,
  weekday: "Ter",
  liturgicalWeekday: "",
  reading: {
    label: "Dias ao redor da Epifania",
    oldTestamentReading: "Provérbios 22:1–9",
    epistleReading: "Tiago 4:11–17",
    gospelReading: "Lucas 6:27–31",
    psalm: "Salmo 110",
  },
  category: "compras",
  title: "Últimas compras e voo de volta",
  itinerary: {
    kind: "schedule",
    summary: "Check-out com guarda de malas, últimas compras e fotos em Manhattan, e saída para o JFK para o voo das 19h.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Check-out", value: "8h30" },
        { label: "Saída para o JFK", value: "13h15" },
        { label: "Chegada ao aeroporto", value: "14h30" },
        { label: "Voo de retorno", value: "19h00" },
      ],
      notes: [
        { icon: "return", text: "Meta de chegada ao aeroporto: entre **14h30 e 15h00**." },
        { icon: "car", text: "Saída para o JFK às 13h15, com o carro pedido entre 12h15 e 13h15 durante a organização das bagagens." },
      ],
      alerts: ["Guarda de malas em 05/01 e transporte para o JFK ainda a confirmar."],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:30", "Acordar e arrumar as malas", "house"),
          stop("08:00", "Café", "burger"),
          stop("08:30", "Check-out e guarda de malas (8h30–9h00)", "house"),
          stop("09:00", "Seguir para Manhattan", "parking"),
          stop("09:30", "Últimas compras e fotos (9h30–11h00)", "bag"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("11:00", "Almoço cedo", "burger"),
          stop("11:45", "Voltar ao hotel e buscar as malas", "house"),
          stop("12:15", "Organizar as bagagens e pedir o carro (12h15–13h15)", "parking"),
          stop("13:15", "Saída para o JFK", "parking", "jfk"),
          stop("14:30", "Meta de chegada ao aeroporto (14h30–15h00)", "target"),
        ],
      },
      {
        title: "Noite",
        steps: [stop("19:00", "Voo de retorno", "target")],
      },
    ],
    cards: [
      {
        id: "jfk",
        name: "Transporte para o JFK",
        icon: "parking",
        time: "13:15",
        address: "Aeroporto JFK, Nova York",
        sections: [
          listSection("citrus", "lightbulb", "Alternativa econômica", [
            "Metrô até Jamaica/Sutphin Blvd e AirTrain JFK: 60 a 80 min",
            "Não usar Big Bus no dia do voo",
          ]),
          attentionSection("Transporte para o JFK e guarda de malas em 05/01 ainda não marcados como confirmados no guia."),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
