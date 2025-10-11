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
      ? 'مكافحة الحشرات في النسيم جدة | خدمة ممتازة — شركة الأسطورة'
      : 'Pest Control in Al-Naseem Jeddah | Excellent Service — Al-Ustora',
    description: isArabic
      ? 'خدمة مكافحة حشرات متخصصة في حي النسيم بجدة. فريق محترف، نتائج مضمونة، أسعار تنافسية. اتصل الآن.'
      : 'Specialized pest control service in Al-Naseem district, Jeddah. Professional team, guaranteed results, competitive prices. Call now.',
  };
}

export default function AlNaseemPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const services = isArabic ? [
    'مكافحة الصراصير',
    'القضاء على بق الفراش',
    'إبادة النمل الأبيض',
    'مكافحة القوارض',
    'مكافحة البعوض',
    'رش المبيدات الآمنة'
  ] : [
    'Cockroach Control',
    'Bed Bug Elimination',
    'Termite Extermination',
    'Rodent Control',
    'Mosquito Control',
    'Safe Pesticide Spraying'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات في حي النسيم'
    : 'Hello, I want pest control service in Al-Naseem area';

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
            <span className="text-gray-900">{isArabic ? 'النسيم' : 'Al-Naseem'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin size={20} />
                <span className="font-semibold">{isArabic ? 'حي النسيم، جدة' : 'Al-Naseem, Jeddah'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات في النسيم' : 'Pest Control in Al-Naseem'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متميزة لمكافحة جميع أنواع الحشرات في حي النسيم. حلول فعالة ونتائج مضمونة.'
                  : 'Excellent service for all types of pest control in Al-Naseem area. Effective solutions and guaranteed results.'
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

              <div className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-500" size={32} />
                  <div>
                    <div className="font-bold text-gray-900">{isArabic ? 'الأفضل في النسيم' : 'Best in Al-Naseem'}</div>
                    <div className="text-xs text-gray-600">{isArabic ? 'تقييم 5 نجوم' : '5 Star Rating'}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Pest-control-guarantee.jpg"
                alt={isArabic ? 'ضمان مكافحة الحشرات' : 'Pest control guarantee'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{isArabic ? 'ضمان شامل' : 'Full Guarantee'}</div>
                    <div className="text-sm text-gray-600">{isArabic ? '6 أشهر' : '6 Months'}</div>
                  </div>
                  <CheckCircle className="text-green-600" size={32} />
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
              {isArabic ? 'خدماتنا في النسيم' : 'Our Services in Al-Naseem'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isArabic 
                ? 'حلول شاملة ومتكاملة لجميع مشاكل الحشرات'
                : 'Comprehensive and integrated solutions for all pest problems'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all border border-blue-100">
                <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isArabic ? 'لماذا نحن الخيار الأفضل في النسيم؟' : 'Why Are We The Best Choice in Al-Naseem?'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'جودة معتمدة' : 'Certified Quality'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'نستخدم أفضل المواد المعتمدة من وزارة الصحة'
                  : 'We use the best materials approved by Ministry of Health'
                }
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'خدمة سريعة' : 'Fast Service'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'نصل إليك في أقل من ساعة داخل حي النسيم'
                  : 'We reach you in less than an hour in Al-Naseem'
                }
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'رضا العملاء' : 'Customer Satisfaction'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? '98% من عملائنا يوصون بخدماتنا'
                  : '98% of our clients recommend our services'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isArabic ? 'آراء عملائنا في النسيم' : 'Client Reviews in Al-Naseem'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: isArabic ? 'خالد العمري' : 'Khaled Al-Omari',
                text: isArabic 
                  ? 'خدمة ممتازة وسعر مناسب، تم القضاء على الصراصير بشكل كامل'
                  : 'Excellent service and fair price, cockroaches completely eliminated',
                rating: 5
              },
              {
                name: isArabic ? 'نورة السالم' : 'Noura Al-Salem',
                text: isArabic 
                  ? 'فريق محترف جداً، أنصح بهم بشدة لسكان النسيم'
                  : 'Very professional team, highly recommend for Al-Naseem residents',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احصل على خدمة مميزة في النسيم' : 'Get Excellent Service in Al-Naseem'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'عرض خاص لسكان حي النسيم - خصم 15%'
              : 'Special offer for Al-Naseem residents - 15% discount'
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
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {isArabic ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>

      {/* About Al-Naseem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'النسيم: الحي العصري' : 'Al-Naseem: Modern District'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'عن حي النسيم' : 'About Al-Naseem'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'حي النسيم من الأحياء الحديثة في جدة، يتميز بالتخطيط العمراني الممتاز والبنية التحتية المتطورة. يضم الحي فيلات راقية، مجمعات سكنية عصرية، ومراكز تجارية متعددة.'
                    : 'Al-Naseem is modern district in Jeddah, distinguished by excellent urban planning and advanced infrastructure. The district includes upscale villas, modern residential complexes, and multiple shopping centers.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'رغم الحداثة، تحتاج المنازل والمجمعات السكنية في النسيم لبرامج وقائية ضد الآفات. نقدم حلولاً عصرية وآمنة تناسب الفيلات الحديثة والمجمعات الراقية.'
                    : 'Despite modernity, homes and residential complexes in Al-Naseem need preventive pest control programs. We provide modern and safe solutions suitable for modern villas and upscale complexes.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'الآفات الشائعة في النسيم' : 'Common Pests in Al-Naseem'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'النمل الأبيض حول الفيلات' : 'Termites around villas'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الصراصير في المطابخ الحديثة' : 'Cockroaches in modern kitchens'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'البعوض في الحدائق المنزلية' : 'Mosquitoes in home gardens'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'النمل بالقرب من المسابح' : 'Ants near swimming pools'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدماتنا في حي النسيم' : 'Our Services in Al-Naseem'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${locale}/services/termites-control-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة النمل الأبيض' : 'Termite Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حماية الفيلات والمباني الجديدة' : 'Protection for villas and new buildings'}</p>
                </Link>
                <Link href={`/${locale}/services/mosquitoes-flies-control-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة البعوض' : 'Mosquito Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حلول آمنة للحدائق والمنازل' : 'Safe solutions for gardens and homes'}</p>
                </Link>
                <Link href={`/${locale}/sectors/residential`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'برامج وقائية' : 'Prevention Programs'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'عقود صيانة سنوية للفيلات' : 'Annual maintenance contracts for villas'}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'نصائح للوقاية في حي النسيم' : 'Prevention Tips for Al-Naseem'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Home className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'صيانة الحدائق' : 'Garden Maintenance'}</h3>
                <p className="text-gray-700">{isArabic ? 'تقليم الأشجار بانتظام وإزالة المياه الراكدة لمنع تكاثر البعوض' : 'Regular tree trimming and removing stagnant water to prevent mosquito breeding'}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'فحص دوري للفيلات' : 'Periodic Villa Inspection'}</h3>
                <p className="text-gray-700">{isArabic ? 'فحص سنوي للنمل الأبيض خاصة قبل موسم الأمطار' : 'Annual termite inspection especially before rainy season'}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Award className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'تخزين آمن' : 'Safe Storage'}</h3>
                <p className="text-gray-700">{isArabic ? 'تخزين الأطعمة في حاويات محكمة خاصة في المطابخ الكبيرة' : 'Store food in sealed containers especially in large kitchens'}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'نظافة المسابح' : 'Pool Cleanliness'}</h3>
                <p className="text-gray-700">{isArabic ? 'تنظيف محيط المسابح ومنع تراكم الأوساخ التي تجذب الحشرات' : 'Cleaning pool surroundings and preventing dirt accumulation that attracts insects'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'نخدم أيضاً المناطق المجاورة' : 'We Also Serve Nearby Areas'}
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/al-aziziyah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'العزيزية' : 'Al-Aziziyah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
