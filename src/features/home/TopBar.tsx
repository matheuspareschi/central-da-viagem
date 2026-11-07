import { Sun } from "lucide-react";
import { tripBadge } from "../../data/global/contacts";

export function TopBar() {
  return (
    <header className="flex h-14 items-center gap-2.5">
      <Sun className="h-[26px] w-[26px] shrink-0 text-citrus" strokeWidth={1.8} aria-hidden="true" />
      <div className="flex flex-col gap-0.5">
        <h1 className="font-serif text-[22px] font-bold leading-[1.1] tracking-tight text-ink">Flórida 2026</h1>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">{tripBadge}</p>
      </div>
    </header>
  );
}
