import { mapSearchUrl } from "../../lib/maps";
import type { DayData, DayPeriod, JourneyNote, StopCard } from "../../types";

const FREE_LUNCH_ALERT = "**Almoço livre**: cada um come quando quiser, com os snacks do carro ou algo rápido no local.";

const WAKE_UP_TILE = { label: "Acordar", value: "7h00" };
const IHOP_TILE = { label: "IHOP", value: "~8h30" };
const RETURN_TILE = { label: "Volta", value: "22h00" };

const DAY_NOTES: JourneyNote[] = [
  { icon: "car", text: "De carro: **~25 min** da casa até o IHOP (6005 International Dr), saindo **às 8h**." },
];
const NIGHT_NOTE: JourneyNote = {
  icon: "info",
  text: "Os dois locais da noite (Kia Center e Dr. Phillips Center) ficam a **poucos quarteirões** um do outro.",
};

/** A manhã e a tarde (jantar no Outlet) são iguais nas duas variações do dia; só a noite muda. */
const morningPeriod: DayPeriod = {
  title: "Manhã",
  steps: [
    { kind: "transit", time: "08:00", duration: "~25 min", destinationName: "IHOP (International Dr)" },
    { kind: "stop", time: "08:30", stopId: "ihop-6005-international-dr", name: "Café da manhã no IHOP", icon: "burger" },
    { kind: "transit", time: "10:00", destinationName: "Orlando International Premium Outlets" }, // REVISAR: tempo de deslocamento do IHOP ao outlet não informado
    { kind: "stop", time: "10:15", stopId: "outlet-international-premium", name: "Orlando International Premium Outlets", icon: "bag" },
  ],
};

const afternoonPeriod: DayPeriod = {
  title: "Tarde",
  steps: [
    { kind: "stop", time: "16:00", stopId: "", name: "Jantar no Outlet", icon: "burger" }, // REVISAR: horário estimado
    { kind: "transit", time: "17:00", destinationName: "Centro de Orlando" }, // REVISAR: horário estimado
  ],
};

const dayCards: StopCard[] = [
    {
      id: "ihop-6005-international-dr",
      link: mapSearchUrl("IHOP", "6005 International Dr, Orlando, FL 32819"),
      name: "IHOP",
      icon: "burger",
      time: "08:30",
      sections: [
        {
          color: "navy",
          icon: "parking",
          title: "Endereço",
          paragraphs: ["6005 International Dr, Orlando, FL 32819 (esquina com a Universal Blvd)."],
        },
        {
          color: "citrus",
          icon: "burger",
          title: "Sobre",
          paragraphs: [
            "Rede de panquecas e café da manhã americano. Avaliações de viajantes falam em comida servida rápido e cerca de **US$ 20 por pessoa** no brunch. A unidade abre 24 horas.",
          ],
        },
        {
          color: "gold",
          icon: "lightbulb",
          title: "Dica",
          paragraphs: [
            "**Chegue cedo**: com cerca de 10 pessoas, a espera por mesa pode ser longa.",
            "Panquecas e **French toast** são o forte da casa.",
          ],
        },
        {
          color: "palm",
          icon: "leaf",
          title: "Desconto",
          paragraphs: ["O IHOP tem cardápio sênior para **maiores de 55 anos**, com preços menores. Vale perguntar na mesa."],
        },
        {
          color: "attn",
          icon: "alert",
          title: "Atenção",
          paragraphs: [
            "Horário desta unidade não conferido na página oficial: **confirmar no Google Maps**.",
          ],
        },
      ],
    },
    {
      id: "outlet-international-premium",
      link: mapSearchUrl("Orlando International Premium Outlets", "4951 International Dr, Orlando, FL 32819"),
      name: "Orlando International Premium Outlets",
      icon: "bag",
      time: "10:15",
      shopRegionId: "international-premium-outlets",
      sections: [
        {
          color: "navy",
          icon: "parking",
          title: "Endereço e estacionamento",
          paragraphs: [
            "4951 International Dr, Orlando, FL 32819, no extremo norte da International Drive, perto da I-4.",
            "Cerca de 3.000 vagas: **chegar na abertura** ajuda a achar vaga.",
          ],
        },
        {
          color: "citrus",
          icon: "bag",
          title: "Lojas",
          list: [
            "Mais de 180 lojas.",
            "Entre as lojas do diretório: **adidas, PUMA, Converse**, Foot Locker, Crocs, Fossil, Brooks Brothers, BOSS, Banana Republic e Armani.",
            "Seguir a aba International Premium Outlets da planilha Compras_na_Florida__2026.xlsx, com as **lojas ⭐ primeiro**.",
          ],
        },
        {
          color: "gold",
          icon: "lightbulb",
          title: "Horário",
          paragraphs: [
            "Horário normal: segunda a sábado, **das 10h às 21h**. Em dezembro pode variar.",
          ],
        },
        {
          color: "attn",
          icon: "alert",
          title: "Atenção",
          paragraphs: [
            "Sacolas não entram no Kia Center: antes do jogo, **deixe tudo no porta-malas**, fora de vista.",
            "Confirmar o **horário do dia 16** no site do outlet.",
          ],
        },
      ],
    },
];

