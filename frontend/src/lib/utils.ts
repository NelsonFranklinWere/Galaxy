import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatCurrency = (value: number, currency = "KES") =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);

export const buildWhatsappLink = (phone: string, message: string) => {
  const digitsOnly = phone.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${digitsOnly}?text=${encodedMessage}`;
};

export const chunkArray = <T,>(items: T[], size: number) =>
  items.reduce<T[][]>((acc, item, index) => {
    if (index % size === 0) {
      acc.push([item]);
      return acc;
    }

    acc[acc.length - 1]?.push(item);
    return acc;
  }, []);

