import { mapSearchUrl } from "../../lib/maps";
import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-16",
  calendarTitle: "IHOP, compras e noite em Orlando",
  day: 16,
  weekday: "Qua",
  liturgicalWeekday: "4ª sem. do Advento",
  title: "IHOP, Premium Outlets e Noite em Orlando",
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
        key: "international-premium-outlets",
        category: "compras",
        title: "Orlando International Premium Outlets",
        mode: "schedule",
        summary: "Café da manhã no IHOP e depois compras até o fim da tarde.",
        group: "Grupo todo",
        journey: {
          tiles: [
            { label: "Acordar", value: "7h00" },
            { label: "IHOP", value: "~8h00" },
          ],
          notes: [
            { icon: "car", text: "De carro: tempo da casa até o IHOP (6005 International Dr) **a definir**." },
          ],
          alerts: [],
        },
        periods: [
          {
            title: "Manhã",
            steps: [
              { kind: "transit", time: "07:30", destinationName: "IHOP (International Dr)" }, // REVISAR: tempo de deslocamento não informado; mantidos os 30 min até a chegada
              { kind: "stop", time: "08:00", stopId: "ihop-6005-international-dr", name: "Café da manhã no IHOP", icon: "burger" },
              { kind: "transit", time: "09:45", destinationName: "Orlando International Premium Outlets" },
              { kind: "stop", time: "10:00", stopId: "outlet-international-premium", name: "Outlet: compras (bloco 1)", icon: "bag" },
            ],
          },
          {
            title: "Tarde",
            steps: [
              { kind: "stop", time: "13:00", stopId: "", name: "Almoço na praça de alimentação", icon: "burger" },
              { kind: "stop", time: "14:00", stopId: "outlet-international-premium", name: "Outlet: compras (bloco 2)", icon: "bag" },
              { kind: "transit", time: "16:00", destinationName: "Centro de Orlando" },
            ],
          },
        ],
        cards: [
          {
            id: "ihop-6005-international-dr",
            link: mapSearchUrl("IHOP", "6005 International Dr, Orlando, FL 32819"),
            name: "IHOP",
            icon: "burger",
            time: "08:00",
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
                  "Tempo de deslocamento do resort até o IHOP **não confirmado**.",
                ],
              },
            ],
          },
          {
            id: "outlet-international-premium",
            name: "Orlando International Premium Outlets",
            icon: "bag",
            time: "10:00",
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
                  "Almoço na praça de alimentação **por volta das 13h**, para não sair do estacionamento no meio do dia.",
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
        ],
      },
      {
        key: "noite-jogo",
        category: "turismo",
        title: "Orlando Magic no Kia Center",
        mode: "schedule",
        summary: "Jogo do Orlando Magic x Cleveland Cavaliers no Kia Center (400 W Church St), às 19h (horário de Orlando).",
        group: "Os meninos",
        journey: {
          tiles: [
            { label: "Chegada", value: "17h00" },
            { label: "Início do jogo", value: "19h00" },
            { label: "Volta", value: "22h00" },
          ],
          notes: [
            { icon: "info", text: "Os dois locais da noite (Kia Center e Dr. Phillips Center) ficam a **poucos quarteirões** um do outro." },
          ],
          alerts: [],
        },
        periods: [
          {
            title: "Noite",
            steps: [
              { kind: "stop", time: "17:00", stopId: "kia-center", name: "Chegada e estacionamento (GEICO Garage)", icon: "parking" },
              { kind: "stop", time: "17:30", stopId: "", name: "Jantar antes do jogo", icon: "burger" },
              { kind: "stop", time: "18:30", stopId: "kia-center", name: "Entrada na arena", icon: "target" },
              { kind: "stop", time: "19:00", stopId: "kia-center", name: "Início do jogo: Magic x Cavaliers", icon: "target" },
              { kind: "transit", time: "22:00", destinationName: "Storey Lake Resort (volta)" },
            ],
          },
        ],
        cards: [
          {
            id: "kia-center",
            name: "Kia Center: Magic x Cavaliers",
            icon: "target",
            time: "17:00",
            sections: [
              {
                color: "navy",
                icon: "parking",
                title: "Endereço e estacionamento",
                paragraphs: [
                  "400 W Church St, Orlando, FL 32801.",
                  "Estacionamento **pré-pago** na **GEICO Garage** (400 West South Street), reservável no site da cidade de Orlando ou na bilheteria. Alternativa: HD Supply Garage, a cerca de 5 minutos a pé.",
                ],
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
        ],
      },
      {
        key: "noite-natal",
        category: "turismo",
        title: "Decoração de Natal no Dr. Phillips Center",
        mode: "schedule",
        summary: "Decoração de Natal (Frontyard Holiday Festival, gratuito) no Dr. Phillips Center (445 S Magnolia Ave).",
        group: "Outro grupo",
        journey: {
          tiles: [
            { label: "Chegada", value: "17h30" },
            { label: "Volta", value: "22h00" },
          ],
          notes: [
            { icon: "info", text: "Os dois locais da noite (Kia Center e Dr. Phillips Center) ficam a **poucos quarteirões** um do outro." },
          ],
          alerts: [],
        },
        periods: [
          {
            title: "Noite",
            steps: [
              { kind: "stop", time: "17:30", stopId: "dr-phillips-center", name: "Frontyard Holiday Festival", icon: "tree" },
              { kind: "transit", time: "22:00", destinationName: "Storey Lake Resort (volta)" },
            ],
          },
        ],
        cards: [
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
        ],
      },
    ],
  },
  options: [
    {
      id: "noite-do-jogo",
      label: "Noite do jogo",
      supportLine: "Grupo todo de dia · **os meninos** no jogo à noite",
      trackKeys: ["international-premium-outlets", "noite-jogo"],
      isDefault: true,
    },
    {
      id: "noite-de-natal",
      label: "Noite de Natal",
      supportLine: "Grupo todo de dia · **outro grupo** na decoração à noite",
      trackKeys: ["international-premium-outlets", "noite-natal"],
    },
  ],
} satisfies DayData;
