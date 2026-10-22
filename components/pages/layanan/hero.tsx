import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { buttonStyles } from "@/components/ui/button";
import { layananPage } from "@/content/layanan";
import { siteConfig } from "@/content/site";
import { generalWhatsappLink } from "@/lib/links";

const imageClasses = [
  "row-span-2 h-full min-h-64 rounded-[2rem] lg:min-h-80",
  "h-32 rounded-2xl sm:h-40 lg:h-44",
  "h-32 rounded-2xl sm:h-40 lg:h-44",
];

export function LayananHero() {
  return (
    <Section className="pt-10 pb-8 sm:pt-12">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold">
              <span className="size-2 rounded-full bg-lime" aria-hidden />
              {layananPage.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {layananPage.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {layananPage.hero.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/booking" className={buttonStyles({ size: "lg" })}>
                {siteConfig.ctas.booking}
                <LuArrowUpRight className="size-4" aria-hidden />
              </Link>
              <a
                href={generalWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                <FaWhatsapp className="size-4" aria-hidden />
                {layananPage.hero.whatsappLabel}
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {layananPage.hero.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {layananPage.hero.images.map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden border border-border bg-muted ${imageClasses[index]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
