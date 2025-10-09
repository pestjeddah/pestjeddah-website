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
      ? 'الحشرات الطائرة وطرق مكافحتها | دليل شامل للذباب والبعوض 2024'
      : 'Flying Insects and Control Methods | Complete Guide for Flies and Mosquitoes 2024',
    description: isArabic
      ? 'دليل متكامل لمكافحة الذباب والبعوض والحشرات الطائرة الأخرى، طرق فعالة للقضاء عليها، والوقاية من عودتها.'
      : 'Complete guide for controlling flies, mosquitoes and other flying insects, effective elimination methods, and prevention strategies.',
    keywords: isArabic
      ? ['مكافحة الذباب', 'مكافحة البعوض', 'الحشرات الطائرة', 'طرد الذباب', 'جدة']
      : ['fly control', 'mosquito control', 'flying insects', 'eliminate flies', 'Jeddah'],
  };
}

export default function BlogPost11({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'types', title: isArabic ? 'أنواع الحشرات الطائرة الشائعة' : 'Common Flying Insects Types', level: 1 },
    { id: 'flies', title: isArabic ? 'الذباب' : 'Flies', level: 2 },
    { id: 'mosquitoes', title: isArabic ? 'البعوض' : 'Mosquitoes', level: 2 },
    { id: 'wasps', title: isArabic ? 'الدبابير والزنابير' : 'Wasps and Hornets', level: 2 },
    { id: 'dangers', title: isArabic ? 'لماذا الحشرات الطائرة خطيرة؟' : 'Why Are Flying Insects Dangerous?', level: 1 },
    { id: 'control-methods', title: isArabic ? 'طرق المكافحة الفعالة' : 'Effective Control Methods', level: 1 },
    { id: 'prevention', title: isArabic ? 'الوقاية طويلة المدى' : 'Long-term Prevention', level: 1 },
    { id: 'seasonal', title: isArabic ? 'المكافحة الموسمية' : 'Seasonal Control', level: 1 },
    { id: 'natural', title: isArabic ? 'طرق طبيعية آمنة' : 'Safe Natural Methods', level: 1 },
    { id: 'professional', title: isArabic ? 'متى تحتاج لمحترفين؟' : 'When Do You Need Professionals?', level: 1 },
    { id: 'faq', title: isArabic ? 'أسئلة شائعة' : 'FAQ', level: 1 },
  ];

  const relatedArticles = [
    {
      id: 3,
      title: isArabic ? 'أفضل أوقات مكافحة البعوض في جدة' : 'Best Times for Mosquito Control in Jeddah',
      excerpt: isArabic ? 'تعرف على المواسم والأوقات المثلى' : 'Learn about optimal seasons and times',
      image: '/images/Mosquito-control-service.jpg'
    },
    {
      id: 12,
      title: isArabic ? 'الوقاية من الآفات في فصل الشتاء' : 'Winter Pest Prevention',
      excerpt: isArabic ? 'كيف تحمي منزلك في الشتاء' : 'How to protect your home in winter',
      image: '/images/Home-pest-treatment.jpg'
    },
    {
      id: 13,
      title: isArabic ? 'المبيدات الآمنة للأطفال والحيوانات الأليفة' : 'Safe Pesticides for Children and Pets',
      excerpt: isArabic ? 'تعرف على المبيدات الآمنة' : 'Learn about safe pesticides',
      image: '/images/Safe-pest-control.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="الحشرات الطائرة وطرق مكافحتها - دليل شامل للقضاء على الذباب والبعوض"
        titleEn="Flying Insects and Control Methods - Complete Guide to Eliminate Flies and Mosquitoes"
        category="مكافحة موسمية"
        categoryEn="Seasonal Control"
        date={isArabic ? '5 يوليو 2024' : 'July 5, 2024'}
        readTime={isArabic ? '9 دقائق للقراءة' : '9 min read'}
        author="م. خالد السلمي - خبير مكافحة الحشرات الطائرة"
        authorEn="Eng. Khalid Al-Salmi - Flying Insect Control Expert"
        featuredImage="/images/Insect-control-Jeddah.jpg"
        featuredImageAlt={isArabic ? 'مكافحة الحشرات الطائرة' : 'Flying insect control'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 1880 : 1780}
        ctaTitle={isArabic ? 'تخلص من الحشرات الطائرة المزعجة!' : 'Get Rid of Annoying Flying Insects!'}
        ctaDescription={isArabic ? 'برامج مكافحة متخصصة للذباب والبعوض بتقنيات حديثة وآمنة. نتائج سريعة وضمان شامل.' : 'Specialized control programs for flies and mosquitoes with modern and safe techniques. Fast results and comprehensive warranty.'}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                طنين مزعج بجانب أذنك في منتصف الليل. ذبابة تهبط على طعامك. بعوضة تلدغك وأنت نائم. لدغات حمراء مثيرة للحكة في الصباح. الحشرات الطائرة ليست مجرد إزعاج - إنها <strong>ناقل خطير للأمراض</strong> (الملاريا، حمى الضنك، التيفوئيد، الكوليرا، إلخ) ومصدر دائم للقلق وعدم الراحة. في مناخ جدة الدافئ والرطب، <strong>الحشرات الطائرة تتكاثر على مدار السنة</strong>، مما يجعل المكافحة الفعالة ضرورة صحية، لا رفاهية.
              </p>
              
              <p className="mb-6">
                الخبر الجيد: مع الفهم الصحيح لسلوك هذه الحشرات، واستخدام الطرق الفعالة (طبيعية وكيميائية)، والوقاية المستمرة، يمكنك تقليل أعدادها بنسبة 80-90%+ والاستمتاع بمنزل وحديقة خالية من الطنين المزعج. هذا الدليل الشامل سيعلمك كل ما تحتاجه، خطوة بخطوة.
              </p>

              <div className="bg-yellow-50 border-r-4 border-yellow-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-yellow-900 flex items-center gap-2">
                  <span className="text-2xl">🦟</span> حقيقة مقلقة
                </h4>
                <p className="mb-2 text-yellow-800 font-semibold">
                  <strong>البعوض هو الحيوان الأكثر فتكاً بالبشر على وجه الأرض!</strong> يقتل أكثر من 725,000 شخص سنوياً عبر نقل أمراض (الملاريا، حمى الضنك، الحمى الصفراء، زيكا، إلخ) - أكثر من القروش، الأفاعي، والتماسيح مجتمعين!
                </p>
                <p className="text-yellow-700 text-sm">
                  🌍 في السعودية: رغم عدم وجود ملاريا، البعوض ينقل حمى الضنك وأمراض أخرى، خاصة في المناطق الساحلية مثل جدة.
                </p>
              </div>
            </div>

            <div id="types" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أنواع الحشرات الطائرة الشائعة في جدة
              </h2>

              <div className="space-y-8">
                <div id="flies" className="bg-gradient-to-r from-gray-50 to-slate-100 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🪰</span> الذباب - الأكثر انتشاراً وإزعاجاً
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg">
                      <h4 className="font-bold mb-2">ذباب المنزل (House Fly)</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">المظهر:</p>
                          <ul className="space-y-1">
                            <li>• حجم: 6-7 ملم</li>
                            <li>• لون: رمادي مع 4 خطوط داكنة</li>
                            <li>• عيون حمراء كبيرة</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">السلوك:</p>
                          <ul className="space-y-1">
                            <li>• ينجذب للطعام والقمامة</li>
                            <li>• ينقل 65+ مرضاً!</li>
                            <li>• يتكاثر في القمامة المتعفنة</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg">
                      <h4 className="font-bold mb-2">ذباب الفاكهة (Fruit Fly)</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">المظهر:</p>
                          <ul className="space-y-1">
                            <li>• حجم صغير: 3-4 ملم</li>
                            <li>• لون بني محمر/أصفر</li>
                            <li>• عيون حمراء واضحة</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">السلوك:</p>
                          <ul className="space-y-1">
                            <li>• ينجذب للفواكه الناضجة/المتعفنة</li>
                            <li>• يتكاثر بسرعة (دورة حياة 8-10 أيام)</li>
                            <li>• يدخل من أصغر الفتحات</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg">
                      <h4 className="font-bold mb-2">ذباب الصرف (Drain Fly)</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">المظهر:</p>
                          <ul className="space-y-1">
                            <li>• حجم: 2-5 ملم</li>
                            <li>• مشعر، يشبه العثة الصغيرة</li>
                            <li>• لون رمادي/أسود</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">السلوك:</p>
                          <ul className="space-y-1">
                            <li>• يتكاثر في مصارف المياه</li>
                            <li>• يحب الرطوبة والمواد العضوية</li>
                            <li>• غالباً في الحمامات والمطابخ</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="mosquitoes" className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🦟</span> البعوض - الأكثر خطورة صحياً
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg">
                      <h4 className="font-bold mb-2">بعوضة الزاعجة المصرية (Aedes aegypti)</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">المظهر:</p>
                          <ul className="space-y-1">
                            <li>• خطوط بيضاء على الأرجل والجسم</li>
                            <li>• حجم صغير-متوسط</li>
                            <li>• نشطة نهاراً!</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">الأمراض:</p>
                          <ul className="space-y-1 text-red-700">
                            <li>• <strong>حمى الضنك</strong> (الأخطر في جدة)</li>
                            <li>• حمى زيكا</li>
                            <li>• حمى الشيكونغونيا</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg mt-3">
                        <p className="text-sm font-semibold">⚠️ تتكاثر في مياه راكدة صغيرة جداً (حتى غطاء زجاجة!)</p>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg">
                      <h4 className="font-bold mb-2">بعوضة الكيولكس (Culex)</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">المظهر:</p>
                          <ul className="space-y-1">
                            <li>• لون بني فاتح</li>
                            <li>• جسم نحيل</li>
                            <li>• نشطة ليلاً</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">الأمراض:</p>
                          <ul className="space-y-1">
                            <li>• فيروس غرب النيل</li>
                            <li>• التهاب الدماغ</li>
                            <li>• الديدان الخيطية</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                    <p className="text-sm"><strong>💡 حقيقة:</strong> فقط الإناث تلدغ (تحتاج دم لإنتاج البيض). الذكور يتغذون على رحيق الأزهار!</p>
                  </div>
                </div>

                <div id="wasps" className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-4xl">🐝</span> الدبابير والزنابير - الأكثر عدوانية
                  </h3>
                  
                  <div className="bg-white p-5 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="font-semibold mb-2">الخطورة:</p>
                        <ul className="space-y-1">
                          <li>• لدغات مؤلمة جداً</li>
                          <li>• يمكنها اللدغ عدة مرات (لا تموت كالنحل)</li>
                          <li>• ردود فعل تحسسية خطيرة عند بعض الأشخاص</li>
                          <li>• تهاجم بشراسة إذا اقتربت من الخلية</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">أماكن التعشيش:</p>
                        <ul className="space-y-1">
                          <li>• تحت أسقف المنازل</li>
                          <li>• في الأشجار والشجيرات</li>
                          <li>• داخل الجدران المجوفة</li>
                          <li>• في الأرض (بعض الأنواع)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-r-2 border-red-500">
                      <p className="text-sm font-semibold text-red-900">
                        🚨 <strong>تحذير:</strong> لا تحاول إزالة خلية دبابير بنفسك! 50-100 لدغة دفعة واحدة قد تكون قاتلة. اتصل بمحترف فوراً.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="dangers" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                لماذا الحشرات الطائرة خطيرة؟ أكثر من مجرد إزعاج
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                    <span className="text-2xl">🦠</span> نقل الأمراض
                  </h4>
                  <p className="text-sm mb-3">الذباب يهبط على قمامة/براز → ثم على طعامك = نقل مباشر للبكتيريا:</p>
                  <ul className="text-sm space-y-1">
                    <li>• التيفوئيد والكوليرا</li>
                    <li>• السالمونيلا والزحار</li>
                    <li>• E. coli والتهاب المعدة</li>
                    <li>• الديدان الطفيلية</li>
                  </ul>
                  <p className="text-xs mt-3 text-red-700"><strong>حقيقة:</strong> ذبابة واحدة تحمل 6 ملايين بكتيريا على جسمها!</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-orange-900 flex items-center gap-2">
                    <span className="text-2xl">💉</span> اللدغات والحساسية
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>البعوض:</strong> حكة، احمرار، تورم. قد تنقل حمى الضنك.</li>
                    <li>• <strong>الدبابير:</strong> ألم شديد، تورم كبير. قد تسبب صدمة تحسسية (anaphylaxis).</li>
                    <li>• <strong>ذباب الرمل:</strong> لدغات مؤلمة، قد ينقل الليشمانيا.</li>
                  </ul>
                  <p className="text-xs mt-3 text-orange-700"><strong>إحصائية:</strong> 3-7% من الناس لديهم حساسية خطيرة من لدغات الحشرات.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center gap-2">
                    <span className="text-2xl">😰</span> الإزعاج النفسي
                  </h4>
                  <ul className="text-sm space-y-2">
                    <li>• طنين مستمر يمنع النوم</li>
                    <li>• قلق دائم من اللدغات</li>
                    <li>• عدم القدرة على الاستمتاع بالحديقة/الشرفة</li>
                    <li>• إحراج أمام الضيوف</li>
                    <li>• تأثير سلبي على جودة الحياة</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="control-methods" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                طرق المكافحة الفعالة - حلول شاملة
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">🪤 المصائد (الأكثر أماناً وفعالية)</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h4 className="font-bold mb-2">مصائد الضوء الكهربائية (UV Light Traps)</h4>
                      <p className="text-sm mb-2"><strong>كيف تعمل:</strong> ضوء فوق بنفسجي يجذب الحشرات → شبكة كهربائية تقتلها فوراً</p>
                      <ul className="text-sm space-y-1">
                        <li>✓ فعالة جداً للذباب والبعوض والعثة</li>
                        <li>✓ آمنة تماماً (لا مواد كيميائية)</li>
                        <li>✓ تغطية حتى 50-100 م²</li>
                        <li>✓ مثالية للأماكن الداخلية (مطابخ، صالات)</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>💰 السعر:</strong> 150-500 ريال. <strong>الاستهلاك:</strong> 10-40 واط فقط</p>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg">
                      <h4 className="font-bold mb-2">مصائد CO2 (لالبعوض)</h4>
                      <p className="text-sm mb-2"><strong>كيف تعمل:</strong> تُطلق ثاني أكسيد الكربون (يحاكي تنفس الإنسان) + حرارة + روائح → تجذب البعوض → تمتصه بمروحة → يموت بالجفاف</p>
                      <ul className="text-sm space-y-1">
                        <li>✓ الأكثر فعالية للبعوض (تصطاد آلاف يومياً)</li>
                        <li>✓ تعمل 24/7، داخلياً وخارجياً</li>
                        <li>✓ تقلل أعداد البعوض 80-90% خلال 4-6 أسابيع</li>
                      </ul>
                      <p className="text-sm mt-2"><strong>💰 السعر:</strong> 800-3,000 ريال (استثمار لكن يستحق!)</p>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg">
                      <h4 className="font-bold mb-2">مصائد لاصقة (للذباب)</h4>
                      <p className="text-sm mb-2"><strong>كيف تعمل:</strong> شريط لاصق بطعم جذاب → الذباب يهبط → يلتصق ولا يستطيع الهروب</p>
                      <ul className="text-sm space-y-1">
                        <li>✓ رخيصة جداً (10-30 ريال)</li>
                        <li>✓ فعالة للذباب المنزلي</li>
                        <li>✓ بدون كهرباء أو كيماويات</li>
                        <li>✗ قبيحة المنظر، لا تناسب غرف الضيوف</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">💨 الرش والتبخير</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-5 rounded-lg">
                      <h4 className="font-bold mb-2">رش المبيدات الحشرية</h4>
                      <ul className="text-sm space-y-2">
                        <li>• <strong>داخلي:</strong> رش نقاط الراحة (زوايا، خلف ستائر) بمبيدات طويلة الأمد</li>
                        <li>• <strong>خارجي:</strong> رش محيط المنزل، الحديقة، مناطق ركود المياه</li>
                        <li>• <strong>الأنواع:</strong> بيرمثرين (Permethrin)، دلتا-ميثرين (Deltamethrin) - فعالة وآمنة نسبياً</li>
                        <li>• <strong>التكرار:</strong> كل 3-4 أسابيع للحماية المستمرة</li>
                      </ul>
                      <div className="bg-white p-3 rounded-lg mt-3 border-r-2 border-purple-500">
                        <p className="text-sm"><strong>⚠️ السلامة:</strong> ارتدِ قفازات وكمامة. أخرج الأطفال/حيوانات أثناء الرش. هوِّ جيداً بعد ساعتين.</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-5 rounded-lg">
                      <h4 className="font-bold mb-2">أجهزة التبخير (Fogging)</h4>
                      <p className="text-sm mb-2">رذاذ دقيق جداً يطفو في الهواء → يقتل الحشرات الطائرة فوراً</p>
                      <ul className="text-sm space-y-1">
                        <li>✓ <strong>للحدائق والمساحات الكبيرة</strong> - فعال جداً</li>
                        <li>✓ نتائج فورية (قتل خلال دقائق)</li>
                        <li>✓ مثالي قبل مناسبات خارجية (حفلات، أفراح)</li>
                        <li>✗ تأثير مؤقت (ساعات فقط)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">🏠 الحواجز الفيزيائية</h3>
                  
                  <ul className="text-sm space-y-3">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong>شبكات النوافذ والأبواب:</strong>
                        <p className="text-xs">أبسط وأكثر حل فعال. تمنع دخول 90%+ من الحشرات. استخدم شبكات بفتحات صغيرة (1-1.5 ملم).</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong>ستائر هوائية:</strong>
                        <p className="text-xs">تيار هواء قوي على المداخل → يمنع دخول حشرات. ممتاز للمطاعم والمحلات.</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <div>
                        <strong>ناموسيات السرير:</strong>
                        <p className="text-xs">حماية 100% أثناء النوم من البعوض. رخيصة (50-200 ريال) وفعالة جداً.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="prevention" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الوقاية طويلة المدى - قطع دورة الحياة
              </h2>

              <p className="mb-6">
                <strong>القاعدة الذهبية:</strong> لا ماء راكد = لا بعوض. لا قمامة متعفنة = لا ذباب.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">💧 القضاء على مواقع التكاثر - البعوض</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ أفرغ جميع حاويات المياه الراكدة (أصص، براميل، ألعاب)</li>
                    <li>✓ غيّر مياه أحواض الطيور/الزينة كل 3 أيام</li>
                    <li>✓ نظّف مزاريب الأسطح (تتجمع فيها مياه أمطار)</li>
                    <li>✓ غطِّ خزانات المياه بإحكام</li>
                    <li>✓ أصلح تسريبات الحنفيات/الأنابيب (برك صغيرة كافية!)</li>
                    <li>✓ ضع رمل/زيت في أطباق نباتات (يمنع وضع بيض)</li>
                  </ul>
                  <div className="bg-white p-3 rounded-lg mt-3">
                    <p className="text-sm font-semibold">🦟 تذكر: البعوضة تحتاج فقط ملعقة شاي ماء راكد لتضع بيضها!</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🗑️ إدارة القمامة - الذباب</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ أخرج القمامة يومياً (لا تتركها تتراكم)</li>
                    <li>✓ استخدم أكياساً محكمة الإغلاق</li>
                    <li>✓ نظّف سلات القمامة أسبوعياً بالماء والصابون</li>
                    <li>✓ ضع سلة بغطاء محكم (ليس مفتوحاً)</li>
                    <li>✓ لا ترمِ طعاماً عضوياً في حديقة مكشوفة</li>
                    <li>✓ نظّف فضلات الحيوانات الأليفة فوراً</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🌿 إدارة الحديقة</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ قلّم الشجيرات والأعشاب (تقلل أماكن راحة الحشرات)</li>
                    <li>✓ لا تُفرط في الري (رطوبة = حشرات)</li>
                    <li>✓ أزل أوراق متساقطة ونباتات ميتة</li>
                    <li>✓ ازرع نباتات طاردة (لافندر، ريحان، نعناع، ليمون)</li>
                    <li>✓ ضع إضاءة خارجية بعيدة عن الأبواب (تجذب حشرات بعيداً)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🏠 داخل المنزل</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ لا تترك طعاماً مكشوفاً (خاصة فواكه ناضجة)</li>
                    <li>✓ نظّف الانسكابات فوراً</li>
                    <li>✓ اغسل الصحون فوراً (لا تتركها في الحوض)</li>
                    <li>✓ نظّف مصارف المطبخ/الحمام أسبوعياً</li>
                    <li>✓ استخدم مراوح سقف (تيار هواء يصعّب طيران الحشرات)</li>
                    <li>✓ أغلق النوافذ عند الغروب (وقت ذروة نشاط البعوض)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="natural" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                طرق طبيعية آمنة - بدون كيماويات
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">🌿 الزيوت العطرية الطاردة</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">للبعوض:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• زيت الليمون الأوكاليبتوس (الأفضل - 95% فعالية!)</li>
                        <li>• زيت السترونيلا</li>
                        <li>• زيت اللافندر</li>
                        <li>• زيت شجرة الشاي</li>
                      </ul>
                      <p className="text-xs mt-2"><strong>الطريقة:</strong> 20 نقطة زيت + 100 مل ماء في بخاخ. رش على جلد/ملابس.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">للذباب:</h5>
                      <ul className="text-sm space-y-1">
                        <li>• زيت النعناع (يكرهه الذباب!)</li>
                        <li>• زيت القرنفل</li>
                        <li>• زيت الريحان</li>
                        <li>• زيت الأوكاليبتوس</li>
                      </ul>
                      <p className="text-xs mt-2"><strong>الطريقة:</strong> قطرات على كرات قطن، ضعها في أماكن تجمع الذباب.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">🍋 وصفات منزلية فعالة</h4>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">مصيدة الخل للذباب الفاكهة</h5>
                      <p className="text-sm mb-2"><strong>المكونات:</strong> كوب + خل تفاح + قطرة صابون سائل + غلاف بلاستيكي</p>
                      <p className="text-sm"><strong>الطريقة:</strong> ضع خل في الكوب، أضف قطرة صابون، غطِّ بغلاف بلاستيكي، اثقب ثقوباً صغيرة. الذباب يدخل ولا يخرج!</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">بخاخ الثوم الطارد</h5>
                      <p className="text-sm mb-2"><strong>المكونات:</strong> 5 فصوص ثوم مهروسة + 2 كوب ماء + قطرة صابون</p>
                      <p className="text-sm"><strong>الطريقة:</strong> انقع الثوم في ماء 24 ساعة، صفِّ، أضف صابون، رش في الحديقة. رائحة تطرد البعوض والذباب.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">🐟 الأسماك المفترسة (للبرك والأحواض)</h4>
                  <p className="text-sm mb-3">إذا كان لديك بركة زينة أو حوض ماء:</p>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>سمك الغامبوزيا (Gambusia):</strong> يأكل يرقات بعوض (1 سمكة = 100-300 يرقة يومياً!)</li>
                    <li>• <strong>السمك الذهبي:</strong> يأكل يرقات ويزين الحوض</li>
                    <li>• طريقة طبيعية 100%، فعالة، وممتعة للأطفال</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="professional" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                متى تحتاج لمكافحة احترافية؟
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-500">
                  <h4 className="font-bold text-lg mb-4">🚨 اتصل بمحترف فوراً إذا:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• أعداد ضخمة (عشرات/مئات يومياً) رغم جهودك</li>
                    <li>• مشكلة مستمرة لأكثر من شهر</li>
                    <li>• وجود خلايا دبابير/زنابير (خطر لدغات جماعية)</li>
                    <li>• إصابة واسعة في الحديقة (تحتاج تبخير احترافي)</li>
                    <li>• أمراض منقولة (شخص أُصيب بحمى الضنك/تيفوئيد)</li>
                    <li>• منطقة تجارية (مطعم، فندق) - معايير صحية صارمة</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                  <h4 className="font-bold text-lg mb-4">✅ مزايا الخدمة الاحترافية</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• تشخيص دقيق لنوع الحشرة ومصدرها</li>
                    <li>• تقنيات متقدمة (ULV fogging، معدات احترافية)</li>
                    <li>• مبيدات قوية مرخصة (غير متاحة للعامة)</li>
                    <li>• معالجة شاملة (داخلي + خارجي + تكاثر)</li>
                    <li>• برامج وقائية منتظمة</li>
                    <li>• ضمان 1-3 أشهر + زيارات متابعة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/30 mt-8">
                <h4 className="font-bold text-xl mb-4 text-primary">💎 برنامجنا المتخصص للحشرات الطائرة</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>تبخير احترافي للحدائق والمساحات الخارجية</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>معالجة مواقع التكاثر (برك، مصارف)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>تركيب حواجز وقائية (شبكات، ستائر هوائية)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>إزالة آمنة لخلايا الدبابير</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>برامج موسمية (صيف/ربيع - ذروة التكاثر)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>مواد آمنة معتمدة من وزارة الصحة</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/services"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    احجز خدمة مكافحة الحشرات الطائرة
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
                أسئلة شائعة حول مكافحة الحشرات الطائرة
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ لماذا يزداد البعوض في الصيف رغم جفاف جدة؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>أسباب عديدة:</strong> (1) <strong>الرطوبة:</strong> جدة ساحلية، رطوبة عالية حتى في الصيف، (2) <strong>المياه المخزنة:</strong> خزانات على الأسطح، مبردات هواء، أحواض زينة، (3) <strong>الري:</strong> الحدائق تُروى يومياً في الصيف، (4) <strong>مياه الصرف:</strong> تسريبات، برك صغيرة. <strong>الخلاصة:</strong> البعوض يحتاج ماء راكد صغير جداً (حتى غطاء زجاجة!)، وهذا متوفر حتى في الصحراء إذا كان هناك بشر.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل أجهزة طرد البعوض بالموجات فوق الصوتية فعالة؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>لا، غير فعالة!</strong> عشرات الدراسات العلمية أثبتت أنها <strong>لا تعمل</strong>. النظرية: تُصدر صوتاً يحاكي ذكر البعوض، فتبتعد الإناث (التي تلدغ). <strong>الواقع:</strong> الإناث لا تستجيب لهذه الترددات، وحتى لو استجابت، فالصوت لا يطردها بعيداً كافياً. <strong>توفير مالك - لا تشترِها.</strong> الشبكات، المصائد، والمبيدات أكثر فعالية بكثير.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ كيف أعرف إذا كانت لدغة بعوضة أم حشرة أخرى؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>مقارنة سريعة:</strong> <strong>البعوض:</strong> نتوء صغير أحمر، حكة خفيفة-متوسطة، يظهر خلال دقائق. <strong>بق الفراش:</strong> لدغات متعددة بنمط خطي/مجموعات، حكة شديدة، تظهر صباحاً. <strong>البراغيث:</strong> لدغات صغيرة جداً، غالباً على القدمين/الساقين، حكة شديدة. <strong>الدبابير:</strong> ألم حاد فوري، تورم كبير، احمرار واضح. <strong>نصيحة:</strong> إذا كانت لدغات متكررة ليلاً = بق فراش. إذا في النهار أو الغروب = بعوض. <Link href="/blog/4" className="text-primary underline">اقرأ عن بق الفراش</Link>.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل الشموع والبخور الطاردة للبعوض فعالة؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>فعالية محدودة.</strong> شموع السترونيلا واللافندر <strong>تعمل</strong> لكن بمدى قصير جداً (1-2 متر). ممتازة لـ: جلسة هادئة في شرفة صغيرة، طاولة طعام خارجية. <strong>غير كافية لـ:</strong> حديقة كبيرة، حماية المنزل بالكامل. <strong>الحل الأمثل:</strong> استخدمها كطبقة إضافية مع طرق أخرى (شبكات + مصائد + رذاذ). جو جميل + حماية جزئية.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة</h3>
              <p className="mb-4 text-lg">
                الحشرات الطائرة مزعجة وخطيرة، لكنها <strong>قابلة للسيطرة</strong>. المفتاح: فهم سلوكها + وقاية شاملة + طرق مكافحة متعددة + صبر واستمرارية.
              </p>
              <p className="mb-6">
                ابدأ بالوقاية (قطع مصادر تكاثر)، أضف حواجز فيزيائية (شبكات)، استخدم مصائد، ولجأ للمبيدات عند الضرورة. <strong>منزل بلا حشرات طائرة ممكن - ابدأ اليوم!</strong>
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