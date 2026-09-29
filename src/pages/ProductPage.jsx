import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Minus, Plus, ShieldCheck, Wrench } from "lucide-react";
import SEO from "@/components/SEO";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";
import {
  PRICE_LABEL,
  productSeoForPath,
  products,
  getProductBySlug,
} from "@/data/products";
import {
  productBuyingPoints,
  productFaqFor,
  productFamily,
  productJsonLd,
  productUseCases,
} from "@/data/productSeo";
import { BOUTIQUE_COUNTRIES } from "@/data/boutiqueGeoData";

const WHATSAPP = "https://wa.me/221774837576";

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
  const family = productFamily(product);
  const productFaq = productFaqFor(product);
  const useCases = productUseCases(product);
  const buying = productBuyingPoints(product);
  const jsonLd = productJsonLd(product);
  const whatsappHref = `${WHATSAPP}?text=${encodeURIComponent(
    `Bonjour Fallcon Tech, je souhaite un devis pour le ${product.name}.`,
  )}`;

  return (
    <>
      <SEO
        path={seo.path}
        title={seo.title}
        description={seo.description}
        image={product.ogImage || product.image}
        jsonLd={jsonLd}
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
            <img
              src={product.image}
              alt={product.imageAlt || `${product.name} — ${product.category} Huawei`}
              width={product.imgW}
              height={product.imgH}
              decoding="async"
            />
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

            {product.stockNote && <p className="product-stock-note">{product.stockNote}</p>}

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
              <a className="button button-secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>

            <p className="product-page-note">
              Prix communiqué sur devis : configuration, licences, garantie et installation
              chiffrées par écrit avant toute commande.
              {product.condition && (
                <>
                  <br />
                  <Wrench size={12} aria-hidden="true" /> État : {product.condition}
                </>
              )}
            </p>
          </div>
        </div>

        {/* Contenu SEO : présentation, fiche technique, licences, usages, FAQ, maillage pays */}
        <div className="site-shell shop-seo-content">
          {product.longIntro && product.longIntro.length > 0 && (
            <div className="product-intro">
              <h2 className="shop-seo-h2">Présentation du {product.name}</h2>
              {product.longIntro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          )}

          {product.techSpecs && product.techSpecs.length > 0 && (
            <>
              <h2 className="shop-seo-h2">Fiche technique {product.name}</h2>
              <table className="product-specs-table">
                <tbody>
                  {product.techSpecs.map((row) => (
                    <tr key={row.k}>
                      <th scope="row">{row.k}</th>
                      <td>{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          <div className="shop-seo-section">
            <h2>Pour quels projets choisir le {product.name} ?</h2>
            <ul className="shop-seo-list">
              {useCases.map((item) => (
                <li key={item}><CheckCircle2 size={16} /> <span>{item}</span></li>
              ))}
            </ul>
          </div>

          <div className="shop-seo-section">
            <h2>Comment nous cadrons la configuration</h2>
            <ul className="shop-seo-list">
              {buying.map((item) => (
                <li key={item}><CheckCircle2 size={16} /> <span>{item}</span></li>
              ))}
            </ul>
          </div>

          {product.included && product.included.length > 0 && (
            <div className="shop-seo-section">
              <h2>Ce qui est inclus, et ce qui dépend d'une licence</h2>
              <div className="product-licence-grid">
                <div className="product-licence-card is-included">
                  <h3><ShieldCheck size={16} aria-hidden="true" /> Inclus sans licence</h3>
                  <ul>
                    {product.included.map((item) => (
                      <li key={item}><CheckCircle2 size={15} /> <span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                {product.options && product.options.length > 0 && (
                  <div className="product-licence-card is-option">
                    <h3><Wrench size={16} aria-hidden="true" /> Options et licences</h3>
                    <ul>
                      {product.options.map((item) => (
                        <li key={item}><Plus size={15} /> <span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {product.licenceNote && <p className="product-licence-note">{product.licenceNote}</p>}
            </div>
          )}

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
                    <img src={rel.image} alt={`${rel.name} — ${rel.category} Huawei`} width={rel.imgW} height={rel.imgH} loading="lazy" decoding="async" />
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
