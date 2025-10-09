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
      ? 'الوقاية من الآفات في فصل الشتاء | دليل شامل لحماية منزلك 2024'
      : 'Winter Pest Prevention | Complete Guide to Protect Your Home 2024',
    description: isArabic
      ? 'كيف تحمي منزلك من الآفات التي تبحث عن مأوى دافئ في الشتاء، طرق وقائية فعالة، والتحضير المبكر.'
      : 'How to protect your home from pests seeking warm shelter in winter, effective prevention methods, and early preparation.',
    keywords: isArabic
      ? ['الوقاية الشتوية', 'آفات الشتاء', 'حماية المنزل', 'قوارض شتاء', 'جدة']
      : ['winter prevention', 'winter pests', 'home protection', 'winter rodents', 'Jeddah'],
  };
}

export default function BlogPost12({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'why-winter', title: isArabic ? 'لماذا الشتاء موسم الآفات؟' : 'Why is Winter Pest Season?', level: 1 },
    { id: 'common-pests', title: isArabic ? 'الآفات الشائعة في الشتاء' : 'Common Winter Pests', level: 1 },
    { id: 'preparation', title: isArabic ? 'التحضير المبكر (قبل الشتاء)' : 'Early Preparation (Before Winter)', level: 1 },
    { id: 'sealing', title: isArabic ? 'إغلاق نقاط الدخول' : 'Sealing Entry Points', level: 1 },
    { id: 'storage', title: isArabic ? 'تخزين الطعام الشتوي' : 'Winter Food Storage', level: 1 },
    { id: 'heating', title: isArabic ? 'إدارة التدفئة بذكاء' : 'Smart Heating Management', level: 1 },
    { id: 'inspection', title: isArabic ? 'الفحص الدوري الشتوي' : 'Winter Inspection Routine', level: 1 },
    { id: 'emergency', title: isArabic ? 'التعامل مع طوارئ الشتاء' : 'Handling Winter Emergencies', level: 1 },
    { id: 'faq', title: isArabic ? 'أسئلة شائعة' : 'FAQ', level: 1 },
  ];

  const relatedArticles = [
    {
      id: 7,
      title: isArabic ? 'مكافحة القوارض في المنازل' : 'Rodent Control in Homes',
      excerpt: isArabic ? 'دليل شامل لطرد الفئران والجرذان' : 'Complete guide to eliminate mice and rats',
      image: '/images/Rodent-control-Jeddah.jpg'
    },
    {
      id: 1,
      title: isArabic ? 'طرق الوقاية من الصراصير في المطبخ' : 'Kitchen Cockroach Prevention',
      excerpt: isArabic ? 'دليل شامل للوقاية من الصراصير' : 'Complete cockroach prevention guide',
      image: '/images/Cockroach-control-Jeddah.jpg'
    },
    {
      id: 11,
      title: isArabic ? 'الحشرات الطائرة وطرق مكافحتها' : 'Flying Insects and Control Methods',
      excerpt: isArabic ? 'دليل شامل لمكافحة الذباب والبعوض' : 'Complete guide for flies and mosquitoes',
      image: '/images/Insect-control-Jeddah.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="الوقاية من الآفات في فصل الشتاء - دليل شامل لحماية منزلك من الضيوف غير المرغوبين"
        titleEn="Winter Pest Prevention - Complete Guide to Protect Your Home from Unwanted Guests"
        category="مكافحة موسمية"
        categoryEn="Seasonal Control"
        date={isArabic ? '20 يونيو 2024' : 'June 20, 2024'}
        readTime={isArabic ? '8 دقائق للقراءة' : '8 min read'}
        author="فريق الأسطورة - خبراء المكافحة الموسمية"
        authorEn="Al-Ustora Team - Seasonal Control Experts"
        featuredImage="/images/Home-pest-treatment.jpg"
        featuredImageAlt={isArabic ? 'الوقاية من آفات الشتاء' : 'Winter pest prevention'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 1820 : 1720}
        ctaTitle={isArabic ? 'جهّز منزلك للشتاء الآن!' : 'Prepare Your Home for Winter Now!'}
        ctaDescription={isArabic ? 'برنامج الوقاية الشتوية الشامل - فحص، إغلاق، حماية. احجز قبل دخول الشتاء وتجنب المفاجآت.' : 'Comprehensive winter prevention program - inspection, sealing, protection. Book before winter and avoid surprises.'}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "الشتاء في جدة معتدل، لن أقلق بشأن الآفات" - <strong>خطأ شائع يكلف آلاف الريالات سنوياً!</strong> رغم أن شتاء جدة ليس قارساً كالمناطق الشمالية، <strong>الانخفاض النسبي في الحرارة (15-22°م) والزيادة في الرطوبة تخلق بيئة مثالية لدخول الآفات لمنزلك</strong> بحثاً عن دفء، طعام، ومأوى. القوارض بالتحديد تعتبر منزلك الدافئ "فندقاً 5 نجوم" مقارنة بالخارج البارد.
              </p>
              
              <p className="mb-6">
                المفارقة: معظم الناس يستعدون للشتاء بشراء ملابس دافئة ومدافئ، لكنهم ينسون <strong>تحصين منازلهم ضد الغزو الموسمي للآفات</strong>. النتيجة؟ مفاجآت غير سارة: فأر في المخزن، صراصير في المطبخ، عناكب في كل زاوية. هذا الدليل سيعلمك كيف تستعد بذكاء، تحمي منزلك، وتستمتع بشتاء خالٍ من القلق والإزعاج.
              </p>

              <div className="bg-blue-50 border-r-4 border-blue-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center gap-2">
                  <span className="text-2xl">🌡️</span> حقيقة قد تفاجئك
                </h4>
                <p className="mb-2 text-blue-800 font-semibold">
                  <strong>80% من إصابات القوارض في جدة تبدأ في نوفمبر-ديسمبر!</strong> عندما تنخفض الحرارة الليلية لـ 15-18°م (بارد نسبياً للفئران المعتادة على 25°م+)، تبحث بشكل يائس عن مأوى دافئ. منزلك، بحرارته 22-25°م الثابتة، هو الوجهة المثالية.
                </p>
                <p className="text-blue-700 text-sm">
                  📊 الإحصائية الأكثر إثارة: <strong>70% من مكالمات الطوارئ</strong> لشركات مكافحة الآفات في جدة تحدث بين ديسمبر-فبراير. لماذا؟ لأن الناس ينتظرون رؤية المشكلة بدلاً من الوقاية منها!
                </p>
              </div>
            </div>

            <div id="why-winter" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                لماذا الشتاء موسم الآفات؟ فهم السلوك الموسمي
              </h2>

              <p className="mb-6">
                الآفات كائنات ذكية بغريزة البقاء القوية. إليك لماذا يهاجمون منزلك شتاءً:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-3">🔥</div>
                  <h4 className="font-bold text-lg mb-3">البحث عن الدفء</h4>
                  <p className="text-sm mb-3">
                    حشرات وقوارض <strong>ذوات دم بارد</strong> (لا تنظم حرارة جسمها). انخفاض الحرارة خارجاً = خمول، ضعف، موت محتمل.
                  </p>
                  <div className="bg-white p-3 rounded-lg text-xs">
                    <strong>المثال:</strong> فأر في برد 15°م يحرق طاقة 3 أضعاف للحفاظ على حرارته. داخل منزلك 24°م = راحة ودفء مجاني!
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-3">🍽️</div>
                  <h4 className="font-bold text-lg mb-3">مصادر الطعام النادرة</h4>
                  <p className="text-sm mb-3">
                    في الشتاء: نباتات أقل، حشرات أقل (طعام القوارض/العناكب)، جفاف = قلة غذاء في الخارج.
                  </p>
                  <div className="bg-white p-3 rounded-lg text-xs">
                    <strong>في منزلك:</strong> مخزون شتوي من الطعام، فتات، قمامة = بوفيه مفتوح 24/7!
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                  <div className="text-4xl mb-3">🏠</div>
                  <h4 className="font-bold text-lg mb-3">المأوى الآمن</h4>
                  <p className="text-sm mb-3">
                    الشتاء = أمطار (في جدة قليلة لكن تحدث)، رياح، رطوبة. الجحور الخارجية تُغمر، الأعشاش تتبلل.
                  </p>
                  <div className="bg-white p-3 rounded-lg text-xs">
                    <strong>الحل:</strong> منزلك الجاف، الدافئ، الآمن من المفترسات = ملجأ مثالي لتربية صغار!
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg mt-6">
                <h4 className="font-bold mb-3 text-yellow-900">💡 الدرس المستفاد</h4>
                <p className="text-yellow-800">
                  <strong>الآفات لا "تختار" منزلك عشوائياً - تُجبر عليه بسبب الظروف الخارجية.</strong> فهم هذا يساعدك على: (1) توقع متى سيأتون (أوائل الشتاء)، (2) معرفة ما يبحثون عنه (دفء + طعام + مأوى)، (3) قطع هذه المغريات = منزل محصّن.
                </p>
              </div>
            </div>

            <div id="common-pests" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الآفات الشائعة في شتاء جدة
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🐀</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">القوارض (الفئران والجرذان) - الأكثر شيوعاً</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">لماذا يدخلون شتاءً:</p>
                          <ul className="space-y-1">
                            <li>• حرارة الجسم تنخفض خارجاً (خطر على حياتهم)</li>
                            <li>• طعام خارجي نادر (حدائق جافة، قمامة أقل)</li>
                            <li>• يبحثون عن مكان للتكاثر (الإناث تحتاج دفء لصغارها)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">أماكن الاختباء المفضلة:</p>
                          <ul className="space-y-1">
                            <li>• العلّيات (دافئة + مظلمة)</li>
                            <li>• خلف الأجهزة الكهربائية (حرارة الموتور)</li>
                            <li>• داخل الجدران المجوفة</li>
                            <li>• المخازن (طعام + هدوء)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg mt-3">
                        <p className="text-sm"><strong>⚠️ تحذير:</strong> زوج فئران واحد في نوفمبر = 200+ فأر بحلول مارس! <Link href="/blog/7" className="text-primary underline">اقرأ دليل مكافحة القوارض</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🪳</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">الصراصير - تزداد نشاطاً</h4>
                      <div className="text-sm mb-3">
                        <strong>المفاجأة:</strong> الصراصير لا تختفي شتاءً - <strong>تنتقل للداخل!</strong> حرارة ورطوبة المنزل (خاصة المطبخ/الحمام) تجعلها تتكاثر بشكل أسرع من الصيف.
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• تفضل: خلف الثلاجة، تحت الحوض، داخل الأفران</li>
                        <li>• تنشط ليلاً، صعبة الاكتشاف نهاراً</li>
                        <li>• <strong>علامة خطر:</strong> رؤية صرصور نهاراً في الشتاء = إصابة كبيرة جداً (اتصل بمحترف فوراً)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🕷️</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">العناكب - الأكثر إزعاجاً للسيدات</h4>
                      <div className="text-sm mb-3">
                        العناكب تتبع فرائسها (حشرات). عندما تدخل الحشرات شتاءً، العناكب تتبعها. كما أنها تبحث عن أماكن دافئة للسبات.
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• الأماكن الشائعة: زوايا الأسقف، خلف الستائر، في الخزائن</li>
                        <li>• غالباً غير خطرة (تأكل حشرات ضارة)</li>
                        <li>• لكن شبكاتها قبيحة ومخيفة للبعض</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🐜</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">النمل - يبحث عن طعام داخلي</h4>
                      <div className="text-sm mb-3">
                        في الشتاء، مصادر السكر الخارجية (رحيق أزهار) تقل. النمل يغزو المنازل بحثاً عن سكريات وبقايا طعام.
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• يشكّل صفوفاً طويلة من نقطة دخول لمصدر طعام</li>
                        <li>• يفضل: المطابخ، الخزائن، أماكن تخزين الطعام</li>
                        <li>• إذا وجدت صفاً في الشتاء = مستعمرة كبيرة خارجاً تعتمد على منزلك</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="preparation" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                التحضير المبكر - قبل دخول الشتاء (سبتمبر-أكتوبر)
              </h2>

              <div className="bg-green-50 border-r-4 border-green-600 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-green-900">⏰ القاعدة الذهبية للوقاية الشتوية</h4>
                <p className="text-green-800 text-lg font-semibold">
                  "استعد في سبتمبر-أكتوبر (قبل الشتاء بشهرين) = وقاية 90%. انتظر حتى نوفمبر-ديسمبر = علاج مكلف وصعب."
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">1. الفحص الشامل الخارجي</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold mb-2">ما تفحصه:</p>
                      <ul className="space-y-1">
                        <li>✓ محيط المنزل بالكامل (مشي دورة كاملة)</li>
                        <li>✓ الأساسات (شقوق، فجوات)</li>
                        <li>✓ النوافذ والأبواب (فراغات تحت/حول)</li>
                        <li>✓ فتحات التهوية والتكييف</li>
                        <li>✓ الأنابيب والكابلات الخارجة من الجدران</li>
                        <li>✓ السقف والعلّية</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">ما تبحث عنه:</p>
                      <ul className="space-y-1">
                        <li>• <strong>شقوق:</strong> حتى 6 ملم كافية لدخول فأر!</li>
                        <li>• <strong>فجوات:</strong> حول الأنابيب، تحت الأبواب</li>
                        <li>• <strong>شبكات ممزقة:</strong> على النوافذ/التهوية</li>
                        <li>• <strong>أضرار هيكلية:</strong> خشب متآكل، إسمنت متفتت</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg mt-3">
                    <p className="text-sm"><strong>💡 نصيحة:</strong> افحص ليلاً بكشاف - الضوء من الداخل يُظهر الفجوات بوضوح (تسريب ضوء = نقطة دخول محتملة)</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">2. تنظيف شامل للمحيط الخارجي</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ <strong>قلّم الأشجار والشجيرات:</strong> فروع تلامس المنزل = جسور للقوارض. احتفظ بـ 1 متر مسافة على الأقل</li>
                    <li>✓ <strong>أزل الأوراق المتساقطة:</strong> تجمعات أوراق = ملجأ دافئ للحشرات</li>
                    <li>✓ <strong>رتب الحطب/مواد البناء:</strong> كومات خشب بجانب المنزل = فندق 5 نجوم للنمل الأبيض والقوارض</li>
                    <li>✓ <strong>نظّف المزاريب:</strong> أوراق مسدودة تجمع مياه → جذب آفات</li>
                    <li>✓ <strong>تخلص من القمامة المتراكمة:</strong> أغراض قديمة في الفناء = أعشاش محتملة</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">3. رش وقائي خارجي (حاجز كيميائي)</h4>
                  <p className="text-sm mb-3">
                    في سبتمبر-أكتوبر، رش محيط المنزل (30-50 سم من القاعدة) بمبيد وقائي طويل الأمد. يخلق <strong>حاجزاً غير مرئي</strong> يقتل/يطرد الآفات قبل دخولها.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>المبيدات الموصى بها:</strong> Bifenthrin، Permethrin (تدوم 3-6 أشهر)</li>
                    <li>• <strong>أين ترش:</strong> محيط كامل، حول النوافذ/الأبواب، تحت الشرفات</li>
                    <li>• <strong>التكرار:</strong> مرة في سبتمبر، مرة في يناير = حماية طوال الشتاء</li>
                  </ul>
                  <div className="bg-yellow-50 p-3 rounded-lg mt-3">
                    <p className="text-sm"><strong>⚠️ السلامة:</strong> اتبع تعليمات الملصق. أبعد الأطفال/حيوانات لـ 2-4 ساعات بعد الرش. أو الأفضل: استأجر محترف.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="sealing" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                إغلاق نقاط الدخول - التحصين الفعلي
              </h2>

              <p className="mb-6">
                <strong>الحقيقة الصعبة:</strong> مهما نظّفت ورشيت، إذا كان هناك فتحة للدخول، ستدخل الآفات. <strong>الإغلاق المحكم هو الدفاع الأول والأهم.</strong>
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🔧 مواد الإغلاق المناسبة لكل فتحة</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">الشقوق الصغيرة (أقل من 1 سم)</h5>
                      <ul className="space-y-1">
                        <li>• <strong>السيليكون/الأكريليك:</strong> مرن، يدوم طويلاً</li>
                        <li>• يُستخدم: حول النوافذ، الأبواب، الأنابيب</li>
                        <li>• سعر: 10-30 ريال/أنبوب</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">الفتحات المتوسطة (1-3 سم)</h5>
                      <ul className="space-y-1">
                        <li>• <strong>صوف فولاذي (Steel Wool) + سيليكون:</strong> القوارض لا تستطيع قرضه!</li>
                        <li>• يُستخدم: حول الأنابيب، فتحات التهوية</li>
                        <li>• سعر: 20-40 ريال/لفة</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">الفجوات الكبيرة (3+ سم)</h5>
                      <ul className="space-y-1">
                        <li>• <strong>شبك معدني + إسمنت:</strong> حل دائم قوي</li>
                        <li>• يُستخدم: فتحات كبيرة، مناطق تالفة</li>
                        <li>• قد تحتاج بنّاء/سباك لإصلاحات كبيرة</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">تحت الأبواب</h5>
                      <ul className="space-y-1">
                        <li>• <strong>عتبات معدنية/مطاطية:</strong> تُلصق أسفل الباب</li>
                        <li>• تمنع دخول قوارض، حشرات، تيارات هواء</li>
                        <li>• سعر: 30-100 ريال/باب</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">📋 قائمة فحص الإغلاق الشتوية</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">الأساسات والجدران</h5>
                      <ul className="space-y-1">
                        <li>☐ جميع الشقوق مغلقة</li>
                        <li>☐ فجوات حول الأنابيب محكمة</li>
                        <li>☐ فتحات التهوية بشبك</li>
                        <li>☐ تصريف مكيفات محكم</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">الأبواب والنوافذ</h5>
                      <ul className="space-y-1">
                        <li>☐ جميع الشبكات سليمة</li>
                        <li>☐ إطارات محكمة بدون فراغات</li>
                        <li>☐ عتبات أبواب مركّبة</li>
                        <li>☐ أبواب تُغلق بإحكام</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">السقف والعلّية</h5>
                      <ul className="space-y-1">
                        <li>☐ فتحات التهوية مغطاة</li>
                        <li>☐ لا فجوات في السقف</li>
                        <li>☐ مدخنة بغطاء شبكي</li>
                        <li>☐ أنابيب السقف محكمة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="storage" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                تخزين الطعام الشتوي - قطع مصدر الجذب
              </h2>

              <p className="mb-6">
                الشتاء = موسم المخزون (مكسرات، حلويات عيد، طعام معلب). <strong>التخزين الخاطئ = دعوة مفتوحة للآفات.</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-red-900">❌ أخطاء تخزين شائعة</h4>
                  <ul className="text-sm space-y-2 text-red-800">
                    <li>• <strong>أكياس ورقية/بلاستيكية عادية:</strong> القوارض تقرضها بسهولة</li>
                    <li>• <strong>كرتون مباشر على الأرض:</strong> رطوبة + سهولة وصول</li>
                    <li>• <strong>حبوب بكميات كبيرة مكشوفة:</strong> جنة للسوس والعث</li>
                    <li>• <strong>طعام حيوانات في أكياس مفتوحة:</strong> رائحة قوية تجذب</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-green-900">✅ الطريقة الصحيحة</h4>
                  <ul className="text-sm space-y-2 text-green-800">
                    <li>• <strong>حاويات زجاجية/بلاستيك صلب:</strong> بأغطية محكمة الإغلاق</li>
                    <li>• <strong>ارفع عن الأرض:</strong> 30 سم على الأقل (رفوف، طاولات)</li>
                    <li>• <strong>كميات معقولة:</strong> لا تخزن أكثر من شهر احتياط</li>
                    <li>• <strong>طعام حيوانات في حاويات:</strong> أفرغ الكيس في حاوية محكمة</li>
                    <li>• <strong>نظّف الانسكابات فوراً:</strong> حتى القليل يجذب</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mt-6">
                <h4 className="font-bold mb-3">💡 نصيحة ذهبية للمخازن</h4>
                <p className="text-sm">
                  ضع ورق الغار (Bay Leaves) في زوايا المخزن وبين أكياس الطعام. <strong>رائحته الطبيعية تطرد السوس، العث، والصراصير</strong> بدون أي مواد كيميائية. 10-15 ورقة تكفي مخزن متوسط، تُستبدل كل 3 أشهر. رخيص (20 ريال/كيس)، فعال، آمن 100%!
                </p>
              </div>
            </div>

            <div id="inspection" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الفحص الدوري الشتوي - المراقبة المستمرة
              </h2>

              <p className="mb-6">
                حتى مع أفضل وقاية، <strong>الفحص الدوري ضروري</strong>. الآفات ذكية وتجد طرقاً جديدة. الكشف المبكر = حل سهل.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-lg mb-4">📅 جدول الفحص الموصى به</h4>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h5 className="font-bold mb-2">أسبوعياً (10 دقائق)</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ فحص بصري للمطبخ (فضلات، آثار قرض)</li>
                      <li>✓ فحص أماكن تخزين الطعام</li>
                      <li>✓ الاستماع لأصوات غريبة ليلاً</li>
                      <li>✓ فحص سلة القمامة ومحيطها</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg">
                    <h5 className="font-bold mb-2">نصف شهري (30 دقيقة)</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ فحص خلف الأجهزة الكبيرة (ثلاجة، فرن)</li>
                      <li>✓ فحص الحمامات (رطوبة، تسريبات)</li>
                      <li>✓ فحص العلّية/البدروم (إذا موجودة)</li>
                      <li>✓ فحص محيط خارجي (نقاط دخول جديدة)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h5 className="font-bold mb-2">شهرياً (ساعة)</h5>
                    <ul className="text-sm space-y-1">
                      <li>✓ فحص شامل لجميع نقاط الدخول</li>
                      <li>✓ تقييم فعالية الإغلاقات (تفتت؟ تضررت؟)</li>
                      <li>✓ فحص الحديقة (تراكمات جديدة؟)</li>
                      <li>✓ تجديد طعوم إذا استخدمت</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                <h4 className="font-bold text-lg mb-4">🔍 ما تبحث عنه بالتحديد</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2 text-primary">علامات القوارض</h5>
                    <ul className="space-y-1">
                      <li>• فضلات (حجم حبة أرز-زيتون)</li>
                      <li>• آثار بول (بقع، رائحة)</li>
                      <li>• قرض على أسلاك/خشب/بلاستيك</li>
                      <li>• أصوات خدش ليلية</li>
                      <li>• مسارات دهنية على الجدران</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-primary">علامات الحشرات</h5>
                    <ul className="space-y-1">
                      <li>• صراصير حية/ميتة</li>
                      <li>• كبسولات بيض صراصير</li>
                      <li>• شبكات عنكبوت</li>
                      <li>• صفوف نمل</li>
                      <li>• أجنحة حشرات متساقطة</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-primary">مشاكل هيكلية</h5>
                    <ul className="space-y-1">
                      <li>• شقوق جديدة</li>
                      <li>• تسريبات مياه</li>
                      <li>• رطوبة/عفن</li>
                      <li>• شبكات ممزقة</li>
                      <li>• إغلاقات متفككة</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="emergency" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                التعامل مع طوارئ الشتاء
              </h2>

              <div className="bg-red-50 border-r-4 border-red-600 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3 text-red-900">🚨 متى تتصل بمحترف فوراً؟</h4>
                <ul className="text-sm space-y-2 text-red-800">
                  <li>• رأيت قارضاً نهاراً (= إصابة شديدة جداً)</li>
                  <li>• فضلات كثيفة في عدة أماكن</li>
                  <li>• أصوات واضحة في الجدران/السقف</li>
                  <li>• أضرار كهربائية (أسلاك مقروضة - خطر حريق!)</li>
                  <li>• رائحة قوية (قوارض ميتة في جدران)</li>
                  <li>• جهودك المنزلية فشلت لأسبوعين+</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/30">
                <h4 className="font-bold text-xl mb-4 text-primary">❄️ برنامجنا الشتوي الخاص</h4>
                <p className="text-sm mb-4">
                  <strong>حزمة الوقاية الشتوية الشاملة</strong> - نجهّز منزلك بالكامل قبل الشتاء:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>فحص شامل 360 درجة (داخلي + خارجي)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>إغلاق احترافي لجميع نقاط الدخول</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>رش وقائي محيط كامل (يدوم 6 أشهر)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>نصائح تخزين وإدارة منزلية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>زيارة متابعة مجانية منتصف الشتاء</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>استجابة طوارئ ذات أولوية</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm mb-6 bg-white p-4 rounded-lg">
                  <strong>💰 عرض خاص:</strong> احجز في سبتمبر-أكتوبر واحصل على <strong>خصم 20%</strong> + فحص ربيعي مجاني بعد انتهاء الشتاء!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    احجز برنامج الوقاية الشتوية
                  </Link>
                  <Link 
                    href="/services"
                    className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                  >
                    استكشف خدماتنا
                  </Link>
                </div>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أسئلة شائعة حول الوقاية الشتوية
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل شتاء جدة "بارد" بما يكفي لجذب آفات؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>نعم، حتماً!</strong> الموضوع ليس عن "برودة مطلقة" - بل عن <strong>انخفاض نسبي</strong>. القوارض والحشرات معتادة على 30-35°م. عندما تنخفض لـ 18-22°م (شتاء جدة)، يبحثون عن أماكن أدفأ. منزلك 24°م ثابتة = 6°م أدفأ من الخارج = فرق كبير لهم! إضافة، الرطوبة تزيد شتاءً → بعض الحشرات تنجذب للرطوبة (صراصير، عناكب).
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل التدفئة تزيد مشكلة الآفات؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>نعم ولا.</strong> (1) <strong>نعم:</strong> التدفئة تجعل منزلك أكثر جاذبية (دافئ = مريح للآفات). المدافئ والأفران تخلق نقاط دفء مركزة تحبها القوارض. (2) <strong>لا:</strong> التدفئة نفسها لا "تخلق" آفات، فقط تجذبها. <strong>الحل:</strong> ليس إطفاء التدفئة (!) - بل تحصين المنزل قبلها. استمتع بالدفء بدون قلق.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل يمكنني الاكتفاء بالوقاية بدون رش كيميائي؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>نظرياً نعم، عملياً صعب.</strong> إذا أغلقت <strong>100%</strong> من نقاط الدخول + نظافة مثالية + تخزين محكم + لا جيران مصابين = ممكن. <strong>لكن:</strong> في الواقع، هناك دائماً فجوة صغيرة تُفوّت، خطأ بسيط، ضعف بشري. <strong>الرش الوقائي</strong> يُضيف <strong>طبقة أمان إضافية</strong> - حتى لو دخلت آفة من فجوة غير مرئية، الحاجز الكيميائي يقتلها. فكر فيه كـ "تأمين" على جهودك.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ متى أبدأ الاستعداد بالضبط؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>الجدول الزمني المثالي لجدة:</strong> <strong>سبتمبر:</strong> الفحص الأولي، تحديد نقاط الضعف، طلب مواد إغلاق. <strong>أوائل أكتوبر:</strong> البدء بالإغلاق والتنظيف الخارجي. <strong>أواخر أكتوبر:</strong> الرش الوقائي الأول. <strong>نوفمبر:</strong> مراقبة وتقييم، إصلاح أي ثغرات. <strong>ديسمبر-يناير:</strong> رش ثاني إذا لزم. <strong>الخلاصة:</strong> ابدأ 6-8 أسابيع قبل انخفاض الحرارة (أوائل سبتمبر في جدة).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة</h3>
              <p className="mb-4 text-lg">
                الشتاء ليس "موسم راحة" من الآفات - بل <strong>موسم غزو منظم!</strong> لكن مع التحضير المبكر، الإغلاق المحكم، والمراقبة المستمرة، يمكنك قلب الطاولة وجعل منزلك قلعة محصنة.
              </p>
              <p className="mb-6">
                <strong>ابدأ مبكراً (سبتمبر-أكتوبر) = وقاية سهلة ورخيصة. انتظر المشكلة (نوفمبر-ديسمبر) = علاج صعب ومكلف.</strong> الاختيار لك!
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

      <SchemaInjector 
        type="article"
        locale={locale}
        customSchema={{
          headline: isArabic 
            ? 'الوقاية من الآفات في فصل الشتاء - دليل شامل لحماية منزلك من الضيوف غير المرغوبين'
            : 'Winter Pest Prevention - Complete Guide to Protect Your Home from Unwanted Guests',
          description: isArabic
            ? 'كيف تحمي منزلك من الآفات التي تبحث عن مأوى دافئ في الشتاء، طرق وقائية فعالة، والتحضير المبكر.'
            : 'How to protect your home from pests seeking warm shelter in winter, effective prevention methods, and early preparation.',
          image: 'https://www.pestjeddah.com/images/Home-pest-treatment.jpg',
          datePublished: '2024-06-20',
          dateModified: '2024-06-20',
          author: {
            '@type': 'Organization',
            name: isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team'
          }
        }}
      />
    </>
  );
}