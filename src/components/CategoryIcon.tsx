import type { DayCategory } from "../types";
import { categoryStyles } from "../data/presentation/categoryStyles";

export function CategoryIcon({ category, className = "h-5 w-5" }: { category: DayCategory; className?: string }) {
  const { icon: Icon, iconColor } = categoryStyles[category];
  return <Icon className={`${className} ${iconColor}`} strokeWidth={1.9} aria-hidden="true" />;
}
