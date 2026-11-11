import { formatDecimal, parseDecimal } from "./decimal";

const KILOGRAMS_PER_POUND = 0.45359237;

export const lbParaKg = (pounds: number): number => pounds * KILOGRAMS_PER_POUND;
export const kgParaLb = (kilograms: number): number => kilograms / KILOGRAMS_PER_POUND;

/** Converte o que foi digitado; campo vazio ou inválido resulta em texto vazio. */
export function convertTyped(text: string, convert: (value: number) => number): string {
  const value = parseDecimal(text);
  return value === undefined ? "" : formatDecimal(convert(value));
}
