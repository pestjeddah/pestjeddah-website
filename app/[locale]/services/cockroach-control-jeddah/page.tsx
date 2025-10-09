import { Metadata } from 'next';
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
  Bug,
  Home,
  Utensils
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {isArabic ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">مشكلة الصراصير في جدة: تحدٍ يومي يحتاج حلول احترافية</h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    الصراصير من أكثر الحشرات إزعاجاً وخطورة في منازل ومنشآت جدة. مناخ جدة الحار والرطب، خاصة في فصل الصيف، يوفر البيئة المثالية لتكاثر الصراصير بسرعة مذهلة. <strong>صرصور واحد اليوم قد يتحول إلى مئات الصراصير في غضون أسابيع</strong> - وهذا ليس تهويلاً بل حقيقة علمية مثبتة.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    في شركة الأسطورة، نتعامل يومياً مع عشرات الحالات في مختلف أحياء جدة من <Link href="/jeddah/al-hamra" className="text-primary hover:underline font-semibold">الحمراء</Link> و<Link href="/jeddah/al-rawdah" className="text-primary hover:underline font-semibold">الروضة</Link> إلى <Link href="/jeddah/obhur-north" className="text-primary hover:underline font-semibold">أبحر الشمالية</Link>. نعرف تماماً سلوك الصراصير في بيئتنا المحلية، وهذه الخبرة العملية تجعلنا الأكفأ في التعامل معها.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">لماذا الصراصير خطيرة؟ أكثر من مجرد مظهر مقزز</h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    كثيرون يظنون أن مشكلة الصراصير مجرد "منظر غير مستحب"، لكن الحقيقة أخطر بكثير. <strong>الصراصير ناقلة أمراض خطيرة</strong> تشمل السالمونيلا، الإشريكية القولونية، التهاب الكبد الوبائي، والتيفوئيد. تتجول هذه الحشرات في المجاري والقمامة ثم تسير على أطباقك وطعامك!
                  </p>

                  <div className="bg-red-50 border-r-4 border-red-500 p-6 my-8 rounded-lg">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                      <AlertTriangle size={24} />
                      حقائق صادمة عن الصراصير
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>يمكنها العيش بدون رأس لأسبوع كامل</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>تستطيع حبس نفسها تحت الماء لمدة 40 دقيقة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>الأنثى الواحدة تضع حتى 300 بيضة في حياتها</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>تنقل أكثر من 33 نوع من البكتيريا الضارة</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">أنواع الصراصير الشائعة في جدة</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    ليست كل الصراصير متشابهة. معرفة النوع الذي تعاني منه أمر بالغ الأهمية لنجاح المكافحة:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Bug className="text-red-600" size={28} />
                        <h4 className="text-xl font-bold text-gray-900">الصرصور الألماني</h4>
                      </div>
                      <p className="text-gray-700">
                        الأكثر انتشاراً في <strong>المطاعم والمطابخ</strong>. صغير الحجم (1-1.5 سم) بني فاتح. يتكاثر بسرعة هائلة ويفضل الأماكن الدافئة والرطبة. يحتاج علاج متخصص بالطعوم الجاذبة.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Bug className="text-orange-600" size={28} />
                        <h4 className="text-xl font-bold text-gray-900">الصرصور الأمريكي</h4>
                      </div>
                      <p className="text-gray-700">
                        الأكبر حجماً (4-5 سم) بني محمر. يعيش في <strong>المجاري والأقبية</strong>. يفضل المناطق المظلمة الرطبة. يمكنه الطيران في الأجواء الحارة. يحتاج رش شامل للمجاري.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Bug className="text-yellow-700" size={28} />
                        <h4 className="text-xl font-bold text-gray-900">الصرصور الشرقي</h4>
                      </div>
                      <p className="text-gray-700">
                        متوسط الحجم (2-3 سم) أسود لامع. يعيش في <strong>الحمامات والمطابخ</strong>. بطيء الحركة لكنه مقاوم للجفاف. يحتاج علاج بالمساحيق في الشقوق.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Bug className="text-amber-600" size={28} />
                        <h4 className="text-xl font-bold text-gray-900">صرصور الخشب</h4>
                      </div>
                      <p className="text-gray-700">
                        يفضل <strong>الأماكن الخارجية والحدائق</strong>. ينجذب للضوء ويدخل المنازل عبر النوافذ. أقل خطورة لكنه مزعج. يحتاج معالجة محيط المبنى.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">لماذا تختار شركة الأسطورة لمكافحة الصراصير؟</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    ليست كل شركات المكافحة متساوية في الكفاءة. في شركة الأسطورة، نقدم خدمة متميزة تضمن لك القضاء النهائي على الصراصير:
                  </p>

                  <div className="bg-blue-50 border-r-4 border-blue-500 p-6 my-8 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-4">مميزاتنا الحصرية:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>فنيون معتمدون:</strong> جميع فنيينا حاصلون على شهادات متخصصة في مكافحة الآفات ومدربون على أحدث التقنيات</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>مبيدات آمنة ومرخصة:</strong> نستخدم فقط مبيدات مسجلة من وزارة البيئة والمياه والزراعة، آمنة تماماً على الأطفال والحيوانات الأليفة</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>تقنية الطعوم الذكية:</strong> نستخدم طعوم جاذبة حديثة تقضي على الصراصير في أعشاشها، مما يضمن عدم عودتها</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>خدمة 24/7:</strong> نستجيب لطلبات الطوارئ في أي وقت، حتى في العطلات والأعياد</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>ضمان مكتوب 6 أشهر:</strong> إذا عادت المشكلة نعيد العلاج مجاناً بدون أي تكاليف إضافية</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">كيف نعمل؟ منهجية علمية مضمونة</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    نتبع في شركة الأسطورة نهجاً علمياً متكاملاً للقضاء على الصراصير نهائياً. لا نكتفي بالرش السطحي بل نعالج المشكلة من جذورها:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">الفحص الميداني الشامل</h4>
                        <p className="text-gray-700">
                          نبدأ بفحص دقيق لكل زاوية في المبنى. نحدد نوع الصراصير، مستوى الإصابة، نقاط الدخول، ومصادر الغذاء والماء. نستخدم أدوات كشف متطورة للوصول للأماكن المخفية.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">تصميم خطة العلاج المخصصة</h4>
                        <p className="text-gray-700">
                          بناءً على الفحص، نضع خطة علاج مخصصة تناسب نوع المبنى (منزل، مطعم، مستودع، فندق). نختار المبيدات والطعوم الأنسب لكل حالة. خطتنا تراعي وجود أطفال أو حيوانات أليفة.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">التنفيذ الاحترافي</h4>
                        <p className="text-gray-700">
                          نطبق مزيجاً من الطعوم الجاذبة في الأماكن الاستراتيجية، والرش المستهدف في الشقوق والزوايا، والمساحيق في الأماكن الجافة. نستخدم معدات احترافية تضمن وصول المبيد لكل مكان.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">المتابعة والوقاية</h4>
                        <p className="text-gray-700">
                          بعد 10-14 يوم نعود لفحص النتائج. نقدم نصائح وقائية مكتوبة تضمن عدم عودة المشكلة. نبقى على تواصل معك طوال فترة الضمان.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">نصائح ذهبية للوقاية من الصراصير</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    الوقاية دائماً أفضل من العلاج. إليك نصائح عملية من واقع خبرتنا لمنع دخول الصراصير لمنزلك:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Utensils className="text-green-600" size={24} />
                        <h4 className="text-lg font-bold text-gray-900">في المطبخ</h4>
                      </div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• لا تترك أطباق متسخة في الحوض أبداً</li>
                        <li>• امسح الأسطح يومياً بمحلول الخل</li>
                        <li>• خزّن الطعام في علب محكمة الإغلاق</li>
                        <li>• نظف خلف الأجهزة الكهربائية شهرياً</li>
                        <li>• أفرغ سلة القمامة يومياً</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Home className="text-blue-600" size={24} />
                        <h4 className="text-lg font-bold text-gray-900">في المنزل عموماً</h4>
                      </div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• سد الشقوق بالسيليكون خاصة حول الأنابيب</li>
                        <li>• أصلح أي تسريبات مياه فوراً</li>
                        <li>• ضع شبك ناعم على فتحات التهوية</li>
                        <li>• قلل الرطوبة باستخدام مزيلات الرطوبة</li>
                        <li>• لا تترك كرتون أو أوراق متراكمة</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">متى تحتاج للاتصال بنا فوراً؟</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    لا تنتظر حتى تتفاقم المشكلة! اتصل بشركة الأسطورة فوراً إذا لاحظت أياً من هذه العلامات:
                  </p>

                  <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 my-6 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠️</span>
                        <span>رؤية صراصير في وضح النهار (علامة إصابة شديدة)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠️</span>
                        <span>انتشار رائحة زيتية كريهة في المطبخ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠️</span>
                        <span>وجود بقع سوداء على الجدران أو الأثاث</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠️</span>
                        <span>العثور على بيض الصراصير (كبسولات بنية صغيرة)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">⚠️</span>
                        <span>إصابتك أو أحد أفراد أسرتك بحساسية مفاجئة</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    تذكر أن <strong>الصراصير تتكاثر بسرعة مخيفة</strong>. كل يوم تأخير يعني مئات الصراصير الإضافية! نحن في شركة الأسطورة نقدم <strong>خدمة طوارئ فورية</strong> - نصل إليك خلال ساعات من اتصالك بنا.
                  </p>

                  <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 my-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">احصل على فحص مجاني اليوم</h3>
                    <p className="text-gray-700 mb-6 text-lg">
                      لا تدع الصراصير تسيطر على منزلك أو منشأتك. <strong>اتصل بنا الآن واحصل على فحص شامل مجاني</strong> مع استشارة متخصصة. فريقنا جاهز للوصول إليك في أي منطقة في جدة.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <MessageCircle size={24} />
                        احجز عبر واتساب
                      </Link>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="inline-flex items-center justify-center gap-3 bg-white text-green-600 border-3 border-green-600 px-10 py-4 rounded-xl hover:bg-green-50 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Phone size={24} />
                        اتصل الآن: {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">خدمات ذات صلة قد تهمك</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    إذا كنت تعاني من الصراصير، فربما تواجه مشاكل أخرى أيضاً. نقدم حلولاً متكاملة لجميع أنواع الحشرات:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 my-8">
                    <Link href="/services/ants-control-jeddah" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                      <h4 className="font-bold text-gray-900 mb-2">مكافحة النمل</h4>
                      <p className="text-sm text-gray-600">تخلص من النمل بجميع أنواعه بطرق آمنة</p>
                    </Link>
                    <Link href="/services/bed-bugs-treatment-jeddah" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                      <h4 className="font-bold text-gray-900 mb-2">علاج بق الفراش</h4>
                      <p className="text-sm text-gray-600">حلول فعالة للقضاء على بق الفراش</p>
                    </Link>
                    <Link href="/services/rodents-control-jeddah" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                      <h4 className="font-bold text-gray-900 mb-2">مكافحة القوارض</h4>
                      <p className="text-sm text-gray-600">تخلص من الفئران والجرذان نهائياً</p>
                    </Link>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    كما نقدم <Link href="/services/annual-contracts" className="text-primary hover:underline font-semibold">عقود صيانة سنوية</Link> توفر لك حماية دائمة من جميع الحشرات مع زيارات دورية وضمان شامل. مناسبة بشكل خاص لـ<Link href="/sectors/restaurants" className="text-primary hover:underline font-semibold">المطاعم</Link> و<Link href="/sectors/commercial" className="text-primary hover:underline font-semibold">المنشآت التجارية</Link>.
                  </p>
                </>
              ) : (
                <>
                  {/* English content follows same structure */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cockroach Problem in Jeddah: A Daily Challenge Needing Professional Solutions</h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Cockroaches are among the most annoying and dangerous insects in Jeddah homes and facilities. Jeddah's hot and humid climate, especially in summer, provides the perfect environment for cockroaches to reproduce at an amazing speed. <strong>One cockroach today can turn into hundreds within weeks</strong> - this is not exaggeration but a proven scientific fact.
                  </p>

                  {/* Continue with English translation of the content... */}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 bg-gray-50">
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
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
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
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
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
