'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Home, 
  Search, 
  ArrowRight,
  ArrowLeft,
  Bug,
  MessageCircle,
  Phone
} from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink } from '@/lib/utils';

export default function NotFoundPage() {
  const params = useParams();
  const locale = params?.locale as string || 'ar';
  const isArabic = locale === 'ar';
  const rtl = isArabic;

  const popularPages = isArabic ? [
    { href: '/', label: 'الصفحة الرئيسية' },
    { href: '/services', label: 'خدماتنا' },
    { href: '/services/cockroach-control-jeddah', label: 'مكافحة الصراصير' },
    { href: '/jeddah', label: 'مناطق جدة' },
    { href: '/contact', label: 'اتصل بنا' },
  ] : [
    { href: '/en', label: 'Home Page' },
    { href: '/en/services', label: 'Our Services' },
    { href: '/en/services/cockroach-control-jeddah', label: 'Cockroach Control' },
    { href: '/en/jeddah', label: 'Jeddah Areas' },
    { href: '/en/contact', label: 'Contact Us' },
  ];

  const whatsappMessage = isArabic 
    ? 'مرحبا، لم أتمكن من العثور على الصفحة التي أبحث عنها'
    : 'Hello, I couldn\'t find the page I was looking for';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-gray-200 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Bug className="w-24 h-24 text-primary animate-pulse" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {isArabic ? 'عذراً، لم نعثر على هذه الصفحة!' : 'Sorry, we couldn\'t find this page!'}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          {isArabic 
            ? 'قد تكون الصفحة محذوفة أو تم تغيير رابطها. لا تقلق، يمكننا مساعدتك في العثور على ما تبحث عنه.'
            : 'The page might be deleted or its link changed. Don\'t worry, we can help you find what you\'re looking for.'
          }
        </p>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={isArabic ? '/' : '/en'}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Home size={20} />
            {isArabic ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
          
          <Link
            href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            {isArabic ? 'تحدث معنا' : 'Chat with Us'}
          </Link>

          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            {isArabic ? 'اتصل بنا' : 'Call Us'}
          </a>
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isArabic ? 'الصفحات الأكثر زيارة' : 'Most Visited Pages'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-primary/10 rounded-lg transition-colors group"
              >
                <span className="text-gray-700 group-hover:text-primary font-medium">
                  {page.label}
                </span>
                {rtl ? 
                  <ArrowLeft size={16} className="text-gray-400 group-hover:text-primary" /> :
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-primary" />
                }
              </Link>
            ))}
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            {isArabic ? 'أو يمكنك البحث عن خدمة محددة:' : 'Or you can search for a specific service:'}
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder={isArabic ? 'ابحث عن خدمة...' : 'Search for a service...'}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Language Switch */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            {isArabic ? 'هل تريد تصفح الموقع بالإنجليزية؟' : 'Want to browse the site in Arabic?'}
          </p>
          <Link
            href={isArabic ? '/en' : '/'}
            className="text-primary hover:underline font-semibold"
          >
            {isArabic ? 'Switch to English' : 'التبديل للعربية'}
          </Link>
        </div>
      </div>
    </div>
  );
}
