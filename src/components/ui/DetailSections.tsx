import type { DetailSection, SectionColor } from "../../types";

const pillClasses: Record<SectionColor, string> = {
  navy: "bg-[#e3e2dc] text-ink",
  gold: "bg-gold-tint text-[#6b4a0b]",
  citrus: "bg-citrus-tint text-citrus-text",
  palm: "bg-palm-tint text-[#1f5a40]",
  attn: "bg-alert-bg text-emergency",
};

/** Uma caixa por seção, com o título em pílula colorida; listas viram linhas com marcador. */
export function DetailSections({ sections }: { sections: DetailSection[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      {sections.map((section) => (
        <section key={section.title} className="rounded-xl bg-paper-inset p-3">
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${pillClasses[section.color]}`}>
            {section.title}
          </span>
          <p className="mt-2 whitespace-pre-line text-sm leading-normal text-ink">{sectionText(section)}</p>
        </section>
      ))}
    </div>
  );
}

function sectionText({ paragraphs = [], list = [] }: DetailSection): string {
  const bullets = list.map((entry) => `• ${entry}`);
  return [...paragraphs, ...bullets].join("\n");
}
