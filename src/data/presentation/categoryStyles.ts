import { Sparkles, ShoppingBag, Landmark } from "lucide-react";
import type { DayCategory } from "../../types";

export const categoryStyles: Record<
  DayCategory,
  { border: string; tint: string; iconColor: string; badge: string; hex: string; label: string; icon: typeof Sparkles }
> = {
  parque: {
    border: "border-l-citrus",
    tint: "bg-citrus/8",
    iconColor: "text-citrus",
    badge: "bg-citrus-tint",
    hex: "#c1481f",
    label: "Parque",
    icon: Sparkles,
  },
  compras: {
    border: "border-l-palm",
    tint: "bg-palm/8",
    iconColor: "text-palm",
    badge: "bg-palm-tint",
    hex: "#2f6b4f",
    label: "Compras",
    icon: ShoppingBag,
  },
  turismo: {
    border: "border-l-gold",
    tint: "bg-gold/12",
    iconColor: "text-tourism-icon",
    badge: "bg-gold-tint",
    hex: "#d9a441",
    label: "Turismo/Cidade",
    icon: Landmark,
  },
};
