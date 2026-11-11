import { ListChecks } from "lucide-react";
import { BeforeTravelList } from "../extra-info/BeforeTravelList";

export function BeforeTravelCard() {
  return (
    <section className="rounded-[20px] border border-line bg-cardbg p-[18px]">
      <h2 className="flex items-center gap-2 font-serif text-[22px] font-bold text-ink">
        <ListChecks className="h-5 w-5 text-citrus" aria-hidden="true" />
        Antes de viajar
      </h2>
      <BeforeTravelList />
    </section>
  );
}
