/**
 * JSON-LD Structured Data Utilities for Local SEO
 * Reinforces locality for Google Search/Images/Maps and AI Overviews
 */

// Jeddah coordinates (source: latlong.net)
export const JEDDAH = {
  nameAr: "جدة",
  nameEn: "Jeddah",
  lat: 21.492500,
  lon: 39.177570
};

/**
 * ImageObject with GEO location for enhanced local SEO
 * Use this for key service images to reinforce location context
 */
export interface ImageLDProps {
  url: string;
  lat?: number;
  lon?: number;
  caption?: string;
  width?: number;
  height?: number;
}

export const imageLD = ({
  url,
  lat = JEDDAH.lat,
  lon = JEDDAH.lon,
  caption,
  width = 1200,
  height = 630
}: ImageLDProps) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": url,
  "caption": caption,
  "width": width,
  "height": height,
  "contentLocation": {
    "@type": "Place",
    "name": "Jeddah",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jeddah",
      "addressRegion": "Makkah Province",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": lat,
      "longitude": lon
    }
  },
  "representativeOfPage": true
});

/**
 * VideoObject with GEO location for enhanced local SEO
 */
export interface VideoLDProps {
  name: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  uploadDate: string;
  lat?: number;
  lon?: number;
  duration?: string; // ISO 8601 format, e.g., "PT1M30S"
}

export const videoLD = ({
  name,
  description,
  url,
  thumbnailUrl,
  uploadDate,
  lat = JEDDAH.lat,
  lon = JEDDAH.lon,
  duration
}: VideoLDProps) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": name,
  "description": description,
  "thumbnailUrl": thumbnailUrl,
  "contentUrl": url,
  "uploadDate": uploadDate,
  "duration": duration,
  "contentLocation": {
    "@type": "Place",
    "name": "Jeddah",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jeddah",
      "addressRegion": "Makkah Province",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": lat,
      "longitude": lon
    }
  }
});

/**
 * LocalBusiness with Service schema for area pages
 * Combines LocalBusiness with Service to maximize local signals
 */
export interface LocalBusinessServiceLDProps {
  serviceName: string;
  serviceNameAr: string;
  description: string;
  descriptionAr: string;
  areaName?: string;
  areaNameAr?: string;
  lat?: number;
  lon?: number;
  image?: string;
}

export const localBusinessServiceLD = ({
  serviceName,
  serviceNameAr,
  description,
  descriptionAr,
  areaName,
  areaNameAr,
  lat = JEDDAH.lat,
  lon = JEDDAH.lon,
  image
}: LocalBusinessServiceLDProps) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `شركة الأسطورة لمكافحة الحشرات - ${areaNameAr || 'جدة'}`,
  "alternateName": `Al-Ustora Pest Control - ${areaName || 'Jeddah'}`,
  "description": descriptionAr,
  "image": image,
  "telephone": "+966537887711",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": areaName || "Jeddah",
    "addressRegion": "Makkah Province",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": lat,
    "longitude": lon
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "City",
    "name": areaName || "Jeddah",
    "alternateName": areaNameAr || "جدة"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pest Control Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName,
          "alternateName": serviceNameAr,
          "description": description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "شركة الأسطورة لمكافحة الحشرات"
          },
          "areaServed": {
            "@type": "City",
            "name": areaName || "Jeddah"
          }
        }
      }
    ]
  }
});

/**
 * Service schema for service pages with GEO context
 */
export interface ServiceLDProps {
  serviceName: string;
  serviceNameAr: string;
  description: string;
  descriptionAr: string;
  lat?: number;
  lon?: number;
  image?: string;
}

export const serviceLD = ({
  serviceName,
  serviceNameAr,
  description,
  descriptionAr,
  lat = JEDDAH.lat,
  lon = JEDDAH.lon,
  image
}: ServiceLDProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceNameAr,
  "alternateName": serviceName,
  "description": descriptionAr,
  "image": image,
  "serviceType": "Pest Control",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://pestjeddah.com/#organization",
    "name": "شركة الأسطورة لمكافحة الحشرات",
    "alternateName": "Al-Ustora Pest Control",
    "telephone": "+966537887711"
  },
  "areaServed": {
    "@type": "City",
    "name": "Jeddah",
    "alternateName": "جدة",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": lat,
      "longitude": lon
    }
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceLocation": {
      "@type": "Place",
      "name": "Jeddah",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": lat,
        "longitude": lon
      }
    }
  }
});

/**
 * Helper to inject JSON-LD script into page head
 * Usage: <script type="application/ld+json" dangerouslySetInnerHTML={injectJsonLd(imageLD({...}))} />
 */
export const injectJsonLd = (data: any) => ({
  __html: JSON.stringify(data)
});

