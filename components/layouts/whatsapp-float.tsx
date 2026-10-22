import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/content/site";
import { generalWhatsappLink } from "@/lib/links";

export function WhatsAppFloat() {
  return (
    <a
      href={generalWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.a11y.whatsappFloat}
      className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-150 ease-smooth hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none lg:hidden"
    >
      <FaWhatsapp className="size-6" aria-hidden />
    </a>
  );
}
