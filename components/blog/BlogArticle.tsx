'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowRight, ArrowLeft, Share2, BookOpen, TrendingUp } from 'lucide-react';
import { cn, isRTL } from '@/lib/utils';
import { ReactNode } from 'react';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface RelatedArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

interface BlogArticleProps {
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  date: string;
  readTime: string;
  author: string;
  authorEn?: string;
  featuredImage: string;
  featuredImageAlt: string;
  children: ReactNode;
  tableOfContents?: TableOfContentsItem[];
  relatedArticles?: RelatedArticle[];
  ctaTitle?: string;
  ctaDescription?: string;
  wordCount?: number;
}

export function BlogArticle({
  title,
  titleEn,
  category,
  categoryEn,
  date,
  readTime,
  author,
  authorEn,
  featuredImage,
  featuredImageAlt,
  children,
  tableOfContents,
  relatedArticles,
  ctaTitle,
  ctaDescription,
  wordCount
}: BlogArticleProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const rtl = isRTL(locale);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <nav className={cn("flex items-center text-sm text-gray-600", rtl && "flex-row-reverse")}>
            <Link href={locale === 'ar' ? '/' : '/en'} className="hover:text-primary transition-colors">
              {isArabic ? 'الرئيسية' : 'Home'}
            </Link>
            <span className={cn("mx-2 text-gray-400", rtl && "rotate-180")}>
              {rtl ? '←' : '→'}
            </span>
            <Link href={locale === 'ar' ? '/blog' : '/en/blog'} className="hover:text-primary transition-colors">
              {isArabic ? 'المدونة' : 'Blog'}
            </Link>
            <span className={cn("mx-2 text-gray-400", rtl && "rotate-180")}>
              {rtl ? '←' : '→'}
            </span>
            <span className="text-gray-900 font-medium line-clamp-1">
              {isArabic ? title : (titleEn || title)}
            </span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                  <BookOpen size={16} />
                  {isArabic ? category : (categoryEn || category)}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {isArabic ? title : (titleEn || title)}
              </h1>

              {/* Meta Information */}
              <div className={cn("flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 text-sm", rtl && "flex-row-reverse")}>
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span className="font-medium">{isArabic ? author : (authorEn || author)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>{readTime}</span>
                </div>
                {wordCount && (
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} className="text-primary" />
                    <span>{wordCount} {isArabic ? 'كلمة' : 'words'}</span>
                  </div>
                )}
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: isArabic ? title : (titleEn || title),
                        url: window.location.href
                      });
                    }
                  }}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors ml-auto"
                >
                  <Share2 size={18} />
                  <span className="font-medium">{isArabic ? 'مشاركة' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={featuredImage}
                alt={featuredImageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Table of Contents - Sidebar */}
              {tableOfContents && tableOfContents.length > 0 && (
                <div className="lg:col-span-3">
                  <div className="sticky top-24 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                      <BookOpen size={20} className="text-primary" />
                      {isArabic ? 'محتويات المقال' : 'Table of Contents'}
                    </h3>
                    <nav>
                      <ul className="space-y-2">
                        {tableOfContents.map((item, index) => (
                          <li key={index}>
                            <a
                              href={`#${item.id}`}
                              className={cn(
                                "block text-sm hover:text-primary transition-colors py-1",
                                item.level === 1 && "font-semibold text-gray-900",
                                item.level === 2 && "text-gray-700 pl-4",
                                item.level === 3 && "text-gray-600 pl-8"
                              )}
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}

              {/* Main Content */}
              <div className={cn(tableOfContents && tableOfContents.length > 0 ? "lg:col-span-9" : "lg:col-span-12")}>
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                  {children}
                </div>

                {/* CTA Section */}
                <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 via-blue-50 to-green-50 rounded-2xl border border-primary/20 shadow-lg">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      {ctaTitle || (isArabic ? 'هل تحتاج إلى مساعدة متخصصة؟' : 'Need Professional Help?')}
                    </h3>
                    <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
                      {ctaDescription || (isArabic 
                        ? 'فريقنا من الخبراء جاهز لمساعدتك على مدار الساعة. احصل على استشارة مجانية الآن!'
                        : 'Our expert team is ready to help you 24/7. Get a free consultation now!'
                      )}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href={locale === 'ar' ? '/contact' : '/en/contact'}
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                      >
                        {isArabic ? 'احجز الآن' : 'Book Now'}
                        {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                      </Link>
                      <Link
                        href={locale === 'ar' ? '/services' : '/en/services'}
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                      >
                        {isArabic ? 'تصفح خدماتنا' : 'Browse Services'}
                        {rtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                {relatedArticles && relatedArticles.length > 0 && (
                  <div className="mt-16">
                    <h3 className="text-3xl font-bold mb-8 text-gray-900">
                      {isArabic ? 'مقالات ذات صلة' : 'Related Articles'}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {relatedArticles.map((article) => (
                        <Link
                          key={article.id}
                          href={`${locale === 'ar' ? '/blog' : '/en/blog'}/${article.id}`}
                          className="group"
                        >
                          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-5">
                              <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                                {article.title}
                              </h4>
                              <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

