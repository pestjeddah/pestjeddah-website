'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Shield, Clock, Award, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

import { siteConfig } from '@/app/config/site';
import { createWhatsAppLink, cn, isRTL } from '@/lib/utils';

const heroImages = [
  {
    src: '/images/Professional-pest-control.jpg',
    altAr: 'شركة مكافحة حشرات محترفة بجدة',
    altEn: 'Professional pest control company in Jeddah'
  },
  {
    src: '/images/Eco-friendly-pest-control.jpg',
    altAr: 'مكافحة حشرات صديقة للبيئة',
    altEn: 'Eco-friendly pest control'
  },
  {
    src: '/images/Safe-pest-control.jpg',
    altAr: 'مكافحة حشرات آمنة وموثوقة',
    altEn: 'Safe and reliable pest control'
  },
  {
    src: '/images/Licensed-pest-control.jpg',
    altAr: 'شركة مكافحة حشرات مرخصة',
    altEn: 'Licensed pest control company'
  }
];

export function HeroSlideshow() {
  const t = useTranslations();
  const locale = useLocale();
  const rtl = isRTL(locale);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const whatsappMessage = locale === 'ar' 
    ? 'مرحبا، أريد الحصول على خدمة فورية لمكافحة الحشرات'
    : 'Hello, I want immediate pest control service';

  const trustBadges = [
    {
      icon: Shield,
      text: t('hero.trustBadges.licensed'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Award,
      text: t('hero.trustBadges.experienced'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Clock,
      text: t('hero.trustBadges.available'),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: CheckCircle,
      text: t('hero.trustBadges.guarantee'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-green-50 min-h-[85vh] flex items-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className={cn("space-y-8", rtl && "lg:order-2")}>
            <div className="space-y-6 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4" />
                <span>{locale === 'ar' ? 'الأفضل في جدة منذ 2010' : 'Best in Jeddah since 2010'}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">
                  {t('hero.title')}
                </span>
                <span className="block text-primary mt-2">
                  {locale === 'ar' ? 'خدمة احترافية 24/7' : 'Professional Service 24/7'}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: locale === 'ar' ? 'مرخص ومضمون' : 'Licensed & Guaranteed' },
                  { icon: Clock, text: locale === 'ar' ? 'استجابة سريعة' : 'Fast Response' },
                  { icon: Award, text: locale === 'ar' ? 'خبرة +10 سنوات' : '+10 Years Experience' },
                  { icon: CheckCircle, text: locale === 'ar' ? 'مواد آمنة' : 'Safe Materials' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={cn("flex flex-col sm:flex-row gap-4", rtl && "sm:flex-row-reverse")}>
              <Link
                href={createWhatsAppLink(siteConfig.whatsapp, whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-5 rounded-xl",
                  "flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105",
                  "ring-2 ring-green-600 ring-offset-2"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <MessageCircle size={26} className="relative z-10 animate-pulse flex-shrink-0" />
                <span className="relative z-10 font-extrabold text-white tracking-wide">{t('hero.cta')}</span>
              </Link>
              
              <Link
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  "group relative overflow-hidden bg-white hover:bg-gray-50 text-primary border-2 border-primary text-lg px-8 py-5 rounded-xl",
                  "flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                )}
              >
                <Phone size={26} className="group-hover:animate-pulse flex-shrink-0" />
                <span className="font-extrabold tracking-wide">{t('hero.ctaSecondary')}</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col items-center text-center p-4 rounded-xl shadow-sm border border-gray-100",
                    badge.bgColor,
                    "hover:shadow-md transition-all duration-300 transform hover:scale-105"
                  )}
                >
                  <badge.icon className={`w-8 h-8 mb-2 ${badge.color}`} />
                  <span className="text-xs md:text-sm font-medium text-gray-700">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="relative overflow-hidden bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-4 shadow-md">
              <div className="absolute inset-0 bg-red-100/20 animate-pulse"></div>
              <div className={cn("flex items-center gap-3 relative z-10", rtl && "flex-row-reverse")}>
                <div className="relative">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-red-700 font-bold">
                  {locale === 'ar' 
                    ? '🚨 خدمة طوارئ متاحة الآن - استجابة فورية خلال 30 دقيقة'
                    : '🚨 Emergency service available now - Immediate response within 30 minutes'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Image Slideshow Side */}
          <div className={cn("relative", rtl && "lg:order-1")}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Images */}
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-in-out",
                    currentSlide === index 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-110"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={locale === 'ar' ? image.altAr : image.altEn}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-20",
                  rtl ? "right-4" : "left-4"
                )}
                aria-label="Previous slide"
              >
                {rtl ? <ChevronRight size={24} className="text-gray-800" /> : <ChevronLeft size={24} className="text-gray-800" />}
              </button>
              <button
                onClick={nextSlide}
                className={cn(
                  "absolute top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-20",
                  rtl ? "left-4" : "right-4"
                )}
                aria-label="Next slide"
              >
                {rtl ? <ChevronLeft size={24} className="text-gray-800" /> : <ChevronRight size={24} className="text-gray-800" />}
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "transition-all duration-300 rounded-full",
                      currentSlide === index 
                        ? "w-8 h-3 bg-white" 
                        : "w-3 h-3 bg-white/50 hover:bg-white/75"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* License Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-10 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t('common.licensed')}</p>
                    <p className="text-xs text-gray-600">{siteConfig.license.number}</p>
                  </div>
                </div>
              </div>

              {/* 24/7 Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-br from-green-500 to-green-600 backdrop-blur-sm rounded-xl p-4 shadow-lg z-10 transform hover:scale-105 transition-transform">
                <div className="text-center text-white">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-xs font-medium">{t('common.available247')}</p>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse delay-75"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

