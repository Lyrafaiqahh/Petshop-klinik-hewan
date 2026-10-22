import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { BenefitIcon } from "@/components/ui/service-icon";
import { home } from "@/content/home";

export function HomeTrust() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl bg-lavender p-6 text-lavender-foreground sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow={home.trust.eyebrow}
            title={home.trust.title}
            description={home.trust.description}
            className="[&_p]:text-lavender-foreground/75"
          />

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {home.trust.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-lavender-foreground/10 bg-background/55 p-5"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-lime text-lime-foreground">
                  <BenefitIcon name={metric.icon} className="size-5" />
                </span>
                <dd className="mt-5 text-3xl font-bold tracking-tight">
                  {metric.value}
                </dd>
                <dt className="mt-1 text-sm text-lavender-foreground/75">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs leading-5 text-lavender-foreground/65">
            {home.trust.note}
          </p>
        </div>
      </Container>
    </Section>
  );
}
