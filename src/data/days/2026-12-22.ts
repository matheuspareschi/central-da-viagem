import { epicUniverseAttractions } from "../epicUniverseAttractions";
import type { ChecklistItem, DayData } from "../../types";

/** Só o dia 22 tem o Le Cirque Arcanus; ele fica logo depois dos itens de Harry Potter da lista compartilhada. */
const cirqueArcanusItem: ChecklistItem = {
  id: "cirque-varinhas-quadros",
  attractionId: "le-cirque-arcanus",
  name: "Le Cirque Arcanus, varinhas e quadros falantes",
  area: "Harry Potter",
  icon: "camera",
  sections: [
    {
      color: "citrus",
      icon: "camera",
      title: "Sobre",
      paragraphs: [
        "Le Cirque Arcanus (**~11h15**): show de circo e Animais Fantásticos, hora de sentar (os guias divergem: opcional). Perto do Le Gobelet Noir, os quadros de Cassandra Trelawney, Sir Cadogan e Simon Beauchamp ensinam um feitiço a quem tem varinha.",
      ],
    },
    {
      color: "gold",
      icon: "burger",
      title: "Dica",
      paragraphs: ["**~12h00** crepe de cerveja amanteigada no Café L'Air de la Sirène, para dividir."],
    },
  ],
};

const attractions = epicUniverseAttractions.flatMap((item) => (item.id === "portal-foto" ? [item, cirqueArcanusItem] : [item]));

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
    summary: "Segunda visita ao Epic Universe, com as atrações do dia 17 e o Le Cirque Arcanus.",
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
    attractions,
  },
} satisfies DayData;