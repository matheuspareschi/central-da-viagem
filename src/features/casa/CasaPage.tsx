import { EmergencyLink } from "./EmergencyLink";
import { HouseCard } from "./HouseCard";
import { UsefulContactsCard } from "./UsefulContactsCard";

export function CasaPage() {
  return (
    <div className="-mt-7 flex flex-col gap-4">
      <h1 className="flex h-14 items-center font-serif text-[28px] font-bold tracking-tight">Essenciais</h1>
      <EmergencyLink />
      <HouseCard />
      <UsefulContactsCard />
    </div>
  );
}
