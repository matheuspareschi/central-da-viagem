import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-24",
  calendarTitle: "Kennedy Space Center",
  day: 24,
  park: {
    name: "Kennedy Space Center",
    departure: "7h30",
  },
  weekday: "Qui",
  liturgicalWeekday: "Véspera de Natal",
  category: "parque",
  title: "Kennedy Space Center",
  reading: {
    label: "Véspera de Natal",
    oldTestamentReading: "Eclesiastes 3:1–8",
    epistleReading: "Tiago 1:17–18",
    gospelReading: "Lucas 1:57–64",
    psalm: "Salmo 96",
  },
  itinerary: {
    kind: "checklist",
    parkingId: "kennedy-space-center",
    summary: "Dia inteiro no Kennedy Space Center Visitor Complex, véspera de Natal. Almoço no parque (Orbit Café ou Moon Rock Café).",
    group: "7 de 10 pessoas — Nunes e Gobette Pareschi embarcam para Savannah nesse mesmo dia",
    journey: {
      tiles: [
        { label: "Acordar", value: "6h30" },
        { label: "Sair de casa", value: "7h30" },
        { label: "Chegada no parque", value: "9h00" },
        { label: "Holidays in Space", value: "18h50" },
      ],
      notes: [
        { icon: "car", text: "Deslocamento: ~**1h15–1h30** cada trecho, ~**2h30–3h** de carro no total." },
        { icon: "info", text: "O **Holidays in Space** está confirmado para 2026 e o parque **fecha um pouco mais tarde** nesses dias (horário de fechamento ainda a confirmar)." },
      ],
      alerts: [
        "**Comida:** pode levar a sua própria (almoço, lanches, frutas e água). **Embalagem:** só em lancheiras ou bolsas térmicas flexíveis, ou em mochilas comuns. **Proibido:** caixas térmicas rígidas ou grandes, garrafas e potes de vidro, facas e bebidas alcoólicas.",
      ],
    },
    attractions: [
      {
        id: "ksc-bus-tour",
        name: "Kennedy Space Center Bus Tour",
        area: "Passeio de ônibus",
        icon: "parking",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "**Ir direto na abertura** — é o gargalo do dia, a fila cresce rápido na parte da manhã. Ônibus saem por ordem de chegada.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Em temporadas de festa o parque tem usado fila virtual por QR code no local — **confirmar se estará ativa** em dez/2026.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Passa pelas plataformas LC-39A e LC-39B e para no Apollo/Saturn V Center, com o foguete **Saturn V completo** e a Sala de Controle da missão Apollo 8.",
            ],
          },
        ],
      },
      {
        id: "ksc-rocket-garden",
        name: "Rocket Garden",
        area: "Fotos",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Encaixar entre o Bus Tour e o almoço; tours guiados **gratuitos** rolam ao longo do dia.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Coleção ao ar livre de foguetes históricos (Mercury, Gemini, Atlas, Titan). Em dezembro é também o palco do **Holidays in Space Drone Show** à noite.",
            ],
          },
        ],
      },
      {
        id: "ksc-astronaut-encounter",
        name: "Astronaut Encounter",
        area: "Show",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Confira o **horário exato** da sessão do dia assim que entrar (varia, ~20–30 min).",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Sessão com um **astronauta real da NASA** contando histórias de missão e respondendo perguntas do público.",
            ],
          },
        ],
      },
      {
        id: "ksc-atlantis",
        name: "Space Shuttle Atlantis® e Shuttle Launch Experience®",
        area: "Simulador",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "**Reserve ~1h30**; o filme imersivo antes da exibição do ônibus espacial é parte da experiência, **não pule**.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "O **Atlantis** é exibido em ângulo de voo, como se estivesse em órbita. A Shuttle Launch Experience é um simulador anexo de sensação de lançamento.",
            ],
          },
        ],
      },
      {
        id: "ksc-heroes-legends",
        name: "Heroes & Legends / U.S. Astronaut Hall of Fame",
        area: "Exposição",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "**~45 min** é suficiente; encaixa bem no fim da tarde, ritmo mais tranquilo.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Homenagem aos primeiros astronautas americanos (**Mercury Seven**), com hologramas e o Hall da Fama anexo.",
            ],
          },
        ],
      },
      {
        id: "ksc-gateway",
        name: "Gateway: The Deep Space Launch Complex®",
        area: "Exposição",
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
              "Exibição mais recente do parque, focada no **programa Artemis** e futuras missões a Marte, com réplicas do SLS e do Starship.",
            ],
          },
        ],
      },
      {
        id: "ksc-drone-show",
        name: "Holidays in Space — Drone Show",
        area: "Show",
        icon: "tree",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Acontece **todos os dias de 20 a 30/dez, às 18h50**, no Rocket Garden, com o parque fechando um pouco mais tarde. O parque fica **fechado no dia 25**, sem show nessa data.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "**Mil drones** iluminam o céu ao som de uma trilha sinfônica original, acompanhando a jornada da personagem **Starflake**.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Decoração e atividades",
            paragraphs: [
              "Em todo o mês de dezembro o complexo tem decoração natalina temática e árvores iluminadas, além da caça ao tesouro interativa **Rocket Tree Trail**, em que os visitantes resolvem pistas para ganhar um brinde.",
            ],
          },
        ],
      },
      {
        id: "ksc-space-shop",
        name: "The Space Shop",
        area: "Loja",
        icon: "bag",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Como aproveitar melhor",
            paragraphs: [
              "Deixar para os **últimos 30 min**, antes de sair.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Curiosidades",
            paragraphs: [
              "Loja oficial de lembranças — **comida liofilizada de astronauta**, réplicas, roupas com logo da NASA.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;
