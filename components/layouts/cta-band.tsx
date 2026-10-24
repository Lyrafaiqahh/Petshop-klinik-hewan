import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { LuArrowUpRight, LuPawPrint } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export type CtaBandProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: string;
  message?: string;
  tone?: "forest" | "lavender";
};

const defaultMessage =
  "Halo Ruang Anabul, saya ingin bertanya tentang layanan untuk anabul saya.";

export function CtaBand({
  title,
  description,
  primaryLabel,
  primaryHref = "/booking",
  secondaryLabel,
  secondaryHref,
  note,
  message = defaultMessage,
  tone = "forest",
}: CtaBandProps) {
  const isLavender = tone === "lavender";

  return (
    <Section>
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 lg:py-12",
            isLavender
              ? "bg-lavender text-lavender-foreground [.dark_&]:border [.dark_&]:border-lime/25 [.dark_&]:bg-forest [.dark_&]:text-foreground [.dark_&]:shadow-[0_0_60px_-20px] [.dark_&]:shadow-lime/30"
              : "bg-forest text-forest-foreground",
          )}
        >
          {/* Dark mode: lime glow supaya kartu hidup & senada dengan tema */}
          {isLavender ? (
            <div
              className="pointer-events-none absolute -top-24 -right-16 hidden size-72 rounded-full bg-lime/20 blur-3xl [.dark_&]:block"
              aria-hidden
            />
          ) : null}
          <div
            className={cn(
              "absolute -top-16 -right-10 size-52 rounded-full",
              isLavender ? "bg-forest/10 [.dark_&]:bg-lime/10" : "bg-lime/15",
            )}
            aria-hidden
          />
          <div
            className={cn(
              "absolute -bottom-10 left-1/3 size-24 rounded-full border",
              isLavender ? "border-forest/15 [.dark_&]:border-lime/25" : "border-lime/20",
            )}
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <p
              className={cn(
                "flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase",
                isLavender ? "text-forest [.dark_&]:text-lime" : "text-lime",
              )}
            >
              <LuPawPrint className="size-4" aria-hidden />
              {siteConfig.name}
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <p
              className={cn(
                "mt-3 text-sm leading-6 sm:text-base sm:leading-7",
                isLavender
                  ? "text-lavender-foreground/75 [.dark_&]:text-foreground/75"
                  : "text-forest-foreground/70",
              )}
            >
              {description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className={buttonStyles({ variant: "accent", size: "lg" })}
              >
                {primaryLabel}
                <LuArrowUpRight className="size-4" aria-hidden />
              </Link>
              {secondaryHref ? (
                <Link
                  href={secondaryHref}
                  className={buttonStyles({
                    variant: "outline",
                    size: "lg",
                    className: isLavender
                      ? "border-forest/25 text-forest hover:bg-forest/10 [.dark_&]:border-lime/50 [.dark_&]:text-foreground [.dark_&]:hover:border-lime [.dark_&]:hover:bg-lime/10 [.dark_&]:hover:text-lime"
                      : "border-forest-foreground/25 text-forest-foreground hover:bg-forest-foreground/10",
                  })}
                >
                  {secondaryLabel ?? siteConfig.ctas.contact}
                  <LuArrowUpRight className="size-4" aria-hidden />
                </Link>
              ) : (
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "outline",
                    size: "lg",
                    className: isLavender
                      ? "border-forest/25 text-forest hover:bg-forest/10 [.dark_&]:border-lime/50 [.dark_&]:text-foreground [.dark_&]:hover:border-lime [.dark_&]:hover:bg-lime/10 [.dark_&]:hover:text-lime"
                      : "border-forest-foreground/25 text-forest-foreground hover:bg-forest-foreground/10",
                  })}
                >
                  <FaWhatsapp
                    className="size-4 [.dark_&]:text-lime"
                    aria-hidden
                  />
                  {secondaryLabel ?? siteConfig.ctas.whatsapp}
                </a>
              )}
            </div>
            {note ? (
              <p
                className={cn(
                  "mt-4 text-xs leading-5",
                  isLavender
                    ? "text-lavender-foreground/65 [.dark_&]:text-foreground/60"
                    : "text-forest-foreground/55",
                )}
              >
                {note}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
