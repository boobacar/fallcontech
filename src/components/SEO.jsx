import { Helmet } from "react-helmet-async";
import siteLogo from "@/assets/logo.png";

function absoluteUrl(path) {
  if (!path) return undefined;
  const base = import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "");
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
  jsonLd,
}) {
  const canonical = absoluteUrl(path || "/");
  const ogImage = absoluteUrl(image);
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

