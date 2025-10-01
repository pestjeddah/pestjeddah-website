'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

import { isRTL, cn } from '@/lib/utils';

export function ServicesSection() {
  const t = useTranslations();
  const locale = useLocale();
  const rtl = isRTL(locale);

  const services = [
    {
      key: 'cockroaches',
      href: locale === 'ar' ? '/services/cockroach-control-jeddah' : '/en/services/cockroach-control-jeddah',
      image: '/images/Cockroach control Jeddah.jpg',
      icon: '🪳'
    },
    {
      key: 'bedbugs',
      href: locale === 'ar' ? '/services/bed-bugs-treatment-jeddah' : '/en/services/bed-bugs-treatment-jeddah',
      image: '/images/Bed bug treatment Jeddah.jpg',
      icon: '🛏️'
    },
    {
      key: 'termites',
      href: locale === 'ar' ? '/services/termites-control-jeddah' : '/en/services/termites-control-jeddah',
      image: '/images/Termite treatment Jeddah.jpg',
      icon: '🐜'
    },
    {
      key: 'ants',
      href: locale === 'ar' ? '/services/ants-control-jeddah' : '/en/services/ants-control-jeddah',
      image: '/images/Ant control Jeddah.jpg',
      icon: '🐜'
    },
    {
      key: 'rodents',
      href: locale === 'ar' ? '/services/rodents-control-jeddah' : '/en/services/rodents-control-jeddah',
      image: '/images/Rodent control Jeddah.jpg',
      icon: '🐭'
    },
    {
      key: 'mosquitoes',
      href: locale === 'ar' ? '/services/mosquitoes-flies-control-jeddah' : '/en/services/mosquitoes-flies-control-jeddah',
      image: '/images/Mosquito control service.jpg',
      icon: '🦟'
    },
    {
      key: 'fumigation',
      href: locale === 'ar' ? '/services/fumigation-disinfection' : '/en/services/fumigation-disinfection',
      image: '/images/Pest spray service.jpg',
      icon: '💨'
    },
    {
      key: 'contracts',
      href: locale === 'ar' ? '/services/annual-contracts' : '/en/services/annual-contracts',
      image: '/images/Pest control contracts.jpg',
      icon: '📋'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group block"
            >
              <div className="bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 overflow-hidden card-hover">
                {/* Service Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(`services.${service.key}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t(`services.${service.key}.description`)}
                  </p>

                  {/* Read More Link */}
                  <div className={cn(
                    "flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all",
                    rtl && "flex-row-reverse"
                  )}>
                    <span>{t('common.readMore')}</span>
                    {rtl ? (
                      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {locale === 'ar' 
                ? 'لم تجد ما تبحث عنه؟'
                : "Didn't find what you're looking for?"
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {locale === 'ar'
                ? 'اتصل بنا الآن للحصول على استشارة مجانية وحل مخصص لمشكلتك'
                : 'Contact us now for free consultation and customized solution for your problem'
              }
            </p>
            <Link
              href={locale === 'ar' ? '/contact' : '/en/contact'}
              className="btn-primary inline-flex items-center gap-2"
            >
              {t('common.contactUs')}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



