import { islandsAttractions } from "../islandsAttractions";
import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-18",
  calendarTitle: "Islands of Adventure",
  day: 18,
  weekday: "Sex",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "parque",
  park: { name: "Islands of Adventure", departure: "9h", opening: "9h", closing: "19h" },
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "2 Samuel 6:12–19",
    epistleReading: "Hebreus 1:5–14",
    gospelReading: "João 7:40–52",
    psalm: "Salmo 89:1–4, 19–26",
  },
  title: "Islands of Adventure",
  itinerary: {
    kind: "checklist",
    parkId: "islands-of-adventure",
    summary: "Segunda visita ao Islands of Adventure, com as mesmas atrações do dia 15.",
    journey: {
      tiles: [
        { label: "Acordar", value: "8h00" },
        { label: "Sair de casa", value: "9h00" },
        { label: "Parque aberto", value: "9h–19h" },
        { label: "Hogwarts Express", value: "17h20–18h20" },
      ],
      notes: [],
      alerts: [],
    },
    attractions: islandsAttractions,
  },
} satisfies DayData;
