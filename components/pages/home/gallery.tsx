import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { home } from "@/content/home";
import { gallery, galleryNote } from "@/content/gallery";
import { cn } from "@/lib/utils";
import { imagePosition } from "@/lib/image-position";

export function HomeGallery() {
  return (
    <Section id="galeri" className="scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow={home.gallery.eyebrow}
          title={home.gallery.title}
          description={home.gallery.description}
        />

        <ul className="mt-10 grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] md:grid-cols-4 md:gap-4">
          {gallery.map((item) => (
            <li
              key={item.src}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-muted",
                item.span === "tall" && "row-span-2",
                item.span === "wide" && "col-span-2",
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-400 ease-smooth group-hover:scale-[1.03]"
                style={{ objectPosition: imagePosition(item.src) }}
              />
              <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent p-3 pt-10 md:p-4"
                aria-hidden
              />
              <p className="absolute inset-x-3 bottom-3 text-xs font-semibold text-forest-foreground md:inset-x-4 md:bottom-4 md:text-sm">
                {item.caption}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-5 max-w-3xl text-xs leading-5 text-muted-foreground">
          {galleryNote}
        </p>
      </Container>
    </Section>
  );
}
