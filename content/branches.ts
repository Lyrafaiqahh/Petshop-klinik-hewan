import { siteConfig, type OpeningHours } from "@/content/site";
import { mapsDirectionsUrl, mapsSearchUrl } from "@/lib/links";

export type Branch = {
  slug: string;
  name: string;
  shortName: string;
  addressLines: string[];
  phoneDisplay: string;
  phoneHref: string;
  whatsappDisplay: string;
  whatsappValue: string;
  hours: OpeningHours[];
  mapsSearchUrl: string;
  mapsDirectionsUrl: string;
  note: string;
};

export const branches: Branch[] = [
  {
    slug: "malang-kota",
    name: "Ruang Anabul Malang",
    shortName: "Malang",
    addressLines: siteConfig.addressLines,
    phoneDisplay: siteConfig.emergency.display,
    phoneHref: siteConfig.emergency.value,
    whatsappDisplay: siteConfig.whatsapp.display,
    whatsappValue: siteConfig.whatsapp.value,
    hours: siteConfig.hours,
    mapsSearchUrl: mapsSearchUrl(),
    mapsDirectionsUrl: mapsDirectionsUrl(),
    note: "Alamat dan nomor kontak merupakan data simulasi.",
  },
];

export const primaryBranch = branches[0];
