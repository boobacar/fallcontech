import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Truck, Wrench } from "lucide-react";
import SEO from "@/components/SEO";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";
import { PRICE_LABEL, PRICE_LABEL_EN } from "@/data/products";
import { SITE_URL } from "@/data/seoData";
import {
  getBoutiquePageByPath,
  BOUTIQUE_FAMILIES,
  BOUTIQUE_EN_FAMILIES,
  BOUTIQUE_COUNTRIES,
  BOUTIQUE_EN_COUNTRIES,
} from "@/data/boutiqueGeoData";

const WHATSAPP_NUMBER = "221774837576";

const toAbsolute = (img) =>
  img && img.startsWith("http") ? img : `${SITE_URL}${img?.startsWith("/") ? img : `/${img}`}`;

// Pages SEO boutique générées par données (src/data/boutiqueGeoData.js + boutiqueEnData.js) :
//   FR : /boutique/categorie/<famille> · /boutique/pays/<pays> · /boutique/<pays>/<produit>
//   EN : /en/boutique · /en/boutique/categories/<famille> · /en/boutique/countries/<pays>
//        /en/boutique/products/<produit> · /en/boutique/<pays>/<produit>
const UI = {
  fr: {
    back: "← Retour à la boutique",
    backHub: "← Boutique",
    notFoundTitle: "Page introuvable",
    notFoundText: "Cette page n'existe pas ou a été déplacée.",
    notFoundCta: "Retour à la boutique",
    quote: "Demander un devis",
    whatsapp: "WhatsApp",
    faqTitle: "Questions fréquentes",
    trust: [
      "Matériel testé avant expédition",
      "Pré-configuration et mise en service",
      "Expédition en Afrique de l'Ouest et centrale",
      "Devis sous 24 h",
    ],
    productGridFamily: (cat) => `${cat} disponibles`,
    productGridProduct: "Fiche et configuration",
    productGridCountry: (prep, name) => `Matériel en stock livré ${prep} ${name}`,
    productGridHub: "Notre matériel en stock",
    otherCountries: "Ce matériel dans d'autres pays",
    otherProducts: (prep, name) => `Autres équipements livrés ${prep} ${name}`,
    otherProductsGeneric: "Autres équipements de notre catalogue",
    categories: "Nos catégories de matériel",
    countriesGrid: "Autres pays desservis",
    countriesByCat: "Livraison par pays",
    otherCats: "Autres catégories",
    productPage: "Fiche technique",
    addRequest: "Ajouter à ma demande",
    ctaFooter: "Besoin d'une configuration précise ou d'un volume pour un projet ?",
    catLink: (label) => `Voir toute la catégorie ${label}`,
    countriesLabel: (prep, name) => `Équipements réseau ${prep} ${name}`,
    seeCountry: (cat, prep, name) => `${cat} ${prep} ${name}`,
  },
  en: {
    back: "← Back to shop",
    backHub: "← Shop",
    notFoundTitle: "Page not found",
    notFoundText: "This page does not exist or has been moved.",
    notFoundCta: "Back to the shop",
    quote: "Request a quotation",
    whatsapp: "WhatsApp",
    faqTitle: "Frequently asked questions",
    trust: [
      "Hardware tested before dispatch",
      "Pre-configuration and commissioning",
      "Shipping across Africa from Dakar",
      "Quotation within 24 h",
    ],
    productGridFamily: (cat) => `${cat} available`,
    productGridProduct: "Specification",
    productGridCountry: (prep, name) => `In-stock equipment shipped to ${name}`,
    productGridHub: "Equipment in stock",
    otherCountries: "This equipment in other countries",
    otherProducts: (prep, name) => `Other equipment shipped to ${name}`,
    otherProductsGeneric: "Other equipment in our range",
    categories: "Equipment categories",
    countriesGrid: "Other countries we serve",
    countriesByCat: "Delivery by country",
    otherCats: "Other categories",
    productPage: "Technical sheet",
    addRequest: "Add to my request",
    ctaFooter: "Need a specific configuration or volume for a project?",
    catLink: (label) => `See all ${label}`,
    countriesLabel: (prep, name) => `Network equipment in ${name}`,
    seeCountry: (cat, prep, name) => `${cat} in ${name}`,
  },
};

const NO_PREP = "";

