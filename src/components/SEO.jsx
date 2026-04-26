import { Helmet } from "react-helmet-async";
import siteLogo from "@/assets/logo.webp";

function absoluteUrl(path) {
  if (!path) return undefined;
  const base =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");
  if (!base) return path;
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function SEO({
  title = "Agence Web Dakar & Développeur Web Sénégal | Fallcon Tech",
  description = "Fallcon Tech — création de site web, SEO local, automatisation WhatsApp, applications et IoT pour entreprises à Dakar et au Sénégal.",
  path = "/",
  image = siteLogo,
  type = "website",
  noindex = false,
  lang = "fr",
  imageAlt = "Fallcon Tech — Agence Web Dakar",
  siteName = "Fallcon Tech",
  jsonLd,
  publishedTime,
  modifiedTime,
  author,
}) {
  const canonical = absoluteUrl(path || "/");
  const ogImage = absoluteUrl(image);
  const robots = noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <Helmet htmlAttributes={{ lang: lang || "fr" }}>
      {/* Standard */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author || siteName} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_SN" />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Article-specific Open Graph */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author || "Boubacar FALL"} />
      )}
      {type === "article" && (
        <meta property="article:publisher" content="https://fallcontech.com" />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:alt" content={imageAlt} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD Structured Data */}
      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((data, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(data)}
          </script>
        ))}
    </Helmet>
  );
}
