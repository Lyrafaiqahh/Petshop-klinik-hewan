import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { layananPage } from "@/content/layanan";
import { products, productsNote } from "@/content/products";
import { productWhatsappLink } from "@/lib/links";

export function ProductsSection() {
  return (
    <Section id="petshop" className="scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow={layananPage.products.eyebrow}
          title={layananPage.products.title}
          description={layananPage.products.description}
        />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <li key={product.slug} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-square overflow-hidden border-b border-border">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 19vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 90vw"
                    className="object-cover"
                  />
                  <Badge variant="lavender" className="absolute top-3 left-3">
                    {product.category}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-bold">{product.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="mt-3 text-[11px] leading-4 text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {layananPage.products.availabilityLabel}:
                    </span>{" "}
                    {product.availability}
                  </p>
                  <div className="mt-auto pt-4">
                    <a
                      href={productWhatsappLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({
                        variant: "outline",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      <FaWhatsapp className="size-3.5" aria-hidden />
                      {layananPage.products.askLabel}
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-muted-foreground">
          {productsNote}
        </p>
      </Container>
    </Section>
  );
}
