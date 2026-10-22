import { LuArrowUpRight, LuNavigation } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { HoursList } from "@/components/pages/kontak/hours-list";
import { kontakPage } from "@/content/kontak";
import { primaryBranch } from "@/content/branches";
import { siteConfig } from "@/content/site";
import { mapsDirectionsUrl, mapsEmbedUrl, mapsSearchUrl } from "@/lib/links";

export function VisitSection() {
  return (
    <Section
      id="lokasi"
      className="scroll-mt-24 border-y border-border bg-card"
    >
      <Container>
        <SectionHeading
          eyebrow={kontakPage.location.eyebrow}
          title={kontakPage.location.title}
          description={kontakPage.location.description}
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-border bg-background">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <iframe
                src={mapsEmbedUrl()}
                title={kontakPage.location.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
              <p className="pointer-events-none absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-foreground uppercase">
                {kontakPage.location.mapPreviewLabel}
              </p>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                {kontakPage.location.addressLabel}
              </p>
              <p className="mt-2 text-lg font-bold">{primaryBranch.name}</p>
              <address className="mt-1 text-sm leading-6 text-muted-foreground not-italic">
                {siteConfig.addressLines.join(", ")}
              </address>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {kontakPage.location.note}
              </p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {kontakPage.location.mapNote}
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={mapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                >
                  <LuNavigation className="size-3.5" aria-hidden />
                  {kontakPage.location.directionsLabel}
                </a>
                <a
                  href={mapsSearchUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-xs font-medium transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                >
                  {kontakPage.location.searchLabel}
                  <LuArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <div id="jam" className="scroll-mt-24">
            <HoursList />
          </div>
        </div>
      </Container>
    </Section>
  );
}
