import type { Metadata } from "next";
import { LayananHero } from "@/components/pages/layanan/hero";
import { ServiceCatalog } from "@/components/pages/layanan/service-catalog";
import { PackagesSection } from "@/components/pages/layanan/packages";
import { HotelPolicySection } from "@/components/pages/layanan/hotel-policy";
import { ProductsSection } from "@/components/pages/layanan/products";
import { CtaBand } from "@/components/layouts/cta-band";
import { layananPage } from "@/content/layanan";
import type { ServiceCategory } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: layananPage.metadata.title,
  description: layananPage.metadata.description,
  path: "/layanan",
});

export type LayananPageProps = {
  searchParams: Promise<{
    kategori?: string | string[];
  }>;
};

export default async function LayananPage({ searchParams }: LayananPageProps) {
  const params = await searchParams;
  const rawCategory = Array.isArray(params.kategori)
    ? params.kategori[0]
    : params.kategori;
  const initialCategory: ServiceCategory | "semua" =
    rawCategory === "medis" || rawCategory === "nonmedis"
      ? rawCategory
      : "semua";

  return (
    <>
      <LayananHero />
      <ServiceCatalog initialCategory={initialCategory} />
      <PackagesSection />
      <HotelPolicySection />
      <ProductsSection />
      <CtaBand
        title={layananPage.cta.title}
        description={layananPage.cta.description}
        primaryLabel={layananPage.cta.bookingLabel}
        secondaryLabel={layananPage.cta.whatsappLabel}
      />
    </>
  );
}
