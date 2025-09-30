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
  Heart
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
      ? 'مكافحة الحشرات في السلامة جدة | خدمة آمنة للعائلات — شركة الأسطورة'
      : 'Pest Control in Al-Salama Jeddah | Family-Safe Service — Al-Ustora',
    description: isArabic
      ? 'خدمة مكافحة حشرات آمنة في حي السلامة بجدة. مواد آمنة 100%، خدمة منزلية متخصصة، ضمان 6 أشهر.'
      : 'Safe pest control service in Al-Salama district, Jeddah. 100% safe materials, specialized home service, 6 months guarantee.',
  };
}

export default function AlSalamaPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const services = isArabic ? [
    'مكافحة الصراصير المنزلية',
    'القضاء على بق الفراش',
    'مكافحة النمل',
    'إبادة الفئران',
    'رش المنازل الآمن',
    'تعقيم وتطهير'
  ] : [
    'Home Cockroach Control',
    'Bed Bug Elimination',
    'Ant Control',
    'Rat Extermination',
    'Safe Home Spraying',
    'Disinfection & Sterilization'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات آمنة في حي السلامة'
    : 'Hello, I want safe pest control service in Al-Salama area';

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
            <span className="text-gray-900">{isArabic ? 'السلامة' : 'Al-Salama'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <MapPin size={20} />
                <span className="font-semibold">{isArabic ? 'حي السلامة، جدة' : 'Al-Salama, Jeddah'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات في السلامة' : 'Pest Control in Al-Salama'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة منزلية آمنة لمكافحة جميع أنواع الحشرات في حي السلامة. مواد آمنة 100% للأطفال والحيوانات الأليفة.'
                  : 'Safe home service for all types of pest control in Al-Salama. 100% safe materials for children and pets.'
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
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? '100% آمن' : '100% Safe'}</div>
                </div>
                <div className="text-center border-x">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'آمن للعائلة' : 'Family Safe'}</div>
                </div>
                <div className="text-center">
                  <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'خدمة منزلية' : 'Home Service'}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Home pest treatment.jpg"
                alt={isArabic ? 'علاج الحشرات المنزلي' : 'Home pest treatment'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'آمن 100% للعائلات' : '100% Family Safe'}
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
              {isArabic ? 'خدماتنا في السلامة' : 'Our Services in Al-Salama'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isArabic 
                ? 'خدمات منزلية متخصصة مع أعلى معايير السلامة'
                : 'Specialized home services with highest safety standards'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:shadow-md transition-all">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isArabic ? 'ضمانات السلامة لعائلتك' : 'Safety Guarantees for Your Family'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {(isArabic ? [
              {
                icon: Shield,
                title: 'مواد معتمدة',
                desc: 'معتمدة من وزارة الصحة'
              },
              {
                icon: Heart,
                title: 'آمن للأطفال',
                desc: 'بدون أي أضرار صحية'
              },
              {
                icon: Home,
                title: 'لا روائح',
                desc: 'مواد بدون روائح كريهة'
              },
              {
                icon: Star,
                title: 'نتائج فورية',
                desc: 'فعالية سريعة ومضمونة'
              }
            ] : [
              {
                icon: Shield,
                title: 'Certified Materials',
                desc: 'Approved by Ministry of Health'
              },
              {
                icon: Heart,
                title: 'Child Safe',
                desc: 'No health hazards'
              },
              {
                icon: Home,
                title: 'No Odors',
                desc: 'Materials without bad smells'
              },
              {
                icon: Star,
                title: 'Immediate Results',
                desc: 'Fast and guaranteed effectiveness'
              }
            ]).map((feature, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isArabic ? 'آراء العائلات في السلامة' : 'Family Reviews in Al-Salama'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: isArabic ? 'أم عبدالرحمن' : 'Umm Abdulrahman',
                text: isArabic 
                  ? 'خدمة ممتازة وآمنة لأطفالي، لم تسبب أي روائح أو إزعاج'
                  : 'Excellent and safe service for my children, caused no odors or disturbance',
                rating: 5
              },
              {
                name: isArabic ? 'عائلة الشمراني' : 'Al-Shamrani Family',
                text: isArabic 
                  ? 'فريق محترم ونظيف، تخلصنا من الصراصير نهائياً'
                  : 'Respectful and clean team, completely eliminated cockroaches',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{review.text}"</p>
                <div className="font-semibold text-gray-900">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمِ عائلتك بأمان تام' : 'Protect Your Family with Complete Safety'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمة منزلية آمنة مع ضمان 6 أشهر'
              : 'Safe home service with 6 months guarantee'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {isArabic ? 'واتساب الآن' : 'WhatsApp Now'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
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
          title: isArabic ? 'مكافحة الحشرات في السلامة' : 'Pest Control in Al-Salama',
          description: isArabic 
            ? 'خدمة مكافحة حشرات منزلية آمنة في حي السلامة بجدة'
            : 'Safe home pest control service in Al-Salama district, Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}
