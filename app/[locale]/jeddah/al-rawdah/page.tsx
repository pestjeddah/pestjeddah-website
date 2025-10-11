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

      {/* About Al-Rawdah Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'حي الروضة: منطقة حيوية ومتنوعة' : 'Al-Rawdah: Vibrant & Diverse Area'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'عن حي الروضة' : 'About Al-Rawdah District'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'حي الروضة من الأحياء المتنوعة في جدة، يضم مزيجاً من المباني السكنية، المكاتب، المحلات التجارية، والمطاعم. موقعه المتوسط وسهولة الوصول إليه جعله منطقة مكتظة ونشطة على مدار الساعة.'
                    : 'Al-Rawdah is one of Jeddah\'s diverse districts, comprising a mix of residential buildings, offices, shops, and restaurants. Its central location and easy access make it a crowded and active area around the clock.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'هذا التنوع والازدحام يخلق بيئة مثالية للحشرات. المطاعم والمقاهي الكثيرة، حركة القمامة المستمرة، والمباني القديمة المختلطة مع الحديثة - كلها عوامل تجعل مكافحة الحشرات ضرورة في الروضة.'
                    : 'This diversity and congestion create ideal environment for insects. Numerous restaurants and cafes, continuous trash movement, and old buildings mixed with modern ones - all factors making pest control necessity in Al-Rawdah.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'التحديات الخاصة بالروضة' : 'Specific Challenges in Al-Rawdah'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الصراصير في المطاعم والمحلات التجارية' : 'Cockroaches in restaurants and shops'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الفئران في المخازن والبدرومات' : 'Mice in warehouses and basements'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'النمل في المكاتب والشقق السكنية' : 'Ants in offices and residential apartments'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الذباب بالقرب من حاويات القمامة' : 'Flies near trash containers'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'بق الفراش في بعض المباني القديمة' : 'Bed bugs in some old buildings'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'خدماتنا المتخصصة في الروضة' : 'Our Specialized Services in Al-Rawdah'}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Link href={`/${locale}/services/cockroach-control-jeddah`} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Bug size={24} className="text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'مكافحة الصراصير' : 'Cockroach Control'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'حلول متقدمة للقضاء على الصراصير الألمانية والأمريكية في المطاعم والمنازل.'
                    : 'Advanced solutions to eliminate German and American cockroaches in restaurants and homes.'
                  }
                </p>
                <span className="text-red-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>

              <Link href={`/${locale}/services/rodents-control-jeddah`} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'مكافحة القوارض' : 'Rodent Control'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'برامج شاملة للتخلص من الفئران والجرذان في المستودعات والمباني.'
                    : 'Comprehensive programs to eliminate mice and rats in warehouses and buildings.'
                  }
                </p>
                <span className="text-blue-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>

              <Link href={`/${locale}/sectors/commercial`} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Home size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {isArabic ? 'حلول تجارية' : 'Commercial Solutions'}
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  {isArabic 
                    ? 'عقود سنوية للمطاعم والمحلات التجارية في الروضة مع تقارير دورية.'
                    : 'Annual contracts for restaurants and commercial shops in Al-Rawdah with periodic reports.'
                  }
                </p>
                <span className="text-green-600 font-semibold text-sm hover:underline">
                  {isArabic ? 'اعرف المزيد ←' : 'Learn More ←'}
                </span>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'لماذا نحن الأسرع في الروضة؟' : 'Why Are We the Fastest in Al-Rawdah?'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {isArabic 
                  ? 'موقع الروضة المتوسط في جدة يجعلنا نصل إليك خلال 30 دقيقة فقط. لدينا فريق متواجد دائماً في المنطقة، مجهز بكل المعدات والمواد اللازمة. نفهم طبيعة المباني في الروضة - سواء كانت شقق سكنية، مكاتب، أو محلات تجارية - ونعرف كيف نتعامل مع كل نوع بكفاءة.'
                  : 'Al-Rawdah\'s central location in Jeddah allows us to reach you within just 30 minutes. We have team always present in the area, equipped with all necessary equipment and materials. We understand nature of buildings in Al-Rawdah - whether residential apartments, offices, or commercial shops - and know how to handle each type efficiently.'
                }
              </p>
              <Link href={`/${locale}/services/annual-contracts`} className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                <span>{isArabic ? 'عقود خاصة لسكان الروضة' : 'Special Contracts for Al-Rawdah Residents'}</span>
                <CheckCircle size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'نصائح للوقاية من الحشرات في الروضة' : 'Tips for Pest Prevention in Al-Rawdah'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'للشقق والمنازل' : 'For Apartments & Homes'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تنظيف المطبخ يومياً وعدم ترك بقايا طعام' : 'Clean kitchen daily and don\'t leave food remnants'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'إصلاح تسربات المياه فوراً في الحمامات' : 'Fix water leaks immediately in bathrooms'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'إغلاق الشقوق والفتحات حول الأبواب والشبابيك' : 'Close cracks and openings around doors and windows'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تخزين القمامة في حاويات محكمة الإغلاق' : 'Store trash in airtight containers'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'للمطاعم والمحلات' : 'For Restaurants & Shops'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تنظيف المخزن والمطبخ بعمق يومياً' : 'Deep clean storage and kitchen daily'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'فحص البضائع الواردة من الموردين' : 'Inspect incoming goods from suppliers'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'عقد مكافحة حشرات دوري (شهري على الأقل)' : 'Regular pest control contract (at least monthly)'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{isArabic ? 'تنظيف شفاطات المطبخ - مخبأ للصراصير' : 'Clean kitchen exhausts - cockroach hideout'}</span>
                  </li>
                </ul>
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
              {isArabic ? 'نخدم أيضاً المناطق المجاورة للروضة' : 'We Also Serve Areas Near Al-Rawdah'}
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-aziziyah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'العزيزية' : 'Al-Aziziyah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-naseem`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'النسيم' : 'Al-Naseem'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
