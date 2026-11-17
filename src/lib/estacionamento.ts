const GRATIS = /gr[aá]tis/i;
const NEGATION = /\bn[aã]o\b/i;

/** "grátis" sem negação: "não é grátis" não conta como valor gratuito. */
export const isGratis = (valor: string): boolean => GRATIS.test(valor) && !NEGATION.test(valor);

/** "2026-11-17" → "17/11/2026". */
export function formatCheckedDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}