export default function BoutiqueSeoPage() {
  const { familySlug, countrySlug, productSlug } = useParams();
  const { pathname } = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();

  const isEn = pathname.startsWith("/en/boutique");

  const path = isEn
    ? familySlug
      ? `/en/boutique/categories/${familySlug}`
      : productSlug
        ? countrySlug
          ? `/en/boutique/${countrySlug}/${productSlug}`
          : `/en/boutique/products/${productSlug}`
        : countrySlug
          ? `/en/boutique/countries/${countrySlug}`
          : "/en/boutique"
    : familySlug
      ? `/boutique/categorie/${familySlug}`
      : productSlug
        ? `/boutique/${countrySlug}/${productSlug}`
        : `/boutique/pays/${countrySlug}`;

  const page = getBoutiquePageByPath(path);

  if (!page) {
    const t = isEn ? UI.en : UI.fr;
    return (
      <section className="shop-seo-body">
        <div className="site-shell">
          <h1>{t.notFoundTitle}</h1>
          <p>{t.notFoundText}</p>
          <Link className="button button-primary" to={isEn ? "/en/boutique" : "/boutique"}>
            {t.notFoundCta} <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    );
  }

  const t = page.lang === "en" ? UI.en : UI.fr;
  const isFamily = page.family === "categorie";
  const isCountry = page.family === "pays";
  const isProductCountry = page.family === "produit-pays";
  const isProduct = page.family === "produit-en";
  const isHub = page.family === "hub-en";

  const families = page.lang === "en" ? BOUTIQUE_EN_FAMILIES : BOUTIQUE_FAMILIES;
  const countries = page.lang === "en" ? BOUTIQUE_EN_COUNTRIES : BOUTIQUE_COUNTRIES;

  const cards = isProductCountry || isProduct ? page.product && [page.product] : page.products || [];
  const cardLink = (product) => {
    if (isProductCountry) {
      return page.lang === "en"
        ? `/en/boutique/${page.country.slug}/${product.slug}`
        : `/boutique/${page.country.slug}/${product.slug}`;
    }
    if (isCountry) {
      return page.lang === "en"
        ? `/en/boutique/${page.country.slug}/${product.slug}`
        : `/boutique/${page.country.slug}/${product.slug}`;
    }
    return page.lang === "en" ? `/en/boutique/products/${product.slug}` : `/boutique/${product.slug}`;
  };
  const productSheet = (product) =>
    page.lang === "en" ? `/en/boutique/products/${product.slug}` : `/boutique/${product.slug}`;
  const categoryLink = (slug) =>
    page.lang === "en" ? `/en/boutique/categories/${slug}` : `/boutique/categorie/${slug}`;
  const countryLink = (slug) =>
    page.lang === "en" ? `/en/boutique/countries/${slug}` : `/boutique/pays/${slug}`;
  const withProductCountry = (country, product) =>
    page.lang === "en"
      ? `/en/boutique/${country.slug}/${product.slug}`
      : `/boutique/${country.slug}/${product.slug}`;

  const otherCountries = countries.filter((c) => c.slug !== page.country?.slug);
  const otherProducts =
    isProductCountry || isProduct ? page.products.filter((p) => p.slug !== page.product.slug) : [];
  const otherFamilies = families.filter((f) => f.slug !== page.familySlug);

  const breadcrumb = [
    { "@type": "ListItem", position: 1, name: page.lang === "en" ? "Home" : "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: page.lang === "en" ? "Shop" : "Boutique",
      item: page.lang === "en" ? `${SITE_URL}/en/boutique` : `${SITE_URL}/boutique`,
    },
  ];
  if (isFamily) {
    breadcrumb.push({ "@type": "ListItem", position: 3, name: page.cat, item: `${SITE_URL}${page.path}` });
  } else if (isCountry) {
    breadcrumb.push({ "@type": "ListItem", position: 3, name: page.country.name, item: `${SITE_URL}${page.path}` });
  } else if (isProductCountry) {
    breadcrumb.push({
      "@type": "ListItem",
      position: 3,
      name: page.country.name,
      item: `${SITE_URL}${countryLink(page.country.slug)}`,
    });
    breadcrumb.push({ "@type": "ListItem", position: 4, name: page.product.name, item: `${SITE_URL}${page.path}` });
  } else if (isProduct) {
    breadcrumb.push({ "@type": "ListItem", position: 3, name: page.product.name, item: `${SITE_URL}${page.path}` });
  }

  const jsonLd = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumb },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  if (cards.length > 1) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: page.h1,
      itemListElement: cards.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: page.lang === "en" ? product.shortEn || product.short : product.short,
          image: toAbsolute(product.image),
          category: product.category,
          brand: { "@type": "Brand", name: "Huawei" },
          url: `${SITE_URL}${cardLink(product)}`,
        },
      })),
    });
  }

  if (isProductCountry || isProduct) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: page.product.name,
      description:
        page.lang === "en"
          ? page.product.shortEn || page.product.short
          : page.product.short,
      image: toAbsolute(page.product.image),
      category: page.product.category,
      brand: { "@type": "Brand", name: "Huawei" },
      url: `${SITE_URL}${page.path}`,
      ...(isProductCountry ? { areaServed: { "@type": "Country", name: page.country.name } } : {}),
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/contact`,
        ...(isProductCountry ? { areaServed: { "@type": "Country", name: page.country.name } } : {}),
        seller: { "@type": "Organization", name: "Fallcon Tech" },
      },
    });
  }

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    page.lang === "en"
      ? `Hello Fallcon Tech, I would like a quotation for: ${page.h1}.`
      : `Bonjour Fallcon Tech, je souhaite un devis pour : ${page.h1}.`,
  )}`;

  const priceLabel = page.lang === "en" ? PRICE_LABEL_EN : PRICE_LABEL;

  const gridTitle = isFamily
    ? t.productGridFamily(page.cat)
    : isProductCountry || isProduct
      ? t.productGridProduct
      : isHub
        ? t.productGridHub
        : t.productGridCountry(page.country.prep, page.country.name);

  return (
    <>
      <SEO
        path={page.path}
        title={page.title}
        description={page.description}
        lang={page.lang === "en" ? "en" : "fr"}
        image={page.product?.ogImage || page.product?.image || "/logo.png"}
        imageAlt={page.h1}
        jsonLd={jsonLd}
      />

      <div className="shop-topstrip">
        <div className="site-shell product-page-nav">
          <Link to={page.lang === "en" ? "/en/boutique" : "/boutique"} className="product-back">
            {isHub ? t.backHub : t.back}
          </Link>
          <p className="overline">{page.overline}</p>
          <CartButton
            onClick={() => setCartOpen(true)}
            label={page.lang === "en" ? "My request" : "Ma demande"}
            ariaLabel={page.lang === "en" ? "View my quotation request" : "Voir ma demande de devis"}
          />
        </div>
      </div>

      <section className="shop-seo-hero">
        <div className="site-shell">
          <h1>{page.h1}</h1>
          <p className="shop-seo-lead">{page.lead}</p>
          <p className="shop-quickanswer">{page.quickAnswer}</p>
          <div className="shop-seo-cta">
            <Link className="button button-primary" to="/contact">
              {t.quote} <ArrowRight size={17} />
            </Link>
            <a className="button button-secondary" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              {t.whatsapp} <MessageCircle size={17} />
            </a>
          </div>
          <div className="shop-seo-trust">
            <span><ShieldCheck size={15} /> {t.trust[0]}</span>
            <span><Wrench size={15} /> {t.trust[1]}</span>
            <span><Truck size={15} /> {t.trust[2]}</span>
            <span><CheckCircle2 size={15} /> {t.trust[3]}</span>
          </div>
        </div>
      </section>

      <section className="shop-seo-body">
        <div className="site-shell">
          {cards.length > 0 && (
            <div className="shop-seo-block">
              <h2 className="shop-seo-h2">{gridTitle}</h2>
              <div className="shop-grid">
                {cards.map((product) => (
                  <article className="product-card" key={product.slug}>
                    <Link
                      to={cardLink(product)}
                      className="product-media"
                      aria-label={`${product.name}${page.country ? ` — ${page.country.name}` : ""}`}
                    >
                      {(page.lang === "en" ? product.badgeEn || product.badge : product.badge) && (
                        <span className="product-badge">
                          {page.lang === "en" ? product.badgeEn || product.badge : product.badge}
                        </span>
                      )}
                      <img
                        src={product.image}
                        alt={`${product.name} — ${product.category} Huawei`}
                        width={product.imgW}
                        height={product.imgH}
                        loading="lazy"
                        decoding="async"
                      />
                    </Link>
                    <div className="product-body">
                      <p className="product-cat">{product.category}</p>
                      <h3><Link to={cardLink(product)}>{product.name}</Link></h3>
                      <p className="product-short">
                        {page.lang === "en" ? product.shortEn || product.short : product.short}
                      </p>
                      <div className="product-foot">
                        <p className="product-price">
                          {priceLabel}
                          {(page.lang === "en" ? product.configNoteEn || product.configNote : product.configNote) && (
                            <small>
                              {page.lang === "en"
                                ? product.configNoteEn || product.configNote
                                : product.configNote}
                            </small>
                          )}
                        </p>
                        <span className={`product-stock stock-${product.stock.toLowerCase().replace(/\s/g, "")}`}>
                          {product.stock}
                        </span>
                      </div>
                      <div className="product-actions">
                        <button className="button button-primary" onClick={() => addToCart(product, 1)}>
                          {t.addRequest}
                        </button>
                        <Link className="button button-secondary" to={productSheet(product)}>
                          {t.productPage}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {page.sections?.map((section) => (
            <div className="shop-seo-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.intro && <p>{section.intro}</p>}
              {section.items && (
                <ul className="shop-seo-list">
                  {section.items.map((item) => (
                    <li key={item}><CheckCircle2 size={16} /> <span>{item}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="shop-seo-section">
            <h2>{t.faqTitle}</h2>
            <div className="shop-faq">
              {page.faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="shop-seo-block">
            {(isProductCountry || isProduct) && (
              <>
                <h2 className="shop-seo-h2">{t.otherCountries}</h2>
                <div className="shop-linkgrid">
                  {otherCountries.map((country) => (
                    <Link key={country.slug} to={withProductCountry(country, page.product)}>
                      <span aria-hidden="true">{country.flag}</span> {page.product.name} — {country.name}
                    </Link>
                  ))}
                </div>
                <h2 className="shop-seo-h2 shop-seo-h2-spaced">
                  {isProductCountry
                    ? t.otherProducts(page.lang === "en" ? NO_PREP : page.country.prep, page.country.name)
                    : t.otherProductsGeneric}
                </h2>
                <div className="shop-linkgrid">
                  {otherProducts.map((product) => (
                    <Link
                      key={product.slug}
                      to={isProductCountry ? withProductCountry(page.country, product) : productSheet(product)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {(isCountry || isFamily || isHub) && (
              <>
                <h2 className="shop-seo-h2">{t.categories}</h2>
                <div className="shop-linkgrid">
                  {families.map((family) => (
                    <Link key={family.slug} to={categoryLink(family.slug)}>
                      {family.label}
                    </Link>
                  ))}
                </div>
                <h2 className="shop-seo-h2 shop-seo-h2-spaced">
                  {isCountry ? t.countriesGrid : t.countriesByCat}
                </h2>
                <div className="shop-linkgrid">
                  {(isCountry ? otherCountries : countries).map((country) => (
                    <Link key={country.slug} to={countryLink(country.slug)}>
                      <span aria-hidden="true">{country.flag}</span>{" "}
                      {page.lang === "en"
                        ? t.seeCountry(page.cat || "Network equipment", NO_PREP, country.name)
                        : t.seeCountry(page.cat || "Équipements réseau", country.prep, country.name)}
                    </Link>
                  ))}
                </div>
                {isCountry && (
                  <>
                    <h2 className="shop-seo-h2 shop-seo-h2-spaced">{t.otherCats}</h2>
                    <div className="shop-linkgrid">
                      {otherFamilies.map((family) => (
                        <Link key={family.slug} to={categoryLink(family.slug)}>
                          {family.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}

            {isCountry && (
              <p className="shop-seo-more">
                <Link to={`/boutique/${page.country.slug}/${page.products[0].slug}`}>
                  {t.countriesLabel(page.country.prep, page.country.name)} <ArrowRight size={15} />
                </Link>
              </p>
            )}
          </div>

          <div className="shop-footer-cta">
            <p>{t.ctaFooter}</p>
            <Link className="button button-secondary" to="/contact">
              {t.quote} <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
