import Link from "next/link";
import { LuPawPrint } from "react-icons/lu";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export type LogoProps = {
  inverted?: boolean;
  className?: string;
};

export function Logo({ inverted = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex shrink-0 items-center gap-2.5 rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        inverted
          ? "focus-visible:ring-offset-forest"
          : "focus-visible:ring-offset-background",
        className,
      )}
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-full",
          inverted ? "bg-lime text-forest" : "bg-forest text-lime",
        )}
        aria-hidden
      >
        <LuPawPrint className="size-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight">
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold tracking-[0.16em] uppercase",
            inverted ? "text-forest-foreground/65" : "text-muted-foreground",
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
