#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

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

const routes = Array.from(
  new Set([...(extracted.length ? extracted : []), ...defaultRoutes])
)
  .filter((p) => !p.includes(":"))
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

// 2. Priority & changefreq logic
function getMeta(p) {
  if (p === "/") return { priority: "1.0", changefreq: "daily" };

  // Pages services dédiées : très haute priorité (cibles SEO principales)
  if (p === "/services/creation-site-web-dakar") return { priority: "0.95", changefreq: "weekly" };
  if (p === "/services/agence-seo-senegal") return { priority: "0.95", changefreq: "weekly" };
  if (p === "/services/automatisation-whatsapp-senegal") return { priority: "0.90", changefreq: "weekly" };

  // Page services générale
  if (p === "/services") return { priority: "0.90", changefreq: "weekly" };

  // Pages principales : forte priorité
  if (["/work", "/about", "/contact", "/pricing"].includes(p)) return { priority: "0.80", changefreq: "monthly" };

  // Blog/ressources
  if (p === "/resources") return { priority: "0.75", changefreq: "weekly" };

  // Études de cas
  if (p.startsWith("/case-study/")) return { priority: "0.70", changefreq: "monthly" };

  // Articles
  if (p.startsWith("/article/")) return { priority: "0.60", changefreq: "monthly" };

  return { priority: "0.50", changefreq: "monthly" };
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
const robotsTxt = `User-agent: *
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
