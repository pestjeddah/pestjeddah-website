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
  Users,
  Heart,
  BedDouble,
  Baby
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
      ? 'مكافحة الحشرات للمنازل والشقق بجدة | حلول آمنة للعائلات — شركة الأسطورة'
      : 'Pest Control for Homes & Apartments in Jeddah | Safe Family Solutions — Al-Ustora',
    description: isArabic
      ? 'خدمات مكافحة حشرات آمنة للمنازل والشقق والفلل بجدة. مواد غير سامة، آمنة للأطفال والحيوانات الأليفة، مع ضمان 6 أشهر.'
      : 'Safe pest control services for homes, apartments and villas in Jeddah. Non-toxic materials, safe for children and pets, with 6 months guarantee.',
  };
}

export default function ResidentialSectorPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const residentialServices = isArabic ? [
    {
      icon: Home,
      title: 'الشقق السكنية',
      description: 'حلول متخصصة للشقق مع مراعاة المساحات الصغيرة',
      price: 'من 299 ريال'
    },
    {
      icon: BedDouble,
      title: 'الفلل',
      description: 'خدمة شاملة للفلل متعددة الطوابق مع الحدائق',
      price: 'من 599 ريال'
    },
    {
      icon: Users,
      title: 'المجمعات السكنية',
      description: 'برامج خاصة للمجمعات بأسعار تفضيلية',
      price: 'عرض خاص'
    },
    {
      icon: Baby,
      title: 'غرف الأطفال',
      description: 'عناية خاصة بغرف الأطفال بمواد آمنة 100%',
      price: 'من 199 ريال'
    }
  ] : [
    {
      icon: Home,
      title: 'Apartments',
      description: 'Specialized solutions for apartments considering small spaces',
      price: 'From 299 SAR'
    },
    {
      icon: BedDouble,
      title: 'Villas',
      description: 'Comprehensive service for multi-floor villas with gardens',
      price: 'From 599 SAR'
    },
    {
      icon: Users,
      title: 'Residential Complexes',
      description: 'Special programs for complexes at preferential prices',
      price: 'Special Offer'
    },
    {
      icon: Baby,
      title: 'Children\'s Rooms',
      description: 'Special care for children\'s rooms with 100% safe materials',
      price: 'From 199 SAR'
    }
  ];

  const safetyFeatures = isArabic ? [
    'مواد معتمدة من وزارة الصحة',
    'آمنة 100% للأطفال والحيوانات الأليفة',
    'بدون روائح كريهة',
    'لا تترك بقع أو آثار',
    'فعالة ضد جميع أنواع الحشرات',
    'ضمان 6 أشهر شامل'
  ] : [
    'Ministry of Health approved materials',
    '100% safe for children and pets',
    'No bad odors',
    'Leaves no stains or traces',
    'Effective against all types of insects',
    'Comprehensive 6 months guarantee'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات آمنة لمنزلي'
    : 'Hello, I want safe pest control service for my home';

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
            <Link href={locale === 'ar' ? '/sectors' : '/en/sectors'} className="hover:text-primary">
              {isArabic ? 'القطاعات' : 'Sectors'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'القطاع السكني' : 'Residential Sector'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة حشرات آمنة للمنازل' : 'Safe Home Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمات مكافحة حشرات متخصصة للمنازل والشقق والفلل. مواد آمنة 100% للعائلات مع ضمان فعالية طويلة المدى.'
                  : 'Specialized pest control services for homes, apartments and villas. 100% family-safe materials with long-term effectiveness guarantee.'
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
                  {isArabic ? 'اتصل بنا' : 'Call Us'}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'آمان العائلة' : 'Family Safe'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Heart size={20} />
                  <span className="text-sm">{isArabic ? 'مواد طبيعية' : 'Natural Materials'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان 6 أشهر' : '6 Months Guarantee'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Residential-pest-control.jpg"
                alt={isArabic ? 'مكافحة الحشرات للمنازل' : 'Residential pest control'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'آمن للعائلات' : 'Family Safe'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'خدماتنا السكنية' : 'Our Residential Services'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border hover:shadow-lg transition-all">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="text-primary font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'ضمانات السلامة' : 'Safety Guarantees'}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'المشاكل الشائعة في المنازل السكنية' : 'Common Problems in Residential Homes'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'الصراصير في المطابخ والحمامات' : 'Cockroaches in Kitchens & Bathrooms'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'الصراصير من أكثر المشاكل شيوعاً في المنازل، خاصة في المطابخ والحمامات. تنجذب للرطوبة وبقايا الطعام، وتتكاثر بسرعة مذهلة. صرصور واحد قد يتحول لمئات خلال أشهر قليلة إذا لم يتم التعامل معه.'
                    : 'Cockroaches are among the most common problems in homes, especially in kitchens and bathrooms. Attracted to moisture and food remnants, they reproduce amazingly fast. One cockroach can turn into hundreds within few months if not dealt with.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'نستخدم تقنيات متقدمة لمكافحة الصراصير آمنة للعائلة، مع طعوم خاصة ورش مستهدف في الأماكن الحساسة. الخدمة تتم بسرية تامة مع ضمان 6 أشهر.'
                    : 'We use advanced cockroach control techniques safe for families, with special baits and targeted spraying in sensitive areas. Service is completely confidential with 6-month guarantee.'
                  }
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'النمل الأبيض وخطورته على المباني' : 'Termites and Their Danger to Buildings'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'النمل الأبيض يهاجم الأخشاب بصمت دون أن تلاحظ، حتى يصبح الضرر كبيراً. يمكنه تدمير الأبواب، النوافذ، الأثاث، وحتى الهيكل الخشبي للمنزل. المشكلة أنك لا ترى الضرر حتى يصبح متأخراً.'
                    : 'Termites attack wood silently without you noticing, until damage becomes significant. They can destroy doors, windows, furniture, and even the wooden structure of the house. The problem is you don\'t see the damage until it\'s too late.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'نوفر فحصاً مجانياً للنمل الأبيض مع أنظمة حماية متقدمة وضمان طويل المدى. الكشف المبكر ينقذ منزلك من أضرار بآلاف الريالات.'
                    : 'We provide free termite inspection with advanced protection systems and long-term guarantee. Early detection saves your home from thousands of riyals in damage.'
                  }
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مشاكل أخرى شائعة في منازل جدة' : 'Other Common Problems in Jeddah Homes'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Home className="text-purple-600" />
                    {isArabic ? 'النمل في المطابخ' : 'Ants in Kitchens'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {isArabic 
                      ? 'خطوط النمل المستمرة نحو السكر والطعام. نقدم حلول جذرية تقضي على المستعمرة كاملة.'
                      : 'Continuous ant trails toward sugar and food. We provide root solutions eliminating entire colony.'
                    }
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BedDouble className="text-pink-600" />
                    {isArabic ? 'بق الفراش' : 'Bed Bugs'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {isArabic 
                      ? 'لدغات مؤلمة وأرق مستمر. علاج حراري متقدم بدون مواد كيميائية ضارة.'
                      : 'Painful bites and continuous insomnia. Advanced heat treatment without harmful chemicals.'
                    }
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="text-blue-600" />
                    {isArabic ? 'البعوض والذباب' : 'Mosquitoes & Flies'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {isArabic 
                      ? 'إزعاج صيفي مستمر خاصة بالقرب من الحدائق. رش دوري وبرامج وقائية موسمية.'
                      : 'Continuous summer nuisance especially near gardens. Regular spraying and seasonal prevention programs.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'نخدم جميع أحياء جدة السكنية' : 'We Serve All Jeddah Residential Neighborhoods'}
            </h2>
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-naseem`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'النسيم' : 'Al-Naseem'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-aziziyah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'العزيزية' : 'Al-Aziziyah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-shati`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الشاطئ' : 'Al-Shati'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/obhur-north`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'أبحر الشمالية' : 'Obhur North'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-marjan`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Home className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'المرجان' : 'Al-Marjan'}</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {isArabic ? 'لماذا نحن الخيار الأفضل للمنازل في جدة؟' : 'Why Are We the Best Choice for Homes in Jeddah?'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {isArabic 
                  ? 'نفهم أن منزلك هو مكانك الآمن وملاذك مع عائلتك. لهذا نوفر خدمات مكافحة حشرات بأعلى معايير السلامة، مع مراعاة خاصة للأطفال والحيوانات الأليفة. فريقنا مدرب على التعامل مع المنازل بسرية واحترام تام.'
                  : 'We understand your home is your safe place and refuge with your family. That\'s why we provide pest control services with highest safety standards, with special consideration for children and pets. Our team is trained to handle homes with confidentiality and complete respect.'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${locale}/services/rodents-control-jeddah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة القوارض' : 'Rodent Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حلول آمنة للتخلص من الفئران في المنازل' : 'Safe solutions to eliminate mice in homes'}</p>
                </Link>
                <Link href={`/${locale}/services/bed-bugs-treatment-jeddah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'علاج بق الفراش' : 'Bed Bug Treatment'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'علاج حراري متقدم بدون كيماويات' : 'Advanced heat treatment without chemicals'}</p>
                </Link>
                <Link href={`/${locale}/services/annual-contracts`} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'عقود سنوية' : 'Annual Contracts'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'وفر حتى 40% مع عقد حماية سنوي' : 'Save up to 40% with annual protection contract'}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمِ عائلتك بأمان تام الآن' : 'Protect Your Family with Complete Safety Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمة مكافحة حشرات آمنة ومضمونة لمنزلك - مواد آمنة للأطفال والحيوانات الأليفة'
              : 'Safe and guaranteed pest control service for your home - Safe materials for children and pets'
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
              {isArabic ? 'واتساب فوري' : 'Instant WhatsApp'}
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
    </>
  );
}
