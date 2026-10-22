import { siteConfig } from "@/content/site";

export function whatsappLink(message: string): string {
  const number = siteConfig.whatsapp.value.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generalWhatsappLink(): string {
  return whatsappLink(
    "Halo Ruang Anabul, saya ingin bertanya tentang layanan untuk anabul saya.",
  );
}

export function productWhatsappLink(productName: string): string {
  return whatsappLink(
    `Halo Ruang Anabul, saya ingin menanyakan stok dan harga "${productName}" yang saya lihat di halaman layanan.`,
  );
}

export function serviceWhatsappLink(serviceName: string): string {
  return whatsappLink(
    `Halo Ruang Anabul, saya ingin bertanya tentang layanan ${serviceName}.`,
  );
}

export function telLink(): string {
  return `tel:${siteConfig.emergency.value}`;
}

function fullAddress(): string {
  return `${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city}, ${siteConfig.address.province}, ${siteConfig.address.country}`;
}

export function mapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress())}`;
}

export function mapsDirectionsUrl(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress())}`;
}

export function mapsEmbedUrl(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress())}&z=16&output=embed`;
}

export function bookingServiceHref(slug: string): string {
  return `/booking?layanan=${encodeURIComponent(slug)}#form-booking`;
}

export function bookingDoctorHref(slug: string): string {
  return `/booking?dokter=${encodeURIComponent(slug)}#form-booking`;
}
