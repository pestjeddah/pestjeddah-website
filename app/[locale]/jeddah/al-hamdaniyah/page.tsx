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
  Building2,
  ShieldCheck
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
      ? 'مكافحة الحشرات في الحمدانية جدة | خدمة احترافية — شركة الأسطورة'
      : 'Pest Control in Al-Hamdaniyah Jeddah | Professional Service — Al-Ustora',
    description: isArabic
      ? 'خدمة مكافحة حشرات متخصصة في حي الحمدانية بجدة. فريق خبير، تقنيات حديثة، ضمان شامل. اتصل الآن.'
      : 'Specialized pest control service in Al-Hamdaniyah district, Jeddah. Expert team, modern techniques, comprehensive guarantee. Call now.',
  };
}

export default function AlHamdaniyahPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const services = isArabic ? [
    'مكافحة الصراصير الألمانية',
    'إبادة بق الفراش',
    'مكافحة النمل الأبيض',
    'القضاء على الفئران',
    'مكافحة البعوض والذباب',
    'تطهير وتعقيم شامل'
  ] : [
    'German Cockroach Control',
    'Bed Bug Extermination',
    'Termite Control',
    'Rat Elimination',
    'Mosquito & Fly Control',
    'Complete Disinfection'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات في حي الحمدانية'
    : 'Hello, I want pest control service in Al-Hamdaniyah area';

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
            <span className="text-gray-900">{isArabic ? 'الحمدانية' : 'Al-Hamdaniyah'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin size={20} />
                <span className="font-semibold">{isArabic ? 'حي الحمدانية، جدة' : 'Al-Hamdaniyah, Jeddah'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات في الحمدانية' : 'Pest Control in Al-Hamdaniyah'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة احترافية لمكافحة جميع أنواع الحشرات في حي الحمدانية. فريق خبير متاح 24/7 لخدمتك.'
                  : 'Professional service for all types of pest control in Al-Hamdaniyah area. Expert team available 24/7 to serve you.'
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
                  {isArabic ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="text-center">
                  <ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'مواد آمنة' : 'Safe Materials'}</div>
                </div>
                <div className="text-center border-x">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</div>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'جودة عالية' : 'High Quality'}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Best pest control company.jpg"
                alt={isArabic ? 'أفضل شركة مكافحة حشرات' : 'Best pest control company'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Star className="fill-current" size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'الأعلى تقييماً' : 'Top Rated'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'خدماتنا في الحمدانية' : 'Our Services in Al-Hamdaniyah'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isArabic 
                ? 'نوفر حلول متكاملة لجميع مشاكل الحشرات والآفات'
                : 'We provide comprehensive solutions for all pest problems'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:shadow-md transition-all">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isArabic ? 'لماذا تختارنا في الحمدانية؟' : 'Why Choose Us in Al-Hamdaniyah?'}
              </h2>
              
              <div className="space-y-4">
                {(isArabic ? [
                  {
                    title: 'خبرة محلية',
                    desc: 'نعرف تحديات حي الحمدانية ونقدم حلول مخصصة'
                  },
                  {
                    title: 'فريق متخصص',
                    desc: 'فنيون مدربون ومعتمدون بأعلى المعايير'
                  },
                  {
                    title: 'ضمان شامل',
                    desc: 'ضمان 6 أشهر على جميع خدماتنا'
                  },
                  {
                    title: 'أسعار تنافسية',
                    desc: 'أفضل الأسعار مع جودة مضمونة'
                  }
                ] : [
                  {
                    title: 'Local Expertise',
                    desc: 'We know Al-Hamdaniyah challenges and provide customized solutions'
                  },
                  {
                    title: 'Specialized Team',
                    desc: 'Trained and certified technicians with highest standards'
                  },
                  {
                    title: 'Comprehensive Guarantee',
                    desc: '6 months guarantee on all our services'
                  },
                  {
                    title: 'Competitive Prices',
                    desc: 'Best prices with guaranteed quality'
                  }
                ]).map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/images/Professional exterminators.jpg"
                alt={isArabic ? 'فريق محترف' : 'Professional team'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg mb-6"
              />

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'تغطية شاملة في الحمدانية:' : 'Complete Coverage in Al-Hamdaniyah:'}
                </h3>
                <ul className="space-y-2">
                  {(isArabic ? [
                    'الأحياء السكنية والفلل',
                    'المجمعات والعمائر',
                    'المحلات التجارية',
                    'المطاعم والمقاهي'
                  ] : [
                    'Residential areas and villas',
                    'Complexes and buildings',
                    'Commercial shops',
                    'Restaurants and cafes'
                  ]).map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'جاهزون لخدمتك في الحمدانية' : 'Ready to Serve You in Al-Hamdaniyah'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احصل على استشارة مجانية وخصم خاص لسكان الحمدانية'
              : 'Get free consultation and special discount for Al-Hamdaniyah residents'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {isArabic ? 'واتساب الآن' : 'WhatsApp Now'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {isArabic ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات في الحمدانية' : 'Pest Control in Al-Hamdaniyah',
          description: isArabic 
            ? 'خدمة مكافحة حشرات متخصصة في حي الحمدانية بجدة'
            : 'Specialized pest control service in Al-Hamdaniyah district, Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}
