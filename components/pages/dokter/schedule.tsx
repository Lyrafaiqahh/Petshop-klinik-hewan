import { LuCalendarDays, LuInfo } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/layouts/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { dokterPage } from "@/content/dokter";
import { doctors, weekdays } from "@/content/doctors";
import { cn } from "@/lib/utils";

function shiftFor(doctorIndex: number, dayIndex: number): string {
  return doctors[doctorIndex]?.schedule[dayIndex]?.time ?? "—";
}

export function DoctorSchedule() {
  return (
    <Section id="jadwal" className="scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow={dokterPage.schedule.eyebrow}
          title={dokterPage.schedule.title}
          description={dokterPage.schedule.description}
        />

        <div className="mt-8 hidden overflow-hidden rounded-2xl border border-border bg-card md:block">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">{dokterPage.schedule.title}</caption>
            <thead className="bg-muted">
              <tr>
                <th
                  scope="col"
                  className="px-5 py-4 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase"
                >
                  {dokterPage.schedule.dayLabel}
                </th>
                {doctors.map((doctor) => (
                  <th
                    key={doctor.slug}
                    scope="col"
                    className="px-5 py-4 text-xs font-bold"
                  >
                    {doctor.name}
                    <span className="mt-0.5 block text-[11px] font-normal text-muted-foreground">
                      {doctor.role}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {weekdays.map((day, dayIndex) => (
                <tr key={day} className="transition-colors hover:bg-muted/40">
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-semibold whitespace-nowrap"
                  >
                    {day}
                  </th>
                  {doctors.map((doctor, doctorIndex) => {
                    const shift = shiftFor(doctorIndex, dayIndex);
                    return (
                      <td
                        key={doctor.slug}
                        className={cn(
                          "px-5 py-4 whitespace-nowrap",
                          shift === dokterPage.schedule.confirmLabel
                            ? "text-muted-foreground italic"
                            : "font-medium",
                        )}
                      >
                        {shift}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:hidden">
          {weekdays.map((day, dayIndex) => (
            <div
              key={day}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold">
                <LuCalendarDays
                  className="size-4 text-muted-foreground"
                  aria-hidden
                />
                {day}
              </h3>
              <dl className="mt-3 space-y-2">
                {doctors.map((doctor, doctorIndex) => {
                  const shift = shiftFor(doctorIndex, dayIndex);
                  return (
                    <div
                      key={doctor.slug}
                      className="flex items-start justify-between gap-3 border-b border-border pb-2 last:border-0 last:pb-0"
                    >
                      <dt className="text-xs text-muted-foreground">
                        {doctor.name}
                      </dt>
                      <dd
                        className={cn(
                          "text-right text-xs",
                          shift === dokterPage.schedule.confirmLabel
                            ? "text-muted-foreground italic"
                            : "font-semibold",
                        )}
                      >
                        {shift}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-5 flex max-w-3xl items-start gap-2 rounded-xl bg-muted/70 p-4 text-xs leading-5 text-muted-foreground">
          <LuInfo className="mt-0.5 size-4 shrink-0" aria-hidden />
          {dokterPage.schedule.note}
        </p>
      </Container>
    </Section>
  );
}
