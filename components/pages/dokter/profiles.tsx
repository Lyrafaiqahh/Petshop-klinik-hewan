import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuBadgeCheck, LuCheck } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { toneStyles } from "@/components/ui/service-icon";
import { dokterPage } from "@/content/dokter";
import { doctors } from "@/content/doctors";
import { bookingDoctorHref } from "@/lib/links";
import { imagePosition } from "@/lib/image-position";
import { cn } from "@/lib/utils";

export function DoctorProfiles() {
  return (
    <Section
      id="profil"
      className="scroll-mt-24 border-y border-border bg-card"
    >
      <Container>
        <SectionHeading
          eyebrow={dokterPage.profiles.eyebrow}
          title={dokterPage.profiles.title}
          description={dokterPage.profiles.description}
        />

        <ul className="mt-10 space-y-5">
          {doctors.map((doctor) => (
            <li key={doctor.slug}>
              <article className="grid gap-6 rounded-3xl border border-border bg-background p-5 sm:p-6 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_18rem] lg:items-start lg:gap-8">
                <div
                  className={cn(
                    "relative aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-2xl border-2 border-card p-1 sm:w-44 lg:w-52",
                    toneStyles[doctor.tone],
                  )}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 208px, (min-width: 640px) 176px, 160px"
                      className="object-cover"
                      style={{ objectPosition: imagePosition(doctor.image) }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{doctor.role}</Badge>
                    <Badge variant="accent">{dokterPage.profiles.badge}</Badge>
                  </div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium">{doctor.focus}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {doctor.bio}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {doctor.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <p className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                      <LuBadgeCheck className="size-4" aria-hidden />
                      {dokterPage.profiles.credentialsLabel}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                      {doctor.credentials.map((credential) => (
                        <li key={credential} className="flex items-start gap-2">
                          <LuCheck
                            className="mt-0.5 size-4 shrink-0 text-foreground"
                            aria-hidden
                          />
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl bg-muted/70 p-4 lg:sticky lg:top-24">
                  <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                    {dokterPage.profiles.scheduleLabel}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs leading-5">
                    {doctor.summary.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <Link
                    href={bookingDoctorHref(doctor.slug)}
                    className={buttonStyles({
                      size: "sm",
                      className: "mt-4 w-full",
                    })}
                  >
                    {dokterPage.profiles.bookingLabel}
                    <LuArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
