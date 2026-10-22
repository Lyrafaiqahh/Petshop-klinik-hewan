import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { BookingHero } from "@/components/pages/booking/hero";
import { BookingHotelNote } from "@/components/pages/booking/hotel-note";
import { BookingForm } from "@/components/pages/booking/booking-form";
import { bookingPage } from "@/content/booking";
import { getDoctorBySlug } from "@/content/doctors";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: bookingPage.metadata.title,
  description: bookingPage.metadata.description,
  path: "/booking",
});

export type BookingPageProps = {
  searchParams: Promise<{
    layanan?: string | string[];
    dokter?: string | string[];
  }>;
};

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;
  const rawService = Array.isArray(params.layanan)
    ? params.layanan[0]
    : params.layanan;
  const rawDoctor = Array.isArray(params.dokter)
    ? params.dokter[0]
    : params.dokter;

  const service = rawService
    ? services.find((item) => item.slug === rawService)
    : undefined;
  const doctor = rawDoctor ? getDoctorBySlug(rawDoctor) : undefined;

  return (
    <>
      <BookingHero />
      <BookingHotelNote />
      <Section className="pt-0">
        <Container>
          <BookingForm
            initialServiceSlug={service?.slug}
            initialDoctorName={doctor?.name}
          />
        </Container>
      </Section>
    </>
  );
}
