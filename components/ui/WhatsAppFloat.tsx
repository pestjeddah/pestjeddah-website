'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { MessageCircle, X } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink, cn, isRTL } from '@/lib/utils';

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations('common');
  const locale = useLocale();
  const rtl = isRTL(locale);

  useEffect(() => {
    // Show the WhatsApp button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const whatsappMessage = locale === 'ar' 
    ? 'مرحبا، أريد الاستفسار عن خدمات مكافحة الحشرات'
    : 'Hello, I want to inquire about pest control services';

  const whatsappUrl = createWhatsAppLink(siteConfig.whatsapp, whatsappMessage);

  return (
    <div className={cn("fixed bottom-6 z-50", rtl ? "left-6" : "right-6")}>
      {/* Expanded Card */}
      {isExpanded && (
        <div className={cn(
          "mb-4 bg-white rounded-2xl shadow-lg border p-4 w-80 animate-in slide-in-from-bottom-2 duration-300",
          rtl && "text-right"
        )}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {locale === 'ar' ? siteConfig.name : siteConfig.nameEn}
                </h4>
                <p className="text-sm text-green-600">{t('available247')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">
            {locale === 'ar' 
              ? 'مرحبا! كيف يمكننا مساعدتك اليوم؟ نحن متاحون على مدار الساعة لحل جميع مشاكل الحشرات.'
              : 'Hello! How can we help you today? We are available 24/7 to solve all pest problems.'
            }
          </p>
          
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            onClick={() => setIsExpanded(false)}
          >
            <MessageCircle size={20} />
            {t('whatsapp')} {t('callNow')}
          </Link>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={28} />
        </button>
        
        {/* Notification Dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>
    </div>
  );
}



