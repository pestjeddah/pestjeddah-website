'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { isRTL, cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations('faq');
  const locale = useLocale();
  const rtl = isRTL(locale);

  const questions = t.raw('questions');

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {questions.map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className={cn(
                    "w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors",
                    "flex items-center justify-between gap-4",
                    rtl && "text-right"
                  )}
                >
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="text-primary" size={24} />
                    ) : (
                      <ChevronDown className="text-primary" size={24} />
                    )}
                  </div>
                </button>
                
                <div
                  className={cn(
                    "transition-all duration-300 overflow-hidden",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {locale === 'ar'
                  ? 'لديك سؤال آخر؟'
                  : 'Have another question?'
                }
              </h3>
              <p className="text-gray-600 mb-6">
                {locale === 'ar'
                  ? 'فريقنا المتخصص جاهز للإجابة على جميع استفساراتكم'
                  : 'Our specialized team is ready to answer all your inquiries'
                }
              </p>
              <div className={cn("flex flex-col sm:flex-row gap-4 justify-center", rtl && "sm:flex-row-reverse")}>
                <a
                  href={`tel:${'+966-XX-XXX-XXXX'}`}
                  className="btn-primary"
                >
                  {locale === 'ar' ? 'اتصل الآن' : 'Call Now'}
                </a>
                <a
                  href="/contact"
                  className="btn-secondary"
                >
                  {locale === 'ar' ? 'أرسل رسالة' : 'Send Message'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



