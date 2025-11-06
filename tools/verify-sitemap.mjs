#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://fallcontech.com'

function extractRoutesFromApp() {
  try {
    const app = readFileSync('src/App.jsx', 'utf8')
    const re = /<Route\s+path=\"([^\"]+)\"/g
    const set = new Set()
    let m
    while ((m = re.exec(app))) {
      let p = m[1]
      if (!p) continue
      if (!p.startsWith('/')) p = '/' + p
      set.add(p)
    }
    // Always include home
    set.add('/')
    return Array.from(set)
  } catch (e) {
    console.error('[verify-sitemap] Failed to read src/App.jsx:', e?.message || e)
    process.exit(1)
  }
}

function readSitemap() {
  const distPath = resolve('dist/sitemap.xml')
  const publicPath = resolve('public/sitemap.xml')
  const path = existsSync(distPath) ? distPath : (existsSync(publicPath) ? publicPath : null)
  if (!path) {
    console.error('[verify-sitemap] sitemap.xml not found in dist/ or public/. Run build first.')
    process.exit(1)
  }
  return { path, xml: readFileSync(path, 'utf8') }
}

const routes = extractRoutesFromApp()
const { path, xml } = readSitemap()

const missing = []
for (const r of routes) {
  const loc = `<loc>${SITE_URL}${r}</loc>`
  if (!xml.includes(loc)) {
    missing.push(r)
  }
}

if (missing.length) {
  console.error(`\n[verify-sitemap] Missing ${missing.length} route(s) in ${path}:`)
  for (const m of missing) console.error(' -', m)
  process.exit(2)
}

console.log(`[verify-sitemap] OK — ${routes.length} routes present in ${path}`)

