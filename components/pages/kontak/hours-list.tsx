"use client";

import { useEffect, useState } from "react";
import { LuClock } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { kontakPage } from "@/content/kontak";
import { siteConfig } from "@/content/site";
import { getTodayHours, type TodayHours } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function HoursList() {
  const [today, setToday] = useState<TodayHours | null>(null);

  useEffect(() => {
    const update = () => setToday(getTodayHours());
    const initial = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 60_000);

    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="rounded-3xl border border-border bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            <LuClock className="size-4 text-foreground" aria-hidden />
            {kontakPage.hours.eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight">
            {kontakPage.hours.title}
          </h2>
        </div>
        <div aria-live="polite">
          {today ? (
            <Badge variant={today.isOpen ? "accent" : "outline"}>
              {today.statusLabel}
            </Badge>
          ) : (
            <Badge variant="outline">{siteConfig.hoursStatus.today}</Badge>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {kontakPage.hours.description}
      </p>

      <ul className="mt-5 divide-y divide-border">
        {siteConfig.hours.map((hours) => {
          const isToday = today?.day.day === hours.day;
          return (
            <li
              key={hours.day}
              className={cn(
                "flex items-center justify-between gap-3 px-2 py-2.5 text-sm",
                isToday && "-mx-1 rounded-lg bg-lime/20 px-3",
              )}
            >
              <span className="flex items-center gap-2">
                {hours.day}
                {isToday ? (
                  <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold tracking-wide text-lime-foreground uppercase">
                    {kontakPage.hours.todayLabel}
                  </span>
                ) : null}
              </span>
              <span
                className={cn(
                  "text-right tabular-nums",
                  isToday ? "font-bold" : "text-muted-foreground",
                )}
              >
                {hours.open}–{hours.close} WIB
              </span>
            </li>
          );
        })}
      </ul>

      <p className="mt-4 rounded-xl bg-muted p-3 text-xs leading-5 text-muted-foreground">
        {kontakPage.hours.note}
      </p>
    </div>
  );
}
