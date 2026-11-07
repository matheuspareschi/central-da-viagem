import { CategoryIcon } from "../../../components";
import { categoryStyles } from "../../../data/presentation/categoryStyles";
import type { DayCategory } from "../../../types";

interface TrackHeaderProps {
  title: string;
  category?: DayCategory;
  group?: string;
  summary: string;
}

export function TrackHeader({ title, category, group, summary }: TrackHeaderProps) {
  return (
    <header className="mt-5">
      <div className="flex items-center gap-3">
        {category && (
          <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${categoryStyles[category].badge}`}>
            <CategoryIcon category={category} className="h-6 w-6" />
          </span>
        )}
        <h2 className="font-serif text-[32px] font-bold leading-tight text-ink">{title}</h2>
      </div>
      {group && <p className="mt-2 text-sm font-semibold text-ink-soft">{group}</p>}
      <p className="mt-2 text-[15px] leading-normal text-ink-soft">{summary}</p>
    </header>
  );
}
