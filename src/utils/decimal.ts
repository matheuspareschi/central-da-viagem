const MAX_FRACTION_DIGITS = 2;

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

/** Sempre 2 casas, vírgula decimal (ex.: 60,00). */
export function formatFixedDecimal(value: number): string {
  return value.toFixed(MAX_FRACTION_DIGITS).replace(".", ",");
}
