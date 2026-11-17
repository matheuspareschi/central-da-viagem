import { useId, useState, type ReactNode } from "react";
import { ChevronDown, Footprints, MapPin, SquareParking, TramFront } from "lucide-react";
import { RichText } from "../../../components";
import { mapSearchUrl } from "../../../lib/maps";
import { isGratis } from "../../../lib/estacionamento";
import type { Estacionamento } from "../../../types";

const UNDEFINED_TEXT = "A definir";
const DEFAULT_PRICE_LABEL = "Padrão";

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs uppercase text-ink-soft">{children}</p>;
}

function MapPinLink({ parking }: { parking: Estacionamento }) {
  return (
    <a
      href={mapSearchUrl(parking.nome, parking.endereco)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${parking.nome} no mapa`}
      className="-ml-3 flex h-11 w-11 items-center justify-center text-[#a83a14] focus-visible:outline-2 focus-visible:outline-citrus"
    >
      <MapPin className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

function ParkingPrices({ prices }: { prices: Estacionamento["valores"] }) {
  return (
    <dl className="flex min-h-11 flex-col justify-center gap-1">
      {prices.map(({ rotulo, valor }) => (
        <div key={rotulo}>
          {rotulo !== DEFAULT_PRICE_LABEL && <dt className="text-xs text-ink-soft">{rotulo}</dt>}
          <dd className={`break-words font-mono text-sm font-bold ${isGratis(valor) ? "text-[#1f5a40]" : "text-ink"}`}>
            <RichText text={valor} />
          </dd>
        </div>
      ))}
    </dl>
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

/** Bloco recolhível "Chegada e estacionamento" do cartão "Horários e trajeto": mapa, valor e como chegar. */
export function ParkingBlock({ parking }: { parking: Estacionamento }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <section className="border-t border-dotted border-line pt-1.5">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-11 w-full items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-citrus"
      >
        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#dfe3f0]">
          <SquareParking className="h-5 w-5 text-[#2f3f73]" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 font-serif text-base font-bold text-ink">Chegada e estacionamento</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-ink-soft transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div id={contentId} className="mt-2.5 flex flex-col gap-3.5">
          <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-3">
            <div>
              <Label>Endereço</Label>
              <MapPinLink parking={parking} />
            </div>
            <div>
              <Label>Valor estacionamento</Label>
              <ParkingPrices prices={parking.valores} />
            </div>
          </div>
          <ParkingHowToArrive parking={parking} />
        </div>
      )}
    </section>
  );
}
