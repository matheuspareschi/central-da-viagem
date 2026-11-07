import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-24",
  calendarTitle: "Kennedy Space Center",
  day: 24,
  park: {
    name: "Kennedy Space Center",
  },
  weekday: "Qui",
  liturgicalWeekday: "Véspera de Natal",
  category: "parque",
  title: "Kennedy Space Center",
  reading: {
    label: "Véspera de Natal",
    oldTestamentReading: "Eclesiastes 3:1–8",
    gospelReading: "Lucas 1:57–64",
  },
  itinerary: {
    kind: "checklist",
    summary: "Dia inteiro no Kennedy Space Center Visitor Complex, véspera de Natal. Almoço no parque (Orbit Café ou Moon Rock Café).",
    group: "7 de 10 pessoas — Nunes e Gobette Pareschi embarcam para Savannah nesse mesmo dia",
    journey: {
      tiles: [],
      notes: [
        { icon: "car", text: "Deslocamento: ~1h15–1h30 cada trecho, ~2h30–3h de carro no total." },
      ],
      alerts: [],
    },
    attractions: [
      {
        id: "ksc-bus-tour",
        name: "Kennedy Space Center Bus Tour",
        icon: "parking",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e estacionamento",
            paragraphs: [
              "Space Commerce Way, Merritt Island, FL 32953.",
              "Estacionamento **~US$ 15/dia** (gratuito só para Annual Pass).",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Ir direto na abertura — é o gargalo do dia, a fila cresce rápido na parte da manhã. Ônibus saem por ordem de chegada.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Em temporadas de festa o parque tem usado fila virtual por QR code no local — confirmar se estará ativa em dez/2026.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Passa pelas plataformas LC-39A e LC-39B e para no Apollo/Saturn V Center, com o foguete Saturn V completo e a Sala de Controle da missão Apollo 8.",
            ],
          },
        ],
      },
      {
        id: "ksc-rocket-garden",
        name: "Rocket Garden",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: [
              "Fotos.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Encaixar entre o Bus Tour e o almoço; tours guiados gratuitos rolam ao longo do dia.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Coleção ao ar livre de foguetes históricos (Mercury, Gemini, Atlas, Titan). Em dez/2026 é também o palco do possível Holidays in Space Drone Show à noite.",
            ],
          },
        ],
      },
      {
        id: "ksc-astronaut-encounter",
        name: "Astronaut Encounter",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: [
              "Show.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Confira o horário exato da sessão do dia assim que entrar (varia, ~20–30 min).",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Sessão com um astronauta real da NASA contando histórias de missão e respondendo perguntas do público.",
            ],
          },
        ],
      },
      {
        id: "ksc-atlantis",
        name: "Space Shuttle Atlantis® e Shuttle Launch Experience®",
        icon: "target",
        sections: [
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: [
              "Simulador.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Reserve ~1h30; o filme imersivo antes da exibição do ônibus espacial é parte da experiência, não pule.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "O Atlantis é exibido em ângulo de voo, como se estivesse em órbita. A Shuttle Launch Experience é um simulador anexo de sensação de lançamento.",
            ],
          },
        ],
      },
      {
        id: "ksc-heroes-legends",
        name: "Heroes & Legends / U.S. Astronaut Hall of Fame",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "~45 min é suficiente; encaixa bem no fim da tarde, ritmo mais tranquilo.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Homenagem aos primeiros astronautas americanos (Mercury Seven), com hologramas e o Hall da Fama anexo.",
            ],
          },
        ],
      },
      {
        id: "ksc-gateway",
        name: "Gateway: The Deep Space Launch Complex®",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Última parada \"grande\" do dia, ~45 min.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Exibição mais recente do parque, focada no programa Artemis e futuras missões a Marte, com réplicas do SLS e do Starship.",
            ],
          },
        ],
      },
      {
        id: "ksc-drone-show",
        name: "Holidays in Space — Drone Show",
        icon: "tree",
        sections: [
          {
            color: "attn",
            icon: "alert",
            title: "Pendente de confirmação",
            paragraphs: [
              "Edição 2026 ainda não confirmada oficialmente pelo parque — reconfirmar mais perto da data. Se acontecer, muda a hora de saída do parque (empurraria o retorno para depois das 19h).",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Tipo",
            paragraphs: [
              "Show.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Em 2025 rodou nightly às 18h50, de 21 a 30/dez (fechado só dia 25), incluso no ingresso, no Rocket Garden.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Show de ~600 drones contando a história de \"Starflake\", passando pelos programas Apollo, Shuttle e Artemis.",
            ],
          },
        ],
      },
      {
        id: "ksc-space-shop",
        name: "The Space Shop",
        icon: "bag",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Deixar para os últimos 30 min, antes de sair.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Loja oficial de lembranças — comida liofilizada de astronauta, réplicas, roupas com logo da NASA.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
