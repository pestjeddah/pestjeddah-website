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
  Heart,
  Shield,
  Award
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
      ? 'مكافحة الحشرات بحي النعيم جدة | خدمة مميزة وراقية — شركة الأسطورة'
      : 'Pest Control in Al-Naeem District Jeddah | Premium & Distinguished Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات فاخرة في حي النعيم بجدة. خدمة VIP، فريق متخصص، حلول متطورة، ضمان ممتد، رضا العملاء 100%.'
      : 'Luxury pest control company in Al-Naeem district, Jeddah. VIP service, specialized team, advanced solutions, extended guarantee, 100% customer satisfaction.',
    keywords: isArabic 
      ? ['مكافحة حشرات النعيم', 'خدمة VIP مكافحة حشرات', 'شركة مكافحة حشرات النعيم', 'خدمة راقية مكافحة حشرات']
      : ['pest control al-naeem', 'VIP pest control service', 'luxury pest control jeddah', 'premium exterminator naeem'],
  };
}

export default function AlNaeemPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const premiumFeatures = isArabic ? [
    {
      title: 'خدمة VIP',
      description: 'خدمة راقية مخصصة للعملاء المميزين',
      icon: Award
    },
    {
      title: 'رضا مضمون',
      description: 'رضا العملاء 100% أو إعادة الخدمة مجاناً',
      icon: Heart
    },
    {
      title: 'حماية شاملة',
      description: 'ضمان ممتد وصيانة دورية مجانية',
      icon: Shield
    }
  ] : [
    {
      title: 'VIP Service',
      description: 'Premium service for distinguished customers',
      icon: Award
    },
    {
      title: 'Guaranteed Satisfaction',
      description: '100% customer satisfaction or free re-service',
      icon: Heart
    },
    {
      title: 'Complete Protection',
      description: 'Extended guarantee and free regular maintenance',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة VIP لمكافحة الحشرات في حي النعيم بجدة'
    : 'Hello, I want VIP pest control service in Al-Naeem district, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'حي النعيم' : 'Al-Naeem District'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-purple-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'حي النعيم، جدة' : 'Al-Naeem District, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدمة VIP لمكافحة الحشرات' : 'VIP Pest Control Service'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة راقية ومتميزة لمكافحة الحشرات في حي النعيم. تجربة فاخرة، حلول متطورة، وضمان رضا العملاء 100%.'
                  : 'Premium and distinguished pest control service in Al-Naeem district. Luxury experience, advanced solutions, and 100% customer satisfaction guarantee.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-purple-600">
                  <Award size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة VIP' : 'VIP Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Heart size={20} />
                  <span className="text-sm">{isArabic ? 'رضا مضمون' : 'Guaranteed Satisfaction'}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة فورية' : 'Immediate Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان ممتد' : 'Extended Guarantee'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب VIP' : 'VIP WhatsApp'}
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
                src="/images/Professional-exterminators.jpg"
                alt={isArabic ? 'خدمة VIP مكافحة الحشرات في النعيم جدة' : 'VIP pest control service in Al-Naeem Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* VIP Badge */}
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة VIP' : 'VIP Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات الخدمة الراقية' : 'Premium Service Features'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'تجربة مميزة وخدمة استثنائية تليق بمستوى حي النعيم الراقي'
                : 'Distinguished experience and exceptional service worthy of Al-Naeem\'s upscale level'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <feature.icon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
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
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'تجربة فاخرة لمكافحة الحشرات' : 'Luxury Pest Control Experience'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احصل على خدمة VIP مخصصة لعملاء حي النعيم المميزين'
              : 'Get VIP service customized for Al-Naeem\'s distinguished customers'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-purple-900 hover:bg-yellow-300 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'حجز VIP' : 'VIP Booking'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'استشارة مجانية' : 'Free Consultation'}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{isArabic ? 'خدماتنا الراقية في النعيم' : 'Our Premium Services in Al-Naeem'}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href={`/${locale}/services/annual-contracts`} className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'عقود VIP' : 'VIP Contracts'}</h4>
                </Link>
                <Link href={`/${locale}/services/termites-control-jeddah`} className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'حماية فاخرة' : 'Premium Protection'}</h4>
                </Link>
                <Link href={`/${locale}/sectors/residential`} className="bg-purple-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'برامج خاصة' : 'Special Programs'}</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
