import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['ar', 'en'] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as any)) {
    locale = 'ar'; // Default to Arabic
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});


