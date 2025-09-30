import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Inter, Tajawal } from 'next/font/google';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';
import { TopBar } from '@/components/layout/TopBar';
import { isRTL, generateHreflang } from '@/lib/utils';
import { siteConfig } from '@/app/config/site';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const locales = ['ar', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'شركة مكافحة حشرات بجدة — شركة الأسطورة | رش مبيدات مرخّص 24/7'
      : 'Pest Control Company in Jeddah — Al-Ustora | Licensed Pest Control 24/7',
    description: isArabic
      ? siteConfig.description
      : siteConfig.descriptionEn,
    alternates: {
      languages: {
        'ar-SA': '/',
        'en-SA': '/en',
      },
      canonical: locale === 'ar' ? '/' : '/en',
    },
    openGraph: {
      locale: generateHreflang(locale),
      alternateLocale: generateHreflang(locale === 'ar' ? 'en' : 'ar'),
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={isRTL(locale) ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          hrefLang="ar-SA"
          href="https://pestjeddah.com/"
        />
        <link
          rel="alternate"
          hrefLang="en-SA"
          href="https://pestjeddah.com/en"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://pestjeddah.com/"
        />
      </head>
      <body className={`${inter.variable} ${tajawal.variable} antialiased ${isRTL(locale) ? 'arabic-text' : ''}`}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <TopBar />
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppFloat />
          </div>
          <Toaster
            position={isRTL(locale) ? 'top-left' : 'top-right'}
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}



