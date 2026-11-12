import { useState, type ReactNode } from "react";
import { Car, ChevronRight, ExternalLink, ListChecks, MapPin, ShoppingCart, type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BottomSheet, DetailSections, IconBadge } from "../../../components";
import { shopRegions } from "../../../data/shopping";
import { rememberScrollForReturn } from "../../../lib/scrollReturn";
import { describeShopStop } from "../../../lib/stores";
import type { ExtraLink, ShopRegion, StopCard } from "../../../types";
import { StoreList } from "./StoreList";
import { useStoreMarks } from "./useStoreMarks";

const SHOP_SHEET_MAX_HEIGHT_PERCENT = 78;
const SHOP_SECTION_TITLE = "Lojas";

interface StopSheetProps {
  card: StopCard;
  onClose: () => void;
  onOpenGroceryList?: () => void;
}

const actionClasses =
  "flex min-h-11 items-center gap-1.5 rounded-xl border-[1.5px] border-line px-3.5 text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-citrus";

/** Botões da parada: mapa, site oficial e lista de compras. Sem nenhum, a folha fica sem rodapé. */
function StopActions({ card, onOpenGroceryList }: Pick<StopSheetProps, "card" | "onOpenGroceryList">): ReactNode {
  const hasGroceryList = card.action === "groceryList" && onOpenGroceryList;
  if (!card.link && !card.siteUrl && !hasGroceryList) return undefined;
  return (
    <div className="flex flex-wrap gap-2">
      {card.link && <ExternalActionLink href={card.link} label="Abrir no mapa" icon={<MapPin className="h-4 w-4" aria-hidden="true" />} />}
      {card.siteUrl && <ExternalActionLink href={card.siteUrl} label="Site" icon={<ExternalLink className="h-4 w-4" aria-hidden="true" />} />}
      {hasGroceryList && (
        <button type="button" onClick={onOpenGroceryList} className={actionClasses}>
          <ListChecks className="h-4 w-4" aria-hidden="true" />
          Ver lista de compras básicas
        </button>
      )}
    </div>
  );
}

function ExternalActionLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={actionClasses}>
      {icon}
      {label}
      <ExternalLink className="h-3.5 w-3.5 text-ink-soft" aria-hidden="true" />
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  );
}

const extraLinkIcons: Record<ExtraLink["icon"], LucideIcon> = { car: Car, cart: ShoppingCart };

/**
 * Atalho secundário para uma ferramenta de Extras, no fim dos detalhes. Substitui a entrada da folha no
 * histórico, então o "voltar" devolve ao dia com a folha fechada; a rolagem do dia é guardada para o retorno.
 */
function ExtraLinkButton({ extraLink }: { extraLink: ExtraLink }) {
  const { pathname } = useLocation();
  const Icon = extraLinkIcons[extraLink.icon];

  return (
    <Link
      to={extraLink.route}
      replace
      state={{ returnToPreviousPage: true }}
      onClick={() => rememberScrollForReturn(pathname)}
      className="mt-4 flex min-h-[50px] w-full items-center gap-2.5 rounded-[14px] border-[1.5px] border-citrus-text bg-cardbg px-4 text-[15px] font-semibold text-citrus-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus"
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="min-w-0 flex-1 text-left [overflow-wrap:anywhere]">{extraLink.label}</span>
      <ChevronRight className="h-5 w-5 shrink-0" aria-hidden="true" />
    </Link>
  );
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
export function StopSheet({ card, onClose, onOpenGroceryList }: StopSheetProps) {
  const region = card.shopRegionId ? shopRegions[card.shopRegionId] : undefined;
  return region ? (
    <ShopStopSheet card={card} region={region} onClose={onClose} onOpenGroceryList={onOpenGroceryList} />
  ) : (
    <PlainStopSheet card={card} onClose={onClose} onOpenGroceryList={onOpenGroceryList} />
  );
}

function PlainStopSheet({ card, onClose, onOpenGroceryList }: StopSheetProps) {
  return (
    <BottomSheet
      title={card.name}
      onClose={onClose}
      header={<StopHeader card={card} subtitle={card.time} />}
      footer={<StopActions card={card} onOpenGroceryList={onOpenGroceryList} />}
    >
      <DetailSections sections={card.sections} />
      {card.extraLink && <ExtraLinkButton extraLink={card.extraLink} />}
    </BottomSheet>
  );
}

type ShopTab = "lojas" | "informacoes";

function ShopStopSheet({ card, region, onClose, onOpenGroceryList }: StopSheetProps & { region: ShopRegion }) {
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
      footer={<StopActions card={card} onOpenGroceryList={onOpenGroceryList} />}
    >
      {tab === "lojas" ? <StoreList region={region} marks={marks} /> : <DetailSections sections={infoSections} />}
      {card.extraLink && <ExtraLinkButton extraLink={card.extraLink} />}
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
