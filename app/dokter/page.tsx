import type { Metadata } from "next";
import { CtaBand } from "@/components/layouts/cta-band";
import { DoctorProfiles } from "@/components/pages/dokter/profiles";
import { DokterHero } from "@/components/pages/dokter/hero";
import { DoctorSchedule } from "@/components/pages/dokter/schedule";
import { dokterPage } from "@/content/dokter";
import { doctorsNote } from "@/content/doctors";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: dokterPage.metadata.title,
  description: dokterPage.metadata.description,
  path: "/dokter",
});

export default function DokterPage() {
  return (
    <>
      <DokterHero />
      <DoctorProfiles />
      <DoctorSchedule />
      <CtaBand
        title={dokterPage.cta.title}
        description={dokterPage.cta.description}
        primaryLabel={dokterPage.cta.bookingLabel}
        primaryHref="/booking"
        secondaryLabel={dokterPage.cta.contactLabel}
        secondaryHref="/kontak"
        note={doctorsNote}
        tone="lavender"
        message={`Halo ${siteConfig.name}, saya ingin bertanya tentang jadwal dokter.`}
      />
    </>
  );
}
