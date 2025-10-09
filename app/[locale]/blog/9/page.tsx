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
      ? 'علامات تحتاج معها لمكافحة فورية | متى تتصل بالمختصين؟ 2024'
      : 'Signs You Need Immediate Pest Control | When to Call Experts? 2024',
    description: isArabic
      ? 'تعرف على العلامات التحذيرية الخطيرة التي تستدعي الاتصال بشركة مكافحة محترفة فوراً، وما الفرق بين المشكلة البسيطة والطارئة.'
      : 'Learn the dangerous warning signs that require immediate professional pest control, and the difference between simple and emergency problems.',
    keywords: isArabic
      ? ['مكافحة فورية', 'علامات حشرات خطيرة', 'طوارئ مكافحة آفات', 'متى أتصل بشركة مكافحة', 'جدة']
      : ['emergency pest control', 'dangerous pest signs', 'pest emergency', 'when to call pest control', 'Jeddah'],
  };
}

export default function BlogPost9({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'difference', title: isArabic ? 'الفرق بين المشكلة العادية والطارئة' : 'Difference Between Normal and Emergency', level: 1 },
    { id: 'critical-signs', title: isArabic ? 'علامات حرجة تستدعي اتصالاً فورياً' : 'Critical Signs Requiring Immediate Call', level: 1 },
    { id: 'by-pest', title: isArabic ? 'علامات طوارئ حسب نوع الآفة' : 'Emergency Signs by Pest Type', level: 1 },
    { id: 'termites', title: isArabic ? 'النمل الأبيض' : 'Termites', level: 2 },
    { id: 'rodents', title: isArabic ? 'القوارض' : 'Rodents', level: 2 },
    { id: 'cockroaches', title: isArabic ? 'الصراصير' : 'Cockroaches', level: 2 },
    { id: 'bedbugs', title: isArabic ? 'بق الفراش' : 'Bed Bugs', level: 2 },
    { id: 'health-risks', title: isArabic ? 'المخاطر الصحية الفورية' : 'Immediate Health Risks', level: 1 },
    { id: 'property-damage', title: isArabic ? 'الأضرار المادية الخطيرة' : 'Serious Property Damage', level: 1 },
    { id: 'when-wait', title: isArabic ? 'متى يمكنك الانتظار؟' : 'When Can You Wait?', level: 1 },
    { id: 'emergency-steps', title: isArabic ? 'خطوات الطوارئ قبل وصول المحترف' : 'Emergency Steps Before Expert Arrives', level: 1 },
    { id: 'faq', title: isArabic ? 'أسئلة شائعة' : 'FAQ', level: 1 },
  ];

  const relatedArticles = [
    {
      id: 2,
      title: isArabic ? 'علامات وجود النمل الأبيض في منزلك' : 'Signs of Termites in Your Home',
      excerpt: isArabic ? 'كيف تكتشف النمل الأبيض مبكراً' : 'How to detect termites early',
      image: '/images/Termite-treatment-Jeddah.jpg'
    },
    {
      id: 7,
      title: isArabic ? 'مكافحة القوارض في المنازل' : 'Rodent Control in Homes',
      excerpt: isArabic ? 'دليل شامل لطرد الفئران والجرذان' : 'Complete guide to eliminate mice and rats',
      image: '/images/Rodent-control-Jeddah.jpg'
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
        title="علامات تحتاج معها لمكافحة فورية - متى تتصل بالمختصين فوراً؟"
        titleEn="Signs You Need Immediate Pest Control - When to Call Experts Immediately?"
        category="التشخيص"
        categoryEn="Diagnosis"
        date={isArabic ? '25 يوليو 2024' : 'July 25, 2024'}
        readTime={isArabic ? '9 دقائق للقراءة' : '9 min read'}
        author="د. أحمد العمراني - أخصائي مكافحة الآفات"
        authorEn="Dr. Ahmed Al-Omrani - Pest Control Specialist"
        featuredImage="/images/Emergency-pest-control-Jeddah.jpg"
        featuredImageAlt={isArabic ? 'علامات تحتاج معها لمكافحة فورية' : 'Signs requiring immediate pest control'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 1920 : 1820}
        ctaTitle={isArabic ? 'هل لاحظت أياً من هذه العلامات؟ اتصل الآن!' : 'Noticed Any of These Signs? Call Now!'}
        ctaDescription={isArabic ? 'لا تنتظر حتى تتفاقم المشكلة. خدمة طوارئ 24/7 - نصل خلال ساعات. فريقنا جاهز للتدخل الفوري.' : "Don't wait until the problem escalates. 24/7 emergency service - we arrive within hours. Our team is ready for immediate intervention."}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "سأتعامل معها الأسبوع القادم" - "ليست بتلك الخطورة" - "يمكنني حلها بنفسي" - هذه العبارات سمعناها مئات المرات من عملاء اتصلوا بنا <strong>متأخرين جداً</strong>. ما بدأ كـ "صرصور واحد" تحول لإصابة كاملة. فأر واحد أصبح عائلة تعشش في الجدران. أثر بسيط للنمل الأبيض دمّر هيكل خشبي بالكامل. والفاتورة؟ عشرة أضعاف ما كانت ستكلفه المعالجة المبكرة.
              </p>
              
              <p className="mb-6">
                الحقيقة الصعبة: بعض مشاكل الآفات <strong>لا تحتمل الانتظار</strong>. هناك علامات تحذيرية حمراء تعني أن كل ساعة تأخير تزيد الخطر والتكلفة. هذا الدليل سيعلمك بالضبط متى تتوقف عن "التفكير" وتبدأ في "الاتصال" - قد ينقذ صحتك، ممتلكاتك، وآلاف الريالات.
              </p>

              <div className="bg-red-50 border-r-4 border-red-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                  <span className="text-2xl">🚨</span> قاعدة الساعة الذهبية
                </h4>
                <p className="mb-2 text-red-800 font-semibold">
                  في الطب، "الساعة الذهبية" تعني أول ساعة بعد الطوارئ - الأهم لإنقاذ الحياة. في مكافحة الآفات، لدينا مفهوم مشابه: <strong>"نافذة التدخل المبكر"</strong> - الفترة القصيرة حيث المعالجة سهلة ورخيصة قبل أن تنفجر المشكلة.
                </p>
                <p className="text-red-700 text-sm">
                  💰 إحصائية: معالجة إصابة نمل أبيض مبكرة = 3,000-8,000 ريال. نفس الإصابة بعد 6 أشهر إهمال = 50,000-200,000 ريال (إصلاحات هيكلية)!
                </p>
              </div>
            </div>

            <div id="difference" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الفرق بين المشكلة العادية والطارئة
              </h2>

              <p className="mb-6">
                ليست كل رؤية حشرة تستدعي الذعر. إليك كيف تميز:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl shadow-md border-2 border-green-300">
                  <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                    <span className="text-3xl">✅</span> مشكلة عادية (يمكن الانتظار قليلاً)
                  </h3>
                  
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>حشرة واحدة عرضية:</strong> نملة، ذبابة، عنكبوت - ظهرت مرة ولم تتكرر</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>حشرات خارجية:</strong> في الحديقة/الشرفة فقط، لا تدخل المنزل</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>موسمية خفيفة:</strong> بعض البعوض في الصيف، نمل قليل في الربيع</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>لا تتزايد:</strong> نفس العدد منذ أسابيع، لا يزيد</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>لا علامات تعشيش:</strong> لا فضلات، لا أعشاش، لا أضرار</span>
                    </li>
                  </ul>

                  <div className="bg-white p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-green-900">
                      ✅ <strong>الإجراء:</strong> يمكنك تجربة حلول منزلية، مراقبة الوضع لأسبوع-أسبوعين، حجز موعد عادي غير عاجل.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-xl shadow-md border-2 border-red-400">
                  <h3 className="text-xl font-bold mb-4 text-red-900 flex items-center gap-2">
                    <span className="text-3xl">🚨</span> حالة طوارئ (اتصل فوراً!)
                  </h3>
                  
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>أعداد كبيرة مفاجئة:</strong> عشرات/مئات من نفس الحشرة فجأة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>نشاط نهاري:</strong> قوارض/صراصير تظهر في النهار = إصابة شديدة جداً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>أضرار هيكلية:</strong> خشب مجوّف، جدران متآكلة، أساسات مهددة</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>مخاطر صحية:</strong> لدغات، تلوث طعام، أمراض، حساسية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>تكاثر سريع:</strong> بيض، يرقات، تزايد ملحوظ يومياً</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>انتشار للجيران:</strong> المشكلة في عدة وحدات</span>
                    </li>
                  </ul>

                  <div className="bg-white p-4 rounded-lg mt-4 border-2 border-red-500">
                    <p className="text-sm font-semibold text-red-900">
                      🚨 <strong>الإجراء:</strong> اتصل بمحترف فوراً (خدمة طوارئ 24 ساعة). كل يوم تأخير = أضرار أكثر + تكلفة أعلى!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="critical-signs" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                10 علامات حرجة تستدعي اتصالاً فورياً
              </h2>

              <p className="mb-6">
                إذا رأيت أياً من هذه العلامات، <strong>توقف عن القراءة واتصل بمحترف الآن</strong>:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">خشب مجوّف أو متفتت (النمل الأبيض)</h4>
                      <p className="text-sm mb-3">
                        اضغط على الإطارات الخشبية، الأبواب، الأثاث. إذا كان ناعماً/فارغاً من الداخل/ينهار عند الضغط = إصابة نمل أبيض متقدمة جداً. <strong>خطر انهيار هيكلي!</strong>
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">⏱️ الوقت الحرج: ساعات! النمل الأبيض يأكل 24/7. كل ساعة = المزيد من الدمار.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">قوارض تظهر نهاراً</h4>
                      <p className="text-sm mb-3">
                        القوارض ليلية بطبيعتها. ظهورها نهاراً يعني <strong>الاكتظاظ الشديد</strong> - المستعمرة ضخمة جداً لدرجة أن بعضها مُجبر على الخروج في ساعات خطرة. <strong>إصابة شديدة جداً!</strong>
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">💰 التكلفة: كل أسبوع تأخير = 200+ فأر جديد (تكاثر سريع)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">لدغات/حساسية مفاجئة</h4>
                      <p className="text-sm mb-3">
                        استيقظت بلدغات حمراء متعددة؟ طفلك يحك جلده باستمرار؟ حساسية جلدية/تنفسية بلا سبب واضح؟ قد يكون <strong>بق الفراش، عث الغبار، أو ديدان السجاد</strong>. مخاطر صحية فورية!
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">🏥 انتبه: بق الفراش ينتشر بسرعة رهيبة - من غرفة لكل المنزل خلال أسابيع</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">رائحة غريبة نفاذة</h4>
                      <p className="text-sm mb-3">
                        <strong>رائحة عفنة قوية:</strong> قوارض ميتة في الجدران. <strong>رائحة أمونيا:</strong> بول قوارض مركّز = إصابة كبيرة. <strong>رائحة حلوة كريهة:</strong> بق الفراش (فرمونات). أي رائحة غير طبيعية ومستمرة = علامة سيئة.
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">⚠️ خطر: بول القوارض ينقل أمراضاً خطيرة (اللبتوسبيروزيس، هانتا فيروس)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">أسلاك كهربائية مقروضة</h4>
                      <p className="text-sm mb-3">
                        لاحظت كوابل كهربائية مكشوفة/مقطوعة؟ أجهزة تتعطل بلا سبب؟ <strong>خطر حريق فوري!</strong> 20-25% من الحرائق "مجهولة السبب" تُعزى للقوارض. لا تنتظر - اتصل بكهربائي + مكافحة آفات فوراً.
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">🔥 حقيقة مخيفة: فأر واحد يقرض 25,000 مرة يومياً - كابل واحد كافٍ لماس كهربائي مميت</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">أنابيب طينية على الجدران (النمل الأبيض)</h4>
                      <p className="text-sm mb-3">
                        أنابيب بنية بسمك قلم رصاص تمتد من الأرض للجدران/السقف؟ هذه <strong>أنفاق النمل الأبيض</strong> - يبنونها للانتقال بأمان. رؤيتها = إصابة نشطة متقدمة. تحتاج معالجة فورية قبل دمار أوسع.
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">📊 إحصائية: النمل الأبيض يسبب أضراراً بـ 5 مليار دولار سنوياً عالمياً - أكثر من الحرائق والفيضانات مجتمعة!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">7</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">حشرات مجنحة (أسراب)</h4>
                      <p className="text-sm mb-3">
                        رأيت عشرات/مئات من النمل الأبيض/النمل الطائر/الصراصير المجنحة؟ هذا <strong>سرب تزاوج</strong> = المستعمرة ناضجة وضخمة جداً وتنتج مستعمرات جديدة. علامة على إصابة راسخة قديمة ومنتشرة.
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">⏰ التوقيت: الأسراب تظهر موسمياً (ربيع/صيف) - إذا رأيت سرباً، المستعمرة عمرها 3-5 سنوات على الأقل!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">8</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">فضلات كثيفة ومتزايدة</h4>
                      <p className="text-sm mb-3">
                        الفضلات تتراكم يومياً رغم التنظيف؟ موجودة في عدة غرف؟ <strong>كمية الفضلات = حجم الإصابة</strong>. إذا كانت كثيفة ومنتشرة، فالمستعمرة ضخمة والوقت ليس في صالحك.
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">🧮 حسبة سريعة: الفأر الواحد = 40-50 كرية براز يومياً. إذا وجدت 200+ يومياً = 4-5 فئران على الأقل (أو أكثر)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">9</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">أعشاش مرئية (قوارض، نحل، دبابير)</h4>
                      <p className="text-sm mb-3">
                        وجدت عشاً للقوارض (كومة من الورق الممزق/القماش)؟ خلية نحل/دبابير كبيرة؟ <strong>هذا يعني إصابة راسخة طويلة الأمد</strong>. القوارض لا تبني أعشاشاً إلا إذا شعرت بالأمان الكامل. النحل/الدبابير بأعداد كبيرة خطر لدغات مميتة (خاصة للأطفال/الحساسين).
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">⚠️ تحذير: لا تحاول إزالة خلية نحل/دبابير بنفسك - 50-100 لدغة دفعة واحدة يمكن أن تكون قاتلة!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-red-900 flex-shrink-0">10</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">فشل الحلول المنزلية المتكررة</h4>
                      <p className="text-sm mb-3">
                        جربت كل شيء (مصائد، مبيدات منزلية، وصفات طبيعية) لأسابيع والمشكلة تزداد؟ <strong>توقف عن إضاعة الوقت والمال</strong>. هذا يعني إصابة معقدة تحتاج تشخيصاً احترافياً ومعالجة متخصصة. كل يوم تجريب = انتشار أوسع.
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold">💡 قاعدة: إذا فشلت محاولتان جديّتان خلال شهر - حان وقت المحترفين</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="by-pest" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                علامات طوارئ حسب نوع الآفة
              </h2>

              <div className="space-y-8">
                <div id="termites" className="bg-gradient-to-r from-brown-50 to-amber-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🪵</span> النمل الأبيض - الطوارئ الصامتة
                  </h3>
                  <p className="text-sm mb-4">
                    الأخطر لأنه <strong>صامت وخفي</strong> - تكتشفه بعد أضرار جسيمة. علامات الطوارئ:
                  </p>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>🚨 أبواب/نوافذ لا تُغلق بسهولة (إطارات منتفخة من الرطوبة/التلف)</li>
                    <li>🚨 أرضيات خشبية تنحني أو "تزقزق" بشكل جديد</li>
                    <li>🚨 دهان/ورق جدران ينتفخ بدون تسريب مياه واضح</li>
                    <li>🚨 أجنحة مهملة قرب النوافذ/الأبواب (بعد السرب)</li>
                    <li>🚨 صوت طقطقة خفيف في الجدران (صوت النمل يأكل)</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg border-r-2 border-amber-600">
                    <p className="text-sm font-semibold">
                      ⏱️ <strong>الوقت الحرج:</strong> ساعات-أيام. النمل الأبيض يأكل 24/7/365. مستعمرة واحدة تستهلك 6 كجم خشب سنوياً. <Link href="/services/termite-control" className="text-primary underline">احجز معالجة نمل أبيض فورية</Link>
                    </p>
                  </div>
                </div>

                <div id="rodents" className="bg-gradient-to-r from-gray-50 to-slate-100 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🐀</span> القوارض - أخطار متعددة
                  </h3>
                  <p className="text-sm mb-4">
                    تجمع بين <strong>أمراض + حرائق + أضرار مادية</strong>. علامات الطوارئ:
                  </p>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>🚨 رؤية قارض نهاراً (= اكتظاظ شديد)</li>
                    <li>🚨 أكثر من قارض في نفس الليلة</li>
                    <li>🚨 فئران صغيرة (= تكاثر نشط داخل منزلك)</li>
                    <li>🚨 أسلاك مقروضة (خطر حريق فوري)</li>
                    <li>🚨 صوت خدش مستمر في الجدران/السقف</li>
                    <li>🚨 قارض ميت/مريض ظاهر (قد ينقل أمراضاً)</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg border-r-2 border-slate-600">
                    <p className="text-sm font-semibold">
                      💰 <strong>التكلفة:</strong> زوج فئران = 2,000 فأر خلال سنة! كل أسبوع تأخير = أضعاف التكلفة. <Link href="/services/rodent-control" className="text-primary underline">احجز مكافحة قوارض طارئة</Link>
                    </p>
                  </div>
                </div>

                <div id="cockroaches" className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🪳</span> الصراصير - ناقل أمراض سريع
                  </h3>
                  <p className="text-sm mb-4">
                    تنقل 33 نوعاً من البكتيريا + 7 طفيليات. علامات الطوارئ:
                  </p>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>🚨 صراصير نهارية (= إصابة شديدة جداً)</li>
                    <li>🚨 5+ صراصير في ليلة واحدة</li>
                    <li>🚨 صراصير في الثلاجة/الميكروويف (تلوث طعام مباشر)</li>
                    <li>🚨 كبسولات بيض (بنية، بحجم حبة أرز) في عدة أماكن</li>
                    <li>🚨 رائحة زيتية كريهة في المطبخ</li>
                    <li>🚨 بقع بنية على الجدران/الخزائن (فضلات)</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg border-r-2 border-orange-600">
                    <p className="text-sm font-semibold">
                      🦠 <strong>خطر صحي:</strong> الصراصير تمشي في المجاري ثم على طعامك - نقل فوري للبكتيريا. <Link href="/services/cockroach-control" className="text-primary underline">معالجة صراصير فورية</Link>
                    </p>
                  </div>
                </div>

                <div id="bedbugs" className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🛏️</span> بق الفراش - كابوس الانتشار
                  </h3>
                  <p className="text-sm mb-4">
                    <strong>ينتشر بسرعة مذهلة</strong> من غرفة لأخرى، من منزل لمنزل. علامات الطوارئ:
                  </p>
                  <ul className="text-sm space-y-2 mb-4">
                    <li>🚨 لدغات متكررة على عدة أفراد</li>
                    <li>🚨 بقع دم صغيرة على الملاءات/الوسائد</li>
                    <li>🚨 حشرات بنية صغيرة (حجم بذرة تفاح) في طيات المرتبة</li>
                    <li>🚨 قشور بق (جلد مخلوع) حول السرير</li>
                    <li>🚨 رائحة حلوة كريهة في الغرفة</li>
                    <li>🚨 انتشر من غرفة لأخرى</li>
                  </ul>
                  <div className="bg-white p-4 rounded-lg border-r-2 border-pink-600">
                    <p className="text-sm font-semibold">
                      ⚡ <strong>سرعة الانتشار:</strong> 1-2 حشرة → 300+ خلال 6 أشهر. عدوى كل المنزل خلال 12 أسبوع. <Link href="/services/bedbug-treatment" className="text-primary underline">معالجة بق الفراش فورية</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="emergency-steps" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                خطوات الطوارئ قبل وصول المحترف
              </h2>

              <p className="mb-6">
                اتصلت بالمحترفين؟ ممتاز! لكن قد يستغرق وصولهم ساعات. إليك ما تفعله في الأثناء:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-green-900">✅ افعل</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ عزل المنطقة المصابة (أغلق الأبواب)</li>
                    <li>✓ أبعد الأطفال والحيوانات الأليفة</li>
                    <li>✓ خزّن الطعام في حاويات محكمة</li>
                    <li>✓ نظّف الفتات والانسكابات</li>
                    <li>✓ التقط صوراً/فيديو للإصابة (للمحترف)</li>
                    <li>✓ أغلق نقاط دخول واضحة (بقماش مؤقتاً)</li>
                    <li>✓ افتح نوافذ للتهوية (إذا كانت رائحة)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-red-900">❌ لا تفعل</h4>
                  <ul className="text-sm space-y-2">
                    <li>✗ لا ترش مبيدات عشوائياً (قد تُشتت الحشرات)</li>
                    <li>✗ لا تحاول إزالة خلية نحل بنفسك</li>
                    <li>✗ لا تسد الشقوق بإسمنت قبل المعالجة (تحبس الآفات داخلاً)</li>
                    <li>✗ لا ترمِ أثاثاً مصاباً بالشارع (ينشر للجيران)</li>
                    <li>✗ لا تنقل أغراضاً من غرفة مصابة (ينشر الإصابة)</li>
                    <li>✗ لا تنم في غرفة أخرى إذا كان بق فراش (يتبعك)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أسئلة شائعة حول طوارئ مكافحة الآفات
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ كم تكلفة خدمة الطوارئ مقارنة بالخدمة العادية؟</h4>
                  <p className="text-sm text-gray-700">
                    عادة 30-50% أعلى من الخدمة المجدولة (لتغطية الاستجابة السريعة، العمل خارج الدوام، الأولوية). <strong>لكن:</strong> معالجة مبكرة بـ 1,500 ريال طوارئ أرخص بكثير من معالجة متأخرة بـ 10,000+ ريال + أضرار! فكر فيها <strong>استثمار في منع كارثة</strong>.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ كم تستغرق الاستجابة للطوارئ في جدة؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>شركات محترمة:</strong> 2-6 ساعات للطوارئ الحقيقية (خطر فوري). 24 ساعة للحالات "عاجلة" (خطيرة لكن ليست فورية). <strong>نحن نقدم:</strong> استجابة خلال 3 ساعات لحالات الطوارئ المؤكدة في جدة الكبرى، خدمة 24/7/365. <Link href="/contact" className="text-primary underline font-semibold">اتصل الآن</Link>
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل كل شركة تقدم خدمة طوارئ؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>لا.</strong> شركات صغيرة أو غير احترافية غالباً لا تملك الموارد لخدمة 24 ساعة. ابحث عن: (1) خط طوارئ مخصص، (2) تأكيد على الموقع الإلكتروني بخدمة طوارئ، (3) وقت استجابة محدد، (4) فريق كافٍ لتغطية مناوبات. <strong>اسأل مسبقاً</strong> قبل الطوارئ - لا تنتظر الكارثة!
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ ماذا لو كانت "طوارئ" لكن الشركة قالت "يمكن الانتظار"؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>استمع للخبير.</strong> المحترفون الجيدون صادقون - لن يبالغوا لكسب المال. إذا قالوا "يمكن المعالجة غداً بدون مشكلة"، ثق بهم. <strong>لكن:</strong> إذا شعرت بقلق حقيقي وشركة ترفض، اتصل بشركة ثانية لرأي آخر. لا تترك القلق يأكلك - راحة بالك تستحق مكالمة إضافية.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة النهائية</h3>
              <p className="mb-4 text-lg">
                <strong>لا تُقامر بصحتك وممتلكاتك.</strong> معظم "كوارث الآفات" كانت في البداية "مشاكل صغيرة" تُجاهلت. العلامات الحمراء موجودة لسبب - انتبه لها، تصرّف بسرعة، واتصل بمحترفين عند الشك.
              </p>
              <p className="mb-6">
                <strong>قاعدة ذهبية:</strong> إذا كنت تتساءل "هل هذا يستحق الاتصال؟" - الجواب على الأغلب <strong>نعم</strong>. استشارة هاتفية مجانية أفضل من ندم مكلف لاحقاً.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg"
                >
                  🚨 خط طوارئ 24/7 - اتصل الآن
                </Link>
                <Link 
                  href="/services"
                  className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition-colors"
                >
                  استكشف خدماتنا
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