import type { IconType } from "react-icons";
import {
  LuActivity,
  LuBedDouble,
  LuCalendarCheck,
  LuHeart,
  LuHeartPulse,
  LuHouse,
  LuPawPrint,
  LuScissors,
  LuShoppingBag,
  LuStethoscope,
  LuSyringe,
  LuUsers,
  LuWallet,
} from "react-icons/lu";
import type { BenefitIconKey } from "@/content/home";
import type { ServiceIconKey, ServiceTone } from "@/content/services";
import { cn } from "@/lib/utils";

const serviceIcons: Record<ServiceIconKey, IconType> = {
  stethoscope: LuStethoscope,
  syringe: LuSyringe,
  scissors: LuScissors,
  activity: LuActivity,
  bed: LuBedDouble,
  house: LuHouse,
  "shopping-bag": LuShoppingBag,
  "heart-pulse": LuHeartPulse,
  paw: LuPawPrint,
};

const benefitIcons: Record<BenefitIconKey, IconType> = {
  wallet: LuWallet,
  calendar: LuCalendarCheck,
  heart: LuHeart,
  stethoscope: LuStethoscope,
  users: LuUsers,
};

export const toneStyles: Record<ServiceTone, string> = {
  lime: "bg-lime text-lime-foreground",
  lavender: "bg-lavender text-lavender-foreground",
  peach: "bg-peach text-peach-foreground",
  sky: "bg-sky text-sky-foreground",
};

export type ServiceIconProps = {
  name: ServiceIconKey;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = serviceIcons[name];
  return <Icon className={cn("size-5", className)} aria-hidden />;
}

export type BenefitIconProps = {
  name: BenefitIconKey;
  className?: string;
};

export function BenefitIcon({ name, className }: BenefitIconProps) {
  const Icon = benefitIcons[name];
  return <Icon className={cn("size-5", className)} aria-hidden />;
}
