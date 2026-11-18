import assert from "node:assert/strict";
import { allTollSteps, tollStages } from "../src/data/pedagio.ts";
import day18 from "../src/data/days/2026-12-18.ts";
import day10 from "../src/data/days/2026-12-10.ts";
import day16 from "../src/data/days/2026-12-16.ts";
import { toDayEntry } from "../src/lib/parkChecklist.ts";
import { describeParkingChoice, describeParkingOption, findChosenParking } from "../src/lib/parkingOptions.ts";
import { formatPeriodRange } from "../src/lib/schedule.ts";
import { isGratis } from "../src/lib/estacionamento.ts";
import { estacionamentos } from "../src/data/estacionamentos.ts";
import type { ChecklistItem, ParkAttraction } from "../src/types";
import { boldShare, hasUnclosedBoldMark, parseRichText } from "../src/lib/richText.ts";
import { lanchesCategories, lanchesChains } from "../src/data/global/lanches.ts";
import { countFavorites, formatFavoritesCount, groupByCategory, pickChains } from "../src/lib/lanches.ts";
import { applyOption, findOption, optionQuestion } from "../src/lib/dayOption.ts";
import { formatDecimal, formatFixedDecimal, parseDecimal } from "../src/utils/decimal.ts";
import { calcularPreco, readPercent } from "../src/utils/price.ts";
import { convertTyped, kgParaLb, lbParaKg } from "../src/utils/weight.ts";

const areas = [{ key: "a", label: "Área" }];
const attraction = (name: string, type: string, description: string): ParkAttraction =>
  ({ id: name, parkId: "p", area: "a", name, type, kind: "attraction", description });
const item = (sections: ChecklistItem["sections"] = []): ChecklistItem => ({ id: "i", name: "Item", icon: "target", sections });

