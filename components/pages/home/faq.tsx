import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonStyles } from "@/components/ui/button";
import { FaqAccordion } from "@/components/pages/home/faq-accordion";
import { home } from "@/content/home";
import { faqs } from "@/content/faqs";
import { generalWhatsappLink } from "@/lib/links";

export function HomeFaq() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={home.faq.eyebrow}
              title={home.faq.title}
              description={home.faq.description}
            />
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm font-semibold">{home.faq.whatsappPrompt}</p>
              <a
                href={generalWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "outline",
                  size: "sm",
                  className: "mt-3",
                })}
              >
                <FaWhatsapp className="size-4" aria-hidden />
                {home.faq.whatsappLabel}
              </a>
            </div>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </Section>
  );
}
