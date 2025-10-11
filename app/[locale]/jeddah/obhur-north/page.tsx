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
  Waves,
  TreePine,
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
      ? 'مكافحة الحشرات بأبحر الشمالية جدة | خدمة ساحلية متطورة — شركة الأسطورة'
      : 'Pest Control in Obhur North Jeddah | Advanced Coastal Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات متخصصة في أبحر الشمالية بجدة. خبرة ساحلية، حلول بيئية، مقاومة للرطوبة، خدمة المنتجعات والشاليهات.'
      : 'Specialized pest control company in Obhur North, Jeddah. Coastal expertise, environmental solutions, humidity resistance, resort and chalet service.',
    keywords: isArabic 
      ? ['مكافحة حشرات أبحر الشمالية', 'رش مبيدات أبحر الشمالية', 'مكافحة حشرات المنتجعات', 'شركة مكافحة حشرات أبحر']
      : ['pest control obhur north', 'coastal pest control jeddah', 'resort pest control', 'chalet pest control obhur'],
  };
}

export default function ObhurNorthPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const coastalAdvantages = isArabic ? [
    {
      title: 'خبرة ساحلية',
      description: 'متخصصون في البيئات الساحلية والمنتجعات',
      icon: Waves
    },
    {
      title: 'حلول بيئية',
      description: 'مواد صديقة للبيئة البحرية والطبيعة',
      icon: TreePine
    },
    {
      title: 'حماية شاملة',
      description: 'حماية الشاليهات والمنتجعات من جميع الآفات',
      icon: Shield
    }
  ] : [
    {
      title: 'Coastal Expertise',
      description: 'Specialists in coastal environments and resorts',
      icon: Waves
    },
    {
      title: 'Environmental Solutions',
      description: 'Eco-friendly materials for marine and natural environment',
      icon: TreePine
    },
    {
      title: 'Complete Protection',
      description: 'Protect chalets and resorts from all pests',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات الساحلية في أبحر الشمالية بجدة'
    : 'Hello, I want coastal pest control service in Obhur North, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'أبحر الشمالية' : 'Obhur North'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-cyan-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'أبحر الشمالية، جدة' : 'Obhur North, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات الساحلية المتطورة' : 'Advanced Coastal Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة لمكافحة حشرات البيئات الساحلية في أبحر الشمالية. حلول بيئية آمنة للمنتجعات والشاليهات مع حماية طويلة المدى.'
                  : 'Specialized coastal environment pest control service in Obhur North. Safe environmental solutions for resorts and chalets with long-term protection.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-cyan-600">
                  <Waves size={20} />
                  <span className="text-sm">{isArabic ? 'خبرة ساحلية' : 'Coastal Expertise'}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-600">
                  <TreePine size={20} />
                  <span className="text-sm">{isArabic ? 'صديق للبيئة' : 'Eco-Friendly'}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة سريعة' : 'Fast Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'حماية شاملة' : 'Complete Protection'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-cyan-600 hover:bg-cyan-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب ساحلي' : 'Coastal WhatsApp'}
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
                src="/images/Eco-friendly-pest-control.jpg"
                alt={isArabic ? 'مكافحة الحشرات الساحلية في أبحر الشمالية جدة' : 'Coastal pest control in Obhur North Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Coastal Badge */}
              <div className="absolute top-4 left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Waves size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة ساحلية' : 'Coastal Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات الخدمة الساحلية' : 'Coastal Service Advantages'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'خدمة متخصصة تناسب البيئة الساحلية الفريدة لأبحر الشمالية'
                : 'Specialized service suitable for Obhur North\'s unique coastal environment'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coastalAdvantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <advantage.icon className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'حماية ساحلية متطورة' : 'Advanced Coastal Protection'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احمي منتجعك أو شاليهك بحلول بيئية آمنة ومتطورة'
              : 'Protect your resort or chalet with safe and advanced environmental solutions'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'واتساب مباشر' : 'Direct WhatsApp'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'اتصال ساحلي' : 'Coastal Call'}
            </a>
          </div>
        </div>
      </section>

      {/* About Obhur North */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'أبحر الشمالية: وجهة ساحلية راقية' : 'Obhur North: Upscale Coastal Destination'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'عن منطقة أبحر الشمالية' : 'About Obhur North Area'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'أبحر الشمالية من أرقى المناطق الساحلية في جدة، تتميز بشواطئها الخلابة ومنتجعاتها الفاخرة. المنطقة تضم فيلات ساحلية، شاليهات راقية، ومنتجعات سياحية متعددة على البحر الأحمر.'
                    : 'Obhur North is one of most upscale coastal areas in Jeddah, distinguished by stunning beaches and luxury resorts. The area includes coastal villas, upscale chalets, and multiple tourist resorts on the Red Sea.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'البيئة الساحلية تتطلب خبرة خاصة في مكافحة الحشرات بسبب الرطوبة العالية والملوحة. نقدم حلولاً متخصصة مقاومة للبيئة البحرية تحافظ على جمال منتجعك وراحة ضيوفك.'
                    : 'Coastal environment requires special pest control expertise due to high humidity and salinity. We provide specialized marine-resistant solutions that maintain beauty of your resort and comfort of your guests.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'التحديات الساحلية في أبحر' : 'Coastal Challenges in Obhur'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'البعوض والذباب بسبب الرطوبة العالية' : 'Mosquitoes and flies due to high humidity'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'النمل الأبيض في المباني الساحلية' : 'Termites in coastal buildings'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الصراصير في المطابخ والمطاعم' : 'Cockroaches in kitchens and restaurants'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الحشرات الزاحفة حول المسابح' : 'Crawling insects around pools'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدماتنا المتخصصة في أبحر الشمالية' : 'Our Specialized Services in Obhur North'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${locale}/services/mosquitoes-flies-control-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة البعوض' : 'Mosquito Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حلول فعالة للمناطق الساحلية' : 'Effective solutions for coastal areas'}</p>
                </Link>
                <Link href={`/${locale}/services/termites-control-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'معالجة النمل الأبيض' : 'Termite Treatment'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حماية المباني من الرطوبة والملوحة' : 'Protect buildings from humidity and salinity'}</p>
                </Link>
                <Link href={`/${locale}/services/annual-contracts`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'عقود المنتجعات' : 'Resort Contracts'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'برامج صيانة دورية للمنتجعات السياحية' : 'Periodic maintenance programs for tourist resorts'}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Prevention Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'نصائح الوقاية للبيئة الساحلية' : 'Prevention Tips for Coastal Environment'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-50 p-6 rounded-lg">
                <Waves className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'إدارة الرطوبة' : 'Humidity Management'}</h3>
                <p className="text-gray-700">{isArabic ? 'استخدام أجهزة التجفيف وتحسين التهوية لتقليل الرطوبة التي تجذب الحشرات' : 'Use dehumidifiers and improve ventilation to reduce humidity that attracts insects'}</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'حماية المباني' : 'Building Protection'}</h3>
                <p className="text-gray-700">{isArabic ? 'استخدام مواد بناء مقاومة للملوحة والرطوبة لمنع تسلل الحشرات' : 'Use building materials resistant to salinity and humidity to prevent insect infiltration'}</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <TreePine className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'صيانة الحدائق' : 'Garden Maintenance'}</h3>
                <p className="text-gray-700">{isArabic ? 'تقليم النباتات وإزالة المياه الراكدة حول الشاليهات' : 'Trim plants and remove stagnant water around chalets'}</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg">
                <CheckCircle className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">{isArabic ? 'فحص دوري' : 'Periodic Inspection'}</h3>
                <p className="text-gray-700">{isArabic ? 'فحص ربع سنوي للمنتجعات والشاليهات خاصة قبل موسم الصيف' : 'Quarterly inspection for resorts and chalets especially before summer season'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Obhur Needs Special Care */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'لماذا تحتاج أبحر لعناية خاصة؟' : 'Why Does Obhur Need Special Care?'}
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isArabic ? '1. الرطوبة العالية' : '1. High Humidity'}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic 
                      ? 'القرب من البحر يزيد الرطوبة بشكل كبير، مما يخلق بيئة مثالية لتكاثر البعوض والحشرات الطائرة. نستخدم حلولاً خاصة مقاومة للرطوبة تدوم لفترات أطول.'
                      : 'Proximity to sea significantly increases humidity, creating ideal environment for mosquito and flying insect breeding. We use special humidity-resistant solutions that last longer.'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isArabic ? '2. الملوحة البحرية' : '2. Marine Salinity'}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic 
                      ? 'الهواء المالح يؤثر على فعالية المبيدات التقليدية. نستخدم تركيبات خاصة مصممة للبيئات البحرية لضمان فعالية طويلة المدى.'
                      : 'Salty air affects effectiveness of traditional pesticides. We use special formulations designed for marine environments to ensure long-term effectiveness.'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {isArabic ? '3. طبيعة المنتجعات السياحية' : '3. Nature of Tourist Resorts'}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic 
                      ? 'المنتجعات تستقبل ضيوفاً على مدار العام، لذا نقدم خدمات مرنة تتم في أوقات لا تزعج النزلاء، مع استخدام مواد آمنة وعديمة الرائحة.'
                      : 'Resorts receive guests year-round, so we provide flexible services at times that don\'t disturb guests, using safe and odorless materials.'
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
              {isArabic ? 'نخدم أيضاً المناطق الساحلية المجاورة' : 'We Also Serve Nearby Coastal Areas'}
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/al-shati`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الشاطئ' : 'Al-Shati'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-marjan`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'المرجان' : 'Al-Marjan'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
