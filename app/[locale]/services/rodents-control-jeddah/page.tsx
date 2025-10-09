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
  Lock,
  Eye,
  Thermometer
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
      ? 'مكافحة القوارض بجدة | طعوم آمنة وحلول إنسانية — شركة الأسطورة'
      : 'Rodent Control in Jeddah | Safe Baits & Humane Solutions — Al-Ustora',
    description: isArabic
      ? 'مكافحة القوارض بجدة بطعوم آمنة وحلول إنسانية. التخلص من الفئران والجرذان، سد منافذ الدخول، مراقبة مستمرة مع ضمان فعال.'
      : 'Rodent control in Jeddah with safe baits and humane solutions. Eliminate mice and rats, seal entry points, continuous monitoring with effective guarantee.',
    keywords: isArabic 
      ? ['مكافحة القوارض جدة', 'مكافحة الفئران', 'مكافحة الجرذان', 'طعوم آمنة', 'سد منافذ']
      : ['rodent control jeddah', 'mice control', 'rat control', 'safe baits', 'entry sealing'],
  };
}

export default function RodentControlPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const rodentTypes = isArabic ? [
    {
      name: 'الفئران المنزلية',
      description: 'صغيرة الحجم، نشطة ليلاً، تتكاثر بسرعة',
      risks: 'تلوث الطعام، أمراض، أضرار كهربائية',
      solution: 'طعوم آمنة في أماكن استراتيجية'
    },
    {
      name: 'الجرذان النرويجية',
      description: 'كبيرة الحجم، تحفر أنفاق، قوية',
      risks: 'تدمير هيكلي، أمراض خطيرة، عدوانية',
      solution: 'محطات طعوم مؤمنة ومراقبة'
    },
    {
      name: 'فئران الحقول',
      description: 'تدخل موسمياً، تبحث عن طعام ودفء',
      risks: 'انتشار سريع، تلف المخزون، روائح',
      solution: 'حاجز وقائي وسد منافذ'
    }
  ] : [
    {
      name: 'House Mice',
      description: 'Small size, active at night, reproduce quickly',
      risks: 'Food contamination, diseases, electrical damage',
      solution: 'Safe baits in strategic locations'
    },
    {
      name: 'Norway Rats',
      description: 'Large size, burrow tunnels, strong',
      risks: 'Structural destruction, serious diseases, aggressive',
      solution: 'Secured bait stations and monitoring'
    },
    {
      name: 'Field Mice',
      description: 'Enter seasonally, seek food and warmth',
      risks: 'Rapid spread, stock damage, odors',
      solution: 'Protective barrier and entry sealing'
    }
  ];

  const symptoms = isArabic ? [
    'فضلات صغيرة سوداء في الزوايا',
    'أصوات جري وخدش في الليل',
    'رائحة بول نفاذة ومميزة',
    'آثار قضم على الطعام والأسلاك',
    'بقع دهنية على الجدران',
    'أعشاش من الورق والقماش المقطع'
  ] : [
    'Small black droppings in corners',
    'Running and scratching sounds at night',
    'Sharp distinctive urine odor',
    'Gnaw marks on food and wires',
    'Grease stains on walls',
    'Nests made of shredded paper and fabric'
  ];

  const healthRisks = isArabic ? [
    'السالمونيلا وأمراض الجهاز الهضمي',
    'داء الكلب والأمراض الفيروسية',
    'الطفيليات والبراغيث',
    'تلوث الطعام والمياه',
    'حساسية من فضلات القوارض',
    'نقل البكتيريا الضارة'
  ] : [
    'Salmonella and digestive diseases',
    'Rabies and viral diseases',
    'Parasites and fleas',
    'Food and water contamination',
    'Allergy from rodent droppings',
    'Transmission of harmful bacteria'
  ];

  const processSteps = isArabic ? [
    {
      title: 'الفحص والتشخيص',
      description: 'فحص شامل لتحديد نوع القوارض ومسارات الحركة ونقاط الدخول',
      icon: Search
    },
    {
      title: 'سد منافذ الدخول',
      description: 'إغلاق جميع الشقوق والفتحات التي تستخدمها القوارض للدخول',
      icon: Lock
    },
    {
      title: 'العلاج الآمن',
      description: 'وضع طعوم آمنة ومحطات مراقبة في الأماكن الاستراتيجية',
      icon: Target
    },
    {
      title: 'المراقبة المستمرة',
      description: 'متابعة دورية وصيانة للتأكد من عدم عودة المشكلة',
      icon: Eye
    }
  ] : [
    {
      title: 'Inspection & Diagnosis',
      description: 'Comprehensive inspection to identify rodent type, movement paths and entry points',
      icon: Search
    },
    {
      title: 'Entry Point Sealing',
      description: 'Close all cracks and openings used by rodents for entry',
      icon: Lock
    },
    {
      title: 'Safe Treatment',
      description: 'Place safe baits and monitoring stations in strategic locations',
      icon: Target
    },
    {
      title: 'Continuous Monitoring',
      description: 'Regular follow-up and maintenance to ensure problem doesn\'t return',
      icon: Eye
    }
  ];

  const faqItems = isArabic ? [
    {
      question: 'ما الفرق بين الطعوم والمصائد التقليدية؟',
      answer: 'الطعوم أكثر فعالية لأنها تقضي على القوارض تدريجياً دون أن تشك فيها، بينما المصائد قد تجعلها تتجنب المنطقة. كما أن الطعوم آمنة أكثر للعائلة والحيوانات الأليفة.'
    },
    {
      question: 'كم تستغرق عملية القضاء على القوارض؟',
      answer: 'عادة 2-4 أسابيع حسب حجم الإصابة. ستلاحظ انخفاض النشاط خلال الأسبوع الأول، والقضاء الكامل خلال الشهر مع المراقبة المستمرة.'
    },
    {
      question: 'هل الطعوم آمنة للأطفال والحيوانات الأليفة؟',
      answer: 'نعم، نستخدم محطات طعوم مؤمنة لا يمكن فتحها إلا بمفتاح خاص، ونضعها في أماكن بعيدة عن متناول الأطفال والحيوانات الأليفة.'
    },
    {
      question: 'لماذا يجب سد منافذ الدخول؟',
      answer: 'سد المنافذ جزء أساسي من الحل المتكامل. بدونه، ستدخل قوارض جديدة حتى لو تم القضاء على الموجودة. نستخدم مواد متخصصة لا تستطيع القوارض قضمها.'
    },
    {
      question: 'كيف أعرف أن العلاج نجح؟',
      answer: 'ستختفي الأصوات الليلية، والفضلات الجديدة، والروائح. نراقب النشاط بمحطات خاصة ونقدم تقارير دورية لتأكيد نجاح العلاج.'
    }
  ] : [
    {
      question: 'What is the difference between baits and traditional traps?',
      answer: 'Baits are more effective because they eliminate rodents gradually without making them suspicious, while traps might make them avoid the area. Also, baits are safer for family and pets.'
    },
    {
      question: 'How long does rodent elimination take?',
      answer: 'Usually 2-4 weeks depending on infestation size. You will notice decreased activity during the first week, and complete elimination within a month with continuous monitoring.'
    },
    {
      question: 'Are baits safe for children and pets?',
      answer: 'Yes, we use secured bait stations that can only be opened with special key, and place them in locations away from children and pets.'
    },
    {
      question: 'Why is sealing entry points necessary?',
      answer: 'Sealing entry points is essential part of integrated solution. Without it, new rodents will enter even if existing ones are eliminated. We use specialized materials that rodents cannot gnaw.'
    },
    {
      question: 'How do I know the treatment succeeded?',
      answer: 'Night sounds, new droppings, and odors will disappear. We monitor activity with special stations and provide regular reports to confirm treatment success.'
    }
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، أريد خدمة مكافحة القوارض بجدة'
    : 'Hello, I want rodent control service in Jeddah';

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
            <span className="text-gray-900">{isArabic ? 'مكافحة القوارض' : 'Rodent Control'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {isArabic ? 'مكافحة القوارض بجدة' : 'Rodent Control in Jeddah'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {isArabic 
                  ? 'التخلص الآمن والفعال من الفئران والجرذان بطعوم آمنة وحلول إنسانية. سد منافذ الدخول، مراقبة مستمرة، وضمان طويل المدى.'
                  : 'Safe and effective elimination of mice and rats with safe baits and humane solutions. Entry point sealing, continuous monitoring, and long-term guarantee.'
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
                  {isArabic ? 'احجز حل آمن' : 'Book Safe Solution'}
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {isArabic ? 'استشارة طوارئ' : 'Emergency Consultation'}
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Shield size={20} />
                  <span className="text-sm">{isArabic ? 'طعوم آمنة' : 'Safe Baits'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Lock size={20} />
                  <span className="text-sm">{isArabic ? 'سد منافذ الدخول' : 'Entry Sealing'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Eye size={20} />
                  <span className="text-sm">{isArabic ? 'مراقبة مستمرة' : 'Continuous Monitoring'}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Heart size={20} />
                  <span className="text-sm">{isArabic ? 'حلول إنسانية' : 'Humane Solutions'}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/Rodent-control-Jeddah.jpg"
                alt={isArabic ? 'مكافحة القوارض بجدة' : 'Rodent control in Jeddah'}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                priority
              />
              
              {/* Safe Method Badge */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield size={16} />
                  <span className="text-sm font-semibold">
                    {isArabic ? 'طعوم آمنة' : 'Safe Baits'}
                  </span>
                </div>
              </div>

              {/* Effectiveness Badge */}
              <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">98%</div>
                  <div className="text-xs">{isArabic ? 'معدل النجاح' : 'Success Rate'}</div>
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
              {isArabic ? 'المخاطر الصحية للقوارض' : 'Health Risks from Rodents'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'القوارض تحمل أكثر من 35 مرضاً قد تنتقل للإنسان. التدخل السريع ضروري لحماية صحة العائلة'
                : 'Rodents carry more than 35 diseases that can transmit to humans. Quick intervention is essential to protect family health'
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

          <div className="mt-8 p-6 bg-white rounded-xl border border-red-200">
            <h3 className="font-semibold text-red-800 mb-3">
              {isArabic ? '⚠️ تحذير صحي مهم' : '⚠️ Important Health Warning'}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isArabic 
                ? 'القوارض تنشر الأمراض عبر فضلاتها، بولها، ولعابها. كما تنقل الطفيليات والبراغيث. حتى لو لم تشاهد القوارض، فوجود علامات لها يستدعي التدخل الفوري لحماية صحة العائلة.'
                : 'Rodents spread diseases through their droppings, urine, and saliva. They also carry parasites and fleas. Even if you don\'t see rodents, presence of their signs requires immediate intervention to protect family health.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Rodent Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'أنواع القوارض وطرق العلاج' : 'Rodent Types and Treatment Methods'}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {rodentTypes.map((rodent, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{rodent.name}</h3>
                <p className="text-gray-700 mb-4">{rodent.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">
                      {isArabic ? 'المخاطر:' : 'Risks:'}
                    </h4>
                    <p className="text-sm text-gray-600">{rodent.risks}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">
                      {isArabic ? 'الحل:' : 'Solution:'}
                    </h4>
                    <p className="text-sm text-gray-600">{rodent.solution}</p>
                  </div>
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
                {isArabic ? 'علامات وجود القوارض' : 'Signs of Rodent Presence'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'اكتشف المشكلة مبكراً لحل أسرع وحماية أفضل لصحة العائلة'
                  : 'Detect the problem early for faster solution and better protection of family health'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <AlertTriangle className="text-gray-500 mt-1" size={20} />
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
              {isArabic ? 'منهجية الحل المتكامل' : 'Integrated Solution Methodology'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? 'حل شامل يجمع بين القضاء على القوارض الموجودة ومنع دخول أخرى جديدة'
                : 'Comprehensive solution combining elimination of existing rodents and preventing new ones from entering'
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

      {/* Service Coverage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'نخدم جميع أحياء جدة بسرعة' : 'We Serve All Jeddah Neighborhoods Quickly'}
              </h2>
              <p className="text-gray-600">
                {isArabic 
                  ? 'استجابة سريعة لمكافحة القوارض في كل أنحاء جدة'
                  : 'Quick response for rodent control throughout Jeddah'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <Link href={`/${locale}/jeddah/al-hamra`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الحمراء' : 'Al-Hamra'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-rawdah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الروضة' : 'Al-Rawdah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-salamah`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'السلامة' : 'Al-Salamah'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-naeem`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'النعيم' : 'Al-Naeem'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-bawadi`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'البوادي' : 'Al-Bawadi'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-marjan`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'المرجان' : 'Al-Marjan'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/obhur-north`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'أبحر الشمالية' : 'Obhur North'}</span>
              </Link>
              <Link href={`/${locale}/jeddah/al-shati`} className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{isArabic ? 'الشاطئ' : 'Al-Shati'}</span>
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'لماذا تزداد مشكلة القوارض في جدة؟' : 'Why Is Rodent Problem Increasing in Jeddah?'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isArabic 
                    ? 'جدة كمدينة ساحلية بمناخ دافئ تشهد توفر مصادر طعام ومياه، مما يجعلها بيئة مثالية لتكاثر القوارض. التوسع العمراني السريع والمباني القديمة توفر العديد من نقاط الدخول والمأوى.'
                    : 'Jeddah, as a coastal city with warm climate, has abundant food and water sources, making it an ideal environment for rodent reproduction. Rapid urban expansion and old buildings provide many entry points and shelter.'
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic 
                    ? 'المطاعم والأسواق المنتشرة، بقايا الطعام في الأحياء السكنية، وشبكات الصرف الصحي القديمة كلها عوامل تساهم في زيادة نشاط القوارض.'
                    : 'Widespread restaurants and markets, food waste in residential areas, and old sewer systems all contribute to increased rodent activity.'
                  }
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? 'الأضرار الاقتصادية للقوارض' : 'Economic Damage from Rodents'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{isArabic ? 'تلف المخزون' : 'Stock Damage'}</h4>
                      <p className="text-sm text-gray-600">{isArabic ? 'تلوث وإتلاف المواد الغذائية والمخزون' : 'Contamination and damage of food and stock'}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{isArabic ? 'أضرار البنية التحتية' : 'Infrastructure Damage'}</h4>
                      <p className="text-sm text-gray-600">{isArabic ? 'قضم الأسلاك، الأنابيب، والعوازل' : 'Gnawing wires, pipes, and insulation'}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{isArabic ? 'فقدان السمعة' : 'Reputation Loss'}</h4>
                      <p className="text-sm text-gray-600">{isArabic ? 'خاصة للمطاعم والفنادق والمنشآت التجارية' : 'Especially for restaurants, hotels and commercial facilities'}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'نصائح وقائية للحماية من القوارض' : 'Prevention Tips to Protect Against Rodents'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="text-green-600" />
                  {isArabic ? 'داخل المنزل' : 'Inside the Home'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'احفظ الطعام في حاويات محكمة الإغلاق' : 'Store food in airtight containers'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'نظف بقايا الطعام فوراً ولا تتركها طوال الليل' : 'Clean food scraps immediately and don\'t leave overnight'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'أغلق القمامة بإحكام واخرجها يومياً' : 'Close garbage tightly and dispose daily'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'رتب المخزن والأماكن المزدحمة' : 'Organize storage and cluttered areas'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'افحص المنزل بانتظام بحثاً عن علامات القوارض' : 'Inspect home regularly for rodent signs'}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="text-blue-600" />
                  {isArabic ? 'حول المنزل' : 'Around the Home'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'افحص وأصلح أي شقوق في الجدران والأساسات' : 'Inspect and repair any cracks in walls and foundations'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'ثبت شبكات معدنية على فتحات التهوية' : 'Install metal screens on ventilation openings'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'أبعد الحطب والنباتات عن الجدران الخارجية' : 'Keep firewood and plants away from exterior walls'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'قص الأشجار والشجيرات المتدلية على السطح' : 'Trim trees and shrubs hanging over roof'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{isArabic ? 'تأكد من عدم وجود مصادر مياه راكدة' : 'Ensure no standing water sources'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertTriangle className="text-yellow-600" />
                {isArabic ? 'متى تحتاج لخدمة احترافية؟' : 'When Do You Need Professional Service?'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{isArabic ? 'اتصل فوراً إذا:' : 'Call Immediately If:'}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {isArabic ? 'شاهدت قوارض خلال النهار' : 'You see rodents during daytime'}
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {isArabic ? 'وجدت فضلات متعددة في أماكن مختلفة' : 'Found multiple droppings in different places'}
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {isArabic ? 'سمعت أصوات متكررة في الجدران أو السقف' : 'Heard repeated sounds in walls or ceiling'}
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {isArabic ? 'لاحظت آثار قضم على الأسلاك الكهربائية' : 'Noticed gnaw marks on electrical wires'}
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">
                    {isArabic 
                      ? 'التأخير في مكافحة القوارض يؤدي لتفاقم المشكلة وزيادة التكاليف. التدخل المبكر بخدمة احترافية يضمن حلاً سريعاً وآمناً وفعالاً.'
                      : 'Delaying rodent control leads to problem escalation and increased costs. Early intervention with professional service ensures fast, safe and effective solution.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'خدمات مكافحة أخرى قد تحتاجها' : 'Other Pest Control Services You May Need'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href={`/${locale}/services/cockroach-control-jeddah`} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{isArabic ? 'مكافحة الصراصير' : 'Cockroach Control'}</h3>
                <p className="text-gray-600 text-sm">{isArabic ? 'القضاء على الصراصير بجميع أنواعها بتقنيات متقدمة' : 'Eliminate all types of cockroaches with advanced techniques'}</p>
              </Link>
              <Link href={`/${locale}/services/bed-bugs-treatment-jeddah`} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
                <Thermometer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{isArabic ? 'علاج بق الفراش' : 'Bed Bug Treatment'}</h3>
                <p className="text-gray-600 text-sm">{isArabic ? 'علاج حراري متقدم للقضاء على بق الفراش نهائياً' : 'Advanced heat treatment to eliminate bed bugs permanently'}</p>
              </Link>
              <Link href={`/${locale}/services/termites-control-jeddah`} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{isArabic ? 'مكافحة النمل الأبيض' : 'Termite Control'}</h3>
                <p className="text-gray-600 text-sm">{isArabic ? 'حماية كاملة من النمل الأبيض بأنظمة متقدمة' : 'Complete termite protection with advanced systems'}</p>
              </Link>
            </div>
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
            {isArabic ? 'احمِ عائلتك من القوارض الآن' : 'Protect Your Family from Rodents Now'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'حل آمن ومتكامل للقضاء على القوارض وحماية صحة العائلة'
              : 'Safe and integrated solution to eliminate rodents and protect family health'
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
    </>
  );
}



