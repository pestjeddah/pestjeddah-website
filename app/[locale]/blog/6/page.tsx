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
      ? 'التدخين والتعقيم: متى نحتاجهما؟ - دليل تفصيلي 2024'
      : 'Fumigation & Disinfection: When Do We Need Them? - Detailed Guide 2024',
    description: isArabic
      ? 'دليل شامل للفرق بين التدخين والتعقيم، متى نحتاج كل منهما، وكيف تختار الطريقة المناسبة لمكافحة الحشرات'
      : 'Complete guide on difference between fumigation and disinfection, when we need each, and how to choose appropriate pest control method',
    alternates: {
      canonical: isArabic ? '/blog/6' : '/en/blog/6',
    },
  };
}

export default function Blog6({ params: { locale } }: Props) {
  if (!['ar', 'en'].includes(locale)) {
    notFound();
  }

  const isArabic = locale === 'ar';

  const content = isArabic ? (
    <>
      <p className="text-xl leading-relaxed text-gray-700 mb-6">
        التدخين والتعقيم كلاهما من طرق مكافحة الآفات، لكنهما مختلفان تماماً في الأسلوب والاستخدام والفعالية. كثير من الناس يخلطون بينهما أو يطلبون الطريقة الخاطئة لحالتهم. في هذا الدليل الشامل، سنوضح الفرق بينهما بالتفصيل ومتى نحتاج كلاً منهما.
      </p>

      <h2 id="what-is" className="text-3xl font-bold text-gray-900 mt-10 mb-6">ما هو التدخين وما هو التعقيم؟</h2>
      
      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">التدخين: مكافحة الحشرات بالغاز</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        التدخين هو عملية نشر غاز سام في مكان مغلق بالكامل لقتل جميع الحشرات والآفات. يتم إغلاق المبنى أو الغرفة بإحكام، ثم ضخ الغاز السام الذي يخترق كل شق وزاوية.
      </p>
      <div className="bg-blue-50 border-r-4 border-blue-500 p-6 mb-6">
        <h4 className="font-bold text-blue-900 mb-3">خصائص التدخين الأساسية:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
          <li>يستخدم <strong>غازات سامة</strong> مثل بروميد الميثيل أو فوسفيد الألومنيوم</li>
          <li>يتطلب <strong>إخلاء كامل</strong> للمبنى لعدة أيام</li>
          <li>يصل لـ <strong>كل مكان</strong> حتى داخل الجدران والأثاث</li>
          <li>فعال ضد <strong>جميع مراحل</strong> الحشرات (بيض، يرقات، بالغين)</li>
          <li>يحتاج <strong>تراخيص خاصة</strong> ومتخصصين مدربين جداً</li>
          <li>لا يترك <strong>أثر متبقي</strong> بعد التهوية</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">التعقيم: مكافحة شاملة بالمبيدات</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        التعقيم هو عملية رش مبيدات سائلة أو مساحيق على الأسطح والأماكن المصابة لقتل الحشرات والجراثيم. هو ما نعرفه بالرش التقليدي لكن بشكل أشمل وأعمق.
      </p>
      <div className="bg-green-50 border-r-4 border-green-500 p-6 mb-6">
        <h4 className="font-bold text-green-900 mb-3">خصائص التعقيم الأساسية:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
          <li>يستخدم <strong>مبيدات سائلة أو مساحيق</strong> تُرش على الأسطح</li>
          <li>يمكن <strong>البقاء في المنزل</strong> مع احتياطات بسيطة أو مغادرة لساعات قليلة</li>
          <li>يعمل على <strong>الأسطح المرئية</strong> والأماكن التي تُرش</li>
          <li>يترك <strong>أثر متبقي</strong> يستمر في القتل لأسابيع أو شهور</li>
          <li>آمن نسبياً مع <strong>الاحتياطات المناسبة</strong></li>
          <li>مناسب لـ <strong>المكافحة الدورية</strong> والوقائية</li>
        </ul>
      </div>

      <h2 id="differences" className="text-3xl font-bold text-gray-900 mt-10 mb-6">الفروقات الجوهرية بين التدخين والتعقيم</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-bold text-gray-900 border-b">وجه المقارنة</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-gray-900 border-b">التدخين</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-gray-900 border-b">التعقيم</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-gray-900 font-semibold">المادة المستخدمة</td>
              <td className="px-6 py-4 text-gray-700">غاز سام</td>
              <td className="px-6 py-4 text-gray-700">مبيد سائل أو مسحوق</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 text-gray-900 font-semibold">مدة الإخلاء</td>
              <td className="px-6 py-4 text-gray-700">3-7 أيام</td>
              <td className="px-6 py-4 text-gray-700">3-6 ساعات</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-900 font-semibold">التكلفة</td>
              <td className="px-6 py-4 text-gray-700">مرتفعة جداً</td>
              <td className="px-6 py-4 text-gray-700">متوسطة إلى منخفضة</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 text-gray-900 font-semibold">نطاق التأثير</td>
              <td className="px-6 py-4 text-gray-700">كل مكان داخل المبنى</td>
              <td className="px-6 py-4 text-gray-700">الأماكن المرشوشة فقط</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-900 font-semibold">الأثر المتبقي</td>
              <td className="px-6 py-4 text-gray-700">لا يوجد</td>
              <td className="px-6 py-4 text-gray-700">يستمر 1-6 أشهر</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 text-gray-900 font-semibold">الفعالية</td>
              <td className="px-6 py-4 text-gray-700">100% في كل المراحل</td>
              <td className="px-6 py-4 text-gray-700">90-95% على الحشرات البالغة</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="when-fumigation" className="text-3xl font-bold text-gray-900 mt-10 mb-6">متى نحتاج للتدخين؟</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">الحالات التي تستدعي التدخين</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        التدخين هو الحل الأخير، نلجأ له في حالات محددة فقط:
      </p>

      <div className="space-y-6 mb-8">
        <div className="bg-white border-r-4 border-red-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-red-900 mb-3">1. إصابة شديدة بالنمل الأبيض</h4>
          <p className="text-gray-700">
            عندما يكون النمل الأبيض منتشر في كل المبنى، داخل الجدران، في السقف، في الأساسات. التدخين هو الطريقة الوحيدة للوصول لجميع المستعمرات.
          </p>
        </div>

        <div className="bg-white border-r-4 border-orange-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-orange-900 mb-3">2. بق الفراش المستعصي</h4>
          <p className="text-gray-700">
            إذا فشلت طرق التعقيم التقليدية عدة مرات، والبق منتشر في الأثاث والجدران والسجاد. التدخين يقضي على البيض أيضاً.
          </p>
        </div>

        <div className="bg-white border-r-4 border-yellow-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-yellow-900 mb-3">3. الصراصير في المطاعم والفنادق</h4>
          <p className="text-gray-700">
            المنشآت التجارية التي تحتاج قتل كامل وسريع لاجتياز فحوصات الصحة. التدخين يضمن القضاء على كل حشرة.
          </p>
        </div>

        <div className="bg-white border-r-4 border-blue-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-blue-900 mb-3">4. المخازن والمستودعات</h4>
          <p className="text-gray-700">
            مخازن الحبوب، المواد الغذائية، الملابس. التدخين يحمي البضائع من التلف بدون ترك أثر كيميائي.
          </p>
        </div>

        <div className="bg-white border-r-4 border-purple-500 p-6 rounded-lg shadow-sm">
          <h4 className="font-bold text-purple-900 mb-3">5. المباني التاريخية والأثرية</h4>
          <p className="text-gray-700">
            حفظ التحف والمباني القديمة من الحشرات دون التأثير على المواد الحساسة.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">إجراءات التدخين الاحترافية</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        عملية التدخين معقدة وتحتاج تخطيط دقيق:
      </p>
      <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-3 mr-6">
        <li><strong>الفحص المبدئي:</strong> تقييم شامل لتحديد نوع الإصابة ومداها</li>
        <li><strong>التحضيرات:</strong> إخلاء المبنى، إغلاق جميع الفتحات، تغطية النباتات الخارجية</li>
        <li><strong>الختم:</strong> إغلاق المبنى بإحكام تام باستخدام أغطية بلاستيكية خاصة</li>
        <li><strong>ضخ الغاز:</strong> إطلاق الغاز السام بكميات محسوبة بدقة</li>
        <li><strong>فترة التعرض:</strong> ترك الغاز يعمل لمدة 24-72 ساعة</li>
        <li><strong>التهوية:</strong> سحب الغاز وتهوية المبنى لعدة ساعات</li>
        <li><strong>الفحص النهائي:</strong> قياس نسبة الغاز للتأكد من الأمان</li>
        <li><strong>التصريح بالدخول:</strong> السماح بالعودة بعد التأكد التام من الأمان</li>
      </ol>

      <h2 id="when-disinfection" className="text-3xl font-bold text-gray-900 mt-10 mb-6">متى نحتاج للتعقيم؟</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">الحالات الأنسب للتعقيم</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        التعقيم هو الخيار الأول والأمثل في معظم الحالات:
      </p>

      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-3 mr-6">
        <li><strong>الصراصير في المنازل:</strong> التعقيم الدوري كل 3-6 أشهر يكفي تماماً</li>
        <li><strong>النمل والحشرات الزاحفة:</strong> رش منتظم يمنع دخولها للمنزل</li>
        <li><strong>البعوض والذباب:</strong> الرش الحراري أو الضبابي فعال جداً</li>
        <li><strong>الوقاية الدورية:</strong> تعقيم منتظم يمنع أي إصابات مستقبلية</li>
        <li><strong>بعد التدخين:</strong> تعقيم وقائي يمنع عودة الحشرات</li>
      </ul>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">أنواع التعقيم المختلفة</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-lg text-primary mb-3">الرش التقليدي</h4>
          <p className="text-gray-700 mb-3">استخدام مرشات يدوية أو آلية لرش المبيدات السائلة على الأسطح والشقوق.</p>
          <p className="text-sm text-gray-600"><strong>الأفضل لـ:</strong> الصراصير، النمل، العناكب</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-lg text-primary mb-3">الرش الحراري (الضبابي)</h4>
          <p className="text-gray-700 mb-3">تحويل المبيد لضباب حراري ينتشر في الهواء ويصل لأماكن صعبة.</p>
          <p className="text-sm text-gray-600"><strong>الأفضل لـ:</strong> البعوض، الذباب، الحشرات الطائرة</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-lg text-primary mb-3">الرش بالمساحيق</h4>
          <p className="text-gray-700 mb-3">نثر مساحيق حشرية في الشقوق والأماكن الجافة، تبقى فعالة لشهور.</p>
          <p className="text-sm text-gray-600"><strong>الأفضل لـ:</strong> بق الفراش، النمل، الصراصير</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-bold text-lg text-primary mb-3">الطعوم السامة (الجل)</h4>
          <p className="text-gray-700 mb-3">وضع جل سام تأكله الحشرات وتنقله للعش، يقضي على المستعمرة كاملة.</p>
          <p className="text-sm text-gray-600"><strong>الأفضل لـ:</strong> الصراصير، النمل</p>
        </div>
      </div>

      <h2 id="safety" className="text-3xl font-bold text-gray-900 mt-10 mb-6">الأمان والاحتياطات</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">احتياطات التدخين</h3>
      <div className="bg-red-50 border-r-4 border-red-500 p-6 mb-6">
        <h4 className="font-bold text-red-900 mb-4">تحذيرات مهمة جداً:</h4>
        <ul className="list-disc list-inside text-red-700 space-y-2 mr-4">
          <li>لا تحاول التدخين بنفسك أبداً - قد يسبب الوفاة</li>
          <li>يجب إخلاء كامل للبشر والحيوانات والنباتات</li>
          <li>إخراج جميع الأطعمة المكشوفة والأدوية</li>
          <li>لا تدخل المبنى قبل التصريح الرسمي من الشركة</li>
          <li>قد يحتاج غسل جميع الأقمشة والملابس بعد التدخين</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">احتياطات التعقيم</h3>
      <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 mb-6">
        <h4 className="font-bold text-yellow-900 mb-4">نصائح للسلامة أثناء التعقيم:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
          <li>أخرج الأطفال والحوامل لمدة 3-6 ساعات</li>
          <li>غط أحواض السمك وأقفاص الطيور</li>
          <li>أبعد الأطعمة والأواني عن مناطق الرش</li>
          <li>هوّ المنزل جيداً بعد الرش</li>
          <li>لا تمسح الأسطح مباشرة - اترك المبيد يعمل</li>
          <li>استخدم شركة موثوقة تستعمل مبيدات مسجلة</li>
        </ul>
      </div>

      <h2 id="decision" className="text-3xl font-bold text-gray-900 mt-10 mb-6">كيف تقرر الطريقة المناسبة؟</h2>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">دليل اتخاذ القرار السريع:</h3>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-gray-900 mb-3">اختر التدخين إذا:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
              <li>الإصابة شديدة جداً ومنتشرة في كل المبنى</li>
              <li>فشلت طرق التعقيم العادية عدة مرات</li>
              <li>المبنى تجاري ويحتاج حل نهائي سريع</li>
              <li>الحشرات داخل الجدران والأثاث</li>
              <li>لديك القدرة على الإخلاء لعدة أيام</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-gray-900 mb-3">اختر التعقيم إذا:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
              <li>الإصابة عادية أو متوسطة</li>
              <li>تريد حماية مستمرة ودورية</li>
              <li>لا يمكنك إخلاء المنزل لأيام</li>
              <li>التكلفة مهمة بالنسبة لك</li>
              <li>أول مرة تكتشف فيها الحشرات</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 id="professional" className="text-3xl font-bold text-gray-900 mt-10 mb-6">الخدمة الاحترافية من شركة الأسطورة</h2>

      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        في شركة الأسطورة، نقدم كلا الخيارين بأعلى معايير الجودة والسلامة:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border-2 border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
          <h4 className="font-bold text-xl text-primary mb-4">خدمة التدخين</h4>
          <ul className="text-gray-700 space-y-2">
            <li>✓ فريق متخصص مرخص للتدخين</li>
            <li>✓ استخدام غازات معتمدة وآمنة</li>
            <li>✓ معدات قياس دقيقة للتأكد من الأمان</li>
            <li>✓ ضمان كامل على النتائج</li>
            <li>✓ تقارير مفصلة قبل وبعد</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-green-500/20 rounded-xl p-6 hover:border-green-500 transition-colors">
          <h4 className="font-bold text-xl text-green-600 mb-4">خدمة التعقيم</h4>
          <ul className="text-gray-700 space-y-2">
            <li>✓ مبيدات آمنة معتمدة</li>
            <li>✓ فنيون مدربون ومجهزون</li>
            <li>✓ برامج صيانة دورية</li>
            <li>✓ ضمان 6 أشهر</li>
            <li>✓ خدمة سريعة في نفس اليوم</li>
          </ul>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        نساعدك في اختيار الطريقة المناسبة حسب حالتك. <Link href="/contact" className="text-primary hover:underline font-semibold">احجز فحص مجاني</Link> وسيقوم خبراؤنا بتقييم الوضع وتقديم التوصية الأفضل.
      </p>

      <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-10 mb-6">الخلاصة</h2>

      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        التدخين والتعقيم طريقتان مختلفتان لكنهما متكاملتان في مكافحة الآفات. التدخين للحالات الشديدة والمستعصية، والتعقيم للوقاية والحالات العادية. الاختيار الصحيح يعتمد على:
      </p>

      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 mr-6">
        <li>شدة الإصابة ونوع الحشرات</li>
        <li>إمكانية إخلاء المبنى</li>
        <li>الميزانية المتاحة</li>
        <li>الحاجة لحماية مستمرة أم قضاء فوري</li>
      </ul>

      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        الأهم من كل شيء: استشر متخصص موثوق قبل اتخاذ القرار. الخيار الخاطئ قد يكلفك مالاً وجهداً بدون نتيجة.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">هل أنت محتار أي طريقة تختار؟</h3>
        <p className="text-gray-700 mb-6">
          خبراؤنا في شركة الأسطورة سيساعدونك في اتخاذ القرار الصحيح بناءً على فحص ميداني دقيق - مجاناً.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span>📞</span>
          احجز استشارة مجانية الآن
        </Link>
      </div>
    </>
  ) : (
    <>
      <p className="text-xl leading-relaxed text-gray-700 mb-6">
        Fumigation and disinfection are both pest control methods, but they are completely different in approach, use, and effectiveness. Many people confuse them or request the wrong method for their situation. In this comprehensive guide, we will explain the difference between them in detail and when we need each one.
      </p>

      <h2 id="what-is" className="text-3xl font-bold text-gray-900 mt-10 mb-6">What is Fumigation and What is Disinfection?</h2>
      
      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fumigation: Pest Control with Gas</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Fumigation is the process of releasing toxic gas in a completely sealed space to kill all insects and pests. The building or room is sealed tightly, then toxic gas is pumped in that penetrates every crack and corner.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
        <h4 className="font-bold text-blue-900 mb-3">Basic Fumigation Characteristics:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Uses <strong>toxic gases</strong> like methyl bromide or aluminum phosphide</li>
          <li>Requires <strong>complete evacuation</strong> of building for several days</li>
          <li>Reaches <strong>everywhere</strong> even inside walls and furniture</li>
          <li>Effective against <strong>all stages</strong> of insects (eggs, larvae, adults)</li>
          <li>Needs <strong>special licenses</strong> and highly trained specialists</li>
          <li>Leaves <strong>no residual effect</strong> after ventilation</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Disinfection: Comprehensive Control with Pesticides</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Disinfection is the process of spraying liquid or powder pesticides on surfaces and infected areas to kill insects and germs. It is what we know as traditional spraying but in a more comprehensive and deeper way.
      </p>
      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
        <h4 className="font-bold text-green-900 mb-3">Basic Disinfection Characteristics:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Uses <strong>liquid pesticides or powders</strong> sprayed on surfaces</li>
          <li>Can <strong>stay in house</strong> with simple precautions or leave for few hours</li>
          <li>Works on <strong>visible surfaces</strong> and areas that are sprayed</li>
          <li>Leaves <strong>residual effect</strong> that continues killing for weeks or months</li>
          <li>Relatively safe with <strong>appropriate precautions</strong></li>
          <li>Suitable for <strong>periodic control</strong> and prevention</li>
        </ul>
      </div>

      <h2 id="when-fumigation" className="text-3xl font-bold text-gray-900 mt-10 mb-6">When Do We Need Fumigation?</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cases Requiring Fumigation</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Fumigation is the last resort, we use it only in specific cases:
      </p>

      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-3 ml-6">
        <li><strong>Severe termite infestation:</strong> When termites spread throughout building, inside walls, ceiling, foundations</li>
        <li><strong>Stubborn bed bugs:</strong> If traditional disinfection methods failed several times</li>
        <li><strong>Cockroaches in restaurants and hotels:</strong> Commercial facilities needing complete quick kill</li>
        <li><strong>Warehouses and storage:</strong> Grain stores, food materials, clothing</li>
        <li><strong>Historical and archaeological buildings:</strong> Preserving artifacts without affecting sensitive materials</li>
      </ul>

      <h2 id="when-disinfection" className="text-3xl font-bold text-gray-900 mt-10 mb-6">When Do We Need Disinfection?</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Most Suitable Cases for Disinfection</h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Disinfection is the first and optimal choice in most cases:
      </p>

      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-3 ml-6">
        <li><strong>Cockroaches in homes:</strong> Periodic disinfection every 3-6 months is completely sufficient</li>
        <li><strong>Ants and crawling insects:</strong> Regular spraying prevents entry into home</li>
        <li><strong>Mosquitoes and flies:</strong> Thermal or fog spraying is very effective</li>
        <li><strong>Periodic prevention:</strong> Regular disinfection prevents any future infestations</li>
        <li><strong>After fumigation:</strong> Preventive disinfection prevents insect return</li>
      </ul>

      <h2 id="safety" className="text-3xl font-bold text-gray-900 mt-10 mb-6">Safety and Precautions</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fumigation Precautions</h3>
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
        <h4 className="font-bold text-red-900 mb-4">Very Important Warnings:</h4>
        <ul className="list-disc list-inside text-red-700 space-y-2 ml-4">
          <li>Never attempt fumigation yourself - may cause death</li>
          <li>Complete evacuation of humans, animals, and plants required</li>
          <li>Remove all uncovered foods and medicines</li>
          <li>Do not enter building before official clearance from company</li>
          <li>May need to wash all fabrics and clothes after fumigation</li>
        </ul>
      </div>

      <h2 id="decision" className="text-3xl font-bold text-gray-900 mt-10 mb-6">How to Decide the Right Method?</h2>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Decision Guide:</h3>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-gray-900 mb-3">Choose Fumigation if:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Infestation is very severe and spread throughout building</li>
              <li>Regular disinfection methods failed several times</li>
              <li>Building is commercial and needs quick final solution</li>
              <li>Insects inside walls and furniture</li>
              <li>You can evacuate for several days</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg text-gray-900 mb-3">Choose Disinfection if:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Infestation is normal or moderate</li>
              <li>You want continuous periodic protection</li>
              <li>You cannot evacuate house for days</li>
              <li>Cost is important to you</li>
              <li>First time discovering insects</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-10 mb-6">Conclusion</h2>

      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Fumigation and disinfection are different but complementary methods in pest control. Fumigation for severe and stubborn cases, disinfection for prevention and normal cases. Right choice depends on:
      </p>

      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2 ml-6">
        <li>Severity of infestation and type of insects</li>
        <li>Ability to evacuate building</li>
        <li>Available budget</li>
        <li>Need for continuous protection or immediate elimination</li>
      </ul>

      <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 mt-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Confused Which Method to Choose?</h3>
        <p className="text-gray-700 mb-6">
          Our experts at Al-Ustora Company will help you make the right decision based on accurate field inspection - for free.
        </p>
        <Link 
          href="/en/contact"
          className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span>📞</span>
          Book Free Consultation Now
        </Link>
      </div>
    </>
  );

  const tableOfContents = isArabic ? [
    { id: 'what-is', title: 'ما هو التدخين والتعقيم', level: 2 },
    { id: 'differences', title: 'الفروقات الجوهرية', level: 2 },
    { id: 'when-fumigation', title: 'متى نحتاج للتدخين', level: 2 },
    { id: 'when-disinfection', title: 'متى نحتاج للتعقيم', level: 2 },
    { id: 'safety', title: 'الأمان والاحتياطات', level: 2 },
    { id: 'decision', title: 'كيف تقرر', level: 2 },
    { id: 'professional', title: 'الخدمة الاحترافية', level: 2 },
    { id: 'conclusion', title: 'الخلاصة', level: 2 },
  ] : [
    { id: 'what-is', title: 'What is Fumigation & Disinfection', level: 2 },
    { id: 'when-fumigation', title: 'When Fumigation', level: 2 },
    { id: 'when-disinfection', title: 'When Disinfection', level: 2 },
    { id: 'safety', title: 'Safety & Precautions', level: 2 },
    { id: 'decision', title: 'How to Decide', level: 2 },
    { id: 'conclusion', title: 'Conclusion', level: 2 },
  ];

  const faqs = isArabic ? [
    {
      question: 'هل التدخين آمن للمنزل؟',
      answer: 'نعم، إذا تم بواسطة شركة متخصصة مرخصة. بعد التهوية الصحيحة لا يبقى أي أثر سام. لكن يجب الالتزام التام بفترة الإخلاء وعدم الدخول قبل التصريح الرسمي.'
    },
    {
      question: 'كم تستغرق عملية التدخين؟',
      answer: 'عادة 3-7 أيام حسب حجم المبنى. يوم للتحضير، 1-3 أيام للتعرض للغاز، 1-2 يوم للتهوية والفحص النهائي.'
    },
    {
      question: 'هل التعقيم يقضي على البيض أيضاً؟',
      answer: 'بعض المبيدات تقتل البيض، لكن معظمها تقتل الحشرات البالغة فقط. لذلك نحتاج زيارة ثانية بعد 10-14 يوم لقتل الحشرات الفاقسة.'
    },
    {
      question: 'ما الأفضل للنمل الأبيض؟',
      answer: 'يعتمد على شدة الإصابة. الإصابة البسيطة: تعقيم موضعي يكفي. الإصابة الشديدة: التدخين هو الأضمن. استشر متخصص لتقييم حالتك بدقة.'
    },
  ] : [
    {
      question: 'Is fumigation safe for the house?',
      answer: 'Yes, if done by licensed specialized company. After proper ventilation no toxic residue remains. But must strictly comply with evacuation period and not enter before official clearance.'
    },
    {
      question: 'How long does fumigation take?',
      answer: 'Usually 3-7 days depending on building size. One day for preparation, 1-3 days for gas exposure, 1-2 days for ventilation and final inspection.'
    },
    {
      question: 'Does disinfection kill eggs too?',
      answer: 'Some pesticides kill eggs, but most kill adult insects only. So we need second visit after 10-14 days to kill hatching insects.'
    },
    {
      question: 'What is best for termites?',
      answer: 'Depends on severity of infestation. Minor infestation: localized disinfection sufficient. Severe infestation: fumigation is most reliable. Consult specialist to accurately assess your case.'
    },
  ];

  const relatedArticles = isArabic ? [
    { id: 2, title: 'علامات وجود النمل الأبيض في منزلك', excerpt: 'كيف تكتشف وجود النمل الأبيض في منزلك قبل أن يسبب أضراراً جسيمة', image: '/images/Termite-treatment-Jeddah.jpg' },
    { id: 5, title: 'أهمية التعقيم الدوري للمطاعم', excerpt: 'لماذا يجب على المطاعم الالتزام بجدول تعقيم دوري وما هي أفضل الممارسات', image: '/images/Pest-control-for-restaurants.jpg' },
    { id: 13, title: 'المبيدات الآمنة للأطفال والحيوانات الأليفة', excerpt: 'تعرف على المبيدات الآمنة والطرق الصديقة للبيئة لمكافحة الآفات', image: '/images/Safe-pest-control.jpg' },
  ] : [
    { id: 2, title: 'Signs of Termites in Your Home', excerpt: 'How to detect termites in your home before they cause serious damage', image: '/images/Termite-treatment-Jeddah.jpg' },
    { id: 5, title: 'Importance of Regular Restaurant Disinfection', excerpt: 'Why restaurants should follow regular disinfection schedules and best practices', image: '/images/Pest-control-for-restaurants.jpg' },
    { id: 13, title: 'Safe Pesticides for Children and Pets', excerpt: 'Learn about safe pesticides and eco-friendly methods for pest control', image: '/images/Safe-pest-control.jpg' },
  ];

  return (
    <BlogArticle
      title="التدخين والتعقيم: متى نحتاجهما؟"
      titleEn="Fumigation & Disinfection: When Do We Need Them?"
      category="تقنيات متقدمة"
      categoryEn="Advanced Techniques"
      author="م. خالد السلمي"
      authorEn="Eng. Khalid Al-Salmi"
      date={isArabic ? '28 أغسطس 2024' : 'August 28, 2024'}
      readTime={isArabic ? '9 دقائق للقراءة' : '9 min read'}
      featuredImage="/images/Pest-spray-service.jpg"
      featuredImageAlt={isArabic ? 'التدخين والتعقيم في مكافحة الحشرات' : 'Fumigation and disinfection in pest control'}
      tableOfContents={tableOfContents}
      relatedArticles={relatedArticles}
    >
      {content}
    </BlogArticle>
  );
}

