import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-23",
  calendarTitle: "Daytona Beach e Ceia com Amigo Secreto",
  day: 23,
  weekday: "Qua",
  liturgicalWeekday: "Preparação para o Natal",
  category: "turismo",
  specialIcon: "gift", // última noite juntos: ceia e amigo secreto
  reading: {
    label: "Preparação para o Natal",
    oldTestamentReading: "Sofonias 3:14–20",
    epistleReading: "Romanos 13:11–14",
    gospelReading: "Marcos 11:1–11",
    psalm: "Salmo 96",
  },
 title: "Daytona Beach, Ceia e Amigo Secreto",
  itinerary: {
    kind: "schedule",
    summary: "Grupo Daytona faz o passeio (turismo leve, sem compras e sem tour pago). À noite, todos juntos: ceia e amigo secreto.",
    journey: {
      tiles: [
        { label: "Acordar", value: "8h00" },
        { label: "Sair de casa", value: "9h30" },
        { label: "Chegar em casa", value: "~16h30" },
        { label: "Deslocamento", value: "~3h30" }, // REVISAR: soma dos trajetos do dia
      ],
      notes: [
        { icon: "info", text: "Grupo Casa fica preparando a ceia e arrumando a casa; se faltar algo, **evitar compras no dia**." },
      ],
      alerts: [
        "**Levar lanche de casa** (sanduíche, fruta, água) para beliscar durante o passeio, já que o fast food só acontece na volta. A ordem dos pontos da orla é flexível.",
      ],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          {
            kind: "transit",
            time: "09:30",
            duration: "~1h30",
            destinationName: "Daytona International Speedway",
          },
          {
            kind: "stop",
            time: "11:00",
            stopId: "daytona-speedway",
            name: "Daytona International Speedway (foto)",
            icon: "camera",
          },
          {
            kind: "transit",
            time: "11:45",
            duration: "~15 min",
            destinationName: "Riverfront Esplanade",
          },
          {
            kind: "stop",
            time: "12:00",
            stopId: "riverfront-esplanade",
            name: "Riverfront Esplanade e Beach Street",
            icon: "leaf",
          },
          {
            kind: "transit",
            time: "12:45",
            duration: "~15 min",
            destinationName: "Orla de Daytona Beach",
          },
          {
            kind: "stop",
            time: "13:00",
            stopId: "daytona-bandshell",
            name: "Daytona Beach Bandshell",
            icon: "camera",
          },
          {
            kind: "stop",
            time: "13:20",
            stopId: "boardwalk-praia",
            name: "Boardwalk, Ocean Walk Shoppes e praia",
            icon: "tree",
          },
          {
            kind: "stop",
            time: "13:55",
            stopId: "main-street-pier",
            name: "Main Street Pier",
            icon: "camera",
          },
        ],
      },
      {
        title: "Tarde",
        steps: [
          {
            kind: "transit",
            time: "14:30",
            duration: "~20 min",
            destinationName: "Fast food no caminho (I-4)",
          },
          {
            kind: "stop",
            time: "14:50",
            stopId: "",
            name: "Lanche rápido (fast food)",
            icon: "burger",
          },
          {
            kind: "transit",
            time: "15:20",
            duration: "~1h10",
            destinationName: "Storey Lake Resort",
          },
          {
            kind: "stop",
            time: "16:30",
            stopId: "",
            name: "Chegada: banho e ajuda com os preparativos",
            icon: "house",
          },
        ],
      },
      {
        title: "Noite",
        steps: [
          {
            kind: "stop",
            time: "19:00",
            stopId: "",
            name: "Ceia e amigo secreto",
            icon: "christmas",
          },
        ],
      },
    ],
    cards: [
      {
        id: "daytona-speedway",
        address: "1801 W International Speedway Blvd, Daytona Beach, FL 32114",
        name: "Daytona International Speedway",
        icon: "camera",
        time: "11:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "1801 W International Speedway Blvd, Daytona Beach, FL 32114. Fica **ao lado do aeroporto** de Daytona Beach.",
            ],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Visita **só para foto em frente** ao autódromo, sem tour. Segundo relatos de visitantes, as estátuas de Bill France e Dale Earnhardt ficam do lado de fora do prédio Ticket & Tours, boas para foto.",
              "O Motorsports Hall of Fame of America fica nesse mesmo prédio. O ingresso só do museu se compra pelo telefone 1-800-748-7467; o horário informado é de **10h às 17h**, com fechamento em feriados e dias de evento na pista.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Ligar antes para perguntar se dá para entrar na loja ou no saguão sem ingresso e **confirmar se o museu** abre no dia 23. Para referência, o tour de 2024 custava **US$ 26** para adultos, caso o grupo mude de ideia.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "⚠️ Não foi possível **confirmar nenhum acesso geral** **gratuito** sem tour. Se não houver, a ideia é apenas tirar a foto em frente ao prédio e seguir viagem.",
            ],
          },
        ],
      },
      {
        id: "riverfront-esplanade",
        address: "249 N Beach St, Daytona Beach, FL 32114",
        name: "Riverfront Esplanade e Beach Street",
        icon: "leaf",
        time: "12:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "Beach Street, centro de Daytona Beach (referência: 249 N Beach Street ⚠️). Há **vagas ao longo da Beach Street**. Pelo mapa, a International Speedway Blvd, que liga o Speedway à praia, cruza a Beach Street, então o jardim fica no caminho (conferir no GPS).",
            ],
          },
          {
            color: "citrus",
            icon: "leaf",
            title: "Sobre",
            paragraphs: [
              "Parque linear de 22,5 acres à beira do rio Halifax, da Main Street até a Orange Avenue. A parte sul, entre a International Speedway Blvd e a Orange Avenue, tem jardins botânicos com rosal, lagos com fontes que mudam de cor e área para brincar com água. A entrada é **gratuita**.",
              "A Beach Street, ao lado, tem lojas e restaurantes; aqui o plano é **só passar e caminhar**.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Ótimo lugar para beliscar o **lanche trazido de casa**. A trilha tem piso azul acolchoado ao longo do rio.",
            ],
          },
        ],
      },
      {
        id: "daytona-bandshell",
        address: "70 Boardwalk, Daytona Beach, FL 32118",
        name: "Daytona Beach Bandshell",
        icon: "camera",
        time: "13:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço / Estacionamento",
            paragraphs: [
              "70 Boardwalk, Daytona Beach, FL 32118.",
              "Estacionar na **garagem do Ocean Center** (701 Earl Street), em frente ao Main Street Pier; uma passarela no segundo andar atravessa a A1A e leva ao Bandshell pelo Ocean Walk Shoppes. Valor da garagem ⚠️ a confirmar (varia por dia).",
            ],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Prédio que lembra um castelo, **construído em 1937**. Para esta visita, serve para ver e fotografar.",
            ],
          },
        ],
      },
      {
        id: "boardwalk-praia",
        address: "13 S Atlantic Ave, Daytona Beach, FL 32118",
        name: "Boardwalk, Ocean Walk Shoppes e praia",
        icon: "tree",
        time: "13:20",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "Breakers Oceanfront Park, 13 S Atlantic Ave, Daytona Beach, FL 32118, logo ao sul do Main Street Pier.",
            ],
          },
          {
            color: "citrus",
            icon: "tree",
            title: "Sobre",
            paragraphs: [
              "Orla com restaurantes, fliperama e lojas de souvenir. A **areia é lisa e compacta**, ótima para caminhar à beira d'água. As corridas de carro na praia começaram em 1936.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Estacionar na garagem e não na areia, para **evitar a taxa** de dirigir na praia (cerca de **US$ 20 por veículo**, segundo relatos). Levar toalha e uma troca de roupa.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "**Mar frio em dezembro**: a ideia é molhar os pés e caminhar; banho de mar fica por conta de quem aguentar.",
            ],
          },
        ],
      },
      {
        id: "main-street-pier",
        address: "1200 Main St Bridge, Daytona Beach, FL 32118",
        name: "Main Street Pier",
        icon: "camera",
        time: "13:55",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "1200 Main St Bridge, Daytona Beach, FL 32118, no final da Main Street, na orla. Garagem do Ocean Center (701 Earl Street) bem em frente.",
            ],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "Cartão-postal de Daytona Beach: píer de madeira com cerca de 300 m (1.000 pés), existente desde 1925, que passou por uma reforma de **US$ 1,56** milhão em 2023. Foto do píer visto da praia e caminhada até o fim.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Ponto final do passeio: sair da orla **até 14h30** para chegar em casa **por volta das 16h30**.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;