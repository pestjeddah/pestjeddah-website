import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, Share2, CheckCircle2 } from 'lucide-react';

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
      ? 'أهمية التعقيم الدوري للمطاعم | مدونة الأسطورة'
      : 'Importance of Regular Restaurant Disinfection | Al-Ustora Blog',
    description: isArabic
      ? 'تعرف على أهمية التعقيم الدوري للمطاعم وأفضل الممارسات للحفاظ على سلامة الغذاء وصحة العملاء.'
      : 'Learn about the importance of regular restaurant disinfection and best practices for food safety and customer health.',
  };
}

export default function BlogPost5({ params: { locale } }: Props) {
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
              {isArabic ? 'التعقيم الدوري للمطاعم' : 'Regular Restaurant Disinfection'}
            </span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'قطاع تجاري' : 'Commercial Sector'}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic 
                ? 'أهمية التعقيم الدوري للمطاعم'
                : 'Importance of Regular Restaurant Disinfection'
              }
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{isArabic ? '1 سبتمبر 2024' : 'September 1, 2024'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{isArabic ? '10 دقائق للقراءة' : '10 min read'}</span>
              </div>
              <button className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Share2 size={18} />
                <span>{isArabic ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/Pest control for restaurants.jpg"
              alt={isArabic ? 'التعقيم في المطاعم' : 'Restaurant disinfection'}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <h2>لماذا التعقيم الدوري ضروري للمطاعم؟</h2>
                <p>
                  المطاعم من أكثر البيئات عرضة لانتشار الحشرات والآفات بسبب توفر الطعام والرطوبة.
                  التعقيم الدوري ليس مجرد متطلب قانوني، بل هو ضرورة حيوية لضمان:
                </p>
                <ul>
                  <li>سلامة الغذاء وجودته</li>
                  <li>صحة العملاء والعاملين</li>
                  <li>سمعة المطعم ونجاحه التجاري</li>
                  <li>الامتثال للمعايير الصحية المحلية</li>
                  <li>تجنب الغرامات والعقوبات</li>
                </ul>

                <h2>الآفات الشائعة في المطاعم</h2>

                <h3>1. الصراصير</h3>
                <p>
                  أكثر الآفات شيوعاً في المطاعم. تنقل الأمراض وتلوث الطعام والأسطح. تتكاثر بسرعة
                  كبيرة في البيئات الدافئة والرطبة.
                </p>

                <h3>2. الذباب</h3>
                <p>
                  ينقل البكتيريا والجراثيم من القمامة إلى الطعام. يتكاثر في القمامة والمواد العضوية
                  المتحللة.
                </p>

                <h3>3. القوارض</h3>
                <p>
                  تتلف المخزون وتنقل أمراض خطيرة. تلوث الطعام بالبول والبراز وتمضغ الأسلاك الكهربائية.
                </p>

                <h3>4. النمل</h3>
                <p>
                  ينجذب للسكريات والطعام. يشكل طوابير طويلة ويصعب التخلص منه بدون برنامج متكامل.
                </p>

                <h2>برنامج التعقيم الفعال للمطاعم</h2>

                <h3>الفحص والتقييم الأولي</h3>
                <ul>
                  <li>فحص شامل لجميع مناطق المطعم</li>
                  <li>تحديد نقاط الضعف والمناطق الحرجة</li>
                  <li>تقييم مستوى النظافة الحالي</li>
                  <li>وضع خطة معالجة مخصصة</li>
                </ul>

                <h3>المعالجة الدورية</h3>
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg my-6">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={24} />
                    جدول التعقيم الموصى به
                  </h4>
                  <ul className="mb-0">
                    <li><strong>أسبوعياً:</strong> فحص وتنظيف شامل للمطبخ ومناطق التحضير</li>
                    <li><strong>نصف شهري:</strong> معالجة وقائية للنقاط الحرجة</li>
                    <li><strong>شهرياً:</strong> فحص متخصص ومعالجة شاملة</li>
                    <li><strong>ربع سنوي:</strong> معالجة مكثفة وتقييم شامل</li>
                  </ul>
                </div>

                <h3>المناطق الحرجة التي تحتاج اهتمام خاص</h3>
                <ul>
                  <li>مناطق تحضير الطعام والطهي</li>
                  <li>غرف التخزين والمستودعات</li>
                  <li>صناديق القمامة ومناطق التخلص</li>
                  <li>أماكن غسل الصحون والنظافة</li>
                  <li>الحمامات ومناطق الموظفين</li>
                  <li>أنظمة الصرف والمجاري</li>
                  <li>الفتحات والشقوق في الجدران</li>
                </ul>

                <h2>أفضل الممارسات للوقاية</h2>

                <h3>النظافة اليومية</h3>
                <ul>
                  <li>تنظيف جميع الأسطح بعد كل وردية</li>
                  <li>إفراغ القمامة بانتظام</li>
                  <li>تخزين الطعام في حاويات محكمة</li>
                  <li>تنظيف البقع والانسكابات فوراً</li>
                  <li>غسل الأرضيات بالماء والمطهرات</li>
                </ul>

                <h3>التدريب والتوعية</h3>
                <ul>
                  <li>تدريب الموظفين على إجراءات النظافة</li>
                  <li>توعيتهم بعلامات وجود الآفات</li>
                  <li>تشجيع الإبلاغ الفوري عن أي مشكلة</li>
                  <li>مراجعة دورية للإجراءات</li>
                </ul>

                <h3>الصيانة الوقائية</h3>
                <ul>
                  <li>إصلاح الشقوق والفتحات</li>
                  <li>صيانة أنظمة التكييف والتهوية</li>
                  <li>إصلاح تسريبات المياه</li>
                  <li>تركيب حواجز على النوافذ والأبواب</li>
                </ul>

                <h2>فوائد العقود السنوية</h2>
                <ul>
                  <li>✅ معالجة منتظمة ومضمونة</li>
                  <li>✅ تكلفة أقل مقارنة بالخدمات الفردية</li>
                  <li>✅ أولوية في الاستجابة للطوارئ</li>
                  <li>✅ تقارير دورية للامتثال للمعايير</li>
                  <li>✅ راحة بال واستمرارية العمل</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة الخبراء</h4>
                  <p className="mb-0">
                    الوقاية دائماً أرخص من العلاج. استثمارك في برنامج تعقيم دوري يحمي سمعة مطعمك
                    ويوفر عليك تكاليف باهظة في حالة انتشار الآفات أو إغلاق المنشأة.
                  </p>
                </div>

                <h2>كيف تختار شركة التعقيم المناسبة؟</h2>
                <ul>
                  <li>التراخيص والشهادات المعتمدة</li>
                  <li>الخبرة في قطاع المطاعم</li>
                  <li>استخدام مبيدات آمنة ومعتمدة</li>
                  <li>توفير تقارير مفصلة</li>
                  <li>خدمة عملاء متميزة واستجابة سريعة</li>
                  <li>سياسة ضمان واضحة</li>
                </ul>
              </>
            ) : (
              <>
                <h2>Why is Regular Disinfection Essential for Restaurants?</h2>
                <p>
                  Restaurants are among the most vulnerable environments to pest infestation due to the
                  availability of food and moisture. Regular disinfection is not just a legal requirement,
                  but a vital necessity to ensure:
                </p>
                <ul>
                  <li>Food safety and quality</li>
                  <li>Health of customers and staff</li>
                  <li>Restaurant reputation and commercial success</li>
                  <li>Compliance with local health standards</li>
                  <li>Avoidance of fines and penalties</li>
                </ul>

                <h2>Common Restaurant Pests</h2>

                <h3>1. Cockroaches</h3>
                <p>
                  Most common pests in restaurants. They transmit diseases and contaminate food and surfaces.
                  Reproduce quickly in warm, moist environments.
                </p>

                <h3>2. Flies</h3>
                <p>
                  Carry bacteria and germs from trash to food. Breed in garbage and decomposing organic matter.
                </p>

                <h3>3. Rodents</h3>
                <p>
                  Damage inventory and transmit serious diseases. Contaminate food with urine and feces and
                  chew electrical wires.
                </p>

                <h3>4. Ants</h3>
                <p>
                  Attracted to sugars and food. Form long trails and are difficult to eliminate without a
                  comprehensive program.
                </p>

                <h2>Effective Restaurant Disinfection Program</h2>

                <h3>Initial Inspection and Assessment</h3>
                <ul>
                  <li>Comprehensive inspection of all restaurant areas</li>
                  <li>Identify weaknesses and critical areas</li>
                  <li>Assess current cleanliness level</li>
                  <li>Develop customized treatment plan</li>
                </ul>

                <h3>Regular Treatment</h3>
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg my-6">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={24} />
                    Recommended Disinfection Schedule
                  </h4>
                  <ul className="mb-0">
                    <li><strong>Weekly:</strong> Comprehensive kitchen and preparation area inspection and cleaning</li>
                    <li><strong>Bi-weekly:</strong> Preventive treatment for critical points</li>
                    <li><strong>Monthly:</strong> Specialized inspection and comprehensive treatment</li>
                    <li><strong>Quarterly:</strong> Intensive treatment and comprehensive assessment</li>
                  </ul>
                </div>

                <h3>Critical Areas Requiring Special Attention</h3>
                <ul>
                  <li>Food preparation and cooking areas</li>
                  <li>Storage rooms and warehouses</li>
                  <li>Garbage bins and disposal areas</li>
                  <li>Dishwashing and cleaning areas</li>
                  <li>Bathrooms and staff areas</li>
                  <li>Drainage and sewer systems</li>
                  <li>Cracks and crevices in walls</li>
                </ul>

                <h2>Best Practices for Prevention</h2>

                <h3>Daily Cleanliness</h3>
                <ul>
                  <li>Clean all surfaces after each shift</li>
                  <li>Empty trash regularly</li>
                  <li>Store food in sealed containers</li>
                  <li>Clean spills and stains immediately</li>
                  <li>Wash floors with water and disinfectants</li>
                </ul>

                <h3>Training and Awareness</h3>
                <ul>
                  <li>Train staff on hygiene procedures</li>
                  <li>Educate them on pest signs</li>
                  <li>Encourage immediate reporting of any issues</li>
                  <li>Regular procedure reviews</li>
                </ul>

                <h3>Preventive Maintenance</h3>
                <ul>
                  <li>Repair cracks and crevices</li>
                  <li>Maintain air conditioning and ventilation systems</li>
                  <li>Fix water leaks</li>
                  <li>Install screens on windows and doors</li>
                </ul>

                <h2>Benefits of Annual Contracts</h2>
                <ul>
                  <li>✅ Regular and guaranteed treatment</li>
                  <li>✅ Lower cost compared to individual services</li>
                  <li>✅ Priority in emergency response</li>
                  <li>✅ Regular compliance reports</li>
                  <li>✅ Peace of mind and business continuity</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expert Tip</h4>
                  <p className="mb-0">
                    Prevention is always cheaper than treatment. Your investment in a regular disinfection
                    program protects your restaurant's reputation and saves you significant costs in case
                    of pest outbreak or facility closure.
                  </p>
                </div>

                <h2>How to Choose the Right Disinfection Company?</h2>
                <ul>
                  <li>Certified licenses and certifications</li>
                  <li>Experience in restaurant sector</li>
                  <li>Use of safe and certified pesticides</li>
                  <li>Provide detailed reports</li>
                  <li>Excellent customer service and quick response</li>
                  <li>Clear guarantee policy</li>
                </ul>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'احمِ مطعمك بعقد تعقيم سنوي' : 'Protect Your Restaurant with Annual Contract'}
            </h3>
            <p className="text-gray-700 mb-6">
              {isArabic 
                ? 'اطلب استشارة مجانية وعرض سعر خاص للمطاعم'
                : 'Request free consultation and special restaurant pricing'
              }
            </p>
            <Link
              href={locale === 'ar' ? '/contact' : '/en/contact'}
              className="btn-primary inline-flex items-center gap-2"
            >
              {isArabic ? 'احصل على عرض سعر' : 'Get Quote'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector 
        type="article" 
        data={{
          title: isArabic 
            ? 'أهمية التعقيم الدوري للمطاعم'
            : 'Importance of Regular Restaurant Disinfection',
          description: isArabic 
            ? 'دليل شامل للتعقيم الدوري للمطاعم'
            : 'Comprehensive guide for regular restaurant disinfection',
          author: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi',
          publishedAt: '2024-09-01',
          image: '/images/Pest control for restaurants.jpg'
        }}
      />
    </>
  );
}


