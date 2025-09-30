import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  ArrowRight,
  ArrowLeft,
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
      ? 'علامات وجود النمل الأبيض في منزلك | مدونة الأسطورة'
      : 'Signs of Termites in Your Home | Al-Ustora Blog',
    description: isArabic 
      ? 'تعرف على العلامات المبكرة لوجود النمل الأبيض في منزلك وكيفية اكتشافه قبل أن يسبب أضراراً جسيمة.'
      : 'Learn the early signs of termites in your home and how to detect them before they cause serious damage.',
  };
}

export default function BlogPost2({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  const contentAr = `
النمل الأبيض من أخطر الآفات التي يمكن أن تهاجم منزلك، فهو يعمل في الخفاء ويمكن أن يسبب أضراراً هيكلية جسيمة قبل أن تكتشفه.

## ما هو النمل الأبيض؟

النمل الأبيض حشرات اجتماعية تتغذى على السليلوز الموجود في الخشب والورق. يعيشون في مستعمرات كبيرة تحت الأرض ويهاجمون الهياكل الخشبية للمباني.

## علامات الإصابة الرئيسية

### 1. أنابيب الطين على الجدران
أوضح علامة هي وجود أنابيب طينية على الجدران الخارجية أو الداخلية. هذه الأنابيب تستخدمها النمل الأبيض للتنقل بين التربة ومصادر الغذاء.

### 2. الخشب الأجوف
اطرق على الخشب في منزلك. إذا سمعت صوتاً أجوف، فقد يكون النمل الأبيض قد أكل الجزء الداخلي.

### 3. الأجنحة المتساقطة
في موسم التزاوج (عادة الربيع)، تطير النملات المجنحة لتأسيس مستعمرات جديدة. وجود أجنحة متساقطة قرب النوافذ علامة واضحة.

### 4. تشوه الأبواب والنوافذ
صعوبة فتح أو إغلاق الأبواب والنوافذ قد تكون بسبب تلف الإطارات الخشبية.

### 5. الثقوب الصغيرة في الخشب
ثقوب صغيرة في الأثاث أو الأرضيات الخشبية مع وجود نشارة خشبية.

## المناطق الأكثر عرضة

### في المنزل:
- الحمامات والمطابخ (الرطوبة العالية)
- الأقبية والمخازن
- الأبواب والنوافذ الخشبية
- الأسقف المستعارة
- خزائن المطبخ

### في الحديقة:
- جذوع الأشجار الميتة
- الأخشاب المخزنة
- الأسوار الخشبية

## متى تحتاج للمساعدة المحترفة؟

### اتصل فوراً إذا:
- وجدت أكثر من علامة من العلامات أعلاه
- لاحظت انتشار الأنابيب الطينية
- سمعت أصوات غريبة من الجدران
- وجدت تلفاً هيكلياً في الخشب

## الوقاية خير من العلاج

### نصائح وقائية:
1. **قلل الرطوبة:** أصلح التسريبات فوراً
2. **أبعد الخشب:** لا تخزن الأخشاب ملاصقة للمنزل
3. **فحص دوري:** افحص منزلك كل 6 أشهر
4. **عزل الأساسات:** استخدم مواد عازلة مقاومة للنمل
5. **تهوية جيدة:** حافظ على تهوية المناطق الرطبة

## كيف نساعدك؟

في شركة الأسطورة، نستخدم أحدث التقنيات:
- **الفحص بالأشعة:** كشف الإصابة المخفية
- **العلاج الكيميائي:** حواجز كيميائية طويلة المدى
- **أنظمة الطعوم:** القضاء على المستعمرة بالكامل
- **المتابعة الدورية:** ضمان عدم العودة

لا تنتظر حتى يتفاقم الضرر. الفحص المبكر يوفر عليك الآلاف من تكاليف الإصلاح.
  `;

  const contentEn = `
Termites are among the most dangerous pests that can attack your home, working in hiding and causing serious structural damage before you discover them.

## What are Termites?

Termites are social insects that feed on cellulose found in wood and paper. They live in large underground colonies and attack wooden structures of buildings.

## Main Signs of Infestation

### 1. Mud Tubes on Walls
The clearest sign is the presence of mud tubes on exterior or interior walls. These tubes are used by termites to travel between soil and food sources.

### 2. Hollow Wood
Tap on wood in your home. If you hear a hollow sound, termites may have eaten the inside.

### 3. Discarded Wings
During mating season (usually spring), winged termites fly to establish new colonies. Finding discarded wings near windows is a clear sign.

### 4. Warped Doors and Windows
Difficulty opening or closing doors and windows may be due to damaged wooden frames.

### 5. Small Holes in Wood
Small holes in furniture or wooden floors with wood dust.

## Most Vulnerable Areas

### In the Home:
- Bathrooms and kitchens (high humidity)
- Basements and storage
- Wooden doors and windows
- False ceilings
- Kitchen cabinets

### In the Garden:
- Dead tree stumps
- Stored wood
- Wooden fences

## When Do You Need Professional Help?

### Call Immediately If:
- You find more than one of the above signs
- You notice spread of mud tubes
- You hear strange sounds from walls
- You find structural damage to wood

## Prevention is Better Than Cure

### Preventive Tips:
1. **Reduce Moisture:** Fix leaks immediately
2. **Move Wood Away:** Don't store wood adjacent to house
3. **Regular Inspection:** Check your home every 6 months
4. **Insulate Foundations:** Use termite-resistant materials
5. **Good Ventilation:** Maintain ventilation in humid areas

## How Can We Help?

At Al-Ustora Company, we use the latest technologies:
- **X-ray Inspection:** Detect hidden infestation
- **Chemical Treatment:** Long-term chemical barriers
- **Baiting Systems:** Eliminate entire colony
- **Regular Follow-up:** Ensure no return

Don't wait until damage escalates. Early inspection saves you thousands in repair costs.
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
              {isArabic ? 'علامات وجود النمل الأبيض' : 'Signs of Termites'}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                {isArabic ? 'التشخيص' : 'Diagnosis'}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{isArabic ? '12 سبتمبر 2024' : 'September 12, 2024'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{isArabic ? '7 دقائق' : '7 min read'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>890</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {isArabic ? 'علامات وجود النمل الأبيض في منزلك' : 'Signs of Termites in Your Home'}
            </h1>

            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'خبير مكافحة النمل الأبيض' : 'Termite Control Expert'}
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
                src="/images/Termite treatment Jeddah.jpg"
                alt={isArabic ? 'علامات وجود النمل الأبيض' : 'Signs of termites'}
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
                __html: (isArabic ? contentAr : contentEn)
                  .replace(/\n/g, '<br>')
                  .replace(/## (.*?)<br>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
                  .replace(/### (.*?)<br>/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
                  .replace(/- (.*?)<br>/g, '<li class="mb-2">$1</li>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
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
          title: isArabic ? 'علامات وجود النمل الأبيض في منزلك' : 'Signs of Termites in Your Home',
          description: isArabic 
            ? 'تعرف على العلامات المبكرة لوجود النمل الأبيض وكيفية اكتشافه'
            : 'Learn the early signs of termites and how to detect them',
          author: isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani',
          datePublished: isArabic ? '12 سبتمبر 2024' : 'September 12, 2024',
          image: '/images/Termite treatment Jeddah.jpg'
        }}
      />
    </>
  );
}
