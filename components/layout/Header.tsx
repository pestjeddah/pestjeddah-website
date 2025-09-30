'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname as useNextPathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';

import { cn, isRTL } from '@/lib/utils';
import { siteConfig } from '@/app/config/site';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = useNextPathname();
  const rtl = isRTL(locale);

  const navigation = [
    { href: locale === 'ar' ? '/' : '/en', label: t('home') },
    { href: locale === 'ar' ? '/services' : '/en/services', label: t('services') },
    { href: locale === 'ar' ? '/sectors' : '/en/sectors', label: t('sectors') },
    { href: locale === 'ar' ? '/jeddah' : '/en/jeddah', label: t('areas') },
    { href: locale === 'ar' ? '/offers-contracts' : '/en/offers-contracts', label: t('offers') },
    { href: locale === 'ar' ? '/blog' : '/en/blog', label: t('blog') },
    { href: locale === 'ar' ? '/contact' : '/en/contact', label: t('contact') },
  ];

  const otherLocale = locale === 'ar' ? 'en' : 'ar';
  
  // Get the language switch path
  const switchLocalePath = () => {
    if (locale === 'ar') {
      // Switching from Arabic to English: add /en prefix
      return pathname === '/' ? '/en' : `/en${pathname}`;
    } else {
      // Switching from English to Arabic: remove /en prefix
      return pathname === '/en' ? '/' : pathname.replace(/^\/en/, '');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={locale === 'ar' ? '/' : '/en'} className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">
                {locale === 'ar' ? siteConfig.name : siteConfig.nameEn}
              </span>
              <span className="text-xs text-muted-foreground">
                {locale === 'ar' ? 'مكافحة حشرات جدة' : 'Pest Control Jeddah'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={cn("hidden lg:flex items-center gap-4", rtl && "flex-row-reverse")}>
            {/* Language Switcher */}
            <Link
              href={switchLocalePath()}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <Globe size={16} />
              <span>{otherLocale.toUpperCase()}</span>
            </Link>

            <Link
              href={locale === 'ar' ? '/contact' : '/en/contact'}
              className="btn-primary"
            >
              {t('getQuote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Link
                  href={switchLocalePath()}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  <Globe size={16} />
                  <span>{otherLocale.toUpperCase()}</span>
                </Link>
                
                <Link
                  href={locale === 'ar' ? '/contact' : '/en/contact'}
                  className="btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('getQuote')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


