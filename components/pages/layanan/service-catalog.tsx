"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { ServiceIcon, toneStyles } from "@/components/ui/service-icon";
import { layananPage } from "@/content/layanan";
import {
  serviceCategories,
  services,
  type ServiceCategory,
} from "@/content/services";
import { bookingServiceHref, serviceWhatsappLink } from "@/lib/links";
import { formatPriceWithUnit } from "@/lib/pricing";
import { cn } from "@/lib/utils";

export type ServiceCatalogProps = {
  initialCategory: ServiceCategory | "semua";
};

export function ServiceCatalog({ initialCategory }: ServiceCatalogProps) {
  const [category, setCategory] = useState<ServiceCategory | "semua">(
    initialCategory,
  );

  const activeCategory =
    serviceCategories.find((item) => item.value === category) ??
    serviceCategories[0];
  const visibleServices =
    category === "semua"
      ? services
      : services.filter((service) => service.category === category);

  return (
    <Section id="layanan" className="scroll-mt-24 pb-12">
      <Container>
        <SectionHeading
          eyebrow={layananPage.catalog.eyebrow}
          title={layananPage.catalog.title}
          description={layananPage.catalog.description}
        />

        <div className="mt-8">
          <div
            role="group"
            aria-label={layananPage.catalog.filterLabel}
            className="inline-flex flex-wrap gap-1 rounded-full border border-border bg-card p-1.5"
          >
            {serviceCategories.map((item) => {
              const isActive = item.value === category;
              const count =
                item.value === "semua"
                  ? services.length
                  : services.filter(
                      (service) => service.category === item.value,
                    ).length;

              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setCategory(item.value)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                    isActive
                      ? "bg-forest text-forest-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[11px] font-semibold",
                      isActive
                        ? "bg-forest-foreground/15 text-forest-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
            {activeCategory.description} · {visibleServices.length}{" "}
            {layananPage.catalog.countLabel}
          </p>
        </div>

        {visibleServices.length > 0 ? (
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {visibleServices.map((service) => (
              <li
                key={service.slug}
                className="h-full scroll-mt-28"
                id={service.slug}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  {service.image ? (
                    <div className="relative aspect-[16/8] overflow-hidden border-b border-border">
                      <Image
                        src={service.image}
                        alt={service.imageAlt ?? service.name}
                        fill
                        sizes="(min-width: 768px) 48vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={cn(
                          "grid size-11 place-items-center rounded-xl",
                          toneStyles[service.tone],
                        )}
                      >
                        <ServiceIcon name={service.icon} />
                      </span>
                      <Badge
                        variant={
                          service.category === "medis" ? "accent" : "lavender"
                        }
                      >
                        {service.category === "medis"
                          ? layananPage.catalog.medicalBadge
                          : layananPage.catalog.nonMedicalBadge}
                      </Badge>
                    </div>

                    <h3 className="mt-4 text-lg font-bold tracking-tight">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>

                    <dl className="mt-4 space-y-2 border-t border-border pt-4">
                      <div className="flex items-start justify-between gap-4">
                        <dt className="text-xs text-muted-foreground">
                          {layananPage.catalog.estimateLabel}
                        </dt>
                        <dd className="text-right text-sm font-semibold">
                          {formatPriceWithUnit(service.price)}
                        </dd>
                      </div>
                      {service.duration ? (
                        <div className="flex items-start justify-between gap-4">
                          <dt className="text-xs text-muted-foreground">
                            {layananPage.catalog.durationLabel}
                          </dt>
                          <dd className="text-right text-xs text-muted-foreground">
                            {service.duration}
                          </dd>
                        </div>
                      ) : null}
                    </dl>

                    {service.note ? (
                      <p className="mt-3 text-xs leading-5 text-muted-foreground">
                        {service.note}
                      </p>
                    ) : null}

                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {service.slug === "petshop" ? (
                        <Link
                          href="#petshop"
                          className={buttonStyles({ size: "sm" })}
                        >
                          {layananPage.catalog.catalogLabel}
                          <LuArrowRight className="size-3.5" aria-hidden />
                        </Link>
                      ) : (
                        <Link
                          href={bookingServiceHref(service.slug)}
                          className={buttonStyles({ size: "sm" })}
                        >
                          {layananPage.catalog.bookingLabel}
                          <LuArrowUpRight className="size-3.5" aria-hidden />
                        </Link>
                      )}
                      <a
                        href={serviceWhatsappLink(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonStyles({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <FaWhatsapp className="size-3.5" aria-hidden />
                        {layananPage.catalog.askLabel}
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
            <p className="font-semibold">{layananPage.catalog.emptyTitle}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {layananPage.catalog.emptyDescription}
            </p>
          </div>
        )}

        <p className="mt-6 max-w-3xl rounded-xl bg-muted/70 p-4 text-xs leading-5 text-muted-foreground">
          {layananPage.catalog.priceNote}
        </p>
      </Container>
    </Section>
  );
}
