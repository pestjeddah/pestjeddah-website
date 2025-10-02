import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { isRTL } from '@/lib/utils';
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
      ? 'خدمات مكافحة الحشرات بجدة — شركة الأسطورة | جميع أنواع الآفات'
      : 'Pest Control Services in Jeddah — Al-Ustora | All Types of Pests',
    description: isArabic
      ? 'خدمات شاملة لمكافحة جميع أنواع الحشرات والقوارض بجدة. مكافحة الصراصير، بق الفراش، النمل الأبيض، القوارض وأكثر. خدمة مضمونة 24/7.'
      : 'Comprehensive services for controlling all types of insects and rodents in Jeddah. Cockroach control, bed bugs, termites, rodents and more. Guaranteed service 24/7.',
  };
}

export default function ServicesPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const services = [
    {
      title: isArabic ? 'مكافحة الصراصير' : 'Cockroach Control',
      description: isArabic 
        ? 'القضاء النهائي على الصراصير بأمان تام باستخدام أحدث المبيدات المرخصة'
        : 'Complete elimination of cockroaches safely using latest licensed pesticides',
      href: locale === 'ar' ? '/services/cockroach-control-jeddah' : '/en/services/cockroach-control-jeddah',
      image: '/images/Cockroach-control-Jeddah.jpg',
      features: isArabic 
        ? ['فحص شامل مجاني', 'مبيدات آمنة ومرخصة', 'ضمان 6 أشهر', 'متابعة دورية']
        : ['Free comprehensive inspection', 'Safe licensed pesticides', '6 months guarantee', 'Regular follow-up']
    },
    {
      title: isArabic ? 'مكافحة بق الفراش' : 'Bed Bug Treatment',
      description: isArabic 
        ? 'علاج فعال وآمن لبق الفراش مع ضمان عدم العودة باستخدام تقنيات متقدمة'
        : 'Effective and safe bed bug treatment with no-return guarantee using advanced techniques',
      href: locale === 'ar' ? '/services/bed-bugs-treatment-jeddah' : '/en/services/bed-bugs-treatment-jeddah',
      image: '/images/Bed-bug-treatment-Jeddah.jpg',
      features: isArabic 
        ? ['تشخيص دقيق', 'علاج حراري متقدم', 'مبيدات بيولوجية', 'ضمان سنة كاملة']
        : ['Accurate diagnosis', 'Advanced heat treatment', 'Biological pesticides', 'Full year guarantee']
    },
    {
      title: isArabic ? 'مكافحة النمل الأبيض' : 'Termite Control',
      description: isArabic 
        ? 'حماية شاملة للمباني من النمل الأبيض بأنظمة الحماية المتقدمة'
        : 'Comprehensive building protection from termites with advanced protection systems',
      href: locale === 'ar' ? '/services/termites-control-jeddah' : '/en/services/termites-control-jeddah',
      image: '/images/Termite-treatment-Jeddah.jpg',
      features: isArabic 
        ? ['فحص بأجهزة متقدمة', 'أنظمة حماية وقائية', 'ضمان طويل المدى', 'صيانة دورية']
        : ['Advanced equipment inspection', 'Preventive protection systems', 'Long-term guarantee', 'Regular maintenance']
    },
    {
      title: isArabic ? 'مكافحة النمل' : 'Ant Control',
      description: isArabic 
        ? 'حلول متقدمة للتخلص من جميع أنواع النمل داخل وخارج المباني'
        : 'Advanced solutions to eliminate all types of ants inside and outside buildings',
      href: locale === 'ar' ? '/services/ants-control-jeddah' : '/en/services/ants-control-jeddah',
      image: '/images/Ant-control-Jeddah.jpg',
      features: isArabic 
        ? ['تحديد مصدر النمل', 'طعوم متخصصة', 'حاجز وقائي', 'حل جذري']
        : ['Ant source identification', 'Specialized baits', 'Protective barrier', 'Root solution']
    },
    {
      title: isArabic ? 'مكافحة القوارض' : 'Rodent Control',
      description: isArabic 
        ? 'التخلص الآمن والفعال من الفئران والجرذان مع منع دخولها مستقبلاً'
        : 'Safe and effective elimination of mice and rats with future entry prevention',
      href: locale === 'ar' ? '/services/rodents-control-jeddah' : '/en/services/rodents-control-jeddah',
      image: '/images/Rodent-control-Jeddah.jpg',
      features: isArabic 
        ? ['طعوم آمنة', 'سد منافذ الدخول', 'مراقبة مستمرة', 'حلول إنسانية']
        : ['Safe baits', 'Entry point sealing', 'Continuous monitoring', 'Humane solutions']
    },
    {
      title: isArabic ? 'مكافحة البعوض والذباب' : 'Mosquito & Fly Control',
      description: isArabic 
        ? 'حماية شاملة من البعوض والذباب بتقنيات حديثة وحلول طويلة المدى'
        : 'Comprehensive protection from mosquitoes and flies with modern techniques and long-term solutions',
      href: locale === 'ar' ? '/services/mosquitoes-flies-control-jeddah' : '/en/services/mosquitoes-flies-control-jeddah',
      image: '/images/Mosquito-control-service.jpg',
      features: isArabic 
        ? ['تقنيات متقدمة', 'حلول بيئية', 'رش دوري', 'مراقبة مستمرة']
        : ['Advanced techniques', 'Environmental solutions', 'Regular spraying', 'Continuous monitoring']
    },
    {
      title: isArabic ? 'التدخين والتعقيم' : 'Fumigation & Disinfection',
      description: isArabic 
        ? 'تدخين شامل وتعقيم للمباني والمستودعات لضمان بيئة صحية آمنة'
        : 'Comprehensive fumigation and disinfection for buildings and warehouses ensuring safe healthy environment',
      href: locale === 'ar' ? '/services/fumigation-disinfection' : '/en/services/fumigation-disinfection',
      image: '/images/Pest-spray-service.jpg',
      features: isArabic 
        ? ['تعقيم شامل', 'مواد معتمدة', 'أمان تام', 'شهادة جودة']
        : ['Comprehensive sterilization', 'Approved materials', 'Complete safety', 'Quality certificate']
    },
    {
      title: isArabic ? 'العقود السنوية' : 'Annual Contracts',
      description: isArabic 
        ? 'عقود وقاية سنوية مع زيارات دورية منتظمة للحفاظ على بيئة خالية من الآفات'
        : 'Annual prevention contracts with regular scheduled visits to maintain pest-free environment',
      href: locale === 'ar' ? '/services/annual-contracts' : '/en/services/annual-contracts',
      image: '/images/Pest-control-contracts.jpg',
      features: isArabic 
        ? ['زيارات دورية', 'خطة مخصصة', 'أسعار تفضيلية', 'استجابة فورية']
        : ['Regular visits', 'Customized plan', 'Preferential prices', 'Immediate response']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'خدمات مكافحة الحشرات بجدة' : 'Pest Control Services in Jeddah'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {isArabic 
                ? 'حلول شاملة ومتخصصة لمكافحة جميع أنواع الحشرات والقوارض بأحدث التقنيات والمواد الآمنة'
                : 'Comprehensive and specialized solutions for controlling all types of insects and rodents with latest techniques and safe materials'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'مرخص ومعتمد' : 'Licensed & Certified'}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'خدمة 24/7' : '24/7 Service'}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'ضمان شامل' : 'Full Guarantee'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      <span>{isArabic ? 'اقرأ المزيد' : 'Read More'}</span>
                      {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isArabic ? 'تحتاج خدمة فورية؟' : 'Need Immediate Service?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'فريقنا متاح على مدار الساعة لحل جميع مشاكل الآفات'
              : 'Our team is available 24/7 to solve all pest problems'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={locale === 'ar' ? '/contact' : '/en/contact'}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'احصل على عرض سعر' : 'Get Quote'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-primary-foreground/20 text-white hover:bg-primary-foreground/30 px-8 py-4 rounded-lg font-semibold transition-colors border border-primary-foreground/30"
            >
              {isArabic ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'خدمات مكافحة الحشرات بجدة' : 'Pest Control Services in Jeddah',
          description: isArabic 
            ? 'خدمات شاملة لمكافحة جميع أنواع الحشرات والقوارض'
            : 'Comprehensive services for all types of pest control',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}



