import { useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { EXTRAS_PATH } from "../../components/navigationDestinations";
import { findExtraTool, type ExtraToolId } from "../../data/global/extraTools";
import { BeforeTravelList } from "./BeforeTravelList";
import { DiscountTaxCalculator } from "./DiscountTaxCalculator";
import { GroceryList } from "./GroceryList";
import { ShoeSizeChart } from "./ShoeSizeChart";
import { TrashInstructions } from "./TrashInstructions";
import { WeightConverter } from "./WeightConverter";

const toolBodies: Record<ExtraToolId, () => React.JSX.Element> = {
  conversor: WeightConverter,
  "desconto-imposto": DiscountTaxCalculator,
  mercado: GroceryList,
  lixo: TrashInstructions,
  "antes-de-viajar": BeforeTravelList,
  calcado: ShoeSizeChart,
};

/** Subpágina de uma ferramenta de Extras; o foco vai para o título ao abrir. */
export function ExtraToolPage() {
  const tool = findExtraTool(useParams().toolId);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    titleRef.current?.focus();
    window.scrollTo(0, 0);
  }, [tool?.id]);

  if (!tool) return <Navigate to={EXTRAS_PATH} replace />;
  const ToolBody = toolBodies[tool.id];

  return (
    <div>
      <Link
        to={EXTRAS_PATH}
        className="-mx-2 flex min-h-14 items-center gap-1 px-2 font-mono text-sm font-semibold text-citrus-text focus-visible:outline-2 focus-visible:outline-citrus"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        Extras
      </Link>
      <h1 ref={titleRef} tabIndex={-1} className="font-serif text-[28px] font-bold leading-tight tracking-tight outline-none">
        {tool.pageTitle}
      </h1>
      <p className="mb-4 mt-1 text-[13.5px] text-ink-soft">{tool.description}</p>
      <section className="rounded-[20px] border border-line bg-cardbg p-[18px]">
        <ToolBody />
      </section>
    </div>
  );
}
