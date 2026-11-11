import assert from "node:assert/strict";
import { formatDecimal, formatFixedDecimal, parseDecimal } from "../src/utils/decimal.ts";
import { calcularPreco, readPercent } from "../src/utils/price.ts";
import { convertTyped, kgParaLb, lbParaKg } from "../src/utils/weight.ts";

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
