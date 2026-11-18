import { useState } from "react";
import { BottomSheet } from "../../components";
import { narcizoDays } from "../../data/narcizo";
import { useNarcizoMode } from "../../hooks/useNarcizoMode";
import { formatDayMonth } from "../../lib/date";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus";
const FOLLOW_LABEL = "Seguir com os Narcizo";
const HIDE_LABEL = "Ocultar roteiro dos Narcizo";

/** Ex.: "25/12 a 05/01", sempre a partir dos dados do roteiro. */
function describeNarcizoPeriod(): string {
  const dates = narcizoDays.map((day) => day.dateISO);
  return `${formatDayMonth(dates[0])} a ${formatDayMonth(dates[dates.length - 1])}`;
}

/** Atalho discreto, fim do calendário principal: mostra ou oculta os dias da família Narcizo. */
export function NarcizoToggle() {
  const { isEnabled, setEnabled } = useNarcizoMode();
  const [isAsking, setIsAsking] = useState(false);

  function confirm() {
    setIsAsking(false);
    setEnabled(true);
  }

  if (isEnabled) return <ToggleButton arrow="←" label={HIDE_LABEL} onClick={() => setEnabled(false)} />;

  return (
    <>
      <ToggleButton arrow="→" label={FOLLOW_LABEL} onClick={() => setIsAsking(true)} />
      {isAsking && <ConfirmSheet onConfirm={confirm} onCancel={() => setIsAsking(false)} />}
    </>
  );
}

function ToggleButton({ arrow, label, onClick }: { arrow: string; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`-mr-2 inline-flex min-h-11 items-center gap-1.5 rounded-xl px-2 text-sm font-semibold text-ink-soft active:text-ink ${focusRing}`}
    >
      {label}
      <span aria-hidden="true" className="font-serif text-xl leading-none">
        {arrow}
      </span>
    </button>
  );
}

function ConfirmSheet({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  const question = `Mostrar os dias ${describeNarcizoPeriod()} da família Narcizo?`;

  return (
    <BottomSheet
      title={question}
      onClose={onCancel}
      maxHeightPercent={40}
      header={<h3 className="font-serif text-xl font-bold leading-tight text-ink">{question}</h3>}
      footer={
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            className={`min-h-[50px] flex-1 rounded-[14px] border border-line text-base font-semibold text-ink ${focusRing}`}
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`min-h-[50px] flex-1 rounded-[14px] bg-ink text-base font-semibold text-paper ${focusRing}`}
          >
            Ativar
          </button>
        </div>
      }
    >
      <p className="text-[15px] leading-snug text-ink-soft">Os dias entram no calendário, na sequência. Você pode ocultar quando quiser.</p>
    </BottomSheet>
  );
}
