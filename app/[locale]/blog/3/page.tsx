import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  Clock,
  Eye,
  Share2,
  BookOpen
} from 'lucide-react';

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
      ? 'أفضل أوقات مكافحة البعوض في جدة | مدونة الأسطورة'
      : 'Best Times for Mosquito Control in Jeddah | Al-Ustora Blog',
    description: isArabic 
      ? 'تعرف على المواسم والأوقات المثلى لمكافحة البعوض بفعالية في مناخ جدة الساحلي.'
      : 'Learn about the optimal seasons and times for effective mosquito control in Jeddah\'s coastal climate.',
  };
}

export default function BlogPost3({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const contentAr = `
البعوض من أكثر الحشرات إزعاجاً في جدة، خاصة مع المناخ الساحلي الرطب. معرفة الأوقات المثلى للمكافحة تزيد من فعالية العلاج بشكل كبير.

## لماذا التوقيت مهم؟

دورة حياة البعوض تتأثر بعوامل البيئة مثل درجة الحرارة والرطوبة وتوفر المياه الراكدة. المكافحة في الوقت المناسب تقضي على البعوض قبل أن يتكاثر.

## المواسم المثلى للمكافحة

### الربيع (مارس - مايو)
**أفضل وقت للمكافحة الوقائية**
- درجات الحرارة المعتدلة تنشط البعوض
- قبل موسم التكاثر الصيفي
- الأمطار الموسمية توفر بيئة مثالية
- **الإجراءات:** رش وقائي شامل، تنظيف المياه الراكدة

### الصيف (يونيو - أغسطس)
**موسم الذروة يتطلب مكافحة مكثفة**
- نشاط البعوض في أعلى مستوياته
- التكاثر السريع في المياه الدافئة
- ساعات الفجر والغسق الأخطر
- **الإجراءات:** رش مكثف أسبوعي، فحص دوري

### الخريف (سبتمبر - نوفمبر)
**وقت ممتاز للقضاء على الجيل الأخير**
- البعوض يبحث عن أماكن للبيات الشتوي
- تقليل أعداد البيوض للشتاء
- فرصة لمنع الموسم القادم
- **الإجراءات:** رش مركز، معالجة المخابئ

### الشتاء (ديسمبر - فبراير)
**فترة راحة نسبية لكن ليست خالية**
- نشاط البعوض أقل لكن موجود
- تركيز على المناطق المغلقة
- وقت مثالي للصيانة الوقائية
- **الإجراءات:** فحص شامل، صيانة وقائية

## الأوقات اليومية المثلى

### أفضل وقت للرش:
**الفجر (5-7 صباحاً)**
- البعوض أكثر نشاطاً
- الرياح أقل
- فعالية المبيدات أعلى

**الغسق (6-8 مساءً)**
- ذروة نشاط البعوض المسائي
- درجة حرارة معتدلة
- الناس في الداخل (أمان)

## العوامل المناخية في جدة

### الرطوبة العالية:
- البعوض ينشط في رطوبة 60%+
- جدة رطوبتها عالية معظم السنة
- المكافحة تحتاج لمواد مقاومة للرطوبة

### القرب من البحر:
- نسيم البحر ينشر البعوض
- المناطق الساحلية أكثر عرضة
- حاجة لمكافحة متخصصة

## المناطق الحرجة في جدة

### أكثر المناطق تأثراً:
1. **المناطق الساحلية:**
   - الشاطئ، الكورنيش، أبحر
   - مكافحة كل أسبوعين

2. **الأحياء القديمة:**
   - أنظمة الصرف القديمة
   - مكافحة شهرية مكثفة

3. **مناطق الحدائق:**
   - الحدائق المنزلية والعامة
   - رش دوري كل 3 أسابيع

## خطة المكافحة السنوية

### يناير - فبراير:
✓ فحص شامل
✓ صيانة وقائية
✓ تنظيف مصادر المياه

### مارس - أبريل:
✓ رش وقائي مكثف
✓ معالجة المياه الراكدة
✓ تركيب ناموسيات

### مايو - أغسطس:
✓ رش أسبوعي
✓ فحص يومي
✓ علاج فوري

### سبتمبر - أكتوبر:
✓ رش مركز
✓ معالجة المخابئ
✓ تقييم النتائج

### نوفمبر - ديسمبر:
✓ رش نهائي
✓ تحضير للشتاء
✓ خطة العام القادم

## نصائح إضافية

### للمنازل:
- تفريغ المياه الراكدة أسبوعياً
- استخدام ناموسيات على النوافذ
- تشغيل المراوح (البعوض يكره الهواء المتحرك)

### للحدائق:
- تنظيف أحواض الزراعة
- معالجة برك الزينة
- إزالة الحاويات الفارغة

### للشركات:
- عقود سنوية مع جدولة منتظمة
- فحص دوري للمواقع
- تقارير شهرية

لا تنتظر حتى تتفاقم المشكلة. التخطيط السليم يضمن صيفاً خالياً من البعوض!
  `;

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
              {isArabic ? 'أفضل أوقات مكافحة البعوض' : 'Best Times for Mosquito Control'}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {isArabic ? 'مكافحة موسمية' : 'Seasonal Control'}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{isArabic ? '8 سبتمبر 2024' : 'September 8, 2024'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{isArabic ? '6 دقائق' : '6 min read'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>1.5K</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {isArabic ? 'أفضل أوقات مكافحة البعوض في جدة' : 'Best Times for Mosquito Control in Jeddah'}
            </h1>

            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'خبيرة مكافحة البعوض' : 'Mosquito Control Expert'}
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-lg border">
                <Share2 size={16} />
                <span className="text-sm">{isArabic ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>

            <div className="relative mb-8">
              <Image
                src="/images/Mosquito-control-service.jpg"
                alt={isArabic ? 'أفضل أوقات مكافحة البعوض' : 'Best times for mosquito control'}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none" style={{ direction: rtl ? 'rtl' : 'ltr' }}>
              <div dangerouslySetInnerHTML={{ 
                __html: contentAr
                  .replace(/\n/g, '<br>')
                  .replace(/## (.*?)<br>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
                  .replace(/### (.*?)<br>/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
                  .replace(/- (.*?)<br>/g, '<li class="mb-2">$1</li>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/✓/g, '<span class="text-green-500">✓</span>')
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mt-12">
              <Link
                href={locale === 'ar' ? '/blog' : '/en/blog'}
                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <BookOpen size={20} />
                {isArabic ? 'العودة للمدونة' : 'Back to Blog'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="article" 
        data={{
          title: isArabic ? 'أفضل أوقات مكافحة البعوض في جدة' : 'Best Times for Mosquito Control in Jeddah',
          description: isArabic 
            ? 'دليل شامل لأفضل الأوقات والمواسم لمكافحة البعوض في جدة'
            : 'Complete guide to best times and seasons for mosquito control in Jeddah',
          author: isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani',
          datePublished: isArabic ? '8 سبتمبر 2024' : 'September 8, 2024',
          image: '/images/Mosquito-control-service.jpg'
        }}
      />
    </>
  );
}
