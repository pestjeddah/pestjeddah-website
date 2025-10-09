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
      ? 'النمل الأسود: كيف تتخلص منه نهائياً؟ | دليل شامل 2024'
      : 'Black Ants: How to Get Rid of Them Permanently? | Complete Guide 2024',
    description: isArabic
      ? 'دليل متكامل للقضاء على النمل الأسود في المنزل والحديقة بشكل نهائي، طرق فعالة، أخطاء شائعة، ووصفات طبيعية مجربة.'
      : 'Complete guide to permanently eliminate black ants in home and garden, effective methods, common mistakes, and tested natural recipes.',
    keywords: isArabic
      ? ['النمل الأسود', 'مكافحة النمل', 'القضاء على النمل', 'طرد النمل من المنزل', 'جدة']
      : ['black ants', 'ant control', 'eliminate ants', 'get rid of ants', 'Jeddah'],
  };
}

export default function BlogPost8({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'types', title: isArabic ? 'أنواع النمل الأسود' : 'Types of Black Ants', level: 1 },
    { id: 'why', title: isArabic ? 'لماذا يغزو النمل منزلك؟' : 'Why Do Ants Invade Your Home?', level: 1 },
    { id: 'colony', title: isArabic ? 'فهم مستعمرة النمل' : 'Understanding Ant Colony', level: 1 },
    { id: 'home-methods', title: isArabic ? 'طرق منزلية فعالة' : 'Effective Home Methods', level: 1 },
    { id: 'natural', title: isArabic ? 'وصفات طبيعية مجربة' : 'Tested Natural Recipes', level: 2 },
    { id: 'chemical', title: isArabic ? 'الحلول الكيميائية' : 'Chemical Solutions', level: 2 },
    { id: 'prevention', title: isArabic ? 'الوقاية طويلة المدى' : 'Long-term Prevention', level: 1 },
    { id: 'garden', title: isArabic ? 'مكافحة النمل في الحديقة' : 'Garden Ant Control', level: 1 },
    { id: 'mistakes', title: isArabic ? 'أخطاء شائعة تزيد المشكلة' : 'Common Mistakes That Worsen the Problem', level: 1 },
    { id: 'professional', title: isArabic ? 'متى تحتاج لمحترفين؟' : 'When Do You Need Professionals?', level: 1 },
    { id: 'faq', title: isArabic ? 'أسئلة شائعة' : 'FAQ', level: 1 },
  ];

  const relatedArticles = [
    {
      id: 1,
      title: isArabic ? 'طرق الوقاية من الصراصير في المطبخ' : 'Kitchen Cockroach Prevention',
      excerpt: isArabic ? 'دليل شامل للوقاية من الصراصير' : 'Complete cockroach prevention guide',
      image: '/images/Cockroach-control-Jeddah.jpg'
    },
    {
      id: 7,
      title: isArabic ? 'مكافحة القوارض في المنازل' : 'Rodent Control in Homes',
      excerpt: isArabic ? 'دليل شامل لطرد الفئران والجرذان' : 'Complete guide to eliminate mice and rats',
      image: '/images/Rodent-control-Jeddah.jpg'
    },
    {
      id: 14,
      title: isArabic ? 'مكافحة الآفات الزراعية في الحدائق' : 'Agricultural Pest Control in Gardens',
      excerpt: isArabic ? 'حماية حديقتك من الآفات' : 'Protect your garden from pests',
      image: '/images/Eco-friendly-pest-control.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="النمل الأسود: كيف تتخلص منه نهائياً؟ - دليل شامل وحلول مجربة"
        titleEn="Black Ants: How to Get Rid of Them Permanently? - Complete Guide and Tested Solutions"
        category="نصائح وقائية"
        categoryEn="Prevention Tips"
        date={isArabic ? '10 أغسطس 2024' : 'August 10, 2024'}
        readTime={isArabic ? '8 دقائق للقراءة' : '8 min read'}
        author="م. سارة الزهراني - خبيرة مكافحة الحشرات"
        authorEn="Eng. Sarah Al-Zahrani - Pest Control Expert"
        featuredImage="/images/Ant-control-Jeddah.jpg"
        featuredImageAlt={isArabic ? 'مكافحة النمل الأسود في المنزل' : 'Black ant control at home'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 1850 : 1750}
        ctaTitle={isArabic ? 'تخلص من النمل نهائياً!' : 'Get Rid of Ants Permanently!'}
        ctaDescription={isArabic ? 'هل جربت كل شيء ولم تنجح؟ خبراؤنا يضمنون القضاء على مستعمرات النمل من جذورها. احجز معالجة احترافية اليوم.' : 'Tried everything and failed? Our experts guarantee complete ant colony elimination. Book professional treatment today.'}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                صف طويل من النمل الأسود يسير بانتظام عسكري من شق في الجدار، عبر أرضية مطبخك، وصولاً إلى وعاء السكر. مهما قتلت منهم، يظهر المزيد. مهما نظّفت، يعودون في اليوم التالي. هذا المشهد المحبط يتكرر يومياً في آلاف المنازل. لماذا؟ لأن معظم الناس يكافحون <strong>الأعراض (النمل الظاهر)</strong> وليس <strong>السبب (المستعمرة المخفية)</strong>.
              </p>
              
              <p className="mb-6">
                النمل الأسود من أذكى الحشرات وأكثرها تنظيماً. مستعمرة واحدة قد تحتوي على 300,000 - 500,000 نملة، معظمها مخفي تحت الأرض أو في الجدران. القضاء عليه نهائياً ليس بالرش العشوائي - إنه بفهم سلوكه، استهداف الملكة، وقطع مصادر الطعام والماء. هذا الدليل سيعلمك الطريقة الصحيحة، خطوة بخطوة.
              </p>

              <div className="bg-blue-50 border-r-4 border-blue-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center gap-2">
                  <span className="text-2xl">🐜</span> حقيقة مدهشة
                </h4>
                <p className="mb-2 text-blue-800 font-semibold">
                  النمل موجود على الأرض منذ 130 مليون سنة (منذ عصر الديناصورات)! يُقدّر عدد النمل في العالم بـ 20 كوادريليون (20,000,000,000,000,000) نملة - أي حوالي 2.5 مليون نملة لكل إنسان!
                </p>
                <p className="text-blue-700 text-sm">
                  💪 ذكاؤهم الجماعي وتنظيمهم يجعلهم أحد أنجح الكائنات على الأرض - لذا القضاء عليهم يتطلب ذكاءً مماثلاً!
                </p>
              </div>
            </div>

            <div id="types" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أنواع النمل الأسود الشائعة في جدة
              </h2>

              <p className="mb-6">
                "النمل الأسود" مصطلح عام يشمل عدة أنواع. معرفة النوع يساعد في اختيار الحل الأنسب:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-3xl">🐜</span> النمل الأسود العادي (Common Black Ant)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">المظهر</h4>
                      <ul className="text-sm space-y-1">
                        <li>• حجم: 3-5 ملم</li>
                        <li>• لون: أسود لامع أو بني داكن</li>
                        <li>• جسم أملس</li>
                        <li>• بطيء نسبياً</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">السلوك</h4>
                      <ul className="text-sm space-y-1">
                        <li>• يفضل الحلويات والسكريات</li>
                        <li>• يعشش خارجاً (حديقة، تحت الأرض)</li>
                        <li>• يدخل بحثاً عن طعام فقط</li>
                        <li>• نشاط ربيعي-صيفي</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm mt-3 text-primary"><strong>🎯 الأكثر شيوعاً في جدة</strong> - 70% من الإصابات</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-3xl">🏠</span> نمل الرصيف (Pavement Ant)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">المظهر</h4>
                      <ul className="text-sm space-y-1">
                        <li>• حجم: 2.5-3 ملم (صغير)</li>
                        <li>• لون: بني داكن إلى أسود</li>
                        <li>• خطوط فاتحة على البطن</li>
                        <li>• أرجل فاتحة نسبياً</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">السلوك</h4>
                      <ul className="text-sm space-y-1">
                        <li>• يعشش تحت الأرصفة/البلاط</li>
                        <li>• يترك أكواماً ترابية صغيرة</li>
                        <li>• يأكل كل شيء (سكريات، بروتين، دهون)</li>
                        <li>• نشاط على مدار السنة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-3xl">💧</span> نمل الرطوبة (Moisture Ant)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">المظهر</h4>
                      <ul className="text-sm space-y-1">
                        <li>• حجم: 4-5 ملم</li>
                        <li>• لون: أسود أو بني محمر</li>
                        <li>• جسم سمين قليلاً</li>
                        <li>• قرون استشعار طويلة</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">السلوك</h4>
                      <ul className="text-sm space-y-1">
                        <li>• يعشش في الأماكن الرطبة</li>
                        <li>• يُوجد قرب التسريبات</li>
                        <li>• يأكل الأخشاب المتعفنة</li>
                        <li>• مؤشر لمشكلة رطوبة!</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg mt-3 border-r-2 border-yellow-500">
                    <p className="text-sm"><strong>⚠️ تحذير:</strong> وجوده يعني تسريب مياه أو مشكلة رطوبة - عالجها أولاً!</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="why" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                لماذا يغزو النمل منزلك؟ فهم الدافع
              </h2>

              <p className="mb-6">
                النمل لا يدخل منزلك للإزعاج - له أهداف محددة. فهمها = نصف الحل:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-3">🍬</div>
                  <h4 className="font-bold text-lg mb-3">1. البحث عن الطعام</h4>
                  <p className="text-sm mb-3">
                    <strong>السبب الأول (90% من الحالات).</strong> النمل الكشّاف يبحث باستمرار عن مصادر غذاء لإطعام الملكة والمستعمرة.
                  </p>
                  <div className="bg-white p-3 rounded-lg text-sm">
                    <p className="font-semibold mb-1">ما يجذبهم:</p>
                    <ul className="text-xs space-y-1">
                      <li>• فتات الطعام على الأرض/الطاولات</li>
                      <li>• السكر، العسل، الحلويات</li>
                      <li>• بقايا الطعام في القمامة</li>
                      <li>• طعام الحيوانات الأليفة</li>
                      <li>• رحيق النباتات المنزلية</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-3">💧</div>
                  <h4 className="font-bold text-lg mb-3">2. البحث عن الماء</h4>
                  <p className="text-sm mb-3">
                    <strong>خاصة في الصيف الجاف.</strong> النمل يحتاج ماء يومياً. منزلك واحة في صحراء جافة.
                  </p>
                  <div className="bg-white p-3 rounded-lg text-sm">
                    <p className="font-semibold mb-1">أين يجدونه:</p>
                    <ul className="text-xs space-y-1">
                      <li>• أحواض المطبخ/الحمام</li>
                      <li>• تسريبات الحنفيات</li>
                      <li>• رطوبة حول الأنابيب</li>
                      <li>• أطباق مياه الحيوانات</li>
                      <li>• مياه النباتات</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-3">🏠</div>
                  <h4 className="font-bold text-lg mb-3">3. البحث عن مأوى</h4>
                  <p className="text-sm mb-3">
                    <strong>نادراً، لكنه خطير.</strong> في الطقس القاسي (حر شديد، أمطار)، قد تقرر المستعمرة الانتقال داخل منزلك.
                  </p>
                  <div className="bg-white p-3 rounded-lg text-sm">
                    <p className="font-semibold mb-1">أماكن التعشيش:</p>
                    <ul className="text-xs space-y-1">
                      <li>• داخل الجدران المجوفة</li>
                      <li>• تحت الأرضيات</li>
                      <li>• في العزل</li>
                      <li>• خلف الأجهزة الكهربائية</li>
                      <li>• في الأخشاب الرطبة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-r-4 border-amber-500 p-6 rounded-lg mt-6">
                <h4 className="font-bold mb-3 text-amber-900">🔬 كيف يجدون منزلك؟</h4>
                <p className="text-sm text-amber-800 mb-3">
                  النمل الكشّاف يخرج عشوائياً بحثاً عن طعام. عندما يجد مصدراً، <strong>يفرز مادة كيميائية (فرمون)</strong> على طريق العودة للمستعمرة. باقي النمل يتبع هذا الأثر الكيميائي - لذا ترى الصف الطويل المنتظم!
                </p>
                <p className="text-sm text-amber-800">
                  <strong>💡 مفتاح الحل:</strong> امسح المسار بخل أو صابون → يُزيل الفرمون → يتوه النمل!
                </p>
              </div>
            </div>

            <div id="colony" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                فهم مستعمرة النمل - لماذا الرش وحده لا يكفي؟
              </h2>

              <p className="mb-6">
                <strong>الخطأ الأكبر:</strong> رش النمل الظاهر فقط. ما تراه = 10% فقط من المستعمرة. الـ 90% مخفي!
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-slate-100 p-8 rounded-2xl shadow-lg">
                <h4 className="font-bold text-xl mb-6 text-center">🏰 تركيب مستعمرة النمل</h4>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">👑</div>
                    <div>
                      <h5 className="font-bold mb-2">الملكة (1 أو أكثر)</h5>
                      <p className="text-sm">تضع البيض طوال حياتها (تصل لـ 30 سنة!). <strong>هي المفتاح</strong> - اقتلها = تموت المستعمرة بالكامل. تبقى دائماً في أعماق العش، لا تخرج أبداً.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">👶</div>
                    <div>
                      <h5 className="font-bold mb-2">البيض واليرقات (آلاف)</h5>
                      <p className="text-sm">مستقبل المستعمرة. الشغالات تطعمهم وترعاهم باستمرار. يفقسون خلال 1-4 أسابيع ليصبحوا نملاً بالغاً.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">👷</div>
                    <div>
                      <h5 className="font-bold mb-2">الشغالات (معظم المستعمرة 80-90%)</h5>
                      <p className="text-sm">الإناث العاملات. تبحث عن طعام، تبني العش، تطعم الملكة واليرقات، تنظف، تدافع. <strong>هذا ما تراه</strong> في منزلك. قتلهم لا يحل المشكلة - الملكة تنتج المزيد!</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">🛡️</div>
                    <div>
                      <h5 className="font-bold mb-2">الجنود (قليلون)</h5>
                      <p className="text-sm">رؤوس كبيرة وفكوك قوية. يحرسون المستعمرة ويهاجمون الأعداء. نادراً ما تراهم خارج العش.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">🪽</div>
                    <div>
                      <h5 className="font-bold mb-2">الذكور المجنحون (موسمياً)</h5>
                      <p className="text-sm">يظهرون في موسم التزاوج فقط (ربيع/صيف). يطيرون للتزاوج مع ملكات من مستعمرات أخرى، ثم يموتون. رؤيتهم = مستعمرة ناضجة كبيرة قريبة!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg mt-6">
                <h4 className="font-bold mb-3 text-red-900">🎯 إستراتيجية النجاح</h4>
                <p className="text-sm text-red-800">
                  <strong>لا تقتل النمل الظاهر!</strong> استخدمهم كـ "ساعي بريد" لإيصال السم للملكة. استخدم <strong>طعوم بطيئة المفعول</strong> - النمل يحملها للعش، يطعمها للملكة واليرقات، الجميع يموت خلال أسابيع. هذه هي الطريقة الوحيدة للقضاء الكامل!
                </p>
              </div>
            </div>

            <div id="home-methods" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                طرق منزلية فعالة للقضاء على النمل
              </h2>

              <div id="natural" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">🌿 وصفات طبيعية مجربة</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-green-500">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🍯</span> 1. طعم البوراكس والسكر (الأكثر فعالية!)
                    </h4>
                    <div className="bg-green-50 p-4 rounded-lg mb-3">
                      <p className="font-semibold mb-2">المكونات:</p>
                      <ul className="text-sm space-y-1">
                        <li>• 1 كوب سكر أبيض</li>
                        <li>• 3 ملاعق كبيرة بوراكس (Borax - من محلات منتجات تنظيف)</li>
                        <li>• 3 أكواب ماء دافئ</li>
                      </ul>
                    </div>
                    <div className="text-sm space-y-2">
                      <p><strong>الطريقة:</strong> امزج السكر والبوراكس في الماء الدافئ حتى الذوبان. انقع كرات قطن في المحلول وضعها في أطباق صغيرة على مسارات النمل.</p>
                      <p><strong>كيف يعمل:</strong> السكر يجذب النمل، البوراكس سم بطيء يقتل بعد 24-48 ساعة. النمل يحمله للعش → يطعم الملكة → تموت.</p>
                      <p className="text-red-600 font-semibold"><strong>⚠️ تحذير:</strong> سام للأطفال والحيوانات! ضعه في أماكن غير accessible لهم.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-blue-500">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🧂</span> 2. الخل الأبيض (لمسح المسارات)
                    </h4>
                    <p className="text-sm mb-3">
                      <strong>الطريقة:</strong> امزج نصف كوب خل أبيض + نصف كوب ماء في بخاخ. رش على مسارات النمل وامسح. كرر يومياً.
                    </p>
                    <p className="text-sm"><strong>الفائدة:</strong> يُزيل أثر الفرمونات → النمل يتوه ولا يجد الطريق. لكن <strong>لا يقتل المستعمرة</strong> - استخدمه مع طرق أخرى.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-purple-500">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🧊</span> 3. بيكربونات الصوديوم + سكر بودرة
                    </h4>
                    <p className="text-sm mb-3">
                      <strong>الطريقة:</strong> امزج كميات متساوية من بيكربونات الصوديوم وسكر بودرة. انثر المسحوق على مسارات النمل وحول نقاط الدخول.
                    </p>
                    <p className="text-sm"><strong>كيف يعمل:</strong> السكر يجذب، البيكربونات تتفاعل مع حمض معدة النمل → غازات → يموت. فعالية متوسطة.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-orange-500">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🌿</span> 4. زيوت عطرية طاردة
                    </h4>
                    <p className="text-sm mb-3">
                      <strong>الطريقة:</strong> 10-15 نقطة من زيت النعناع/شجرة الشاي/القرنفل + كوب ماء في بخاخ. رش على نقاط الدخول والنوافذ.
                    </p>
                    <p className="text-sm"><strong>الفائدة:</strong> رائحة قوية تنفر النمل (لا تقتله). طارد طبيعي آمن. يحتاج تجديد كل 2-3 أيام.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-r-4 border-yellow-500">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🍋</span> 5. عصير الليمون
                    </h4>
                    <p className="text-sm mb-3">
                      <strong>الطريقة:</strong> اعصر ليمونتين، ضع العصير في بخاخ. رش على مسارات النمل ونقاط الدخول. ضع قشر الليمون عند الفتحات.
                    </p>
                    <p className="text-sm"><strong>الفائدة:</strong> الحمض يُزعج حاسة الشم عند النمل. رائحة منعشة للمنزل. فعالية خفيفة.</p>
                  </div>
                </div>
              </div>

              <div id="chemical" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">🧪 الحلول الكيميائية (للإصابات الشديدة)</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-3">محطات الطعم التجارية (Bait Stations)</h4>
                    <p className="text-sm mb-3">
                      <strong>الأنواع الموصى بها:</strong> Terro، Combat، Raid Ant Baits (متوفرة في محلات الأدوات المنزلية)
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2 text-sm">كيفية الاستخدام:</p>
                      <ul className="text-sm space-y-1">
                        <li>1. ضع المحطات على مسارات النمل (ليس مناطق عشوائية)</li>
                        <li>2. لا تقتل النمل الذي يدخل المحطة - دعه يحمل الطعم!</li>
                        <li>3. قد تزيد الأعداد مؤقتاً (3-5 أيام) - طبيعي!</li>
                        <li>4. ستلاحظ انخفاضاً واضحاً بعد أسبوع</li>
                        <li>5. اترك المحطات 2-3 أسابيع حتى اختفاء كامل</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-3">هلام الطعم (Gel Baits)</h4>
                    <p className="text-sm mb-3">
                      طعم جيلي يُوضع بالحقنة في الشقوق والزوايا. فعال جداً للنمل داخل الجدران.
                    </p>
                    <p className="text-sm"><strong>ملاحظة:</strong> احترافي أكثر، يحتاج دقة في التطبيق. متوفر للبيع لكن استخدام محترف موصى به.</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="font-bold text-lg mb-3">بخاخات المبيدات المباشرة</h4>
                    <p className="text-sm mb-3 text-red-700 font-semibold">
                      ⚠️ <strong>استخدمها كآخر حل!</strong> تقتل النمل الظاهر فقط، لا تصل للملكة. قد تُشتت المستعمرة وتزيد المشكلة.
                    </p>
                    <p className="text-sm"><strong>متى تُستخدم:</strong> فقط لقتل نمل دخل غرفة طفل/طعام وتريد إزالته فوراً. ثم استخدم طعماً للعلاج الجذري.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="prevention" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الوقاية طويلة المدى - منع عودة النمل
              </h2>

              <p className="mb-6">
                <strong>القاعدة الذهبية:</strong> "منزل نظيف بلا طعام مكشوف = منزل خالٍ من النمل"
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🧹 النظافة الصارمة</h4>
                  <ul className="text-sm space-y-2">
                    <li>• امسح أسطح المطبخ بعد كل وجبة (حتى الفتات الصغير!)</li>
                    <li>• اغسل الصحون فوراً، لا تتركها في الحوض</li>
                    <li>• امسح الأرضيات يومياً (خاصة تحت الطاولة)</li>
                    <li>• خزّن الطعام في حاويات محكمة (زجاج/بلاستيك قوي)</li>
                    <li>• أفرغ القمامة يومياً، استخدم سلة بغطاء</li>
                    <li>• نظّف خلف الأجهزة (ثلاجة، فرن) شهرياً</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🔒 إغلاق نقاط الدخول</h4>
                  <ul className="text-sm space-y-2">
                    <li>• افحص النوافذ والأبواب - سد أي فجوات</li>
                    <li>• استخدم السيليكون لسد الشقوق في الجدران</li>
                    <li>• أصلح شبكات النوافذ الممزقة</li>
                    <li>• سد الفجوات حول الأنابيب والكابلات</li>
                    <li>• ضع عتبات محكمة تحت الأبواب الخارجية</li>
                    <li>• قلّم الأشجار الملامسة للمنزل</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">💧 إزالة مصادر المياه</h4>
                  <ul className="text-sm space-y-2">
                    <li>• أصلح التسريبات فوراً (حنفيات، أنابيب)</li>
                    <li>• جفف الأحواض وأسطح الحمام ليلاً</li>
                    <li>• لا تترك مياهاً راكدة (أطباق نباتات، دلاء)</li>
                    <li>• تأكد من تصريف مياه التكييف جيداً</li>
                    <li>• افحص الرطوبة تحت الأحواض دورياً</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🛡️ الحواجز الوقائية</h4>
                  <ul className="text-sm space-y-2">
                    <li>• رش خط من بودرة القرفة/بودرة تلك حول المنزل خارجياً</li>
                    <li>• ضع أوراق غار في الخزائن</li>
                    <li>• رش زيت النعناع على النوافذ شهرياً</li>
                    <li>• ضع طباشير في نقاط الدخول (النمل يكره الكالسيوم)</li>
                    <li>• حافظ على 30 سم مسافة نظيفة حول المنزل</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="garden" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                مكافحة النمل في الحديقة
              </h2>

              <p className="mb-6">
                النمل في الحديقة ليس دائماً مشكلة - بل قد يكون مفيداً (يقتل آفات أخرى). لكن إذا كانت أعداده كبيرة أو يدخل المنزل:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-3">1. تحديد موقع العش</h4>
                  <p className="text-sm mb-3">ابحث عن أكوام ترابية صغيرة، مناطق تجمع كثيف للنمل، أو تتبع النمل لمصدره.</p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>💡 حيلة الكشف:</strong> ضع قطعة بسكويت محلاة في مكان مشتبه. انتظر 30 دقيقة وتتبع النمل للعش.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-3">2. معالجة العش مباشرة</h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>ماء مغلي:</strong> 3-4 لترات مباشرة على العش (الأبسط والأرخص)</li>
                    <li>• <strong>خل + صابون:</strong> 4 لتر خل + 1 كوب صابون سائل. صب على العش يومياً لأسبوع</li>
                    <li>• <strong>ديازينون (Diazinon):</strong> مبيد متخصص لأعشاش النمل (محلات زراعية)</li>
                    <li>• <strong>البوراكس:</strong> انثر مسحوق بوراكس حول العش ومداخله</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-3">3. الوقاية في الحديقة</h4>
                  <ul className="text-sm space-y-2">
                    <li>• قلّم الأعشاب الطويلة والشجيرات الكثيفة</li>
                    <li>• أزل أكوام الأوراق الجافة والأخشاب</li>
                    <li>• لا تُفرط في الري - الرطوبة الزائدة تجذب النمل</li>
                    <li>• ازرع نباتات طاردة: نعناع، لافندر، حبق (ريحان)</li>
                    <li>• تجنب المبيدات الكيميائية القوية - تقتل حشرات نافعة</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="mistakes" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أخطاء شائعة تزيد المشكلة سوءاً
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-bold mb-2">❌ 1. الرش الفوري على النمل</h4>
                  <p className="text-sm">قتل النمل الظاهر يقطع "خط الإمداد" لكن لا يقتل المستعمرة. الملكة تنتج المزيد. <strong>الصحيح:</strong> دعهم يحملون الطعم للعش!</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-bold mb-2">❌ 2. استخدام طرق متعددة معاً</h4>
                  <p className="text-sm">رش خل + وضع طعم بوراكس + رش مبيد = الروائح تتداخل، النمل يتجنب المنطقة بالكامل. <strong>الصحيح:</strong> اختر طريقة واحدة والتزم بها 2-3 أسابيع.</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-bold mb-2">❌ 3. التوقف المبكر</h4>
                  <p className="text-sm">"اختفى النمل بعد 3 أيام، إذن انتهت المشكلة!" - خطأ! قد يكونون غيروا مسارهم أو يتجهزون لهجوم أكبر. <strong>الصحيح:</strong> استمر 3-4 أسابيع لضمان موت الملكة.</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-bold mb-2">❌ 4. إهمال النظافة أثناء المعالجة</h4>
                  <p className="text-sm">"سأنظف بعد القضاء على النمل" - لا! الطعام المكشوف يجذب المزيد أثناء المعالجة. <strong>الصحيح:</strong> نظافة صارمة + معالجة معاً.</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-bold mb-2">❌ 5. وضع الطعم في أماكن خاطئة</h4>
                  <p className="text-sm">وضع الطعم عشوائياً بدلاً من المسارات = النمل لا يجده. <strong>الصحيح:</strong> راقب مسار النمل لـ 10 دقائق، ضع الطعم على مساره الفعلي.</p>
                </div>
              </div>
            </div>

            <div id="professional" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                متى تحتاج لخدمة احترافية؟
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-bold text-lg mb-4">🚨 اتصل بمحترف إذا:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• المحاولات المنزلية فشلت لشهرين+</li>
                    <li>• الإصابة تزداد رغم المعالجة</li>
                    <li>• ترى نملاً مجنحاً (= مستعمرة ضخمة ناضجة)</li>
                    <li>• تشك أن العش داخل الجدران/الأرضيات</li>
                    <li>• إصابة متعددة المستعمرات (عدة أنواع نمل)</li>
                    <li>• مبنى تجاري/مطعم (معايير صحية صارمة)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                  <h4 className="font-bold text-lg mb-4">✅ مزايا الخدمة الاحترافية</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• تحديد نوع النمل بدقة (علاج مخصص)</li>
                    <li>• تحديد موقع الأعشاش (خبرة + معدات)</li>
                    <li>• طعوم ومبيدات محترفة قوية</li>
                    <li>• معالجة داخل الجدران (حقن جل)</li>
                    <li>• إغلاق احترافي لنقاط الدخول</li>
                    <li>• ضمان 3-6 أشهر + زيارات متابعة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/30 mt-8">
                <h4 className="font-bold text-xl mb-4 text-primary">💎 برنامجنا المتخصص لمكافحة النمل</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>فحص شامل وتحديد نوع النمل</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>تحديد مواقع الأعشاش بمعدات حديثة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>طعوم احترافية مستوردة</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>معالجة محيط المنزل وقائياً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>ضمان 6 أشهر + زيارة متابعة مجانية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>مواد آمنة للأطفال والحيوانات</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/services"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    احجز خدمة مكافحة النمل
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
                أسئلة شائعة حول مكافحة النمل
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ كم يستغرق القضاء على النمل تماماً؟</h4>
                  <p className="text-sm text-gray-700">
                    مع الطعوم: 2-4 أسابيع للقضاء على المستعمرة كاملاً. قد ترى زيادة مؤقتة في الأيام 3-7 (النمل ينقل الطعم)، ثم انخفاض تدريجي. <strong>الصبر مفتاح النجاح!</strong> لا تستسلم أو تغير الطريقة قبل 3 أسابيع.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ لماذا النمل يتجاهل الطعم الذي وضعته؟</h4>
                  <p className="text-sm text-gray-700">
                    أسباب محتملة: (1) <strong>الطعم قديم</strong> - جففه أو عفن (غيره)، (2) <strong>منافسة غذائية</strong> - لديهم مصدر طعام أفضل في المنزل (نظف!)، (3) <strong>نوع الطعم خاطئ</strong> - النمل قد يفضل بروتين على سكر موسمياً (جرب نوعين)، (4) <strong>رائحة أيدي</strong> - لمست الطعم بدون قفازات (استخدم قفازات).
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل النمل مفيد أم ضار؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>في الحديقة:</strong> مفيد! يقتل آفات أخرى، يُلقح بعض النباتات، يحسن التربة. <strong>في المنزل:</strong> ضار ومزعج. يلوث الطعام، ينقل بكتيريا، بعض الأنواع تقرض الخشب (نمل النجار). <strong>الخلاصة:</strong> اتركه في الحديقة (ما لم يزعج)، اطرده من المنزل.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل يمكن للنمل أن "ينتقم" إذا قتلت بعضه؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>لا، هذه خرافة!</strong> النمل لا يملك عواطف انتقامية. لكن، عند سحق نملة، تطلق "فرمون إنذار" يُشير للآخرين بوجود خطر. قد يتجنبون المنطقة مؤقتاً أو يأتون للتحقيق (لا للانتقام). <strong>الحل:</strong> لا تسحقهم - استخدم طعماً ليحملوه للعش.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة</h3>
              <p className="mb-4 text-lg">
                النمل الأسود مزعج لكنه قابل للهزيمة. <strong>المفتاح: استهدف الملكة، ليس الشغالات. نظافة + صبر + طعوم = نجاح مضمون.</strong>
              </p>
              <p className="mb-6">
                لا تيأس إذا لم تنجح من المرة الأولى - حتى المحترفون يحتاجون لعدة محاولات أحياناً!
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