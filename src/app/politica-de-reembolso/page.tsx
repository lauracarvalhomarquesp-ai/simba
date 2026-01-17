import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RefundPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-safari-beige/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-safari-dark mb-8">Política de Reembolso</h1>
          
          <div className="prose prose-green max-w-none text-gray-700 space-y-6">
            <h2 className="text-xl font-bold text-safari-dark">1. Direito de Arrependimento</h2>
            <p>
              Conforme o Artigo 49 do Código de Defesa do Consumidor (CDC), você tem o direito de desistir da compra em até 7 (sete) dias corridos após a data da compra, desde que a solicitação seja feita com pelo menos 24 horas de antecedência à data da visita agendada.
            </p>

            <h2 className="text-xl font-bold text-safari-dark">2. Como Solicitar</h2>
            <p>
              Para solicitar o cancelamento e reembolso, entre em contato com nosso suporte através do e-mail <strong>suporte@simbasafari.com.br</strong> informando o número do pedido e CPF do comprador.
            </p>

            <h2 className="text-xl font-bold text-safari-dark">3. Prazos de Estorno</h2>
            <ul className="list-disc pl-6">
              <li><strong>Cartão de Crédito:</strong> O estorno será solicitado à operadora do cartão e poderá aparecer em até duas faturas subsequentes.</li>
              <li><strong>PIX:</strong> O reembolso será feito na mesma conta de origem em até 5 dias úteis.</li>
            </ul>

            <h2 className="text-xl font-bold text-safari-dark">4. Não Comparecimento (No-Show)</h2>
            <p>
              O não comparecimento na data agendada sem solicitação prévia de cancelamento ou reagendamento não dá direito a reembolso.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
