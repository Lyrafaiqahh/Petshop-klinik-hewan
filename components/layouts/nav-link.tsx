"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

export type NavLinkProps = {
  item: NavItem;
};

export function NavLink({ item }: NavLinkProps) {
  const pathname = usePathname();
  const [path, hash] = item.href.split("#");
  const isActive = hash
    ? false
    : path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(`${path}/`);

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150 ease-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {item.label}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-lime transition-opacity duration-150 ease-smooth",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60",
        )}
      />
    </Link>
  );
}
