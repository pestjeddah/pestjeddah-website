import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, Share2 } from 'lucide-react';

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
      ? 'طرق الوقاية من الصراصير في المطبخ | مدونة الأسطورة'
      : 'Kitchen Cockroach Prevention Methods | Al-Ustora Blog',
    description: isArabic
      ? 'تعرف على أفضل الطرق الفعالة لمنع دخول الصراصير إلى مطبخك والحفاظ على نظافة المكان وصحة عائلتك.'
      : 'Learn the most effective methods to prevent cockroaches from entering your kitchen and maintaining cleanliness and family health.',
  };
}

export default function BlogPost1({ params: { locale } }: Props) {
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
              {isArabic ? 'طرق الوقاية من الصراصير' : 'Cockroach Prevention'}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Category & Meta */}
          <div className="mb-6">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'نصائح وقائية' : 'Prevention Tips'}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic 
                ? 'طرق الوقاية من الصراصير في المطبخ'
                : 'Kitchen Cockroach Prevention Methods'
              }
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{isArabic ? '15 سبتمبر 2024' : 'September 15, 2024'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{isArabic ? '5 دقائق للقراءة' : '5 min read'}</span>
              </div>
              <button className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Share2 size={18} />
                <span>{isArabic ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/Cockroach control Jeddah.jpg"
              alt={isArabic ? 'مكافحة الصراصير في المطبخ' : 'Kitchen cockroach control'}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <h2>لماذا تنجذب الصراصير للمطبخ؟</h2>
                <p>
                  المطبخ هو المكان المفضل للصراصير في المنزل، حيث توفر لها البيئة المثالية للعيش والتكاثر.
                  تنجذب الصراصير للمطبخ لثلاثة أسباب رئيسية: الطعام، الماء، والدفء.
                </p>

                <h2>خطوات عملية للوقاية من الصراصير</h2>

                <h3>1. النظافة المستمرة</h3>
                <ul>
                  <li>تنظيف الأسطح فوراً بعد إعداد الطعام</li>
                  <li>عدم ترك الأطباق المتسخة في الحوض طوال الليل</li>
                  <li>مسح الأرضيات يومياً لإزالة أي فتات طعام</li>
                  <li>تنظيف خلف الأجهزة الكهربائية بانتظام</li>
                </ul>

                <h3>2. التخزين السليم للطعام</h3>
                <ul>
                  <li>استخدام حاويات محكمة الإغلاق للمواد الغذائية</li>
                  <li>عدم ترك الفواكه والخضروات مكشوفة</li>
                  <li>حفظ طعام الحيوانات الأليفة في أوعية مغلقة</li>
                  <li>إفراغ سلة المهملات يومياً</li>
                </ul>

                <h3>3. إصلاح التسريبات</h3>
                <p>
                  الصراصير تحتاج للماء أكثر من الطعام. افحص وأصلح أي تسريبات في:
                </p>
                <ul>
                  <li>الحنفيات والمواسير</li>
                  <li>تحت الحوض</li>
                  <li>خلف غسالة الصحون</li>
                  <li>حول الثلاجة</li>
                </ul>

                <h3>4. إغلاق نقاط الدخول</h3>
                <ul>
                  <li>سد الشقوق والفتحات في الجدران</li>
                  <li>تركيب حواجز تحت الأبواب</li>
                  <li>إصلاح الشبكات التالفة في النوافذ</li>
                  <li>إغلاق فتحات التهوية بشبكات دقيقة</li>
                </ul>

                <h2>متى تحتاج لمساعدة متخصصة؟</h2>
                <p>
                  إذا لاحظت وجود صراصير بشكل متكرر رغم اتباع الإجراءات الوقائية، فقد تحتاج إلى:
                </p>
                <ul>
                  <li>فحص شامل من قبل متخصصين</li>
                  <li>معالجة مكثفة للمنطقة المصابة</li>
                  <li>برنامج وقائي دوري</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة الخبراء</h4>
                  <p className="mb-0">
                    الوقاية دائماً أفضل من العلاج. اتباع روتين نظافة يومي بسيط يمكن أن يمنع مشاكل كبيرة
                    مستقبلاً. إذا شاهدت صرصوراً واحداً، فغالباً هناك المزيد مختبئ في الأماكن الضيقة.
                  </p>
                </div>

                <h2>خلاصة</h2>
                <p>
                  الوقاية من الصراصير في المطبخ تتطلب جهداً يومياً بسيطاً ولكن منتظماً. النظافة المستمرة،
                  التخزين السليم، وإصلاح التسريبات هي المفاتيح الثلاثة لمطبخ خالٍ من الصراصير.
                </p>
              </>
            ) : (
              <>
                <h2>Why Are Cockroaches Attracted to Kitchens?</h2>
                <p>
                  The kitchen is the favorite place for cockroaches in the home, providing them with an
                  ideal environment to live and reproduce. Cockroaches are attracted to kitchens for
                  three main reasons: food, water, and warmth.
                </p>

                <h2>Practical Steps for Cockroach Prevention</h2>

                <h3>1. Continuous Cleanliness</h3>
                <ul>
                  <li>Clean surfaces immediately after food preparation</li>
                  <li>Don't leave dirty dishes in the sink overnight</li>
                  <li>Wipe floors daily to remove any food crumbs</li>
                  <li>Clean behind appliances regularly</li>
                </ul>

                <h3>2. Proper Food Storage</h3>
                <ul>
                  <li>Use airtight containers for food items</li>
                  <li>Don't leave fruits and vegetables uncovered</li>
                  <li>Store pet food in sealed containers</li>
                  <li>Empty the trash daily</li>
                </ul>

                <h3>3. Fix Leaks</h3>
                <p>
                  Cockroaches need water more than food. Check and fix any leaks in:
                </p>
                <ul>
                  <li>Faucets and pipes</li>
                  <li>Under the sink</li>
                  <li>Behind the dishwasher</li>
                  <li>Around the refrigerator</li>
                </ul>

                <h3>4. Seal Entry Points</h3>
                <ul>
                  <li>Seal cracks and openings in walls</li>
                  <li>Install door sweeps under doors</li>
                  <li>Repair damaged window screens</li>
                  <li>Cover ventilation openings with fine mesh</li>
                </ul>

                <h2>When Do You Need Professional Help?</h2>
                <p>
                  If you notice cockroaches frequently despite following preventive measures, you may need:
                </p>
                <ul>
                  <li>Comprehensive inspection by professionals</li>
                  <li>Intensive treatment of affected area</li>
                  <li>Regular preventive program</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expert Tip</h4>
                  <p className="mb-0">
                    Prevention is always better than cure. Following a simple daily cleaning routine can
                    prevent major problems in the future. If you see one cockroach, there are likely more
                    hiding in tight spaces.
                  </p>
                </div>

                <h2>Conclusion</h2>
                <p>
                  Preventing cockroaches in the kitchen requires simple but consistent daily effort.
                  Continuous cleanliness, proper storage, and fixing leaks are the three keys to a
                  cockroach-free kitchen.
                </p>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'هل تعاني من مشكلة الصراصير؟' : 'Suffering from Cockroach Problem?'}
            </h3>
            <p className="text-gray-700 mb-6">
              {isArabic 
                ? 'فريقنا المتخصص جاهز لمساعدتك في القضاء على الصراصير نهائياً'
                : 'Our specialized team is ready to help you eliminate cockroaches permanently'
              }
            </p>
            <Link
              href={locale === 'ar' ? '/contact' : '/en/contact'}
              className="btn-primary inline-flex items-center gap-2"
            >
              {isArabic ? 'احجز الآن' : 'Book Now'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">
              {isArabic ? 'مقالات ذات صلة' : 'Related Articles'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[2, 3, 4].map((id) => (
                <Link
                  key={id}
                  href={`${locale === 'ar' ? '/blog' : '/en/blog'}/${id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-40 bg-gray-200"></div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {isArabic ? 'مقال ذو صلة' : 'Related Article'} {id}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <SchemaInjector 
        type="article" 
        data={{
          title: isArabic 
            ? 'طرق الوقاية من الصراصير في المطبخ'
            : 'Kitchen Cockroach Prevention Methods',
          description: isArabic 
            ? 'دليل شامل للوقاية من الصراصير في المطبخ'
            : 'Comprehensive guide for kitchen cockroach prevention',
          author: isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team',
          publishedAt: '2024-09-15',
          image: '/images/Cockroach control Jeddah.jpg'
        }}
      />
    </>
  );
}


