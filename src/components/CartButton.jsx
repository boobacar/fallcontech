import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartButton({ onClick }) {
  const { cartCount } = useCart();
  return (
    <button className="shop-cart-btn" onClick={onClick} aria-label="Voir le panier">
      <ShoppingCart size={18} />
      <span>Panier</span>
      {cartCount > 0 && <b className="cart-count">{cartCount}</b>}
    </button>
  );
}
