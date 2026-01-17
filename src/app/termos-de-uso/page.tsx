import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsOfUse() {
  return (
    <div className="flex min-h-screen flex-col bg-safari-beige/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-safari-dark mb-8">Termos de Uso</h1>
          
          <div className="prose prose-green max-w-none text-gray-700 space-y-6">
            <h2 className="text-xl font-bold text-safari-dark">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o site Simba Safari, você aceita e concorda em estar vinculado aos termos e disposições deste acordo.
            </p>

            <h2 className="text-xl font-bold text-safari-dark">2. Uso dos Ingressos</h2>
            <ul className="list-disc pl-6">
              <li>Os ingressos são válidos apenas para a data selecionada no momento da compra.</li>
              <li>É obrigatória a apresentação do ingresso (impresso ou digital) e documento com foto na entrada.</li>
              <li>Ingressos de "Meia Entrada" exigem comprovação do benefício na entrada do parque.</li>
            </ul>

            <h2 className="text-xl font-bold text-safari-dark">3. Regras de Visitação</h2>
            <p>
              Para garantir a segurança de todos, os visitantes devem seguir as orientações dos funcionários do parque. É proibido alimentar os animais, exceto nas áreas e horários permitidos e supervisionados.
            </p>

            <h2 className="text-xl font-bold text-safari-dark">4. Cancelamento e Reagendamento</h2>
            <p>
              Consulte nossa Política de Reembolso para informações sobre cancelamentos. Reagendamentos estão sujeitos à disponibilidade e podem incorrer em taxas adicionais.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
