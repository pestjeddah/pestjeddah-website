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
  Gem,
  Shield,
  Crown
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
      ? 'مكافحة الحشرات بحي المرجان جدة | خدمة راقية ومميزة — شركة الأسطورة'
      : 'Pest Control in Al-Marjan District Jeddah | Premium & Elite Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات راقية في حي المرجان بجدة. خدمة مميزة، فريق نخبة، تقنيات متطورة، ضمان ذهبي، رضا العملاء المطلق.'
      : 'Premium pest control company in Al-Marjan district, Jeddah. Elite service, expert team, advanced techniques, golden guarantee, absolute customer satisfaction.',
    keywords: isArabic 
      ? ['مكافحة حشرات المرجان', 'خدمة راقية مكافحة حشرات', 'شركة مكافحة حشرات المرجان', 'خدمة مميزة المرجان']
      : ['pest control al-marjan', 'premium pest control jeddah', 'elite exterminator marjan', 'luxury pest control service'],
  };
}

export default function AlMarjanPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const eliteFeatures = isArabic ? [
    {
      title: 'خدمة النخبة',
      description: 'فريق من النخبة مدرب على أعلى المستويات',
      icon: Crown
    },
    {
      title: 'تقنيات متطورة',
      description: 'أحدث التقنيات والمعدات المتطورة',
      icon: Gem
    },
    {
      title: 'ضمان ذهبي',
      description: 'ضمان ذهبي وخدمة متابعة مجانية',
      icon: Shield
    }
  ] : [
    {
      title: 'Elite Service',
      description: 'Expert team trained to highest standards',
      icon: Crown
    },
    {
      title: 'Advanced Technology',
      description: 'Latest techniques and sophisticated equipment',
      icon: Gem
    },
    {
      title: 'Golden Guarantee',
      description: 'Golden guarantee and free follow-up service',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة النخبة لمكافحة الحشرات في حي المرجان بجدة'
    : 'Hello, I want elite pest control service in Al-Marjan district, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'حي المرجان' : 'Al-Marjan District'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-amber-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'حي المرجان، جدة' : 'Al-Marjan District, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدمة النخبة لمكافحة الحشرات' : 'Elite Pest Control Service'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة راقية من النخبة لمكافحة الحشرات في حي المرجان. تقنيات متطورة، فريق خبير، وضمان ذهبي لراحة البال المطلقة.'
                  : 'Premium elite pest control service in Al-Marjan district. Advanced techniques, expert team, and golden guarantee for absolute peace of mind.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-amber-600">
                  <Crown size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة النخبة' : 'Elite Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <Gem size={20} />
                  <span className="text-sm">{isArabic ? 'تقنيات متطورة' : 'Advanced Technology'}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة فورية' : 'Instant Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان ذهبي' : 'Golden Guarantee'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-amber-600 hover:bg-amber-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب النخبة' : 'Elite WhatsApp'}
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
                src="/images/Best-pest-control-company.jpg"
                alt={isArabic ? 'خدمة النخبة مكافحة الحشرات في المرجان جدة' : 'Elite pest control service in Al-Marjan Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Elite Badge */}
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Crown size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة النخبة' : 'Elite Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات خدمة النخبة' : 'Elite Service Features'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'تجربة استثنائية وخدمة من النخبة تليق بمكانة حي المرجان المرموقة'
                : 'Exceptional experience and elite service worthy of Al-Marjan\'s prestigious status'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eliteFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <feature.icon className="w-16 h-16 text-amber-600 mx-auto mb-4" />
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'خدمة النخبة في انتظارك' : 'Elite Service Awaits You'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احصل على خدمة النخبة المخصصة لسكان حي المرجان المميزين'
              : 'Get elite service customized for Al-Marjan\'s distinguished residents'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'حجز النخبة' : 'Elite Booking'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'خط النخبة' : 'Elite Line'}
            </a>
          </div>
        </div>
      </section>

      {/* About Al-Marjan */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'المرجان: التميز والفخامة' : 'Al-Marjan: Excellence & Luxury'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'عن حي المرجان' : 'About Al-Marjan District'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'حي المرجان من أرقى وأحدث الأحياء في جدة، يتميز بالتخطيط العمراني المتقدم والفيلات الفاخرة. المنطقة تضم قصوراً واسعة، حدائق خاصة، ومرافق من الطراز العالمي.'
                    : 'Al-Marjan is one of most upscale and modern districts in Jeddah, distinguished by advanced urban planning and luxury villas. The area includes spacious palaces, private gardens, and world-class facilities.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'سكان المرجان يستحقون خدمات مكافحة حشرات من مستوى النخبة. نقدم برامج مخصصة تحافظ على خصوصيتك وتحمي استثمارك العقاري بمواد آمنة وعالية الجودة.'
                    : 'Al-Marjan residents deserve elite-level pest control services. We provide customized programs that maintain your privacy and protect your real estate investment with safe and high-quality materials.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'خدماتنا النخبة' : 'Our Elite Services'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'فحص دوري للقصور والفيلات الكبرى' : 'Periodic inspection for palaces and large villas'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'حماية الحدائق الخاصة والمساحات الواسعة' : 'Protection for private gardens and vast spaces'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'مواد آمنة للأطفال والحيوانات الأليفة' : 'Safe materials for children and pets'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-amber-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'مواعيد مرنة تحترم خصوصيتك' : 'Flexible appointments respecting your privacy'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدماتنا المتخصصة في المرجان' : 'Our Specialized Services in Al-Marjan'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${locale}/services/annual-contracts`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'عقود النخبة السنوية' : 'Elite Annual Contracts'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'صيانة شاملة للقصور والفيلات' : 'Comprehensive maintenance for palaces and villas'}</p>
                </Link>
                <Link href={`/${locale}/services/termites-control-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'حماية الأخشاب الفاخرة' : 'Luxury Wood Protection'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'معالجة النمل الأبيض للأثاث الراقي' : 'Termite treatment for upscale furniture'}</p>
                </Link>
                <Link href={`/${locale}/sectors/residential`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'برامج وقائية' : 'Prevention Programs'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'خطط مخصصة للمنازل الفاخرة' : 'Customized plans for luxury homes'}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'لماذا خدمة النخبة للمرجان؟' : 'Why Elite Service for Al-Marjan?'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <Crown className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'خصوصية مطلقة' : 'Complete Privacy'}</h3>
                <p className="text-gray-700">{isArabic ? 'فريق محدد من الفنيين المدربين لخدمة المنازل الفاخرة مع احترام كامل للخصوصية' : 'Specific team of trained technicians serving luxury homes with full privacy respect'}</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <Gem className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'مواد فاخرة وآمنة' : 'Premium & Safe Materials'}</h3>
                <p className="text-gray-700">{isArabic ? 'استخدام أفضل المواد العالمية الآمنة للأطفال والحيوانات الأليفة مع عطور طبيعية' : 'Using best international materials safe for children and pets with natural fragrances'}</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'حماية طويلة الأمد' : 'Long-Term Protection'}</h3>
                <p className="text-gray-700">{isArabic ? 'ضمان ممتد يصل لسنة كاملة مع فحوصات ربع سنوية مجانية' : 'Extended warranty up to one year with free quarterly inspections'}</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <CheckCircle className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'خدمة 24/7' : '24/7 Service'}</h3>
                <p className="text-gray-700">{isArabic ? 'استجابة فورية لطلبات النخبة في أي وقت على مدار الساعة' : 'Immediate response to elite requests anytime round the clock'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Luxury Homes Need Special Care */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'المنازل الفاخرة تحتاج عناية خاصة' : 'Luxury Homes Need Special Care'}
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isArabic ? 'الأثاث والتجهيزات الفاخرة' : 'Luxury Furniture & Fixtures'}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic 
                      ? 'القصور والفيلات في المرجان تحتوي على أثاث فاخر وأخشاب نادرة تحتاج لحماية خاصة من النمل الأبيض. نستخدم مواد متطورة لا تؤثر على الأخشاب الثمينة أو اللمسات النهائية.'
                      : 'Palaces and villas in Al-Marjan contain luxury furniture and rare woods needing special protection from termites. We use advanced materials that don\'t affect precious woods or finishes.'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isArabic ? 'الحدائق والمساحات الخارجية' : 'Gardens & Outdoor Spaces'}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic 
                      ? 'الحدائق الواسعة والمساحات الخارجية تتطلب برامج مكافحة شاملة للبعوض والحشرات الطائرة. نستخدم تقنيات متقدمة تحمي المساحات الكبيرة دون التأثير على النباتات أو جودة الهواء.'
                      : 'Vast gardens and outdoor spaces require comprehensive mosquito and flying insect control programs. We use advanced techniques protecting large spaces without affecting plants or air quality.'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isArabic ? 'الخصوصية والسرية' : 'Privacy & Confidentiality'}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic 
                      ? 'نفهم أهمية الخصوصية لسكان المرجان. فريقنا مدرب على احترام خصوصية العملاء، والعمل بصمت وكفاءة، مع التزام تام بالسرية المهنية.'
                      : 'We understand importance of privacy for Al-Marjan residents. Our team is trained to respect client privacy, work quietly and efficiently, with complete professional confidentiality.'
                    }
                  </p>
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
              {isArabic ? 'نخدم أيضاً الأحياء الراقية المجاورة' : 'We Also Serve Nearby Upscale Districts'}
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/obhur-north`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'أبحر الشمالية' : 'Obhur North'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-naseem`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'النسيم' : 'Al-Naseem'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
