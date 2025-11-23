/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml with current timestamp for change detection
 */

const BASE_URL = 'https://oneworldonefamilymeditation.com'

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: string
}

const routes: SitemapUrl[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'always', // Home page with MantraClock changes every minute
    priority: '1.0',
  },
  {
    loc: '/about',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    loc: '/schedule',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '0.9',
  },
  {
    loc: '/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7',
  },
]

export const generateSitemap = (): string => {
  const currentDate = new Date().toISOString()
  
  const urls = routes.map(route => {
    // Update lastmod to current time for dynamic content
    const lastmod = route.changefreq === 'always' 
      ? currentDate 
      : route.lastmod

    return `  <url>
    <loc>${BASE_URL}${route.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

// For server-side generation
export const getSitemapHeaders = () => {
  return {
    'Content-Type': 'application/xml',
    'Cache-Control': 'no-cache, no-store, must-revalidate', // Force revalidation
    'Last-Modified': new Date().toUTCString(),
  }
}

