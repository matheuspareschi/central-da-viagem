import { addressSection, attentionSection, FAMILIA_NARCIZO, listSection, stop } from "./builders";
import { reservaLocacaoCarro } from "./locacaoCarro";
import type { NarcizoDay } from "./types";

/** Dia de viagem: junta a última manhã do guia de Miami com a chegada do guia de Washington. */
export default {
  origem: "narcizo",
  cidade: "Washington",
  dateISO: "2026-12-28",
  calendarTitle: "Miami → Washington",
  day: 28,
  weekday: "Seg",
  liturgicalWeekday: "",
  category: "turismo",
  title: "Miami → Washington",
  itinerary: {
    kind: "schedule",
    summary: "Última manhã em Miami, devolução do carro, voo Delta DL5665 para Washington Reagan e chegada ao hotel depois da meia-noite.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Checkout do Airbnb", value: "11h00" },
        { label: "Devolução do carro", value: "16h30" },
        { label: "Voo DL5665", value: "20h15" },
        { label: "Chegada em DCA", value: "23h08" },
      ],
      notes: [
        { icon: "transit", text: "Voo Miami → Washington Reagan (DCA): **2h53**, sem escalas." },
        { icon: "car", text: "Devolver o carro na Avis com o **mesmo nível de combustível** recebido." },
      ],
      alerts: [
        "Avisar o Courtyard sobre a chegada depois da meia-noite.",
        "Fotografar o carro e guardar o recibo da devolução; conferir malas, documentos e celulares carregados.",
      ],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:30", "Café da manhã no News Café (Ocean Drive) e início da organização das malas", "burger"),
          stop("08:30", "Última caminhada por South Beach ou South Pointe", "tree"),
          stop("09:45", "Retorno ao apartamento, banho e fechamento das malas", "house"),
          stop("10:30", "Conferência do imóvel e fotos antes da saída", "camera"),
          stop("11:00", "Checkout do Airbnb", "house", "airbnb-checkout"),
          stop("11:30", "Almoço rápido na La Sandwicherie (South Beach)", "burger"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("13:00", "Passeio leve por Ocean Drive, Española Way ou Lincoln Road", "tree"),
          stop("15:00", "Retirada das malas e última conferência dos documentos", "house"),
          stop("15:45", "Saída de South Beach para o Aeroporto de Miami", "parking"),
          stop("16:30", "Abastecimento perto do aeroporto, devolução do carro na Avis e fotos do veículo (16h30–17h)", "parking", "devolucao-carro"),
          stop("17:15", "Transporte da locadora para o terminal", "parking"),
          stop("18:00", "Check-in, despacho das malas e controle de segurança", "target"),
        ],
      },
      {
        title: "Noite",
        steps: [
          stop("18:45", "Jantar no aeroporto e compra de lanche para o voo", "burger"),
          stop("20:15", "Voo Delta DL5665 para Washington Reagan (DCA)", "target", "voo-dl5665"),
          stop("23:08", "Chegada ao Terminal 2 e retirada das malas", "target"),
          stop("23:50", "Uber ou Lyft para Dupont Circle", "parking"),
          stop("00:25", "Check-in no Courtyard e descanso (já madrugada de 29/12)", "house", "courtyard-dupont"),
        ],
      },
    ],
    cards: [
      {
        id: "airbnb-checkout",
        name: "Checkout do Airbnb",
        icon: "house",
        time: "11:00",
        address: "707 Washington Avenue, Miami Beach",
        sections: [
          addressSection("707 Washington Avenue • Miami Beach. Saída: 28/12/2026 às 11h."),
          attentionSection("Deixar as malas com Rodolfo **somente se houver confirmação prévia** (guarda das malas ainda a confirmar)."),
        ],
      },
      {
        id: "devolucao-carro",
        name: "Devolução do carro (Avis)",
        icon: "parking",
        time: "16:30",
        address: "Aeroporto de Miami (MIA)",
        sections: [reservaLocacaoCarro],
      },
      {
        id: "voo-dl5665",
        name: "Voo Delta DL5665 • Miami → Washington",
        icon: "target",
        time: "20:15",
        address: "Aeroporto de Miami (MIA)",
        sections: [
          listSection("navy", "target", "Dados do voo", [
            "Companhia: Delta Air Lines • DL5665, operado por Republic Airways DBA Delta Connection",
            "Aeronave prevista: Embraer 175",
            "Reserva: **GPZ36X**",
            "Passageiros: Silvana, Rafael, Isabela e Gabriel",
            "Saída: Miami MIA • 28/12 às 20h15",
            "Chegada: Washington Reagan DCA, Terminal 2 • 23h08",
            "Duração: 2h53 • sem escalas",
            "Tarifa: Delta Main Basic • assentos atribuídos após o check-in",
          ]),
          listSection("citrus", "lightbulb", "Para o aeroporto", [
            "Guardar o recibo de abastecimento e o comprovante de devolução",
            "Confirmar o terminal no aplicativo Delta no dia do voo",
            "Chegar ao terminal por volta das 18h",
          ]),
          attentionSection(
            "A bagagem despachada da família ainda precisa ser confirmada na reserva.",
            "Fazer o check-in on-line da Delta 24 horas antes.",
          ),
        ],
      },
      {
        id: "courtyard-dupont",
        name: "Courtyard by Marriott Washington DC Dupont Circle",
        icon: "house",
        time: "00:25",
        address: "1733 N Street NW, Washington, DC 20036",
        sections: [
          addressSection("1733 N Street NW, Washington, DC 20036."),
          attentionSection("Chegada tardia (depois da meia-noite): avisar o hotel antes."),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
