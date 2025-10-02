'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  User, 
  ArrowRight,
  ArrowLeft,
  Clock,
  Eye,
  Search
} from 'lucide-react';

import { isRTL } from '@/lib/utils';
import { SchemaInjector } from '@/components/seo/SchemaInjector';

export default function BlogPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(isArabic ? 'جميع المقالات' : 'All Articles');

  // All 15 blog posts data
  const allBlogPosts = [
    {
      id: 1,
      title: isArabic ? 'طرق الوقاية من الصراصير في المطبخ' : 'Kitchen Cockroach Prevention Methods',
      excerpt: isArabic ? 'تعرف على أفضل الطرق لمنع دخول الصراصير إلى مطبخك والحفاظ على نظافة المكان' : 'Learn the best methods to prevent cockroaches from entering your kitchen and maintaining cleanliness',
      image: '/images/Cockroach-control-Jeddah.jpg',
      category: isArabic ? 'نصائح وقائية' : 'Prevention Tips',
      date: isArabic ? '15 سبتمبر 2024' : 'September 15, 2024',
      author: isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team',
      readTime: isArabic ? '5 دقائق' : '5 min read',
      views: '1.2K'
    },
    {
      id: 2,
      title: isArabic ? 'علامات وجود النمل الأبيض في منزلك' : 'Signs of Termites in Your Home',
      excerpt: isArabic ? 'كيف تكتشف وجود النمل الأبيض في منزلك قبل أن يسبب أضراراً جسيمة' : 'How to detect termites in your home before they cause serious damage',
      image: '/images/Termite-treatment-Jeddah.jpg',
      category: isArabic ? 'التشخيص' : 'Diagnosis',
      date: isArabic ? '12 سبتمبر 2024' : 'September 12, 2024',
      author: isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani',
      readTime: isArabic ? '7 دقائق' : '7 min read',
      views: '890'
    },
    {
      id: 3,
      title: isArabic ? 'أفضل أوقات مكافحة البعوض في جدة' : 'Best Times for Mosquito Control in Jeddah',
      excerpt: isArabic ? 'تعرف على المواسم والأوقات المثلى لمكافحة البعوض بفعالية في مناخ جدة' : 'Learn about the optimal seasons and times for effective mosquito control in Jeddah\'s climate',
      image: '/images/Mosquito-control-service.jpg',
      category: isArabic ? 'مكافحة موسمية' : 'Seasonal Control',
      date: isArabic ? '8 سبتمبر 2024' : 'September 8, 2024',
      author: isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani',
      readTime: isArabic ? '6 دقائق' : '6 min read',
      views: '1.5K'
    },
    {
      id: 4,
      title: isArabic ? 'كيفية علاج بق الفراش نهائياً' : 'How to Eliminate Bed Bugs Permanently',
      excerpt: isArabic ? 'دليل شامل للتخلص من بق الفراش نهائياً وضمان عدم عودته مرة أخرى' : 'Comprehensive guide to permanently eliminate bed bugs and ensure they don\'t return',
      image: '/images/Bed-bug-treatment-Jeddah.jpg',
      category: isArabic ? 'علاج متخصص' : 'Specialized Treatment',
      date: isArabic ? '5 سبتمبر 2024' : 'September 5, 2024',
      author: isArabic ? 'أ. محمد الحربي' : 'Mr. Mohammed Al-Harbi',
      readTime: isArabic ? '8 دقائق' : '8 min read',
      views: '2.1K'
    },
    {
      id: 5,
      title: isArabic ? 'أهمية التعقيم الدوري للمطاعم' : 'Importance of Regular Restaurant Disinfection',
      excerpt: isArabic ? 'لماذا يجب على المطاعم الالتزام بجدول تعقيم دوري وما هي أفضل الممارسات' : 'Why restaurants should follow regular disinfection schedules and best practices',
      image: '/images/Pest-control-for-restaurants.jpg',
      category: isArabic ? 'قطاع تجاري' : 'Commercial Sector',
      date: isArabic ? '1 سبتمبر 2024' : 'September 1, 2024',
      author: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi',
      readTime: isArabic ? '10 دقائق' : '10 min read',
      views: '750'
    },
    {
      id: 6,
      title: isArabic ? 'التدخين والتعقيم: متى نحتاجهما؟' : 'Fumigation & Disinfection: When Do We Need Them?',
      excerpt: isArabic ? 'الفرق بين التدخين والتعقيم ومتى نحتاج لكل منهما في مكافحة الآفات' : 'The difference between fumigation and disinfection and when we need each in pest control',
      image: '/images/Pest-spray-service.jpg',
      category: isArabic ? 'تقنيات متقدمة' : 'Advanced Techniques',
      date: isArabic ? '28 أغسطس 2024' : 'August 28, 2024',
      author: isArabic ? 'م. خالد السلمي' : 'Eng. Khalid Al-Salmi',
      readTime: isArabic ? '9 دقائق' : '9 min read',
      views: '980'
    },
    {
      id: 7,
      title: isArabic ? 'مكافحة القوارض في المنازل' : 'Rodent Control in Homes',
      excerpt: isArabic ? 'دليل شامل لمكافحة الفئران والجرذان في المنازل والوقاية منها' : 'Comprehensive guide for mice and rat control in homes and prevention',
      image: '/images/Rodent-control-Jeddah.jpg',
      category: isArabic ? 'علاج متخصص' : 'Specialized Treatment',
      date: isArabic ? '20 أغسطس 2024' : 'August 20, 2024',
      author: isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team',
      readTime: isArabic ? '7 دقائق' : '7 min read',
      views: '1.4K'
    },
    {
      id: 8,
      title: isArabic ? 'النمل الأسود: كيف تتخلص منه نهائياً؟' : 'Black Ants: How to Get Rid of Them Permanently?',
      excerpt: isArabic ? 'طرق فعالة للتخلص من النمل الأسود في المنزل والحديقة بشكل نهائي' : 'Effective methods to eliminate black ants in home and garden permanently',
      image: '/images/Ant-control-Jeddah.jpg',
      category: isArabic ? 'نصائح وقائية' : 'Prevention Tips',
      date: isArabic ? '10 أغسطس 2024' : 'August 10, 2024',
      author: isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani',
      readTime: isArabic ? '6 دقائق' : '6 min read',
      views: '1.1K'
    },
    {
      id: 9,
      title: isArabic ? 'علامات تحتاج معها لمكافحة فورية' : 'Signs You Need Immediate Pest Control',
      excerpt: isArabic ? 'تعرف على العلامات التحذيرية التي تستدعي الاتصال بشركة مكافحة فوراً' : 'Learn warning signs that require immediate call to pest control company',
      image: '/images/Emergency-pest-control-Jeddah.jpg',
      category: isArabic ? 'التشخيص' : 'Diagnosis',
      date: isArabic ? '25 يوليو 2024' : 'July 25, 2024',
      author: isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani',
      readTime: isArabic ? '8 دقائق' : '8 min read',
      views: '1.8K'
    },
    {
      id: 10,
      title: isArabic ? 'مكافحة الآفات في الفنادق: دليل شامل' : 'Pest Control in Hotels: Comprehensive Guide',
      excerpt: isArabic ? 'برامج مكافحة متخصصة للفنادق تضمن سلامة النزلاء والحفاظ على السمعة' : 'Specialized pest control programs for hotels ensuring guest safety and reputation protection',
      image: '/images/Commercial-pest-control-Jeddah.jpg',
      category: isArabic ? 'قطاع تجاري' : 'Commercial Sector',
      date: isArabic ? '15 يوليو 2024' : 'July 15, 2024',
      author: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi',
      readTime: isArabic ? '9 دقائق' : '9 min read',
      views: '920'
    },
    {
      id: 11,
      title: isArabic ? 'الحشرات الطائرة وطرق مكافحتها' : 'Flying Insects and Control Methods',
      excerpt: isArabic ? 'دليل شامل لمكافحة الذباب والبعوض والحشرات الطائرة الأخرى' : 'Comprehensive guide for controlling flies, mosquitoes and other flying insects',
      image: '/images/Insect-control-Jeddah.jpg',
      category: isArabic ? 'مكافحة موسمية' : 'Seasonal Control',
      date: isArabic ? '5 يوليو 2024' : 'July 5, 2024',
      author: isArabic ? 'م. خالد السلمي' : 'Eng. Khalid Al-Salmi',
      readTime: isArabic ? '7 دقائق' : '7 min read',
      views: '1.3K'
    },
    {
      id: 12,
      title: isArabic ? 'الوقاية من الآفات في فصل الشتاء' : 'Winter Pest Prevention',
      excerpt: isArabic ? 'كيف تحمي منزلك من الآفات التي تبحث عن مأوى دافئ في الشتاء' : 'How to protect your home from pests seeking warm shelter in winter',
      image: '/images/Home-pest-treatment.jpg',
      category: isArabic ? 'مكافحة موسمية' : 'Seasonal Control',
      date: isArabic ? '20 يونيو 2024' : 'June 20, 2024',
      author: isArabic ? 'فريق الأسطورة' : 'Al-Ustora Team',
      readTime: isArabic ? '6 دقائق' : '6 min read',
      views: '850'
    },
    {
      id: 13,
      title: isArabic ? 'المبيدات الآمنة للأطفال والحيوانات الأليفة' : 'Safe Pesticides for Children and Pets',
      excerpt: isArabic ? 'تعرف على المبيدات الآمنة والطرق الصديقة للبيئة لمكافحة الآفات' : 'Learn about safe pesticides and eco-friendly methods for pest control',
      image: '/images/Safe-pest-control.jpg',
      category: isArabic ? 'تقنيات متقدمة' : 'Advanced Techniques',
      date: isArabic ? '10 يونيو 2024' : 'June 10, 2024',
      author: isArabic ? 'د. فاطمة الأحمدي' : 'Dr. Fatima Al-Ahmadi',
      readTime: isArabic ? '10 دقائق' : '10 min read',
      views: '1.6K'
    },
    {
      id: 14,
      title: isArabic ? 'مكافحة الآفات الزراعية في الحدائق المنزلية' : 'Agricultural Pest Control in Home Gardens',
      excerpt: isArabic ? 'حماية محاصيلك وحديقتك من الآفات الزراعية بطرق فعالة وآمنة' : 'Protect your crops and garden from agricultural pests with effective and safe methods',
      image: '/images/Eco-friendly-pest-control.jpg',
      category: isArabic ? 'نصائح وقائية' : 'Prevention Tips',
      date: isArabic ? '25 مايو 2024' : 'May 25, 2024',
      author: isArabic ? 'م. سارة الزهراني' : 'Eng. Sarah Al-Zahrani',
      readTime: isArabic ? '8 دقائق' : '8 min read',
      views: '720'
    },
    {
      id: 15,
      title: isArabic ? 'كيف تختار شركة مكافحة حشرات موثوقة؟' : 'How to Choose Reliable Pest Control Company?',
      excerpt: isArabic ? 'معايير أساسية لاختيار شركة مكافحة حشرات محترفة وموثوقة' : 'Essential criteria for choosing professional and reliable pest control company',
      image: '/images/Professional-pest-control.jpg',
      category: isArabic ? 'التشخيص' : 'Diagnosis',
      date: isArabic ? '10 مايو 2024' : 'May 10, 2024',
      author: isArabic ? 'د. أحمد العمراني' : 'Dr. Ahmed Al-Omrani',
      readTime: isArabic ? '10 دقائق' : '10 min read',
      views: '2.3K'
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

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let filtered = allBlogPosts;

    // Filter by category
    if (selectedCategory !== (isArabic ? 'جميع المقالات' : 'All Articles')) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, isArabic]);

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
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
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                {isArabic ? 'لا توجد مقالات مطابقة لبحثك' : 'No articles match your search'}
              </p>
            </div>
          ) : (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
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

              {/* Results Count */}
              <div className="mt-8 text-center text-gray-600">
                {isArabic 
                  ? `عرض ${filteredPosts.length} من ${allBlogPosts.length} مقال`
                  : `Showing ${filteredPosts.length} of ${allBlogPosts.length} articles`
                }
              </div>
            </>
          )}
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
