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
  Waves,
  Sun
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
      ? 'مكافحة الحشرات في الشاطئ جدة | حماية ساحلية متخصصة — شركة الأسطورة'
      : 'Pest Control in Al-Shati Jeddah | Specialized Coastal Protection — Al-Ustora',
    description: isArabic
      ? 'خدمة مكافحة حشرات متخصصة في حي الشاطئ بجدة. حلول فعالة للمناطق الساحلية، مواد مقاومة للرطوبة، خدمة 24/7.'
      : 'Specialized pest control service in Al-Shati district, Jeddah. Effective coastal solutions, humidity-resistant materials, 24/7 service.',
  };
}

export default function AlShatiPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const services = isArabic ? [
    'مكافحة البعوض الساحلي',
    'القضاء على الصراصير',
    'مكافحة الذباب والحشرات الطائرة',
    'إبادة القوارض',
    'حماية من الرطوبة',
    'تعقيم المناطق الساحلية'
  ] : [
    'Coastal Mosquito Control',
    'Cockroach Elimination',
    'Fly & Flying Insect Control',
    'Rodent Extermination',
    'Humidity Protection',
    'Coastal Area Disinfection'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات في حي الشاطئ'
    : 'Hello, I want pest control service in Al-Shati area';

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
            <span className="text-gray-900">{isArabic ? 'الشاطئ' : 'Al-Shati'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-cyan-600 mb-4">
                <MapPin size={20} />
                <span className="font-semibold">{isArabic ? 'حي الشاطئ، جدة' : 'Al-Shati, Jeddah'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات في الشاطئ' : 'Pest Control in Al-Shati'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة للمناطق الساحلية. حلول فعالة ضد البعوض والحشرات الساحلية مع مواد مقاومة للرطوبة.'
                  : 'Specialized service for coastal areas. Effective solutions against mosquitoes and coastal insects with humidity-resistant materials.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب فوري' : 'Instant WhatsApp'}
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
                  <Waves className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'حماية ساحلية' : 'Coastal Protection'}</div>
                </div>
                <div className="text-center border-x">
                  <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'مواد مقاومة' : 'Resistant Materials'}</div>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Insect control Jeddah.jpg"
                alt={isArabic ? 'مكافحة الحشرات في الشاطئ' : 'Pest control in Al-Shati'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Waves size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خبراء المناطق الساحلية' : 'Coastal Area Experts'}
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
              {isArabic ? 'خدماتنا في الشاطئ' : 'Our Services in Al-Shati'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isArabic 
                ? 'حلول متخصصة للتحديات الفريدة للمناطق الساحلية'
                : 'Specialized solutions for unique coastal area challenges'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-md transition-all">
                <CheckCircle className="text-cyan-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خبرة في المناطق الساحلية' : 'Coastal Area Expertise'}
              </h2>
              
              <p className="text-gray-700 mb-6">
                {isArabic 
                  ? 'حي الشاطئ له طبيعة خاصة كمنطقة ساحلية تتطلب حلول مكافحة حشرات متخصصة. نستخدم مواد مقاومة للرطوبة العالية والرياح البحرية.'
                  : 'Al-Shati as a coastal area has unique characteristics requiring specialized pest control solutions. We use materials resistant to high humidity and sea winds.'
                }
              </p>

              <div className="space-y-4">
                {(isArabic ? [
                  {
                    title: 'مواد مقاومة للرطوبة',
                    desc: 'مبيدات خاصة تعمل في ظروف الرطوبة العالية'
                  },
                  {
                    title: 'حماية طويلة المدى',
                    desc: 'تقنيات تضمن استمرارية الحماية رغم الظروف البحرية'
                  },
                  {
                    title: 'مكافحة البعوض المكثفة',
                    desc: 'برامج خاصة للمناطق القريبة من البحر'
                  }
                ] : [
                  {
                    title: 'Humidity-Resistant Materials',
                    desc: 'Special pesticides that work in high humidity conditions'
                  },
                  {
                    title: 'Long-Term Protection',
                    desc: 'Techniques ensuring continuous protection despite sea conditions'
                  },
                  {
                    title: 'Intensive Mosquito Control',
                    desc: 'Special programs for areas near the sea'
                  }
                ]).map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={24} />
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
                src="/images/Mosquito control service.jpg"
                alt={isArabic ? 'مكافحة البعوض' : 'Mosquito control'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg mb-6"
              />

              <div className="p-6 bg-cyan-50 rounded-xl border border-cyan-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'التحديات الساحلية:' : 'Coastal Challenges:'}
                </h3>
                <ul className="space-y-2">
                  {(isArabic ? [
                    'رطوبة عالية على مدار السنة',
                    'تكاثر سريع للبعوض',
                    'الرياح البحرية المستمرة',
                    'حرارة ورطوبة صيفية شديدة'
                  ] : [
                    'High humidity year-round',
                    'Rapid mosquito breeding',
                    'Continuous sea winds',
                    'Intense summer heat and humidity'
                  ]).map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isArabic ? 'آراء عملائنا في الشاطئ' : 'Client Reviews in Al-Shati'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: isArabic ? 'عبدالله الغامدي' : 'Abdullah Al-Ghamdi',
                text: isArabic 
                  ? 'خدمة ممتازة، تخلصت من مشكلة البعوض نهائياً'
                  : 'Excellent service, completely eliminated mosquito problem',
                rating: 5
              },
              {
                name: isArabic ? 'منى الحربي' : 'Muna Al-Harbi',
                text: isArabic 
                  ? 'فريق متخصص يفهم طبيعة المنطقة الساحلية'
                  : 'Specialized team understanding coastal area nature',
                rating: 5
              },
              {
                name: isArabic ? 'فهد البحري' : 'Fahad Al-Bahri',
                text: isArabic 
                  ? 'أسعار ممتازة ونتائج فورية، أنصح بهم'
                  : 'Excellent prices and immediate results, recommend them',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="font-semibold text-gray-900">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمِ منزلك الساحلي الآن' : 'Protect Your Coastal Home Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'حلول متخصصة للمناطق الساحلية مع ضمان 6 أشهر'
              : 'Specialized coastal solutions with 6 months guarantee'
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
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
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
          title: isArabic ? 'مكافحة الحشرات في الشاطئ' : 'Pest Control in Al-Shati',
          description: isArabic 
            ? 'خدمة مكافحة حشرات متخصصة للمناطق الساحلية في حي الشاطئ بجدة'
            : 'Specialized coastal pest control service in Al-Shati district, Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}
