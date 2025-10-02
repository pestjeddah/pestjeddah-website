import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { isRTL } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  return {
    title: isArabic ? 'مكافحة الآفات في الفنادق | مدونة الأسطورة' : 'Pest Control in Hotels | Al-Ustora Blog',
    description: isArabic ? 'برامج مكافحة متخصصة للفنادق تضمن سلامة النزلاء والحفاظ على السمعة.' : 'Specialized pest control programs for hotels ensuring guest safety and reputation protection.',
  };
}

export default function BlogPost10({ params: { locale } }: Props) {
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
            <span className="text-gray-900">{isArabic ? 'مكافحة الفنادق' : 'Hotel Pest Control'}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'قطاع تجاري' : 'Commercial Sector'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'مكافحة الآفات في الفنادق: دليل شامل' : 'Pest Control in Hotels: Comprehensive Guide'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '15 يوليو 2024' : 'July 15, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '9 دقائق' : '9 min read'}</span></div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Commercial-pest-control-Jeddah.jpg" alt={isArabic ? 'مكافحة في الفنادق' : 'Hotel pest control'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <h2>لماذا تحتاج الفنادق لبرامج خاصة؟</h2>
                <p>الفنادق بيئة فريدة تواجه تحديات:</p>
                <ul>
                  <li>حركة مستمرة للنزلاء والأمتعة</li>
                  <li>توفر الطعام والرطوبة</li>
                  <li>تنوع المساحات (غرف، مطاعم، مطابخ)</li>
                  <li>ضرورة العمل الخفي دون إزعاج النزلاء</li>
                  <li>سمعة الفندق على المحك</li>
                </ul>

                <h2>الآفات الشائعة في الفنادق</h2>
                <h3>1. بق الفراش</h3>
                <p>أخطر الآفات في الفنادق. ينتقل عبر أمتعة النزلاء ويمكن أن يدمر سمعة الفندق بسرعة.</p>

                <h3>2. الصراصير</h3>
                <p>خاصة في المطابخ ومناطق تحضير الطعام.</p>

                <h3>3. القوارض</h3>
                <p>في المخازن والطوابق السفلية.</p>

                <h3>4. النمل والذباب</h3>
                <p>في المطاعم والغرف.</p>

                <h2>برنامج المكافحة المتكامل</h2>
                <h3>المرحلة 1: الفحص والتقييم</h3>
                <ul>
                  <li>فحص شامل لجميع المناطق</li>
                  <li>تحديد نقاط الضعف</li>
                  <li>تقييم المخاطر</li>
                  <li>وضع خطة مخصصة</li>
                </ul>

                <h3>المرحلة 2: المعالجة الدقيقة</h3>
                <ul>
                  <li>معالجة الغرف بدون إزعاج</li>
                  <li>استخدام مبيدات عديمة الرائحة</li>
                  <li>جدول زمني مرن</li>
                  <li>سرية تامة</li>
                </ul>

                <h3>المرحلة 3: المراقبة المستمرة</h3>
                <ul>
                  <li>فحص دوري أسبوعي</li>
                  <li>أجهزة رصد إلكترونية</li>
                  <li>تقارير شهرية مفصلة</li>
                  <li>استجابة طوارئ خلال ساعات</li>
                </ul>

                <h2>البروتوكول الخاص لبق الفراش</h2>
                <ol>
                  <li>فحص الغرفة فور بلاغ النزيل</li>
                  <li>عزل الغرفة والمجاورة</li>
                  <li>معالجة حرارية أو كيميائية</li>
                  <li>فحص ثانٍ بعد 14 يوم</li>
                  <li>التعويض المناسب للنزيل</li>
                </ol>

                <h2>أفضل الممارسات</h2>
                <ul>
                  <li>تدريب الطاقم على اكتشاف العلامات المبكرة</li>
                  <li>فحص أمتعة النزلاء (بطريقة غير مباشرة)</li>
                  <li>نظافة دورية صارمة</li>
                  <li>صيانة وقائية مستمرة</li>
                  <li>عقود سنوية مع شركة متخصصة</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة الخبراء</h4>
                  <p className="mb-0">الاستثمار في برنامج وقائي شامل أرخص بكثير من التعامل مع أزمة سمعة بسبب شكوى نزيل واحد على مواقع التواصل.</p>
                </div>

                <h2>الامتثال والتراخيص</h2>
                <p>الفنادق تحتاج:</p>
                <ul>
                  <li>شهادات مكافحة دورية</li>
                  <li>تقارير معتمدة للهيئات السياحية</li>
                  <li>سجلات موثقة للمعالجات</li>
                  <li>مبيدات معتمدة آمنة</li>
                </ul>
              </>
            ) : (
              <>
                <h2>Why Do Hotels Need Special Programs?</h2>
                <p>Hotels are unique environments facing challenges:</p>
                <ul>
                  <li>Continuous movement of guests and luggage</li>
                  <li>Availability of food and moisture</li>
                  <li>Variety of spaces (rooms, restaurants, kitchens)</li>
                  <li>Need for discreet work without disturbing guests</li>
                  <li>Hotel reputation at stake</li>
                </ul>

                <h2>Common Hotel Pests</h2>
                <h3>1. Bed Bugs</h3>
                <p>Most dangerous hotel pests. Spread through guest luggage and can quickly destroy hotel reputation.</p>

                <h3>2. Cockroaches</h3>
                <p>Especially in kitchens and food preparation areas.</p>

                <h3>3. Rodents</h3>
                <p>In storage areas and basements.</p>

                <h3>4. Ants and Flies</h3>
                <p>In restaurants and rooms.</p>

                <h2>Integrated Control Program</h2>
                <h3>Phase 1: Inspection and Assessment</h3>
                <ul>
                  <li>Comprehensive inspection of all areas</li>
                  <li>Identify weaknesses</li>
                  <li>Risk assessment</li>
                  <li>Develop customized plan</li>
                </ul>

                <h3>Phase 2: Precise Treatment</h3>
                <ul>
                  <li>Treat rooms without disturbance</li>
                  <li>Use odorless pesticides</li>
                  <li>Flexible schedule</li>
                  <li>Complete confidentiality</li>
                </ul>

                <h3>Phase 3: Continuous Monitoring</h3>
                <ul>
                  <li>Weekly regular inspection</li>
                  <li>Electronic monitoring devices</li>
                  <li>Detailed monthly reports</li>
                  <li>Emergency response within hours</li>
                </ul>

                <h2>Special Bed Bug Protocol</h2>
                <ol>
                  <li>Inspect room immediately upon guest report</li>
                  <li>Isolate room and adjacent ones</li>
                  <li>Heat or chemical treatment</li>
                  <li>Second inspection after 14 days</li>
                  <li>Appropriate guest compensation</li>
                </ol>

                <h2>Best Practices</h2>
                <ul>
                  <li>Train staff to detect early signs</li>
                  <li>Inspect guest luggage (indirectly)</li>
                  <li>Strict regular cleanliness</li>
                  <li>Continuous preventive maintenance</li>
                  <li>Annual contracts with specialized company</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expert Tip</h4>
                  <p className="mb-0">Investing in comprehensive preventive program is much cheaper than dealing with reputation crisis due to one guest complaint on social media.</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'برامج خاصة للفنادق' : 'Special Hotel Programs'}</h3>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="btn-primary inline-flex items-center gap-2">
              {isArabic ? 'احصل على عرض خاص' : 'Get Special Offer'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'مكافحة الآفات في الفنادق' : 'Pest Control in Hotels',
        author: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi',
        publishedAt: '2024-07-15',
        image: '/images/Commercial-pest-control-Jeddah.jpg'
      }} />
    </>
  );
}
