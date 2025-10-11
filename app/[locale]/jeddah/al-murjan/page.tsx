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
  Zap,
  AlertCircle,
  PhoneCall
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
      ? 'مكافحة الحشرات في المرجان جدة | خدمة طوارئ سريعة — شركة الأسطورة'
      : 'Pest Control in Al-Murjan Jeddah | Fast Emergency Service — Al-Ustora',
    description: isArabic
      ? 'خدمة طوارئ لمكافحة الحشرات في حي المرجان بجدة. استجابة فورية، فريق جاهز 24/7، حلول سريعة وفعالة.'
      : 'Emergency pest control service in Al-Murjan district, Jeddah. Immediate response, 24/7 ready team, fast and effective solutions.',
  };
}

export default function AlMurjanPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const services = isArabic ? [
    'خدمة طوارئ 24/7',
    'مكافحة فورية للصراصير',
    'القضاء السريع على بق الفراش',
    'إبادة عاجلة للقوارض',
    'استجابة خلال 30 دقيقة',
    'فريق مجهز دائماً'
  ] : [
    '24/7 Emergency Service',
    'Immediate Cockroach Control',
    'Fast Bed Bug Elimination',
    'Urgent Rodent Extermination',
    '30-Minute Response',
    'Always Equipped Team'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أحتاج خدمة طوارئ مكافحة حشرات في حي المرجان'
    : 'Hello, I need emergency pest control service in Al-Murjan area';

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
            <span className="text-gray-900">{isArabic ? 'المرجان' : 'Al-Murjan'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-red-600 mb-4">
                <MapPin size={20} />
                <span className="font-semibold">{isArabic ? 'حي المرجان، جدة' : 'Al-Murjan, Jeddah'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات في المرجان' : 'Pest Control in Al-Murjan'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة طوارئ متاحة على مدار الساعة في حي المرجان. فريقنا جاهز للوصول إليك في أقل من 30 دقيقة.'
                  : 'Emergency service available 24/7 in Al-Murjan area. Our team ready to reach you in less than 30 minutes.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2 animate-pulse"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'طوارئ واتساب' : 'Emergency WhatsApp'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'اتصل فوراً' : 'Call Immediately'}
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl shadow-sm border-2 border-red-200">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'استجابة فورية' : 'Instant Response'}</div>
                </div>
                <div className="text-center border-x">
                  <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? '24/7 متاح' : '24/7 Available'}</div>
                </div>
                <div className="text-center">
                  <PhoneCall className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-xs text-gray-600">{isArabic ? 'دعم مباشر' : 'Direct Support'}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Emergency-pest-control-Jeddah.jpg"
                alt={isArabic ? 'خدمة طوارئ مكافحة الحشرات' : 'Emergency pest control service'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة طوارئ 24/7' : '24/7 Emergency Service'}
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
              {isArabic ? 'خدمات الطوارئ في المرجان' : 'Emergency Services in Al-Murjan'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isArabic 
                ? 'استجابة سريعة وحلول فورية لجميع حالات الطوارئ'
                : 'Fast response and immediate solutions for all emergency cases'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl hover:shadow-md transition-all border border-red-100">
                <CheckCircle className="text-red-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isArabic ? 'كيف تعمل خدمة الطوارئ؟' : 'How Does Emergency Service Work?'}
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {(isArabic ? [
              {
                step: '1',
                title: 'اتصل بنا',
                desc: 'اتصل أو راسلنا عبر واتساب'
              },
              {
                step: '2',
                title: 'تقييم سريع',
                desc: 'نقيم الحالة فوراً'
              },
              {
                step: '3',
                title: 'وصول الفريق',
                desc: 'الفريق يصل خلال 30 دقيقة'
              },
              {
                step: '4',
                title: 'معالجة فورية',
                desc: 'نبدأ العلاج مباشرة'
              }
            ] : [
              {
                step: '1',
                title: 'Contact Us',
                desc: 'Call or WhatsApp us'
              },
              {
                step: '2',
                title: 'Quick Assessment',
                desc: 'We assess situation immediately'
              },
              {
                step: '3',
                title: 'Team Arrival',
                desc: 'Team arrives within 30 minutes'
              },
              {
                step: '4',
                title: 'Immediate Treatment',
                desc: 'We start treatment directly'
              }
            ]).map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-sm relative">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isArabic ? 'آراء عملائنا في المرجان' : 'Client Reviews in Al-Murjan'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: isArabic ? 'سعد المطيري' : 'Saad Al-Mutairi',
                text: isArabic 
                  ? 'وصلوا بسرعة خيالية وحلوا المشكلة فوراً'
                  : 'Arrived incredibly fast and solved the problem immediately',
                rating: 5
              },
              {
                name: isArabic ? 'أحمد الزهراني' : 'Ahmed Al-Zahrani',
                text: isArabic 
                  ? 'خدمة طوارئ حقيقية، فريق محترف ومتعاون'
                  : 'Real emergency service, professional and cooperative team',
                rating: 5
              },
              {
                name: isArabic ? 'عمر السلمي' : 'Omar Al-Salmi',
                text: isArabic 
                  ? 'أفضل خدمة طوارئ في جدة، سريعون وفعالون'
                  : 'Best emergency service in Jeddah, fast and effective',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'هل لديك حالة طوارئ؟' : 'Do You Have an Emergency?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'فريقنا جاهز للوصول إليك في أقل من 30 دقيقة'
              : 'Our team is ready to reach you in less than 30 minutes'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 animate-pulse"
            >
              <MessageCircle size={20} />
              {isArabic ? 'واتساب طوارئ' : 'Emergency WhatsApp'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {isArabic ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>

      {/* Expanded Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{isArabic ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href={`/${locale}/services/cockroach-control-jeddah`} className="bg-red-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'طوارئ الصراصير' : 'Cockroach Emergency'}</h4>
                </Link>
                <Link href={`/${locale}/services/bed-bugs-treatment-jeddah`} className="bg-red-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'طوارئ بق الفراش' : 'Bed Bug Emergency'}</h4>
                </Link>
                <Link href={`/${locale}/services/rodents-control-jeddah`} className="bg-red-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{isArabic ? 'طوارئ القوارض' : 'Rodent Emergency'}</h4>
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/al-marjan`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'المرجان' : 'Al-Marjan'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/obhur-north`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'أبحر الشمالية' : 'Obhur North'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
