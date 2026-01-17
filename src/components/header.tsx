"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

export function Header() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-safari-brown text-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/20 hover:text-white">
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">Simba Safari</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Ingressos
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Reagendamento
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Dúvidas
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="secondary" className="relative gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Carrinho</span>
              {cart.items.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {cart.items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
