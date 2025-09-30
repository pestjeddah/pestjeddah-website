'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink, cn, isRTL } from '@/lib/utils';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const rtl = isRTL(locale);

  const quickLinks = [
    { href: locale === 'ar' ? '/' : '/en', label: t('common.home') },
    { href: locale === 'ar' ? '/services' : '/en/services', label: t('common.services') },
    { href: locale === 'ar' ? '/sectors' : '/en/sectors', label: t('common.sectors') },
    { href: locale === 'ar' ? '/contact' : '/en/contact', label: t('common.contact') },
  ];

  const serviceAreas = [
    'الحمراء', 'الشاطئ', 'الروضة', 'السلامة', 
    'النعيم', 'المرجان', 'أبحر الشمالية', 'أبحر الجنوبية'
  ];

  const whatsappMessage = locale === 'ar' 
    ? 'مرحبا، أريد الاستفسار عن خدمات مكافحة الحشرات'
    : 'Hello, I want to inquire about pest control services';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
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
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Social Links */}
            <div className={cn("flex gap-4", rtl && "flex-row-reverse")}>
              <Link
                href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 hover:bg-green-700 rounded-full transition-colors"
              >
                <MessageCircle size={20} />
              </Link>
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-sky-500 hover:bg-sky-600 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 hover:bg-pink-700 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.serviceAreas')}</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 6).map((area) => (
                <li key={area}>
                  <Link
                    href={`/jeddah/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('footer.contactInfo')}</h3>
            <div className="space-y-3">
              <div className={cn("flex items-start gap-3", rtl && "flex-row-reverse")}>
                <Phone size={18} className="text-primary mt-1" />
                <div>
                  <Link
                    href={`tel:${siteConfig.phone}`}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {siteConfig.phone}
                  </Link>
                </div>
              </div>

              <div className={cn("flex items-start gap-3", rtl && "flex-row-reverse")}>
                <Mail size={18} className="text-primary mt-1" />
                <div>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {siteConfig.email}
                  </Link>
                </div>
              </div>

              <div className={cn("flex items-start gap-3", rtl && "flex-row-reverse")}>
                <MapPin size={18} className="text-primary mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {locale === 'ar' ? siteConfig.address.street : siteConfig.address.streetEn}
                  </p>
                </div>
              </div>

              <div className={cn("flex items-start gap-3", rtl && "flex-row-reverse")}>
                <Clock size={18} className="text-primary mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {locale === 'ar' ? siteConfig.hours.ar : siteConfig.hours.en}
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
              <p className="text-red-300 text-sm font-medium mb-2">
                {t('common.emergency')}
              </p>
              <Link
                href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-red-600 hover:bg-red-700 text-sm w-full text-center block"
              >
                {t('common.whatsapp')} {t('common.emergency')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className={cn("flex items-center gap-4 text-sm text-gray-400", rtl && "flex-row-reverse")}>
              <span>{t('footer.businessHours')}: {locale === 'ar' ? siteConfig.hours.ar : siteConfig.hours.en}</span>
              <span>|</span>
              <span>{t('common.licensed')}: {siteConfig.license.number}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


