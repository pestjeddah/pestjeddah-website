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
  Building,
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
      ? 'مكافحة الحشرات بحي الشاطئ جدة | خدمة ساحلية متخصصة — شركة الأسطورة'
      : 'Pest Control in Al-Shatee District Jeddah | Specialized Coastal Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات متخصصة في حي الشاطئ بجدة. خبرة في البيئات الساحلية، حلول مقاومة للرطوبة، فريق محترف متاح 24/7.'
      : 'Specialized pest control company in Al-Shatee district, Jeddah. Expertise in coastal environments, humidity-resistant solutions, professional team available 24/7.',
    keywords: isArabic 
      ? ['مكافحة حشرات الشاطئ', 'رش مبيدات الشاطئ جدة', 'مكافحة حشرات ساحلية', 'شركة مكافحة حشرات الشاطئ']
      : ['pest control al-shatee', 'coastal pest control jeddah', 'beach area pest control', 'exterminator al-shatee'],
  };
}

export default function AlShateePage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const coastalChallenges = isArabic ? [
    {
      title: 'الرطوبة العالية',
      description: 'تزيد من تكاثر الحشرات والآفات',
      icon: Waves
    },
    {
      title: 'المباني الساحلية',
      description: 'تتطلب حماية خاصة من التآكل والآفات',
      icon: Building
    },
    {
      title: 'النشاط التجاري',
      description: 'المطاعم والفنادق تحتاج حلول متخصصة',
      icon: Shield
    }
  ] : [
    {
      title: 'High Humidity',
      description: 'Increases insect and pest breeding',
      icon: Waves
    },
    {
      title: 'Coastal Buildings',
      description: 'Require special protection from corrosion and pests',
      icon: Building
    },
    {
      title: 'Commercial Activity',
      description: 'Restaurants and hotels need specialized solutions',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات في حي الشاطئ بجدة'
    : 'Hello, I want pest control service in Al-Shatee district, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'حي الشاطئ' : 'Al-Shatee District'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'حي الشاطئ، جدة' : 'Al-Shatee District, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات الساحلية' : 'Coastal Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة لمكافحة حشرات البيئات الساحلية في حي الشاطئ. حلول مقاومة للرطوبة والملوحة مع ضمان فعال طويل المدى.'
                  : 'Specialized service for coastal environment pest control in Al-Shatee district. Humidity and salinity-resistant solutions with effective long-term guarantee.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-blue-600">
                  <Waves size={20} />
                  <span className="text-sm">{isArabic ? 'مقاوم للرطوبة' : 'Humidity Resistant'}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'حماية ساحلية' : 'Coastal Protection'}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
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
                  className="btn-primary bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
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
                src="/images/Professional-pest-control.jpg"
                alt={isArabic ? 'مكافحة الحشرات في الشاطئ جدة' : 'Pest control in Al-Shatee Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Coastal Badge */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
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

      {/* Coastal Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'تحديات البيئة الساحلية' : 'Coastal Environment Challenges'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'نحن نفهم التحديات الخاصة للمناطق الساحلية ولدينا الحلول المناسبة'
                : 'We understand the special challenges of coastal areas and have appropriate solutions'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coastalChallenges.map((challenge, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <challenge.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'خدمة متخصصة للمناطق الساحلية' : 'Specialized Service for Coastal Areas'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احصل على حلول مكافحة حشرات مصممة خصيصاً للبيئة الساحلية'
              : 'Get pest control solutions specifically designed for coastal environment'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'واتساب مباشر' : 'Direct WhatsApp'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'اتصال فوري' : 'Immediate Call'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات في الشاطئ' : 'Pest Control in Al-Shatee',
          description: isArabic 
            ? 'خدمة مكافحة حشرات متخصصة للبيئات الساحلية في حي الشاطئ بجدة'
            : 'Specialized coastal environment pest control service in Al-Shatee district, Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}
