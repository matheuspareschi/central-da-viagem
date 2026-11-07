import type { DayData } from "../../types";

export default {
  dateISO: "2026-12-07",
  calendarTitle: "Magic Kingdom",
  day: 7,
  weekday: "Seg",
  liturgicalWeekday: "2ª sem. do Advento",
  title: "Magic Kingdom e Compras",
  split: [
    "parque",
    "compras",
  ],
  reading: {
    label: "2ª sem. do Advento",
    oldTestamentReading: "Isaías 26:7–15",
    gospelReading: "Mateus 3:1–12",
  },
  itinerary: {
    kind: "split",
    tracks: [
      {
        key: "magic-kingdom",
        category: "parque",
        park: { name: "Magic Kingdom", departure: "7h15", opening: "9h", closing: "23h" },
        title: "Magic Kingdom",
        mode: "checklist",
        parkId: "magic-kingdom",
        summary: "Dia inteiro com os clássicos de todas as lands, desfile e show de fogos à noite. Almoço e lanches dentro do parque.",
        journey: {
          tiles: [
            { label: "Acordar", value: "6h15" },
            { label: "Sair de casa", value: "7h15" },
            { label: "Estacionamento abre", value: "8h00" },
            { label: "Parque aberto", value: "9h–23h" },
          ],
          notes: [
            { icon: "car", text: "De carro: ~20–25 min até o estacionamento." },
            { icon: "info", text: "Chegada para entrar no early entry (para não hóspedes)." },
            { icon: "transit", text: "Até a entrada: tram, depois monorail ou balsa (~20–30 min a mais). Pegue o mapa em português (pt-br) ao chegar." },
          ],
          alerts: ["Confirmar no app: em dezembro pode haver festa de Natal com ingresso separado e fechamento antecipado. Veja se o dia 7 é uma dessas noites."],
        },
        attractions: [
          {
            id: "mk-tiana",
            attractionId: "tiana",
            name: "Tiana's Bayou Adventure",
            icon: "leaf",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Frontierland, Magic Kingdom. Área 2 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical (com queda e molhada)."] },
              { color: "citrus", icon: "target", title: "Como aproveitar melhor", paragraphs: ["Primeira atração do dia na Frontierland, junto da Big Thunder Mountain."] },
            ],
          },
          {
            id: "mk-big-thunder",
            attractionId: "bigthunder",
            name: "Big Thunder Mountain Railroad",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Frontierland, Magic Kingdom."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical (montanha-russa família, sem loops)."] },
              { color: "palm", icon: "camera", title: "Foto", paragraphs: ["O local ideal para a foto deste pavilhão é em frente à Big Thunder, quando o carrinho estiver passando."] },
            ],
          },
          {
            id: "mk-pirates",
            attractionId: "pirates",
            name: "Pirates of the Caribbean",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Adventureland, Magic Kingdom. Área 3 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Show (dark ride, fila costuma andar rápido)."] },
              { color: "palm", icon: "lightbulb", title: "Dole Whip", paragraphs: ["Ao sair da Frontierland, avaliar se vale parar para um sorvete da Dole."] },
            ],
          },
          {
            id: "mk-liberty-photos",
            name: "Liberty Tree e Hall of the Presidents (fotos)",
            icon: "camera",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Liberty Square, Magic Kingdom. Área 4 do roteiro."] },
              { color: "palm", icon: "camera", title: "Fotos", list: ["Foto 1: Liberty Tree.", "Foto 2: Hall of the Presidents."] },
            ],
          },
          {
            id: "mk-liberty-characters",
            name: "Personagens, waffle do Mickey e parada",
            icon: "burger",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Liberty Square, Magic Kingdom."] },
              { color: "citrus", icon: "target", title: "O que fazer", list: ["Tirar fotos com personagens na Liberty Square.", "Comer um waffle do Mickey e assistir à parada.", "Foto no poço de desejos da Cinderella, no caminho para a Tomorrowland."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Confirmar o horário real da parada no app no dia, pois ele define quando a Tomorrowland esvazia."] },
            ],
          },
          {
            id: "mk-tron",
            attractionId: "tron",
            name: "TRON Lightcycle / Run",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Tomorrowland, Magic Kingdom. Área 5 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical."] },
              { color: "citrus", icon: "target", title: "Como aproveitar melhor", paragraphs: ["Com todo mundo vendo a parada, a Tomorrowland fica mais vazia. Aproveitar esse horário.", "Voltar a esta atração depois do show de fogos."] },
            ],
          },
          {
            id: "mk-space-mountain",
            attractionId: "space",
            name: "Space Mountain",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Tomorrowland, Magic Kingdom."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical (montanha-russa no escuro)."] },
              { color: "citrus", icon: "target", title: "Como aproveitar melhor", paragraphs: ["Fazer logo ao sair da TRON, ainda durante a parada."] },
            ],
          },
          {
            id: "mk-seven-dwarfs",
            attractionId: "dwarfs",
            name: "Seven Dwarfs Mine Train",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Fantasyland, Magic Kingdom. Área 6 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical."] },
              { color: "citrus", icon: "target", title: "Como aproveitar melhor", paragraphs: ["Atração mais concorrida do parque; a fila costuma ser grande em qualquer horário."] },
            ],
          },
          {
            id: "mk-princesses",
            name: "Princesas e saída pelo castelo",
            icon: "camera",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Fantasyland / Cinderella Castle, Magic Kingdom."] },
              { color: "palm", icon: "camera", title: "Fotos", list: ["Aproveitar para tirar fotos com as princesas da Disney.", "Para sair da Fantasyland, passar por dentro do castelo.", "Foto ao lado do poço, com o castelo ao fundo."] },
            ],
          },
          {
            id: "mk-fireworks",
            name: "Show de fogos (Main Street, U.S.A.)",
            icon: "tree",
            sections: [
              { color: "navy", icon: "parking", title: "Onde ficar", paragraphs: ["Perto da estátua do Walt Disney, na Main Street, U.S.A. Área 1 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Horário", paragraphs: ["Chegar de 40 a 45 minutos antes do show."] },
              { color: "citrus", icon: "target", title: "Depois do show", paragraphs: ["Voltar para a TRON, na Tomorrowland (Área 5)."] },
            ],
          },
          {
            id: "mk-exit",
            name: "Lojinhas de Natal e saída",
            icon: "bag",
            sections: [
              { color: "citrus", icon: "bag", title: "Lojas", paragraphs: ["Ao sair do parque, passar nas lojinhas de Natal."] },
              { color: "navy", icon: "parking", title: "Saída", paragraphs: ["Voltar de ferryboat."] },
            ],
          },
        ],
      },
      {
        key: "compras-orlando",
        category: "compras",
        title: "Compras e Jardins",
        mode: "schedule",
        group: "Matheus, Jairo e Sandra · 1 carro",
        summary: "Três marcas no Outlet Marketplace (Adidas, Puma e New Balance), almoço, dois jardins, Park Avenue, mercado da semana no Walmart e TJ Maxx na volta.",
        // REVISAR (tiles): "No carro, no dia ~2h15" vem da nota antiga; a soma dos trajetos dá ~2h35 (25+25+10+20+5+30+10+30 min).
        journey: {
          tiles: [
            { label: "Sair de casa", value: "9h25" },
            { label: "Volta a Storey Lake", value: "~18h20" },
            { label: "Paradas", value: "7" },
            { label: "No carro, no dia", value: "~2h15" },
          ],
          notes: [
            { icon: "info", text: "Leu Gardens é grátis por ser a 1ª segunda-feira do mês." },
            { icon: "info", text: "Levar snacks leves (queijo, fruta, salgadinho) para os trajetos entre os jardins e a Park Avenue." },
          ],
          alerts: ["Rota repetida: passa duas vezes pelo corredor de International Drive e Turkey Lake. Marketplace no início, Walmart e TJ Maxx no fim, jardins no meio."],
        },
        periods: [
          {
            title: "Manhã",
            steps: [
              { kind: "transit", time: "09:25", duration: "~25 min", destinationName: "Orlando Outlet Marketplace" },
              { kind: "stop", time: "09:50", stopId: "outlet-marketplace", name: "Orlando Outlet Marketplace", icon: "bag" },
              { kind: "transit", time: "11:30", duration: "~25 min", destinationName: "Mills 50" },
              { kind: "stop", time: "11:55", stopId: "black-bean-deli", name: "Black Bean Deli (almoço)", icon: "burger" },
            ],
          },
          {
            title: "Tarde",
            steps: [
              { kind: "transit", time: "12:40", duration: "~10 min", destinationName: "Harry P. Leu Gardens" },
              { kind: "stop", time: "12:50", stopId: "leu-gardens", name: "Harry P. Leu Gardens", icon: "leaf" },
              { kind: "transit", time: "14:20", duration: "~20 min", destinationName: "Kraft Azalea Garden" },
              { kind: "stop", time: "14:40", stopId: "kraft-azalea", name: "Kraft Azalea Garden", icon: "leaf" },
              { kind: "transit", time: "15:10", duration: "~5 min", destinationName: "Park Avenue" },
              { kind: "stop", time: "15:15", stopId: "park-avenue", name: "Park Avenue", icon: "target" },
            ],
          },
          {
            title: "Noite",
            steps: [
              { kind: "transit", time: "15:50", duration: "~30 min", destinationName: "Walmart Supercenter (Turkey Lake)" },
              { kind: "stop", time: "16:20", stopId: "walmart-turkey-lake", name: "Walmart — Compras da Semana", icon: "bag" },
              { kind: "transit", time: "17:10", duration: "~10 min", destinationName: "TJ Maxx (International Drive)" },
              { kind: "stop", time: "17:20", stopId: "tj-maxx-idrive", name: "TJ Maxx", icon: "bag" },
              { kind: "transit", time: "17:50", duration: "~30 min", destinationName: "Storey Lake Resort, Kissimmee" },
            ],
          },
        ],
        cards: [
          {
            id: "outlet-marketplace",
            name: "Orlando Outlet Marketplace",
            icon: "bag",
            time: "09:50",
            shopRegionId: "outlet-marketplace",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["5269 International Dr, Orlando, FL 32819."] },
              { color: "citrus", icon: "bag", title: "Lojas", paragraphs: ["Outlet/clearance de moda esportiva e casual — foco do grupo: Adidas, Puma e New Balance."] },
              { color: "gold", icon: "lightbulb", title: "Horário", paragraphs: ["Abre 10h (Seg–Sáb). Chegando 9h50 é preciso aguardar ~10 min a abertura — vale a pena para garantir vaga perto da entrada. Ir direto às três marcas-alvo antes de circular pelo resto do outlet."] },
              { color: "palm", icon: "target", title: "Dica de desconto", paragraphs: ["Centro de 40 lojas com descontos de 25% a 65%. Fica a dois quarteirões do Orlando International Premium Outlets, dá pra esticar até lá se sobrar tempo."] },
            ],
          },
          {
            id: "black-bean-deli",
            name: "Black Bean Deli (almoço)",
            icon: "burger",
            time: "11:55",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Mills 50 District (Mills Ave & Colonial Dr / SR 50), Orlando, FL."] },
              { color: "citrus", icon: "burger", title: "Sobre", paragraphs: ["Cozinha cubana, prato feito. Mills 50 tem a maior concentração de restaurantes do Guia Michelin e murais de Orlando."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Prato feito em torno de US$ 10–13/pessoa. Dá para uma espiada rápida na arte de rua saindo do almoço, sem custo extra."] },
            ],
          },
          {
            id: "leu-gardens",
            name: "Harry P. Leu Gardens",
            icon: "leaf",
            time: "12:50",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço e Estacionamento", paragraphs: ["1920 N Forest Ave, Orlando, FL 32803.", "Estacionamento próprio do jardim, incluso."] },
              { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Oásis botânico de 50 acres à beira do Lago Rowena — trilhas de carvalhos centenários, o maior roseiral formal da Flórida e o casarão histórico Leu House Museum (1888)."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Grátis nesse dia — 7/dez/2026 é a primeira segunda-feira do mês. Horário 9h–17h. 1h30 é suficiente para passear com calma."] },
              { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Confirmar no site oficial que a promoção da primeira segunda-feira segue valendo em dezembro/2026."] },
            ],
          },
          {
            id: "kraft-azalea",
            name: "Kraft Azalea Garden",
            icon: "leaf",
            time: "14:40",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["1365 Alabama Dr, Winter Park, FL 32789."] },
              { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Jardim \"secreto\" de 5,22 acres à beira do Lake Maitland, com ciprestes cobertos de barba-de-velho e o monumento Exedra."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Grátis. Horário 8h ao anoitecer. Parada rápida (30 min) — ambiente tranquilo, pouco turístico."] },
              { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Uma fonte lista fechamento às 19h — confirmar no local."] },
            ],
          },
          {
            id: "park-avenue",
            name: "Park Avenue",
            icon: "target",
            time: "15:15",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Park Ave, Winter Park, FL 32789."] },
              { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["A rua mais charmosa de Winter Park — vitrines, cafés, e o campus da Rollins College por fora."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Grátis, caminhada livre. Ótimo para esticar as pernas entre os dois jardins."] },
              { color: "palm", icon: "camera", title: "Dica extra", paragraphs: ["É a base do Winter Park Scenic Boat Tour e do Morse Museum, caso o grupo volte outro dia (terça a domingo — o museu fecha às segundas)."] },
            ],
          },
          {
            id: "walmart-turkey-lake",
            name: "Walmart — Compras da Semana",
            icon: "bag",
            time: "16:20",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["8990 Turkey Lake Rd, Orlando, FL 32819."] },
              { color: "citrus", icon: "bag", title: "Lojas", paragraphs: ["Walmart Supercenter (Turkey Lake) — compras da semana."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Reservar ~50 min para a lista de mercado da semana toda."] },
              { color: "palm", icon: "target", title: "Dica de desconto", paragraphs: ["Walmart costuma sair 22–28% mais barato que a Publix para compras em volume."] },
            ],
          },
          {
            id: "tj-maxx-idrive",
            name: "TJ Maxx",
            icon: "bag",
            time: "17:20",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["5295 International Dr, Orlando, FL 32819."] },
              { color: "citrus", icon: "bag", title: "Lojas", paragraphs: ["TJ Maxx (moda e casa, preço de desconto)."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Fica no mesmo trecho de International Drive do Outlet Marketplace da manhã — a ~2,3 km do Walmart de Turkey Lake, já no sentido de volta para Kissimmee."] },
              { color: "palm", icon: "target", title: "Dica extra", paragraphs: ["Na mesma área tem Ross Dress for Less e dd's Discounts, caso sobre tempo/energia para mais uma parada rápida."] },
            ],
          },
        ],
      },
    ],
  },
} satisfies DayData;