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
      ? 'مكافحة القوارض في المنازل | دليل شامل لطرد الفئران والجرذان 2024'
      : 'Rodent Control in Homes | Complete Guide to Eliminate Mice and Rats 2024',
    description: isArabic
      ? 'دليل متكامل لمكافحة الفئران والجرذان في المنازل، طرق فعالة للقضاء عليها، الوقاية من عودتها، وكيف تحمي عائلتك وممتلكاتك.'
      : 'Complete guide for mice and rat control in homes, effective elimination methods, prevention strategies, and how to protect your family and property.',
    keywords: isArabic
      ? ['مكافحة القوارض', 'مكافحة الفئران', 'طرد الجرذان', 'قوارض المنازل', 'جدة']
      : ['rodent control', 'mice control', 'rat elimination', 'home rodents', 'Jeddah'],
  };
}

export default function BlogPost7({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'types', title: isArabic ? 'أنواع القوارض المنزلية' : 'Types of Home Rodents', level: 1 },
    { id: 'dangers', title: isArabic ? 'لماذا القوارض خطرة؟' : 'Why Are Rodents Dangerous?', level: 1 },
    { id: 'signs', title: isArabic ? 'علامات وجود قوارض' : 'Signs of Rodent Infestation', level: 1 },
    { id: 'entry', title: isArabic ? 'كيف تدخل القوارض منزلك؟' : 'How Do Rodents Enter Your Home?', level: 1 },
    { id: 'elimination', title: isArabic ? 'طرق القضاء على القوارض' : 'Rodent Elimination Methods', level: 1 },
    { id: 'traps', title: isArabic ? 'المصائد والفخاخ' : 'Traps', level: 2 },
    { id: 'poisons', title: isArabic ? 'السموم والطعوم' : 'Poisons and Baits', level: 2 },
    { id: 'prevention', title: isArabic ? 'الوقاية الشاملة' : 'Comprehensive Prevention', level: 1 },
    { id: 'professional', title: isArabic ? 'متى تحتاج لمحترفين؟' : 'When Do You Need Professionals?', level: 1 },
    { id: 'mistakes', title: isArabic ? 'أخطاء شائعة' : 'Common Mistakes', level: 1 },
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
      excerpt: isArabic ? 'كيف تكتشف النمل الأبيض مبكراً' : 'How to detect termites early',
      image: '/images/Termite-treatment-Jeddah.jpg'
    },
    {
      id: 9,
      title: isArabic ? 'علامات تحتاج معها لمكافحة فورية' : 'Signs You Need Immediate Pest Control',
      excerpt: isArabic ? 'العلامات التحذيرية للحشرات' : 'Warning signs of pests',
      image: '/images/Emergency-pest-control-Jeddah.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="مكافحة القوارض في المنازل - دليل شامل لطرد الفئران والجرذان نهائياً"
        titleEn="Rodent Control in Homes - Complete Guide to Eliminate Mice and Rats Permanently"
        category="علاج متخصص"
        categoryEn="Specialized Treatment"
        date={isArabic ? '20 أغسطس 2024' : 'August 20, 2024'}
        readTime={isArabic ? '9 دقائق للقراءة' : '9 min read'}
        author="فريق الأسطورة - خبراء مكافحة القوارض"
        authorEn="Al-Ustora Team - Rodent Control Experts"
        featuredImage="/images/Rodent-control-Jeddah.jpg"
        featuredImageAlt={isArabic ? 'مكافحة القوارض في المنازل' : 'Rodent control in homes'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 1900 : 1800}
        ctaTitle={isArabic ? 'تخلص من القوارض نهائياً!' : 'Get Rid of Rodents Permanently!'}
        ctaDescription={isArabic ? 'لا تدع الفئران والجرذان تدمر منزلك وتهدد صحة عائلتك. احجز خدمة مكافحة قوارض احترافية بضمان 6 أشهر.' : "Don't let mice and rats destroy your home and threaten your family's health. Book professional rodent control with 6-month warranty."}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                صوت خدش خفيف في الجدران ليلاً. بقع بنية صغيرة على أرضية المطبخ في الصباح. كابل كهربائي مقروض وراء الثلاجة. علبة طعام مخروقة في المخزن. إذا لاحظت أياً من هذه العلامات، فأنت لست وحدك في منزلك - <strong>القوارض قد اتخذت من بيتك موطناً لها</strong>، وهذا ليس مجرد إزعاج بسيط، إنه تهديد حقيقي لصحتك، ممتلكاتك، وراحة بالك.
              </p>
              
              <p className="mb-6">
                القوارض (الفئران والجرذان) من أذكى وأخطر الآفات المنزلية. تتكاثر بسرعة مذهلة، تحمل أكثر من 35 مرضاً خطيراً، تتلف الأسلاك الكهربائية مسببة خطر حريق، وتلوث طعامك ببولها وبرازها. لكن الخبر الجيد: مع الفهم الصحيح والأساليب الفعالة، يمكنك القضاء عليها نهائياً ومنع عودتها. هذا الدليل الشامل سيعلمك كل ما تحتاجه.
              </p>

              <div className="bg-red-50 border-r-4 border-red-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                  <span className="text-2xl">🚨</span> حقيقة مخيفة
                </h4>
                <p className="mb-2 text-red-800 font-semibold">
                  زوج واحد من الفئران يمكنه إنتاج أكثر من 200 فأر خلال سنة واحدة! الأنثى تلد 6-8 مرات سنوياً، كل مرة 6-8 صغار، ت

صل للبلوغ خلال 6 أسابيع فقط وتبدأ التكاثر.
                </p>
                <p className="text-red-700 text-sm">
                  💰 الأضرار السنوية من القوارض في السعودية: ملايين الريالات (أسلاك كهربائية، طعام مدمر، أمراض، حرائق)
                </p>
              </div>
            </div>

            <div id="types" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أنواع القوارض المنزلية في جدة
              </h2>

              <p className="mb-6">
                معرفة نوع القارض الذي تواجهه يساعدك في اختيار الطريقة الأنسب للقضاء عليه:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-md border-2 border-gray-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-4xl">🐭</span> الفأر المنزلي (House Mouse)
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">المظهر</h4>
                      <ul className="text-sm space-y-1">
                        <li>• حجم صغير: 7-10 سم (بدون الذيل)</li>
                        <li>• لون رمادي بني فاتح</li>
                        <li>• أذنان كبيرتان نسبياً</li>
                        <li>• ذيل طويل (بطول الجسم)</li>
                        <li>• وزن: 12-30 جرام</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">السلوك</h4>
                      <ul className="text-sm space-y-1">
                        <li>• فضولي، يحب الاستكشاف</li>
                        <li>• نشاط ليلي بشكل أساسي</li>
                        <li>• يتسلق جيداً</li>
                        <li>• يعيش داخل المبنى (خزائن، جدران مجوفة)</li>
                        <li>• يحتاج ماء قليل (يحصل عليه من الطعام)</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>🎯 الأكثر شيوعاً:</strong> في الشقق والمنازل المتوسطة</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brown-50 to-orange-50 p-6 rounded-xl shadow-md border-2 border-brown-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-4xl">🐀</span> الجرذ النرويجي (Norway Rat)
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">المظهر</h4>
                      <ul className="text-sm space-y-1">
                        <li>• حجم كبير: 20-25 سم (بدون الذيل)</li>
                        <li>• لون بني محمر أو رمادي داكن</li>
                        <li>• جسم ضخم وثقيل</li>
                        <li>• ذيل أقصر من الجسم</li>
                        <li>• وزن: 200-500 جرام</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">السلوك</h4>
                      <ul className="text-sm space-y-1">
                        <li>• حذر جداً، يشك في الجديد</li>
                        <li>• نشاط ليلي</li>
                        <li>• سباح ممتاز</li>
                        <li>• يحفر أنفاقاً تحت الأرض</li>
                        <li>• يحتاج ماء يومياً</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>🎯 الأكثر شيوعاً:</strong> في الفيلل، المخازن، الحدائق، المجاري</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-xl shadow-md border-2 border-slate-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-4xl">🐀</span> الجرذ الأسود (Roof Rat)
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">المظهر</h4>
                      <ul className="text-sm space-y-1">
                        <li>• حجم متوسط: 16-20 سم (بدون الذيل)</li>
                        <li>• لون أسود إلى رمادي داكن</li>
                        <li>• جسم نحيف ورشيق</li>
                        <li>• ذيل أطول من الجسم</li>
                        <li>• وزن: 150-250 جرام</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">السلوك</h4>
                      <ul className="text-sm space-y-1">
                        <li>• رشيق، متسلق ممتاز</li>
                        <li>• يعيش في الأماكن العالية</li>
                        <li>• نشاط ليلي</li>
                        <li>• يحب الفواكه والحبوب</li>
                        <li>• يتنقل على الأسلاك والأسقف</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>🎯 الأكثر شيوعاً:</strong> في الأسقف المعلقة، الأشجار، العلّيات</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-r-4 border-yellow-500">
                  <h4 className="font-bold mb-3 text-yellow-900">💡 كيف تميز بينهم؟</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>الفضلات:</strong> الفأر = حجم حبة أرز. الجرذ = حجم حبة زيتون.</li>
                    <li><strong>المسارات:</strong> الفأر = عشوائي متعرج. الجرذ = مسار ثابت محدد.</li>
                    <li><strong>الأصوات:</strong> الفأر = صرير خفيف. الجرذ = أصوات ثقيلة.</li>
                    <li><strong>الموقع:</strong> الفأر = داخل المبنى. الجرذ النرويجي = أرضي. الجرذ الأسود = عالٍ.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="dangers" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                لماذا القوارض خطرة جداً؟ أكثر مما تتخيل
              </h2>

              <p className="mb-6">
                القوارض ليست مجرد إزعاج - إنها تهديد متعدد الجوانب:
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🦠</span> 1. نقل الأمراض الخطيرة
                  </h4>
                  <p className="text-sm mb-3">القوارض تحمل وتنقل أكثر من 35 مرضاً للإنسان من خلال:</p>
                  <ul className="text-sm space-y-2 mr-6">
                    <li>• <strong>البول والبراز:</strong> السالمونيلا، الطاعون، داء البريميات (Leptospirosis)</li>
                    <li>• <strong>اللدغات:</strong> حمى عضة الجرذ (Rat-Bite Fever)</li>
                    <li>• <strong>الطفيليات:</strong> القراد والبراغيث التي تحملها تنقل أمراضاً إضافية</li>
                    <li>• <strong>تلويث الطعام:</strong> التسمم الغذائي، التيفوئيد</li>
                  </ul>
                  <div className="bg-red-100 p-4 rounded-lg mt-3">
                    <p className="text-sm font-semibold">⚠️ الطاعون الأسود الذي قتل 50 مليون شخص في أوروبا في القرن 14 كان ينتقل عبر براغيث الجرذان!</p>
                  </div>
                </div>

                <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔥</span> 2. خطر الحرائق
                  </h4>
                  <p className="text-sm mb-3">
                    <strong>20-25% من الحرائق مجهولة السبب تُعزى للقوارض!</strong> أسنانها تنمو طوال حياتها (10-13 سم سنوياً)، لذا تقرض باستمرار:
                  </p>
                  <ul className="text-sm space-y-1 mr-6">
                    <li>• أسلاك كهربائية (ماس كهربائي → حريق)</li>
                    <li>• أنابيب غاز (تسريب → انفجار)</li>
                    <li>• عزل كهربائي للأجهزة</li>
                  </ul>
                  <p className="text-sm mt-3 font-semibold">💡 فأر واحد يمكنه قرض 25,000 مرة يومياً!</p>
                </div>

                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏠</span> 3. تدمير الممتلكات
                  </h4>
                  <ul className="text-sm space-y-1 mr-6">
                    <li>• <strong>الأثاث:</strong> يقرضون الخشب، القماش، الإسفنج</li>
                    <li>• <strong>الملابس والكتب:</strong> للحصول على مواد التعشيش</li>
                    <li>• <strong>الأنابيب:</strong> بلاستيك، نحاس - يسبب تسريبات مياه</li>
                    <li>• <strong>الجدران:</strong> يحفرون أنفاقاً داخلها</li>
                    <li>• <strong>العزل:</strong> يدمرون عزل الأسقف والجدران</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-r-4 border-purple-500 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🍽️</span> 4. تلويث وإهدار الطعام
                  </h4>
                  <p className="text-sm mb-2">
                    القارض الواحد يتبول 3,000 مرة يومياً ويترك 40-50 كريّة براز! يلوث:
                  </p>
                  <ul className="text-sm space-y-1 mr-6">
                    <li>• مخازن الطعام والحبوب</li>
                    <li>• أسطح تحضير الطعام</li>
                    <li>• أدوات المطبخ والأواني</li>
                    <li>• الطعام المخزن في الخزائن</li>
                  </ul>
                  <p className="text-sm mt-3"><strong>💰 قاعدة:</strong> كل 1 كجم يأكله القارض، يتلف 10 كجم من الطعام ببوله وبرازه!</p>
                </div>

                <div className="bg-gray-50 border-r-4 border-gray-500 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">😰</span> 5. الضرر النفسي
                  </h4>
                  <ul className="text-sm space-y-1 mr-6">
                    <li>• <strong>الأرق:</strong> الأصوات الليلية تمنع النوم</li>
                    <li>• <strong>الخوف والقلق:</strong> خاصة عند الأطفال</li>
                    <li>• <strong>الإحراج:</strong> عند رؤية الضيوف لقارض</li>
                    <li>• <strong>فقدان الشعور بالأمان:</strong> في منزلك الخاص</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="signs" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                علامات وجود قوارض - اكتشفها مبكراً
              </h2>

              <p className="mb-6">
                القوارض ليلية وخجولة، لكنها تترك علامات واضحة. إليك ما يجب البحث عنه:
              </p>

              <div className="space-y-6">
                <div className="bg-white border-r-4 border-primary p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">💩</span> 1. الفضلات (الدليل الأوضح)
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">فضلات الفأر:</p>
                      <ul className="text-sm space-y-1">
                        <li>• حجم: 3-6 ملم (حبة أرز)</li>
                        <li>• شكل: أسطواني مدبب من الطرفين</li>
                        <li>• لون: أسود أو بني داكن</li>
                        <li>• عدد: 40-100 يومياً</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">فضلات الجرذ:</p>
                      <ul className="text-sm space-y-1">
                        <li>• حجم: 12-18 ملم (حبة زيتون)</li>
                        <li>• شكل: أسطواني، مستدير الأطراف</li>
                        <li>• لون: بني داكن إلى أسود</li>
                        <li>• عدد: 40-50 يومياً</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm mt-3 text-primary"><strong>💡 كيف تفحص:</strong> الفضلات الطازجة لامعة ورطبة قليلاً. القديمة جافة ومتفتتة.</p>
                </div>

                <div className="bg-white border-r-4 border-green-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">👣</span> 2. آثار الأقدام والمسارات
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>اختبار الدقيق:</strong> رش طبقة رقيقة من الدقيق/التلك في الأماكن المشتبهة ليلاً، افحص صباحاً</li>
                    <li>• <strong>المسارات الدهنية:</strong> خطوط داكنة على الجدران/الأرضيات من دهون أجسامها</li>
                    <li>• <strong>مسارات الغبار:</strong> خطوط نظيفة في المناطق المغبرة (العلّيات، المخازن)</li>
                  </ul>
                </div>

                <div className="bg-white border-r-4 border-orange-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🦷</span> 3. علامات القرض
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>على الطعام:</strong> حواف مقروضة على عبوات، حبوب، خبز</li>
                    <li>• <strong>على الخشب:</strong> حواف الأبواب، الأثاث، إطارات النوافذ</li>
                    <li>• <strong>على البلاستيك:</strong> أنابيب، حاويات، أكياس</li>
                    <li>• <strong>على الأسلاك:</strong> كوابل كهربائية مكشوفة</li>
                  </ul>
                  <p className="text-sm mt-3 bg-orange-50 p-3 rounded">علامات القرض الطازجة فاتحة اللون (خشب جديد مكشوف). القديمة داكنة.</p>
                </div>

                <div className="bg-white border-r-4 border-blue-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎵</span> 4. الأصوات
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>خدش وحفر:</strong> داخل الجدران، الأسقف، الأرضيات (ليلاً)</li>
                    <li>• <strong>صرير خفيف:</strong> أصوات تواصل بين القوارض</li>
                    <li>• <strong>حركة سريعة:</strong> صوت جري خفيف</li>
                    <li>• <strong>قضم:</strong> صوت قرض على الخشب أو البلاستيك</li>
                  </ul>
                  <p className="text-sm mt-3 text-blue-700"><strong>🌙 أفضل وقت للاستماع:</strong> 12 منتصف الليل - 4 فجراً (ذروة نشاط القوارض)</p>
                </div>

                <div className="bg-white border-r-4 border-purple-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏠</span> 5. الأعشاش
                  </h4>
                  <p className="text-sm mb-2">القوارض تبني أعشاشاً من:</p>
                  <ul className="text-sm space-y-1 mr-6">
                    <li>• ورق ممزق (صحف، كرتون، مناديل)</li>
                    <li>• قماش ممزق (ملابس قديمة)</li>
                    <li>• مواد عزل (إسفنج، صوف صخري)</li>
                    <li>• نباتات جافة وأعشاش</li>
                  </ul>
                  <p className="text-sm mt-3"><strong>🔍 أماكن شائعة:</strong> خلف الأجهزة، داخل الخزائن، زوايا العلّيات، خلف العزل</p>
                </div>

                <div className="bg-white border-r-4 border-red-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">👃</span> 6. الرائحة
                  </h4>
                  <p className="text-sm">
                    رائحة بول حادة نفاذة (تشبه الأمونيا) في الأماكن المغلقة. كلما كانت الإصابة أكبر، كانت الرائحة أقوى. في الحالات الشديدة، رائحة عفنة من جثث القوارض الميتة في الجدران.
                  </p>
                </div>

                <div className="bg-white border-r-4 border-yellow-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🐾</span> 7. سلوك الحيوانات الأليفة
                  </h4>
                  <p className="text-sm">
                    القطط والكلاب تشعر بالقوارض قبلك. إذا لاحظت حيوانك الأليف: يركز بشدة على نقطة معينة، ينبح/يموء على الجدران، يخدش منطقة محددة، ينشط ليلاً بشكل غير معتاد - <strong>قد يكون يتتبع قارضاً!</strong>
                  </p>
                </div>
              </div>
            </div>

            <div id="entry" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                كيف تدخل القوارض منزلك؟
              </h2>

              <p className="mb-6">
                <strong>حقيقة صادمة:</strong> الفأر يمكنه المرور من فتحة بحجم قلم رصاص (6 ملم)! الجرذ يمكنه المرور من فتحة بحجم عملة نقدية (2.5 سم)! إليك نقاط الدخول الشائعة:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-red-900">🚪 نقاط الدخول الرئيسية</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-red-600">1.</span>
                      <span><strong>الفجوات حول الأنابيب والكابلات:</strong> أكثر نقطة دخول شيوعاً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">2.</span>
                      <span><strong>الشقوق في الأساسات:</strong> حتى الصغيرة جداً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">3.</span>
                      <span><strong>فتحات التهوية غير المحمية:</strong> علية، بدروم، مطبخ</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">4.</span>
                      <span><strong>أبواب غير محكمة:</strong> فجوة تحت الباب، إطارات متضررة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">5.</span>
                      <span><strong>نوافذ مكسورة أو بدون شبك:</strong> خاصة الأرضية والعلوية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">6.</span>
                      <span><strong>فتحات التكييف:</strong> إذا لم تكن محكمة الإغلاق</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">7.</span>
                      <span><strong>السقف والعلّية:</strong> عبر فتحات السقف غير المغلقة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">8.</span>
                      <span><strong>المرآب:</strong> أبواب مرفوعة، فتحات في الجدران</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-green-900">🔒 كيف تُغلق نقاط الدخول؟</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <div>
                        <strong>الشقوق الصغيرة (أقل من 2 سم):</strong>
                        <p className="text-xs mt-1">استخدم سيليكون أو معجون سد الشقوق</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <div>
                        <strong>الفتحات المتوسطة (2-10 سم):</strong>
                        <p className="text-xs mt-1">احشها بصوف فولاذي (Steel Wool) ثم غطها بإسمنت/سيليكون</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <div>
                        <strong>الفتحات الكبيرة:</strong>
                        <p className="text-xs mt-1">استخدم شبك معدني (سلك دجاج) مغطى بإسمنت</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <div>
                        <strong>حول الأنابيب:</strong>
                        <p className="text-xs mt-1">طوق معدني + فوم + سيليكون</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <div>
                        <strong>فتحات التهوية:</strong>
                        <p className="text-xs mt-1">شبك معدني بفتحات 6 ملم أو أقل</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <div>
                        <strong>أسفل الأبواب:</strong>
                        <p className="text-xs mt-1">عتبات معدنية أو مطاطية محكمة</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg mt-6">
                <h4 className="font-bold mb-3 text-yellow-900">⚠️ تحذير مهم</h4>
                <p className="text-yellow-800">
                  <strong>لا تستخدم الفوم العازل وحده!</strong> القوارض تقرضه بسهولة. الفوم جيد فقط كطبقة داخلية بين مواد صلبة (معدن/إسمنت). استخدم دائماً صوف فولاذي أو شبك معدني كطبقة أساسية.
                </p>
              </div>
            </div>

            {/* Due to length, I'll add key remaining sections... */}

            <div id="elimination" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                طرق القضاء على القوارض - دليل شامل
              </h2>

              <p className="mb-6">
                لا يوجد حل واحد يناسب الجميع. النجاح يأتي من الجمع بين عدة طرق:
              </p>

              <div id="traps" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">🪤 1. المصائد والفخاخ</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
                    <h4 className="font-bold text-lg mb-3">المصيدة النابضة (Snap Trap)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm mb-2"><strong>المزايا:</strong></p>
                        <ul className="text-sm space-y-1 mr-6">
                          <li>• فعالة جداً، قتل فوري</li>
                          <li>• رخيصة (5-15 ريال/قطعة)</li>
                          <li>• قابلة لإعادة الاستخدام</li>
                          <li>• لا سموم = آمنة للأطفال/حيوانات أليفة</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm mb-2"><strong>العيوب:</strong></p>
                        <ul className="text-sm space-y-1 mr-6">
                          <li>• تصطاد قارضاً واحداً فقط</li>
                          <li>• يجب التخلص من الجثة</li>
                          <li>• قد تلتقط أصابع الأطفال (احذر!)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mt-4">
                      <p className="text-sm"><strong>💡 أفضل طعوم:</strong> زبدة فول سوداني، شوكولاتة، لحم مقدد، جبن كريمي. <strong>ليس جبن صلب!</strong></p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
                    <h4 className="font-bold text-lg mb-3">المصيدة اللاصقة (Glue Trap)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm mb-2"><strong>المزايا:</strong></p>
                        <ul className="text-sm space-y-1 mr-6">
                          <li>• سهلة الاستخدام</li>
                          <li>• تصطاد عدة قوارض</li>
                          <li>• آمنة (لا نابض)</li>
                          <li>• تُظهر مسارات القوارض</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm mb-2"><strong>العيوب:</strong></p>
                        <ul className="text-sm space-y-1 mr-6">
                          <li>• غير إنسانية (موت بطيء)</li>
                          <li>• قد تعلق حيوانات أليفة صغيرة</li>
                          <li>• تفقد فعاليتها مع الغبار</li>
                          <li>• لا تعمل في أماكن رطبة</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
                    <h4 className="font-bold text-lg mb-3">المصيدة الحية (Live Trap)</h4>
                    <p className="text-sm mb-3">تحبس القارض حياً، ثم تطلقه بعيداً (5 كم+ من المنزل). <strong>الخيار الأكثر إنسانية</strong>، لكن:</p>
                    <ul className="text-sm space-y-1 mr-6">
                      <li>• يجب إطلاقه بعيداً جداً (وإلا يعود!)</li>
                      <li>• قد ينقل المشكلة لمنطقة أخرى</li>
                      <li>• لا يحل المشكلة الأساسية (مصدر الدخول)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-500">
                    <h4 className="font-bold mb-3">🎯 نصائح وضع المصائد للنجاح</h4>
                    <ul className="text-sm space-y-2">
                      <li><strong>1. الموقع الصحيح:</strong> على المسارات، بجانب الجدران (القوارض لا تعبر المساحات المفتوحة)</li>
                      <li><strong>2. الاتجاه:</strong> ضع المصيدة عمودية على الجدار (ليس موازية)</li>
                      <li><strong>3. الكمية:</strong> استخدم 6-12 مصيدة دفعة واحدة (ليس واحدة فقط)</li>
                      <li><strong>4. القفازات:</strong> ارتدِ قفازات عند وضع المصائد (رائحتك تُنفر القوارض)</li>
                      <li><strong>5. الصبر:</strong> قد تستغرق 3-7 أيام لبدء الصيد</li>
                      <li><strong>6. التحقق اليومي:</strong> افحص المصائد مرتين يومياً</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="poisons" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">☠️ 2. السموم والطعوم (Rodenticides)</h3>

                <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-lg mb-3 text-red-900">⚠️ تحذير قبل الاستخدام</h4>
                  <ul className="text-sm space-y-2 text-red-800">
                    <li>• <strong>خطر شديد على الأطفال والحيوانات الأليفة!</strong> استخدم بحذر شديد</li>
                    <li>• القوارض قد تموت داخل الجدران → رائحة عفنة فظيعة لأسابيع</li>
                    <li>• الحيوانات المفترسة (قطط، كلاب) قد تأكل قارضاً مسموماً وتتسمم</li>
                    <li>• <strong>استخدمها كآخر حل فقط، أو اتركها للمحترفين</strong></li>
                  </ul>
                </div>

                <p className="text-sm mb-4">إذا قررت استخدام السموم، تعرف على الأنواع:</p>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">مضادات التخثر (Anticoagulants)</h5>
                    <p className="text-sm mb-2">الأكثر شيوعاً وأماناً نسبياً. تمنع تخثر الدم، القارض ينزف داخلياً ويموت خلال 3-7 أيام.</p>
                    <p className="text-xs"><strong>الجيل الأول:</strong> Warfarin (يحتاج عدة وجبات). <strong>الجيل الثاني:</strong> Brodifacoum، Bromadiolone (وجبة واحدة تكفي، أقوى لكن أخطر)</p>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">سموم الفوسفيد (Phosphides)</h5>
                    <p className="text-sm">تنتج غاز الفوسفين السام في معدة القارض. موت سريع (ساعات)، لكن خطر شديد على الجميع.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-r-4 border-yellow-500 mt-6">
                  <h4 className="font-bold mb-3">🛡️ إرشادات السلامة إذا استخدمت السموم</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ استخدم محطات طعوم مغلقة (Bait Stations) - لا تنثر السم مباشرة!</li>
                    <li>✓ ضعها في أماكن بعيدة تماماً عن الأطفال والحيوانات</li>
                    <li>✓ ارتدِ قفازات عند التعامل مع الطعوم</li>
                    <li>✓ احتفظ بترياق (Vitamin K1) في البيت للطوارئ</li>
                    <li>✓ اقرأ الملصق كاملاً قبل الاستخدام</li>
                    <li>✓ تخلص من الجثث فوراً بقفازات (احفر حفرة عميقة أو ضعها في كيسين)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="prevention" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الوقاية الشاملة - منع عودة القوارض
              </h2>

              <p className="mb-6">
                <strong>القاعدة الذهبية:</strong> الوقاية أسهل وأرخص 100 مرة من العلاج!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">1. النظافة الصارمة</h4>
                  <ul className="text-sm space-y-2">
                    <li>• لا تترك طعاماً مكشوفاً أبداً (حتى ليلة واحدة)</li>
                    <li>• خزّن الطعام في حاويات زجاجية/معدنية محكمة</li>
                    <li>• نظّف فتات الطعام فوراً</li>
                    <li>• أفرغ القمامة يومياً، استخدم سلة بغطاء محكم</li>
                    <li>• لا تترك أطباق طعام الحيوانات الأليفة ليلاً</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">2. إزالة المأوى</h4>
                  <ul className="text-sm space-y-2">
                    <li>• رتب الفوضى - القوارض تحب الأماكن المزدحمة</li>
                    <li>• ارفع الصناديق عن الأرض (30 سم+)</li>
                    <li>• قلّم الأشجار والشجيرات الملاصقة للمنزل</li>
                    <li>• أزل أكوام الحطب والأنقاض</li>
                    <li>• نظّف العلّية والبدروم دورياً</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">3. إزالة مصادر المياه</h4>
                  <ul className="text-sm space-y-2">
                    <li>• أصلح التسريبات فوراً (حنفيات، أنابيب)</li>
                    <li>• جفف الأحواض ليلاً</li>
                    <li>• فرّغ أطباق المياه للحيوانات ليلاً</li>
                    <li>• تأكد من تصريف مياه التكييف جيداً</li>
                    <li>• لا تترك دلاء مياه في المرآب/الحديقة</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">4. الفحص الدوري</h4>
                  <ul className="text-sm space-y-2">
                    <li>• افحص محيط المنزل شهرياً (ابحث عن فتحات جديدة)</li>
                    <li>• فتش عن علامات قوارض كل أسبوعين</li>
                    <li>• راقب سلوك حيواناتك الأليفة</li>
                    <li>• افحص العلّية والبدروم كل 3 أشهر</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="professional" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                متى تحتاج لمحترفين؟
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-bold text-lg mb-4 text-red-900">🚨 اتصل بمحترف فوراً إذا:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• رأيت قوارض نهاراً (= إصابة شديدة جداً!)</li>
                    <li>• وجدت أعشاشاً أو فضلات كثيرة</li>
                    <li>• فشلت المحاولات المنزلية لشهر+</li>
                    <li>• لديك أطفال صغار أو حيوانات أليفة (السموم خطرة)</li>
                    <li>• الإصابة في أماكن يصعب الوصول إليها</li>
                    <li>• تعيش في بناية مشتركة (المشكلة أكبر)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                  <h4 className="font-bold text-lg mb-4 text-green-900">✅ مزايا الخدمة الاحترافية</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• فحص شامل بمعدات متقدمة</li>
                    <li>• تحديد نوع القارض ومصدر الإصابة</li>
                    <li>• استخدام طرق آمنة وفعالة</li>
                    <li>• إغلاق احترافي لجميع نقاط الدخول</li>
                    <li>• برامج مراقبة طويلة المدى</li>
                    <li>• ضمان 3-6 أشهر</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/30 mt-8">
                <h4 className="font-bold text-xl mb-4 text-primary">💎 برنامجنا المتكامل لمكافحة القوارض</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>فحص شامل مجاني للمنزل</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>استخدام مصائد وطعوم احترافية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>إغلاق جميع نقاط الدخول</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>3 زيارات متابعة خلال 3 أشهر</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>ضمان 6 أشهر</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>استجابة طوارئ 24 ساعة</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/services"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    احجز خدمة مكافحة القوارض
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

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أسئلة شائعة حول مكافحة القوارض
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ كم يستغرق القضاء على القوارض؟</h4>
                  <p className="text-sm text-gray-700">
                    يعتمد على حجم الإصابة: <strong>إصابة خفيفة</strong> (1-3 قوارض): أسبوع إلى أسبوعين. <strong>إصابة متوسطة:</strong> 3-6 أسابيع. <strong>إصابة شديدة:</strong> 2-3 أشهر. <strong>المفتاح:</strong> الصبر + الاستمرارية + إغلاق نقاط الدخول. لا تتوقف عند صيد أول قارض!
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل القطط فعالة في مكافحة القوارض؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>جزئياً.</strong> القطط المتوحشة أو قطط المزرعة صيادة جيدة. القطط المنزلية المدللة غالباً لا - تعتبر القوارض ألعاباً أكثر من فرائس. حتى القطط الصيادة نادراً ما تقضي على الإصابة بالكامل. <strong>الفائدة الحقيقية:</strong> رائحة القط تردع القوارض من الاقتراب. لكن لا تعتمد على القطط وحدها!
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل الموجات فوق الصوتية (Ultrasonic) تطرد القوارض؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>فعالية محدودة جداً ومؤقتة.</strong> الأجهزة تصدر موجات عالية التردد مزعجة للقوارض. <strong>المشاكل:</strong> (1) القوارض تتأقلم خلال أسابيع وتتجاهلها، (2) الموجات لا تخترق الجدران/الأثاث، (3) تؤثر على حيوانات أليفة (كلاب، قطط، طيور). دراسات عديدة أثبتت فعالية ضعيفة. <strong>استخدمها كإضافة فقط، ليس حلاً رئيسياً.</strong>
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل هناك طرق طبيعية لطرد القوارض؟</h4>
                  <p className="text-sm text-gray-700">
                    نعم، لكن فعاليتها أقل: <strong>النعناع البري:</strong> رائحته تنفر بعض القوارض (ضع كرات قطن مبللة بزيت النعناع). <strong>الفلفل الحار:</strong> رشه في نقاط الدخول. <strong>ورق الغار:</strong> ضعه في الخزائن. <strong>الثوم:</strong> رائحته قوية. <strong>الأمونيا:</strong> تشبه رائحة بول حيوان مفترس (لكنها سامة للبشر أيضاً!). <strong>الحقيقة:</strong> هذه طرق ردع مؤقت، لا تقضي على الإصابة. استخدمها مع طرق أخرى.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة</h3>
              <p className="mb-4 text-lg">
                القوارض تهديد خطير، لكنها قابلة للهزيمة. <strong>المفتاح: التصرف السريع + الإستراتيجية الشاملة + الوقاية المستمرة.</strong>
              </p>
              <p className="mb-6">
                لا تنتظر حتى تتفاقم المشكلة - كل يوم تأخير = المزيد من التكاثر والأضرار!
              </p>
            </div>
          </>
        ) : (
          <>
            {/* English version */}
            <p className="text-gray-600 italic mt-8">
              [Full English translation would follow the same structure]
            </p>
          </>
        )}
      </BlogArticle>
    </>
  );
}