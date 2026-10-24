export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  span?: "tall" | "wide";
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/clinic.jpg",
    alt: "Ilustrasi dokter hewan memeriksa anjing berbulu panjang (foto stok)",
    caption: "Pemeriksaan rutin",
    span: "tall",
  },
  {
    src: "/images/gallery-cat.jpg",
    alt: "Ilustrasi kucing hitam putih di atas meja kayu (foto stok)",
    caption: "Anabul yang tenang",
  },
  {
    src: "/images/gallery-run.jpg",
    alt: "Ilustrasi dua anjing kecil berlari di jalan tanah (foto stok)",
    caption: "Waktu bermain",
  },
  {
    src: "/images/grooming.jpg",
    alt: "Ilustrasi penyisiran bulu anjing (foto stok)",
    caption: "Hasil grooming",
  },
  {
    src: "/images/gallery-grass.jpg",
    alt: "Ilustrasi anjing dan kucing beristirahat di rumput (foto stok)",
    caption: "Teman satu rumah",
    span: "wide",
  },
  {
    src: "/images/hotel.jpg",
    alt: "Ilustrasi anjing beristirahat di atas kasur (foto stok)",
    caption: "Istirahat di pet hotel",
  },
  {
    src: "/images/product-accessory.jpg",
    alt: "Ilustrasi kucing memakai kacamata sebagai aksesori (foto stok)",
    caption: "Aksesori pilihan",
  },
  {
    src: "/images/about.jpg",
    alt: "Ilustrasi tenaga medis memeriksa kucing (foto stok)",
    caption: "Pendampingan dokter",
  },
];

export const galleryNote =
  "Semua foto adalah stok dari penyedia foto gratis dan hanya berfungsi sebagai ilustrasi. Foto bukan pasien, dokter, atau fasilitas Ruang Anabul yang sebenarnya.";
