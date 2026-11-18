import type { AdventReading } from "../types";

const SALMO_80 = "Salmo 80:1–7, 17–19";
const SALMO_79 = "Salmo 79";
const SALMO_85 = "Salmo 85:1–2, 8–13";

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
  "2026-12-02": {
    label: "1ª sem. do Advento",
    oldTestamentReading: "Miqueias 5:1–5a",
    epistleReading: "Apocalipse 18:4–10",
    gospelReading: "Marcos 14:26–31",
    psalm: SALMO_79,
  },
  "2026-12-03": {
    label: "2ª sem. do Advento",
    oldTestamentReading: "Oseias 6:1–6",
    epistleReading: "1 Tessalonicenses 1:2–10",
    gospelReading: "Marcos 6:14–16",
    psalm: SALMO_85,
  },
  "2026-12-04": {
    label: "2ª sem. do Advento",
    oldTestamentReading: "Jeremias 1:4–10",
    epistleReading: "Atos 11:19–26",
    gospelReading: "Marcos 8:27–30",
    psalm: SALMO_85,
  },
  "2026-12-05": {
    label: "2ª sem. do Advento",
    oldTestamentReading: "Ezequiel 36:24–28",
    epistleReading: "Atos 19:1–6",
    gospelReading: "Marcos 11:27–33",
    psalm: SALMO_85,
  },
};
