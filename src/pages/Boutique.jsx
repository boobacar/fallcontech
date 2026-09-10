import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import SEO from "@/components/SEO";
import siteLogo from "@/assets/logo.webp";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";
import { absoluteUrl, SITE_URL } from "@/data/seoData";
import {
  products,
  CATEGORIES,
  CATEGORY_META,
  PRICE_LABEL,
} from "@/data/products";
import {
  BOUTIQUE_FAMILIES,
  BOUTIQUE_COUNTRIES,
  BOUTIQUE_EN_COUNTRIES,
} from "@/data/boutiqueGeoData";

const toAbsolute = (img) =>
  img && img.startsWith("http") ? img : `${SITE_URL}${img.startsWith("/") ? img : `/${img}`}`;

export default function Boutique() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart } = useCart();

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "Tous") list = list.filter((p) => p.category === activeCategory);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.short.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeCategory, query]);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.short,
        image: toAbsolute(product.image),
        category: product.category,
        brand: { "@type": "Brand", name: "Fallcon Tech" },
        url: `${SITE_URL}/boutique/${product.slug}`,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Boutique", item: `${SITE_URL}/boutique` },
    ],
  };

  return (
    <>
      <SEO
        path="/boutique"
        title="Équipements réseaux Huawei : routeurs, switches, serveurs & pare-feu à Dakar | Fallcon Tech"
        description="Revente de matériel réseau Huawei à Dakar : routeurs NetEngine 8000 M8/M1A/M14, switch S5735, serveur 2288X V5 et pare-feu USG6625E. Configuré, livré et installé au Sénégal."
        image={siteLogo}
        jsonLd={[productJsonLd, breadcrumbJsonLd]}
      />

      {/* Top label strip (small page title) */}
      <div className="shop-topstrip">
        <div className="site-shell">
          <p className="overline">Boutique · Équipements réseaux</p>
        </div>
      </div>

      {/* Toolbar: categories + search + cart */}
      <div className="shop-toolbar">
        <div className="site-shell shop-toolbar-inner">
          <div className="shop-cats" role="tablist" aria-label="Filtrer par catégorie">
            {["Tous", ...CATEGORIES].map((category) => (
              <button
                key={category}
                className={`shop-cat ${activeCategory === category ? "shop-cat-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="shop-toolbar-right">
            <label className="shop-search">
              <Search size={16} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un matériel…"
                aria-label="Rechercher un matériel"
              />
            </label>
            <CartButton onClick={() => setCartOpen(true)} />
          </div>
        </div>
      </div>

      {/* Catalog */}
      <section className="shop-catalog">
        <div className="site-shell">
          {activeCategory !== "Tous" && (
            <p className="shop-cat-desc">{CATEGORY_META[activeCategory]}</p>
          )}
          <p className="shop-price-note">
            Prix communiqués sur devis (configuration, licences, quantité, installation).
            Chaque demande est confirmée sur WhatsApp avant commande.
          </p>

          {filtered.length === 0 ? (
            <div className="shop-empty">
              <p>Aucun matériel ne correspond à votre recherche.</p>
              <button className="button button-secondary" onClick={() => { setQuery(""); setActiveCategory("Tous"); }}>
                Voir tout le catalogue
              </button>
            </div>
          ) : (
            <div className="shop-grid">
              {filtered.map((product) => (
                <article className="product-card" key={product.slug}>
                  <Link
                    to={`/boutique/${product.slug}`}
                    className="product-media"
                    aria-label={`Voir la fiche ${product.name}`}
                  >
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <img src={product.image} alt={`${product.name} — ${product.category} Huawei`} width={product.imgW} height={product.imgH} loading="lazy" decoding="async" />
                  </Link>
                  <div className="product-body">
                    <p className="product-cat">{product.category}</p>
                    <h3><Link to={`/boutique/${product.slug}`}>{product.name}</Link></h3>
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
                        Détails
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Maillage SEO : catégories + pays desservis */}
          <div className="shop-seo-block">
            <h2 className="shop-seo-h2">Nos catégories de matériel</h2>
            <div className="shop-linkgrid">
              {BOUTIQUE_FAMILIES.map((family) => (
                <Link key={family.slug} to={`/boutique/categorie/${family.slug}`}>
                  {family.label}
                </Link>
              ))}
            </div>
            <h2 className="shop-seo-h2 shop-seo-h2-spaced">Matériel réseau Huawei livré en Afrique</h2>
            <div className="shop-linkgrid">
              {BOUTIQUE_COUNTRIES.map((country) => (
                <Link key={country.slug} to={`/boutique/pays/${country.slug}`}>
                  <span aria-hidden="true">{country.flag}</span> Équipements réseau {country.prep} {country.name}
                </Link>
              ))}
            </div>
            <h2 className="shop-seo-h2 shop-seo-h2-spaced">English · Supply across English-speaking Africa</h2>
            <div className="shop-linkgrid">
              <Link to="/huawei-network-equipment">
                <span aria-hidden="true">🌍</span> Huawei network equipment for Africa (English)
              </Link>
              {BOUTIQUE_EN_COUNTRIES.map((country) => (
                <Link key={country.slug} to={`/huawei-network-equipment/country/${country.slug}`}>
                  <span aria-hidden="true">{country.flag}</span> Network equipment in {country.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="shop-footer-cta">
            <p>Besoin d'une configuration complète ou d'un devis sur mesure ?</p>
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
