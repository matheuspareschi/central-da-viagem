import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CheckMark, TapCheckbox } from "../../components";
import { EXTRAS_PATH } from "../../components/navigationDestinations";
import { useBeforeTravel } from "../../hooks/useBeforeTravel";

const TOLL_PASS_PATH = `${EXTRAS_PATH}/pedagio`;
const TOLL_PASS_TITLE = "Visitor Toll Pass: baixar o app, cadastrar o cartão e reservar a tag";

/** Itens para resolver ainda no Brasil; usada em Essenciais e na subpágina de Extras. */
export function BeforeTravelList() {
  const { items, done, toll } = useBeforeTravel();

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
      <li>
        <Link to={TOLL_PASS_PATH} className="flex min-h-12 items-center gap-1 focus-visible:outline-2 focus-visible:outline-citrus">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center">
            <CheckMark checked={toll.isPreTripDone} />
          </span>
          <span className="min-w-0 flex-1 py-1.5">
            <span className={`block text-[15px] font-semibold ${toll.isPreTripDone ? "text-ink-soft line-through" : "text-ink"}`}>{TOLL_PASS_TITLE}</span>
            <span className="block text-xs text-ink-soft">
              {toll.preTripDoneCount} de {toll.preTripTotalCount} passos feitos
            </span>
          </span>
          <ChevronRight className="h-5 w-5 shrink-0 text-ink-soft" aria-hidden="true" />
        </Link>
      </li>
    </ul>
  );
}
