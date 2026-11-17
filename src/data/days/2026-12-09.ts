import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-09",
  calendarTitle: "Epcot",
  day: 9,
  park: {
    name: "Epcot",
    departure: "7h30",
    opening: "9h",
    closing: "21h",
  },
  weekday: "Qua",
  liturgicalWeekday: "2ª sem. do Advento",
  reading: {
    label: "2ª sem. do Advento",
    oldTestamentReading: "Malaquias 2:10–3:1",
    gospelReading: "Marcos 2:18–22",
  },
  category: "parque",
  title: "Epcot",
  itinerary: {
    kind: "checklist",
    parkId: "epcot",
    summary: "Dia de parque único, sem trilha paralela de compras. Ritmo rápido em World Celebration, World of Nature e World Discovery pela manhã, para deixar o World Showcase com calma.",
    journey: {
      tiles: [{ label: "Acordar", value: "7h00" }, { label: "Sair do resort", value: "7h30" }, { label: "Estacionamento abre", value: "8h00" }, { label: "Parque aberto", value: "9h–21h" }],
      notes: [
        { icon: "car", text: "Ida até os portões: em torno de 25 minutos." },
      ],
      alerts: ["**Deixar os lanches do parque separados** no dia anterior. Mochilas com filtro solar, remédios etc."],
    },
    attractions: [
      {
        id: "spaceship-earth",
        attractionId: "spaceship-earth",
        name: "SpaceShip Earth - A Bola",
        area: "World Celebration",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["SpaceShip Earth - A Bola."],
          },
        ],
      },
      {
        id: "mickey-friends",
        name: "Mickey and Friends",
        area: "World Celebration",
        icon: "camera",
        sections: [
          {
            color: "palm",
            icon: "camera",
            title: "Foto",
            paragraphs: ["Fotos com personagens. Não esquecer de tirar fotos com a bola de fundo."],
          },
        ],
      },
      {
        id: "soarin",
        attractionId: "soarin-around-the-world",
        name: "Soarin' Across America",
        area: "World of Nature",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Asa delta, temática EUA 250 anos. Momento para comer com calma."],
          },
        ],
      },
      {
        id: "coca-cool-club",
        name: "Lojinha da Coca-Cola (Cool Club)",
        area: "World of Nature",
        icon: "bag",
        sections: [
          {
            color: "gold",
            icon: "bag",
            title: "Roteiro",
            paragraphs: ["Ir na lojinha da Coca-Cola, Cool Club."],
          },
        ],
      },
      {
        id: "moana-foto",
        attractionId: "journey-of-water-moana",
        name: "Área da Moana",
        area: "World of Nature",
        icon: "camera",
        sections: [
          {
            color: "palm",
            icon: "camera",
            title: "Foto",
            paragraphs: ["Aproveitar o tempo e tirar fotos na área da Moana."],
          },
        ],
      },
      {
        id: "guardioes",
        attractionId: "guardians-of-the-galaxy-cosmic-rewind",
        name: "Guardiões da Galáxia",
        area: "World Discovery",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Ir no último carrinho."],
          },
        ],
      },
      {
        id: "mission-space",
        attractionId: "mission-space",
        name: "Mission: Space",
        area: "World Discovery",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Mais forte (laranja), simulador de espaço."],
          },
        ],
      },
      {
        id: "test-track",
        attractionId: "test-track",
        name: "Test Track",
        area: "World Discovery",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Carros da GM."],
          },
        ],
      },
      {
        id: "canada",
        attractionId: "canada-china-far-and-wide",
        name: "Canadá",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Sem atração interessante."],
          },
        ],
      },
      {
        id: "uk-pub",
        name: "Reino Unido: pub e Queen's Table",
        area: "World Showcase",
        icon: "bag",
        sections: [
          {
            color: "gold",
            icon: "bag",
            title: "Roteiro",
            paragraphs: ["Conhecer o pub; ver a lojinha Queen's Table; podemos encontrar a Alice de País das Maravilhas."],
          },
        ],
      },
      {
        id: "franca-ratatouille",
        attractionId: "remys-ratatouille-adventure-franca",
        name: "França: Ratatouille",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Ratatouille, imperdível. Procurar Bela e a Fera."],
          },
        ],
      },
      {
        id: "marrocos",
        name: "Marrocos",
        area: "World Showcase",
        icon: "camera",
        sections: [
          {
            color: "palm",
            icon: "camera",
            title: "Foto",
            paragraphs: ["Cenografia perfeita; aproveitar para tirar fotos. Ver se não encontramos a Jasmine."],
          },
        ],
      },
      {
        id: "japao",
        name: "Japão: Pick a Pearl e portal",
        area: "World Showcase",
        icon: "camera",
        sections: [
          {
            color: "palm",
            icon: "camera",
            title: "Foto",
            paragraphs: ["Acompanhar o Pick a Pearl. Portal para tirar foto de frente para o lago. Tempo de descanso em frente ao portal."],
          },
        ],
      },
      {
        id: "eua",
        name: "EUA",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["História do país."],
          },
        ],
      },
      {
        id: "italia",
        name: "Itália",
        area: "World Showcase",
        icon: "bag",
        sections: [
          {
            color: "gold",
            icon: "bag",
            title: "Roteiro",
            paragraphs: ["Bom lugar para comprar perfumes; wine bar. Voltar aqui para assistir os fogos."],
          },
        ],
      },
      {
        id: "alemanha",
        name: "Alemanha: pub alemão",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Pub alemão. Ficar de olho: Branca de Neve."],
          },
        ],
      },
      {
        id: "china",
        attractionId: "canada-china-far-and-wide",
        name: "China: show de reflexos",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Ir apenas se estivermos com tempo. Ficar de olho se a Mulan não está lá."],
          },
        ],
      },
      {
        id: "noruega-frozen",
        attractionId: "frozen-ever-after-noruega",
        name: "Noruega: Frozen",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Frozen! Fazer se der tempo. Encontro com Elsa e Anna. Fecha às 18h30."],
          },
        ],
      },
      {
        id: "mexico",
        attractionId: "grand-fiesta-tour-mexico",
        name: "México: Zé Carioca",
        area: "World Showcase",
        icon: "target",
        sections: [
          {
            color: "citrus",
            icon: "target",
            title: "Roteiro",
            paragraphs: ["Atração com Zé Carioca."],
          },
        ],
      },
    ],
  },
} satisfies DayData;
