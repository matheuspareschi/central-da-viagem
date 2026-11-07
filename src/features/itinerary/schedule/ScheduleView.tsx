import { useState } from "react";
import { Car, ChevronRight, House, Moon, Sun, Sunrise, type LucideIcon } from "lucide-react";
import { IconBadge } from "../../../components";
import { shopRegions } from "../../../data/shopping";
import { useCurrentAgenda } from "../../../hooks/useCurrentAgenda";
import { formatPeriodRange, isHomeDestination, splitStopName } from "../../../lib/schedule";
import { describeShopStop } from "../../../lib/stores";
import type { DayPeriod, ScheduleDay, ShopRegion, StopCard, StopStep, TransitStep } from "../../../types";
import { StopSheet } from "./StopSheets";
import { useStoreMarks } from "./useStoreMarks";

interface ScheduleViewProps {
  dateISO: string;
  periods: DayPeriod[];
  cards: StopCard[];
}

/** Cronograma do dia: faixas de período, trajetos entre paradas e paradas que abrem uma folha. */
export function ScheduleView({ dateISO, periods, cards }: ScheduleViewProps) {
  const day: ScheduleDay = { dateISO, periods, cards };
  const { currentStepKey } = useCurrentAgenda(day);
  const [openStopId, setOpenStopId] = useState<string | null>(null);
  const openCard = cards.find((card) => card.id === openStopId);

  return (
    <section aria-labelledby="schedule-title" className="rounded-[20px] border border-line bg-cardbg p-4 pb-2">
      <h3 id="schedule-title" className="font-serif text-[22px] font-bold text-ink">
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
      {openCard && <StopSheet card={openCard} onClose={() => setOpenStopId(null)} />}
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
  return region ? (
    <ShopStopRow step={step} region={region} isCurrent={isCurrent} onOpen={onOpen} />
  ) : (
    <StopRowLayout step={step} isCurrent={isCurrent} onOpen={card ? onOpen : undefined} />
  );
}

function ShopStopRow({ step, region, isCurrent, onOpen }: Omit<StopRowProps, "card"> & { region: ShopRegion }) {
  const marks = useStoreMarks(region);
  return <StopRowLayout step={step} subtitle={describeShopStop(marks.summary)} isCurrent={isCurrent} onOpen={onOpen} />;
}

interface StopRowLayoutProps {
  step: StopStep;
  subtitle?: string;
  isCurrent: boolean;
  onOpen?: () => void;
}

function StopRowLayout({ step, subtitle, isCurrent, onOpen }: StopRowLayoutProps) {
  const { title, subtitle: nameDetail } = splitStopName(step.name);
  const content = (
    <>
      <span className="w-[46px] shrink-0 font-mono text-sm text-ink">{step.time}</span>
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
  const rowClasses = "flex min-h-[62px] w-full items-center gap-2.5 border-b border-dashed border-line py-2 text-left";

  return (
    <li>
      {onOpen ? (
        <button type="button" onClick={onOpen} className={`${rowClasses} focus-visible:outline-2 focus-visible:outline-citrus`}>
          {content}
        </button>
      ) : (
        <div className={rowClasses}>{content}</div>
      )}
    </li>
  );
}
