import type { PriceEstimate } from "@/lib/pricing";

export type ServiceCategory = "medis" | "nonmedis";

export type ServiceTone = "lime" | "lavender" | "peach" | "sky";

export type ServiceIconKey =
  | "stethoscope"
  | "syringe"
  | "scissors"
  | "activity"
  | "bed"
  | "house"
  | "shopping-bag"
  | "heart-pulse"
  | "paw";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  price: PriceEstimate;
  icon: ServiceIconKey;
  tone: ServiceTone;
  duration?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
};

export type FeaturedService = {
  slug: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  tone: ServiceTone;
  icon: ServiceIconKey;
  meta: string;
};

export const serviceCategories: {
  value: ServiceCategory | "semua";
  label: string;
  description: string;
}[] = [
  {
    value: "semua",
    label: "Semua layanan",
    description: "Layanan medis dan nonmedis Ruang Anabul.",
  },
  {
    value: "medis",
    label: "Medis",
    description: "Pemeriksaan, pencegahan, tindakan, dan perawatan dokter.",
  },
  {
    value: "nonmedis",
    label: "Nonmedis",
    description: "Grooming, penitipan, dan kebutuhan harian anabul.",
  },
];

export const medicalServices: Service[] = [
  {
    slug: "konsultasi",
    name: "Konsultasi dan Pemeriksaan",
    category: "medis",
    description:
      "Pemeriksaan awal, wawancara riwayat kesehatan, dan rekomendasi tindakan oleh dokter hewan. Cocok untuk keluhan ringan maupun pemeriksaan rutin.",
    price: { kind: "range", min: 75000, max: 200000 },
    icon: "stethoscope",
    tone: "lime",
    duration: "± 20–30 menit",
    note: "Biaya akhir mengikuti kebutuhan pemeriksaan penunjang dan tindakan.",
  },
  {
    slug: "vaksinasi",
    name: "Vaksinasi",
    category: "medis",
    description:
      "Vaksinasi inti dan lanjutan sesuai usia, riwayat vaksin, serta kondisi hewan. Jadwal dan jenis vaksin ditentukan setelah pemeriksaan singkat.",
    price: { kind: "range", min: 150000, max: 450000 },
    icon: "syringe",
    tone: "sky",
    duration: "± 15–30 menit",
    note: "Hewan perlu dalam kondisi sehat saat vaksinasi.",
  },
  {
    slug: "sterilisasi",
    name: "Sterilisasi",
    category: "medis",
    description:
      "Tindakan sterilisasi kucing dan anjing dengan persiapan praoperasi, pemantauan, dan instruksi perawatan setelah tindakan.",
    price: { kind: "range", min: 500000, max: 2000000 },
    icon: "heart-pulse",
    tone: "peach",
    duration: "Tindakan + observasi",
    note: "Estimasi bergantung pada jenis kelamin, berat, dan kondisi hewan.",
  },
  {
    slug: "operasi",
    name: "Operasi",
    category: "medis",
    description:
      "Tindakan bedah umum setelah pemeriksaan dan diskusi rencana tindakan. Setiap operasi memerlukan persetujuan pemilik dan pemeriksaan praoperasi.",
    price: { kind: "from", amount: 1000000 },
    icon: "activity",
    tone: "lavender",
    note: "Rincian biaya diberikan setelah dokter menilai kondisi hewan.",
  },
  {
    slug: "rawat-inap",
    name: "Rawat Inap",
    category: "medis",
    description:
      "Pemantauan dan perawatan intensif untuk anabul yang membutuhkan observasi, cairan, obat, atau pemulihan pascaoperasi.",
    price: { kind: "range", min: 200000, max: 500000, unit: "per hari" },
    icon: "bed",
    tone: "sky",
    note: "Kebutuhan obat dan tindakan tambahan dihitung terpisah.",
  },
  {
    slug: "home-visit",
    name: "Home Visit",
    category: "medis",
    description:
      "Kunjungan dokter ke rumah untuk pemeriksaan atau vaksinasi pada anabul yang sulit dibawa ke klinik. Ketersediaan area dan jadwal dikonfirmasi admin.",
    price: { kind: "from", amount: 150000 },
    icon: "house",
    tone: "lime",
    note: "Biaya kunjungan belum termasuk tindakan atau obat.",
  },
];

