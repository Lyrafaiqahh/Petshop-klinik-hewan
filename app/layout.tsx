import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SkipLink } from "@/components/layouts/skip-link";
import { ThemeScript } from "@/components/layouts/theme-script";
import { SiteHeader } from "@/components/layouts/site-header";
import { SiteFooter } from "@/components/layouts/site-footer";
import { WhatsAppFloat } from "@/components/layouts/whatsapp-float";
import { siteConfig } from "@/content/site";
import "@/styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} — Klinik Hewan & Petshop di Malang`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  category: "kesehatan hewan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.legalName,
    title: `${siteConfig.legalName} — Klinik Hewan & Petshop di Malang`,
    description: siteConfig.description,
    url: "/",
    images: [
      {
        url: "/images/clinic.jpg",
        alt: "Ilustrasi dokter hewan memeriksa anjing (foto stok)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} — Klinik Hewan & Petshop di Malang`,
    description: siteConfig.description,
    images: ["/images/clinic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeScript />
        <SkipLink label={siteConfig.a11y.skipLink} />
        <SiteHeader />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
