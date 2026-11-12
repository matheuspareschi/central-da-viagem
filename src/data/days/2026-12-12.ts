import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-12",
  calendarTitle: "Compras em Lake Buena Vista e passeios pela cidade",
  day: 12,
  weekday: "Sáb",
  liturgicalWeekday: "3ª sem. do Advento",
  category: "turismo",
  title: "Lake Buena Vista, CityWalk, WonderWorks/ICON Park e Lake Eola",
  reading: {
    label: "3ª sem. do Advento",
    oldTestamentReading: "Habacuque 3:13–19",
    gospelReading: "João 1:1–5",
  },
  itinerary: {
    kind: "schedule",
    // REVISAR (notes): O texto original diz "Dia 13 é Saint Augustine", mas Saint Augustine é o dia 14 (o dia 13 é Universal Studios).
    summary: "Grupo em carros, saindo e voltando do Storey Lake Resort.",
    journey: {
      tiles: [
        { label: "Acordar", value: "8h40" },
        { label: "Sair de casa", value: "9h45" },
      ],
      notes: [
        { icon: "car", text: "De carro: ~10 min até a primeira parada." },
        { icon: "info", text: "A parada no Disney Springs à noite é **opcional** (nem todos estão comprometidos)." }, // REVISAR: trocado de CityWalk
        { icon: "info", text: "Dia 13 é Saint Augustine com saída cedo." },
        { icon: "info", text: "Doceria Melt'n Dip Crepe & Gelato: informação de que está **fechada**; não incluída no roteiro." },
      ],
      alerts: [],
    },
    periods: [
      {
        title: "Manhã",
        note: "Bloco longo de compras no outlet.",
        steps: [
          { kind: "transit", time: "09:45", duration: "10 min", destinationName: "Lake Buena Vista Factory Stores" },
          { kind: "stop", time: "10:00", stopId: "lake-buena-vista-factory-stores", name: "Lake Buena Vista Factory Stores", icon: "bag" },
        ],
      },
      {
        title: "Tarde",
        steps: [
          { kind: "transit", time: "14:30", duration: "20 min", destinationName: "WonderWorks e ICON Park" },
          { kind: "stop", time: "15:00", stopId: "wonderworks-icon-park", name: "WonderWorks (casa torta) e ICON Park", icon: "camera" },
          { kind: "transit", time: "16:00", duration: "25–30 min", destinationName: "Lake Eola Park" }, // REVISAR: sem a doceria (45 min), horários seguintes 45 min antes
          { kind: "stop", time: "16:45", stopId: "lake-eola", name: "Lake Eola: decoração, mercado e show da árvore", icon: "tree" },
        ],
      },
      {
        title: "Noite",
        steps: [
          { kind: "transit", time: "18:45", duration: "20–25 min", destinationName: "Disney Springs" }, // REVISAR: 45 min antes
          { kind: "stop", time: "19:15", stopId: "disney-springs", name: "Disney Springs (conhecer o lugar, ver lojas diferentes)", icon: "target" }, // REVISAR
          { kind: "transit", time: "20:45", duration: "25–30 min", destinationName: "Storey Lake Resort" }, // REVISAR
        ],
      },
    ],
    cards: [
      {
        id: "lake-buena-vista-factory-stores",
        name: "Lake Buena Vista Factory Stores",
        icon: "bag",
        time: "10:00",
        shopRegionId: "lake-buena-vista-factory-stores",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "15657 S Apopka Vineland Rd (SR 535), Orlando, FL 32821. **Estacionamento gratuito** em frente às lojas.",
            ],
          },
          {
            color: "citrus",
            icon: "bag",
            title: "Sobre",
            paragraphs: [
              "Outlet a céu aberto com cerca de 50 lojas e descontos que costumam ir de **20%** a **70%**. Fica a cerca de 2 milhas da Disney.",
            ],
            list: [
              "Nike, Calvin Klein, Levi's, Gap, Old Navy",
              "American Eagle, Carter's/OshKosh, Eddie Bauer",
              "Disney Outlet",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: [
              "**Abre às 10h** no sábado. As fontes divergem no fechamento (20h ou 21h), mas isso não afeta o horário do grupo.",
            ],
          },
          {
            color: "palm",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Reservamos **cerca de 4h30** neste bloco: dá para fazer o outlet com calma e comparar preços entre as lojas antes de comprar.",
            ],
          },
        ],
      },
      {
        id: "wonderworks-icon-park",
        name: "WonderWorks (casa torta) e ICON Park",
        icon: "camera",
        time: "15:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereços",
            paragraphs: [
              "WonderWorks: 9067 International Dr, Orlando, FL 32819 (Pointe Orlando). ICON Park: 8375 International Dr, Orlando, FL 32819. Fica a uma **curta caminhada** entre os dois.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Horário",
            paragraphs: ["WonderWorks **abre das 9h** à meia-noite, todos os dias."],
          },
          {
            color: "citrus",
            icon: "camera",
            title: "Sobre",
            paragraphs: [
              "A foto da casa de cabeça para baixo é na fachada do WonderWorks e dá para fazer sem entrar. No ICON Park circular é **grátis**, e a The Wheel já aparece iluminada ao entardecer. Subir na roda é opcional e pago.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "Estacionamento no Pointe Orlando e no ICON Park **é pago**. **Confirme o valor** no dia.",
            ],
          },
        ],
      },
      {
        id: "lake-eola",
        name: "Lake Eola Park",
        icon: "tree",
        time: "16:45",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "195 N Rosalind Ave, Orlando, FL 32801. Estacionamento nas garagens ao redor e em vagas pagas na rua. **Confirme o valor no dia**.",
            ],
          },
          {
            color: "citrus",
            icon: "tree",
            title: "Sobre",
            paragraphs: [
              "Na edição de 2025 a árvore tinha 64 pés e mais de 88.000 luzes sincronizadas com a música e a fonte do lago. O mercado funcionava de sexta a domingo, e a neve com Papai Noel nos fins de semana. O show da árvore rodava de hora em hora **das 17h45 às 21h45**.",
            ],
          },
          {
            color: "gold",
            icon: "lightbulb",
            title: "Dica",
            paragraphs: [
              "Cheguem perto do pôr do sol (~17h30) para fotos com luz e assistam ao show **às 18h45** ou 19h45. Reservem 1h30 a 2h.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: [
              "As datas e horários de 2026 **ainda não foram publicados**; as informações acima seguem o padrão de 2025. Confirmem em orlando.gov/holidays perto da viagem. O **trânsito da I-4** aos sábados costuma pesar.",
            ],
          },
        ],
      },
      {
        id: "disney-springs",
        name: "Disney Springs",
        icon: "target",
        time: "19:15",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço e Estacionamento",
            paragraphs: [
              "1486 E Buena Vista Dr, Lake Buena Vista, FL 32830",
              "Entrada e estacionamento **gratuitos**.",
            ],
          },
          {
            color: "citrus",
            icon: "target",
            title: "Objetivo",
            paragraphs: ["Conhecer o lugar, ver lojas diferentes."],
          },
        ],
      },
    ],
  },
} satisfies DayData;