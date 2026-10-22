import Image from "next/image";
import { LuBone, LuShieldPlus, LuStethoscope, LuSyringe } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { layananPage } from "@/content/layanan";
import { hotelPolicies } from "@/content/packages";

const policyIcons = [LuSyringe, LuStethoscope, LuShieldPlus, LuBone];

export function HotelPolicySection() {
  return (
    <Section id="syarat-hotel" className="scroll-mt-24">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-forest text-forest-foreground">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold tracking-[0.18em] text-lime uppercase">
                {layananPage.hotelPolicy.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {layananPage.hotelPolicy.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-forest-foreground/70">
                {layananPage.hotelPolicy.description}
              </p>

              <ul className="mt-7 grid gap-5 sm:grid-cols-2">
                {hotelPolicies.map((policy, index) => {
                  const Icon = policyIcons[index] ?? LuBone;
                  return (
                    <li key={policy.title}>
                      <span className="grid size-9 place-items-center rounded-lg bg-lime text-lime-foreground">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <h3 className="mt-3 text-sm font-bold">{policy.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-forest-foreground/65">
                        {policy.description}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-7 border-t border-forest-foreground/15 pt-4 text-xs leading-5 text-forest-foreground/55">
                {layananPage.hotelPolicy.note}
              </p>
            </div>

            <div className="relative min-h-64 lg:min-h-full">
              <Image
                src="/images/hotel-room.jpg"
                alt={layananPage.hotelPolicy.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
