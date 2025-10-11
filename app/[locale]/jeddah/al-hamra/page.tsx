import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star,
  CheckCircle,
  Clock,
  Shield
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
      ? 'مكافحة حشرات بحي الحمراء جدة — استجابة سريعة وعقود وقاية'
      : 'Pest Control in Al Hamra Jeddah — Quick Response & Prevention Contracts',
    description: isArabic
      ? 'خدمة مكافحة الحشرات في حي الحمراء بجدة. فريق متخصص، استجابة سريعة، أسعار مناسبة. اتصل الآن للحصول على فحص مجاني.'
      : 'Pest control service in Al Hamra district Jeddah. Specialized team, quick response, reasonable prices. Call now for free inspection.',
  };
}

export default function AlHamraPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const commonPests = isArabic ? [
    'الصراصير الألمانية',
    'النمل الأسود',
    'البعوض',
    'العناكب المنزلية',
    'الفئران الصغيرة',
    'ذباب المطبخ'
  ] : [
    'German Cockroaches',
    'Black Ants',
    'Mosquitoes',
    'House Spiders',
    'Small Mice',
    'Kitchen Flies'
  ];

  const testimonials = [
    {
      name: isArabic ? 'أحمد محمد' : 'Ahmed Mohammed',
      text: isArabic 
        ? 'خدمة ممتازة في الحمراء، تم حل مشكلة الصراصير نهائياً'
        : 'Excellent service in Al Hamra, cockroach problem solved permanently',
      rating: 5
    },
    {
      name: isArabic ? 'فاطمة عبدالله' : 'Fatima Abdullah',
      text: isArabic 
        ? 'فريق محترف وسريع، أنصح بهم بشدة'
        : 'Professional and fast team, highly recommend them',
      rating: 5
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات في حي الحمراء'
    : 'Hello, I want pest control service in Al Hamra district';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href={locale === 'ar' ? '/' : '/en'} className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <Link href={locale === 'ar' ? '/jeddah' : '/en/jeddah'} className="hover:text-primary">{isArabic ? 'مناطق جدة' : 'Jeddah Areas'}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'الحمراء' : 'Al Hamra'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-primary" size={24} />
                <span className="text-primary font-semibold">
                  {isArabic ? 'جدة' : 'Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة حشرات بحي الحمراء' : 'Pest Control in Al Hamra'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة لمكافحة الحشرات في حي الحمراء بجدة. فريق محلي خبير يصل إليك خلال 30 دقيقة.'
                  : 'Specialized pest control service in Al Hamra district Jeddah. Expert local team reaches you within 30 minutes.'
                }
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب فوري' : 'WhatsApp Now'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'اتصل للفحص المجاني' : 'Call for Free Inspection'}
                </a>
              </div>

              {/* Local Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <Clock className="mx-auto text-green-600 mb-2" size={24} />
                  <span className="text-sm font-medium">{isArabic ? '30 دقيقة' : '30 Minutes'}</span>
                  <p className="text-xs text-gray-600">{isArabic ? 'وقت الوصول' : 'Arrival Time'}</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <Shield className="mx-auto text-blue-600 mb-2" size={24} />
                  <span className="text-sm font-medium">{isArabic ? 'ضمان محلي' : 'Local Guarantee'}</span>
                  <p className="text-xs text-gray-600">{isArabic ? '6 أشهر' : '6 Months'}</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <Star className="mx-auto text-yellow-600 mb-2" size={24} />
                  <span className="text-sm font-medium">4.9/5</span>
                  <p className="text-xs text-gray-600">{isArabic ? 'تقييم المنطقة' : 'Area Rating'}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Professional-pest-control.jpg"
                alt={isArabic ? 'مكافحة حشرات حي الحمراء' : 'Al Hamra pest control'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Local Badge */}
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">
                  {isArabic ? 'خدمة محلية' : 'Local Service'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pests Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'الآفات الشائعة في حي الحمراء' : 'Common Pests in Al Hamra District'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {commonPests.map((pest, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-800">{pest}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">
                {isArabic ? 'لماذا هذه الآفات شائعة في الحمراء؟' : 'Why are these pests common in Al Hamra?'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic 
                  ? 'حي الحمراء كونه منطقة حيوية ومكتظة بالسكان، يوفر بيئة مناسبة لتكاثر الحشرات. القرب من المطاعم والأسواق يزيد من احتمالية انتشار الآفات.'
                  : 'Al Hamra district, being a vibrant and densely populated area, provides suitable environment for pest breeding. Proximity to restaurants and markets increases the likelihood of pest spread.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'آراء العملاء في الحمراء' : 'Customer Reviews in Al Hamra'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {isArabic ? 'مقيم في الحمراء' : 'Al Hamra Resident'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Al Hamra Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'حي الحمراء: معلومات وخصائص' : 'Al Hamra District: Information & Characteristics'}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'عن حي الحمراء' : 'About Al Hamra District'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'حي الحمراء من أعرق وأحياء جدة وأكثرها حيوية، يقع في قلب المدينة ويتميز بكونه مركزاً تجارياً وسكنياً مهماً. يضم الحي مزيجاً من المباني التجارية الحديثة، الشقق السكنية، الفلل، بالإضافة إلى العديد من المطاعم والمقاهي والمحلات التجارية.'
                    : 'Al Hamra district is one of Jeddah\'s oldest and most vibrant neighborhoods, located in the heart of the city and distinguished as an important commercial and residential center. The district comprises a mix of modern commercial buildings, residential apartments, villas, along with numerous restaurants, cafes, and shops.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'الكثافة السكانية العالية والنشاط التجاري المستمر يجعل من الحمراء منطقة جذابة للحشرات والقوارض. لهذا، يحتاج سكان وأصحاب الأعمال في الحمراء إلى خدمات مكافحة حشرات متخصصة ومستمرة.'
                    : 'High population density and continuous commercial activity make Al Hamra an attractive area for insects and rodents. Therefore, residents and business owners in Al Hamra need specialized and continuous pest control services.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'لماذا الحمراء بيئة مناسبة للحشرات؟' : 'Why Is Al Hamra Suitable Environment for Pests?'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'كثافة المطاعم والمقاهي التي تجذب الصراصير والفئران' : 'Density of restaurants and cafes attracting cockroaches and mice'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'المباني القديمة مع الشقوق والفتحات المناسبة للاختباء' : 'Old buildings with cracks and openings suitable for hiding'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'القرب من الأسواق ومحلات المواد الغذائية' : 'Proximity to markets and grocery stores'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'شبكات الصرف الصحي القديمة التي تؤوي القوارض' : 'Old sewage networks harboring rodents'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'المساحات الخضراء التي تجذب البعوض والنمل' : 'Green spaces attracting mosquitoes and ants'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'خدماتنا المتخصصة في حي الحمراء' : 'Our Specialized Services in Al Hamra District'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Link href={`/${locale}/services/cockroach-control-jeddah`} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'مكافحة الصراصير' : 'Cockroach Control'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'الصراصير الألمانية شائعة جداً في مباني الحمراء خاصة في المطاعم والشقق القديمة. نستخدم تقنيات جل وطعوم متطورة.'
                    : 'German cockroaches are very common in Al Hamra buildings especially in restaurants and old apartments. We use advanced gel and bait techniques.'
                  }
                </p>
                <span className="text-red-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>

              <Link href={`/${locale}/services/rodents-control-jeddah`} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'مكافحة القوارض' : 'Rodent Control'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'الفئران والجرذان مشكلة خطيرة في المطاعم والمخازن بالحمراء. نوفر حلول شاملة مع محطات طعم آمنة.'
                    : 'Mice and rats are serious problem in Al Hamra restaurants and warehouses. We provide comprehensive solutions with safe bait stations.'
                  }
                </p>
                <span className="text-blue-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>

              <Link href={`/${locale}/services/bed-bugs-treatment-jeddah`} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'علاج بق الفراش' : 'Bed Bug Treatment'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'بق الفراش يزداد انتشاره في الشقق المفروشة بالحمراء. نستخدم علاج حراري وكيميائي متقدم.'
                    : 'Bed bugs are increasingly spreading in furnished apartments in Al Hamra. We use advanced heat and chemical treatment.'
                  }
                </p>
                <span className="text-purple-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'عقود الحماية السنوية للمنشآت التجارية' : 'Annual Protection Contracts for Commercial Facilities'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {isArabic 
                  ? 'نقدم عقود حماية سنوية خاصة للمطاعم والمقاهي والمحلات التجارية في الحمراء. تشمل العقود زيارات دورية شهرية أو أسبوعية، تقارير توثيقية، وشهادات معتمدة للبلدية ووزارة الصحة. مع العقود السنوية توفر حتى 40% مقارنة بالزيارات المنفصلة.'
                  : 'We offer special annual protection contracts for restaurants, cafes, and commercial shops in Al Hamra. Contracts include monthly or weekly periodic visits, documentation reports, and certified documents for municipality and Ministry of Health. With annual contracts save up to 40% compared to separate visits.'
                }
              </p>
              <Link href={`/${locale}/services/annual-contracts`} className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                <span>{isArabic ? 'اطلب عرض سعر للعقود السنوية' : 'Request Annual Contract Quote'}</span>
                <CheckCircle size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'نصائح وقائية لسكان الحمراء' : 'Prevention Tips for Al Hamra Residents'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'للمنازل والشقق' : 'For Homes & Apartments'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'سد الشقوق والفتحات حول الأبواب والنوافذ' : 'Seal cracks and openings around doors and windows'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تخزين الطعام في حاويات محكمة الإغلاق' : 'Store food in airtight containers'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'إصلاح تسربات المياه فوراً - الصراصير تحب الرطوبة' : 'Fix water leaks immediately - cockroaches love moisture'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تنظيف المطبخ يومياً وعدم ترك الأطباق المتسخة' : 'Clean kitchen daily and don\'t leave dirty dishes'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'إخراج القمامة يومياً خاصة في الصيف' : 'Take out trash daily especially in summer'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'للمطاعم والمحلات' : 'For Restaurants & Shops'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'فحص المخزون والبضائع الواردة من الموردين' : 'Inspect inventory and goods from suppliers'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تنظيف المطبخ والمخزن بشكل عميق يومياً' : 'Deep clean kitchen and storage daily'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'عقد صيانة دورية لشفاطات المطبخ - مخبأ للصراصير' : 'Regular maintenance for kitchen exhausts - cockroach hideout'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'استخدام حاويات قمامة محكمة الإغلاق' : 'Use airtight trash containers'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'عقد مكافحة حشرات سنوي مع تقارير شهرية' : 'Annual pest control contract with monthly reports'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'نخدم أيضاً المناطق المجاورة للحمراء' : 'We Also Serve Areas Near Al Hamra'}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {isArabic 
                ? 'فريقنا المتخصص في منطقة الحمراء يقدم خدماته أيضاً للأحياء المجاورة بنفس السرعة والكفاءة'
                : 'Our specialized team in Al Hamra area also provides services to neighboring districts with same speed and efficiency'
              }
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-aziziyah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'العزيزية' : 'Al-Aziziyah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-naseem`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'النسيم' : 'Al-Naseem'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'خدمة فورية في حي الحمراء - نصل خلال 30 دقيقة' : 'Immediate Service in Al Hamra - We Arrive Within 30 Minutes'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'فريق متخصص قريب منك - خبرة محلية بطبيعة الحي والحشرات الشائعة'
              : 'Specialized team near you - Local expertise with district nature and common pests'
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
              {isArabic ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}



