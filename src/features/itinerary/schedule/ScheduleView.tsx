import { useId, useState, type ReactNode } from "react";
import { Car, ChevronRight, House, MapPin, Moon, Sun, Sunrise, type LucideIcon } from "lucide-react";
import { IconBadge } from "../../../components";
import { shopRegions } from "../../../data/shopping";
import { useCurrentAgenda } from "../../../hooks/useCurrentAgenda";
import { mapSearchUrl } from "../../../lib/maps";
import { formatPeriodRange, isHomeDestination, splitStopName } from "../../../lib/schedule";
import { describeShopStop } from "../../../lib/stores";
import type { DayPeriod, ScheduleDay, ShopRegion, StopCard, StopStep, TransitStep } from "../../../types";
import { GroceryListSheet } from "./GroceryListSheet";
import { StopSheet } from "./StopSheets";
import { useStoreMarks } from "./useStoreMarks";

interface ScheduleViewProps {
  dateISO: string;
  periods: DayPeriod[];
  cards: StopCard[];
}

/** Cronograma do dia: faixas de período, trajetos entre paradas e paradas que abrem uma folha. */
export function ScheduleView({ dateISO, periods, cards }: ScheduleViewProps) {
  const titleId = useId();
  const day: ScheduleDay = { dateISO, periods, cards };
  const { currentStepKey } = useCurrentAgenda(day);
  const [openStopId, setOpenStopId] = useState<string | null>(null);
  const [isGroceryListOpen, setIsGroceryListOpen] = useState(false);
  const openCard = cards.find((card) => card.id === openStopId);

  return (
    <section aria-labelledby={titleId} className="rounded-[20px] border border-line bg-cardbg p-4 pb-2">
      <h3 id={titleId} className="font-serif text-[22px] font-bold text-ink">
        Cronograma
      </h3>
      {periods.map((period) => (
        <div key={period.title}>
          <PeriodBand period={period} />
          {period.note && <p className="mt-2 text-sm italic text-ink-soft">{period.note}</p>}
          <ul>
            {period.steps.map((step, index) =>
              step.kind === "transit" ? (
                <TransitRow key={index} step={step} />
              ) : (
                <StopRow
                  key={index}
                  step={step}
                  card={cards.find((card) => card.id === step.stopId)}
                  isCurrent={currentStepKey === `${step.time}-${step.name}`}
                  onOpen={() => setOpenStopId(step.stopId)}
                />
              ),
            )}
          </ul>
        </div>
      ))}
      {openCard && (
        <StopSheet
          card={openCard}
          onClose={() => setOpenStopId(null)}
          onOpenGroceryList={() => {
            setOpenStopId(null);
            setIsGroceryListOpen(true);
          }}
        />
      )}
      {isGroceryListOpen && <GroceryListSheet onClose={() => setIsGroceryListOpen(false)} />}
    </section>
  );
}

interface PeriodLook {
  icon: LucideIcon;
  band: string;
}

const periodLooks: Record<string, PeriodLook> = {
  manhã: { icon: Sunrise, band: "bg-[#fbeccb] text-[#7a5200]" },
  tarde: { icon: Sun, band: "bg-[#fbe0cf] text-citrus-text" },
  noite: { icon: Moon, band: "bg-[#dfe3f0] text-[#2f3f73]" },
};
const neutralPeriodLook: PeriodLook = { icon: Sun, band: "bg-paper-inset text-ink" };

function PeriodBand({ period }: { period: DayPeriod }) {
  const { icon: Icon, band } = periodLooks[period.title.toLowerCase()] ?? neutralPeriodLook;
  return (
    <div className={`mt-4 flex items-center gap-2.5 rounded-[14px] px-3 py-2 ${band}`}>
      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white/50">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <span className="flex-1 font-serif text-lg font-bold">{period.title}</span>
      <span className="font-mono text-xs">{formatPeriodRange(period)}</span>
    </div>
  );
}

function TransitRow({ step }: { step: TransitStep }) {
  const Icon = isHomeDestination(step.destinationName) ? House : Car;
  return (
    <li className="flex items-center gap-2 px-1 py-2 text-[13px] text-ink-soft">
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>
        Sair às <strong className="font-semibold text-ink">{step.time}</strong>
        {step.duration ? ` · ${step.duration}` : ""} até {step.destinationName}
      </span>
    </li>
  );
}

