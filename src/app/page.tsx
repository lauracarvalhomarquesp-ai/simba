"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/pricing";
import { Product } from "@/types";

export default function Home() {
  const router = useRouter();

  const handleProductSelect = (product: Product) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-safari-beige/30">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-safari-dark sm:text-4xl">
              Escolha sua Aventura
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Selecione o ingresso ideal para você e sua família
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleProductSelect}
              />
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                 {/* Placeholder for map or park image */}
                 <div className="absolute inset-0 bg-safari-green/10 flex items-center justify-center">
                    <span className="text-safari-green font-bold">Mapa do Parque</span>
                 </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-safari-dark mb-6">
                  Por que visitar o Simba Safári?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Contato direto com a natureza",
                    "Animais soltos na mata",
                    "Passeio educativo para crianças",
                    "Segurança e conforto",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-safari-orange" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
