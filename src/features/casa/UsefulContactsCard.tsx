import { Phone } from "lucide-react";
import { usefulContacts, type UsefulContact } from "../../data/global/contacts";
import { toDialableNumber } from "../../lib/phone";

export function UsefulContactsCard() {
  return (
    <section className="rounded-[20px] border border-line bg-cardbg px-[18px] pb-2 pt-[18px]">
      <h2 className="pb-1.5 text-xs font-bold uppercase tracking-widest text-ink-soft">Contatos úteis</h2>
      {usefulContacts.map((contact) => (
        <ContactRow key={contact.name} contact={contact} />
      ))}
    </section>
  );
}

function ContactRow({ contact: { name, detail, phone } }: { contact: UsefulContact }) {
  const supportingText = [detail, phone].filter(Boolean).join(" · ");

  return (
    <a
      href={`tel:${toDialableNumber(phone)}`}
      aria-label={`Ligar para ${name}, ${phone}`}
      className="flex min-h-16 items-center gap-3 border-t border-line-soft py-2.5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-citrus"
    >
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-base font-semibold">{name}</span>
        <span className="text-sm text-ink-soft">{supportingText}</span>
      </span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
        <Phone className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
      </span>
    </a>
  );
}
