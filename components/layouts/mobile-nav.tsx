"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuArrowUpRight, LuClock, LuMenu, LuPhone, LuX } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { getWeeklyHoursSummary } from "@/lib/hours";
import { generalWhatsappLink, telLink } from "@/lib/links";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        aria-label={open ? siteConfig.a11y.closeMenu : siteConfig.a11y.openMenu}
        className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        {open ? (
          <LuX className="size-5" aria-hidden />
        ) : (
          <LuMenu className="size-5" aria-hidden />
        )}
      </button>

      {open ? (
        <div
          id="mobile-navigation-panel"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-border bg-background shadow-xl"
        >
          <Container className="py-5">
            <nav aria-label={siteConfig.a11y.mobileNavigation}>
              <ul className="grid gap-1">
                {siteConfig.nav.map((item) => {
                  const isActive =
                    item.href === pathname ||
                    (item.href !== "/" &&
                      !item.href.includes("#") &&
                      pathname.startsWith(item.href));

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
                      >
                        {item.label}
                        <LuArrowUpRight
                          className="size-4 text-muted-foreground"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-4 grid gap-2">
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className={buttonStyles({ size: "md", className: "w-full" })}
              >
                {siteConfig.ctas.booking}
              </Link>
              <a
                href={generalWhatsappLink()}
                onClick={() => setOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({
                  variant: "outline",
                  size: "md",
                  className: "w-full",
                })}
              >
                <FaWhatsapp className="size-4" aria-hidden />
                {siteConfig.ctas.whatsapp}
              </a>
            </div>

            <div className="mt-4 space-y-3 rounded-xl bg-muted p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-lime text-lime-foreground">
                  <LuClock className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-medium">
                    {siteConfig.hoursStatus.today} ·{" "}
                    {siteConfig.hoursStatus.weekly}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {getWeeklyHoursSummary().join(" · ")}
                  </p>
                </div>
              </div>
              <a
                href={telLink()}
                className="flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-lime decoration-2 underline-offset-4"
              >
                <LuPhone className="size-4" aria-hidden />
                {siteConfig.emergency.display}
              </a>
              <p className="text-xs leading-5 text-muted-foreground">
                {siteConfig.hoursStatus.emergencyNote}
              </p>
            </div>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
