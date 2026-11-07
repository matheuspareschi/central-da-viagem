import { iconComponents } from "../data/presentation/iconRegistry";
import type { IconName } from "../types";

export function DayIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = iconComponents[name];
  return <Icon className={className} />;
}
