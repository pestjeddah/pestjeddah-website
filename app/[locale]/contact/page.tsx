import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

import { ContactForm } from '@/components/forms/ContactForm';
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
      ? 'اتصل بنا — شركة الأسطورة لمكافحة الحشرات بجدة | استشارة مجانية'
      : 'Contact Us — Al-Ustora Pest Control Jeddah | Free Consultation',
    description: isArabic
      ? 'تواصل مع شركة الأسطورة لمكافحة الحشرات بجدة. استشارة مجانية، عرض سعر فوري، خدمة 24/7. اتصل الآن أو أرسل رسالة واتساب.'
      : 'Contact Al-Ustora Pest Control Company in Jeddah. Free consultation, instant quote, 24/7 service. Call now or send WhatsApp message.',
  };
}

export default function ContactPage({ params: { locale } }: Props) {
  const t = useTranslations();
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد الاستفسار عن خدمات مكافحة الحشرات'
    : 'Hello, I want to inquire about pest control services';

  const contactMethods = [
    {
      icon: Phone,
      title: isArabic ? 'اتصل بنا' : 'Call Us',
      description: isArabic ? 'خدمة فورية 24/7' : 'Immediate service 24/7',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: isArabic ? 'واتساب' : 'WhatsApp',
      description: isArabic ? 'رد سريع ومضمون' : 'Quick guaranteed response',
      value: siteConfig.whatsapp,
      href: createWhatsAppLink(siteConfig.whatsapp, whatsappMessage),
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: isArabic ? 'البريد الإلكتروني' : 'Email',
      description: isArabic ? 'للاستفسارات التفصيلية' : 'For detailed inquiries',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: 'bg-purple-500'
    }
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'اتصل بنا' : 'Contact Us'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('contact.subtitle')}
          </p>
          
          {/* Emergency Notice */}
          <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-6 py-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-700 font-medium">
              {isArabic 
                ? 'للطوارئ: متاح 24/7 - استجابة فورية خلال 30 دقيقة'
                : 'Emergency: Available 24/7 - Immediate response within 30 minutes'
              }
            </span>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.icon === MessageCircle ? '_blank' : undefined}
                rel={method.icon === MessageCircle ? 'noopener noreferrer' : undefined}
                className="group block p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-primary font-semibold group-hover:underline">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h2>
              <ContactForm />
            </div>

            {/* Business Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="text-primary" size={24} />
                  {isArabic ? 'موقعنا' : 'Our Location'}
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    {isArabic ? siteConfig.address.street : siteConfig.address.streetEn}
                  </p>
                  <p className="text-gray-700">
                    {isArabic ? siteConfig.address.city : siteConfig.address.cityEn}, {' '}
                    {isArabic ? siteConfig.address.province : siteConfig.address.provinceEn}
                  </p>
                  <p className="text-gray-700">
                    {isArabic ? siteConfig.address.country : siteConfig.address.countryEn}
                  </p>
                  
                  {/* Mini Map Placeholder */}
                  <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">
                      {isArabic ? 'خريطة تفاعلية' : 'Interactive Map'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Clock className="text-primary" size={24} />
                  {isArabic ? 'ساعات العمل' : 'Business Hours'}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">
                      {isArabic ? 'الاثنين - الخميس' : 'Monday - Thursday'}
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {isArabic ? '8:00 ص - 10:00 م' : '8:00 AM - 10:00 PM'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">
                      {isArabic ? 'الجمعة - السبت' : 'Friday - Saturday'}
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {isArabic ? '9:00 ص - 11:00 م' : '9:00 AM - 11:00 PM'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">
                      {isArabic ? 'الأحد' : 'Sunday'}
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {isArabic ? '9:00 ص - 9:00 م' : '9:00 AM - 9:00 PM'}
                    </span>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <p className="text-green-700 font-semibold text-center">
                      {isArabic ? 'خدمة طوارئ متاحة 24/7' : 'Emergency service available 24/7'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {isArabic ? 'مناطق الخدمة في جدة' : 'Service Areas in Jeddah'}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    'الحمراء', 'الشاطئ', 'الروضة', 'السلامة',
                    'النعيم', 'المرجان', 'أبحر الشمالية', 'أبحر الجنوبية',
                    'الحمدانية', 'العزيزية', 'البوادي', 'النسيم'
                  ].map((area, index) => (
                    <div key={index} className="text-gray-700 py-1">
                      • {area}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  {isArabic 
                    ? 'وجميع أحياء جدة الأخرى'
                    : 'And all other neighborhoods in Jeddah'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



