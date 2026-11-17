// Bloco "Chegada e estacionamento" do cartão "Horários e trajeto". A chave de cada parque é o `parkId` da trilha.
// `**` marca negrito, como nos demais textos dos dados.
import type { Estacionamento, ValorEstacionamento } from "../types";

const CONFERIDO_EM = "2026-11-17";

/** Valores e dicas comuns aos parques da Disney (um pagamento vale para os 4 parques no mesmo dia). */
const disney: { valores: ValorEstacionamento[]; dicas: string[]; fonte: string } = {
  valores: [
    { rotulo: "Padrão", valor: "**US$ 35**/dia" },
    { rotulo: "Preferred (mais perto)", valor: "**US$ 50 a 60**/dia, varia por data" },
    { rotulo: "Hóspede de resort", valor: "padrão grátis" },
  ],
  dicas: [
    "O pagamento vale **para os 4 parques no mesmo dia**: não paga de novo ao trocar de parque.",
    "Aceitam dinheiro, cartão, Apple Pay e Google Pay.",
    "O tram é gratuito e leva do estacionamento até a entrada.",
    "Vagas de acessibilidade ficam perto das entradas; peça ao atendente.",
  ],
  // REVISAR: o preço de 2026 pode ter subido; conferir no site oficial da Disney.
  fonte: "Magic Guides (página atualizada em 8/out/2025)",
};

/** Universal Studios Florida e Islands of Adventure usam a mesma garagem (North Campus, que também serve CityWalk e Volcano Bay). */
const universal: Omit<Estacionamento, "id" | "nome"> = {
  endereco: "6000 Universal Blvd, Orlando, FL 32819",
  valores: [
    { rotulo: "Padrão", valor: "**US$ 35**/dia (pré-pago online pode sair por US$ 32)" },
    { rotulo: "Prime (mais perto)", valor: "**US$ 50 a 60**/dia" },
    { rotulo: "Upgrade para Prime", valor: "US$ 14 a 25" },
    { rotulo: "Depois das 18h", valor: "**grátis** (autoestacionamento)" },
  ],
  comoChegar: "Da garagem, siga a pé pelo **CityWalk**; esteiras rolantes cobrem boa parte do caminho.",
  meio: "a-pe",
  dicas: [
    "**Grátis depois das 18h**, exceto noites de Halloween Horror Nights, 31/dez e Epic Universe.",
    "Guarde o recibo ou o QR code: a **reentrada no mesmo dia** está incluída.",
    "Vagas Prime ficam mais perto das saídas da garagem.",
  ],
  conferidoEm: CONFERIDO_EM,
  // REVISAR: o valor pré-pago de US$ 32 vem de uma fonte; o site oficial não mostra desconto.
  fonte: "Site oficial da Universal e Magic Guides (jul/2026)",
};

const disneyPark = (id: string, nome: string, endereco: string, comoChegar: string): Estacionamento => ({
  id,
  nome,
  endereco,
  valores: disney.valores,
  comoChegar,
  meio: "tram",
  dicas: disney.dicas,
  conferidoEm: CONFERIDO_EM,
  fonte: disney.fonte,
});

export const estacionamentos: Record<string, Estacionamento> = {
  // REVISAR: os endereços dos três parques da Disney não foram confirmados na pesquisa.
  "magic-kingdom": disneyPark(
    "magic-kingdom",
    "Magic Kingdom",
    "1180 Seven Seas Dr, Lake Buena Vista, FL 32836",
    "Do estacionamento, **tram** até o Ticket and Transportation Center; de lá, **monorail** ou balsa até a entrada.",
  ),
  epcot: disneyPark("epcot", "EPCOT", "200 Epcot Center Dr, Lake Buena Vista, FL 32821", "Do estacionamento, **tram** gratuito até a entrada."),
  "hollywood-studios": disneyPark(
    "hollywood-studios",
    "Hollywood Studios",
    "351 S Studio Dr, Lake Buena Vista, FL 32830",
    "Do estacionamento, **tram** gratuito até a entrada.",
  ),
  "universal-studios-florida": { id: "universal-studios-florida", nome: "Universal Studios Florida", ...universal },
  "islands-of-adventure": { id: "islands-of-adventure", nome: "Islands of Adventure", ...universal },
  "epic-universe": {
    id: "epic-universe",
    nome: "Epic Universe",
    endereco: "1001 Epic Blvd, Orlando, FL 32819",
    valores: [
      { rotulo: "Padrão", valor: "**US$ 32**/dia" },
      { rotulo: "Prime", valor: "**US$ 50**/dia" },
      { rotulo: "Depois das 18h", valor: "**não é grátis** no Epic" },
    ],
    comoChegar: "Do estacionamento até a entrada: **5 a 7 min** a pé.",
    meio: "a-pe",
    dicas: [
      "O estacionamento do Epic fica **separado** das garagens do CityWalk e dos outros parques; use o endereço do Epic no GPS.",
      "A promoção de **grátis depois das 18h não vale** para o Epic Universe.",
      "Pela I-4 no sentido oeste, saia na Kirkman Rd/International Dr e siga as placas da Universal.",
    ],
    conferidoEm: CONFERIDO_EM,
    // REVISAR: o preço de US$ 32 vem de 2025; conferir.
    fonte: "WFTV (22/mai/2025) e site oficial da Universal",
  },
  "busch-gardens-tampa": {
    id: "busch-gardens-tampa",
    nome: "Busch Gardens Tampa Bay",
    // REVISAR: endereço não confirmado na pesquisa.
    endereco: "10165 N McKinley Dr, Tampa, FL 33612",
    // REVISAR: dado do site oficial citado em matéria de fev/2024; outras fontes de 2026 variam de US$ 22 a 40. Confirmar no site.
    valores: [
      { rotulo: "Geral", valor: "~**US$ 30**/dia" },
      { rotulo: "Preferred (mais perto)", valor: "~**US$ 35**/dia" },
    ],
    // REVISAR: como chegar ao parque não foi encontrado; não inventar.
    comoChegar: null,
    meio: "a-pe",
    dicas: [
      "**Chegar cedo** ajuda a evitar fila no pagamento e aumento por evento.",
      "Alguns pacotes de ingresso **incluem estacionamento**: conferir antes de pagar.",
    ],
    conferidoEm: CONFERIDO_EM,
    // REVISAR: fonte não informada; valores de matéria de fev/2024 (site oficial), outras fontes divergem.
    fonte: "Site oficial do parque, citado em matéria de fev/2024",
  },
};
