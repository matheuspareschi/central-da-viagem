import type { AdventReading } from "../types";

const SALMO_80 = "Salmo 80:1–7, 17–19";
const SALMO_79 = "Salmo 79";

/** Leituras do Advento (Ano B) nos dias anteriores ao primeiro dia do roteiro, por data ISO. */
export const preTripReadings: Record<string, AdventReading> = {
  "2026-11-26": {
    label: "1ª sem. do Advento",
    oldTestamentReading: "Zacarias 13:1–9",
    epistleReading: "Apocalipse 14:6–13",
    gospelReading: "Mateus 24:15–31",
    psalm: SALMO_80,
  },
  "2026-11-27": {
    label: "1ª sem. do Advento",
    oldTestamentReading: "Zacarias 14:1–9",
    epistleReading: "1 Tessalonicenses 4:1–12",
    gospelReading: "Marcos 13:3–13",
    psalm: SALMO_80,
  },
  "2026-11-28": {
    label: "1ª sem. do Advento",
    oldTestamentReading: "Miqueias 2:1–13",
    epistleReading: "1 Tessalonicenses 4:13–18",
    gospelReading: "Marcos 13:14–23",
    psalm: SALMO_80,
  },
  "2026-11-29": {
    label: "1º Domingo do Advento",
    oldTestamentReading: "Isaías 64:1–9",
    epistleReading: "1 Coríntios 1:3–9",
    gospelReading: "Marcos 13:24–27",
    psalm: SALMO_80,
  },
  "2026-11-30": {
    label: "1ª sem. do Advento",
    oldTestamentReading: "Miqueias 4:1–5",
    epistleReading: "Apocalipse 15:2–8",
    gospelReading: "Mateus 24:29–31",
    psalm: SALMO_79,
  },
  "2026-12-01": {
    label: "1ª sem. do Advento",
    oldTestamentReading: "Miqueias 4:6–13",
    epistleReading: "Apocalipse 18:1–3",
    gospelReading: "Lucas 21:34–38",
    psalm: SALMO_79,
  },
};