const gameCards: StopCard[] = [
    {
      id: "kia-center",
      name: "Kia Center: Magic x Cavaliers",
      icon: "target",
      time: "18:30",
      sections: [
        {
          color: "navy",
          icon: "parking",
          title: "Endereço",
          paragraphs: ["400 W Church St, Orlando, FL 32801."],
        },
        {
          color: "citrus",
          icon: "target",
          title: "Sobre",
          paragraphs: [
            "Jogo do Orlando Magic contra o Cleveland Cavaliers na quarta-feira, 16/12, **às 19h** (horário de Orlando).",
            "A arena **abriu em 2010** e se chamava Amway Center até dezembro de 2023. Tem 9 restaurantes e bares.",
          ],
        },
        {
          color: "gold",
          icon: "lightbulb",
          title: "Dica",
          paragraphs: [
            "Jante antes: comida e bebida de fora **não entram na arena**.",
            "Chegue com folga para achar os lugares.",
          ],
        },
        {
          color: "attn",
          icon: "alert",
          title: "Atenção",
          paragraphs: [
            "**Bolsas e recipientes não entram**, exceto pequenas bolsas médicas e de bebê. Leve só uma **clutch pequena** e deixe as sacolas do outlet no carro.",
            "Horário de abertura das portas **não confirmado**.",
            "Fim do jogo estimado entre 21h30 e 22h.",
          ],
        },
      ],
    },
];

const christmasCards: StopCard[] = [
    {
      id: "dr-phillips-center",
      name: "Dr. Phillips Center: Frontyard Holiday Festival",
      icon: "tree",
      time: "17:30",
      sections: [
        {
          color: "navy",
          icon: "parking",
          title: "Endereço",
          paragraphs: ["445 S Magnolia Ave, Orlando, FL 32801 (entre as ruas W South e E Anderson)."],
        },
        {
          color: "citrus",
          icon: "tree",
          title: "Sobre",
          paragraphs: [
            "Festival **gratuito** de 27/11 a 31/12/2026, com música ao vivo, filmes de Natal, comidinhas sazonais, luzes e neve artificial todas as noites.",
          ],
        },
        {
          color: "gold",
          icon: "lightbulb",
          title: "Dica",
          paragraphs: [
            "Vá depois do pôr do sol (**por volta das 17h30**) para ver as luzes acesas.",
            "Combine com o grupo do jogo o **ponto e o horário** de encontro.",
          ],
        },
        {
          color: "attn",
          icon: "alert",
          title: "Atenção",
          paragraphs: [
            "A programação exata do dia 16 **ainda não foi divulgada**: conferir perto da data.",
            "Distância a pé até o Kia Center **não confirmada**.",
          ],
        },
      ],
    },
];

export default {
  dateISO: "2026-12-16",
  calendarTitle: "IHOP, compras e noite em Orlando",
  day: 16,
  weekday: "Qua",
  liturgicalWeekday: "4ª sem. do Advento",
  title: "Café da manhã no IHOP, compras e noite em Orlando",
  split: ["compras", "turismo"],
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "Malaquias 3:16–4:6",
    gospelReading: "João 3:17–21",
  },
  itinerary: {
    kind: "split",
    tracks: [
      {
        key: "noite-jogo",
        category: "compras",
        title: "Café da manhã no IHOP, compras e jogo de basquete",
        mode: "schedule",
        summary: "Café da manhã no IHOP, compras no International Premium Outlets até o fim da tarde e, à noite, o jogo do Orlando Magic x Cleveland Cavaliers no Kia Center (400 W Church St), às 19h (horário de Orlando).",
        group: "Grupo todo de dia · os meninos no jogo à noite",
        journey: {
          tiles: [WAKE_UP_TILE, IHOP_TILE, { label: "Início do jogo", value: "19h00" }, RETURN_TILE],
          notes: [...DAY_NOTES, NIGHT_NOTE],
          alerts: [FREE_LUNCH_ALERT],
        },
        periods: [
          morningPeriod,
          afternoonPeriod,
          {
            title: "Noite",
            steps: [
              { kind: "stop", time: "18:30", stopId: "kia-center", name: "Entrada na arena", icon: "target" },
              { kind: "stop", time: "19:00", stopId: "kia-center", name: "Início do jogo: Magic x Cavaliers", icon: "target" },
              { kind: "transit", time: "22:00", destinationName: "Storey Lake Resort (volta)" },
            ],
          },
        ],
        cards: [...dayCards, ...gameCards],
      },
      {
        key: "noite-natal",
        category: "compras",
        title: "Café da manhã no IHOP, compras e noite de natal",
        mode: "schedule",
        summary: "Café da manhã no IHOP, compras no International Premium Outlets até o fim da tarde e, à noite, a decoração de Natal (Frontyard Holiday Festival, gratuito) no Dr. Phillips Center (445 S Magnolia Ave).",
        group: "Grupo todo de dia · outro grupo na decoração à noite",
        journey: {
          tiles: [WAKE_UP_TILE, IHOP_TILE, { label: "Chegada", value: "17h30" }, RETURN_TILE],
          notes: [...DAY_NOTES, NIGHT_NOTE],
          alerts: [FREE_LUNCH_ALERT],
        },
        periods: [
          morningPeriod,
          afternoonPeriod,
          {
            title: "Noite",
            steps: [
              { kind: "stop", time: "17:30", stopId: "dr-phillips-center", name: "Frontyard Holiday Festival", icon: "tree" },
              { kind: "transit", time: "22:00", destinationName: "Storey Lake Resort (volta)" },
            ],
          },
        ],
        cards: [...dayCards, ...christmasCards],
      },
    ],
  },
  options: [
    {
      id: "noite-do-jogo",
      label: "Noite do jogo",
      supportLine: "Grupo todo de dia · **os meninos** no jogo à noite",
      trackKeys: ["noite-jogo"],
      isDefault: true,
    },
    {
      id: "noite-de-natal",
      label: "Noite de Natal",
      supportLine: "Grupo todo de dia · **outro grupo** na decoração à noite",
      trackKeys: ["noite-natal"],
    },
  ],
} satisfies DayData;
