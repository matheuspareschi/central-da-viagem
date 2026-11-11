import { useState } from "react";
import { AlertTriangle, Car, Clock, Info, TrainFront, type LucideIcon } from "lucide-react";
import { categoryStyles } from "../../../data/presentation/categoryStyles";
import type { DayCategory, Journey, JourneyGuide, JourneyNote } from "../../../types";

const noteIcons: Record<JourneyNote["icon"], LucideIcon> = {
  car: Car,
  transit: TrainFront,
  info: Info,
};

const MAX_LEAD_LENGTH = 32;

/** Destaca em negrito o trecho antes dos dois-pontos ("De carro:", "Confirmar no app:"), quando for curto. */
function EmphasizedLead({ text }: { text: string }) {
  const colonIndex = text.indexOf(":");
  if (colonIndex < 0 || colonIndex > MAX_LEAD_LENGTH) return <>{text}</>;
  return (
    <>
      <strong className="font-semibold">{text.slice(0, colonIndex + 1)}</strong>
      {text.slice(colonIndex + 1)}
    </>
  );
}

const UNDEFINED_VALUE = "A definir";

function JourneyTiles({ tiles }: { tiles: Journey["tiles"] }) {
  return (
    <dl className="grid grid-cols-2 gap-2">
      {tiles.map(({ label, value }) => (
        <div key={label} className="rounded-[14px] bg-paper-inset px-3 py-2.5">
          <dt className="font-mono text-xs uppercase text-ink-soft">{label}</dt>
          <dd className={value === UNDEFINED_VALUE ? "py-1 text-sm text-ink-soft" : "font-serif text-2xl font-semibold text-ink"}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function JourneyNotes({ notes }: { notes: JourneyNote[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {notes.map(({ icon, text }) => {
        const NoteIcon = noteIcons[icon];
        return (
          <li key={text} className="flex gap-2.5 text-sm leading-[1.45] text-ink">
            <NoteIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ink-soft" aria-hidden="true" />
            <span>
              <EmphasizedLead text={text} />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function JourneyAlerts({ alerts }: { alerts: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {alerts.map((alert) => (
        <li key={alert} className="flex gap-2.5 rounded-[14px] bg-alert-bg p-3 text-sm leading-[1.45] text-alert-text">
          <AlertTriangle className="mt-0.5 h-[18px] w-[18px] shrink-0 text-emergency" aria-hidden="true" />
          <span>
            <EmphasizedLead text={alert} />
          </span>
        </li>
      ))}
    </ul>
  );
}

type JourneyView = "horarios" | "guia";

function JourneyViewTabs({ guideTitle, selected, onSelect }: { guideTitle: string; selected: JourneyView; onSelect: (view: JourneyView) => void }) {
  const views: { key: JourneyView; label: string }[] = [
    { key: "horarios", label: "Horários" },
    { key: "guia", label: guideTitle },
  ];
  return (
    <div role="tablist" aria-label="Conteúdo do cartão" className="flex gap-1 rounded-[14px] bg-paper-dark p-1">
      {views.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={key === selected}
          onClick={() => onSelect(key)}
          className={`min-h-11 min-w-0 flex-1 rounded-[11px] px-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-citrus ${
            key === selected ? "bg-ink text-paper" : "text-ink"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function JourneyGuideList({ guide }: { guide: JourneyGuide }) {
  return (
    <dl className="flex flex-col gap-3">
      {guide.items.map(({ label, text }) => (
        <div key={label}>
          <dt className="font-mono text-xs uppercase text-ink-soft">{label}</dt>
          <dd className="mt-0.5 whitespace-pre-line text-sm leading-[1.45] text-ink">{text}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Cartão "Horários e trajeto": blocos de horário, notas de deslocamento e alertas (seções vazias são omitidas).
 * Quando o dia tem `guide`, um controle segmentado separa "Horários" das regras do dia.
 */
export function JourneyCard({ journey, category }: { journey: Journey; category?: DayCategory }) {
  const { tiles, notes, alerts, guide } = journey;
  const [view, setView] = useState<JourneyView>("horarios");
  const clockColor = category ? categoryStyles[category].iconColor : "text-ink-soft";
  const showsGuide = guide !== undefined && view === "guia";

  return (
    <section aria-labelledby="journey-title" className="mt-5 flex flex-col gap-3.5 rounded-[20px] border border-line bg-cardbg p-4">
      <h3 id="journey-title" className="flex items-center gap-2 font-serif text-[22px] font-bold text-ink">
        <Clock className={`h-5 w-5 ${clockColor}`} aria-hidden="true" />
        Horários e trajeto
      </h3>
      {guide && <JourneyViewTabs guideTitle={guide.title} selected={view} onSelect={setView} />}
      {showsGuide ? (
        <JourneyGuideList guide={guide} />
      ) : (
        <>
          {tiles.length > 0 && <JourneyTiles tiles={tiles} />}
          {notes.length > 0 && <JourneyNotes notes={notes} />}
          {alerts.length > 0 && <JourneyAlerts alerts={alerts} />}
        </>
      )}
    </section>
  );
}
