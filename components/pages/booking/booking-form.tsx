"use client";

import { useState, type FormEvent } from "react";
import { LuArrowLeft, LuCheck, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { bookingPage } from "@/content/booking";
import { branches } from "@/content/branches";
import {
  services,
  type Service,
  type ServiceCategory,
} from "@/content/services";
import { siteConfig } from "@/content/site";
import { getJakartaDateInput, getJakartaTime, isPastDate } from "@/lib/hours";
import { whatsappLink, telLink } from "@/lib/links";
import { formatDateId, formatPriceWithUnit } from "@/lib/pricing";

type FormValues = {
  ownerName: string;
  whatsapp: string;
  animalType: string;
  animalName: string;
  animalAge: string;
  serviceCategory: ServiceCategory | "";
  serviceSlug: string;
  branchSlug: string;
  date: string;
  time: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export type BookingFormProps = {
  initialServiceSlug?: string;
  initialDoctorName?: string;
};

const fieldOrder: (keyof FormValues)[] = [
  "ownerName",
  "whatsapp",
  "animalType",
  "animalName",
  "serviceCategory",
  "serviceSlug",
  "branchSlug",
  "date",
  "time",
];

function fieldId(field: keyof FormValues): string {
  return `booking-${field}`;
}

function categoryLabel(category: ServiceCategory | ""): string {
  if (category === "medis") {
    return bookingPage.form.categoryLabels.medis;
  }
  if (category === "nonmedis") {
    return bookingPage.form.categoryLabels.nonmedis;
  }
  return bookingPage.summary.notSelected;
}

function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function BookingForm({
  initialServiceSlug,
  initialDoctorName,
}: BookingFormProps) {
  const initialService = initialServiceSlug
    ? getService(initialServiceSlug)
    : undefined;

  const initialValues: FormValues = {
    ownerName: "",
    whatsapp: "",
    animalType: "",
    animalName: "",
    animalAge: "",
    serviceCategory: initialService?.category ?? "",
    serviceSlug: initialService?.slug ?? "",
    branchSlug: branches[0]?.slug ?? "",
    date: "",
    time: "",
    notes: initialDoctorName
      ? bookingPage.doctorPrefill.replace("{nama}", initialDoctorName)
      : "",
  };

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const selectedService = getService(values.serviceSlug);
  const selectedBranch = branches.find(
    (branch) => branch.slug === values.branchSlug,
  );
  const availableServices = values.serviceCategory
    ? services.filter((service) => service.category === values.serviceCategory)
    : [];

  function updateField<K extends keyof FormValues>(
    key: K,
    value: FormValues[K],
  ) {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key]) {
        return previous;
      }
      const next = { ...previous };
      delete next[key];
      return next;
    });
    setWhatsappUrl(null);
  }

  function validate(current: FormValues): FormErrors {
    const next: FormErrors = {};

    if (current.ownerName.trim().length < 2) {
      next.ownerName = bookingPage.form.fields.ownerName.error;
    }

    const digits = current.whatsapp.replace(/\D/g, "");
    if (!digits) {
      next.whatsapp = bookingPage.form.fields.whatsapp.error;
    } else if (!/^(62|0)?8[1-9][0-9]{6,11}$/.test(digits)) {
      next.whatsapp = bookingPage.form.fields.whatsapp.invalidError;
    }

    if (!current.animalType) {
      next.animalType = bookingPage.form.fields.animalType.error;
    }
    if (!current.animalName.trim()) {
      next.animalName = bookingPage.form.fields.animalName.error;
    }
    if (
      current.serviceCategory !== "medis" &&
      current.serviceCategory !== "nonmedis"
    ) {
      next.serviceCategory = bookingPage.form.fields.serviceCategory.error;
    }

    const service = getService(current.serviceSlug);
    if (!service || service.category !== current.serviceCategory) {
      next.serviceSlug = bookingPage.form.fields.service.error;
    }

    if (!current.branchSlug) {
      next.branchSlug = bookingPage.form.fields.branch.error;
    }

    if (!current.date) {
      next.date = bookingPage.form.fields.date.error;
    } else if (isPastDate(current.date)) {
      next.date = bookingPage.form.fields.date.pastError;
    }

    if (!current.time) {
      next.time = bookingPage.form.fields.time.error;
    } else if (
      current.date &&
      current.date === getJakartaDateInput() &&
      isTimeInPast(current.time)
    ) {
      next.time = bookingPage.form.fields.time.pastTimeError;
    }

    return next;
  }

  function isTimeInPast(time: string): boolean {
    const [hours, minutes] = time.split(":").map(Number);
    const now = getJakartaTime();
    return hours * 60 + minutes <= now.hours * 60 + now.minutes;
  }

  function buildMessage(current: FormValues): string {
    const service = getService(current.serviceSlug);
    const branch = branches.find((item) => item.slug === current.branchSlug);
    const schedule = current.date
      ? `${formatDateId(current.date)} pukul ${current.time.replace(":", ".")} ${bookingPage.summary.scheduleSuffix}`
      : "-";

    const lines = [
      bookingPage.message.intro,
      "",
      `${bookingPage.summary.ownerLabel}: ${current.ownerName.trim()}`,
      `${bookingPage.summary.whatsappLabel}: ${current.whatsapp.trim()}`,
      `${bookingPage.message.animalTypeLabel}: ${current.animalType}`,
      `${bookingPage.message.animalNameLabel}: ${current.animalName.trim()}`,
    ];

    if (current.animalAge.trim()) {
      lines.push(
        `${bookingPage.message.animalAgeLabel}: ${current.animalAge.trim()}`,
      );
    }

    lines.push(
      `${bookingPage.summary.categoryLabel}: ${categoryLabel(current.serviceCategory)}`,
      `${bookingPage.summary.serviceLabel}: ${service?.name ?? bookingPage.summary.notSelected}`,
      `${bookingPage.summary.branchLabel}: ${branch?.name ?? bookingPage.summary.notSelected}`,
      `${bookingPage.summary.scheduleLabel}: ${schedule}`,
    );

    if (current.notes.trim()) {
      lines.push(`${bookingPage.summary.notesLabel}: ${current.notes.trim()}`);
    }

    lines.push("", bookingPage.message.closing);

    return lines.join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    const url = whatsappLink(buildMessage(values));
    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setWhatsappUrl(null);
    document.getElementById(fieldId("ownerName"))?.focus();
  }

  const summaryRows = [
    {
      label: bookingPage.summary.ownerLabel,
      value: values.ownerName.trim() || bookingPage.summary.notSelected,
    },
    {
      label: bookingPage.summary.whatsappLabel,
      value: values.whatsapp.trim() || bookingPage.summary.notSelected,
    },
    {
      label: bookingPage.summary.animalLabel,
      value: values.animalName.trim()
        ? `${values.animalType || "Anabul"} · ${values.animalName.trim()}${
            values.animalAge.trim() ? ` (${values.animalAge.trim()})` : ""
          }`
        : values.animalType || bookingPage.summary.notSelected,
    },
    {
      label: bookingPage.summary.serviceLabel,
      value: selectedService?.name ?? bookingPage.summary.notSelected,
    },
    {
      label: bookingPage.summary.categoryLabel,
      value: categoryLabel(values.serviceCategory),
    },
    {
      label: bookingPage.summary.branchLabel,
      value: selectedBranch?.name ?? bookingPage.summary.notSelected,
    },
    {
      label: bookingPage.summary.scheduleLabel,
      value: values.date
        ? `${formatDateId(values.date)}${
            values.time
              ? ` · ${values.time.replace(":", ".")} ${bookingPage.summary.scheduleSuffix}`
              : ""
          }`
        : bookingPage.summary.notSelected,
    },
    {
      label: bookingPage.summary.priceLabel,
      value: selectedService
        ? formatPriceWithUnit(selectedService.price)
        : bookingPage.summary.notSelected,
    },
    {
      label: bookingPage.summary.notesLabel,
      value: values.notes.trim() || bookingPage.summary.noNotes,
    },
  ];

  return (
    <form
      id="form-booking"
      onSubmit={handleSubmit}
      noValidate
      className="grid scroll-mt-24 gap-6 lg:grid-cols-[1.45fr_0.85fr] lg:items-start"
    >
      <div className="space-y-8 rounded-2xl border border-border bg-card p-5 sm:p-7">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {bookingPage.form.eyebrow}
            </p>
            <p className="text-xs text-muted-foreground">
              {bookingPage.form.requiredHint}
            </p>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            {bookingPage.form.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {bookingPage.form.description}
          </p>
        </div>

        <fieldset className="space-y-5">
          <legend className="text-sm font-bold">
            {bookingPage.form.sectionOwner}
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id={fieldId("ownerName")}
              label={`${bookingPage.form.fields.ownerName.label} *`}
              error={errors.ownerName}
            >
              <Input
                id={fieldId("ownerName")}
                name="ownerName"
                autoComplete="name"
                placeholder={bookingPage.form.fields.ownerName.placeholder}
                value={values.ownerName}
                onChange={(event) =>
                  updateField("ownerName", event.target.value)
                }
              />
            </Field>

            <Field
              id={fieldId("whatsapp")}
              label={`${bookingPage.form.fields.whatsapp.label} *`}
              hint={bookingPage.form.fields.whatsapp.hint}
              error={errors.whatsapp}
            >
              <Input
                id={fieldId("whatsapp")}
                name="whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={bookingPage.form.fields.whatsapp.placeholder}
                value={values.whatsapp}
                onChange={(event) =>
                  updateField("whatsapp", event.target.value)
                }
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="text-sm font-bold">
            {bookingPage.form.sectionPet}
          </legend>
          <div className="grid gap-5 sm:grid-cols-3">
            <Field
              id={fieldId("animalType")}
              label={`${bookingPage.form.fields.animalType.label} *`}
              error={errors.animalType}
            >
              <Select
                id={fieldId("animalType")}
                name="animalType"
                value={values.animalType}
                onChange={(event) =>
                  updateField("animalType", event.target.value)
                }
              >
                <option value="">
                  {bookingPage.form.fields.animalType.placeholder}
                </option>
                {bookingPage.form.fields.animalType.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Field>

            <Field
              id={fieldId("animalName")}
              label={`${bookingPage.form.fields.animalName.label} *`}
              error={errors.animalName}
            >
              <Input
                id={fieldId("animalName")}
                name="animalName"
                placeholder={bookingPage.form.fields.animalName.placeholder}
                value={values.animalName}
                onChange={(event) =>
                  updateField("animalName", event.target.value)
                }
              />
            </Field>

            <Field
              id={fieldId("animalAge")}
              label={bookingPage.form.fields.animalAge.label}
              hint={bookingPage.form.fields.animalAge.hint}
            >
              <Input
                id={fieldId("animalAge")}
                name="animalAge"
                placeholder={bookingPage.form.fields.animalAge.placeholder}
                value={values.animalAge}
                onChange={(event) =>
                  updateField("animalAge", event.target.value)
                }
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="text-sm font-bold">
            {bookingPage.form.sectionService}
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id={fieldId("serviceCategory")}
              label={`${bookingPage.form.fields.serviceCategory.label} *`}
              error={errors.serviceCategory}
            >
              <Select
                id={fieldId("serviceCategory")}
                name="serviceCategory"
                value={values.serviceCategory}
                onChange={(event) => {
                  const next = event.target.value;
                  const nextCategory: ServiceCategory | "" =
                    next === "medis" || next === "nonmedis" ? next : "";
                  updateField("serviceCategory", nextCategory);
                  updateField("serviceSlug", "");
                }}
              >
                <option value="">
                  {bookingPage.form.fields.serviceCategory.emptyOption}
                </option>
                <option value="medis">
                  {bookingPage.form.categoryLabels.medis}
                </option>
                <option value="nonmedis">
                  {bookingPage.form.categoryLabels.nonmedis}
                </option>
              </Select>
            </Field>

            <Field
              id={fieldId("serviceSlug")}
              label={`${bookingPage.form.fields.service.label} *`}
              hint={bookingPage.form.fields.service.hint}
              error={errors.serviceSlug}
            >
              <Select
                id={fieldId("serviceSlug")}
                name="serviceSlug"
                value={values.serviceSlug}
                onChange={(event) =>
                  updateField("serviceSlug", event.target.value)
                }
              >
                <option value="">
                  {values.serviceCategory
                    ? bookingPage.form.fields.service.emptyOption
                    : bookingPage.form.fields.service.selectCategoryFirst}
                </option>
                {availableServices.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name} · {formatPriceWithUnit(service.price)}
                  </option>
                ))}
              </Select>
            </Field>

            <Field
              id={fieldId("branchSlug")}
              label={`${bookingPage.form.fields.branch.label} *`}
              error={errors.branchSlug}
            >
              <Select
                id={fieldId("branchSlug")}
                name="branchSlug"
                value={values.branchSlug}
                onChange={(event) =>
                  updateField("branchSlug", event.target.value)
                }
              >
                <option value="">
                  {bookingPage.form.fields.branch.placeholder}
                </option>
                {branches.map((branch) => (
                  <option key={branch.slug} value={branch.slug}>
                    {branch.name}
                  </option>
                ))}
              </Select>
            </Field>

            <div className="rounded-xl bg-muted p-4 text-xs leading-5 text-muted-foreground">
              <p className="font-semibold text-foreground">
                {siteConfig.addressLines[0]}
              </p>
              <p>{siteConfig.addressLines[1]}</p>
              <a
                href={telLink()}
                className="mt-2 inline-flex items-center gap-1.5 font-semibold text-foreground underline decoration-lime decoration-2 underline-offset-4"
              >
                <LuPhone className="size-3.5" aria-hidden />
                {siteConfig.emergency.display}
              </a>
            </div>
          </div>
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="text-sm font-bold">
            {bookingPage.form.sectionSchedule}
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id={fieldId("date")}
              label={`${bookingPage.form.fields.date.label} *`}
              hint={bookingPage.form.fields.date.hint}
              error={errors.date}
            >
              <Input
                id={fieldId("date")}
                name="date"
                type="date"
                min={getJakartaDateInput()}
                value={values.date}
                onChange={(event) => updateField("date", event.target.value)}
              />
            </Field>

            <Field
              id={fieldId("time")}
              label={`${bookingPage.form.fields.time.label} *`}
              hint={bookingPage.form.fields.time.hint}
              error={errors.time}
            >
              <Select
                id={fieldId("time")}
                name="time"
                value={values.time}
                onChange={(event) => updateField("time", event.target.value)}
              >
                <option value="">
                  {bookingPage.form.fields.time.placeholder}
                </option>
                {bookingPage.form.timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot.replace(":", ".")} WIB
                  </option>
                ))}
              </Select>
            </Field>
          </div>
        </fieldset>

        <Field
          id={fieldId("notes")}
          label={bookingPage.form.fields.notes.label}
          hint={bookingPage.form.fields.notes.hint}
        >
          <Textarea
            id={fieldId("notes")}
            name="notes"
            rows={4}
            placeholder={bookingPage.form.fields.notes.placeholder}
            value={values.notes}
            onChange={(event) => updateField("notes", event.target.value)}
          />
        </Field>

        <div className="border-t border-border pt-5">
          {Object.keys(errors).length > 0 ? (
            <p
              role="alert"
              className="mb-3 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
            >
              {bookingPage.form.validationSummary}
            </p>
          ) : null}
          <Button type="submit" size="lg" className="w-full">
            <FaWhatsapp className="size-4" aria-hidden />
            {bookingPage.form.submitLabel}
          </Button>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            {bookingPage.form.submitHint}
          </p>
        </div>
      </div>

      <aside className="space-y-4 lg:sticky lg:top-24">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-bold">{bookingPage.summary.title}</h2>
            <Badge variant="accent">{bookingPage.summary.statusValue}</Badge>
          </div>
          <dl className="mt-4 space-y-3">
            {summaryRows.map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <dt className="text-xs text-muted-foreground">{row.label}</dt>
                <dd className="max-w-[60%] text-right text-xs font-medium">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-xl bg-muted p-3 text-xs leading-5 text-muted-foreground">
            {bookingPage.summary.statusNote}
          </p>
        </div>

        {whatsappUrl ? (
          <div
            role="status"
            className="rounded-2xl border border-lime bg-lime/15 p-5"
          >
            <p className="flex items-center gap-2 text-sm font-bold">
              <LuCheck className="size-4" aria-hidden />
              {bookingPage.confirmation.title}
            </p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              {bookingPage.confirmation.description}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-medium text-forest-foreground transition-colors hover:bg-forest/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              <FaWhatsapp className="size-4" aria-hidden />
              {bookingPage.confirmation.openLabel}
            </a>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              {bookingPage.confirmation.popupNote}
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold underline decoration-2 underline-offset-4 focus-visible:outline-none"
            >
              <LuArrowLeft className="size-3.5" aria-hidden />
              {bookingPage.confirmation.resetLabel}
            </button>
          </div>
        ) : null}

        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4">
          <p className="text-xs font-bold tracking-[0.12em] text-destructive uppercase">
            {bookingPage.emergency.label}
          </p>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            {siteConfig.emergencyWarning}
          </p>
          <a
            href={telLink()}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold underline decoration-destructive decoration-2 underline-offset-4 focus-visible:outline-none"
          >
            <LuPhone className="size-4" aria-hidden />
            {siteConfig.emergency.display}
          </a>
        </div>

        <p className="px-1 text-xs leading-5 text-muted-foreground">
          {bookingPage.notice}
        </p>
        <p className="px-1 text-xs leading-5 text-muted-foreground">
          {bookingPage.disclaimer}
        </p>
      </aside>
    </form>
  );
}
