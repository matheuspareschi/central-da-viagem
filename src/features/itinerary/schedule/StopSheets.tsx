import { useState } from "react";
import { BottomSheet, DetailSections, IconBadge } from "../../../components";
import { shopRegions } from "../../../data/shopping";
import { describeShopStop } from "../../../lib/stores";
import type { ShopRegion, StopCard } from "../../../types";
import { StoreList } from "./StoreList";
import { useStoreMarks } from "./useStoreMarks";

const SHOP_SHEET_MAX_HEIGHT_PERCENT = 78;
const SHOP_SECTION_TITLE = "Lojas";

interface StopSheetProps {
  card: StopCard;
  onClose: () => void;
}

function StopHeader({ card, subtitle }: { card: StopCard; subtitle?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <IconBadge name={card.icon} />
      <div className="min-w-0">
        <h3 className="font-serif text-xl font-bold leading-tight text-ink">{card.name}</h3>
        {subtitle && <p className="text-xs text-ink-soft">{subtitle}</p>}
      </div>
    </div>
  );
}

/** Abre a folha de uma parada: com lojas (aba Lojas) ou só com as informações da parada. */
export function StopSheet({ card, onClose }: StopSheetProps) {
  const region = card.shopRegionId ? shopRegions[card.shopRegionId] : undefined;
  return region ? <ShopStopSheet card={card} region={region} onClose={onClose} /> : <PlainStopSheet card={card} onClose={onClose} />;
}

function PlainStopSheet({ card, onClose }: StopSheetProps) {
  return (
    <BottomSheet title={card.name} onClose={onClose} header={<StopHeader card={card} subtitle={card.time} />}>
      <DetailSections sections={card.sections} />
    </BottomSheet>
  );
}

type ShopTab = "lojas" | "informacoes";

function ShopStopSheet({ card, region, onClose }: StopSheetProps & { region: ShopRegion }) {
  const [tab, setTab] = useState<ShopTab>("lojas");
  const marks = useStoreMarks(region);
  // A lista de lojas vive na aba "Lojas"; a seção de texto "Lojas" do cartão não se repete.
  const infoSections = card.sections.filter((section) => section.title !== SHOP_SECTION_TITLE);

  return (
    <BottomSheet
      title={card.name}
      onClose={onClose}
      maxHeightPercent={SHOP_SHEET_MAX_HEIGHT_PERCENT}
      header={<StopHeader card={card} subtitle={describeShopStop(marks.summary)} />}
      subheader={<ShopTabs selected={tab} onSelect={setTab} />}
    >
      {tab === "lojas" ? <StoreList region={region} marks={marks} /> : <DetailSections sections={infoSections} />}
    </BottomSheet>
  );
}

function ShopTabs({ selected, onSelect }: { selected: ShopTab; onSelect: (tab: ShopTab) => void }) {
  const tabs: { key: ShopTab; label: string }[] = [
    { key: "lojas", label: "Lojas" },
    { key: "informacoes", label: "Informações" },
  ];
  return (
    <div role="tablist" className="flex gap-1 rounded-[14px] bg-paper-dark p-1">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={key === selected}
          onClick={() => onSelect(key)}
          className={`min-h-11 flex-1 rounded-[11px] px-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-citrus ${
            key === selected ? "bg-ink text-paper" : "text-ink"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
