import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pestjeddah.com';
  
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
    '/sectors/commercial',
    '/sectors/residential',
    '/sectors/restaurants',
    '/offers-contracts',
    '/jeddah',
    '/jeddah/al-hamra',
    '/jeddah/al-rawdah',
    '/jeddah/al-shatee',
    '/jeddah/al-shati',
    '/jeddah/al-salamah',
    '/jeddah/al-salama',
    '/jeddah/al-naeem',
    '/jeddah/al-naseem',
    '/jeddah/al-marjan',
    '/jeddah/al-murjan',
    '/jeddah/obhur-north',
    '/jeddah/obhur-south',
    '/jeddah/al-aziziyah',
    '/jeddah/al-bawadi',
    '/jeddah/al-hamdaniya',
    '/jeddah/al-hamdaniyah',
    '/blog',
    '/blog/1',
    '/blog/2',
    '/blog/3',
    '/blog/4',
    '/blog/5',
    '/blog/6',
    '/blog/7',
    '/blog/8',
    '/blog/9',
    '/blog/10',
    '/blog/11',
    '/blog/12',
    '/blog/13',
    '/blog/14',
    '/blog/15',
    '/contact',
    '/contact/thank-you'
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

