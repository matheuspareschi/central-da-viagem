export type LanchesCategoryId = "burger" | "chicken" | "mex" | "subs" | "pizza" | "cafe" | "fast" | "sweet";
export type LanchesPrice = "$" | "$$";

export interface LanchesCategory {
  id: LanchesCategoryId;
  nome: string;
}

export interface LanchesChain {
  id: string;
  categoria: LanchesCategoryId;
  nome: string;
  preco: LanchesPrice;
  /** Texto curto; `**trecho**` vira negrito (ver docs/guia-de-negrito.md). */
  descricao: string;
  daFlorida: boolean;
}

export const LANCHES_STORAGE_KEY = "lanches:favoritos";

/** Legenda do rodapé; `label` também é o que o leitor de tela fala junto do preço. */
export const lanchesPriceLegend: Record<LanchesPrice, { label: string; detail?: string }> = {
  $: { label: "barato", detail: "até cerca de US$ 12 por pessoa" },
  $$: { label: "médio" },
};

export const lanchesCategories: LanchesCategory[] = [
  { id: "burger", nome: "Hambúrgueres" },
  { id: "chicken", nome: "Frango" },
  { id: "mex", nome: "Mexicano e Tex-Mex" },
  { id: "subs", nome: "Subs e sanduíches" },
  { id: "pizza", nome: "Pizza" },
  { id: "cafe", nome: "Café da manhã e cafés" },
  { id: "fast", nome: "Fast-casual" },
  { id: "sweet", nome: "Regionais e sobremesas" },
];

