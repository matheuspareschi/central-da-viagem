import { attentionSection, confirmedSection, FAMILIA_NARCIZO, stop, transit } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  cidade: "Washington",
  dateISO: "2026-12-29",
  calendarTitle: "Capitólio, Museus e Memoriais",
  day: 29,
  weekday: "Ter",
  liturgicalWeekday: "",
  category: "turismo",
  title: "Capitólio, Museus e Memoriais",
  itinerary: {
    kind: "schedule",
    summary: "Washington sem carro: Capitólio, Biblioteca do Congresso, Museu do Ar e Espaço, National Archives, Museu de História Natural e memoriais à noite.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Tour do Capitólio", value: "8h50" },
        { label: "Museu do Ar e Espaço", value: "13h00" },
        { label: "National Archives", value: "15h00" },
        { label: "Jantar Old Ebbitt", value: "20h00" },
      ],
      notes: [
        { icon: "transit", text: "Deslocamentos de **Uber/Lyft**, metrô e caminhadas; não alugar carro." },
        { icon: "info", text: "Levar mochila pequena, bateria portátil, garrafa vazia, lanches, casaco quente, luvas e gorro." },
      ],
      alerts: [
        "**Reservas ainda pendentes:** Founding Farmers (7h), Biblioteca do Congresso (10h) e Old Ebbitt Grill (20h).",
      ],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("06:30", "Acordar, banho e mochila pequena", "house"),
          stop("07:00", "Café no Founding Farmers (reserva recomendada)", "burger"),
          transit("07:50", "U.S. Capitol Visitor Center (Uber)"),
          stop("08:20", "Chegada e controle de segurança", "target"),
          stop("08:50", "Tour do Capitólio", "target", "capitolio"),
          stop("09:40", "Saída do tour e caminhada para a Biblioteca do Congresso", "tree"),
          stop("10:00", "Thomas Jefferson Building, Great Hall e exposições", "camera", "biblioteca-congresso"),
          stop("11:15", "Caminhada em direção ao National Mall", "tree"),
          stop("11:30", "Almoço rápido no Mitsitam Café (terminar até 12h20)", "burger"),
          stop("12:30", "Caminhada e controle de segurança do Museu do Ar e Espaço", "target", "ar-e-espaco"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("14:30", "Caminhada até o National Archives", "tree"),
          stop("14:45", "Chegada pela fila agendada e controle de segurança", "target", "national-archives"),
          stop("15:45", "Caminhada para o Museu de História Natural", "tree"),
          stop("16:00", "Dinossauros, Diamante Hope, mamíferos e Ocean Hall", "camera"),
          stop("17:20", "Banheiro, água e chocolate quente ou café", "burger"),
          stop("17:40", "Memoriais via Uber", "camera"),
        ],
      },
      {
        title: "Noite",
        steps: [
          stop("20:00", "Jantar no Old Ebbitt Grill (reserva a fazer)", "burger"),
          stop("21:30", "Retorno ao hotel", "house"),
        ],
      },
    ],
    cards: [
      {
        id: "capitolio",
        name: "Tour do Capitólio",
        icon: "target",
        time: "08:50",
        address: "U.S. Capitol Visitor Center, Washington, DC",
        sections: [
          confirmedSection("29/12 • 8h50 • 4 pessoas • código **12838601**.", "Site oficial: www.visitthecapitol.gov"),
        ],
      },
      {
        id: "biblioteca-congresso",
        name: "Biblioteca do Congresso",
        icon: "camera",
        time: "10:00",
        address: "Thomas Jefferson Building, Washington, DC",
        sections: [
          attentionSection("**Reserva ainda pendente** (29/12 • 10h): reservar a Biblioteca do Congresso.", "Site oficial: www.loc.gov/visit"),
        ],
      },
      {
        id: "ar-e-espaco",
        name: "Museu do Ar e Espaço",
        icon: "target",
        time: "13:00",
        address: "National Air and Space Museum, Washington, DC",
        sections: [
          confirmedSection(
            "29/12 • entrada confirmada às **13h** • 4 pessoas • US$ 0,00 • pedido **X5X-TP3-BX6L**.",
            "Não há entrada antecipada. Visita até aproximadamente 14h30.",
            "Site oficial: airandspace.si.edu/visit/museum-dc",
          ),
        ],
      },
      {
        id: "national-archives",
        name: "National Archives",
        icon: "target",
        time: "14:45",
        address: "National Archives, Washington, DC",
        sections: [
          confirmedSection(
            "29/12 • entrada confirmada **15h–15h15** • 4 pessoas • pedido **477047521**.",
            "Chegada pela fila agendada e controle de segurança; ver a Declaração, a Constituição e a Bill of Rights.",
            "Site oficial: visit.archives.gov",
          ),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
