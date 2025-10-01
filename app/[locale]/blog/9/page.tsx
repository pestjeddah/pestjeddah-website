import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, AlertTriangle } from 'lucide-react';
import { isRTL } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  return {
    title: isArabic ? 'علامات تحتاج معها لمكافحة فورية | مدونة الأسطورة' : 'Signs You Need Immediate Pest Control | Al-Ustora Blog',
    description: isArabic ? 'تعرف على العلامات التحذيرية التي تستدعي الاتصال بشركة مكافحة فوراً.' : 'Learn warning signs that require immediate call to pest control company.',
  };
}

export default function BlogPost9({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  return (
    <>
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href={locale === 'ar' ? '/' : '/en'} className="hover:text-primary">{isArabic ? 'الرئيسية' : 'Home'}</Link>
            <span className="mx-2">/</span>
            <Link href={locale === 'ar' ? '/blog' : '/en/blog'} className="hover:text-primary">{isArabic ? 'المدونة' : 'Blog'}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{isArabic ? 'علامات الخطر' : 'Warning Signs'}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'التشخيص' : 'Diagnosis'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'علامات تحتاج معها لمكافحة فورية' : 'Signs You Need Immediate Pest Control'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '25 يوليو 2024' : 'July 25, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '8 دقائق' : '8 min read'}</span></div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Emergency pest control Jeddah.jpg" alt={isArabic ? 'مكافحة طوارئ' : 'Emergency control'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">تحذير عاجل</h4>
                      <p className="mb-0 text-red-800">بعض العلامات تشير لإصابة شديدة تحتاج تدخلاً فورياً لتجنب أضرار صحية ومالية كبيرة.</p>
                    </div>
                  </div>
                </div>

                <h2>علامات الخطر الرئيسية</h2>

                <h3>🔴 1. رؤية الآفات نهاراً</h3>
                <p>معظم الحشرات ليلية. رؤيتها نهاراً يعني اكتظاظ شديد في أماكن الاختباء.</p>

                <h3>🔴 2. أضرار هيكلية واضحة</h3>
                <ul>
                  <li>خشب متآكل أو مجوف (النمل الأبيض)</li>
                  <li>أسلاك كهربائية مقضومة (قوارض)</li>
                  <li>ثقوب في الجدران والأثاث</li>
                </ul>

                <h3>🔴 3. روائح غريبة قوية</h3>
                <p>رائحة كريهة مستمرة قد تدل على:</p>
                <ul>
                  <li>فئران ميتة في الجدران</li>
                  <li>مستعمرة بق فراش كبيرة</li>
                  <li>تجمعات صراصير</li>
                </ul>

                <h3>🔴 4. براز الآفات بكثافة</h3>
                <p>وجود براز حشرات أو قوارض بكميات كبيرة في أماكن متعددة.</p>

                <h3>🔴 5. أعشاش أو بيوض</h3>
                <p>اكتشاف أعشاش أو بيوض يعني تكاثر نشط يحتاج معالجة عاجلة.</p>

                <h3>🔴 6. لدغات متكررة</h3>
                <p>لدغات يومية على أفراد العائلة (خاصة بق الفراش).</p>

                <h3>🔴 7. تلف الأغذية المخزنة</h3>
                <p>عبوات مثقوبة وأغذية ملوثة في المخزن.</p>

                <h3>🔴 8. أصوات داخل الجدران</h3>
                <p>خربشة أو جري داخل الجدران والأسقف (قوارض).</p>

                <h2>متى تتصل فوراً؟</h2>
                <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg my-6">
                  <ul>
                    <li>✅ رؤية أكثر من آفة واحدة يومياً</li>
                    <li>✅ تفاقم المشكلة رغم محاولات المكافحة الذاتية</li>
                    <li>✅ ظهور علامات على أفراد العائلة (لدغات، حساسية)</li>
                    <li>✅ اقتراب موسم الذروة للآفات</li>
                    <li>✅ وجود أطفال أو كبار سن في المنزل</li>
                  </ul>
                </div>

                <h2>مخاطر التأخير</h2>
                <ul>
                  <li>انتشار الآفات لمناطق أوسع</li>
                  <li>تكاليف علاج أعلى لاحقاً</li>
                  <li>أضرار هيكلية للمبنى</li>
                  <li>مخاطر صحية على العائلة</li>
                  <li>تطوير مقاومة للمبيدات</li>
                </ul>

                <h2>خدمة الطوارئ</h2>
                <p>شركة الأسطورة توفر:</p>
                <ul>
                  <li>استجابة خلال 24 ساعة</li>
                  <li>فحص شامل مجاني</li>
                  <li>خطة علاج فورية</li>
                  <li>ضمان النتائج</li>
                  <li>متابعة دورية</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة مهمة</h4>
                  <p className="mb-0">لا تنتظر حتى تتفاقم المشكلة. التدخل المبكر يوفر 70٪ من التكاليف ويمنع الأضرار الكبيرة.</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">Urgent Warning</h4>
                      <p className="mb-0 text-red-800">Some signs indicate severe infestation requiring immediate intervention to avoid major health and financial damage.</p>
                    </div>
                  </div>
                </div>

                <h2>Main Warning Signs</h2>

                <h3>🔴 1. Seeing Pests During Daytime</h3>
                <p>Most insects are nocturnal. Seeing them during day means severe overcrowding in hiding places.</p>

                <h3>🔴 2. Visible Structural Damage</h3>
                <ul>
                  <li>Corroded or hollow wood (termites)</li>
                  <li>Gnawed electrical wires (rodents)</li>
                  <li>Holes in walls and furniture</li>
                </ul>

                <h3>🔴 3. Strong Strange Odors</h3>
                <p>Persistent foul smell may indicate:</p>
                <ul>
                  <li>Dead mice in walls</li>
                  <li>Large bed bug colony</li>
                  <li>Cockroach gatherings</li>
                </ul>

                <h3>🔴 4. Heavy Pest Droppings</h3>
                <p>Presence of insect or rodent droppings in large quantities in multiple places.</p>

                <h3>🔴 5. Nests or Eggs</h3>
                <p>Discovering nests or eggs means active reproduction requiring urgent treatment.</p>

                <h3>🔴 6. Repeated Bites</h3>
                <p>Daily bites on family members (especially bed bugs).</p>

                <h3>🔴 7. Stored Food Damage</h3>
                <p>Punctured packages and contaminated food in storage.</p>

                <h3>🔴 8. Sounds Inside Walls</h3>
                <p>Scratching or running inside walls and ceilings (rodents).</p>

                <h2>When to Call Immediately?</h2>
                <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg my-6">
                  <ul>
                    <li>✅ Seeing more than one pest daily</li>
                    <li>✅ Problem worsening despite DIY control attempts</li>
                    <li>✅ Signs appearing on family members (bites, allergies)</li>
                    <li>✅ Approaching peak pest season</li>
                    <li>✅ Children or elderly in the home</li>
                  </ul>
                </div>

                <h2>Risks of Delay</h2>
                <ul>
                  <li>Pest spread to wider areas</li>
                  <li>Higher treatment costs later</li>
                  <li>Structural damage to building</li>
                  <li>Health risks to family</li>
                  <li>Development of pesticide resistance</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Important Tip</h4>
                  <p className="mb-0">Don't wait until problem escalates. Early intervention saves 70% of costs and prevents major damage.</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'اتصل الآن - خدمة طوارئ 24/7' : 'Call Now - 24/7 Emergency Service'}</h3>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="btn-primary inline-flex items-center gap-2">
              {isArabic ? 'طلب خدمة عاجلة' : 'Request Urgent Service'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'علامات تحتاج معها لمكافحة فورية' : 'Signs You Need Immediate Pest Control',
        author: isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani',
        publishedAt: '2024-07-25',
        image: '/images/Emergency pest control Jeddah.jpg'
      }} />
    </>
  );
}
