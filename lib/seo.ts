import type { Metadata } from "next";
import { faqs, type Faq } from "@/content/faqs";
import { siteConfig } from "@/content/site";

const englishDays: Record<string, string> = {
  Senin: "Monday",
  Selasa: "Tuesday",
  Rabu: "Wednesday",
  Kamis: "Thursday",
  Jumat: "Friday",
  Sabtu: "Saturday",
  Minggu: "Sunday",
};

const defaultOgImage = "/images/clinic.jpg";

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  imageAlt = "Ilustrasi dokter hewan memeriksa anjing (foto stok)",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: siteConfig.legalName,
      title,
      description,
      url: path,
      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.province,
    addressCountry: "ID",
  };
}

function openingHoursSpecification() {
  return siteConfig.hours.map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${englishDays[item.day]}`,
    opens: item.open.replace(".", ":"),
    closes: item.close.replace(".", ":"),
  }));
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VeterinaryCare",
        "@id": `${siteConfig.url}/#veterinary-care`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        description: `${siteConfig.description} Website ini adalah demo dengan data bisnis simulasi.`,
        telephone: siteConfig.emergency.display,
        image: `${siteConfig.url}/images/clinic.jpg`,
        priceRange: "Rp",
        currenciesAccepted: "IDR",
        address: postalAddress(),
        areaServed: {
          "@type": "City",
          name: siteConfig.address.city,
        },
        openingHoursSpecification: openingHoursSpecification(),
        disambiguatingDescription:
          "Bisnis fiktif untuk keperluan demo website. Nama, alamat, kontak, harga, dokter, dan testimoni adalah data simulasi, bukan layanan kesehatan hewan nyata.",
      },
      {
        "@type": "PetStore",
        "@id": `${siteConfig.url}/#pet-store`,
        name: `${siteConfig.name} Petshop`,
        url: `${siteConfig.url}/layanan#petshop`,
        description:
          "Katalog demo makanan, camilan, mainan, perlengkapan grooming, dan aksesori hewan. Tidak ada transaksi online.",
        telephone: siteConfig.whatsapp.display,
        image: `${siteConfig.url}/images/petshop.jpg`,
        address: postalAddress(),
        openingHoursSpecification: openingHoursSpecification(),
        disambiguatingDescription:
          "Toko hewan fiktif untuk demo. Stok dan harga tidak nyata.",
      },
    ],
  };
}

export function faqJsonLd(items: Faq[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
