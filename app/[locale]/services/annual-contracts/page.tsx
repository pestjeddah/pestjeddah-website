import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Phone, 
  MessageCircle,
  Calendar,
  Target,
  Star,
  Heart,
  Users,
  TrendingDown,
  Award
} from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'العقود السنوية لمكافحة الحشرات بجدة | زيارات دورية وأسعار تفضيلية — شركة الأسطورة'
      : 'Annual Pest Control Contracts in Jeddah | Regular Visits & Preferential Prices — Al-Ustora',
    description: isArabic
      ? 'عقود سنوية لمكافحة الحشرات بجدة مع زيارات دورية منتظمة وأسعار تفضيلية. خطة مخصصة، استجابة فورية، وضمان شامل طوال العام.'
      : 'Annual pest control contracts in Jeddah with regular scheduled visits and preferential prices. Customized plan, immediate response, and comprehensive guarantee all year.',
    keywords: isArabic 
      ? ['عقود مكافحة الحشرات', 'زيارات دورية', 'أسعار تفضيلية', 'عقود سنوية جدة', 'صيانة وقائية']
      : ['pest control contracts', 'regular visits', 'preferential prices', 'annual contracts jeddah', 'preventive maintenance'],
  };
}

export default function AnnualContractsPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const contractBenefits = isArabic ? [
    {
      icon: TrendingDown,
      title: 'توفير مالي كبير',
      description: 'توفير يصل إلى 40% مقارنة بالخدمات المنفردة',
      value: '40%'
    },
    {
      icon: Calendar,
      title: 'زيارات منتظمة',
      description: 'جدولة مسبقة للزيارات الدورية حسب الاحتياج',
      value: '12'
    },
    {
      icon: Clock,
      title: 'استجابة فورية',
      description: 'أولوية في الاستجابة للطوارئ والمشاكل العاجلة',
      value: '24/7'
    },
    {
      icon: Users,
      title: 'فريق مخصص',
      description: 'فريق ثابت يعرف تاريخ العقار واحتياجاته',
      value: '1'
    }
  ] : [
    {
      icon: TrendingDown,
      title: 'Significant Savings',
      description: 'Save up to 40% compared to individual services',
      value: '40%'
    },
    {
      icon: Calendar,
      title: 'Regular Visits',
      description: 'Pre-scheduled regular visits according to needs',
      value: '12'
    },
    {
      icon: Clock,
      title: 'Immediate Response',
      description: 'Priority in emergency response and urgent problems',
      value: '24/7'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Consistent team familiar with property history and needs',
      value: '1'
    }
  ];

  const contractTypes = isArabic ? [
    {
      title: 'عقد المنازل السكنية',
      price: '1200 ريال/سنوياً',
      visits: '4 زيارات',
      features: [
        'فحص دوري كل 3 أشهر',
        'رش وقائي شامل',
        'استجابة طوارئ مجانية',
        'ضمان 6 أشهر',
        'تقارير مفصلة'
      ],
      popular: false
    },
    {
      title: 'عقد الفلل والقصور',
      price: '2400 ريال/سنوياً',
      visits: '6 زيارات',
      features: [
        'فحص دوري كل شهرين',
        'علاج متخصص للحدائق',
        'مراقبة مستمرة',
        'ضمان سنة كاملة',
        'خدمة VIP',
        'تقارير رقمية'
      ],
      popular: true
    },
    {
      title: 'عقد المؤسسات التجارية',
      price: 'حسب المساحة',
      visits: 'حسب الحاجة',
      features: [
        'خطة مخصصة',
        'زيارات مرنة',
        'شهادات معتمدة',
        'فريق متخصص',
        'تقارير احترافية',
        'دعم 24/7'
      ],
      popular: false
    }
  ] : [
    {
      title: 'Residential Homes Contract',
      price: '1200 SAR/year',
      visits: '4 visits',
      features: [
        'Regular inspection every 3 months',
        'Comprehensive preventive spraying',
        'Free emergency response',
        '6 months guarantee',
        'Detailed reports'
      ],
      popular: false
    },
    {
      title: 'Villas & Palaces Contract',
      price: '2400 SAR/year',
      visits: '6 visits',
      features: [
        'Regular inspection every 2 months',
        'Specialized garden treatment',
        'Continuous monitoring',
        'Full year guarantee',
        'VIP service',
        'Digital reports'
      ],
      popular: true
    },
    {
      title: 'Commercial Institutions Contract',
      price: 'Based on area',
      visits: 'As needed',
      features: [
        'Customized plan',
        'Flexible visits',
        'Certified documents',
        'Specialized team',
        'Professional reports',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const visitSchedule = isArabic ? [
    {
      month: 'الربع الأول',
      activities: 'فحص شامل، رش وقائي، معالجة المصادر',
      focus: 'الوقاية من تكاثر الحشرات'
    },
    {
      month: 'الربع الثاني',
      activities: 'مراجعة النتائج، علاج مستهدف، صيانة',
      focus: 'السيطرة على النشاط الموسمي'
    },
    {
      month: 'الربع الثالث',
      activities: 'فحص متخصص، رش مكثف، مراقبة',
      focus: 'ذروة الصيف والنشاط العالي'
    },
    {
      month: 'الربع الرابع',
      activities: 'تقييم سنوي، صيانة شاملة، تخطيط',
      focus: 'التحضير للعام القادم'
    }
  ] : [
    {
      month: 'First Quarter',
      activities: 'Comprehensive inspection, preventive spraying, source treatment',
      focus: 'Prevention of insect breeding'
    },
    {
      month: 'Second Quarter',
      activities: 'Results review, targeted treatment, maintenance',
      focus: 'Control seasonal activity'
    },
    {
      month: 'Third Quarter',
      activities: 'Specialized inspection, intensive spraying, monitoring',
      focus: 'Summer peak and high activity'
    },
    {
      month: 'Fourth Quarter',
      activities: 'Annual assessment, comprehensive maintenance, planning',
      focus: 'Preparation for next year'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد الاستفسار عن العقود السنوية لمكافحة الحشرات'
    : 'Hello, I want to inquire about annual pest control contracts';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href={locale === 'ar' ? '/' : '/en'} className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <Link href={locale === 'ar' ? '/services' : '/en/services'} className="hover:text-primary">{isArabic ? 'الخدمات' : 'Services'}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'العقود السنوية' : 'Annual Contracts'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'العقود السنوية لمكافحة الحشرات' : 'Annual Pest Control Contracts'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'عقود وقاية سنوية مع زيارات دورية منتظمة وأسعار تفضيلية. خطة مخصصة، استجابة فورية، وضمان شامل للحفاظ على بيئة خالية من الآفات.'
                  : 'Annual prevention contracts with regular scheduled visits and preferential prices. Customized plan, immediate response, and comprehensive guarantee to maintain pest-free environment.'
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
                  {isArabic ? 'احجز عقد سنوي' : 'Book Annual Contract'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'استشارة مجانية' : 'Free Consultation'}
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Calendar size={20} />
                  <span className="text-sm">{isArabic ? 'زيارات دورية' : 'Regular Visits'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingDown size={20} />
                  <span className="text-sm">{isArabic ? 'أسعار تفضيلية' : 'Preferential Prices'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'استجابة فورية' : 'Immediate Response'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Users size={20} />
                  <span className="text-sm">{isArabic ? 'فريق مخصص' : 'Dedicated Team'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Pest-control-contracts.jpg"
                alt={isArabic ? 'عقود مكافحة الحشرات السنوية' : 'Annual pest control contracts'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Savings Badge */}
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingDown size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'توفير 40%' : 'Save 40%'}
                  </span>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">VIP</div>
                  <div className="text-xs">{isArabic ? 'خدمة مميزة' : 'Premium Service'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات العقود السنوية' : 'Annual Contract Benefits'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'استثمر في الحماية طويلة المدى واستفد من مزايا حصرية'
                : 'Invest in long-term protection and benefit from exclusive advantages'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contractBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'أنواع العقود المتاحة' : 'Available Contract Types'}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border p-8 ${contract.popular ? 'ring-2 ring-primary transform scale-105' : ''}`}>
                {contract.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star size={16} />
                      {isArabic ? 'الأكثر طلباً' : 'Most Popular'}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{contract.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{contract.price}</div>
                  <div className="text-gray-600">{contract.visits}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {contract.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, `${whatsappMessage} - ${contract.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    contract.popular 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {isArabic ? 'اطلب عرض سعر' : 'Request Quote'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'جدولة الزيارات السنوية' : 'Annual Visit Schedule'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'خطة زيارات موزعة على مدار السنة لضمان أقصى حماية'
                : 'Visit plan distributed throughout the year to ensure maximum protection'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitSchedule.map((visit, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-900">{visit.month}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1 text-sm">
                      {isArabic ? 'الأنشطة:' : 'Activities:'}
                    </h4>
                    <p className="text-xs text-gray-600">{visit.activities}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1 text-sm">
                      {isArabic ? 'التركيز:' : 'Focus:'}
                    </h4>
                    <p className="text-xs text-gray-600">{visit.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Contracts Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isArabic ? 'لماذا العقود السنوية هي الخيار الأفضل؟' : 'Why Are Annual Contracts the Best Choice?'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">
                  {isArabic ? 'وقاية أفضل من العلاج' : 'Prevention Better Than Treatment'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isArabic 
                    ? 'الزيارات الدورية تمنع المشاكل قبل حدوثها'
                    : 'Regular visits prevent problems before they occur'
                  }
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">
                  {isArabic ? 'راحة البال' : 'Peace of Mind'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isArabic 
                    ? 'لا تقلق بشأن الآفات، نحن نتولى كل شيء'
                    : 'Don\'t worry about pests, we handle everything'
                  }
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-3">
                  {isArabic ? 'خدمة مخصصة' : 'Personalized Service'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isArabic 
                    ? 'خطة مصممة خصيصاً لاحتياجات عقارك'
                    : 'Plan specifically designed for your property needs'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'ابدأ حماية العام كاملاً اليوم' : 'Start Full Year Protection Today'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'استثمر في راحة البال مع عقد سنوي شامل وتمتع بخصومات مميزة'
              : 'Invest in peace of mind with comprehensive annual contract and enjoy special discounts'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'واتساب للتفاصيل' : 'WhatsApp for Details'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'اتصل للحجز' : 'Call to Book'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'العقود السنوية لمكافحة الحشرات' : 'Annual Pest Control Contracts',
          description: isArabic 
            ? 'عقود وقاية سنوية مع زيارات دورية وأسعار تفضيلية'
            : 'Annual prevention contracts with regular visits and preferential prices',
          serviceType: isArabic ? 'عقود سنوية' : 'Annual Contracts'
        }}
      />
    </>
  );
}

