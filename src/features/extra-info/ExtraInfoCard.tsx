import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import type { ExtraInfoItem, ExtraInfoContent } from "../../data/global/extraInfo";
import { ShoeSizeChart } from "./ShoeSizeChart";
import { GroceryList } from "./GroceryList";
import { TrashInstructions } from "./TrashInstructions";
import { WeightConverter } from "./WeightConverter";

export function ExtraInfoCard({ item }: { item: ExtraInfoItem }) {
  const Icon = item.icon;

  return (
    <section className="mb-4 rounded-xl border border-ink/10 bg-cardbg p-5">
      <h3 className="mb-2 flex items-center gap-2 font-serif text-[17px] font-semibold text-ink">
        <Icon className="h-4.5 w-4.5 text-citrus" />
        {item.title}
      </h3>
      <p className="mb-3 text-[13.5px] text-ink-soft">{item.description}</p>
      <CardContent content={item.content} />
    </section>
  );
}

function CardContent({ content }: { content: ExtraInfoContent }) {
  switch (content.kind) {
    case "externalLink":
      return (
        <a
          href={content.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3.5 py-1.5 text-[12.5px] font-semibold text-ink transition-colors hover:border-palm hover:text-palm"
        >
          <ExternalLinkIcon className="h-3.5 w-3.5" />
          Abrir
        </a>
      );
    case "shoeSizeChart":
      return <ShoeSizeChart />;
    case "trashInstructions":
      return <TrashInstructions />;
    case "weightConverter":
      return <WeightConverter />;
    case "groceryList":
      return <GroceryList />;
  }
}
