import { addressSection, attentionSection, FAMILIA_NARCIZO, listSection, stop, transit } from "./builders";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  cidade: "Miami",
  dateISO: "2026-12-26",
  calendarTitle: "Sawgrass Mills e Lincoln Road",
  day: 26,
  weekday: "Sáb",
  liturgicalWeekday: "",
  reading: {
    label: "Natal",
    oldTestamentReading: "Jeremias 26:1–9, 12–15",
    epistleReading: "Atos 6:8–15; 7:51–60",
    gospelReading: "Marcos 6:1–6a",
    psalm: "Salmo 148",
  },
  category: "compras",
  title: "Sawgrass Mills e Lincoln Road",
  itinerary: {
    kind: "schedule",
    summary: "Compras no outlet Sawgrass Mills durante o dia e noite em Lincoln Road, com jantar no Havana 1957, na Española Way.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Saída para Sawgrass", value: "8h45" },
        { label: "Compras", value: "10h–16h" },
        { label: "Volta ao Airbnb", value: "17h15" },
        { label: "Jantar Havana 1957", value: "20h00" },
      ],
      notes: [
        { icon: "car", text: "Sawgrass Mills fica a **45 a 70 min** de carro desde South Beach, conforme o trânsito." },
        { icon: "info", text: "A semana de Natal pode ter horário especial: **confirmar no site oficial** o horário do outlet em 26/12." },
      ],
      alerts: ["Não deixar sacolas visíveis no carro durante as compras."],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:30", "Acordar e organizar a lista de compras, tamanhos e prioridades", "house"),
          stop("08:00", "Café da manhã no Rosetta Bakery (South Beach)", "burger"),
          transit("08:45", "Sawgrass Mills", "~45 a 70 min"),
          stop("09:45", "Estacionar, fotografar a localização do carro e entrar pelo setor definido", "bag", "sawgrass-mills"),
          stop("10:00", "Primeiro bloco de compras: lojas prioritárias e itens mais importantes (10h–13h)", "bag"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("13:00", "Almoço no The Cheesecake Factory (Sawgrass Mills) e descanso (13h–14h)", "burger"),
          stop("14:00", "Segundo bloco de compras e conferência final da lista (14h–16h)", "bag"),
          stop("16:00", "Saída antes do trânsito mais pesado", "parking"),
          stop("17:15", "Chegada ao Airbnb e organização das compras", "house"),
        ],
      },
      {
        title: "Noite",
        steps: [
          transit("18:30", "Lincoln Road (a pé ou de carro)"),
          stop("19:00", "Passeio pelo calçadão e lojas abertas (19h–20h)", "tree", "lincoln-road"),
          stop("20:00", "Jantar no Havana 1957 • Española Way", "burger", "havana-1957"),
          stop("21:30", "Retorno e descanso", "house"),
        ],
      },
    ],
    cards: [
      {
        id: "sawgrass-mills",
        name: "Sawgrass Mills",
        icon: "bag",
        time: "09:45",
        address: "12801 West Sunrise Boulevard, Sunrise, FL",
        sections: [
          addressSection("12801 West Sunrise Boulevard • Sunrise, FL."),
          listSection("navy", "target", "Estratégia para aproveitar o outlet sem esgotar o dia", [
            "Tempo de carro: aproximadamente 45 a 70 minutos desde South Beach",
            "Permanência: 10h às 16h",
            "Estacionamento: fotografar a placa, o setor e a entrada utilizada",
            "Horário: confirmar no site oficial para 26/12, pois a semana de Natal pode ter horário especial",
          ]),
          listSection("citrus", "bag", "Plano de compras", [
            "Separar as lojas em prioridade A, B e C antes de sair",
            "Começar pelas lojas mais importantes; não caminhar sem sequência",
            "Definir um ponto de encontro e horário caso o grupo se separe",
            "Guardar as notas fiscais e conferir os tamanhos antes de sair de cada loja",
            "Não deixar sacolas visíveis no carro durante as compras",
          ]),
        ],
      },
      {
        id: "lincoln-road",
        name: "Lincoln Road",
        icon: "tree",
        time: "19:00",
        address: "Lincoln Road Mall, Miami Beach",
        sections: [addressSection("Lincoln Road Mall: região entre Alton Road e Washington Avenue.")],
      },
      {
        id: "havana-1957",
        name: "Havana 1957",
        icon: "burger",
        time: "20:00",
        address: "Española Way, Miami Beach",
        sections: [
          addressSection("Española Way: trecho de restaurantes entre Washington Avenue e Drexel Avenue."),
          attentionSection(
            "**Reserva recomendada.**",
            "O horário aparece como **20h** na tabela do dia e como **20h15** na página do Sawgrass Mills; confirmar com o restaurante.",
          ),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
