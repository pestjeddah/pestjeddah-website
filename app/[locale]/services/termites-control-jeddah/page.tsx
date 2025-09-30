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
  Wrench,
  HomeIcon
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
      ? 'مكافحة النمل الأبيض بجدة | حماية المباني وضمان طويل المدى — شركة الأسطورة'
      : 'Termite Control in Jeddah | Building Protection & Long-term Guarantee — Al-Ustora',
    description: isArabic
      ? 'مكافحة النمل الأبيض بجدة بتقنيات متقدمة. فحص بأجهزة حديثة، حماية وقائية شاملة، ضمان طويل المدى. حماية مبناك من أضرار النمل الأبيض.'
      : 'Termite control in Jeddah with advanced technologies. Modern equipment inspection, comprehensive preventive protection, long-term guarantee. Protect your building from termite damage.',
    keywords: isArabic 
      ? ['مكافحة النمل الأبيض جدة', 'حماية المباني', 'مكافحة الأرضة', 'فحص النمل الأبيض', 'حماية الخشب']
      : ['termite control jeddah', 'building protection', 'termite inspection', 'wood protection', 'termite treatment'],
  };
}

export default function TermiteControlPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const symptoms = isArabic ? [
    'أصوات نقر أو حفر من داخل الجدران',
    'أجنحة النمل المتساقطة قرب النوافذ',
    'أنابيب طينية على الجدران الخارجية',
    'خشب مجوف أو ضعيف عند النقر',
    'تشققات في الطلاء أو ورق الجدران',
    'كرات صغيرة تشبه نشارة الخشب'
  ] : [
    'Tapping or drilling sounds from inside walls',
    'Fallen termite wings near windows',
    'Mud tubes on exterior walls',
    'Hollow or weak wood when tapped',
    'Cracks in paint or wallpaper',
    'Small pellets resembling sawdust'
  ];

  const processSteps = isArabic ? [
    {
      title: 'الفحص بالأجهزة المتقدمة',
      description: 'فحص شامل بأجهزة الموجات فوق الصوتية والحرارية لتحديد مواقع النمل الأبيض',
      icon: Search
    },
    {
      title: 'تصميم نظام الحماية',
      description: 'وضع خطة حماية شاملة تناسب نوع المبنى ومستوى التهديد',
      icon: Target
    },
    {
      title: 'التطبيق والعلاج',
      description: 'تركيب نظام الطعوم والحواجز الكيميائية حول المبنى',
      icon: Wrench
    },
    {
      title: 'المراقبة المستمرة',
      description: 'صيانة دورية ومراقبة النظام لضمان الحماية المستمرة',
      icon: Shield
    }
  ] : [
    {
      title: 'Advanced Equipment Inspection',
      description: 'Comprehensive inspection with ultrasonic and thermal devices to locate termites',
      icon: Search
    },
    {
      title: 'Protection System Design',
      description: 'Develop comprehensive protection plan suitable for building type and threat level',
      icon: Target
    },
    {
      title: 'Application & Treatment',
      description: 'Install bait system and chemical barriers around the building',
      icon: Wrench
    },
    {
      title: 'Continuous Monitoring',
      description: 'Regular maintenance and system monitoring to ensure continuous protection',
      icon: Shield
    }
  ];

  const damageTypes = isArabic ? [
    {
      title: 'الأضرار الهيكلية',
      description: 'تدمير الأخشاب الحاملة والعوارض الخشبية',
      severity: 'عالية جداً'
    },
    {
      title: 'الأثاث والديكور',
      description: 'تلف الأثاث الخشبي والأبواب والنوافذ',
      severity: 'عالية'
    },
    {
      title: 'الوثائق والكتب',
      description: 'تدمير الكتب والوثائق المهمة',
      severity: 'متوسطة'
    },
    {
      title: 'التكاليف المالية',
      description: 'تكاليف إصلاح قد تصل لمئات الآلاف',
      severity: 'عالية جداً'
    }
  ] : [
    {
      title: 'Structural Damage',
      description: 'Destruction of load-bearing wood and wooden beams',
      severity: 'Very High'
    },
    {
      title: 'Furniture & Decor',
      description: 'Damage to wooden furniture, doors and windows',
      severity: 'High'
    },
    {
      title: 'Documents & Books',
      description: 'Destruction of important books and documents',
      severity: 'Medium'
    },
    {
      title: 'Financial Costs',
      description: 'Repair costs can reach hundreds of thousands',
      severity: 'Very High'
    }
  ];

  const faqItems = isArabic ? [
    {
      question: 'كيف يمكنني معرفة إذا كان منزلي مصاب بالنمل الأبيض؟',
      answer: 'نستخدم أجهزة متقدمة للكشف المبكر عن النمل الأبيض، بما في ذلك أجهزة الموجات فوق الصوتية وكاميرات الأشعة تحت الحمراء. يمكننا اكتشاف النشاط حتى قبل ظهور الأضرار المرئية.'
    },
    {
      question: 'ما هي أفضل طريقة لحماية مبنى جديد من النمل الأبيض؟',
      answer: 'للمباني الجديدة، نوصي بتركيب نظام حماية وقائية يشمل معالجة التربة والخشب قبل البناء، وتركيب حواجز فيزيائية وكيميائية. هذا يوفر حماية طويلة المدى.'
    },
    {
      question: 'كم تستغرق عملية علاج النمل الأبيض؟',
      answer: 'يعتمد على حجم المبنى ومستوى الإصابة. العلاج الأولي يستغرق 1-3 أيام، ولكن النظام الوقائي يتطلب مراقبة مستمرة لضمان الفعالية.'
    },
    {
      question: 'هل العلاج آمن للعائلة والحيوانات الأليفة؟',
      answer: 'نعم، نستخدم مواد معتمدة وآمنة، ونطبق أحدث بروتوكولات السلامة. معظم العلاجات لا تتطلب إخلاء المنزل.'
    },
    {
      question: 'ما هي مدة الضمان على علاج النمل الأبيض؟',
      answer: 'نقدم ضمان يصل إلى 5 سنوات على علاج النمل الأبيض، مع برنامج صيانة دورية للتأكد من استمرارية الحماية.'
    }
  ] : [
    {
      question: 'How can I know if my home is infested with termites?',
      answer: 'We use advanced equipment for early termite detection, including ultrasonic devices and infrared cameras. We can detect activity even before visible damage appears.'
    },
    {
      question: 'What is the best way to protect a new building from termites?',
      answer: 'For new buildings, we recommend installing a preventive protection system including soil and wood treatment before construction, and installing physical and chemical barriers. This provides long-term protection.'
    },
    {
      question: 'How long does termite treatment take?',
      answer: 'It depends on building size and infestation level. Initial treatment takes 1-3 days, but the preventive system requires continuous monitoring to ensure effectiveness.'
    },
    {
      question: 'Is the treatment safe for family and pets?',
      answer: 'Yes, we use approved and safe materials, and apply the latest safety protocols. Most treatments do not require evacuating the home.'
    },
    {
      question: 'What is the warranty period for termite treatment?',
      answer: 'We provide warranty up to 5 years on termite treatment, with regular maintenance program to ensure continued protection.'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة النمل الأبيض بجدة'
    : 'Hello, I want termite control service in Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'مكافحة النمل الأبيض' : 'Termite Control'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة النمل الأبيض بجدة' : 'Termite Control in Jeddah'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'حماية شاملة للمباني من النمل الأبيض بأحدث التقنيات. فحص متقدم، أنظمة وقاية متطورة، وضمان طويل المدى لحماية استثمارك.'
                  : 'Comprehensive building protection from termites with latest technologies. Advanced inspection, sophisticated prevention systems, and long-term guarantee to protect your investment.'
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
                  {isArabic ? 'احجز فحص متقدم' : 'Book Advanced Inspection'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'استشارة فورية' : 'Immediate Consultation'}
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Search size={20} />
                  <span className="text-sm">{isArabic ? 'فحص بأجهزة متقدمة' : 'Advanced Equipment Inspection'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'ضمان 5 سنوات' : '5 Years Guarantee'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <HomeIcon size={20} />
                  <span className="text-sm">{isArabic ? 'حماية شاملة' : 'Complete Protection'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Wrench size={20} />
                  <span className="text-sm">{isArabic ? 'صيانة دورية' : 'Regular Maintenance'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Termite treatment Jeddah.jpg"
                alt={isArabic ? 'مكافحة النمل الأبيض بجدة' : 'Termite control in Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Advanced Technology Badge */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Search size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'تقنية متقدمة' : 'Advanced Technology'}
                  </span>
                </div>
              </div>

              {/* Protection Badge */}
              <div className="absolute bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">5</div>
                  <div className="text-xs">{isArabic ? 'سنوات ضمان' : 'Years Warranty'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'أضرار النمل الأبيض على المباني' : 'Termite Damage to Buildings'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'النمل الأبيض يسبب أضراراً جسيمة قد تكلف آلاف الريالات. الوقاية أفضل وأوفر من العلاج'
                : 'Termites cause severe damage that can cost thousands of riyals. Prevention is better and cheaper than treatment'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {damageTypes.map((damage, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-3">{damage.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{damage.description}</p>
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                  damage.severity === 'عالية جداً' || damage.severity === 'Very High' 
                    ? 'bg-red-100 text-red-800' 
                    : damage.severity === 'عالية' || damage.severity === 'High'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {damage.severity}
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
                {isArabic ? 'علامات وجود النمل الأبيض' : 'Signs of Termite Presence'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'الكشف المبكر يوفر عليك تكاليف باهظة ويحمي مبناك من الأضرار الجسيمة'
                  : 'Early detection saves you expensive costs and protects your building from severe damage'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-orange-200 shadow-sm">
                  <AlertTriangle className="text-orange-500 mt-1" size={20} />
                  <span className="text-gray-800">{symptom}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                {isArabic ? '⚠️ تحذير مهم' : '⚠️ Important Warning'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic 
                  ? 'النمل الأبيض يعمل في صمت لسنوات قبل اكتشافه. عندما تظهر الأضرار المرئية، تكون الإصابة قد وصلت لمرحلة متقدمة. الفحص الدوري ضروري لحماية استثمارك.'
                  : 'Termites work silently for years before detection. When visible damage appears, the infestation has reached an advanced stage. Regular inspection is essential to protect your investment.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'منهجية الحماية المتقدمة' : 'Advanced Protection Methodology'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'نظام حماية شامل يجمع بين التقنيات الحديثة والخبرة العملية'
                : 'Comprehensive protection system combining modern technology with practical expertise'
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
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
            {isArabic ? 'احمِ مبناك من النمل الأبيض الآن' : 'Protect Your Building from Termites Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'فحص متقدم وحماية شاملة مع ضمان طويل المدى'
              : 'Advanced inspection and comprehensive protection with long-term guarantee'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              {isArabic ? 'احجز فحص متقدم' : 'Book Advanced Inspection'}
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
          title: isArabic ? 'مكافحة النمل الأبيض بجدة' : 'Termite Control in Jeddah',
          description: isArabic 
            ? 'حماية شاملة للمباني من النمل الأبيض بأحدث التقنيات'
            : 'Comprehensive building protection from termites with latest technologies',
          serviceType: isArabic ? 'مكافحة النمل الأبيض' : 'Termite Control'
        }}
      />
      
      <SchemaInjector 
        type="faq" 
        data={{ questions: faqItems }}
      />
    </>
  );
}



