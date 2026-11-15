import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-17",
  calendarTitle: "Epic Universe",
  day: 17,
  park: {
    name: "Epic Universe",
    departure: "7h15",
    opening: "10h",
    closing: "21h",
  },
  weekday: "Qui",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "parque",
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "2 Samuel 6:1–11",
    gospelReading: "Marcos 9:9–13",
  },
  title: "Epic Universe",
  itinerary: {
    kind: "checklist",
    parkId: "epic-universe",
    summary: "Primeira visita ao Epic Universe, na ordem do roteiro.",
    journey: {
      tiles: [{ label: "Acordar", value: "6h15" }, { label: "Sair de casa", value: "7h15" }, { label: "Entrada antecipada", value: "9h" }, { label: "Parque aberto", value: "10h–21h" }],
      notes: [
        { icon: "info", text: "Ida até os portões: mesmos horários do Universal Studios." },
      ],
      alerts: ["Confirmar no app o horário de abertura."],
    },
    attractions: [
      {
        id: "mario-kart",
        name: "Mario Kart: Bowser's Challenge",
        area: "Super Nintendo World",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Pegar single rider."],
          },
        ],
      },
      {
        id: "yoshi",
        name: "Yoshi's Adventure",
        area: "Super Nintendo World",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Se der tempo."],
          },
        ],
      },
      {
        id: "mine-cart",
        name: "Mine-Cart Madness",
        area: "Super Nintendo World",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Pegar single rider."],
          },
        ],
      },
      {
        id: "arcanum-circle",
        name: "The Arcanum Circle",
        area: "Harry Potter",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Olhar horário."],
          },
        ],
      },
      {
        id: "metro-flu",
        name: "Metro Flu",
        area: "Harry Potter",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Single rider; ver se vale a pena."],
          },
        ],
      },
      {
        id: "portal-foto",
        name: "Foto no caminho do portal",
        area: "Harry Potter",
        icon: "camera",
        sections: [
          {
            color: "palm",
            icon: "camera",
            title: "Foto",
            paragraphs: ["Tirar foto no caminho do portal."],
          },
        ],
      },
      {
        id: "show-dragao",
        name: "Show de Como Treinar Seu Dragão",
        area: "Como Treinar Seu Dragão",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Show."],
          },
        ],
      },
      {
        id: "fire-dreel",
        name: "Fire Dreel",
        area: "Como Treinar Seu Dragão",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração."],
          },
        ],
      },
      {
        id: "hiccups-ring-gliders",
        name: "Hiccup's Ring Gliders",
        area: "Como Treinar Seu Dragão",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração."],
          },
        ],
      },
      {
        id: "dragon-racers",
        name: "Dragon Racers",
        area: "Como Treinar Seu Dragão",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração."],
          },
        ],
      },
      {
        id: "frankenstein",
        name: "Castelo do Frankenstein",
        area: "Dark Universe",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Single rider."],
          },
        ],
      },
      {
        id: "curse-werewolf",
        name: "Curse of the Werewolf",
        area: "Dark Universe",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Single rider."],
          },
        ],
      },
      {
        id: "stardust-racers",
        name: "Stardust Racers",
        area: "Dark Universe",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração."],
          },
        ],
      },
      {
        id: "encerramento",
        name: "Encerramento",
        area: "Fim do dia",
        icon: "camera",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Roteiro",
            paragraphs: ["Assistir ao encerramento."],
          },
        ],
      },
    ],
  },
} satisfies DayData;
