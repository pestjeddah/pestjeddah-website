import { NextResponse } from 'next/server';
import { siteConfig } from '@/app/config/site';

export async function GET() {
  const baseUrl = 'https://www.pestjeddah.com';
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Home Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en" />
  </url>
  <url>
    <loc>${baseUrl}/en</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en" />
  </url>

  <!-- Services Hub -->
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/services" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/services" />
  </url>
  <url>
    <loc>${baseUrl}/en/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/services" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/services" />
  </url>

  <!-- Individual Service Pages -->
  ${siteConfig.services.map(service => `
  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/services/${service}" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/services/${service}" />
  </url>
  <url>
    <loc>${baseUrl}/en/services/${service}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/services/${service}" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/services/${service}" />
  </url>`).join('')}

  <!-- Areas Hub -->
  <url>
    <loc>${baseUrl}/jeddah</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/jeddah" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/jeddah" />
  </url>
  <url>
    <loc>${baseUrl}/en/jeddah</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/jeddah" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/jeddah" />
  </url>

  <!-- Individual Area Pages -->
  ${siteConfig.serviceAreas.map(area => `
  <url>
    <loc>${baseUrl}/jeddah/${area}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/jeddah/${area}" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/jeddah/${area}" />
  </url>
  <url>
    <loc>${baseUrl}/en/jeddah/${area}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/jeddah/${area}" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/jeddah/${area}" />
  </url>`).join('')}

  <!-- Other Pages -->
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/contact" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/contact" />
  </url>
  <url>
    <loc>${baseUrl}/en/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/contact" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/contact" />
  </url>

  <url>
    <loc>${baseUrl}/sectors</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/sectors" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/sectors" />
  </url>
  <url>
    <loc>${baseUrl}/en/sectors</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/sectors" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/sectors" />
  </url>

  <url>
    <loc>${baseUrl}/offers-contracts</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/offers-contracts" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/offers-contracts" />
  </url>
  <url>
    <loc>${baseUrl}/en/offers-contracts</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="ar-SA" href="${baseUrl}/offers-contracts" />
    <xhtml:link rel="alternate" hreflang="en-SA" href="${baseUrl}/en/offers-contracts" />
  </url>

</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}



