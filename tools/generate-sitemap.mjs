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
  // Regex to find path prop anywhere inside <Route ... />
  // Matches <Route (anything before path) path="(value)" (anything after)
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
  console.warn(
    "[sitemap] Could not read src/App.jsx, using defaults.",
    e.message,
  );
}

const defaultRoutes = [
  "/",
  "/services",
  "/work",
  "/about",
  "/pricing",
  "/resources",
  "/contact",
];

const routes = Array.from(
  new Set([...(extracted.length ? extracted : []), ...defaultRoutes]),
)
  .filter((p) => !p.includes(":")) // Exclude dynamic params like /blog/:id if any
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

// 2. Generate Sitemap XML
const now = new Date().toISOString();
const urls = routes
  .map((p) => {
    const priority =
      p === "/"
        ? "1.0"
        : p.startsWith("/services") || p.startsWith("/work")
          ? "0.8"
          : "0.7";
    return `  <url>
    <loc>${SITE_URL}${p}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

// 3. Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
`;

// 4. Write files
const outDir = existsSync(resolve("dist")) ? "dist" : "public";
mkdirSync(resolve(outDir), { recursive: true });

writeFileSync(resolve(`${outDir}/sitemap.xml`), xml);
writeFileSync(resolve(`${outDir}/robots.txt`), robotsTxt);

console.log(
  `[SEO] Generated sitemap.xml and robots.txt in ${outDir} for ${routes.length} URLs.`,
);
