'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Shield, Clock, Award, CheckCircle } from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink, cn, isRTL } from '@/lib/utils';

export function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const rtl = isRTL(locale);

  const whatsappMessage = locale === 'ar' 
    ? 'مرحبا، أريد الحصول على خدمة فورية لمكافحة الحشرات'
    : 'Hello, I want immediate pest control service';

  const trustBadges = [
    {
      icon: Shield,
      text: t('hero.trustBadges.licensed'),
      color: 'text-blue-600'
    },
    {
      icon: Award,
      text: t('hero.trustBadges.experienced'),
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      text: t('hero.trustBadges.available'),
      color: 'text-green-600'
    },
    {
      icon: CheckCircle,
      text: t('hero.trustBadges.guarantee'),
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-green-50 min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className={cn("space-y-8", rtl && "lg:order-2")}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">
                  {t('hero.title')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={cn("flex flex-col sm:flex-row gap-4", rtl && "sm:flex-row-reverse")}>
              <Link
                href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "btn-primary bg-green-600 hover:bg-green-700 text-lg px-8 py-4 rounded-xl",
                  "flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                )}
              >
                <MessageCircle size={24} />
                {t('hero.cta')}
              </Link>
              
              <Link
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  "btn-secondary text-lg px-8 py-4 rounded-xl",
                  "flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                )}
              >
                <Phone size={24} />
                {t('hero.ctaSecondary')}
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                >
                  <badge.icon className={`w-8 h-8 mb-2 ${badge.color}`} />
                  <span className="text-sm font-medium text-gray-700">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className={cn("flex items-center gap-3", rtl && "flex-row-reverse")}>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-red-700 font-medium">
                  {locale === 'ar' 
                    ? 'خدمة طوارئ متاحة الآن - استجابة فورية خلال 30 دقيقة'
                    : 'Emergency service available now - Immediate response within 30 minutes'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className={cn("relative", rtl && "lg:order-1")}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Professional-pest-control.jpg"
                alt={locale === 'ar' ? 'شركة مكافحة حشرات محترفة بجدة' : 'Professional pest control company in Jeddah'}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t('common.licensed')}</p>
                    <p className="text-sm text-gray-600">{siteConfig.license.number}</p>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-gray-600">{t('common.available247')}</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}



