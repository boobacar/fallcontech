import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductBySlug } from "@/data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "fallcon-boutique-cart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch {
      /* stockage indisponible */
    }
  }, []);

  const persist = (next) => {
    setCart(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* stockage indisponible */
    }
  };

  const addToCart = (product, quantity = 1) =>
    persist({ ...cart, [product.slug]: (cart[product.slug] || 0) + quantity });

  const setQtyFor = (slug, quantity) => {
    const next = { ...cart };
    if (quantity <= 0) delete next[slug];
    else next[slug] = quantity;
    persist(next);
  };

  const clearCart = () => persist({});

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({ product: getProductBySlug(id), qty }))
        .filter((item) => item.product),
    [cart],
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0,
  );

  const value = useMemo(
    () => ({ cart, addToCart, setQtyFor, clearCart, cartItems, cartCount, cartTotal }),
    [cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart doit être utilisé dans un CartProvider");
  return context;
}
