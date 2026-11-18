import { attentionSection, FAMILIA_NARCIZO, listSection, stop } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  cidade: "Nova York",
  dateISO: "2027-01-04",
  calendarTitle: "High Line, SUMMIT e teleférico",
  day: 4,
  weekday: "Seg",
  liturgicalWeekday: "",
  reading: {
    label: "Dias ao redor da Epifania",
    oldTestamentReading: "Provérbios 3:1–12",
    epistleReading: "Tiago 4:5–10",
    gospelReading: "Lucas 18:9–14",
    psalm: "Salmo 110",
  },
  category: "turismo",
  title: "High Line, SUMMIT e teleférico",
  itinerary: {
    kind: "schedule",
    summary: "High Line, Little Island e Chelsea Market; biblioteca pública e Bryant Park; SUMMIT One Vanderbilt, Grand Central e teleférico para Roosevelt Island.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Saída do hotel", value: "9h00" },
        { label: "High Line", value: "10h00" },
        { label: "SUMMIT", value: "15h30" },
        { label: "Teleférico", value: "18h05" },
      ],
      notes: [
        { icon: "transit", text: "Fazer Manhattan → Roosevelt Island de teleférico e voltar pelo **metrô F**. O teleférico aceita OMNY." },
        { icon: "info", text: "Metrô até Hudson Yards (9h10–9h45) e volta a Long Island City pelo metrô F (19h05–19h40)." },
      ],
      alerts: [
        "Confirmar operação e clima do teleférico: com vento forte, chuva ou fila excessiva, seguir para o hotel.",
        "O SUMMIT ainda não está marcado como confirmado no checklist do guia.",
      ],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:45", "Acordar", "house"),
          stop("08:15", "Café", "burger"),
          stop("09:00", "Saída do hotel", "parking"),
          stop("09:10", "Metrô até Hudson Yards (9h10–9h45)", "parking"),
          stop("10:00", "High Line (10h00–11h15)", "tree"),
          stop("11:15", "Little Island (11h15–12h00)", "tree"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("12:00", "Chelsea Market (12h00–13h00)", "burger"),
          stop("13:00", "Deslocamento para a NYPL (13h00–13h30)", "parking"),
          stop("13:30", "New York Public Library (13h30–14h15)", "camera"),
          stop("14:15", "Bryant Park (14h15–14h45)", "tree"),
          stop("15:00", "Chegar ao SUMMIT", "target", "summit"),
          stop("15:30", "SUMMIT One Vanderbilt (15h30–17h00)", "camera", "summit"),
          stop("17:00", "Grand Central Terminal (17h00–17h40)", "camera"),
          stop("17:40", "Caminhar até 60th St com a 2nd Ave", "tree"),
        ],
      },
      {
        title: "Noite",
        steps: [
          stop("18:05", "Espera e embarque no teleférico (18h05–18h30)", "target", "teleferico"),
          stop("18:30", "Travessia até Roosevelt Island (18h30–18h40)", "target", "teleferico"),
          stop("18:40", "Fotos da skyline e da Queensboro Bridge (18h40–19h05)", "camera"),
          stop("19:05", "Metrô F para Long Island City (19h05–19h40)", "parking"),
          stop("20:00", "Jantar perto do hotel", "burger"),
        ],
      },
    ],
    cards: [
      {
        id: "summit",
        name: "SUMMIT One Vanderbilt",
        icon: "camera",
        time: "15:30",
        sections: [
          attentionSection("Chegar ao SUMMIT às **15h00**; visita de 15h30 às 17h00.", "Reserva ainda não marcada como confirmada no checklist do guia."),
        ],
      },
      {
        id: "teleferico",
        name: "Teleférico para Roosevelt Island",
        icon: "target",
        time: "18:05",
        address: "60th Street com 2nd Avenue, Nova York",
        sections: [
          listSection("citrus", "lightbulb", "Como fazer", [
            "Manhattan → Roosevelt Island de teleférico e volta pelo metrô F",
            "O teleférico aceita OMNY",
            "Fotos da skyline e da Queensboro Bridge em Roosevelt Island",
          ]),
          attentionSection("Confirmar operação e clima; com vento forte, chuva ou fila excessiva, seguir para o hotel."),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
