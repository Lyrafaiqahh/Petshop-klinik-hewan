import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuPawPrint } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { buttonStyles } from "@/components/ui/button";
import { home } from "@/content/home";
import { siteConfig } from "@/content/site";
import { generalWhatsappLink } from "@/lib/links";

export function HomeCta() {
  return (
    <Section className="bg-lime text-lime-foreground">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase">
              <LuPawPrint className="size-4" aria-hidden />
              {home.cta.eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl">
              {home.cta.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 opacity-80">
              {home.cta.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className={buttonStyles({
                  variant: "forest",
                  size: "lg",
                })}
              >
                {siteConfig.ctas.booking}
                <LuArrowUpRight className="size-4" aria-hidden />
              </Link>
              <a
                href={generalWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-lime-foreground/35 text-lime-foreground hover:bg-lime-foreground/10",
                })}
              >
                <FaWhatsapp className="size-4" aria-hidden />
                {siteConfig.ctas.whatsapp}
              </a>
            </div>

            <p className="mt-5 max-w-xl text-xs leading-5 opacity-70">
              {home.cta.note}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="absolute -top-3 -right-3 h-full w-full rounded-[3rem] border-2 border-lime-foreground/25"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border-4 border-lime-foreground/15">
              <Image
                src={home.cta.image}
                alt={home.cta.imageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
