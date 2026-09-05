#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getSeoForPath } from "../src/data/seoData.js";
import { getAllGeoPages, geoSeoForPath } from "../src/data/geoData.js";
import { getAllProductPages, productSeoForPath } from "../src/data/products.js";

const SITE_URL =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  "https://fallcontech.com";

// 1. Extract Routes
let extracted = [];
try {
  const app = readFileSync("src/App.jsx", "utf8");
  const re = /<Route[^>]*\spath=["']([^"']+)["']/g;
  const set = new Set();
  let m;
  while ((m = re.exec(app))) {
    let p = m[1];
    if (!p) continue;
    if (!p.startsWith("/")) p = "/" + p;
    set.add(p);
  }
  extracted = Array.from(set);
  console.log(`[sitemap] Found ${extracted.length} routes in src/App.jsx`);
} catch (e) {
  console.warn("[sitemap] Could not read src/App.jsx, using defaults.", e.message);
}

const defaultRoutes = ["/", "/services", "/work", "/about", "/pricing", "/resources", "/contact"];

// Pages géo-compétences (16 pays × 20 compétences) issues des données
const geoRoutes = getAllGeoPages().map((p) => p.path);
console.log(`[sitemap] Found ${geoRoutes.length} geo-compétence pages in src/data/geoData.js`);

// Pages produit dédiées (une par matériel)
const productRoutes = getAllProductPages().map((p) => p.path);
console.log(`[sitemap] Found ${productRoutes.length} product pages in src/data/products.js`);

const routes = Array.from(
  new Set([...(extracted.length ? extracted : []), ...defaultRoutes, ...geoRoutes, ...productRoutes])
)
  .filter((p) => !p.includes(":"))
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

// 2. Priority & changefreq logic
function getMeta(p) {
  const productSeo = productSeoForPath(p);
  if (productSeo) {
    return { priority: productSeo.priority || "0.85", changefreq: productSeo.changefreq || "weekly" };
  }
  const geoSeo = geoSeoForPath(p);
  if (geoSeo) {
    return { priority: geoSeo.priority || "0.70", changefreq: "monthly" };
  }
  const seo = getSeoForPath(p);
  return {
    priority: seo.priority || "0.50",
    changefreq: seo.changefreq || "monthly",
  };
}

// 3. Generate Sitemap XML
const now = new Date().toISOString();
const urls = routes
  .map((p) => {
    const { priority, changefreq } = getMeta(p);
    return `  <url>
    <loc>${SITE_URL}${p}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>
`;

// 4. Generate robots.txt
const robotsTxt = `# Crawlers IA — accès complet (AEO)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Bytespider
Allow: /

# Tous les autres crawlers
User-agent: *
Allow: /
Disallow: /api/

# Priorité aux pages services
Allow: /services/
Allow: /article/
Allow: /case-study/

Sitemap: ${SITE_URL}/sitemap.xml
`;

// 5. Write files
const outDir = existsSync(resolve("dist")) ? "dist" : "public";
mkdirSync(resolve(outDir), { recursive: true });

writeFileSync(resolve(`${outDir}/sitemap.xml`), xml);
writeFileSync(resolve(`${outDir}/robots.txt`), robotsTxt);

console.log(`[SEO] Generated sitemap.xml and robots.txt in ${outDir} for ${routes.length} URLs.`);

// 6. IndexNow ping (Bing / Yandex / Seznam / Naver) — pages prioritaires à chaque build
const INDEXNOW_KEY_PATH = resolve("public/indexnow-key.txt");
if (existsSync(INDEXNOW_KEY_PATH)) {
  const key = readFileSync(INDEXNOW_KEY_PATH, "utf8").trim();
  if (/^[a-f0-9]{32}$/.test(key)) {
    const priority = routes
      .filter(
        (p) =>
          p === "/" ||
          p === "/services" ||
          p.startsWith("/solutions/") ||
          p.startsWith("/secteurs/") ||
          p.startsWith("/article/"),
      )
      .map((p) => `${SITE_URL}${p}`);
    const payload = { host: new URL(SITE_URL).host, key, urlList: priority };
    try {
      const resp = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      console.log(`[IndexNow] Pinged ${priority.length} URLs (HTTP ${resp.status})`);
    } catch (err) {
      console.warn(`[IndexNow] Ping failed: ${err.message}`);
    }
  } else {
    console.warn("[IndexNow] Clé absente ou invalide — ping ignoré.");
  }
}
