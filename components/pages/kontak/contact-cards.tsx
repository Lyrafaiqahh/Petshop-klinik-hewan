import type { ReactNode } from "react";
import { LuArrowUpRight, LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { kontakPage } from "@/content/kontak";
import { siteConfig } from "@/content/site";
import { generalWhatsappLink, mapsDirectionsUrl, telLink } from "@/lib/links";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel: string;
  href: string;
  external?: boolean;
  tone: string;
};

function ContactCard({
  icon,
  title,
  description,
  actionLabel,
  href,
  external,
  tone,
}: ContactCardProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5">
      <span
        className={cn("grid size-10 place-items-center rounded-xl", tone)}
        aria-hidden
      >
        {icon}
      </span>
      <h2 className="mt-4 text-base font-bold">{title}</h2>
      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      <a
        href={href}
        {...linkProps}
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold underline decoration-lime decoration-2 underline-offset-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        {actionLabel}
        <LuArrowUpRight className="size-3.5" aria-hidden />
      </a>
    </article>
  );
}

export function ContactCards() {
  return (
    <Section className="pt-0 pb-10">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<FaWhatsapp className="size-4" />}
            title={kontakPage.contactCards.whatsappTitle}
            description={kontakPage.contactCards.whatsappDescription}
            actionLabel={kontakPage.contactCards.whatsappAction}
            href={generalWhatsappLink()}
            external
            tone="bg-lime text-lime-foreground"
          />
          <ContactCard
            icon={<LuPhone className="size-4" />}
            title={kontakPage.contactCards.emergencyTitle}
            description={kontakPage.contactCards.emergencyDescription}
            actionLabel={kontakPage.contactCards.emergencyAction}
            href={telLink()}
            tone="bg-destructive/10 text-destructive"
          />
          <ContactCard
            icon={<LuMapPin className="size-4" />}
            title={kontakPage.contactCards.addressTitle}
            description={kontakPage.contactCards.addressDescription}
            actionLabel={kontakPage.contactCards.addressAction}
            href={mapsDirectionsUrl()}
            external
            tone="bg-peach text-peach-foreground"
          />
          <ContactCard
            icon={<LuClock className="size-4" />}
            title={kontakPage.contactCards.hoursTitle}
            description={kontakPage.contactCards.hoursDescription}
            actionLabel={kontakPage.contactCards.hoursAction}
            href="#jam"
            tone="bg-lavender text-lavender-foreground"
          />
        </div>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          {siteConfig.demoNotice}
        </p>
      </Container>
    </Section>
  );
}
