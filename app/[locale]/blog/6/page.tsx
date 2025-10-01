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
      ? 'التدخين والتعقيم: متى نحتاجهما؟ | مدونة الأسطورة'
      : 'Fumigation & Disinfection: When Do We Need Them? | Al-Ustora Blog',
    description: isArabic
      ? 'تعرف على الفرق بين التدخين والتعقيم ومتى نحتاج لكل منهما في مكافحة الآفات والحشرات.'
      : 'Learn the difference between fumigation and disinfection and when we need each in pest control.',
  };
}

export default function BlogPost6({ params: { locale } }: Props) {
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
              {isArabic ? 'التدخين والتعقيم' : 'Fumigation & Disinfection'}
            </span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {isArabic ? 'تقنيات متقدمة' : 'Advanced Techniques'}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic 
                ? 'التدخين والتعقيم: متى نحتاجهما؟'
                : 'Fumigation & Disinfection: When Do We Need Them?'
              }
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{isArabic ? 'م. خالد السلمي' : 'Eng. Khalid Al-Salmi'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{isArabic ? '28 أغسطس 2024' : 'August 28, 2024'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{isArabic ? '9 دقائق للقراءة' : '9 min read'}</span>
              </div>
              <button className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Share2 size={18} />
                <span>{isArabic ? 'مشاركة' : 'Share'}</span>
              </button>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/Pest spray service.jpg"
              alt={isArabic ? 'التدخين والتعقيم' : 'Fumigation and disinfection'}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {isArabic ? (
              <>
                <p className="lead">
                  كثيراً ما يخلط الناس بين مصطلحي التدخين والتعقيم في مكافحة الآفات. في هذا المقال،
                  نوضح الفرق بين الطريقتين ومتى يجب استخدام كل منهما.
                </p>

                <h2>ما هو التدخين (Fumigation)؟</h2>
                <p>
                  التدخين هو عملية استخدام غازات كيميائية لقتل الآفات في مساحة مغلقة. يتم إطلاق الغاز
                  السام الذي يخترق جميع الشقوق والفتحات للقضاء على الحشرات والقوارض.
                </p>

                <h3>أنواع التدخين</h3>

                <h4>1. التدخين الكامل للمبنى</h4>
                <ul>
                  <li>يغطي المبنى بأكمله بغطاء محكم</li>
                  <li>يستخدم لحالات الإصابة الشديدة</li>
                  <li>يستغرق عدة أيام</li>
                  <li>يتطلب إخلاء كامل للمبنى</li>
                </ul>

                <h4>2. التدخين الجزئي</h4>
                <ul>
                  <li>يستهدف غرف أو مناطق محددة</li>
                  <li>أسرع وأقل تكلفة</li>
                  <li>مناسب للإصابات المتوسطة</li>
                </ul>

                <h3>متى نستخدم التدخين؟</h3>
                <ul>
                  <li>إصابة شديدة بالنمل الأبيض</li>
                  <li>وجود حشرات في الأماكن التي يصعب الوصول إليها</li>
                  <li>معالجة الحاويات والشحنات المستوردة</li>
                  <li>مخازن الحبوب والمواد الغذائية</li>
                  <li>المتاحف والمكتبات (للحشرات التي تتلف الكتب)</li>
                </ul>

                <h2>ما هو التعقيم (Disinfection)؟</h2>
                <p>
                  التعقيم هو عملية استخدام مواد كيميائية سائلة أو رذاذ للقضاء على الآفات والجراثيم
                  والبكتيريا على الأسطح والمناطق المكشوفة.
                </p>

                <h3>أنواع التعقيم</h3>

                <h4>1. الرش السطحي</h4>
                <ul>
                  <li>رش المبيدات على الأسطح والأرضيات</li>
                  <li>فعال ضد الصراصير والنمل</li>
                  <li>سريع ويمكن العودة بعد ساعات</li>
                </ul>

                <h4>2. الرش بالضباب (Fogging)</h4>
                <ul>
                  <li>تحويل المبيد إلى ضباب دقيق</li>
                  <li>يصل للأماكن الضيقة</li>
                  <li>فعال ضد الذباب والبعوض</li>
                </ul>

                <h4>3. المعالجة المتبقية</h4>
                <ul>
                  <li>رش طبقة من المبيد تظل فعالة لأسابيع</li>
                  <li>وقائي وعلاجي في نفس الوقت</li>
                  <li>مناسب للمناطق شديدة الإصابة</li>
                </ul>

                <h3>متى نستخدم التعقيم؟</h3>
                <ul>
                  <li>الوقاية الدورية المنتظمة</li>
                  <li>معالجة الصراصير والنمل</li>
                  <li>القضاء على البعوض والذباب</li>
                  <li>تطهير الأسطح من البكتيريا</li>
                  <li>بعد حالات الفيضانات أو الأوبئة</li>
                </ul>

                <h2>المقارنة بين التدخين والتعقيم</h2>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-3 text-right">الميزة</th>
                        <th className="border p-3 text-center">التدخين</th>
                        <th className="border p-3 text-center">التعقيم</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-semibold">المادة المستخدمة</td>
                        <td className="border p-3 text-center">غاز</td>
                        <td className="border p-3 text-center">سائل/رذاذ</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-3 font-semibold">وقت التنفيذ</td>
                        <td className="border p-3 text-center">2-5 أيام</td>
                        <td className="border p-3 text-center">2-4 ساعات</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">الإخلاء</td>
                        <td className="border p-3 text-center">إلزامي</td>
                        <td className="border p-3 text-center">مؤقت</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-3 font-semibold">التكلفة</td>
                        <td className="border p-3 text-center">عالية</td>
                        <td className="border p-3 text-center">متوسطة</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">الفعالية</td>
                        <td className="border p-3 text-center">شاملة 100%</td>
                        <td className="border p-3 text-center">على الأسطح</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-3 font-semibold">الاستخدام</td>
                        <td className="border p-3 text-center">حالات طارئة</td>
                        <td className="border p-3 text-center">دوري ووقائي</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>الاحتياطات الواجبة</h2>

                <h3>قبل التدخين</h3>
                <ul>
                  <li>إخلاء المبنى بالكامل</li>
                  <li>إخراج الحيوانات الأليفة والنباتات</li>
                  <li>إيقاف أنظمة التهوية</li>
                  <li>إغلاق جميع النوافذ والأبواب</li>
                  <li>إخطار الجيران</li>
                </ul>

                <h3>قبل التعقيم</h3>
                <ul>
                  <li>تغطية الأطعمة والأواني</li>
                  <li>إبعاد الأطفال والحيوانات مؤقتاً</li>
                  <li>فتح النوافذ بعد الرش</li>
                  <li>عدم المسح المباشر للأسطح المعالجة</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">نصيحة الخبراء</h4>
                  <p className="mb-0">
                    اختيار الطريقة المناسبة يعتمد على نوع الآفة ومستوى الإصابة. استشر دائماً متخصصين
                    معتمدين لتقييم الوضع واختيار أفضل حل لمنزلك أو منشأتك.
                  </p>
                </div>

                <h2>التكنولوجيا الحديثة</h2>
                <p>
                  تشهد تقنيات المكافحة تطوراً مستمراً. من أحدث الطرق:
                </p>
                <ul>
                  <li><strong>التدخين بالحرارة:</strong> رفع درجة حرارة المبنى لقتل الآفات بدون كيماويات</li>
                  <li><strong>التعقيم بالبخار:</strong> استخدام بخار عالي الحرارة لقتل الحشرات والبكتيريا</li>
                  <li><strong>المبيدات الحيوية:</strong> استخدام مواد طبيعية أقل ضرراً</li>
                  <li><strong>الأنظمة الذكية:</strong> أجهزة استشعار لرصد الآفات مبكراً</li>
                </ul>

                <h2>الخلاصة</h2>
                <p>
                  كل من التدخين والتعقيم له استخداماته الخاصة. التدخين أقوى وأشمل لكنه أكثر تعقيداً
                  وتكلفة، بينما التعقيم أسرع وأنسب للاستخدام الدوري. الخيار الأمثل يعتمد على:
                </p>
                <ul>
                  <li>نوع الآفة وشدة الإصابة</li>
                  <li>نوع المبنى واستخدامه</li>
                  <li>الميزانية المتاحة</li>
                  <li>الوقت المتاح للعلاج</li>
                </ul>
              </>
            ) : (
              <>
                <p className="lead">
                  People often confuse the terms fumigation and disinfection in pest control. In this article,
                  we clarify the difference between the two methods and when each should be used.
                </p>

                <h2>What is Fumigation?</h2>
                <p>
                  Fumigation is the process of using chemical gases to kill pests in an enclosed space. Toxic
                  gas is released that penetrates all cracks and crevices to eliminate insects and rodents.
                </p>

                <h3>Types of Fumigation</h3>

                <h4>1. Whole Building Fumigation</h4>
                <ul>
                  <li>Covers entire building with sealed cover</li>
                  <li>Used for severe infestations</li>
                  <li>Takes several days</li>
                  <li>Requires complete evacuation</li>
                </ul>

                <h4>2. Partial Fumigation</h4>
                <ul>
                  <li>Targets specific rooms or areas</li>
                  <li>Faster and less expensive</li>
                  <li>Suitable for moderate infestations</li>
                </ul>

                <h3>When to Use Fumigation?</h3>
                <ul>
                  <li>Severe termite infestation</li>
                  <li>Insects in hard-to-reach places</li>
                  <li>Treatment of imported containers and shipments</li>
                  <li>Grain and food warehouses</li>
                  <li>Museums and libraries (for book-damaging insects)</li>
                </ul>

                <h2>What is Disinfection?</h2>
                <p>
                  Disinfection is the process of using liquid chemicals or spray to eliminate pests, germs,
                  and bacteria on surfaces and exposed areas.
                </p>

                <h3>Types of Disinfection</h3>

                <h4>1. Surface Spraying</h4>
                <ul>
                  <li>Spray pesticides on surfaces and floors</li>
                  <li>Effective against cockroaches and ants</li>
                  <li>Quick and can return after hours</li>
                </ul>

                <h4>2. Fogging</h4>
                <ul>
                  <li>Convert pesticide into fine mist</li>
                  <li>Reaches tight spaces</li>
                  <li>Effective against flies and mosquitoes</li>
                </ul>

                <h4>3. Residual Treatment</h4>
                <ul>
                  <li>Spray layer of pesticide that remains effective for weeks</li>
                  <li>Both preventive and curative</li>
                  <li>Suitable for heavily infested areas</li>
                </ul>

                <h3>When to Use Disinfection?</h3>
                <ul>
                  <li>Regular preventive maintenance</li>
                  <li>Cockroach and ant treatment</li>
                  <li>Mosquito and fly elimination</li>
                  <li>Surface disinfection from bacteria</li>
                  <li>After floods or epidemics</li>
                </ul>

                <h2>Comparison Between Fumigation and Disinfection</h2>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-3 text-left">Feature</th>
                        <th className="border p-3 text-center">Fumigation</th>
                        <th className="border p-3 text-center">Disinfection</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-3 font-semibold">Material Used</td>
                        <td className="border p-3 text-center">Gas</td>
                        <td className="border p-3 text-center">Liquid/Spray</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-3 font-semibold">Implementation Time</td>
                        <td className="border p-3 text-center">2-5 days</td>
                        <td className="border p-3 text-center">2-4 hours</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Evacuation</td>
                        <td className="border p-3 text-center">Mandatory</td>
                        <td className="border p-3 text-center">Temporary</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-3 font-semibold">Cost</td>
                        <td className="border p-3 text-center">High</td>
                        <td className="border p-3 text-center">Moderate</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-semibold">Effectiveness</td>
                        <td className="border p-3 text-center">100% Comprehensive</td>
                        <td className="border p-3 text-center">Surface Level</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-3 font-semibold">Use</td>
                        <td className="border p-3 text-center">Emergency Cases</td>
                        <td className="border p-3 text-center">Regular & Preventive</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Necessary Precautions</h2>

                <h3>Before Fumigation</h3>
                <ul>
                  <li>Complete building evacuation</li>
                  <li>Remove pets and plants</li>
                  <li>Turn off ventilation systems</li>
                  <li>Close all windows and doors</li>
                  <li>Notify neighbors</li>
                </ul>

                <h3>Before Disinfection</h3>
                <ul>
                  <li>Cover foods and utensils</li>
                  <li>Temporarily remove children and pets</li>
                  <li>Open windows after spraying</li>
                  <li>Don't wipe treated surfaces directly</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Expert Tip</h4>
                  <p className="mb-0">
                    Choosing the right method depends on pest type and infestation level. Always consult
                    certified professionals to assess the situation and choose the best solution for your
                    home or facility.
                  </p>
                </div>

                <h2>Modern Technology</h2>
                <p>
                  Pest control techniques are continuously evolving. Latest methods include:
                </p>
                <ul>
                  <li><strong>Heat Fumigation:</strong> Raising building temperature to kill pests without chemicals</li>
                  <li><strong>Steam Disinfection:</strong> Using high-temperature steam to kill insects and bacteria</li>
                  <li><strong>Biological Pesticides:</strong> Using less harmful natural substances</li>
                  <li><strong>Smart Systems:</strong> Sensors to detect pests early</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Both fumigation and disinfection have their specific uses. Fumigation is stronger and more
                  comprehensive but more complex and expensive, while disinfection is faster and more suitable
                  for regular use. The optimal choice depends on:
                </p>
                <ul>
                  <li>Pest type and infestation severity</li>
                  <li>Building type and use</li>
                  <li>Available budget</li>
                  <li>Available time for treatment</li>
                </ul>
              </>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'محتار أي طريقة تناسبك؟' : 'Not Sure Which Method Suits You?'}
            </h3>
            <p className="text-gray-700 mb-6">
              {isArabic 
                ? 'فريقنا جاهز لفحص منزلك وتقديم الحل الأمثل'
                : 'Our team is ready to inspect your home and provide the optimal solution'
              }
            </p>
            <Link
              href={locale === 'ar' ? '/contact' : '/en/contact'}
              className="btn-primary inline-flex items-center gap-2"
            >
              {isArabic ? 'احجز معاينة مجانية' : 'Book Free Inspection'}
              {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </div>
        </div>
      </article>

      <SchemaInjector 
        type="article" 
        data={{
          title: isArabic 
            ? 'التدخين والتعقيم: متى نحتاجهما؟'
            : 'Fumigation & Disinfection: When Do We Need Them?',
          description: isArabic 
            ? 'الفرق بين التدخين والتعقيم في مكافحة الآفات'
            : 'The difference between fumigation and disinfection in pest control',
          author: isArabic ? 'م. خالد السلمي' : 'Eng. Khalid Al-Salmi',
          publishedAt: '2024-08-28',
          image: '/images/Pest spray service.jpg'
        }}
      />
    </>
  );
}


