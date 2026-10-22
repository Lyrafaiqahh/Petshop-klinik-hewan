import Image from "next/image";
import Link from "next/link";
import { LuArrowDown, LuArrowUpRight, LuInfo } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { buttonStyles } from "@/components/ui/button";
import { dokterPage } from "@/content/dokter";

export function DokterHero() {
  return (
    <Section className="pt-10 pb-8 sm:pt-12">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold">
              <span className="size-2 rounded-full bg-lime" aria-hidden />
              {dokterPage.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {dokterPage.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {dokterPage.hero.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#jadwal" className={buttonStyles({ size: "lg" })}>
                {dokterPage.hero.scheduleLabel}
                <LuArrowDown className="size-4" aria-hidden />
              </Link>
              <Link
                href="/booking"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                {dokterPage.hero.bookingLabel}
                <LuArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>

            <p className="mt-5 flex max-w-xl items-start gap-2 rounded-xl bg-lavender p-3 text-xs leading-5 text-lavender-foreground">
              <LuInfo className="mt-0.5 size-4 shrink-0" aria-hidden />
              {dokterPage.profiles.description}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -right-3 -bottom-3 h-full w-full rounded-[3rem] bg-lavender"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-border">
              <Image
                src="/images/about.jpg"
                alt="Ilustrasi tenaga medis memeriksa kucing (foto stok)"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="absolute bottom-4 left-4 max-w-[14rem] rounded-xl bg-background/95 p-3 text-[11px] leading-4 text-muted-foreground">
              {dokterPage.hero.imageNote}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
