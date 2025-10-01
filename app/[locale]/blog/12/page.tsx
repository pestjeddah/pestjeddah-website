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
    title: isArabic ? 'الوقاية من الآفات في فصل الشتاء | مدونة الأسطورة' : 'Winter Pest Prevention | Al-Ustora Blog',
    description: isArabic ? 'كيف تحمي منزلك من الآفات التي تبحث عن مأوى دافئ في الشتاء.' : 'How to protect your home from pests seeking warm shelter in winter.',
  };
}

export default function BlogPost12({ params: { locale } }: Props) {
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
            <span className="text-gray-900">{isArabic ? 'الوقاية الشتوية' : 'Winter Prevention'}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'مكافحة موسمية' : 'Seasonal Control'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'الوقاية من الآفات في فصل الشتاء' : 'Winter Pest Prevention'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '20 يونيو 2024' : 'June 20, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '6 دقائق' : '6 min read'}</span></div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Home pest treatment.jpg" alt={isArabic ? 'الوقاية الشتوية' : 'Winter prevention'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <h2>لماذا تغزو الآفات المنازل شتاءً؟</h2>
                <p>مع انخفاض درجات الحرارة، تبحث الآفات عن:</p>
                <ul>
                  <li>مأوى دافئ</li>
                  <li>مصدر للطعام</li>
                  <li>رطوبة مناسبة</li>
                  <li>أماكن للتكاثر</li>
                </ul>

                <h2>الآفات الشتوية الشائعة</h2>
                <h3>1. القوارض</h3>
                <p>تدخل المنازل بحثاً عن الدفء. يمكنها المرور من فتحة بقطر 6 ملم فقط!</p>

                <h3>2. الصراصير</h3>
                <p>تتجمع في المناطق الدافئة قرب المطابخ والحمامات.</p>

                <h3>3. العناكب</h3>
                <p>تنسج شباكها في الزوايا والأماكن الهادئة.</p>

                <h3>4. النمل</h3>
                <p>بعض الأنواع تدخل المنازل للتسبيت.</p>

                <h2>خطوات الوقاية قبل الشتاء</h2>
                <h3>1. إغلاق نقاط الدخول</h3>
                <ul>
                  <li>فحص الشقوق في الجدران</li>
                  <li>إصلاح الفتحات حول الأنابيب</li>
                  <li>تركيب حواجز تحت الأبواب</li>
                  <li>إصلاح شبكات النوافذ</li>
                </ul>

                <h3>2. تقليل مصادر الجذب</h3>
                <ul>
                  <li>تخزين الحطب بعيداً عن المنزل</li>
                  <li>تنظيف المرائب والمخازن</li>
                  <li>تخزين الطعام محكماً</li>
                  <li>إصلاح تسريبات المياه</li>
                </ul>

                <h3>3. الصيانة الوقائية</h3>
                <ul>
                  <li>تقليم الأشجار والشجيرات</li>
                  <li>تنظيف المزاريب</li>
                  <li>فحص العزل في السقف</li>
                  <li>تهوية الأقبية والمخازن</li>
                </ul>

                <h2>المعالجة الوقائية</h2>
                <p>قبل دخول الشتاء ينصح بـ:</p>
                <ul>
                  <li>رش وقائي للمحيط الخارجي</li>
                  <li>وضع طعوم للقوارض</li>
                  <li>معالجة الأماكن الحرجة</li>
                  <li>فحص شامل للمنزل</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة مهمة</h4>
                  <p className="mb-0">أفضل وقت للمعالجة الوقائية هو أكتوبر/نوفمبر قبل أن تبدأ الآفات بالبحث عن مأوى شتوي.</p>
                </div>

                <h2>علامات تحتاج انتباهاً فورياً</h2>
                <ul>
                  <li>براز القوارض في المخزن</li>
                  <li>أصوات خدش في الجدران</li>
                  <li>رؤية صراصير نهاراً</li>
                  <li>أثر قضم على الأسلاك</li>
                </ul>
              </>
            ) : (
              <>
                <h2>Why Do Pests Invade Homes in Winter?</h2>
                <p>As temperatures drop, pests search for:</p>
                <ul>
                  <li>Warm shelter</li>
                  <li>Food source</li>
                  <li>Suitable moisture</li>
                  <li>Breeding places</li>
                </ul>

                <h2>Common Winter Pests</h2>
                <h3>1. Rodents</h3>
                <p>Enter homes seeking warmth. Can pass through opening of only 6mm diameter!</p>

                <h3>2. Cockroaches</h3>
                <p>Gather in warm areas near kitchens and bathrooms.</p>

                <h3>3. Spiders</h3>
                <p>Weave webs in corners and quiet places.</p>

                <h3>4. Ants</h3>
                <p>Some species enter homes for overwintering.</p>

                <h2>Prevention Steps Before Winter</h2>
                <h3>1. Seal Entry Points</h3>
                <ul>
                  <li>Inspect wall cracks</li>
                  <li>Repair openings around pipes</li>
                  <li>Install door sweeps</li>
                  <li>Repair window screens</li>
                </ul>

                <h3>2. Reduce Attractants</h3>
                <ul>
                  <li>Store firewood away from house</li>
                  <li>Clean garages and storage areas</li>
                  <li>Store food sealed</li>
                  <li>Fix water leaks</li>
                </ul>

                <h3>3. Preventive Maintenance</h3>
                <ul>
                  <li>Trim trees and shrubs</li>
                  <li>Clean gutters</li>
                  <li>Inspect roof insulation</li>
                  <li>Ventilate basements and storage</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Important Tip</h4>
                  <p className="mb-0">Best time for preventive treatment is October/November before pests start searching for winter shelter.</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'احمِ منزلك قبل الشتاء' : 'Protect Your Home Before Winter'}</h3>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="btn-primary inline-flex items-center gap-2">
              {isArabic ? 'احجز فحص وقائي' : 'Book Preventive Inspection'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'الوقاية من الآفات في فصل الشتاء' : 'Winter Pest Prevention',
        author: isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team',
        publishedAt: '2024-06-20',
        image: '/images/Home pest treatment.jpg'
      }} />
    </>
  );
}
