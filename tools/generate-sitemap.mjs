#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://fallcontech.com'

// Try to auto‑extract routes from src/App.jsx to avoid manual drift
import { readFileSync } from 'node:fs'
let extracted = []
try {
  const app = readFileSync('src/App.jsx', 'utf8')
  const re = /<Route\s+path=\"([^\"]+)\"/g
  const set = new Set()
  let m
  while ((m = re.exec(app))) {
    let p = m[1]
    if (!p) continue
    // normalize
    if (!p.startsWith('/')) p = '/' + p
    // skip duplicates
    set.add(p)
  }
  extracted = Array.from(set)
} catch (e) {
  console.warn('[sitemap] Could not read src/App.jsx, falling back to defaults. Reason:', e?.message || e)
}

const defaultRoutes = [
  '/',
  '/services',
  '/work',
  '/about',
  '/pricing',
  '/resources',
  '/contact',
]

const routes = Array.from(new Set([...(extracted.length ? extracted : []), ...defaultRoutes]))
  // Always include home
  .concat(['/'])
  // unique again
  .filter((v, i, a) => a.indexOf(v) === i)
  // sort with home first
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))

const now = new Date().toISOString()
const urls = routes.map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${p === '/' ? '1.0' : '0.7'}</priority>\n  </url>`).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

// Prefer writing into the final output directory used by Vite (dist)
const outDir = existsSync(resolve('dist')) ? 'dist' : 'public'
mkdirSync(resolve(outDir), { recursive: true })
writeFileSync(resolve(`${outDir}/sitemap.xml`), xml)
console.log(`Sitemap generated at ${outDir}/sitemap.xml with base`, SITE_URL)