const tests: Array<[string, () => void]> = [
  ["1 lb → 0,45 kg", () => assert.equal(convertTyped("1", lbParaKg), "0,45")],
  ["22,68 kg → 50 lb", () => assert.equal(convertTyped("22,68", kgParaLb), "50")],
  ["aceita ponto e vírgula", () => assert.equal(parseDecimal("1.5"), parseDecimal("1,5"))],
  ["vazio e inválido limpam, sem NaN", () => {
    for (const text of ["", "  ", "abc", "-3", "1,2,3"]) assert.equal(convertTyped(text, lbParaKg), "");
  }],
  ["formatDecimal sem zeros sobrando", () => assert.equal(formatDecimal(22.7), "22,7")],
  ["formatFixedDecimal sempre 2 casas", () => assert.equal(formatFixedDecimal(60), "60,00")],
  ["100 com 20% + 25% extra → subtotal 60,00", () => {
    assert.equal(calcularPreco({ preco: 100, d1: 20, d2: 25, imposto: 0 }).discounted, 60);
  }],
  ["6,5% de imposto → imposto 3,90 e total 63,90", () => {
    const result = calcularPreco({ preco: 100, d1: 20, d2: 25, imposto: 6.5 });
    assert.equal(result.tax, 3.9);
    assert.equal(result.total, 63.9);
  }],
  ["economia total é 40% e US$ 40,00", () => {
    const result = calcularPreco({ preco: 100, d1: 20, d2: 25, imposto: 0 });
    assert.equal(result.savings, 40);
    assert.ok(Math.abs(result.savingsPercent - 40) < 1e-9);
  }],
  ["sem desconto nem imposto, total é o preço", () => {
    assert.equal(calcularPreco({ preco: 19.99, d1: 0, d2: 0, imposto: 0 }).total, 19.99);
  }],
  ["percentual vazio vale 0", () => assert.deepEqual(readPercent(""), { kind: "value", value: 0 })],
  ["percentual fora de 0–100 ou inválido é inválido", () => {
    for (const text of ["101", "-1", "abc"]) assert.deepEqual(readPercent(text), { kind: "invalid" });
  }],
  ["percentual 100 é válido", () => assert.deepEqual(readPercent("100"), { kind: "value", value: 100 })],
  ["pedágio: 3 etapas, 6 passos, ids únicos e sem campo vazio", () => {
    assert.equal(tollStages.length, 3);
    assert.equal(allTollSteps.length, 6);
    assert.equal(new Set(allTollSteps.map((step) => step.id)).size, 6);
    assert.deepEqual(allTollSteps.map((step) => step.id), [1, 2, 3, 4, 5, 6].map((n) => `pedagio-${n}`));
    for (const step of allTollSteps) assert.ok(step.titulo.trim() && step.texto.trim() && (step.dica === undefined || step.dica.trim()));
    for (const stage of tollStages) assert.ok(stage.titulo.trim() && stage.passos.length > 0);
  }],
  ["pergunta da escolha: hoje, futuro e passado", () => {
    assert.equal(optionQuestion("2026-12-18", "2026-12-18"), "Hoje você vai seguir qual roteiro?");
    assert.equal(optionQuestion("2026-12-19", "2026-12-18"), "Qual roteiro você quer seguir neste dia?");
    assert.equal(optionQuestion("2026-12-17", "2026-12-18"), "Qual roteiro você fez neste dia?");
  }],
  ["dia 18: só o Islands, sem opções de roteiro", () => {
    assert.equal("options" in day18, false);
    assert.equal(day18.itinerary.kind, "checklist");
    assert.equal(day18.category, "parque");
  }],
  ["dia 10: escolher uma opção deixa só a trilha dela", () => {
    const option = findOption(day10, "daily-dealz-outlet-e-islands");
    assert.ok(option);
    const day = applyOption(day10, option);
    assert.deepEqual(day.itinerary?.kind === "split" && day.itinerary.tracks.map((track) => track.key), ["daily-dealz-outlet-e-islands"]);
    assert.equal(day.category, "compras");
    assert.equal(day.split, undefined);
  }],
  ["dia 16: cada opção é um roteiro único, com a mesma manhã e o jantar no Outlet à tarde", () => {
    const keysOf = (id: string) => day16.options.find((option) => option.id === id)?.trackKeys;
    assert.deepEqual(keysOf("noite-do-jogo"), ["noite-jogo"]);
    assert.deepEqual(keysOf("noite-de-natal"), ["noite-natal"]);
    const periodsOf = (key: string) => day16.itinerary.tracks.find((track) => track.key === key)?.periods;
    assert.deepEqual(periodsOf("noite-jogo")?.[0], periodsOf("noite-natal")?.[0]);
    for (const key of ["noite-jogo", "noite-natal"]) {
      const afternoon = periodsOf(key)?.[1];
      assert.equal(afternoon?.title, "Tarde");
      assert.equal(afternoon?.steps[0].kind === "stop" && afternoon.steps[0].name, "Jantar no Outlet");
    }
  }],
  ["dia 16: o estacionamento do jogo tem opções para escolher e o da noite de Natal é a Administration Garage", () => {
    const cardsOf = (key: string) => day16.itinerary.tracks.find((track) => track.key === key)?.cards ?? [];
    const options = cardsOf("noite-jogo").find((card) => card.id === "parking-game")?.parkingOptions;
    assert.equal(options?.length, 5);
    assert.equal(new Set(options?.map((option) => option.id)).size, 5);
    assert.ok(cardsOf("noite-natal").some((card) => card.id === "administration-garage"));
    assert.ok(!cardsOf("noite-jogo").some((card) => card.id === "administration-garage"));
  }],
  ["estacionamento: escolha do cartão mostra o nome; sem escolha, convida a escolher", () => {
    const option = { id: "a", name: "Garagem A", address: "x", walk: "5 min a pé", price: "**US$ 10**", details: "d" };
    assert.equal(findChosenParking([option], "a"), option);
    assert.equal(findChosenParking([option], null), undefined);
    assert.equal(describeParkingChoice(option), "Escolhido: Garagem A");
    assert.equal(describeParkingChoice(undefined), "Toque para escolher onde estacionar");
    assert.equal(describeParkingOption(option), "5 min a pé · US$ 10");
  }],
  ["negrito: 'a **b** c' vira três trechos", () => {
    assert.deepEqual(parseRichText("a **b** c"), [
      { text: "a ", isBold: false },
      { text: "b", isBold: true },
      { text: " c", isBold: false },
    ]);
  }],
  ["negrito: marcação sem fechamento fica como texto normal", () => {
    assert.deepEqual(parseRichText("a **b"), [{ text: "a **b", isBold: false }]);
    assert.equal(hasUnclosedBoldMark("a **b"), true);
    assert.equal(hasUnclosedBoldMark("a **b** c"), false);
  }],
  ["negrito: texto vazio ou sem marcação não quebra", () => {
    assert.deepEqual(parseRichText(""), []);
    assert.deepEqual(parseRichText("sem marcas"), [{ text: "sem marcas", isBold: false }]);
    assert.equal(boldShare(""), 0);
  }],
  ["negrito: fração em negrito", () => assert.equal(boldShare("**ab** cde"), 2 / 6)],
  ["checklist: atração ligada mostra categoria e curiosidades", () => {
    const entry = toDayEntry(item(), [attraction("Hulk", "Montanha-Russa", "Rápida.")], areas);
    assert.equal(entry.subtitle, "Área · Montanha-Russa");
    assert.deepEqual(entry.sections.map((section) => [section.title, section.paragraphs]), [["Curiosidades", ["Rápida."]]]);
  }],
  ["checklist: item com várias atrações lista todas", () => {
    const entry = toDayEntry(item(), [attraction("A", "Tipo 1", "d1"), attraction("B", "Tipo 2", "d2")], areas);
    assert.equal(entry.subtitle, "Área · Tipo 1 + Tipo 2");
    assert.deepEqual(entry.sections[0].paragraphs, ["**A:** d1", "**B:** d2"]);
  }],
  ["checklist: junta a descrição do catálogo às Curiosidades do dia", () => {
    const own = { color: "palm" as const, icon: "camera" as const, title: "Curiosidades", paragraphs: ["própria"] };
    const sections = toDayEntry(item([own]), [attraction("A", "T", "d")], areas).sections;
    assert.equal(sections.length, 1);
    assert.deepEqual(sections[0].paragraphs, ["própria", "d"]);
  }],
  ["checklist: dica do catálogo só entra quando o item do dia não tem a sua", () => {
    const withTip = { ...attraction("A", "T", "d"), tip: "dica do catálogo" };
    const own = { color: "gold" as const, icon: "lightbulb" as const, title: "Dica", paragraphs: ["dica do dia"] };
    assert.deepEqual(toDayEntry(item(), [withTip], areas).sections.map((section) => section.title), ["Curiosidades", "Dica"]);
    assert.deepEqual(toDayEntry(item([own]), [withTip], areas).sections.filter((section) => section.title === "Dica"), [own]);
  }],
  ["checklist: sem ligação não ganha subtítulo nem seção", () => {
    const entry = toDayEntry(item(), [], areas);
    assert.equal(entry.subtitle, undefined);
    assert.deepEqual(entry.sections, []);
  }],
  ["estacionamento: grátis em verde, mas não quando negado", () => {
    assert.equal(isGratis("padrão grátis"), true);
    assert.equal(isGratis("**grátis** (autoestacionamento)"), true);
    assert.equal(isGratis("**não é grátis** no Epic"), false);
    assert.equal(isGratis("**US$ 35**/dia"), false);
  }],
  ["estacionamento: todos os parques têm id igual à chave e a data é ISO", () => {
    for (const [key, parking] of Object.entries(estacionamentos)) {
      assert.equal(parking.id, key);
      assert.match(parking.conferidoEm, /^\d{4}-\d{2}-\d{2}$/);
    }
  }],
  ["período: a faixa de horário ignora passos 'A definir'", () => {
    const stop = (time: string) => ({ kind: "stop" as const, time, stopId: "x", name: "x", icon: "bag" as const });
    assert.equal(formatPeriodRange({ title: "Manhã", steps: [stop("09:25"), stop("10:00"), stop("A definir")] }), "09:25 – 10:00");
    assert.equal(formatPeriodRange({ title: "Manhã", steps: [stop("A definir")] }), "A definir");
  }],
  ["lanches: 8 categorias, 67 redes, todas em uma categoria existente", () => {
    assert.equal(lanchesCategories.length, 8);
    assert.equal(lanchesChains.length, 67);
    const groups = groupByCategory(lanchesChains, lanchesCategories);
    assert.equal(groups.reduce((total, group) => total + group.chains.length, 0), lanchesChains.length);
  }],
  ["lanches: filtro favoritos e categoria; sem favoritas fica vazio", () => {
    const favorites = new Set(["mcd", "cfa", "id-antigo"]);
    assert.deepEqual(pickChains(lanchesChains, "favoritos", favorites).map((chain) => chain.id), ["mcd", "cfa"]);
    assert.equal(pickChains(lanchesChains, "favoritos", new Set()).length, 0);
    assert.equal(pickChains(lanchesChains, "pizza", favorites).length, 8);
    assert.equal(pickChains(lanchesChains, "todos", favorites).length, lanchesChains.length);
    assert.equal(countFavorites(lanchesChains, favorites), 2);
  }],
  ["lanches: contador no singular e no plural", () => {
    assert.deepEqual([0, 1, 2].map(formatFavoritesCount), ["0 favoritos", "1 favorito", "2 favoritos"]);
  }],
  ["nenhum resultado vira NaN", () => {
    const result = calcularPreco({ preco: 0, d1: 100, d2: 100, imposto: 100 });
    for (const value of Object.values(result)) assert.ok(Number.isFinite(value));
  }],
];

const failures = tests.flatMap(([name, run]) => {
  try {
    run();
    return [];
  } catch (error) {
    return [`${name}: ${(error as Error).message}`];
  }
});

if (failures.length > 0) {
  console.error(`testar:funcoes falhou (${failures.length}):\n${failures.map((failure) => `  - ${failure}`).join("\n")}`);
  process.exit(1);
}
console.log(`testar:funcoes ok (${tests.length} testes)`);
