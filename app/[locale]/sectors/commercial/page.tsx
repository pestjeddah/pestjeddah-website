import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Phone, 
  MessageCircle, 
  Clock,
  Star,
  CheckCircle,
  FileCheck,
  Shield,
  TrendingUp,
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
      ? 'مكافحة الحشرات التجارية بجدة | خدمات الشركات والمكاتب — شركة الأسطورة'
      : 'Commercial Pest Control in Jeddah | Business & Office Services — Al-Ustora',
    description: isArabic
      ? 'خدمات مكافحة حشرات احترافية للشركات والمكاتب والمحلات التجارية بجدة. شهادات معتمدة، جدولة مرنة، وتقارير دورية.'
      : 'Professional pest control services for businesses, offices and commercial premises in Jeddah. Certified documents, flexible scheduling, and regular reports.',
  };
}

export default function CommercialSectorPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const commercialServices = isArabic ? [
    {
      icon: Building2,
      title: 'المكاتب والشركات',
      description: 'حلول متخصصة للمكاتب مع جدولة بعد ساعات العمل',
      features: ['سرية تامة', 'جدولة مرنة', 'تقارير شهرية']
    },
    {
      icon: FileCheck,
      title: 'المحلات التجارية',
      description: 'حماية شاملة للمتاجر مع الحفاظ على النشاط التجاري',
      features: ['عمل ليلي', 'بدون تعطيل', 'شهادة معتمدة']
    },
    {
      icon: Award,
      title: 'المستودعات',
      description: 'حماية المخزون من الآفات مع برامج وقائية',
      features: ['مراقبة مستمرة', 'حماية المخزون', 'عقود سنوية']
    },
    {
      icon: TrendingUp,
      title: 'الأبراج الإدارية',
      description: 'برامج متكاملة للأبراج متعددة الطوابق',
      features: ['فريق متخصص', 'تقارير تفصيلية', 'دعم 24/7']
    }
  ] : [
    {
      icon: Building2,
      title: 'Offices & Companies',
      description: 'Specialized solutions for offices with after-hours scheduling',
      features: ['Complete confidentiality', 'Flexible scheduling', 'Monthly reports']
    },
    {
      icon: FileCheck,
      title: 'Commercial Stores',
      description: 'Comprehensive protection for stores while maintaining business',
      features: ['Night operations', 'No disruption', 'Certified document']
    },
    {
      icon: Award,
      title: 'Warehouses',
      description: 'Inventory protection from pests with preventive programs',
      features: ['Continuous monitoring', 'Inventory protection', 'Annual contracts']
    },
    {
      icon: TrendingUp,
      title: 'Administrative Towers',
      description: 'Integrated programs for multi-floor towers',
      features: ['Specialized team', 'Detailed reports', '24/7 support']
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة حشرات للأعمال التجارية'
    : 'Hello, I want commercial pest control service';

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
            <span className="text-gray-900">{isArabic ? 'القطاع التجاري' : 'Commercial Sector'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات التجارية الاحترافية' : 'Professional Commercial Pest Control'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمات مكافحة حشرات متخصصة للأعمال التجارية مع شهادات معتمدة وتقارير دورية وجدولة مرنة.'
                  : 'Specialized commercial pest control services with certified documents, regular reports and flexible scheduling.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'عرض تجاري' : 'Business Quote'}
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
                src="/images/Commercial-pest-control-Jeddah.jpg"
                alt={isArabic ? 'مكافحة الحشرات التجارية' : 'Commercial pest control'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'خدماتنا التجارية' : 'Our Commercial Services'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border hover:shadow-lg transition-all">
                <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'لماذا مكافحة الحشرات ضرورية للأعمال التجارية؟' : 'Why Is Pest Control Essential for Businesses?'}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'حماية السمعة التجارية' : 'Protect Business Reputation'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'سمعة أي منشأة تجارية تعتمد بشكل كبير على النظافة والمظهر الاحترافي. وجود الحشرات - حتى لو كان بسيطاً - يمكن أن يدمر سنوات من بناء السمعة في لحظات. العملاء لن يعودوا إلى مكان شاهدوا فيه صرصوراً أو فأراً، ومراجعاتهم السلبية على الإنترنت ستؤثر على عملك لسنوات.'
                    : 'Any commercial facility\'s reputation heavily depends on cleanliness and professional appearance. Presence of pests - even minor - can destroy years of reputation building in moments. Customers won\'t return to a place where they saw a cockroach or mouse, and their negative online reviews will affect your business for years.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'في جدة، المنافسة التجارية شديدة. أي منشأة تواجه مشكلة حشرات ستفقد عملاءها لصالح المنافسين. الاستثمار في مكافحة حشرات احترافية ومنتظمة هو استثمار في حماية علامتك التجارية وسمعتك.'
                    : 'In Jeddah, commercial competition is intense. Any facility facing pest problems will lose customers to competitors. Investing in professional and regular pest control is an investment in protecting your brand and reputation.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'الامتثال للأنظمة والقوانين' : 'Regulatory Compliance'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'وزارة الصحة والبلديات في المملكة تفرض معايير صارمة على النظافة ومكافحة الآفات. المطاعم، المستشفيات، المدارس، والفنادق يجب أن تقدم شهادات دورية لمكافحة الحشرات. عدم الامتثال قد يؤدي لغرامات أو إغلاق المنشأة.'
                    : 'Ministry of Health and municipalities in the Kingdom impose strict standards on hygiene and pest control. Restaurants, hospitals, schools, and hotels must provide regular pest control certificates. Non-compliance may lead to fines or facility closure.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'نحن نقدم جميع الشهادات والتقارير المعتمدة التي تحتاجها منشأتك للتفتيش. فريقنا على دراية كاملة بجميع المعايير المحلية ويضمن امتثالك الكامل للأنظمة.'
                    : 'We provide all certified documents and reports your facility needs for inspections. Our team is fully knowledgeable about all local standards and ensures your complete regulatory compliance.'
                  }
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'التكلفة الحقيقية لإهمال مكافحة الحشرات' : 'True Cost of Neglecting Pest Control'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="text-red-500" />
                    {isArabic ? 'خسائر مالية مباشرة' : 'Direct Financial Losses'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• {isArabic ? 'تلف المخزون والمنتجات' : 'Inventory and product damage'}</li>
                    <li>• {isArabic ? 'تكاليف الإصلاح والتنظيف' : 'Repair and cleaning costs'}</li>
                    <li>• {isArabic ? 'استبدال المعدات التالفة' : 'Replacing damaged equipment'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="text-orange-500" />
                    {isArabic ? 'فقدان العملاء' : 'Customer Loss'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• {isArabic ? 'مراجعات سلبية على الإنترنت' : 'Negative online reviews'}</li>
                    <li>• {isArabic ? 'انخفاض عدد الزيارات' : 'Decreased foot traffic'}</li>
                    <li>• {isArabic ? 'فقدان العملاء الدائمين' : 'Loss of loyal customers'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <FileCheck className="text-red-500" />
                    {isArabic ? 'مخاطر قانونية' : 'Legal Risks'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• {isArabic ? 'غرامات البلدية' : 'Municipal fines'}</li>
                    <li>• {isArabic ? 'دعاوى قضائية محتملة' : 'Potential lawsuits'}</li>
                    <li>• {isArabic ? 'إغلاق مؤقت أو دائم' : 'Temporary or permanent closure'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services by Type */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'حلول متخصصة لكل نوع منشأة' : 'Specialized Solutions for Each Facility Type'}
            </h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'المكاتب والشركات' : 'Offices & Companies'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'بيئة العمل المكتبية تتطلب حلولاً خاصة تراعي خصوصية العمل وعدم التعطيل. نقدم خدمات مكافحة الحشرات بعد ساعات العمل الرسمية، مع سرية تامة واستخدام مواد عديمة الرائحة لا تؤثر على الموظفين أو المعدات الإلكترونية.'
                    : 'Office work environment requires special solutions considering work privacy and non-disruption. We provide pest control services after official business hours, with complete confidentiality and odorless materials that don\'t affect employees or electronic equipment.'
                  }
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">{isArabic ? 'التحديات الخاصة' : 'Specific Challenges'}</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                        <span>{isArabic ? 'الصراصير في المطابخ المشتركة والاستراحات' : 'Cockroaches in shared kitchens and break rooms'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                        <span>{isArabic ? 'النمل المنجذب لبقايا الطعام في المكاتب' : 'Ants attracted to food remnants in offices'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                        <span>{isArabic ? 'الذباب بالقرب من المداخل ومناطق القمامة' : 'Flies near entrances and trash areas'}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">{isArabic ? 'حلولنا المتخصصة' : 'Our Specialized Solutions'}</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={16} />
                        <span>{isArabic ? 'جدولة ليلية أو في عطلة نهاية الأسبوع' : 'Night or weekend scheduling'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={16} />
                        <span>{isArabic ? 'طعوم آمنة للحشرات في الأماكن الحساسة' : 'Safe baits in sensitive areas'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={16} />
                        <span>{isArabic ? 'تقارير شهرية وشهادات للجهات الرسمية' : 'Monthly reports and official certificates'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'المحلات التجارية ومراكز التسوق' : 'Retail Stores & Shopping Centers'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'المتاجر ومراكز التسوق تواجه تحدياً مزدوجاً: حماية المنتجات مع الحفاظ على تجربة تسوق مريحة للعملاء. نستخدم تقنيات متقدمة لا تؤثر على النشاط التجاري، مع ضمان بيئة خالية من الحشرات.'
                    : 'Retail stores and shopping centers face double challenge: protecting products while maintaining comfortable shopping experience for customers. We use advanced techniques that don\'t affect business operations, ensuring pest-free environment.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'نقدم خدمات خاصة لمحلات الأغذية، الملابس، الإلكترونيات، وجميع أنواع المتاجر في أحياء جدة التجارية مثل الحمراء، السلامة، والعزيزية.'
                    : 'We provide special services for food stores, clothing, electronics, and all store types in Jeddah\'s commercial districts like Al-Hamra, Al-Salamah, and Al-Aziziyah.'
                  }
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'المستودعات والمخازن' : 'Warehouses & Storage'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'المستودعات تحتاج لبرامج وقاية شاملة ومستمرة. الحشرات في المستودعات قد تتلف شحنات كاملة بقيمة ملايين الريالات. نوفر برامج مراقبة دائمة مع تقنيات متقدمة لاكتشاف أي نشاط للحشرات قبل أن يصبح مشكلة.'
                    : 'Warehouses need comprehensive and continuous prevention programs. Pests in warehouses can damage entire shipments worth millions of riyals. We provide permanent monitoring programs with advanced technologies to detect any pest activity before it becomes a problem.'
                  }
                </p>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{isArabic ? 'خدمات المستودعات تشمل' : 'Warehouse Services Include'}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-orange-600" size={18} />
                      <span className="text-sm text-gray-700">{isArabic ? 'مراقبة دورية للقوارض' : 'Regular rodent monitoring'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-orange-600" size={18} />
                      <span className="text-sm text-gray-700">{isArabic ? 'حماية من الحشرات الزاحفة' : 'Protection from crawling insects'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-orange-600" size={18} />
                      <span className="text-sm text-gray-700">{isArabic ? 'تدخين دوري للمستودعات' : 'Regular warehouse fumigation'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-orange-600" size={18} />
                      <span className="text-sm text-gray-700">{isArabic ? 'تقارير وتوثيق كامل' : 'Complete reports and documentation'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'نخدم جميع الأحياء التجارية في جدة' : 'We Serve All Commercial Districts in Jeddah'}
            </h2>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Building2 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Building2 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-aziziyah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Building2 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'العزيزية' : 'Al-Aziziyah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Building2 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {isArabic ? 'خدماتنا المتكاملة للقطاع التجاري' : 'Our Integrated Commercial Services'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {isArabic 
                  ? 'نوفر مجموعة كاملة من خدمات مكافحة الحشرات المتخصصة للمنشآت التجارية في جدة. من المكاتب الصغيرة إلى مراكز التسوق الكبرى، لدينا الخبرة والتقنيات لحماية عملك.'
                  : 'We provide complete range of specialized pest control services for commercial facilities in Jeddah. From small offices to large shopping centers, we have the expertise and technologies to protect your business.'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${locale}/services/cockroach-control-jeddah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة الصراصير' : 'Cockroach Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حلول فعالة للتخلص من الصراصير في المكاتب والمتاجر' : 'Effective solutions to eliminate cockroaches in offices and stores'}</p>
                </Link>
                <Link href={`/${locale}/services/rodents-control-jeddah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة القوارض' : 'Rodent Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حماية المستودعات والمخازن من القوارض' : 'Protect warehouses and storage from rodents'}</p>
                </Link>
                <Link href={`/${locale}/services/fumigation-disinfection`} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'التدخين والتعقيم' : 'Fumigation & Disinfection'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'تعقيم شامل للمنشآت التجارية' : 'Comprehensive disinfection for commercial facilities'}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمِ عملك التجاري الآن' : 'Protect Your Business Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمات احترافية مع شهادات معتمدة وتقارير دورية - استثمر في حماية سمعتك التجارية'
              : 'Professional services with certified documents and regular reports - Invest in protecting your business reputation'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {isArabic ? 'طلب عرض سعر' : 'Request Quote'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-indigo-700 hover:bg-indigo-800 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {isArabic ? 'اتصل بنا الآن' : 'Call Us Now'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
