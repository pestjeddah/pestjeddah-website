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
  AlertTriangle,
  Target,
  Zap,
  Heart,
  Wind,
  Building,
  FileCheck
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
      ? 'التدخين والتعقيم بجدة | تدخين شامل ومواد معتمدة — شركة الأسطورة'
      : 'Fumigation & Disinfection in Jeddah | Comprehensive Fumigation & Certified Materials — Al-Ustora',
    description: isArabic
      ? 'خدمات التدخين والتعقيم بجدة للمباني والمستودعات. تدخين شامل، مواد معتمدة، أمان تام، شهادة جودة. ضمان بيئة صحية آمنة.'
      : 'Fumigation and disinfection services in Jeddah for buildings and warehouses. Comprehensive fumigation, certified materials, complete safety, quality certificate. Guaranteed safe healthy environment.',
    keywords: isArabic 
      ? ['التدخين جدة', 'التعقيم', 'تدخين المباني', 'تدخين المستودعات', 'مواد معتمدة']
      : ['fumigation jeddah', 'disinfection', 'building fumigation', 'warehouse fumigation', 'certified materials'],
  };
}

export default function FumigationPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const serviceTypes = isArabic ? [
    {
      title: 'تدخين المباني السكنية',
      description: 'تدخين شامل للمنازل والشقق للقضاء على جميع الآفات',
      duration: '6-8 ساعات',
      preparation: 'إخلاء المبنى لمدة 24 ساعة'
    },
    {
      title: 'تدخين المستودعات',
      description: 'حماية البضائع والمخزون من الحشرات والقوارض',
      duration: '12-24 ساعة',
      preparation: 'تأمين البضائع وإخلاء العمال'
    },
    {
      title: 'تدخين المطاعم',
      description: 'تعقيم شامل يتوافق مع معايير السلامة الغذائية',
      duration: '8-12 ساعة',
      preparation: 'إزالة الطعام وتغطية المعدات'
    },
    {
      title: 'تدخين المصانع',
      description: 'حلول صناعية للمصانع والمرافق الإنتاجية',
      duration: '24-48 ساعة',
      preparation: 'توقف الإنتاج وإخلاء العمال'
    }
  ] : [
    {
      title: 'Residential Building Fumigation',
      description: 'Comprehensive fumigation for homes and apartments to eliminate all pests',
      duration: '6-8 hours',
      preparation: 'Evacuate building for 24 hours'
    },
    {
      title: 'Warehouse Fumigation',
      description: 'Protect goods and inventory from insects and rodents',
      duration: '12-24 hours',
      preparation: 'Secure goods and evacuate workers'
    },
    {
      title: 'Restaurant Fumigation',
      description: 'Comprehensive sterilization complying with food safety standards',
      duration: '8-12 hours',
      preparation: 'Remove food and cover equipment'
    },
    {
      title: 'Factory Fumigation',
      description: 'Industrial solutions for factories and production facilities',
      duration: '24-48 hours',
      preparation: 'Stop production and evacuate workers'
    }
  ];

  const processSteps = isArabic ? [
    {
      title: 'التقييم والتخطيط',
      description: 'فحص شامل للمبنى وتصميم خطة التدخين المناسبة',
      icon: Target
    },
    {
      title: 'التحضير والتأمين',
      description: 'تحضير المكان وتأمين المعدات والمواد اللازمة',
      icon: Shield
    },
    {
      title: 'التدخين والتعقيم',
      description: 'تطبيق عملية التدخين بمواد معتمدة وتقنيات متقدمة',
      icon: Wind
    },
    {
      title: 'التهوية والفحص',
      description: 'تهوية المكان وفحص النتائج وإصدار شهادة التعقيم',
      icon: FileCheck
    }
  ] : [
    {
      title: 'Assessment & Planning',
      description: 'Comprehensive building inspection and appropriate fumigation plan design',
      icon: Target
    },
    {
      title: 'Preparation & Security',
      description: 'Site preparation and securing necessary equipment and materials',
      icon: Shield
    },
    {
      title: 'Fumigation & Disinfection',
      description: 'Apply fumigation process with certified materials and advanced techniques',
      icon: Wind
    },
    {
      title: 'Ventilation & Inspection',
      description: 'Site ventilation, results inspection and sterilization certificate issuance',
      icon: FileCheck
    }
  ];

  const safetyMeasures = isArabic ? [
    'استخدام مواد معتمدة من الهيئات الصحية',
    'فريق مدرب على أعلى معايير السلامة',
    'معدات حماية شخصية متكاملة',
    'مراقبة مستمرة لمستويات الغازات',
    'بروتوكولات طوارئ شاملة',
    'شهادات سلامة معتمدة'
  ] : [
    'Use materials approved by health authorities',
    'Team trained on highest safety standards',
    'Complete personal protective equipment',
    'Continuous monitoring of gas levels',
    'Comprehensive emergency protocols',
    'Certified safety certificates'
  ];

  const applications = isArabic ? [
    {
      icon: Building,
      title: 'المباني والمنشآت',
      description: 'تدخين شامل للمباني السكنية والتجارية'
    },
    {
      icon: Target,
      title: 'المستودعات والمخازن',
      description: 'حماية البضائع والمخزون من الآفات'
    },
    {
      icon: Heart,
      title: 'المرافق الطبية',
      description: 'تعقيم معزز للمستشفيات والعيادات'
    },
    {
      icon: Zap,
      title: 'المصانع والورش',
      description: 'حلول صناعية متخصصة'
    }
  ] : [
    {
      icon: Building,
      title: 'Buildings & Facilities',
      description: 'Comprehensive fumigation for residential and commercial buildings'
    },
    {
      icon: Target,
      title: 'Warehouses & Storage',
      description: 'Protect goods and inventory from pests'
    },
    {
      icon: Heart,
      title: 'Medical Facilities',
      description: 'Enhanced sterilization for hospitals and clinics'
    },
    {
      icon: Zap,
      title: 'Factories & Workshops',
      description: 'Specialized industrial solutions'
    }
  ];

  const faqItems = isArabic ? [
    {
      question: 'ما هو الفرق بين التدخين والرش العادي؟',
      answer: 'التدخين يصل إلى جميع الأماكن المخفية والشقوق بواسطة الغاز، بينما الرش العادي يغطي الأسطح المرئية فقط. التدخين أكثر شمولية وفعالية للقضاء التام على الآفات.'
    },
    {
      question: 'كم من الوقت يجب إخلاء المبنى؟',
      answer: 'عادة 24-48 ساعة حسب نوع المبنى وحجمه. سنحدد المدة الدقيقة بعد التقييم وسنقوم بفحص جودة الهواء قبل السماح بالعودة.'
    },
    {
      question: 'هل المواد المستخدمة آمنة؟',
      answer: 'نعم، نستخدم مواد معتمدة من وزارة الصحة والهيئات الدولية. جميع المواد تتحلل بالكامل ولا تترك بقايا ضارة بعد التهوية المناسبة.'
    },
    {
      question: 'هل يحتاج التدخين لترخيص خاص؟',
      answer: 'نعم، التدخين يتطلب تراخيص خاصة وفريق مدرب. شركتنا مرخصة بالكامل ولدينا جميع الشهادات المطلوبة لتنفيذ عمليات التدخين بأمان.'
    },
    {
      question: 'ما هي الضمانات المقدمة؟',
      answer: 'نقدم ضمان شامل لمدة 6-12 شهر حسب نوع المبنى والخدمة. كما نصدر شهادة تعقيم معتمدة ونقدم تقرير مفصل عن العملية.'
    }
  ] : [
    {
      question: 'What is the difference between fumigation and regular spraying?',
      answer: 'Fumigation reaches all hidden places and cracks through gas, while regular spraying only covers visible surfaces. Fumigation is more comprehensive and effective for complete pest elimination.'
    },
    {
      question: 'How long should the building be evacuated?',
      answer: 'Usually 24-48 hours depending on building type and size. We will determine the exact duration after assessment and conduct air quality testing before allowing return.'
    },
    {
      question: 'Are the materials used safe?',
      answer: 'Yes, we use materials approved by Ministry of Health and international authorities. All materials decompose completely and leave no harmful residues after proper ventilation.'
    },
    {
      question: 'Does fumigation require special licensing?',
      answer: 'Yes, fumigation requires special licenses and trained team. Our company is fully licensed and has all required certificates to perform fumigation operations safely.'
    },
    {
      question: 'What guarantees are provided?',
      answer: 'We provide comprehensive guarantee for 6-12 months depending on building type and service. We also issue certified sterilization certificate and provide detailed process report.'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة التدخين والتعقيم بجدة'
    : 'Hello, I want fumigation and disinfection service in Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'التدخين والتعقيم' : 'Fumigation & Disinfection'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'التدخين والتعقيم بجدة' : 'Fumigation & Disinfection in Jeddah'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'تدخين شامل وتعقيم للمباني والمستودعات بمواد معتمدة وتقنيات متقدمة. ضمان بيئة صحية آمنة مع شهادة جودة معتمدة.'
                  : 'Comprehensive fumigation and disinfection for buildings and warehouses with certified materials and advanced techniques. Guaranteed safe healthy environment with certified quality certificate.'
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
                  {isArabic ? 'احجز تدخين شامل' : 'Book Comprehensive Fumigation'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'استشارة فنية' : 'Technical Consultation'}
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Wind size={20} />
                  <span className="text-sm">{isArabic ? 'تدخين شامل' : 'Comprehensive Fumigation'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'مواد معتمدة' : 'Certified Materials'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <FileCheck size={20} />
                  <span className="text-sm">{isArabic ? 'شهادة جودة' : 'Quality Certificate'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm">{isArabic ? 'أمان تام' : 'Complete Safety'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Pest-spray-service.jpg"
                alt={isArabic ? 'التدخين والتعقيم بجدة' : 'Fumigation and disinfection in Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Certified Materials Badge */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'مواد معتمدة' : 'Certified Materials'}
                  </span>
                </div>
              </div>

              {/* Professional Badge */}
              <div className="absolute bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-xs">{isArabic ? 'فعالية التدخين' : 'Fumigation Effectiveness'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'أنواع خدمات التدخين' : 'Types of Fumigation Services'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-blue-600">{isArabic ? 'المدة:' : 'Duration:'}</span>
                    <p className="text-gray-600">{service.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-600">{isArabic ? 'التحضير:' : 'Preparation:'}</span>
                    <p className="text-gray-600">{service.preparation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مجالات التطبيق' : 'Application Areas'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <app.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'مراحل عملية التدخين' : 'Fumigation Process Stages'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'إجراءات السلامة والأمان' : 'Safety and Security Measures'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'نتبع أعلى معايير السلامة العالمية لضمان أمان العملية'
                  : 'We follow highest global safety standards to ensure process safety'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyMeasures.map((measure, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="text-blue-500 mt-1" size={20} />
                  <span className="text-gray-800">{measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'احصل على تدخين شامل ومعتمد' : 'Get Comprehensive Certified Fumigation'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'بيئة صحية آمنة مع شهادة جودة معتمدة وضمان شامل'
              : 'Safe healthy environment with certified quality certificate and comprehensive guarantee'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'واتساب فوري' : 'WhatsApp Now'}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'اتصل الآن' : 'Call Now'}
            </a>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="service" 
        data={{
          title: isArabic ? 'التدخين والتعقيم بجدة' : 'Fumigation & Disinfection in Jeddah',
          description: isArabic 
            ? 'تدخين شامل وتعقيم للمباني والمستودعات بمواد معتمدة'
            : 'Comprehensive fumigation and disinfection for buildings and warehouses',
          serviceType: isArabic ? 'التدخين والتعقيم' : 'Fumigation & Disinfection'
        }}
      />
      
      <SchemaInjector 
        type="faq" 
        data={{ questions: faqItems }}
      />
    </>
  );
}

