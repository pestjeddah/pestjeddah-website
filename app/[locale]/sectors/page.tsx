import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Home, 
  Utensils, 
  Hotel, 
  Warehouse, 
  Heart, 
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

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
      ? 'قطاعات الخدمة — شركة الأسطورة | سكني، تجاري، طبي، تعليمي'
      : 'Service Sectors — Al-Ustora | Residential, Commercial, Medical, Educational',
    description: isArabic
      ? 'خدمات مكافحة الحشرات لجميع القطاعات: المنازل، المطاعم، الفنادق، المستودعات، المستشفيات، المدارس. حلول متخصصة لكل قطاع.'
      : 'Pest control services for all sectors: homes, restaurants, hotels, warehouses, hospitals, schools. Specialized solutions for each sector.',
  };
}

export default function SectorsPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const sectors = [
    {
      icon: Home,
      title: isArabic ? 'القطاع السكني' : 'Residential Sector',
      description: isArabic 
        ? 'خدمات مكافحة الحشرات للمنازل والشقق والفلل. حلول آمنة للعائلات مع ضمان شامل.'
        : 'Pest control services for homes, apartments and villas. Safe family solutions with comprehensive guarantee.',
      features: isArabic 
        ? ['فحص مجاني', 'مواد آمنة للأطفال', 'ضمان 6 أشهر', 'متابعة دورية']
        : ['Free inspection', 'Child-safe materials', '6 months guarantee', 'Regular follow-up'],
      image: '/images/Residential-pest-control.jpg',
      link: locale === 'ar' ? '/sectors/residential' : '/en/sectors/residential'
    },
    {
      icon: Utensils,
      title: isArabic ? 'المطاعم والمقاهي' : 'Restaurants & Cafes',
      description: isArabic 
        ? 'برامج متخصصة للمطاعم تتوافق مع معايير السلامة الغذائية والصحة العامة.'
        : 'Specialized restaurant programs complying with food safety and public health standards.',
      features: isArabic 
        ? ['شهادات HACCP', 'مواد معتمدة غذائياً', 'جدولة مرنة', 'تقارير دورية']
        : ['HACCP certificates', 'Food-grade approved materials', 'Flexible scheduling', 'Regular reports'],
      image: '/images/Pest-control-for-restaurants.jpg',
      link: locale === 'ar' ? '/sectors/restaurants' : '/en/sectors/restaurants'
    },
    {
      icon: Hotel,
      title: isArabic ? 'الفنادق والضيافة' : 'Hotels & Hospitality',
      description: isArabic 
        ? 'حلول متكاملة للفنادق والمنتجعات لضمان راحة النزلاء والمحافظة على السمعة.'
        : 'Integrated solutions for hotels and resorts ensuring guest comfort and reputation maintenance.',
      features: isArabic 
        ? ['خدمة سرية', 'عمل ليلي', 'استجابة فورية', 'فرق متخصصة']
        : ['Discreet service', 'Night operations', 'Immediate response', 'Specialized teams'],
      image: '/images/Commercial-pest-control-Jeddah.jpg',
      link: locale === 'ar' ? '/sectors/commercial' : '/en/sectors/commercial'
    },
    {
      icon: Warehouse,
      title: isArabic ? 'المستودعات والمصانع' : 'Warehouses & Factories',
      description: isArabic 
        ? 'حماية شاملة للمخزون والمنتجات من الآفات مع برامج وقائية طويلة المدى.'
        : 'Comprehensive protection of inventory and products from pests with long-term preventive programs.',
      features: isArabic 
        ? ['حماية المخزون', 'مراقبة مستمرة', 'تقنيات متقدمة', 'عقود سنوية']
        : ['Inventory protection', 'Continuous monitoring', 'Advanced techniques', 'Annual contracts'],
      image: '/images/Best-pest-control-company.jpg',
      link: locale === 'ar' ? '/sectors/commercial' : '/en/sectors/commercial'
    },
    {
      icon: Heart,
      title: isArabic ? 'المستشفيات والعيادات' : 'Hospitals & Clinics',
      description: isArabic 
        ? 'خدمات متخصصة للمرافق الطبية بأعلى معايير التعقيم والسلامة الصحية.'
        : 'Specialized services for medical facilities with highest sterilization and health safety standards.',
      features: isArabic 
        ? ['معايير طبية', 'مواد معقمة', 'فرق مدربة', 'سرية تامة']
        : ['Medical standards', 'Sterile materials', 'Trained teams', 'Complete confidentiality'],
      image: '/images/Safe-pest-control.jpg',
      link: locale === 'ar' ? '/sectors/commercial' : '/en/sectors/commercial'
    },
    {
      icon: GraduationCap,
      title: isArabic ? 'المدارس والجامعات' : 'Schools & Universities',
      description: isArabic 
        ? 'برامج آمنة للمؤسسات التعليمية تحمي الطلاب وتوفر بيئة تعليمية صحية.'
        : 'Safe programs for educational institutions protecting students and providing healthy learning environment.',
      features: isArabic 
        ? ['أمان الطلاب', 'مواد غير سامة', 'أوقات مناسبة', 'شهادات صحية']
        : ['Student safety', 'Non-toxic materials', 'Convenient times', 'Health certificates'],
      image: '/images/Eco-friendly-pest-control.jpg',
      link: locale === 'ar' ? '/sectors/commercial' : '/en/sectors/commercial'
    }
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'القطاعات' : 'Sectors'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'قطاعات الخدمة' : 'Service Sectors'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {isArabic 
                ? 'نقدم خدمات مكافحة الحشرات المتخصصة لجميع القطاعات بحلول مصممة خصيصاً لتلبية احتياجات كل مجال'
                : 'We provide specialized pest control services for all sectors with solutions specifically designed to meet the needs of each field'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'حلول متخصصة' : 'Specialized Solutions'}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'معايير عالية' : 'High Standards'}</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle size={20} />
                <span>{isArabic ? 'شهادات معتمدة' : 'Certified Documents'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Link key={index} href={sector.link} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 block">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <sector.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {sector.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {sector.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {sector.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-primary">
                      <span className="font-semibold text-sm">
                        {isArabic ? 'اعرف المزيد' : 'Learn More'}
                      </span>
                      {rtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'لماذا نحن الأفضل لقطاعك؟' : 'Why Are We The Best for Your Sector?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'خبرة قطاعية' : 'Sector Expertise'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'فهم عميق لمتطلبات كل قطاع وتحدياته الخاصة'
                  : 'Deep understanding of each sector\'s requirements and unique challenges'
                }
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'معايير عالمية' : 'Global Standards'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'التزام بأعلى معايير الجودة والسلامة المهنية'
                  : 'Commitment to highest quality and professional safety standards'
                }
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isArabic ? 'دعم مستمر' : 'Continuous Support'}
              </h3>
              <p className="text-gray-600">
                {isArabic 
                  ? 'متابعة دورية وصيانة مستمرة لضمان أفضل النتائج'
                  : 'Regular follow-up and continuous maintenance ensuring best results'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احصل على حل متخصص لقطاعك' : 'Get Specialized Solution for Your Sector'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'استشارة مجانية وخطة مخصصة حسب احتياجات مجالك'
              : 'Free consultation and customized plan according to your field needs'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'احصل على استشارة' : 'Get Consultation'}
            </Link>
            <a
              href={`tel:+966-XX-XXX-XXXX`}
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
          title: isArabic ? 'قطاعات الخدمة' : 'Service Sectors',
          description: isArabic 
            ? 'خدمات مكافحة الحشرات لجميع القطاعات'
            : 'Pest control services for all sectors',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}

