import type { ServiceIconKey } from "@/content/services";

export type BenefitIconKey =
  "wallet" | "calendar" | "heart" | "stethoscope" | "users";

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    secondaryCta: string;
    imageMain: string;
    imageMainAlt: string;
    imageSecondary: string;
    imageSecondaryAlt: string;
    badgeTitle: string;
    badgeDescription: string;
    hoursLabel: string;
    emergencyLabel: string;
    emergencyNote: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
  };
  promotions: {
    eyebrow: string;
    title: string;
    description: string;
    bookingLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    quote: string;
    quoteCaption: string;
    cta: string;
    benefits: {
      icon: BenefitIconKey;
      title: string;
      description: string;
    }[];
  };
  trust: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    metrics: {
      icon: BenefitIconKey;
      value: string;
      label: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
      icon: ServiceIconKey;
    }[];
  };
  doctors: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    scheduleLabel: string;
    bookingLabel: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    whatsappLabel: string;
    whatsappPrompt: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    note: string;
  };
};

export const home: HomeContent = {
  hero: {
    eyebrow: "Klinik hewan & petcare di Malang",
    title: "Perawatan Terbaik untuk Anabul Kesayangan.",
    description:
      "Dari pemeriksaan dokter dan vaksinasi sampai grooming, pet hotel, dan kebutuhan harian. Satu tempat yang bersih, tenang, dan transparan untuk anabul kesayanganmu.",
    secondaryCta: "Jelajahi Layanan",
    imageMain: "/images/hero-dog.jpg",
    imageMainAlt:
      "Ilustrasi anjing beagle tersenyum di luar ruangan (foto stok)",
    imageSecondary: "/images/hero-cat.jpg",
    imageSecondaryAlt: "Ilustrasi kucing tabby berbaring di sofa (foto stok)",
    badgeTitle: "Klinik · Grooming · Hotel · Petshop",
    badgeDescription: "Satu tempat untuk kebutuhan anabul",
    hoursLabel: "Jam buka hari ini",
    emergencyLabel: "Darurat? Telepon langsung",
    emergencyNote: "Data simulasi · bukan layanan darurat nyata",
  },
  services: {
    eyebrow: "Layanan utama",
    title: "Satu tempat untuk semua kebutuhan anabul.",
    description:
      "Layanan medis ditangani dengan alur yang jelas, sementara grooming dan penitipan dirancang agar anabul tetap nyaman.",
  },
  promotions: {
    eyebrow: "Promo demo",
    title: "Penawaran bulan ini.",
    description:
      "Contoh promo untuk memperlihatkan bagaimana informasi harga dan syarat ditampilkan. Semua angka adalah data simulasi.",
    bookingLabel: "Booking promo",
  },
  about: {
    eyebrow: "Tentang Ruang Anabul",
    title: "Perawatan yang tenang, penjelasan yang jelas.",
    description:
      "Kami menggabungkan layanan medis dan nonmedis dengan pendekatan yang tidak terburu-buru. Pemilik mendapat penjelasan tentang kondisi anabul, pilihan tindakan, dan estimasi biaya sebelum memutuskan.",
    image: "/images/about.jpg",
    imageAlt:
      "Ilustrasi tenaga medis memeriksa kucing dengan lembut (foto stok)",
    quote:
      "Anabul tidak bisa mengatakan apa yang dirasakan. Tugas kami mendengarkan lewat pemeriksaan yang teliti.",
    quoteCaption: "Tim Ruang Anabul · konten simulasi",
    cta: "Kenali layanan kami",
    benefits: [
      {
        icon: "wallet",
        title: "Informasi biaya transparan",
        description:
          "Estimasi harga dan kemungkinan tindakan dijelaskan sebelum pemilik memutuskan.",
      },
      {
        icon: "calendar",
        title: "Booking lebih praktis",
        description:
          "Pilih layanan, cabang, dan jadwal. Detail booking langsung disiapkan untuk WhatsApp.",
      },
      {
        icon: "heart",
        title: "Kenyamanan anabul",
        description:
          "Penanganan tenang, ruang bersih, dan waktu istirahat cukup selama perawatan.",
      },
      {
        icon: "stethoscope",
        title: "Medis dan nonmedis",
        description:
          "Pemeriksaan dokter, grooming, penitipan, dan kebutuhan harian dalam satu lokasi.",
      },
    ],
  },
  trust: {
    eyebrow: "Dipercaya pemilik anabul",
    title: "Angka yang menggambarkan pengalaman kami.",
    description:
      "Ringkasan ilustratif untuk demo. Angka di bawah bukan klaim bisnis nyata dan tidak menggantikan data operasional.",
    note: "Data simulasi untuk keperluan demo website.",
    metrics: [
      {
        icon: "heart",
        value: "1.200+",
        label: "anabul terlayani",
      },
      {
        icon: "users",
        value: "98%",
        label: "kepuasan pelanggan",
      },
      {
        icon: "calendar",
        value: "8+",
        label: "jenis layanan",
      },
      {
        icon: "stethoscope",
        value: "5",
        label: "dokter & tenaga profesional",
      },
    ],
  },
  process: {
    eyebrow: "Alur perawatan",
    title: "Tiga langkah, tanpa bingung.",
    description:
      "Alur dibuat sederhana agar kamu tahu apa yang perlu disiapkan sebelum datang ke klinik.",
    steps: [
      {
        title: "Pilih Layanan",
        description:
          "Tentukan layanan medis atau nonmedis yang paling sesuai dengan kebutuhan anabul.",
        icon: "stethoscope",
      },
      {
        title: "Tentukan Jadwal",
        description:
          "Isi detail booking, pilih tanggal dan waktu, lalu kirim ringkasannya lewat WhatsApp.",
        icon: "house",
      },
      {
        title: "Datang dan Dapatkan Perawatan",
        description:
          "Tunggu konfirmasi admin, datang sesuai jadwal, dan ceritakan kondisi anabul kepada dokter.",
        icon: "heart-pulse",
      },
    ],
  },
  doctors: {
    eyebrow: "Tim dokter",
    title: "Dokter yang mendampingi perawatan.",
    description:
      "Tiga profil dokter dengan fokus berbeda. Semua profil dan jadwal pada website demo ini adalah data simulasi.",
    badge: "Demo",
    scheduleLabel: "Ringkasan jadwal",
    bookingLabel: "Booking dokter",
  },
  gallery: {
    eyebrow: "Galeri",
    title: "Sekilas suasana perawatan.",
    description:
      "Kumpulan foto ilustrasi untuk memberi gambaran suasana klinik, grooming, dan waktu istirahat anabul.",
  },
  testimonials: {
    eyebrow: "Cerita pemilik",
    title: "Pengalaman yang ingin dibagikan.",
    description:
      "Tiga testimoni simulasi untuk memperlihatkan format ulasan pada website demo.",
    badge: "Testimoni demo",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang sering muncul.",
    description:
      "Belum menemukan jawaban? Tanyakan langsung ke admin melalui WhatsApp.",
    whatsappLabel: "Tanya admin via WhatsApp",
    whatsappPrompt: "Masih ada pertanyaan lain?",
  },
  cta: {
    eyebrow: "Mulai dari sini",
    title: "Siap merawat anabul hari ini?",
    description:
      "Pilih layanan dan jadwal yang nyaman, lalu lanjutkan konfirmasi lewat WhatsApp. Untuk kondisi darurat, telepon langsung ke nomor darurat.",
    image: "/images/cta-cat.jpg",
    imageAlt:
      "Ilustrasi kucing oranye beristirahat di dekat jendela (foto stok)",
    note: "Form booking bukan jalur darurat dan jadwal baru aktif setelah dikonfirmasi admin.",
  },
};
