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
  Search,
  Droplets,
  Ban
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
      ? 'مكافحة النمل بجدة | طعوم متخصصة وحلول جذرية — شركة الأسطورة'
      : 'Ant Control in Jeddah | Specialized Baits & Root Solutions — Al-Ustora',
    description: isArabic
      ? 'مكافحة النمل بجدة بطعوم متخصصة وحلول جذرية. تحديد مصدر النمل، حاجز وقائي، علاج آمن لجميع أنواع النمل داخل وخارج المبنى.'
      : 'Ant control in Jeddah with specialized baits and root solutions. Ant source identification, protective barrier, safe treatment for all ant types inside and outside buildings.',
    keywords: isArabic 
      ? ['مكافحة النمل جدة', 'طعوم النمل', 'مبيد النمل', 'النمل الأسود', 'النمل الأحمر']
      : ['ant control jeddah', 'ant baits', 'ant extermination', 'black ants', 'red ants'],
  };
}

export default function AntControlPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const antTypes = isArabic ? [
    {
      name: 'النمل الأسود',
      description: 'الأكثر شيوعاً في المطابخ والحمامات',
      treatment: 'طعوم جل متخصصة'
    },
    {
      name: 'النمل الأحمر',
      description: 'عدواني ويسبب لدغات مؤلمة',
      treatment: 'علاج كيميائي مستهدف'
    },
    {
      name: 'النمل الطائر',
      description: 'يظهر موسمياً ويكون مستعمرات جديدة',
      treatment: 'رش وقائي شامل'
    },
    {
      name: 'النمل الحفار',
      description: 'يحفر في الخشب والهياكل',
      treatment: 'حقن مباشر متخصص'
    }
  ] : [
    {
      name: 'Black Ants',
      description: 'Most common in kitchens and bathrooms',
      treatment: 'Specialized gel baits'
    },
    {
      name: 'Red Ants',
      description: 'Aggressive and cause painful bites',
      treatment: 'Targeted chemical treatment'
    },
    {
      name: 'Flying Ants',
      description: 'Appear seasonally and form new colonies',
      treatment: 'Comprehensive preventive spraying'
    },
    {
      name: 'Carpenter Ants',
      description: 'Burrow in wood and structures',
      treatment: 'Specialized direct injection'
    }
  ];

  const symptoms = isArabic ? [
    'خطوط منتظمة من النمل في المطبخ',
    'أكوام صغيرة من التراب قرب الجدران',
    'أصوات حفر خفيفة في الخشب',
    'بقايا طعام متناثرة ومقضومة',
    'رؤية النمل الطائر في فصل معين',
    'تلف في الأخشاب أو النباتات'
  ] : [
    'Regular ant lines in the kitchen',
    'Small piles of dirt near walls',
    'Light drilling sounds in wood',
    'Scattered and gnawed food remains',
    'Seeing flying ants in certain season',
    'Damage to wood or plants'
  ];

  const processSteps = isArabic ? [
    {
      title: 'تحديد نوع النمل',
      description: 'فحص دقيق لتحديد نوع النمل ومسارات حركته ومواقع الأعشاش',
      icon: Search
    },
    {
      title: 'تتبع المصدر',
      description: 'تتبع مسارات النمل للوصول إلى المستعمرة الأساسية',
      icon: Target
    },
    {
      title: 'العلاج المستهدف',
      description: 'استخدام طعوم وعلاجات متخصصة حسب نوع النمل',
      icon: Droplets
    },
    {
      title: 'الحاجز الوقائي',
      description: 'إنشاء حاجز وقائي لمنع عودة النمل والإصابات الجديدة',
      icon: Ban
    }
  ] : [
    {
      title: 'Ant Type Identification',
      description: 'Precise inspection to identify ant type, movement paths and nest locations',
      icon: Search
    },
    {
      title: 'Source Tracking',
      description: 'Track ant trails to reach the main colony',
      icon: Target
    },
    {
      title: 'Targeted Treatment',
      description: 'Use specialized baits and treatments according to ant type',
      icon: Droplets
    },
    {
      title: 'Protective Barrier',
      description: 'Create protective barrier to prevent ant return and new infestations',
      icon: Ban
    }
  ];

  const preventionTips = isArabic ? [
    'تنظيف بقايا الطعام فوراً',
    'إغلاق الشقوق والفتحات الصغيرة',
    'تخزين الطعام في حاويات محكمة',
    'تجفيف المناطق الرطبة',
    'تنظيف المطبخ بانتظام',
    'إزالة مصادر المياه الراكدة'
  ] : [
    'Clean food remains immediately',
    'Seal cracks and small openings',
    'Store food in sealed containers',
    'Dry damp areas',
    'Clean kitchen regularly',
    'Remove stagnant water sources'
  ];

  const faqItems = isArabic ? [
    {
      question: 'لماذا يعود النمل بعد الرش العادي؟',
      answer: 'الرش العادي يقتل النمل المرئي فقط، لكن المستعمرة تبقى سليمة. نحن نستخدم طعوم متخصصة يأخذها النمل إلى المستعمرة للقضاء على المشكلة من الجذور.'
    },
    {
      question: 'كم تستغرق عملية القضاء على النمل نهائياً؟',
      answer: 'عادة 2-4 أسابيع حتى تصل الطعوم إلى جميع أفراد المستعمرة. ستلاحظ انخفاض تدريجي في أعداد النمل خلال الأسبوع الأول.'
    },
    {
      question: 'هل الطعوم آمنة للأطفال والحيوانات الأليفة؟',
      answer: 'نعم، نستخدم طعوم آمنة ونضعها في أماكن استراتيجية بعيداً عن متناول الأطفال والحيوانات الأليفة.'
    },
    {
      question: 'ما الفرق بين أنواع النمل في العلاج؟',
      answer: 'كل نوع نمل يحتاج طعوم وعلاج مختلف. النمل الأسود يفضل السكريات، بينما النمل الأحمر يحتاج علاج أقوى، والنمل الحفار يتطلب حقن مباشر.'
    },
    {
      question: 'كيف أمنع عودة النمل مستقبلاً؟',
      answer: 'المحافظة على النظافة، إغلاق نقاط الدخول، وتطبيق برنامج وقاية دوري. سنقدم لك خطة وقاية مخصصة بعد العلاج.'
    }
  ] : [
    {
      question: 'Why do ants return after regular spraying?',
      answer: 'Regular spraying only kills visible ants, but the colony remains intact. We use specialized baits that ants take to the colony to eliminate the problem from the roots.'
    },
    {
      question: 'How long does it take to eliminate ants permanently?',
      answer: 'Usually 2-4 weeks for baits to reach all colony members. You will notice gradual decrease in ant numbers during the first week.'
    },
    {
      question: 'Are baits safe for children and pets?',
      answer: 'Yes, we use safe baits and place them in strategic locations away from children and pets.'
    },
    {
      question: 'What is the difference between ant types in treatment?',
      answer: 'Each ant type needs different baits and treatment. Black ants prefer sugars, while red ants need stronger treatment, and carpenter ants require direct injection.'
    },
    {
      question: 'How can I prevent ants from returning in the future?',
      answer: 'Maintain cleanliness, seal entry points, and apply regular prevention program. We will provide you with customized prevention plan after treatment.'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة النمل بجدة'
    : 'Hello, I want ant control service in Jeddah';

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary">{isArabic ? 'الخدمات' : 'Services'}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'مكافحة النمل' : 'Ant Control'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة النمل بجدة' : 'Ant Control in Jeddah'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'حلول متقدمة للتخلص من جميع أنواع النمل بطعوم متخصصة وعلاج جذري. نحدد مصدر المشكلة ونقضي عليها نهائياً مع حاجز وقائي.'
                  : 'Advanced solutions to eliminate all ant types with specialized baits and root treatment. We identify the problem source and eliminate it permanently with protective barrier.'
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
                  {isArabic ? 'احجز حل جذري' : 'Book Root Solution'}
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
                  <Target size={20} />
                  <span className="text-sm">{isArabic ? 'علاج مستهدف' : 'Targeted Treatment'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Droplets size={20} />
                  <span className="text-sm">{isArabic ? 'طعوم متخصصة' : 'Specialized Baits'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Ban size={20} />
                  <span className="text-sm">{isArabic ? 'حاجز وقائي' : 'Protective Barrier'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان فعال' : 'Effective Guarantee'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Ant control Jeddah.jpg"
                alt={isArabic ? 'مكافحة النمل بجدة' : 'Ant control in Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Specialized Treatment Badge */}
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Droplets size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'طعوم متخصصة' : 'Specialized Baits'}
                  </span>
                </div>
              </div>

              {/* Success Rate Badge */}
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">95%</div>
                  <div className="text-xs">{isArabic ? 'معدل النجاح' : 'Success Rate'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ant Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'أنواع النمل وطرق العلاج' : 'Ant Types and Treatment Methods'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'كل نوع نمل يحتاج استراتيجية علاج مختلفة. نحدد النوع أولاً ثم نختار العلاج الأنسب'
                : 'Each ant type needs different treatment strategy. We identify the type first then choose the most suitable treatment'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {antTypes.map((ant, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border">
                <h3 className="font-bold text-gray-900 mb-3">{ant.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{ant.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">
                    {isArabic ? 'طريقة العلاج:' : 'Treatment Method:'}
                  </p>
                  <p className="text-primary font-medium text-sm">{ant.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'علامات وجود النمل' : 'Signs of Ant Presence'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'اكتشف المشكلة مبكراً للحصول على حل أسرع وأوفر'
                  : 'Detect the problem early for faster and cheaper solution'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <AlertTriangle className="text-green-500 mt-1" size={20} />
                  <span className="text-gray-800">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'منهجية العلاج الجذري' : 'Root Treatment Methodology'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'لا نكتفي بقتل النمل المرئي، بل نستهدف المستعمرة الأساسية للقضاء على المشكلة نهائياً'
                : 'We don\'t just kill visible ants, we target the main colony to eliminate the problem permanently'
              }
            </p>
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

      {/* Prevention Tips Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'نصائح الوقاية من النمل' : 'Ant Prevention Tips'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'الوقاية خير من العلاج - اتبع هذه النصائح لمنع عودة النمل'
                  : 'Prevention is better than cure - follow these tips to prevent ant return'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preventionTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <span className="text-gray-800">{tip}</span>
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
            {isArabic ? 'احصل على حل جذري للنمل الآن' : 'Get Root Solution for Ants Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'طعوم متخصصة وعلاج مستهدف للقضاء على النمل نهائياً'
              : 'Specialized baits and targeted treatment to eliminate ants permanently'
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
          title: isArabic ? 'مكافحة النمل بجدة' : 'Ant Control in Jeddah',
          description: isArabic 
            ? 'حلول متقدمة للتخلص من جميع أنواع النمل بطعوم متخصصة'
            : 'Advanced solutions to eliminate all ant types with specialized baits',
          serviceType: isArabic ? 'مكافحة النمل' : 'Ant Control'
        }}
      />
      
      <SchemaInjector 
        type="faq" 
        data={{ questions: faqItems }}
      />
    </>
  );
}



