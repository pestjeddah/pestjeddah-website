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
  Wind,
  Sun
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
      ? 'مكافحة البعوض والذباب بجدة | تقنيات حديثة وحلول بيئية — شركة الأسطورة'
      : 'Mosquito & Fly Control in Jeddah | Modern Techniques & Environmental Solutions — Al-Ustora',
    description: isArabic
      ? 'مكافحة البعوض والذباب بجدة بتقنيات حديثة وحلول بيئية. رش دوري، مراقبة مستمرة، حماية طويلة المدى من الحشرات الطائرة.'
      : 'Mosquito and fly control in Jeddah with modern techniques and environmental solutions. Regular spraying, continuous monitoring, long-term protection from flying insects.',
    keywords: isArabic 
      ? ['مكافحة البعوض جدة', 'مكافحة الذباب', 'رش البعوض', 'الحشرات الطائرة', 'مبيد البعوض']
      : ['mosquito control jeddah', 'fly control', 'mosquito spray', 'flying insects', 'insect control'],
  };
}

export default function MosquitoControlPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const insectTypes = isArabic ? [
    {
      name: 'البعوض',
      description: 'نشط في المساء والفجر، يتكاثر في المياه الراكدة',
      problems: 'لدغات مؤلمة، أمراض محتملة، إزعاج ليلي',
      season: 'طوال السنة مع ذروة في الصيف'
    },
    {
      name: 'الذباب المنزلي',
      description: 'ينتشر في المطابخ والقمامة، ينقل البكتيريا',
      problems: 'تلوث الطعام، نشر الأمراض، إزعاج عام',
      season: 'أكثر نشاطاً في الطقس الدافئ'
    },
    {
      name: 'ذباب المجاري',
      description: 'يخرج من المجاري والحمامات، رائحة كريهة',
      problems: 'مشاكل صحية، روائح، منظر غير صحي',
      season: 'طوال السنة مع تفاقم في الرطوبة'
    },
    {
      name: 'النواموس الصغير',
      description: 'حشرات صغيرة تتجمع حول الأضواء',
      problems: 'إزعاج بصري، تجمعات مزعجة، جذب حشرات أخرى',
      season: 'المساء والليل خاصة في الصيف'
    }
  ] : [
    {
      name: 'Mosquitoes',
      description: 'Active in evening and dawn, breed in stagnant water',
      problems: 'Painful bites, potential diseases, night disturbance',
      season: 'Year-round with peak in summer'
    },
    {
      name: 'House Flies',
      description: 'Spread in kitchens and garbage, carry bacteria',
      problems: 'Food contamination, disease transmission, general nuisance',
      season: 'More active in warm weather'
    },
    {
      name: 'Drain Flies',
      description: 'Emerge from drains and bathrooms, bad odor',
      problems: 'Health issues, odors, unhealthy appearance',
      season: 'Year-round with worsening in humidity'
    },
    {
      name: 'Small Gnats',
      description: 'Small insects that gather around lights',
      problems: 'Visual nuisance, disturbing swarms, attract other insects',
      season: 'Evening and night especially in summer'
    }
  ];

  const symptoms = isArabic ? [
    'لدغات البعوض المتكررة خاصة في المساء',
    'أصوات طنين مزعجة أثناء النوم',
    'تجمعات الذباب في المطبخ والقمامة',
    'رؤية حشرات صغيرة حول الأضواء',
    'روائح كريهة من المجاري',
    'بقع على الطعام من الذباب'
  ] : [
    'Frequent mosquito bites especially in evening',
    'Annoying buzzing sounds during sleep',
    'Fly clusters in kitchen and garbage',
    'Seeing small insects around lights',
    'Bad odors from drains',
    'Spots on food from flies'
  ];

  const healthRisks = isArabic ? [
    'الملاريا وحمى الضنك (البعوض)',
    'التيفوئيد والكوليرا (الذباب)',
    'التهابات الجهاز الهضمي',
    'حساسية من لدغات البعوض',
    'تلوث الطعام والمشروبات',
    'مشاكل تنفسية من الأتربة المتطايرة'
  ] : [
    'Malaria and dengue fever (mosquitoes)',
    'Typhoid and cholera (flies)',
    'Digestive system infections',
    'Allergy from mosquito bites',
    'Food and drink contamination',
    'Respiratory problems from flying dust'
  ];

  const processSteps = isArabic ? [
    {
      title: 'مسح المصادر',
      description: 'تحديد مصادر تكاثر البعوض والذباب مثل المياه الراكدة والقمامة',
      icon: Search
    },
    {
      title: 'العلاج المصدري',
      description: 'معالجة المصادر وإزالة بيئات التكاثر المناسبة للحشرات',
      icon: Target
    },
    {
      title: 'الرش المتخصص',
      description: 'رش مناطق الراحة والتكاثر بمبيدات متخصصة وصديقة للبيئة',
      icon: Droplets
    },
    {
      title: 'المراقبة الدورية',
      description: 'برنامج مراقبة مستمر ورش دوري حسب الموسم والحاجة',
      icon: Wind
    }
  ] : [
    {
      title: 'Source Survey',
      description: 'Identify mosquito and fly breeding sources like stagnant water and garbage',
      icon: Search
    },
    {
      title: 'Source Treatment',
      description: 'Treat sources and remove suitable breeding environments for insects',
      icon: Target
    },
    {
      title: 'Specialized Spraying',
      description: 'Spray resting and breeding areas with specialized and eco-friendly pesticides',
      icon: Droplets
    },
    {
      title: 'Regular Monitoring',
      description: 'Continuous monitoring program and regular spraying according to season and need',
      icon: Wind
    }
  ];

  const preventionTips = isArabic ? [
    'إزالة المياه الراكدة من الأواني والحاويات',
    'تنظيف المجاري وصرف المياه بانتظام',
    'إغلاق أكياس القمامة بإحكام',
    'استخدام شبك على النوافذ والأبواب',
    'تجفيف الأماكن الرطبة سريعاً',
    'تنظيف بقايا الطعام فوراً'
  ] : [
    'Remove stagnant water from pots and containers',
    'Clean drains and water drainage regularly',
    'Seal garbage bags tightly',
    'Use screens on windows and doors',
    'Dry damp areas quickly',
    'Clean food remains immediately'
  ];

  const seasonalProgram = isArabic ? [
    {
      season: 'الربيع (مارس - مايو)',
      focus: 'الوقاية من تكاثر البعوض',
      activities: 'فحص شامل، معالجة المصادر، رش وقائي'
    },
    {
      season: 'الصيف (يونيو - أغسطس)',
      focus: 'ذروة النشاط - رش مكثف',
      activities: 'رش أسبوعي، مراقبة يومية، علاج طارئ'
    },
    {
      season: 'الخريف (سبتمبر - نوفمبر)',
      focus: 'السيطرة على الذباب',
      activities: 'تنظيف المصادر، رش متوسط، صيانة'
    },
    {
      season: 'الشتاء (ديسمبر - فبراير)',
      focus: 'صيانة وقائية',
      activities: 'فحص دوري، صيانة الأنظمة، تحضير للربيع'
    }
  ] : [
    {
      season: 'Spring (March - May)',
      focus: 'Prevention of mosquito breeding',
      activities: 'Comprehensive inspection, source treatment, preventive spraying'
    },
    {
      season: 'Summer (June - August)',
      focus: 'Peak activity - intensive spraying',
      activities: 'Weekly spraying, daily monitoring, emergency treatment'
    },
    {
      season: 'Autumn (September - November)',
      focus: 'Fly control',
      activities: 'Source cleaning, moderate spraying, maintenance'
    },
    {
      season: 'Winter (December - February)',
      focus: 'Preventive maintenance',
      activities: 'Regular inspection, system maintenance, spring preparation'
    }
  ];

  const faqItems = isArabic ? [
    {
      question: 'متى أفضل وقت لرش البعوض؟',
      answer: 'أفضل أوقات الرش هي الفجر والمساء عندما يكون البعوض أكثر نشاطاً. نتجنب الرش أثناء الرياح القوية أو المطر، ونراعي أوقات تفتح الأزهار لحماية النحل.'
    },
    {
      question: 'هل الرش آمن للأطفال والحيوانات الأليفة؟',
      answer: 'نعم، نستخدم مبيدات معتمدة وآمنة للاستخدام المنزلي. ننصح بالبقاء داخل المنزل لمدة ساعة بعد الرش، وتغطية أحواض الأسماك والطعام.'
    },
    {
      question: 'كم مرة أحتاج لرش البعوض؟',
      answer: 'يعتمد على الموسم والمنطقة. عادة نرش كل 2-3 أسابيع في الصيف، وكل شهر في المواسم الأخرى. المناطق القريبة من المياه تحتاج رش أكثر تكراراً.'
    },
    {
      question: 'لماذا يعود البعوض بعد الرش؟',
      answer: 'البعوض قد يأتي من مناطق مجاورة، أو من مصادر تكاثر لم تعالج. لذلك نركز على معالجة المصادر أولاً، ثم الرش الدوري للحماية المستمرة.'
    },
    {
      question: 'ما الفرق بين رش البعوض والذباب؟',
      answer: 'البعوض يحتاج رش في أماكن الراحة والتكاثر (النباتات والمياه)، بينما الذباب يحتاج رش في أماكن التغذية والراحة (المطابخ والنوافذ). نستخدم تقنيات مختلفة لكل نوع.'
    }
  ] : [
    {
      question: 'When is the best time to spray for mosquitoes?',
      answer: 'Best spraying times are dawn and evening when mosquitoes are most active. We avoid spraying during strong winds or rain, and consider flower blooming times to protect bees.'
    },
    {
      question: 'Is spraying safe for children and pets?',
      answer: 'Yes, we use approved pesticides safe for home use. We recommend staying indoors for one hour after spraying, and covering fish tanks and food.'
    },
    {
      question: 'How often do I need mosquito spraying?',
      answer: 'Depends on season and area. Usually we spray every 2-3 weeks in summer, and monthly in other seasons. Areas near water need more frequent spraying.'
    },
    {
      question: 'Why do mosquitoes return after spraying?',
      answer: 'Mosquitoes may come from neighboring areas, or from untreated breeding sources. That\'s why we focus on treating sources first, then regular spraying for continuous protection.'
    },
    {
      question: 'What is the difference between mosquito and fly spraying?',
      answer: 'Mosquitoes need spraying in resting and breeding areas (plants and water), while flies need spraying in feeding and resting areas (kitchens and windows). We use different techniques for each type.'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة البعوض والذباب بجدة'
    : 'Hello, I want mosquito and fly control service in Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'مكافحة البعوض والذباب' : 'Mosquito & Fly Control'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة البعوض والذباب بجدة' : 'Mosquito & Fly Control in Jeddah'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'حماية شاملة من البعوض والذباب بتقنيات حديثة وحلول بيئية. رش دوري، مراقبة مستمرة، وبرنامج موسمي متكامل.'
                  : 'Comprehensive protection from mosquitoes and flies with modern techniques and environmental solutions. Regular spraying, continuous monitoring, and integrated seasonal program.'
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
                  {isArabic ? 'احجز برنامج موسمي' : 'Book Seasonal Program'}
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
                  <Droplets size={20} />
                  <span className="text-sm">{isArabic ? 'رش متخصص' : 'Specialized Spraying'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Wind size={20} />
                  <span className="text-sm">{isArabic ? 'تقنيات حديثة' : 'Modern Techniques'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Sun size={20} />
                  <span className="text-sm">{isArabic ? 'برنامج موسمي' : 'Seasonal Program'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'حلول بيئية' : 'Environmental Solutions'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Mosquito-control-service.jpg"
                alt={isArabic ? 'مكافحة البعوض والذباب بجدة' : 'Mosquito and fly control in Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Modern Technology Badge */}
              <div className="absolute top-4 left-4 bg-sky-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Wind size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'تقنيات حديثة' : 'Modern Technology'}
                  </span>
                </div>
              </div>

              {/* Seasonal Program Badge */}
              <div className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">365</div>
                  <div className="text-xs">{isArabic ? 'يوم حماية' : 'Days Protection'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Risks Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'المخاطر الصحية للحشرات الطائرة' : 'Health Risks from Flying Insects'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'البعوض والذباب ينقلان أكثر من 50 مرضاً للإنسان. الحماية الوقائية ضرورية لصحة العائلة'
                : 'Mosquitoes and flies transmit more than 50 diseases to humans. Preventive protection is essential for family health'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthRisks.map((risk, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-red-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-500 mt-1" size={20} />
                  <span className="text-gray-800 font-medium">{risk}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insect Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'أنواع الحشرات الطائرة ومواسم نشاطها' : 'Flying Insect Types and Activity Seasons'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insectTypes.map((insect, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-green-50 p-6 rounded-xl border">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{insect.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{insect.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-1 text-sm">
                      {isArabic ? 'المشاكل:' : 'Problems:'}
                    </h4>
                    <p className="text-xs text-gray-600">{insect.problems}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1 text-sm">
                      {isArabic ? 'الموسم:' : 'Season:'}
                    </h4>
                    <p className="text-xs text-gray-600">{insect.season}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Program Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'البرنامج الموسمي المتكامل' : 'Integrated Seasonal Program'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'برنامج سنوي شامل يراعي دورة حياة الحشرات والتغيرات الموسمية'
                : 'Comprehensive annual program considering insect life cycles and seasonal changes'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalProgram.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{program.season}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary mb-2 text-sm">
                      {isArabic ? 'التركيز:' : 'Focus:'}
                    </h4>
                    <p className="text-sm text-gray-700">{program.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2 text-sm">
                      {isArabic ? 'الأنشطة:' : 'Activities:'}
                    </h4>
                    <p className="text-xs text-gray-600">{program.activities}</p>
                  </div>
                </div>
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
              {isArabic ? 'منهجية العلاج المتكامل' : 'Integrated Treatment Methodology'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'لا نكتفي بالرش فقط، بل نعالج الأسباب ونحمي من العودة'
                : 'We don\'t just spray, we treat causes and protect from return'
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'نصائح الوقاية من البعوض والذباب' : 'Mosquito and Fly Prevention Tips'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'تطبيق هذه النصائح يقلل من الحاجة للرش ويحافظ على النتائج لفترة أطول'
                  : 'Applying these tips reduces the need for spraying and maintains results longer'
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
            {isArabic ? 'احصل على حماية موسمية متكاملة' : 'Get Integrated Seasonal Protection'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'برنامج سنوي شامل للحماية من البعوض والذباب طوال السنة'
              : 'Comprehensive annual program for year-round mosquito and fly protection'
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
          title: isArabic ? 'مكافحة البعوض والذباب بجدة' : 'Mosquito & Fly Control in Jeddah',
          description: isArabic 
            ? 'حماية شاملة من البعوض والذباب بتقنيات حديثة وحلول بيئية'
            : 'Comprehensive protection from mosquitoes and flies with modern techniques',
          serviceType: isArabic ? 'مكافحة البعوض والذباب' : 'Mosquito & Fly Control'
        }}
      />
      
      <SchemaInjector 
        type="faq" 
        data={{ questions: faqItems }}
      />
    </>
  );
}



