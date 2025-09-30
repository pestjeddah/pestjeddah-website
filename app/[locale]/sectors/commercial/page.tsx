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
                src="/images/Commercial pest control Jeddah.jpg"
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

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احمِ عملك التجاري' : 'Protect Your Business'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'خدمات احترافية مع شهادات معتمدة وتقارير دورية'
              : 'Professional services with certified documents and regular reports'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'طلب عرض سعر' : 'Request Quote'}
            </Link>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات التجارية' : 'Commercial Pest Control',
          description: isArabic 
            ? 'خدمات مكافحة حشرات احترافية للأعمال التجارية'
            : 'Professional pest control services for businesses',
          serviceType: isArabic ? 'مكافحة الحشرات التجارية' : 'Commercial Pest Control'
        }}
      />
    </>
  );
}
