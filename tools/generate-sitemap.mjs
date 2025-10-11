#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://fallcontech.com'

const routes = [
  '/',
  '/services',
  '/work',
  '/about',
  '/pricing',
  '/resources',
  '/contact',
  '/case-study/clinic',
  '/case-study/telimanshare',
  '/case-study/whatsapp',
  '/case-study/miroir-foncier',
  '/article/booking-system-clinics-dakar',
  '/article/automating-follow-ups-whatsapp-senegal',
  '/article/idea-to-mvp-2-weeks',
  '/article/seo-basics-senegalese-businesses',
  '/article/why-mobile-first-design-matters-africa',
  '/article/choosing-right-tech-stack',
]

const now = new Date().toISOString()
const urls = routes.map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${p === '/' ? '1.0' : '0.7'}</priority>\n  </url>`).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

// Prefer writing into the final output directory used by Vite (dist)
const outDir = existsSync(resolve('dist')) ? 'dist' : 'public'
mkdirSync(resolve(outDir), { recursive: true })
writeFileSync(resolve(`${outDir}/sitemap.xml`), xml)
console.log(`Sitemap generated at ${outDir}/sitemap.xml with base`, SITE_URL)
