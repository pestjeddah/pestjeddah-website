import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star,
  CheckCircle,
  Clock,
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
      ? 'مكافحة حشرات بحي الحمراء جدة — استجابة سريعة وعقود وقاية'
      : 'Pest Control in Al Hamra Jeddah — Quick Response & Prevention Contracts',
    description: isArabic
      ? 'خدمة مكافحة الحشرات في حي الحمراء بجدة. فريق متخصص، استجابة سريعة، أسعار مناسبة. اتصل الآن للحصول على فحص مجاني.'
      : 'Pest control service in Al Hamra district Jeddah. Specialized team, quick response, reasonable prices. Call now for free inspection.',
  };
}

export default function AlHamraPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const commonPests = isArabic ? [
    'الصراصير الألمانية',
    'النمل الأسود',
    'البعوض',
    'العناكب المنزلية',
    'الفئران الصغيرة',
    'ذباب المطبخ'
  ] : [
    'German Cockroaches',
    'Black Ants',
    'Mosquitoes',
    'House Spiders',
    'Small Mice',
    'Kitchen Flies'
  ];

  const testimonials = [
    {
      name: isArabic ? 'أحمد محمد' : 'Ahmed Mohammed',
      text: isArabic 
        ? 'خدمة ممتازة في الحمراء، تم حل مشكلة الصراصير نهائياً'
        : 'Excellent service in Al Hamra, cockroach problem solved permanently',
      rating: 5
    },
    {
      name: isArabic ? 'فاطمة عبدالله' : 'Fatima Abdullah',
      text: isArabic 
        ? 'فريق محترف وسريع، أنصح بهم بشدة'
        : 'Professional and fast team, highly recommend them',
      rating: 5
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات في حي الحمراء'
    : 'Hello, I want pest control service in Al Hamra district';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <Link href="/jeddah" className="hover:text-primary">{isArabic ? 'مناطق جدة' : 'Jeddah Areas'}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'الحمراء' : 'Al Hamra'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-primary" size={24} />
                <span className="text-primary font-semibold">
                  {isArabic ? 'جدة' : 'Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة حشرات بحي الحمراء' : 'Pest Control in Al Hamra'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة لمكافحة الحشرات في حي الحمراء بجدة. فريق محلي خبير يصل إليك خلال 30 دقيقة.'
                  : 'Specialized pest control service in Al Hamra district Jeddah. Expert local team reaches you within 30 minutes.'
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
                  {isArabic ? 'اتصل للفحص المجاني' : 'Call for Free Inspection'}
                </a>
              </div>

              {/* Local Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <Clock className="mx-auto text-green-600 mb-2" size={24} />
                  <span className="text-sm font-medium">{isArabic ? '30 دقيقة' : '30 Minutes'}</span>
                  <p className="text-xs text-gray-600">{isArabic ? 'وقت الوصول' : 'Arrival Time'}</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <Shield className="mx-auto text-blue-600 mb-2" size={24} />
                  <span className="text-sm font-medium">{isArabic ? 'ضمان محلي' : 'Local Guarantee'}</span>
                  <p className="text-xs text-gray-600">{isArabic ? '6 أشهر' : '6 Months'}</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <Star className="mx-auto text-yellow-600 mb-2" size={24} />
                  <span className="text-sm font-medium">4.9/5</span>
                  <p className="text-xs text-gray-600">{isArabic ? 'تقييم المنطقة' : 'Area Rating'}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Professional pest control.jpg"
                alt={isArabic ? 'مكافحة حشرات حي الحمراء' : 'Al Hamra pest control'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Local Badge */}
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold">
                  {isArabic ? 'خدمة محلية' : 'Local Service'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pests Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'الآفات الشائعة في حي الحمراء' : 'Common Pests in Al Hamra District'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {commonPests.map((pest, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-800">{pest}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">
                {isArabic ? 'لماذا هذه الآفات شائعة في الحمراء؟' : 'Why are these pests common in Al Hamra?'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic 
                  ? 'حي الحمراء كونه منطقة حيوية ومكتظة بالسكان، يوفر بيئة مناسبة لتكاثر الحشرات. القرب من المطاعم والأسواق يزيد من احتمالية انتشار الآفات.'
                  : 'Al Hamra district, being a vibrant and densely populated area, provides suitable environment for pest breeding. Proximity to restaurants and markets increases the likelihood of pest spread.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'آراء العملاء في الحمراء' : 'Customer Reviews in Al Hamra'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {isArabic ? 'مقيم في الحمراء' : 'Al Hamra Resident'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isArabic ? 'مميزات خدمتنا في الحمراء' : 'Our Service Advantages in Al Hamra'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {isArabic ? 'معرفة محلية' : 'Local Knowledge'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isArabic 
                    ? 'خبرة عميقة بطبيعة المباني والآفات الشائعة في الحمراء'
                    : 'Deep expertise with Al Hamra buildings and common pests'
                  }
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {isArabic ? 'وصول سريع' : 'Quick Arrival'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isArabic 
                    ? 'فريق قريب من المنطقة للوصول خلال 30 دقيقة'
                    : 'Team near the area for arrival within 30 minutes'
                  }
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {isArabic ? 'ضمان محلي' : 'Local Guarantee'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isArabic 
                    ? 'ضمان خاص لسكان الحمراء مع متابعة دورية'
                    : 'Special guarantee for Al Hamra residents with regular follow-up'
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
            {isArabic ? 'خدمة فورية في حي الحمراء' : 'Immediate Service in Al Hamra'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'نحن أقرب إليك مما تتوقع'
              : 'We are closer to you than you expect'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'احجز عبر واتساب' : 'Book via WhatsApp'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'مكافحة حشرات بحي الحمراء جدة' : 'Pest Control in Al Hamra Jeddah',
          description: isArabic 
            ? 'خدمة مكافحة الحشرات في حي الحمراء بجدة'
            : 'Pest control service in Al Hamra district Jeddah',
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control'
        }}
      />
    </>
  );
}



