interface CheckProgressProps {
  checkedCount: number;
  totalCount: number;
  /** Texto do contador, ex.: "3 de 20 itens no carrinho". */
  summary: string;
  ariaLabel: string;
}

/** Contador e barra de progresso de 6px (verde) para listas marcáveis. */
export function CheckProgress({ checkedCount, totalCount, summary, ariaLabel }: CheckProgressProps) {
  const percent = totalCount === 0 ? 0 : (checkedCount / totalCount) * 100;

  return (
    <div className="mb-2">
      <p className="text-sm font-semibold text-ink">{summary}</p>
      <div role="progressbar" aria-label={ariaLabel} aria-valuemin={0} aria-valuemax={totalCount} aria-valuenow={checkedCount} className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full bg-[#1f5a40] transition-[width]" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
