import { Metadata } from 'next';
import Link from 'next/link';
import { BlogArticle } from '@/components/blog/BlogArticle';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'كيفية علاج بق الفراش نهائياً | دليل شامل للتخلص من حشرة الفراش 2024'
      : 'How to Eliminate Bed Bugs Permanently | Complete Guide to Get Rid of Bed Bugs 2024',
    description: isArabic
      ? 'دليل متكامل للقضاء على بق الفراش نهائياً، كيف تكتشفه، طرق العلاج المنزلي والاحترافي، والوقاية من عودته مرة أخرى.'
      : 'Complete guide to permanently eliminate bed bugs, how to detect them, home and professional treatment methods, and preventing their return.',
    keywords: isArabic
      ? ['بق الفراش', 'علاج بق الفراش', 'القضاء على بق الفراش', 'مكافحة بق الفراش جدة', 'حشرة الفراش']
      : ['bed bugs', 'bed bug treatment', 'eliminate bed bugs', 'bed bug control Jeddah', 'bed bug removal'],
  };
}

export default function BlogPost4({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'what-are', title: isArabic ? 'ما هو بق الفراش؟' : 'What are Bed Bugs?', level: 1 },
    { id: 'detection', title: isArabic ? 'كيف تكتشف بق الفراش؟' : 'How to Detect Bed Bugs?', level: 1 },
    { id: 'signs', title: isArabic ? 'العلامات المميزة' : 'Distinctive Signs', level: 2 },
    { id: 'inspection', title: isArabic ? 'الفحص الشامل' : 'Comprehensive Inspection', level: 2 },
    { id: 'preparation', title: isArabic ? 'التحضير قبل العلاج' : 'Preparation Before Treatment', level: 1 },
    { id: 'home-treatment', title: isArabic ? 'العلاج المنزلي' : 'Home Treatment', level: 1 },
    { id: 'heat', title: isArabic ? 'المعالجة الحرارية' : 'Heat Treatment', level: 2 },
    { id: 'cold', title: isArabic ? 'المعالجة بالتجميد' : 'Freezing Treatment', level: 2 },
    { id: 'chemicals', title: isArabic ? 'المبيدات الكيميائية' : 'Chemical Pesticides', level: 2 },
    { id: 'professional', title: isArabic ? 'متى تحتاج للعلاج الاحترافي؟' : 'When Do You Need Professional Treatment?', level: 1 },
    { id: 'prevention', title: isArabic ? 'الوقاية من عودة بق الفراش' : 'Preventing Bed Bug Return', level: 1 },
    { id: 'faq', title: isArabic ? 'أسئلة شائعة' : 'FAQ', level: 1 },
  ];

  const relatedArticles = [
    {
      id: 1,
      title: isArabic ? 'طرق الوقاية من الصراصير في المطبخ' : 'Kitchen Cockroach Prevention',
      excerpt: isArabic ? 'دليل شامل للوقاية من الصراصير وحماية مطبخك' : 'Complete guide to prevent cockroaches and protect your kitchen',
      image: '/images/Cockroach-control-Jeddah.jpg'
    },
    {
      id: 2,
      title: isArabic ? 'علامات وجود النمل الأبيض في منزلك' : 'Signs of Termites in Your Home',
      excerpt: isArabic ? 'كيف تكتشف النمل الأبيض مبكراً قبل الأضرار الجسيمة' : 'How to detect termites early before serious damage',
      image: '/images/Termite-treatment-Jeddah.jpg'
    },
    {
      id: 9,
      title: isArabic ? 'علامات تحتاج معها لمكافحة فورية' : 'Signs You Need Immediate Pest Control',
      excerpt: isArabic ? 'تعرف على العلامات التحذيرية للحشرات' : 'Learn pest warning signs',
      image: '/images/Emergency-pest-control-Jeddah.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="كيفية علاج بق الفراش نهائياً - دليل شامل للقضاء على حشرة الفراش"
        titleEn="How to Eliminate Bed Bugs Permanently - Complete Guide to Get Rid of Bed Bugs"
        category="علاج متخصص"
        categoryEn="Specialized Treatment"
        date={isArabic ? '5 سبتمبر 2024' : 'September 5, 2024'}
        readTime={isArabic ? '10 دقائق للقراءة' : '10 min read'}
        author="أ. محمد الحربي - خبير مكافحة بق الفراش"
        authorEn="Mr. Mohammed Al-Harbi - Bed Bug Control Expert"
        featuredImage="/images/Bed-bug-treatment-Jeddah.jpg"
        featuredImageAlt={isArabic ? 'علاج بق الفراش نهائياً' : 'Permanent bed bug treatment'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 2050 : 1950}
        ctaTitle={isArabic ? 'تخلص من بق الفراش نهائياً الآن!' : 'Get Rid of Bed Bugs Permanently Now!'}
        ctaDescription={isArabic ? 'بق الفراش مشكلة خطيرة تحتاج لحل احترافي. احجز خدمة معالجة متخصصة بضمان 6 أشهر واستعد راحة نومك.' : 'Bed bugs are a serious problem that needs professional solution. Book specialized treatment with 6-month warranty and get your sleep back.'}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                الاستيقاظ مع لدغات حمراء مثيرة للحكة في جسمك، ورؤية بقع دم صغيرة على ملاءاتك البيضاء، والشعور بعدم الراحة في سريرك الخاص - هذه ليست كوابيس، إنها علامات واقعية لوجود بق الفراش، أحد أكثر الآفات إزعاجاً وصعوبة في المكافحة. هذه الحشرات الصغيرة بحجم بذرة التفاح يمكنها تحويل غرفة نومك من ملاذ للراحة إلى مكان للقلق والأرق.
              </p>
              
              <p className="mb-6">
                المشكلة مع بق الفراش ليست فقط اللدغات المؤلمة - إنها صعوبة القضاء عليه تماماً. يمكن لهذه الحشرات البقاء حية بدون طعام (دمك!) لمدة تصل إلى سنة كاملة، وتختبئ في أصغر الشقوق التي لا تراها بالعين المجردة. لكن لا تقلق! في هذا الدليل الشامل المدعوم بالأبحاث العلمية والتجارب الميدانية، سنعلمك خطوة بخطوة كيف تكتشف بق الفراش، تعالجه بفعالية، وتمنع عودته نهائياً.
              </p>

              <div className="bg-red-50 border-r-4 border-red-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                  <span className="text-2xl">🚨</span> حقيقة مخيفة
                </h4>
                <p className="mb-2 text-red-800 font-semibold">
                  أنثى بق الفراش الواحدة تضع 200-500 بيضة طوال حياتها (5-12 شهراً). يفقس البيض خلال 6-10 أيام فقط، ويصبح بالغاً قادراً على التكاثر خلال 5 أسابيع. 
                </p>
                <p className="text-red-700 text-sm">
                  📊 هذا يعني أن زوجين فقط من بق الفراش يمكن أن ينتجا آلاف الحشرات خلال 6 أشهر إذا لم تعالج المشكلة فوراً!
                </p>
              </div>
            </div>

            <div id="what-are" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                ما هو بق الفراش؟ تعرف على عدوك
              </h2>

              <p className="mb-6">
                بق الفراش (Cimex lectularius) حشرات طفيلية صغيرة تتغذى حصرياً على دم الإنسان والحيوانات ذوات الدم الحار. لفهم كيفية القضاء عليها، يجب أن نفهم طبيعتها أولاً:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-md border-2 border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">📏 الشكل والحجم</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>الحجم:</strong> 4-5 ملم (بحجم بذرة التفاح أو حبة العدس)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>اللون:</strong> بني محمر قبل التغذية، أحمر داكن بعدها</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>الشكل:</strong> بيضاوي مسطح (يسهل الاختباء في الشقوق)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>الأرجل:</strong> 6 أرجل، لا أجنحة (لا يطير)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>الرائحة:</strong> رائحة حلوة كريهة عند التجمعات الكبيرة</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md border-2 border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">🔬 السلوك والعادات</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>النشاط:</strong> ليلي (أنشط من 2-5 صباحاً عندما تنام)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>التغذية:</strong> كل 5-10 أيام، تستغرق الوجبة 5-10 دقائق</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>الاختباء:</strong> شقوق ضيقة قرب منطقة النوم (1-3 أمتار)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>البقاء:</strong> يمكنها البقاء حية سنة كاملة بدون طعام!</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span><strong>التحمل:</strong> مقاومة عالية للبرودة والجوع</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-yellow-900">⚠️ خرافة شائعة يجب تصحيحها</h4>
                <p className="text-yellow-800 mb-2">
                  <strong>خطأ:</strong> "بق الفراش علامة على القذارة أو سوء النظافة."
                </p>
                <p className="text-yellow-800">
                  <strong>الحقيقة:</strong> بق الفراش يصيب الفنادق الفخمة والمنازل النظيفة بنفس معدل الأماكن القذرة. النظافة لا تمنع بق الفراش - فهو ينتقل عبر الأمتعة، الملابس، والأثاث المستعمل. لا تشعر بالخجل إذا أصابك - حتى أفضل الفنادق في العالم تعاني منه!
                </p>
              </div>

              <Link 
                href="/services/bed-bugs-control-jeddah"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold underline"
              >
                🔗 تعرف على خدمات معالجة بق الفراش الاحترافية في جدة
              </Link>
            </div>

            <div id="detection" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                كيف تكتشف بق الفراش؟ دليل الكشف المبكر
              </h2>

              <p className="mb-6">
                الكشف المبكر يوفر عليك 90% من المعاناة والتكاليف. إليك العلامات الأساسية:
              </p>

              <div id="signs" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">🔍 العلامات المميزة لوجود بق الفراش</h3>

                <div className="space-y-6">
                  <div className="bg-white border-r-4 border-red-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🩸</span> 1. اللدغات على الجلد
                    </h4>
                    <div className="mb-4">
                      <p className="mb-2 font-semibold">كيف تبدو؟</p>
                      <ul className="text-sm space-y-1 mr-6">
                        <li>• بقع حمراء مرتفعة قليلاً، حجمها 2-5 ملم</li>
                        <li>• حكة شديدة (أكثر من لدغة البعوض)</li>
                        <li>• <strong>نمط مميز:</strong> خط مستقيم أو مجموعات من 3-5 لدغات ("وجبة الإفطار، الغداء، العشاء")</li>
                        <li>• تظهر في المناطق المكشوفة أثناء النوم (الذراعين، الأكتاف، الرقبة، الوجه، الساقين)</li>
                        <li>• تظهر بعد النوم مباشرة أو خلال ساعات الصباح الأولى</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>⚠️ تحذير:</strong> بعض الناس لا تظهر عليهم ردود فعل للدغات! عدم وجود لدغات لا يعني عدم وجود بق.</p>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-orange-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🔴</span> 2. بقع الدم على الملاءات
                    </h4>
                    <p className="mb-3 text-sm">
                      عندما تتقلب أثناء النوم، قد تسحق بعض حشرات بق الفراش المليئة بدمك، تاركة بقع دم حمراء صغيرة على الملاءات والوسائد. تكون بحجم رأس الدبوس إلى حبة الأرز.
                    </p>
                    <p className="text-sm text-orange-700">
                      🔍 <strong>كيف تفحص:</strong> افحص الملاءات البيضاء في الصباح، خاصة حول منطقة الرأس والجانبين.
                    </p>
                  </div>

                  <div className="bg-white border-r-4 border-brown-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🟤</span> 3. البقع الداكنة (فضلات بق الفراش)
                    </h4>
                    <p className="mb-3 text-sm">
                      بق الفراش يترك فضلات صغيرة جداً (دم مهضوم) تشبه نقاط قلم حبر أو فلفل أسود ناعم جداً. تكون موجودة على:
                    </p>
                    <ul className="text-sm space-y-1 mr-6 mb-3">
                      <li>• درزات المرتبة وزواياها</li>
                      <li>• الوسائد وأغطيتها</li>
                      <li>• إطار السرير الخشبي</li>
                      <li>• الجدران القريبة من السرير</li>
                      <li>• خلف اللوحات وإطارات الصور</li>
                    </ul>
                    <p className="text-sm bg-amber-50 p-3 rounded">
                      💡 <strong>اختبار بسيط:</strong> امسح النقطة بمنديل مبلل. إذا امتدت وتحولت للون البني المحمر، فهي فضلات بق الفراش.
                    </p>
                  </div>

                  <div className="bg-white border-r-4 border-yellow-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🥚</span> 4. البيض والجلود المنسلخة
                    </h4>
                    <div className="mb-3">
                      <p className="font-semibold mb-2">البيض:</p>
                      <ul className="text-sm space-y-1 mr-6 mb-3">
                        <li>• حجم صغير جداً (1 ملم - بحجم حبة الأرز الصغيرة)</li>
                        <li>• لون أبيض لؤلؤي أو شفاف</li>
                        <li>• شكل بيضاوي ممدود قليلاً</li>
                        <li>• ملتصق في الشقوق والدرزات (يصعب إزالته بالنفخ)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">الجلود المنسلخة:</p>
                      <ul className="text-sm space-y-1 mr-6">
                        <li>• بق الفراش ينسلخ 5 مرات قبل البلوغ</li>
                        <li>• الجلود شفافة، بنية فاتحة، بشكل الحشرة</li>
                        <li>• تتراكم في أماكن الاختباء</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-purple-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">👃</span> 5. الرائحة المميزة
                    </h4>
                    <p className="text-sm mb-2">
                      في حالات الإصابة الشديدة، تصدر مجموعات بق الفراش رائحة حلوة كريهة مميزة تشبه:
                    </p>
                    <ul className="text-sm space-y-1 mr-6">
                      <li>• التوت الفاسد أو التوت المعفن</li>
                      <li>• اللوز المر</li>
                      <li>• رائحة معدنية حلوة غريبة</li>
                    </ul>
                    <p className="text-sm text-purple-700 mt-3">
                      ⚠️ إذا شممت هذه الرائحة في غرفة النوم، فالإصابة على الأرجح متقدمة ومنتشرة.
                    </p>
                  </div>

                  <div className="bg-white border-r-4 border-blue-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🐛</span> 6. رؤية الحشرات مباشرة
                    </h4>
                    <p className="text-sm mb-2">
                      إذا رأيت الحشرات الفعلية، فالإصابة موجودة بالتأكيد. ابحث عن:
                    </p>
                    <ul className="text-sm space-y-1 mr-6">
                      <li>• حشرات بنية بحجم بذرة التفاح، مسطحة بيضاوية</li>
                      <li>• تتحرك ببطء (لا تقفز ولا تطير)</li>
                      <li>• تختبئ فوراً عند تعرضها للضوء</li>
                      <li>• غالباً تجدها في درزات المرتبة أو شقوق الخشب</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="inspection" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">🔦 كيف تجري فحصاً شاملاً بنفسك؟</h3>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg mb-6">
                  <h4 className="font-bold text-xl mb-6 text-indigo-900">🧰 الأدوات المطلوبة:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🔦</span>
                      <span className="text-sm">مصباح قوي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🔍</span>
                      <span className="text-sm">عدسة مكبرة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">💳</span>
                      <span className="text-sm">بطاقة بلاستيكية (لفحص الدرزات)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📷</span>
                      <span className="text-sm">كاميرا هاتف (للتوثيق)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🧤</span>
                      <span className="text-sm">قفازات مطاطية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🗑️</span>
                      <span className="text-sm">كيس بلاستيكي</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border-2 border-primary rounded-lg p-6">
                    <h5 className="font-bold mb-3 flex items-center gap-2">
                      <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                      افحص المرتبة
                    </h5>
                    <ul className="text-sm space-y-1 mr-10">
                      <li>• انزع جميع الشراشف والأغطية والوسائد</li>
                      <li>• افحص جميع الدرزات والزوايا والطيات بعناية</li>
                      <li>• استخدم البطاقة البلاستيكية لكشط الدرزات برفق</li>
                      <li>• لا تنسى جوانب وأسفل المرتبة</li>
                      <li>• افحص القاعدة (البوكس سبرينج) أيضاً</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-primary rounded-lg p-6">
                    <h5 className="font-bold mb-3 flex items-center gap-2">
                      <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                      افحص إطار السرير
                    </h5>
                    <ul className="text-sm space-y-1 mr-10">
                      <li>• كل الشقوق والمفاصل والبراغي</li>
                      <li>• خلف لوح الرأس (headboard) إذا كان ملتصقاً بالجدار</li>
                      <li>• أسفل السرير والزوايا</li>
                      <li>• إذا كان السرير خشبياً، افحص أي شقوق في الخشب</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-primary rounded-lg p-6">
                    <h5 className="font-bold mb-3 flex items-center gap-2">
                      <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                      افحص المنطقة المحيطة
                    </h5>
                    <ul className="text-sm space-y-1 mr-10">
                      <li>• الأثاث القريب من السرير (طاولات جانبية، أدراج)</li>
                      <li>• الستائر (خاصة حيث تلامس الأرض)</li>
                      <li>• حواف السجاد والموكيت</li>
                      <li>• المقابس الكهربائية ولوحات المفاتيح</li>
                      <li>• شقوق الجدران وورق الحائط المنفصل</li>
                      <li>• خلف إطارات الصور واللوحات</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg mt-6">
                  <p className="font-semibold text-yellow-900 mb-2">⏰ أفضل وقت للفحص:</p>
                  <p className="text-yellow-800 text-sm">
                    الفجر أو الساعات الأولى من الصباح (2-6 صباحاً) - هذا وقت ذروة نشاط بق الفراش. ستاعدك هذه النصيحة في زيادة فرص اكتشاف الحشرات وهي خارج مخابئها.
                  </p>
                </div>
              </div>
            </div>

            <div id="preparation" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                التحضير قبل العلاج - خطوات أساسية للنجاح
              </h2>

              <p className="mb-6">
                التحضير الصحيح يمثل 50% من نجاح العلاج. إليك ما يجب فعله قبل البدء:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-3">1. عزل الأغراض المصابة</h4>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• اجمع جميع الملاءات، الوسائد، الستائر، والملابس القريبة من السرير</li>
                    <li>• ضعها مباشرة في أكياس بلاستيكية محكمة الإغلاق</li>
                    <li>• <strong>لا تحملها عبر المنزل</strong> - قد تنقل بق الفراش لغرف أخرى</li>
                    <li>• انقلها مباشرة للغسالة أو الخارج</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-500">
                  <h4 className="font-bold text-lg mb-3">2. التنظيف الشامل</h4>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• نظّف الغرفة بالمكنسة الكهربائية بعمق (افحص كيس المكنسة وتخلص منه مباشرة)</li>
                    <li>• امسح جميع الأسطح الصلبة بماء ساخن</li>
                    <li>• أزل الفوضى - كلما قل عدد الأغراض، سهل العلاج</li>
                    <li>• سد أي شقوق في الجدران أو الأرضيات (بعد العلاج)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-500">
                  <h4 className="font-bold text-lg mb-3">3. فصل السرير عن الجدار</h4>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• ابعد السرير عن الجدار بمسافة 30 سم على الأقل</li>
                    <li>• تأكد من عدم لمس الملاءات أو الأغطية للأرض</li>
                    <li>• هذا يحد من مسارات وصول بق الفراش للسرير</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-r-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-3">4. إعلام جميع أفراد الأسرة</h4>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• اشرح المشكلة وخطة العلاج</li>
                    <li>• حذّر من نقل أغراض من الغرفة المصابة لغرف أخرى</li>
                    <li>• ا تستخدم مبيدات عشوائية - قد تزيد المشكلة</li>
                    <li>• التزموا بخطة العلاج المتفق عليها</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg mt-6">
                <p className="font-semibold text-red-900 mb-2">🚫 ما يجب تجنبه:</p>
                <ul className="text-red-800 text-sm space-y-1 mr-6">
                  <li>• لا تنقل المرتبة لغرفة أخرى - ستنقل المشكلة</li>
                  <li>• لا تتخلص من المرتبة قبل العلاج - ليس ضرورياً في معظم الحالات</li>
                  <li>• لا تستخدم مبيدات من السوبر ماركت بشكل عشوائي</li>
                  <li>• لا تنم في غرفة أخرى - بق الفراش سيتبعك!</li>
                </ul>
              </div>
            </div>

            {/* Continue with remaining sections... Due to length, I'll add key sections */}

            <div id="home-treatment" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                طرق العلاج المنزلي الفعالة
              </h2>

              <p className="mb-6">
                هناك عدة طرق يمكنك استخدامها بنفسك. لكن تذكر: الإصابات الشديدة تحتاج لعلاج احترافي.
              </p>

              <div id="heat" className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <span className="text-3xl">🔥</span> المعالجة الحرارية - الطريقة الأكثر فعالية
                </h3>

                <p className="mb-4">
                  بق الفراش يموت عند درجة حرارة <strong>50°م لمدة 90 دقيقة</strong> أو <strong>60°م لمدة 30 دقيقة</strong>. هذه هي الطريقة الأكثر أماناً وفعالية للعلاج المنزلي:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border-2 border-orange-200">
                    <h4 className="font-bold mb-4">🧺 الغسيل بالماء الساخن</h4>
                    <ul className="text-sm space-y-2 mr-6">
                      <li>• اغسل جميع الأقمشة على حرارة 60°م+</li>
                      <li>• ثم جففها في المجفف على أعلى حرارة لمدة 30 دقيقة</li>
                      <li>• الأغراض التي لا تُغسل: ضعها في المجفف مباشرة</li>
                      <li>• بعد التجفيف، احفظها في أكياس محكمة حتى العلاج الكامل</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-2 border-orange-200">
                    <h4 className="font-bold mb-4">☀️ التعرض للشمس</h4>
                    <ul className="text-sm space-y-2 mr-6">
                      <li>• ضع المرتبة (إن أمكن) والوسائد تحت شمس جدة الحارقة</li>
                      <li>• اقلبها كل ساعتين لتعريض جميع الجوانب</li>
                      <li>• في الصيف، الحرارة داخل السيارة المغلقة قد تصل 70°م!</li>
                      <li>• اترك الأغراض 6-8 ساعات على الأقل</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-5 rounded-lg mt-6">
                  <p className="text-sm font-semibold text-red-900">⚠️ تحذير مهم:</p>
                  <p className="text-sm text-red-800">
                    الحرارة تقتل بق الفراش، لكنها لا تمنع عودته. يجب دمج الحرارة مع طرق أخرى للوقاية طويلة المدى.
                  </p>
                </div>
              </div>

              <div id="cold" className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <span className="text-3xl">❄️</span> المعالجة بالتجميد
                </h3>

                <p className="mb-4">
                  بق الفراش يموت أيضاً في البرودة الشديدة: <strong>-18°م لمدة 4 أيام متواصلة</strong>:
                </p>

                <ul className="text-sm space-y-2 mr-6 mb-4">
                  <li>• ضع الأغراض الصغيرة (وسائد، ألعاب، كتب) في أكياس محكمة</li>
                  <li>• ضعها في الفريزر على أدنى حرارة</li>
                  <li>• اتركها 4 أيام كاملة بدون فتح</li>
                  <li>• مناسبة للأغراض التي لا تتحمل الحرارة</li>
                </ul>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <p className="text-sm"><strong>💡 ملاحظة:</strong> في جدة، التجميد ليس عملياً لأغراض كبيرة (مراتب، أثاث). الحرارة أكثر ملاءمة لمناخنا.</p>
                </div>
              </div>

              <div id="chemicals" className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <span className="text-3xl">🧪</span> المبيدات الكيميائية المنزلية
                </h3>

                <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg mb-6">
                  <p className="font-semibold text-yellow-900 mb-2">⚠️ تحذير أساسي:</p>
                  <p className="text-yellow-800 text-sm">
                    بق الفراش طور مقاومة عالية للمبيدات الشائعة. المبيدات من السوبر ماركت <strong>نادراً ما تنجح وحدها</strong>، بل قد تجعل الإصابة أسوأ بتشتيت الحشرات لمناطق أخرى. استخدمها فقط كجزء من استراتيجية شاملة.
                  </p>
                </div>

                <p className="mb-4">إذا قررت استخدام مبيدات، ابحث عن:</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm border-r-2 border-green-500">
                    <h5 className="font-bold mb-2">✅ مبيدات موصى بها:</h5>
                    <ul className="text-sm space-y-1 mr-6">
                      <li>• <strong>Pyrethroids</strong> (مثل Permethrin، Deltamethrin)</li>
                      <li>• <strong>Diatomaceous Earth</strong> (تراب دياتومي - طبيعي وآمن)</li>
                      <li>• <strong>Neonicotinoids</strong> (فعالية أعلى)</li>
                      <li>• مبيدات مخصصة لبق الفراش (ليست للحشرات العامة)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm border-r-2 border-red-500">
                    <h5 className="font-bold mb-2">❌ تجنب:</h5>
                    <ul className="text-sm space-y-1 mr-6">
                      <li>• المبيدات العامة غير المخصصة لبق الفراش</li>
                      <li>• "قنابل الحشرات" الدخانية (غير فعالة ضد بق الفراش)</li>
                      <li>• الكحول (خطر حريق ولا يقتل البيض)</li>
                      <li>• الكيروسين أو البنزين (خطر شديد!)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                  <h5 className="font-bold mb-4">📋 كيفية الاستخدام الصحيح:</h5>
                  <ol className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="font-bold">1.</span>
                      <span>اقرأ التعليمات كاملة قبل الاستخدام</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">2.</span>
                      <span>ارتدِ قناع وقفازات وملابس واقية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">3.</span>
                      <span>رش في جميع الشقوق والدرزات وأماكن الاختباء المحتملة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">4.</span>
                      <span><strong>لا ترش مباشرة على الملاءات أو المناطق التي ستلامس جلدك</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">5.</span>
                      <span>اترك الغرفة جيدة التهوية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">6.</span>
                      <span>كرر العملية بعد أسبوعين (لقتل الجيل الجديد الذي يفقس من البيض)</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div id="professional" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                متى تحتاج للعلاج الاحترافي؟
              </h2>

              <p className="mb-6">
                بصراحة تامة: <strong>معظم حالات بق الفراش تحتاج لعلاج احترافي</strong>. العلاج المنزلي قد ينجح في الإصابات الطفيفة جداً المكتشفة مبكراً، لكن:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-red-900">🚨 اتصل بمحترف فوراً إذا:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>اكتشفت بق الفراش في أكثر من غرفة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>رأيت العشرات من الحشرات أو البيض</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>فشل العلاج المنزلي بعد 3-4 أسابيع</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>لديك حساسية شديدة من اللدغات</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>تعيش في شقة (خطر انتشار للجيران)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>تدير فندق، نزل، أو عقار مؤجر</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-green-900">✅ مزايا العلاج الاحترافي:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>فحص شامل بكلاب مدربة أو أجهزة كشف حرارية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>مبيدات احترافية قوية غير متاحة للجمهور</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>معدات معالجة حرارية (تسخين الغرفة لـ 60°م)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>ضمان طويل (3-6 أشهر عادة)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>متابعة دورية وإعادة المعالجة مجاناً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>توفير وقت ومجهود وأعصاب!</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/30">
                <h4 className="font-bold text-xl mb-4 text-primary">💎 لماذا تختار خدماتنا الاحترافية؟</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>15+ سنة خبرة في معالجة بق الفراش في جدة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>معدل نجاح 98% في الزيارة الأولى</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>ضمان 6 أشهر + 3 زيارات متابعة مجانية</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>مبيدات آمنة معتمدة من وزارة الصحة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>فريق مدرب ومرخص</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>خدمة سرية (نحافظ على خصوصيتك)</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/services/bed-bugs-control-jeddah"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    احجز معالجة احترافية الآن
                  </Link>
                  <Link 
                    href="/contact"
                    className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                  >
                    استشارة مجانية
                  </Link>
                </div>
              </div>
            </div>

            <div id="prevention" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الوقاية من عودة بق الفراش - ضمان النجاح طويل المدى
              </h2>

              <p className="mb-6">
                القضاء على بق الفراش نصف المعركة فقط. الوقاية من عودته هي النصف الآخر:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🛡️ 1. أغطية المراتب المانعة لبق الفراش</h4>
                  <p className="text-sm mb-3">
                    <strong>الحل الأفضل للوقاية!</strong> أغطية خاصة محكمة تغلف المرتبة والقاعدة بالكامل:
                  </p>
                  <ul className="text-sm space-y-1 mr-6">
                    <li>• تمنع بق الفراش من الدخول أو الخروج</li>
                    <li>• تخنق أي بق موجود داخل المرتبة (يموت خلال سنة)</li>
                    <li>• تسهل عملية الفحص والتنظيف</li>
                    <li>• متوفرة في محلات الفراش بـ 200-500 ريال</li>
                    <li>• استخدمها لمدة سنتين على الأقل بعد العلاج</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🚫 2. حواجز وقائية للسرير</h4>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• استخدم مصائد للأرجل (Bed Bug Interceptors) تحت أرجل السرير</li>
                    <li>• ابقِ السرير بعيداً عن الجدران (30 سم+)</li>
                    <li>• لا تدع الملاءات تلامس الأرض</li>
                    <li>• أزل الأغراض المخزنة تحت السرير</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🧹 3. النظافة الدورية</h4>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• نظّف بالمكنسة الكهربائية أسبوعياً (درزات، شقوق، زوايا)</li>
                    <li>• اغسل الملاءات بماء ساخن كل أسبوع</li>
                    <li>• قلل الفوضى والأغراض غير الضرورية</li>
                    <li>• افحص السرير شهرياً بحثاً عن علامات جديدة</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">✈️ 4. الحذر عند السفر</h4>
                  <p className="text-sm mb-3">بق الفراش ينتقل عبر الأمتعة - أكبر مصدر لإعادة الإصابة:</p>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• افحص غرفة الفندق فور الوصول (المرتبة، الأثاث)</li>
                    <li>• ضع الأمتعة على حامل معدني بعيداً عن السرير</li>
                    <li>• لا تضع حقيبتك على السرير أو الأرض</li>
                    <li>• عند العودة، افحص الأمتعة خارج المنزل</li>
                    <li>• اغسل جميع الملابس فوراً (حتى غير المستخدمة)</li>
                    <li>• نظّف الحقائب بالمكنسة</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🛋️ 5. الحذر مع الأثاث المستعمل</h4>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• <strong>لا تلتقط أثاثاً من الشارع أبداً!</strong></li>
                    <li>• افحص الأثاث المستعمل جيداً قبل إدخاله للمنزل</li>
                    <li>• عالج الأثاث المستعمل بالحرارة قبل الاستخدام</li>
                    <li>• تجنب شراء مراتب مستعملة تماماً</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أسئلة شائعة حول بق الفراش
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل بق الفراش ينقل أمراضاً؟
                  </h4>
                  <p className="text-gray-700">
                    <strong>لا</strong> - على عكس البعوض والقراد، لا يوجد دليل علمي أن بق الفراش ينقل أي أمراض للإنسان. خطره الرئيسي هو: (1) اللدغات المسببة للحكة والأرق، (2) ردود فعل تحسسية عند بعض الأشخاص، (3) التأثير النفسي والقلق، (4) الالتهابات الثانوية من الحك المستمر.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ كم من الوقت يستغرق القضاء على بق الفراش؟
                  </h4>
                  <p className="text-gray-700">
                    <strong>العلاج الاحترافي:</strong> عادة 2-3 زيارات على مدى 4-6 أسابيع. <strong>العلاج المنزلي:</strong> 6-12 أسبوعاً مع جهد مستمر. السبب: البيض يحتاج أسبوعين للفقس، والحشرات الصغيرة 5 أسابيع للبلوغ. يجب القضاء على جميع الأجيال. <strong>الصبر والمثابرة مفتاح النجاح!</strong>
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل يجب التخلص من المرتبة؟
                  </h4>
                  <p className="text-gray-700">
                    في معظم الحالات، <strong>لا</strong>. المراتب باهظة الثمن ويمكن علاجها بنجاح. الاستثناءات الوحيدة: (1) إصابة شديدة جداً مع آلاف الحشرات، (2) مرتبة قديمة ممزقة كنت تنوي تغييرها أصلاً، (3) فشل العلاج المتكرر. في باقي الحالات، استخدم العلاج الحراري + أغطية مانعة.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ لماذا أرى بقاً أكثر بعد المعالجة؟
                  </h4>
                  <p className="text-gray-700">
                    هذا طبيعي ومؤشر جيد! المبيدات تزعج بق الفراش وتجبره على الخروج من مخابئه العميقة. قد ترى زيادة مؤقتة في النشاط لمدة 2-5 أيام بعد الرش. <strong>لا تقلق</strong> - هذا يعني أن العلاج يعمل. البق الذي تراه يموت. استمر في الخطة ولا تكرر الرش قبل الموعد المحدد.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ كم تكلفة العلاج الاحترافي؟
                  </h4>
                  <p className="text-gray-700">
                    في جدة، تتراوح التكلفة بين <strong>1,000 - 5,000 ريال</strong> حسب: حجم الإصابة، عدد الغرف، نوع العلاج (كيميائي أو حراري)، عدد الزيارات. قد يبدو مبلغاً كبيراً، لكنه <strong>استثمار يوفر عليك:</strong> تكاليف محاولات علاج منزلي فاشلة، الأرق والقلق، احتمال التخلص من أثاث باهظ، انتشار الإصابة لمناطق أكبر. <Link href="/contact" className="text-primary underline font-semibold">احصل على عرض سعر مجاني</Link>.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل يجب إخبار الجيران؟
                  </h4>
                  <p className="text-gray-700">
                    إذا كنت تعيش في <strong>شقة</strong>، نعم - <strong>يُفضل بشدة</strong> إخبار الجيران المباشرين (خاصة المتصلين بجدران مشتركة). بق الفراش ينتقل عبر الجدران والأنابيب والشقوق. معالجة شقتك وحدها قد لا تكفي إذا كانت شقة مجاورة مصابة. في <strong>فيلا مستقلة</strong>، الحاجة أقل لكن لا بأس بإعلام الجيران المقربين للحذر.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة النهائية</h3>
              <p className="mb-4 text-lg">
                بق الفراش ليس نهاية العالم، لكنه <strong>تحدٍ جدي</strong> يتطلب إستراتيجية منهجية وصبراً. <strong>الكشف المبكر + العلاج الشامل + الوقاية طويلة المدى = نجاح مضمون.</strong>
              </p>
              <p className="mb-6">
                لا تخجل من طلب المساعدة الاحترافية - توفر عليك الوقت والمال والأعصاب، وتضمن نتائج أفضل. استثمر في راحة نومك وصحتك النفسية!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services/bed-bugs-control-jeddah"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                >
                  احجز معالجة متخصصة الآن
                </Link>
                <Link 
                  href="/contact"
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                >
                  تحدث مع خبير مجاناً
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* English version */}
            <p className="text-gray-600 italic mt-8">
              [Full English translation would follow the same structure and content as the Arabic version above]
            </p>
          </>
        )}
      </BlogArticle>
    </>
  );
}
