import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { buttonStyles } from "@/components/ui/button";
import { Logo } from "@/components/layouts/logo";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { NavLink } from "@/components/layouts/nav-link";
import { siteConfig } from "@/content/site";
import { telLink } from "@/lib/links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-3">
        <Logo />

        <nav
          aria-label={siteConfig.a11y.mainNavigation}
          className="hidden items-center gap-0.5 lg:flex"
        >
          {siteConfig.nav.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle labels={siteConfig.theme} />
          <a
            href={telLink()}
            aria-label={siteConfig.ctas.callEmergency}
            className={buttonStyles({
              variant: "ghost",
              size: "sm",
              className: "hidden lg:inline-flex",
            })}
          >
            <LuPhone className="size-4" aria-hidden />
            <span className="hidden xl:inline">
              {siteConfig.ctas.callEmergency}
            </span>
          </a>
          <Link
            href="/booking"
            className={buttonStyles({
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            {siteConfig.ctas.booking}
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
