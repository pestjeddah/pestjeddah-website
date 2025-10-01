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
    title: isArabic ? 'الحشرات الطائرة وطرق مكافحتها | مدونة الأسطورة' : 'Flying Insects and Control Methods | Al-Ustora Blog',
    description: isArabic ? 'دليل شامل لمكافحة الذباب والبعوض والحشرات الطائرة الأخرى.' : 'Comprehensive guide for controlling flies, mosquitoes and other flying insects.',
  };
}

export default function BlogPost11({ params: { locale } }: Props) {
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
            <span className="text-gray-900">{isArabic ? 'الحشرات الطائرة' : 'Flying Insects'}</span>
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
              {isArabic ? 'الحشرات الطائرة وطرق مكافحتها' : 'Flying Insects and Control Methods'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'م. خالد السلمي' : 'Eng. Khalid Al-Salmi'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '5 يوليو 2024' : 'July 5, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '7 دقائق' : '7 min read'}</span></div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Insect control Jeddah.jpg" alt={isArabic ? 'مكافحة الحشرات الطائرة' : 'Flying insect control'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <h2>أنواع الحشرات الطائرة</h2>
                <h3>1. البعوض</h3>
                <p>ينقل الملاريا وحمى الضنك. ينشط في الصيف والأماكن الرطبة.</p>

                <h3>2. الذباب المنزلي</h3>
                <p>ينقل أكثر من 100 مرض عبر تنقله بين القمامة والطعام.</p>

                <h3>3. الذباب الصغير (Fruit Flies)</h3>
                <p>ينجذب للفواكه المتحللة ويتكاثر بسرعة.</p>

                <h3>4. العث (Moths)</h3>
                <p>يتلف الملابس والأقمشة المخزنة.</p>

                <h2>طرق المكافحة الفعالة</h2>
                <h3>للبعوض:</h3>
                <ul>
                  <li>إزالة المياه الراكدة</li>
                  <li>تركيب شبكات على النوافذ</li>
                  <li>استخدام الناموسيات</li>
                  <li>رش المبيدات في المناطق الخارجية</li>
                  <li>أجهزة طاردة إلكترونية</li>
                </ul>

                <h3>للذباب:</h3>
                <ul>
                  <li>تغطية الطعام دائماً</li>
                  <li>إفراغ القمامة يومياً</li>
                  <li>مصائد الذباب اللاصقة</li>
                  <li>أجهزة الصعق الكهربائية</li>
                  <li>رش الأماكن الحرجة</li>
                </ul>

                <h3>للعث:</h3>
                <ul>
                  <li>تخزين الملابس في أكياس محكمة</li>
                  <li>استخدام كرات النفتالين</li>
                  <li>تنظيف الخزانات دورياً</li>
                  <li>تجميد الملابس المصابة</li>
                </ul>

                <h2>الوقاية طويلة المدى</h2>
                <ul>
                  <li>نظافة صارمة للمنزل</li>
                  <li>إصلاح الشبكات التالفة</li>
                  <li>إغلاق الشقوق والفتحات</li>
                  <li>استخدام نباتات طاردة (اللافندر، النعناع)</li>
                  <li>فحص دوري للأماكن الرطبة</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة الخبراء</h4>
                  <p className="mb-0">المكافحة الوقائية قبل بداية الصيف تقلل بنسبة 80٪ من احتمالية الإصابة بالحشرات الطائرة.</p>
                </div>

                <h2>الحلول التقنية الحديثة</h2>
                <ul>
                  <li>أنظمة الضباب الأوتوماتيكية</li>
                  <li>مصائد ضوئية ذكية</li>
                  <li>أجهزة طرد بالموجات فوق الصوتية</li>
                  <li>معالجات حرارية للعث</li>
                </ul>
              </>
            ) : (
              <>
                <h2>Types of Flying Insects</h2>
                <h3>1. Mosquitoes</h3>
                <p>Transmit malaria and dengue fever. Active in summer and humid areas.</p>

                <h3>2. House Flies</h3>
                <p>Transmit over 100 diseases through movement between garbage and food.</p>

                <h3>3. Fruit Flies</h3>
                <p>Attracted to decaying fruits and reproduce quickly.</p>

                <h3>4. Moths</h3>
                <p>Damage stored clothes and fabrics.</p>

                <h2>Effective Control Methods</h2>
                <h3>For Mosquitoes:</h3>
                <ul>
                  <li>Remove standing water</li>
                  <li>Install window screens</li>
                  <li>Use mosquito nets</li>
                  <li>Spray pesticides in outdoor areas</li>
                  <li>Electronic repellent devices</li>
                </ul>

                <h3>For Flies:</h3>
                <ul>
                  <li>Always cover food</li>
                  <li>Empty trash daily</li>
                  <li>Sticky fly traps</li>
                  <li>Electric zappers</li>
                  <li>Spray critical areas</li>
                </ul>

                <h3>For Moths:</h3>
                <ul>
                  <li>Store clothes in sealed bags</li>
                  <li>Use mothballs</li>
                  <li>Clean closets regularly</li>
                  <li>Freeze infected clothes</li>
                </ul>

                <h2>Long-term Prevention</h2>
                <ul>
                  <li>Strict home cleanliness</li>
                  <li>Repair damaged screens</li>
                  <li>Seal cracks and openings</li>
                  <li>Use repellent plants (lavender, mint)</li>
                  <li>Regular inspection of humid areas</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expert Tip</h4>
                  <p className="mb-0">Preventive control before summer start reduces flying insect infestation probability by 80%.</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'برامج مكافحة موسمية' : 'Seasonal Control Programs'}</h3>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="btn-primary inline-flex items-center gap-2">
              {isArabic ? 'احجز الآن' : 'Book Now'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'الحشرات الطائرة وطرق مكافحتها' : 'Flying Insects and Control Methods',
        author: isArabic ? 'م. خالد السلمي' : 'Eng. Khalid Al-Salmi',
        publishedAt: '2024-07-05',
        image: '/images/Insect control Jeddah.jpg'
      }} />
    </>
  );
}
