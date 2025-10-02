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
  Waves,
  TreePine,
  Shield
} from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'مكافحة الحشرات بأبحر الشمالية جدة | خدمة ساحلية متطورة — شركة الأسطورة'
      : 'Pest Control in Obhur North Jeddah | Advanced Coastal Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات متخصصة في أبحر الشمالية بجدة. خبرة ساحلية، حلول بيئية، مقاومة للرطوبة، خدمة المنتجعات والشاليهات.'
      : 'Specialized pest control company in Obhur North, Jeddah. Coastal expertise, environmental solutions, humidity resistance, resort and chalet service.',
    keywords: isArabic 
      ? ['مكافحة حشرات أبحر الشمالية', 'رش مبيدات أبحر الشمالية', 'مكافحة حشرات المنتجعات', 'شركة مكافحة حشرات أبحر']
      : ['pest control obhur north', 'coastal pest control jeddah', 'resort pest control', 'chalet pest control obhur'],
  };
}

export default function ObhurNorthPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const coastalAdvantages = isArabic ? [
    {
      title: 'خبرة ساحلية',
      description: 'متخصصون في البيئات الساحلية والمنتجعات',
      icon: Waves
    },
    {
      title: 'حلول بيئية',
      description: 'مواد صديقة للبيئة البحرية والطبيعة',
      icon: TreePine
    },
    {
      title: 'حماية شاملة',
      description: 'حماية الشاليهات والمنتجعات من جميع الآفات',
      icon: Shield
    }
  ] : [
    {
      title: 'Coastal Expertise',
      description: 'Specialists in coastal environments and resorts',
      icon: Waves
    },
    {
      title: 'Environmental Solutions',
      description: 'Eco-friendly materials for marine and natural environment',
      icon: TreePine
    },
    {
      title: 'Complete Protection',
      description: 'Protect chalets and resorts from all pests',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات الساحلية في أبحر الشمالية بجدة'
    : 'Hello, I want coastal pest control service in Obhur North, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'أبحر الشمالية' : 'Obhur North'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-cyan-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'أبحر الشمالية، جدة' : 'Obhur North, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات الساحلية المتطورة' : 'Advanced Coastal Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة لمكافحة حشرات البيئات الساحلية في أبحر الشمالية. حلول بيئية آمنة للمنتجعات والشاليهات مع حماية طويلة المدى.'
                  : 'Specialized coastal environment pest control service in Obhur North. Safe environmental solutions for resorts and chalets with long-term protection.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-cyan-600">
                  <Waves size={20} />
                  <span className="text-sm">{isArabic ? 'خبرة ساحلية' : 'Coastal Expertise'}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-600">
                  <TreePine size={20} />
                  <span className="text-sm">{isArabic ? 'صديق للبيئة' : 'Eco-Friendly'}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'حماية شاملة' : 'Complete Protection'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب ساحلي' : 'Coastal WhatsApp'}
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
                src="/images/Eco-friendly-pest-control.jpg"
                alt={isArabic ? 'مكافحة الحشرات الساحلية في أبحر الشمالية جدة' : 'Coastal pest control in Obhur North Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Coastal Badge */}
              <div className="absolute top-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Waves size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة ساحلية' : 'Coastal Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات الخدمة الساحلية' : 'Coastal Service Advantages'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'خدمة متخصصة تناسب البيئة الساحلية الفريدة لأبحر الشمالية'
                : 'Specialized service suitable for Obhur North\'s unique coastal environment'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coastalAdvantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <advantage.icon className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'حماية ساحلية متطورة' : 'Advanced Coastal Protection'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احمي منتجعك أو شاليهك بحلول بيئية آمنة ومتطورة'
              : 'Protect your resort or chalet with safe and advanced environmental solutions'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'واتساب مباشر' : 'Direct WhatsApp'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'اتصال ساحلي' : 'Coastal Call'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات في أبحر الشمالية' : 'Pest Control in Obhur North',
          description: isArabic 
            ? 'خدمة مكافحة حشرات متخصصة للبيئات الساحلية في أبحر الشمالية بجدة'
            : 'Specialized coastal environment pest control service in Obhur North, Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}
