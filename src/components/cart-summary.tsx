"use client";

import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CartSummary() {
  const { cart } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(cart.items.length > 0);
  }, [cart.items.length]);

  if (!isVisible) return null;

  const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">
            {totalItems} {totalItems === 1 ? "item" : "itens"} selecionados
          </span>
          <span className="text-xl font-bold text-safari-green">
            {formatCurrency(cart.total)}
          </span>
        </div>
        <Link href="/cart">
          <Button className="bg-safari-orange hover:bg-safari-orange/90 font-bold px-8 h-12">
            <ShoppingCart className="mr-2 h-5 w-5" />
            FECHAR PEDIDO
          </Button>
        </Link>
      </div>
    </div>
  );
}
