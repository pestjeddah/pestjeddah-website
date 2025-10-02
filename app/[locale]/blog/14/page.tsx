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
    title: isArabic ? 'مكافحة الآفات الزراعية | مدونة الأسطورة' : 'Agricultural Pest Control | Al-Ustora Blog',
    description: isArabic ? 'حماية محاصيلك وحديقتك من الآفات الزراعية بطرق فعالة وآمنة.' : 'Protect your crops and garden from agricultural pests with effective and safe methods.',
  };
}

export default function BlogPost14({ params: { locale } }: Props) {
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
            <span className="text-gray-900">{isArabic ? 'مكافحة زراعية' : 'Agricultural Control'}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'نصائح وقائية' : 'Prevention Tips'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'مكافحة الآفات الزراعية في الحدائق المنزلية' : 'Agricultural Pest Control in Home Gardens'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '25 مايو 2024' : 'May 25, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '8 دقائق' : '8 min read'}</span></div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Eco-friendly-pest-control.jpg" alt={isArabic ? 'مكافحة زراعية' : 'Agricultural control'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <h2>الآفات الزراعية الشائعة</h2>
                
                <h3>1. المن (حشرة الأوراق)</h3>
                <p>حشرات صغيرة تمتص عصارة النباتات وتفرز مادة لزجة.</p>
                <ul>
                  <li>تسبب تشوه الأوراق</li>
                  <li>تنقل الفيروسات النباتية</li>
                  <li>تجذب النمل</li>
                </ul>

                <h3>2. الذبابة البيضاء</h3>
                <p>تضعف النباتات وتنشر الأمراض.</p>

                <h3>3. اليرقات والديدان</h3>
                <p>تأكل الأوراق والثمار وتدمر المحاصيل.</p>

                <h3>4. العناكب الحمراء</h3>
                <p>تمتص عصارة النباتات وتسبب اصفرارها.</p>

                <h3>5. الخنافس</h3>
                <p>تأكل الأوراق والجذور.</p>

                <h2>طرق المكافحة البيولوجية</h2>

                <h3>1. الحشرات النافعة</h3>
                <ul>
                  <li><strong>الدعسوقة:</strong> تأكل المن والحشرات الصغيرة</li>
                  <li><strong>النحل الطفيلي:</strong> يتطفل على اليرقات</li>
                  <li><strong>الأسد الأخضر:</strong> يفترس المن والذباب</li>
                </ul>

                <h3>2. النباتات المصاحبة</h3>
                <p>زراعة نباتات طاردة للآفات:</p>
                <ul>
                  <li>القطيفة (Marigold) - تطرد الذباب</li>
                  <li>الريحان - يطرد الذباب والبعوض</li>
                  <li>الثوم - يطرد المن</li>
                  <li>النعناع - طارد عام للحشرات</li>
                </ul>

                <h2>المبيدات الطبيعية</h2>

                <h3>1. رذاذ الصابون</h3>
                <p>محلول صابون سائل ومم (1 ملعقة/لتر ماء) فعال ضد المن والذباب البيضاء.</p>

                <h3>2. زيت النيم</h3>
                <p>مبيد طبيعي شامل يقضي على معظم الآفات.</p>

                <h3>3. الثوم والفلفل</h3>
                <p>نقع فصوص ثوم مع فلفل حار في الماء ورشه على النباتات.</p>

                <h3>4. خل التفاح</h3>
                <p>محلول خل مخفف يطرد الحشرات.</p>

                <h2>الإدارة المتكاملة للآفات</h2>

                <h3>1. الوقاية</h3>
                <ul>
                  <li>اختيار أصناف مقاومة للأمراض</li>
                  <li>التسميد المتوازن لنباتات قوية</li>
                  <li>الري المنظم (لا إفراط)</li>
                  <li>التباعد الصحيح بين النباتات</li>
                </ul>

                <h3>2. المراقبة المنتظمة</h3>
                <ul>
                  <li>فحص النباتات أسبوعياً</li>
                  <li>تحديد الآفات مبكراً</li>
                  <li>إزالة الأجزاء المصابة</li>
                </ul>

                <h3>3. التدخل المتدرج</h3>
                <ol>
                  <li>الإزالة اليدوية للآفات</li>
                  <li>استخدام الماء بضغط</li>
                  <li>المبيدات الطبيعية</li>
                  <li>الحشرات النافعة</li>
                  <li>المبيدات الكيميائية (الملاذ الأخير)</li>
                </ol>

                <h2>الدورة الزراعية</h2>
                <p>تغيير مواقع زراعة المحاصيل سنوياً يقطع دورة حياة الآفات.</p>

                <h2>التغطية (Mulching)</h2>
                <p>تغطية التربة حول النباتات:</p>
                <ul>
                  <li>تمنع نمو الأعشاب الضارة</li>
                  <li>تحافظ على الرطوبة</li>
                  <li>تمنع بعض الآفات من الوصول للنبات</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة الخبراء</h4>
                  <p className="mb-0">النباتات القوية الصحية أقل عرضة للآفات. اهتم بالتربة والتسميد والري قبل التفكير في المبيدات.</p>
                </div>

                <h2>متى تحتاج لمساعدة متخصصة؟</h2>
                <ul>
                  <li>إصابة واسعة النطاق</li>
                  <li>آفات لا تستجيب للعلاجات المنزلية</li>
                  <li>أشجار كبيرة مصابة</li>
                  <li>آفات خطيرة تهدد المحصول</li>
                </ul>
              </>
            ) : (
              <>
                <h2>Common Agricultural Pests</h2>
                
                <h3>1. Aphids</h3>
                <p>Small insects that suck plant sap and secrete sticky substance.</p>
                <ul>
                  <li>Cause leaf deformation</li>
                  <li>Transmit plant viruses</li>
                  <li>Attract ants</li>
                </ul>

                <h3>2. Whiteflies</h3>
                <p>Weaken plants and spread diseases.</p>

                <h3>3. Larvae and Worms</h3>
                <p>Eat leaves and fruits, destroying crops.</p>

                <h3>4. Spider Mites</h3>
                <p>Suck plant sap causing yellowing.</p>

                <h3>5. Beetles</h3>
                <p>Eat leaves and roots.</p>

                <h2>Biological Control Methods</h2>

                <h3>1. Beneficial Insects</h3>
                <ul>
                  <li><strong>Ladybugs:</strong> Eat aphids and small insects</li>
                  <li><strong>Parasitic Wasps:</strong> Parasitize larvae</li>
                  <li><strong>Lacewings:</strong> Prey on aphids and flies</li>
                </ul>

                <h3>2. Companion Planting</h3>
                <p>Planting pest-repelling plants:</p>
                <ul>
                  <li>Marigold - repels flies</li>
                  <li>Basil - repels flies and mosquitoes</li>
                  <li>Garlic - repels aphids</li>
                  <li>Mint - general insect repellent</li>
                </ul>

                <h2>Natural Pesticides</h2>

                <h3>1. Soap Spray</h3>
                <p>Liquid soap solution and water (1 tbsp/liter) effective against aphids and whiteflies.</p>

                <h3>2. Neem Oil</h3>
                <p>Comprehensive natural pesticide eliminating most pests.</p>

                <h3>3. Garlic and Pepper</h3>
                <p>Soak garlic cloves with hot pepper in water and spray on plants.</p>

                <h3>4. Apple Cider Vinegar</h3>
                <p>Diluted vinegar solution repels insects.</p>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expert Tip</h4>
                  <p className="mb-0">Strong healthy plants are less susceptible to pests. Focus on soil, fertilization and irrigation before thinking about pesticides.</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'حماية حديقتك بطرق طبيعية' : 'Protect Your Garden Naturally'}</h3>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="btn-primary inline-flex items-center gap-2">
              {isArabic ? 'استشارة زراعية' : 'Agricultural Consultation'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'مكافحة الآفات الزراعية في الحدائق المنزلية' : 'Agricultural Pest Control in Home Gardens',
        author: isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani',
        publishedAt: '2024-05-25',
        image: '/images/Eco-friendly-pest-control.jpg'
      }} />
    </>
  );
}
