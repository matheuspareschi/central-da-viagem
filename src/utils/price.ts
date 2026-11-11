import { parseDecimal } from "./decimal";

export interface PriceInput {
  /** Preço de etiqueta, em dólares. */
  preco: number;
  /** Primeiro desconto, em %. */
  d1: number;
  /** Desconto extra, em %, aplicado sobre o preço já reduzido. */
  d2: number;
  /** Imposto de venda da loja, em %, cobrado sobre o preço com desconto. */
  imposto: number;
}

export interface PriceBreakdown {
  original: number;
  savings: number;
  savingsPercent: number;
  discounted: number;
  tax: number;
  total: number;
}

const PERCENT_BASE = 100;

const roundToCents = (value: number): number => Math.round((value + Number.EPSILON) * 100) / 100;

/** Desconto primeiro (o extra vale sobre o já reduzido), imposto depois, sobre o preço com desconto. */
export function calcularPreco({ preco, d1, d2, imposto }: PriceInput): PriceBreakdown {
  const remainingShare = (1 - d1 / PERCENT_BASE) * (1 - d2 / PERCENT_BASE);
  const discounted = roundToCents(preco * remainingShare);
  const tax = roundToCents((discounted * imposto) / PERCENT_BASE);
  return {
    original: roundToCents(preco),
    savings: roundToCents(preco - discounted),
    savingsPercent: (1 - remainingShare) * PERCENT_BASE,
    discounted,
    tax,
    total: roundToCents(discounted + tax),
  };
}

export type PercentReading = { kind: "value"; value: number } | { kind: "invalid" };

/** Campo vazio vale 0; texto que não é número ou fora de 0–100 é inválido. */
export function readPercent(text: string): PercentReading {
  if (text.trim() === "") return { kind: "value", value: 0 };
  const value = parseDecimal(text);
  return value !== undefined && value <= PERCENT_BASE ? { kind: "value", value } : { kind: "invalid" };
}
