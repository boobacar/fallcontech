import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartButton({ onClick, label = "Ma demande", ariaLabel = "Voir ma demande de devis" }) {
  const { cartCount } = useCart();
  return (
    <button className="shop-cart-btn" onClick={onClick} aria-label={ariaLabel}>
      <ShoppingCart size={18} />
      <span>{label}</span>
      {cartCount > 0 && <b className="cart-count">{cartCount}</b>}
    </button>
  );
}
