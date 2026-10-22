import Link from "next/link";
import { LuCheck, LuClock } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { layananPage } from "@/content/layanan";
import {
  groomingPackages,
  hotelPackages,
  type ServicePackage,
} from "@/content/packages";
import { bookingServiceHref } from "@/lib/links";
import { formatRupiah } from "@/lib/pricing";
import { cn } from "@/lib/utils";

export type PackageCardProps = {
  item: ServicePackage;
  bookingService: string;
};

export function PackageCard({ item, bookingService }: PackageCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border bg-card p-5",
        item.highlight ? "border-foreground/30" : "border-border",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold">{item.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{item.duration}</p>
        </div>
        {item.highlight ? (
          <Badge variant="accent">{layananPage.packages.favoriteLabel}</Badge>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {item.description}
      </p>
      <p className="mt-4 flex items-baseline gap-1">
        <span className="text-2xl font-bold tracking-tight">
          {formatRupiah(item.amount)}
        </span>
        <span className="text-xs text-muted-foreground">/ {item.unit}</span>
      </p>
      <ul className="mt-3 space-y-1.5 text-sm">
        {item.includes.map((include) => (
          <li key={include} className="flex items-start gap-2">
            <LuCheck
              className="mt-0.5 size-4 shrink-0 text-foreground"
              aria-hidden
            />
            <span className="text-muted-foreground">{include}</span>
          </li>
        ))}
      </ul>
      <Link
        href={bookingServiceHref(bookingService)}
        className={buttonStyles({
          variant: "outline",
          size: "sm",
          className: "mt-5 w-full",
        })}
      >
        {layananPage.packages.bookingLabel}
      </Link>
    </article>
  );
}

export function PackagesSection() {
  return (
    <Section className="border-y border-border bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow={layananPage.packages.eyebrow}
          title={layananPage.packages.title}
          description={layananPage.packages.description}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-lg bg-lavender text-lavender-foreground">
                <LuClock className="size-4" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold">
                  {layananPage.packages.groomingTitle}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {layananPage.packages.groomingDescription}
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {groomingPackages.map((item) => (
                <PackageCard
                  key={item.slug}
                  item={item}
                  bookingService="grooming-kucing"
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-lg bg-sky text-sky-foreground">
                <LuClock className="size-4" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold">
                  {layananPage.packages.hotelTitle}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {layananPage.packages.hotelDescription}
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {hotelPackages.map((item) => (
                <PackageCard
                  key={item.slug}
                  item={item}
                  bookingService="pet-hotel"
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          {layananPage.packages.priceNote}
        </p>
      </Container>
    </Section>
  );
}
