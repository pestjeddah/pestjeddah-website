import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  User, 
  ArrowRight,
  ArrowLeft,
  Tag,
  Clock,
  Eye,
  Share2,
  BookOpen
} from 'lucide-react';

import { isRTL } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

type Props = {
  params: { locale: string; id: string };
};

// Sample blog posts data
const blogPosts = {
  '1': {
    id: 1,
    titleAr: 'طرق الوقاية من الصراصير في المطبخ',
    titleEn: 'Kitchen Cockroach Prevention Methods',
    contentAr: `
الصراصير من أكثر الحشرات إزعاجاً في المطابخ، ولكن يمكن الوقاية منها باتباع إرشادات بسيطة وفعالة.

## لماذا تنجذب الصراصير للمطابخ؟

تعتبر المطابخ البيئة المثالية للصراصير لعدة أسباب:
- توفر الطعام والفتات
- وجود الماء والرطوبة
- أماكن الاختباء الدافئة والمظلمة
- بقايا الزيوت والدهون

## خطوات الوقاية الأساسية

### 1. النظافة اليومية
احرص على تنظيف المطبخ يومياً وإزالة جميع الفتات وبقايا الطعام. امسح الأسطح بمواد التنظيف المناسبة.

### 2. التخزين السليم
احفظ الطعام في حاويات محكمة الإغلاق. تجنب ترك الطعام مكشوفاً على الأسطح.

### 3. إدارة الرطوبة
جفف المنطقة حول الحوض جيداً. أصلح أي تسريبات في الأنابيب فوراً.

### 4. سد الشقوق
افحص المطبخ بحثاً عن شقوق أو فتحات قد تستخدمها الصراصير للدخول واسدها.

## علامات وجود الصراصير

راقب هذه العلامات التي تدل على وجود صراصير:
- رؤية الصراصير ليلاً
- وجود فضلات صغيرة داكنة
- رائحة عفنة مميزة
- بقع بنية على الجدران

## متى تحتاج لشركة مكافحة؟

اتصل بشركة مكافحة محترفة إذا:
- لاحظت أكثر من صرصور واحد
- عادت الصراصير رغم المحاولات
- وجدت علامات الإصابة الشديدة

الوقاية خير من العلاج، ولكن في حالة الإصابة لا تتردد في طلب المساعدة المتخصصة.
    `,
    contentEn: `
Cockroaches are among the most annoying insects in kitchens, but they can be prevented by following simple and effective guidelines.

## Why Are Cockroaches Attracted to Kitchens?

Kitchens are the ideal environment for cockroaches for several reasons:
- Food and crumbs availability
- Water and moisture presence
- Warm and dark hiding places
- Oil and grease residues

## Basic Prevention Steps

### 1. Daily Cleaning
Make sure to clean the kitchen daily and remove all crumbs and food residues. Wipe surfaces with appropriate cleaning materials.

### 2. Proper Storage
Store food in tightly sealed containers. Avoid leaving food exposed on surfaces.

### 3. Moisture Management
Dry the area around the sink well. Fix any pipe leaks immediately.

### 4. Seal Cracks
Inspect the kitchen for cracks or openings that cockroaches might use to enter and seal them.

## Signs of Cockroach Presence

Watch for these signs that indicate cockroach presence:
- Seeing cockroaches at night
- Small dark droppings
- Distinctive musty odor
- Brown stains on walls

## When Do You Need a Pest Control Company?

Call a professional pest control company if:
- You notice more than one cockroach
- Cockroaches return despite attempts
- You find signs of severe infestation

Prevention is better than cure, but in case of infestation, don't hesitate to seek specialized help.
    `,
    image: '/images/Cockroach control Jeddah.jpg',
    categoryAr: 'نصائح وقائية',
    categoryEn: 'Prevention Tips',
    dateAr: '15 سبتمبر 2024',
    dateEn: 'September 15, 2024',
    authorAr: 'فريق الأسطورة',
    authorEn: 'Al-Ustora Team',
    readTimeAr: '5 دقائق',
    readTimeEn: '5 min read',
    views: '1.2K'
  },
  // Add more blog posts as needed
};

