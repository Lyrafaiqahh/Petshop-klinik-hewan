import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuQuote } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { BenefitIcon } from "@/components/ui/service-icon";
import { home } from "@/content/home";

export function HomeAbout() {
  return (
    <Section
      id="tentang"
      className="scroll-mt-24 border-y border-border bg-card"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -top-3 -left-3 h-full w-full rounded-[2.5rem] bg-lime/35"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border">
              <Image
                src={home.about.image}
                alt={home.about.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <figure className="relative z-10 mx-4 -mt-14 rounded-2xl border border-border bg-background p-5 shadow-lg sm:mx-8 lg:absolute lg:right-0 lg:-bottom-6 lg:mx-0 lg:max-w-[17rem]">
              <LuQuote className="size-5 text-lime-foreground" aria-hidden />
              <blockquote className="mt-2 text-sm leading-6 font-medium">
                {home.about.quote}
              </blockquote>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                {home.about.quoteCaption}
              </figcaption>
            </figure>
          </div>

          <div>
            <SectionHeading
              eyebrow={home.about.eyebrow}
              title={home.about.title}
              description={home.about.description}
            />

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {home.about.benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime text-lime-foreground">
                    <BenefitIcon name={benefit.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{benefit.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/layanan"
              className={buttonStyles({
                variant: "outline",
                size: "md",
                className: "mt-8",
              })}
            >
              {home.about.cta}
              <LuArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
