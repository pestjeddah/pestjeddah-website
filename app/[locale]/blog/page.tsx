import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  User, 
  ArrowRight,
  ArrowLeft,
  Tag,
  Clock,
  Eye
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
      ? 'مدونة مكافحة الحشرات — شركة الأسطورة | نصائح وإرشادات مكافحة الآفات'
      : 'Pest Control Blog — Al-Ustora | Tips & Guidance for Pest Management',
    description: isArabic
      ? 'مدونة شركة الأسطورة لمكافحة الحشرات بجدة. نصائح متخصصة، إرشادات الوقاية، وأحدث طرق مكافحة الآفات والحشرات المنزلية.'
      : 'Al-Ustora pest control blog in Jeddah. Specialized tips, prevention guidance, and latest methods for pest and household insect control.',
    keywords: isArabic 
      ? ['مدونة مكافحة الحشرات', 'نصائح مكافحة الآفات', 'الوقاية من الحشرات', 'إرشادات الصحة العامة']
      : ['pest control blog', 'pest management tips', 'insect prevention', 'public health guidance'],
  };
}

export default function BlogPage({ params: { locale } }: Props) {
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: isArabic ? 'طرق الوقاية من الصراصير في المطبخ' : 'Kitchen Cockroach Prevention Methods',
      excerpt: isArabic 
        ? 'تعرف على أفضل الطرق لمنع دخول الصراصير إلى مطبخك والحفاظ على نظافة المكان'
        : 'Learn the best methods to prevent cockroaches from entering your kitchen and maintaining cleanliness',
      image: '/images/Cockroach control Jeddah.jpg',
      category: isArabic ? 'نصائح وقائية' : 'Prevention Tips',
      date: isArabic ? '15 سبتمبر 2024' : 'September 15, 2024',
      author: isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team',
      readTime: isArabic ? '5 دقائق' : '5 min read',
      views: '1.2K'
    },
    {
      id: 2,
      title: isArabic ? 'علامات وجود النمل الأبيض في منزلك' : 'Signs of Termites in Your Home',
      excerpt: isArabic 
        ? 'كيف تكتشف وجود النمل الأبيض في منزلك قبل أن يسبب أضراراً جسيمة'
        : 'How to detect termites in your home before they cause serious damage',
      image: '/images/Termite treatment Jeddah.jpg',
      category: isArabic ? 'التشخيص' : 'Diagnosis',
      date: isArabic ? '12 سبتمبر 2024' : 'September 12, 2024',
      author: isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani',
      readTime: isArabic ? '7 دقائق' : '7 min read',
      views: '890'
    },
    {
      id: 3,
      title: isArabic ? 'أفضل أوقات مكافحة البعوض في جدة' : 'Best Times for Mosquito Control in Jeddah',
      excerpt: isArabic 
        ? 'تعرف على المواسم والأوقات المثلى لمكافحة البعوض بفعالية في مناخ جدة'
        : 'Learn about the optimal seasons and times for effective mosquito control in Jeddah\'s climate',
      image: '/images/Mosquito control service.jpg',
      category: isArabic ? 'مكافحة موسمية' : 'Seasonal Control',
      date: isArabic ? '8 سبتمبر 2024' : 'September 8, 2024',
      author: isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani',
      readTime: isArabic ? '6 دقائق' : '6 min read',
      views: '1.5K'
    },
    {
      id: 4,
      title: isArabic ? 'كيفية علاج بق الفراش نهائياً' : 'How to Eliminate Bed Bugs Permanently',
      excerpt: isArabic 
        ? 'دليل شامل للتخلص من بق الفراش نهائياً وضمان عدم عودته مرة أخرى'
        : 'Comprehensive guide to permanently eliminate bed bugs and ensure they don\'t return',
      image: '/images/Bed bug treatment Jeddah.jpg',
      category: isArabic ? 'علاج متخصص' : 'Specialized Treatment',
      date: isArabic ? '5 سبتمبر 2024' : 'September 5, 2024',
      author: isArabic ? 'أ. محمد الحربي' : 'Mr. Mohammed Al-Harbi',
      readTime: isArabic ? '8 دقائق' : '8 min read',
      views: '2.1K'
    },
    {
      id: 5,
      title: isArabic ? 'أهمية التعقيم الدوري للمطاعم' : 'Importance of Regular Restaurant Disinfection',
      excerpt: isArabic 
        ? 'لماذا يجب على المطاعم الالتزام بجدول تعقيم دوري وما هي أفضل الممارسات'
        : 'Why restaurants should follow regular disinfection schedules and best practices',
      image: '/images/Pest control for restaurants.jpg',
      category: isArabic ? 'قطاع تجاري' : 'Commercial Sector',
      date: isArabic ? '1 سبتمبر 2024' : 'September 1, 2024',
      author: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi',
      readTime: isArabic ? '10 دقائق' : '10 min read',
      views: '750'
    },
    {
      id: 6,
      title: isArabic ? 'التدخين والتعقيم: متى نحتاجهما؟' : 'Fumigation & Disinfection: When Do We Need Them?',
      excerpt: isArabic 
        ? 'الفرق بين التدخين والتعقيم ومتى نحتاج لكل منهما في مكافحة الآفات'
        : 'The difference between fumigation and disinfection and when we need each in pest control',
      image: '/images/Pest spray service.jpg',
      category: isArabic ? 'تقنيات متقدمة' : 'Advanced Techniques',
      date: isArabic ? '28 أغسطس 2024' : 'August 28, 2024',
      author: isArabic ? 'م. خالد السلمي' : 'Eng. Khalid Al-Salmi',
      readTime: isArabic ? '9 دقائق' : '9 min read',
      views: '980'
    }
  ];

  const categories = isArabic ? [
    'جميع المقالات',
    'نصائح وقائية',
    'التشخيص',
    'مكافحة موسمية',
    'علاج متخصص',
    'قطاع تجاري',
    'تقنيات متقدمة'
  ] : [
    'All Articles',
    'Prevention Tips',
    'Diagnosis',
    'Seasonal Control',
    'Specialized Treatment',
    'Commercial Sector',
    'Advanced Techniques'
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
            <span className="text-gray-900">{isArabic ? 'المدونة' : 'Blog'}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isArabic ? 'مدونة مكافحة الحشرات' : 'Pest Control Blog'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {isArabic 
                ? 'نصائح متخصصة وإرشادات عملية لمكافحة الآفات والحفاظ على بيئة صحية آمنة'
                : 'Specialized tips and practical guidance for pest control and maintaining a safe healthy environment'
              }
            </p>
            
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder={isArabic ? 'ابحث في المقالات...' : 'Search articles...'}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{post.views}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-400" />
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>

                    <Link
                      href={`${locale === 'ar' ? '/blog' : '/en/blog'}/${post.id}`}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-semibold"
                    >
                      {isArabic ? 'اقرأ المزيد' : 'Read More'}
                      {rtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-gray-500 hover:text-primary">
                {rtl ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
              <button className="px-4 py-2 text-gray-700 hover:text-primary">2</button>
              <button className="px-4 py-2 text-gray-700 hover:text-primary">3</button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 text-gray-700 hover:text-primary">10</button>
              <button className="px-4 py-2 text-gray-500 hover:text-primary">
                {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isArabic ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isArabic 
              ? 'احصل على أحدث النصائح والإرشادات في مكافحة الحشرات'
              : 'Get the latest tips and guidance in pest control'
            }
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={isArabic ? 'بريدك الإلكتروني' : 'Your email address'}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              {isArabic ? 'اشترك' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>

      <SchemaInjector 
        type="article" 
        data={{
          title: isArabic ? 'مدونة مكافحة الحشرات' : 'Pest Control Blog',
          description: isArabic 
            ? 'مدونة متخصصة في مكافحة الحشرات والآفات'
            : 'Specialized blog for pest and insect control',
          author: isArabic ? 'شركة الأسطورة' : 'Al-Ustora Company'
        }}
      />
    </>
  );
}

