import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-safari-beige/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-safari-dark mb-8 text-center">Fale Conosco</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-sm h-fit">
              <h2 className="text-xl font-bold text-safari-dark mb-6">Canais de Atendimento</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-safari-orange/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-safari-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">WhatsApp & Telefone</h3>
                    <p className="text-gray-600 mb-1">Segunda a Sexta, das 9h às 18h</p>
                    <a href="https://wa.me/5511999999999" className="text-safari-green font-bold hover:underline">
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-safari-orange/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-safari-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">E-mail</h3>
                    <p className="text-gray-600 mb-1">Respondemos em até 24h úteis</p>
                    <a href="mailto:suporte@simbasafari.com.br" className="text-safari-green font-bold hover:underline">
                      suporte@simbasafari.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-safari-orange/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-safari-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Endereço</h3>
                    <p className="text-gray-600">
                      Av. do Cursino, 6338<br />
                      Vila Moraes, São Paulo - SP<br />
                      CEP: 04169-000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-safari-dark mb-6">Envie uma Mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                  <Input placeholder="Dúvida sobre ingressos" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safari-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <Button className="w-full bg-safari-green hover:bg-safari-green/90 font-bold">
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
