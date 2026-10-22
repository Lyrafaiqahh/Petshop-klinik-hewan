export type Weekday =
  "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat" | "Sabtu" | "Minggu";

export type OpeningHours = {
  day: Weekday;
  open: string;
  close: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Address = {
  street: string;
  district: string;
  city: string;
  province: string;
  country: string;
};

export type ContactPoint = {
  display: string;
  value: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  address: Address;
  addressLines: string[];
  whatsapp: ContactPoint;
  emergency: ContactPoint;
  hours: OpeningHours[];
  timeZone: string;
  nav: NavItem[];
  ctas: {
    booking: string;
    whatsapp: string;
    callEmergency: string;
    contact: string;
    viewServices: string;
    viewSchedule: string;
    viewAllServices: string;
  };
  hoursStatus: {
    today: string;
    open: string;
    closed: string;
    closedToday: string;
    weekly: string;
    emergencyNote: string;
  };
  demoNotice: string;
  disclaimer: string;
  emergencyWarning: string;
  footer: {
    description: string;
    navigationTitle: string;
    servicesTitle: string;
    hoursTitle: string;
    contactTitle: string;
    demoTitle: string;
    copyright: string;
    buildNote: string;
    directionsLabel: string;
    serviceLinks: NavItem[];
  };
  a11y: {
    skipLink: string;
    openMenu: string;
    closeMenu: string;
    mainNavigation: string;
    mobileNavigation: string;
    footerNavigation: string;
    whatsappFloat: string;
    themeToLight: string;
    themeToDark: string;
    mapsNewTab: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Ruang Anabul",
  legalName: "Ruang Anabul Veterinary & Petcare",
  tagline: "Veterinary & Petcare",
  description:
    "Klinik hewan, grooming, pet hotel, dan petshop untuk anabul di Malang. Informasi layanan, jadwal dokter, dan booking berbasis konfirmasi.",
  url: "https://ruang-anabul.example.com",
  address: {
    street: "Jl. Soekarno Hatta No. 25",
    district: "Lowokwaru",
    city: "Kota Malang",
    province: "Jawa Timur",
    country: "Indonesia",
  },
  addressLines: [
    "Jl. Soekarno Hatta No. 25",
    "Lowokwaru, Kota Malang",
    "Jawa Timur, Indonesia",
  ],
  whatsapp: {
    display: "+62 812-3456-7890",
    value: "6281234567890",
  },
  emergency: {
    display: "+62 341-555-019",
    value: "+62341555019",
  },
  hours: [
    { day: "Senin", open: "08.00", close: "20.00" },
    { day: "Selasa", open: "08.00", close: "20.00" },
    { day: "Rabu", open: "08.00", close: "20.00" },
    { day: "Kamis", open: "08.00", close: "20.00" },
    { day: "Jumat", open: "08.00", close: "20.00" },
    { day: "Sabtu", open: "08.00", close: "20.00" },
    { day: "Minggu", open: "09.00", close: "15.00" },
  ],
  timeZone: "Asia/Jakarta",
  nav: [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Dokter", href: "/dokter" },
    { label: "Galeri", href: "/#galeri" },
    { label: "Kontak", href: "/kontak" },
  ],
  ctas: {
    booking: "Booking Sekarang",
    whatsapp: "Chat WhatsApp",
    callEmergency: "Telepon Darurat",
    contact: "Hubungi Kami",
    viewServices: "Jelajahi Layanan",
    viewSchedule: "Lihat Jadwal Dokter",
    viewAllServices: "Lihat Semua Layanan",
  },
  hoursStatus: {
    today: "Hari ini",
    open: "Buka sekarang",
    closed: "Tutup sekarang",
    closedToday: "Tutup hari ini",
    weekly: "Jam operasional",
    emergencyNote:
      "Untuk kondisi darurat, telepon langsung. Jangan menunggu balasan WhatsApp.",
  },
  demoNotice:
    "DEMO WEBSITE — Informasi bisnis, kontak, harga, dokter, dan testimoni pada website ini merupakan data simulasi.",
  disclaimer:
    "Informasi pada website ini hanya untuk tujuan informasi umum dan tidak menggantikan pemeriksaan atau diagnosis dokter hewan.",
  emergencyWarning:
    "DARURAT MEDIS: Jangan gunakan form booking atau menunggu balasan WhatsApp untuk kondisi darurat. Hubungi nomor telepon darurat secara langsung.",
  footer: {
    description:
      "Ruang untuk anabul tumbuh sehat dan bahagia. Layanan medis, grooming, penitipan, dan kebutuhan harian dalam satu tempat.",
    navigationTitle: "Navigasi",
    servicesTitle: "Layanan",
    hoursTitle: "Jam Buka",
    contactTitle: "Kontak",
    demoTitle: "Catatan demo",
    copyright:
      "© 2026 Ruang Anabul Veterinary & Petcare. Data bisnis simulasi.",
    buildNote:
      "Fotografi stok dari Unsplash, bukan pasien, dokter, atau fasilitas sebenarnya.",
    directionsLabel: "Petunjuk arah",
    serviceLinks: [
      { label: "Klinik hewan", href: "/layanan?kategori=medis#layanan" },
      { label: "Grooming", href: "/layanan?kategori=nonmedis#layanan" },
      { label: "Pet hotel", href: "/layanan?kategori=nonmedis#layanan" },
      { label: "Petshop", href: "/layanan#petshop" },
      { label: "Jadwal dokter", href: "/dokter" },
    ],
  },
  a11y: {
    skipLink: "Lompat ke konten utama",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    mainNavigation: "Navigasi utama",
    mobileNavigation: "Navigasi seluler",
    footerNavigation: "Navigasi footer",
    whatsappFloat: "Hubungi Ruang Anabul via WhatsApp",
    themeToLight: "Aktifkan mode terang",
    themeToDark: "Aktifkan mode gelap",
    mapsNewTab: "Buka petunjuk arah di Google Maps (tab baru)",
  },
  theme: {
    toLight: "Aktifkan mode terang",
    toDark: "Aktifkan mode gelap",
  },
};
