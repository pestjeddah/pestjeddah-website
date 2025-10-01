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
    title: isArabic ? 'مكافحة القوارض في المنازل | مدونة الأسطورة' : 'Rodent Control in Homes | Al-Ustora Blog',
    description: isArabic ? 'دليل شامل لمكافحة الفئران والجرذان في المنازل والوقاية منها.' : 'Comprehensive guide for mice and rat control in homes and prevention.',
  };
}

export default function BlogPost7({ params: { locale } }: Props) {
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
            <span className="text-gray-900">{isArabic ? 'مكافحة القوارض' : 'Rodent Control'}</span>
          </nav>
        </div>
      </div>

      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'علاج متخصص' : 'Specialized Treatment'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'مكافحة القوارض في المنازل' : 'Rodent Control in Homes'}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2"><User size={18} /><span>{isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team'}</span></div>
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{isArabic ? '20 أغسطس 2024' : 'August 20, 2024'}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{isArabic ? '7 دقائق' : '7 min read'}</span></div>
              <button className="flex items-center gap-2 text-primary hover:text-primary/80"><Share2 size={18} /><span>{isArabic ? 'مشاركة' : 'Share'}</span></button>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/Rodent control Jeddah.jpg" alt={isArabic ? 'مكافحة القوارض' : 'Rodent control'} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <h2>لماذا القوارض خطيرة؟</h2>
                <p>القوارض من أخطر الآفات المنزلية لأنها:</p>
                <ul>
                  <li>تنقل أكثر من 35 مرضاً خطيراً</li>
                  <li>تتلف الأثاث والأسلاك الكهربائية</li>
                  <li>تلوث الطعام والأسطح</li>
                  <li>تتكاثر بسرعة كبيرة (200 فأر في عام!)</li>
                </ul>

                <h2>علامات وجود القوارض</h2>
                <ul>
                  <li>براز صغير أسود اللون</li>
                  <li>أصوات خدش في الجدران ليلاً</li>
                  <li>أثر قضم على الأغذية والأسلاك</li>
                  <li>رائحة كريهة مميزة (بول الفئران)</li>
                  <li>آثار أقدام في الأماكن المتربة</li>
                </ul>

                <h2>طرق المكافحة الفعالة</h2>
                <h3>1. المصائد الميكانيكية</h3>
                <p>المصائد التقليدية والذكية لصيد الفئران حية أو ميتة.</p>

                <h3>2. الطعوم السامة</h3>
                <p>استخدام طعوم آمنة ومعتمدة في صناديق محكمة بعيداً عن الأطفال.</p>

                <h3>3. الأجهزة الإلكترونية</h3>
                <p>أجهزة طاردة بالموجات فوق الصوتية (فعالة في المساحات الصغيرة).</p>

                <h3>4. إغلاق المداخل</h3>
                <p>سد جميع الفتحات الأكبر من 6 ملم بالإسمنت أو الصوف المعدني.</p>

                <h2>الوقاية الدائمة</h2>
                <ul>
                  <li>تخزين الطعام في حاويات محكمة</li>
                  <li>إفراغ القمامة يومياً</li>
                  <li>تنظيف بقايا طعام الحيوانات الأليفة</li>
                  <li>إصلاح تسريبات المياه</li>
                  <li>تقليم الأشجار البعيدة عن المنزل</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">تحذير</h4>
                  <p className="mb-0">لا تستخدم السموم في الأماكن المفتوحة أو القريبة من الأطفال والحيوانات. استعن بمتخصصين لضمان السلامة.</p>
                </div>
              </>
            ) : (
              <>
                <h2>Why Are Rodents Dangerous?</h2>
                <p>Rodents are among the most dangerous household pests because they:</p>
                <ul>
                  <li>Transmit over 35 serious diseases</li>
                  <li>Damage furniture and electrical wires</li>
                  <li>Contaminate food and surfaces</li>
                  <li>Reproduce very quickly (200 mice in one year!)</li>
                </ul>

                <h2>Signs of Rodent Presence</h2>
                <ul>
                  <li>Small black droppings</li>
                  <li>Scratching sounds in walls at night</li>
                  <li>Gnaw marks on food and wires</li>
                  <li>Distinctive foul odor (mouse urine)</li>
                  <li>Footprints in dusty areas</li>
                </ul>

                <h2>Effective Control Methods</h2>
                <h3>1. Mechanical Traps</h3>
                <p>Traditional and smart traps to catch mice alive or dead.</p>

                <h3>2. Toxic Baits</h3>
                <p>Using safe, certified baits in sealed boxes away from children.</p>

                <h3>3. Electronic Devices</h3>
                <p>Ultrasonic repellent devices (effective in small spaces).</p>

                <h3>4. Sealing Entry Points</h3>
                <p>Seal all openings larger than 6mm with cement or steel wool.</p>

                <h2>Permanent Prevention</h2>
                <ul>
                  <li>Store food in sealed containers</li>
                  <li>Empty trash daily</li>
                  <li>Clean up pet food remains</li>
                  <li>Fix water leaks</li>
                  <li>Trim trees away from house</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Warning</h4>
                  <p className="mb-0">Don't use poisons in open areas or near children and pets. Use professionals to ensure safety.</p>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">{isArabic ? 'تخلص من القوارض نهائياً' : 'Get Rid of Rodents Permanently'}</h3>
            <p className="text-gray-700 mb-6">{isArabic ? 'خدمة مضمونة مع متابعة دورية' : 'Guaranteed service with regular follow-up'}</p>
            <Link href={locale === 'ar' ? '/contact' : '/en/contact'} className="btn-primary inline-flex items-center gap-2">
              {isArabic ? 'اتصل الآن' : 'Contact Now'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector type="article" data={{
        title: isArabic ? 'مكافحة القوارض في المنازل' : 'Rodent Control in Homes',
        description: isArabic ? 'دليل شامل لمكافحة القوارض' : 'Comprehensive rodent control guide',
        author: isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team',
        publishedAt: '2024-08-20',
        image: '/images/Rodent control Jeddah.jpg'
      }} />
    </>
  );
}
