export interface TextSegment {
  text: string;
  isBold: boolean;
}

const BOLD_MARK = /\*\*(.+?)\*\*/g;
const BOLD_DELIMITER = "**";

/** Divide o texto em trechos normais e em negrito (`**assim**`); marcação sem fechamento fica como texto normal. */
export function parseRichText(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let cursor = 0;
  for (const match of text.matchAll(BOLD_MARK)) {
    if (match.index > cursor) segments.push({ text: text.slice(cursor, match.index), isBold: false });
    segments.push({ text: match[1], isBold: true });
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor), isBold: false });
  return segments;
}

/** Há um `**` que não fecha (ou que não tem nada dentro). */
export function hasUnclosedBoldMark(text: string): boolean {
  return text.replace(BOLD_MARK, "$1").includes(BOLD_DELIMITER);
}

/** Fração do texto (sem as marcações) que está em negrito, de 0 a 1. */
export function boldShare(text: string): number {
  const segments = parseRichText(text);
  const total = segments.reduce((sum, { text: part }) => sum + part.length, 0);
  const bold = segments.filter((segment) => segment.isBold).reduce((sum, { text: part }) => sum + part.length, 0);
  return total === 0 ? 0 : bold / total;
}
