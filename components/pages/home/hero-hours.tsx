"use client";

import { useEffect, useState } from "react";
import { LuClock } from "react-icons/lu";
import { home } from "@/content/home";
import {
  getTodayHours,
  getWeeklyHoursSummary,
  type TodayHours,
} from "@/lib/hours";
import { cn } from "@/lib/utils";

export function HeroHours() {
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
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
        <LuClock className="size-4 text-foreground" aria-hidden />
        {home.hero.hoursLabel}
      </p>
      <p className="mt-2 text-sm font-semibold">
        {today
          ? `${today.day.day} · ${today.timeLabel}`
          : getWeeklyHoursSummary()[0]}
      </p>
      <p
        className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"
        aria-live="polite"
      >
        {today ? (
          <span
            className={cn(
              "size-2 rounded-full",
              today.isOpen ? "bg-lime-foreground" : "bg-destructive",
            )}
            aria-hidden
          />
        ) : null}
        {today ? today.statusLabel : getWeeklyHoursSummary()[1]}
      </p>
    </div>
  );
}
