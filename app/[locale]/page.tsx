import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

import { HeroSlideshow } from '@/components/sections/HeroSlideshow';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
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
      ? 'شركة مكافحة حشرات بجدة — شركة الأسطورة | رش مبيدات مرخّص 24/7'
      : 'Pest Control Company in Jeddah — Al-Ustora | Licensed Pest Control 24/7',
    description: isArabic
      ? 'شركة الأسطورة لمكافحة الحشرات بجدة - خدمة فورية 24/7، مرخصة ومضمونة لجميع أنواع الحشرات والقوارض. فحص مجاني واستجابة سريعة.'
      : 'Al-Ustora Pest Control Company in Jeddah - Immediate service 24/7, licensed and guaranteed for all types of insects and rodents. Free inspection and quick response.',
    keywords: isArabic 
      ? ['مكافحة حشرات جدة', 'شركة رش مبيدات', 'مكافحة النمل الأبيض', 'مكافحة الصراصير', 'مكافحة بق الفراش', 'شركة الأسطورة']
      : ['pest control jeddah', 'exterminator jeddah', 'bed bug treatment', 'termite control', 'cockroach control', 'al-ustora'],
    openGraph: {
      title: isArabic 
        ? 'شركة مكافحة حشرات بجدة — شركة الأسطورة'
        : 'Pest Control Company in Jeddah — Al-Ustora',
      description: isArabic
        ? 'خدمة فورية 24/7، مرخصة ومضمونة لجميع أنواع الحشرات والقوارض'
        : 'Immediate service 24/7, licensed and guaranteed for all types of insects and rodents',
      images: [
        {
          url: '/images/Pest-control-Jeddah.jpg',
          width: 1200,
          height: 630,
          alt: isArabic ? 'شركة مكافحة حشرات بجدة' : 'Pest Control Company in Jeddah',
        },
      ],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <SchemaInjector type="home" />
    </>
  );
}



