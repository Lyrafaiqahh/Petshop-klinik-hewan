import { LuCalendarDays, LuPhone, LuTriangleAlert } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { buttonStyles } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bookingPage } from "@/content/booking";
import { siteConfig } from "@/content/site";
import { telLink } from "@/lib/links";

export function BookingHero() {
  return (
    <Section className="pt-10 pb-8 sm:pt-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold">
              <span className="size-2 rounded-full bg-lime" aria-hidden />
              {bookingPage.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {bookingPage.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {bookingPage.hero.description}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl bg-lavender px-3 py-2 text-xs font-medium text-lavender-foreground">
              <LuCalendarDays className="size-4" aria-hidden />
              {bookingPage.hero.note}
            </p>
          </div>

          <div className="rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-destructive uppercase">
                <LuTriangleAlert className="size-4" aria-hidden />
                {bookingPage.emergency.label}
              </p>
              <Badge variant="outline">{bookingPage.emergency.badge}</Badge>
            </div>
            <p className="mt-3 text-sm leading-6 font-semibold">
              {siteConfig.emergencyWarning}
            </p>
            <a
              href={telLink()}
              className={buttonStyles({
                variant: "forest",
                size: "md",
                className: "mt-4 w-full sm:w-auto",
              })}
            >
              <LuPhone className="size-4" aria-hidden />
              {bookingPage.emergency.callLabel} · {siteConfig.emergency.display}
            </a>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              {bookingPage.emergency.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
