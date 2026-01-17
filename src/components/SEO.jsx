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
  title = "Fallcon Tech | Développement Web & Automatisations au Sénégal",
  description = "Sites web rapides, SEO, systèmes de réservation et automatisations pour cliniques, PME et startups au Sénégal.",
  path = "/",
  image = siteLogo,
  type = "website",
  noindex = false,
  lang = "fr",
  imageAlt = "Fallcon Tech preview image",
  siteName = "Fallcon Tech",
  jsonLd,
}) {
  const canonical = absoluteUrl(path || "/");
  const ogImage = absoluteUrl(image);
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  // Language management
  const htmlAttributes = { lang: lang || "fr" };

  return (
    <Helmet htmlAttributes={htmlAttributes}>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content={siteName} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:alt" content={imageAlt} />}

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
