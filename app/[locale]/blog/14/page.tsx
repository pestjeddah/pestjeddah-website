import { Metadata } from 'next';
import Link from 'next/link';
import { BlogArticle } from '@/components/blog/BlogArticle';
import { notFound } from 'next/navigation';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  
  return {
    title: isArabic 
      ? 'مكافحة الآفات الزراعية في الحدائق المنزلية - دليل شامل 2024'
      : 'Agricultural Pest Control in Home Gardens - Complete Guide 2024',
    description: isArabic
      ? 'دليل متكامل لحماية حديقتك المنزلية من الآفات الزراعية بطرق فعالة وآمنة، مع نصائح عملية للوقاية والعلاج الطبيعي'
      : 'Complete guide to protect your home garden from agricultural pests with effective and safe methods, including practical tips for prevention and natural treatment',
    alternates: {
      canonical: isArabic ? '/blog/14' : '/en/blog/14',
    },
  };
}

export default function Blog14({ params: { locale } }: Props) {
  if (!['ar', 'en'].includes(locale)) {
    notFound();
  }

  const isArabic = locale === 'ar';

  const content = isArabic ? (
    <>
      <p className="text-xl leading-relaxed text-gray-700 mb-6">
        الحديقة المنزلية هي مصدر فخر لكل صاحب منزل، سواء كانت حديقة خضراء للزينة أو حديقة لزراعة الخضروات والفواكه. لكن هذا الجمال يواجه تهديداً دائماً من الآفات الزراعية التي قد تدمر نباتاتك في غمضة عين. في هذا الدليل الشامل، سنتعرف على كيفية حماية حديقتك بطرق فعالة وآمنة.
      </p>

      <h2 id="common-pests" className="text-3xl font-bold text-gray-900 mt-10 mb-6">أشهر الآفات الزراعية في الحدائق المنزلية</h2>
      
      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. المَنّ (حشرات المن)</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        حشرات المن من أكثر الآفات شيوعاً في الحدائق المنزلية. هذه الحشرات الصغيرة الناعمة تتغذى على عصارة النباتات، مما يسبب ذبول الأوراق وتشوهها. تتكاثر بسرعة هائلة، حيث يمكن لأنثى واحدة أن تنتج آلاف الحشرات في موسم واحد.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        <strong>علامات الإصابة:</strong> أوراق ملتوية أو صفراء، مادة لزجة على الأوراق (الندوة العسلية)، وجود نمل بكثرة حول النباتات، نمو فطري أسود على الأوراق.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. العنكبوت الأحمر</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        على الرغم من صغر حجمه، إلا أن العنكبوت الأحمر من أخطر الآفات على النباتات. يمتص عصارة الأوراق مسبباً ظهور بقع صفراء وبنية. في الإصابات الشديدة، قد ترى خيوطاً عنكبوتية دقيقة على النباتات.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        <strong>الظروف المفضلة:</strong> ينشط العنكبوت الأحمر في الطقس الحار والجاف، خاصة في أشهر الصيف بجدة. الري غير المنتظم والرطوبة المنخفضة تزيد من انتشاره.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. الذبابة البيضاء</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        حشرات صغيرة بيضاء اللون تطير بكثافة عند لمس النبات المصاب. تتغذى على عصارة النباتات وتفرز الندوة العسلية التي تجذب النمل وتسبب نمو الفطريات السوداء. تصيب بشكل خاص الطماطم والخيار والباذنجان.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. الديدان والجعليات</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        تشمل دودة ورق القطن ودودة الحشد والديدان القارضة. تتغذى على أوراق النباتات والثمار، وقد تقرض سيقان الشتلات الصغيرة. نشاطها ليلي غالباً، لذا قد لا تراها أثناء النهار.
      </p>

      <h2 id="prevention-methods" className="text-3xl font-bold text-gray-900 mt-10 mb-6">طرق الوقاية من الآفات الزراعية</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">الفحص الدوري المنتظم</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        أهم خطوة في الوقاية هي الفحص المنتظم لنباتاتك. خصص 10-15 دقيقة يومياً للمرور على نباتاتك وفحصها بعناية. افحص السطح السفلي للأوراق خاصة، فمعظم الآفات تختبئ هناك.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        ابحث عن أي تغيرات في لون الأوراق، ثقوب، بقع، أو أي شيء غير طبيعي. الكشف المبكر يوفر عليك الكثير من الجهد والمال لاحقاً.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">التنوع البيولوجي في الحديقة</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        ازرع أنواعاً متنوعة من النباتات في حديقتك. هذا التنوع يجذب الحشرات النافعة التي تفترس الآفات الضارة. على سبيل المثال:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 mr-6">
        <li>ازرع الريحان والنعناع بين نباتات الخضار - تطرد العديد من الحشرات</li>
        <li>ازرع الزهور مثل الزينيا والقطيفة - تجذب الدعسوقة والزنابير الطفيلية</li>
        <li>اترك بعض الأعشاب البرية المفيدة - توفر مأوى للحشرات النافعة</li>
        <li>ازرع الثوم والبصل حول الحديقة - رائحتها تبعد الآفات</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">الممارسات الزراعية السليمة</h3>
      <div className="bg-green-50 border-r-4 border-green-500 p-6 mb-6">
        <h4 className="font-bold text-green-900 mb-3">نصائح مهمة للزراعة الصحية:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
          <li><strong>التباعد المناسب:</strong> لا تزرع النباتات متقاربة جداً - الازدحام يزيد الرطوبة ويشجع الآفات</li>
          <li><strong>الري الصحيح:</strong> اسقِ في الصباح الباكر، تجنب ترطيب الأوراق، استخدم الري بالتنقيط إن أمكن</li>
          <li><strong>التربة الصحية:</strong> أضف السماد العضوي بانتظام، قلّب التربة لتحسين التهوية</li>
          <li><strong>التقليم المنتظم:</strong> أزل الأوراق والأغصان الميتة أو المصابة فوراً</li>
          <li><strong>الدورة الزراعية:</strong> لا تزرع نفس المحصول في نفس المكان لمواسم متتالية</li>
        </ul>
      </div>

      <h2 id="natural-control" className="text-3xl font-bold text-gray-900 mt-10 mb-6">طرق المكافحة الطبيعية والآمنة</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">المحاليل الطبيعية المنزلية</h3>
      
      <h4 className="text-xl font-bold text-gray-700 mt-6 mb-3">1. محلول الصابون الطبيعي</h4>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        فعال جداً ضد حشرات المن والذبابة البيضاء. اخلط ملعقة كبيرة من الصابون السائل الطبيعي (بدون مواد كيميائية) مع لتر ماء. رش النباتات المصابة في الصباح الباكر أو المساء، مع التركيز على السطح السفلي للأوراق.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        <strong>تحذير مهم:</strong> اختبر المحلول على ورقة واحدة أولاً وانتظر 24 ساعة. بعض النباتات الحساسة قد تتضرر من الصابون.
      </p>

      <h4 className="text-xl font-bold text-gray-700 mt-6 mb-3">2. محلول الثوم والفلفل الحار</h4>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        طارد قوي للآفات. اخلط 10 فصوص ثوم مهروسة + 2 حبة فلفل حار + لتر ماء. اتركه ينقع لمدة 24 ساعة، ثم صفّه ورشه على النباتات. الرائحة القوية تطرد معظم الحشرات.
      </p>

      <h4 className="text-xl font-bold text-gray-700 mt-6 mb-3">3. زيت النيم العضوي</h4>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        من أفضل المبيدات الطبيعية، يعمل ضد مجموعة واسعة من الآفات. اخلط ملعقة صغيرة زيت نيم + نصف ملعقة صغيرة صابون سائل + لتر ماء. رش مرة كل أسبوع للوقاية، أو مرتين أسبوعياً للعلاج.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">المكافحة البيولوجية</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        استخدم الحشرات النافعة للقضاء على الآفات. هذه الطريقة آمنة تماماً وفعالة على المدى الطويل:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-3 mr-6">
        <li><strong>الدعسوقة (أبو العيد):</strong> تأكل حشرات المن والذباب الأبيض، يمكن شراؤها من متاجر الزراعة</li>
        <li><strong>الزنابير الطفيلية:</strong> تهاجم بيض ويرقات الفراشات والديدان</li>
        <li><strong>أسد المن:</strong> يرقاته تفترس المن والعث والحشرات الصغيرة</li>
        <li><strong>الخنافس المفترسة:</strong> تتغذى على العديد من الآفات الصغيرة</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">الحواجز الفيزيائية</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        من أكثر الطرق أماناً وفعالية، خاصة للحدائق العضوية:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 mr-6">
        <li>أغطية صفوف نباتية (شبك ناعم) تمنع وصول الحشرات للنباتات</li>
        <li>أطواق حول سيقان الشتلات لحمايتها من الديدان القارضة</li>
        <li>الفخاخ اللاصقة الصفراء لجذب الذباب الأبيض والمن المجنح</li>
        <li>النشارة حول النباتات تمنع الحشرات من الصعود للأوراق</li>
      </ul>

      <h2 id="advanced-tips" className="text-3xl font-bold text-gray-900 mt-10 mb-6">نصائح متقدمة لحديقة خالية من الآفات</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">التوقيت المناسب للزراعة</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        في مناخ جدة، التوقيت له دور كبير في تجنب الآفات:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 mr-6">
        <li><strong>الخريف والشتاء (أكتوبر-فبراير):</strong> أفضل وقت لزراعة معظم الخضروات، ضغط الآفات أقل</li>
        <li><strong>الربيع (مارس-مايو):</strong> جيد للزراعة لكن راقب الآفات عن قرب</li>
        <li><strong>الصيف (يونيو-سبتمبر):</strong> تجنب زراعة النباتات الحساسة، ضغط الآفات في أعلى مستوياته</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">تقوية مناعة النباتات</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        النباتات القوية والصحية تقاوم الآفات بشكل أفضل:
      </p>
      <div className="bg-blue-50 border-r-4 border-blue-500 p-6 mb-6">
        <h4 className="font-bold text-blue-900 mb-3">طرق تقوية النباتات:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
          <li>استخدم الأسمدة العضوية المتوازنة (كومبوست، سماد حيواني متخمر)</li>
          <li>رش شاي الكومبوست على الأوراق لتعزيز المناعة</li>
          <li>أضف معادن نادرة مثل الكالسيوم والمغنيسيوم</li>
          <li>استخدم منشطات النمو الطبيعية (خلاصة الأعشاب البحرية)</li>
          <li>احرص على pH التربة المناسب (6.0-7.0 لمعظم النباتات)</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">النباتات المرافقة الاستراتيجية</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        بعض النباتات عند زراعتها معاً تحمي بعضها من الآفات:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 mr-6">
        <li><strong>الطماطم + الريحان:</strong> الريحان يطرد الذبابة البيضاء والمن عن الطماطم</li>
        <li><strong>الملفوف + النعناع:</strong> النعناع يبعد فراشة الملفوف</li>
        <li><strong>الجزر + البصل:</strong> يحميان بعضهما من ذبابة الجزر والبصل</li>
        <li><strong>الخيار + القطيفة:</strong> القطيفة تطرد خنافس الخيار والنيماتودا</li>
      </ul>

      <h2 id="mistakes" className="text-3xl font-bold text-gray-900 mt-10 mb-6">أخطاء شائعة يجب تجنبها</h2>

      <div className="bg-red-50 border-r-4 border-red-500 p-6 mb-6">
        <h4 className="font-bold text-red-900 mb-4">تحذير: تجنب هذه الأخطاء!</h4>
        <ul className="list-decimal list-inside text-gray-700 space-y-3 mr-4">
          <li><strong>الإفراط في استخدام المبيدات:</strong> يقتل الحشرات النافعة ويضعف النباتات، استخدمها كملاذ أخير فقط</li>
          <li><strong>إهمال التربة:</strong> التربة الفقيرة تنتج نباتات ضعيفة سهلة الإصابة بالآفات</li>
          <li><strong>الري العشوائي:</strong> الري الزائد أو الناقص يضعف النباتات ويشجع الآفات</li>
          <li><strong>عدم العزل:</strong> ترك النباتات المصابة بجوار السليمة ينشر الآفات بسرعة</li>
          <li><strong>التأخر في العلاج:</strong> انتظار الإصابة الشديدة يجعل المكافحة أصعب بكثير</li>
        </ul>
      </div>

      <h2 id="professional-help" className="text-3xl font-bold text-gray-900 mt-10 mb-6">متى تحتاج لمساعدة متخصصة؟</h2>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        رغم فعالية الطرق الطبيعية، هناك حالات تحتاج تدخل محترف:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 mr-6">
        <li>إصابة شديدة تشمل أكثر من 50% من النباتات</li>
        <li>ظهور آفات خطيرة مثل النمل الأبيض أو الجعليات الكبيرة</li>
        <li>فشل طرق المكافحة الطبيعية بعد تكرارها 3-4 مرات</li>
        <li>انتشار سريع للآفات رغم الإجراءات الوقائية</li>
        <li>عدم التأكد من نوع الآفة أو طريقة علاجها</li>
      </ul>

      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        شركة الأسطورة توفر <Link href="/services/fumigation-disinfection" className="text-primary hover:underline font-semibold">خدمات مكافحة متخصصة للحدائق</Link> باستخدام مبيدات عضوية آمنة على النباتات والبيئة. فريقنا من الخبراء يضع برامج وقائية مخصصة لكل حديقة حسب نوع النباتات والمناخ.
      </p>

      <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-10 mb-6">الخلاصة</h2>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        حديقتك المنزلية يمكن أن تكون خالية من الآفات مع الممارسات الصحيحة. الوقاية دائماً أفضل من العلاج، والطرق الطبيعية أكثر أماناً واستدامة من المبيدات الكيميائية.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        تذكر: الحديقة الصحية هي نظام بيئي متوازن يحتوي على نباتات قوية وحشرات نافعة وتربة خصبة. استثمر الوقت في بناء هذا التوازن، وستستمتع بحديقة جميلة ومنتجة طوال العام.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">احصل على استشارة مجانية لحديقتك</h3>
        <p className="text-gray-700 mb-6">
          خبراء شركة الأسطورة جاهزون لمساعدتك في حماية حديقتك. نقدم فحص مجاني وخطة مكافحة مخصصة لحديقتك.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          احجز استشارة مجانية الآن
        </Link>
      </div>
    </>
  ) : (
    <>
      <p className="text-xl leading-relaxed text-gray-700 mb-6">
        Your home garden is a source of pride, whether it's an ornamental green space or a vegetable and fruit garden. However, this beauty faces a constant threat from agricultural pests that can destroy your plants overnight. In this comprehensive guide, we'll learn how to protect your garden with effective and safe methods.
      </p>

      <h2 id="common-pests" className="text-3xl font-bold text-gray-900 mt-10 mb-6">Most Common Agricultural Pests in Home Gardens</h2>
      
      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Aphids</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Aphids are among the most common pests in home gardens. These small, soft-bodied insects feed on plant sap, causing leaves to wilt and deform. They reproduce at an incredible rate - a single female can produce thousands of insects in one season.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        <strong>Signs of infestation:</strong> Curled or yellow leaves, sticky substance on leaves (honeydew), abundant ants around plants, black fungal growth on leaves.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Spider Mites</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Despite their small size, spider mites are among the most dangerous pests to plants. They suck leaf sap causing yellow and brown spots. In severe infestations, you may see fine webbing on plants.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        <strong>Favorable conditions:</strong> Spider mites thrive in hot, dry weather, especially during Jeddah's summer months. Irregular watering and low humidity increase their spread.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Whiteflies</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        Small white insects that fly densely when touching infected plants. They feed on plant sap and excrete honeydew that attracts ants and causes black fungal growth. They particularly affect tomatoes, cucumbers, and eggplants.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Caterpillars and Beetles</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        Include cotton leafworm, armyworm, and cutworms. They feed on plant leaves and fruits, and may cut stems of young seedlings. Their activity is mostly nocturnal, so you may not see them during the day.
      </p>

      <h2 id="prevention-methods" className="text-3xl font-bold text-gray-900 mt-10 mb-6">Agricultural Pest Prevention Methods</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Regular Periodic Inspection</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        The most important prevention step is regular inspection of your plants. Dedicate 10-15 minutes daily to walk through and carefully examine your plants. Check the underside of leaves especially, as most pests hide there.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        Look for any changes in leaf color, holes, spots, or anything abnormal. Early detection saves you a lot of effort and money later.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Biodiversity in the Garden</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Plant diverse types of plants in your garden. This diversity attracts beneficial insects that prey on harmful pests. For example:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-6">
        <li>Plant basil and mint among vegetable plants - they repel many insects</li>
        <li>Plant flowers like zinnias and marigolds - they attract ladybugs and parasitic wasps</li>
        <li>Leave some beneficial wild herbs - they provide shelter for beneficial insects</li>
        <li>Plant garlic and onions around the garden - their scent repels pests</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Proper Agricultural Practices</h3>
      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
        <h4 className="font-bold text-green-900 mb-3">Important Tips for Healthy Cultivation:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li><strong>Proper spacing:</strong> Don't plant too closely - crowding increases humidity and encourages pests</li>
          <li><strong>Correct watering:</strong> Water in early morning, avoid wetting leaves, use drip irrigation if possible</li>
          <li><strong>Healthy soil:</strong> Add organic compost regularly, till soil to improve aeration</li>
          <li><strong>Regular pruning:</strong> Remove dead or infected leaves and branches immediately</li>
          <li><strong>Crop rotation:</strong> Don't plant the same crop in the same spot for consecutive seasons</li>
        </ul>
      </div>

      <h2 id="natural-control" className="text-3xl font-bold text-gray-900 mt-10 mb-6">Natural and Safe Control Methods</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Homemade Natural Solutions</h3>
      
      <h4 className="text-xl font-bold text-gray-700 mt-6 mb-3">1. Natural Soap Solution</h4>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Very effective against aphids and whiteflies. Mix one tablespoon of natural liquid soap (without chemicals) with one liter of water. Spray infected plants in early morning or evening, focusing on the underside of leaves.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        <strong>Important warning:</strong> Test the solution on one leaf first and wait 24 hours. Some sensitive plants may be damaged by soap.
      </p>

      <h4 className="text-xl font-bold text-gray-700 mt-6 mb-3">2. Garlic and Hot Pepper Solution</h4>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Strong pest repellent. Mix 10 crushed garlic cloves + 2 hot peppers + liter of water. Let it steep for 24 hours, then strain and spray on plants. The strong smell repels most insects.
      </p>

      <h4 className="text-xl font-bold text-gray-700 mt-6 mb-3">3. Organic Neem Oil</h4>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        One of the best natural pesticides, works against a wide range of pests. Mix one teaspoon neem oil + half teaspoon liquid soap + liter of water. Spray once weekly for prevention, or twice weekly for treatment.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Biological Control</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Use beneficial insects to eliminate pests. This method is completely safe and effective long-term:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-3 ml-6">
        <li><strong>Ladybugs:</strong> Eat aphids and whiteflies, can be purchased from garden stores</li>
        <li><strong>Parasitic wasps:</strong> Attack eggs and larvae of butterflies and caterpillars</li>
        <li><strong>Lacewings:</strong> Their larvae prey on aphids, mites, and small insects</li>
        <li><strong>Predatory beetles:</strong> Feed on many small pests</li>
      </ul>

      <h2 id="advanced-tips" className="text-3xl font-bold text-gray-900 mt-10 mb-6">Advanced Tips for a Pest-Free Garden</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Proper Planting Timing</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        In Jeddah's climate, timing plays a major role in avoiding pests:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-6">
        <li><strong>Fall and Winter (October-February):</strong> Best time for planting most vegetables, pest pressure is lower</li>
        <li><strong>Spring (March-May):</strong> Good for planting but watch pests closely</li>
        <li><strong>Summer (June-September):</strong> Avoid planting sensitive plants, pest pressure at highest levels</li>
      </ul>

      <h2 id="professional-help" className="text-3xl font-bold text-gray-900 mt-10 mb-6">When Do You Need Professional Help?</h2>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Despite the effectiveness of natural methods, some cases require professional intervention:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-6">
        <li>Severe infestation affecting more than 50% of plants</li>
        <li>Appearance of dangerous pests like termites or large beetles</li>
        <li>Failure of natural control methods after 3-4 repetitions</li>
        <li>Rapid spread of pests despite preventive measures</li>
        <li>Uncertainty about pest type or treatment method</li>
      </ul>

      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        Al-Ustora Company provides <Link href="/en/services/fumigation-disinfection" className="text-primary hover:underline font-semibold">specialized garden pest control services</Link> using organic pesticides safe for plants and environment. Our expert team develops customized prevention programs for each garden based on plant types and climate.
      </p>

      <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Your home garden can be pest-free with the right practices. Prevention is always better than treatment, and natural methods are safer and more sustainable than chemical pesticides.
      </p>
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        Remember: A healthy garden is a balanced ecosystem containing strong plants, beneficial insects, and fertile soil. Invest time in building this balance, and you'll enjoy a beautiful and productive garden year-round.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Free Consultation for Your Garden</h3>
        <p className="text-gray-700 mb-6">
          Al-Ustora Company experts are ready to help protect your garden. We offer free inspection and customized control plan for your garden.
        </p>
        <Link 
          href="/en/contact"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Book Free Consultation Now
        </Link>
      </div>
    </>
  );

  const tableOfContents = isArabic ? [
    { id: 'common-pests', title: 'أشهر الآفات الزراعية', level: 2 },
    { id: 'prevention-methods', title: 'طرق الوقاية', level: 2 },
    { id: 'natural-control', title: 'المكافحة الطبيعية', level: 2 },
    { id: 'advanced-tips', title: 'نصائح متقدمة', level: 2 },
    { id: 'mistakes', title: 'أخطاء شائعة', level: 2 },
    { id: 'professional-help', title: 'المساعدة المتخصصة', level: 2 },
    { id: 'conclusion', title: 'الخلاصة', level: 2 },
  ] : [
    { id: 'common-pests', title: 'Common Pests', level: 2 },
    { id: 'prevention-methods', title: 'Prevention Methods', level: 2 },
    { id: 'natural-control', title: 'Natural Control', level: 2 },
    { id: 'advanced-tips', title: 'Advanced Tips', level: 2 },
    { id: 'professional-help', title: 'Professional Help', level: 2 },
    { id: 'conclusion', title: 'Conclusion', level: 2 },
  ];

  const faqs = isArabic ? [
    {
      question: 'هل المبيدات الطبيعية فعالة مثل الكيميائية؟',
      answer: 'المبيدات الطبيعية فعالة جداً خاصة في الإصابات الخفيفة والمتوسطة، وميزتها أنها آمنة تماماً على البيئة والنباتات المنتجة للغذاء. قد تحتاج تكرار الاستخدام أكثر من الكيميائية، لكنها لا تترك أي بقايا ضارة.'
    },
    {
      question: 'كم مرة يجب فحص الحديقة للآفات؟',
      answer: 'ينصح بفحص سريع يومي (5-10 دقائق) خلال موسم النمو النشط، وفحص شامل أسبوعي. في فترات الذروة (الربيع والصيف) قد تحتاج فحص مرتين يومياً.'
    },
    {
      question: 'ما أفضل وقت لرش المبيدات الطبيعية؟',
      answer: 'الوقت المثالي هو الصباح الباكر (5-7 صباحاً) أو المساء (بعد المغرب). تجنب الرش في الظهيرة لأن الحرارة قد تحرق الأوراق المبللة.'
    },
    {
      question: 'هل يمكن زراعة حديقة عضوية في مناخ جدة؟',
      answer: 'نعم تماماً! في الواقع، الزراعة العضوية في جدة ممكنة جداً خاصة في فصل الشتاء والربيع. المفتاح هو اختيار أصناف مناسبة للمناخ واستخدام طرق ري فعالة.'
    },
  ] : [
    {
      question: 'Are natural pesticides as effective as chemical ones?',
      answer: 'Natural pesticides are very effective especially for mild to moderate infestations, and their advantage is they\'re completely safe for environment and food-producing plants. They may need more frequent application than chemicals, but leave no harmful residues.'
    },
    {
      question: 'How often should I check the garden for pests?',
      answer: 'Quick daily inspection (5-10 minutes) is recommended during active growing season, and comprehensive weekly inspection. During peak periods (spring and summer) you may need twice-daily checks.'
    },
    {
      question: 'What\'s the best time to spray natural pesticides?',
      answer: 'Ideal time is early morning (5-7 AM) or evening (after sunset). Avoid midday spraying as heat may burn wet leaves.'
    },
    {
      question: 'Can I grow an organic garden in Jeddah climate?',
      answer: 'Yes absolutely! In fact, organic gardening in Jeddah is very possible especially in winter and spring. The key is choosing climate-appropriate varieties and using effective irrigation methods.'
    },
  ];

  const relatedArticles = isArabic ? [
    { id: 13, title: 'المبيدات الآمنة للأطفال والحيوانات الأليفة', excerpt: 'تعرف على المبيدات الآمنة والطرق الصديقة للبيئة لمكافحة الآفات', image: '/images/Safe-pest-control.jpg' },
    { id: 12, title: 'الوقاية من الآفات في فصل الشتاء', excerpt: 'كيف تحمي منزلك من الآفات التي تبحث عن مأوى دافئ في الشتاء', image: '/images/Home-pest-treatment.jpg' },
    { id: 8, title: 'النمل الأسود: كيف تتخلص منه نهائياً؟', excerpt: 'طرق فعالة للتخلص من النمل الأسود في المنزل والحديقة بشكل نهائي', image: '/images/Ant-control-Jeddah.jpg' },
  ] : [
    { id: 13, title: 'Safe Pesticides for Children and Pets', excerpt: 'Learn about safe pesticides and eco-friendly methods for pest control', image: '/images/Safe-pest-control.jpg' },
    { id: 12, title: 'Winter Pest Prevention', excerpt: 'How to protect your home from pests seeking warm shelter in winter', image: '/images/Home-pest-treatment.jpg' },
    { id: 8, title: 'Black Ants: How to Get Rid Permanently?', excerpt: 'Effective methods to eliminate black ants in home and garden permanently', image: '/images/Ant-control-Jeddah.jpg' },
  ];

  return (
    <BlogArticle
      title="مكافحة الآفات الزراعية في الحدائق المنزلية"
      titleEn="Agricultural Pest Control in Home Gardens"
      category="نصائح وقائية"
      categoryEn="Prevention Tips"
      author="م. سارة الزهراني"
      authorEn="Eng. Sarah Al-Zahrani"
      date={isArabic ? '25 مايو 2024' : 'May 25, 2024'}
      readTime={isArabic ? '8 دقائق للقراءة' : '8 min read'}
      featuredImage="/images/Eco-friendly-pest-control.jpg"
      featuredImageAlt={isArabic ? 'مكافحة الآفات الزراعية في الحدائق المنزلية بطرق طبيعية' : 'Agricultural pest control in home gardens with natural methods'}
      tableOfContents={tableOfContents}
      relatedArticles={relatedArticles}
    >
      {content}
    </BlogArticle>
  );
}
