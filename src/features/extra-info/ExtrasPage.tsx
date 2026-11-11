import { Link } from "react-router-dom";
import { EXTRAS_PATH } from "../../components/navigationDestinations";
import { extraTools, type ExtraTool, type ExtraToolId } from "../../data/global/extraTools";
import { useBeforeTravel } from "../../hooks/useBeforeTravel";
import { useGroceryList } from "../../hooks/useGroceryList";

function pluralizeItems(count: number): string {
  return count === 1 ? "1 item" : `${count} itens`;
}

/** Linha de apoio de cada quadradinho; Mercado e Antes de viajar dependem do que foi marcado. */
function useTileSupportLines(): Partial<Record<ExtraToolId, string>> {
  const groceries = useGroceryList();
  const beforeTravel = useBeforeTravel();
  return {
    mercado: `${groceries.checkedCount} de ${groceries.items.length} itens`,
    "antes-de-viajar": `${pluralizeItems(beforeTravel.pendingCount)} a fazer`,
  };
}

export function ExtrasPage() {
  const supportLines = useTileSupportLines();

  return (
    <div>
      <h1 className="font-serif text-[28px] font-bold leading-tight tracking-tight">Extras</h1>
      <ul className="m-0 mt-4 grid list-none grid-cols-[repeat(2,minmax(0,1fr))] gap-3 p-0">
        {extraTools.map((tool) => (
          <li key={tool.id} className="flex">
            <ToolTile tool={tool} support={supportLines[tool.id] ?? tool.tileSupport} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolTile({ tool, support }: { tool: ExtraTool; support?: string }) {
  const Icon = tool.icon;

  return (
    <Link
      to={`${EXTRAS_PATH}/${tool.id}`}
      aria-label={tool.tileAriaLabel}
      className="flex min-h-33 w-full flex-col items-start gap-2 rounded-[20px] border border-line bg-cardbg p-4 text-left text-ink shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus"
    >
      <span className={`flex h-11 w-11 items-center justify-center rounded-full ${tool.iconClasses}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="font-serif text-lg font-bold leading-tight [overflow-wrap:anywhere]">{tool.tileTitle}</span>
      {support && <span className="text-xs text-ink-soft">{support}</span>}
    </Link>
  );
}
