import { attentionSection, confirmedSection, FAMILIA_NARCIZO, listSection, stop, transit } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  cidade: "Miami",
  dateISO: "2026-12-27",
  calendarTitle: "Dolphins x Chargers e Wynwood",
  day: 27,
  weekday: "Dom",
  liturgicalWeekday: "",
  reading: {
    label: "1º Domingo após o Natal",
    oldTestamentReading: "Isaías 61:10–62:3",
    epistleReading: "Gálatas 4:4–7",
    gospelReading: "Lucas 2:22–40",
    psalm: "Salmo 148",
  },
  category: "turismo",
  title: "Dolphins x Chargers e Wynwood",
  itinerary: {
    kind: "schedule",
    summary: "Jogo da NFL no Hard Rock Stadium (Miami Dolphins x Los Angeles Chargers), com ingressos confirmados, e jantar no BAKAN, em Wynwood.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Saída de Miami Beach", value: "9h30" },
        { label: "Jogo", value: "13h–16h15" },
        { label: "Jantar BAKAN", value: "19h00" },
        { label: "Volta a South Beach", value: "21h30" },
      ],
      notes: [
        { icon: "car", text: "A saída do estacionamento pode ser lenta: prever **trânsito intenso** entre 16h15 e 17h30." },
        { icon: "info", text: "Levar somente bolsa permitida e conferir a política oficial de entrada antes de sair." },
      ],
      alerts: [
        "Reconfirmar o horário do jogo e as regras de entrada perto da data.",
        "Não deixar compras, documentos ou malas visíveis no carro.",
      ],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:30", "Café reforçado no Big Pink e preparo dos celulares, ingressos e bateria portátil", "burger"),
          transit("09:30", "Hard Rock Stadium (saída de Miami Beach)"),
          stop("10:30", "Chegada ao estacionamento reservado e caminhada até os portões", "parking"),
          stop("10:30", "Fotos, loja oficial, ambiente pré-jogo e entrada com antecedência (10h30–12h30)", "camera"),
          stop("11:45", "Lanche no estádio", "burger"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("13:00", "Miami Dolphins x Los Angeles Chargers (13h–16h15, duração aproximada)", "target", "jogo-dolphins"),
          stop("16:15", "Saída do estádio e do estacionamento (16h15–17h30); prever trânsito intenso", "parking"),
          transit("17:30", "Wynwood (conforme as condições do trânsito)"),
        ],
      },
      {
        title: "Noite",
        steps: [
          stop("18:30", "Chegada a Wynwood e pequena caminhada pelos murais", "camera", "wynwood"),
          stop("19:00", "Jantar no BAKAN • Wynwood", "burger", "bakan"),
          stop("20:30", "Passeio curto pelas ruas movimentadas e fotos", "camera"),
          stop("21:30", "Retorno a South Beach para descanso e organização das malas", "house"),
        ],
      },
    ],
    cards: [
      {
        id: "jogo-dolphins",
        name: "Miami Dolphins x Los Angeles Chargers",
        icon: "target",
        time: "13:00",
        address: "Hard Rock Stadium",
        sections: [
          confirmedSection(
            "4 lugares juntos: seção **314**, fila **22**, assentos **7, 8, 9 e 10**.",
            "Pedido Ticketmaster: **3000-0730-8364-1369-1** • total pago: US$ 350,12.",
            "Entrega digital: os quatro ingressos já estão na Apple Wallet. Levar o iPhone da Silvana carregado e uma bateria portátil; não usar captura de tela.",
          ),
          attentionSection("O **estacionamento ainda precisa ser comprado**: 1 passe do Hard Rock Stadium para 27/12."),
          listSection("citrus", "target", "Antes do jogo", [
            "Sair de Miami Beach às 9h30 e planejar chegar ao estacionamento por volta das 10h30",
            "Entrar juntos, escanear os quatro ingressos e aproveitar a loja, o aquecimento e o almoço no estádio",
          ]),
        ],
      },
      {
        id: "wynwood",
        name: "Wynwood",
        icon: "camera",
        time: "18:30",
        sections: [
          listSection("citrus", "camera", "Depois do jogo", [
            "Seguir para Wynwood somente depois que o trânsito liberar",
            "Depois do jantar, fazer uma caminhada curta pelos murais iluminados e ruas movimentadas",
          ]),
        ],
      },
      {
        id: "bakan",
        name: "BAKAN",
        icon: "burger",
        time: "19:00",
        address: "BAKAN, Wynwood, Miami",
        sections: [attentionSection("Fazer a reserva **com opção de ajuste** de horário, por causa do trânsito da saída do estádio.")],
      },
    ],
  },
} satisfies NarcizoDay;
