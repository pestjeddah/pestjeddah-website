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
  Gem,
  Shield,
  Crown
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
      ? 'مكافحة الحشرات بحي المرجان جدة | خدمة راقية ومميزة — شركة الأسطورة'
      : 'Pest Control in Al-Marjan District Jeddah | Premium & Elite Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات راقية في حي المرجان بجدة. خدمة مميزة، فريق نخبة، تقنيات متطورة، ضمان ذهبي، رضا العملاء المطلق.'
      : 'Premium pest control company in Al-Marjan district, Jeddah. Elite service, expert team, advanced techniques, golden guarantee, absolute customer satisfaction.',
    keywords: isArabic 
      ? ['مكافحة حشرات المرجان', 'خدمة راقية مكافحة حشرات', 'شركة مكافحة حشرات المرجان', 'خدمة مميزة المرجان']
      : ['pest control al-marjan', 'premium pest control jeddah', 'elite exterminator marjan', 'luxury pest control service'],
  };
}

export default function AlMarjanPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const eliteFeatures = isArabic ? [
    {
      title: 'خدمة النخبة',
      description: 'فريق من النخبة مدرب على أعلى المستويات',
      icon: Crown
    },
    {
      title: 'تقنيات متطورة',
      description: 'أحدث التقنيات والمعدات المتطورة',
      icon: Gem
    },
    {
      title: 'ضمان ذهبي',
      description: 'ضمان ذهبي وخدمة متابعة مجانية',
      icon: Shield
    }
  ] : [
    {
      title: 'Elite Service',
      description: 'Expert team trained to highest standards',
      icon: Crown
    },
    {
      title: 'Advanced Technology',
      description: 'Latest techniques and sophisticated equipment',
      icon: Gem
    },
    {
      title: 'Golden Guarantee',
      description: 'Golden guarantee and free follow-up service',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة النخبة لمكافحة الحشرات في حي المرجان بجدة'
    : 'Hello, I want elite pest control service in Al-Marjan district, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'حي المرجان' : 'Al-Marjan District'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-amber-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'حي المرجان، جدة' : 'Al-Marjan District, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدمة النخبة لمكافحة الحشرات' : 'Elite Pest Control Service'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة راقية من النخبة لمكافحة الحشرات في حي المرجان. تقنيات متطورة، فريق خبير، وضمان ذهبي لراحة البال المطلقة.'
                  : 'Premium elite pest control service in Al-Marjan district. Advanced techniques, expert team, and golden guarantee for absolute peace of mind.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-amber-600">
                  <Crown size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة النخبة' : 'Elite Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <Gem size={20} />
                  <span className="text-sm">{isArabic ? 'تقنيات متطورة' : 'Advanced Technology'}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة فورية' : 'Instant Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان ذهبي' : 'Golden Guarantee'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-amber-600 hover:bg-amber-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب النخبة' : 'Elite WhatsApp'}
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
                src="/images/Best pest control company.jpg"
                alt={isArabic ? 'خدمة النخبة مكافحة الحشرات في المرجان جدة' : 'Elite pest control service in Al-Marjan Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Elite Badge */}
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Crown size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة النخبة' : 'Elite Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات خدمة النخبة' : 'Elite Service Features'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'تجربة استثنائية وخدمة من النخبة تليق بمكانة حي المرجان المرموقة'
                : 'Exceptional experience and elite service worthy of Al-Marjan\'s prestigious status'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eliteFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <feature.icon className="w-16 h-16 text-amber-600 mx-auto mb-4" />
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
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'خدمة النخبة في انتظارك' : 'Elite Service Awaits You'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احصل على خدمة النخبة المخصصة لسكان حي المرجان المميزين'
              : 'Get elite service customized for Al-Marjan\'s distinguished residents'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'حجز النخبة' : 'Elite Booking'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'خط النخبة' : 'Elite Line'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات النخبة في المرجان' : 'Elite Pest Control in Al-Marjan',
          description: isArabic 
            ? 'خدمة النخبة لمكافحة الحشرات في حي المرجان بجدة'
            : 'Elite pest control service in Al-Marjan district, Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}
