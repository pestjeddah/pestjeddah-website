'use client';

import { useLocale } from 'next-intl';
import Script from 'next/script';

import { siteConfig } from '@/app/config/site';
import { JEDDAH } from '@/lib/jsonld';

type SchemaType = 'home' | 'service' | 'article' | 'faq' | 'image' | 'video' | 'localService';

interface SchemaInjectorProps {
  type: SchemaType;
  data?: any;
}

export function SchemaInjector({ type, data }: SchemaInjectorProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const generateSchema = () => {
    const baseUrl = 'https://pestjeddah.com';
    
    switch (type) {
      case 'home':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: isArabic ? siteConfig.name : siteConfig.nameEn,
          description: isArabic ? siteConfig.description : siteConfig.descriptionEn,
          url: baseUrl,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: isArabic ? siteConfig.address.street : siteConfig.address.streetEn,
            addressLocality: isArabic ? siteConfig.address.city : siteConfig.address.cityEn,
            addressRegion: isArabic ? siteConfig.address.province : siteConfig.address.provinceEn,
            addressCountry: isArabic ? siteConfig.address.country : siteConfig.address.countryEn,
            postalCode: siteConfig.address.postalCode
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.address.coordinates.lat,
            longitude: siteConfig.address.coordinates.lng
          },
          areaServed: [
            {
              '@type': 'City',
              name: isArabic ? 'جدة' : 'Jeddah'
            }
          ],
          serviceType: isArabic ? 'مكافحة الحشرات' : 'Pest Control',
          priceRange: '$$',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
          },
          sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.twitter,
            siteConfig.social.instagram
          ]
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data?.title || (isArabic ? 'خدمة مكافحة الحشرات' : 'Pest Control Service'),
          description: data?.description || (isArabic ? siteConfig.description : siteConfig.descriptionEn),
          provider: {
            '@type': 'LocalBusiness',
            name: isArabic ? siteConfig.name : siteConfig.nameEn,
            telephone: siteConfig.phone,
            url: baseUrl
          },
          areaServed: {
            '@type': 'City',
            name: isArabic ? 'جدة' : 'Jeddah'
          },
          serviceType: data?.serviceType || (isArabic ? 'مكافحة الحشرات' : 'Pest Control')
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.questions?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })) || []
        };

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data?.title,
          description: data?.description,
          author: {
            '@type': 'Organization',
            name: isArabic ? siteConfig.name : siteConfig.nameEn
          },
          publisher: {
            '@type': 'Organization',
            name: isArabic ? siteConfig.name : siteConfig.nameEn,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/images/logo.jpg`
            }
          },
          datePublished: data?.publishedAt,
          dateModified: data?.updatedAt || data?.publishedAt
        };

      case 'image':
        return {
          '@context': 'https://schema.org',
          '@type': 'ImageObject',
          contentUrl: data?.url || data?.image,
          caption: data?.caption,
          width: data?.width || 1200,
          height: data?.height || 630,
          contentLocation: {
            '@type': 'Place',
            name: data?.locationName || 'Jeddah',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jeddah',
              addressRegion: 'Makkah Province',
              addressCountry: 'SA'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: data?.lat || JEDDAH.lat,
              longitude: data?.lon || JEDDAH.lon
            }
          },
          representativeOfPage: data?.representativeOfPage !== false
        };

      case 'video':
        return {
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: data?.name || data?.title,
          description: data?.description,
          thumbnailUrl: data?.thumbnailUrl || data?.thumbnail,
          contentUrl: data?.url || data?.contentUrl,
          uploadDate: data?.uploadDate,
          duration: data?.duration,
          contentLocation: {
            '@type': 'Place',
            name: data?.locationName || 'Jeddah',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jeddah',
              addressRegion: 'Makkah Province',
              addressCountry: 'SA'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: data?.lat || JEDDAH.lat,
              longitude: data?.lon || JEDDAH.lon
            }
          }
        };

      case 'localService':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: data?.nameAr || `${isArabic ? siteConfig.name : siteConfig.nameEn} - ${data?.areaNameAr || 'جدة'}`,
          alternateName: data?.nameEn || `${isArabic ? siteConfig.nameEn : siteConfig.name} - ${data?.areaName || 'Jeddah'}`,
          description: data?.descriptionAr || (isArabic ? siteConfig.description : siteConfig.descriptionEn),
          image: data?.image,
          telephone: siteConfig.phone,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            addressLocality: data?.areaName || 'Jeddah',
            addressRegion: 'Makkah Province',
            addressCountry: 'SA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: data?.lat || JEDDAH.lat,
            longitude: data?.lon || JEDDAH.lon
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59'
          },
          areaServed: {
            '@type': 'City',
            name: data?.areaName || 'Jeddah',
            alternateName: data?.areaNameAr || 'جدة'
          },
          hasOfferCatalog: data?.serviceName ? {
            '@type': 'OfferCatalog',
            name: isArabic ? 'خدمات مكافحة الحشرات' : 'Pest Control Services',
            itemListElement: [{
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: data?.serviceName,
                alternateName: data?.serviceNameAr,
                description: data?.serviceDescription,
                provider: {
                  '@type': 'LocalBusiness',
                  name: isArabic ? siteConfig.name : siteConfig.nameEn
                },
                areaServed: {
                  '@type': 'City',
                  name: data?.areaName || 'Jeddah'
                }
              }
            }]
          } : undefined
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}



