import { LuStar } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { home } from "@/content/home";
import { testimonials, testimonialsNote } from "@/content/testimonials";

export function HomeTestimonials() {
  return (
    <Section className="border-y border-border bg-card">
      <Container>
        <SectionHeading
          eyebrow={home.testimonials.eyebrow}
          title={home.testimonials.title}
          description={home.testimonials.description}
          action={<Badge variant="accent">{home.testimonials.badge}</Badge>}
        />

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-6">
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <LuStar
                      key={index}
                      className={
                        index < testimonial.rating
                          ? "size-4 fill-lime text-foreground"
                          : "size-4 text-border"
                      }
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-7">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid size-10 place-items-center rounded-full bg-lavender text-sm font-bold text-lavender-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {testimonial.pet} · {testimonial.location}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-muted-foreground">
          {testimonialsNote}
        </p>
      </Container>
    </Section>
  );
}
