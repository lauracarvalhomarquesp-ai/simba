import { useState, useEffect } from "react";
import { Cart, CartItem } from "@/types";

const CART_STORAGE_KEY = "simba-safari-cart";

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItemIndex = prev.items.findIndex(
        (i) =>
          i.productId === item.productId &&
          new Date(i.date).toDateString() === new Date(item.date).toDateString()
      );

      let newItems = [...prev.items];

      if (existingItemIndex >= 0) {
        // Update quantity if same product and same date
        newItems[existingItemIndex].quantity += item.quantity;
        newItems[existingItemIndex].totalPrice += item.totalPrice;
      } else {
        newItems.push(item);
      }

      const newTotal = newItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

      return {
        items: newItems,
        total: newTotal,
      };
    });
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => {
      const newItems = [...prev.items];
      newItems.splice(index, 1);
      const newTotal = newItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
      return { items: newItems, total: newTotal };
    });
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isLoaded,
  };
}
