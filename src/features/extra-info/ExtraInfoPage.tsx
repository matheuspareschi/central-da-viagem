import { BackButton } from "../../components";
import { extraInfoItems } from "../../data/global/extraInfo";
import { ExtraInfoCard } from "./ExtraInfoCard";

export function ExtraInfoPage() {
  return (
    <div className="mx-auto max-w-175">
      <BackButton />
      <h1 className="mt-2 font-serif text-[30px] font-semibold text-ink sm:text-[34px]">
        Informações Extra
      </h1>
      <p className="mb-5 mt-1 text-[13.5px] text-ink-soft">
        Tabelas e avisos práticos para consultar durante a viagem.
      </p>

      <div>
        {extraInfoItems.map((item) => (
          <ExtraInfoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
