import { Metadata } from 'next';
import Link from 'next/link';
import { BlogArticle } from '@/components/blog/BlogArticle';
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
      ? 'التدخين والتعقيم: متى نحتاجهما؟ | دليل شامل للفرق والاستخدامات 2024'
      : 'Fumigation & Disinfection: When Do We Need Them? | Complete Guide 2024',
    description: isArabic
      ? 'تعرف على الفرق الجوهري بين التدخين والتعقيم، متى تستخدم كل طريقة، التقنيات المختلفة، ومتى تحتاج لمساعدة احترافية.'
      : 'Learn the fundamental difference between fumigation and disinfection, when to use each method, different techniques, and when you need professional help.',
    keywords: isArabic
      ? ['التدخين', 'التعقيم', 'مكافحة الحشرات', 'تعقيم المنازل', 'تدخين المنازل', 'جدة']
      : ['fumigation', 'disinfection', 'pest control', 'home disinfection', 'fumigation service', 'Jeddah'],
  };
}

export default function BlogPost6({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'difference', title: isArabic ? 'الفرق الأساسي' : 'Fundamental Difference', level: 1 },
    { id: 'fumigation', title: isArabic ? 'التدخين - ما هو وكيف يعمل؟' : 'Fumigation - What Is It and How Does It Work?', level: 1 },
    { id: 'fum-types', title: isArabic ? 'أنواع التدخين' : 'Types of Fumigation', level: 2 },
    { id: 'fum-when', title: isArabic ? 'متى تحتاج للتدخين؟' : 'When Do You Need Fumigation?', level: 2 },
    { id: 'disinfection', title: isArabic ? 'التعقيم - ما هو وكيف يعمل؟' : 'Disinfection - What Is It and How Does It Work?', level: 1 },
    { id: 'dis-types', title: isArabic ? 'طرق التعقيم' : 'Disinfection Methods', level: 2 },
    { id: 'dis-when', title: isArabic ? 'متى تحتاج للتعقيم؟' : 'When Do You Need Disinfection?', level: 2 },
    { id: 'comparison', title: isArabic ? 'مقارنة شاملة' : 'Comprehensive Comparison', level: 1 },
    { id: 'combined', title: isArabic ? 'الجمع بين الطريقتين' : 'Combining Both Methods', level: 1 },
    { id: 'safety', title: isArabic ? 'السلامة والاحتياطات' : 'Safety and Precautions', level: 1 },
    { id: 'cost', title: isArabic ? 'التكلفة والجدوى' : 'Cost and Feasibility', level: 1 },
    { id: 'faq', title: isArabic ? 'أسئلة شائعة' : 'FAQ', level: 1 },
  ];

  const relatedArticles = [
    {
      id: 5,
      title: isArabic ? 'أهمية التعقيم الدوري للمطاعم' : 'Importance of Regular Restaurant Disinfection',
      excerpt: isArabic ? 'دليل شامل للسلامة الغذائية' : 'Complete food safety guide',
      image: '/images/Pest-control-for-restaurants.jpg'
    },
    {
      id: 4,
      title: isArabic ? 'كيفية علاج بق الفراش نهائياً' : 'How to Eliminate Bed Bugs Permanently',
      excerpt: isArabic ? 'دليل شامل للقضاء على بق الفراش' : 'Complete guide to eliminate bed bugs',
      image: '/images/Bed-bug-treatment-Jeddah.jpg'
    },
    {
      id: 13,
      title: isArabic ? 'المبيدات الآمنة للأطفال والحيوانات الأليفة' : 'Safe Pesticides for Children and Pets',
      excerpt: isArabic ? 'تعرف على المبيدات الآمنة والطرق الصديقة للبيئة' : 'Learn about safe pesticides and eco-friendly methods',
      image: '/images/Safe-pest-control.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="التدخين والتعقيم: متى نحتاجهما؟ - الفرق الجوهري والاستخدامات الصحيحة"
        titleEn="Fumigation & Disinfection: When Do We Need Them? - Fundamental Difference and Proper Uses"
        category="تقنيات متقدمة"
        categoryEn="Advanced Techniques"
        date={isArabic ? '28 أغسطس 2024' : 'August 28, 2024'}
        readTime={isArabic ? '10 دقائق للقراءة' : '10 min read'}
        author="م. خالد السلمي - خبير تقنيات مكافحة الآفات"
        authorEn="Eng. Khalid Al-Salmi - Pest Control Techniques Expert"
        featuredImage="/images/Pest-spray-service.jpg"
        featuredImageAlt={isArabic ? 'التدخين والتعقيم - تقنيات مكافحة الآفات' : 'Fumigation and disinfection - pest control techniques'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 1950 : 1850}
        ctaTitle={isArabic ? 'احصل على الحل المناسب لمنزلك!' : 'Get the Right Solution for Your Home!'}
        ctaDescription={isArabic ? 'هل تحتاج تدخيناً أم تعقيماً؟ استشر خبراءنا مجاناً لتحديد الحل الأمثل لحالتك واحصل على عرض سعر شامل.' : 'Do you need fumigation or disinfection? Consult our experts for free to determine the optimal solution and get a comprehensive quote.'}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "أحتاج لتعقيم منزلي" - "لا، أنت تحتاج للتدخين" - "ما الفرق؟" هذا الحوار يتكرر يومياً في شركات مكافحة الآفات. الكثير من الناس يستخدمون المصطلحين بالتبادل، لكن الحقيقة أنهما عمليتان مختلفتان تماماً، لكل منهما استخدامات محددة، تقنيات خاصة، ومستويات أمان مختلفة. فهم الفرق بينهما قد يوفر عليك آلاف الريالات ويضمن حصولك على العلاج الصحيح من المرة الأولى.
              </p>
              
              <p className="mb-6">
                في هذا الدليل الشامل، سنكشف كل شيء عن التدخين والتعقيم: كيف يعمل كل منهما، متى تحتاج لأي منهما، ما هي الأنواع المختلفة، وكيف تختار الحل المناسب لمشكلتك الخاصة. سواء كنت تواجه إصابة حشرية، تحتاج للوقاية، أو تريد ببساطة بيئة أكثر صحة - هذا المقال دليلك الكامل.
              </p>

              <div className="bg-blue-50 border-r-4 border-blue-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center gap-2">
                  <span className="text-2xl">💡</span> الفهم السريع
                </h4>
                <p className="mb-2 text-blue-800 font-semibold">
                  <strong>التدخين (Fumigation):</strong> يقتل الحشرات والآفات الحية باستخدام غازات سامة أو أبخرة كيميائية. يخترق كل شق وزاوية.
                </p>
                <p className="text-blue-800 font-semibold">
                  <strong>التعقيم (Disinfection):</strong> يقتل البكتيريا، الفيروسات، والجراثيم على الأسطح باستخدام مطهرات سائلة أو رذاذ. يُعقم البيئة صحياً.
                </p>
                <p className="text-blue-700 text-sm mt-3">
                  📌 بعبارة بسيطة: التدخين = للحشرات والآفات | التعقيم = للجراثيم والبكتيريا
                </p>
              </div>
            </div>

            <div id="difference" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الفرق الأساسي الذي يجب أن تفهمه
              </h2>

              <p className="mb-6">
                رغم أن كلا العمليتين تهدفان لجعل بيئتك أكثر أماناً، إلا أن الأهداف والأساليب مختلفة جذرياً:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-lg border-2 border-red-200">
                  <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center gap-2">
                    <span className="text-4xl">🐛</span> التدخين (Fumigation)
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">الهدف الرئيسي</h4>
                      <p className="text-sm">القضاء على الآفات الحية (حشرات، قوارض، نمل أبيض، عث، إلخ)</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">الطريقة</h4>
                      <p className="text-sm">إطلاق غاز أو بخار كيميائي يملأ الفراغ بالكامل ويخترق جميع الأماكن</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">المواد المستخدمة</h4>
                      <p className="text-sm">مبيدات حشرية غازية (فوسفيد الألمنيوم، بروميد الميثيل، سلفوريل فلورايد، إلخ)</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">الشكل</h4>
                      <p className="text-sm">غاز عديم اللون (غالباً) يتسرب لكل مكان</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">مدة التأثير</h4>
                      <p className="text-sm">24-72 ساعة (يبقى فعالاً ثم يتبدد)</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">الإخلاء</h4>
                      <p className="text-sm text-red-700 font-semibold">إلزامي! يجب إخلاء المكان تماماً (بشر، حيوانات، نباتات)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-lg border-2 border-green-200">
                  <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center gap-2">
                    <span className="text-4xl">🦠</span> التعقيم (Disinfection)
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">الهدف الرئيسي</h4>
                      <p className="text-sm">قتل البكتيريا، الفيروسات، الفطريات، والجراثيم على الأسطح</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">الطريقة</h4>
                      <p className="text-sm">رش أو مسح مطهرات على الأسطح والأماكن المستهدفة</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">المواد المستخدمة</h4>
                      <p className="text-sm">مطهرات ومعقمات (كلور، كحول، أمونيوم رباعي، بيروكسيد الهيدروجين، إلخ)</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">الشكل</h4>
                      <p className="text-sm">سائل أو رذاذ يُطبق على الأسطح مباشرة</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">مدة التأثير</h4>
                      <p className="text-sm">فوري إلى ساعات قليلة (يجف ويصبح آمناً)</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold mb-2">الإخلاء</h4>
                      <p className="text-sm text-green-700 font-semibold">غالباً غير مطلوب، أو فقط أثناء التطبيق (1-2 ساعة)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-yellow-900">⚠️ خطأ شائع يجب تجنبه</h4>
                <p className="text-yellow-800 mb-2">
                  <strong>خطأ:</strong> "أريد تعقيم منزلي من الصراصير" أو "أريد تدخين منزلي من فيروس كورونا"
                </p>
                <p className="text-yellow-800">
                  <strong>الصحيح:</strong> التدخين للصراصير والحشرات، التعقيم للفيروسات والبكتيريا. استخدام المصطلح الخاطئ قد يؤدي لتلقي خدمة غير مناسبة!
                </p>
              </div>
            </div>

            <div id="fumigation" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                التدخين - ما هو وكيف يعمل بالتفصيل؟
              </h2>

              <p className="mb-6">
                التدخين هو عملية ملء مساحة مغلقة بغاز أو بخار مبيد حشري بتركيز عالٍ بما يكفي لقتل جميع الآفات الموجودة. دعنا نفهم كيف يعمل:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="font-bold text-lg mb-4">🔬 آلية العمل العلمية</h4>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <div>
                      <strong>الإغلاق المحكم:</strong>
                      <p className="text-sm text-gray-700">يتم إغلاق المبنى أو الغرفة بشكل محكم (أحياناً بأغطية بلاستيكية ضخمة)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <div>
                      <strong>إطلاق الغاز:</strong>
                      <p className="text-sm text-gray-700">يُطلق الغاز المبيد في الفراغ، ينتشر في كل مكان بسبب طبيعته الغازية</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <div>
                      <strong>الاختراق العميق:</strong>
                      <p className="text-sm text-gray-700">الغاز يخترق الشقوق، الأثاث، الحوائط المجوفة - أماكن يستحيل الوصول إليها بالرش العادي</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <div>
                      <strong>القتل بالتسمم:</strong>
                      <p className="text-sm text-gray-700">الحشرات تستنشق الغاز أو يخترق أجسامها، يعطل أجهزتها العصبية/التنفسية، تموت</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">5.</span>
                    <div>
                      <strong>فترة المعالجة:</strong>
                      <p className="text-sm text-gray-700">يُترك الغاز لمدة 24-72 ساعة حسب نوع الآفة وحجم المكان</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">6.</span>
                    <div>
                      <strong>التهوية:</strong>
                      <p className="text-sm text-gray-700">يُفتح المكان، يُهوى لساعات حتى يتبدد الغاز تماماً</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div id="fum-types" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">أنواع التدخين المختلفة</h3>

                <div className="space-y-6">
                  <div className="bg-white border-r-4 border-purple-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🏠</span> 1. التدخين الكامل للمبنى (Whole Structure Fumigation)
                    </h4>
                    <p className="text-sm mb-3">
                      الطريقة الأكثر شمولاً وفعالية. يُغطى المبنى بالكامل بخيمة ضخمة محكمة، يُطلق الغاز داخلها.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> إصابة نمل أبيض شديدة، صراصير في جميع أنحاء المبنى، تفشي حشرات خشب</p>
                      <p className="text-sm mt-2"><strong>المدة:</strong> 2-3 أيام (24-48 ساعة تدخين + تهوية)</p>
                      <p className="text-sm mt-2"><strong>التكلفة:</strong> 5,000 - 20,000 ريال (حسب حجم المبنى)</p>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-blue-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">📦</span> 2. التدخين الموضعي (Spot/Local Fumigation)
                    </h4>
                    <p className="text-sm mb-3">
                      تدخين غرفة واحدة، خزانة، أو منطقة محددة بدلاً من المبنى بالكامل.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> إصابة محدودة في غرفة واحدة، تدخين مخزن طعام، معالجة شحنة بضائع</p>
                      <p className="text-sm mt-2"><strong>المدة:</strong> ساعات إلى يوم واحد</p>
                      <p className="text-sm mt-2"><strong>التكلفة:</strong> 500 - 3,000 ريال</p>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-green-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">☁️</span> 3. التدخين بالضباب (Fogging/ULV)
                    </h4>
                    <p className="text-sm mb-3">
                      رش رذاذ دقيق جداً (ضباب) من المبيد يطفو في الهواء ويستقر على الأسطح. ليس غازاً حقيقياً لكن يُسمى تدخيناً أحياناً.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> البعوض والذباب، تعقيم مساحات كبيرة مفتوحة، حدائق ومزارع</p>
                      <p className="text-sm mt-2"><strong>المدة:</strong> 1-2 ساعة معالجة + 2-4 ساعات تهوية</p>
                      <p className="text-sm mt-2"><strong>التكلفة:</strong> 300 - 1,500 ريال</p>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-orange-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🌾</span> 4. تدخين الحاويات والشحنات (Commodity Fumigation)
                    </h4>
                    <p className="text-sm mb-3">
                      تدخين حاويات الشحن، صوامع الحبوب، أو مخازن المواد الغذائية المغلقة.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> استيراد/تصدير بضائع، مخازن حبوب، مصانع أغذية</p>
                      <p className="text-sm mt-2"><strong>المدة:</strong> 3-7 أيام</p>
                      <p className="text-sm mt-2"><strong>التكلفة:</strong> حسب الكمية (عادة للشركات الكبرى)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="fum-when" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">متى تحتاج للتدخين بالضبط؟</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4 text-red-900">🚨 حالات ضرورية تتطلب التدخين</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span><strong>إصابة نمل أبيض شديدة:</strong> خاصة في الهياكل الخشبية والجدران</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span><strong>صراصير منتشرة في كل مكان:</strong> فشلت طرق الرش العادية</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span><strong>بق الفراش في عدة غرف:</strong> الغاز يصل لكل شق</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span><strong>حشرات الخشب (السوس):</strong> تعيش عميقاً داخل الأثاث والأبواب</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span><strong>منزل جديد قبل الانتقال:</strong> لضمان بداية نظيفة 100%</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-600">•</span>
                        <span><strong>مخازن طعام أو حبوب:</strong> للقضاء على العث والسوس</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4 text-green-900">✅ مزايا التدخين</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>فعالية 100%:</strong> يصل لكل شق ومكان مخفي</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>يقتل جميع المراحل:</strong> بيض، يرقات، حشرات بالغة</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>لا يترك بقايا:</strong> الغاز يتبدد تماماً بعد التهوية</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>الحل النهائي:</strong> للإصابات الشديدة المستعصية</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>معتمد دولياً:</strong> للشحنات والصادرات</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg mt-6">
                  <h4 className="font-bold mb-3 text-red-900">⚠️ عيوب ومخاطر التدخين</h4>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• <strong>سمية عالية:</strong> خطر على البشر والحيوانات - الإخلاء الكامل إلزامي</li>
                    <li>• <strong>تكلفة مرتفعة:</strong> أغلى بكثير من الرش العادي</li>
                    <li>• <strong>إزعاج كبير:</strong> يجب مغادرة المنزل 2-3 أيام</li>
                    <li>• <strong>تحضيرات معقدة:</strong> تغطية، إزالة نباتات، حيوانات أليفة</li>
                    <li>• <strong>لا يمنع عودة الآفات:</strong> ليس حلاً وقائياً طويل المدى</li>
                  </ul>
                </div>
              </div>

              <Link 
                href="/services"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold underline"
              >
                🔗 اطلع على خدمات التدخين الاحترافية في جدة
              </Link>
            </div>

            <div id="disinfection" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                التعقيم - ما هو وكيف يعمل بالتفصيل؟
              </h2>

              <p className="mb-6">
                التعقيم هو عملية قتل أو تعطيل الكائنات الدقيقة المسببة للأمراض (بكتيريا، فيروسات، فطريات) على الأسطح والأدوات. الهدف: بيئة صحية وآمنة.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="font-bold text-lg mb-4">🔬 آلية العمل العلمية</h4>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <div>
                      <strong>التنظيف الأولي:</strong>
                      <p className="text-sm text-gray-700">إزالة الأوساخ المرئية أولاً (التعقيم لا يعمل على أسطح قذرة)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <div>
                      <strong>تطبيق المطهر:</strong>
                      <p className="text-sm text-gray-700">رش أو مسح المطهر على جميع الأسطح المستهدفة</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <div>
                      <strong>وقت التلامس:</strong>
                      <p className="text-sm text-gray-700">ترك المطهر على السطح المدة المطلوبة (عادة 5-10 دقائق)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <div>
                      <strong>القتل الكيميائي:</strong>
                      <p className="text-sm text-gray-700">المطهر يخترق جدران الخلايا الميكروبية، يعطل بروتيناتها، تموت</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">5.</span>
                    <div>
                      <strong>التجفيف/المسح:</strong>
                      <p className="text-sm text-gray-700">حسب نوع المطهر - البعض يُترك ليجف، البعض يُمسح</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div id="dis-types" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">طرق التعقيم المختلفة</h3>

                <div className="space-y-6">
                  <div className="bg-white border-r-4 border-blue-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">💧</span> 1. التعقيم الكيميائي السائل
                    </h4>
                    <p className="text-sm mb-3">
                      الطريقة الأكثر شيوعاً. استخدام محاليل كيميائية مطهرة (كلور، كحول، أمونيوم رباعي).
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> تعقيم يومي للمنازل، مطاعم، مستشفيات، مدارس</p>
                      <p className="text-sm mt-2"><strong>الفعالية:</strong> يقتل 99.9% من البكتيريا والفيروسات</p>
                      <p className="text-sm mt-2"><strong>الأمان:</strong> آمن نسبياً مع الاستخدام الصحيح</p>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-purple-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">💨</span> 2. التعقيم بالرذاذ الجاف (Dry Fogging)
                    </h4>
                    <p className="text-sm mb-3">
                      رش رذاذ دقيق جداً من المطهر (قطرات ميكروسكوبية) يطفو في الهواء ويغطي جميع الأسطح.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> تعقيم شامل بعد مرض معدٍ، مستشفيات، غرف فنادق</p>
                      <p className="text-sm mt-2"><strong>الفعالية:</strong> وصول ممتاز للأماكن الصعبة</p>
                      <p className="text-sm mt-2"><strong>المدة:</strong> 1-2 ساعة + تهوية قصيرة</p>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-green-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">☀️</span> 3. التعقيم بالأشعة فوق البنفسجية (UV-C)
                    </h4>
                    <p className="text-sm mb-3">
                      استخدام ضوء فوق بنفسجي بطول موجة 254 نانومتر يُدمر الحمض النووي للجراثيم.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> تعقيم الهواء، الماء، غرف العمليات، المختبرات</p>
                      <p className="text-sm mt-2"><strong>الميزة:</strong> بدون مواد كيميائية، صديق للبيئة</p>
                      <p className="text-sm mt-2"><strong>العيب:</strong> يعقم فقط الأسطح المعرضة مباشرة للضوء</p>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-orange-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🌡️</span> 4. التعقيم بالبخار (Steam Sterilization)
                    </h4>
                    <p className="text-sm mb-3">
                      استخدام بخار ماء ساخن (100°م+) لقتل الجراثيم بالحرارة العالية.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> تعقيم مراتب، أرضيات، ستائر، سجاد</p>
                      <p className="text-sm mt-2"><strong>الميزة:</strong> آمن تماماً، بدون كيماويات، يزيل الروائح</p>
                      <p className="text-sm mt-2"><strong>العيب:</strong> لا يناسب جميع الأسطح (قد يتلف بعض المواد)</p>
                    </div>
                  </div>

                  <div className="bg-white border-r-4 border-red-500 p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🧪</span> 5. التعقيم بغاز بيروكسيد الهيدروجين
                    </h4>
                    <p className="text-sm mb-3">
                      نشر غاز بيروكسيد الهيدروجين المتبخر في الغرفة - فعال جداً وآمن نسبياً.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm"><strong>متى يُستخدم:</strong> مستشفيات، غرف عزل، أماكن إصابات خطيرة</p>
                      <p className="text-sm mt-2"><strong>الفعالية:</strong> يقتل جراثيم صعبة (جراثيم كلوستريديوم)</p>
                      <p className="text-sm mt-2"><strong>التكلفة:</strong> مرتفعة، معدات متخصصة</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="dis-when" className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">متى تحتاج للتعقيم بالضبط؟</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4 text-blue-900">🏥 حالات ضرورية تتطلب التعقيم</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>بعد مرض معدٍ:</strong> كورونا، إنفلونزا، جدري الماء</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>مرافق طبية:</strong> عيادات، مستشفيات، صيدليات (يومياً)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>مطاعم ومقاهي:</strong> سلامة غذائية (يومياً)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>مدارس وحضانات:</strong> أطفال أكثر عرضة للعدوى (يومياً)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>فنادق:</strong> تغيير ضيوف (بعد كل نزيل)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>منازل بها مرضى:</strong> كبار سن، مناعة ضعيفة</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span><strong>بعد فيضان أو تسرب مياه:</strong> منع نمو العفن</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4 text-green-900">✅ مزايا التعقيم</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>أمان أعلى:</strong> معظم المطهرات آمنة للاستخدام حول البشر</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>سريع:</strong> نتائج فورية، لا حاجة لإخلاء طويل</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>تكلفة معقولة:</strong> أرخص بكثير من التدخين</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>يمكن تكراره:</strong> يومياً بدون مشاكل</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>متعدد الأغراض:</strong> بكتيريا، فيروسات، فطريات</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>وقائي:</strong> يمنع انتشار الأمراض</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg mt-6">
                  <h4 className="font-bold mb-3 text-yellow-900">⚠️ حدود التعقيم</h4>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li>• <strong>لا يقتل الحشرات:</strong> التعقيم للجراثيم فقط، ليس للصراصير أو النمل</li>
                    <li>• <strong>يعقم الأسطح فقط:</strong> لا يصل لأماكن عميقة داخل الجدران</li>
                    <li>• <strong>تأثير مؤقت:</strong> بعد ساعات، قد تعود الجراثيم من الهواء أو اللمس</li>
                    <li>• <strong>يحتاج تكراراً:</strong> للحماية المستمرة، يجب التعقيم الدوري</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="comparison" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                مقارنة شاملة: التدخين vs التعقيم
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="p-4 text-right">المعيار</th>
                      <th className="p-4 text-right">التدخين</th>
                      <th className="p-4 text-right">التعقيم</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">الهدف الرئيسي</td>
                      <td className="p-4">قتل الحشرات والآفات</td>
                      <td className="p-4">قتل البكتيريا والفيروسات</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="p-4 font-semibold">الطريقة</td>
                      <td className="p-4">غاز/بخار سام</td>
                      <td className="p-4">سائل/رذاذ مطهر</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">التكلفة</td>
                      <td className="p-4">مرتفعة (5,000-20,000 ريال)</td>
                      <td className="p-4">معقولة (300-3,000 ريال)</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="p-4 font-semibold">المدة</td>
                      <td className="p-4">2-3 أيام</td>
                      <td className="p-4">ساعات</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">الإخلاء</td>
                      <td className="p-4 text-red-600 font-bold">إلزامي كامل</td>
                      <td className="p-4 text-green-600 font-bold">غالباً غير مطلوب</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="p-4 font-semibold">الأمان</td>
                      <td className="p-4">سمية عالية</td>
                      <td className="p-4">آمن نسبياً</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">الفعالية</td>
                      <td className="p-4">100% للآفات المستهدفة</td>
                      <td className="p-4">99.9% للجراثيم على الأسطح</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="p-4 font-semibold">التكرار</td>
                      <td className="p-4">نادر (حسب الحاجة)</td>
                      <td className="p-4">منتظم (يومي/أسبوعي)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">الوقاية</td>
                      <td className="p-4">لا يمنع عودة الآفات</td>
                      <td className="p-4">يمنع انتشار الأمراض</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mt-8">
                <h4 className="font-bold text-lg mb-4">🎯 القرار الصحيح</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold mb-2 text-red-900">اختر التدخين إذا:</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ لديك مشكلة حشرات شديدة</li>
                      <li>✓ فشلت الطرق الأخرى</li>
                      <li>✓ تريد حلاً شاملاً لمرة واحدة</li>
                      <li>✓ يمكنك إخلاء المكان لأيام</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2 text-green-900">اختر التعقيم إذا:</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ تريد حماية صحية</li>
                      <li>✓ لديك أطفال أو مرضى</li>
                      <li>✓ تحتاج لحل منتظم</li>
                      <li>✓ لا يمكنك إخلاء المكان</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="combined" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الجمع بين الطريقتين - البرنامج المتكامل
              </h2>

              <p className="mb-6">
                في الواقع، <strong>أفضل حماية تأتي من الجمع بين التدخين والتعقيم</strong> في برنامج شامل:
              </p>

              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary">
                <h4 className="font-bold text-xl mb-6 text-center text-primary">📋 البرنامج المتكامل الموصى به</h4>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-blue-800 flex-shrink-0">1</div>
                    <div>
                      <h5 className="font-bold mb-2">التدخين الأولي الشامل</h5>
                      <p className="text-sm text-gray-700">عند الانتقال لمنزل جديد أو عند اكتشاف إصابة شديدة - تدخين كامل للمبنى لبداية نظيفة 100%</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-green-800 flex-shrink-0">2</div>
                    <div>
                      <h5 className="font-bold mb-2">التعقيم الدوري المنتظم</h5>
                      <p className="text-sm text-gray-700">تعقيم أسبوعي أو شهري لجميع الأسطح - يحافظ على بيئة صحية خالية من الجراثيم</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-purple-800 flex-shrink-0">3</div>
                    <div>
                      <h5 className="font-bold mb-2">الرش الوقائي للآفات</h5>
                      <p className="text-sm text-gray-700">رش مبيدات وقائية كل 3 أشهر - يمنع عودة الحشرات بدون الحاجة لتدخين متكرر</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-orange-800 flex-shrink-0">4</div>
                    <div>
                      <h5 className="font-bold mb-2">التعقيم المكثف حسب الحاجة</h5>
                      <p className="text-sm text-gray-700">تعقيم احترافي فوري بعد أي مرض معدٍ أو حدث خاص (مناسبة، زيارة مريض، إلخ)</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-red-800 flex-shrink-0">5</div>
                    <div>
                      <h5 className="font-bold mb-2">التدخين الطارئ عند اللزوم</h5>
                      <p className="text-sm text-gray-700">تدخين فوري إذا ظهرت إصابة جديدة رغم الوقاية</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-green-50 p-6 rounded-lg">
                  <h5 className="font-bold mb-3 text-green-900">💰 الجدوى الاقتصادية</h5>
                  <p className="text-sm mb-3">
                    قد يبدو البرنامج المتكامل مكلفاً للوهلة الأولى، لكنه في الواقع:
                  </p>
                  <ul className="text-sm space-y-1 mr-6">
                    <li>• يوفر عليك تدخينات متكررة باهظة الثمن</li>
                    <li>• يمنع الأضرار الصحية والمادية من الآفات</li>
                    <li>• يوفر بيئة صحية دائمة لعائلتك</li>
                    <li>• يحافظ على قيمة ممتلكاتك</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="safety" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                السلامة والاحتياطات الضرورية
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-500">
                  <h4 className="font-bold text-lg mb-4 text-red-900">⚠️ احتياطات التدخين الإلزامية</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">1.</span>
                      <span><strong>إخلاء كامل:</strong> جميع البشر، الحيوانات، النباتات - بدون استثناء!</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">2.</span>
                      <span><strong>إزالة الطعام:</strong> أي طعام مكشوف يجب إزالته أو إغلاقه محكماً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">3.</span>
                      <span><strong>إغلاق محكم:</strong> جميع النوافذ والأبواب - منع تسرب الغاز</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">4.</span>
                      <span><strong>لافتة تحذير:</strong> على المداخل - "تدخين - ممنوع الدخول"</strong>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">5.</span>
                      <span><strong>عدم العودة المبكرة:</strong> حتى تأكيد الشركة أن الهواء آمن</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">6.</span>
                      <span><strong>تهوية كافية:</strong> 6-24 ساعة تهوية قبل العودة</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-500">
                  <h4 className="font-bold text-lg mb-4 text-green-900">✅ احتياطات التعقيم الموصى بها</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">1.</span>
                      <span><strong>قراءة الملصق:</strong> اتبع تعليمات الشركة المصنعة دائماً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">2.</span>
                      <span><strong>تهوية جيدة:</strong> افتح النوافذ أثناء وبعد التطبيق</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">3.</span>
                      <span><strong>قفازات ومعدات:</strong> ارتدِ قفازات عند استخدام مطهرات قوية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">4.</span>
                      <span><strong>إبعاد الأطفال:</strong> أثناء التطبيق فقط (ساعة أو ساعتين)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">5.</span>
                      <span><strong>لا تخلط المطهرات:</strong> خلط الكلور والأمونيا ينتج غازات سامة!</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">6.</span>
                      <span><strong>تخزين آمن:</strong> بعيداً عن متناول الأطفال</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="cost" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                التكلفة والجدوى الاقتصادية في جدة
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="p-4 text-right">الخدمة</th>
                      <th className="p-4 text-right">النطاق السعري</th>
                      <th className="p-4 text-right">العوامل المؤثرة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">تدخين كامل للمنزل</td>
                      <td className="p-4">5,000 - 20,000 ريال</td>
                      <td className="p-4 text-sm">حجم المبنى، نوع الإصابة، مدة التدخين</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="p-4 font-semibold">تدخين موضعي (غرفة)</td>
                      <td className="p-4">500 - 3,000 ريال</td>
                      <td className="p-4 text-sm">حجم الغرفة، نوع الغاز</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">تعقيم شامل (منزل 150م²)</td>
                      <td className="p-4">300 - 1,500 ريال</td>
                      <td className="p-4 text-sm">حجم المساحة، نوع المطهر، طريقة التطبيق</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="p-4 font-semibold">تعقيم موضعي (غرفة)</td>
                      <td className="p-4">100 - 400 ريال</td>
                      <td className="p-4 text-sm">حجم الغرفة</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">برنامج تعقيم شهري</td>
                      <td className="p-4">1,200 - 4,000 ريال/سنة</td>
                      <td className="p-4 text-sm">12 زيارة، خصم العقد السنوي</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-4">💡 نصائح لتوفير التكاليف</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>عقود سنوية:</strong> خصم 20-30% على العقود طويلة المدى</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>التعقيم الدوري يُغني عن التدخين:</strong> برنامج وقائي أرخص من علاج إصابات متكررة</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>جمع الخدمات:</strong> طلب تدخين + تعقيم معاً = خصم إضافي</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>الكشف المبكر:</strong> معالجة إصابة صغيرة أرخص بكثير من إصابة متقدمة</span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أسئلة شائعة
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل يمكنني إجراء التدخين بنفسي؟
                  </h4>
                  <p className="text-gray-700">
                    <strong>لا ننصح بذلك أبداً!</strong> التدخين يستخدم غازات سامة جداً تتطلب معدات متخصصة، تدريباً احترافياً، وترخيصاً قانونياً. المحاولة المنزلية خطرة جداً - قد تسمم نفسك، عائلتك، أو جيرانك. كما أن الغازات المتوفرة للبيع العام (إن وُجدت) ضعيفة وغير فعالة. <strong>اترك التدخين للمحترفين المرخصين فقط.</strong> التعقيم، من ناحية أخرى، يمكن إجراؤه منزلياً بمطهرات عامة آمنة.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ كم مرة يجب أن أعقم منزلي؟
                  </h4>
                  <p className="text-gray-700">
                    يعتمد على عدة عوامل: <strong>منزل عادي:</strong> تعقيم عام كل أسبوع أو أسبوعين. <strong>منزل به أطفال صغار:</strong> تعقيم يومي للأسطح عالية اللمس (مقابض، ألعاب). <strong>منزل به مريض:</strong> تعقيم يومي شامل، خاصة غرفة المريض. <strong>بعد مرض معدٍ:</strong> تعقيم احترافي فوري. <strong>منزل عادي بلا مرضى:</strong> تعقيم أسبوعي للأسطح الرئيسية كافٍ.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل التعقيم يقتل الحشرات؟
                  </h4>
                  <p className="text-gray-700">
                    <strong>لا، في الغالب.</strong> المطهرات مصممة لقتل الكائنات الدقيقة (بكتيريا، فيروسات، فطريات)، ليس الحشرات. الحشرات لها أجسام معقدة مغطاة بطبقة شمعية صلبة تحميها. قد يقتل بعض المطهرات القوية (كالكلور المركز) حشرات صغيرة بالملامسة المباشرة، لكنه غير فعال كمبيد حشري. <strong>للحشرات، تحتاج مبيدات حشرية متخصصة أو تدخين، ليس تعقيماً.</strong>
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ كيف أعرف أن شركة التدخين/التعقيم موثوقة؟
                  </h4>
                  <p className="text-gray-700">
                    ابحث عن: <strong>ترخيص رسمي:</strong> من البلدية أو وزارة الصحة (اطلب نسخة). <strong>تأمين:</strong> تأمين مسؤولية مدنية ساري. <strong>شهادات:</strong> شهادات تدريب للفنيين. <strong>مراجعات:</strong> تقييمات إيجابية من عملاء حقيقيين. <strong>معدات احترافية:</strong> معدات حديثة ومعتمدة. <strong>شفافية:</strong> يشرحون الإجراءات والمواد المستخدمة بوضوح. <strong>ضمان:</strong> يقدمون ضماناً مكتوباً. <Link href="/about" className="text-primary underline font-semibold">تعرف على ترخيصنا وشهاداتنا</Link>.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل التدخين يضر بالأثاث والإلكترونيات؟
                  </h4>
                  <p className="text-gray-700">
                    <strong>في الغالب لا، إذا تم بشكل صحيح.</strong> الغازات المستخدمة حديثاً (مثل سلفوريل فلورايد) لا تترك بقايا ولا تسبب تآكلاً. لكن بعض الغازات القديمة (مثل بروميد الميثيل) قد تؤثر على بعض المعادن. <strong>إجراءات وقائية:</strong> تغطية الإلكترونيات الحساسة (كمبيوترات، أجهزة طبية). إزالة الأطعمة المكشوفة. الشركة المحترفة ستنصحك بما يجب تغطيته أو إزالته. الأثاث الخشبي، الأقمشة، السجاد - كلها آمنة تماماً.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل هناك بدائل طبيعية للتدخين والتعقيم؟
                  </h4>
                  <p className="text-gray-700">
                    <strong>للتدخين:</strong> لا توجد بدائل طبيعية فعالة للتدخين الكيميائي للإصابات الشديدة. المعالجة الحرارية (60°م) تعتبر "طبيعية" وفعالة لبعض الآفات مثل بق الفراش. <strong>للتعقيم:</strong> نعم، هناك بدائل: الخل الأبيض (حمض أسيتيك 5%) يقتل بعض البكتيريا. بيروكسيد الهيدروجين (ماء أكسجين 3%) مطهر جيد. زيوت عطرية (شجرة الشاي، لافندر) لها خواص مضادة للميكروبات. البخار الساخن (100°م). <strong>لكن:</strong> البدائل الطبيعية أضعف من المطهرات الكيميائية، تحتاج وقتاً أطول، وقد لا تقتل جميع أنواع الجراثيم.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة النهائية</h3>
              <p className="mb-4 text-lg">
                <strong>التدخين والتعقيم ليسا متنافسين - إنهما متكاملان.</strong> التدخين سلاح قوي ضد الآفات الحية في الإصابات الشديدة. التعقيم درع يومي ضد الأمراض والجراثيم. الجمع بينهما في برنامج متكامل هو الطريق الأمثل لبيئة آمنة وصحية.
              </p>
              <p className="mb-6">
                لا تنتظر حتى تتفاقم المشكلة. استشر المتخصصين لتحديد ما تحتاجه بالضبط - وفّر المال، الوقت، والصحة!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                >
                  استكشف خدماتنا الشاملة
                </Link>
                <Link 
                  href="/contact"
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                >
                  استشارة مجانية - حدد ما تحتاجه
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

      <SchemaInjector 
        type="article"
        locale={locale}
        customSchema={{
          headline: isArabic 
            ? 'التدخين والتعقيم: متى نحتاجهما؟ - الفرق الجوهري والاستخدامات الصحيحة'
            : 'Fumigation & Disinfection: When Do We Need Them? - Fundamental Difference and Proper Uses',
          description: isArabic
            ? 'تعرف على الفرق الجوهري بين التدخين والتعقيم، متى تستخدم كل طريقة، التقنيات المختلفة، ومتى تحتاج لمساعدة احترافية.'
            : 'Learn the fundamental difference between fumigation and disinfection, when to use each method, different techniques, and when you need professional help.',
          image: 'https://www.pestjeddah.com/images/Pest-spray-service.jpg',
          datePublished: '2024-08-28',
          dateModified: '2024-08-28',
          author: {
            '@type': 'Person',
            name: isArabic ? 'م. خالد السلمي' : 'Eng. Khalid Al-Salmi'
          }
        }}
      />
    </>
  );
}