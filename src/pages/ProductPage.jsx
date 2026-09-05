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
  formatFCFA,
  productSeoForPath,
} from "@/data/products";

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

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.short,
    image: toAbsolute(product.image),
    category: product.category,
    brand: { "@type": "Brand", name: "Fallcon Tech" },
    ...(product.price != null
      ? {
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "XOF",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/boutique/${product.slug}`,
            priceValidUntil: "2027-12-31",
          },
        }
      : {}),
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
        jsonLd={[productJsonLd, breadcrumbJsonLd]}
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
                {formatFCFA(product.price)}
                {product.priceNote && <small>{product.priceNote}</small>}
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
                Ajouter au panier · {formatFCFA(product.price * qty)}
              </button>
              <Link className="button button-secondary" to="/contact">
                Demander un devis <ArrowRight size={17} />
              </Link>
            </div>

            <p className="product-page-note">
              Prix indicatif. La commande est confirmée sur WhatsApp avant paiement.
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
                        {formatFCFA(rel.price)}
                        {rel.priceNote && <small>{rel.priceNote}</small>}
                      </p>
                      <span className={`product-stock stock-${rel.stock.toLowerCase().replace(/\s/g, "")}`}>
                        {rel.stock}
                      </span>
                    </div>
                    <div className="product-actions">
                      <button className="button button-primary" onClick={() => addToCart(rel, 1)}>
                        Ajouter au panier
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
