import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuPawPrint, LuPhone } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { buttonStyles } from "@/components/ui/button";
import { HeroHours } from "@/components/pages/home/hero-hours";
import { home } from "@/content/home";
import { siteConfig } from "@/content/site";
import { telLink } from "@/lib/links";

export function HomeHero() {
  return (
    <Section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 lg:pt-16 lg:pb-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground">
              <span className="size-2 rounded-full bg-lime" aria-hidden />
              {home.hero.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              {home.hero.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {home.hero.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/booking" className={buttonStyles({ size: "lg" })}>
                {siteConfig.ctas.booking}
                <LuArrowUpRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/layanan"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                {home.hero.secondaryCta}
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <HeroHours />
              <a
                href={telLink()}
                className="group rounded-2xl border border-border bg-card p-4 transition-colors hover:border-foreground/20 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  <LuPhone className="size-4 text-destructive" aria-hidden />
                  {home.hero.emergencyLabel}
                </p>
                <p className="mt-2 text-sm font-semibold group-hover:underline group-hover:underline-offset-4">
                  {siteConfig.emergency.display}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {home.hero.emergencyNote}
                </p>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
            <div
              className="absolute -top-4 right-6 size-28 rounded-full bg-lime sm:size-36 lg:-top-8 lg:-right-2"
              aria-hidden
            />
            <div
              className="absolute bottom-10 -left-2 h-32 w-24 rotate-6 rounded-[2.5rem] bg-lavender sm:h-40 sm:w-32"
              aria-hidden
            />

            <div className="relative ml-auto h-[26rem] w-[88%] overflow-hidden rounded-t-[10rem] rounded-b-[2.5rem] border-4 border-card shadow-xl sm:h-[32rem] sm:rounded-t-[13rem] lg:h-[36rem]">
              <Image
                src={home.hero.imageMain}
                alt={home.hero.imageMainAlt}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-2 left-0 h-32 w-24 overflow-hidden rounded-[2rem] border-4 border-background shadow-lg sm:-bottom-4 sm:h-44 sm:w-36">
              <Image
                src={home.hero.imageSecondary}
                alt={home.hero.imageSecondaryAlt}
                fill
                sizes="(min-width: 640px) 144px, 96px"
                className="object-cover"
              />
            </div>

            <div className="absolute top-8 -left-1 max-w-[13.5rem] rounded-2xl border border-border bg-background p-3 shadow-lg sm:top-12 sm:-left-6 lg:-left-4">
              <div className="flex items-start gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-forest text-lime">
                  <LuPawPrint className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs leading-4 font-bold">
                    {home.hero.badgeTitle}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                    {home.hero.badgeDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
