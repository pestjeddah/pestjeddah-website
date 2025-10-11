import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock,
  Star,
  CheckCircle,
  Anchor,
  Sun,
  Shield
} from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink } from '@/lib/utils';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'مكافحة الحشرات بأبحر الجنوبية جدة | خدمة المنتجعات الساحلية — شركة الأسطورة'
      : 'Pest Control in Obhur South Jeddah | Coastal Resort Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات متخصصة في أبحر الجنوبية بجدة. خدمة المنتجعات الساحلية، الشاليهات، القرى السياحية، حلول آمنة للبيئة البحرية.'
      : 'Specialized pest control company in Obhur South, Jeddah. Coastal resort service, chalets, tourist villages, safe solutions for marine environment.',
    keywords: isArabic 
      ? ['مكافحة حشرات أبحر الجنوبية', 'مكافحة حشرات المنتجعات الساحلية', 'رش مبيدات أبحر الجنوبية', 'شركة مكافحة حشرات أبحر']
      : ['pest control obhur south', 'coastal resort pest control', 'marine pest control jeddah', 'tourist village pest control'],
  };
}

export default function ObhurSouthPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const resortFeatures = isArabic ? [
    {
      title: 'خدمة المنتجعات',
      description: 'متخصصون في خدمة المنتجعات والقرى السياحية',
      icon: Anchor
    },
    {
      title: 'حماية صيفية',
      description: 'حلول خاصة للموسم السياحي وفترات الذروة',
      icon: Sun
    },
    {
      title: 'أمان بحري',
      description: 'مواد آمنة للبيئة البحرية والحياة المائية',
      icon: Shield
    }
  ] : [
    {
      title: 'Resort Service',
      description: 'Specialists in resort and tourist village service',
      icon: Anchor
    },
    {
      title: 'Summer Protection',
      description: 'Special solutions for tourist season and peak periods',
      icon: Sun
    },
    {
      title: 'Marine Safety',
      description: 'Safe materials for marine environment and aquatic life',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات للمنتجعات في أبحر الجنوبية بجدة'
    : 'Hello, I want resort pest control service in Obhur South, Jeddah';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href={locale === 'ar' ? '/' : '/en'} className="hover:text-primary">
              {isArabic ? 'الرئيسية' : 'Home'}
            </Link>
            <span className="mx-2">/</span>
            <Link href={locale === 'ar' ? '/jeddah' : '/en/jeddah'} className="hover:text-primary">
              {isArabic ? 'مناطق جدة' : 'Jeddah Areas'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'أبحر الجنوبية' : 'Obhur South'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-teal-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'أبحر الجنوبية، جدة' : 'Obhur South, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدمة المنتجعات الساحلية' : 'Coastal Resort Service'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة لمكافحة الحشرات في المنتجعات والشاليهات والقرى السياحية بأبحر الجنوبية. حلول آمنة للبيئة البحرية مع حماية موسمية متطورة.'
                  : 'Specialized pest control service for resorts, chalets and tourist villages in Obhur South. Safe marine environment solutions with advanced seasonal protection.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-teal-600">
                  <Anchor size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة المنتجعات' : 'Resort Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-teal-600">
                  <Sun size={20} />
                  <span className="text-sm">{isArabic ? 'حماية صيفية' : 'Summer Protection'}</span>
                </div>
                <div className="flex items-center gap-2 text-teal-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'استجابة سريعة' : 'Quick Response'}</span>
                </div>
                <div className="flex items-center gap-2 text-teal-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'أمان بحري' : 'Marine Safety'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-teal-600 hover:bg-teal-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب المنتجعات' : 'Resort WhatsApp'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Exterminator-Jeddah.jpg"
                alt={isArabic ? 'خدمة المنتجعات الساحلية في أبحر الجنوبية جدة' : 'Coastal resort service in Obhur South Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Resort Badge */}
              <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Anchor size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة المنتجعات' : 'Resort Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات خدمة المنتجعات' : 'Resort Service Features'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'خدمة مخصصة للمنتجعات السياحية والشاليهات في أبحر الجنوبية'
                : 'Dedicated service for tourist resorts and chalets in Obhur South'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resortFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
                <feature.icon className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمي منتجعك طوال الموسم' : 'Protect Your Resort All Season'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمة موسمية متخصصة للمنتجعات والقرى السياحية بأبحر الجنوبية'
              : 'Specialized seasonal service for resorts and tourist villages in Obhur South'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'حجز فوري' : 'Instant Booking'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'خط المنتجعات' : 'Resort Line'}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{isArabic ? 'خدمات المنتجعات' : 'Resort Services'}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href={`/${locale}/services/annual-contracts`} className="bg-teal-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'عقود منتجعات' : 'Resort Contracts'}</h4>
                </Link>
                <Link href={`/${locale}/services/mosquitoes-flies-control-jeddah`} className="bg-teal-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'مكافحة البعوض' : 'Mosquito Control'}</h4>
                </Link>
                <Link href={`/${locale}/jeddah/obhur-north`} className="bg-teal-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'أبحر الشمالية' : 'Obhur North'}</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
