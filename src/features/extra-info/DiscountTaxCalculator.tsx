import { useState } from "react";
import { readStorage, writeStorage } from "../../lib/storage";
import { formatDecimal, formatFixedDecimal, parseDecimal } from "../../utils/decimal";
import { calcularPreco, readPercent, type PriceBreakdown } from "../../utils/price";
import { ClearButton, NumberField } from "./NumberField";

const TAX_STORAGE_KEY = "calc:imposto";
const PERCENT_ERROR = "Digite um valor entre 0 e 100.";
const PRICE_ERROR = "Digite um valor válido.";

function readPercentField(text: string): { value?: number; error?: string } {
  const reading = readPercent(text);
  return reading.kind === "value" ? { value: reading.value } : { error: PERCENT_ERROR };
}

function formatDollars(value: number): string {
  return `US$ ${formatFixedDecimal(value)}`;
}

/** Preço de etiqueta com até dois descontos e o imposto da loja, na ordem usada nas lojas dos EUA. */
export function DiscountTaxCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [extraDiscount, setExtraDiscount] = useState("");
  const [tax, setTax] = useState(() => readStorage<string>(TAX_STORAGE_KEY, ""));

  function typeTax(text: string) {
    setTax(text);
    writeStorage(TAX_STORAGE_KEY, text);
  }

  function clear() {
    setPrice("");
    setDiscount("");
    setExtraDiscount("");
    typeTax("");
  }

  const priceValue = parseDecimal(price);
  const priceError = price.trim() !== "" && priceValue === undefined ? PRICE_ERROR : undefined;
  const discountField = readPercentField(discount);
  const extraDiscountField = readPercentField(extraDiscount);
  const taxField = readPercentField(tax);
  const breakdown =
    priceValue !== undefined && discountField.value !== undefined && extraDiscountField.value !== undefined && taxField.value !== undefined
      ? calcularPreco({ preco: priceValue, d1: discountField.value, d2: extraDiscountField.value, imposto: taxField.value })
      : undefined;

  return (
    <div>
      <div className="space-y-3">
        <NumberField id="calc-price" label="Preço na etiqueta" value={price} onChange={setPrice} unit="US$" unitPosition="prefix" error={priceError} />
        <div className="flex gap-3">
          <NumberField id="calc-discount" label="Desconto (%)" value={discount} onChange={setDiscount} unit="%" error={discountField.error} />
          <NumberField id="calc-extra-discount" label="Desconto extra (%)" value={extraDiscount} onChange={setExtraDiscount} unit="%" error={extraDiscountField.error} />
        </div>
        <p className="text-xs text-ink-soft">20% off + 25% extra: o extra vale sobre o preço já reduzido.</p>
        <NumberField
          id="calc-tax"
          label="Imposto da loja (%)"
          value={tax}
          onChange={typeTax}
          unit="%"
          hint="Imposto de venda varia por condado. Digite o da loja."
          error={taxField.error}
        />
      </div>
      <ClearButton onClick={clear} />
      {breakdown && <PriceResult breakdown={breakdown} />}
    </div>
  );
}

function PriceResult({ breakdown }: { breakdown: PriceBreakdown }) {
  const hasDiscount = breakdown.savings > 0;

  return (
    <dl aria-live="polite" className="mt-4 rounded-xl bg-paper-inset p-4 text-[15px] text-ink">
      <ResultRow label="Preço original" value={formatDollars(breakdown.original)} />
      {hasDiscount && (
        <ResultRow
          label="Você economiza"
          value={`${formatDollars(breakdown.savings)} (${formatDecimal(breakdown.savingsPercent)}%)`}
          valueClasses="text-[#1f5a40]"
        />
      )}
      <ResultRow label="Preço com desconto" value={formatDollars(breakdown.discounted)} />
      <ResultRow label="Imposto" value={`+ ${formatDollars(breakdown.tax)}`} />
      <div className="mt-3 border-t-2 border-ink pt-3">
        <dt className="text-sm font-semibold">Total a pagar</dt>
        <dd className="font-serif text-[32px] font-bold leading-tight">{formatDollars(breakdown.total)}</dd>
      </div>
    </dl>
  );
}

function ResultRow({ label, value, valueClasses = "" }: { label: string; value: string; valueClasses?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-1">
      <dt className="text-ink-soft">{label}</dt>
      <dd className={`text-right font-mono font-semibold ${valueClasses}`}>{value}</dd>
    </div>
  );
}
