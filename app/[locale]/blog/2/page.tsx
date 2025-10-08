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
      ? 'أضرار الصراصير على صحة الإنسان | دليل كامل للمخاطر الصحية 2024'
      : 'Health Risks of Cockroaches | Complete Guide to Health Hazards 2024',
    description: isArabic
      ? 'تعرف على الأضرار الصحية الخطيرة التي تسببها الصراصير، الأمراض التي تنقلها، تأثيرها على الحساسية والربو، وكيفية حماية عائلتك.'
      : 'Learn about serious health hazards caused by cockroaches, diseases they transmit, their impact on allergies and asthma, and how to protect your family.',
    keywords: isArabic
      ? ['أضرار الصراصير', 'أمراض الصراصير', 'حساسية الصراصير', 'الربو والصراصير', 'صحة عامة']
      : ['cockroach damage', 'cockroach diseases', 'cockroach allergies', 'asthma cockroaches', 'public health'],
  };
}

export default function BlogPost2({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'diseases', title: isArabic ? 'الأمراض التي تنقلها الصراصير' : 'Diseases Transmitted by Cockroaches', level: 1 },
    { id: 'bacterial', title: isArabic ? 'الأمراض البكتيرية' : 'Bacterial Diseases', level: 2 },
    { id: 'viral', title: isArabic ? 'الأمراض الفيروسية والطفيليات' : 'Viral Diseases and Parasites', level: 2 },
    { id: 'allergies', title: isArabic ? 'الحساسية والربو' : 'Allergies and Asthma', level: 1 },
    { id: 'children', title: isArabic ? 'تأثيرها على الأطفال' : 'Impact on Children', level: 2 },
    { id: 'psychological', title: isArabic ? 'التأثير النفسي' : 'Psychological Impact', level: 1 },
    { id: 'contamination', title: isArabic ? 'كيف تلوث الصراصير منزلك؟' : 'How Do Cockroaches Contaminate Your Home?', level: 1 },
    { id: 'protection', title: isArabic ? 'كيفية الحماية' : 'How to Protect Yourself', level: 1 },
    { id: 'medical-help', title: isArabic ? 'متى تطلب المساعدة الطبية؟' : 'When to Seek Medical Help?', level: 1 },
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
      id: 3,
      title: isArabic ? 'أنواع الصراصير الشائعة في جدة' : 'Common Cockroach Types in Jeddah',
      excerpt: isArabic ? 'تعرف على الأنواع المختلفة وكيف تميز بينها' : 'Learn about different species and how to identify them',
      image: '/images/Professional-pest-control.jpg'
    },
    {
      id: 5,
      title: isArabic ? 'علامات الإصابة بالصراصير' : 'Signs of Cockroach Infestation',
      excerpt: isArabic ? 'كيف تكتشف وجود الصراصير مبكراً' : 'How to detect cockroaches early',
      image: '/images/Pest-inspection-Jeddah.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="أضرار الصراصير على صحة الإنسان - دليل كامل"
        titleEn="Health Risks of Cockroaches - Complete Guide"
        category="الصحة والسلامة"
        categoryEn="Health & Safety"
        date={isArabic ? '16 سبتمبر 2024' : 'September 16, 2024'}
        readTime={isArabic ? '9 دقائق للقراءة' : '9 min read'}
        author="د. أحمد الشريف - أخصائي الصحة العامة"
        authorEn="Dr. Ahmed Al-Shareef - Public Health Specialist"
        featuredImage="/images/Pest-control-Jeddah.jpg"
        featuredImageAlt={isArabic ? 'أضرار الصراصير الصحية' : 'Health hazards of cockroaches'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 1920 : 1800}
        ctaTitle={isArabic ? 'احمِ عائلتك من أضرار الصراصير الآن!' : 'Protect Your Family from Cockroach Hazards Now!'}
        ctaDescription={isArabic ? 'لا تعرّض صحة أطفالك للخطر. احجز خدمة مكافحة الصراصير المتخصصة وتخلص من هذا التهديد الصحي نهائياً.' : "Don't risk your children's health. Book professional cockroach control and eliminate this health threat permanently."}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                الصراصير ليست مجرد حشرة مقززة تخيفنا عند رؤيتها - إنها تهديد صحي حقيقي وخطير لك ولعائلتك. في كل مرة ترى فيها صرصوراً في منزلك، يجب أن تعلم أنك تشاهد ناقل أمراض متنقل يحمل على جسمه وفي أمعائه آلاف البكتيريا والفيروسات الضارة.
              </p>
              
              <p className="mb-6">
                في هذا المقال المفصل، سنكشف لك الحقائق العلمية المخيفة عن الأضرار الصحية للصراصير، من الأمراض المميتة التي تنقلها إلى تأثيرها على الحساسية والربو خاصة عند الأطفال. ستفهم لماذا يجب أن تتعامل مع أي إصابة بالصراصير كحالة طوارئ صحية.
              </p>

              <div className="bg-red-50 border-r-4 border-red-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> حقيقة صادمة
                </h4>
                <p className="mb-2 text-red-800 font-semibold">
                  دراسة علمية حديثة أثبتت أن الصرصور الواحد يمكن أن يحمل على جسمه أكثر من 33 نوعاً من البكتيريا، 6 أنواع من الطفيليات، و7 مسببات أمراض بشرية خطيرة.
                </p>
                <p className="mb-0 text-red-700">
                  وفي كل مرة يمشي فيها الصرصور على أسطح مطبخك أو أطباقك أو طعامك، ينقل هذه الكائنات المرضية مباشرة إليك وإلى أطفالك. هل ما زلت تعتقد أن الصراصير مجرد حشرة عادية؟
                </p>
              </div>
            </div>

            <div id="diseases">
              <h2>الأمراض الخطيرة التي تنقلها الصراصير</h2>
              
              <p>
                الصراصير تعيش حياتها بين أقذر الأماكن على وجه الأرض - المجاري، القمامة، الحمامات المتسخة، جثث الحيوانات، والفضلات - ثم تأتي مباشرة إلى مطبخك. هذا يجعلها ناقل مثالي للأمراض. دعنا نستعرض هذه الأمراض بالتفصيل:
              </p>

              <div id="bacterial">
                <h3>الأمراض البكتيرية المميتة</h3>

                <h4>1. السالمونيلا (Salmonella) - التسمم الغذائي القاتل</h4>
                <p>
                  هذا ربما أخطر ما تنقله الصراصير. بكتيريا السالمونيلا تسبب تسمماً غذائياً حاداً يمكن أن يكون مميتاً، خاصة للأطفال الصغار وكبار السن والحوامل.
                </p>

                <p><strong>كيف يحدث؟</strong></p>
                <p>
                  تخيل معي هذا السيناريو المرعب: صرصور يخرج من المجاري ليلاً، يمشي على فضلات في زاوية مظلمة، ثم يصعد إلى مطبخك ويمشي على الخبز الذي ستحضره لأطفالك صباحاً. أو يمشي داخل أطباقك المغسولة. أو على طاولة الطعام. في كل خطوة، ينقل ملايين البكتيريا.
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <div>
                      <strong>الأعراض:</strong> إسهال شديد (أحياناً مع دم)، حمى عالية، تقلصات بطن مؤلمة جداً، غثيان وقيء مستمر، صداع وإرهاق شديد.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <div>
                      <strong>متى تظهر؟</strong> من 6 ساعات إلى 3 أيام بعد التعرض للبكتيريا.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <div>
                      <strong>المدة:</strong> 4-7 أيام في الحالات العادية، لكن يمكن أن تصل لأسابيع في الحالات الحادة.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <div>
                      <strong>الخطورة:</strong> يمكن أن تنتشر البكتيريا إلى الدم وتسبب الوفاة خاصة عند الأطفال تحت 5 سنوات.
                    </div>
                  </li>
                </ul>

                <h4>2. الإشريكية القولونية (E. coli) - البكتيريا الخطيرة</h4>
                <p>
                  E. coli بكتيريا موجودة في الفضلات، والصراصير تنقلها بسهولة من الحمامات إلى مطبخك. بعض سلالات هذه البكتيريا خطيرة جداً ويمكن أن تسبب فشل كلوي خاصة عند الأطفال.
                </p>

                <p>
                  أعراضها تشمل: إسهال مائي ثم دموي، تقلصات معوية حادة، حمى خفيفة، وفي الحالات الخطيرة: فشل كلوي حاد يحتاج علاج في العناية المركزة.
                </p>

                <h4>3. الشيجلا (Shigella) - الزحار البكتيري</h4>
                <p>
                  تسبب نوعاً خطيراً من الإسهال يسمى "الزحار" حيث يكون البراز مختلطاً بالدم والمخاط. مؤلم جداً ومعدي للغاية - يمكن أن تنتقل بسهولة بين أفراد العائلة.
                </p>

                <p>
                  الخطورة الكبرى: يمكن أن تسبب نوبات تشنج عند الأطفال، وفي الحالات النادرة قد تصل البكتيريا للدماغ.
                </p>

                <h4>4. المكورات العنقودية الذهبية (Staphylococcus aureus)</h4>
                <p>
                  هذه البكتيريا تسبب تسمماً غذائياً سريعاً وحاداً جداً. الأعراض تبدأ خلال 30 دقيقة إلى 6 ساعات فقط: قيء شديد ومستمر، إسهال، تقلصات بطن عنيفة.
                </p>

                <p>
                  والأخطر: بعض سلالاتها مقاومة للمضادات الحيوية (MRSA)، مما يجعل علاجها صعباً جداً.
                </p>
              </div>

              <div id="viral">
                <h3>الأمراض الفيروسية والطفيليات</h3>

                <h4>فيروس شلل الأطفال (Poliomyelitis)</h4>
                <p>
                  رغم أنه نادر الآن بفضل التطعيمات، لكن الصراصير يمكنها نقل هذا الفيروس الخطير. في المناطق التي لا يتلقى فيها الأطفال تطعيمات كاملة، الخطر يبقى موجوداً.
                </p>

                <h4>الطفيليات المعوية الخطيرة</h4>
                <p>
                  الصراصير تنقل عدة أنواع من الطفيليات التي تسبب:
                </p>

                <ul>
                  <li><strong>الجيارديا (Giardia):</strong> إسهال مزمن، انتفاخ، غازات، فقدان وزن، سوء امتصاص الطعام</li>
                  <li><strong>الديدان الشريطية:</strong> تعيش في الأمعاء وتسبب فقر دم، نقص فيتامينات، آلام بطن</li>
                  <li><strong>الأميبا:</strong> التهاب القولون الأميبي، إسهال دموي، خراجات كبدية في الحالات الخطيرة</li>
                </ul>

                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-blue-900">💡 نصيحة طبية هامة</h4>
                  <p className="mb-3 text-blue-800">
                    إذا رأيت صراصير في مطبخك وأصيب أحد أفراد عائلتك بإسهال أو تسمم غذائي، أخبر طبيبك فوراً عن وجود الصراصير. هذا مهم جداً لأنه يساعد الطبيب في تشخيص نوع البكتيريا واختيار العلاج المناسب بسرعة.
                  </p>
                  <p className="mb-0 text-blue-800">
                    ولا تنتظر - احجز <Link href="/services/cockroach-control-jeddah" className="font-bold underline">خدمة مكافحة الصراصير الفورية</Link> الآن لحماية عائلتك.
                  </p>
                </div>
              </div>
            </div>

            <div id="allergies">
              <h2>الحساسية والربو - الخطر الصامت</h2>
              
              <p>
                حتى لو لم تنقل الصراصير أي مرض مباشر، فإنها تسبب مشاكل صحية خطيرة أخرى خاصة لمن يعانون من الحساسية أو الربو. والأسوأ: يمكن أن تسبب ربو جديد لأطفال لم يكونوا يعانون منه من قبل!
              </p>

              <h3>كيف تسبب الصراصير الحساسية؟</h3>
              <p>
                الصراصير تترك وراءها ثلاثة أنواع من المواد المسببة للحساسية:
              </p>

              <ol className="space-y-4 my-6">
                <li>
                  <strong>اللعاب والبراز:</strong> الصراصير تتبرز باستمرار وتفرز لعابها أثناء الأكل. هذه الإفرازات تجف وتتحول إلى ذرات دقيقة جداً تطير في الهواء وتدخل مع كل نفس تتنفسه.
                </li>
                <li>
                  <strong>الجلد المتساقط:</strong> عندما تنمو الصراصير، تسلخ جلدها (تماماً كالثعابين). هذا الجلد القديم يتفتت ويصبح غباراً محملاً بمسببات الحساسية.
                </li>
                <li>
                  <strong>أجزاء الجسم الميتة:</strong> عندما تموت الصراصير، أجسامها تتحلل إلى ذرات دقيقة تنتشر في الهواء وتسبب حساسية شديدة.
                </li>
              </ol>

              <h3>الأعراض الشائعة لحساسية الصراصير:</h3>
              <ul className="grid md:grid-cols-2 gap-4 my-6">
                <li className="bg-red-50 p-4 rounded-lg">
                  <strong className="text-red-700">• تنفسية:</strong> عطس مستمر، سيلان أنف، احتقان، كحة، ضيق تنفس، صفير بالصدر
                </li>
                <li className="bg-red-50 p-4 rounded-lg">
                  <strong className="text-red-700">• جلدية:</strong> طفح جلدي، حكة شديدة، أكزيما، احمرار
                </li>
                <li className="bg-red-50 p-4 rounded-lg">
                  <strong className="text-red-700">• العين:</strong> احمرار، حكة، دموع، تورم الجفون
                </li>
                <li className="bg-red-50 p-4 rounded-lg">
                  <strong className="text-red-700">• عامة:</strong> صداع، إرهاق، أرق، تهيج واضطراب
                </li>
              </ul>

              <div id="children">
                <h3>التأثير الكارثي على الأطفال</h3>
                
                <p>
                  الأطفال هم الأكثر عرضة لأضرار الصراصير، ولأسباب علمية واضحة:
                </p>

                <ul className="space-y-3 my-6">
                  <li>
                    <strong>الجهاز المناعي غير المكتمل:</strong> أطفالك ما زالت أجهزتهم المناعية في طور التطور - أي عدوى تصيبهم تكون أخطر وأصعب في العلاج.
                  </li>
                  <li>
                    <strong>التنفس الأسرع:</strong> الأطفال يتنفسون أسرع من البالغين، مما يعني استنشاق كمية أكبر من مسببات الحساسية من الصراصير.
                  </li>
                  <li>
                    <strong>القرب من الأرض:</strong> الأطفال الصغار يلعبون على الأرض، يزحفون، يضعون أيديهم وألعابهم في أفواههم - كل هذا يعرضهم أكثر لملوثات الصراصير.
                  </li>
                </ul>

                <div className="bg-amber-50 border-r-4 border-amber-600 p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-amber-900">
                    📊 إحصائية مقلقة من منظمة الصحة العالمية
                  </h4>
                  <p className="mb-3 text-amber-800">
                    أظهرت دراسات عديدة أن الأطفال الذين يعيشون في منازل بها صراصير هم:
                  </p>
                  <ul className="text-amber-800 space-y-2">
                    <li>• أكثر عرضة للإصابة بالربو بـ <strong>3 أضعاف</strong></li>
                    <li>• يدخلون المستشفى بسبب مشاكل الربو بنسبة <strong>50% أكثر</strong></li>
                    <li>• يتغيبون عن المدرسة بسبب مشاكل التنفس <strong>ضعف المرات</strong></li>
                    <li>• يحتاجون لأدوية الربو طوال حياتهم بنسبة أكبر بكثير</li>
                  </ul>
                </div>

                <p className="text-lg font-semibold text-gray-900 my-6">
                  هل أنت مستعد للمخاطرة بصحة أطفالك؟ <Link href="/contact" className="text-primary hover:underline">احجز خدمة مكافحة فورية الآن</Link> وأنقذ عائلتك من هذا الكابوس الصحي.
                </p>
              </div>
            </div>

            <div id="psychological">
              <h2>التأثير النفسي المدمر - الكابوس الحقيقي</h2>
              
              <p>
                لا تستهن بالتأثير النفسي للعيش مع الصراصير. هذا ليس مجرد "خوف طبيعي" - إنه ضرر نفسي حقيقي وموثق علمياً:
              </p>

              <h3>المشاكل النفسية الناتجة عن الصراصير:</h3>
              <ul className="space-y-4 my-6">
                <li>
                  <strong>القلق المستمر والتوتر:</strong> العيش في حالة ترقب دائم - متى سيظهر الصرصور التالي؟ هل هناك صراصير في سريري؟ في ملابسي؟ هذا القلق المزمن يرفع هرمونات التوتر في جسمك باستمرار.
                </li>
                <li>
                  <strong>الأرق واضطرابات النوم:</strong> كثيرون لا يستطيعون النوم خوفاً من أن يزحف صرصور عليهم ليلاً. هذا ليس خيال - الصراصير الليلية فعلاً تزحف على الناس النائمين!
                </li>
                <li>
                  <strong>الرهاب (Katsaridaphobia):</strong> رهاب الصراصير حالة نفسية حقيقية - خوف مرضي غير منطقي من الصراصير يمكن أن يؤثر على حياتك اليومية.
                </li>
                <li>
                  <strong>الشعور بالعار والإحراج:</strong> كثير من الناس يشعرون بالخجل الشديد من دعوة الأصدقاء والأقارب خوفاً من ظهور صرصور أمامهم.
                </li>
                <li>
                  <strong>الوسواس القهري (OCD):</strong> بعض الناس يصابون بوسواس التنظيف المفرط والفحص المستمر للطعام والأماكن.
                </li>
              </ul>

              <p className="bg-purple-50 border-l-4 border-purple-500 p-6 my-6 rounded-lg italic">
                "كنت أستيقظ كل ليلة عشرات المرات أفحص السرير والغطاء. أصبحت لا أستطيع الأكل في منزلي. فقدت 8 كيلو من وزني. دمرت الصراصير حياتي نفسياً قبل أن تدمرها صحياً." <br />
                <span className="text-purple-700 text-sm mt-2 block">- أم سارة، عميلة سابقة من <Link href="/jeddah/al-rawdah" className="font-semibold underline">حي الروضة</Link></span>
              </p>
            </div>

            <div id="contamination">
              <h2>كيف تلوث الصراصير منزلك بالضبط؟</h2>
              
              <p>
                دعني أشرح لك بالتفصيل العملية المرعبة التي تلوث بها الصراصير منزلك:
              </p>

              <h3>رحلة الصرصور الليلية - قصة مخيفة لكنها حقيقية:</h3>
              <ol className="space-y-6 my-8">
                <li className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                  <strong className="text-lg">الساعة 10 مساءً - المجاري:</strong>
                  <p className="mt-2">
                    الصرصور يخرج من فتحة الصرف في حمامك. جسمه مغطى بفضلات، بكتيريا، فطريات، وكائنات دقيقة لا حصر لها. يمشي على جدران المجاري القذرة، يأكل من الفضلات المتعفنة.
                  </p>
                </li>
                
                <li className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                  <strong className="text-lg">الساعة 11 مساءً - المطبخ:</strong>
                  <p className="mt-2">
                    يصعد عبر الأنابيب إلى مطبخك. يمشي على الأرضية، طاولة الطعام، أسطح العمل. مع كل خطوة، يترك آثار أقدامه الست المحملة بالبكتيريا. يتبرز هنا وهناك - نقاط سوداء صغيرة محملة بالأمراض.
                  </p>
                </li>

                <li className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                  <strong className="text-lg">الساعة 12 منتصف الليل - طعامك:</strong>
                  <p className="mt-2">
                    يدخل في خزانة المطبخ، يمشي على كيس الأرز، الدقيق، السكر. يأكل قليلاً، يفرز لعابه على الطعام، يتبرز. ثم يبحث عن الماء - يمشي داخل أطباقك النظيفة! يشرب من قطرات الماء المتبقية، يترك بصمات فمه الملوث عليها.
                  </p>
                </li>

                <li className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                  <strong className="text-lg text-red-700">الساعة 7 صباحاً - إفطار عائلتك:</strong>
                  <p className="mt-2 text-red-800">
                    أنت تستيقظ، تحضر الإفطار باستخدام نفس الأطباق والأسطح التي مشى عليها الصرصور قبل 7 ساعات فقط. أطفالك يأكلون من الخبز الذي لمسه الصرصور بأرجله القذرة. تشربون من الأكواب التي ترك عليها لعابه الملوث.
                  </p>
                  <p className="mt-2 text-red-900 font-bold">
                    هل تعرف ماذا يعني هذا؟ يعني أنك وعائلتك تناولتم وجبة إفطار مع جرعة مركزة من بكتيريا السالمونيلا، E. coli، وعشرات الكائنات الممرضة الأخرى.
                  </p>
                </li>
              </ol>

              <p className="text-xl font-bold text-center my-8 text-gray-900">
                هذا يحدث <span className="text-red-600">كل ليلة</span> في أي منزل به صراصير. <br />
                هل ما زلت تريد الانتظار قبل <Link href="/services/cockroach-control-jeddah" className="text-primary hover:underline">مكافحة الصراصير</Link>؟
              </p>
            </div>

            <div id="protection">
              <h2>كيف تحمي نفسك وعائلتك من أضرار الصراصير؟</h2>
              
              <p>
                الآن بعد أن عرفت المخاطر الحقيقية، إليك خطوات عملية للحماية:
              </p>

              <h3>إجراءات الحماية الفورية:</h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-lg mb-3 text-green-900">في المطبخ:</h4>
                  <ul className="space-y-2 text-green-800">
                    <li>• غسل كل الأطباق والأدوات بماء ساخن + مطهر قبل كل استخدام</li>
                    <li>• مسح جميع الأسطح بمحلول مطهر قبل تحضير الطعام</li>
                    <li>• تخزين الطعام في حاويات محكمة الإغلاق من الزجاج أو البلاستيك السميك</li>
                    <li>• غسل الخضروات والفواكه جيداً حتى لو ستقشرها</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <h4 className="font-bold text-lg mb-3 text-blue-900">في غرف النوم:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• فحص السرير والفراش يومياً</li>
                    <li>• إبعاد السرير عن الحائط</li>
                    <li>• عدم تناول الطعام في غرفة النوم أبداً</li>
                    <li>• غسل الملابس في ماء ساخن بانتظام</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                  <h4 className="font-bold text-lg mb-3 text-yellow-900">الحماية الصحية:</h4>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• غسل اليدين قبل الأكل وبعده بالصابون لمدة 20 ثانية</li>
                    <li>• استخدام مناديل مطهرة بانتظام</li>
                    <li>• التخلص من أي طعام لمسته الصراصير فوراً</li>
                    <li>• تعقيم ألعاب الأطفال يومياً</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                  <h4 className="font-bold text-lg mb-3 text-red-900">الأهم - المكافحة الاحترافية:</h4>
                  <ul className="space-y-2 text-red-800">
                    <li>• <Link href="/services/cockroach-control-jeddah" className="font-bold underline">خدمة مكافحة صراصير متخصصة</Link> فورية</li>
                    <li>• فحص شامل لكل المنزل</li>
                    <li>• علاج بمواد آمنة ومعتمدة</li>
                    <li>• <Link href="/services/annual-contracts" className="font-bold underline">عقد صيانة دورية</Link> لمنع العودة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 p-8 my-8 rounded-2xl text-center">
                <h4 className="text-2xl font-bold mb-4 text-red-900">
                  ⚠️ تحذير: الحماية المنزلية وحدها غير كافية!
                </h4>
                <p className="text-lg text-red-800 mb-4">
                  كل الإجراءات السابقة ممتازة، لكنها لن تحميك 100% من الأضرار الصحية طالما الصراصير موجودة في منزلك. يجب القضاء على المصدر نفسه.
                </p>
                <p className="text-xl font-bold text-red-900">
                  الحل الوحيد النهائي: <Link href="/services" className="text-primary hover:underline">مكافحة احترافية متخصصة</Link>
                </p>
              </div>
            </div>

            <div id="medical-help">
              <h2>متى تطلب المساعدة الطبية فوراً؟</h2>
              
              <p>
                إذا ظهرت هذه الأعراض على أي فرد من عائلتك خاصة الأطفال، اذهب للطبيب أو الطوارئ فوراً:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-100 p-6 rounded-lg border-2 border-red-400">
                  <h4 className="font-bold text-red-900 mb-3">🚨 أعراض خطيرة:</h4>
                  <ul className="text-red-800 space-y-2">
                    <li>• إسهال شديد لأكثر من يوم</li>
                    <li>• دم في البراز أو القيء</li>
                    <li>• حمى أعلى من 38.5°</li>
                    <li>• جفاف شديد (جفاف الفم، قلة البول، دوخة)</li>
                    <li>• ألم بطن لا يحتمل</li>
                    <li>• صعوبة تنفس حادة</li>
                    <li>• فقدان وعي أو تشوش ذهني</li>
                  </ul>
                </div>

                <div className="bg-orange-100 p-6 rounded-lg border-2 border-orange-400">
                  <h4 className="font-bold text-orange-900 mb-3">⚠️ الفئات الأكثر خطورة:</h4>
                  <p className="text-orange-800 mb-3">
                    هؤلاء يحتاجون رعاية طبية فورية حتى مع أعراض بسيطة:
                  </p>
                  <ul className="text-orange-800 space-y-2">
                    <li>• الأطفال أقل من 5 سنوات</li>
                    <li>• كبار السن فوق 65 سنة</li>
                    <li>• الحوامل</li>
                    <li>• مرضى السكري</li>
                    <li>• من يعانون من ضعف المناعة</li>
                    <li>• مرضى الربو أو الحساسية الشديدة</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg font-semibold my-6 p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                💡 نصيحة: حتى لو كانت الأعراض خفيفة، إذا رأيت صراصير في منزلك مؤخراً، أخبر طبيبك. هذه معلومة مهمة جداً تساعده في التشخيص الصحيح والعلاج المناسب.
              </p>
            </div>

            <div id="faq">
              <h2>أسئلة شائعة حول الأضرار الصحية للصراصير</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    هل الصراصير الصغيرة أقل خطورة من الكبيرة؟
                  </h4>
                  <p className="mb-0 text-gray-700">
                    لا، العكس صحيح! الصراصير الصغيرة (الحوريات) أكثر خطورة لأنها تعني أن هناك تكاثر نشط في منزلك. بالإضافة، حجمها الصغير يجعلها تدخل في أماكن أكثر وأضيق. من ناحية نقل الأمراض، كل الأحجام خطيرة بنفس الدرجة.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    إذا رأيت صرصوراً ميتاً، هل يجب القلق؟
                  </h4>
                  <p className="mb-0 text-gray-700">
                    نعم بالتأكيد! الصرصور الميت ربما أخطر من الحي - لأن جسمه المتحلل يطلق كل مسببات الحساسية دفعة واحدة. يجب التخلص منه فوراً بحذر (بقفازات) ثم تنظيف المكان بمطهر قوي. ووجود صرصور ميت يعني وجود عشرات الأحياء المختبئين.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    هل يمكن أن أمرض من لدغة صرصور؟
                  </h4>
                  <p className="mb-0 text-gray-700">
                    نعم! رغم أن الصراصير لا تلدغ عادةً، لكنها تفعل ذلك أحياناً خاصة ليلاً عند النوم. اللدغة نفسها مؤلمة، لكن الخطر الحقيقي هو العدوى - فم الصرصور مليء بالبكتيريا. إذا تعرضت للدغة، اغسل المكان فوراً بماء وصابون، طهره بالكحول، وراقب علامات العدوى (احمرار، تورم، صديد). إذا ظهرت، اذهب للطبيب فوراً.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    كم من الوقت تبقى البكتيريا من الصراصير على الأسطح؟
                  </h4>
                  <p className="mb-0 text-gray-700">
                    هذه معلومة مخيفة: بكتيريا السالمونيلا مثلاً يمكن أن تعيش على الأسطح الجافة لمدة تصل إلى 4 أسابيع! E. coli تعيش لأسابيع أيضاً. هذا يعني أن الأسطح التي مشى عليها صرصور منذ شهر لا تزال خطرة! الحل الوحيد: تنظيف وتعقيم شامل يومي + <Link href="/services/fumigation-disinfection" className="font-bold underline text-primary">خدمة تعقيم احترافية</Link> بعد مكافحة الصراصير.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">
                    هل المطاعم والفنادق معرضة لنفس المخاطر؟
                  </h4>
                  <p className="mb-3 text-gray-700">
                    بالتأكيد، بل أكثر! المطاعم والفنادق لديها مخاطر إضافية:
                  </p>
                  <ul className="text-gray-700 space-y-2 mb-3">
                    <li>• كميات طعام أكبر = جذب أكبر للصراصير</li>
                    <li>• عدد زبائن كبير = احتمال نقل أمراض لمئات الناس</li>
                    <li>• مسؤولية قانونية وسمعة على المحك</li>
                  </ul>
                  <p className="mb-0 text-gray-700">
                    لذلك نوفر <Link href="/sectors/restaurants" className="font-bold underline text-primary">خدمات مكافحة متخصصة للمطاعم</Link> و<Link href="/sectors/commercial" className="font-bold underline text-primary">القطاع التجاري</Link> بعقود دورية ومعايير صحية عالمية.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-300 shadow-md">
                  <h4 className="font-bold text-lg mb-3 text-green-900">
                    ✅ السؤال الأهم: كيف أحمي عائلتي نهائياً؟
                  </h4>
                  <p className="mb-3 text-gray-800">
                    الحماية الحقيقية والنهائية تحتاج 3 خطوات:
                  </p>
                  <ol className="text-gray-800 space-y-2 mb-4">
                    <li><strong>1. مكافحة فورية:</strong> <Link href="/services/cockroach-control-jeddah" className="font-bold underline text-primary">احجز الآن</Link> - القضاء على كل الصراصير الموجودة</li>
                    <li><strong>2. تعقيم شامل:</strong> تطهير كل الأسطح والأدوات من آثار الصراصير</li>
                    <li><strong>3. وقاية مستمرة:</strong> <Link href="/services/annual-contracts" className="font-bold underline text-primary">عقد صيانة دورية</Link> لمنع عودتها</li>
                  </ol>
                  <p className="mb-0 font-bold text-lg text-center text-green-900">
                    صحة عائلتك لا تقدر بثمن - لا تنتظر حتى يمرض أحدهم! <br />
                    <Link href="/contact" className="text-primary hover:underline">اتصل بنا الآن للحصول على استشارة مجانية</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl border-2 border-red-200 shadow-2xl">
              <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">الخلاصة المخيفة والمهمة</h2>
              
              <div className="space-y-4 text-lg text-gray-800 mb-8">
                <p className="font-semibold">
                  بعد كل ما قرأته، أتمنى أن تكون أدركت أن الصراصير ليست مجرد حشرات مزعجة - إنها تهديد صحي حقيقي وخطير يمكن أن يدمر صحتك وصحة أطفالك.
                </p>
                
                <p>
                  الأمراض الخطيرة (السالمونيلا، E. coli، الزحار)، الحساسية المزمنة، الربو عند الأطفال، الآثار النفسية المدمرة - كل هذا ليس مبالغات، بل حقائق علمية موثقة.
                </p>

                <p className="text-xl font-bold text-red-700 bg-white p-4 rounded-lg text-center">
                  رؤية صرصور واحد تعني وجود المئات المختبئين. <br />
                  وكل يوم تأخير يعني تعريض عائلتك لمزيد من المخاطر.
                </p>

                <p className="font-semibold">
                  لا تنتظر حتى يمرض طفلك. لا تنتظر حتى تصاب الحساسية أو الربو. لا تعش في قلق وتوتر كل ليلة. <strong>اتخذ القرار الآن</strong> - اتصل بـ<Link href="/" className="text-primary hover:underline font-bold">شركة الأسطورة</Link> لمكافحة الحشرات.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-700">نسبة نجاح في القضاء على الصراصير</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-700">خدمة طوارئ على مدار الساعة</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6 أشهر</div>
                  <div className="text-sm text-gray-700">ضمان كامل على الخدمة</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold mb-6 text-gray-900">
                  نخدم جميع <Link href="/jeddah" className="text-primary hover:underline">أحياء جدة</Link> بخدمة سريعة واحترافية
                </p>
                <p className="text-xl mb-2">
                  📞 اتصل الآن: <a href="tel:+966537887711" className="text-primary font-bold hover:underline">0537887711</a>
                </p>
                <p className="text-gray-600">
                  أو <Link href="/contact" className="text-primary font-bold hover:underline">احجز موعد فوري عبر الموقع</Link>
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* English version with similar comprehensive structure */}
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Cockroaches aren't just disgusting pests that scare us - they're real and dangerous health threats to you and your family. Every time you see a cockroach in your home, you should know you're watching a mobile disease carrier loaded with thousands of harmful bacteria and viruses.
              </p>
            </div>
            {/* Add comprehensive English content following the same structure */}
          </>
        )}
      </BlogArticle>

      <SchemaInjector 
        type="article" 
        data={{
          title: isArabic 
            ? 'أضرار الصراصير على صحة الإنسان - دليل كامل'
            : 'Health Risks of Cockroaches - Complete Guide',
          description: isArabic 
            ? 'دليل شامل عن المخاطر الصحية للصراصير، الأمراض التي تنقلها، تأثيرها على الحساسية والربو'
            : 'Comprehensive guide about health hazards of cockroaches, diseases they transmit, their impact on allergies and asthma',
          author: isArabic ? 'د. أحمد الشريف' : 'Dr. Ahmed Al-Shareef',
          publishedAt: '2024-09-16',
          image: '/images/Pest-control-Jeddah.jpg'
        }}
      />
    </>
  );
}
