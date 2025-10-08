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
  Heart
} from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';
import { ServiceHero } from '@/components/sections/ServiceHero';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'مكافحة الصراصير بجدة | فحص وعلاج مضمون — شركة الأسطورة'
      : 'Cockroach Control in Jeddah | Guaranteed Inspection & Treatment — Al-Ustora',
    description: isArabic
      ? 'خدمة مكافحة الصراصير بجدة - فحص مجاني، علاج آمن ومضمون. شركة الأسطورة تقدم حلول فعالة للقضاء على الصراصير نهائياً. اتصل الآن!'
      : 'Cockroach control service in Jeddah - Free inspection, safe and guaranteed treatment. Al-Ustora provides effective solutions to eliminate cockroaches permanently. Call now!',
    keywords: isArabic 
      ? ['مكافحة الصراصير جدة', 'شركة رش صراصير', 'مبيد الصراصير', 'القضاء على الصراصير', 'الصراصير الألمانية']
      : ['cockroach control jeddah', 'cockroach extermination', 'german cockroach treatment', 'cockroach removal jeddah'],
  };
}

export default function CockroachControlPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const symptoms = isArabic ? [
    'رؤية الصراصير أثناء النهار',
    'وجود بيض الصراصير في الزوايا',
    'رائحة كريهة مميزة',
    'بقع سوداء صغيرة (فضلات)',
    'أصوات خشخشة في الليل',
    'تلف في الطعام والأوراق'
  ] : [
    'Seeing cockroaches during daylight',
    'Finding cockroach eggs in corners',
    'Distinctive unpleasant odor',
    'Small black spots (droppings)',
    'Rustling sounds at night',
    'Damage to food and papers'
  ];

  const processSteps = isArabic ? [
    {
      title: 'الفحص والتشخيص',
      description: 'فحص شامل لتحديد نوع الصراصير ومستوى الإصابة ومصادر التكاثر',
      icon: Target
    },
    {
      title: 'وضع خطة العلاج',
      description: 'تصميم خطة علاج مخصصة حسب نوع المبنى ومستوى الإصابة',
      icon: Zap
    },
    {
      title: 'التطبيق الآمن',
      description: 'تطبيق المبيدات الآمنة والطعوم في الأماكن الاستراتيجية',
      icon: Shield
    },
    {
      title: 'المتابعة والضمان',
      description: 'زيارات متابعة للتأكد من نجاح العلاج وعدم عودة المشكلة',
      icon: Heart
    }
  ] : [
    {
      title: 'Inspection & Diagnosis',
      description: 'Comprehensive inspection to identify cockroach species, infestation level and breeding sources',
      icon: Target
    },
    {
      title: 'Treatment Planning',
      description: 'Design customized treatment plan based on building type and infestation level',
      icon: Zap
    },
    {
      title: 'Safe Application',
      description: 'Apply safe pesticides and baits in strategic locations',
      icon: Shield
    },
    {
      title: 'Follow-up & Guarantee',
      description: 'Follow-up visits to ensure treatment success and prevent recurrence',
      icon: Heart
    }
  ];

  const faqItems = isArabic ? [
    {
      question: 'كم تستغرق عملية مكافحة الصراصير؟',
      answer: 'عادة ما تستغرق من ساعة إلى ساعتين حسب حجم المكان ومستوى الإصابة. النتائج تظهر خلال 24-48 ساعة.'
    },
    {
      question: 'هل المبيدات المستخدمة آمنة للأطفال والحيوانات؟',
      answer: 'نعم، نستخدم مبيدات مرخصة وآمنة للصحة العامة. ننصح بتهوية المكان بعد العلاج لمدة ساعتين.'
    },
    {
      question: 'ما هي مدة الضمان على الخدمة؟',
      answer: 'نقدم ضمان 6 أشهر على خدمة مكافحة الصراصير مع إمكانية الإعادة المجانية في حالة عودة المشكلة.'
    },
    {
      question: 'كيف يمكنني منع عودة الصراصير؟',
      answer: 'سننصحك بنصائح وقائية مثل سد الشقوق، تنظيف بقايا الطعام، وإصلاح تسريبات المياه.'
    }
  ] : [
    {
      question: 'How long does cockroach control treatment take?',
      answer: 'Usually takes 1-2 hours depending on the size of the place and infestation level. Results appear within 24-48 hours.'
    },
    {
      question: 'Are the pesticides safe for children and pets?',
      answer: 'Yes, we use licensed pesticides safe for public health. We recommend ventilating the area for 2 hours after treatment.'
    },
    {
      question: 'What is the warranty period for the service?',
      answer: 'We provide 6 months warranty on cockroach control service with possibility of free return if problem recurs.'
    },
    {
      question: 'How can I prevent cockroaches from returning?',
      answer: 'We will advise you on preventive measures like sealing cracks, cleaning food debris, and fixing water leaks.'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة الصراصير بجدة'
    : 'Hello, I want cockroach control service in Jeddah';

  return (
    <>
      <ServiceHero
        title="مكافحة الصراصير بجدة"
        titleEn="Cockroach Control in Jeddah"
        description="خدمة متخصصة للقضاء على الصراصير نهائياً باستخدام أحدث التقنيات والمواد الآمنة. فحص مجاني وضمان 6 أشهر."
        descriptionEn="Specialized service to eliminate cockroaches permanently using latest techniques and safe materials. Free inspection and 6 months guarantee."
        image="/images/Cockroach-control-Jeddah.jpg"
        imageAlt="مكافحة الصراصير بجدة"
        imageAltEn="Cockroach control in Jeddah"
        whatsappMessage={whatsappMessage}
        phone={siteConfig.phone}
        breadcrumbs={[
          { label: isArabic ? 'الرئيسية' : 'Home', href: locale === 'ar' ? '/' : '/en' },
          { label: isArabic ? 'الخدمات' : 'Services', href: locale === 'ar' ? '/services' : '/en/services' },
          { label: isArabic ? 'مكافحة الصراصير' : 'Cockroach Control', href: '#' }
        ]}
        featuresText={[
          isArabic ? 'فحص شامل مجاني' : 'Free Comprehensive Inspection',
          isArabic ? 'ضمان 6 أشهر' : '6 Months Warranty',
          isArabic ? 'نتائج سريعة' : 'Fast Results',
          isArabic ? 'مواد آمنة 100%' : '100% Safe Materials'
        ]}
        bgGradient="from-red-50 via-orange-50 to-yellow-50"
      />

      {/* Symptoms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'علامات وجود الصراصير' : 'Signs of Cockroach Infestation'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'إذا لاحظت أي من هذه العلامات، فأنت بحاجة لخدمة مكافحة فورية'
                  : 'If you notice any of these signs, you need immediate pest control service'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <AlertTriangle className="text-red-500 mt-1" size={20} />
                  <span className="text-gray-800">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'كيف نتعامل مع مشكلة الصراصير' : 'How We Handle Cockroach Problems'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'منهجية علمية مدروسة للقضاء على الصراصير نهائياً'
                : 'Scientific methodology designed to eliminate cockroaches permanently'
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
            {isArabic ? 'احصل على خدمة فورية الآن' : 'Get Immediate Service Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'فريقنا المتخصص جاهز للتعامل مع مشكلة الصراصير في أي وقت'
              : 'Our specialized team is ready to handle cockroach problems anytime'
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
          title: isArabic ? 'مكافحة الصراصير بجدة' : 'Cockroach Control in Jeddah',
          description: isArabic 
            ? 'خدمة متخصصة للقضاء على الصراصير نهائياً'
            : 'Specialized service to eliminate cockroaches permanently',
          serviceType: isArabic ? 'مكافحة الصراصير' : 'Cockroach Control'
        }}
      />
      
      <SchemaInjector 
        type="faq" 
        data={{ questions: faqItems }}
      />
    </>
  );
}



