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
  Home,
  Shield,
  Users
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
      ? 'مكافحة الحشرات بحي السلامة جدة | خدمة موثوقة وآمنة — شركة الأسطورة'
      : 'Pest Control in Al-Salamah District Jeddah | Reliable & Safe Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات محترفة في حي السلامة بجدة. حلول آمنة للعائلات، خدمة سريعة، فريق مدرب، أسعار عادلة مع ضمان شامل.'
      : 'Professional pest control company in Al-Salamah district, Jeddah. Safe solutions for families, fast service, trained team, fair prices with comprehensive guarantee.',
    keywords: isArabic 
      ? ['مكافحة حشرات السلامة', 'رش مبيدات السلامة جدة', 'شركة مكافحة حشرات السلامة', 'مكافحة آمنة للعائلات']
      : ['pest control al-salamah', 'exterminator al-salamah jeddah', 'family safe pest control', 'pest control company salamah'],
  };
}

export default function AlSalamahPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const familyFeatures = isArabic ? [
    {
      title: 'آمان الأطفال',
      description: 'مواد غير سامة وآمنة للأطفال',
      icon: Users
    },
    {
      title: 'حماية المنزل',
      description: 'حلول شاملة لجميع أنحاء المنزل',
      icon: Home
    },
    {
      title: 'ضمان الجودة',
      description: 'نتائج مضمونة وخدمة متابعة',
      icon: Shield
    }
  ] : [
    {
      title: 'Child Safety',
      description: 'Non-toxic and child-safe materials',
      icon: Users
    },
    {
      title: 'Home Protection',
      description: 'Comprehensive solutions for entire home',
      icon: Home
    },
    {
      title: 'Quality Guarantee',
      description: 'Guaranteed results and follow-up service',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات الآمنة في حي السلامة بجدة'
    : 'Hello, I want safe pest control service in Al-Salamah district, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'حي السلامة' : 'Al-Salamah District'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'حي السلامة، جدة' : 'Al-Salamah District, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة حشرات آمنة وموثوقة' : 'Safe & Reliable Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة مكافحة حشرات آمنة تماماً للعائلات في حي السلامة. مواد معتمدة، فريق محترف، وحلول فعالة مع الحفاظ على سلامة أطفالكم.'
                  : 'Completely safe pest control service for families in Al-Salamah district. Certified materials, professional team, and effective solutions while maintaining your children\'s safety.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-green-600">
                  <Users size={20} />
                  <span className="text-sm">{isArabic ? 'آمان الأطفال' : 'Child Safe'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'مواد معتمدة' : 'Certified Materials'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان شامل' : 'Full Guarantee'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب فوري' : 'WhatsApp Now'}
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
                src="/images/Safe pest control.jpg"
                alt={isArabic ? 'مكافحة الحشرات الآمنة في السلامة جدة' : 'Safe pest control in Al-Salamah Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Safety Badge */}
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'آمان تام' : 'Completely Safe'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Safety Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'أمان العائلة أولويتنا' : 'Family Safety is Our Priority'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'نحرص على استخدام أفضل المواد الآمنة والتقنيات المتطورة'
                : 'We ensure using the best safe materials and advanced techniques'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {familyFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <feature.icon className="w-16 h-16 text-green-600 mx-auto mb-4" />
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
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمي عائلتك بأمان تام' : 'Protect Your Family with Complete Safety'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احصل على خدمة مكافحة حشرات آمنة ومضمونة في حي السلامة'
              : 'Get safe and guaranteed pest control service in Al-Salamah district'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'احجز الآن' : 'Book Now'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'اتصال مباشر' : 'Direct Call'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات في السلامة' : 'Pest Control in Al-Salamah',
          description: isArabic 
            ? 'خدمة مكافحة حشرات آمنة للعائلات في حي السلامة بجدة'
            : 'Safe family pest control service in Al-Salamah district, Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}
