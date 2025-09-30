import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Clock,
  ArrowRight,
  ArrowLeft,
  Home,
  Calendar
} from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink, isRTL } from '@/lib/utils';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'شكراً لتواصلك معنا — شركة الأسطورة | سنتصل بك قريباً'
      : 'Thank You for Contacting Us — Al-Ustora | We Will Call You Soon',
    description: isArabic
      ? 'تم استلام رسالتك بنجاح. سيتواصل معك فريق شركة الأسطورة لمكافحة الحشرات خلال 30 دقيقة لتقديم أفضل خدمة.'
      : 'Your message has been received successfully. Al-Ustora pest control team will contact you within 30 minutes to provide the best service.',
    robots: 'noindex, nofollow'
  };
}

export default function ThankYouPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const nextSteps = isArabic ? [
    {
      icon: Phone,
      title: 'سنتصل بك خلال 30 دقيقة',
      description: 'سيقوم أحد خبرائنا بالاتصال بك لمناقشة احتياجاتك'
    },
    {
      icon: Calendar,
      title: 'تحديد موعد الزيارة',
      description: 'سنحدد موعداً مناسباً لزيارة وفحص الموقع'
    },
    {
      icon: CheckCircle,
      title: 'تقديم الحل المناسب',
      description: 'سنقدم لك أفضل حل مع ضمان شامل وأسعار تنافسية'
    }
  ] : [
    {
      icon: Phone,
      title: 'We will call you within 30 minutes',
      description: 'One of our experts will call you to discuss your needs'
    },
    {
      icon: Calendar,
      title: 'Schedule the visit',
      description: 'We will schedule a convenient time to visit and inspect the site'
    },
    {
      icon: CheckCircle,
      title: 'Provide the right solution',
      description: 'We will provide you with the best solution with comprehensive guarantee and competitive prices'
    }
  ];

  const emergencyMessage = isArabic 
    ? 'مرحبا، لدي حالة طوارئ في مكافحة الحشرات وأحتاج مساعدة فورية'
    : 'Hello, I have a pest control emergency and need immediate help';

  return (
    <>
      {/* Success Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isArabic ? '🎉 تم إرسال رسالتك بنجاح!' : '🎉 Your Message Was Sent Successfully!'}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {isArabic 
                ? 'شكراً لتواصلك مع شركة الأسطورة. تم استلام طلبك وسنتواصل معك في أقرب وقت ممكن.'
                : 'Thank you for contacting Al-Ustora Company. We have received your request and will contact you as soon as possible.'
              }
            </p>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={createWhatsAppLink(siteConfig.whatsapp, emergencyMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {isArabic ? 'واتساب طوارئ' : 'Emergency WhatsApp'}
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                {isArabic ? 'اتصال مباشر' : 'Direct Call'}
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {isArabic ? 'وقت الاستجابة' : 'Response Time'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic 
                      ? 'سنتصل بك خلال 30 دقيقة أو أقل'
                      : 'We will call you within 30 minutes or less'
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              {isArabic ? 'ما الخطوات التالية؟' : 'What Are the Next Steps?'}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {nextSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              {isArabic ? '⚠️ في حالة الطوارئ' : '⚠️ In Case of Emergency'}
            </h2>
            <p className="text-red-700 mb-6">
              {isArabic 
                ? 'إذا كنت تواجه مشكلة عاجلة مع الحشرات (مثل سرب النحل أو انتشار كبير للحشرات)، لا تنتظر - اتصل بنا فوراً!'
                : 'If you are facing an urgent pest problem (such as bee swarm or large pest infestation), don\'t wait - call us immediately!'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                {isArabic ? 'خط الطوارئ' : 'Emergency Line'}
              </a>
              <Link
                href={createWhatsAppLink(siteConfig.whatsapp, emergencyMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {isArabic ? 'واتساب سريع' : 'Quick WhatsApp'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              {isArabic ? 'تصفح المزيد من موقعنا' : 'Browse More of Our Website'}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={locale === 'ar' ? '/' : '/en'}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Home size={20} />
                {isArabic ? 'العودة للرئيسية' : 'Back to Home'}
              </Link>
              <Link
                href={locale === 'ar' ? '/services' : '/en/services'}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isArabic ? 'تصفح الخدمات' : 'Browse Services'}
                {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

