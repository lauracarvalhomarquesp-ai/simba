"use client";

import { useState, useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/lib/pricing";
import { DatePicker } from "@/components/date-picker";
import { CartSummary } from "@/components/cart-summary";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "lucide-react";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const datePickerRef = useRef<HTMLDivElement>(null);

  const handleDateRequired = () => {
    if (datePickerRef.current) {
      datePickerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      // Optional: Add a shake animation or highlight effect
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-safari-beige/30 pb-24">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 py-8 -mt-8 relative z-10">
          <div 
            ref={datePickerRef}
            className="bg-white rounded-xl shadow-lg p-6 border border-safari-brown/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold text-safari-dark flex items-center justify-center md:justify-start gap-2">
                  <Calendar className="h-6 w-6 text-safari-orange" />
                  Quando você quer nos visitar?
                </h2>
                <p className="text-gray-600 mt-1">
                  Selecione uma data para ver os preços e disponibilidade.
                </p>
              </div>
              
              <div className="w-full md:w-auto flex justify-center">
                 <div className="bg-gray-50 p-2 rounded-lg border">
                    <DatePicker 
                      selected={selectedDate} 
                      onSelect={setSelectedDate} 
                      className="border-0 shadow-none"
                    />
                 </div>
              </div>
            </div>
            {selectedDate && (
              <div className="mt-4 text-center md:text-right border-t pt-4">
                <p className="text-safari-green font-medium">
                  Data selecionada: <span className="font-bold">{format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-safari-dark sm:text-4xl">
              Escolha sua Aventura
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ingressos e combos especiais para você
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                selectedDate={selectedDate}
                onSelectDateRequired={handleDateRequired}
              />
            ))}
          </div>
        </section>

        <section className="bg-white py-16 mt-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
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
      <CartSummary />
    </div>
  );
}
