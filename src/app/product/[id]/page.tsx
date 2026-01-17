"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import { PRODUCTS, calculatePrice } from "@/lib/pricing";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/utils";
import { Minus, Plus, Calendar, Check } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find((p) => p.id === params.id);
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (product) {
      setPrice(product.basePrice);
    }
  }, [product]);

  useEffect(() => {
    if (product && selectedDate) {
      setPrice(calculatePrice(product, selectedDate));
    }
  }, [product, selectedDate]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleAddToCart = () => {
    if (!selectedDate) return;

    addToCart({
      productId: product.id,
      productTitle: product.title,
      date: selectedDate,
      quantity,
      pricePerUnit: price,
      totalPrice: price * quantity,
    });

    router.push("/cart");
  };

  return (
    <div className="flex min-h-screen flex-col bg-safari-beige/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image & Info */}
          <div className="space-y-6">
            <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-safari-dark mb-4">{product.title}</h1>
              <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Check className="text-safari-green h-5 w-5" />
                Incluso no ingresso:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Acesso completo à área selecionada</li>
                <li>• Seguro visitante</li>
                <li>• Estacionamento (cobrado à parte)</li>
              </ul>
            </div>
          </div>

          {/* Selection Panel */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-safari-dark mb-6">Configure seu Passeio</h2>
            
            <div className="space-y-8">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Selecione a Data da Visita
                </label>
                <div className="flex justify-center border rounded-lg p-4 bg-gray-50">
                  <DatePicker selected={selectedDate} onSelect={setSelectedDate} />
                </div>
                {selectedDate && (
                  <p className="mt-2 text-sm text-safari-green font-medium text-center">
                    Data selecionada: {format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </p>
                )}
              </div>

              {/* Quantity Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantidade de Ingressos
                </label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Price Summary */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-600">Preço unitário:</span>
                  <span className="font-medium">{formatCurrency(price)}</span>
                </div>
                <div className="flex justify-between items-end mb-6">
                  <span className="text-lg font-bold text-safari-dark">Total:</span>
                  <span className="text-3xl font-bold text-safari-green">
                    {formatCurrency(price * quantity)}
                  </span>
                </div>

                <Button 
                  className="w-full h-12 text-lg font-bold bg-safari-orange hover:bg-safari-orange/90"
                  disabled={!selectedDate}
                  onClick={handleAddToCart}
                >
                  {selectedDate ? "ADICIONAR AO CARRINHO" : "SELECIONE UMA DATA"}
                </Button>
                {!selectedDate && (
                  <p className="text-xs text-center text-red-500 mt-2">
                    Por favor, selecione uma data para continuar.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
