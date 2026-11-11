import { ListChecks } from "lucide-react";
import { TapCheckbox } from "../../components";
import { BEFORE_TRAVEL_STORAGE_KEY, beforeTravelItems } from "../../data/global/beforeTravel";
import { useLocalStorageSet } from "../../hooks/useLocalStorageSet";

export function BeforeTravelCard() {
  const done = useLocalStorageSet(BEFORE_TRAVEL_STORAGE_KEY);

  return (
    <section className="rounded-[20px] border border-line bg-cardbg p-[18px]">
      <h2 className="flex items-center gap-2 font-serif text-[22px] font-bold text-ink">
        <ListChecks className="h-5 w-5 text-citrus" aria-hidden="true" />
        Antes de viajar
      </h2>
      <ul className="mt-2">
        {beforeTravelItems.map(({ id, text }) => (
          <li key={id} className="flex items-center gap-1">
            <TapCheckbox checked={done.set.has(id)} onToggle={() => done.toggle(id)} label={done.set.has(id) ? `Desmarcar: ${text}` : `Marcar: ${text}`} />
            <span className={`min-w-0 flex-1 text-[15px] text-ink ${done.set.has(id) ? "line-through" : ""}`}>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
