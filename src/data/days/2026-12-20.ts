import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-20",
  calendarTitle: "Compras",
  day: 20,
  weekday: "Dom",
  liturgicalWeekday: "4º Domingo do Advento",
  category: "compras",
  title: "Vineland, Walmart, Super Target Millenia e Universal Studios",
  reading: {
    label: "4º Domingo do Advento",
    oldTestamentReading: "2 Samuel 7:1–11, 16",
    gospelReading: "Lucas 1:26–38",
  },
  itinerary: {
    kind: "schedule",
    summary: "Dia de compras em ordem de proximidade: Vineland (manhã), Walmart (mais perto do Vineland), Super Target Millenia (mais longe) e Universal Studios Florida à noite.",
    journey: {
      tiles: [],
      notes: [
        { icon: "info", text: "Chegada do Rafael Narcizo neste dia — sem compromisso de missa." },
        { icon: "info", text: "Horários sugeridos, ajustáveis." },
      ],
      alerts: [],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          {
            kind: "stop",
            time: "10:00",
            stopId: "vineland-premium-outlets",
            name: "Vineland Premium Outlets",
            icon: "bag",
          },
        ],
      },
      {
        title: "Tarde",
        steps: [
          { kind: "transit", time: "14:00", destinationName: "Walmart Supercenter (Turkey Lake)" },
          {
            kind: "stop",
            time: "14:30",
            stopId: "walmart-turkey-lake",
            name: "Walmart Supercenter (Turkey Lake)",
            icon: "bag",
          },
          { kind: "transit", time: "16:00", destinationName: "Super Target (Millenia)" },
          {
            kind: "stop",
            time: "16:30",
            stopId: "super-target-millenia",
            name: "Super Target (Millenia)",
            icon: "bag",
          },
        ],
      },
      {
        title: "Noite",
        steps: [
          { kind: "transit", time: "18:00", destinationName: "Universal Studios Florida" }, // REVISAR: trocado de CityWalk, mesmo horário
          {
            kind: "stop",
            time: "18:30",
            stopId: "universal-studios-florida",
            name: "Universal Studios Florida (fecha às 21h00)",
            icon: "target",
          },
        ],
      },
    ],
    cards: [
      {
        id: "vineland-premium-outlets",
        name: "Vineland Premium Outlets",
        icon: "bag",
        time: "10:00",
        shopRegionId: "vineland-premium-outlets",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["8200 Vineland Ave, Orlando, FL 32821."],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Sobre",
            paragraphs: [
              "Mais de 160 lojas e uma praça de alimentação grande, perto da Disney e do SeaWorld. Entre as lojas estão Polo Ralph Lauren, Coach e Burberry.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Vindo da região da Disney, o caminho mais usado é pela Hwy 535, por baixo da I-4, e depois a Vineland Ave. Almoço livre na praça de alimentação do próprio outlet.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Horário de funcionamento em dezembro ainda a confirmar no site oficial do outlet.",
            ],
          },
        ],
      },
      {
        id: "walmart-turkey-lake",
        name: "Walmart Supercenter (Turkey Lake)",
        icon: "bag",
        time: "14:30",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["8990 Turkey Lake Rd, Orlando, FL 32819 (loja nº 4332)."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: [
              "Segunda a domingo, das 6h às 23h59 (segundo o site do Walmart). A seção de bebidas alcoólicas fecha à meia-noite.",
            ],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Sobre",
            paragraphs: [
              "É a parada mais próxima do Vineland. Boa para compras de mercado em volume: o Walmart costuma sair entre 22% e 28% mais barato que o Publix nesse tipo de compra.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "As compras vão ficar no carro até a noite no CityWalk. Prefira deixar refrigerados e congelados para a última parada ou use bolsa térmica.",
            ],
          },
        ],
      },
      {
        id: "super-target-millenia",
        name: "Super Target (Millenia)",
        icon: "bag",
        time: "16:30",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "4750 Millenia Plaza Way, Orlando, FL 32839. O endereço do centro comercial (Millenia Plaza) aparece como 4649 em alguns sites; use o 4750 para a loja.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: [
              "Segundo um site de terceiros, funciona todos os dias das 8h às 22h. Vale confirmar no app do Target perto da data.",
            ],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Lojas ao redor",
            list: ["Costco", "Total Wine", "Marshalls", "Ross", "Dick's Sporting Goods", "The Home Depot"],
          },
          {
            color: "palm",
            icon: "leaf",
            title: "Observação",
            paragraphs: [
              "É a parada mais longe do Vineland, mas fica já na região do Universal, o que facilita a ida ao CityWalk. O Total Wine fica no mesmo complexo, então dá para fechar a lista de vinhos aqui.",
            ],
          },
        ],
      },
      {
        id: "universal-studios-florida",
        name: "Universal Studios Florida",
        icon: "target",
        time: "18:30",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["6000 Universal Blvd, Orlando, FL 32819."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: ["Fecha às 21h00."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Chegar depois das 18h costuma dar estacionamento grátis nos garagens do Universal, como previsto no plano do Dia 10. Vale confirmar a regra perto da data.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Sem refeição planejada aqui.",
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;