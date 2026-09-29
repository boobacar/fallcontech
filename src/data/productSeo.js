// =============================================================================
// Contenu SEO d'une fiche produit : cas d'usage, cadrage, FAQ, métadonnées et
// données structurées (JSON-LD).
// -----------------------------------------------------------------------------
// Module PARTAGÉ par la page React (src/pages/ProductPage.jsx) et par l'outil
// de pré-rendu (tools/prerender-seo.mjs) : les données structurées existent donc
// aussi dans le HTML statique déployé (crawlers sans JavaScript, crawlers IA),
// pas seulement après exécution du JS.
// Contraintes : aucun alias Vite (« @/ ») et aucun import d'asset dans ce
// fichier — il est importé par Node.
// =============================================================================
import { SITE_URL } from "./seoData.js";
import { products, getProductBySlug } from "./products.js";
import { BOUTIQUE_FAMILIES } from "./boutiqueGeoData.js";

export const productFamily = (product) =>
  BOUTIQUE_FAMILIES.find((f) => f.cat === product?.category) || BOUTIQUE_FAMILIES[0];

export const productUseCases = (product) =>
  product?.useCases?.length ? product.useCases : productFamily(product).useCases;

export const productBuyingPoints = (product) =>
  product?.buying?.length ? product.buying : productFamily(product).buying;

// FAQ génériques (matériel, devis, livraison, licences) — utilisées quand le
// produit n'a pas de FAQ dédiée.
const genericFaq = (product) => [
  {
    q: `Comment obtenir le prix du ${product.name} ?`,
    a: "Le prix dépend de la configuration livrée (cartes, modules optiques, licences éventuelles) : il est établi sur devis sous 24 h, avec la référence exacte et le détail de ce qui est inclus.",
  },
  {
    q: `Livrez-vous le ${product.name} en Afrique ?`,
    a: "Oui : expédition depuis Dakar vers l'Afrique de l'Ouest et centrale. Le matériel est testé avant expédition et le mode de livraison est confirmé dans le devis selon le poids et les formalités d'importation.",
  },
  {
    q: "Le matériel est-il configuré avant livraison ?",
    a: "Nous livrons le matériel testé et pré-configuré selon vos informations (adressage, VLAN, politique de sécurité de base, VPN le cas échéant). La configuration sur site ou à distance peut être incluse au devis.",
  },
  {
    q: "Quelles licences faut-il prévoir ?",
    a: "Selon le modèle et les fonctions activées : licences matérielles Huawei (capacité de port, MACsec) et logicielles (jeux de fonctions, options de sécurité). Elles sont chiffrées séparément dans le devis pour éviter toute surprise.",
  },
];

export const productFaqFor = (product) => {
  if (!product) return [];
  if (product.faq && product.faq.length) return product.faq;
  return [...genericFaq(product), ...productFamily(product).faq.slice(0, 2)];
};

export const absoluteProductImage = (img, siteUrl = SITE_URL) => {
  if (!img) return undefined;
  if (img.startsWith("http")) return img;
  return `${siteUrl}${img.startsWith("/") ? img : `/${img}`}`;
};

// Métadonnées de la fiche : un produit peut surcharger titre/description.
export function productSeoMeta(product, siteUrl = SITE_URL) {
  const path = `/boutique/${product.slug}`;
  return {
    path,
    title: product.seoTitle || `${product.name} — ${product.category} à Dakar | Fallcon Tech`,
    description:
      product.seoDescription ||
      `${product.name} : ${product.short} ` +
        `Prix sur devis selon configuration, licences et installation — livré et installé au Sénégal.`,
    canonical: `${siteUrl}${path}`,
    priority: "0.85",
    changefreq: "weekly",
  };
}

// Données structurées de la fiche : Product + fil d'Ariane + FAQ.
// Référence, modèle et état du matériel sont exposés explicitement (mpn / model /
// itemCondition) : c'est ce que lisent les moteurs et les assistants IA pour
// rapprocher la fiche de la référence Huawei exacte.
export function productJsonLd(product, siteUrl = SITE_URL) {
  if (!product) return [];
  const url = `${siteUrl}/boutique/${product.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription || product.short,
    image: [
      absoluteProductImage(product.image, siteUrl),
      absoluteProductImage(product.ogImage || product.image, siteUrl),
    ].filter(Boolean),
    category: product.category,
    brand: { "@type": "Brand", name: "Huawei" },
    manufacturer: { "@type": "Organization", name: "Huawei" },
    sku: product.mpn || product.id,
    itemCondition: "https://schema.org/NewCondition",
    url,
  };

  if (product.mpn) schema.mpn = product.mpn;
  if (product.model) schema.model = product.model;
  if (product.longIntro && product.longIntro.length) {
    schema.description = `${product.short} ${product.longIntro[0]}`;
  }

  const properties = (
    product.techSpecs ? product.techSpecs.map((row) => [row.k, row.v]) : product.specs.map((s) => ["Caractéristique", s])
  ).map(([name, value]) => ({ "@type": "PropertyValue", name, value }));
  if (properties.length) schema.additionalProperty = properties;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Boutique", item: `${siteUrl}/boutique` },
      { "@type": "ListItem", position: 3, name: product.name, item: url },
    ],
  };

  const faq = productFaqFor(product);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return [schema, breadcrumb, faqSchema];
}

export const productJsonLdForSlug = (slug, siteUrl = SITE_URL) =>
  productJsonLd(getProductBySlug(slug), siteUrl);

// Liste des fiches produit (utilisée par le pré-rendu pour injecter le JSON-LD).
export const allProductRoutes = () => products.map((p) => `/boutique/${p.slug}`);
