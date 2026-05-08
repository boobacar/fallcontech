#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { getSeoForPath, SITE_URL } from "../src/data/seoData.js";

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

const applySeo = (template, routePath) => {
  const seo = getSeoForPath(routePath);
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
  return html;
};

if (!existsSync(distIndexPath) || !existsSync(sitemapPath)) {
  console.error("[prerender-seo] dist/index.html or dist/sitemap.xml missing. Run vite build and generate-sitemap first.");
  process.exit(1);
}

const template = readFileSync(distIndexPath, "utf8");
const sitemap = readFileSync(sitemapPath, "utf8");
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter(Boolean);

for (const routePath of routes) {
  const html = applySeo(template, routePath);
  for (const outputPath of outputPathsForRoute(routePath)) {
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html, "utf8");
  }
}

console.log(`[prerender-seo] Generated static SEO HTML for ${routes.length} URLs (${SITE_URL}).`);
