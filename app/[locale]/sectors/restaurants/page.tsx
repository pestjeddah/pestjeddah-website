import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Utensils, 
  Phone, 
  MessageCircle, 
  Clock,
  Star,
  CheckCircle,
  FileCheck,
  Shield,
  Award,
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
      ? 'مكافحة الحشرات للمطاعم والمقاهي بجدة | شهادات HACCP — شركة الأسطورة'
      : 'Pest Control for Restaurants & Cafes in Jeddah | HACCP Certificates — Al-Ustora',
    description: isArabic
      ? 'خدمات مكافحة حشرات متخصصة للمطاعم والمقاهي بجدة. مواد معتمدة غذائياً، شهادات HACCP، جدولة مرنة، تقارير شهرية.'
      : 'Specialized pest control services for restaurants and cafes in Jeddah. Food-grade approved materials, HACCP certificates, flexible scheduling, monthly reports.',
  };
}

export default function RestaurantsSectorPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const restaurantFeatures = isArabic ? [
    {
      icon: FileCheck,
      title: 'شهادات HACCP',
      description: 'شهادات معتمدة من الهيئات الصحية للسلامة الغذائية'
    },
    {
      icon: Shield,
      title: 'مواد غذائية آمنة',
      description: 'استخدام مواد معتمدة غذائياً بدون روائح'
    },
    {
      icon: Clock,
      title: 'جدولة مرنة',
      description: 'عمل قبل أو بعد ساعات التشغيل حسب راحتك'
    },
    {
      icon: Award,
      title: 'تقارير شهرية',
      description: 'تقارير تفصيلية شهرية لتوثيق الامتثال'
    }
  ] : [
    {
      icon: FileCheck,
      title: 'HACCP Certificates',
      description: 'Certified documents from health authorities for food safety'
    },
    {
      icon: Shield,
      title: 'Food-Safe Materials',
      description: 'Use of food-grade approved materials without odors'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Work before or after operating hours at your convenience'
    },
    {
      icon: Award,
      title: 'Monthly Reports',
      description: 'Detailed monthly reports for compliance documentation'
    }
  ];

  const restaurantTypes = isArabic ? [
    'المطاعم الفاخرة',
    'المطاعم السريعة',
    'المقاهي والكافيهات',
    'المخابز والحلويات',
    'مطابخ التوصيل',
    'البوفيهات المفتوحة'
  ] : [
    'Fine Dining Restaurants',
    'Fast Food Restaurants',
    'Cafes & Coffee Shops',
    'Bakeries & Sweets',
    'Delivery Kitchens',
    'Open Buffets'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات للمطعم مع شهادة HACCP'
    : 'Hello, I want restaurant pest control service with HACCP certificate';

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
            <span className="text-gray-900">{isArabic ? 'المطاعم والمقاهي' : 'Restaurants & Cafes'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات للمطاعم' : 'Restaurant Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمات مكافحة حشرات متخصصة للمطاعم والمقاهي مع شهادات HACCP ومواد معتمدة غذائياً.'
                  : 'Specialized pest control services for restaurants and cafes with HACCP certificates and food-grade approved materials.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-orange-600 hover:bg-orange-700 flex items-center justify-center gap-2"
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
            </div>

            <div className="relative">
              <Image
                src="/images/Pest-control-for-restaurants.jpg"
                alt={isArabic ? 'مكافحة الحشرات للمطاعم' : 'Restaurant pest control'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <FileCheck size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'شهادة HACCP' : 'HACCP Certified'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات الخدمة' : 'Service Features'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurantFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border hover:shadow-lg transition-all text-center">
                <feature.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'نخدم جميع أنواع المطاعم' : 'We Serve All Restaurant Types'}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {restaurantTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                <span className="text-gray-800">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمِ مطعمك وسمعتك' : 'Protect Your Restaurant & Reputation'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمة احترافية مع شهادات معتمدة تضمن السلامة الغذائية'
              : 'Professional service with certified documents ensuring food safety'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'طلب شهادة HACCP' : 'Request HACCP Certificate'}
            </Link>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات للمطاعم' : 'Restaurant Pest Control',
          description: isArabic 
            ? 'خدمات مكافحة حشرات متخصصة للمطاعم والمقاهي'
            : 'Specialized pest control services for restaurants and cafes',
          serviceType: isArabic ? 'مكافحة حشرات المطاعم' : 'Restaurant Pest Control'
        }}
      />
    </>
  );
}
