import { mapSearchUrl } from "../../lib/maps";
import type { DayData } from "../../types";

const ADDRESSES = {
  outletMarketplace: "5269 International Dr, Orlando, FL 32819.",
  leuGardens: "1920 N Forest Ave, Orlando, FL 32803.",
  kraftAzalea: "1365 Alabama Dr, Winter Park, FL 32789.",
  rollinsCollege: "131 E. Comstock Avenue.",
  parkAvenue: "Park Ave, Winter Park, FL 32789.",
  traderJoes: "8323 Sand Lake Rd, Orlando, FL 32819.",
  tjMaxx: "5295 International Dr, Orlando, FL 32819.",
} as const;

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
        summary: "Dia inteiro com os clássicos de todas as lands, desfile e show de fogos à noite.",
        journey: {
          tiles: [
            { label: "Acordar", value: "6h15" },
            { label: "Sair de casa", value: "7h15" },
            { label: "Estacionamento abre", value: "8h00" },
            { label: "Parque aberto", value: "9h–23h" },
          ],
          notes: [
            { icon: "transit", text: "Saindo do trenzinho (tram), ir de monorail para o parque. Ao chegar, não esqueça de **pegar o mapa em português** (pt-br)." },
            { icon: "return", text: "Na volta, sair do parque de ferryboat." },
          ],
          alerts: ["**Deixar os lanches** do parque separados no dia anterior. Mochilas com filtro solar e remédios."],
        },
        attractions: [
          {
            id: "mk-carruagem-foto",
            name: "Foto na subidinha da carruagem",
            area: "Main Street, U.S.A.",
            icon: "camera",
            sections: [
              { color: "navy", icon: "parking", title: "Onde", paragraphs: ["Main Street, U.S.A. Área 1 do roteiro."] },
              { color: "palm", icon: "camera", title: "Foto", paragraphs: ["**Logo pela manhã** ou no final de tudo, quando estiver vazio."] },
            ],
          },
          {
            id: "mk-tiana",
            attractionId: "tiana",
            name: "Tiana's Bayou Adventure",
            area: "Frontierland",
            icon: "leaf",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Frontierland, Magic Kingdom. Área 2 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical (com queda e molhada)."] },
              { color: "citrus", icon: "target", title: "Como aproveitar melhor", paragraphs: ["**Primeira atração do dia** na Frontierland, junto da Big Thunder Mountain."] },
            ],
          },
          {
            id: "mk-big-thunder",
            attractionId: "bigthunder",
            name: "Big Thunder Mountain Railroad",
            area: "Frontierland",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Frontierland, Magic Kingdom."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical (montanha-russa família, sem loops)."] },
              { color: "palm", icon: "camera", title: "Foto", paragraphs: ["O local ideal para a foto deste pavilhão é **em frente à Big Thunder**, quando o carrinho estiver passando."] },
            ],
          },
          {
            id: "mk-pirates",
            attractionId: "pirates",
            name: "Pirates of the Caribbean",
            area: "Adventureland",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Adventureland, Magic Kingdom. Área 3 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Show (dark ride, fila costuma andar rápido)."] },
              { color: "palm", icon: "lightbulb", title: "Dole Whip", paragraphs: ["Ao sair da Frontierland, avaliar se vale parar para um **sorvete da Dole**."] },
            ],
          },
          {
            id: "mk-liberty-photos",
            name: "Liberty Tree e Hall of the Presidents",
            area: "Liberty Square",
            icon: "camera",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Liberty Square, Magic Kingdom. Área 4 do roteiro."] },
              { color: "palm", icon: "camera", title: "Fotos", list: ["Foto 1: Liberty Tree.", "Foto 2: Hall of the Presidents."] },
              // REVISAR (trecho do atalho a definir): o Thiago não disse de onde para onde.
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Tem como cortar por um atalho."] },
            ],
          },
          {
            id: "mk-liberty-characters",
            name: "Personagens, waffle do Mickey e parada",
            area: "Liberty Square",
            icon: "burger",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Liberty Square, Magic Kingdom."] },
              { color: "citrus", icon: "target", title: "O que fazer", list: ["**Tirar fotos** com personagens na Liberty Square.", "Comer um waffle do Mickey e assistir à parada.", "Foto no poço de desejos da Cinderella, no caminho para a Tomorrowland."] },
              // REVISAR: "Sleepy Hollow" no lugar de "Sleep Hollow" (texto do Thiago); ele confirma. A frase da parada não estava no texto dele; ele decide se fica.
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Ficar o mais perto possível do **Sleepy Hollow**.", "**Confirmar o horário real** da parada no app no dia, pois ele define quando a Tomorrowland esvazia."] },
            ],
          },
          {
            id: "mk-tron",
            attractionId: "tron",
            name: "TRON Lightcycle / Run",
            area: "Tomorrowland",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Tomorrowland, Magic Kingdom. Área 5 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical."] },
              { color: "citrus", icon: "target", title: "Como aproveitar melhor", paragraphs: ["Com todo mundo vendo a parada, a **Tomorrowland fica mais vazia**. Aproveitar esse horário.", "Voltar a esta atração depois do **show de fogos**."] },
            ],
          },
          {
            id: "mk-space-mountain",
            attractionId: "space",
            name: "Space Mountain",
            area: "Tomorrowland",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Tomorrowland, Magic Kingdom."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical (montanha-russa no escuro)."] },
              { color: "citrus", icon: "target", title: "Como aproveitar melhor", paragraphs: ["Fazer **logo ao sair da TRON**, ainda durante a parada."] },
            ],
          },
          {
            id: "mk-buzz",
            attractionId: "buzz",
            name: "Buzz Lightyear",
            area: "Tomorrowland",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Tomorrowland, Magic Kingdom."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Atração atualizada."] },
            ],
          },
          {
            id: "mk-seven-dwarfs",
            attractionId: "dwarfs",
            name: "Seven Dwarfs Mine Train",
            area: "Fantasyland",
            icon: "target",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Fantasyland, Magic Kingdom. Área 6 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Tipo", paragraphs: ["Radical."] },
              // REVISAR: frase não estava no texto do Thiago; ele decide se fica.
              { color: "citrus", icon: "target", title: "Como aproveitar melhor", paragraphs: ["Atração mais concorrida do parque; a **fila costuma ser grande** em qualquer horário."] },
            ],
          },
          {
            id: "mk-princesses",
            name: "Princesas e saída pelo castelo",
            area: "Fantasyland",
            icon: "camera",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Fantasyland / Cinderella Castle, Magic Kingdom."] },
              { color: "palm", icon: "camera", title: "Fotos", list: ["Aproveitar para tirar fotos com as **princesas da Disney**.", "Para sair da Fantasyland, passar por dentro do castelo.", "Foto ao lado do poço, com o castelo ao fundo."] },
            ],
          },
          {
            id: "mk-fireworks",
            name: "Show de fogos (Main Street, U.S.A.)",
            area: "Main Street, U.S.A.",
            icon: "tree",
            sections: [
              { color: "navy", icon: "parking", title: "Onde ficar", paragraphs: ["Perto da estátua do Walt Disney, na Main Street, U.S.A. Área 1 do roteiro."] },
              { color: "gold", icon: "lightbulb", title: "Horário", paragraphs: ["Chegar de 40 a 45 minutos antes do show."] },
              { color: "citrus", icon: "target", title: "Depois do show", paragraphs: ["**Voltar para a TRON**, na Tomorrowland (Área 5)."] },
            ],
          },
          {
            id: "mk-exit",
            name: "Lojinhas de Natal e saída",
            // REVISAR (o Thiago não disse a área das lojinhas)
            area: "Main Street, U.S.A.",
            icon: "bag",
            sections: [
              { color: "citrus", icon: "bag", title: "Lojas", paragraphs: ["Ao sair do parque, passar nas **lojinhas de Natal**."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Se não deu para tirar pela manhã, a foto na **subidinha da carruagem** vale agora, com a rua mais vazia."] },
            ],
          },
        ],
      },
      {
        key: "compras-orlando",
        category: "compras",
        title: "Compras e Jardins",
        mode: "schedule",
        group: "Matheus, Jairo e Sandra",
        summary: "Três marcas no Outlet Marketplace (Adidas, Puma e New Balance), almoço, dois jardins, Rollins College, Park Avenue, Trader Joe's e TJ Maxx na volta.",
        journey: {
          tiles: [
            { label: "Sair de casa", value: "9h25" },
            { label: "Volta a Storey Lake", value: "~20h55" },
            { label: "Paradas", value: "8" },
            { label: "No carro, no dia", value: "~2h40" },
          ],
          notes: [
            { icon: "info", text: "**Levar snacks leves** (queijo, fruta, salgadinho) para os trajetos entre os jardins e a Park Avenue." },
          ],
          alerts: [],
        },
        periods: [
          {
            title: "Manhã",
            steps: [
              { kind: "transit", time: "09:25", duration: "~25 min", destinationName: "Orlando Outlet Marketplace" },
              { kind: "stop", time: "09:50", stopId: "outlet-marketplace", name: "Orlando Outlet Marketplace", icon: "bag" },
              { kind: "transit", time: "11:55", duration: "~25 min", destinationName: "Mills 50" },
              { kind: "stop", time: "12:20", stopId: "black-bean-deli", name: "Black Bean Deli (almoço)", icon: "burger" },
            ],
          },
          {
            title: "Tarde",
            steps: [
              { kind: "transit", time: "13:40", duration: "~10 min", destinationName: "Harry P. Leu Gardens" },
              { kind: "stop", time: "13:50", stopId: "leu-gardens", name: "Harry P. Leu Gardens", icon: "leaf" },
              { kind: "transit", time: "15:20", duration: "~20 min", destinationName: "Kraft Azalea Garden" },
              { kind: "stop", time: "15:40", stopId: "kraft-azalea", name: "Kraft Azalea Garden", icon: "leaf" },
              // REVISAR: trecho novo, duração estimada.
              { kind: "transit", time: "16:10", duration: "~5 min", destinationName: "Rollins College" },
              { kind: "stop", time: "16:15", stopId: "rollins-college", name: "Rollins College", icon: "target" },
              // REVISAR: trecho novo, duração estimada; Park Avenue passou de 15:15 para 15:55.
              { kind: "transit", time: "17:50", duration: "~5 min", destinationName: "Park Avenue" },
              { kind: "stop", time: "17:55", stopId: "park-avenue", name: "Park Avenue", icon: "target" },
            ],
          },
          {
            title: "Noite",
            steps: [
              // REVISAR: trecho novo, duração estimada.
              { kind: "transit", time: "18:25", duration: "~30 min", destinationName: "Trader Joe's Orlando (Dr. Phillips)" },
              { kind: "stop", time: "18:55", stopId: "trader-joes-dr-phillips", name: "Trader Joe's Orlando (Dr. Phillips)", icon: "bag" },
              // REVISAR: trecho novo, duração estimada; TJ Maxx passou de 17:20 para 17:45.
              { kind: "transit", time: "19:35", duration: "~10 min", destinationName: "TJ Maxx (International Drive)" },
              { kind: "stop", time: "19:45", stopId: "tj-maxx-idrive", name: "TJ Maxx", icon: "bag" },
              // REVISAR: horário de saída e duração estimados; chegada ~20:55.
              { kind: "transit", time: "20:25", duration: "~30 min", destinationName: "Storey Lake Resort, Kissimmee" },
            ],
          },
        ],
        cards: [
          {
            id: "outlet-marketplace",
            link: mapSearchUrl("Orlando Outlet Marketplace", ADDRESSES.outletMarketplace),
            name: "Orlando Outlet Marketplace",
            icon: "bag",
            time: "09:50",
            shopRegionId: "outlet-marketplace",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: [ADDRESSES.outletMarketplace] },
              { color: "citrus", icon: "bag", title: "Lojas", paragraphs: ["Outlet/clearance de moda esportiva e casual — foco do grupo: **Adidas, Puma e New Balance**."] },
              { color: "gold", icon: "lightbulb", title: "Horário", paragraphs: ["**Abre 10h** (Seg–Sáb). Chegando 9h50 é preciso **aguardar ~10 min** a abertura — vale a pena para garantir vaga perto da entrada. **Ir direto às três marcas-alvo** antes de circular pelo resto do outlet."] },
              { color: "palm", icon: "target", title: "Dica de desconto", paragraphs: ["Centro de 40 lojas com descontos de **25%** a **65%**. Fica a dois quarteirões do Orlando International Premium Outlets, dá pra esticar até lá se sobrar tempo."] },
              {
                color: "palm",
                icon: "target",
                title: "Como economizar",
                list: [
                  "Cupons digitais: cadastro **grátis** no Simon+ (app ou site), escolhendo o Orlando Outlet Marketplace. Aqui não há balcão de atendimento.",
                  "Livreto impresso (Savings Passport): **só no Orlando International Premium Outlets**, a menos de 5 min daqui, no **Guest Services** ou apresentando o app da Nomad no espaço da marca.",
                  "Livreto e cupom digital têm o mesmo código e **não acumulam**: compare e use o melhor.",
                  "Antes de viajar, cadastre-se nos apps e e-mails das lojas (ex.: Real Rewards da American Eagle): cupons de boas-vindas de **10%** a **20%**, que em algumas redes somam com o da Simon.",
                  "Com chip americano, algumas lojas dão **desconto por SMS** (ex.: JOIN para 32453 na American Eagle).",
                  "Nas lojas clearance, como a American Eagle daqui, o maior desconto já está na **etiqueta vermelha**; o cupom extra **pode não valer em itens remarcados**.",
                ],
              },
              {
                color: "palm",
                icon: "target",
                title: "No caixa",
                list: [
                  "Junte as compras da família em uma conta só para bater o mínimo do cupom (ex.: **15% off** acima de **US$ 100**). Se o total for o dobro do mínimo de um cupom de valor fixo (ex.: **US$ 20** off acima de US$ 100), divida em duas compras com dois cupons.",
                  "Dividir o pagamento entre pessoas, cartões ou dinheiro é comum: **avise antes** (\"We would like to split the payment\") e diga o valor de cada um.",
                  "O cupom desconta antes do imposto (**6,5%** em Orlando). Cashback **só com conta global**, cartão com pontos ou ofertas do Rakuten ativadas antes de pagar.",
                ],
              },
            ],
          },
          {
            id: "black-bean-deli",
            link: mapSearchUrl("Black Bean Deli", "Mills 50 District (Mills Ave & Colonial Dr / SR 50), Orlando, FL"),
            name: "Black Bean Deli (almoço)",
            icon: "burger",
            time: "12:20",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: ["Mills 50 District (Mills Ave & Colonial Dr / SR 50), Orlando, FL."] },
              { color: "citrus", icon: "burger", title: "Sobre", paragraphs: ["**Cozinha cubana, prato feito**. Mills 50 tem a maior concentração de restaurantes do Guia Michelin e murais de Orlando."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Prato feito em torno de **US$ 10–13/pessoa**. Dá para uma espiada rápida na arte de rua saindo do almoço, sem custo extra."] },
            ],
          },
          {
            id: "leu-gardens",
            link: mapSearchUrl("Harry P. Leu Gardens", ADDRESSES.leuGardens),
            name: "Harry P. Leu Gardens",
            icon: "leaf",
            time: "13:50",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço e Estacionamento", paragraphs: [ADDRESSES.leuGardens, "Estacionamento próprio do jardim, incluso."] },
              { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Oásis botânico de 50 acres à beira do Lago Rowena — trilhas de carvalhos centenários, o **maior roseiral formal da Flórida** e o casarão histórico Leu House Museum (1888)."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Grátis nesse dia — 7/dez/2026 é a primeira segunda-feira do mês. Horário **9h–17h**. 1h30 é suficiente para passear com calma."] },
              { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["**Confirmar no site oficial** que a promoção da primeira segunda-feira segue valendo em dezembro/2026."] },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Curiosidades",
                list: [
                  "No inverno as **temperaturas amenas** são ótimas para caminhar.",
                  "**Camélias no auge da floração**; o jardim tem uma das maiores coleções do sul dos EUA.",
                  "A propriedade foi de **Harry P. Leu** e da esposa, que viajaram o mundo coletando plantas exóticas e as aclimataram na Flórida na primeira metade do século XX.",
                ],
              },
              {
                color: "palm",
                icon: "camera",
                title: "Fotos",
                list: [
                  "**Leu House Museum**: fachada da mansão histórica cercada de camélias em flor.",
                  "Caminhos sob os **carvalhos centenários com musgo espanhol**: luz filtrada, boa para retratos e paisagem.",
                  "**Jardim de Borboletas** e relógios de sol: composições geométricas e detalhes da flora e da fauna.",
                ],
              },
            ],
          },
          {
            id: "kraft-azalea",
            link: mapSearchUrl("Kraft Azalea Garden", ADDRESSES.kraftAzalea),
            name: "Kraft Azalea Garden",
            icon: "leaf",
            time: "15:40",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: [ADDRESSES.kraftAzalea] },
              { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Jardim \"secreto\" de 5,22 acres à beira do Lake Maitland, com ciprestes cobertos de barba-de-velho e o **monumento Exedra**."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["**Grátis**. Horário **8h ao anoitecer**. Parada rápida (30 min) — ambiente tranquilo, pouco turístico."] },
              { color: "attn", icon: "alert", title: "Atenção", paragraphs: ["Uma fonte lista fechamento às 19h — **confirmar no local**."] },
              {
                color: "palm",
                icon: "camera",
                title: "Fotos",
                list: [
                  "**Exedra Monument**: colunas brancas greco-romanas à beira da água, o cartão-postal do parque.",
                  "Ciprestes gigantes com musgo espanhol emoldurando o lago, melhor com a **luz suave da manhã** ou o dourado do fim da tarde.",
                  "**Píer e margem do Lago Maitland**: ângulo aberto para o reflexo das árvores na água.",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Curiosidades",
                list: [
                  "Conhecido como o \"**Central Park de Winter Park**\": oásis discreto em área residencial nobre, procurado para pequenas cerimônias ao ar livre.",
                  "Leva o nome das **azaleias**, que colorem o parque quando florescem, mas é verdejante o ano todo.",
                ],
              },
            ],
          },
          {
            id: "rollins-college",
            link: mapSearchUrl("Truist Parking Garage", ADDRESSES.rollinsCollege),
            name: "Rollins College",
            icon: "target",
            time: "16:15",
            sections: [
              // REVISAR: o Thiago não deu o endereço; conferir.
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: [ADDRESSES.rollinsCollege] },
              { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["Um dos **campi mais bonitos dos EUA**, com arquitetura de inspiração mediterrânea espanhola à beira do Lago Virginia."] },
              {
                color: "palm",
                icon: "camera",
                title: "Fotos",
                list: [
                  "**Arquitetura e pátios**: telhados de telhas vermelhas, arcos e pátios sombreados por palmeiras, cheios de simetria.",
                  "Beira do Lago Virginia: vista da água e dos píeres, **melhor ao entardecer**, com luz dourada.",
                  "**Walk of Fame**: caminho com pedras das cidades natais de figuras históricas e presidentes, bom para foto de detalhe.",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Curiosidades",
                list: [
                  "**Fundada em 1885**, é a faculdade de artes liberais mais antiga da Flórida.",
                  "O campus abriga o Cornell Fine Arts Museum.",
                ],
              },
              // REVISAR: o Thiago não disse de qual museu é a validação; conferir se é o Cornell Fine Arts Museum, do campus.
              { color: "navy", icon: "parking", title: "Estacionamento", paragraphs: ["Visitantes podem estacionar **gratuitamente** na garagem Truist Parking Garage (131 E. Comstock Avenue) e validar o ticket na recepção do museu."] },
            ],
          },
          {
            id: "park-avenue",
            link: mapSearchUrl("Park Avenue", ADDRESSES.parkAvenue),
            name: "Park Avenue",
            icon: "target",
            time: "17:55",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: [ADDRESSES.parkAvenue] },
              // REVISAR: tirei "e o campus da Rollins College por fora", que agora é uma parada própria.
              { color: "citrus", icon: "target", title: "Sobre", paragraphs: ["A rua mais charmosa de Winter Park — vitrines e cafés."] },
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["**Grátis**, caminhada livre. Ótimo para esticar as pernas entre os dois jardins."] },
              { color: "palm", icon: "camera", title: "Dica extra", paragraphs: ["É a base do Winter Park Scenic Boat Tour e do Morse Museum, caso o grupo volte outro dia (terça a domingo — **o museu fecha às segundas**)."] },
              {
                color: "palm",
                icon: "camera",
                title: "Fotos",
                list: [
                  "Fachadas históricas de **tijolo aparente** com boutiques e bistrôs.",
                  "**Central Park de Winter Park**, ao longo da avenida: gramados, carvalhos grandes e fontes.",
                  "Cafés com **mesas na calçada**: fotos espontâneas de estilo de vida.",
                ],
              },
              {
                color: "gold",
                icon: "lightbulb",
                title: "Curiosidades",
                list: [
                  "Winter Park cresceu ao redor de uma **linha de trem importante**, e os trilhos ainda passam bem perto da avenida.",
                  // REVISAR: o texto original do Thiago foi cortado nesta frase.
                  "A avenida e os arredores têm **galerias de arte** sofisticadas.",
                ],
              },
            ],
          },
          {
            id: "trader-joes-dr-phillips",
            link: mapSearchUrl("Trader Joe's Orlando (Dr. Phillips)", ADDRESSES.traderJoes),
            name: "Trader Joe's Orlando (Dr. Phillips)",
            icon: "bag",
            time: "18:55",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: [ADDRESSES.traderJoes] },
              { color: "citrus", icon: "bag", title: "Lojas", paragraphs: ["Trader Joe's (Dr. Phillips)."] },
              // REVISAR (dica a definir): o Thiago não informou dica nem curiosidade.
              { color: "citrus", icon: "bag", title: "Sobre", paragraphs: ["Conhecida por oferecer alimentos exclusivos a preços acessíveis em um ambiente descontraído. Fundada em 1967 na Califórnia, a empresa se destaca por vender principalmente **produtos de marca própria** e por ter uma equipe de atendimento bastante amigável."] },
            ],
          },
          {
            id: "tj-maxx-idrive",
            link: mapSearchUrl("TJ Maxx", ADDRESSES.tjMaxx),
            name: "TJ Maxx",
            icon: "bag",
            time: "19:45",
            sections: [
              { color: "navy", icon: "parking", title: "Endereço", paragraphs: [ADDRESSES.tjMaxx] },
              { color: "citrus", icon: "bag", title: "Lojas", paragraphs: ["TJ Maxx (moda e casa, preço de desconto)."] },
              // REVISAR: tirei a distância até o Walmart de Turkey Lake, que saiu desta trilha.
              { color: "gold", icon: "lightbulb", title: "Dica", paragraphs: ["Fica no **mesmo trecho de International Drive** do Outlet Marketplace da manhã, já no sentido de volta para Kissimmee."] },
              { color: "palm", icon: "target", title: "Dica extra", paragraphs: ["Na mesma área tem **Ross Dress for Less** e **dd's Discounts**, caso sobre tempo/energia para mais uma parada rápida."] },
            ],
          },
        ],
      },
    ],
  },
  options: [
    {
      id: "magic-kingdom",
      label: "Magic Kingdom",
      supportLine: "Vera, Sérgio, Renata, Thiago, Silvana, Gabriel e Isabela",
      trackKeys: ["magic-kingdom"],
      isDefault: true,
    },
    {
      id: "compras-e-jardins",
      label: "Compras e Jardins",
      supportLine: "Matheus, Jairo e Sandra",
      trackKeys: ["compras-orlando"],
    },
  ],
} satisfies DayData;