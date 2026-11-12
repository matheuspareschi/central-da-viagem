import { parseRichText } from "../../lib/richText";

/** Texto de conteúdo dos dados: `**trecho**` vira negrito; o resto segue igual. Use sempre que mostrar texto vindo dos dados. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {parseRichText(text).map(({ text: part, isBold }, index) =>
        isBold ? <strong key={index} className="font-bold">{part}</strong> : part,
      )}
    </>
  );
}
