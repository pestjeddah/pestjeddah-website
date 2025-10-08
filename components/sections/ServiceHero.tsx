'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, CheckCircle, Shield, Clock, Award, Star } from 'lucide-react';
import { cn, isRTL } from '@/lib/utils';

interface ServiceHeroProps {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  imageAlt: string;
  imageAltEn?: string;
  whatsappMessage: string;
  phone: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  featuresText?: string[];
  bgGradient?: string;
}

export function ServiceHero({
  title,
  titleEn,
  description,
  descriptionEn,
  image,
  imageAlt,
  imageAltEn,
  whatsappMessage,
  phone,
  breadcrumbs,
  featuresText,
  bgGradient = 'from-blue-50 via-white to-green-50'
}: ServiceHeroProps) {
  const locale = useLocale();
  const rtl = isRTL(locale);
  const isArabic = locale === 'ar';

  const defaultFeaturesText = featuresText || [
    isArabic ? 'فحص مجاني' : 'Free Inspection',
    isArabic ? 'ضمان 6 أشهر' : '6 Months Warranty',
    isArabic ? 'خدمة سريعة' : 'Fast Service',
    isArabic ? 'فريق محترف' : 'Professional Team'
  ];

  const featureIcons = [CheckCircle, Shield, Clock, Award];

  return (
    <>
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className={cn("flex items-center text-sm text-gray-600", rtl && "flex-row-reverse")}>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className={cn("flex items-center", rtl && "flex-row-reverse")}>
                  {index > 0 && (
                    <span className={cn("mx-2 text-gray-400", rtl && "rotate-180")}>
                      {rtl ? '←' : '→'}
                    </span>
                  )}
                  <Link 
                    href={crumb.href} 
                    className={cn(
                      "hover:text-primary transition-colors",
                      index === breadcrumbs.length - 1 && "text-gray-900 font-medium"
                    )}
                  >
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={cn("relative py-16 md:py-20 bg-gradient-to-br", bgGradient, "overflow-hidden")}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className={cn("space-y-6 md:space-y-8", rtl && "lg:order-2")}>
              {/* Service Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
                <Star className="w-4 h-4 fill-current" />
                <span>{isArabic ? 'خدمة متخصصة' : 'Specialized Service'}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                {isArabic ? title : (titleEn || title)}
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-75">
                {isArabic ? description : (descriptionEn || description)}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 py-4">
                {defaultFeaturesText.map((featureText, idx) => {
                  const Icon = featureIcons[idx % featureIcons.length];
                  return (
                    <div 
                      key={idx}
                      className={cn(
                        "flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100",
                        "hover:shadow-md hover:border-primary/20 transition-all duration-300 transform hover:scale-105",
                        "animate-fade-in-up"
                      )}
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{featureText}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className={cn("flex flex-col sm:flex-row gap-4 pt-4", rtl && "sm:flex-row-reverse")}>
                <Link
                  href={`https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-xl",
                    "flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <MessageCircle size={24} className="relative z-10 group-hover:animate-pulse" />
                  <span className="relative z-10 font-bold">
                    {isArabic ? 'احجز الآن عبر واتساب' : 'Book Now via WhatsApp'}
                  </span>
                </Link>
                
                <Link
                  href={`tel:${phone}`}
                  className={cn(
                    "group bg-white hover:bg-gray-50 text-primary border-2 border-primary text-lg px-8 py-4 rounded-xl",
                    "flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  )}
                >
                  <Phone size={24} className="group-hover:animate-pulse" />
                  <span className="font-bold">
                    {isArabic ? 'اتصل الآن' : 'Call Now'}
                  </span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-medium">{isArabic ? 'مرخص ومضمون' : 'Licensed & Guaranteed'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-medium">{isArabic ? 'تقييم 4.9/5' : 'Rating 4.9/5'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">{isArabic ? '+1000 عميل راضي' : '+1000 Happy Clients'}</span>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className={cn("relative", rtl && "lg:order-1")}>
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={image}
                  alt={isArabic ? imageAlt : (imageAltEn || imageAlt)}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating Badge - Top */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                      <Shield className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        {isArabic ? 'شركة مرخصة' : 'Licensed Company'}
                      </p>
                      <p className="text-xs text-gray-600">{isArabic ? 'جودة معتمدة' : 'Certified Quality'}</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge - Bottom */}
                <div className="absolute bottom-6 right-6 bg-gradient-to-br from-green-500 to-green-600 backdrop-blur-md rounded-2xl p-4 shadow-xl text-white transform hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-5 h-5" />
                      <p className="text-2xl font-bold">24/7</p>
                    </div>
                    <p className="text-xs font-medium opacity-90">
                      {isArabic ? 'متاح دائماً' : 'Always Available'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-56 h-56 bg-green-500/20 rounded-full blur-2xl animate-pulse delay-75"></div>
              
              {/* Stats Cards - Floating */}
              <div className={cn(
                "absolute -bottom-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs transform hover:scale-105 transition-transform",
                rtl ? "-right-8" : "-left-8"
              )}>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">6</p>
                    <p className="text-xs text-gray-600">{isArabic ? 'أشهر ضمان' : 'Months Warranty'}</p>
                  </div>
                  <div className="border-x border-gray-200">
                    <p className="text-2xl font-bold text-green-600">30</p>
                    <p className="text-xs text-gray-600">{isArabic ? 'دقيقة وصول' : 'Min Response'}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">100%</p>
                    <p className="text-xs text-gray-600">{isArabic ? 'آمن' : 'Safe'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