/** Redes de Orlando e Kissimmee, agrupadas por categoria na ordem de `lanchesCategories`. */
export const lanchesChains: LanchesChain[] = [
  { id: "mcd", categoria: "burger", nome: "McDonald's", preco: "$", daFlorida: false, descricao: "**Big Mac** e McNuggets. Muitas unidades **24h**; cupons no app." },
  { id: "bk", categoria: "burger", nome: "Burger King", preco: "$", daFlorida: true, descricao: "Hambúrguer grelhado (**Whopper**). Promoções frequentes no app." },
  { id: "wendys", categoria: "burger", nome: "Wendy's", preco: "$", daFlorida: false, descricao: "Carne fresca e quadrada (**Dave's Single**), batata com chili e sorvete Frosty." },
  { id: "whata", categoria: "burger", nome: "Whataburger", preco: "$", daFlorida: false, descricao: "Rede do Texas: hambúrgueres grandes e **spicy ketchup**. Muitas unidades **24h**." },
  { id: "fiveguys", categoria: "burger", nome: "Five Guys", preco: "$$", daFlorida: false, descricao: "Feito na hora, com **toppings grátis**. Batata enorme, dá para dividir." },
  { id: "shake", categoria: "burger", nome: "Shake Shack", preco: "$$", daFlorida: false, descricao: "Hambúrguer premium e bons **milkshakes**. Mais caro que os demais." },
  { id: "steak", categoria: "burger", nome: "Steak 'n Shake", preco: "$", daFlorida: false, descricao: "Estilo diner: **steakburger** fino e milkshakes." },
  { id: "checkers", categoria: "burger", nome: "Checkers / Rally's", preco: "$", daFlorida: true, descricao: "**Só drive-thru**. Batata temperada famosa e combos muito baratos." },
  { id: "sonic", categoria: "burger", nome: "Sonic Drive-In", preco: "$", daFlorida: false, descricao: "Drive-in com **bebidas customizáveis** (limonadas, slushes) e sorvetes." },
  { id: "wcastle", categoria: "burger", nome: "White Castle", preco: "$", daFlorida: false, descricao: "**Sliders** (mini-hambúrgueres) vendidos em caixas." },
  { id: "smash", categoria: "burger", nome: "Smashburger / Freddy's", preco: "$$", daFlorida: false, descricao: "Hambúrguer **smash**, crocante nas bordas. O Freddy's também tem frozen custard." },

  { id: "cfa", categoria: "chicken", nome: "Chick-fil-A", preco: "$", daFlorida: false, descricao: "Sanduíche de frango e nuggets, rápido. **Fecha aos domingos**. Café da manhã até **10h30**." },
  { id: "popeyes", categoria: "chicken", nome: "Popeyes", preco: "$", daFlorida: false, descricao: "Frango frito estilo Louisiana, com **biscuit** e sanduíche crocante." },
  { id: "kfc", categoria: "chicken", nome: "KFC", preco: "$", daFlorida: false, descricao: "Frango frito do Coronel Sanders: **baldes**, tenders e purê com molho." },
  { id: "canes", categoria: "chicken", nome: "Raising Cane's", preco: "$", daFlorida: false, descricao: "Quase só **chicken fingers**, com Texas toast e molho Cane's. **Fila longa** no drive-thru. Unidades na US-192 e na Palm Pkwy." },
  { id: "zaxbys", categoria: "chicken", nome: "Zaxby's", preco: "$", daFlorida: false, descricao: "Chicken fingers e wings com **molhos variados**." },
  { id: "churchs", categoria: "chicken", nome: "Church's Texas Chicken", preco: "$", daFlorida: false, descricao: "Frango frito **econômico**, com jalapeño e biscuits." },
  { id: "bojangles", categoria: "chicken", nome: "Bojangles", preco: "$", daFlorida: false, descricao: "Frango frito sulista com biscuits. Bom café da manhã com **biscuit de frango**." },
  { id: "wingstop", categoria: "chicken", nome: "Wingstop", preco: "$$", daFlorida: false, descricao: "**Só asas**, com ou sem osso, em muitos sabores (lemon pepper, Atomic)." },
  { id: "pollotrop", categoria: "chicken", nome: "Pollo Tropical", preco: "$", daFlorida: true, descricao: "Frango grelhado **marinado em cítricos**, arroz, feijão-preto, banana-da-terra frita e bowls TropiChop." },
  { id: "pdq", categoria: "chicken", nome: "PDQ", preco: "$$", daFlorida: true, descricao: "Sanduíche de frango crocante e **tenders feitos na hora**, com molhos da casa." },
  { id: "daves", categoria: "chicken", nome: "Dave's Hot Chicken", preco: "$$", daFlorida: false, descricao: "Frango **picante** em níveis de calor, em sanduíche ou tenders." },
  { id: "jollibee", categoria: "chicken", nome: "Jollibee", preco: "$$", daFlorida: false, descricao: "Rede filipina com frango frito e **espaguete doce**. Primeira unidade na região em 2023." },

  { id: "tbell", categoria: "mex", nome: "Taco Bell", preco: "$", daFlorida: false, descricao: "Tacos, burritos e quesadillas **baratos**. Há opções vegetarianas." },
  { id: "chipotle", categoria: "mex", nome: "Chipotle", preco: "$", daFlorida: false, descricao: "Burritos e bowls **montados na hora**. Porção grande, dá para dividir." },
  { id: "moes", categoria: "mex", nome: "Moe's Southwest Grill", preco: "$", daFlorida: false, descricao: "Estilo Chipotle, com **bar de molhos** e queso." },
  { id: "qdoba", categoria: "mex", nome: "Qdoba", preco: "$", daFlorida: false, descricao: "Burritos e bowls, com **queso incluído** em muitos pedidos." },
  { id: "flats", categoria: "mex", nome: "Tijuana Flats", preco: "$", daFlorida: true, descricao: "Burritos e nachos, com **bar de molhos** picantes." },
  { id: "gringos", categoria: "mex", nome: "Gringos Locos", preco: "$", daFlorida: true, descricao: "Rede local de Orlando: tacos, **burritos grandes** e nachos. Popular à noite." },
  { id: "deltaco", categoria: "mex", nome: "Del Taco", preco: "$", daFlorida: false, descricao: "Tacos e burritos, com **combos baratos**." },
  { id: "district", categoria: "mex", nome: "District Taco", preco: "$$", daFlorida: false, descricao: "Tacos e burritos estilo fresh, com opções de **café da manhã**." },
  { id: "pollocrazy", categoria: "mex", nome: "El Pollo Loco", preco: "$", daFlorida: false, descricao: "**Frango grelhado** estilo mexicano, em tacos e burritos." },

  { id: "publix", categoria: "subs", nome: "Publix Subs (Pub Sub)", preco: "$", daFlorida: true, descricao: "Subs dos mercados Publix, com pão assado na loja. O de **frango empanado** é clássico." },
  { id: "jmikes", categoria: "subs", nome: "Jersey Mike's", preco: "$", daFlorida: false, descricao: "Subs fatiados na hora. Peça **Mike's Way**: cebola, alface, tomate, azeite, vinagre e orégano." },
  { id: "firehouse", categoria: "subs", nome: "Firehouse Subs", preco: "$", daFlorida: false, descricao: "Subs quentes de carnes **cozidas no vapor** com queijo derretido." },
  { id: "jjohns", categoria: "subs", nome: "Jimmy John's", preco: "$", daFlorida: false, descricao: "Subs rápidos e frios. O **unwich** usa alface no lugar do pão." },
  { id: "subway", categoria: "subs", nome: "Subway", preco: "$", daFlorida: false, descricao: "Monte seu sub. Presença enorme, **preço acessível** e opções leves." },
  { id: "charleys", categoria: "subs", nome: "Charley's Grilled Subs", preco: "$", daFlorida: false, descricao: "**Cheesesteaks** na chapa, geralmente em shoppings e praças de alimentação." },

  { id: "lcaesars", categoria: "pizza", nome: "Little Caesars", preco: "$", daFlorida: false, descricao: "A mais barata: **Hot-N-Ready**, pizza pronta, sem pedir antes." },
  { id: "cicis", categoria: "pizza", nome: "Cici's Pizza", preco: "$", daFlorida: false, descricao: "**Buffet de pizza à vontade**, com massas e sobremesa. Várias unidades em Kissimmee." },
  { id: "howies", categoria: "pizza", nome: "Hungry Howie's", preco: "$", daFlorida: false, descricao: "Forte na Flórida. Pizza com massa de **sabores variados**." },
  { id: "dominos", categoria: "pizza", nome: "Domino's", preco: "$", daFlorida: false, descricao: "Entrega e retirada, com **promoções** frequentes no app." },
  { id: "papajohns", categoria: "pizza", nome: "Papa John's", preco: "$", daFlorida: false, descricao: "Pizza com **molho de alho**. Boa para entrega." },
  { id: "pizzahut", categoria: "pizza", nome: "Pizza Hut", preco: "$", daFlorida: false, descricao: "Pizza tradicional. Também faz **massas e asas**." },
  { id: "marcos", categoria: "pizza", nome: "Marco's Pizza", preco: "$", daFlorida: false, descricao: "Pizza de rede com **bons combos**, em geral para retirada." },
  { id: "murphys", categoria: "pizza", nome: "Papa Murphy's", preco: "$", daFlorida: false, descricao: "Pizza para assar em casa (take-and-bake). **Precisa de forno** na hospedagem." },

  { id: "dunkin", categoria: "cafe", nome: "Dunkin'", preco: "$", daFlorida: false, descricao: "Café, donuts e sanduíches de café da manhã. **Muito comum em Kissimmee**." },
  { id: "starbucks", categoria: "cafe", nome: "Starbucks", preco: "$$", daFlorida: false, descricao: "Cafés, **frappuccinos**, bolos e sanduíches rápidos." },
  { id: "panera", categoria: "cafe", nome: "Panera Bread", preco: "$$", daFlorida: false, descricao: "Padaria de rede: **sopas em pão**, sanduíches, saladas e bolos. Unidade em Kissimmee (N John Young Pkwy)." },
  { id: "wafflehouse", categoria: "cafe", nome: "Waffle House", preco: "$", daFlorida: false, descricao: "Diner sulista **24h**: waffles, ovos e hash browns. Unidade na Irlo Bronson Hwy." },
  { id: "ihop", categoria: "cafe", nome: "IHOP", preco: "$$", daFlorida: false, descricao: "**Panquecas** e café da manhã completo, **servido na mesa** (não é fast food)." },
  { id: "dennys", categoria: "cafe", nome: "Denny's", preco: "$$", daFlorida: false, descricao: "Diner **24h** com café da manhã o dia todo. Serviço na mesa." },
  { id: "wawa", categoria: "cafe", nome: "Wawa", preco: "$", daFlorida: false, descricao: "Conveniência com **sanduíches na hora**, café e café da manhã barato. Unidades na US-192." },
  { id: "firstwatch", categoria: "cafe", nome: "First Watch", preco: "$$", daFlorida: false, descricao: "Café da manhã e brunch com **ingredientes frescos**. Serviço na mesa." },
  { id: "einstein", categoria: "cafe", nome: "Einstein Bros. Bagels", preco: "$", daFlorida: false, descricao: "**Bagels** com cream cheese e sanduíches de café da manhã." },
  { id: "cinnabon", categoria: "cafe", nome: "Cinnabon", preco: "$", daFlorida: false, descricao: "**Rolinhos de canela**. Fica em shoppings e aeroportos." },

  { id: "cava", categoria: "fast", nome: "Cava", preco: "$$", daFlorida: false, descricao: "Mediterrâneo: bowls e pitas de **falafel**, frango ou carneiro. Boas opções veganas. Unidade em Millenia." },
  { id: "sweetgreen", categoria: "fast", nome: "Sweetgreen", preco: "$$", daFlorida: false, descricao: "**Saladas** e bowls de grãos com ingredientes sazonais. Preço mais alto." },
  { id: "justsalad", categoria: "fast", nome: "Just Salad", preco: "$$", daFlorida: false, descricao: "Saladas, bowls e wraps. **Poucas unidades** na região de Orlando." },
  { id: "panda", categoria: "fast", nome: "Panda Express", preco: "$", daFlorida: false, descricao: "Comida chinesa americanizada, em pratos de **1 a 3 itens**. Porção grande." },
  { id: "tropsmooth", categoria: "fast", nome: "Tropical Smoothie Cafe", preco: "$$", daFlorida: true, descricao: "**Smoothies**, wraps e bowls." },

  { id: "maple", categoria: "sweet", nome: "Maple Street Biscuit Company", preco: "$$", daFlorida: true, descricao: "**Biscuits** de café da manhã com frango frito e geleias." },
  { id: "4rivers", categoria: "sweet", nome: "4 Rivers Smokehouse", preco: "$$", daFlorida: true, descricao: "**BBQ texano** com unidade em Kissimmee. Não é fast food, mas é rápido." },
  { id: "portillos", categoria: "sweet", nome: "Portillo's", preco: "$$", daFlorida: false, descricao: "De Chicago: **hot dogs**, beef sandwiches e bolo de chocolate. Unidade na Palm Pkwy, perto dos parques." },
  { id: "dq", categoria: "sweet", nome: "Dairy Queen", preco: "$", daFlorida: false, descricao: "Hambúrgueres simples e o sorvete **Blizzard**." },
  { id: "ritas", categoria: "sweet", nome: "Rita's Italian Ice", preco: "$", daFlorida: false, descricao: "**Italian ice** e frozen custard. Boa para um doce depois do parque." },
  { id: "crumbl", categoria: "sweet", nome: "Crumbl Cookies", preco: "$", daFlorida: false, descricao: "**Cookies grandes** com sabores que mudam por semana." },
];
