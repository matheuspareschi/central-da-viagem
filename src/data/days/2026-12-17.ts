import { epicUniverseAttractions } from "../epicUniverseAttractions";
import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-17",
  calendarTitle: "Epic Universe",
  day: 17,
  park: {
    name: "Epic Universe",
    departure: "8h30",
    opening: "10h",
    closing: "21h",
  },
  weekday: "Qui",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "parque",
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "2 Samuel 6:1–11",
    epistleReading: "Hebreus 1:1–4",
    gospelReading: "Marcos 9:9–13",
    psalm: "Salmo 89:1–4, 19–26",
  },
  title: "Epic Universe",
  itinerary: {
    kind: "checklist",
    parkId: "epic-universe",
    summary: "Primeira visita ao Epic Universe, na ordem do roteiro.",
    journey: {
      tiles: [{ label: "Acordar", value: "7h30" }, { label: "Sair de casa", value: "8h30" }, { label: "Chegada no parque", value: "9h20" }, { label: "Parque aberto", value: "10h–21h" }],
      notes: [
        { icon: "info", text: "Ida até os portões: mesmos horários do Universal Studios." },
      ],
      alerts: ["Confirmar no app o horário de abertura."],
    },
    attractions: epicUniverseAttractions,
  },
} satisfies DayData;
