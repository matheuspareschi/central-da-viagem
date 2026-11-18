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

/** A manhã é igual nas duas variações do dia; a tarde (jantar no Outlet) e a noite mudam só no destino e no estacionamento. */
const morningPeriod: DayPeriod = {
  title: "Manhã",
  steps: [
    { kind: "transit", time: "08:00", duration: "~25 min", destinationName: "IHOP (International Dr)" },
    { kind: "stop", time: "08:30", stopId: "ihop-6005-international-dr", name: "Café da manhã no IHOP", icon: "burger" },
    { kind: "transit", time: "10:00", duration: "11 min", destinationName: "Orlando International Premium Outlets" },
    { kind: "stop", time: "10:15", stopId: "outlet-international-premium", name: "Orlando International Premium Outlets", icon: "bag" },
  ],
};

const afternoonPeriod = (destinationName: string): DayPeriod => ({
  title: "Tarde",
  steps: [
    { kind: "stop", time: "16:00", stopId: "", name: "Jantar no Outlet", icon: "burger" }, // REVISAR: horário estimado
    { kind: "transit", time: "17:00", destinationName }, // REVISAR: horário estimado
  ],
});

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
      id: "parking-game",
      name: "Estacionamento para o jogo",
      icon: "parking",
      time: "17:30",
      parkingOptions: [
        {
          id: "garland-lot",
          name: "Garland Lot",
          address: "109 W Pine St, Orlando, FL 32801",
          walk: "5 a 7 min a pé",
          price: "**US$ 10 a 15** em eventos noturnos (após as 17h) e fins de semana",
          details: "Estacionamento aberto bem próximo à arena. A saída após o evento é bem mais rápida do que nos prédios-garagem, mas há poucas vagas: chegar cerca de **2 horas antes**.",
        },
        {
          id: "55-west-garage",
          name: "55 West Garage",
          address: "60 W Pine St, Orlando, FL 32801",
          walk: "~7 min a pé (2 quarteirões)",
          price: "Tarifa única de evento: **US$ 10** na hora ou **US$ 11** reservando antes",
          details: "Garagem coberta da prefeitura. Ponto negativo: o trânsito para sair dos andares superiores é lento logo depois de grandes shows ou jogos.",
        },
        {
          id: "central-blvd-garage",
          name: "Central Blvd. Garage",
          address: "53 W Central Blvd, Orlando, FL 32801",
          walk: "~7 min a pé",
          price: "Cerca de **US$ 10 a 11** em eventos noturnos",
          details: "Garagem pública bem localizada, com fácil acesso pela W Central Blvd.",
        },
        {
          id: "grove-park-lot",
          name: "Grove Park Lot",
          address: "521 W Central Blvd, Orlando, FL 32801",
          walk: "5 a 9 min a pé",
          price: "Em média **US$ 16** em jogos do Orlando Magic",
          details: "Fica do outro lado da linha férrea (perto também do Inter&Co Stadium). A vantagem é a saída rápida para a via expressa, sem pegar o miolo congestionado de Downtown.",
        },
        {
          id: "administration-garage-game",
          name: "Administration Garage",
          address: "300 Liberty Ave, Orlando, FL 32801",
          walk: "8 a 10 min a pé",
          price: "Tarifa fixa de cerca de **US$ 10** em noites de eventos",
          details: "Um pouco mais ao sul, perto da prefeitura. Garagem segura.",
        },
      ],
      sections: [
        {
          color: "gold",
          icon: "lightbulb",
          title: "Dica",
          paragraphs: [
            "Reserve pelo celular, com o **ParkMobile** ou o portal de estacionamento da City of Orlando. Em noites de jogo cheio, quem não reservou pode pagar mais na entrada da garagem.",
          ],
        },
        {
          color: "attn",
          icon: "alert",
          title: "Atenção",
          paragraphs: ["Valores e distâncias vêm de fontes de terceiros e podem mudar: **confirmar antes de ir**."],
        },
      ],
    },
    {
      id: "kia-center",
      name: "Kia Center: Magic x Cavaliers",
      icon: "target",
      time: "18:00",
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
            "As portas abrem cerca de **1h antes** do horário do ingresso (~18h). Chegar ao estacionamento **por volta das 17h30** dá tempo de caminhar e passar pela segurança.",
          ],
        },
        {
          color: "attn",
          icon: "alert",
          title: "Atenção",
          paragraphs: [
            "**Bolsas e recipientes não entram**, exceto pequenas bolsas médicas e de bebê. Leve só uma **clutch pequena** e deixe as sacolas do outlet no carro.",
            "Horário do jogo (19h) e das portas **não confirmados** em fonte oficial: conferir no ingresso.",
            "Fim do jogo estimado entre 21h30 e 22h.",
          ],
        },
      ],
    },
];

const christmasCards: StopCard[] = [
    {
      id: "administration-garage",
      address: "300 Liberty Ave, Orlando, FL 32801",
      name: "Administration Garage",
      icon: "parking",
      time: "17:30",
      sections: [
        {
          color: "navy",
          icon: "parking",
          title: "Endereço e estacionamento",
          paragraphs: [
            "Administration Garage (Administration Center Garage), 300 Liberty Ave, Orlando, FL 32801.",
            "Fica perto da prefeitura, no centro de Orlando.",
          ],
        },
        {
          color: "attn",
          icon: "alert",
          title: "Atenção",
          paragraphs: [
            "Valor no dia do evento **não confirmado**: a cidade de Orlando vende o estacionamento de eventos pelo site orlando.gov. Conferir antes.",
          ],
        },
      ],
    },
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
  calendarTitle: "IHOP, compras e noite de jogo ou de natal",
  day: 16,
  weekday: "Qua",
  liturgicalWeekday: "3ª sem. do Advento",
  title: "Café da manhã no IHOP, compras e noite em Orlando",
  split: ["compras", "turismo"],
  reading: {
    label: "3ª sem. do Advento",
    oldTestamentReading: "Malaquias 3:16–4:6",
    epistleReading: "Atos 4:1–4",
    gospelReading: "João 3:17–21",
    psalm: "Salmo 125",
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
          afternoonPeriod("Centro de Orlando (estacionamento)"),
          {
            title: "Noite",
            steps: [
              { kind: "stop", time: "17:30", stopId: "parking-game", name: "Estacionamento", icon: "parking" },
              { kind: "stop", time: "18:00", stopId: "kia-center", name: "Entrada na arena", icon: "target" },
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
          afternoonPeriod("Administration Garage (centro de Orlando)"),
          {
            title: "Noite",
            steps: [
              { kind: "stop", time: "17:30", stopId: "administration-garage", name: "Estacionamento: Administration Garage", icon: "parking" },
              { kind: "stop", time: "17:45", stopId: "dr-phillips-center", name: "Frontyard Holiday Festival", icon: "tree" },
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
      calendarTitle: "IHOP, compras e noite de jogo",
      supportLine: "Grupo todo de dia · **os meninos** no jogo à noite",
      trackKeys: ["noite-jogo"],
      isDefault: true,
    },
    {
      id: "noite-de-natal",
      label: "Noite de Natal",
      calendarTitle: "IHOP, compras e noite de natal",
      supportLine: "Grupo todo de dia · **outro grupo** na decoração à noite",
      trackKeys: ["noite-natal"],
    },
  ],
} satisfies DayData;
