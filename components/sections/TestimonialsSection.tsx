'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Star, Quote } from 'lucide-react';

import { isRTL, cn } from '@/lib/utils';

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const rtl = isRTL(locale);

  const reviews = t.raw('reviews');

  return (
    <section className="py-16 bg-white">
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review: any, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 card-hover"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="text-primary/30" size={40} />
                <div className={cn("flex gap-1", rtl && "flex-row-reverse")}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </blockquote>

              {/* Reviewer Info */}
              <div className={cn("flex items-center gap-4", rtl && "flex-row-reverse")}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-green-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-gray-600">
                {locale === 'ar' ? 'عميل راضٍ' : 'Satisfied Customers'}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">
                {locale === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">
                {locale === 'ar' ? 'خدمة متاحة' : 'Service Available'}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-600">
                {locale === 'ar' ? 'معدل النجاح' : 'Success Rate'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



