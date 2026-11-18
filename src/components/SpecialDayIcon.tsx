import type { IconName } from "../types";
import { DayIcon } from "./icons";

/** Ícone vermelho de um dia especial (`DayData.specialIcon`), no lugar do ícone da categoria. */
export function SpecialDayIcon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <span className="text-emergency">
      <DayIcon name={name} className={className} />
    </span>
  );
}
