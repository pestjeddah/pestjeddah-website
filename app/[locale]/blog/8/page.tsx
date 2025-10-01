import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, Share2 } from 'lucide-react';
import { isRTL } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  return {
    title: isArabic ? 'النمل الأسود: كيف تتخلص منه؟ | مدونة الأسطورة' : 'Black Ants: How to Get Rid of Them? | Al-Ustora Blog',
    description: isArabic ? 'طرق فعالة للتخلص من النمل الأسود في المنزل والحديقة بشكل نهائي.' : 'Effective methods to eliminate black ants in home and garden permanently.',
  };
}

export default function BlogPost8({ params: { locale } }: Props) {
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
            <span className="text-gray-900">{isArabic ? 'النمل الأسود' : 'Black Ants'}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'نصائح وقائية' : 'Prevention Tips'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'النمل الأسود: كيف تتخلص منه نهائياً؟' : 'Black Ants: How to Get Rid of Them Permanently?'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '10 أغسطس 2024' : 'August 10, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '6 دقائق' : '6 min read'}</span></div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Ant control Jeddah.jpg" alt={isArabic ? 'مكافحة النمل' : 'Ant control'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <h2>لماذا يغزو النمل منزلك؟</h2>
                <p>النمل الأسود ينجذب للمنازل بحثاً عن الطعام والماء. تتبع النملات الكشافة مسارات كيميائية لتوجيه المستعمرة بأكملها لمصدر الطعام.</p>

                <h2>حلول منزلية فعالة</h2>
                <h3>1. الخل الأبيض</h3>
                <p>رش محلول الخل والماء (1:1) على مسارات النمل يقطع الإشارات الكيميائية.</p>

                <h3>2. الليمون</h3>
                <p>عصير الليمون أو قشوره طارد طبيعي للنمل.</p>

                <h3>3. القرفة</h3>
                <p>رش مسحوق القرفة على نقاط الدخول يمنع دخول النمل.</p>

                <h3>4. بيكربونات الصودا والسكر</h3>
                <p>خليط قاتل طبيعي: السكر يجذبهم والبيكربونات تقضي عليهم.</p>

                <h2>الحلول الاحترافية</h2>
                <ul>
                  <li>طعوم هلامية متخصصة للنمل</li>
                  <li>رش مبيدات متبقية حول المنزل</li>
                  <li>معالجة العش الرئيسي للمستعمرة</li>
                  <li>حواجز كيميائية وقائية</li>
                </ul>

                <h2>الوقاية طويلة المدى</h2>
                <ul>
                  <li>تنظيف الفتات والانسكابات فوراً</li>
                  <li>تخزين الطعام في حاويات محكمة</li>
                  <li>سد الشقوق والفتحات الصغيرة</li>
                  <li>إصلاح تسريبات المياه</li>
                  <li>تقليم الأشجار المتلامسة مع المنزل</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة الخبراء</h4>
                  <p className="mb-0">القضاء على مستعمرة النمل بالكامل يتطلب استهداف الملكة. الطعوم الهلامية أفضل من الرش لأن النمل يحملها للعش.</p>
                </div>
              </>
            ) : (
              <>
                <h2>Why Do Ants Invade Your Home?</h2>
                <p>Black ants are attracted to homes searching for food and water. Scout ants follow chemical trails to guide the entire colony to food sources.</p>

                <h2>Effective Home Solutions</h2>
                <h3>1. White Vinegar</h3>
                <p>Spray vinegar and water solution (1:1) on ant trails to disrupt chemical signals.</p>

                <h3>2. Lemon</h3>
                <p>Lemon juice or peels are natural ant repellents.</p>

                <h3>3. Cinnamon</h3>
                <p>Sprinkle cinnamon powder on entry points to prevent ant entry.</p>

                <h3>4. Baking Soda and Sugar</h3>
                <p>Natural killer mix: sugar attracts them, baking soda eliminates them.</p>

                <h2>Professional Solutions</h2>
                <ul>
                  <li>Specialized gel baits for ants</li>
                  <li>Spray residual pesticides around house</li>
                  <li>Treat main colony nest</li>
                  <li>Preventive chemical barriers</li>
                </ul>

                <h2>Long-term Prevention</h2>
                <ul>
                  <li>Clean crumbs and spills immediately</li>
                  <li>Store food in sealed containers</li>
                  <li>Seal cracks and small openings</li>
                  <li>Fix water leaks</li>
                  <li>Trim trees touching the house</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expert Tip</h4>
                  <p className="mb-0">Eliminating entire ant colony requires targeting the queen. Gel baits are better than sprays because ants carry them to the nest.</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'قضاء نهائي على النمل' : 'Permanent Ant Elimination'}</h3>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="btn-primary inline-flex items-center gap-2">
              {isArabic ? 'احجز الآن' : 'Book Now'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'النمل الأسود: كيف تتخلص منه نهائياً؟' : 'Black Ants: How to Get Rid of Them Permanently?',
        author: isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani',
        publishedAt: '2024-08-10',
        image: '/images/Ant control Jeddah.jpg'
      }} />
    </>
  );
}
