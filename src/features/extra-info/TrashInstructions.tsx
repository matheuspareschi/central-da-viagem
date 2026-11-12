import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { RichText } from "../../components";
import { trashInstructions } from "../../data/global/trashInstructions";

/** Recolhido por padrão: o resumo mostra só o horário da coleta. */
export function TrashInstructions() {
  return (
    <details className="group rounded-xl border border-ink/10">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-2.5 text-[15px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
        {trashInstructions.collectionHoursSummary}
        <span className="flex shrink-0 items-center gap-1 text-[12.5px] text-ink-soft">
          <span className="group-open:hidden">Ver instruções</span>
          <span className="hidden group-open:inline">Recolher</span>
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
        </span>
      </summary>

      <div className="space-y-6 border-t border-ink/10 px-4 pb-5 pt-4 text-[16px] leading-relaxed text-ink">
        <InstructionBlock title="Horário">
          <p>
            <RichText text={trashInstructions.collectionHours} />
          </p>
        </InstructionBlock>

        <InstructionBlock title="Como descartar">
          <BulletList items={trashInstructions.disposalSteps} />
        </InstructionBlock>

        <InstructionBlock title="Itens volumosos">
          <p className="mb-2">
            <RichText text={trashInstructions.bulkyItemsIntro} />
          </p>
          <ol className="list-decimal space-y-1.5 pl-6 marker:font-semibold marker:text-ink-soft">
            {trashInstructions.bulkyItemsBinLocations.map((location) => (
              <li key={location}>
                <RichText text={location} />
              </li>
            ))}
          </ol>
        </InstructionBlock>

        <InstructionBlock title="Não é permitido" highlighted>
          <BulletList items={trashInstructions.notAllowed} />
        </InstructionBlock>
      </div>
    </details>
  );
}

function InstructionBlock({ title, highlighted, children }: { title: string; highlighted?: boolean; children: ReactNode }) {
  const containerClasses = highlighted ? "rounded-xl border border-citrus/20 bg-citrus/10 p-4" : "";
  const titleColor = highlighted ? "text-citrus-dark" : "text-ink-soft";

  return (
    <section className={containerClasses}>
      <h4 className={`mb-2 text-xs font-semibold uppercase tracking-wide ${titleColor}`}>{title}</h4>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}
