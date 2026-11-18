import { addressSection, attentionSection, confirmedSection, FAMILIA_NARCIZO, listSection, stop } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  dateISO: "2027-01-01",
  calendarTitle: "Central Park e Museu de História Natural",
  day: 1,
  weekday: "Sex",
  liturgicalWeekday: "",
  category: "turismo",
  title: "Central Park e Museu de História Natural",
  itinerary: {
    kind: "schedule",
    summary: "Central Park a pé, parada para fotos no The Met e tarde no American Museum of Natural History, com ingressos e planetário confirmados.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Saída do hotel", value: "8h40" },
        { label: "Planetário", value: "13h00" },
        { label: "Museu de História Natural", value: "13h30–17h" },
        { label: "Jantar e hotel", value: "18h00" },
      ],
      notes: [
        { icon: "transit", text: "Metrô N até 57 St–7 Av (8h50–9h20). Cada pessoa usa seu cartão ou celular no OMNY." },
        { icon: "info", text: "The Met: parada externa **somente para fotos**. O Food Court do museu fica no piso inferior e abre diariamente às **10h45**." },
      ],
      alerts: ["Levar os ingressos no celular ou impressos."],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:30", "Acordar", "house"),
          stop("08:00", "Café da manhã", "burger"),
          stop("08:40", "Saída do hotel", "parking"),
          stop("08:50", "Metrô N até 57 St–7 Av (8h50–9h20)", "parking"),
          stop("09:25", "Parte sul do Central Park (9h25–10h05)", "tree"),
          stop("10:05", "Bethesda Terrace (10h05–10h35)", "camera"),
          stop("10:35", "Caminhar até o The Met (10h35–10h50)", "tree"),
          stop("10:50", "Foto na fachada e escadaria do The Met (10h50–11h10)", "camera", "the-met"),
          stop("11:10", "Atravessar o parque até o Rose Center (11h10–11h50)", "tree"),
          stop("11:50", "Entrada e segurança (11h50–12h10)", "target"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("12:10", "Lanche rápido no Food Court do museu (12h10–12h35)", "burger"),
          stop("12:35", "Banheiro e deslocamento ao Planetário (12h35–12h50)", "target"),
          stop("13:00", "Encontros na Via Láctea • Planetário, Piso 1", "target", "amnh"),
          stop("13:30", "American Museum of Natural History (13h30–17h)", "camera", "amnh"),
          stop("17:00", "Metrô de volta", "parking"),
        ],
      },
      {
        title: "Noite",
        steps: [stop("18:00", "Jantar e hotel", "burger")],
      },
    ],
    cards: [
      {
        id: "the-met",
        name: "The Met (foto externa)",
        icon: "camera",
        time: "10:50",
        sections: [attentionSection("Parada externa **somente para fotos**, na fachada e na escadaria.")],
      },
      {
        id: "amnh",
        name: "American Museum of Natural History",
        icon: "camera",
        time: "13:00",
        address: "Rose Center, 81st Street entre Central Park West e Columbus Avenue, Nova York",
        sections: [
          confirmedSection(
            "4 ingressos **Admission + One** • pedido **86480851** • total US$ 172,00.",
            "Planetário (Encontros na Via Láctea) às **13h**, Piso 1.",
          ),
          addressSection("Entrada do Rose Center, na 81st Street, entre Central Park West e Columbus Avenue: costuma ter fila menor."),
          listSection("gold", "lightbulb", "Dicas", [
            "Levar os ingressos no celular ou impressos",
            "O Food Court fica no piso inferior e abre diariamente às 10h45",
          ]),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
