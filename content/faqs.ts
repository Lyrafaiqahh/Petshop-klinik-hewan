export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "biaya-konsultasi",
    question: "Berapa biaya konsultasi dan pemeriksaan?",
    answer:
      "Estimasi konsultasi dan pemeriksaan adalah Rp 75.000–Rp 200.000. Biaya final bergantung pada pemeriksaan penunjang, obat, atau tindakan yang diperlukan setelah dokter menilai kondisi anabul. Semua angka di website ini adalah data simulasi.",
  },
  {
    id: "booking",
    question: "Apakah harus booking sebelum datang?",
    answer:
      "Booking sangat disarankan agar waktu tunggu lebih singkat dan jadwal dokter sesuai. Gunakan form booking untuk menyiapkan pesan WhatsApp, lalu kirim pesan tersebut. Jadwal baru dianggap terisi setelah admin mengonfirmasi.",
  },
  {
    id: "darurat",
    question: "Bagaimana prosedur untuk kondisi darurat?",
    answer:
      "Untuk kondisi darurat, jangan menggunakan form booking atau menunggu balasan WhatsApp. Telepon nomor darurat yang tertera di website, lalu ikuti arahan petugas. Nomor tersebut adalah data simulasi dan tidak dipantau secara nyata.",
  },
  {
    id: "jenis-hewan",
    question: "Hewan apa saja yang bisa ditangani?",
    answer:
      "Layanan utama ditujukan untuk kucing dan anjing. Untuk hewan lain, tanyakan terlebih dahulu melalui WhatsApp agar kami dapat memastikan ketersediaan dokter dan peralatan.",
  },
  {
    id: "pet-hotel",
    question: "Apa syarat penitipan di pet hotel?",
    answer:
      "Anabul perlu memiliki riwayat vaksinasi dasar yang berlaku, lulus pemeriksaan kesehatan singkat, bebas kutu dan jamur, serta membawa instruksi makan dan obat rutin. Syarat lengkap ditampilkan di halaman layanan sebelum booking.",
  },
  {
    id: "harga-final",
    question: "Apakah harga di website sudah final?",
    answer:
      "Harga nonmedis seperti paket grooming dan pet hotel tertera per paket. Harga medis berupa estimasi dan dapat berubah setelah pemeriksaan. Promo, harga, dan ketersediaan pada website demo ini seluruhnya merupakan data simulasi.",
  },
];
