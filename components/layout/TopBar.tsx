'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function TopBar() {
  const t = useTranslations('common');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const whatsappMessage = locale === 'ar' 
    ? 'مرحبا، أريد الاستفسار عن خدمات مكافحة الحشرات'
    : 'Hello, I want to inquire about pest control services';

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
          <Link
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone size={16} />
            <span>{siteConfig.phone}</span>
          </Link>
          <span className="text-primary-foreground/60">|</span>
          <span className="text-sm">{t('available247')}</span>
        </div>
        
        <Link
          href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg",
            isRTL && "flex-row-reverse"
          )}
        >
          <MessageCircle size={18} className="flex-shrink-0" />
          <span className="font-bold text-white">{t('whatsapp')}</span>
        </Link>
      </div>
    </div>
  );
}



