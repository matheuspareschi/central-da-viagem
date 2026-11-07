import { Phone } from "lucide-react";
import { emergencyNumber } from "../../data/global/contacts";

export function EmergencyLink() {
  return (
    <a
      href={`tel:${emergencyNumber}`}
      className="flex min-h-20 items-center gap-3.5 rounded-[18px] bg-emergency px-4 py-3.5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20">
        <Phone className="h-6 w-6" strokeWidth={1.9} aria-hidden="true" />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-xs font-bold uppercase tracking-widest">Emergência</span>
        <span className="text-[26px] font-bold leading-[1.1]">Ligar {emergencyNumber}</span>
        <span className="text-sm">Polícia · Ambulância · Bombeiros</span>
      </span>
    </a>
  );
}
