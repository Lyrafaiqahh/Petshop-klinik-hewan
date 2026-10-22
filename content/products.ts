export type ProductCategory =
  "Makanan" | "Camilan" | "Mainan" | "Grooming" | "Aksesori";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  imageAlt: string;
  availability: string;
};

export const productCategories: ProductCategory[] = [
  "Makanan",
  "Camilan",
  "Mainan",
  "Grooming",
  "Aksesori",
];

export const products: Product[] = [
  {
    slug: "kibble-seimbang",
    name: "Kibble Seimbang Kucing & Anjing",
    category: "Makanan",
    description:
      "Pilihan makanan kering harian untuk kucing dan anjing dewasa. Stok rasa dan ukuran kemasan dapat ditanyakan ke admin.",
    image: "/images/petshop.jpg",
    imageAlt: "Ilustrasi mangkuk berisi kibble hewan (foto stok)",
    availability: "Tersedia beberapa ukuran kemasan",
  },
  {
    slug: "camilan-gigi",
    name: "Camilan Gigi",
    category: "Camilan",
    description:
      "Camilan kunyah untuk membantu aktivitas mengunyah anabul. Pilih ukuran sesuai berat dan jenis hewan.",
    image: "/images/beagle.jpg",
    imageAlt: "Ilustrasi anjing beagle yang ceria (foto stok)",
    availability: "Stok terbatas, cek ke admin",
  },
  {
    slug: "mainan-interaktif",
    name: "Mainan Interaktif",
    category: "Mainan",
    description:
      "Mainan kunyah dan permainan interaktif untuk menjaga anabul tetap aktif di rumah.",
    image: "/images/product-toys.jpg",
    imageAlt: "Ilustrasi anjing membawa mainan (foto stok)",
    availability: "Tersedia beberapa pilihan",
  },
  {
    slug: "sampo-sisir",
    name: "Sampo & Sisir Grooming",
    category: "Grooming",
    description:
      "Perlengkapan mandi dan penyisiran untuk perawatan bulu di rumah. Tanyakan kecocokan produk untuk jenis bulu anabul.",
    image: "/images/grooming.jpg",
    imageAlt: "Ilustrasi anjing berbulu putih (foto stok)",
    availability: "Tersedia di toko",
  },
  {
    slug: "harness-aksesori",
    name: "Harness & Aksesori",
    category: "Aksesori",
    description:
      "Harness, kalung, dan aksesori jalan-jalan dengan ukuran yang bisa disesuaikan. Cek ukuran sebelum membeli.",
    image: "/images/product-accessory.jpg",
    imageAlt: "Ilustrasi kucing memakai kacamata aksesori (foto stok)",
    availability: "Cek warna dan ukuran via WhatsApp",
  },
];

export const productsNote =
  "Katalog ini hanya untuk informasi. Tidak ada cart atau checkout di website. Harga dan stok merupakan data simulasi dan dikonfirmasi melalui WhatsApp atau saat berkunjung.";
