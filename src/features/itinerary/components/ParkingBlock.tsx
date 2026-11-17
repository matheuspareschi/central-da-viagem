import { useId, useState, type ReactNode } from "react";
import { Footprints, MapPin, SquareParking, TramFront } from "lucide-react";
import { RichText } from "../../../components";
import { mapSearchUrl } from "../../../lib/maps";
import { formatCheckedDate, isGratis } from "../../../lib/estacionamento";
import type { Estacionamento } from "../../../types";

const MAX_VISIBLE_TIPS = 3;
const UNDEFINED_TEXT = "A definir";

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs uppercase text-ink-soft">{children}</p>;
}

function ParkingAddress({ parking }: { parking: Estacionamento }) {
  return (
    <div>
      <Label>Endereço</Label>
      <div className="flex items-center gap-1">
        <p className="min-w-0 flex-1 break-words text-sm leading-[1.45] text-ink">{parking.endereco}</p>
        <a
          href={mapSearchUrl(parking.nome, parking.endereco)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${parking.nome} no mapa`}
          className="flex h-11 w-11 shrink-0 items-center justify-center text-[#a83a14] focus-visible:outline-2 focus-visible:outline-citrus"
        >
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function ParkingPrices({ prices }: { prices: Estacionamento["valores"] }) {
  return (
    <div>
      <Label>Valores</Label>
      <dl className="mt-1 flex flex-col gap-1.5">
        {prices.map(({ rotulo, valor }) => (
          <div key={rotulo} className="flex items-baseline justify-between gap-3">
            <dt className="min-w-0 flex-1 text-sm text-ink">{rotulo}</dt>
            <dd className={`min-w-0 max-w-[62%] break-words text-right font-mono text-sm font-bold ${isGratis(valor) ? "text-[#1f5a40]" : "text-ink"}`}>
              <RichText text={valor} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ParkingHowToArrive({ parking }: { parking: Estacionamento }) {
  const TransportIcon = parking.meio === "tram" ? TramFront : Footprints;
  return (
    <div>
      <Label>Como chegar ao parque</Label>
      <p className="mt-1 flex gap-2.5 text-sm leading-[1.45]">
        <TransportIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-ink-soft" aria-hidden="true" />
        {parking.comoChegar ? (
          <span className="min-w-0 break-words text-ink">
            <RichText text={parking.comoChegar} />
          </span>
        ) : (
          <span className="text-ink-soft">{UNDEFINED_TEXT}</span>
        )}
      </p>
    </div>
  );
}

function ParkingTips({ tips }: { tips: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const visibleTips = expanded ? tips : tips.slice(0, MAX_VISIBLE_TIPS);
  const hasHiddenTips = tips.length > MAX_VISIBLE_TIPS;

  return (
    <div>
      <Label>Dicas</Label>
      <ul id={listId} className="mt-1 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-[1.45] text-ink marker:text-ink-soft">
        {visibleTips.map((tip) => (
          <li key={tip} className="break-words">
            <RichText text={tip} />
          </li>
        ))}
      </ul>
      {hasHiddenTips && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((isExpanded) => !isExpanded)}
          className="mt-1 min-h-11 text-sm font-semibold text-citrus-text focus-visible:outline-2 focus-visible:outline-citrus"
        >
          {expanded ? "Ver menos dicas" : "Ver mais dicas"}
        </button>
      )}
    </div>
  );
}

/** Bloco "Chegada e estacionamento" do cartão "Horários e trajeto": endereço com mapa, valores, como chegar e dicas. */
export function ParkingBlock({ parking }: { parking: Estacionamento }) {
  const titleId = useId();
  return (
    <section aria-labelledby={titleId} className="flex flex-col gap-3.5 border-t border-dotted border-line pt-3.5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#dfe3f0]">
          <SquareParking className="h-5 w-5 text-[#2f3f73]" aria-hidden="true" />
        </span>
        <h4 id={titleId} className="font-serif text-base font-bold text-ink">
          Chegada e estacionamento
        </h4>
      </div>
      <ParkingAddress parking={parking} />
      <ParkingPrices prices={parking.valores} />
      <ParkingHowToArrive parking={parking} />
      <ParkingTips tips={parking.dicas} />
      <p className="text-xs leading-[1.4] text-ink-soft">
        Valores conferidos em {formatCheckedDate(parking.conferidoEm)}. Confirme no site do parque antes de ir.
      </p>
    </section>
  );
}
