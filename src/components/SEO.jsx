import siteLogo from "@/assets/logo.png";
import { useEffect } from "react";

function absoluteUrl(path) {
  if (!path) return undefined;
  const base = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
  if (!base) return path;
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function setTag(tagName, attrs) {
  const el = document.createElement(tagName);
  Object.entries(attrs).forEach(([k, v]) => {
    if (v != null) el.setAttribute(k, String(v));
  });
  el.setAttribute("data-seo-dynamic", "true");
  document.head.appendChild(el);
  return el;
}

function meta(name, content, attr = "name") {
  if (!content) return;
  setTag("meta", { [attr]: name, content });
}

export default function SEO({
  title = "Fallcon Tech | Développement Web & Automatisations au Sénégal",
  description = "Sites web rapides, SEO, systèmes de réservation et automatisations pour cliniques, PME et startups au Sénégal.",
  path = "/",
  image = siteLogo,
  type = "website",
  noindex = false,
  jsonLd,
}) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // Clear previous dynamic tags
    document.head
      .querySelectorAll('[data-seo-dynamic="true"]')
      .forEach((n) => n.remove());

    const canonical = absoluteUrl(path || "/");
    const ogImage = absoluteUrl(image);
    const robots = noindex ? "noindex, nofollow" : "index, follow";

    document.title = title;

    if (canonical) setTag("link", { rel: "canonical", href: canonical });

    meta("description", description);
    meta("robots", robots);

    // OpenGraph
    meta("og:type", type, "property");
    meta("og:title", title, "property");
    meta("og:description", description, "property");
    if (canonical) meta("og:url", canonical, "property");
    if (ogImage) meta("og:image", ogImage, "property");

    // Twitter
    meta("twitter:card", "summary_large_image");
    meta("twitter:title", title);
    meta("twitter:description", description);
    if (ogImage) meta("twitter:image", ogImage);

    // JSON-LD
    const jsonArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    jsonArray.forEach((obj) => {
      const script = setTag("script", { type: "application/ld+json" });
      script.textContent = JSON.stringify(obj);
    });

    return () => {
      document.head
        .querySelectorAll('[data-seo-dynamic="true"]')
        .forEach((n) => n.remove());
    };
  }, [title, description, path, image, type, noindex, JSON.stringify(jsonLd)]);

  return null;
}
