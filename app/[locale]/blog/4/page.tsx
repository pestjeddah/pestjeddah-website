import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, Share2, AlertTriangle } from 'lucide-react';

import { isRTL } from '@/lib/utils';
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
      ? 'كيفية علاج بق الفراش نهائياً | مدونة الأسطورة'
      : 'How to Eliminate Bed Bugs Permanently | Al-Ustora Blog',
    description: isArabic
      ? 'دليل شامل للتخلص من بق الفراش نهائياً وضمان عدم عودته مرة أخرى مع خطوات عملية ونصائح متخصصة.'
      : 'Comprehensive guide to permanently eliminate bed bugs and ensure they don\'t return with practical steps and specialized tips.',
  };
}

export default function BlogPost4({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href={locale === 'ar' ? '/' : '/en'} className="hover:text-primary">
              {isArabic ? 'الرئيسية' : 'Home'}
            </Link>
            <span className="mx-2">/</span>
            <Link href={locale === 'ar' ? '/blog' : '/en/blog'} className="hover:text-primary">
              {isArabic ? 'المدونة' : 'Blog'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">
              {isArabic ? 'علاج بق الفراش' : 'Bed Bug Treatment'}
            </span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'علاج متخصص' : 'Specialized Treatment'}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic 
                ? 'كيفية علاج بق الفراش نهائياً'
                : 'How to Eliminate Bed Bugs Permanently'
              }
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{isArabic ? 'أ. محمد الحربي' : 'Mr. Mohammed Al-Harbi'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{isArabic ? '5 سبتمبر 2024' : 'September 5, 2024'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{isArabic ? '8 دقائق للقراءة' : '8 min read'}</span>
              </div>
              <button className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Share2 size={18} />
                <span>{isArabic ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/Bed-bug-treatment-Jeddah.jpg"
              alt={isArabic ? 'علاج بق الفراش' : 'Bed bug treatment'}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">تحذير مهم</h4>
                      <p className="mb-0 text-red-800">
                        بق الفراش من أصعب الآفات في المكافحة. لا تحاول العلاج بنفسك دون استشارة متخصصين
                        لتجنب انتشار المشكلة أو تطوير مقاومة للمبيدات.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>ما هو بق الفراش؟</h2>
                <p>
                  بق الفراش حشرات صغيرة بنية اللون تتغذى على دم الإنسان أثناء النوم. يمكن أن تعيش لعدة
                  أشهر بدون طعام وتختبئ في أصغر الشقوق والفتحات.
                </p>

                <h2>علامات الإصابة ببق الفراش</h2>
                <ul>
                  <li>لدغات حمراء على الجلد في صفوف أو مجموعات</li>
                  <li>بقع دم صغيرة على الملاءات</li>
                  <li>بقع سوداء صغيرة (براز البق) على الفراش</li>
                  <li>رائحة كريهة حلوة في الغرفة</li>
                  <li>رؤية حشرات بنية صغيرة بحجم بذرة التفاح</li>
                </ul>

                <h2>خطوات العلاج الشامل</h2>

                <h3>المرحلة 1: التحضير (يوم 1)</h3>
                <ul>
                  <li>تفريغ جميع الأدراج والخزانات</li>
                  <li>غسل جميع الملابس والفراش بماء ساخن (60 درجة مئوية)</li>
                  <li>تجفيف كل شيء على أعلى حرارة ممكنة</li>
                  <li>تخزين الأغراض النظيفة في أكياس بلاستيكية محكمة</li>
                  <li>شفط جميع الأسطح والزوايا بمكنسة كهربائية</li>
                </ul>

                <h3>المرحلة 2: المعالجة المتخصصة (يوم 2-3)</h3>
                <ul>
                  <li>رش المبيدات المتخصصة على جميع الأسطح</li>
                  <li>معالجة الشقوق والفتحات بمساحيق خاصة</li>
                  <li>استخدام البخار الساخن على الفرش والمراتب</li>
                  <li>معالجة الأثاث والستائر</li>
                  <li>وضع أغطية واقية على المراتب والوسائد</li>
                </ul>

                <h3>المرحلة 3: المتابعة (أسبوع 2-4)</h3>
                <ul>
                  <li>فحص يومي لعلامات البق الجديدة</li>
                  <li>معالجة ثانية بعد 10-14 يوماً</li>
                  <li>استمرار استخدام أغطية المراتب لمدة عام</li>
                  <li>فحص دوري للتأكد من القضاء التام</li>
                </ul>

                <h2>الأخطاء الشائعة التي يجب تجنبها</h2>
                <ul>
                  <li>❌ استخدام المبيدات العشوائية دون تخطيط</li>
                  <li>❌ رمي الأثاث المصاب دون معالجة (ينقل المشكلة للآخرين)</li>
                  <li>❌ النوم في غرفة أخرى (ينشر البق في المنزل)</li>
                  <li>❌ الاكتفاء بمعالجة واحدة فقط</li>
                  <li>❌ عدم معالجة الغرف المجاورة</li>
                </ul>

                <h2>الوقاية من العودة</h2>
                <p>
                  بعد القضاء على بق الفراش، اتبع هذه الخطوات لمنع العودة:
                </p>
                <ul>
                  <li>فحص الأمتعة بعناية عند العودة من السفر</li>
                  <li>عدم شراء أثاث مستعمل دون فحصه جيداً</li>
                  <li>إصلاح الشقوق والفتحات في الجدران</li>
                  <li>استخدام أغطية واقية للمراتب</li>
                  <li>التنظيف المنتظم بالمكنسة الكهربائية</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة الخبراء</h4>
                  <p className="mb-0">
                    معالجة بق الفراش تتطلب خطة متكاملة وصبر. النجاح يعتمد على الاستمرارية والدقة
                    في تطبيق جميع الخطوات. لا تتردد في طلب المساعدة المتخصصة لضمان القضاء التام.
                  </p>
                </div>

                <h2>لماذا تحتاج لمتخصصين؟</h2>
                <ul>
                  <li>معدات متخصصة (بخار بدرجة حرارة عالية، مبيدات معتمدة)</li>
                  <li>خبرة في تحديد جميع أماكن الاختباء</li>
                  <li>ضمان عدم انتشار البق لمناطق أخرى</li>
                  <li>متابعة دورية للتأكد من القضاء التام</li>
                  <li>توفير الوقت والجهد والتكلفة على المدى الطويل</li>
                </ul>
              </>
            ) : (
              <>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-red-900">Important Warning</h4>
                      <p className="mb-0 text-red-800">
                        Bed bugs are one of the most difficult pests to control. Don't attempt self-treatment
                        without consulting professionals to avoid spreading the problem or developing pesticide resistance.
                      </p>
                    </div>
                  </div>
                </div>

                <h2>What Are Bed Bugs?</h2>
                <p>
                  Bed bugs are small, brown insects that feed on human blood while sleeping. They can live
                  for several months without food and hide in the smallest cracks and crevices.
                </p>

                <h2>Signs of Bed Bug Infestation</h2>
                <ul>
                  <li>Red bites on skin in rows or clusters</li>
                  <li>Small blood spots on sheets</li>
                  <li>Small black spots (bug feces) on bedding</li>
                  <li>Sweet musty odor in the room</li>
                  <li>Seeing small brown insects the size of an apple seed</li>
                </ul>

                <h2>Comprehensive Treatment Steps</h2>

                <h3>Phase 1: Preparation (Day 1)</h3>
                <ul>
                  <li>Empty all drawers and closets</li>
                  <li>Wash all clothes and bedding in hot water (60°C)</li>
                  <li>Dry everything on highest heat possible</li>
                  <li>Store clean items in sealed plastic bags</li>
                  <li>Vacuum all surfaces and corners</li>
                </ul>

                <h3>Phase 2: Professional Treatment (Days 2-3)</h3>
                <ul>
                  <li>Apply specialized pesticides to all surfaces</li>
                  <li>Treat cracks and crevices with special powders</li>
                  <li>Use hot steam on mattresses and box springs</li>
                  <li>Treat furniture and curtains</li>
                  <li>Install protective covers on mattresses and pillows</li>
                </ul>

                <h3>Phase 3: Follow-up (Weeks 2-4)</h3>
                <ul>
                  <li>Daily inspection for new bug signs</li>
                  <li>Second treatment after 10-14 days</li>
                  <li>Continue using mattress covers for one year</li>
                  <li>Regular inspection to ensure complete elimination</li>
                </ul>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                  <li>❌ Using random pesticides without planning</li>
                  <li>❌ Throwing away infested furniture without treatment (spreads problem to others)</li>
                  <li>❌ Sleeping in another room (spreads bugs throughout home)</li>
                  <li>❌ Relying on single treatment only</li>
                  <li>❌ Not treating adjacent rooms</li>
                </ul>

                <h2>Prevention from Re-infestation</h2>
                <p>
                  After eliminating bed bugs, follow these steps to prevent return:
                </p>
                <ul>
                  <li>Carefully inspect luggage after traveling</li>
                  <li>Don't buy used furniture without thorough inspection</li>
                  <li>Repair cracks and crevices in walls</li>
                  <li>Use protective mattress covers</li>
                  <li>Regular vacuum cleaning</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expert Tip</h4>
                  <p className="mb-0">
                    Treating bed bugs requires a comprehensive plan and patience. Success depends on
                    consistency and precision in applying all steps. Don't hesitate to seek professional
                    help to ensure complete elimination.
                  </p>
                </div>

                <h2>Why You Need Professionals?</h2>
                <ul>
                  <li>Specialized equipment (high-temperature steam, certified pesticides)</li>
                  <li>Experience in identifying all hiding places</li>
                  <li>Guarantee against bug spread to other areas</li>
                  <li>Regular follow-up to ensure complete elimination</li>
                  <li>Save time, effort, and long-term costs</li>
                </ul>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'تعاني من بق الفراش؟' : 'Suffering from Bed Bugs?'}
            </h3>
            <p className="text-gray-700 mb-6">
              {isArabic 
                ? 'احصل على معالجة فورية ومضمونة من خبرائنا المعتمدين'
                : 'Get immediate and guaranteed treatment from our certified experts'
              }
            </p>
            <Link
              href={locale === 'ar' ? '/contact' : '/en/contact'}
              className="btn-primary inline-flex items-center gap-2"
            >
              {isArabic ? 'اتصل الآن' : 'Contact Now'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector 
        type="article" 
        data={{
          title: isArabic 
            ? 'كيفية علاج بق الفراش نهائياً'
            : 'How to Eliminate Bed Bugs Permanently',
          description: isArabic 
            ? 'دليل شامل للتخلص من بق الفراش نهائياً'
            : 'Comprehensive guide to permanently eliminate bed bugs',
          author: isArabic ? 'أ. محمد الحربي' : 'Mr. Mohammed Al-Harbi',
          publishedAt: '2024-09-05',
          image: '/images/Bed-bug-treatment-Jeddah.jpg'
        }}
      />
    </>
  );
}


