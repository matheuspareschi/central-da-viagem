import { useState } from "react";
import { Circle, CircleDot, MapPin } from "lucide-react";
import { RichText } from "../../../components";
import { describeParkingOption } from "../../../lib/parkingOptions";
import { mapSearchUrl } from "../../../lib/maps";
import type { ParkingOption } from "../../../types";
import type { ParkingChoice } from "./useParkingChoice";

interface ParkingOptionListProps {
  options: ParkingOption[];
  choice: ParkingChoice;
}

/** Estacionamentos de uma parada: escolher um (botão redondo), abrir os detalhes e abrir o mapa. */
export function ParkingOptionList({ options, choice }: ParkingOptionListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <ul>
      {options.map((option) => (
        <ParkingOptionRow
          key={option.id}
          option={option}
          isChosen={choice.chosenId === option.id}
          isExpanded={expandedId === option.id}
          onToggleChosen={() => choice.toggle(option.id)}
          onToggleExpanded={() => setExpandedId(expandedId === option.id ? null : option.id)}
        />
      ))}
    </ul>
  );
}

interface ParkingOptionRowProps {
  option: ParkingOption;
  isChosen: boolean;
  isExpanded: boolean;
  onToggleChosen: () => void;
  onToggleExpanded: () => void;
}

function ParkingOptionRow({ option, isChosen, isExpanded, onToggleChosen, onToggleExpanded }: ParkingOptionRowProps) {
  const ChoiceIcon = isChosen ? CircleDot : Circle;
  return (
    <li className="border-b border-dashed border-line py-1 last:border-b-0">
      <div className="flex items-center gap-1">
        <button
          type="button"
          role="radio"
          aria-checked={isChosen}
          aria-label={isChosen ? `Desfazer a escolha de ${option.name}` : `Escolher ${option.name}`}
          onClick={onToggleChosen}
          className="flex h-11 w-11 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-citrus"
        >
          <ChoiceIcon className={`h-[22px] w-[22px] ${isChosen ? "text-citrus" : "text-ink-soft"}`} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={onToggleExpanded}
          className="min-h-11 min-w-0 flex-1 py-1 text-left focus-visible:outline-2 focus-visible:outline-citrus"
        >
          <span className="block text-[15px] font-semibold text-ink">{option.name}</span>
          {!isExpanded && <span className="line-clamp-2 block text-[13px] text-ink-soft">{describeParkingOption(option)}</span>}
        </button>
        <a
          href={mapSearchUrl(option.name, option.address)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${option.name} no mapa`}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-citrus-text focus-visible:outline-2 focus-visible:outline-citrus"
        >
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
      {isExpanded && <ParkingOptionDetails option={option} />}
    </li>
  );
}

function ParkingOptionDetails({ option }: { option: ParkingOption }) {
  const rows: [string, string][] = [
    ["Endereço", option.address],
    ["Caminhada", option.walk],
    ["Valor", option.price],
  ];
  return (
    <div className="pb-2 pl-12">
      <dl className="flex flex-col gap-1.5">
        {rows.map(([label, text]) => (
          <div key={label}>
            <dt className="font-mono text-xs uppercase text-ink-soft">{label}</dt>
            <dd className="text-sm leading-[1.45] text-ink">
              <RichText text={text} />
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 text-sm leading-[1.45] text-ink">
        <RichText text={option.details} />
      </p>
    </div>
  );
}
