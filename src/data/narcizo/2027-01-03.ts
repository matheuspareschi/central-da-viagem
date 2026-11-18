import { attentionSection, confirmedSection, FAMILIA_NARCIZO, stop } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  dateISO: "2027-01-03",
  calendarTitle: "Brooklyn Bridge, DUMBO e MJ The Musical",
  day: 3,
  weekday: "Dom",
  liturgicalWeekday: "",
  category: "turismo",
  title: "Brooklyn Bridge, DUMBO e MJ The Musical",
  itinerary: {
    kind: "schedule",
    summary: "Brooklyn Bridge a pé, DUMBO e Brooklyn Bridge Park pela manhã; à tarde, o musical MJ no Neil Simon Theatre (ingressos confirmados) e Times Square à noite.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Saída do hotel", value: "8h45" },
        { label: "Brooklyn Bridge", value: "9h45" },
        { label: "MJ The Musical", value: "15h00" },
        { label: "Volta ao hotel", value: "19h15" },
      ],
      notes: [
        { icon: "transit", text: "Metrô até City Hall (9h00–9h40) e travessia da Brooklyn Bridge a pé." },
        { icon: "info", text: "A Times Square fica a poucos minutos do teatro. A foto externa do prédio de **Friends** saiu deste dia para evitar deslocamento ao West Village." },
      ],
      alerts: ["O ingresso do musical aparece como **Delivery Delayed**: conferir a liberação no aplicativo antes da viagem."],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:30", "Acordar", "house"),
          stop("08:00", "Café", "burger"),
          stop("08:45", "Saída do hotel", "parking"),
          stop("09:00", "Metrô até City Hall (9h00–9h40)", "parking"),
          stop("09:45", "Brooklyn Bridge a pé (9h45–10h45)", "camera"),
          stop("10:45", "DUMBO e Brooklyn Bridge Park (10h45–11h45)", "camera"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("11:45", "Almoço no Brooklyn (11h45–12h30)", "burger"),
          stop("12:30", "Washington Street: foto clássica (12h30–12h50)", "camera"),
          stop("12:50", "Deslocamento ao Neil Simon Theatre (12h50–13h40)", "parking"),
          stop("13:40", "Chegada com antecedência, banheiro e entrada (13h40–14h30)", "target", "mj-musical"),
          stop("15:00", "MJ The Musical • CONFIRMADO (15h00–17h30)", "sparkle", "mj-musical"),
          stop("17:30", "Jantar perto do teatro (17h30–18h15)", "burger"),
        ],
      },
      {
        title: "Noite",
        steps: [
          stop("18:15", "Times Square à noite: fotos e lojas (18h15–19h15)", "camera"),
          stop("19:15", "Retorno ao hotel", "house"),
        ],
      },
    ],
    cards: [
      {
        id: "mj-musical",
        name: "MJ The Musical",
        icon: "sparkle",
        time: "15:00",
        address: "Neil Simon Theatre, Nova York",
        sections: [
          confirmedSection(
            "03/01 às **15h00** • 4 ingressos • Mezanino **H1–H7**.",
            "Pedido **207319903-8720727** • Neil Simon Theatre.",
          ),
          attentionSection("O ingresso aparece como **Delivery Delayed**: conferir a liberação no aplicativo antes da viagem."),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
