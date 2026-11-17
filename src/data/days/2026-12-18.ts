import type { ChecklistItem, DayData } from "../../types";

const islandsAttractions: ChecklistItem[] = [
          {
            id: "marvel",
            attractionIds: ["the-incredible-hulk-coaster", "the-amazing-adventures-of-spider-man"],
            name: "Marvel: Hulk e Spider-Man",
            area: "Marvel Super Hero Island",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Marvel Super Hero Island, Islands of Adventure. Estacionamento: 6000 Universal Blvd (**~US$35**). O Islands fica à esquerda depois do CityWalk."] },
              { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Hulk Coaster: ~107 km/h, 7 inversões, **mínimo 1,37–1,38 m**, armário na frente, Single Rider. Spider-Man: simulador 3D, **mínimo 1,02 m**, a fila é o Daily Bugle por dentro."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Fazer o Hulk **só se não andou nele** no dia 10 ou no dia 15, ou se quiser repetir. Se nenhum dos dois for prioridade, seguir direto para o Jurassic Park."] },
            ],
          },
          {
            id: "river-adventure",
            attractionId: "jurassic-park-river-adventure",
            name: "Jurassic Park River Adventure (se reaberto)",
            area: "Jurassic Park",
            icon: "target",
            sections: [
              { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Splash ride com queda de ~26 m, **altura mínima 1,07 m**. É a hora mais quente do dia, ideal para molhar."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Sentar no meio ou atrás para molhar menos; capa de chuva ajuda. Secador humano custa **~US$7**."] },
              { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["**Fechada** desde 05/01/2026; reabertura prevista para ~16–17/12 (já foi adiada duas vezes). **Só entra se estiver aberta** no app. Na primeira semana pós-reabertura a fila pode ter 45–75 min."] },
            ],
          },
          {
            id: "velocicoaster",
            attractionId: "jurassic-world-velocicoaster",
            name: "Jurassic World VelociCoaster",
            area: "Jurassic Park",
            icon: "target",
            sections: [
              { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Lançamento de ~113 km/h, 4 inversões, pico de 47 m. **Altura mínima 1,30 m**."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Fila da tarde ~60–80 min; Single Rider ajuda. Armário **obrigatório**. Se sobrar tempo, usar o intervalo para o que faltou do dia 15 (Ollivanders, Honeydukes, Forbidden Journey)."] },
            ],
          },
          {
            id: "hagrids",
            attractionId: "hagrids-magical-creatures-motorbike",
            name: "Hagrid's Motorbike Adventure",
            area: "The Wizarding World of Harry Potter - Hogsmeade",
            icon: "target",
            sections: [
              { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Montanha-russa temática, ~80 km/h, sem inversões, **altura mínima 1,22 m**. Repetição: entra de dia e sai com o parque escurecendo."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Fila normal ou Single Rider; armário **obrigatório**. Se já andou muito nele, trocar por Forbidden Journey."] },
            ],
          },
          {
            id: "por-do-sol",
            name: "Pôr do sol e foto do castelo",
            // REVISAR (área a definir)
            area: "a definir",
            icon: "camera",
            sections: [
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Melhor ângulo do castelo: **na ponte para o Jurassic Park**, que foge da multidão. Hogsmeade com luzes de Natal."] },
            ],
          },
          {
            id: "hogwarts-express",
            name: "Hogwarts Express: ida a King's Cross",
            // REVISAR (área a definir)
            area: "a definir",
            icon: "target",
            sections: [
              { color: "citrus", icon: "leaf", title: "Sobre", paragraphs: ["Trem com cabines **fechadas** e projeção da janela, menos de 10 min por trecho. A história muda conforme o sentido, então ida e volta valem a pena. Exige ingresso park-to-park."] },
              { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Fila costuma ser de 15–30 min ou mais. Se passar de ~40 min **às 17h20**, adiar ou fazer só a ida. Já fechou para manutenção: se estiver fora, dá para ir a pé pelo CityWalk (~15–20 min)."] },
            ],
          },
          {
            id: "studios-diagon",
            name: "Plataforma 9¾ e Beco Diagonal (Studios)",
            // REVISAR (área a definir)
            area: "a definir",
            icon: "camera",
            sections: [
              { color: "citrus", icon: "camera", title: "O que ver", list: ["Truque de \"atravessar a parede\" da **Plataforma 9¾** (um filma, o outro corre)", "Dragão do Gringotts cuspindo fogo (a cada ~15 min)", "Largo Grimmauld nº 12 (Kreacher na janela)", "Cabine telefônica: discar 62442 para o Ministério da Magia"] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Beco Diagonal já com decoração de Natal e anoitecendo. Se estiver com fome: **Caldeirão Furado** (ensopado de carne, cordeiro e Guinness, ou bangers and mash) ou lanche rápido na estação."] },
            ],
          },
          {
            id: "hogwarts-express-volta",
            name: "Hogwarts Express: volta a Hogsmeade",
            // REVISAR (área a definir)
            area: "a definir",
            icon: "target",
            sections: [
              { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Embarcar de volta no máximo **até ~18h20**; o trem **só funciona com os dois** parques abertos. Se o Studios fechar mais tarde que o Islands, dá para ficar lá e voltar a pé pelo CityWalk."] },
            ],
          },
          {
            id: "projecao-natal",
            name: "Projeção de Natal e últimas compras",
            // REVISAR (área a definir)
            area: "a definir",
            icon: "bag",
            sections: [
              { color: "gold", icon: "lightbulb", title: "Horário", paragraphs: ["\"The Magic of Christmas at Hogwarts Castle\": horário só no app; chegar 20–30 min antes para ter lugar."] },
              { color: "citrus", icon: "bag", title: "Lojas", list: ["Honeydukes", "Dervish and Banges", "**Port of Entry** na saída (muita gente compra ali no fechamento)"] },
            ],
          },
          {
            id: "citywalk",
            name: "CityWalk (opcional)",
            // REVISAR (área a definir)
            area: "a definir",
            icon: "burger",
            sections: [
              { color: "navy", icon: "burger", title: "Sobre", paragraphs: ["Depois do fechamento, **decidir na hora**: jantar tardio (Hard Rock Cafe, o maior do mundo) ou só sobremesa."] },
            ],
          },
];

export default {
  dateISO: "2026-12-18",
  calendarTitle: "Islands of Adventure",
  day: 18,
  weekday: "Sex",
  liturgicalWeekday: "4ª sem. do Advento",
  category: "parque",
  park: { name: "Islands of Adventure", departure: "9h", opening: "9h", closing: "19h" },
  reading: {
    label: "4ª sem. do Advento",
    oldTestamentReading: "2 Samuel 6:12–19",
    gospelReading: "João 7:40–52",
  },
  title: "Islands of Adventure",
  itinerary: {
    kind: "checklist",
    parkId: "islands-of-adventure",
    // REVISAR (summary): Texto vindo da legenda da foto (heroCaption) removida.
    summary: "Segunda visita ao Islands: só as favoritas e o que faltou no dia 15, com Hogwarts Express de ida e volta no fim da tarde.",
    journey: {
      tiles: [
        { label: "Acordar", value: "8h00" },
        { label: "Sair de casa", value: "9h00" },
        { label: "Parque aberto", value: "9h–19h" },
        { label: "Hogwarts Express", value: "17h20–18h20" },
      ],
      notes: [],
      alerts: [],
    },
    attractions: islandsAttractions,
  },
} satisfies DayData;
