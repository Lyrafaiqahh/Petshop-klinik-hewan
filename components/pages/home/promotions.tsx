import Link from "next/link";
import { LuArrowRight, LuSparkles } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { home } from "@/content/home";
import { promotions, promotionsNote } from "@/content/promotions";
import { formatPriceWithUnit } from "@/lib/pricing";

export function HomePromotions() {
  return (
    <Section className="pb-14 sm:pb-16 lg:pb-20">
      <Container>
        <SectionHeading
          eyebrow={home.promotions.eyebrow}
          title={home.promotions.title}
          description={home.promotions.description}
        />

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {promotions.map((promotion) => (
            <li key={promotion.slug} className="h-full">
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6">
                <span
                  className="absolute top-8 left-0 h-12 w-1 rounded-r-full bg-lime"
                  aria-hidden
                />
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="accent">{promotion.badge}</Badge>
                  <LuSparkles
                    className="size-5 text-muted-foreground"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight">
                  {promotion.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {promotion.description}
                </p>
                <p className="mt-5 text-2xl font-bold tracking-tight">
                  {formatPriceWithUnit(promotion.price)}
                </p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {promotion.terms}
                </p>
                <Link
                  href={promotion.href}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none"
                >
                  {home.promotions.bookingLabel}
                  <LuArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-muted-foreground">
          {promotionsNote}
        </p>
      </Container>
    </Section>
  );
}
