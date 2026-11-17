import { islandsAttractions } from "../islandsAttractions";
import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-15",
  calendarTitle: "Islands of Adventure",
  day: 15,
  park: {
    name: "Islands of Adventure",
    departure: "8h10",
    opening: "9h",
    closing: "19h",
  },
  weekday: "Ter",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "parque",
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "2 Reis 2:9–22",
    gospelReading: "Lucas 3:1–6",
  },
  title: "Islands of Adventure",
  itinerary: {
    kind: "checklist",
    parkId: "islands-of-adventure",
    // REVISAR (notes): Item "Chegada e preparação" redistribuído; conferir.
    summary: "Primeira visita ao Islands of Adventure, na ordem do roteiro.",
    journey: {
      tiles: [{ label: "Acordar", value: "7h10" }, { label: "Sair de casa", value: "8h10" }, { label: "Estacionamento abre", value: "8h00" }, { label: "Parque aberto", value: "9h–19h" }],
      notes: [],
      alerts: [],
    },
    attractions: islandsAttractions,
  },
} satisfies DayData;
