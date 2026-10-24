import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ServiceIcon, toneStyles } from "@/components/ui/service-icon";
import { home } from "@/content/home";
import { featuredServices } from "@/content/services";
import { siteConfig } from "@/content/site";
import { imagePosition } from "@/lib/image-position";
import { cn } from "@/lib/utils";

export function HomeServices() {
  return (
    <Section id="layanan" className="scroll-mt-24 pb-10 sm:pb-12">
      <Container>
        <SectionHeading
          eyebrow={home.services.eyebrow}
          title={home.services.title}
          description={home.services.description}
          action={
            <Link
              href="/layanan"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none"
            >
              {siteConfig.ctas.viewAllServices}
              <LuArrowRight className="size-4" aria-hidden />
            </Link>
          }
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <li key={service.slug} className="h-full">
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-250 ease-smooth hover:border-foreground/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-400 ease-smooth group-hover:scale-[1.03]"
                    style={{ objectPosition: imagePosition(service.image) }}
                  />
                  <Badge
                    variant="accent"
                    className="absolute top-3 left-3 shadow-sm"
                  >
                    {service.meta}
                  </Badge>
                </div>

                <div
                  className={cn(
                    "flex flex-1 flex-col p-5",
                    toneStyles[service.tone],
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <ServiceIcon name={service.icon} className="size-4" />
                      <h3 className="text-lg font-bold tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-background/60"
                      aria-hidden
                    >
                      <LuArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 opacity-80">
                    {service.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
