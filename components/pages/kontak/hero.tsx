import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuMapPin } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { buttonStyles } from "@/components/ui/button";
import { kontakPage } from "@/content/kontak";
import { siteConfig } from "@/content/site";
import { mapsDirectionsUrl } from "@/lib/links";

export function KontakHero() {
  return (
    <Section className="pt-10 pb-8 sm:pt-12">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold">
              <span className="size-2 rounded-full bg-lime" aria-hidden />
              {kontakPage.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {kontakPage.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {kontakPage.hero.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/booking" className={buttonStyles({ size: "lg" })}>
                {kontakPage.hero.bookingLabel}
                <LuArrowUpRight className="size-4" aria-hidden />
              </Link>
              <a
                href={mapsDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                <LuMapPin className="size-4" aria-hidden />
                {kontakPage.hero.mapsLabel}
              </a>
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">
              {siteConfig.demoNotice}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -right-3 -bottom-3 h-full w-full rounded-[3rem] bg-peach"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-border">
              <Image
                src="/images/clinic.jpg"
                alt={kontakPage.hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-4 bottom-4 left-4 rounded-2xl bg-background/95 p-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold">
                <LuMapPin className="size-4" aria-hidden />
                {siteConfig.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {siteConfig.addressLines.slice(0, 2).join(", ")}
              </p>
              <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                {kontakPage.hero.imageNote}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
