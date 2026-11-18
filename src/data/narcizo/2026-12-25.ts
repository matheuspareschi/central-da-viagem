import { addressSection, attentionSection, confirmedSection, FAMILIA_NARCIZO, listSection, stop, transit } from "./builders";
import { reservaLocacaoCarro } from "./locacaoCarro";
import type { NarcizoDay } from "./types";

export default {
  origem: "narcizo",
  dateISO: "2026-12-25",
  calendarTitle: "Orlando → Miami e Natal no CRAFT Bayside",
  day: 25,
  weekday: "Sex",
  liturgicalWeekday: "",
  category: "turismo",
  specialIcon: "christmas",
  title: "Orlando → Miami e Natal no CRAFT Bayside",
  itinerary: {
    kind: "schedule",
    summary: "Carro alugado de Orlando a Miami, check-in no Airbnb, primeira noite em South Beach e jantar de Natal confirmado no CRAFT Bayside.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Retirada do carro", value: "8h00" },
        { label: "Saída de Orlando", value: "8h45" },
        { label: "Check-in no Airbnb", value: "15h00" },
        { label: "Jantar de Natal", value: "20h30" },
      ],
      notes: [
        { icon: "car", text: "Orlando → Miami: **3h30 a 4h** de carro, sem contar as paradas." },
        { icon: "info", text: "Os horários de restaurantes e atrações no período de Natal devem ser **reconfirmados** perto da viagem." },
      ],
      alerts: [
        "Não deixar passaportes, eletrônicos ou compras visíveis dentro do carro.",
        "Confirmar com Rodolfo onde guardar as malas depois do checkout de 28/12.",
      ],
    },
    periods: [
      {
        title: "Manhã",
        steps: [
          stop("07:15", "Café da manhã e conferência das malas e documentos", "house"),
          transit("07:40", "Aeroporto de Orlando (MCO) e balcão da Avis"),
          stop("08:00", "Retirada do carro", "parking", "retirada-carro"),
          transit("08:45", "Miami", "~3h30 a 4h"),
          stop("10:45", "Parada curta para banheiro, café e alongamento", "burger"),
        ],
      },
      {
        title: "Tarde",
        steps: [
          stop("12:45", "Chegada à região de Miami e almoço leve antes do check-in", "burger"),
          stop("14:15", "Supermercado Presidente nº 19", "bag", "supermercado-presidente"),
          stop("15:00", "Check-in no Airbnb de Rodolfo", "house", "airbnb-miami"),
          stop("15:00", "Organizar as malas, descansar e trocar de roupa (15h–16h)", "house"),
          stop("16:15", "South Pointe Park e píer", "camera", "south-pointe"),
          stop("17:30", "Pôr do sol e caminhada pela praia em direção a Ocean Drive", "tree"),
        ],
      },
      {
        title: "Noite",
        steps: [
          transit("19:45", "CRAFT Bayside (prever trânsito e estacionamento na região de Downtown Miami)"),
          stop("20:30", "Jantar de Natal no CRAFT Bayside", "christmas", "craft-bayside"),
        ],
      },
    ],
    cards: [
      {
        id: "retirada-carro",
        name: "Retirada do carro (Avis)",
        icon: "parking",
        time: "08:00",
        address: "Aeroporto de Orlando (MCO)",
        sections: [
          reservaLocacaoCarro,
          listSection("citrus", "camera", "Checklist antes de sair do carro", [
            "Fotografar carroceria, rodas, vidros, combustível e painel, com fotos e vídeo completos do veículo",
            "Anotar o nível de combustível",
            "Conferir que o contrato não inclui serviços adicionais não autorizados",
            "Conferir a categoria e o espaço de bagagem",
            "Entender o plano de pedágio por escrito",
            "Salvar o endereço de devolução no celular",
          ]),
          listSection("attn", "alert", "A resolver com a Rentcars", [
            "Confirmar se é possível pagar antecipadamente",
            "Cotar SUV de 7 lugares ou minivan para as malas e compras",
            "Definir proteção contra danos, roubo e responsabilidade civil",
            "Obter o valor da franquia e a estimativa da caução",
            "Confirmar o plano de pedágios e o motorista adicional",
            "Depois dessas respostas, preparar o cartão bilíngue para o balcão",
          ]),
        ],
      },
      {
        id: "supermercado-presidente",
        name: "Supermercado Presidente nº 19",
        icon: "bag",
        time: "14:15",
        address: "500 SW 8th St, Miami",
        sections: [
          addressSection(
            "500 SW 8th Street. É um supermercado completo, com pequeno desvio no trajeto para Miami Beach.",
            "Comprar água e café da manhã.",
          ),
          listSection("citrus", "bag", "Lista de compras", ["Água", "Café", "Leite", "Pão", "Frutas", "Iogurte", "Biscoitos e lanches"]),
          attentionSection(
            "Confirmar o horário especial de 25/12 perto da data.",
            "**Plano B** se estiver fechado: CVS, 555 Washington Avenue, perto do Airbnb; alternativa Walgreens, 524 Jefferson Avenue.",
          ),
        ],
      },
      {
        id: "airbnb-miami",
        name: "Airbnb de Rodolfo",
        icon: "house",
        time: "15:00",
        address: "707 Washington Avenue, Miami Beach",
        sections: [
          addressSection("707 Washington Avenue • Miami Beach."),
          listSection("navy", "house", "Hospedagem", ["Entrada: 25/12/2026 às 15h", "Saída: 28/12/2026 às 11h"]),
        ],
      },
      {
        id: "south-pointe",
        name: "South Pointe Park e píer",
        icon: "camera",
        time: "16:15",
        sections: [
          listSection("citrus", "camera", "Sequência a pé", [
            "Depois das compras e do check-in, caminhada até South Pointe Park e o píer",
            "Fotos externas dos edifícios Art Déco iluminados",
            "Às 19h45, sair em direção ao CRAFT Bayside; depois do jantar, retorno direto ao apartamento",
          ]),
        ],
      },
      {
        id: "craft-bayside",
        name: "CRAFT Bayside",
        icon: "christmas",
        time: "20:30",
        address: "900 Biscayne Blvd, suíte 101B, Miami",
        sections: [
          confirmedSection(
            "Jantar de Natal • 25/12/2026 às **20h30** • mesa para **4** pessoas • nome: Silvana Narcizo • confirmação **8632**.",
            "Telefone: (786) 899-7178. Chegar entre **20h15 e 20h30**.",
          ),
          addressSection("900 Biscayne Blvd, suíte 101B, Miami."),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
