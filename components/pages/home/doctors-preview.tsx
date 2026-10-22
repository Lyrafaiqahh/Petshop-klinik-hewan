import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { toneStyles } from "@/components/ui/service-icon";
import { home } from "@/content/home";
import { doctors } from "@/content/doctors";
import { siteConfig } from "@/content/site";
import { bookingDoctorHref } from "@/lib/links";
import { cn } from "@/lib/utils";

export function HomeDoctors() {
  return (
    <Section className="border-y border-border bg-muted/50">
      <Container>
        <SectionHeading
          eyebrow={home.doctors.eyebrow}
          title={home.doctors.title}
          description={home.doctors.description}
          action={
            <Link
              href="/dokter"
              className="inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none"
            >
              {siteConfig.ctas.viewSchedule}
              <LuArrowRight className="size-4" aria-hidden />
            </Link>
          }
        />

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {doctors.map((doctor) => (
            <li key={doctor.slug} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-14 place-items-center rounded-2xl text-lg font-bold",
                        toneStyles[doctor.tone],
                      )}
                      aria-hidden
                    >
                      {doctor.initials}
                    </span>
                    <div>
                      <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                        {doctor.role}
                      </p>
                      <h3 className="mt-1 text-base font-bold">
                        {doctor.name}
                      </h3>
                    </div>
                  </div>
                  <Badge variant="outline">{home.doctors.badge}</Badge>
                </div>

                <p className="mt-4 text-sm font-medium text-foreground">
                  {doctor.focus}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {doctor.bio}
                </p>

                <div className="mt-5 rounded-xl bg-muted/70 p-4">
                  <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                    {home.doctors.scheduleLabel}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs leading-5">
                    {doctor.summary.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={bookingDoctorHref(doctor.slug)}
                  className={buttonStyles({
                    variant: "outline",
                    size: "sm",
                    className: "mt-5 w-full",
                  })}
                >
                  {home.doctors.bookingLabel}
                  <LuArrowRight className="size-3.5" aria-hidden />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