export async function generateMetadata({
  params: { locale, id }
}: Props): Promise<Metadata> {
  const isArabic = locale === 'ar';
  const post = blogPosts[id as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: isArabic ? 'المقال غير موجود' : 'Article Not Found'
    };
  }
  
  return {
    title: isArabic ? post.titleAr : post.titleEn,
    description: isArabic 
      ? `${post.titleAr} - مقال متخصص في مكافحة الحشرات من شركة الأسطورة بجدة`
      : `${post.titleEn} - Specialized pest control article from Al-Ustora company in Jeddah`,
    keywords: isArabic 
      ? ['مكافحة الحشرات', 'نصائح الوقاية', 'الصراصير', 'المطبخ']
      : ['pest control', 'prevention tips', 'cockroaches', 'kitchen'],
  };
}

export default function BlogArticlePage({ params: { locale, id } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  const relatedPosts = isArabic ? [
    {
      id: 2,
      title: 'علامات وجود النمل الأبيض في منزلك',
      image: '/images/Termite treatment Jeddah.jpg',
      category: 'التشخيص'
    },
    {
      id: 3,
      title: 'أفضل أوقات مكافحة البعوض في جدة',
      image: '/images/Mosquito control service.jpg',
      category: 'مكافحة موسمية'
    }
  ] : [
    {
      id: 2,
      title: 'Signs of Termites in Your Home',
      image: '/images/Termite treatment Jeddah.jpg',
      category: 'Diagnosis'
    },
    {
      id: 3,
      title: 'Best Times for Mosquito Control in Jeddah',
      image: '/images/Mosquito control service.jpg',
      category: 'Seasonal Control'
    }
  ];

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
            <span className="text-gray-900 line-clamp-1">
              {isArabic ? post.titleAr : post.titleEn}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {isArabic ? post.categoryAr : post.categoryEn}
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{isArabic ? post.dateAr : post.dateEn}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{isArabic ? post.readTimeAr : post.readTimeEn}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{post.views}</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {isArabic ? post.titleAr : post.titleEn}
            </h1>

            {/* Author & Share */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {isArabic ? post.authorAr : post.authorEn}
                  </div>
                  <div className="text-sm text-gray-600">
                    {isArabic ? 'خبير مكافحة الحشرات' : 'Pest Control Expert'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-lg border">
                  <Share2 size={16} />
                  <span className="text-sm">{isArabic ? 'مشاركة' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mb-8">
              <Image
                src={post.image}
                alt={isArabic ? post.titleAr : post.titleEn}
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
            <div className="prose prose-lg max-w-none" 
                 style={{ direction: rtl ? 'rtl' : 'ltr' }}>
              <div dangerouslySetInnerHTML={{ 
                __html: (isArabic ? post.contentAr : post.contentEn)
                  .replace(/\n/g, '<br>')
                  .replace(/## (.*?)<br>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
                  .replace(/### (.*?)<br>/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
                  .replace(/- (.*?)<br>/g, '<li class="mb-2">$1</li>')
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'مقالات ذات صلة' : 'Related Articles'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`${locale === 'ar' ? '/blog' : '/en/blog'}/${relatedPost.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm font-semibold">
                        {isArabic ? 'اقرأ المزيد' : 'Read More'}
                      </span>
                      {rtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Back to Blog */}
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
          title: isArabic ? post.titleAr : post.titleEn,
          description: isArabic 
            ? `${post.titleAr} - مقال متخصص في مكافحة الحشرات`
            : `${post.titleEn} - Specialized pest control article`,
          author: isArabic ? post.authorAr : post.authorEn,
          datePublished: isArabic ? post.dateAr : post.dateEn,
          image: post.image
        }}
      />
    </>
  );
}

