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
  Bug,
  Home,
  Shield
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
      ? 'مكافحة الحشرات بحي الروضة جدة | خدمة سريعة ومضمونة — شركة الأسطورة'
      : 'Pest Control in Al-Rawdah District Jeddah | Fast & Guaranteed Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات متخصصة في حي الروضة بجدة. خدمة سريعة خلال ساعات، فريق محترف، أسعار تنافسية، ضمان شامل على جميع خدمات مكافحة الآفات.'
      : 'Specialized pest control company in Al-Rawdah district, Jeddah. Fast service within hours, professional team, competitive prices, comprehensive guarantee on all pest control services.',
    keywords: isArabic 
      ? ['مكافحة حشرات الروضة', 'رش مبيدات الروضة جدة', 'شركة مكافحة حشرات الروضة', 'مكافحة الصراصير الروضة']
      : ['pest control al-rawdah', 'exterminator al-rawdah jeddah', 'pest control company al-rawdah', 'cockroach control al-rawdah'],
  };
}

export default function AlRawdahPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const commonPests = isArabic ? [
    {
      name: 'الصراصير',
      description: 'مشكلة شائعة في المطابخ والحمامات',
      severity: 'عالية',
      icon: Bug
    },
    {
      name: 'النمل',
      description: 'ينتشر في المنازل والمكاتب',
      severity: 'متوسطة',
      icon: Bug
    },
    {
      name: 'البعوض',
      description: 'خاصة في المناطق القريبة من المياه',
      severity: 'متوسطة',
      icon: Bug
    },
    {
      name: 'الذباب',
      description: 'مشكلة موسمية خلال الصيف',
      severity: 'متوسطة',
      icon: Bug
    }
  ] : [
    {
      name: 'Cockroaches',
      description: 'Common problem in kitchens and bathrooms',
      severity: 'High',
      icon: Bug
    },
    {
      name: 'Ants',
      description: 'Spread in homes and offices',
      severity: 'Medium',
      icon: Bug
    },
    {
      name: 'Mosquitoes',
      description: 'Especially in areas near water',
      severity: 'Medium',
      icon: Bug
    },
    {
      name: 'Flies',
      description: 'Seasonal problem during summer',
      severity: 'Medium',
      icon: Bug
    }
  ];

  const testimonials = isArabic ? [
    {
      name: 'أحمد السالم',
      location: 'الروضة، جدة',
      text: 'خدمة ممتازة وسريعة. تم حل مشكلة الصراصير نهائياً',
      rating: 5
    },
    {
      name: 'فاطمة الزهراني',
      location: 'الروضة، جدة',
      text: 'فريق محترف ومعدات حديثة. أنصح بالتعامل معهم',
      rating: 5
    },
    {
      name: 'محمد الحربي',
      location: 'الروضة، جدة',
      text: 'أسعار معقولة وضمان حقيقي. شكراً للفريق المتميز',
      rating: 5
    }
  ] : [
    {
      name: 'Ahmed Al-Salem',
      location: 'Al-Rawdah, Jeddah',
      text: 'Excellent and fast service. Cockroach problem solved permanently',
      rating: 5
    },
    {
      name: 'Fatima Al-Zahrani',
      location: 'Al-Rawdah, Jeddah',
      text: 'Professional team with modern equipment. Highly recommend',
      rating: 5
    },
    {
      name: 'Mohammed Al-Harbi',
      location: 'Al-Rawdah, Jeddah',
      text: 'Reasonable prices and real guarantee. Thanks to the excellent team',
      rating: 5
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات في حي الروضة بجدة'
    : 'Hello, I want pest control service in Al-Rawdah district, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'حي الروضة' : 'Al-Rawdah District'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'حي الروضة، جدة' : 'Al-Rawdah District, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة الحشرات في الروضة' : 'Pest Control in Al-Rawdah'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة مكافحة حشرات متخصصة في حي الروضة بجدة. فريق محترف، خدمة سريعة خلال ساعات، وضمان شامل على جميع الخدمات.'
                  : 'Specialized pest control service in Al-Rawdah district, Jeddah. Professional team, fast service within hours, and comprehensive guarantee on all services.'
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
                  {isArabic ? 'واتساب فوري' : 'WhatsApp Now'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">30 دقيقة</div>
                  <div className="text-xs text-gray-600">{isArabic ? 'زمن الوصول' : 'Response Time'}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">6 {isArabic ? 'أشهر' : 'months'}</div>
                  <div className="text-xs text-gray-600">{isArabic ? 'ضمان' : 'Guarantee'}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">4.9</div>
                  <div className="text-xs text-gray-600">{isArabic ? 'تقييم العملاء' : 'Customer Rating'}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Residential-pest-control.jpg"
                alt={isArabic ? 'مكافحة الحشرات في الروضة جدة' : 'Pest control in Al-Rawdah Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Service Badge */}
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Home size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة منزلية' : 'Home Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Al-Rawdah */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {isArabic ? 'عن حي الروضة' : 'About Al-Rawdah District'}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {isArabic 
                ? 'حي الروضة من الأحياء الراقية والحيوية في جدة، يتميز بكثافة سكانية عالية ومزيج من المنازل والمكاتب والمحال التجارية. هذا التنوع يتطلب خدمات مكافحة حشرات متخصصة ومتنوعة لتلبية احتياجات جميع السكان والشركات.'
                : 'Al-Rawdah is one of the upscale and vibrant districts in Jeddah, characterized by high population density and a mix of homes, offices, and commercial establishments. This diversity requires specialized and varied pest control services to meet the needs of all residents and businesses.'
              }
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl">
                <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">
                  {isArabic ? 'المنازل السكنية' : 'Residential Homes'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic 
                    ? 'حلول آمنة للعائلات مع ضمان عدم الإضرار بالأطفال والحيوانات الأليفة'
                    : 'Safe solutions for families ensuring no harm to children and pets'
                  }
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <Bug className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">
                  {isArabic ? 'المكاتب التجارية' : 'Commercial Offices'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic 
                    ? 'خدمات متخصصة للمكاتب والشركات مع جدولة مرنة'
                    : 'Specialized services for offices and companies with flexible scheduling'
                  }
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">
                  {isArabic ? 'المحال التجارية' : 'Commercial Shops'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isArabic 
                    ? 'حماية شاملة للمتاجر والمطاعم مع الحفاظ على النشاط التجاري'
                    : 'Comprehensive protection for stores and restaurants while maintaining business activity'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pests in Al-Rawdah */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'الآفات الشائعة في الروضة' : 'Common Pests in Al-Rawdah'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'نحن متخصصون في مكافحة جميع أنواع الحشرات والآفات الشائعة في منطقة الروضة'
                : 'We specialize in controlling all types of insects and pests common in Al-Rawdah area'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonPests.map((pest, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <pest.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{pest.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{pest.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  pest.severity === 'عالية' || pest.severity === 'High'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {pest.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'آراء عملائنا في الروضة' : 'Our Customers in Al-Rawdah Say'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {isArabic ? 'لماذا نحن الأفضل في الروضة؟' : 'Why Are We The Best in Al-Rawdah?'}
              </h2>
              <div className="space-y-4">
                {[
                  isArabic ? 'معرفة عميقة بطبيعة المنطقة' : 'Deep knowledge of the area\'s nature',
                  isArabic ? 'فريق مقيم في جدة متاح على مدار الساعة' : '24/7 available team based in Jeddah',
                  isArabic ? 'أسعار تنافسية خاصة لسكان الروضة' : 'Competitive prices special for Al-Rawdah residents',
                  isArabic ? 'خدمة سريعة خلال 30 دقيقة' : 'Fast service within 30 minutes',
                  isArabic ? 'ضمان شامل وصيانة مجانية' : 'Comprehensive guarantee and free maintenance'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {isArabic ? 'احجز خدمتك الآن' : 'Book Your Service Now'}
                </h3>
                <p className="mb-6 opacity-90">
                  {isArabic 
                    ? 'خصم خاص لسكان الروضة - وصول خلال 30 دقيقة'
                    : 'Special discount for Al-Rawdah residents - Arrival within 30 minutes'
                  }
                </p>
                <div className="space-y-4">
                  <Link
                    href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    {isArabic ? 'واتساب مباشر' : 'Direct WhatsApp'}
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    {isArabic ? 'اتصال فوري' : 'Immediate Call'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة الحشرات في الروضة' : 'Pest Control in Al-Rawdah',
          description: isArabic 
            ? 'خدمة مكافحة حشرات متخصصة في حي الروضة بجدة'
            : 'Specialized pest control service in Al-Rawdah district, Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}
