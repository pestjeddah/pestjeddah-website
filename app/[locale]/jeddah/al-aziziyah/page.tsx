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
  Building2,
  Users,
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
      ? 'مكافحة الحشرات بحي العزيزية جدة | خدمة شاملة للمجمعات السكنية — شركة الأسطورة'
      : 'Pest Control in Al-Aziziyah District Jeddah | Comprehensive Residential Complex Service — Al-Ustora',
    description: isArabic
      ? 'شركة مكافحة حشرات متخصصة في حي العزيزية بجدة. خدمة المجمعات السكنية، الأبراج، المكاتب، حلول شاملة وأسعار تنافسية.'
      : 'Specialized pest control company in Al-Aziziyah district, Jeddah. Residential complex service, towers, offices, comprehensive solutions and competitive prices.',
    keywords: isArabic 
      ? ['مكافحة حشرات العزيزية', 'رش مبيدات العزيزية جدة', 'مكافحة حشرات المجمعات السكنية', 'شركة مكافحة حشرات العزيزية']
      : ['pest control al-aziziyah', 'residential complex pest control', 'tower pest control jeddah', 'office pest control aziziyah'],
  };
}

export default function AlAziziyahPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const complexFeatures = isArabic ? [
    {
      title: 'خدمة المجمعات',
      description: 'متخصصون في خدمة المجمعات السكنية والأبراج',
      icon: Building2
    },
    {
      title: 'حلول جماعية',
      description: 'أسعار خاصة للمجمعات والمباني المتعددة',
      icon: Users
    },
    {
      title: 'إدارة شاملة',
      description: 'إدارة متكاملة لمكافحة الآفات في المباني الكبيرة',
      icon: Shield
    }
  ] : [
    {
      title: 'Complex Service',
      description: 'Specialists in residential complex and tower service',
      icon: Building2
    },
    {
      title: 'Group Solutions',
      description: 'Special prices for complexes and multiple buildings',
      icon: Users
    },
    {
      title: 'Comprehensive Management',
      description: 'Integrated pest management for large buildings',
      icon: Shield
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الحشرات للمجمعات في حي العزيزية بجدة'
    : 'Hello, I want complex pest control service in Al-Aziziyah district, Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'حي العزيزية' : 'Al-Aziziyah District'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 mb-4">
                <MapPin size={24} />
                <span className="text-lg font-semibold">
                  {isArabic ? 'حي العزيزية، جدة' : 'Al-Aziziyah District, Jeddah'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدمة المجمعات السكنية الشاملة' : 'Comprehensive Residential Complex Service'}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'خدمة متخصصة لمكافحة الحشرات في المجمعات السكنية والأبراج بحي العزيزية. حلول شاملة، إدارة متكاملة، وأسعار تنافسية للمباني الكبيرة.'
                  : 'Specialized pest control service for residential complexes and towers in Al-Aziziyah district. Comprehensive solutions, integrated management, and competitive prices for large buildings.'
                }
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-indigo-600">
                  <Building2 size={20} />
                  <span className="text-sm">{isArabic ? 'خدمة المجمعات' : 'Complex Service'}</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <Users size={20} />
                  <span className="text-sm">{isArabic ? 'أسعار جماعية' : 'Group Pricing'}</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <Clock size={20} />
                  <span className="text-sm">{isArabic ? 'جدولة مرنة' : 'Flexible Scheduling'}</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'إدارة شاملة' : 'Complete Management'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isArabic ? 'واتساب المجمعات' : 'Complex WhatsApp'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'اتصل الآن' : 'Call Now'}
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Commercial-pest-control-Jeddah.jpg"
                alt={isArabic ? 'خدمة المجمعات السكنية في العزيزية جدة' : 'Residential complex service in Al-Aziziyah Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Complex Badge */}
              <div className="absolute top-4 left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'خدمة المجمعات' : 'Complex Service'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مميزات خدمة المجمعات' : 'Complex Service Features'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'خدمة متكاملة ومصممة خصيصاً للمجمعات السكنية والأبراج'
                : 'Integrated service specifically designed for residential complexes and towers'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {complexFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                <feature.icon className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'إدارة متكاملة للمجمعات الكبيرة' : 'Integrated Management for Large Complexes'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احصل على خصومات خاصة للمجمعات السكنية والأبراج في العزيزية'
              : 'Get special discounts for residential complexes and towers in Al-Aziziyah'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'عرض سعر جماعي' : 'Group Quote'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'استشارة مجانية' : 'Free Consultation'}
            </a>
          </div>
        </div>
      </section>

      {/* About Al-Aziziyah */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isArabic ? 'حي العزيزية: حي شعبي حيوي' : 'Al-Aziziyah: Vibrant Popular District'}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'عن حي العزيزية' : 'About Al-Aziziyah'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'حي العزيزية من الأحياء الشعبية الكبيرة في جدة، يتميز بكثافة سكانية عالية ومجمعات سكنية متعددة. الحي يضم مزيجاً من المباني القديمة والحديثة، الأبراج السكنية، والمحلات التجارية.'
                    : 'Al-Aziziyah is one of large popular districts in Jeddah, characterized by high population density and multiple residential complexes. The district comprises mix of old and new buildings, residential towers, and commercial shops.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'الكثافة السكانية العالية والمجمعات السكنية تتطلب برامج مكافحة حشرات منتظمة وشاملة. نقدم عقود سنوية خاصة للمجمعات بأسعار تنافسية.'
                    : 'High population density and residential complexes require regular and comprehensive pest control programs. We offer special annual contracts for complexes at competitive prices.'
                  }
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'التحديات في العزيزية' : 'Challenges in Al-Aziziyah'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'الصراصير في المجمعات السكنية' : 'Cockroaches in residential complexes'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'النمل في الأبراج والشقق' : 'Ants in towers and apartments'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'القوارض في الأقبية والمخازن' : 'Rodents in basements and storage'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{isArabic ? 'البعوض في الصيف' : 'Mosquitoes in summer'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isArabic ? 'خدمات متخصصة للمجمعات السكنية' : 'Specialized Services for Residential Complexes'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href={`/${locale}/services/annual-contracts`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'عقود سنوية للمجمعات' : 'Annual Contracts for Complexes'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'وفر حتى 40% مع عقود المجمعات السكنية' : 'Save up to 40% with residential complex contracts'}</p>
                </Link>
                <Link href={`/${locale}/services/cockroach-control-jeddah`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'مكافحة الصراصير' : 'Cockroach Control'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'حلول شاملة للمباني متعددة الطوابق' : 'Comprehensive solutions for multi-story buildings'}</p>
                </Link>
                <Link href={`/${locale}/sectors/residential`} className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">{isArabic ? 'حماية سكنية' : 'Residential Protection'}</h4>
                  <p className="text-sm text-gray-600">{isArabic ? 'برامج وقائية للأبراج والمجمعات' : 'Prevention programs for towers and complexes'}</p>
                </Link>
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
              {isArabic ? 'نخدم المناطق المجاورة' : 'We Serve Nearby Areas'}
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-naseem`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center border">
                <MapPin className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'النسيم' : 'Al-Naseem'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
