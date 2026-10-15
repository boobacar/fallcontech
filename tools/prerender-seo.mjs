#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { getSeoForPath, SITE_URL } from "../src/data/seoData.js";
import { geoSeoForPath } from "../src/data/geoData.js";
import { productSeoForPath } from "../src/data/products.js";
import { productJsonLdForSlug } from "../src/data/productSeo.js";
import { boutiqueSeoForPath } from "../src/data/boutiqueGeoData.js";

const distIndexPath = resolve("dist/index.html");
const sitemapPath = resolve("dist/sitemap.xml");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const replaceOrInsert = (html, pattern, replacement, before = "</head>") => {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace(before, `    ${replacement}\n  ${before}`);
};

const outputPathsForRoute = (routePath) => {
  if (routePath === "/") return [distIndexPath];
  const cleanPath = routePath.replace(/^\/+/, "");
  return [resolve("dist", cleanPath, "index.html"), resolve("dist", `${cleanPath}.html`)];
};

// ---------------------------------------------------------------------------
// Préchargement de l'image de couverture des articles.
// Sur une page article, l'élément LCP est l'image de couverture, mais elle n'est
// découverte qu'au montage de React (resourceLoadDelay mesuré ~1,5 s). On injecte
// donc un <link rel="preload" as="image"> dans le HTML statique : la requête part
// dès l'analyse du <head>, en parallèle du JavaScript.
// ---------------------------------------------------------------------------
const ASSETS_DIR = resolve("dist/assets");

const assetFilesByStem = () => {
  const map = new Map();
  if (!existsSync(ASSETS_DIR)) return map;
  for (const file of readdirSync(ASSETS_DIR)) {
    const match = file.match(/^(.*)-[A-Za-z0-9_-]{8}\.(jpg|jpeg|png|webp)$/i);
    if (!match) continue;
    const size = statSync(resolve(ASSETS_DIR, file)).size;
    const current = map.get(match[1]);
    if (!current || size > current.size) map.set(match[1], { file, size });
  }
  return map;
};

const articleCoverForRoute = (routePath, appSrc, assets) => {
  const routeMatch = new RegExp(`<Route\\s+path="${routePath}"[\\s\\S]{0,120}?element=\\{<(\\w+)`).exec(appSrc);
  if (!routeMatch) return null;
  const comp = routeMatch[1];
  const fileMatch = new RegExp(`const\\s+${comp}\\s*=\\s*lazy\\(\\s*\\(\\)\\s*=>\\s*import\\("(@/pages/[^"]+)"\\)\\s*,?\\s*\\)`).exec(appSrc);
  if (!fileMatch) return null;
  const basePath = resolve(fileMatch[1].replace(/^@\//, "src/"));
  const filePath = [basePath, `${basePath}.jsx`, `${basePath}.js`, `${basePath}/index.jsx`].find((candidate) =>
    existsSync(candidate),
  );
  if (!filePath) return null;
  const source = readFileSync(filePath, "utf8");
  let best = null;
  for (const imp of source.matchAll(/from\s+"@\/assets\/([^"]+?)\.(?:jpg|jpeg|png|webp)"/gi)) {
    const stem = imp[1].split("/").pop();
    const asset = assets.get(stem);
    if (asset && (!best || asset.size > best.size)) best = asset;
  }
  return best ? best.file : null;
};

const injectCoverPreload = (html, routePath, appSrc, assets) => {
  if (!routePath.startsWith("/article/")) return html;
  if (html.includes('rel="preload" as="image"')) return html;
  const cover = articleCoverForRoute(routePath, appSrc, assets);
  if (!cover) return html;
  const tag = `<link rel="preload" as="image" href="/assets/${cover}" fetchpriority="high" />`;
  return html.replace("</head>", `    ${tag}\n  </head>`);
};

// Données structurées des fiches produit : injectées dans le HTML statique pour
// que les moteurs et les crawlers IA les lisent sans exécuter le JavaScript.
// (Le composant React les réinjecte via Helmet : la copie statique est retirée
// au montage — voir src/main.jsx.)
const injectProductJsonLd = (html, routePath) => {
  const match = routePath.match(/^\/boutique\/([^/]+)\/?$/);
  if (!match) return html;
  const blocks = productJsonLdForSlug(match[1], SITE_URL);
  if (!blocks || !blocks.length) return html;
  const scripts = blocks
    .map(
      (block) =>
        `<script type="application/ld+json" data-prerender-jsonld="true">${JSON.stringify(block)}</script>`,
    )
    .join("\n    ");
  return html.replace("</head>", `    ${scripts}\n  </head>`);
};

const applySeo = (template, routePath) => {
  const seo =
    boutiqueSeoForPath(routePath) ||
    productSeoForPath(routePath) ||
    geoSeoForPath(routePath) ||
    getSeoForPath(routePath);
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const canonical = escapeHtml(seo.canonical);
  const ogImage = escapeHtml(seo.ogImage);
  const robots = escapeHtml(seo.robots);
  const type = escapeHtml(seo.type || "website");
  const lang = escapeHtml(seo.lang || "fr-SN");

  let html = template.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  html = replaceOrInsert(html, /<title>.*?<\/title>/s, `<title>${title}</title>`);
  html = replaceOrInsert(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  html = replaceOrInsert(html, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`);
  html = replaceOrInsert(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  html = replaceOrInsert(html, /<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${type}" />`);
  html = replaceOrInsert(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = replaceOrInsert(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  html = replaceOrInsert(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = replaceOrInsert(html, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${ogImage}" />`);
  html = replaceOrInsert(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = replaceOrInsert(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  html = replaceOrInsert(html, /<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${ogImage}" />`);
  html = injectProductJsonLd(html, routePath);
  return html;
};

if (!existsSync(distIndexPath) || !existsSync(sitemapPath)) {
  console.error("[prerender-seo] dist/index.html or dist/sitemap.xml missing. Run vite build and generate-sitemap first.");
  process.exit(1);
}

const template = readFileSync(distIndexPath, "utf8");
const appSrc = readFileSync(resolve("src/App.jsx"), "utf8");
const assets = assetFilesByStem();
const sitemap = readFileSync(sitemapPath, "utf8");
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter(Boolean);

let preloaded = 0;
for (const routePath of routes) {
  const html = injectCoverPreload(applySeo(template, routePath), routePath, appSrc, assets);
  if (html.includes('rel="preload" as="image"')) preloaded += 1;
  for (const outputPath of outputPathsForRoute(routePath)) {
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html, "utf8");
  }
}

console.log(`[prerender-seo] Generated static SEO HTML for ${routes.length} URLs (${SITE_URL}).`);
console.log(`[prerender-seo] Preload image de couverture injecte sur ${preloaded} pages article.`);
