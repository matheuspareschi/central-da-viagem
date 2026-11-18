import { epicUniverseAttractions } from "../epicUniverseAttractions";
import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-22",
  calendarTitle: "Epic Universe",
  day: 22,
  park: {
    name: "Epic Universe",
    departure: "9h",
    opening: "10h",
    closing: "21h",
  },
  weekday: "Ter",
  liturgicalWeekday: "Preparação para o Natal",
  category: "parque",
  reading: {
    label: "Preparação para o Natal",
    oldTestamentReading: "Sofonias 3:8–13",
    gospelReading: "Lucas 1:39–45",
  },
  title: "Epic Universe",
  itinerary: {
    kind: "checklist",
    parkId: "epic-universe",
    summary: "Segunda visita ao Epic Universe, com as mesmas atrações do dia 17.",
    journey: {
      tiles: [
        { label: "Acordar", value: "8h00" },
        { label: "Sair de casa", value: "9h00" },
        { label: "Entrar", value: "9h30" }, // REVISAR: lido como entrada no complexo/estacionamento
        { label: "Chegar ao parque", value: "10h00" },
      ],
      notes: [
        { icon: "info", text: "O Epic Universe **abre às 10h** (entrada antecipada às 9h). **Fecha às 21h**." },
      ],
      alerts: ["**Alimentação**: Universal **não permite cooler**: levar muffin ou barrinha de whey assado."],
    },
    attractions: epicUniverseAttractions,
  },
} satisfies DayData;