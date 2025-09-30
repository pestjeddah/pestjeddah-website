'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Search, ClipboardList, Zap, ShieldCheck } from 'lucide-react';

import { isRTL, cn } from '@/lib/utils';

export function ProcessSection() {
  const t = useTranslations('process');
  const locale = useLocale();
  const rtl = isRTL(locale);

  const icons = [Search, ClipboardList, Zap, ShieldCheck];
  const colors = ['bg-blue-500', 'bg-purple-500', 'bg-orange-500', 'bg-green-500'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.raw('steps').map((step: any, index: number) => {
            const Icon = icons[index];
            const colorClass = colors[index];
            
            return (
              <div key={index} className="relative">
                {/* Connection Line (hidden on mobile) */}
                {index < 3 && (
                  <div className={cn(
                    "hidden lg:block absolute top-16 w-full h-0.5 bg-gray-300",
                    rtl ? "right-full" : "left-full",
                    "z-0"
                  )} 
                  style={{ 
                    width: 'calc(100% - 2rem)',
                    [rtl ? 'right' : 'left']: '2rem'
                  }} />
                )}

                <div className="relative z-10 text-center">
                  {/* Step Icon */}
                  <div className={cn(
                    "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white shadow-lg",
                    colorClass
                  )}>
                    <Icon size={32} />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {rtl ? (4 - index) : (index + 1)}
                  </div>

                  {/* Step Content */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3">
            <ShieldCheck className="text-primary" size={24} />
            <span className="text-primary font-semibold">
              {locale === 'ar'
                ? 'منهجية مجربة ومضمونة'
                : 'Proven and guaranteed methodology'
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}



