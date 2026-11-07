import { DayIcon } from "../icons";
import { RichText } from "./RichText";
import type { DetailSection } from "../../types";

const colorClasses: Record<DetailSection["color"], string> = {
  navy: "bg-ink/8 text-ink",
  citrus: "bg-citrus/12 text-citrus-dark",
  palm: "bg-palm/12 text-palm",
  gold: "bg-gold/18 text-gold-dark",
  attn: "bg-citrus/15 text-citrus-dark",
};

export function SectionCard({ section }: { section: DetailSection }) {
  return (
    <div className="mb-3.5 rounded-xl bg-paper p-4">
      <span
        className={`mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${colorClasses[section.color]}`}
      >
        <DayIcon name={section.icon} className="h-3.5 w-3.5" />
        {section.title}
      </span>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="mb-2 text-[13.8px] leading-relaxed text-ink-soft last:mb-0">
          <RichText text={p} />
        </p>
      ))}
      {section.list && (
        <ul className="list-disc space-y-1 pl-[18px] text-[13.8px] leading-relaxed text-ink-soft">
          {section.list.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
