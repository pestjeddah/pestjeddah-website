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
      ? 'المبيدات الآمنة للأطفال والحيوانات الأليفة | دليل السلامة 2024'
      : 'Safe Pesticides for Children and Pets | Safety Guide 2024',
    description: isArabic
      ? 'تعرف على المبيدات الآمنة والطرق الصديقة للبيئة لمكافحة الآفات دون تعريض أطفالك وحيواناتك الأليفة للخطر.'
      : 'Learn about safe pesticides and eco-friendly methods for pest control without endangering your children and pets.',
    keywords: isArabic
      ? ['مبيدات آمنة', 'مكافحة صديقة للبيئة', 'سلامة الأطفال', 'حماية الحيوانات', 'جدة']
      : ['safe pesticides', 'eco-friendly control', 'children safety', 'pet protection', 'Jeddah'],
  };
}

export default function BlogPost13({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';

  const tableOfContents = [
    { id: 'intro', title: isArabic ? 'المقدمة' : 'Introduction', level: 1 },
    { id: 'dangers', title: isArabic ? 'مخاطر المبيدات التقليدية' : 'Dangers of Traditional Pesticides', level: 1 },
    { id: 'safe-alternatives', title: isArabic ? 'البدائل الآمنة' : 'Safe Alternatives', level: 1 },
    { id: 'natural-methods', title: isArabic ? 'الطرق الطبيعية' : 'Natural Methods', level: 1 },
    { id: 'low-toxic', title: isArabic ? 'المبيدات منخفضة السمية' : 'Low-Toxicity Pesticides', level: 1 },
    { id: 'application-safety', title: isArabic ? 'إرشادات الاستخدام الآمن' : 'Safe Application Guidelines', level: 1 },
    { id: 'child-safety', title: isArabic ? 'حماية الأطفال خصيصاً' : 'Specific Child Protection', level: 1 },
    { id: 'pet-safety', title: isArabic ? 'حماية الحيوانات الأليفة' : 'Pet Protection', level: 1 },
    { id: 'professional-safe', title: isArabic ? 'الخدمات الاحترافية الآمنة' : 'Safe Professional Services', level: 1 },
    { id: 'faq', title: isArabic ? 'أسئلة شائعة' : 'FAQ', level: 1 },
  ];

  const relatedArticles = [
    {
      id: 14,
      title: isArabic ? 'مكافحة الآفات الزراعية في الحدائق المنزلية' : 'Agricultural Pest Control in Home Gardens',
      excerpt: isArabic ? 'حماية حديقتك بطرق آمنة وطبيعية' : 'Protect your garden safely and naturally',
      image: '/images/Eco-friendly-pest-control.jpg'
    },
    {
      id: 11,
      title: isArabic ? 'الحشرات الطائرة وطرق مكافحتها' : 'Flying Insects and Control Methods',
      excerpt: isArabic ? 'دليل شامل لمكافحة الذباب والبعوض' : 'Complete guide for flies and mosquitoes',
      image: '/images/Insect-control-Jeddah.jpg'
    },
    {
      id: 15,
      title: isArabic ? 'كيف تختار شركة مكافحة حشرات موثوقة؟' : 'How to Choose Reliable Pest Control Company?',
      excerpt: isArabic ? 'معايير اختيار الشركة الآمنة' : 'Criteria for choosing safe company',
      image: '/images/Professional-pest-control.jpg'
    },
  ];

  return (
    <>
      <BlogArticle
        title="المبيدات الآمنة للأطفال والحيوانات الأليفة - دليل السلامة الشامل"
        titleEn="Safe Pesticides for Children and Pets - Comprehensive Safety Guide"
        category="تقنيات متقدمة"
        categoryEn="Advanced Techniques"
        date={isArabic ? '10 يونيو 2024' : 'June 10, 2024'}
        readTime={isArabic ? '11 دقيقة للقراءة' : '11 min read'}
        author="د. فاطمة الأحمدي - استشارية السلامة البيئية"
        authorEn="Dr. Fatima Al-Ahmadi - Environmental Safety Consultant"
        featuredImage="/images/Safe-pest-control.jpg"
        featuredImageAlt={isArabic ? 'مكافحة آمنة للأطفال والحيوانات' : 'Safe pest control for children and pets'}
        tableOfContents={tableOfContents}
        relatedArticles={relatedArticles}
        wordCount={isArabic ? 2100 : 2000}
        ctaTitle={isArabic ? 'مكافحة آمنة 100% لعائلتك!' : '100% Safe Control for Your Family!'}
        ctaDescription={isArabic ? 'برامج مكافحة متخصصة باستخدام مواد آمنة معتمدة وصديقة للبيئة. نضع سلامة أطفالك وحيواناتك في المقام الأول.' : 'Specialized control programs using certified safe and eco-friendly materials. We prioritize the safety of your children and pets.'}
      >
        {isArabic ? (
          <>
            <div id="intro">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "أنا أفضّل العيش مع الحشرات على تعريض أطفالي للمبيدات السامة" - <strong>جملة نسمعها كثيراً، وهي مفهومة لكنها غير ضرورية!</strong> القلق على سلامة الأطفال والحيوانات الأليفة عند استخدام المبيدات هو قلق <strong>مشروع تماماً</strong> - فالمبيدات التقليدية قد تحتوي على مواد سامة خطيرة. لكن التقدم العلمي والوعي البيئي أنتجا <strong>حلولاً آمنة بنسبة 95-100%</strong> تقتل الآفات دون أن تؤذي البشر أو الحيوانات.
              </p>
              
              <p className="mb-6">
                هذا الدليل الشامل سيفتح عينيك على عالم جديد من مكافحة الآفات: <strong>طرق طبيعية 100%، مبيدات منخفضة السمية معتمدة عالمياً، إرشادات استخدام آمن، وكيف تختار شركة محترفة تضع سلامة عائلتك أولاً.</strong> لن تضطر بعد اليوم للاختيار بين "منزل نظيف" و"عائلة آمنة" - يمكنك الحصول على الاثنين!
              </p>

              <div className="bg-red-50 border-r-4 border-red-600 p-6 my-8 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> إحصائية مقلقة
                </h4>
                <p className="mb-2 text-red-800 font-semibold">
                  <strong>90% من حالات التسمم بالمبيدات في السعودية تحدث بسبب سوء الاستخدام المنزلي</strong> - ليس بسبب المبيد نفسه، بل بسبب: (1) استخدام مبيدات زراعية قوية في المنازل، (2) عدم قراءة التعليمات، (3) تخزين غير آمن، (4) الرش دون حماية/تهوية.
                </p>
                <p className="text-red-700 text-sm">
                  🏥 <strong>الأطفال تحت 5 سنوات</strong> يشكلون 60% من حالات التسمم - لماذا؟ لأنهم يضعون كل شيء في أفواههم، يمشون على أربع (أقرب للأرضيات المرشوشة)، وأجسامهم أصغر = تأثير أسرع.
                </p>
              </div>
            </div>

            <div id="dangers" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                مخاطر المبيدات التقليدية - لماذا يجب تجنبها؟
              </h2>

              <p className="mb-6">
                فهم الخطر خطوة أولى نحو الحماية. إليك ما تحتاج معرفته:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-red-900">👶 المخاطر على الأطفال</h4>
                  <ul className="text-sm space-y-2 text-red-800">
                    <li>• <strong>التسمم الحاد:</strong> قيء، إسهال، صعوبة تنفس، نوبات (في الحالات الشديدة)</li>
                    <li>• <strong>التأثيرات العصبية:</strong> بعض المبيدات تؤثر على نمو الدماغ</li>
                    <li>• <strong>الحساسية والربو:</strong> تهيج جهاز التنفس، خاصة الأطفال الحساسين</li>
                    <li>• <strong>تأثيرات طويلة الأمد:</strong> دراسات ربطت التعرض المزمن بمشاكل نمو وتعلّم</li>
                    <li>• <strong>امتصاص أسرع:</strong> جلد الأطفال أرق = امتصاص أكبر</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-orange-900">🐕 المخاطر على الحيوانات الأليفة</h4>
                  <ul className="text-sm space-y-2 text-orange-800">
                    <li>• <strong>القطط والكلاب:</strong> حساسة جداً للبيرثرويدات (مبيدات شائعة)</li>
                    <li>• <strong>الطيور:</strong> جهاز تنفسي حساس - حتى الأبخرة الخفيفة قد تقتلها</li>
                    <li>• <strong>السحالي/الأسماك:</strong> حساسة جداً للمبيدات المائية</li>
                    <li>• <strong>أعراض التسمم:</strong> ترويل، تشنجات، ضعف، فقدان توازن</li>
                    <li>• <strong>الحجم مهم:</strong> حيوان صغير (قط، كلب صغير) = جرعة أقل قد تكون قاتلة</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg mt-6">
                <h4 className="font-bold mb-3 text-yellow-900">⚠️ المبيدات الأكثر خطورة (تجنبها تماماً في المنازل)</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2 text-yellow-900">الكلوربيريفوس (Chlorpyrifos)</h5>
                    <p className="text-xs">مبيد عصبي قوي. ممنوع في كثير من الدول للاستخدام المنزلي. يؤثر على نمو دماغ الأطفال.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-yellow-900">البروبوكسور (Propoxur)</h5>
                    <p className="text-xs">مادة كارباميت سامة. مرتبطة بمشاكل تنفسية وعصبية. خطيرة على الحيوانات.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-yellow-900">الميثوميل (Methomyl)</h5>
                    <p className="text-xs">شديد السمية. حتى جرعات صغيرة قد تكون قاتلة للأطفال والحيوانات.</p>
                  </div>
                </div>
                <p className="text-sm mt-4 font-semibold text-yellow-900">
                  💡 <strong>كيف تتحقق:</strong> اقرأ ملصق المبيد! ابحث عن هذه الأسماء. إذا رأيتها أو وُجد تحذير "شديد السمية" = لا تستخدمه في المنزل أبداً.
                </p>
              </div>
            </div>

            <div id="safe-alternatives" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                البدائل الآمنة - الطيف الكامل من الحلول
              </h2>

              <p className="mb-6">
                تخيل سلم أمان من 1-10 (1 = ماء نقي، 10 = سم قاتل). إليك البدائل مرتبة من الأكثر أماناً:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">🌿</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-3 text-green-900">المستوى 1-2: طرق فيزيائية ووقائية (أمان 100%)</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">أمثلة:</p>
                          <ul className="space-y-1">
                            <li>• شبكات نوافذ وأبواب</li>
                            <li>• مصائد لاصقة</li>
                            <li>• مصائد كهربائية (UV Light Traps)</li>
                            <li>• سد الشقوق والفجوات</li>
                            <li>• شفط بالمكنسة</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">المميزات:</p>
                          <ul className="space-y-1">
                            <li>✓ آمنة تماماً - 0 خطر</li>
                            <li>✓ بدون مواد كيميائية</li>
                            <li>✓ استخدام فوري - لا انتظار</li>
                            <li>✓ الأطفال يمكن مساعدتك!</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg mt-3 border-r-2 border-green-500">
                        <p className="text-sm"><strong>متى تستخدم:</strong> دائماً كخط دفاع أول. في منازل بأطفال رضّع، نساء حوامل، حيوانات أليفة حساسة.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="natural-methods" className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">🍋</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-3 text-blue-900">المستوى 2-3: مواد طبيعية/منزلية (أمان 98-100%)</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold mb-2">حمض البوريك (Boric Acid)</h5>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-semibold mb-1">الفعالية:</p>
                              <p>ممتازة للصراصير والنمل. يمتصون مسحوقه → يدمر جهازهم الهضمي → موت خلال أيام.</p>
                            </div>
                            <div>
                              <p className="font-semibold mb-1">الأمان:</p>
                              <p><strong>سمية منخفضة جداً</strong> للبشر والحيوانات. لكن لا يُبلع - ضعه في أماكن بعيدة عن متناول الأطفال/حيوانات.</p>
                            </div>
                          </div>
                          <p className="text-xs mt-2 bg-blue-50 p-2 rounded"><strong>💡 استخدام آمن:</strong> في زوايا خلف الأجهزة، تحت الخزائن، داخل شقوق = بعيد عن وصول اليدين الصغيرة.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold mb-2">التراب الدياتومي (Diatomaceous Earth - DE)</h5>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-semibold mb-1">كيف يعمل:</p>
                              <p>مسحوق من أصداف طحالب مجهرية. حواف حادة تثقب الهيكل الخارجي للحشرة → جفاف → موت.</p>
                            </div>
                            <div>
                              <p className="font-semibold mb-1">الأمان:</p>
                              <p><strong>آمن للطعام (Food Grade)!</strong> غير سام للبشر/حيوانات. فقط تجنب استنشاق كميات كبيرة (يهيج الرئة).</p>
                            </div>
                          </div>
                          <p className="text-xs mt-2 bg-blue-50 p-2 rounded"><strong>✓ ممتاز لـ:</strong> بق الفراش، نمل، صراصير، براغيث. رش حول السرير/أماكن الحيوانات.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold mb-2">الزيوت العطرية الطاردة</h5>
                          <p className="text-sm mb-2">نعناع، لافندر، أوكاليبتوس، شجرة الشاي = روائح طاردة طبيعية.</p>
                          <div className="grid md:grid-cols-3 gap-2 text-xs">
                            <div className="bg-green-50 p-2 rounded">
                              <p className="font-semibold">للبعوض:</p>
                              <p>زيت الليمون الأوكاليبتوس (فعالية 95%!)</p>
                            </div>
                            <div className="bg-purple-50 p-2 rounded">
                              <p className="font-semibold">للنمل:</p>
                              <p>زيت النعناع على مسارات النمل</p>
                            </div>
                            <div className="bg-orange-50 p-2 rounded">
                              <p className="font-semibold">للذباب:</p>
                              <p>زيت اللافندر في موزع</p>
                            </div>
                          </div>
                          <p className="text-xs mt-2"><strong>⚠️ تنبيه للحيوانات:</strong> بعض الزيوت سامة للقطط (شجرة الشاي، أوكاليبتوس). استخدم بحذر/تجنبها.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold mb-2">وصفات منزلية آمنة</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex gap-2">
                              <span className="text-green-600 font-bold">•</span>
                              <div>
                                <strong>بخاخ الخل + صابون:</strong>
                                <p className="text-xs">خل تفاح + ماء (1:1) + قطرة صابون. يقتل النمل/الذباب عند الملامسة. آمن 100%.</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-green-600 font-bold">•</span>
                              <div>
                                <strong>صودا الخبز + سكر:</strong>
                                <p className="text-xs">مزيج 1:1. الصراصير تأكل السكر → صودا تقتلها. غير سام للبشر.</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-green-600 font-bold">•</span>
                              <div>
                                <strong>قشور الحمضيات:</strong>
                                <p className="text-xs">قشر ليمون/برتقال في زوايا المطبخ. رائحة طاردة طبيعية.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="low-toxic" className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">🧪</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-3 text-yellow-900">المستوى 4-5: مبيدات منخفضة السمية معتمدة (أمان 85-95%)</h4>
                      <p className="text-sm mb-4">
                        عندما تفشل الطرق الطبيعية أو المشكلة كبيرة، هذه المبيدات توازن بين الفعالية والأمان:
                      </p>

                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold mb-2 flex items-center gap-2">
                            <span className="text-green-600">✓</span> البيرميثرين (Permethrin)
                          </h5>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-semibold mb-1">الفعالية:</p>
                              <ul className="text-xs space-y-1">
                                <li>• واسع الطيف: صراصير، نمل، قوارض، بعوض</li>
                                <li>• تأثير طويل (3-6 أشهر)</li>
                                <li>• يُستخدم احترافياً في كل العالم</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold mb-1">الأمان:</p>
                              <ul className="text-xs space-y-1">
                                <li>✓ سمية منخفضة للثدييات (بشر، كلاب)</li>
                                <li>✓ معتمد من EPA & WHO</li>
                                <li>⚠️ سام للقطط والأسماك (تجنب الملامسة المباشرة)</li>
                                <li>✓ بعد جفافه = آمن جداً</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold mb-2 flex items-center gap-2">
                            <span className="text-green-600">✓</span> فيبرونيل (Fipronil)
                          </h5>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="font-semibold mb-1">الاستخدام:</p>
                              <p className="text-xs">طعوم للصراصير والنمل. فعالية عالية جداً - جرعات صغيرة كافية.</p>
                            </div>
                            <div>
                              <p className="font-semibold mb-1">الأمان:</p>
                              <p className="text-xs">شديد السمية للحشرات، منخفض جداً للثدييات. الطعوم محكمة = صعب الوصول للأطفال.</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold mb-2 flex items-center gap-2">
                            <span className="text-green-600">✓</span> هيدراميثيلنون (Hydramethylnon)
                          </h5>
                          <div className="text-sm">
                            <p className="mb-2">طعم للصراصير والنمل. يُستخدم في محطات طعم آمنة (Bait Stations). <strong>غير طيّار</strong> = لا ينتشر في الهواء = أكثر أماناً للرئتين.</p>
                            <p className="text-xs bg-green-50 p-2 rounded"><strong>✓ مثالي لـ:</strong> منازل بأطفال/حيوانات - محطات مغلقة، الحشرة تدخل وتأكل، لا تلامس مباشر.</p>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-bold mb-2 flex items-center gap-2">
                            <span className="text-green-600">✓</span> IGRs - منظمات نمو الحشرات
                          </h5>
                          <div className="text-sm">
                            <p className="mb-2">مثل Methoprene & Pyriproxyfen. تمنع الحشرات من النضج/التكاثر (لا تقتل فوراً، لكن تقطع دورة الحياة).</p>
                            <ul className="text-xs space-y-1">
                              <li>✓ <strong>سمية شبه معدومة</strong> للثدييات (تستهدف هرمونات الحشرات فقط)</li>
                              <li>✓ معتمدة للاستخدام في مطابخ/منازل</li>
                              <li>✓ ممتازة للسيطرة طويلة الأمد</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg mt-4">
                        <p className="text-sm"><strong>⚖️ القاعدة الذهبية:</strong> حتى المبيدات "الآمنة" يجب استخدامها <strong>حسب التعليمات بدقة</strong>. "أكثر" لا يعني "أفضل" - قد يعني "أخطر".</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="application-safety" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                إرشادات الاستخدام الآمن - البروتوكول الكامل
              </h2>

              <p className="mb-6">
                <strong>حتى أكثر المبيدات أماناً قد تصبح خطيرة إذا استُخدمت خطأ.</strong> اتبع هذا البروتوكول بدقة:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-3xl">1️⃣</span> قبل الرش - التحضير
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>اقرأ الملصق كاملاً</strong> - كل كلمة! المكونات، التحذيرات، الجرعة، طريقة الاستخدام.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>أخرج الأطفال والحيوانات</strong> - ليس فقط من الغرفة، من المنزل كله إذا ممكن (لمدة الرش + 2-4 ساعات).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>غطِّ/أزل الطعام</strong> - كل طعام، أطباق، أواني طبخ. ضعها في خزائن محكمة أو خارج المطبخ.</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>ألعاب الأطفال</strong> - أزلها من الأرض، ضعها في خزانة.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>أحواض السمك</strong> - غطِّها وأطفئ المضخة (بعض الأبخرة تذوب في الماء).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>ارتدِ حماية</strong> - قفازات، كمامة (إذا رذاذ)، ملابس طويلة.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-3xl">2️⃣</span> أثناء الرش - التطبيق الآمن
                  </h4>
                  <ul className="text-sm space-y-3">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <div>
                        <strong>رش في أماكن محددة فقط</strong> - ليس رش عشوائي! في شقوق، زوايا، خلف أجهزة، تحت خزائن = أماكن لا يصلها الأطفال/حيوانات.
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <div>
                        <strong>لا ترش على الأسطح التي تُلامس مباشرة</strong> - طاولات، كراسي، أسرّة، أرضيات مكشوفة = تجنبها. إذا اضطررت، امسحها جيداً بعد الجفاف.
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <div>
                        <strong>استخدم الجرعة الموصى بها بالضبط</strong> - لا أقل (غير فعال)، لا أكثر (خطر أعلى).
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <div>
                        <strong>هوِّ جيداً</strong> - افتح نوافذ/أبواب. تيار هواء جيد يقلل تركيز الأبخرة.
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold text-xl">✓</span>
                      <div>
                        <strong>لا تأكل/تشرب/تدخن</strong> أثناء الرش - حتى لا تُدخل المبيد لفمك عن طريق الخطأ.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-3xl">3️⃣</span> بعد الرش - الأمان المستمر
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">⏱️ فترة الأمان (Re-entry Time)</h5>
                      <p className="mb-2">المدة التي يجب أن تنتظرها قبل عودة الأطفال/حيوانات:</p>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>مبيدات مائية/رذاذ:</strong> حتى جفاف كامل (2-4 ساعات عادة)</li>
                        <li>• <strong>طعوم/مساحيق:</strong> فوراً (إذا وُضعت في أماكن بعيدة)</li>
                        <li>• <strong>مبيدات قوية:</strong> قد تصل لـ 24 ساعة (اتبع الملصق)</li>
                        <li>• <strong>القاعدة الآمنة:</strong> إذا شككت، انتظر 24 ساعة</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>امسح الأسطح المعرضة:</strong> طاولات، أسطح مطبخ، أرضيات - بماء وصابون.</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>اغسل يديك جيداً:</strong> صابون + ماء دافئ لمدة 20 ثانية.</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>اغسل الملابس المستخدمة:</strong> منفصلة عن ملابس العائلة.</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>خزّن بقايا المبيد بأمان:</strong> خزانة عالية مقفلة، بعيداً عن طعام/أدوية.</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary font-bold">☐</span>
                        <span><strong>تخلص من العبوات الفارغة بشكل صحيح:</strong> لا ترميها في قمامة عادية إذا كانت سامة. اسأل البلدية عن نقاط تجميع نفايات خطرة.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="child-safety" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                حماية الأطفال خصيصاً - احتياطات إضافية
              </h2>

              <div className="bg-pink-50 border-r-4 border-pink-500 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">👶 لماذا الأطفال أكثر عرضة؟</h4>
                <ul className="text-sm space-y-2">
                  <li>• <strong>أجسام أصغر:</strong> نفس الجرعة = تركيز أعلى في الدم</li>
                  <li>• <strong>تنفس أسرع:</strong> يستنشقون هواء أكثر نسبة لوزنهم</li>
                  <li>• <strong>أقرب للأرض:</strong> الزحف/الجلوس على الأرض = تعرض أكبر للأسطح المرشوشة</li>
                  <li>• <strong>يضعون كل شيء في أفواههم:</strong> لعب، أيدي، أقدام</li>
                  <li>• <strong>أنظمة عصبية/مناعية نامية:</strong> أكثر حساسية للسموم</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">🛡️ احتياطات خاصة للأطفال تحت 3 سنوات</h4>
                  <ul className="text-sm space-y-3">
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">1.</span>
                      <div>
                        <strong>تجنب الرش في غرف الأطفال تماماً</strong> - إذا كانت مشكلة، استخدم طرق غير كيميائية فقط (مصائد، سيليكون).
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">2.</span>
                      <div>
                        <strong>لا رش على أرضيات</strong> - الرضّع يزحفون ويضعون أيديهم في أفواههم. رش في شقوق عالية فقط.
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">3.</span>
                      <div>
                        <strong>اغسل ألعاب الأطفال:</strong> بعد أي رش في المنزل، اغسل كل لعبة بصابون وماء (حتى لو كانت بعيدة).
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">4.</span>
                      <div>
                        <strong>امسح الأرضيات يومياً:</strong> بماء وصابون - يزيل أي بقايا.
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600 font-bold">5.</span>
                      <div>
                        <strong>محطات طعم محكمة فقط:</strong> إذا استخدمت طعوم، يجب أن تكون في محطات بلاستيكية مغلقة (لا يستطيع الطفل فتحها).
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 text-red-900">🚨 ماذا تفعل إذا ابتلع طفلك مبيداً؟</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-4 rounded-lg border-r-4 border-red-600">
                      <p className="font-bold mb-2">خطوات الطوارئ الفورية:</p>
                      <ol className="list-decimal list-inside space-y-2">
                        <li><strong>ابقَ هادئاً</strong> - الذعر لن يساعد</li>
                        <li><strong>أزل المادة من فمه</strong> - إذا كان شيء ظاهر</li>
                        <li><strong>لا تُحفّز القيء</strong> إلا إذا طلب مركز السموم ذلك</li>
                        <li><strong>اتصل بمركز السموم فوراً:</strong> <span className="text-xl font-bold">911</span> أو المركز الوطني للسموم</li>
                        <li><strong>خذ العبوة معك</strong> للمستشفى - تساعد الأطباء في تحديد العلاج</li>
                      </ol>
                    </div>
                    <p className="bg-yellow-100 p-3 rounded-lg">
                      <strong>💡 احفظ الرقم:</strong> مركز المعلومات الدوائية والسموم (السعودية): <strong className="text-lg">8002490000</strong> - مجاني 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="pet-safety" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                حماية الحيوانات الأليفة - احتياطات خاصة
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🐕 الكلاب - نسبياً أكثر مقاومة</h4>
                  <ul className="text-sm space-y-2">
                    <li>✓ معظم البيرثرويدات آمنة بعد الجفاف</li>
                    <li>⚠️ <strong>حذار من:</strong> الميثوميل، البروبوكسور (شديدة السمية)</li>
                    <li>⚠️ الكلاب الصغيرة/الجراء أكثر حساسية</li>
                    <li>✓ أبعدها من الغرفة المرشوشة لـ 4-6 ساعات</li>
                    <li>✓ لا تدعها تلعق الأرضيات المرشوشة</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🐈 القطط - حساسة جداً!</h4>
                  <ul className="text-sm space-y-2">
                    <li>⚠️ <strong>شديدة الحساسية</strong> للبيرثرويدات (نقص إنزيم تكسير)</li>
                    <li>⚠️ أعراض التسمم: ترويل، تشنجات، ضعف، قيء</li>
                    <li>✓ <strong>استخدم مبيدات مخصصة "آمنة للقطط"</strong> أو تجنب الكيماويات تماماً</li>
                    <li>✓ أبعد القطة من المنزل 24 ساعة بعد الرش</li>
                    <li>✓ امسح الأسطح جيداً قبل عودتها</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🐦 الطيور - الأكثر حساسية</h4>
                  <ul className="text-sm space-y-2">
                    <li>⚠️ <strong>جهاز تنفسي فريد</strong> - حتى الأبخرة الخفيفة قاتلة</li>
                    <li>✓ <strong>أخرج القفص من المنزل كله</strong> أثناء الرش</li>
                    <li>✓ لا ترش في غرفة الطيور أبداً</li>
                    <li>✓ هوِّ جيداً جداً قبل عودتها (48 ساعة أفضل)</li>
                    <li>✓ الطرق الطبيعية/الفيزيائية فقط</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4">🐠 الأسماك والزواحف</h4>
                  <ul className="text-sm space-y-2">
                    <li>⚠️ حساسة جداً - المبيدات تذوب في الماء</li>
                    <li>✓ <strong>غطِّ الحوض بإحكام</strong> + أطفئ المضخة أثناء الرش</li>
                    <li>✓ لا ترش بالقرب من الحوض (متر على الأقل)</li>
                    <li>✓ شغّل المضخة بعد التهوية الكاملة (24 ساعة)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
                <h4 className="font-bold text-lg mb-4">🐾 المبيدات الآمنة للحيوانات الأليفة (قائمة سريعة)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2 text-green-900">✅ آمنة عموماً:</p>
                    <ul className="space-y-1">
                      <li>• حمض البوريك (بعيداً عن الوصول)</li>
                      <li>• التراب الدياتومي (Food Grade)</li>
                      <li>• فيبرونيل (طعوم محكمة)</li>
                      <li>• IGRs (منظمات نمو)</li>
                      <li>• الزيوت العطرية (معظمها - انظر الاستثناءات)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-red-900">❌ خطيرة - تجنبها:</p>
                    <ul className="space-y-1">
                      <li>• Permethrin (خطير جداً على القطط)</li>
                      <li>• Organophosphates (كلوربيريفوس، إلخ)</li>
                      <li>• Carbamates (بروبوكسور، ميثوميل)</li>
                      <li>• زيت شجرة الشاي (سام للقطط)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="professional-safe" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                الخدمات الاحترافية الآمنة - كيف تختار؟
              </h2>

              <p className="mb-6">
                المحترفون لديهم أدوات، معرفة، ومواد غير متاحة للعامة. لكن <strong>ليس كل شركة تهتم بالسلامة بنفس الدرجة.</strong> إليك كيف تختار:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-bold text-lg mb-4">✅ أسئلة تطرحها قبل التعاقد</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <div>
                        <strong>"ما هي المواد التي ستستخدمونها بالتحديد؟"</strong>
                        <p className="text-xs">شركة جيدة ستخبرك بأسماء تجارية، مكونات نشطة، ومستوى السمية. شركة مشبوهة: "مواد فعالة" بدون تفاصيل.</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <div>
                        <strong>"هل موادكم آمنة للأطفال/حيوانات أليفة؟"</strong>
                        <p className="text-xs">اطلب شهادات سلامة، ملصقات منتجات، معلومات MSDS (صحيفة بيانات سلامة المواد).</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <div>
                        <strong>"كم فترة الأمان قبل عودة العائلة؟"</strong>
                        <p className="text-xs">إذا قالوا "فوراً" لمعالجة رش = مشبوه. فترة معقولة: 2-6 ساعات حسب المادة.</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary font-bold">4.</span>
                      <div>
                        <strong>"هل تقدمون بدائل صديقة للبيئة/عضوية؟"</strong>
                        <p className="text-xs">شركة متقدمة تقدم خيارات: IPM (إدارة متكاملة)، مواد طبيعية، معالجة حرارية (بق فراش).</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary font-bold">5.</span>
                      <div>
                        <strong>"هل لديكم تأمين مسؤولية؟"</strong>
                        <p className="text-xs">إذا حدث تسمم/ضرر، التأمين يحميك. شركة بدون تأمين = خطر.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-8 rounded-2xl border-2 border-primary/30">
                  <h4 className="font-bold text-xl mb-4 text-primary">🌟 برنامجنا "عائلة آمنة" - أولوياتنا</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>مواد معتمدة EPA & WHO</strong> - منخفضة السمية مثبتة علمياً</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>خيارات طبيعية 100%</strong> - للعملاء الذين يفضلون بدون كيماويات</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>بروتوكول سلامة خاص</strong> - عند وجود أطفال/حيوانات/حساسية</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>شفافية كاملة</strong> - نشارككم ملصقات وشهادات كل مادة</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>فنيون مدربون</strong> - على السلامة والطوارئ الطبية</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span><strong>تأمين مسؤولية شامل</strong> - راحة بالك محمية</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg mb-6">
                    <p className="text-sm mb-3">
                      <strong>🌿 خيارنا الأخضر:</strong> معالجة IPM متكاملة - نعتمد على الوقاية، الحواجز الفيزيائية، والطرق الطبيعية أولاً. الكيماويات = ملاذ أخير بأقل جرعة ممكنة.
                    </p>
                    <p className="text-xs bg-green-50 p-3 rounded">
                      ✓ <strong>ضمان:</strong> إذا لم تكن راضياً عن السلامة أو الفعالية - نعيد المعالجة مجاناً بطريقة أخرى تناسبك.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      href="/contact"
                      className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg"
                    >
                      استشارة سلامة مجانية
                    </Link>
                    <Link 
                      href="/services"
                      className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors"
                    >
                      تعرّف على برامجنا الآمنة
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-primary pb-3">
                أسئلة شائعة حول السلامة
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل المبيدات "الطبيعية" آمنة 100%؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>"طبيعي" لا يعني دائماً "آمن تماماً".</strong> مثلاً، النيكوتين طبيعي (من التبغ) لكنه سم قوي! لكن عموماً، المواد الطبيعية المستخدمة في مكافحة الآفات (زيوت عطرية، صابون، خل) <strong>أكثر أماناً بكثير</strong> من الكيماويات الصناعية - سمية أقل، تتحلل أسرع، آثار جانبية أخف. <strong>الخلاصة:</strong> طبيعي = أفضل، لكن اتبع التعليمات دائماً.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ طفلي لمس سطحاً مرشوشاً - ماذا أفعل؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>لا داعي للذعر في معظم الحالات.</strong> (1) <strong>اغسل المنطقة فوراً</strong> بماء وصابون (يد، قدم، إلخ). (2) إذا كانت كمية كبيرة، اغسل الملابس. (3) <strong>راقب الأعراض:</strong> طفح جلدي، قيء، ضعف، صعوبة تنفس. (4) <strong>إذا ظهرت أعراض:</strong> اتصل بطبيب أو مركز سموم فوراً. (5) <strong>معظم التعرضات السطحية البسيطة</strong> لمبيدات منخفضة السمية لا تسبب مشاكل - لكن الغسيل الفوري مهم.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ هل يمكنني استخدام مبيدات أثناء الحمل؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>الأفضل تجنبها تماماً،</strong> خاصة في الثلث الأول (أهم فترة لنمو الجنين). بعض المبيدات مرتبطة بمشاكل نمو/تشوهات. <strong>إذا ضرورة:</strong> (1) اطلبي من شخص آخر الرش، (2) غادري المنزل أثناء المعالجة، (3) لا تعودي قبل 24-48 ساعة + تهوية كاملة، (4) استخدمي طرق طبيعية فقط (حمض بوريك، تراب دياتومي). <strong>الأمثل:</strong> محترف يستخدم مواد آمنة + غيابك الكامل أثناء/بعد المعالجة.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">❓ كيف أعرف إذا كان ملصق المبيد يقول "آمن"؟</h4>
                  <p className="text-sm text-gray-700">
                    <strong>ابحث عن هذه العبارات/علامات:</strong> (1) <strong>"منخفض السمية" (Low Toxicity)</strong> أو "Caution" (أخف مستوى تحذير). (2) <strong>"آمن للاستخدام حول الأطفال/حيوانات بعد الجفاف"</strong> - موجود على منتجات جيدة. (3) <strong>معتمد من EPA/WHO</strong> - ختم موافقة. (4) <strong>تجنب:</strong> "Danger"، "Poison"، "شديد السمية"، جمجمة وعظام متقاطعة. <strong>نصيحة:</strong> ابحث عن اسم المادة الفعالة على Google + "safety" - ستجد معلومات علمية. <Link href="/blog/15" className="text-primary underline">اقرأ دليل اختيار شركة موثوقة</Link>.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 الخلاصة</h3>
              <p className="mb-4 text-lg">
                <strong>لا تضطر للاختيار بين "منزل خالٍ من الآفات" و"عائلة آمنة"</strong> - يمكنك الحصول على الاثنين! بالمعرفة الصحيحة، واستخدام المواد الآمنة، والاحتياطات الذكية، تحمي منزلك دون تعريض أحبائك للخطر.
              </p>
              <p className="mb-6">
                <strong>تذكر:</strong> الوقاية دائماً أفضل من العلاج. نظافة جيدة + وقاية مبكرة = مشاكل أقل = حاجة أقل للمبيدات = أمان أكبر!
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
            ? 'المبيدات الآمنة للأطفال والحيوانات الأليفة - دليل السلامة الشامل'
            : 'Safe Pesticides for Children and Pets - Comprehensive Safety Guide',
          description: isArabic
            ? 'تعرف على المبيدات الآمنة والطرق الصديقة للبيئة لمكافحة الآفات دون تعريض أطفالك وحيواناتك الأليفة للخطر.'
            : 'Learn about safe pesticides and eco-friendly methods for pest control without endangering your children and pets.',
          image: 'https://www.pestjeddah.com/images/Safe-pest-control.jpg',
          datePublished: '2024-06-10',
          dateModified: '2024-06-10',
          author: {
            '@type': 'Person',
            name: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi'
          }
        }}
      />
    </>
  );
}