/**
 * Vercel Serverless Function to serve dynamic sitemap.xml
 * This updates every time it's requested, perfect for change detection testing
 * 
 * Access at: https://oneworldonefamilymeditation.com/sitemap.xml
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const BASE_URL = 'https://oneworldonefamilymeditation.com'
  const currentDate = new Date().toISOString()
  const currentMinute = new Date().getMinutes()
  
  // Generate ETag based on current minute (changes every minute for testing)
  const etag = `"sitemap-${currentMinute}-${Date.now()}"`
  
  const routes = [
    {
      loc: '/',
      lastmod: currentDate,
      changefreq: 'always', // Home page with MantraClock changes every minute
      priority: '1.0',
    },
    {
      loc: '/about',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      loc: '/schedule',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      loc: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7',
    },
  ]

  const urls = routes.map(route => {
    return `  <url>
    <loc>${BASE_URL}${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  }).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  // Set headers for proper ETag and change detection
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  res.setHeader('ETag', etag)
  res.setHeader('Last-Modified', new Date().toUTCString())
  
  // Check if client sent If-None-Match header (ETag validation)
  const ifNoneMatch = req.headers['if-none-match']
  if (ifNoneMatch === etag) {
    return res.status(304).end() // Not Modified
  }
  
  res.status(200).send(sitemap)
}

