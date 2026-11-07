import { iconBadgeClasses } from "../../data/presentation/iconRegistry";
import type { IconName } from "../../types";
import { DayIcon } from "../icons";

/** Círculo de 34px com o ícone da linha ou da parada. */
export function IconBadge({ name }: { name: IconName }) {
  const { bg, text } = iconBadgeClasses[name];
  return (
    <span className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${bg} ${text}`}>
      <DayIcon name={name} className="h-[18px] w-[18px]" />
    </span>
  );
}
