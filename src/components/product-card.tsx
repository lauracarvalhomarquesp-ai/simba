"use client";

import Image from "next/image";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { calculatePrice } from "@/lib/pricing";
import { useCart } from "@/hooks/use-cart";
import { Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";

interface ProductCardProps {
  product: Product;
  selectedDate?: Date;
  onSelectDateRequired: () => void;
}

export function ProductCard({ product, selectedDate, onSelectDateRequired }: ProductCardProps) {
  const { cart, addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  // Calculate price based on selected date or fallback to base price
  const currentPrice = selectedDate 
    ? calculatePrice(product, selectedDate) 
    : product.basePrice;

  // Sync local quantity with cart
  useEffect(() => {
    if (!selectedDate) {
      setQuantity(0);
      return;
    }

    const cartItem = cart.items.find(
      (item) => 
        item.productId === product.id && 
        new Date(item.date).toDateString() === selectedDate.toDateString()
    );
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [cart, product.id, selectedDate]);

  const handleIncrement = () => {
    if (!selectedDate) {
      onSelectDateRequired();
      return;
    }

    addToCart({
      productId: product.id,
      productTitle: product.title,
      date: selectedDate,
      quantity: 1,
      pricePerUnit: currentPrice,
      totalPrice: currentPrice,
    });
  };

  const handleDecrement = () => {
    if (!selectedDate) return;
    
    // Find the item index in cart to remove/decrement
    // Note: This logic assumes useCart handles decrementing if we pass negative? 
    // No, useCart.addToCart adds. useCart.removeFromCart removes by index.
    // We need a better way to decrement in useCart or find the index here.
    // Let's look at useCart implementation.
    // It has removeFromCart(index).
    
    const itemIndex = cart.items.findIndex(
      (item) => 
        item.productId === product.id && 
        new Date(item.date).toDateString() === selectedDate.toDateString()
    );

    if (itemIndex >= 0) {
      // If quantity is 1, remove it. If > 1, we need to update quantity.
      // The current useCart doesn't support "decrement one".
      // I should probably update useCart to support "updateQuantity" or handle it here.
      // For now, I'll just remove the item if I can't decrement easily, 
      // BUT wait, I can just add with quantity -1?
      // Let's check useCart.addToCart: "newItems[existingItemIndex].quantity += item.quantity;"
      // Yes! passing -1 should work if I allow it.
      
      if (quantity > 1) {
         addToCart({
          productId: product.id,
          productTitle: product.title,
          date: selectedDate,
          quantity: -1,
          pricePerUnit: currentPrice,
          totalPrice: -currentPrice,
        });
      } else {
        removeFromCart(itemIndex);
      }
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
        {product.isCombo && (
          <div className="absolute right-2 top-2 rounded-full bg-safari-orange px-3 py-1 text-xs font-bold text-white shadow-sm">
            SUPER COMBO
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl font-bold text-safari-dark line-clamp-2">
          {product.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3 flex-1">
          {product.description}
        </p>
        <div className="mt-auto">
          <div className="mb-4">
            <span className="text-xs text-gray-500">
              {selectedDate ? "Preço para a data selecionada" : "A partir de"}
            </span>
            <div className="text-2xl font-bold text-safari-green">
              {formatCurrency(currentPrice)}
            </div>
          </div>
          
          {quantity > 0 ? (
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-1 border">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleDecrement}
                className="h-8 w-8 text-safari-dark hover:bg-white hover:shadow-sm"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-bold text-lg w-8 text-center">{quantity}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleIncrement}
                className="h-8 w-8 text-safari-dark hover:bg-white hover:shadow-sm"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button 
              className="w-full bg-safari-green hover:bg-safari-green/90 font-bold uppercase tracking-wide"
              onClick={handleIncrement}
            >
              Adicionar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
