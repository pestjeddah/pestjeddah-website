import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Utensils, 
  Phone, 
  MessageCircle, 
  Clock,
  Star,
  CheckCircle,
  FileCheck,
  Shield,
  Award,
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
      ? 'مكافحة الحشرات للمطاعم والمقاهي بجدة | شهادات HACCP — شركة الأسطورة'
      : 'Pest Control for Restaurants & Cafes in Jeddah | HACCP Certificates — Al-Ustora',
    description: isArabic
      ? 'خدمات مكافحة حشرات متخصصة للمطاعم والمقاهي بجدة. مواد معتمدة غذائياً، شهادات HACCP، جدولة مرنة، تقارير شهرية.'
      : 'Specialized pest control services for restaurants and cafes in Jeddah. Food-grade approved materials, HACCP certificates, flexible scheduling, monthly reports.',
  };
}

export default function RestaurantsSectorPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const restaurantFeatures = isArabic ? [
    {
      icon: FileCheck,
      title: 'شهادات HACCP',
      description: 'شهادات معتمدة من الهيئات الصحية للسلامة الغذائية'
    },
    {
      icon: Shield,
      title: 'مواد غذائية آمنة',
      description: 'استخدام مواد معتمدة غذائياً بدون روائح'
    },
    {
      icon: Clock,
      title: 'جدولة مرنة',
      description: 'عمل قبل أو بعد ساعات التشغيل حسب راحتك'
    },
    {
      icon: Award,
      title: 'تقارير شهرية',
      description: 'تقارير تفصيلية شهرية لتوثيق الامتثال'
    }
  ] : [
    {
      icon: FileCheck,
      title: 'HACCP Certificates',
      description: 'Certified documents from health authorities for food safety'
    },
    {
      icon: Shield,
      title: 'Food-Safe Materials',
      description: 'Use of food-grade approved materials without odors'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Work before or after operating hours at your convenience'
    },
    {
      icon: Award,
      title: 'Monthly Reports',
      description: 'Detailed monthly reports for compliance documentation'
    }
  ];

  const restaurantTypes = isArabic ? [
    'المطاعم الفاخرة',
    'المطاعم السريعة',
    'المقاهي والكافيهات',
    'المخابز والحلويات',
    'مطابخ التوصيل',
    'البوفيهات المفتوحة'
  ] : [
    'Fine Dining Restaurants',
    'Fast Food Restaurants',
    'Cafes & Coffee Shops',
    'Bakeries & Sweets',
    'Delivery Kitchens',
    'Open Buffets'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات للمطعم مع شهادة HACCP'
    : 'Hello, I want restaurant pest control service with HACCP certificate';

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
            <span className="text-gray-900">{isArabic ? 'المطاعم والمقاهي' : 'Restaurants & Cafes'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات للمطاعم' : 'Restaurant Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمات مكافحة حشرات متخصصة للمطاعم والمقاهي مع شهادات HACCP ومواد معتمدة غذائياً.'
                  : 'Specialized pest control services for restaurants and cafes with HACCP certificates and food-grade approved materials.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-orange-600 hover:bg-orange-700 flex items-center justify-center gap-2"
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
            </div>

            <div className="relative">
              <Image
                src="/images/Pest-control-for-restaurants.jpg"
                alt={isArabic ? 'مكافحة الحشرات للمطاعم' : 'Restaurant pest control'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <FileCheck size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'شهادة HACCP' : 'HACCP Certified'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات الخدمة' : 'Service Features'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurantFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border hover:shadow-lg transition-all text-center">
                <feature.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'نخدم جميع أنواع المطاعم' : 'We Serve All Restaurant Types'}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {restaurantTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                <span className="text-gray-800">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Issues Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'لماذا مكافحة الحشرات حاسمة للمطاعم؟' : 'Why Is Pest Control Critical for Restaurants?'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'خطر الإغلاق الفوري' : 'Risk of Immediate Closure'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'مفتشو البلدية ووزارة الصحة يتفقدون المطاعم بشكل مفاجئ. وجود حشرة واحدة في المطبخ أو منطقة التحضير قد يؤدي لإغلاق فوري وغرامة قد تصل لمئات الآلاف. هذا ليس تهديداً نظرياً - يحدث يومياً في جدة والمملكة.'
                    : 'Municipality and Ministry of Health inspectors conduct surprise inspections. One insect in the kitchen or preparation area can lead to immediate closure and fines reaching hundreds of thousands. This isn\'t a theoretical threat - it happens daily in Jeddah and the Kingdom.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'برنامجنا المتخصص للمطاعم يضمن امتثالك الكامل للأنظمة مع توثيق شامل وشهادات HACCP معتمدة. نوفر زيارات دورية مجدولة مع فريق مدرب خصيصاً على معايير السلامة الغذائية.'
                    : 'Our specialized restaurant program ensures your complete regulatory compliance with comprehensive documentation and certified HACCP documents. We provide scheduled periodic visits with team specifically trained on food safety standards.'
                  }
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'تدمير السمعة على وسائل التواصل' : 'Reputation Destruction on Social Media'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'في عصر الهواتف الذكية، عميل واحد يرى صرصوراً أو فأراً في مطعمك سيلتقط فيديو وينشره على تويتر وإنستغرام خلال دقائق. الفيديو سينتشر بسرعة وسيشاهده آلاف أو ملايين، مدمراً سمعة بنيتها على مدى سنوات.'
                    : 'In the smartphone era, one customer seeing a cockroach or mouse in your restaurant will capture video and post it on Twitter and Instagram within minutes. The video will spread quickly, viewed by thousands or millions, destroying reputation you built over years.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'الوقاية خير من العلاج. استثمارك في برنامج مكافحة حشرات احترافي أقل بكثير من تكلفة إعادة بناء سمعتك أو خسارة العملاء. نحن نساعدك على حماية أهم أصولك: سمعتك.'
                    : 'Prevention is better than cure. Your investment in professional pest control program is much less than the cost of rebuilding your reputation or losing customers. We help you protect your most important asset: your reputation.'
                  }
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'الحشرات الأكثر خطورة على المطاعم' : 'Most Dangerous Pests for Restaurants'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Utensils className="text-red-600" />
                    {isArabic ? 'الصراصير' : 'Cockroaches'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {isArabic 
                      ? 'تنقل 33 نوعاً من البكتيريا و6 أنواع من الطفيليات. تلوث الطعام والأسطح.'
                      : 'Transmit 33 types of bacteria and 6 types of parasites. Contaminate food and surfaces.'
                    }
                  </p>
                  <Link href={`/${locale}/services/cockroach-control-jeddah`} className="text-orange-600 font-semibold text-sm hover:underline">
                    {isArabic ? 'حلول مكافحة الصراصير →' : 'Cockroach Control Solutions →'}
                  </Link>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="text-orange-600" />
                    {isArabic ? 'القوارض' : 'Rodents'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {isArabic 
                      ? 'تتلف العبوات والأسلاك وتنشر أمراضاً خطيرة. فضلاتها سامة وخطيرة.'
                      : 'Damage packages and wires, spread dangerous diseases. Their droppings are toxic and hazardous.'
                    }
                  </p>
                  <Link href={`/${locale}/services/rodents-control-jeddah`} className="text-orange-600 font-semibold text-sm hover:underline">
                    {isArabic ? 'حلول مكافحة القوارض →' : 'Rodent Control Solutions →'}
                  </Link>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="text-yellow-600" />
                    {isArabic ? 'الذباب' : 'Flies'}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    {isArabic 
                      ? 'ينتقل بين القمامة والطعام ناقلاً الأمراض. مزعج للعملاء ومقزز.'
                      : 'Travels between trash and food transmitting diseases. Annoying and disgusting to customers.'
                    }
                  </p>
                  <Link href={`/${locale}/services/mosquitoes-flies-control-jeddah`} className="text-orange-600 font-semibold text-sm hover:underline">
                    {isArabic ? 'حلول مكافحة الذباب →' : 'Fly Control Solutions →'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'برنامج مكافحة الحشرات المتكامل للمطاعم' : 'Integrated Pest Control Program for Restaurants'}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{isArabic ? 'المرحلة الأولى: التفتيش والتقييم' : 'Phase 1: Inspection & Assessment'}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'فحص شامل للمطبخ ومناطق التحضير والتخزين' : 'Comprehensive inspection of kitchen, preparation and storage areas'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'تحديد نقاط الدخول ومصادر التلوث المحتملة' : 'Identifying entry points and potential contamination sources'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'تقرير مفصل بالمخاطر والتوصيات' : 'Detailed report of risks and recommendations'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{isArabic ? 'المرحلة الثانية: العلاج المتخصص' : 'Phase 2: Specialized Treatment'}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'مواد معتمدة غذائياً بدون روائح أو آثار' : 'Food-grade approved materials without odors or traces'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'جدولة مرنة قبل/بعد ساعات العمل' : 'Flexible scheduling before/after business hours'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'تقنيات حديثة لا تعطل العمل' : 'Modern techniques that don\'t disrupt operations'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{isArabic ? 'المرحلة الثالثة: المراقبة المستمرة' : 'Phase 3: Continuous Monitoring'}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'زيارات دورية مجدولة شهرياً أو أسبوعياً' : 'Regular scheduled monthly or weekly visits'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'تقارير توثيقية بعد كل زيارة' : 'Documentation reports after each visit'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'استجابة طارئة خلال ساعات' : 'Emergency response within hours'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{isArabic ? 'المرحلة الرابعة: التوثيق والشهادات' : 'Phase 4: Documentation & Certificates'}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'شهادات HACCP معتمدة' : 'Certified HACCP documents'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'سجلات مكافحة الآفات للتفتيش' : 'Pest control records for inspection'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'توثيق صور ورقمي كامل' : 'Complete photographic and digital documentation'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {isArabic ? 'خدماتنا في جميع مناطق جدة' : 'Our Services in All Jeddah Areas'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {isArabic 
                  ? 'نخدم جميع المطاعم والمقاهي في جدة، من المطاعم الفاخرة في الواجهة البحرية إلى المقاهي العائلية في الأحياء السكنية. لدينا فرق متخصصة موزعة على جميع أحياء جدة لضمان استجابة سريعة.'
                  : 'We serve all restaurants and cafes in Jeddah, from fine dining on the waterfront to family cafes in residential neighborhoods. We have specialized teams distributed across all Jeddah neighborhoods ensuring rapid response.'
                }
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded-lg text-center">
                  <Utensils className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{isArabic ? 'منطقة الواجهة البحرية' : 'Waterfront Area'}</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <Utensils className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{isArabic ? 'شارع التحلية' : 'Tahlia Street'}</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <Utensils className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{isArabic ? 'طريق المدينة' : 'Madinah Road'}</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <Utensils className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{isArabic ? 'البلد' : 'Al-Balad'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمِ مطعمك وسمعتك الآن' : 'Protect Your Restaurant & Reputation Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمة احترافية مع شهادات HACCP معتمدة تضمن السلامة الغذائية والامتثال الكامل للأنظمة'
              : 'Professional service with certified HACCP documents ensuring food safety and complete regulatory compliance'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {isArabic ? 'طلب شهادة HACCP' : 'Request HACCP Certificate'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-orange-700 hover:bg-orange-800 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
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
