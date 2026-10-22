import type { Metadata } from "next";
import { HomeHero } from "@/components/pages/home/hero";
import { HomeServices } from "@/components/pages/home/services";
import { HomePromotions } from "@/components/pages/home/promotions";
import { HomeAbout } from "@/components/pages/home/about";
import { HomeTrust } from "@/components/pages/home/trust";
import { HomeProcess } from "@/components/pages/home/process";
import { HomeDoctors } from "@/components/pages/home/doctors-preview";
import { HomeGallery } from "@/components/pages/home/gallery";
import { HomeTestimonials } from "@/components/pages/home/testimonials";
import { HomeFaq } from "@/components/pages/home/faq";
import { HomeCta } from "@/components/pages/home/cta";
import { JsonLd } from "@/components/layouts/json-ld";
import { siteConfig } from "@/content/site";
import { businessJsonLd, createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Klinik Hewan & Petshop di Malang",
  description: siteConfig.description,
  path: "/",
  image: "/images/hero-dog.jpg",
  imageAlt: "Ilustrasi anjing beagle tersenyum (foto stok)",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <HomeHero />
      <HomeServices />
      <HomePromotions />
      <HomeAbout />
      <HomeTrust />
      <HomeProcess />
      <HomeDoctors />
      <HomeGallery />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
