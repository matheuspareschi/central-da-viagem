import { RichText } from "../../components";
import type { DayOption } from "../../types";

interface OptionQuestionCardProps {
  question: string;
  options: DayOption[];
  onChoose: (optionId: string) => void;
}

/** Pergunta da Home no lugar do roteiro: tocar numa opção equivale a confirmar com "Usar sempre" marcada. */
export function OptionQuestionCard({ question, options, onChoose }: OptionQuestionCardProps) {
  return (
    <section aria-labelledby="option-question" className="rounded-[22px] border border-line bg-cardbg p-5 text-ink shadow-card">
      <h2 id="option-question" className="font-serif text-[24px] font-bold leading-tight">
        {question}
      </h2>
      <ul className="mt-4 flex list-none flex-col gap-2.5 p-0">
        {options.map((option) => (
          <li key={option.id}>
            <button
              type="button"
              onClick={() => onChoose(option.id)}
              className="flex min-h-14 w-full flex-col justify-center rounded-[14px] border border-line bg-paper-inset px-4 py-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus"
            >
              <span className="text-base font-semibold leading-tight [overflow-wrap:anywhere]">{option.label}</span>
              <span className="text-[13px] leading-snug text-ink-soft [overflow-wrap:anywhere]">
                <RichText text={option.supportLine} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
