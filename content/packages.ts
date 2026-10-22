export type PackageCategory = "grooming" | "hotel";

export type ServicePackage = {
  slug: string;
  category: PackageCategory;
  name: string;
  description: string;
  amount: number;
  unit: string;
  duration: string;
  includes: string[];
  highlight?: boolean;
};

export type HotelPolicy = {
  title: string;
  description: string;
};

export const servicePackages: ServicePackage[] = [
  {
    slug: "grooming-basic",
    category: "grooming",
    name: "Basic",
    description:
      "Perawatan dasar untuk anabul yang rutin dimandikan dan disisir.",
    amount: 85000,
    unit: "per sesi",
    duration: "± 45–60 menit",
    includes: ["Mandi", "Blow dry", "Sisir bulu", "Potong kuku"],
  },
  {
    slug: "grooming-complete",
    category: "grooming",
    name: "Complete",
    description:
      "Paket favorit untuk perawatan menyeluruh dengan hasil bulu yang lebih rapi.",
    amount: 150000,
    unit: "per sesi",
    duration: "± 60–90 menit",
    includes: [
      "Semua di paket Basic",
      "Pembersihan telinga",
      "Grooming wajah",
      "Parfum hewan",
    ],
    highlight: true,
  },
  {
    slug: "grooming-premium",
    category: "grooming",
    name: "Premium",
    description:
      "Perawatan lengkap dengan styling bulu dan penanganan ekstra untuk bulu panjang.",
    amount: 225000,
    unit: "per sesi",
    duration: "± 90–120 menit",
    includes: [
      "Semua di paket Complete",
      "Styling bulu",
      "Masker bulu",
      "Pemeriksaan kulit ringan",
    ],
  },
  {
    slug: "hotel-standard",
    category: "hotel",
    name: "Standard",
    description:
      "Kandang bersih dengan jadwal makan dan waktu bermain yang teratur.",
    amount: 100000,
    unit: "per malam",
    duration: "1 malam",
    includes: [
      "Kandang individu",
      "Makan 2x",
      "Waktu bermain",
      "Update harian",
    ],
  },
  {
    slug: "hotel-comfort",
    category: "hotel",
    name: "Comfort",
    description:
      "Ruang lebih lega dengan waktu bermain tambahan dan update lebih sering.",
    amount: 175000,
    unit: "per malam",
    duration: "1 malam",
    includes: [
      "Kandang lebih lega",
      "Makan 2x + camilan",
      "Waktu bermain lebih lama",
      "Foto dan video harian",
    ],
    highlight: true,
  },
  {
    slug: "hotel-premium",
    category: "hotel",
    name: "Premium",
    description: "Ruang terbesar dengan perawatan bulu ringan selama menginap.",
    amount: 250000,
    unit: "per malam",
    duration: "1 malam",
    includes: [
      "Ruang premium",
      "Makan 2x + camilan",
      "Grooming ringan",
      "Laporan harian lengkap",
    ],
  },
];

export const hotelPolicies: HotelPolicy[] = [
  {
    title: "Vaksinasi wajib",
    description:
      "Anabul harus memiliki riwayat vaksinasi dasar yang masih berlaku. Bawa buku vaksin atau bukti digital saat check-in.",
  },
  {
    title: "Pemeriksaan kesehatan",
    description:
      "Pemeriksaan singkat dilakukan sebelum menginap untuk memastikan tidak ada tanda penyakit menular.",
  },
  {
    title: "Bebas kutu dan jamur",
    description:
      "Anabul perlu bebas kutu dan tidak menunjukkan tanda jamur atau infeksi kulit saat tiba.",
  },
  {
    title: "Instruksi makan",
    description:
      "Tuliskan jenis makanan, porsi, jam makan, dan obat rutin. Makanan khusus sebaiknya dibawa sendiri.",
  },
];

export const groomingPackages = servicePackages.filter(
  (item) => item.category === "grooming",
);

export const hotelPackages = servicePackages.filter(
  (item) => item.category === "hotel",
);
