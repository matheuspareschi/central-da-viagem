import { addressSection, attentionSection, confirmedSection, FAMILIA_NARCIZO, listSection, stop, transit } from "./builders";
import type { NarcizoDay } from "./types";

/** Dia de viagem: junta a última manhã do guia de Washington com a chegada do guia de Nova York. */
export default {
  origem: "narcizo",
  dateISO: "2026-12-30",
  calendarTitle: "Washington → Nova York",
  day: 30,
  weekday: "Qua",
  liturgicalWeekday: "",
  category: "turismo",
  title: "Washington → Nova York",
  itinerary: {
    kind: "schedule",
    summary: "Casa Branca, museu e almoço em Washington, trem Acela 2118 às 15h25 e primeira noite em Nova York.",
    group: FAMILIA_NARCIZO,
    journey: {
      tiles: [
        { label: "Checkout em Washington", value: "8h40" },
        { label: "Acela 2118", value: "15h25" },
        { label: "Chegada ao Moynihan", value: "18h24" },
        { label: "Check-in em Nova York", value: "19h15" },
      ],
      notes: [
        { icon: "transit", text: "Acela 2118: **15h25 → 18h24** (2h59) • Business Class • Quiet Car: silêncio, fones de ouvido e sem chamadas." },
        { icon: "info", text: "Chegar à Union Station às **14h45**, 40 minutos antes da partida; o portão fecha **3 minutos** antes." },
      ],
      alerts: [
        "Guarda de malas no hotel de Washington (30/12) ainda a confirmar.",
        "Levar os eTickets offline e identificação.",
        "Se o trem atrasar, não correr para o mercado: deixar as compras para outro momento.",
      ],
    },
    periods: [
      {
        title: "Manhã em Washington",
        steps: [
          stop("07:30", "Acordar, organizar as malas e separar os documentos", "house"),
          stop("08:00", "Café no Tatte Bakery & Café (Dupont)", "burger"),
          stop("08:40", "Checkout e malas identificadas na recepção", "house"),
          stop("09:00", "Saída para Lafayette Square", "tree"),
          stop("09:20", "Fotos externas da Casa Branca", "camera"),
          stop("09:50", "Caminhada para o Washington Monument", "tree"),
          stop("10:10", "Fotos, bandeiras e vista do National Mall", "camera"),
          stop("10:50", "Museu de História Americana (até 12h20)", "camera"),
        ],
      },
      {
        title: "Tarde: de Washington para Nova York",
        steps: [
          transit("12:20", "Dupont Circle (Uber)"),
          stop("12:45", "Almoço na Pizzeria Paradiso", "burger"),
          stop("13:45", "Passeio curto por Dupont Circle", "tree"),
          stop("14:10", "Retirar as malas no hotel e conferir os documentos", "house"),
          transit("14:20", "Washington Union Station (Uber)"),
          stop("14:45", "Chegada à Union Station: painel, plataforma, água e lanche", "target"),
          stop("15:25", "Acela 2118 para Nova York (15h25–18h24)", "target", "acela-2118"),
          stop("18:24", "Chegada do Acela 2118 ao Moynihan Train Hall", "target"),
        ],
      },
      {
        title: "Noite em Nova York",
        steps: [
          stop("18:30", "Desembarque e deslocamento ao hotel (18h30–19h15)", "parking"),
          stop("19:15", "Check-in e deixar as malas (19h15–19h30)", "house", "hotel-nova-york"),
          stop("19:30", "Compras rápidas no SMART LIC, se o trem chegar no horário (19h30–19h55)", "bag", "smart-lic"),
          stop("20:10", "Metrô N até 49 St, se estiverem com energia", "parking"),
          stop("20:40", "Times Square: fotos, lojas e jantar (20h40–22h30)", "camera"),
          stop("22:30", "Retorno ao hotel", "house"),
        ],
      },
    ],
    cards: [
      {
        id: "acela-2118",
        name: "Trem Acela 2118 • Washington → Nova York",
        icon: "target",
        time: "15:25",
        address: "Washington Union Station (WAS)",
        sections: [
          confirmedSection("Washington Union Station (WAS) → New York Moynihan Train Hall (NYP) • 30/12/2026 • 15h25 → 18h24 • duração 2h59."),
          listSection("navy", "target", "Dados confirmados", [
            "Trem: Acela 2118 • Business Class",
            "Código da reserva: **513D10**",
            "Assentos: Carro 9 Quiet Car • 7C, 7D, 8C e 8D",
            "Valor total: não informado no eTicket",
            "Bagagens por pessoa: 1 item pessoal + 2 malas até 22,7 kg",
          ]),
          listSection("citrus", "lightbulb", "Planejamento", [
            "Saída confirmada às 15h25; organizar a manhã para retirar as malas às 14h10",
            "Chegar à Union Station às 14h45, 40 minutos antes da partida",
            "Quiet Car: silêncio, fones de ouvido e sem chamadas",
            "Levar os eTickets offline e identificação; o portão fecha 3 minutos antes",
            "Site oficial: www.amtrak.com",
          ]),
        ],
      },
      {
        id: "hotel-nova-york",
        name: "Hotel em Long Island City (Home2 Suites)",
        icon: "house",
        time: "19:15",
        address: "39-06 30th Street, Long Island City, Queens",
        sections: [
          addressSection("39-06 30th Street, Long Island City, Queens.", "Estação: 39 Av (linhas N/W), a 5–8 min a pé."),
          listSection("citrus", "house", "No hotel", [
            "O Home2 Suites oferece café da manhã quente em buffet, gratuitamente",
            "A cozinha do quarto tem geladeira grande, pia, micro-ondas, lava-louças, torradeira, utensílios e louças",
            "Placa de indução disponível gratuitamente na recepção",
          ]),
          listSection("gold", "lightbulb", "Regras práticas em Nova York", [
            "Cada pessoa usa seu cartão ou celular no OMNY",
            "Conferir o MTA Trip Planner antes de sair",
            "Usar camadas, gorro, luvas e calçado confortável",
          ]),
        ],
      },
      {
        id: "smart-lic",
        name: "SMART LIC (compras para economizar)",
        icon: "bag",
        time: "19:30",
        address: "37-42 30th Street, Long Island City, Queens",
        sections: [
          addressSection("37-42 30th Street, próximo ao hotel. **Fecha às 20h.**"),
          listSection("citrus", "bag", "Lista de compras (lanches para quatro pessoas)", [
            "1 pacote: pães, bagels ou wraps",
            "400–500 g: queijo fatiado",
            "400–500 g: peito de peru ou presunto",
            "1 pote: cream cheese ou homus",
            "8 unidades: iogurtes",
            "10–12: bananas, maçãs ou tangerinas",
            "1 pacote: barras de cereal",
            "1 pacote: castanhas ou mix de nuts",
            "2 potes: saladas prontas",
            "4–6: sopas ou pratos para micro-ondas",
            "1 pacote: crackers ou biscoitos salgados",
            "6–8: garrafas de água",
            "1 pacote: sacos zip para os lanches",
          ]),
          attentionSection(
            "Comprar apenas lanches para levar e itens para duas ou três refeições leves no quarto.",
            "Comprar uma quantidade pequena primeiro e repor somente se necessário.",
          ),
        ],
      },
    ],
  },
} satisfies NarcizoDay;
