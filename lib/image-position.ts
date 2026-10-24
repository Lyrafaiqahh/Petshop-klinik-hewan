/**
 * Titik fokus (object-position) per foto supaya objek utama tetap terlihat
 * saat foto dipotong oleh object-cover. Foto yang tidak terdaftar memakai tengah.
 */
const positions: Record<string, string> = {
  "/images/about.jpg": "68% 40%",
  "/images/clinic.jpg": "72% 45%",
  "/images/cta-cat.jpg": "50% 35%",
  "/images/gallery-cat.jpg": "50% 40%",
  "/images/grooming.jpg": "50% 28%",
  "/images/grooming-cat.jpg": "50% 45%",
  "/images/hero-cat.jpg": "60% 55%",
  "/images/hotel.jpg": "50% 80%",
  "/images/petshop.jpg": "65% 50%",
  "/images/doctor-aditya-portrait.jpg": "50% 15%",
  "/images/doctor-nadia-portrait.jpg": "50% 20%",
  "/images/doctor-rizky-portrait.jpg": "50% 15%",
};

export function imagePosition(src: string): string {
  return positions[src] ?? "50% 50%";
}
