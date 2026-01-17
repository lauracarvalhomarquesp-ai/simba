import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-safari-beige/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-safari-dark mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-green max-w-none text-gray-700 space-y-6">
            <p>
              A sua privacidade é importante para nós. É política do Simba Safari respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Simba Safari, e outros sites que possuímos e operamos.
            </p>

            <h2 className="text-xl font-bold text-safari-dark">1. Informações que coletamos</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p>
              Os dados coletados incluem:
            </p>
            <ul className="list-disc pl-6">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone/WhatsApp</li>
              <li>CPF (para emissão de nota fiscal e identificação do ingresso)</li>
            </ul>

            <h2 className="text-xl font-bold text-safari-dark">2. Uso das Informações</h2>
            <p>
              Utilizamos seus dados para:
            </p>
            <ul className="list-disc pl-6">
              <li>Processar sua compra e emitir seus ingressos.</li>
              <li>Enviar os ingressos para seu e-mail.</li>
              <li>Entrar em contato em caso de alterações no funcionamento do parque.</li>
              <li>Melhorar nossos serviços e atendimento.</li>
            </ul>

            <h2 className="text-xl font-bold text-safari-dark">3. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou para processamento de pagamentos (gateways de pagamento seguros).
            </p>

            <h2 className="text-xl font-bold text-safari-dark">4. Segurança</h2>
            <p>
              Armazenamos os dados coletados pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
