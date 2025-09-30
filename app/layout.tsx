import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://pestjeddah.com'),
  title: 'شركة مكافحة حشرات بجدة — شركة الأسطورة | رش مبيدات مرخّص 24/7',
  description: 'شركة الأسطورة لمكافحة الحشرات بجدة - خدمة فورية 24/7، مرخصة ومضمونة لجميع أنواع الحشرات والقوارض',
  keywords: ['مكافحة حشرات جدة', 'شركة رش مبيدات', 'مكافحة النمل الأبيض', 'مكافحة الصراصير', 'مكافحة بق الفراش'],
  authors: [{ name: 'شركة الأسطورة' }],
  creator: 'شركة الأسطورة',
  publisher: 'شركة الأسطورة',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://pestjeddah.com',
    siteName: 'شركة الأسطورة',
    title: 'شركة مكافحة حشرات بجدة — شركة الأسطورة',
    description: 'شركة الأسطورة لمكافحة الحشرات بجدة - خدمة فورية 24/7، مرخصة ومضمونة',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'شركة الأسطورة لمكافحة الحشرات بجدة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة مكافحة حشرات بجدة — شركة الأسطورة',
    description: 'شركة الأسطورة لمكافحة الحشرات بجدة - خدمة فورية 24/7',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${tajawal.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}



