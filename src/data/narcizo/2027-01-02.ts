import { addressSection, attentionSection, confirmedSection, FAMILIA_NARCIZO, stop } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  cidade: "Nova York",
  dateISO: "2027-01-02",
  calendarTitle: "Estátua da Liberdade e Lower Manhattan",
  day: 2,
  weekday: "Sáb",
  liturgicalWeekday: "",
  category: "turismo",
  title: "Estátua da Liberdade e Lower Manhattan",
  itinerary: {
    kind: "schedule",
    summary: "Estátua da Liberdade com pedestal e Ellis Island (check-in de segurança confirmado às 9h30) e tarde em Lower Manhattan.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Saída do hotel", value: "8h00" },
        { label: "Check-in de segurança", value: "9h30" },
        { label: "Estátua e Ellis Island", value: "9h30–14h30" },
        { label: "Volta ao hotel", value: "19h00" },
      ],
      notes: [
        { icon: "transit", text: "Metrô N e conexão para R até **Whitehall St** (8h10–8h55); depois, caminhar até Castle Clinton." },
        { icon: "info", text: "Na Estátua, levar somente o necessário. Café rápido no hotel; levar água e lanche." },
      ],
      alerts: ["O check-in não garante um ferry específico: chegar **antes das 9h30**."],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:15", "Acordar", "house"),
          stop("07:30", "Café rápido; levar água e lanche", "burger"),
          stop("08:00", "Sair do hotel", "parking"),
          stop("08:10", "Metrô N e conexão para R até Whitehall St (8h10–8h55)", "parking"),
          stop("08:55", "Caminhar até Castle Clinton (8h55–9h10)", "tree"),
          stop("09:10", "Chegar com antecedência à área de embarque", "target"),
          stop("09:30", "Check-in de segurança • CONFIRMADO", "target", "estatua-liberdade"),
          stop("09:30", "Liberty Island com pedestal e Ellis Island (após 9h30 até 14h30)", "camera", "estatua-liberdade"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("14:30", "Almoço em Lower Manhattan", "burger"),
          stop("15:10", "Charging Bull", "camera"),
          stop("15:30", "Wall Street", "camera"),
          stop("16:30", "9/11 Memorial", "camera"),
          stop("17:15", "Oculus", "camera"),
        ],
      },
      {
        title: "Noite",
        steps: [stop("18:00", "Jantar", "burger"), stop("19:00", "Retorno ao hotel", "house")],
      },
    ],
    cards: [
      {
        id: "estatua-liberdade",
        name: "Estátua da Liberdade e Ellis Island",
        icon: "camera",
        time: "09:30",
        address: "Castle Clinton, Nova York",
        sections: [
          confirmedSection(
            "02/01 • check-in de segurança às **9h30** • 4 ingressos **Adult Reserve with Pedestal**.",
            "Confirmação **87962638** • total US$ 107,20.",
          ),
          addressSection("Área de embarque: Castle Clinton."),
          attentionSection("O check-in não garante um ferry específico; chegar antes das 9h30."),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
