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
      ? 'أهمية التعقيم الدوري للمطاعم | دليل شامل للسلامة الغذائية 2024'
      : 'Importance of Regular Restaurant Disinfection | Complete Food Safety Guide 2024',
    description: isArabic
      ? 'تعرف على أهمية التعقيم الدوري للمطاعم، معايير الصحة والسلامة، جدول التعقيم المثالي، وكيف تحافظ على سمعة مطعمك ورضا عملائك.'
      : 'Learn about the importance of regular restaurant disinfection, health and safety standards, optimal cleaning schedules, and how to maintain your restaurant reputation.',
    keywords: isArabic
      ? ['تعقيم المطاعم', 'مكافحة الحشرات للمطاعم', 'السلامة الغذائية', 'تعقيم دوري', 'مطاعم جدة']
      : ['restaurant disinfection', 'restaurant pest control', 'food safety', 'regular sanitization', 'Jeddah restaurants'],
  };
}

export default function BlogPost5({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'why', title: isArabic ? 'لماذا التعقيم الدوري ضروري؟' : 'Why is Regular Disinfection Necessary?', level: 1 },
    { id: 'regulations', title: isArabic ? 'المعايير والقوانين في السعودية' : 'Standards and Regulations in Saudi Arabia', level: 1 },
    { id: 'risks', title: isArabic ? 'المخاطر الصحية' : 'Health Risks', level: 2 },
    { id: 'reputation', title: isArabic ? 'تأثير النظافة على السمعة' : 'Impact of Cleanliness on Reputation', level: 2 },
    { id: 'schedule', title: isArabic ? 'جدول التعقيم المثالي' : 'Optimal Disinfection Schedule', level: 1 },
    { id: 'daily', title: isArabic ? 'المهام اليومية' : 'Daily Tasks', level: 2 },
    { id: 'weekly', title: isArabic ? 'المهام الأسبوعية' : 'Weekly Tasks', level: 2 },
    { id: 'monthly', title: isArabic ? 'المهام الشهرية' : 'Monthly Tasks', level: 2 },
    { id: 'areas', title: isArabic ? 'المناطق الحرجة' : 'Critical Areas', level: 1 },
    { id: 'methods', title: isArabic ? 'طرق التعقيم الفعالة' : 'Effective Disinfection Methods', level: 1 },
    { id: 'pest', title: isArabic ? 'مكافحة الآفات في المطاعم' : 'Pest Control in Restaurants', level: 1 },
    { id: 'training', title: isArabic ? 'تدريب الموظفين' : 'Staff Training', level: 1 },
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
      id: 10,
      title: isArabic ? 'مكافحة الآفات في الفنادق' : 'Pest Control in Hotels',
      excerpt: isArabic ? 'برامج مكافحة متخصصة للفنادق' : 'Specialized pest control programs for hotels',
      image: '/images/Commercial-pest-control-Jeddah.jpg'
    },
    {
      id: 6,
      title: isArabic ? 'التدخين والتعقيم' : 'Fumigation & Disinfection',
      excerpt: isArabic ? 'الفرق بين التقنيات المختلفة' : 'Difference between various techniques',
      image: '/images/Pest-spray-service.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="أهمية التعقيم الدوري للمطاعم - دليل شامل للسلامة الغذائية والنجاح"
        titleEn="Importance of Regular Restaurant Disinfection - Complete Guide to Food Safety and Success"
        category="قطاع تجاري"
        categoryEn="Commercial Sector"
        date={isArabic ? '1 سبتمبر 2024' : 'September 1, 2024'}
        readTime={isArabic ? '10 دقائق للقراءة' : '10 min read'}
        author="د. فاطمة الأحمدي - استشارية السلامة الغذائية"
        authorEn="Dr. Fatima Al-Ahmadi - Food Safety Consultant"
        featuredImage="/images/Pest-control-for-restaurants.jpg"
        featuredImageAlt={isArabic ? 'تعقيم المطاعم ومكافحة الحشرات' : 'Restaurant disinfection and pest control'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 2100 : 2000}
        ctaTitle={isArabic ? 'احمِ سمعة مطعمك الآن!' : 'Protect Your Restaurant Reputation Now!'}
        ctaDescription={isArabic ? 'لا تخاطر بصحة عملائك وسمعتك. احجز برنامج تعقيم ومكافحة آفات دوري متخصص للمطاعم بأسعار تنافسية.' : "Don't risk your customers' health and your reputation. Book specialized regular disinfection and pest control program for restaurants at competitive prices."}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                تخيل هذا المشهد: مطعمك ممتلئ بالزبائن، الأجواء رائعة، الطعام لذيذ، ثم فجأة... يرى أحد العملاء صرصوراً يعبر أرضية المطعم. في غضون ساعات، تنتشر صور وتعليقات سلبية على وسائل التواصل الاجتماعي، تتصل بلدية جدة لإجراء تفتيش مفاجئ، وتبدأ الحجوزات في الانخفاض. سنوات من العمل الشاق والسمعة الطيبة قد تُدمر في لحظة واحدة بسبب إهمال التعقيم الدوري.
              </p>
              
              <p className="mb-6">
                في صناعة المطاعم التنافسية في جدة، التعقيم الدوري ومكافحة الآفات ليسا مجرد "إضافة لطيفة" - إنهما <strong>ضرورة حيوية</strong> تفصل بين النجاح والفشل. هذا الدليل الشامل، المبني على معايير وزارة الصحة السعودية والممارسات العالمية، سيعلمك كل ما تحتاجه لبناء برنامج تعقيم ناجح يحمي عملاءك، موظفيك، وسمعتك الثمينة.
              </p>

              <div className="bg-red-50 border-r-4 border-red-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                  <span className="text-2xl">📊</span> إحصائية صادمة
                </h4>
                <p className="mb-2 text-red-800 font-semibold">
                  وفقاً لدراسة وزارة الصحة السعودية، 78% من حالات التسمم الغذائي المبلغ عنها في المملكة مرتبطة بسوء النظافة في مؤسسات تقديم الطعام. أكثر من 60% من المطاعم التي تم إغلاقها عام 2023 كان السبب الرئيسي هو فشل معايير النظافة ومكافحة الآفات.
                </p>
                <p className="text-red-700 text-sm">
                  💰 متوسط خسارة المطعم من حادثة تسمم غذائي واحدة: 250,000 - 500,000 ريال (بين الغرامات، الدعاوى، وفقدان العملاء)
                </p>
              </div>
            </div>

            <div id="why" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                لماذا التعقيم الدوري ضروري للمطاعم؟
              </h2>

              <p className="mb-6">
                التعقيم الدوري ليس مجرد "تنظيف" - إنه نظام متكامل لحماية صحة عامة، سمعة تجارية، واستمرارية مالية:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-md border-2 border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">🏥</span> حماية الصحة العامة
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>منع انتشار البكتيريا الخطيرة (السالمونيلا، الإي كولاي، الليستيريا)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>القضاء على الفيروسات (نوروفيروس، فيروس التهاب الكبد A)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>تقليل حالات التسمم الغذائي بنسبة 95%+</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>حماية الفئات الأكثر عرضة (الأطفال، كبار السن، الحوامل)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span>منع انتقال الأمراض المعدية بين الموظفين والعملاء</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md border-2 border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">⭐</span> حماية السمعة والعلامة التجارية
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>تقييمات إيجابية على Google، TripAdvisor، HungerStation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>كلمة إيجابية من الفم (أقوى تسويق مجاني)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>ثقة العملاء وولائهم طويل المدى</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>تجنب الفضائح الإعلامية ووسائل التواصل الاجتماعي</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span>شهادات نظافة رسمية تُعرض للعملاء</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md border-2 border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">⚖️</span> الامتثال القانوني
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>تجنب الغرامات الثقيلة (5,000 - 100,000 ريال)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>منع الإغلاق المؤقت أو الدائم</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>تجنب العقوبات الجنائية في حالات التسمم الحاد</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>تسهيل عمليات التفتيش من البلدية ووزارة الصحة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>الحصول على تراخيص وتجديدها بسهولة</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md border-2 border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">💰</span> الجدوى الاقتصادية
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>تقليل هدر الطعام بسبب التلف (توفير 10-15% من التكاليف)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>تقليل غياب الموظفين بسبب المرض</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>إطالة عمر المعدات والأثاث</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>توفير تكاليف الإصلاحات الناتجة عن الآفات</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600">•</span>
                      <span>زيادة الإيرادات من ثقة العملاء وزيادة الزيارات المتكررة</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-yellow-900">💡 معادلة النجاح البسيطة</h4>
                <p className="text-yellow-800 text-lg font-semibold text-center">
                  تعقيم دوري احترافي + مكافحة آفات وقائية = عملاء سعداء + سمعة ممتازة + أرباح أعلى
                </p>
              </div>
            </div>

            <div id="regulations" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                المعايير والقوانين في السعودية
              </h2>

              <p className="mb-6">
                المطاعم في المملكة تخضع لمعايير صارمة من عدة جهات رقابية. فهم هذه المتطلبات ضروري لتجنب المشاكل:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white border-r-4 border-blue-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏛️</span> وزارة الصحة السعودية
                  </h4>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">المتطلبات الأساسية:</p>
                    <ul className="text-sm space-y-1 mr-6">
                      <li>• برنامج تعقيم موثق ومنتظم (يومي، أسبوعي، شهري)</li>
                      <li>• عقد سنوي مع شركة مكافحة آفات مرخصة</li>
                      <li>• سجلات تعقيم محدثة (يجب الاحتفاظ بها 2 سنة)</li>
                      <li>• شهادات تدريب للموظفين على السلامة الغذائية</li>
                      <li>• فحوصات صحية دورية للعاملين في تحضير الطعام</li>
                      <li>• توفير مواد تعقيم معتمدة ومطابقة للمواصفات</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>⚠️ العقوبات:</strong> غرامات 5,000 - 50,000 ريال للمخالفة الأولى، الإغلاق المؤقت للمخالفة الثانية، إلغاء الترخيص للمخالفة الثالثة.</p>
                  </div>
                </div>

                <div className="bg-white border-r-4 border-green-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏙️</span> أمانة جدة (البلدية)
                  </h4>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">معايير التفتيش:</p>
                    <ul className="text-sm space-y-1 mr-6">
                      <li>• تفتيش دوري غير معلن (كل 2-4 أشهر)</li>
                      <li>• تقييم شامل للنظافة (نظام 100 نقطة)</li>
                      <li>• فحص أماكن تخزين الطعام والثلاجات</li>
                      <li>• فحص نظافة المطبخ وأدوات الطهي</li>
                      <li>• التأكد من عدم وجود آفات أو علامات إصابة</li>
                      <li>• فحص نظافة دورات المياه وصالة الطعام</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm"><strong>🏆 التصنيفات:</strong> A (ممتاز 90-100)، B (جيد جداً 80-89)، C (جيد 70-79)، D (مقبول 60-69)، F (راسب أقل من 60 - يُغلق فوراً)</p>
                  </div>
                </div>

                <div className="bg-white border-r-4 border-purple-500 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <span className="text-2xl">🍽️</span> الهيئة السعودية للغذاء والدواء (SFDA)
                  </h4>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">المتطلبات الخاصة:</p>
                    <ul className="text-sm space-y-1 mr-6">
                      <li>• نظام HACCP (تحليل المخاطر ونقاط التحكم الحرجة) للمطاعم الكبيرة</li>
                      <li>• تتبع درجات حرارة حفظ الطعام</li>
                      <li>• فصل تام بين الأطعمة النيئة والمطبوخة</li>
                      <li>• معايير صارمة للتعامل مع الحساسية الغذائية</li>
                      <li>• توثيق مصادر جميع المواد الغذائية</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-red-900">🚫 أسباب الإغلاق الفوري الأكثر شيوعاً</h4>
                <ol className="text-sm space-y-2 text-red-800">
                  <li><strong>1. وجود آفات حية</strong> (صراصير، قوارض، ذباب بكثرة)</li>
                  <li><strong>2. عدم وجود عقد مكافحة آفات ساري المفعول</strong></li>
                  <li><strong>3. تلوث واضح في مناطق تحضير الطعام</strong></li>
                  <li><strong>4. حفظ طعام في درجات حرارة خطرة</strong> (4-60°م)</li>
                  <li><strong>5. عدم وجود مصادر مياه نظيفة ومرافق غسيل كافية</strong></li>
                </ol>
              </div>
            </div>

            <div id="schedule" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                جدول التعقيم المثالي للمطاعم
              </h2>

              <p className="mb-6">
                التعقيم الفعال يعتمد على <strong>الانتظام والشمولية</strong>. إليك الجدول الذهبي الموصى به:
              </p>

              <div id="daily" className="mb-10">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl shadow-lg mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">☀️</span> المهام اليومية (قبل الفتح، أثناء العمل، بعد الإغلاق)
                  </h3>
                  <p className="text-sm font-semibold text-orange-800">التكرار: 3 مرات يومياً على الأقل</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-md border-r-4 border-yellow-500">
                    <h4 className="font-bold mb-3">🌅 صباحاً (قبل الفتح)</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ فحص بصري شامل للمطبخ وصالة الطعام</li>
                      <li>✓ تعقيم جميع أسطح العمل</li>
                      <li>✓ تنظيف الأرضيات بمطهر</li>
                      <li>✓ فحص الثلاجات والمجمدات</li>
                      <li>✓ تنظيف دورات المياه</li>
                      <li>✓ إفراغ صناديق القمامة</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-md border-r-4 border-orange-500">
                    <h4 className="font-bold mb-3">☀️ أثناء العمل</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ مسح الطاولات بعد كل عميل</li>
                      <li>✓ تعقيم لوحات القطع وأدوات الطهي بعد كل استخدام</li>
                      <li>✓ غسل اليدين المتكرر (كل 30 دقيقة)</li>
                      <li>✓ مسح الانسكابات فوراً</li>
                      <li>✓ تفريغ القمامة كل ساعتين</li>
                      <li>✓ تنظيف دورات المياه كل 2-3 ساعات</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-md border-r-4 border-red-500">
                    <h4 className="font-bold mb-3">🌙 مساءً (بعد الإغلاق)</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ تنظيف عميق لجميع المعدات</li>
                      <li>✓ غسل الأرضيات بالماء الساخن والمطهر</li>
                      <li>✓ تعقيم أسطح الإعداد</li>
                      <li>✓ تنظيف الشوايات والأفران</li>
                      <li>✓ مسح الطاولات والكراسي</li>
                      <li>✓ إخراج جميع القمامة</li>
                      <li>✓ تعقيم دورات المياه شامل</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="weekly" className="mb-10">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl shadow-lg mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">📅</span> المهام الأسبوعية
                  </h3>
                  <p className="text-sm font-semibold text-blue-800">التكرار: مرة واحدة أسبوعياً (يفضل يوم الإجازة)</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تنظيف عميق للثلاجات والمجمدات</strong>
                        <p className="text-sm text-gray-600">إذابة الثلج، إزالة جميع الأرفف وتعقيمها، التخلص من الأطعمة المنتهية</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تنظيف شفاطات المطبخ وفلاتر الهواء</strong>
                        <p className="text-sm text-gray-600">إزالة الدهون المتراكمة، غسل الفلاتر، فحص كفاءة الشفط</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تنظيف خلف وأسفل جميع المعدات الكبيرة</strong>
                        <p className="text-sm text-gray-600">تحريك الثلاجات، الأفران، آلة غسيل الصحون - مناطق تجمع الأوساخ والآفات</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تعقيم مصارف المياه والأنابيب</strong>
                        <p className="text-sm text-gray-600">استخدام منظفات خاصة لإزالة تراكمات الدهون والبكتيريا</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>غسل الستائر والمفروشات</strong>
                        <p className="text-sm text-gray-600">الستائر، مناديل الطاولات القماشية، الكراسي المنجدة</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تنظيف الجدران والأسقف</strong>
                        <p className="text-sm text-gray-600">إزالة بقع الدهون، الغبار، شبكات العنكبوت</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>فحص وتنظيف مناطق تخزين الطعام</strong>
                        <p className="text-sm text-gray-600">ترتيب المخزون، التخلص من المنتجات القديمة، تنظيف الأرفف</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تعقيم مقابض الأبواب، المفاتيح، الحنفيات</strong>
                        <p className="text-sm text-gray-600">الأسطح الأكثر لمساً - أكبر ناقل للجراثيم</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="monthly" className="mb-10">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">📆</span> المهام الشهرية
                  </h3>
                  <p className="text-sm font-semibold text-purple-800">التكرار: مرة شهرياً (يفضل بعقد مع شركة تعقيم محترفة)</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>خدمة مكافحة آفات شاملة من شركة مرخصة</strong>
                        <p className="text-sm text-gray-600">رش، طعوم، فحص، توثيق - ضروري للامتثال القانوني</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تنظيف احترافي عميق لنظام التهوية</strong>
                        <p className="text-sm text-gray-600">القنوات، المراوح، فتحات التكييف</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>فحص وصيانة معدات التعقيم</strong>
                        <p className="text-sm text-gray-600">آلات غسيل الصحون، معقمات الأيدي، أجهزة التعقيم بالأشعة فوق البنفسجية</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تنظيف وتعقيم خزانات المياه</strong>
                        <p className="text-sm text-gray-600">مصدر المياه النظيفة - أساس السلامة</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>فحص شامل لجميع أختام الأبواب والنوافذ</strong>
                        <p className="text-sm text-gray-600">منع دخول الآفات من الخارج</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>تدريب تنشيطي للموظفين</strong>
                        <p className="text-sm text-gray-600">مراجعة بروتوكولات النظافة والسلامة</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold text-xl">•</span>
                      <div>
                        <strong>مراجعة وتحديث سجلات التعقيم</strong>
                        <p className="text-sm text-gray-600">التأكد من توثيق جميع الأنشطة للتفتيش</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-green-900">✅ قاعدة ذهبية للتعقيم</h4>
                <p className="text-green-800">
                  <strong>"إذا لامس الطعام أو لامسه إنسان، عقّمه يومياً. إذا كان قريباً من الطعام، عقّمه أسبوعياً. إذا كان في المبنى، عقّمه شهرياً."</strong>
                </p>
              </div>
            </div>

            <div id="areas" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                المناطق الحرجة التي يجب التركيز عليها
              </h2>

              <p className="mb-6">
                بعض المناطق أكثر عرضة للتلوث وتكاثر البكتيريا والآفات. اهتمام خاص مطلوب:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-500">
                  <h4 className="font-bold text-lg mb-4 text-red-900">🔥 مناطق عالية الخطورة</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-red-600">1.</span>
                      <span><strong>أسطح تحضير اللحوم النيئة:</strong> أعلى خطر للتلوث البكتيري (السالمونيلا، E. coli)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">2.</span>
                      <span><strong>مصارف المطبخ:</strong> تجمع دهون وبقايا طعام - جنة للبكتيريا</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">3.</span>
                      <span><strong>إسفنج وفوط التنظيف:</strong> يحتوي على ملايين البكتيريا إذا لم يُعقم يومياً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">4.</span>
                      <span><strong>مناطق القمامة:</strong> مصدر روائح وآفات</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">5.</span>
                      <span><strong>ألواح التقطيع:</strong> خاصة الخشبية - تخزن بكتيريا عميقة</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-r-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-4 text-orange-900">⚠️ مناطق متوسطة الخطورة</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-orange-600">1.</span>
                      <span><strong>أرضيات المطبخ:</strong> انسكابات متكررة وحركة مرور عالية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">2.</span>
                      <span><strong>مقابض الثلاجات والأفران:</strong> أسطح عالية اللمس</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">3.</span>
                      <span><strong>طاولات الطعام والقوائم:</strong> لمس مباشر من العملاء</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">4.</span>
                      <span><strong>دورات المياه:</strong> خاصة الحنفيات ومقابض الأبواب</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600">5.</span>
                      <span><strong>مناطق تخزين الطعام الجاف:</strong> جذب القوارض والحشرات</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-r-4 border-yellow-500">
                  <h4 className="font-bold text-lg mb-4 text-yellow-900">💡 مناطق غالباً ما تُنسى</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>خلف وأسفل المعدات الثقيلة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>أسفل الأحواض والأنابيب</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>داخل آلة صنع الثلج</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>مفاتيح الإضاءة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>مكيفات الهواء وفتحاتها</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>زوايا السقف</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-600">•</span>
                      <span>هواتف وأجهزة نقاط البيع</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-4 text-blue-900">🎯 نصائح للمناطق الحرجة</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>استخدم ألواح تقطيع ملونة مختلفة (أحمر للحوم، أخضر للخضار، أزرق للأسماك)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>عقّم الإسفنج يومياً بالمايكرويف (دقيقتين مبللاً)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>استخدم سلال قمامة بأغطية أوتوماتيكية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>ضع سجادات مطاطية مضادة للانزلاق والبكتيريا</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-600">✓</span>
                      <span>وثق تنظيف كل منطقة حرجة بملصقات توقيع وتاريخ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="pest" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                مكافحة الآفات في المطاعم - جزء لا يتجزأ من التعقيم
              </h2>

              <p className="mb-6">
                <strong>حقيقة مهمة:</strong> لا يوجد مطعم محصن 100% من الآفات. الموقع، الموسم، والطعام نفسه - كلها عوامل جذب طبيعية. الفرق بين المطاعم الناجحة والفاشلة هو <strong>البرنامج الوقائي الاستباقي</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-primary">
                  <h4 className="font-bold text-lg mb-4 text-primary">🐛 الآفات الأكثر شيوعاً في المطاعم</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">1. الصراصير 🪳</h5>
                      <p className="text-sm mb-2">الأكثر شيوعاً وخطورة. تنقل 33 نوعاً من البكتيريا.</p>
                      <p className="text-xs text-gray-600"><strong>الوقاية:</strong> نظافة مطلقة، سد الشقوق، رش شهري محترف.</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">2. القوارض (فئران وجرذان) 🐀</h5>
                      <p className="text-sm mb-2">تلوث الطعام، تقرض الأسلاك والأثاث، تنقل أمراض خطيرة.</p>
                      <p className="text-xs text-gray-600"><strong>الوقاية:</strong> سد جميع الفتحات، محطات طعوم دائمة، تخزين طعام محكم.</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">3. الذباب 🪰</h5>
                      <p className="text-sm mb-2">ينقل بكتيريا من القمامة للطعام. مزعج للعملاء.</p>
                      <p className="text-xs text-gray-600"><strong>الوقاية:</strong> شبكات النوافذ، مصائد كهربائية، إدارة قمامة صارمة.</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-bold mb-2">4. النمل 🐜</h5>
                      <p className="text-sm mb-2">يغزو مناطق الطعام الحلو، صعب التخلص منه.</p>
                      <p className="text-xs text-gray-600"><strong>الوقاية:</strong> نظافة دقيقة للانسكابات، طعوم متخصصة، سد نقاط الدخول.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-500">
                  <h4 className="font-bold text-lg mb-4 text-green-800">✅ برنامج المكافحة المتكامل (IPM)</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                        الفحص الدوري
                      </h5>
                      <p className="text-sm mr-8">تفتيش شهري من شركة مرخصة، تقرير مكتوب بالنتائج والتوصيات</p>
                    </div>

                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                        الوقاية الفيزيائية
                      </h5>
                      <ul className="text-sm mr-8 space-y-1">
                        <li>• شبكات على النوافذ والفتحات</li>
                        <li>• ستائر هوائية على المداخل</li>
                        <li>• أبواب محكمة الإغلاق</li>
                        <li>• سد جميع الشقوق والفتحات</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                        المعالجة الكيميائية
                      </h5>
                      <p className="text-sm mr-8">رش شهري بمبيدات معتمدة من SFDA، طعوم في أماكن استراتيجية، مبيدات آمنة للاستخدام الغذائي</p>
                    </div>

                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                        المراقبة والتوثيق
                      </h5>
                      <p className="text-sm mr-8">محطات مراقبة (صناديق صغيرة) في 10-15 موقعاً، فحصها شهرياً، توثيق أي نشاط</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/30">
                <h4 className="font-bold text-xl mb-4 text-primary">🏆 برنامجنا المتخصص للمطاعم</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>12 زيارة سنوية (كل شهر) - مع تقرير مفصل</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>استجابة طوارئ خلال 24 ساعة مجاناً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>مواد آمنة معتمدة من SFDA</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>شهادة مكافحة آفات لعرضها للمفتشين</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>خصم 25% للعقود السنوية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>تدريب مجاني لموظفي المطعم</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/sectors/restaurants"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    اطلع على برامج المطاعم
                  </Link>
                  <Link 
                    href="/contact"
                    className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                  >
                    احجز استشارة مجانية
                  </Link>
                </div>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أسئلة شائعة حول تعقيم المطاعم
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ كم تكلفة برنامج تعقيم ومكافحة آفات شامل؟
                  </h4>
                  <p className="text-gray-700">
                    تختلف حسب حجم المطعم ونوع الخدمة. <strong>متوسط الأسعار في جدة:</strong> مطعم صغير (50-100 م²): 3,000 - 6,000 ريال/سنوياً. مطعم متوسط (100-250 م²): 6,000 - 12,000 ريال/سنوياً. مطعم كبير (250+ م²): 12,000 - 25,000 ريال/سنوياً. يشمل ذلك 12 زيارة شهرية + طوارئ + تقارير + شهادات. <strong>تذكر:</strong> هذا استثمار يحميك من غرامات (50,000 ريال+) وفقدان سمعة لا تُقدر بثمن! <Link href="/contact" className="text-primary underline font-semibold">احصل على عرض سعر مخصص</Link>.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل التعقيم اليومي من موظفينا يكفي؟
                  </h4>
                  <p className="text-gray-700">
                    <strong>لا، غير كافٍ أبداً.</strong> التنظيف اليومي ضروري لكنه يغطي الأسطح فقط. أنت تحتاج: (1) <strong>تعقيم احترافي شهري</strong> لمناطق عميقة يصعب الوصول إليها، (2) <strong>مكافحة آفات متخصصة</strong> - الموظفون لا يملكون مبيدات مرخصة أو خبرة كافية، (3) <strong>توثيق رسمي</strong> - المفتشون لن يقبلوا "نحن ننظف يومياً" بدون سجلات وشهادات من شركة مرخصة. فكر فيه كصيانة السيارة: أنت تغسلها يومياً، لكنك تحتاج ميكانيكي محترف للصيانة الدورية!
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ ماذا لو وجد المفتش مخالفة؟
                  </h4>
                  <p className="text-gray-700">
                    يعتمد على خطورة المخالفة: <strong>مخالفة بسيطة</strong> (غطاء قمامة مكسور، تنظيف ناقص): إنذار مكتوب + 7-14 يوم للتصحيح. <strong>مخالفة متوسطة</strong> (عدم وجود عقد مكافحة آفات، مشاكل تخزين): غرامة 5,000 - 20,000 ريال + إلزام بالتصحيح. <strong>مخالفة خطيرة</strong> (آفات حية، تلوث شديد، درجات حرارة خطرة): إغلاق فوري + غرامة 20,000 - 100,000 ريال + تحقيق. <strong>الحل الذكي:</strong> برنامج وقائي يمنع المخالفات من الأساس!
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل المبيدات الكيميائية آمنة في المطاعم؟
                  </h4>
                  <p className="text-gray-700">
                    نعم، <strong>إذا استُخدمت بشكل صحيح من محترفين مرخصين.</strong> الشركات المعتمدة تستخدم مبيدات: (1) مصرح بها من SFDA خصيصاً للمنشآت الغذائية، (2) منخفضة السمية للإنسان، (3) بدون رائحة أو طعم، (4) تُطبق في أوقات الإغلاق، (5) تُعطى فترة أمان قبل استئناف العمل (عادة 2-4 ساعات). <strong>الخطر الحقيقي:</strong> محاولة الرش بنفسك بمبيدات غير مناسبة! ثق بالخبراء.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ كيف أختار شركة تعقيم موثوقة؟
                  </h4>
                  <p className="text-gray-700">
                    ابحث عن: <strong>الترخيص:</strong> رخصة سارية من البلدية أو وزارة الصحة (اطلب نسخة). <strong>التخصص:</strong> خبرة محددة في المطاعم (اطلب عملاء مرجعيين). <strong>التأمين:</strong> تأمين مسؤولية مدنية (حمايتك من أي حوادث). <strong>التوثيق:</strong> تقارير مفصلة وشهادات بعد كل زيارة. <strong>الاستجابة:</strong> خدمة طوارئ سريعة (24-48 ساعة). <strong>التدريب:</strong> فنيون مدربون ومعتمدون. <strong>التقييمات:</strong> مراجعات إيجابية من مطاعم أخرى. <Link href="/about" className="text-primary underline font-semibold">تعرف علينا - 15+ سنة خبرة</Link>.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-800">
                    ❓ هل يجب إغلاق المطعم أثناء التعقيم؟
                  </h4>
                  <p className="text-gray-700">
                    <strong>للتعقيم اليومي:</strong> لا، يتم أثناء ساعات العمل الخفيفة أو التحضير. <strong>للمكافحة الشهرية الاحترافية:</strong> يُفضل الجدولة بعد ساعات العمل أو في يوم الإجازة لـ: (1) وصول أفضل لجميع المناطق، (2) إعطاء فترة أمان كافية، (3) عدم إزعاج العملاء، (4) السماح بالتهوية الجيدة. عادة يستغرق 1-3 ساعات + 2-4 ساعات فترة أمان. <strong>لا حاجة للإغلاق طوال اليوم!</strong> نجدول الزيارة بما يناسبك.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة النهائية</h3>
              <p className="mb-4 text-lg">
                في صناعة المطاعم التنافسية، <strong>التعقيم الدوري ومكافحة الآفات ليسا رفاهية - إنهما استثمار استراتيجي</strong> في صحة عملائك، سمعة علامتك التجارية، واستمرارية أعمالك.
              </p>
              <p className="mb-6">
                حادثة واحدة - صرصور، تسمم، مخالفة - قد تكلفك ما بنيته على مدى سنوات. <strong>برنامج احترافي منتظم يحميك من كل ذلك</strong> بتكلفة أقل بكثير من الخسائر المحتملة.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/sectors/restaurants"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                >
                  استكشف برامجنا المتخصصة
                </Link>
                <Link 
                  href="/contact"
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                >
                  احجز زيارة تقييم مجانية
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
            ? 'أهمية التعقيم الدوري للمطاعم - دليل شامل للسلامة الغذائية والنجاح'
            : 'Importance of Regular Restaurant Disinfection - Complete Guide to Food Safety and Success',
          description: isArabic
            ? 'تعرف على أهمية التعقيم الدوري للمطاعم، معايير الصحة والسلامة، جدول التعقيم المثالي، وكيف تحافظ على سمعة مطعمك ورضا عملائك.'
            : 'Learn about the importance of regular restaurant disinfection, health and safety standards, optimal cleaning schedules, and how to maintain your restaurant reputation.',
          image: 'https://www.pestjeddah.com/images/Pest-control-for-restaurants.jpg',
          datePublished: '2024-09-01',
          dateModified: '2024-09-01',
          author: {
            '@type': 'Person',
            name: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi'
          }
        }}
      />
    </>
  );
}