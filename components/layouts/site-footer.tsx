import Link from "next/link";
import { LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layouts/logo";
import { siteConfig } from "@/content/site";
import { getWeeklyHoursSummary } from "@/lib/hours";
import { generalWhatsappLink, mapsDirectionsUrl, telLink } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div className="max-w-sm">
            <Logo inverted />
            <p className="mt-4 text-sm leading-6 text-forest-foreground/70">
              {siteConfig.footer.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={generalWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/20 px-3 py-2 text-xs font-medium transition-colors hover:bg-forest-foreground/10 focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none"
              >
                <FaWhatsapp className="size-3.5" aria-hidden />
                {siteConfig.whatsapp.display}
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/20 px-3 py-2 text-xs font-medium transition-colors hover:bg-forest-foreground/10 focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none"
              >
                <LuPhone className="size-3.5" aria-hidden />
                {siteConfig.emergency.display}
              </a>
            </div>
          </div>

          <nav aria-label={siteConfig.a11y.footerNavigation}>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-forest-foreground/55 uppercase">
              {siteConfig.footer.navigationTitle}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-forest-foreground/75 transition-colors hover:text-forest-foreground focus-visible:text-forest-foreground focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-sm font-medium text-lime transition-colors hover:text-lime/80 focus-visible:outline-none"
                >
                  {siteConfig.ctas.booking}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-forest-foreground/55 uppercase">
              {siteConfig.footer.servicesTitle}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footer.serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-forest-foreground/75 transition-colors hover:text-forest-foreground focus-visible:text-forest-foreground focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.16em] text-forest-foreground/55 uppercase">
              {siteConfig.footer.contactTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-forest-foreground/75">
              <li className="flex gap-2.5">
                <LuMapPin
                  className="mt-0.5 size-4 shrink-0 text-lime"
                  aria-hidden
                />
                <div>
                  {siteConfig.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <a
                    href={mapsDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs font-medium text-lime underline underline-offset-4 focus-visible:outline-none"
                  >
                    {siteConfig.footer.directionsLabel}
                  </a>
                </div>
              </li>
              <li className="flex gap-2.5">
                <LuClock
                  className="mt-0.5 size-4 shrink-0 text-lime"
                  aria-hidden
                />
                <div>
                  {getWeeklyHoursSummary().map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-forest-foreground/15 bg-forest-foreground/5 p-4">
          <p className="text-xs font-semibold tracking-wide text-lime">
            {siteConfig.footer.demoTitle}
          </p>
          <p className="mt-2 max-w-4xl text-xs leading-5 text-forest-foreground/70">
            {siteConfig.demoNotice}
          </p>
          <p className="mt-2 max-w-4xl text-xs leading-5 text-forest-foreground/60">
            {siteConfig.disclaimer}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-forest-foreground/10 pt-6 text-xs text-forest-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.footer.copyright}</p>
          <p>{siteConfig.footer.buildNote}</p>
        </div>
      </Container>
    </footer>
  );
}
