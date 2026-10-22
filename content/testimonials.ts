export type Testimonial = {
  name: string;
  pet: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rani",
    pet: "Mochi, kucing domestik",
    location: "Lowokwaru",
    quote:
      "Penjelasan dokter cukup detail dan tidak terburu-buru. Saya jadi tahu langkah perawatan yang harus dilakukan di rumah.",
    rating: 5,
  },
  {
    name: "Bagas",
    pet: "Oreo, anjing medium",
    location: "Klojen",
    quote:
      "Grooming-nya rapi dan anabul tidak terlihat stres saat diambil. Alur booking lewat WhatsApp juga jelas.",
    rating: 5,
  },
  {
    name: "Sinta",
    pet: "Kiko, kucing senior",
    location: "Blimbing",
    quote:
      "Syarat pet hotel dijelaskan di awal, jadi saya bisa menyiapkan buku vaksin dan makanan khusus sebelum menginap.",
    rating: 4,
  },
];

export const testimonialsNote =
  "Testimoni di atas adalah konten simulasi untuk demo. Bukan ulasan pelanggan nyata dan tidak dimaksudkan sebagai klaim hasil medis.";
