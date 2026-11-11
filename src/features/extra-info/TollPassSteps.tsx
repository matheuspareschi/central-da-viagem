import { TapCheckbox } from "../../components";
import { allTollSteps, tollStages, tollTipIcon as TipIcon, type TollStage, type TollStep } from "../../data/pedagio";
import { usePedagio } from "../../hooks/usePedagio";
import { CheckProgress } from "./CheckProgress";
import { ConfirmClearButton } from "./ConfirmClearButton";

function stepNumber(step: TollStep): number {
  return allTollSteps.indexOf(step) + 1;
}

/** Visitor Toll Pass em três etapas, com seis passos marcáveis numerados em sequência. */
export function TollPassSteps() {
  const toll = usePedagio();

  return (
    <div className="space-y-4">
      <CheckProgress
        checkedCount={toll.checkedCount}
        totalCount={toll.totalCount}
        summary={`${toll.checkedCount} de ${toll.totalCount} passos feitos`}
        ariaLabel="Passos feitos"
      />
      {tollStages.map((stage) => (
        <StageCard key={stage.id} stage={stage} checkedIds={toll.checked.set} onToggle={toll.checked.toggle} />
      ))}
      <div className="flex flex-wrap items-center gap-2">
        <ConfirmClearButton onConfirm={() => toll.checked.replace([])} disabled={toll.checkedCount === 0} question="Desmarcar todos os passos?" />
      </div>
    </div>
  );
}

interface StageCardProps {
  stage: TollStage;
  checkedIds: Set<string>;
  onToggle: (stepId: string) => void;
}

function StageCard({ stage, checkedIds, onToggle }: StageCardProps) {
  const Icon = stage.icon;

  return (
    <section className="rounded-[20px] border border-line bg-cardbg p-[18px]">
      <h2 className="flex items-center gap-2.5 font-serif text-lg font-bold leading-tight text-ink">
        <span className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${stage.iconClasses}`}>
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <span className="min-w-0 [overflow-wrap:anywhere]">{stage.titulo}</span>
      </h2>
      <ol className="mt-2">
        {stage.passos.map((step) => (
          <li key={step.id} className="border-b border-dashed border-line py-0.5 last:border-b-0">
            <StepRow step={step} isChecked={checkedIds.has(step.id)} onToggle={() => onToggle(step.id)} />
            {step.dica && <TipBlock text={step.dica} />}
          </li>
        ))}
      </ol>
    </section>
  );
}

function StepRow({ step, isChecked, onToggle }: { step: TollStep; isChecked: boolean; onToggle: () => void }) {
  const number = stepNumber(step);

  return (
    <TapCheckbox checked={isChecked} onToggle={onToggle} label={`${isChecked ? "Desmarcar" : "Marcar"} passo ${number}: ${step.titulo}`}>
      <span className="flex min-w-0 flex-1 gap-2 py-1.5">
        <span className="pt-0.5 font-mono text-sm font-semibold text-ink-soft">{number}</span>
        <span className={`min-w-0 flex-1 [overflow-wrap:anywhere] ${isChecked ? "text-ink-soft line-through" : "text-ink"}`}>
          <span className="block text-[15px] font-semibold">{step.titulo}</span>
          <span className="block text-sm">{step.texto}</span>
        </span>
      </span>
    </TapCheckbox>
  );
}

function TipBlock({ text }: { text: string }) {
  return (
    <p className="mx-1 mb-2 flex items-start gap-2 rounded-xl bg-gold-tint px-3 py-2.5 text-sm text-[#6b4a0b]">
      <TipIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="min-w-0 [overflow-wrap:anywhere]">
        <strong>Dica: </strong>
        {text}
      </span>
    </p>
  );
}
