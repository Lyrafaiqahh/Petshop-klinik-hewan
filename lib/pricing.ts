import { siteConfig } from "@/content/site";

export type PriceEstimate =
  | { kind: "fixed"; amount: number; unit?: string }
  | { kind: "from"; amount: number; unit?: string }
  | { kind: "range"; min: number; max: number; unit?: string }
  | { kind: "text"; label: string };

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export function formatRupiah(amount: number): string {
  return rupiah.format(amount).replace(/\u00a0/g, " ");
}

export function formatPrice(price: PriceEstimate): string {
  switch (price.kind) {
    case "fixed":
      return formatRupiah(price.amount);
    case "from":
      return `Mulai dari ${formatRupiah(price.amount)}`;
    case "range":
      return `${formatRupiah(price.min)} – ${formatRupiah(price.max)}`;
    case "text":
      return price.label;
  }
}

export function formatPriceWithUnit(price: PriceEstimate): string {
  const value = formatPrice(price);
  return "unit" in price && price.unit ? `${value} ${price.unit}` : value;
}

export function formatDateId(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00+07:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("id-ID", {
    timeZone: siteConfig.timeZone,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatShortDateId(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00+07:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("id-ID", {
    timeZone: siteConfig.timeZone,
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}
