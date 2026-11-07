import {
  AlertTriangle,
  ShoppingBag,
  Sandwich,
  Camera,
  Wheat,
  Home,
  Leaf,
  Lightbulb,
  ParkingCircle,
  Sparkles,
  Target,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "../../types";

export const iconComponents: Record<IconName, LucideIcon> = {
  alert: AlertTriangle,
  bag: ShoppingBag,
  burger: Sandwich,
  camera: Camera,
  corn: Wheat,
  house: Home,
  leaf: Leaf,
  lightbulb: Lightbulb,
  parking: ParkingCircle,
  sparkle: Sparkles,
  target: Target,
  tree: TreePine,
};

export const iconBadgeClasses: Record<IconName, { bg: string; text: string }> = {
  parking: { bg: "bg-ink/8", text: "text-ink" },
  sparkle: { bg: "bg-citrus/12", text: "text-citrus-dark" },
  bag: { bg: "bg-citrus/12", text: "text-citrus-dark" },
  corn: { bg: "bg-gold/18", text: "text-gold-dark" },
  tree: { bg: "bg-palm/12", text: "text-palm" },
  burger: { bg: "bg-gold/18", text: "text-gold-dark" },
  target: { bg: "bg-ink/8", text: "text-ink" },
  leaf: { bg: "bg-palm/12", text: "text-palm" },
  house: { bg: "bg-ink/8", text: "text-ink" },
  alert: { bg: "bg-citrus/15", text: "text-citrus-dark" },
  lightbulb: { bg: "bg-gold/18", text: "text-gold-dark" },
  camera: { bg: "bg-palm/12", text: "text-palm" },
};
