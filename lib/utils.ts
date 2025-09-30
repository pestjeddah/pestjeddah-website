import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  return cleaned;
}

export function createWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = formatPhoneNumber(phone).replace(/^\+/, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

export function generateHreflang(locale: string): string {
  return locale === 'ar' ? 'ar-SA' : 'en-SA';
}

export function getOppositeLocale(locale: string): string {
  return locale === 'ar' ? 'en' : 'ar';
}

export function isRTL(locale: string): boolean {
  return locale === 'ar';
}



