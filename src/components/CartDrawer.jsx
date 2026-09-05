import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatFCFA } from "@/data/products";

const WHATSAPP_NUMBER = "221774837576";

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

export default function CartDrawer({ open, onClose }) {
  const { setQtyFor, clearCart, cartItems, cartTotal } = useCart();
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [customer, setCustomer] = useState({ name: "", phone: "", city: "", note: "" });

  useEffect(() => {
    if (open) setCheckoutStep("cart");
  }, [open]);

  if (!open) return null;

  return (
    <div className="shop-overlay" onClick={onClose} role="presentation">
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Panier">
        <div className="cart-head">
          <h2>Votre panier</h2>
          <button className="modal-close" onClick={onClose} aria-label="Fermer le panier">
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
                onClick={() => setCheckoutStep("form")}
              >
                Commander via WhatsApp <ArrowRight size={17} />
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
                <label>Nom et prénom *<input name="name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} required placeholder="Votre nom" /></label>
                <label>WhatsApp / Téléphone *<input name="phone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} required placeholder="77 000 00 00" /></label>
                <label className="form-wide">Ville *<input name="city" value={customer.city} onChange={(e) => setCustomer({ ...customer, city: e.target.value })} required placeholder="Dakar" /></label>
                <label className="form-wide">Note (option)<textarea name="note" value={customer.note} onChange={(e) => setCustomer({ ...customer, note: e.target.value })} placeholder="Précisions de livraison, horaires, besoin d'installation…" rows={3} /></label>
              </div>
              <button
                className="button button-primary form-submit"
                onClick={() => {
                  if (!customer.name || !customer.phone || !customer.city) return;
                  const msg = buildOrderMessage(cartItems, cartTotal, customer);
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
                  setCheckoutStep("done");
                }}
              >
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
            <button className="button button-secondary" onClick={() => { clearCart(); setCheckoutStep("cart"); onClose(); }}>
              Fermer
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
