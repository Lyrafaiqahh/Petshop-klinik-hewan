import type { Weekday } from "@/content/site";

export type DoctorSchedule = {
  day: Weekday;
  time: string;
};

export type DoctorTone = "lime" | "lavender" | "peach";

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  initials: string;
  image: string;
  imageAlt: string;
  focusAreas: string[];
  credentials: string[];
  summary: string[];
  schedule: DoctorSchedule[];
  tone: DoctorTone;
};

export const weekdays: Weekday[] = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];

export const doctors: Doctor[] = [
  {
    slug: "aditya-pratama",
    name: "drh. Aditya Pratama",
    role: "Dokter hewan umum",
    focus: "Perawatan umum dan penyakit dalam",
    bio: "Menangani pemeriksaan rutin, keluhan pencernaan, dan penyakit dalam pada kucing dan anjing. Fokus pada penjelasan diagnosis yang mudah dipahami pemilik.",
    initials: "AP",
    image: "/images/doctor-aditya-portrait.jpg",
    imageAlt:
      "Ilustrasi dokter hewan pria memeriksa anjing di klinik (foto stok)",
    focusAreas: ["Pemeriksaan umum", "Penyakit dalam", "Konsultasi perawatan"],
    credentials: [
      "Dokter hewan umum (profil simulasi)",
      "Minat khusus penyakit dalam",
      "Pengalaman klinik 8+ tahun (simulasi)",
    ],
    summary: [
      "Senin, Selasa, Kamis, Sabtu · 08.00–14.00",
      "Rabu · 14.00–20.00",
      "Jumat · 09.00–15.00",
    ],
    schedule: [
      { day: "Senin", time: "08.00–14.00" },
      { day: "Selasa", time: "08.00–14.00" },
      { day: "Rabu", time: "14.00–20.00" },
      { day: "Kamis", time: "08.00–14.00" },
      { day: "Jumat", time: "09.00–15.00" },
      { day: "Sabtu", time: "08.00–14.00" },
      { day: "Minggu", time: "Konfirmasi" },
    ],
    tone: "lime",
  },
  {
    slug: "nadia-putri",
    name: "drh. Nadia Putri",
    role: "Dokter hewan umum",
    focus: "Kedokteran preventif dan vaksinasi",
    bio: "Membantu pemilik menyusun jadwal vaksinasi, pemeriksaan berkala, dan pencegahan penyakit menular sesuai usia serta gaya hidup anabul.",
    initials: "NP",
    image: "/images/doctor-nadia-portrait.jpg",
    imageAlt: "Ilustrasi dokter hewan wanita mengenakan jas putih (foto stok)",
    focusAreas: ["Vaksinasi", "Kedokteran preventif", "Edukasi pemilik"],
    credentials: [
      "Dokter hewan umum (profil simulasi)",
      "Minat khusus kedokteran preventif",
      "Pengalaman vaksinasi 6+ tahun (simulasi)",
    ],
    summary: [
      "Selasa, Sabtu · 09.00–15.00",
      "Senin, Kamis · 14.00–20.00",
      "Rabu, Jumat · 08.00–14.00",
    ],
    schedule: [
      { day: "Senin", time: "14.00–20.00" },
      { day: "Selasa", time: "09.00–15.00" },
      { day: "Rabu", time: "08.00–14.00" },
      { day: "Kamis", time: "14.00–20.00" },
      { day: "Jumat", time: "08.00–14.00" },
      { day: "Sabtu", time: "09.00–15.00" },
      { day: "Minggu", time: "Konfirmasi" },
    ],
    tone: "lavender",
  },
  {
    slug: "rizky-mahendra",
    name: "drh. Rizky Mahendra",
    role: "Dokter hewan umum",
    focus: "Bedah dan rehabilitasi hewan",
    bio: "Menangani tindakan bedah umum, perawatan pascaoperasi, dan program pemulihan bertahap untuk anabul yang membutuhkan rehabilitasi.",
    initials: "RM",
    image: "/images/doctor-rizky-portrait.jpg",
    imageAlt:
      "Ilustrasi dokter hewan pria memegang anjing pomeranian (foto stok)",
    focusAreas: ["Tindakan bedah", "Perawatan pascaoperasi", "Rehabilitasi"],
    credentials: [
      "Dokter hewan umum (profil simulasi)",
      "Minat khusus bedah hewan",
      "Pengalaman rehabilitasi 7+ tahun (simulasi)",
    ],
    summary: [
      "Senin, Rabu, Kamis · 09.00–15.00",
      "Selasa, Jumat, Sabtu · 14.00–20.00",
    ],
    schedule: [
      { day: "Senin", time: "09.00–15.00" },
      { day: "Selasa", time: "14.00–20.00" },
      { day: "Rabu", time: "09.00–15.00" },
      { day: "Kamis", time: "09.00–15.00" },
      { day: "Jumat", time: "14.00–20.00" },
      { day: "Sabtu", time: "14.00–20.00" },
      { day: "Minggu", time: "Konfirmasi" },
    ],
    tone: "peach",
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}

export const doctorsNote =
  "Nama, profil, kredensial, dan jadwal dokter pada halaman ini adalah data simulasi. Bukan tenaga medis atau fasilitas nyata. Konfirmasi jadwal praktik melalui admin sebelum datang.";
