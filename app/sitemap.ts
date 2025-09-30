import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pestjeddah.com';
  
  // Base pages for both languages
  const pages = [
    '',
    '/services',
    '/services/cockroach-control-jeddah',
    '/services/bed-bugs-treatment-jeddah', 
    '/services/termites-control-jeddah',
    '/services/ants-control-jeddah',
    '/services/rodents-control-jeddah',
    '/services/mosquitoes-flies-control-jeddah',
    '/services/fumigation-disinfection',
    '/services/annual-contracts',
    '/sectors',
    '/offers-contracts',
    '/jeddah',
    '/jeddah/al-hamra',
    '/jeddah/al-rawdah',
    '/jeddah/al-shatee',
    '/jeddah/al-salamah',
    '/jeddah/al-naeem',
    '/jeddah/al-marjan',
    '/jeddah/obhur-north',
    '/jeddah/obhur-south',
    '/jeddah/al-aziziyah',
    '/blog',
    '/blog/1',
    '/contact'
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add Arabic pages (default, no prefix)
  pages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: page === '' ? 1 : page.includes('/services/') ? 0.8 : 0.7,
      alternates: {
        languages: {
          'ar': `${baseUrl}${page}`,
          'en': `${baseUrl}/en${page}`
        }
      }
    });
  });

  // Add English pages (with /en prefix)
  pages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}/en${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: page === '' ? 0.9 : page.includes('/services/') ? 0.7 : 0.6,
      alternates: {
        languages: {
          'ar': `${baseUrl}${page}`,
          'en': `${baseUrl}/en${page}`
        }
      }
    });
  });

  return sitemap;
}

