import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRICE_LABEL } from "@/data/products";
import { track } from "@/lib/track";

const WHATSAPP_NUMBER = "221774837576";

function buildOrderMessage(items, customer) {
  const lines = [
    "Bonjour Fallcon Tech, voici ma demande depuis votre Boutique :",
    "",
    ...items.map(
      (item, i) =>
        `${i + 1}. ${item.product.name} × ${item.qty}${
          item.product.configNote ? ` — ${item.product.configNote}` : ""
        }`,
    ),
    "",
    "Merci de me communiquer le devis : prix, licences, délai et installation.",
    "",
  ];
  if (customer.name) lines.push(`Nom : ${customer.name}`);
  if (customer.company) lines.push(`Société : ${customer.company}`);
  if (customer.phone) lines.push(`Téléphone : ${customer.phone}`);
  if (customer.email) lines.push(`E-mail : ${customer.email}`);
  if (customer.city) lines.push(`Ville : ${customer.city}`);
  if (customer.note) lines.push(`Note : ${customer.note}`);
  return encodeURIComponent(lines.join("\n"));
}

export default function CartDrawer({ open, onClose }) {
  const { setQtyFor, clearCart, cartItems } = useCart();
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [customer, setCustomer] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    note: "",
    website: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    if (open) {
      setCheckoutStep("cart");
      setStatus("idle");
      setError("");
    }
  }, [open]);

  if (!open) return null;

  const update = (field) => (e) => setCustomer({ ...customer, [field]: e.target.value });

  const validate = () => {
    if (customer.name.trim().length < 2) return "Indiquez votre nom.";
    if (customer.phone.trim().length < 6) return "Indiquez un téléphone joignable.";
    if (customer.email && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(customer.email.trim()))
      return "L'adresse e-mail semble incorrecte.";
    return "";
  };

  const submitQuote = async () => {
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const r = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...customer,
          items: cartItems.map(({ product, qty }) => ({
            name: product.name,
            qty,
            configNote: product.configNote || "",
            slug: product.slug,
          })),
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || !data.ok) throw new Error(data.error || "L'envoi a échoué.");
      track("generate_lead", {
        ref: data.ref,
        items: cartItems.length,
        company: Boolean(customer.company),
        email: Boolean(customer.email),
      });
      setReference(data.ref);
      clearCart();
      setStatus("idle");
      setCheckoutStep("done");
    } catch (e) {
      setStatus("error");
      setError(e.message || "L'envoi a échoué. Réessayez ou écrivez à info@fallcontech.com.");
    }
  };

  const openWhatsApp = () => {
    track("whatsapp_click", { source: "boutique_panier" });
    const msg = buildOrderMessage(cartItems, customer);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="shop-overlay" onClick={onClose} role="presentation">
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Ma demande">
        <div className="cart-head">
          <h2>Ma demande</h2>
          <button className="modal-close" onClick={onClose} aria-label="Fermer le panier">
            <X size={20} />
          </button>
        </div>

        {checkoutStep === "cart" && (
          <>
            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Votre demande est vide.</p>
                <p className="cart-empty-sub">Parcourez le catalogue pour ajouter des équipements à votre demande de devis.</p>
              </div>
            ) : (
              <ul className="cart-list">
                {cartItems.map(({ product, qty }) => (
                  <li className="cart-item" key={product.slug}>
                    <img src={product.image} alt="" />
                    <div>
                      <p className="cart-item-name">{product.name}</p>
                      <p className="cart-item-price">
                        {PRICE_LABEL}
                        {product.configNote && <small> · {product.configNote}</small>}
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
                <span>Montant</span>
                <strong>Sur devis</strong>
              </div>
            )}

            <div className="cart-actions">
              <button
                className="button button-primary cart-checkout"
                disabled={cartItems.length === 0}
                onClick={() => {
                  track("begin_quote", { items: cartItems.length });
                  setCheckoutStep("form");
                }}
              >
                Demander un devis <ArrowRight size={17} />
              </button>
              <button className="text-link" onClick={onClose}>
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
                <label>Nom et prénom *<input name="name" value={customer.name} onChange={update("name")} required placeholder="Votre nom" autoComplete="name" /></label>
                <label>Société<input name="company" value={customer.company} onChange={update("company")} placeholder="Nom de l'entreprise" autoComplete="organization" /></label>
                <label>Téléphone / WhatsApp *<input name="phone" value={customer.phone} onChange={update("phone")} required placeholder="77 000 00 00" autoComplete="tel" inputMode="tel" /></label>
                <label>E-mail<input name="email" type="email" value={customer.email} onChange={update("email")} placeholder="vous@entreprise.com" autoComplete="email" /></label>
                <label className="form-wide">Ville *<input name="city" value={customer.city} onChange={update("city")} required placeholder="Dakar" autoComplete="address-level2" /></label>
                <label className="form-wide">Précisions (option)<textarea name="note" value={customer.note} onChange={update("note")} placeholder="Quantité visée, délai, besoin d'installation, adresse de livraison…" rows={3} /></label>
                {/* Piège à robots */}
                <input
                  type="text"
                  name="website"
                  value={customer.website}
                  onChange={update("website")}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                />
              </div>

              {error && (
                <p role="alert" style={{ color: "#b42318", fontSize: "0.9rem", margin: "0.5rem 0" }}>
                  {error}
                </p>
              )}

              <button
                className="button button-primary form-submit"
                onClick={submitQuote}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>Envoi en cours… <Loader2 size={17} className="spin" /></>
                ) : (
                  <>Envoyer ma demande <ArrowRight size={17} /></>
                )}
              </button>

              <button className="text-link cart-whatsapp" onClick={openWhatsApp} type="button">
                <MessageCircle size={16} /> Préférer WhatsApp
              </button>

              <p className="form-note">
                Réponse sous 24 heures ouvrées avec prix, licences, délai et installation.
                {customer.email ? " Un accusé de réception vous sera envoyé." : " Ajoutez un e-mail pour recevoir l'accusé de réception."}
              </p>
            </div>
            <button className="text-link cart-back" onClick={() => setCheckoutStep("cart")}>
              ← Retour au panier
            </button>
          </>
        )}

        {checkoutStep === "done" && (
          <div className="cart-success">
            <CheckCircle2 size={40} className="cart-success-icon" />
            <h3>Demande envoyée</h3>
            <p>
              Votre demande est enregistrée{reference ? <> sous la référence <b>{reference}</b></> : null}. Nous revenons vers vous
              sous 24 heures ouvrées avec le devis complet.
            </p>
            <p className="cart-empty-sub">Un e-mail de confirmation vous a été adressé si vous avez indiqué votre adresse.</p>
            <button className="button button-secondary" onClick={() => { setCheckoutStep("cart"); onClose(); }}>
              Fermer
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
