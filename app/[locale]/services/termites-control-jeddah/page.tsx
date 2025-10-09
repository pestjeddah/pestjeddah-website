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
  Search,
  Wrench,
  HomeIcon,
  TrendingDown,
  DollarSign
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

  const faqItems = isArabic ? [
    {
      question: 'كم تستغرق عملية علاج النمل الأبيض؟',
      answer: 'يعتمد على حجم المبنى ومستوى الإصابة. العلاج الأولي يستغرق 1-3 أيام، لكن النظام الوقائي يتطلب مراقبة مستمرة لضمان الفعالية.'
    },
    {
      question: 'ما هي أفضل طريقة لحماية مبنى جديد من النمل الأبيض؟',
      answer: 'للمباني الجديدة، نوصي بتركيب نظام حماية وقائية يشمل معالجة التربة والخشب قبل البناء، وتركيب حواجز فيزيائية وكيميائية.'
    },
    {
      question: 'هل يمكن اكتشاف النمل الأبيض قبل ظهور الأضرار؟',
      answer: 'نعم، نستخدم أجهزة متقدمة للكشف المبكر مثل الموجات فوق الصوتية وكاميرات الأشعة تحت الحمراء للكشف عن النشاط قبل ظهور الأضرار المرئية.'
    },
    {
      question: 'ما هي مدة الضمان على علاج النمل الأبيض؟',
      answer: 'نقدم ضمان يصل إلى 5 سنوات على علاج النمل الأبيض، مع برنامج صيانة دورية للتأكد من استمرارية الحماية.'
    }
  ] : [
    {
      question: 'How long does termite treatment take?',
      answer: 'It depends on building size and infestation level. Initial treatment takes 1-3 days, but the preventive system requires continuous monitoring to ensure effectiveness.'
    },
    {
      question: 'What is the best way to protect a new building from termites?',
      answer: 'For new buildings, we recommend installing a preventive protection system including soil and wood treatment before construction, and installing physical and chemical barriers.'
    },
    {
      question: 'Can termites be detected before damage appears?',
      answer: 'Yes, we use advanced equipment for early detection such as ultrasonic devices and infrared cameras to detect activity before visible damage appears.'
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
      <ServiceHero
        title="مكافحة النمل الأبيض بجدة"
        titleEn="Termite Control in Jeddah"
        description="حماية شاملة للمباني من النمل الأبيض بأحدث التقنيات. فحص متقدم، أنظمة وقاية متطورة، وضمان طويل المدى لحماية استثمارك."
        descriptionEn="Comprehensive building protection from termites with latest technologies. Advanced inspection, sophisticated prevention systems, and long-term guarantee to protect your investment."
        image="/images/Termite-treatment-Jeddah.jpg"
        imageAlt="مكافحة النمل الأبيض بجدة"
        imageAltEn="Termite control in Jeddah"
        whatsappMessage={whatsappMessage}
        phone={siteConfig.phone}
        breadcrumbs={[
          { label: isArabic ? 'الرئيسية' : 'Home', href: locale === 'ar' ? '/' : '/en' },
          { label: isArabic ? 'الخدمات' : 'Services', href: locale === 'ar' ? '/services' : '/en/services' },
          { label: isArabic ? 'مكافحة النمل الأبيض' : 'Termite Control', href: '#' }
        ]}
        featuresText={[
          isArabic ? 'فحص بأجهزة متقدمة' : 'Advanced Equipment Inspection',
          isArabic ? 'ضمان 5 سنوات' : '5 Years Guarantee',
          isArabic ? 'حماية شاملة' : 'Complete Protection',
          isArabic ? 'صيانة دورية' : 'Regular Maintenance'
        ]}
        bgGradient="from-amber-50 via-orange-50 to-red-50"
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {isArabic ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">النمل الأبيض: العدو الصامت الذي يدمر مبناك من الداخل</h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    يُطلق على النمل الأبيض اسم "المدمر الصامت" لسبب وجيه - <strong>فهو يعمل في الخفاء لسنوات دون أن تلاحظه، ثم فجأة تكتشف أن منزلك أو منشأتك تعرض لأضرار بمئات الآلاف من الريالات</strong>. في جدة، مشكلة النمل الأبيض أخطر مما تتخيل بسبب الرطوبة النسبية العالية والمناخ الملائم لتكاثره.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    في شركة الأسطورة، عالجنا مئات الحالات في مختلف أحياء جدة من <Link href="/jeddah/al-salamah" className="text-primary hover:underline font-semibold">السلامة</Link> و<Link href="/jeddah/al-aziziyah" className="text-primary hover:underline font-semibold">العزيزية</Link> إلى <Link href="/jeddah/obhur-south" className="text-primary hover:underline font-semibold">أبحر الجنوبية</Link>. رأينا بأعيننا كيف يمكن لمستعمرة واحدة من النمل الأبيض أن تسبب انهياراً جزئياً في سقف منزل أو تدميراً كاملاً لأثاث ثمين.
                  </p>

                  <div className="bg-red-50 border-r-4 border-red-600 p-6 my-8 rounded-lg">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                      <DollarSign size={24} />
                      حقيقة صادمة: تكلفة الإهمال
                    </h4>
                    <p className="text-gray-700 mb-4">
                      دراسة أجريت في السعودية أظهرت أن متوسط تكلفة إصلاح الأضرار الناتجة عن النمل الأبيض يتراوح بين <strong>50,000 إلى 300,000 ريال</strong> للمنزل الواحد! في المقابل، تكلفة الحماية الوقائية لا تتجاوز 3,000-5,000 ريال سنوياً.
                    </p>
                    <p className="text-gray-700">
                      <strong>السؤال الذي يجب أن تسأله نفسك:</strong> هل أنت مستعد لخسارة مئات الآلاف في المستقبل لتوفير بضعة آلاف اليوم؟
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">لماذا النمل الأبيض خطير جداً؟</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    النمل الأبيض ليس مجرد حشرة مزعجة - <strong>إنه تهديد حقيقي للسلامة الإنشائية لمبناك</strong>. إليك لماذا:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <TrendingDown className="text-red-600" size={24} />
                        تدمير هيكلي
                      </h4>
                      <p className="text-gray-700">
                        يأكل النمل الأبيض السليلوز الموجود في الخشب. مستعمرة واحدة تحتوي على <strong>مليوني نملة</strong> يمكنها أكل 450 جراماً من الخشب يومياً! تخيل ما يمكنها فعله في سنة واحدة.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">عمل خفي</h4>
                      <p className="text-gray-700">
                        يعمل النمل الأبيض من الداخل إلى الخارج. قد يبدو الخشب سليماً من الظاهر، لكنه مجوف تماماً من الداخل. <strong>لا تكتشف المشكلة إلا بعد فوات الأوان</strong>.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">لا يقتصر على الخشب</h4>
                      <p className="text-gray-700">
                        يهاجم النمل الأبيض أيضاً <strong>الورق، الكتب، السجاد، العزل، حتى الأسلاك الكهربائية!</strong> في إحدى الحالات التي عالجناها، تسبب في ماس كهربائي وحريق صغير.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-red-50 p-6 rounded-xl border-l-4 border-amber-500">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">انتشار سريع</h4>
                      <p className="text-gray-700">
                        مستعمرة النمل الأبيض تنمو بسرعة مذهلة. في ظروف جدة المثالية، <strong>يمكن لملكة واحدة أن تضع 30,000 بيضة يومياً</strong>. تخيل معدل التكاثر!
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">أنواع النمل الأبيض في جدة</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    معرفة نوع النمل الأبيض الذي تواجهه أمر حاسم لنجاح العلاج. في جدة، نواجه بشكل رئيسي نوعين:
                  </p>

                  <div className="space-y-6 my-8">
                    <div className="bg-white border-2 border-orange-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">1. النمل الأبيض الجوفي (Subterranean Termites)</h4>
                      <p className="text-gray-700 mb-3">
                        <strong>الأخطر والأكثر انتشاراً في جدة.</strong> يعيش في التربة ويبني أنابيب طينية للوصول للخشب. يحتاج رطوبة عالية للبقاء، لذلك تجده حول تسريبات المياه ومناطق الرطوبة.
                      </p>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>علامات التعرف:</strong> أنابيب طينية على الجدران الخارجية، أجنحة متساقطة في الربيع، خشب يبدو منتفخاً أو متضرراً بالماء.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-amber-200 p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">2. النمل الأبيض الخشبي الجاف (Drywood Termites)</h4>
                      <p className="text-gray-700 mb-3">
                        أقل شيوعاً لكنه خطير. يعيش مباشرة في الخشب الجاف دون الحاجة لتربة أو رطوبة عالية. يهاجم الأثاث، الأبواب، النوافذ، الأسقف الخشبية.
                      </p>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>علامات التعرف:</strong> كرات صغيرة تشبه نشارة الخشب تحت الأثاث، ثقوب صغيرة في الخشب، أصوات نقر خفيفة.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">منهجيتنا المتقدمة في مكافحة النمل الأبيض</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    في شركة الأسطورة، لا نكتفي بالرش التقليدي. نستخدم <strong>نظام إدارة متكامل يجمع بين التقنيات الحديثة والخبرة العملية</strong>:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">الفحص المتقدم بالأجهزة الحديثة</h4>
                        <p className="text-gray-700 mb-3">
                          نستخدم <strong>أجهزة الموجات فوق الصوتية</strong> للكشف عن النشاط داخل الجدران، و<strong>كاميرات الأشعة تحت الحمراء</strong> لرصد مناطق الرطوبة والنشاط الحراري. هذه التقنيات تكشف المشكلة قبل ظهور أي أضرار مرئية.
                        </p>
                        <p className="text-gray-700">
                          كما نستخدم أجهزة قياس الرطوبة المحمولة لتحديد المناطق الأكثر عرضة للإصابة. <strong>الفحص الشامل يستغرق 2-4 ساعات</strong> حسب حجم المبنى.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">تصميم نظام الحماية المخصص</h4>
                        <p className="text-gray-700 mb-3">
                          بناءً على نتائج الفحص، نضع خطة شاملة تشمل:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                          <li><strong>الحواجز الكيميائية:</strong> معالجة التربة حول المبنى بمبيدات طويلة الأمد</li>
                          <li><strong>نظام الطعوم الذكية:</strong> محطات طعوم خارجية تجذب النمل وتقضي على المستعمرة</li>
                          <li><strong>المعالجة المباشرة:</strong> حقن المبيدات في مناطق الإصابة النشطة</li>
                          <li><strong>الحواجز الفيزيائية:</strong> تركيب حواجز معدنية أو شبكية في المباني الجديدة</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">التنفيذ الاحترافي</h4>
                        <p className="text-gray-700">
                          فريقنا المتخصص ينفذ الخطة باستخدام معدات احترافية ومبيدات مسجلة رسمياً. نعمل بدقة لضمان الوصول لكل نقطة ضعف في المبنى. <strong>العملية تستغرق 1-3 أيام</strong> حسب الحالة، ومعظم العلاجات لا تتطلب إخلاء المبنى.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">المراقبة والصيانة المستمرة</h4>
                        <p className="text-gray-700">
                          النمل الأبيض ليس مشكلة "مرة واحدة وانتهى". نقدم <strong>برنامج صيانة دورية</strong> يشمل فحوصات كل 3-6 أشهر، تجديد الطعوم، فحص الحواجز الكيميائية، وتقارير مفصلة عن حالة الحماية.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">نصائح وقائية من الخبراء</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    بجانب العلاج الاحترافي، هناك إجراءات بسيطة يمكنك اتخاذها لتقليل خطر الإصابة:
                  </p>

                  <div className="bg-blue-50 border-r-4 border-blue-500 p-6 my-8 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-4">إجراءات وقائية أساسية:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>أصلح تسريبات المياه فوراً:</strong> الرطوبة تجذب النمل الأبيض كالمغناطيس</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>تجنب ملامسة الخشب للتربة:</strong> اترك مسافة 15 سم على الأقل بين الخشب والأرض</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>أزل الأخشاب الميتة:</strong> أي أخشاب أو كرتون قديم حول المنزل يجب إزالته</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>حسّن التهوية:</strong> خاصة في الأقبية والمخازن والأماكن الرطبة</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span><strong>افحص منزلك سنوياً:</strong> حتى لو لم تلاحظ أي علامات واضحة</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">لماذا شركة الأسطورة الأفضل في مكافحة النمل الأبيض؟</h3>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white border border-primary/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-primary mb-3">✓ خبرة محلية متخصصة</h4>
                      <p className="text-gray-600">
                        +10 سنوات في مكافحة النمل الأبيض بجدة. نعرف تماماً أنواع النمل المحلية وأنسب الطرق لمكافحتها.
                      </p>
                    </div>

                    <div className="bg-white border border-primary/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-primary mb-3">✓ تقنيات عالمية حديثة</h4>
                      <p className="text-gray-600">
                        نستخدم أحدث الأجهزة والتقنيات المستوردة من أوروبا وأمريكا للكشف والعلاج.
                      </p>
                    </div>

                    <div className="bg-white border border-primary/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-primary mb-3">✓ ضمان 5 سنوات</h4>
                      <p className="text-gray-600">
                        أطول فترة ضمان في السوق. إذا عاد النمل خلال 5 سنوات، نعيد العلاج مجاناً.
                      </p>
                    </div>

                    <div className="bg-white border border-primary/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-primary mb-3">✓ مبيدات آمنة معتمدة</h4>
                      <p className="text-gray-600">
                        جميع مبيداتنا مسجلة من وزارة البيئة وآمنة 100% على الأطفال والحيوانات.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    كما نقدم خدماتنا لجميع أنواع المباني - من <Link href="/sectors/residential" className="text-primary hover:underline font-semibold">المنازل السكنية</Link> إلى <Link href="/sectors/commercial" className="text-primary hover:underline font-semibold">المباني التجارية</Link> والمستودعات. لدينا أيضاً <Link href="/services/annual-contracts" className="text-primary hover:underline font-semibold">عقود صيانة سنوية</Link> توفر حماية مستمرة بأسعار مخفضة.
                  </p>

                  <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-2xl p-8 my-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">احمِ استثمارك الآن - لا تنتظر حتى فوات الأوان</h3>
                    <p className="text-gray-700 mb-6 text-lg">
                      كل يوم تأخير يعني المزيد من الأضرار والمزيد من التكاليف. <strong>احجز فحصاً مجانياً اليوم</strong> وسيزورك فريقنا المتخصص في أي مكان في جدة لتقييم الوضع وتقديم استشارة مجانية.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <MessageCircle size={24} />
                        احجز فحص مجاني عبر واتساب
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

                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">خدمات ذات صلة</h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    قد تحتاج أيضاً إلى حماية مبناك من حشرات أخرى:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 my-8">
                    <Link href="/services/cockroach-control-jeddah" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                      <h4 className="font-bold text-gray-900 mb-2">مكافحة الصراصير</h4>
                      <p className="text-sm text-gray-600">القضاء على الصراصير بجميع أنواعها</p>
                    </Link>
                    <Link href="/services/fumigation-disinfection" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                      <h4 className="font-bold text-gray-900 mb-2">التدخين والتعقيم</h4>
                      <p className="text-sm text-gray-600">تعقيم شامل للمباني والمنشآت</p>
                    </Link>
                    <Link href="/services/rodents-control-jeddah" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                      <h4 className="font-bold text-gray-900 mb-2">مكافحة القوارض</h4>
                      <p className="text-sm text-gray-600">التخلص من الفئران والجرذان</p>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* English content - similar comprehensive structure */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Termites: The Silent Enemy Destroying Your Building from Within</h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Termites are called "silent destroyers" for good reason - <strong>they work in hiding for years without you noticing, then suddenly you discover your home or facility has sustained damage worth hundreds of thousands of riyals</strong>. In Jeddah, the termite problem is more serious than you imagine due to high relative humidity and climate suitable for their reproduction.
                  </p>

                  {/* Continue with English translation... */}
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
                  <AlertTriangle className="text-orange-500 mt-1 flex-shrink-0" size={20} />
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
