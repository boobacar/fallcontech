import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import SEO from "@/components/SEO";
import siteLogo from "@/assets/logo.webp";
import { absoluteUrl, SITE_URL } from "@/data/seoData";
import {
  products,
  CATEGORIES,
  CATEGORY_META,
  formatFCFA,
  getProductBySlug,
} from "@/data/products";

const WHATSAPP_NUMBER = "221774837576";
const CART_STORAGE_KEY = "fallcon-boutique-cart";

const toAbsolute = (img) =>
  img && img.startsWith("http") ? img : `${SITE_URL}${img.startsWith("/") ? img : `/${img}`}`;

function buildOrderMessage(items, total, customer) {
  const lines = [
    "Bonjour Fallcon Tech, voici ma commande depuis votre Boutique :",
    "",
    ...items.map(
      (item, i) =>
        `${i + 1}. ${item.product.name} × ${item.qty} — ${formatFCFA(item.product.price * item.qty)}${
          item.product.priceNote ? ` (${item.product.priceNote})` : ""
        }`,
    ),
    "",
    `Total estimé : ${formatFCFA(total)}`,
    "",
  ];
  if (customer.name) lines.push(`Nom : ${customer.name}`);
  if (customer.phone) lines.push(`Téléphone : ${customer.phone}`);
  if (customer.city) lines.push(`Ville : ${customer.city}`);
  if (customer.note) lines.push(`Note : ${customer.note}`);
  return encodeURIComponent(lines.join("\n"));
}

