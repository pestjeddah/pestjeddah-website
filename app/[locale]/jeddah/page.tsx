import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink, isRTL } from '@/lib/utils';
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
      ? 'مكافحة حشرات في جميع أحياء جدة — شركة الأسطورة | تغطية شاملة'
      : 'Pest Control in All Jeddah Districts — Al-Ustora | Complete Coverage',
    description: isArabic
      ? 'خدمات مكافحة الحشرات في جميع أحياء جدة: الحمراء، الشاطئ، الروضة، السلامة، النعيم وأكثر. استجابة سريعة وخدمة محلية متخصصة.'
      : 'Pest control services in all Jeddah districts: Al Hamra, Al Shati, Al Rawdah, Al Salama, Al Naeem and more. Quick response and specialized local service.',
  };
}

export default function JeddahAreasPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const areas = [
    {
      slug: 'al-hamra',
      nameAr: 'حي الحمراء',
      nameEn: 'Al Hamra District',
      image: '/images/Professional pest control.jpg',
      description: isArabic 
        ? 'خدمات متخصصة لمكافحة الحشرات في حي الحمراء بجدة'
        : 'Specialized pest control services in Al Hamra district of Jeddah'
    },
    {
      slug: 'al-shati',
      nameAr: 'حي الشاطئ',
      nameEn: 'Al Shati District',
      image: '/images/Pest control Jeddah.jpg',
      description: isArabic 
        ? 'مكافحة فعالة للحشرات والقوارض في منطقة الشاطئ'
        : 'Effective pest and rodent control in Al Shati area'
    },
    {
      slug: 'al-rawdah',
      nameAr: 'حي الروضة',
      nameEn: 'Al Rawdah District',
      image: '/images/Residential pest control.jpg',
      description: isArabic 
        ? 'حلول آمنة لمكافحة الآفات في الأحياء السكنية بالروضة'
        : 'Safe pest control solutions in Al Rawdah residential areas'
    },
    {
      slug: 'al-salama',
      nameAr: 'حي السلامة',
      nameEn: 'Al Salama District',
      image: '/images/Home pest treatment.jpg',
      description: isArabic 
        ? 'خدمات منزلية متخصصة لمكافحة الحشرات في السلامة'
        : 'Specialized home pest control services in Al Salama'
    },
    {
      slug: 'al-naeem',
      nameAr: 'حي النعيم',
      nameEn: 'Al Naeem District',
      image: '/images/Safe pest control.jpg',
      description: isArabic 
        ? 'مكافحة آمنة وفعالة للحشرات في حي النعيم'
        : 'Safe and effective pest control in Al Naeem district'
    },
    {
      slug: 'al-murjan',
      nameAr: 'حي المرجان',
      nameEn: 'Al Murjan District',
      image: '/images/Emergency pest control Jeddah.jpg',
      description: isArabic 
        ? 'خدمة طوارئ لمكافحة الحشرات في المرجان'
        : 'Emergency pest control service in Al Murjan'
    },
    {
      slug: 'obhur-north',
      nameAr: 'أبحر الشمالية',
      nameEn: 'Obhur North',
      image: '/images/Pest management Jeddah.jpg',
      description: isArabic 
        ? 'إدارة شاملة للآفات في منطقة أبحر الشمالية'
        : 'Comprehensive pest management in Obhur North area'
    },
    {
      slug: 'obhur-south',
      nameAr: 'أبحر الجنوبية',
      nameEn: 'Obhur South',
      image: '/images/Commercial pest control Jeddah.jpg',
      description: isArabic 
        ? 'خدمات تجارية وسكنية في أبحر الجنوبية'
        : 'Commercial and residential services in Obhur South'
    },
    {
      slug: 'al-hamdaniyah',
      nameAr: 'حي الحمدانية',
      nameEn: 'Al Hamdaniyah District',
      image: '/images/Pest prevention services.jpg',
      description: isArabic 
        ? 'خدمات وقائية لمنع انتشار الآفات في الحمدانية'
        : 'Preventive services to prevent pest spread in Al Hamdaniyah'
    },
    {
      slug: 'al-aziziyah',
      nameAr: 'حي العزيزية',
      nameEn: 'Al Aziziyah District',
      image: '/images/Eco-friendly pest control.jpg',
      description: isArabic 
        ? 'حلول صديقة للبيئة في حي العزيزية'
        : 'Eco-friendly solutions in Al Aziziyah district'
    },
    {
      slug: 'al-bawadi',
      nameAr: 'حي البوادي',
      nameEn: 'Al Bawadi District',
      image: '/images/Long-lasting pest control.jpg',
      description: isArabic 
        ? 'حماية طويلة المدى من الآفات في البوادي'
        : 'Long-term pest protection in Al Bawadi'
    },
    {
      slug: 'al-naseem',
      nameAr: 'حي النسيم',
      nameEn: 'Al Naseem District',
      image: '/images/Affordable pest control.jpg',
      description: isArabic 
        ? 'خدمات بأسعار مناسبة في حي النسيم'
        : 'Affordable services in Al Naseem district'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات في جدة'
    : 'Hello, I want pest control service in Jeddah';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'مناطق جدة' : 'Jeddah Areas'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'مكافحة حشرات في جميع أحياء جدة' : 'Pest Control in All Jeddah Districts'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {isArabic 
                ? 'نخدم جميع أحياء ومناطق جدة بفريق متخصص ومعدات حديثة. استجابة سريعة وخدمة محلية موثوقة في منطقتك.'
                : 'We serve all neighborhoods and areas of Jeddah with specialized team and modern equipment. Quick response and reliable local service in your area.'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'تغطية شاملة لجدة' : 'Complete Jeddah Coverage'}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'فريق محلي' : 'Local Team'}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'استجابة سريعة' : 'Quick Response'}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {isArabic ? 'احجز الخدمة عبر واتساب' : 'Book Service via WhatsApp'}
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
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'المناطق التي نخدمها' : 'Areas We Serve'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'فريقنا المتخصص يقدم خدمات مكافحة الحشرات في جميع أنحاء جدة'
                : 'Our specialized team provides pest control services throughout Jeddah'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/jeddah/${area.slug}`}
                className="group block bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={area.image}
                    alt={isArabic ? area.nameAr : area.nameEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                    <MapPin className="text-primary" size={16} />
                    <span className="text-sm font-medium text-gray-900">
                      {isArabic ? 'جدة' : 'Jeddah'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {isArabic ? area.nameAr : area.nameEn}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {area.description}
                  </p>
                  
                  {/* Services Available */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {isArabic ? 'خدمة فورية' : 'Immediate Service'}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {isArabic ? 'فحص مجاني' : 'Free Inspection'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-sm">
                      {isArabic ? 'تفاصيل المنطقة' : 'Area Details'}
                    </span>
                    <Clock className="text-gray-400" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'لماذا نحن الأفضل في جدة؟' : 'Why Are We The Best in Jeddah?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'معرفة محلية' : 'Local Knowledge'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'خبرة عميقة بطبيعة كل منطقة وأنواع الآفات الشائعة'
                  : 'Deep expertise with each area\'s nature and common pest types'
                }
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'استجابة سريعة' : 'Quick Response'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'فريق في كل منطقة للوصول السريع خلال 30 دقيقة'
                  : 'Team in each area for quick arrival within 30 minutes'
                }
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'ضمان شامل' : 'Full Guarantee'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'ضمان على جميع الخدمات مع متابعة دورية'
                  : 'Guarantee on all services with regular follow-up'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'خدمة فورية في منطقتك' : 'Immediate Service in Your Area'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'أينما كنت في جدة، نحن قريبون منك'
              : 'Wherever you are in Jeddah, we are close to you'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'واتساب فوري' : 'WhatsApp Now'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة حشرات في جميع أحياء جدة' : 'Pest Control in All Jeddah Districts',
          description: isArabic 
            ? 'خدمات مكافحة الحشرات في جميع أحياء جدة'
            : 'Pest control services in all Jeddah districts',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}