interface StopRowProps {
  step: StopStep;
  card?: StopCard;
  isCurrent: boolean;
  onOpen: () => void;
}

function StopRow({ step, card, isCurrent, onOpen }: StopRowProps) {
  const region = card?.shopRegionId ? shopRegions[card.shopRegionId] : undefined;
  const destination = { mapLink: card?.link, address: card?.address };
  return region ? (
    <ShopStopRow step={step} region={region} {...destination} isCurrent={isCurrent} onOpen={onOpen} />
  ) : (
    <StopRowLayout step={step} {...destination} isCurrent={isCurrent} onOpen={card ? onOpen : undefined} />
  );
}

function ShopStopRow({ step, region, isCurrent, onOpen, ...destination }: Omit<StopRowProps, "card"> & RowDestination & { region: ShopRegion }) {
  const marks = useStoreMarks(region);
  return <StopRowLayout step={step} subtitle={describeShopStop(marks.summary)} {...destination} isCurrent={isCurrent} onOpen={onOpen} />;
}

interface RowDestination {
  mapLink?: string;
  address?: string;
}

const CLOCK_TIME = /^\d{1,2}:\d{2}$/;

/** Passos sem horário informado mostram "A definir", em fonte menor para caber na coluna da hora. */
const isTimeDefined = (time: string): boolean => CLOCK_TIME.test(time);

interface StopRowLayoutProps extends RowDestination {
  step: StopStep;
  subtitle?: string;
  isCurrent: boolean;
  onOpen?: () => void;
}

function StopRowLayout({ step, subtitle, mapLink, address, isCurrent, onOpen }: StopRowLayoutProps) {
  const { title, subtitle: nameDetail } = splitStopName(step.name);
  const content = (
    <>
      <span className={`w-[46px] shrink-0 font-mono text-ink ${isTimeDefined(step.time) ? "text-sm" : "text-xs leading-tight"}`}>{step.time}</span>
      <IconBadge name={step.icon} />
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold text-ink">
          {title}
          {isCurrent && <span className="ml-2 rounded-full bg-citrus px-1.5 py-0.5 font-mono text-xs uppercase text-cardbg">Agora</span>}
        </span>
        {(subtitle ?? nameDetail) && <span className="block text-xs text-ink-soft">{subtitle ?? nameDetail}</span>}
      </span>
      {onOpen && <ChevronRight className="h-5 w-5 shrink-0 text-ink-soft" aria-hidden="true" />}
    </>
  );
  const rowClasses = "flex min-h-[62px] min-w-0 flex-1 items-center gap-2.5 py-2 text-left focus-visible:outline-2 focus-visible:outline-citrus";
  const stopTitle = splitStopName(step.name).title;
  const mapHref = mapLink ?? (address ? mapSearchUrl(addressSearchName(step), address) : undefined);

  return (
    <li className="border-b border-dashed border-line">
      <div className="flex items-center">
        <StopRowTarget onOpen={onOpen} className={mapHref ? rowClasses : `${rowClasses} ${CHEVRON_INSET_WITHOUT_MAP}`}>
          {content}
        </StopRowTarget>
        {mapHref && <MapPinLink href={mapHref} stopTitle={stopTitle} />}
      </div>
    </li>
  );
}

interface StopRowTargetProps {
  onOpen?: () => void;
  className: string;
  children: ReactNode;
}

/** A linha abre a folha de detalhes (`onOpen`) ou só mostra a parada. */
function StopRowTarget({ onOpen, className, children }: StopRowTargetProps) {
  if (onOpen) return <button type="button" onClick={onOpen} className={className}>{children}</button>;
  return <div className={className}>{children}</div>;
}

/** "Chegada na casa" não é um lugar no mapa: a busca da casa usa só o endereço. */
const addressSearchName = (step: StopStep): string => (step.icon === "house" ? "" : splitStopName(step.name).title);

/** Sem o pino, a seta › ocupa o lugar dele: 12px de folga centralizam os 20px da seta na área de 44px. */
const CHEVRON_INSET_WITHOUT_MAP = "pr-3";

function MapPinLink({ href, stopTitle }: { href: string; stopTitle: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${stopTitle} no mapa`}
      className="ml-1 flex h-11 w-11 shrink-0 items-center justify-center text-citrus-text focus-visible:outline-2 focus-visible:outline-citrus"
    >
      <MapPin className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
