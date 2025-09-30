import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle, 
  Calendar, 
  Shield, 
  Phone, 
  MessageCircle,
  Star,
  Clock,
  Award,
  Target
} from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink, isRTL } from '@/lib/utils';
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
      ? 'العروض والعقود السنوية — شركة الأسطورة | باقات وقائية وخصومات مميزة'
      : 'Offers & Annual Contracts — Al-Ustora | Preventive Packages & Special Discounts',
    description: isArabic
      ? 'عقود سنوية لمكافحة الحشرات بجدة مع زيارات دورية وخصومات مميزة. باقات وقائية شاملة للمنازل والشركات بأسعار تفضيلية.'
      : 'Annual pest control contracts in Jeddah with regular visits and special discounts. Comprehensive preventive packages for homes and businesses at preferential prices.',
  };
}

export default function OffersContractsPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const packages = [
    {
      name: isArabic ? 'الباقة الأساسية' : 'Basic Package',
      price: isArabic ? '٩٩٩ ريال/سنوياً' : '999 SAR/year',
      originalPrice: isArabic ? '١٢٠٠ ريال' : '1200 SAR',
      visits: isArabic ? '٤ زيارات' : '4 visits',
      features: isArabic ? [
        'فحص دوري كل 3 أشهر',
        'رش وقائي شامل',
        'ضمان 3 أشهر بين الزيارات',
        'استجابة طوارئ مجانية',
        'تقرير مفصل بعد كل زيارة'
      ] : [
        'Regular inspection every 3 months',
        'Comprehensive preventive spraying',
        '3 months guarantee between visits',
        'Free emergency response',
        'Detailed report after each visit'
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: isArabic ? 'الباقة المميزة' : 'Premium Package',
      price: isArabic ? '١٨٩٩ ريال/سنوياً' : '1899 SAR/year',
      originalPrice: isArabic ? '٢٤٠٠ ريال' : '2400 SAR',
      visits: isArabic ? '٦ زيارات' : '6 visits',
      features: isArabic ? [
        'فحص دوري كل شهرين',
        'رش متخصص حسب النوع',
        'ضمان 6 أشهر شامل',
        'زيارات طوارئ مجانية',
        'تقارير رقمية فورية',
        'خصم 20% على الخدمات الإضافية'
      ] : [
        'Regular inspection every 2 months',
        'Specialized spraying by type',
        'Comprehensive 6 months guarantee',
        'Free emergency visits',
        'Instant digital reports',
        '20% discount on additional services'
      ],
      popular: true,
      color: 'border-primary ring-2 ring-primary'
    },
    {
      name: isArabic ? 'الباقة الملكية' : 'Royal Package',
      price: isArabic ? '٢٧٩٩ ريال/سنوياً' : '2799 SAR/year',
      originalPrice: isArabic ? '٣٦٠٠ ريال' : '3600 SAR',
      visits: isArabic ? '١٢ زيارة' : '12 visits',
      features: isArabic ? [
        'فحص شهري متقدم',
        'علاج متخصص لكل نوع',
        'ضمان سنة كاملة',
        'استجابة فورية 24/7',
        'تقارير تفاصيلية رقمية',
        'خصم 30% على جميع الخدمات',
        'صيانة وقائية مجانية'
      ] : [
        'Advanced monthly inspection',
        'Specialized treatment for each type',
        'Full year guarantee',
        'Immediate 24/7 response',
        'Detailed digital reports',
        '30% discount on all services',
        'Free preventive maintenance'
      ],
      popular: false,
      color: 'border-yellow-400'
    }
  ];

  const benefits = isArabic ? [
    'توفير يصل إلى 40% مقارنة بالخدمات المنفردة',
    'أولوية في المواعيد والاستجابة السريعة',
    'ضمان شامل طوال فترة العقد',
    'فريق مخصص يعرف تاريخ العقار',
    'تقارير دورية وتوثيق كامل',
    'مرونة في تغيير مواعيد الزيارات'
  ] : [
    'Save up to 40% compared to individual services',
    'Priority in appointments and quick response',
    'Comprehensive guarantee throughout contract period',
    'Dedicated team familiar with property history',
    'Regular reports and complete documentation',
    'Flexibility in changing visit schedules'
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد الاستفسار عن العقود السنوية'
    : 'Hello, I want to inquire about annual contracts';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'العروض والعقود' : 'Offers & Contracts'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'العروض والعقود السنوية' : 'Offers & Annual Contracts'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {isArabic 
                ? 'باقات وقائية شاملة مع زيارات دورية منتظمة وخصومات مميزة. استثمر في الحماية طويلة المدى ووفر أكثر'
                : 'Comprehensive preventive packages with regular scheduled visits and special discounts. Invest in long-term protection and save more'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'توفير يصل لـ 40%' : 'Save up to 40%'}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Calendar size={20} />
                <span>{isArabic ? 'زيارات منتظمة' : 'Regular Visits'}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Shield size={20} />
                <span>{isArabic ? 'ضمان شامل' : 'Full Guarantee'}</span>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Pest control contracts.jpg"
                alt={isArabic ? 'عقود مكافحة الحشرات' : 'Pest control contracts'}
                width={800}
                height={400}
                className="rounded-2xl shadow-lg mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'اختر الباقة المناسبة لك' : 'Choose the Right Package for You'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'باقات مصممة لتناسب احتياجاتك وميزانيتك مع ضمان أفضل حماية'
                : 'Packages designed to suit your needs and budget with guaranteed best protection'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 ${pkg.color} p-8 ${pkg.popular ? 'transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star size={16} />
                      {isArabic ? 'الأكثر طلباً' : 'Most Popular'}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{pkg.visits}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, `${whatsappMessage} - ${pkg.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {isArabic ? 'اشترك الآن' : 'Subscribe Now'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مميزات العقود السنوية' : 'Annual Contract Benefits'}
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-blue-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">{isArabic ? 'نجاح الوقاية' : 'Prevention Success'}</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-green-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">24</div>
                <div className="text-sm text-gray-600">{isArabic ? 'ساعة استجابة' : 'Hour Response'}</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-1">1000+</div>
                <div className="text-sm text-gray-600">{isArabic ? 'عقد نشط' : 'Active Contracts'}</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-orange-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">{isArabic ? 'ضمان الرضا' : 'Satisfaction Guarantee'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'ابدأ الحماية طويلة المدى اليوم' : 'Start Long-term Protection Today'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'استثمر في راحة البال مع العقود السنوية وتمتع بخصومات مميزة'
              : 'Invest in peace of mind with annual contracts and enjoy special discounts'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {isArabic ? 'واتساب للاستفسار' : 'WhatsApp Inquiry'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {isArabic ? 'اتصل للحجز' : 'Call to Book'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'العروض والعقود السنوية' : 'Offers & Annual Contracts',
          description: isArabic 
            ? 'عقود سنوية لمكافحة الحشرات مع زيارات دورية وخصومات مميزة'
            : 'Annual pest control contracts with regular visits and special discounts',
          serviceType: isArabic ? 'عقود مكافحة الحشرات' : 'Pest Control Contracts'
        }}
      />
    </>
  );
}

