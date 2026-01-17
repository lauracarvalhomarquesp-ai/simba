"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import { formatCurrency } from "@/lib/utils";
import { Trash2, ArrowLeft, CreditCard, QrCode } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<"cart" | "details" | "payment" | "success">("cart");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    setStep("details");
  };

  const handlePayment = async () => {
    setLoading(true);
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setStep("success");
    clearCart();
  };

  if (step === "success") {
    return (
      <div className="flex min-h-screen flex-col bg-safari-beige/30">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-safari-dark mb-4">Compra Realizada!</h2>
            <p className="text-gray-600 mb-8">
              Seus ingressos foram enviados para o email <strong>{formData.email}</strong>.
            </p>
            <Button onClick={() => router.push("/")} className="w-full">
              Voltar para Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-safari-beige/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-safari-dark mb-8">
          {step === "cart" && "Seu Carrinho"}
          {step === "details" && "Seus Dados"}
          {step === "payment" && "Pagamento"}
        </h1>

        {cart.items.length === 0 && step === "cart" ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-500 text-lg mb-6">Seu carrinho está vazio.</p>
            <Link href="/">
              <Button>Ver Ingressos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {step === "cart" && (
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  {cart.items.map((item, index) => (
                    <div key={index} className="p-6 border-b last:border-0 flex gap-4 items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-safari-dark">{item.productTitle}</h3>
                        <p className="text-sm text-gray-500">
                          Data: {format(new Date(item.date), "dd/MM/yyyy", { locale: ptBR })}
                        </p>
                        <p className="text-sm text-gray-500">
                          Quantidade: {item.quantity}x {formatCurrency(item.pricePerUnit)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-safari-green mb-2">
                          {formatCurrency(item.totalPrice)}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => removeFromCart(index)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remover
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {step === "details" && (
                <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome Completo</label>
                      <Input
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">CPF</label>
                      <Input
                        name="cpf"
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefone</label>
                      <Input
                        name="phone"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === "payment" && (
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <h3 className="font-bold text-lg mb-6">Escolha a forma de pagamento</h3>
                  
                  <div className="grid gap-4 sm:grid-cols-2 mb-8">
                    <button className="flex flex-col items-center justify-center p-6 border-2 border-safari-green bg-green-50 rounded-xl cursor-pointer transition-all">
                      <QrCode className="h-8 w-8 text-safari-green mb-2" />
                      <span className="font-bold text-safari-dark">PIX</span>
                      <span className="text-xs text-green-600 font-medium">Aprovação Imediata</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-6 border rounded-xl hover:border-gray-300 cursor-not-allowed opacity-50">
                      <CreditCard className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="font-bold text-gray-500">Cartão de Crédito</span>
                      <span className="text-xs text-gray-400">Em breve</span>
                    </button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg max-w-sm mx-auto mb-6">
                    <p className="text-sm text-gray-600 mb-2">Código PIX (Copia e Cola)</p>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 bg-white p-2 rounded border text-xs overflow-hidden text-ellipsis whitespace-nowrap">
                        00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-426614174000520400005303986540510.005802BR5913Simba Safari6008Sao Paulo62070503***6304E2CA
                      </code>
                      <Button size="sm" variant="outline">Copiar</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="h-fit space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-bold text-lg mb-4">Resumo do Pedido</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatCurrency(cart.total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxas</span>
                    <span>R$ 0,00</span>
                  </div>
                </div>
                <div className="border-t pt-4 flex justify-between items-center mb-6">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-xl text-safari-green">{formatCurrency(cart.total)}</span>
                </div>

                {step === "cart" && (
                  <Button 
                    className="w-full h-12 font-bold bg-safari-orange hover:bg-safari-orange/90"
                    onClick={handleCheckout}
                  >
                    FECHAR PEDIDO
                  </Button>
                )}

                {step === "details" && (
                  <div className="space-y-3">
                    <Button 
                      className="w-full h-12 font-bold bg-safari-green hover:bg-safari-green/90"
                      onClick={() => setStep("payment")}
                      disabled={!formData.name || !formData.email}
                    >
                      IR PARA PAGAMENTO
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setStep("cart")}
                    >
                      Voltar
                    </Button>
                  </div>
                )}

                {step === "payment" && (
                  <div className="space-y-3">
                    <Button 
                      className="w-full h-12 font-bold bg-safari-green hover:bg-safari-green/90"
                      onClick={handlePayment}
                      disabled={loading}
                    >
                      {loading ? "Processando..." : "CONFIRMAR PAGAMENTO"}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setStep("details")}
                      disabled={loading}
                    >
                      Voltar
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
