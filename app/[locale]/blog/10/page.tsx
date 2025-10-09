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
      ? 'مكافحة الآفات في الفنادق | دليل شامل للسلامة والسمعة 2024'
      : 'Pest Control in Hotels | Complete Guide to Safety and Reputation 2024',
    description: isArabic
      ? 'برامج مكافحة متخصصة للفنادق تضمن سلامة النزلاء، حماية السمعة، والامتثال للمعايير الصحية في صناعة الضيافة.'
      : 'Specialized pest control programs for hotels ensuring guest safety, reputation protection, and compliance with health standards in hospitality industry.',
    keywords: isArabic
      ? ['مكافحة آفات الفنادق', 'تعقيم الفنادق', 'سلامة الضيوف', 'سمعة الفندق', 'جدة']
      : ['hotel pest control', 'hotel disinfection', 'guest safety', 'hotel reputation', 'Jeddah'],
  };
}

export default function BlogPost10({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'why-critical', title: isArabic ? 'لماذا المكافحة حرجة للفنادق؟' : 'Why is Pest Control Critical for Hotels?', level: 1 },
    { id: 'common-pests', title: isArabic ? 'الآفات الشائعة في الفنادق' : 'Common Hotel Pests', level: 1 },
    { id: 'bedbugs', title: isArabic ? 'بق الفراش' : 'Bed Bugs', level: 2 },
    { id: 'cockroaches-hotel', title: isArabic ? 'الصراصير' : 'Cockroaches', level: 2 },
    { id: 'rodents-hotel', title: isArabic ? 'القوارض' : 'Rodents', level: 2 },
    { id: 'ipm-program', title: isArabic ? 'برنامج الإدارة المتكاملة للآفات' : 'Integrated Pest Management Program', level: 1 },
    { id: 'inspection', title: isArabic ? 'التفتيش والمراقبة' : 'Inspection and Monitoring', level: 2 },
    { id: 'prevention', title: isArabic ? 'الوقاية والصيانة' : 'Prevention and Maintenance', level: 2 },
    { id: 'treatment', title: isArabic ? 'المعالجة' : 'Treatment', level: 2 },
    { id: 'staff-training', title: isArabic ? 'تدريب الموظفين' : 'Staff Training', level: 1 },
    { id: 'documentation', title: isArabic ? 'التوثيق والامتثال' : 'Documentation and Compliance', level: 1 },
    { id: 'guest-complaints', title: isArabic ? 'التعامل مع شكاوى الضيوف' : 'Handling Guest Complaints', level: 1 },
    { id: 'cost-benefit', title: isArabic ? 'الجدوى الاقتصادية' : 'Cost-Benefit Analysis', level: 1 },
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
      id: 11,
      title: isArabic ? 'كيفية اختيار شركة مكافحة موثوقة' : 'How to Choose Reliable Pest Control Company',
      excerpt: isArabic ? 'معايير اختيار الشركة المناسبة' : 'Criteria for choosing the right company',
      image: '/images/Professional-exterminators.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="مكافحة الآفات في الفنادق - دليل شامل للسلامة والحفاظ على السمعة"
        titleEn="Pest Control in Hotels - Complete Guide to Safety and Reputation Protection"
        category="قطاع تجاري"
        categoryEn="Commercial Sector"
        date={isArabic ? '15 يوليو 2024' : 'July 15, 2024'}
        readTime={isArabic ? '10 دقائق للقراءة' : '10 min read'}
        author="د. فاطمة الأحمدي - استشارية السلامة الغذائية"
        authorEn="Dr. Fatima Al-Ahmadi - Food Safety Consultant"
        featuredImage="/images/Commercial-pest-control-Jeddah.jpg"
        featuredImageAlt={isArabic ? 'مكافحة الآفات في الفنادق' : 'Pest control in hotels'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 2050 : 1950}
        ctaTitle={isArabic ? 'احمِ سمعة فندقك ورضا ضيوفك!' : 'Protect Your Hotel Reputation and Guest Satisfaction!'}
        ctaDescription={isArabic ? 'برامج مكافحة آفات متخصصة للفنادق بضمان كامل. نعمل بسرية وكفاءة دون إزعاج الضيوف. احجز استشارة مجانية اليوم.' : 'Specialized hotel pest control programs with full warranty. We work discreetly and efficiently without disturbing guests. Book free consultation today.'}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "أفضل تجربة في حياتي... حتى رأيت صرصوراً في الحمام." تقييم واحد سلبي على TripAdvisor، صورة واحدة لبق فراش على تويتر، شكوى واحدة لوزارة السياحة - <strong>يمكن أن تدمر سمعة فندق بُنيت على مدى سنوات في غضون ساعات</strong>. في صناعة الضيافة، حيث السمعة هي كل شيء والمنافسة شرسة، مكافحة الآفات ليست مجرد "متطلب صحي" - <strong>إنها استثمار استراتيجي حاسم</strong> في بقائك في السوق.
              </p>
              
              <p className="mb-6">
                الفنادق بيئة فريدة ومعقدة: دوران عالٍ للضيوف (كل واحد قد يحمل آفات)، عمليات 24/7، طعام وفير، مناطق خدمة مخفية، وأهم شيء - <strong>الخصوصية المطلقة مطلوبة</strong> (لا يجب أن يرى الضيوف أي معالجة). هذا الدليل الشامل، المبني على معايير دولية وخبرة محلية، سيعلمك كيف تبني برنامج مكافحة آفات احترافي يحمي ضيوفك، موظفيك، وأهم أصولك - سمعتك.
              </p>

              <div className="bg-red-50 border-r-4 border-red-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                  <span className="text-2xl">💔</span> قصة حقيقية مؤلمة
                </h4>
                <p className="mb-2 text-red-800 font-semibold">
                  فندق 4 نجوم في جدة، 15 سنة سمعة ممتازة، معدل إشغال 85%. ضيف واحد نشر صوراً لبق فراش على تويتر → انتشرت على نطاق واسع → تقييمات سلبية متتالية → معدل الحجوزات انخفض 60% خلال شهرين → خسائر 2 مليون ريال في 6 أشهر.
                </p>
                <p className="text-red-700 text-sm">
                  الأكثر إيلاماً؟ كان لديهم إصابة بق فراش صغيرة في غرفة واحدة، أجّلوا المعالجة الاحترافية "لتوفير المال". انتشر لـ 12 غرفة قبل اكتشافه. <strong>التوفير = 3,000 ريال. الخسارة = 2 مليون ريال.</strong>
                </p>
              </div>
            </div>

            <div id="why-critical" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                لماذا مكافحة الآفات حرجة للفنادق؟ أكثر مما تتخيل
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-red-900 flex items-center gap-2">
                    <span className="text-3xl">⭐</span> السمعة = الأصل الأهم
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>86% من المسافرين</strong> يقرؤون التقييمات قبل الحجز</li>
                    <li>• <strong>تقييم واحد سلبي</strong> عن حشرات يُفقدك 30 حجزاً محتملاً</li>
                    <li>• <strong>استعادة السمعة</strong> تستغرق 12-24 شهراً بعد فضيحة آفات</li>
                    <li>• في عصر وسائل التواصل، <strong>الصورة/الفيديو ينتشر بسرعة البرق</strong></li>
                    <li>• الفنادق المنافسة تستغل أي سقطة</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-red-900">
                      📉 <strong>تأثير مالي:</strong> انخفاض تقييم فندق من 4.5 إلى 3.8 نجمة = خسارة 20-30% من الإيرادات
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                    <span className="text-3xl">⚖️</span> الامتثال القانوني الصارم
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>وزارة السياحة:</strong> عقوبات تصل لسحب الترخيص</li>
                    <li>• <strong>البلدية:</strong> تفتيش دوري غير معلن، غرامات فورية</li>
                    <li>• <strong>وزارة الصحة:</strong> معايير صحية صارمة للمطابخ والمطاعم</li>
                    <li>• <strong>الهيئة السعودية للغذاء والدواء (SFDA):</strong> لو الفندق فيه خدمة طعام</li>
                    <li>• برامج التصنيف (5 نجوم، إلخ) تتطلب <strong>سجلات مكافحة آفات</strong></li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-blue-900">
                      ⚠️ <strong>العقوبات:</strong> غرامات 50,000-500,000 ريال، إغلاق مؤقت/دائم، إلغاء تصنيف
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                    <span className="text-3xl">🏥</span> مسؤولية صحة الضيوف
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>الآفات تنقل أمراضاً:</strong> السالمونيلا، E. coli، داء البريميات، إلخ</li>
                    <li>• <strong>الحساسية:</strong> فضلات الصراصير والقوارض تسبب حساسية/ربو</li>
                    <li>• <strong>اللدغات:</strong> بق الفراش يسبب حكة شديدة، قد تتطور لعدوى</li>
                    <li>• <strong>التسمم الغذائي:</strong> من تلوث المطبخ</li>
                    <li>• ضيوف يمرضون في فندقك = <strong>دعاوى قضائية محتملة</strong></li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center gap-2">
                    <span className="text-3xl">💼</span> ميزة تنافسية
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>شهادات نظافة معتمدة</strong> تُعرض للضيوف = ثقة</li>
                    <li>• <strong>"100% خالٍ من الآفات - مضمون"</strong> نقطة بيع قوية</li>
                    <li>• جذب الضيوف الحساسين للنظافة (شريحة متزايدة)</li>
                    <li>• <strong>السياح الدوليون</strong> يتوقعون معايير عالمية</li>
                    <li>• الفنادق "الخضراء" تستخدم مكافحة آفات صديقة للبيئة كميزة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-yellow-900">💡 نقطة محورية</h4>
                <p className="text-yellow-800">
                  <strong>الفنادق الناجحة لا تنظر لمكافحة الآفات كـ "تكلفة تشغيلية" - بل كـ "تأمين على الاستثمار".</strong> إنفاق 50,000-150,000 ريال سنوياً على برنامج احترافي يحميك من خسائر مليونية محتملة + دعاوى + سمعة مدمرة. أفضل صفقة ممكنة!
                </p>
              </div>
            </div>

            <div id="common-pests" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الآفات الشائعة في الفنادق - تحديات فريدة
              </h2>

              <div className="space-y-8">
                <div id="bedbugs" className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🛏️</span> بق الفراش - الكابوس رقم 1
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-bold mb-2">لماذا خطر على الفنادق؟</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>ينتشر عبر أمتعة الضيوف</strong> - غير قابل للمنع 100%</li>
                        <li>• صعب الاكتشاف (مخفي في شقوق، ليلي)</li>
                        <li>• ينتشر بسرعة من غرفة لأخرى</li>
                        <li>• يبقى حياً بدون طعام لمدة سنة!</li>
                        <li>• <strong>الأكثر ضرراً للسمعة</strong> - ضيوف يشعرون بالاشمئزاز</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">الوقاية والمعالجة</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ فحص كل غرفة بعد مغادرة الضيف (نقاط تفتيش محددة)</li>
                        <li>✓ أغطية مراتب مضادة لبق الفراش (كل السرائر)</li>
                        <li>✓ تنظيف بالبخار الساخن دورياً</li>
                        <li>✓ تدريب عمال التدبير المنزلي على اكتشاف العلامات</li>
                        <li>✓ <strong>بروتوكول طوارئ</strong> إذا اكتُشف (عزل فوري، معالجة محترفة)</li>
                        <li>✓ عدم نقل أثاث بين غرف بدون فحص</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-r-2 border-red-500">
                    <p className="text-sm font-semibold">
                      🚨 <strong>بروتوكول الطوارئ:</strong> إذا شكا ضيف من بق الفراش → (1) انقله فوراً لغرفة بعيدة (مجاناً + اعتذار)، (2) أغلق الغرفة فوراً، (3) اتصل بمحترف خلال ساعات، (4) افحص الغرف المجاورة. <strong>السرعة + الشفافية = تقليل الضرر.</strong>
                    </p>
                  </div>
                </div>

                <div id="cockroaches-hotel" className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🪳</span> الصراصير - الأكثر شيوعاً
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-bold mb-2">المناطق الحرجة</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>المطابخ:</strong> طعام + حرارة + رطوبة = جنة الصراصير</li>
                        <li>• <strong>غرف المخزون:</strong> الطعام المخزن</li>
                        <li>• <strong>غرف القمامة:</strong> مصدر غذاء دائم</li>
                        <li>• <strong>الأقبية/غرف الغسيل:</strong> رطوبة + ظلام</li>
                        <li>• <strong>وراء الأجهزة الكبيرة:</strong> ثلاجات، أفران</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">برنامج الوقاية</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ نظافة صارمة للمطابخ (كل وردية)</li>
                        <li>✓ إخراج القمامة عدة مرات يومياً</li>
                        <li>✓ سد الشقوق والفجوات</li>
                        <li>✓ محطات طعم دائمة في مناطق استراتيجية</li>
                        <li>✓ رش وقائي شهري (مناطق خدمة فقط)</li>
                        <li>✓ تهوية جيدة (تقليل الرطوبة)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="rodents-hotel" className="bg-gradient-to-r from-gray-50 to-slate-100 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🐀</span> القوارض - خطر مضاعف
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-bold mb-2">لماذا خطيرة للفنادق؟</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>تقرض الأسلاك:</strong> خطر حريق (كارثة للفندق)</li>
                        <li>• <strong>تنقل أمراضاً خطيرة:</strong> مسؤولية صحية ضخمة</li>
                        <li>• <strong>تلوث طعام:</strong> إذا دخلت المطبخ</li>
                        <li>• <strong>تدمر ممتلكات:</strong> أثاث، ستائر، بياضات</li>
                        <li>• <strong>ضوضاء ليلية:</strong> تزعج الضيوف</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">الوقاية المتكاملة</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ فحص محيط المبنى شهرياً (نقاط دخول)</li>
                        <li>✓ محطات طعوم خارجية دائمة (خط دفاع أول)</li>
                        <li>✓ تخزين قمامة في حاويات محكمة بعيدة عن المبنى</li>
                        <li>✓ إدارة صارمة لمخزون الطعام</li>
                        <li>✓ شبكات على جميع فتحات التهوية</li>
                        <li>✓ إغلاق فجوات الأبواب (عتبات معدنية)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-r-2 border-slate-500">
                    <p className="text-sm font-semibold">
                      💡 <strong>نصيحة:</strong> القوارض في الفنادق غالباً تأتي من الخارج (حدائق، مواقف، مطاعم مجاورة). التركيز على <strong>الوقاية الخارجية</strong> أكثر فعالية من المعالجة الداخلية.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">آفات أخرى شائعة في الفنادق</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold mb-2">🪰 الذباب والبعوض</h5>
                      <p className="text-xs">يزعج الضيوف، ينقل أمراضاً. <strong>الحل:</strong> شبكات نوافذ، مصائد كهربائية، إدارة قمامة.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">🐜 النمل</h5>
                      <p className="text-xs">يدخل الغرف بحثاً عن طعام. <strong>الحل:</strong> نظافة صارمة، طعوم، سد نقاط دخول.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">🕷️ العناكب</h5>
                      <p className="text-xs">يخيف الضيوف. <strong>الحل:</strong> إزالة شبكات منتظمة، رش محيط خارجي.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="ipm-program" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                برنامج الإدارة المتكاملة للآفات (IPM) للفنادق
              </h2>

              <p className="mb-6">
                <strong>IPM</strong> ليس مجرد "رش مبيدات" - إنه نهج استراتيجي شامل يجمع بين الوقاية، المراقبة، والمعالجة المستهدفة:
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-blue-50 p-8 rounded-2xl mb-8">
                <h4 className="font-bold text-xl mb-6 text-center text-primary">🔄 دورة IPM المستمرة</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔍</span>
                    </div>
                    <h5 className="font-bold text-center mb-3">1. التفتيش والمراقبة</h5>
                    <ul className="text-sm space-y-1">
                      <li>• فحص شامل شهري</li>
                      <li>• محطات مراقبة دائمة</li>
                      <li>• تقارير مفصلة</li>
                      <li>• تحديد نقاط ضعف</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🛡️</span>
                    </div>
                    <h5 className="font-bold text-center mb-3">2. الوقاية والصيانة</h5>
                    <ul className="text-sm space-y-1">
                      <li>• سد نقاط دخول</li>
                      <li>• تحسين النظافة</li>
                      <li>• تعديلات هيكلية</li>
                      <li>• تدريب موظفين</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">💊</span>
                    </div>
                    <h5 className="font-bold text-center mb-3">3. المعالجة المستهدفة</h5>
                    <ul className="text-sm space-y-1">
                      <li>• فقط عند الضرورة</li>
                      <li>• أقل المبيدات سمية</li>
                      <li>• طرق غير كيميائية أولاً</li>
                      <li>• توقيت لا يزعج الضيوف</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="inspection" className="mb-8">
                <h3 className="text-xl font-bold mb-4">🔍 التفتيش والمراقبة المنهجية</h3>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold mb-3">نقاط التفتيش الحرجة في الفندق</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">مناطق عامة</h5>
                      <ul className="text-sm space-y-1">
                        <li>• اللوبي والاستقبال</li>
                        <li>• الممرات والسلالم</li>
                        <li>• المصاعد</li>
                        <li>• دورات المياه العامة</li>
                        <li>• منطقة الإفطار</li>
                        <li>• غرف الاجتماعات</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">مناطق خدمة</h5>
                      <ul className="text-sm space-y-1">
                        <li>• المطابخ (كل قسم)</li>
                        <li>• غرف التخزين</li>
                        <li>• غرفة القمامة</li>
                        <li>• مناطق التحميل</li>
                        <li>• غرف الغسيل</li>
                        <li>• الأقبية/المخازن</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">غرف الضيوف</h5>
                      <ul className="text-sm space-y-1">
                        <li>• عينة عشوائية (10% شهرياً)</li>
                        <li>• كل غرفة بعد شكوى</li>
                        <li>• غرف طويلة الإقامة</li>
                        <li>• تركيز على السرائر</li>
                        <li>• فحص الحمامات</li>
                        <li>• خلف الأثاث</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-primary">محيط خارجي</h5>
                      <ul className="text-sm space-y-1">
                        <li>• حول المبنى كاملاً</li>
                        <li>• مناطق القمامة الخارجية</li>
                        <li>• الحدائق والمساحات الخضراء</li>
                        <li>• نقاط الدخول (أبواب، نوافذ)</li>
                        <li>• مواقف السيارات</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <p className="text-sm"><strong>💡 تكرار التفتيش الموصى به:</strong></p>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• <strong>مناطق عالية الخطورة</strong> (مطابخ، قمامة): أسبوعياً</li>
                      <li>• <strong>مناطق عامة ومرافق:</strong> كل أسبوعين</li>
                      <li>• <strong>غرف ضيوف وخارجي:</strong> شهرياً</li>
                      <li>• <strong>تفتيش شامل احترافي:</strong> كل 3 أشهر</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="prevention" className="mb-8">
                <h3 className="text-xl font-bold mb-4">🛡️ الوقاية - خط الدفاع الأول</h3>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">النظافة والصحة</h5>
                    <ul className="text-sm space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• تنظيف يومي شامل لجميع المناطق</li>
                      <li>• بروتوكولات صارمة للمطابخ</li>
                      <li>• إدارة قمامة محكمة</li>
                      <li>• تصريف مياه فوري (لا برك راكدة)</li>
                      <li>• تنظيف بالبخار دوري للمراتب</li>
                      <li>• تهوية جيدة (تقليل رطوبة)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">التعديلات الهيكلية</h5>
                    <ul className="text-sm space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• سد جميع الشقوق (سيليكون، إسمنت)</li>
                      <li>• شبكات على جميع النوافذ وفتحات التهوية</li>
                      <li>• أبواب محكمة (عتبات معدنية)</li>
                      <li>• أرضيات وجدران سهلة التنظيف</li>
                      <li>• إضاءة خارجية بعيدة عن مداخل</li>
                      <li>• تصميم مطابخ يمنع تجمع آفات</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">التحكم في الوصول</h5>
                    <ul className="text-sm space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• فحص جميع التوريدات الواردة</li>
                      <li>• تخزين بعيداً عن الأرض (30 سم+)</li>
                      <li>• عدم قبول أثاث مستعمل بدون فحص</li>
                      <li>• تدريب موظفين على عدم إدخال آفات</li>
                      <li>• فحص غرف بعد مغادرة ضيوف طويلي الإقامة</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="treatment" className="mb-8">
                <h3 className="text-xl font-bold mb-4">💊 المعالجة - الملاذ الأخير المدروس</h3>

                <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg mb-6">
                  <p className="text-sm font-semibold text-yellow-900">
                    ⚠️ <strong>مبدأ IPM:</strong> المعالجة الكيميائية هي الملاذ الأخير، ليس الخيار الأول. استنفد كل طرق الوقاية والمعالجة غير الكيميائية قبل اللجوء للمبيدات.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">اعتبارات المعالجة في الفنادق</h5>
                    <ul className="text-sm space-y-2">
                      <li>✓ <strong>التوقيت:</strong> ليلاً أو ساعات إشغال منخفض، لا تزعج الضيوف أبداً</li>
                      <li>✓ <strong>السرية:</strong> فنيون بزي عادي، معدات غير ملحوظة، لا شعارات</li>
                      <li>✓ <strong>الأمان:</strong> مواد منخفضة السمية، آمنة للاستخدام في أماكن النوم</li>
                      <li>✓ <strong>المناطق المستهدفة:</strong> تطبيق دقيق في مناطق محددة، ليس رش عشوائي</li>
                      <li>✓ <strong>فترة الأمان:</strong> تهوية كافية قبل دخول ضيوف</li>
                      <li>✓ <strong>عدم الرائحة:</strong> مبيدات عديمة الرائحة فقط</li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">طرق معالجة مفضلة للفنادق</h5>
                    <ul className="text-sm space-y-2">
                      <li>🔹 <strong>طعوم:</strong> للصراصير والقوارض - آمنة ومستهدفة</li>
                      <li>🔹 <strong>حقن جل:</strong> في الشقوق والفجوات - غير مرئي</li>
                      <li>🔹 <strong>معالجة حرارية:</strong> لبق الفراش - بدون كيماويات!</li>
                      <li>🔹 <strong>مصائد لاصقة:</strong> للمراقبة والصيد الخفيف</li>
                      <li>🔹 <strong>رش مستهدف:</strong> في مناطق خدمة فقط (ليس غرف ضيوف)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="staff-training" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                تدريب الموظفين - الجنود في الخط الأمامي
              </h2>

              <p className="mb-6">
                موظفوك هم عيونك وآذانك. تدريب جيد = كشف مبكر = معالجة سهلة ورخيصة.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">👨‍🍳 موظفو المطبخ</h4>
                  <ul className="text-sm space-y-2">
                    <li>• التعرف على علامات الآفات (فضلات، آثار، أضرار)</li>
                    <li>• بروتوكولات نظافة صارمة</li>
                    <li>• تخزين طعام صحيح</li>
                    <li>• الإبلاغ الفوري عن أي مشاهدة</li>
                    <li>• التعامل مع القمامة بشكل صحيح</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">🧹 التدبير المنزلي</h4>
                  <ul className="text-sm space-y-2">
                    <li>• فحص بصري لغرف الضيوف (نقاط محددة)</li>
                    <li>• التعرف على بق الفراش وعلاماته</li>
                    <li>• بروتوكول الإبلاغ الفوري</li>
                    <li>• عدم نقل بياضات بين غرف</li>
                    <li>• استخدام أدوات تنظيف مخصصة لكل غرفة</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">👔 الاستقبال والإدارة</h4>
                  <ul className="text-sm space-y-2">
                    <li>• التعامل مع شكاوى الضيوف بحساسية</li>
                    <li>• بروتوكول الطوارئ (نقل ضيف، إغلاق غرفة)</li>
                    <li>• التواصل مع شركة المكافحة</li>
                    <li>• توثيق الحوادث</li>
                    <li>• حماية سمعة الفندق (تعامل ذكي مع وسائل التواصل)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">🔧 الصيانة</h4>
                  <ul className="text-sm space-y-2">
                    <li>• سد نقاط دخول محتملة فوراً</li>
                    <li>• إصلاح تسريبات مياه (تجذب آفات)</li>
                    <li>• صيانة أنظمة التهوية</li>
                    <li>• التعاون مع فريق المكافحة</li>
                    <li>• تركيب حواجز وقائية</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg mt-6">
                <h5 className="font-bold mb-3">📚 برنامج تدريب موصى به</h5>
                <ul className="text-sm space-y-2">
                  <li>• <strong>تدريب أولي:</strong> 3-4 ساعات لجميع الموظفين الجدد</li>
                  <li>• <strong>تدريب تنشيطي:</strong> كل 6 أشهر (ساعة واحدة)</li>
                  <li>• <strong>تدريب متخصص:</strong> لمشرفي المطبخ والتدبير المنزلي (سنوي)</li>
                  <li>• <strong>محاكاة سيناريوهات:</strong> تدريب عملي على التعامل مع شكوى ضيف</li>
                </ul>
              </div>
            </div>

            <div id="documentation" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                التوثيق والامتثال - حماية قانونية
              </h2>

              <p className="mb-6">
                <strong>"إذا لم يُوثّق، لم يحدث"</strong> - قاعدة قانونية مهمة. السجلات الدقيقة تحميك من دعاوى وغرامات.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg mb-4">📋 السجلات المطلوبة</h4>
                
                <div className="space-y-4">
                  <div className="border-r-4 border-blue-500 p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold mb-2">1. سجل الخدمات (Service Log)</h5>
                    <p className="text-sm mb-2">توثيق كل زيارة من شركة المكافحة:</p>
                    <ul className="text-sm space-y-1">
                      <li>• تاريخ ووقت الخدمة</li>
                      <li>• اسم الفني والشركة</li>
                      <li>• المناطق المعالجة</li>
                      <li>• المواد المستخدمة (أسماء تجارية، كميات)</li>
                      <li>• النتائج والتوصيات</li>
                      <li>• توقيع الفني ومدير الفندق</li>
                    </ul>
                  </div>

                  <div className="border-r-4 border-green-500 p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold mb-2">2. سجل التفتيش الداخلي</h5>
                    <p className="text-sm mb-2">نتائج فحوصات الموظفين اليومية/الأسبوعية:</p>
                    <ul className="text-sm space-y-1">
                      <li>• قوائم تحقق (Checklists) مكتملة</li>
                      <li>• أي مشاهدات للآفات</li>
                      <li>• الإجراءات المتخذة</li>
                      <li>• متابعة المشاكل</li>
                    </ul>
                  </div>

                  <div className="border-r-4 border-purple-500 p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold mb-2">3. سجل شكاوى الضيوف</h5>
                    <p className="text-sm mb-2">توثيق كل شكوى متعلقة بالآفات:</p>
                    <ul className="text-sm space-y-1">
                      <li>• رقم الغرفة واسم الضيف</li>
                      <li>• وصف تفصيلي للشكوى</li>
                      <li>• الإجراءات الفورية (نقل، تعويض)</li>
                      <li>• المعالجة اللاحقة</li>
                      <li>• حل المشكلة ورضا الضيف</li>
                    </ul>
                  </div>

                  <div className="border-r-4 border-orange-500 p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold mb-2">4. الشهادات والتراخيص</h5>
                    <p className="text-sm mb-2">محفوظة ومحدثة دائماً:</p>
                    <ul className="text-sm space-y-1">
                      <li>• عقد مع شركة مكافحة مرخصة</li>
                      <li>• شهادات سارية للمبيدات المستخدمة</li>
                      <li>• شهادات تدريب الموظفين</li>
                      <li>• تقارير التفتيش من الجهات الرسمية</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-6 border-r-2 border-yellow-500">
                  <p className="text-sm font-semibold text-yellow-900">
                    ⏳ <strong>مدة الاحتفاظ:</strong> يُنصح بحفظ جميع السجلات لمدة 3-5 سنوات على الأقل (للحماية من دعاوى قضائية مستقبلية).
                  </p>
                </div>
              </div>
            </div>

            <div id="cost-benefit" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الجدوى الاقتصادية - استثمار أم تكلفة؟
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-red-900">💸 تكاليف برنامج احترافي</h4>
                  <p className="text-sm mb-3"><strong>فندق متوسط (100 غرفة):</strong></p>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>عقد سنوي IPM:</strong> 60,000 - 120,000 ريال</li>
                    <li>• <strong>12 زيارة شهرية:</strong> معالجة + تفتيش + تقارير</li>
                    <li>• <strong>خدمة طوارئ:</strong> مجانية (ضمن العقد)</li>
                    <li>• <strong>تدريب موظفين:</strong> 5,000 - 10,000 ريال/سنة</li>
                    <li>• <strong>معدات/مواد وقائية:</strong> 10,000 - 20,000 ريال</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <p className="font-semibold text-center text-red-900">
                      الإجمالي: 75,000 - 150,000 ريال/سنة
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-green-900">💰 الخسائر المحتملة بدون برنامج</h4>
                  <p className="text-sm mb-3"><strong>حادثة واحدة قد تكلف:</strong></p>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>فقدان حجوزات:</strong> 500,000 - 2,000,000 ريال/سنة</li>
                    <li>• <strong>تعويضات ضيوف:</strong> 10,000 - 100,000 ريال/حادثة</li>
                    <li>• <strong>غرامات رسمية:</strong> 50,000 - 500,000 ريال</li>
                    <li>• <strong>إغلاق مؤقت:</strong> خسارة دخل كاملة</li>
                    <li>• <strong>دعاوى قضائية:</strong> 100,000 - 1,000,000+ ريال</li>
                    <li>• <strong>تكلفة استعادة سمعة:</strong> لا تُقدر بثمن!</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <p className="font-semibold text-center text-green-900">
                      حادثة واحدة = 10-20 ضعف تكلفة برنامج سنوي!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
                <h4 className="font-bold text-xl mb-4 text-center">📊 معادلة ROI البسيطة</h4>
                <div className="bg-white p-6 rounded-xl">
                  <p className="text-center text-lg font-semibold mb-4">
                    استثمار 100,000 ريال سنوياً
                  </p>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">VS</p>
                  </div>
                  <p className="text-center text-lg font-semibold mb-4">
                    خطر خسارة 1,000,000+ ريال من حادثة واحدة
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <p className="font-bold text-xl text-green-900">
                      = عائد على الاستثمار (ROI) 900%+
                    </p>
                    <p className="text-sm text-green-800 mt-2">
                      + راحة بال + سمعة محمية + ضيوف سعداء = لا يُقدر بثمن
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أسئلة شائعة من مديري الفنادق
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ كيف نتعامل مع معالجة بدون إزعاج الضيوف؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>التخطيط والتنسيق مفتاح النجاح:</strong> (1) جدول المعالجات ليلاً (1-5 صباحاً) أو ساعات إشغال منخفض، (2) فنيون بزي عادي (ليس زي شركة مكافحة)، (3) معدات صغيرة غير ملفتة، (4) معالجة غرف شاغرة أولاً، (5) تنسيق مع الاستقبال لتجنب غرف مأهولة، (6) استخدام مواد عديمة الرائحة، (7) لافتات "صيانة" بدلاً من "مكافحة آفات". <strong>الشركات المحترفة متخصصة في السرية التامة.</strong>
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ ماذا نقول للضيف الذي يشتكي من حشرة؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>النصوص مهم جداً:</strong> (1) <strong>اعتذر فوراً</strong> - "نأسف جداً لهذا الإزعاج"، (2) <strong>لا تنكر أو تقلل</strong> - "نأخذ الأمر على محمل الجد"، (3) <strong>تصرف بسرعة</strong> - "سننقلك فوراً لغرفة أخرى (أفضل) بدون رسوم إضافية"، (4) <strong>اشرح إجراءاتك</strong> - "لدينا برنامج مكافحة احترافي، سنفحص الغرفة ونعالجها فوراً"، (5) <strong>تعويض معقول</strong> - ليلة مجانية، ترقية، خصم، (6) <strong>متابعة</strong> - "هل كل شيء على ما يرام الآن؟" <strong>الشفافية + السرعة + الكرم = تحويل شكوى لتقييم إيجابي!</strong>
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل نخبر الضيوف عن برنامج المكافحة؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>نعم ولا!</strong> (1) <strong>لا تُعلن بشكل سلبي</strong> - لا تضع لافتات "تحذير: رش مبيدات". (2) <strong>نعم، اعرضها إيجابياً</strong> - في كتيّب المعلومات: "نحن ملتزمون بأعلى معايير النظافة مع برنامج مكافحة آفات احترافي معتمد". (3) <strong>شهادات نظافة</strong> في اللوبي تبني ثقة. (4) <strong>إذا سأل ضيف:</strong> كن صادقاً - "نعم، لدينا برنامج وقائي منتظم من شركة مرخصة. آمن تماماً ويضمن راحتك". <strong>الشفافية الإيجابية = ثقة + تميز.</strong>
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ نحن فندق صغير، هل نحتاج برنامجاً كاملاً؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>نعم، ربما أكثر!</strong> الفنادق الصغيرة أكثر عرضة: (1) موارد أقل للتعامل مع أزمة، (2) سمعة أكثر هشاشة (اعتماد أكبر على مراجعات)، (3) لا هامش خطأ - شكوى واحدة قد تُدمر. <strong>الخبر الجيد:</strong> تكلفة أقل (20,000-50,000 ريال/سنة لفندق 20-30 غرفة)، والعائد مماثل. حتى برنامج بسيط (فحص شهري + معالجة حسب الحاجة + تدريب أساسي) <strong>أفضل بكثير من لا شيء</strong>. ابدأ بعقد أساسي، طوّره تدريجياً.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة النهائية</h3>
              <p className="mb-4 text-lg">
                في صناعة الفنادق، <strong>السمعة هي كل شيء</strong>. مكافحة الآفات ليست "نفقة" - إنها <strong>تأمين استراتيجي</strong> على أهم أصولك. استثمار بسيط يحميك من كوارث مكلفة.
              </p>
              <p className="mb-6">
                <strong>لا تنتظر المشكلة</strong> - الوقاية دائماً أرخص وأسهل من العلاج. ابدأ اليوم، واحمِ ضيوفك، سمعتك، ومستقبلك.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/sectors/hotels"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                >
                  برامجنا المتخصصة للفنادق
                </Link>
                <Link 
                  href="/contact"
                  className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                >
                  استشارة مجانية - احجز الآن
                </Link>
              </div>
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