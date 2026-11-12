import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-19",
  calendarTitle: "Winter Garden",
  day: 19,
  weekday: "Sáb",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "compras",
  title: "Winter Garden",
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "Juízes 13:2–24",
    gospelReading: "Lucas 1:8–14, 18–25",
  },
  itinerary: {
    kind: "schedule",
    // REVISAR (summary): Este dia não tinha `note`; resumo provisório. Escrever um resumo de verdade.
    summary: "Winter Garden.",
    journey: {
      tiles: [],
      notes: [
      ],
      alerts: [],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          {
            kind: "transit",
            time: "07:30",
            duration: "~30–35 min",
            destinationName: "Feira de Winter Garden",
          },
          {
            kind: "stop",
            time: "08:00",
            stopId: "feira",
            name: "Feira Winter Garden",
            icon: "corn",
          },
          {
            kind: "transit",
            time: "10:00",
            duration: "~5–10 min",
            destinationName: "Winter Garden Village",
          },
          {
            kind: "stop",
            time: "10:15",
            stopId: "village",
            name: "Winter Garden Village",
            icon: "bag",
          },
        ],
      },
      {
        title: "Tarde",
        steps: [
          {
            kind: "transit",
            time: "13:00",
            duration: "~30–35 min",
            destinationName: "Casa — almoço",
          },
          {
            kind: "stop",
            time: "13:00",
            stopId: "",
            name: "Casa — almoço",
            icon: "house",
          },
          {
            kind: "transit",
            time: "15:00",
            duration: "",
            destinationName: "Nike Factory Store",
          },
          {
            kind: "stop",
            time: "15:00",
            stopId: "nike",
            name: "Nike Factory Store",
            icon: "bag",
          },
        ],
      },
      {
        title: "Noite",
        steps: [
          {
            kind: "transit",
            time: "16:30",
            duration: "~10 min",
            destinationName: "Celebration",
          },
          {
            kind: "stop",
            time: "16:30",
            stopId: "celebration",
            name: "Celebration",
            icon: "tree",
          },
        ],
      },
    ],
    cards: [
      {
        id: "feira",
        name: "Feira Winter Garden",
        icon: "corn",
        time: "08:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Estacionamento",
            paragraphs: [
              "Público e **gratuito**, perto de 104 S Lakeview Ave.",
            ],
          },
          {
            color: "citrus",
            icon: "corn",
            title: "Sobre a feira",
            paragraphs: [
              "104 S Lakeview Ave, **sábados 8h–13h**, no centro histórico de Plant Street (não é caminhável até o Village).",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Cheguem perto **das 8h** para os produtos mais frescos — feiras costumam esvaziar o estoque bom até o meio da manhã.",
            ],
          },
        ],
      },
      {
        id: "village",
        name: "Winter Garden Village",
        icon: "bag",
        time: "10:15",
        shopRegionId: "winter-garden-village",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Estacionamento",
            paragraphs: [
              "Estacionamento próprio do lifestyle center, **gratuito** e amplo.",
            ],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas âncora",
            paragraphs: [
              "Target, Lowe's, Bealls, Best Buy, HomeGoods, Marshalls, Ross, Burlington, Old Navy, Ulta, Bath & Body Works, PetSmart, Party City, Jo-Ann, World Market, Victoria's Secret. **Mais de 80 lojas** num só estacionamento.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Sugestão",
            paragraphs: [
              "**Priorizem as âncoras relevantes** para vocês antes que o movimento de sábado aumente.",
            ],
          },
        ],
      },
      {
        id: "nike",
        name: "Nike Factory Store",
        icon: "bag",
        time: "15:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Estacionamento",
            paragraphs: [
              "Estacionamento próprio, **gratuito**.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: [
              "Confirmado **10h–21h todos os dias**, sem pressão de horário. Já tenham em mente tamanhos/modelos para agilizar.",
            ],
          },
        ],
      },
      {
        id: "celebration",
        name: "Celebration",
        icon: "tree",
        time: "16:30",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Estacionamento",
            paragraphs: [
              "Rua costuma ser **gratuita**; à noite (Now Snowing) o movimento aumenta — cheguem com folga.",
            ],
          },
          {
            color: "gold",
            icon: "tree",
            title: "Now Snowing",
            paragraphs: [
              "Sessões **grátis** **às 18h**, 19h, 20h e 21h — cheguem ~17h para passear antes da primeira sessão.",
            ],
          },
          {
            color: "palm",
            icon: "tree",
            title: "Celebration Lakeside Park",
            paragraphs: [
              "**Caminhada de 15–20 min** pelo boardwalk iluminado (631 Sycamore St).",
            ],
          },
          {
            color: "citrus",
            icon: "burger",
            title: "Jantar",
            paragraphs: [
              "Columbia Restaurant tem unidade em Celebration — **reserva recomendada** em dezembro.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
