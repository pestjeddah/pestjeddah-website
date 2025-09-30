import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ar', 'en'],

  // Used when no locale matches - ALWAYS default to Arabic
  defaultLocale: 'ar',
  
  // Disable locale detection to always default to Arabic
  localeDetection: false,
  
  // Only use prefix for English (/en), Arabic has no prefix
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      'en': '/en'
    }
  }
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};


