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

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'مكافحة الحشرات في البوادي جدة | خدمة سريعة 24/7 — شركة الأسطورة'
      : 'Pest Control in Al-Bawadi Jeddah | Fast 24/7 Service — Al-Ustora',
    description: isArabic
      ? 'خدمة مكافحة حشرات متخصصة في حي البوادي بجدة. فريق محترف، مواد آمنة، ضمان 6 أشهر. اتصل الآن للحصول على خصم خاص.'
      : 'Specialized pest control service in Al-Bawadi district, Jeddah. Professional team, safe materials, 6 months guarantee. Call now for special discount.',
  };
}

export default function AlBawadiPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const services = isArabic ? [
    'مكافحة الصراصير',
    'القضاء على بق الفراش',
    'مكافحة النمل الأبيض',
    'إبادة القوارض',
    'مكافحة البعوض',
    'تعقيم شامل'
  ] : [
    'Cockroach Control',
    'Bed Bug Elimination',
    'Termite Control',
    'Rodent Extermination',
    'Mosquito Control',
    'Complete Disinfection'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات في حي البوادي'
    : 'Hello, I want pest control service in Al-Bawadi area';

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
            <span className="text-gray-900">{isArabic ? 'البوادي' : 'Al-Bawadi'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin size={20} />
                <span className="font-semibold">{isArabic ? 'حي البوادي، جدة' : 'Al-Bawadi, Jeddah'}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات في البوادي' : 'Pest Control in Al-Bawadi'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة لمكافحة جميع أنواع الحشرات في حي البوادي بأحدث التقنيات ومواد آمنة مع ضمان 6 أشهر.'
                  : 'Specialized service for all types of pest control in Al-Bawadi area with latest technologies and safe materials with 6 months guarantee.'
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
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-gray-600">{isArabic ? 'خدمة دائمة' : 'Always Available'}</div>
                </div>
                <div className="text-center border-x">
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-xs text-gray-600">{isArabic ? 'أشهر ضمان' : 'Months Warranty'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-gray-600">{isArabic ? 'مواد آمنة' : 'Safe Materials'}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Pest-control-Jeddah.jpg"
                alt={isArabic ? 'مكافحة الحشرات في البوادي' : 'Pest control in Al-Bawadi'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Star className="fill-current" size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خصم خاص لحي البوادي' : 'Special Discount for Al-Bawadi'}
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
              {isArabic ? 'خدماتنا في البوادي' : 'Our Services in Al-Bawadi'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isArabic 
                ? 'نوفر حلول شاملة لمكافحة جميع أنواع الحشرات والقوارض'
                : 'We provide comprehensive solutions for all types of insects and rodents'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isArabic ? 'عن حي البوادي' : 'About Al-Bawadi Area'}
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-4">
                  {isArabic 
                    ? 'حي البوادي من الأحياء الحيوية في جدة، ويتميز بموقعه المتميز وكثافته السكانية. نوفر خدمة مكافحة حشرات سريعة وفعالة لجميع سكان الحي.'
                    : 'Al-Bawadi is one of the vibrant neighborhoods in Jeddah, distinguished by its prime location and population density. We provide fast and effective pest control service for all area residents.'
                  }
                </p>
                <p className="text-gray-700 mb-4">
                  {isArabic 
                    ? 'نغطي جميع المباني السكنية والتجارية في المنطقة، مع فريق متواجد على مدار الساعة للاستجابة السريعة.'
                    : 'We cover all residential and commercial buildings in the area, with a team available 24/7 for rapid response.'
                  }
                </p>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'الحشرات الشائعة في البوادي:' : 'Common Pests in Al-Bawadi:'}
                </h3>
                <ul className="space-y-2">
                  {(isArabic ? [
                    'الصراصير الألمانية والأمريكية',
                    'بق الفراش في المباني القديمة',
                    'النمل الأبيض في المناطق الرطبة',
                    'البعوض خاصة في الصيف'
                  ] : [
                    'German and American Cockroaches',
                    'Bed Bugs in older buildings',
                    'Termites in humid areas',
                    'Mosquitoes especially in summer'
                  ]).map((pest, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">{pest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <Image
                src="/images/Professional-pest-control.jpg"
                alt={isArabic ? 'فريق محترف' : 'Professional team'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg mb-6"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-xl shadow-sm text-center">
                  <Home className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? 'خدمة منزلية' : 'Home Service'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isArabic ? 'آمنة للعائلات' : 'Family Safe'}
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-sm text-center">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">
                    {isArabic ? 'خدمة تجارية' : 'Commercial Service'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {isArabic ? 'للشركات والمحلات' : 'For Businesses'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isArabic ? 'آراء عملائنا في البوادي' : 'Client Reviews in Al-Bawadi'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: isArabic ? 'أحمد المالكي' : 'Ahmed Al-Malki',
                text: isArabic 
                  ? 'خدمة ممتازة وسريعة، تخلصت من الصراصير نهائياً'
                  : 'Excellent and fast service, got rid of cockroaches completely',
                rating: 5
              },
              {
                name: isArabic ? 'فاطمة السعيد' : 'Fatima Al-Saeed',
                text: isArabic 
                  ? 'فريق محترف ومواد آمنة للأطفال، أنصح بهم بشدة'
                  : 'Professional team and child-safe materials, highly recommend',
                rating: 5
              },
              {
                name: isArabic ? 'محمد العتيبي' : 'Mohammed Al-Otaibi',
                text: isArabic 
                  ? 'سعر ممتاز وخدمة متابعة رائعة، شكراً لكم'
                  : 'Excellent price and great follow-up service, thank you',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
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
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احصل على خدمة فورية في البوادي' : 'Get Instant Service in Al-Bawadi'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'فريقنا جاهز للوصول إليك في أقل من ساعة'
              : 'Our team is ready to reach you in less than an hour'
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

      {/* About Al-Bawadi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'حي البوادي: منطقة حيوية' : 'Al-Bawadi: Vibrant Area'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'عن حي البوادي' : 'About Al-Bawadi District'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'حي البوادي من الأحياء السكنية الكبيرة في جدة، يتميز بموقعه الاستراتيجي والكثافة السكانية المتوسطة. يضم الحي مزيجاً من المساكن الشعبية والحديثة، مع توفر الخدمات الأساسية والمحلات التجارية.'
                    : 'Al-Bawadi is one of large residential districts in Jeddah, distinguished by strategic location and medium population density. The district includes mix of popular and modern housing, with availability of basic services and commercial shops.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'المنازل والشقق في البوادي تحتاج لبرامج مكافحة حشرات منتظمة. نقدم خدمات سريعة متوفرة على مدار الساعة مع ضمان يصل إلى 6 أشهر.'
                    : 'Houses and apartments in Al-Bawadi need regular pest control programs. We provide fast services available 24/7 with guarantee up to 6 months.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'مشاكل الحشرات الشائعة' : 'Common Insect Problems'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الصراصير في المطابخ والحمامات' : 'Cockroaches in kitchens and bathrooms'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'النمل الأسود في المنازل' : 'Black ants in homes'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'القوارض في الأدوار الأرضية' : 'Rodents on ground floors'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'بق الفراش في الشقق القديمة' : 'Bed bugs in old apartments'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدماتنا في حي البوادي' : 'Our Services in Al-Bawadi'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${locale}/services/cockroach-control-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة الصراصير' : 'Cockroach Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حلول فعالة للمطابخ والحمامات' : 'Effective solutions for kitchens and bathrooms'}</p>
                </Link>
                <Link href={`/${locale}/services/rodents-control-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة القوارض' : 'Rodent Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'إبادة آمنة للفئران والجرذان' : 'Safe elimination of mice and rats'}</p>
                </Link>
                <Link href={`/${locale}/services/bed-bugs-treatment-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'علاج بق الفراش' : 'Bed Bug Treatment'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'معالجة شاملة مع ضمان' : 'Comprehensive treatment with guarantee'}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'لماذا نحن الخيار الأفضل في البوادي؟' : 'Why Are We the Best Choice in Al-Bawadi?'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'خدمة سريعة 24/7' : 'Fast Service 24/7'}</h3>
                <p className="text-gray-700">{isArabic ? 'نستجيب لطلباتك في البوادي خلال ساعات قليلة، مع فريق متاح على مدار الساعة' : 'We respond to your requests in Al-Bawadi within few hours, with team available 24/7'}</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'مواد آمنة معتمدة' : 'Safe Certified Materials'}</h3>
                <p className="text-gray-700">{isArabic ? 'نستخدم مبيدات مرخصة من وزارة الصحة، آمنة للأطفال والحيوانات الأليفة' : 'We use pesticides licensed by Ministry of Health, safe for children and pets'}</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <Star className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'ضمان 6 أشهر' : '6 Months Guarantee'}</h3>
                <p className="text-gray-700">{isArabic ? 'نضمن نتائج خدماتنا لمدة 6 أشهر، مع إعادة المعالجة مجاناً عند الحاجة' : 'We guarantee our service results for 6 months, with free re-treatment when needed'}</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'أسعار تنافسية' : 'Competitive Prices'}</h3>
                <p className="text-gray-700">{isArabic ? 'عروض خاصة لسكان البوادي مع خصومات على العقود السنوية' : 'Special offers for Al-Bawadi residents with discounts on annual contracts'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'كيف نعمل في حي البوادي' : 'How We Work in Al-Bawadi'}
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {isArabic ? 'الاتصال والفحص' : 'Contact & Inspection'}
                    </h3>
                    <p className="text-gray-700">
                      {isArabic 
                        ? 'اتصل بنا عبر الهاتف أو واتساب، سنرسل فريق الفحص خلال ساعات لتحديد نوع الآفة ومستوى الإصابة في منزلك بالبوادي.'
                        : 'Contact us via phone or WhatsApp, we will send inspection team within hours to identify pest type and infestation level in your home in Al-Bawadi.'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {isArabic ? 'خطة العلاج' : 'Treatment Plan'}
                    </h3>
                    <p className="text-gray-700">
                      {isArabic 
                        ? 'نضع خطة علاج مخصصة تناسب حالتك، مع تحديد المواد المستخدمة والمدة الزمنية، وعرض سعر شفاف بدون تكاليف خفية.'
                        : 'We develop customized treatment plan suitable for your case, specifying materials used and time duration, with transparent price quote without hidden costs.'
                      }
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {isArabic ? 'التنفيذ والضمان' : 'Implementation & Guarantee'}
                    </h3>
                    <p className="text-gray-700">
                      {isArabic 
                        ? 'ننفذ المعالجة باستخدام أحدث التقنيات والمواد الآمنة، ونقدم ضمان 6 أشهر مع متابعة دورية للتأكد من القضاء التام على الآفات.'
                        : 'We implement treatment using latest techniques and safe materials, providing 6 months guarantee with periodic follow-up to ensure complete pest elimination.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'نخدم أيضاً المناطق المجاورة' : 'We Also Serve Nearby Areas'}
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/al-hamdaniya`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمدانية' : 'Al-Hamdaniya'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
