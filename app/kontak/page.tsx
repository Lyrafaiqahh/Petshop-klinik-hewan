import type { Metadata } from "next";
import { CtaBand } from "@/components/layouts/cta-band";
import { ContactCards } from "@/components/pages/kontak/contact-cards";
import { EmergencySection } from "@/components/pages/kontak/emergency";
import { KontakHero } from "@/components/pages/kontak/hero";
import { VisitSection } from "@/components/pages/kontak/visit";
import { kontakPage } from "@/content/kontak";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: kontakPage.metadata.title,
  description: kontakPage.metadata.description,
  path: "/kontak",
});

export default function KontakPage() {
  return (
    <>
      <KontakHero />
      <ContactCards />
      <VisitSection />
      <EmergencySection />
      <CtaBand
        title={kontakPage.cta.title}
        description={kontakPage.cta.description}
        primaryLabel={kontakPage.cta.bookingLabel}
        secondaryLabel={kontakPage.cta.whatsappLabel}
        note={kontakPage.cta.disclaimer}
        tone="lavender"
        message={`Halo ${siteConfig.name}, saya masih perlu dibantu memilih layanan.`}
      />
    </>
  );
}
