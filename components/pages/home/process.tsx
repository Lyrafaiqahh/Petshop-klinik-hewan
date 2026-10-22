import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";
import { home } from "@/content/home";

export function HomeProcess() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={home.process.eyebrow}
          title={home.process.title}
          description={home.process.description}
          align="center"
        />

        <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          <span
            className="absolute top-7 right-16 left-16 hidden border-t border-dashed border-border md:block"
            aria-hidden
          />
          {home.process.steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="relative z-10 grid size-14 place-items-center rounded-2xl bg-lime text-lime-foreground">
                  <ServiceIcon name={step.icon} className="size-6" />
                </span>
                <span className="text-sm font-bold tracking-[0.18em] text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
