
export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}


export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function parseISODate(dateISO: string): Date {
  const [year, month, day] = dateISO.split("-").map(Number);
  return new Date(year, month - 1, day);
}

/** Ex.: "sábado · 19 de dezembro" — o dia da semana vem da data, nunca digitado à mão. */
export function formatCardDate(dateISO: string): string {
  const date = parseISODate(dateISO);
  const weekday = date.toLocaleDateString("pt-BR", { weekday: "long" }).replace("-feira", "");
  const month = date.toLocaleDateString("pt-BR", { month: "long" });
  return `${weekday} · ${date.getDate()} de ${month}`;
}

/** Ex.: "SÁB" — o dia da semana vem da data, nunca digitado à mão. */
export function formatWeekdayAbbreviation(dateISO: string): string {
  return parseISODate(dateISO).toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "").toUpperCase();
}
