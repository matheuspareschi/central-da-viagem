import { Star } from "lucide-react";
import { RichText } from "../../components";
import { lanchesPriceLegend, type LanchesChain } from "../../data/global/lanches";

interface LanchesCardProps {
  chain: LanchesChain;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function LanchesCard({ chain, isFavorite, onToggleFavorite }: LanchesCardProps) {
  return (
    <li className="flex items-start gap-1 rounded-[20px] border border-line bg-cardbg py-3 pl-4 pr-1 shadow-card">
      <div className="min-w-0 flex-1 py-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="font-serif text-lg font-bold leading-tight text-ink [overflow-wrap:anywhere]">{chain.nome}</h3>
          <PriceBadge price={chain.preco} />
          {chain.daFlorida && (
            <span className="rounded-full bg-palm-tint px-2 py-0.5 text-xs font-semibold text-[#1f5a40]">Da Flórida</span>
          )}
        </div>
        <p className="mt-1 text-sm leading-snug text-ink-soft [overflow-wrap:anywhere]">
          <RichText text={chain.descricao} />
        </p>
      </div>
      <FavoriteStarButton name={chain.nome} isFavorite={isFavorite} onToggle={onToggleFavorite} />
    </li>
  );
}

function PriceBadge({ price }: { price: LanchesChain["preco"] }) {
  return (
    <span className="rounded-full bg-gold-tint px-2 py-0.5 font-mono text-xs font-semibold text-[#6b4a0b]">
      <span aria-hidden="true">{price}</span>
      <span className="sr-only">preço {lanchesPriceLegend[price].label}</span>
    </span>
  );
}

function FavoriteStarButton({ name, isFavorite, onToggle }: { name: string; isFavorite: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? `Remover ${name} dos favoritos` : `Favoritar ${name}`}
      className="flex h-11 w-11 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-citrus"
    >
      <Star
        className={`h-[22px] w-[22px] ${isFavorite ? "text-citrus" : "text-ink-soft"}`}
        fill={isFavorite ? "currentColor" : "none"}
        aria-hidden="true"
      />
    </button>
  );
}
