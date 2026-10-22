import { LuPhone, LuTriangleAlert } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { buttonStyles } from "@/components/ui/button";
import { kontakPage } from "@/content/kontak";
import { siteConfig } from "@/content/site";
import { telLink } from "@/lib/links";

export function EmergencySection() {
  return (
    <Section className="pb-4">
      <Container>
        <div className="grid gap-6 rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-destructive uppercase">
              <LuTriangleAlert className="size-4" aria-hidden />
              {kontakPage.emergency.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl">
              {kontakPage.emergency.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {kontakPage.emergency.description}
            </p>
            <p className="mt-3 max-w-2xl rounded-xl bg-background/70 p-3 text-xs leading-5 font-semibold">
              {siteConfig.emergencyWarning}
            </p>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              {kontakPage.emergency.note}
            </p>
          </div>
          <div className="lg:pl-4">
            <a
              href={telLink()}
              className={buttonStyles({
                variant: "forest",
                size: "lg",
                className: "w-full lg:w-auto",
              })}
            >
              <LuPhone className="size-4" aria-hidden />
              {kontakPage.emergency.callLabel}
            </a>
            <p className="mt-2 text-center text-xs font-semibold tabular-nums lg:text-left">
              {siteConfig.emergency.display}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
