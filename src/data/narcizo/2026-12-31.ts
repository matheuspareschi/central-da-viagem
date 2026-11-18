import { addressSection, attentionSection, confirmedSection, FAMILIA_NARCIZO, listSection, stop } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  cidade: "Nova York",
  dateISO: "2026-12-31",
  calendarTitle: "Quinta Avenida, The Rink e Midnight Run",
  day: 31,
  weekday: "Qui",
  liturgicalWeekday: "",
  category: "turismo",
  specialIcon: "sparkle",
  title: "Quinta Avenida, The Rink e Midnight Run",
  itinerary: {
    kind: "schedule",
    summary: "Quinta Avenida, St. Patrick e The Plaza pela manhã; patinação confirmada no The Rink; retirada dos kits e NYRR Midnight Run no Central Park na virada do ano.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Patinação (The Rink)", value: "15h50" },
        { label: "Retirada dos kits", value: "17h30" },
        { label: "Saída para o Central Park", value: "21h45" },
        { label: "Midnight Run", value: "23h59" },
      ],
      notes: [
        { icon: "info", text: "Rafael pode acompanhar a virada com a **pulseira de acompanhante**, conforme a regra divulgada pela NYRR." },
        { icon: "return", text: "Fim da corrida e retorno ao hotel por volta de **1h00** (já em 01/01)." },
      ],
      alerts: [
        "Retirada dos kits: levar o **QR code de cada corredor** e documento com foto. Não haverá retirada de número no Central Park; o prazo final informado pela NYRR é **22h**.",
        "Mostrar o ingresso do The Rink no celular ou impresso.",
      ],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:45", "Acordar e conferir o clima", "house"),
          stop("08:15", "Café da manhã", "burger"),
          stop("09:05", "Saída para 39 Av", "parking"),
          stop("09:35", "Caminhar até a St. Patrick's Cathedral", "tree"),
          stop("10:00", "Visitar a Catedral, se aberta", "camera"),
          stop("10:30", "Quinta Avenida, vitrines e compras (10h30–12h45)", "bag"),
          stop("12:45", "Almoço perto do Rockefeller", "burger"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("13:30", "House of Dior: boutique e fachada", "bag"),
          stop("14:00", "The Plaza Hotel: fotos externas", "camera"),
          stop("14:30", "Rockefeller Center: árvore e vitrines", "camera"),
          stop("15:15", "Apresentar-se no The Rink", "target", "the-rink"),
          stop("15:50", "Patinação no The Rink (15h50–16h50) • CONFIRMADA", "target", "the-rink"),
          stop("16:50", "Fotos rápidas e saída do Rockefeller (16h50–17h10)", "camera"),
          stop("17:10", "Caminhar até o NYRR RUNCENTER (17h10–17h30)", "tree"),
          stop("17:30", "Retirar os kits de Silvana, Isabela e Gabriel (17h30–18h00)", "target", "nyrr-runcenter"),
          stop("18:00", "Jantar cedo perto do RUNCENTER (18h00–18h45)", "burger"),
          stop("18:45", "Voltar ao hotel, descansar e fazer lanche leve (18h45–21h30)", "house"),
        ],
      },
      {
        title: "Noite",
        steps: [
          stop("21:45", "Saída para o Central Park", "parking"),
          stop("23:00", "Chegada, orientação e acesso à área da corrida", "target"),
          stop("23:59", "NYRR Midnight Run • Silvana, Isabela e Gabriel confirmados", "sparkle", "midnight-run"),
          stop("01:00", "Fim da corrida e retorno ao hotel (aprox. 1h00, já madrugada de 01/01)", "house"),
        ],
      },
    ],
    cards: [
      {
        id: "the-rink",
        name: "The Rink at Rockefeller Center",
        icon: "target",
        time: "15:50",
        address: "The Rink, 49th Street entre a 5th e a 6th Avenidas, Nova York",
        sections: [
          confirmedSection("31/12 às **15h50** • 1 hora • 4 pessoas • código **HCV4GYBY**."),
          addressSection("Entrada principal na 49th Street, entre a 5th e a 6th Avenidas, ao lado da Kate Spade.", "Mostrar o ingresso no celular ou impresso."),
        ],
      },
      {
        id: "nyrr-runcenter",
        name: "NYRR RUNCENTER (retirada dos kits)",
        icon: "target",
        time: "17:30",
        address: "320 West 57th Street, Nova York",
        sections: [
          addressSection("320 West 57th Street, entre a 8th e a 9th Avenue."),
          attentionSection(
            "Retirar os kits de **Silvana, Isabela e Gabriel** (ainda a fazer). Levar o QR code de cada corredor e documento com foto.",
            "Não haverá retirada de número no Central Park; no dia 31, o prazo final informado pela NYRR é **22h**.",
          ),
        ],
      },
      {
        id: "midnight-run",
        name: "NYRR Midnight Run",
        icon: "sparkle",
        time: "23:59",
        address: "Central Park, Nova York",
        sections: [
          confirmedSection(
            "Silvana, Isabela e Gabriel confirmados no Central Park.",
            "Gabriel: confirmação **40711C3E55** • largada indicada para **23h59**.",
          ),
          listSection("citrus", "lightbulb", "Acompanhante", [
            "Rafael pode acompanhar a virada com a pulseira de acompanhante, conforme a regra divulgada pela NYRR",
          ]),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
