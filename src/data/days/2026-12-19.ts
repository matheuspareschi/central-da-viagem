import { houseInfo } from "../global/contacts";
import { shopRegions } from "../shopping";
import type { DayData, DayPeriod, StopCard } from "../../types";

const FEIRA_ADDRESS = "104 S Lakeview Ave, Winter Garden, FL 34787";
const VILLAGE_ADDRESS = shopRegions["winter-garden-village"].address;

const feiraCard: StopCard = {
  id: "feira",
  address: FEIRA_ADDRESS,
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
};

/** O horário do cartão muda: 10h15 depois da feira, 10h para quem vai direto. */
const villageCard = (time: string): StopCard => ({
  id: "village",
  address: VILLAGE_ADDRESS,
  name: "Winter Garden Village",
  icon: "bag",
  time,
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
});

const nikeCard: StopCard = {
  id: "nike",
  address: VILLAGE_ADDRESS,
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
};

const celebrationCard: StopCard = {
  id: "celebration",
  address: "Celebration, FL 34747",
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
};

const homeLunchCard: StopCard = {
  id: "casa-almoco",
  address: houseInfo.address,
  name: "Casa — almoço",
  icon: "house",
  time: "13:00",
  sections: [{ color: "navy", icon: "house", title: "Endereço", paragraphs: [houseInfo.address] }],
};

/** Da tarde em diante o roteiro é o mesmo nas duas variações. */
const afternoonPeriod: DayPeriod = {
  title: "Tarde",
  steps: [
    { kind: "transit", time: "13:00", duration: "~30–35 min", destinationName: "Casa — almoço" },
    { kind: "stop", time: "13:00", stopId: "casa-almoco", name: "Casa — almoço", icon: "house" },
    { kind: "transit", time: "15:00", duration: "~30–35 min", destinationName: "Nike Factory Store" }, // REVISAR: tempo da casa ao Village, assumido igual ao da manhã
    { kind: "stop", time: "15:00", stopId: "nike", name: "Nike Factory Store", icon: "bag" },
  ],
};

const nightPeriod: DayPeriod = {
  title: "Noite",
  steps: [
    { kind: "transit", time: "16:30", duration: "~10 min", destinationName: "Celebration" },
    { kind: "stop", time: "16:30", stopId: "celebration", name: "Celebration", icon: "tree" },
  ],
};

const SHARED_CARDS = [nikeCard, celebrationCard, homeLunchCard];

export default {
  dateISO: "2026-12-19",
  calendarTitle: "Winter Garden e Celebration",
  day: 19,
  weekday: "Sáb",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "compras",
  title: "Feira, Winter Garden, Celebration",
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "Juízes 13:2–24",
    gospelReading: "Lucas 1:8–14, 18–25",
  },
  itinerary: {
    kind: "split",
    tracks: [
      {
        key: "com-feira",
        category: "compras",
        title: "Feira, Winter Garden, Celebration",
        mode: "schedule",
        summary: "Feira de Winter Garden de manhã, Winter Garden Village, almoço em casa, Nike Factory Store e Celebration à noite.",
        journey: {
          tiles: [{ label: "Acordar", value: "7h00" }, { label: "Sair de casa", value: "7h30" }, { label: "Celebration", value: "16h30" }, { label: "Deslocamento", value: "~1h55 no total" }], // REVISAR: soma dos trajetos do dia, sem a volta para casa
          notes: [],
          alerts: [],
        },
        periods: [
          {
            title: "Manhã",
            steps: [
              { kind: "transit", time: "07:30", duration: "~30–35 min", destinationName: "Feira de Winter Garden" },
              { kind: "stop", time: "08:00", stopId: "feira", name: "Feira Winter Garden", icon: "corn" },
              { kind: "transit", time: "10:00", duration: "~5–10 min", destinationName: "Winter Garden Village" },
              { kind: "stop", time: "10:15", stopId: "village", name: "Winter Garden Village", icon: "bag" },
            ],
          },
          afternoonPeriod,
          nightPeriod,
        ],
        cards: [feiraCard, villageCard("10:15"), ...SHARED_CARDS],
      },
      {
        key: "sem-feira",
        category: "compras",
        title: "Winter Garden e Celebration",
        mode: "schedule",
        summary: "Direto ao Winter Garden Village, almoço em casa, Nike Factory Store e Celebration à noite.",
        journey: {
          tiles: [{ label: "Acordar", value: "8h30" }, { label: "Sair de casa", value: "9h25" }, { label: "Celebration", value: "16h30" }, { label: "Deslocamento", value: "~1h50 no total" }], // REVISAR: soma dos trajetos do dia, sem a volta para casa
          notes: [],
          alerts: [],
        },
        periods: [
          {
            title: "Manhã",
            steps: [
              { kind: "transit", time: "09:25", duration: "~30–35 min", destinationName: "Winter Garden Village" },
              { kind: "stop", time: "10:00", stopId: "village", name: "Winter Garden Village", icon: "bag" },
            ],
          },
          afternoonPeriod,
          nightPeriod,
        ],
        cards: [villageCard("10:00"), ...SHARED_CARDS],
      },
    ],
  },
  options: [
    {
      id: "com-feira",
      label: "Com a feira",
      supportLine: "Feira de manhã · acordar às 7h00", // REVISAR: dados não dizem quem vai
      trackKeys: ["com-feira"],
      isDefault: true,
    },
    {
      id: "sem-feira",
      label: "Sem a feira",
      supportLine: "Direto ao Winter Garden Village · acordar às 8h30", // REVISAR: dados não dizem quem vai
      trackKeys: ["sem-feira"],
    },
  ],
} satisfies DayData;
