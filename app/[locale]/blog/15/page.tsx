import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { isRTL } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  return {
    title: isArabic ? 'كيف تختار شركة مكافحة موثوقة | مدونة الأسطورة' : 'How to Choose Reliable Pest Control Company | Al-Ustora Blog',
    description: isArabic ? 'معايير أساسية لاختيار شركة مكافحة حشرات محترفة وموثوقة.' : 'Essential criteria for choosing professional and reliable pest control company.',
  };
}

export default function BlogPost15({ params: { locale } }: Props) {
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
            <span className="text-gray-900">{isArabic ? 'اختيار شركة موثوقة' : 'Choosing Reliable Company'}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'التشخيص' : 'Diagnosis'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'كيف تختار شركة مكافحة حشرات موثوقة؟' : 'How to Choose Reliable Pest Control Company?'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '10 مايو 2024' : 'May 10, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '10 دقائق' : '10 min read'}</span></div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Professional pest control.jpg" alt={isArabic ? 'شركة موثوقة' : 'Reliable company'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <p className="lead">اختيار شركة مكافحة حشرات موثوقة قرار مهم يؤثر على صحة عائلتك وسلامة منزلك. إليك دليلاً شاملاً للاختيار الصحيح.</p>

                <h2>المعايير الأساسية</h2>

                <h3>1. التراخيص والشهادات ✅</h3>
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg my-6">
                  <p className="font-semibold mb-3">تأكد من وجود:</p>
                  <ul className="mb-0">
                    <li><CheckCircle2 className="inline text-green-600" size={18} /> ترخيص وزارة البيئة والمياه والزراعة</li>
                    <li><CheckCircle2 className="inline text-green-600" size={18} /> موافقة وزارة الصحة السعودية</li>
                    <li><CheckCircle2 className="inline text-green-600" size={18} /> شهادات ISO للجودة والسلامة</li>
                    <li><CheckCircle2 className="inline text-green-600" size={18} /> تسجيل رسمي في السجل التجاري</li>
                  </ul>
                </div>

                <h3>2. الخبرة والسمعة</h3>
                <ul>
                  <li>سنوات الخبرة في السوق (5+ سنوات مفضل)</li>
                  <li>التقييمات على جوجل ومواقع التواصل</li>
                  <li>شهادات العملاء والمراجعات</li>
                  <li>أعمال سابقة موثقة</li>
                  <li>سمعة محلية قوية</li>
                </ul>

                <h3>3. الكوادر المؤهلة</h3>
                <ul>
                  <li>فنيون مدربون ومعتمدون</li>
                  <li>مهندسون متخصصون</li>
                  <li>تدريب مستمر على أحدث التقنيات</li>
                  <li>زي موحد وبطاقات تعريف</li>
                </ul>

                <h3>4. المعدات والمواد</h3>
                <ul>
                  <li>معدات حديثة ومتطورة</li>
                  <li>مبيدات معتمدة من وزارة الصحة</li>
                  <li>استخدام تقنيات آمنة</li>
                  <li>سيارات مجهزة متخصصة</li>
                </ul>

                <h2>الأسئلة المهمة قبل التعاقد</h2>

                <h3>عن الخدمة:</h3>
                <ol>
                  <li>ما نوع المبيدات المستخدمة؟</li>
                  <li>هل هي آمنة للأطفال والحيوانات؟</li>
                  <li>كم تستغرق المعالجة؟</li>
                  <li>متى يمكننا العودة للمنزل؟</li>
                  <li>هل تقدمون فحصاً مجانياً؟</li>
                </ol>

                <h3>عن الضمان:</h3>
                <ol>
                  <li>ما مدة الضمان؟</li>
                  <li>ماذا يغطي الضمان؟</li>
                  <li>كيف أطالب بالضمان؟</li>
                  <li>هل هناك رسوم إضافية للزيارات الضمانية؟</li>
                </ol>

                <h3>عن السعر:</h3>
                <ol>
                  <li>هل السعر نهائي أم تقديري؟</li>
                  <li>ماذا يشمل السعر؟</li>
                  <li>هل توجد رسوم خفية؟</li>
                  <li>ما طرق الدفع المتاحة؟</li>
                </ol>

                <h2>العلامات التحذيرية ⚠️</h2>
                <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg my-6">
                  <p className="font-semibold mb-3">تجنب الشركات التي:</p>
                  <ul className="mb-0">
                    <li>❌ ليس لديها تراخيص رسمية</li>
                    <li>❌ تعطي أسعاراً أقل بكثير من السوق</li>
                    <li>❌ لا تقدم ضماناً كتابياً</li>
                    <li>❌ ترفض إعطاء معلومات عن المبيدات</li>
                    <li>❌ تطلب الدفع الكامل مقدماً</li>
                    <li>❌ ليس لديها عنوان أو مقر ثابت</li>
                    <li>❌ تقييماتها سلبية أو مزيفة</li>
                  </ul>
                </div>

                <h2>مقارنة العروض</h2>
                <p>اطلب عروضاً من 3-4 شركات وقارن:</p>
                <ul>
                  <li>السعر مقابل القيمة (ليس الأرخص دائماً)</li>
                  <li>نطاق الخدمات المقدمة</li>
                  <li>مدة الضمان وشروطه</li>
                  <li>سرعة الاستجابة والتواصل</li>
                  <li>مرونة المواعيد</li>
                </ul>

                <h2>أنواع العقود</h2>

                <h3>1. الخدمة الفردية</h3>
                <p>مناسبة لحالات الطوارئ أو المشاكل البسيطة.</p>

                <h3>2. العقد السنوي</h3>
                <p>الأفضل للوقاية المستمرة، يشمل:</p>
                <ul>
                  <li>زيارات دورية (شهرية/ربع سنوية)</li>
                  <li>أولوية في الاستجابة</li>
                  <li>خصم على السعر</li>
                  <li>تقارير منتظمة</li>
                </ul>

                <h3>3. العقد التجاري</h3>
                <p>للمطاعم والفنادق والشركات، يشمل:</p>
                <ul>
                  <li>برامج مخصصة</li>
                  <li>شهادات امتثال</li>
                  <li>استجابة 24/7</li>
                  <li>تقارير مفصلة للجهات الرقابية</li>
                </ul>

                <h2>بعد اختيار الشركة</h2>

                <h3>قبل البدء:</h3>
                <ul>
                  <li>احصل على عقد مكتوب</li>
                  <li>اقرأ الشروط والأحكام جيداً</li>
                  <li>وثق حالة المنزل قبل المعالجة</li>
                </ul>

                <h3>أثناء الخدمة:</h3>
                <ul>
                  <li>راقب الفنيين أثناء العمل</li>
                  <li>اطرح أي أسئلة لديك</li>
                  <li>تأكد من معالجة جميع المناطق</li>
                </ul>

                <h3>بعد الخدمة:</h3>
                <ul>
                  <li>احتفظ بنسخة من التقرير</li>
                  <li>قيّم الخدمة</li>
                  <li>تابع النتائج</li>
                  <li>احتفظ بأرقام التواصل للطوارئ</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">لماذا تختار الأسطورة؟</h4>
                  <ul className="mb-0">
                    <li>✅ 15+ سنة خبرة في جدة</li>
                    <li>✅ جميع التراخيص والشهادات</li>
                    <li>✅ مبيدات آمنة معتمدة</li>
                    <li>✅ ضمان كتابي على جميع الخدمات</li>
                    <li>✅ فريق متخصص ومدرب</li>
                    <li>✅ أسعار تنافسية وعادلة</li>
                    <li>✅ خدمة عملاء متميزة 24/7</li>
                    <li>✅ أكثر من 5000 عميل راضٍ</li>
                  </ul>
                </div>

                <h2>الخلاصة</h2>
                <p>اختيار الشركة المناسبة يتطلب بحثاً ومقارنة. لا تتعجل القرار ولا تنخدع بالأسعار المنخفضة جداً. الجودة والأمان والضمان أهم من السعر.</p>
              </>
            ) : (
              <>
                <p className="lead">Choosing reliable pest control company is important decision affecting your family's health and home safety. Here's comprehensive guide for right choice.</p>

                <h2>Essential Criteria</h2>

                <h3>1. Licenses and Certifications ✅</h3>
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg my-6">
                  <p className="font-semibold mb-3">Verify presence of:</p>
                  <ul className="mb-0">
                    <li><CheckCircle2 className="inline text-green-600" size={18} /> Ministry of Environment license</li>
                    <li><CheckCircle2 className="inline text-green-600" size={18} /> Ministry of Health approval</li>
                    <li><CheckCircle2 className="inline text-green-600" size={18} /> ISO certifications for quality and safety</li>
                    <li><CheckCircle2 className="inline text-green-600" size={18} /> Official commercial registration</li>
                  </ul>
                </div>

                <h3>2. Experience and Reputation</h3>
                <ul>
                  <li>Years of market experience (5+ years preferred)</li>
                  <li>Ratings on Google and social media</li>
                  <li>Customer testimonials and reviews</li>
                  <li>Documented previous work</li>
                  <li>Strong local reputation</li>
                </ul>

                <h3>3. Qualified Staff</h3>
                <ul>
                  <li>Trained and certified technicians</li>
                  <li>Specialized engineers</li>
                  <li>Continuous training on latest techniques</li>
                  <li>Uniform and identification badges</li>
                </ul>

                <h2>Important Questions Before Contracting</h2>

                <h3>About Service:</h3>
                <ol>
                  <li>What type of pesticides are used?</li>
                  <li>Are they safe for children and pets?</li>
                  <li>How long does treatment take?</li>
                  <li>When can we return home?</li>
                  <li>Do you offer free inspection?</li>
                </ol>

                <h2>Warning Signs ⚠️</h2>
                <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg my-6">
                  <p className="font-semibold mb-3">Avoid companies that:</p>
                  <ul className="mb-0">
                    <li>❌ Don't have official licenses</li>
                    <li>❌ Offer prices much lower than market</li>
                    <li>❌ Don't provide written guarantee</li>
                    <li>❌ Refuse to give pesticide information</li>
                    <li>❌ Request full payment upfront</li>
                    <li>❌ Don't have address or fixed office</li>
                    <li>❌ Have negative or fake reviews</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Why Choose Al-Ustora?</h4>
                  <ul className="mb-0">
                    <li>✅ 15+ years experience in Jeddah</li>
                    <li>✅ All licenses and certifications</li>
                    <li>✅ Safe certified pesticides</li>
                    <li>✅ Written guarantee on all services</li>
                    <li>✅ Specialized trained team</li>
                    <li>✅ Competitive fair prices</li>
                    <li>✅ Excellent 24/7 customer service</li>
                    <li>✅ Over 5000 satisfied clients</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'جرب خدماتنا المميزة' : 'Try Our Distinguished Services'}</h3>
            <p className="text-xl mb-6 opacity-90">{isArabic ? 'احصل على فحص مجاني وعرض سعر خاص' : 'Get free inspection and special price offer'}</p>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
              {isArabic ? 'اتصل بنا الآن' : 'Contact Us Now'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'كيف تختار شركة مكافحة حشرات موثوقة؟' : 'How to Choose Reliable Pest Control Company?',
        author: isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani',
        publishedAt: '2024-05-10',
        image: '/images/Professional pest control.jpg'
      }} />
    </>
  );
}
