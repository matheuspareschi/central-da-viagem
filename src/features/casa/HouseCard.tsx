import { Check, Copy, MapPin, Phone } from "lucide-react";
import { houseInfo } from "../../data/global/contacts";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { toDialableNumber } from "../../lib/phone";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(houseInfo.address)}`;

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-citrus";
const controlClasses = `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-house-control text-ink ${focusRing}`;
const rowClasses = "flex items-center gap-2 border-t border-house-divider py-3";

export function HouseCard() {
  return (
    <section className="rounded-[20px] border border-house-border bg-house p-[18px]">
      <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-house-label">
        <MapPin className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden="true" />
        Onde estamos
      </h2>
      <p className="mt-2 font-serif text-2xl font-bold leading-[1.15]">{houseInfo.name}</p>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-1.5 block text-base leading-[1.4] underline underline-offset-[3px] ${focusRing}`}
      >
        {houseInfo.address}
      </a>
      <p className="mt-0.5 text-[13px] text-house-label">Toque para abrir no mapa</p>
      <p className="mt-2 text-sm leading-[1.4]">
        <b>Entrada do condomínio:</b> {houseInfo.communityEntrance}
      </p>

      <div className="mt-3.5">
        <CopyableRow label="Wi-Fi · rede" value={houseInfo.wifiNetwork} copyLabel="Copiar nome da rede Wi-Fi" />
        <CopyableRow label="Wi-Fi · senha" value={houseInfo.wifiPassword} copyLabel="Copiar senha do Wi-Fi" />
        <CopyableRow label="Se não funcionar, tente" value={houseInfo.wifiFallbackPassword} copyLabel="Copiar senha alternativa do Wi-Fi" />
        <OwnerSmsRow />
      </div>
    </section>
  );
}

function InfoValue({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-house-label">{label}</span>
      <span className="font-mono text-[17px] font-medium [overflow-wrap:anywhere]">{value}</span>
    </span>
  );
}

function CopyableRow({ label, value, copyLabel }: { label: string; value: string; copyLabel: string }) {
  return (
    <div className={rowClasses}>
      <InfoValue label={label} value={value} />
      <CopyButton text={value} label={copyLabel} />
    </div>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const { copied, copy } = useCopyToClipboard(text);
  const Icon = copied ? Check : Copy;

  return (
    <button type="button" onClick={copy} aria-label={label} className={controlClasses}>
      <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
      <span role="status" className="sr-only">
        {copied ? "Copiado" : ""}
      </span>
    </button>
  );
}

function OwnerSmsRow() {
  const phone = houseInfo.ownerSmsPhone;

  return (
    <a
      href={`sms:${toDialableNumber(phone)}`}
      aria-label={`Enviar SMS para o dono da casa, ${phone}`}
      className={`${rowClasses} ${focusRing}`}
    >
      <InfoValue label="Dono da casa (SMS)" value={phone} />
      <span className={controlClasses}>
        <Phone className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
      </span>
    </a>
  );
}
