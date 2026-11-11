import { TapCheckbox } from "../../components";
import { useBeforeTravel } from "../../hooks/useBeforeTravel";

/** Itens para resolver ainda no Brasil; usada em Essenciais e na subpágina de Extras. */
export function BeforeTravelList() {
  const { items, done } = useBeforeTravel();

  return (
    <ul className="mt-2">
      {items.map(({ id, title, subtitle }) => {
        const isDone = done.set.has(id);
        return (
          <li key={id}>
            <TapCheckbox checked={isDone} onToggle={() => done.toggle(id)} label={isDone ? `Desmarcar: ${title}` : `Marcar: ${title}`}>
              <span className="min-w-0 flex-1 py-1.5">
                <span className={`block text-[15px] font-semibold ${isDone ? "text-ink-soft line-through" : "text-ink"}`}>{title}</span>
                <span className="block text-xs text-ink-soft">{subtitle}</span>
              </span>
            </TapCheckbox>
          </li>
        );
      })}
    </ul>
  );
}
