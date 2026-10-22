import { siteConfig, type OpeningHours, type Weekday } from "@/content/site";

export type TodayHours = {
  day: OpeningHours;
  isOpen: boolean;
  statusLabel: string;
  timeLabel: string;
};

function toMinutes(time: string): number {
  const [hours, minutes] = time.split(".").map(Number);
  return hours * 60 + minutes;
}

export function getJakartaWeekday(date: Date = new Date()): Weekday {
  return new Intl.DateTimeFormat("id-ID", {
    timeZone: siteConfig.timeZone,
    weekday: "long",
  }).format(date) as Weekday;
}

export function getJakartaTime(date: Date = new Date()): {
  hours: number;
  minutes: number;
} {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: siteConfig.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const hours = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minutes = Number(
    parts.find((part) => part.type === "minute")?.value ?? 0,
  );

  return { hours, minutes };
}

export function getTodayHours(date: Date = new Date()): TodayHours {
  const weekday = getJakartaWeekday(date);
  const day =
    siteConfig.hours.find((item) => item.day === weekday) ??
    siteConfig.hours[0];
  const { hours, minutes } = getJakartaTime(date);
  const current = hours * 60 + minutes;
  const isOpen =
    current >= toMinutes(day.open) && current < toMinutes(day.close);

  return {
    day,
    isOpen,
    statusLabel: isOpen
      ? siteConfig.hoursStatus.open
      : siteConfig.hoursStatus.closed,
    timeLabel: `${day.open}–${day.close} WIB`,
  };
}

export function getWeeklyHoursSummary(): string[] {
  const weekdays = siteConfig.hours.filter((day) => day.day !== "Minggu");
  const sunday = siteConfig.hours.find((day) => day.day === "Minggu");
  const lines: string[] = [];

  if (weekdays.length > 0) {
    const first = weekdays[0];
    const last = weekdays[weekdays.length - 1];
    lines.push(`${first.day}–${last.day} ${first.open}–${last.close} WIB`);
  }

  if (sunday) {
    lines.push(`${sunday.day} ${sunday.open}–${sunday.close} WIB`);
  }

  return lines;
}

export function getJakartaDateInput(date: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: siteConfig.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value ?? "1970";
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";

  return `${year}-${month}-${day}`;
}

export function getDayName(dateString: string): Weekday {
  const date = new Date(`${dateString}T12:00:00+07:00`);
  return getJakartaWeekday(date);
}

export function isPastDate(dateString: string): boolean {
  return dateString < getJakartaDateInput();
}