export const nonMedicalServices: Service[] = [
  {
    slug: "grooming-kucing",
    name: "Grooming Kucing",
    category: "nonmedis",
    description:
      "Mandi, pengeringan, penyisiran, pembersihan telinga, dan potong kuku dengan penanganan yang tenang untuk kucing.",
    price: { kind: "from", amount: 85000 },
    icon: "scissors",
    tone: "lavender",
    duration: "± 45–90 menit",
    image: "/images/grooming-cat.jpg",
    imageAlt: "Ilustrasi kucing sedang disisir (foto stok)",
  },
  {
    slug: "grooming-anjing",
    name: "Grooming Anjing",
    category: "nonmedis",
    description:
      "Perawatan bulu dan kulit sesuai jenis bulu anjing, termasuk mandi, blow dry, sisir, potong kuku, dan pembersihan telinga.",
    price: { kind: "from", amount: 100000 },
    icon: "scissors",
    tone: "lime",
    duration: "± 60–120 menit",
    image: "/images/grooming.jpg",
    imageAlt: "Ilustrasi anjing sedang disisir (foto stok)",
  },
  {
    slug: "pet-hotel",
    name: "Pet Hotel",
    category: "nonmedis",
    description:
      "Penitipan harian dengan kandang bersih, jadwal makan, dan waktu bermain. Syarat kesehatan dan vaksinasi berlaku sebelum menginap.",
    price: { kind: "from", amount: 100000, unit: "per malam" },
    icon: "bed",
    tone: "sky",
    duration: "Per malam",
    image: "/images/hotel.jpg",
    imageAlt: "Ilustrasi anjing beristirahat di tempat tidur (foto stok)",
  },
  {
    slug: "petshop",
    name: "Petshop",
    category: "nonmedis",
    description:
      "Makanan, camilan, mainan, perlengkapan grooming, dan aksesori pilihan. Stok dan harga terbaru dapat ditanyakan lewat WhatsApp.",
    price: { kind: "text", label: "Harga di toko" },
    icon: "shopping-bag",
    tone: "peach",
    image: "/images/petshop.jpg",
    imageAlt: "Ilustrasi mangkuk makanan hewan berisi kibble (foto stok)",
  },
];

export const services: Service[] = [...medicalServices, ...nonMedicalServices];

export const featuredServices: FeaturedService[] = [
  {
    slug: "klinik-hewan",
    title: "Klinik Hewan",
    description:
      "Pemeriksaan, vaksinasi, dan tindakan medis dengan alur yang jelas dan biaya yang dijelaskan sejak awal.",
    href: "/layanan?kategori=medis#layanan",
    image: "/images/clinic.jpg",
    imageAlt: "Ilustrasi dokter hewan memeriksa anjing (foto stok)",
    tone: "lime",
    icon: "stethoscope",
    meta: "6 layanan medis",
  },
  {
    slug: "grooming",
    title: "Grooming",
    description:
      "Mandi, potong bulu, dan perawatan kuku untuk kucing dan anjing dengan penanganan yang sabar.",
    href: "/layanan?kategori=nonmedis#layanan",
    image: "/images/grooming.jpg",
    imageAlt: "Ilustrasi penyisiran bulu anjing (foto stok)",
    tone: "lavender",
    icon: "scissors",
    meta: "Mulai Rp 85.000",
  },
  {
    slug: "pet-hotel",
    title: "Pet Hotel",
    description:
      "Penitipan dengan jadwal makan, waktu bermain, dan pemeriksaan kesehatan dasar sebelum menginap.",
    href: "/layanan?kategori=nonmedis#layanan",
    image: "/images/hotel.jpg",
    imageAlt: "Ilustrasi anjing beristirahat di kasur (foto stok)",
    tone: "peach",
    icon: "bed",
    meta: "Mulai Rp 100.000/malam",
  },
  {
    slug: "petshop",
    title: "Petshop",
    description:
      "Kebutuhan harian anabul, dari makanan dan camilan sampai mainan dan perlengkapan grooming.",
    href: "/layanan#petshop",
    image: "/images/petshop.jpg",
    imageAlt: "Ilustrasi mangkuk kibble dan camilan hewan (foto stok)",
    tone: "sky",
    icon: "shopping-bag",
    meta: "5 kategori produk",
  },
];

export const medicalPriceNote =
  "Harga medis adalah estimasi awal. Biaya final ditentukan setelah dokter memeriksa kondisi hewan dan menyetujui rencana tindakan bersama pemilik.";
