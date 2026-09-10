import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Minus, Plus } from "lucide-react";
import SEO from "@/components/SEO";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";
import { SITE_URL } from "@/data/seoData";
import {
  getProductBySlug,
  products,
  PRICE_LABEL,
  productSeoForPath,
} from "@/data/products";
import { BOUTIQUE_FAMILIES, BOUTIQUE_COUNTRIES } from "@/data/boutiqueGeoData";

const toAbsolute = (img) =>
  img && img.startsWith("http") ? img : `${SITE_URL}${img.startsWith("/") ? img : `/${img}`}`;

export default function ProductPage() {
  const { productSlug } = useParams();
  const product = getProductBySlug(productSlug);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  const related = useMemo(
    () => (product ? products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3) : []),
    [product],
  );

  if (!product) return <Navigate to="/boutique" replace />;

  const seo = productSeoForPath(`/boutique/${product.slug}`) || {};

  const family = BOUTIQUE_FAMILIES.find((f) => f.cat === product.category) || BOUTIQUE_FAMILIES[0];

  const productFaq = [
    {
      q: `Comment obtenir le prix du ${product.name} ?`,
      a: `Le prix dépend de la configuration livrée (cartes, modules optiques, licences éventuelles) : il est établi sur devis sous 24 h, avec la référence exacte et le détail de ce qui est inclus.`,
    },
    {
      q: `Livrez-vous le ${product.name} en Afrique ?`,
      a: `Oui : expédition depuis Dakar vers l'Afrique de l'Ouest et centrale. Le matériel est testé avant expédition et le mode de livraison est confirmé dans le devis selon le poids et les formalités d'importation.`,
    },
    {
      q: `Le matériel est-il configuré avant livraison ?`,
      a: `Nous livrons le matériel testé et pré-configuré selon vos informations (adressage, VLAN, politique de sécurité de base, VPN le cas échéant). La configuration sur site ou à distance peut être incluse au devis.`,
    },
    {
      q: `Quelles licences faut-il prévoir ?`,
      a: `Selon le modèle et les fonctions activées : licences matérielles Huawei (capacité de port, MACsec) et logicielles (jeux de fonctions, options de sécurité). Elles sont chiffrées séparément dans le devis pour éviter toute surprise.`,
    },
    ...family.faq.slice(0, 2),
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.short,
    image: toAbsolute(product.image),
    category: product.category,
    brand: { "@type": "Brand", name: product.category === "Serveurs" ? "Huawei" : "Huawei" },
    url: `${SITE_URL}/boutique/${product.slug}`,
    additionalProperty: product.specs.slice(0, 6).map((spec) => ({
      "@type": "PropertyValue",
      name: "Caractéristique",
      value: spec,
    })),
  };

  const productFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Boutique", item: `${SITE_URL}/boutique` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE_URL}/boutique/${product.slug}` },
    ],
  };

  return (
    <>
      <SEO
        path={seo.path}
        title={seo.title}
        description={seo.description}
        image={product.image}
        jsonLd={[productJsonLd, breadcrumbJsonLd, productFaqJsonLd]}
      />

      {/* Top strip with back link + cart */}
      <div className="shop-topstrip">
        <div className="site-shell product-page-nav">
          <Link to="/boutique" className="product-back">← Retour à la boutique</Link>
          <p className="overline">{product.category}</p>
          <CartButton onClick={() => setCartOpen(true)} />
        </div>
      </div>

      {/* Product detail */}
      <section className="product-page">
        <div className="site-shell product-page-grid">
          <div className="product-page-media">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-page-body">
            <p className="product-cat">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-page-short">{product.short}</p>

            <ul className="product-page-specs">
              {product.specs.map((spec) => (
                <li key={spec}><CheckCircle2 size={16} /> {spec}</li>
              ))}
            </ul>

            <div className="product-page-price-row">
              <p className="product-price product-page-price">
                {PRICE_LABEL}
                {product.configNote && <small>{product.configNote}</small>}
              </p>
              <span className={`product-stock stock-${product.stock.toLowerCase().replace(/\s/g, "")}`}>
                {product.stock}
              </span>
            </div>

            <div className="product-page-qty">
              <span>Quantité</span>
              <div className="qty-control">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuer"><Minus size={16} /></button>
                <b>{qty}</b>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Augmenter"><Plus size={16} /></button>
              </div>
            </div>

            <div className="product-page-actions">
              <button className="button button-primary" onClick={() => addToCart(product, qty)}>
                Ajouter à ma demande (× {qty})
              </button>
              <Link className="button button-secondary" to="/contact">
                Demander un devis <ArrowRight size={17} />
              </Link>
            </div>

            <p className="product-page-note">
              Prix communiqué sur devis : configuration, licences, garantie et installation
              chiffrées par écrit avant toute commande.
            </p>
          </div>
        </div>

        {/* Contenu SEO : usages, cadrage, FAQ, maillage pays */}
        <div className="site-shell shop-seo-content">
          <div className="shop-seo-section">
            <h2>Pour quels projets choisir le {product.name} ?</h2>
            <ul className="shop-seo-list">
              {family.useCases.map((item) => (
                <li key={item}><CheckCircle2 size={16} /> <span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="shop-seo-section">
            <h2>Comment nous cadrons la configuration</h2>
            <ul className="shop-seo-list">
              {family.buying.map((item) => (
                <li key={item}><CheckCircle2 size={16} /> <span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="shop-seo-section">
            <h2>Questions fréquentes</h2>
            <div className="shop-faq">
              {productFaq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="shop-seo-block">
            <h2 className="shop-seo-h2">Livraison de ce matériel par pays</h2>
            <div className="shop-linkgrid">
              {BOUTIQUE_COUNTRIES.map((country) => (
                <Link key={country.slug} to={`/boutique/${country.slug}/${product.slug}`}>
                  <span aria-hidden="true">{country.flag}</span> {product.name} {country.prep} {country.name}
                </Link>
              ))}
            </div>
            <p className="shop-seo-more">
              <Link to={`/boutique/categorie/${family.slug}`}>
                Voir toute la catégorie {family.label} <ArrowRight size={15} />
              </Link>
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="site-shell shop-related">
            <p className="overline">Dans la même catégorie</p>
            <div className="shop-grid">
              {related.map((rel) => (
                <article className="product-card" key={rel.slug}>
                  <Link to={`/boutique/${rel.slug}`} className="product-media" aria-label={`Voir la fiche ${rel.name}`}>
                    {rel.badge && <span className="product-badge">{rel.badge}</span>}
                    <img src={rel.image} alt={rel.name} loading="lazy" />
                  </Link>
                  <div className="product-body">
                    <p className="product-cat">{rel.category}</p>
                    <h3><Link to={`/boutique/${rel.slug}`}>{rel.name}</Link></h3>
                    <p className="product-short">{rel.short}</p>
                    <div className="product-foot">
                      <p className="product-price">
                        {PRICE_LABEL}
                        {rel.configNote && <small>{rel.configNote}</small>}
                      </p>
                      <span className={`product-stock stock-${rel.stock.toLowerCase().replace(/\s/g, "")}`}>
                        {rel.stock}
                      </span>
                    </div>
                    <div className="product-actions">
                      <button className="button button-primary" onClick={() => addToCart(rel, 1)}>
                        Ajouter à ma demande
                      </button>
                      <Link className="button button-secondary" to={`/boutique/${rel.slug}`}>
                        Détails
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
