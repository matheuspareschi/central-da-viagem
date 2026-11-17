import type { DayData } from "../../types";

const ADDRESSES = {
  lakeBuenaVista: "15657 S Apopka Vineland Rd, Orlando, FL 32821",
  wonderWorks: "9067 International Dr, Orlando, FL 32819",
  lakeEola: "195 N Rosalind Ave, Orlando, FL 32801",
  iconPark: "8375 International Dr, Orlando, FL 32819",
  disneySprings: "1486 E Buena Vista Dr, Lake Buena Vista, FL 32830",
};

export default {
  dateISO: "2026-12-12",
  calendarTitle: "Compras em Lake Buena Vista e passeios pela cidade",
  day: 12,
  weekday: "Sáb",
  liturgicalWeekday: "3ª sem. do Advento",
  category: "turismo",
  title: "Lake Buena Vista e passeios em Orlando",
  reading: {
    label: "3ª sem. do Advento",
    oldTestamentReading: "Habacuque 3:13–19",
    gospelReading: "João 1:1–5",
  },
  itinerary: {
    kind: "schedule",
    summary: "Grupo em carros, saindo e voltando do Storey Lake Resort.",
    journey: {
      tiles: [
        { label: "Acordar", value: "8h40" },
        { label: "Sair de casa", value: "9h45" },
        { label: "Paradas", value: "5" },
        { label: "Deslocamento", value: "~1h45 no total" },
      ],
      notes: [
        { icon: "info", text: "Sugestão: levar **petiscos** na bolsa para beliscar nos parques (Lake Eola e Disney Springs)." },
        { icon: "return", text: "Sugestão: dá para **almoçar em casa**, já que o outlet fica a ~10 min, antes de seguir para os passeios." },
      ],
      alerts: [],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          { kind: "transit", time: "09:45", duration: "10 min", destinationName: "Lake Buena Vista Factory Stores" },
          { kind: "stop", time: "10:00", stopId: "lake-buena-vista-factory-stores", name: "Lake Buena Vista Factory Stores", icon: "bag" },
        ],
      },
      {
        title: "Tarde",
        steps: [
          { kind: "transit", time: "14:30", duration: "20 min", destinationName: "ICON Park" },
          { kind: "stop", time: "15:00", stopId: "icon-park", name: "ICON Park", icon: "sparkle" },
          { kind: "stop", time: "15:30", stopId: "wonderworks", name: "WonderWorks (casa torta)", icon: "camera" },
          { kind: "transit", time: "16:00", duration: "25–30 min", destinationName: "Lake Eola" },
          { kind: "stop", time: "16:45", stopId: "lake-eola", name: "Lake Eola", icon: "tree" },
        ],
      },
      {
        title: "Noite",
        steps: [
          { kind: "transit", time: "18:45", duration: "20–25 min", destinationName: "Disney Springs" },
          { kind: "stop", time: "19:15", stopId: "disney-springs", name: "Disney Springs (conhecer o lugar, ver lojas diferentes)", icon: "target" },
          { kind: "transit", time: "20:45", duration: "25–30 min", destinationName: "Storey Lake Resort" },
        ],
      },
    ],
    cards: [
      {
        id: "lake-buena-vista-factory-stores",
        name: "Lake Buena Vista Factory Stores",
        address: ADDRESSES.lakeBuenaVista,
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
        id: "icon-park",
        name: "ICON Park",
        address: ADDRESSES.iconPark,
        icon: "sparkle",
        time: "15:00",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: [
              "8375 International Dr, Orlando, FL 32819. Fica a uma **curta caminhada** do WonderWorks, segunda parada.",
            ],
          },
          {
            color: "citrus",
            icon: "sparkle",
            title: "Sobre",
            paragraphs: [
              "Entrar no ICON Park é **grátis**, e a The Wheel já aparece iluminada ao entardecer. Subir na roda é opcional e pago.",
            ],
          },
          {
            color: "palm",
            icon: "sparkle",
            title: "Curiosidades",
            list: [
              "**The Wheel** tem cerca de **122 m (400 pés)** de altura e 30 cabines climatizadas. A volta completa dura uns **20 minutos**.",
              "O parque ainda reúne o **StarFlyer**, um balanço de torre com cerca de 137 m (450 pés), além de aquário, museu de cera e museu das ilusões (**ingressos à parte**).",
              "A entrada é gratuita: dá para passear pelas lojas, restaurantes e pela área da roda sem pagar nada.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Onde tirar foto",
            list: [
              "**Base da The Wheel**: foto olhando para cima, com a roda inteira no quadro. Fica ainda melhor ao entardecer, com as luzes acesas.",
              "**Praça central**, com a roda ao fundo e o movimento do parque.",
              "**Lá de cima da roda** (se subirem): vista panorâmica de Orlando e da International Drive.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Estacionamento na garagem do ICON Park, **do 4º ao 7º andar**. É **pago**: **confirme o valor** no dia."],
          },
        ],
      },
      {
        id: "wonderworks",
        name: "WonderWorks (casa torta)",
        address: ADDRESSES.wonderWorks,
        icon: "camera",
        time: "15:30",
        sections: [
          {
            color: "navy",
            icon: "parking",
            title: "Endereço",
            paragraphs: ["9067 International Dr, Orlando, FL 32819 (Pointe Orlando)."],
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
              "A foto da casa de cabeça para baixo é na fachada do WonderWorks e dá para fazer sem entrar.",
            ],
          },
          {
            color: "palm",
            icon: "sparkle",
            title: "Curiosidades",
            list: [
              "A história do lugar: um laboratório secreto teria sido **arrancado do Triângulo das Bermudas por uma tempestade** e caído de cabeça para baixo em Orlando.",
              "A fachada inteira é o \"laboratório\" virado de cabeça para baixo, com a casa torta emborcada sobre o prédio.",
              "Por dentro há mais de **100 atrações interativas** de ciência, como simuladores, realidade virtual e salas de ilusão de ótica (**confirmar a lista atual** no local).",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Onde tirar foto",
            list: [
              "**Calçada em frente à fachada**: de lá a casa de cabeça para baixo aparece inteira no quadro.",
              "**Deitar ou inclinar a câmera** na fachada: fotos com o grupo \"em pé\" na parede ficam engraçadas.",
              "À noite a fachada ilumina, então vale uma segunda foto na saída, já com as luzes do Pointe Orlando.",
            ],
          },
          {
            color: "attn",
            icon: "alert",
            title: "Atenção",
            paragraphs: ["Estacionamento no Pointe Orlando **é pago**. **Confirme o valor** no dia."],
          },
        ],
      },
      {
        id: "lake-eola",
        name: "Lake Eola",
        address: ADDRESSES.lakeEola,
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
            color: "palm",
            icon: "sparkle",
            title: "Curiosidades",
            list: [
              "O **chafariz** do centro do lago, o Linton E. Allen Memorial Fountain, existe desde **1957** e tem luzes coloridas à noite.",
              "Os **cisnes** são marca do lago: há cisnes de verdade circulando e os **pedalinhos em forma de cisne**, que se alugam por tempo curto (**confirmar preço e horário** no dia).",
              "O parque tem uma pista de **cerca de 1,6 km** (1 milha) em volta do lago, e o anfiteatro, o Walt Disney Amphitheater, recebe shows.",
            ],
          },
          {
            color: "palm",
            icon: "camera",
            title: "Onde tirar foto",
            list: [
              "**Árvore de Natal gigante** (quando a decoração estiver montada): foto com as luzes acesas ao anoitecer.",
              "**Beira do lago, de frente para o centro**: o skyline de Orlando refletido na água ao pôr do sol.",
              "**Chafariz** iluminado, com o lago ao fundo.",
              "**Pedalinhos de cisne** e os cisnes de verdade, na margem.",
              "**Anfiteatro** (Walt Disney Amphitheater), com o lago atrás.",
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
        address: ADDRESSES.disneySprings,
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