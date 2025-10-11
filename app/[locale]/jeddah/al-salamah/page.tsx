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
  Home,
  Shield,
  Users
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
      ? 'مكافحة الحشرات بحي السلامة جدة | خدمة موثوقة وآمنة — شركة الأسطورة'
      : 'Pest Control in Al-Salamah District Jeddah | Reliable & Safe Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات محترفة في حي السلامة بجدة. حلول آمنة للعائلات، خدمة سريعة، فريق مدرب، أسعار عادلة مع ضمان شامل.'
      : 'Professional pest control company in Al-Salamah district, Jeddah. Safe solutions for families, fast service, trained team, fair prices with comprehensive guarantee.',
    keywords: isArabic 
      ? ['مكافحة حشرات السلامة', 'رش مبيدات السلامة جدة', 'شركة مكافحة حشرات السلامة', 'مكافحة آمنة للعائلات']
      : ['pest control al-salamah', 'exterminator al-salamah jeddah', 'family safe pest control', 'pest control company salamah'],
  };
}

export default function AlSalamahPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const familyFeatures = isArabic ? [
    {
      title: 'آمان الأطفال',
      description: 'مواد غير سامة وآمنة للأطفال',
      icon: Users
    },
    {
      title: 'حماية المنزل',
      description: 'حلول شاملة لجميع أنحاء المنزل',
      icon: Home
    },
    {
      title: 'ضمان الجودة',
      description: 'نتائج مضمونة وخدمة متابعة',
      icon: Shield
    }
  ] : [
    {
      title: 'Child Safety',
      description: 'Non-toxic and child-safe materials',
      icon: Users
    },
    {
      title: 'Home Protection',
      description: 'Comprehensive solutions for entire home',
      icon: Home
    },
    {
      title: 'Quality Guarantee',
      description: 'Guaranteed results and follow-up service',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات الآمنة في حي السلامة بجدة'
    : 'Hello, I want safe pest control service in Al-Salamah district, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'حي السلامة' : 'Al-Salamah District'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'حي السلامة، جدة' : 'Al-Salamah District, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة حشرات آمنة وموثوقة' : 'Safe & Reliable Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة مكافحة حشرات آمنة تماماً للعائلات في حي السلامة. مواد معتمدة، فريق محترف، وحلول فعالة مع الحفاظ على سلامة أطفالكم.'
                  : 'Completely safe pest control service for families in Al-Salamah district. Certified materials, professional team, and effective solutions while maintaining your children\'s safety.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-green-600">
                  <Users size={20} />
                  <span className="text-sm">{isArabic ? 'آمان الأطفال' : 'Child Safe'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'مواد معتمدة' : 'Certified Materials'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان شامل' : 'Full Guarantee'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Safe-pest-control.jpg"
                alt={isArabic ? 'مكافحة الحشرات الآمنة في السلامة جدة' : 'Safe pest control in Al-Salamah Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Safety Badge */}
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'آمان تام' : 'Completely Safe'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Safety Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'أمان العائلة أولويتنا' : 'Family Safety is Our Priority'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'نحرص على استخدام أفضل المواد الآمنة والتقنيات المتطورة'
                : 'We ensure using the best safe materials and advanced techniques'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {familyFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <feature.icon className="w-16 h-16 text-green-600 mx-auto mb-4" />
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

      {/* About Al-Salamah Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'حي السلامة: حي سكني راقي ومميز' : 'Al-Salamah: Distinguished Residential District'}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'عن حي السلامة' : 'About Al-Salamah District'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'حي السلامة من الأحياء السكنية الراقية في شمال جدة، يتميز بطابع عائلي هادئ مع مستوى معيشة مرتفع. يضم الحي فلل وشقق سكنية فاخرة، مدارس دولية، عيادات طبية، ومرافق خدمية متكاملة.'
                    : 'Al-Salamah is one of the upscale residential districts in north Jeddah, characterized by a quiet family atmosphere with high living standards. The district comprises villas and luxury residential apartments, international schools, medical clinics, and integrated service facilities.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'يعيش في السلامة عائلات تهتم بسلامة أطفالها وبيئة منزلها بشكل كبير. لهذا، نوفر خدمات مكافحة حشرات بأعلى معايير الأمان مع استخدام مواد معتمدة من وزارة الصحة وآمنة تماماً للأطفال والحيوانات الأليفة.'
                    : 'Al-Salamah is home to families who care greatly about their children\'s safety and home environment. Therefore, we provide pest control services with highest safety standards using Ministry of Health approved materials completely safe for children and pets.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'التحديات الشائعة في السلامة' : 'Common Challenges in Al-Salamah'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'النمل الأسود في الحدائق المنزلية والمساحات الخضراء' : 'Black ants in home gardens and green spaces'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الصراصير في المطابخ خاصة في الأدوار الأرضية' : 'Cockroaches in kitchens especially on ground floors'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'البعوض في الصيف بسبب كثرة الحدائق' : 'Mosquitoes in summer due to numerous gardens'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'العناكب المنزلية في زوايا الفلل والمخازن' : 'House spiders in villa corners and storage rooms'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الناموس خاصة بالقرب من نظام الري في الحدائق' : 'Gnats especially near irrigation systems in gardens'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'خدماتنا الآمنة لسكان السلامة' : 'Our Safe Services for Al-Salamah Residents'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Link href={`/${locale}/services/ants-control-jeddah`} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'مكافحة النمل' : 'Ant Control'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'النمل الأسود شائع جداً في حدائق السلامة. نستخدم طعوم جل آمنة تقضي على المستعمرة كاملة دون خطر على الأطفال.'
                    : 'Black ants are very common in Al-Salamah gardens. We use safe gel baits that eliminate entire colony without danger to children.'
                  }
                </p>
                <span className="text-green-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>

              <Link href={`/${locale}/services/mosquitoes-flies-control-jeddah`} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'مكافحة البعوض' : 'Mosquito Control'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'برنامج موسمي خاص للبعوض باستخدام رش آمن وفعال. مثالي للعائلات مع أطفال صغار في السلامة.'
                    : 'Special seasonal program for mosquitoes using safe and effective spraying. Ideal for families with young children in Al-Salamah.'
                  }
                </p>
                <span className="text-blue-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>

              <Link href={`/${locale}/sectors/residential`} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Home size={24} className="text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'حماية المنازل السكنية' : 'Residential Home Protection'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'خدمات شاملة للفلل والشقق مع تركيز خاص على أمان الأطفال والحيوانات الأليفة.'
                    : 'Comprehensive services for villas and apartments with special focus on children and pet safety.'
                  }
                </p>
                <span className="text-purple-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'لماذا نحن الخيار الأفضل للعائلات في السلامة؟' : 'Why Are We the Best Choice for Families in Al-Salamah?'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {isArabic 
                  ? 'نفهم أن سكان السلامة يبحثون عن خدمة ليست فعالة فقط، بل آمنة تماماً لأطفالهم وعائلاتهم. نستخدم فقط المواد المعتمدة من وزارة الصحة السعودية، مع فريق مدرب على التعامل مع المنازل العائلية. نوفر شهادات سلامة معتمدة وضمان 6 أشهر على جميع خدماتنا.'
                  : 'We understand Al-Salamah residents seek service that is not only effective, but completely safe for their children and families. We only use materials approved by Saudi Ministry of Health, with team trained to handle family homes. We provide certified safety documents and 6-month guarantee on all our services.'
                }
              </p>
              <Link href={`/${locale}/services/annual-contracts`} className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                <span>{isArabic ? 'عقود سنوية للعائلات' : 'Annual Family Contracts'}</span>
                <CheckCircle size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips for Families */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'نصائح وقائية للعائلات في السلامة' : 'Prevention Tips for Families in Al-Salamah'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'للحدائق المنزلية' : 'For Home Gardens'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تقليم الأشجار والشجيرات بانتظام لمنع البعوض' : 'Trim trees and shrubs regularly to prevent mosquitoes'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تفريغ المياه الراكدة في أواني النباتات أسبوعياً' : 'Empty standing water in plant pots weekly'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'فحص نظام الري - التسريبات تجذب الصراصير' : 'Check irrigation system - leaks attract cockroaches'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'إبعاد سلات القمامة عن الباب الخلفي' : 'Keep trash bins away from back door'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تنظيف منطقة الشواء بعد كل استخدام' : 'Clean BBQ area after each use'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'داخل المنزل' : 'Inside the Home'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تنظيف غرف الأطفال من فتات الطعام يومياً' : 'Clean children\'s rooms from food crumbs daily'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تخزين ألعاب الأطفال في حاويات محكمة' : 'Store children\'s toys in airtight containers'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'فحص الخزائن والمخازن كل أسبوعين' : 'Check closets and storage every two weeks'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تهوية المنزل يومياً - الرطوبة تجذب الحشرات' : 'Ventilate home daily - moisture attracts insects'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'فحص دوري لغرف الخدم والمخازن الخلفية' : 'Regular inspection of maid rooms and back storage'}</span>
                  </li>
                </ul>
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
              {isArabic ? 'نخدم أيضاً المناطق المجاورة للسلامة' : 'We Also Serve Areas Near Al-Salamah'}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {isArabic 
                ? 'فريقنا المتخصص يقدم نفس مستوى الخدمة الآمنة والاحترافية للأحياء المجاورة'
                : 'Our specialized team provides same level of safe and professional service to neighboring districts'
              }
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-naseem`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'النسيم' : 'Al-Naseem'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-aziziyah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'العزيزية' : 'Al-Aziziyah'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمي عائلتك بأمان تام في السلامة' : 'Protect Your Family with Complete Safety in Al-Salamah'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمة مكافحة حشرات آمنة ومضمونة - مواد معتمدة من وزارة الصحة'
              : 'Safe and guaranteed pest control service - Materials approved by Ministry of Health'
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
              {isArabic ? 'احجز الآن' : 'Book Now'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {isArabic ? 'اتصال مباشر' : 'Direct Call'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