export default function Boutique() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [customer, setCustomer] = useState({ name: "", phone: "", city: "", note: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {
      /* stockage indisponible */
    }
  }, []);

  const persist = (next) => {
    setCart(next);
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* stockage indisponible */
    }
  };

  const selected = selectedId ? getProductBySlug(selectedId) : null;

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, quantity]) => ({ product: getProductBySlug(id), qty: quantity }))
        .filter((item) => item.product),
    [cart],
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0,
  );

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

  const addToCart = (product, quantity = 1) => {
    persist({ ...cart, [product.slug]: (cart[product.slug] || 0) + quantity });
    setSelectedId(null);
    setQty(1);
  };

  const setQtyFor = (slug, quantity) => {
    if (quantity <= 0) {
      const next = { ...cart };
      delete next[slug];
      persist(next);
      return;
    }
    persist({ ...cart, [slug]: quantity });
  };

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
        ...(product.price != null
          ? {
              offers: {
                "@type": "Offer",
                price: product.price,
                priceCurrency: "XOF",
                availability: "https://schema.org/InStock",
                url: `${SITE_URL}/boutique`,
                priceValidUntil: "2027-12-31",
              },
            }
          : {}),
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

      {/* Hero */}
      <section className="page-hero">
        <div className="site-shell shop-hero-inner">
          <p className="overline">Boutique · Équipements réseaux</p>
          <h1>Matériel réseau Huawei, configuré et installé.</h1>
          <p>
            Routeurs NetEngine 8000, switches S5735, serveurs 2288X et pare-feu USG. Chaque
            commande est confirmée avec vous sur WhatsApp avant paiement.
          </p>
          <p className="shop-trustline">
            <span><ShieldCheck size={15} /> Matériel vérifié & garanti</span>
            <span><Truck size={15} /> Livraison à Dakar et au Sénégal</span>
            <span><MessageCircle size={15} /> Confirmation sur WhatsApp</span>
          </p>
        </div>
      </section>

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
            <button className="shop-cart-btn" onClick={() => setCartOpen(true)} aria-label="Voir le panier">
              <ShoppingCart size={18} />
              <span>Panier</span>
              {cartCount > 0 && <b className="cart-count">{cartCount}</b>}
            </button>
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
            Prix indicatifs en F CFA. Chaque commande est confirmée sur WhatsApp avant paiement.
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
                  <button
                    className="product-media"
                    onClick={() => { setSelectedId(product.slug); setQty(1); }}
                    aria-label={`Voir la fiche ${product.name}`}
                  >
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </button>
                  <div className="product-body">
                    <p className="product-cat">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p className="product-short">{product.short}</p>
                    <div className="product-foot">
                      <p className="product-price">
                        {formatFCFA(product.price)}
                        {product.priceNote && <small>{product.priceNote}</small>}
                      </p>
                      <span className={`product-stock stock-${product.stock.toLowerCase().replace(/\s/g, "")}`}>
                        {product.stock}
                      </span>
                    </div>
                    <div className="product-actions">
                      <button className="button button-primary" onClick={() => addToCart(product, 1)}>
                        Ajouter au panier
                      </button>
                      <button
                        className="button button-secondary"
                        onClick={() => { setSelectedId(product.slug); setQty(1); }}
                      >
                        Détails
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="shop-footer-cta">
            <p>Besoin d'une configuration complète ou d'un devis sur mesure ?</p>
            <Link className="button button-secondary" to="/contact">
              Demander un devis <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product modal */}
      {selected && (
        <div className="shop-overlay" onClick={() => setSelectedId(null)} role="presentation">
          <div className="product-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={selected.name}>
            <button className="modal-close" onClick={() => setSelectedId(null)} aria-label="Fermer">
              <X size={20} />
            </button>
            <div className="modal-media">
              <img src={selected.image} alt={selected.name} />
            </div>
            <div className="modal-body">
              <p className="product-cat">{selected.category}</p>
              <h2>{selected.name}</h2>
              <p className="modal-short">{selected.short}</p>
              <ul className="modal-specs">
                {selected.specs.map((spec) => (
                  <li key={spec}><CheckCircle2 size={16} /> {spec}</li>
                ))}
              </ul>
              <div className="modal-price-row">
                <p className="product-price">
                  {formatFCFA(selected.price)}
                  {selected.priceNote && <small>{selected.priceNote}</small>}
                </p>
                <span className={`product-stock stock-${selected.stock.toLowerCase().replace(/\s/g, "")}`}>
                  {selected.stock}
                </span>
              </div>
              <div className="modal-qty-row">
                <span>Quantité</span>
                <div className="qty-control">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuer"><Minus size={16} /></button>
                  <b>{qty}</b>
                  <button onClick={() => setQty((q) => q + 1)} aria-label="Augmenter"><Plus size={16} /></button>
                </div>
              </div>
              <button className="button button-primary modal-add" onClick={() => addToCart(selected, qty)}>
                Ajouter au panier · {formatFCFA(selected.price * qty)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart drawer */}
      {cartOpen && (
        <div className="shop-overlay" onClick={() => setCartOpen(false)} role="presentation">
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Panier">
            <div className="cart-head">
              <h2>Votre panier</h2>
              <button className="modal-close" onClick={() => setCartOpen(false)} aria-label="Fermer le panier">
                <X size={20} />
              </button>
            </div>

            {checkoutStep === "cart" && (
              <>
                {cartItems.length === 0 ? (
                  <div className="cart-empty">
                    <p>Votre panier est vide.</p>
                    <p className="cart-empty-sub">Parcourez le catalogue pour ajouter des équipements.</p>
                  </div>
                ) : (
                  <ul className="cart-list">
                    {cartItems.map(({ product, qty }) => (
                      <li className="cart-item" key={product.slug}>
                        <img src={product.image} alt="" />
                        <div>
                          <p className="cart-item-name">{product.name}</p>
                          <p className="cart-item-price">
                            {formatFCFA(product.price)}
                            {product.priceNote && <small> {product.priceNote}</small>}
                          </p>
                          <div className="qty-control cart-qty">
                            <button onClick={() => setQtyFor(product.slug, qty - 1)} aria-label="Diminuer"><Minus size={15} /></button>
                            <b>{qty}</b>
                            <button onClick={() => setQtyFor(product.slug, qty + 1)} aria-label="Augmenter"><Plus size={15} /></button>
                          </div>
                        </div>
                        <button className="cart-remove" onClick={() => setQtyFor(product.slug, 0)} aria-label={`Retirer ${product.name}`}>
                          <Trash2 size={17} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {cartItems.length > 0 && (
                  <div className="cart-total">
                    <span>Total estimé</span>
                    <strong>{formatFCFA(cartTotal)}</strong>
                  </div>
                )}

                <div className="cart-actions">
                  <button
                    className="button button-primary cart-checkout"
                    disabled={cartItems.length === 0}
                    onClick={() => { setCheckoutStep("form"); }}
                  >
                    Commander via WhatsApp <ArrowRight size={17} />
                  </button>
                  <button className="text-link" onClick={() => setCartOpen(false)}>
                    Continuer mes achats
                  </button>
                </div>
              </>
            )}

            {checkoutStep === "form" && (
              <>
                <label className="form-label">Vos coordonnées</label>
                <div className="institutional-form cart-form">
                  <div className="form-grid">
                    <label>Nom et prénom *<input name="name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} required placeholder="Votre nom" /></label>
                    <label>WhatsApp / Téléphone *<input name="phone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} required placeholder="77 000 00 00" /></label>
                    <label className="form-wide">Ville *<input name="city" value={customer.city} onChange={(e) => setCustomer({ ...customer, city: e.target.value })} required placeholder="Dakar" /></label>
                    <label className="form-wide">Note (option)<textarea name="note" value={customer.note} onChange={(e) => setCustomer({ ...customer, note: e.target.value })} placeholder="Précisions de livraison, horaires, besoin d'installation…" rows={3} /></label>
                  </div>
                  <button className="button button-primary form-submit" onClick={() => {
                    if (!customer.name || !customer.phone || !customer.city) return;
                    const msg = buildOrderMessage(cartItems, cartTotal, customer);
                    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
                    setCheckoutStep("done");
                  }}>
                    Envoyer ma commande sur WhatsApp <MessageCircle size={17} />
                  </button>
                  <p className="form-note">Votre commande s'ouvre dans WhatsApp, prête à être envoyée.</p>
                </div>
                <button className="text-link cart-back" onClick={() => setCheckoutStep("cart")}>
                  ← Retour au panier
                </button>
              </>
            )}

            {checkoutStep === "done" && (
              <div className="cart-success">
                <CheckCircle2 size={40} className="cart-success-icon" />
                <h3>Commande préparée !</h3>
                <p>WhatsApp s'est ouvert avec le récapitulatif de votre panier. Envoyez-le pour finaliser.</p>
                <button className="button button-secondary" onClick={() => { setCart({}); try { localStorage.removeItem(CART_STORAGE_KEY); } catch {} setCheckoutStep("cart"); setCartOpen(false); }}>
                  Fermer
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
