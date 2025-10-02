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
  Thermometer,
  Bug,
  Home
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
      ? 'مكافحة بق الفراش بجدة | علاج حراري متقدم وضمان سنة — شركة الأسطورة'
      : 'Bed Bug Treatment in Jeddah | Advanced Heat Treatment & 1 Year Guarantee — Al-Ustora',
    description: isArabic
      ? 'علاج بق الفراش بجدة بتقنية التسخين المتقدمة. فحص مجاني، علاج آمن، ضمان سنة كاملة. شركة الأسطورة - خبراء القضاء على بق الفراش نهائياً.'
      : 'Bed bug treatment in Jeddah with advanced heat technology. Free inspection, safe treatment, full year guarantee. Al-Ustora - experts in permanent bed bug elimination.',
    keywords: isArabic 
      ? ['مكافحة بق الفراش جدة', 'علاج بق الفراش', 'مبيد بق الفراش', 'تنظيف المراتب', 'حشرات الفراش']
      : ['bed bug treatment jeddah', 'bed bug extermination', 'heat treatment bed bugs', 'mattress cleaning jeddah'],
  };
}

export default function BedBugTreatmentPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const symptoms = isArabic ? [
    'بقع دم صغيرة على الملاءات',
    'لدغات متتالية على الجلد',
    'بقع سوداء صغيرة (فضلات البق)',
    'رائحة حلوة مميزة في الغرفة',
    'بقع صدأية على المراتب',
    'رؤية البق الصغير في شقوق المرتبة'
  ] : [
    'Small blood stains on sheets',
    'Sequential bites on skin',
    'Small dark spots (bug droppings)',
    'Sweet distinctive odor in room',
    'Rusty stains on mattresses',
    'Seeing small bugs in mattress cracks'
  ];

  const processSteps = isArabic ? [
    {
      title: 'الفحص والتشخيص',
      description: 'فحص شامل للمراتب والأثاث لتحديد مستوى الإصابة ومواقع التكاثر',
      icon: Target
    },
    {
      title: 'العلاج الحراري',
      description: 'تطبيق تقنية التسخين المتقدمة للقضاء على البق في جميع مراحل نموه',
      icon: Thermometer
    },
    {
      title: 'العلاج الكيميائي المكمل',
      description: 'استخدام مبيدات آمنة ومتخصصة في المناطق الحساسة',
      icon: Zap
    },
    {
      title: 'المتابعة والضمان',
      description: 'زيارات متابعة دورية وضمان سنة كاملة لعدم عودة المشكلة',
      icon: Heart
    }
  ] : [
    {
      title: 'Inspection & Diagnosis',
      description: 'Comprehensive inspection of mattresses and furniture to determine infestation level and breeding locations',
      icon: Target
    },
    {
      title: 'Heat Treatment',
      description: 'Apply advanced heating technology to eliminate bugs in all growth stages',
      icon: Thermometer
    },
    {
      title: 'Complementary Chemical Treatment',
      description: 'Use safe and specialized pesticides in sensitive areas',
      icon: Zap
    },
    {
      title: 'Follow-up & Guarantee',
      description: 'Regular follow-up visits and full year guarantee for no recurrence',
      icon: Heart
    }
  ];

  const faqItems = isArabic ? [
    {
      question: 'كم تستغرق عملية العلاج الحراري لبق الفراش؟',
      answer: 'العلاج الحراري يستغرق عادة 6-8 ساعات للمنزل الكامل. نستخدم معدات متقدمة لرفع درجة الحرارة إلى 60 درجة مئوية للقضاء على البق نهائياً.'
    },
    {
      question: 'هل العلاج الحراري آمن للأطفال والحيوانات الأليفة؟',
      answer: 'نعم، العلاج الحراري آمن تماماً وصديق للبيئة. لا نستخدم مواد كيميائية ضارة، فقط الحرارة الطبيعية للقضاء على البق.'
    },
    {
      question: 'ما هي مدة الضمان على علاج بق الفراش؟',
      answer: 'نقدم ضمان سنة كاملة على علاج بق الفراش. إذا عاد البق خلال هذه المدة، نعيد العلاج مجاناً.'
    },
    {
      question: 'هل يجب التخلص من المراتب المصابة؟',
      answer: 'لا، في معظم الحالات يمكن إنقاذ المراتب والأثاث بالعلاج الحراري المتقدم. نادراً ما نضطر للتخلص من العناصر المصابة.'
    },
    {
      question: 'كيف يمكنني الوقاية من عودة بق الفراش؟',
      answer: 'سنقدم لك نصائح شاملة تشمل فحص الأمتعة بعد السفر، استخدام أغطية واقية للمراتب، والتنظيف المنتظم بالمكنسة الكهربائية.'
    }
  ] : [
    {
      question: 'How long does heat treatment for bed bugs take?',
      answer: 'Heat treatment usually takes 6-8 hours for a complete home. We use advanced equipment to raise temperature to 60°C to eliminate bed bugs permanently.'
    },
    {
      question: 'Is heat treatment safe for children and pets?',
      answer: 'Yes, heat treatment is completely safe and environmentally friendly. We don\'t use harmful chemicals, just natural heat to eliminate bed bugs.'
    },
    {
      question: 'What is the warranty period for bed bug treatment?',
      answer: 'We provide a full year warranty on bed bug treatment. If bed bugs return during this period, we re-treat for free.'
    },
    {
      question: 'Do I need to dispose of infested mattresses?',
      answer: 'No, in most cases mattresses and furniture can be saved with advanced heat treatment. We rarely need to dispose of infested items.'
    },
    {
      question: 'How can I prevent bed bugs from returning?',
      answer: 'We will provide comprehensive tips including checking luggage after travel, using protective mattress covers, and regular vacuuming.'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة بق الفراش بجدة'
    : 'Hello, I want bed bug treatment service in Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'مكافحة بق الفراش' : 'Bed Bug Treatment'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة بق الفراش بجدة' : 'Bed Bug Treatment in Jeddah'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'علاج متقدم لبق الفراش بتقنية التسخين الحراري الآمنة. القضاء النهائي على بق الفراش مع ضمان سنة كاملة وبدون مواد كيميائية ضارة.'
                  : 'Advanced bed bug treatment with safe heat technology. Complete elimination of bed bugs with full year guarantee and no harmful chemicals.'
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
                  {isArabic ? 'احجز العلاج الحراري' : 'Book Heat Treatment'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'استشارة مجانية فورية' : 'Free Immediate Consultation'}
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Thermometer size={20} />
                  <span className="text-sm">{isArabic ? 'علاج حراري متقدم' : 'Advanced Heat Treatment'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان سنة كاملة' : 'Full Year Guarantee'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="text-sm">{isArabic ? 'بدون مواد كيميائية' : 'No Chemicals'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Home size={20} />
                  <span className="text-sm">{isArabic ? 'آمن للعائلة' : 'Family Safe'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Bed-bug-treatment-Jeddah.jpg"
                alt={isArabic ? 'علاج بق الفراش بجدة' : 'Bed bug treatment in Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Heat Treatment Badge */}
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Thermometer size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'علاج حراري 60°م' : 'Heat Treatment 60°C'}
                  </span>
                </div>
              </div>

              {/* Success Rate Badge */}
              <div className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">99.9%</div>
                  <div className="text-xs">{isArabic ? 'معدل النجاح' : 'Success Rate'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'علامات وجود بق الفراش' : 'Signs of Bed Bug Infestation'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'إذا لاحظت أي من هذه العلامات، فأنت بحاجة لعلاج فوري متخصص'
                  : 'If you notice any of these signs, you need immediate specialized treatment'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <Bug className="text-red-500 mt-1" size={20} />
                  <span className="text-gray-800">{symptom}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">
                {isArabic ? 'لماذا بق الفراش مشكلة خطيرة؟' : 'Why are bed bugs a serious problem?'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic 
                  ? 'بق الفراش يتكاثر بسرعة ويمكنه البقاء لشهور بدون طعام. يسبب لدغات مؤلمة ومثيرة للحكة، ويمكن أن ينتشر بسرعة في جميع أنحاء المنزل. العلاج المبكر ضروري لمنع انتشار أوسع.'
                  : 'Bed bugs reproduce rapidly and can survive for months without food. They cause painful and itchy bites, and can quickly spread throughout the home. Early treatment is essential to prevent wider spread.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'منهجية العلاج الحراري المتقدم' : 'Advanced Heat Treatment Methodology'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'تقنية حديثة وآمنة للقضاء على بق الفراش نهائياً بدون استخدام مواد كيميائية'
                : 'Modern and safe technology to eliminate bed bugs permanently without using chemicals'
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

          {/* Heat Treatment Benefits */}
          <div className="mt-16 bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              {isArabic ? 'مميزات العلاج الحراري' : 'Heat Treatment Benefits'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Thermometer className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{isArabic ? 'فعالية 100%' : '100% Effective'}</h4>
                <p className="text-sm text-gray-600">
                  {isArabic ? 'يقضي على البق في جميع مراحل النمو' : 'Eliminates bugs in all growth stages'}
                </p>
              </div>
              <div className="text-center">
                <Home className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{isArabic ? 'آمن للعائلة' : 'Family Safe'}</h4>
                <p className="text-sm text-gray-600">
                  {isArabic ? 'بدون مواد كيميائية ضارة' : 'No harmful chemicals'}
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{isArabic ? 'سريع وفعال' : 'Fast & Effective'}</h4>
                <p className="text-sm text-gray-600">
                  {isArabic ? 'نتائج فورية في يوم واحد' : 'Immediate results in one day'}
                </p>
              </div>
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
            {isArabic ? 'احصل على العلاج الحراري المتقدم الآن' : 'Get Advanced Heat Treatment Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'القضاء النهائي على بق الفراش مع ضمان سنة كاملة'
              : 'Complete bed bug elimination with full year guarantee'
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
          title: isArabic ? 'مكافحة بق الفراش بجدة' : 'Bed Bug Treatment in Jeddah',
          description: isArabic 
            ? 'علاج متقدم لبق الفراش بتقنية التسخين الحراري'
            : 'Advanced bed bug treatment with heat technology',
          serviceType: isArabic ? 'مكافحة بق الفراش' : 'Bed Bug Treatment'
        }}
      />
      
      <SchemaInjector 
        type="faq" 
        data={{ questions: faqItems }}
      />
    </>
  );
}



