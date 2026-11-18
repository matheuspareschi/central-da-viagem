import { RichText } from "../../components";
import type { GuideGroup, GuideRow, GuideTag, GuideTagTone, StaticGuide } from "../../data/global/staticGuide";

const tagToneClasses: Record<GuideTagTone, string> = {
  green: "bg-palm-tint text-[#1f5a40]",
  orange: "bg-citrus-tint text-citrus-text",
};

/** Cartões por grupo, sempre abertos, com cartão de destaque opcional e rodapé. */
export function StaticGuideView({ guide }: { guide: StaticGuide }) {
  return (
    <div className="space-y-4">
      {guide.highlight && <GroupCard group={guide.highlight} isHighlighted />}
      {guide.groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
      <p className="text-xs text-ink-soft">
        <RichText text={guide.footer} />
      </p>
    </div>
  );
}

function GroupCard({ group, isHighlighted }: { group: GuideGroup; isHighlighted?: boolean }) {
  const cardClasses = isHighlighted ? "border-gold/50 bg-gold-tint/40" : "border-line bg-cardbg";

  return (
    <section className={`rounded-[20px] border p-[18px] ${cardClasses}`}>
      <h2 className="font-serif text-lg font-bold leading-tight text-ink">{group.title}</h2>
      <ul className="mt-2">
        {group.rows.map((row) => (
          <RowItem key={row.name} row={row} />
        ))}
      </ul>
    </section>
  );
}

function RowItem({ row }: { row: GuideRow }) {
  return (
    <li className="border-b border-dashed border-line py-2.5 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <h3 className="text-[15px] font-semibold text-ink [overflow-wrap:anywhere]">{row.name}</h3>
        {row.tag && <TagPill tag={row.tag} />}
      </div>
      {row.text && (
        <p className="mt-0.5 text-sm leading-snug text-ink-soft [overflow-wrap:anywhere]">
          <RichText text={row.text} />
        </p>
      )}
    </li>
  );
}

function TagPill({ tag }: { tag: GuideTag }) {
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ring-current/20 ${tagToneClasses[tag.tone]}`}>{tag.label}</span>;
}
