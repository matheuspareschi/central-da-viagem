import { MCO_ADDRESS, mcoSections } from "../mco";
import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-20",
  calendarTitle: "Compras e Islands of Adventure",
  day: 20,
  weekday: "Dom",
  liturgicalWeekday: "4º Domingo do Advento",
  category: "compras",
  title: "Super Target, Walmart, Vineland e Islands of Adventure",
  reading: {
    label: "4º Domingo do Advento",
    oldTestamentReading: "2 Samuel 7:1–11, 16",
    epistleReading: "Romanos 16:25–27",
    gospelReading: "Lucas 1:26–38",
    psalm: "Lucas 1:46b–55 ou Salmo 89:1–4, 19–26",
  },
  itinerary: {
    kind: "schedule",
    summary: "Dia de compras do mais longe para o mais perto do Vineland: Super Target (Millenia), Walmart Supercenter e Vineland Premium Outlets, com a Basílica ao lado. À noite, Islands of Adventure.",
    journey: {
      tiles: [
        { label: "Acordar", value: "8h30" },
        { label: "Sair de casa", value: "9h30" },
        { label: "Islands fecha", value: "22h" },
        { label: "Deslocamento", value: "~1h20 no total" }, // REVISAR: soma dos trajetos do dia, sem a volta para casa
      ],
      notes: [],
      alerts: [
        "**Almoço livre**: cada um come quando quiser, com os snacks do carro ou algo rápido no local.",
      ],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          { kind: "transit", time: "09:30", duration: "~30–35 min", destinationName: "Super Target (Millenia)" }, // REVISAR: tempo e horários do dia estimados
          { kind: "stop", time: "10:00", stopId: "super-target-millenia", name: "Super Target (Millenia)", icon: "bag" },
          { kind: "transit", time: "11:30", duration: "~15 min", destinationName: "Walmart Supercenter (Turkey Lake)" },
          { kind: "stop", time: "11:45", stopId: "walmart-turkey-lake", name: "Walmart Supercenter (Turkey Lake)", icon: "bag" },
        ],
      },
      {
        title: "Tarde",
        steps: [
          { kind: "transit", time: "12:45", duration: "~10 min", destinationName: "Vineland Premium Outlets" },
          { kind: "stop", time: "13:00", stopId: "vineland-premium-outlets", name: "Vineland Premium Outlets", icon: "bag" },
        ],
      },
      {
        title: "Noite",
        steps: [
          { kind: "transit", time: "18:00", duration: "~20 min", destinationName: "Islands of Adventure" },
          { kind: "stop", time: "18:30", stopId: "islands-of-adventure", name: "Islands of Adventure (fecha às 22h)", icon: "target" },
          { kind: "transit", time: "22:00", duration: "~25 min", destinationName: "Aeroporto de Orlando (MCO)" }, // REVISAR: tempo e horário estimados; o horário do voo do Rafa não está nos dados
          { kind: "stop", time: "22:30", stopId: "pegar-rafa-mco", name: "Pegar o Rafa no aeroporto", icon: "target" },
        ],
      },
    ],
    cards: [
      {
        id: "super-target-millenia",
        address: "4750 Millenia Plaza Way, Orlando, FL 32839",
        name: "Super Target (Millenia)",
        icon: "bag",
        time: "10:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "4750 Millenia Plaza Way, Orlando, FL 32839. O endereço do centro comercial (Millenia Plaza) aparece como 4649 em alguns sites; **use o 4750** para a loja.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: [
              "Segundo um site de terceiros, funciona todos os dias **das 8h às 22h**. Vale **confirmar no app** do Target perto da data.",
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
              "É a parada **mais longe do Vineland**, por isso abre o dia. O Total Wine fica no mesmo complexo, então dá para fechar a lista de vinhos aqui.",
            ],
          },
        ],
      },
      {
        id: "walmart-turkey-lake",
        address: "8990 Turkey Lake Rd, Orlando, FL 32819",
        name: "Walmart Supercenter (Turkey Lake)",
        icon: "bag",
        time: "11:45",
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
              "Segunda a domingo, **das 6h às 23h59** (segundo o site do Walmart). A seção de bebidas alcoólicas fecha à meia-noite.",
            ],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Sobre",
            paragraphs: [
              "É a parada do meio do dia, a mais próxima do Vineland. Boa para compras de mercado em volume: o Walmart costuma sair entre **22%** e **28%** mais barato que o Publix nesse tipo de compra.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "As compras do Super Target e do Walmart vão ficar no carro até a noite no Islands. Para **refrigerados e congelados**, use **bolsa térmica**.",
            ],
          },
        ],
      },
      {
        id: "vineland-premium-outlets",
        address: "8200 Vineland Ave, Orlando, FL 32821",
        name: "Vineland Premium Outlets",
        icon: "bag",
        time: "13:00",
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
              "**Mais de 160 lojas** e uma praça de alimentação grande, perto da Disney e do SeaWorld. Entre as lojas estão Polo Ralph Lauren, Coach e Burberry.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Vindo da região da Disney, o caminho mais usado é pela **Hwy 535**, por baixo da I-4, e depois a Vineland Ave. Almoço livre na praça de alimentação do próprio outlet.",
            ],
          },
          {
            color: "palm",
            icon: "leaf",
            title: "Ao lado",
            paragraphs: [
              "Ao lado do Vineland fica a Basílica do Santuário Nacional de Maria, Rainha do Universo (8300 Vineland Ave), que **dá para visitar** no mesmo dia.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Horário de funcionamento em dezembro ainda a **confirmar no site oficial** do outlet.",
            ],
          },
        ],
      },
      {
        id: "islands-of-adventure",
        address: "6000 Universal Blvd, Orlando, FL 32819",
        name: "Islands of Adventure",
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
            paragraphs: ["Fecha às **22h**."],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Chegar **depois das 18h** costuma dar estacionamento **grátis** nas garagens do Universal, como previsto no plano do Dia 10. Vale **confirmar a regra perto** da data.",
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
      {
        id: "pegar-rafa-mco",
        address: MCO_ADDRESS,
        name: "Pegar o Rafa no aeroporto",
        icon: "target",
        time: "22:30",
        sections: mcoSections,
      },
    ],
  },
} satisfies DayData;