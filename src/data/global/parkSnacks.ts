import { green, orange, type StaticGuide } from "./staticGuide";

/** Lanches para levar aos parques da Disney e da Universal. */
export const parkSnacksGuide: StaticGuide = {
  highlight: {
    id: "antes-de-ir",
    title: "Antes de ir",
    rows: [
      {
        name: "Disney World",
        tag: green("Pode levar"),
        text: "**Cooler até 24 x 15 x 18 pol** (61 x 38 x 46 cm). Só **gelo reutilizável**, sem gelo solto. Sem vidro e sem álcool. A comida não pode precisar de aquecimento.",
      },
      {
        name: "Universal",
        tag: orange("Quase nada"),
        text: "**Comida de fora consta como proibida.** Exceções: água (até 2 litros por pessoa), comida por necessidade médica ou dieta especial e comida de bebê. Cooler só mole e menor que 8,5 x 6 x 6 pol. **Confira a página oficial antes de cada dia.**",
      },
    ],
  },
  groups: [
    {
      id: "queijo",
      title: "Queijo",
      rows: [
        { name: "String cheese (Sargento ou Frigo)", text: "**Precisa de gelo.**", tag: green("Só Disney") },
        { name: "Babybel", text: "Porções individuais, **precisa de gelo**.", tag: green("Só Disney") },
      ],
    },
    {
      id: "frutas",
      title: "Frutas",
      rows: [
        { name: "Maçã, banana, uvas e clementinas", text: "**Não precisam de gelo**, servem nos dois parques." },
        { name: "Squeeze de applesauce" },
      ],
    },
    {
      id: "salgadinhos",
      title: "Salgadinhos",
      rows: [
        { name: "Goldfish e pretzels", text: "Pacotes pequenos, cabem no bolso." },
        { name: "Popcorn (Smartfood) e Triscuit" },
      ],
    },
    {
      id: "barras",
      title: "Barras e proteína",
      rows: [
        { name: "KIND, RXBAR, Clif e Quest", text: "**Proteína** para segurar a fome." },
        { name: "Beef jerky (Jack Link's)", text: "**Não estraga no calor.**" },
      ],
    },
    {
      id: "mix",
      title: "Mix e pasta",
      rows: [
        { name: "Trail mix e amendoim" },
        { name: "Sachês de pasta de amendoim (Justin's)", text: "Combinam com maçã e banana." },
      ],
    },
    {
      id: "calor",
      title: "Calor",
      rows: [
        {
          name: "Sachês de eletrólito (Liquid I.V.)",
          text: "Para misturar na **água**, que é a bebida garantida nos dois parques.",
        },
      ],
    },
  ],
  footer:
    '**Walmart** costuma ser mais barato. **Publix** tem promoções "compre 1, leve 2". Regras de parque podem mudar sem aviso.',
};
