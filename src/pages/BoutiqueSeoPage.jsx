import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Truck, Wrench } from "lucide-react";
import SEO from "@/components/SEO";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";
import { PRICE_LABEL } from "@/data/products";
import { SITE_URL } from "@/data/seoData";
import {
  getBoutiquePageByPath,
  BOUTIQUE_FAMILIES,
  BOUTIQUE_COUNTRIES,
} from "@/data/boutiqueGeoData";

const WHATSAPP_NUMBER = "221774837576";

const toAbsolute = (img) =>
  img && img.startsWith("http") ? img : `${SITE_URL}${img?.startsWith("/") ? img : `/${img}`}`;

// Pages SEO boutique générées par données (src/data/boutiqueGeoData.js) :
//   /boutique/categorie/<famille>   → 5 pages catégories
//   /boutique/pays/<pays>           → 16 hubs pays
//   /boutique/<pays>/<produit>      → 112 pages produit × pays
export default function BoutiqueSeoPage() {
  const { familySlug, countrySlug, productSlug } = useParams();
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();

  const path = familySlug
    ? `/boutique/categorie/${familySlug}`
    : productSlug
      ? `/boutique/${countrySlug}/${productSlug}`
      : `/boutique/pays/${countrySlug}`;

  const page = getBoutiquePageByPath(path);

  if (!page) {
    return (
      <section className="shop-seo-body">
        <div className="site-shell">
          <h1>Page introuvable</h1>
          <p>Cette page n'existe pas ou a été déplacée.</p>
          <Link className="button button-primary" to="/boutique">
            Retour à la boutique <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    );
  }

  const isFamily = page.family === "categorie";
  const isCountry = page.family === "pays";
  const isProductCountry = page.family === "produit-pays";

  // Cartes produit : sur une page pays on pointe vers la page localisée (mot-clé pays).
  const cards = isProductCountry ? page.product && [page.product] : (page.products || []);
  const cardLink = (product) =>
    isProductCountry || isFamily ? `/boutique/${product.slug}` : `/boutique/${page.country.slug}/${product.slug}`;
  const otherCountries = BOUTIQUE_COUNTRIES.filter((c) => c.slug !== page.country?.slug);
  const otherProducts = isProductCountry
    ? (page.products || []).filter((p) => p.slug !== page.product.slug)
    : [];

  const breadcrumb = [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Boutique", item: `${SITE_URL}/boutique` },
  ];
  if (isFamily) {
    breadcrumb.push({ "@type": "ListItem", position: 3, name: page.cat, item: `${SITE_URL}${page.path}` });
  } else if (isCountry) {
    breadcrumb.push({
      "@type": "ListItem",
      position: 3,
      name: page.country.name,
      item: `${SITE_URL}${page.path}`,
    });
  } else {
    breadcrumb.push({
      "@type": "ListItem",
      position: 3,
      name: page.country.name,
      item: `${SITE_URL}/boutique/pays/${page.country.slug}`,
    });
    breadcrumb.push({
      "@type": "ListItem",
      position: 4,
      name: page.product.name,
      item: `${SITE_URL}${page.path}`,
    });
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
          description: product.short,
          image: toAbsolute(product.image),
          category: product.category,
          brand: { "@type": "Brand", name: "Huawei" },
          url: `${SITE_URL}${cardLink(product)}`,
        },
      })),
    });
  }

  if (isProductCountry) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: page.product.name,
      description: page.product.short,
      image: toAbsolute(page.product.image),
      category: page.product.category,
      brand: { "@type": "Brand", name: "Huawei" },
      url: `${SITE_URL}${page.path}`,
      areaServed: { "@type": "Country", name: page.country.name },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/contact`,
        areaServed: { "@type": "Country", name: page.country.name },
        seller: { "@type": "Organization", name: "Fallcon Tech" },
      },
    });
  }

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Bonjour Fallcon Tech, je souhaite un devis pour : ${page.h1}.`,
  )}`;

  return (
    <>
      <SEO
        path={page.path}
        title={page.title}
        description={page.description}
        image={page.product?.ogImage || page.product?.image || "/logo.png"}
        imageAlt={page.h1}
        jsonLd={jsonLd}
      />

      {/* Bandeau haut */}
      <div className="shop-topstrip">
        <div className="site-shell product-page-nav">
          <Link to="/boutique" className="product-back">← Retour à la boutique</Link>
          <p className="overline">{page.overline}</p>
          <CartButton onClick={() => setCartOpen(true)} />
        </div>
      </div>

      {/* Hero SEO */}
      <section className="shop-seo-hero">
        <div className="site-shell">
          <h1>{page.h1}</h1>
          <p className="shop-seo-lead">{page.lead}</p>
          <p className="shop-quickanswer">{page.quickAnswer}</p>
          <div className="shop-seo-cta">
            <Link className="button button-primary" to="/contact">
              Demander un devis <ArrowRight size={17} />
            </Link>
            <a className="button button-secondary" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp <MessageCircle size={17} />
            </a>
          </div>
          <div className="shop-seo-trust">
            <span><ShieldCheck size={15} /> Matériel testé avant expédition</span>
            <span><Wrench size={15} /> Pré-configuration et mise en service</span>
            <span><Truck size={15} /> Expédition en Afrique de l'Ouest et centrale</span>
            <span><CheckCircle2 size={15} /> Devis sous 24 h</span>
          </div>
        </div>
      </section>

      <section className="shop-seo-body">
        <div className="site-shell">
          {/* Produits */}
          {cards.length > 0 && (
            <div className="shop-seo-block">
              <h2 className="shop-seo-h2">
                {isFamily
                  ? `${page.cat} disponibles`
                  : isProductCountry
                    ? "Fiche et configuration"
                    : `Matériel en stock livré ${page.country.prep} ${page.country.name}`}
              </h2>
              <div className="shop-grid">
                {cards.map((product) => (
                  <article className="product-card" key={product.slug}>
                    <Link
                      to={cardLink(product)}
                      className="product-media"
                      aria-label={`Voir ${product.name} ${page.country ? `${page.country.prep} ${page.country.name}` : ""}`}
                    >
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <img src={product.image} alt={`${product.name} — ${product.category} Huawei`} width={product.imgW} height={product.imgH} loading="lazy" decoding="async" />
                    </Link>
                    <div className="product-body">
                      <p className="product-cat">{product.category}</p>
                      <h3><Link to={cardLink(product)}>{product.name}</Link></h3>
                      <p className="product-short">{product.short}</p>
                      <div className="product-foot">
                        <p className="product-price">
                          {PRICE_LABEL}
                          {product.configNote && <small>{product.configNote}</small>}
                        </p>
                        <span className={`product-stock stock-${product.stock.toLowerCase().replace(/\s/g, "")}`}>
                          {product.stock}
                        </span>
                      </div>
                      <div className="product-actions">
                        <button className="button button-primary" onClick={() => addToCart(product, 1)}>
                          Ajouter à ma demande
                        </button>
                        <Link className="button button-secondary" to={`/boutique/${product.slug}`}>
                          Fiche technique
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Sections de contenu */}
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

          {/* FAQ */}
          <div className="shop-seo-section">
            <h2>Questions fréquentes</h2>
            <div className="shop-faq">
              {page.faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Maillage interne */}
          <div className="shop-seo-block">
            {isProductCountry && (
              <>
                <h2 className="shop-seo-h2">Ce matériel dans d'autres pays</h2>
                <div className="shop-linkgrid">
                  {otherCountries.map((country) => (
                    <Link key={country.slug} to={`/boutique/${country.slug}/${page.product.slug}`}>
                      <span aria-hidden="true">{country.flag}</span> {page.product.name} {country.prep} {country.name}
                    </Link>
                  ))}
                </div>
                <h2 className="shop-seo-h2 shop-seo-h2-spaced">
                  Autres équipements livrés {page.country.prep} {page.country.name}
                </h2>
                <div className="shop-linkgrid">
                  {otherProducts.map((product) => (
                    <Link key={product.slug} to={`/boutique/${page.country.slug}/${product.slug}`}>
                      {product.name}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {isCountry && (
              <>
                <h2 className="shop-seo-h2">Nos catégories de matériel</h2>
                <div className="shop-linkgrid">
                  {BOUTIQUE_FAMILIES.map((family) => (
                    <Link key={family.slug} to={`/boutique/categorie/${family.slug}`}>
                      {family.label}
                    </Link>
                  ))}
                </div>
                <h2 className="shop-seo-h2 shop-seo-h2-spaced">Autres pays desservis</h2>
                <div className="shop-linkgrid">
                  {otherCountries.map((country) => (
                    <Link key={country.slug} to={`/boutique/pays/${country.slug}`}>
                      <span aria-hidden="true">{country.flag}</span> Équipements réseau {country.prep} {country.name}
                    </Link>
                  ))}
                </div>
              </>
            )}

            {isFamily && (
              <>
                <h2 className="shop-seo-h2">Livraison par pays</h2>
                <div className="shop-linkgrid">
                  {BOUTIQUE_COUNTRIES.map((country) => (
                    <Link key={country.slug} to={`/boutique/pays/${country.slug}`}>
                      <span aria-hidden="true">{country.flag}</span> {page.cat} {country.prep} {country.name}
                    </Link>
                  ))}
                </div>
                <h2 className="shop-seo-h2 shop-seo-h2-spaced">Autres catégories</h2>
                <div className="shop-linkgrid">
                  {BOUTIQUE_FAMILIES.filter((f) => f.slug !== page.familySlug).map((family) => (
                    <Link key={family.slug} to={`/boutique/categorie/${family.slug}`}>
                      {family.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="shop-footer-cta">
            <p>Besoin d'une configuration précise ou d'un volume pour un projet ?</p>
            <Link className="button button-secondary" to="/contact">
              Demander un devis <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
