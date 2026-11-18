import { green, type GuideGroup, type GuideRow, type StaticGuide } from "./staticGuide";

type FreeRow = Pick<GuideRow, "name" | "text">;

function freeGroup(id: string, title: string, rows: FreeRow[]): GuideGroup {
  return { id, title, rows: rows.map((row) => ({ ...row, tag: green("Grátis") })) };
}

/** Passeios gratuitos em Kissimmee. */
export const kissimmeeActivitiesGuide: StaticGuide = {
  groups: [
    freeGroup("parques", "Parques e natureza", [
      {
        name: "Kissimmee Lakefront Park",
        text: "Parque no lago Toho, com pavilhões, parquinhos, píer de pesca, splash pad e calçadões. Bom para **pôr do sol**.",
      },
      { name: "Shingle Creek Regional Park", text: "Trilhas, caiaque e cabeceira dos Everglades. Leve **água e repelente**." },
      { name: "St. Cloud Lakefront Park", text: "Mini farol e calçadão iluminado **depois do pôr do sol**, no lago East Toho." },
    ]),
    freeGroup("monumentos", "Monumentos e história", [
      { name: "Monument of States", text: "Monumento de **50 pés** feito com pedras de todos os estados. Fica no Lakefront Park." },
      { name: "Bataan-Corregidor Memorial", text: "A poucos passos do Lakefront Park, combina com a visita ao monumento." },
      { name: "Osceola County Courthouse", text: "Tribunal histórico no centro, o **mais antigo ainda em uso** na Flórida." },
    ]),
    freeGroup("centro", "Centro histórico", [
      { name: "Murais e passeio pela Main Street", text: "Caminhada curta entre murais, lojas e cafés." },
      { name: "Lanier's Historic Downtown Marketplace", text: "Mercado de antiguidades. Dá para **olhar sem comprar**." },
    ]),
    freeGroup("noite", "À noite", [
      {
        name: "Old Town",
        text: "Shows de carros: **sábado** é o principal (show às **13h**, desfile às **20h30**). Qua 20h, sex 20h30, dom 19h.",
      },
    ]),
  ],
  footer: "Parques da cidade abrem do **nascer ao pôr do sol**. Confirme os horários antes de ir.",
};
