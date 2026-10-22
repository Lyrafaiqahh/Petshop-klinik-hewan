import type { PriceEstimate } from "@/lib/pricing";

export type Promotion = {
  slug: string;
  title: string;
  description: string;
  price: PriceEstimate;
  badge: string;
  terms: string;
  href: string;
};

export const promotions: Promotion[] = [
  {
    slug: "pemeriksaan-awal",
    title: "Pemeriksaan Awal",
    description:
      "Konsultasi dan pemeriksaan dasar untuk anabul baru, termasuk catatan rekomendasi perawatan.",
    price: { kind: "fixed", amount: 75000 },
    badge: "Promo demo",
    terms: "Harga simulasi, belum termasuk obat atau tindakan lanjutan.",
    href: "/booking?layanan=konsultasi#form-booking",
  },
  {
    slug: "grooming-ceria",
    title: "Grooming Ceria",
    description:
      "Paket grooming kucing dengan mandi, sisir, potong kuku, dan pembersihan telinga.",
    price: { kind: "from", amount: 85000 },
    badge: "Promo demo",
    terms:
      "Harga simulasi per sesi. Hasil dan durasi menyesuaikan kondisi bulu.",
    href: "/booking?layanan=grooming-kucing#form-booking",
  },
  {
    slug: "pet-hotel",
    title: "Pet Hotel",
    description:
      "Menginap nyaman dengan kandang bersih, jadwal makan, dan waktu bermain teratur.",
    price: { kind: "from", amount: 100000, unit: "per malam" },
    badge: "Promo demo",
    terms: "Harga simulasi per malam. Syarat vaksin dan kesehatan berlaku.",
    href: "/booking?layanan=pet-hotel#form-booking",
  },
];

export const promotionsNote =
  "Seluruh promo dan harga di atas adalah data simulasi untuk keperluan demo. Konfirmasi ketersediaan promo melalui admin sebelum booking.";
