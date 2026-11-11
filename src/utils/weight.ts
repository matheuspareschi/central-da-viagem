const KILOGRAMS_PER_POUND = 0.45359237;
const MAX_FRACTION_DIGITS = 2;

export const lbParaKg = (pounds: number): number => pounds * KILOGRAMS_PER_POUND;
export const kgParaLb = (kilograms: number): number => kilograms / KILOGRAMS_PER_POUND;

/** Aceita vírgula ou ponto como separador decimal; texto vazio ou inválido vira `undefined`. */
export function parseDecimal(text: string): number | undefined {
  const normalized = text.trim().replace(",", ".");
  if (!/^(\d+\.?\d*|\.\d+)$/.test(normalized)) return undefined;
  const value = Number(normalized);
  return Number.isFinite(value) ? value : undefined;
}

/** Até 2 casas, vírgula decimal, sem zeros sobrando (ex.: 22,68 · 50). */
export function formatDecimal(value: number): string {
  return String(Number(value.toFixed(MAX_FRACTION_DIGITS))).replace(".", ",");
}

/** Converte o que foi digitado; campo vazio ou inválido resulta em texto vazio. */
export function convertTyped(text: string, convert: (value: number) => number): string {
  const value = parseDecimal(text);
  return value === undefined ? "" : formatDecimal(convert(value));
}
