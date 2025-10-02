import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, Shield } from 'lucide-react';
import { isRTL } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  return {
    title: isArabic ? 'المبيدات الآمنة للأطفال والحيوانات | مدونة الأسطورة' : 'Safe Pesticides for Children and Pets | Al-Ustora Blog',
    description: isArabic ? 'تعرف على المبيدات الآمنة والطرق الصديقة للبيئة لمكافحة الآفات.' : 'Learn about safe pesticides and eco-friendly methods for pest control.',
  };
}

export default function BlogPost13({ params: { locale } }: Props) {
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
            <span className="text-gray-900">{isArabic ? 'المبيدات الآمنة' : 'Safe Pesticides'}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4 flex items-center gap-2 w-fit">
              <Shield size={16} />
              {isArabic ? 'تقنيات متقدمة' : 'Advanced Techniques'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'المبيدات الآمنة للأطفال والحيوانات الأليفة' : 'Safe Pesticides for Children and Pets'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '10 يونيو 2024' : 'June 10, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '10 دقائق' : '10 min read'}</span></div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Safe-pest-control.jpg" alt={isArabic ? 'مكافحة آمنة' : 'Safe pest control'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-green-900">الأمان أولاً</h4>
                      <p className="mb-0 text-green-800">صحة عائلتك وحيواناتك الأليفة أهم من أي شيء. نستخدم فقط المبيدات المعتمدة والآمنة.</p>
                    </div>
                  </div>
                </div>

                <h2>لماذا نحتاج مبيدات آمنة؟</h2>
                <p>الأطفال والحيوانات الأليفة:</p>
                <ul>
                  <li>أكثر حساسية للمواد الكيميائية</li>
                  <li>قريبون من الأرضيات (تعرض أكبر)</li>
                  <li>قد يلمسون أو يبتلعون المبيدات</li>
                  <li>أجهزتهم المناعية أضعف</li>
                </ul>

                <h2>أنواع المبيدات الآمنة</h2>

                <h3>1. المبيدات الطبيعية</h3>
                <ul>
                  <li><strong>زيت النعناع:</strong> طارد للحشرات، آمن تماماً</li>
                  <li><strong>حمض البوريك:</strong> فعال ضد الصراصير، قليل السمية</li>
                  <li><strong>دياتوميت:</strong> مسحوق طبيعي يقتل الحشرات فيزيائياً</li>
                  <li><strong>زيت النيم:</strong> مبيد نباتي شامل</li>
                </ul>

                <h3>2. المبيدات الحيوية</h3>
                <ul>
                  <li>تستخدم بكتيريا أو فطريات طبيعية</li>
                  <li>تستهدف الآفات فقط</li>
                  <li>تتحلل بسرعة في البيئة</li>
                  <li>لا تضر بالكائنات النافعة</li>
                </ul>

                <h3>3. المبيدات منخفضة السمية</h3>
                <ul>
                  <li>معتمدة من هيئات السلامة الدولية</li>
                  <li>تُستخدم بتراكيز منخفضة جداً</li>
                  <li>سريعة التحلل</li>
                  <li>فترة أمان قصيرة (2-4 ساعات)</li>
                </ul>

                <h2>طرق تطبيق آمنة</h2>

                <h3>1. الطعوم المحكمة</h3>
                <p>توضع في صناديق مغلقة لا يصل إليها الأطفال أو الحيوانات.</p>

                <h3>2. الرش المستهدف</h3>
                <p>رش فقط في الأماكن البعيدة والشقوق، ليس على الأسطح المكشوفة.</p>

                <h3>3. المصائد الفيزيائية</h3>
                <ul>
                  <li>مصائد لاصقة</li>
                  <li>مصائد ضوئية</li>
                  <li>مصائد آمنة للقوارض</li>
                </ul>

                <h3>4. البخار الساخن</h3>
                <p>معالجة حرارية بدون أي كيماويات، فعالة ضد بق الفراش والعث.</p>

                <h2>البدائل غير الكيميائية</h2>
                <ul>
                  <li>التنظيف العميق المنتظم</li>
                  <li>إغلاق نقاط الدخول</li>
                  <li>إزالة مصادر الطعام والماء</li>
                  <li>استخدام النباتات الطاردة</li>
                  <li>الأجهزة الإلكترونية الطاردة</li>
                </ul>

                <h2>احتياطات الأمان</h2>
                <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg my-6">
                  <h4 className="font-bold mb-3">قبل المعالجة:</h4>
                  <ul>
                    <li>✅ إخلاء الأطفال والحيوانات</li>
                    <li>✅ تغطية أواني الطعام</li>
                    <li>✅ إبعاد ألعاب الأطفال</li>
                    <li>✅ السؤال عن فترة الأمان</li>
                  </ul>
                  
                  <h4 className="font-bold mb-3 mt-4">بعد المعالجة:</h4>
                  <ul>
                    <li>✅ تهوية المكان جيداً</li>
                    <li>✅ مسح الأسطح التي يلمسها الأطفال</li>
                    <li>✅ الانتظار المدة الموصى بها</li>
                    <li>✅ غسل ألعاب الأطفال</li>
                  </ul>
                </div>

                <h2>شهادات الأمان المهمة</h2>
                <ul>
                  <li>✅ موافقة وزارة الصحة السعودية</li>
                  <li>✅ شهادة EPA (وكالة حماية البيئة الأمريكية)</li>
                  <li>✅ شهادة ISO للسلامة البيئية</li>
                  <li>✅ تصنيف منخفض السمية</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">التزامنا</h4>
                  <p className="mb-0">شركة الأسطورة تستخدم فقط مبيدات معتمدة آمنة للأطفال والحيوانات الأليفة. نقدم ضمان كتابي على سلامة المواد المستخدمة.</p>
                </div>

                <h2>أسئلة شائعة</h2>
                <h3>هل المبيدات الطبيعية فعالة؟</h3>
                <p>نعم، لكنها قد تحتاج تطبيقات أكثر ووقتاً أطول مقارنة بالمبيدات الكيميائية.</p>

                <h3>متى يمكن للأطفال العودة بعد الرش؟</h3>
                <p>عادة 2-4 ساعات مع التهوية الجيدة، أو حسب توصيات الشركة.</p>

                <h3>هل تؤثر على الحيوانات الأليفة؟</h3>
                <p>المبيدات المعتمدة آمنة بعد الجفاف، لكن يُنصح بإبعادها أثناء التطبيق.</p>
              </>
            ) : (
              <>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-green-900">Safety First</h4>
                      <p className="mb-0 text-green-800">Your family and pets' health is more important than anything. We only use certified safe pesticides.</p>
                    </div>
                  </div>
                </div>

                <h2>Why Do We Need Safe Pesticides?</h2>
                <p>Children and pets:</p>
                <ul>
                  <li>More sensitive to chemicals</li>
                  <li>Closer to floors (greater exposure)</li>
                  <li>May touch or swallow pesticides</li>
                  <li>Weaker immune systems</li>
                </ul>

                <h2>Types of Safe Pesticides</h2>

                <h3>1. Natural Pesticides</h3>
                <ul>
                  <li><strong>Peppermint Oil:</strong> Insect repellent, completely safe</li>
                  <li><strong>Boric Acid:</strong> Effective against cockroaches, low toxicity</li>
                  <li><strong>Diatomaceous Earth:</strong> Natural powder that kills insects physically</li>
                  <li><strong>Neem Oil:</strong> Comprehensive plant-based pesticide</li>
                </ul>

                <h3>2. Biological Pesticides</h3>
                <ul>
                  <li>Use natural bacteria or fungi</li>
                  <li>Target only pests</li>
                  <li>Decompose quickly in environment</li>
                  <li>Don't harm beneficial organisms</li>
                </ul>

                <h3>3. Low-Toxicity Pesticides</h3>
                <ul>
                  <li>Certified by international safety agencies</li>
                  <li>Used in very low concentrations</li>
                  <li>Quick decomposition</li>
                  <li>Short safety period (2-4 hours)</li>
                </ul>

                <h2>Safe Application Methods</h2>

                <h3>1. Sealed Baits</h3>
                <p>Placed in closed boxes inaccessible to children or pets.</p>

                <h3>2. Targeted Spraying</h3>
                <p>Spray only in remote areas and cracks, not on exposed surfaces.</p>

                <h3>3. Physical Traps</h3>
                <ul>
                  <li>Sticky traps</li>
                  <li>Light traps</li>
                  <li>Safe rodent traps</li>
                </ul>

                <h3>4. Hot Steam</h3>
                <p>Heat treatment without any chemicals, effective against bed bugs and moths.</p>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Our Commitment</h4>
                  <p className="mb-0">Al-Ustora company uses only certified pesticides safe for children and pets. We provide written guarantee on safety of materials used.</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'مكافحة آمنة 100٪ لعائلتك' : '100% Safe Control for Your Family'}</h3>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="btn-primary inline-flex items-center gap-2">
              {isArabic ? 'احجز الآن' : 'Book Now'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'المبيدات الآمنة للأطفال والحيوانات الأليفة' : 'Safe Pesticides for Children and Pets',
        author: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi',
        publishedAt: '2024-06-10',
        image: '/images/Safe-pest-control.jpg'
      }} />
    </>
  );
}
