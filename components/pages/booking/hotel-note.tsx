import Link from "next/link";
import { LuArrowRight, LuCheck, LuInfo } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { Badge } from "@/components/ui/badge";
import { bookingPage } from "@/content/booking";
import { hotelPolicies } from "@/content/packages";

export function BookingHotelNote() {
  return (
    <Section className="border-y border-border bg-card pt-8 pb-8 sm:pt-10 sm:pb-10">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10">
          <div>
            <Badge variant="accent">{bookingPage.hotelNote.eyebrow}</Badge>
            <h2 className="mt-3 text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl">
              {bookingPage.hotelNote.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              {bookingPage.hotelNote.description}
            </p>
          </div>

          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {hotelPolicies.map((policy) => (
                <li
                  key={policy.title}
                  className="flex gap-2.5 rounded-xl bg-muted/60 p-3"
                >
                  <LuCheck
                    className="mt-0.5 size-4 shrink-0 text-foreground"
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-semibold">{policy.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {policy.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
              <LuInfo className="mt-0.5 size-4 shrink-0" aria-hidden />
              {bookingPage.hotelNote.note}
            </p>

            <Link
              href={bookingPage.hotelNote.linkHref}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none"
            >
              {bookingPage.hotelNote.linkLabel}
              <LuArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
