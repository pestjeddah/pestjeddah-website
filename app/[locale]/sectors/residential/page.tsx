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
  Users,
  Heart,
  BedDouble,
  Baby
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
      ? 'مكافحة الحشرات للمنازل والشقق بجدة | حلول آمنة للعائلات — شركة الأسطورة'
      : 'Pest Control for Homes & Apartments in Jeddah | Safe Family Solutions — Al-Ustora',
    description: isArabic
      ? 'خدمات مكافحة حشرات آمنة للمنازل والشقق والفلل بجدة. مواد غير سامة، آمنة للأطفال والحيوانات الأليفة، مع ضمان 6 أشهر.'
      : 'Safe pest control services for homes, apartments and villas in Jeddah. Non-toxic materials, safe for children and pets, with 6 months guarantee.',
  };
}

export default function ResidentialSectorPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const residentialServices = isArabic ? [
    {
      icon: Home,
      title: 'الشقق السكنية',
      description: 'حلول متخصصة للشقق مع مراعاة المساحات الصغيرة',
      price: 'من 299 ريال'
    },
    {
      icon: BedDouble,
      title: 'الفلل',
      description: 'خدمة شاملة للفلل متعددة الطوابق مع الحدائق',
      price: 'من 599 ريال'
    },
    {
      icon: Users,
      title: 'المجمعات السكنية',
      description: 'برامج خاصة للمجمعات بأسعار تفضيلية',
      price: 'عرض خاص'
    },
    {
      icon: Baby,
      title: 'غرف الأطفال',
      description: 'عناية خاصة بغرف الأطفال بمواد آمنة 100%',
      price: 'من 199 ريال'
    }
  ] : [
    {
      icon: Home,
      title: 'Apartments',
      description: 'Specialized solutions for apartments considering small spaces',
      price: 'From 299 SAR'
    },
    {
      icon: BedDouble,
      title: 'Villas',
      description: 'Comprehensive service for multi-floor villas with gardens',
      price: 'From 599 SAR'
    },
    {
      icon: Users,
      title: 'Residential Complexes',
      description: 'Special programs for complexes at preferential prices',
      price: 'Special Offer'
    },
    {
      icon: Baby,
      title: 'Children\'s Rooms',
      description: 'Special care for children\'s rooms with 100% safe materials',
      price: 'From 199 SAR'
    }
  ];

  const safetyFeatures = isArabic ? [
    'مواد معتمدة من وزارة الصحة',
    'آمنة 100% للأطفال والحيوانات الأليفة',
    'بدون روائح كريهة',
    'لا تترك بقع أو آثار',
    'فعالة ضد جميع أنواع الحشرات',
    'ضمان 6 أشهر شامل'
  ] : [
    'Ministry of Health approved materials',
    '100% safe for children and pets',
    'No bad odors',
    'Leaves no stains or traces',
    'Effective against all types of insects',
    'Comprehensive 6 months guarantee'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات آمنة لمنزلي'
    : 'Hello, I want safe pest control service for my home';

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
            <Link href={locale === 'ar' ? '/sectors' : '/en/sectors'} className="hover:text-primary">
              {isArabic ? 'القطاعات' : 'Sectors'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'القطاع السكني' : 'Residential Sector'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة حشرات آمنة للمنازل' : 'Safe Home Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمات مكافحة حشرات متخصصة للمنازل والشقق والفلل. مواد آمنة 100% للعائلات مع ضمان فعالية طويلة المدى.'
                  : 'Specialized pest control services for homes, apartments and villas. 100% family-safe materials with long-term effectiveness guarantee.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'احجز الآن' : 'Book Now'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'اتصل بنا' : 'Call Us'}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'آمان العائلة' : 'Family Safe'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Heart size={20} />
                  <span className="text-sm">{isArabic ? 'مواد طبيعية' : 'Natural Materials'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان 6 أشهر' : '6 Months Guarantee'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Residential pest control.jpg"
                alt={isArabic ? 'مكافحة الحشرات للمنازل' : 'Residential pest control'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'آمن للعائلات' : 'Family Safe'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'خدماتنا السكنية' : 'Our Residential Services'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border hover:shadow-lg transition-all">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="text-primary font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'ضمانات السلامة' : 'Safety Guarantees'}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمِ عائلتك بأمان تام' : 'Protect Your Family with Complete Safety'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمة مكافحة حشرات آمنة ومضمونة لمنزلك'
              : 'Safe and guaranteed pest control service for your home'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'واتساب فوري' : 'Instant WhatsApp'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات السكنية' : 'Residential Pest Control',
          description: isArabic 
            ? 'خدمات مكافحة حشرات آمنة للمنازل والشقق والفلل'
            : 'Safe pest control services for homes, apartments and villas',
          serviceType: isArabic ? 'مكافحة الحشرات السكنية' : 'Residential Pest Control'
        }}
      />
    </>
  );
}
