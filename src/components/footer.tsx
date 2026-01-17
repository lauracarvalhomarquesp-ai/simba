import Link from "next/link";
import { ShieldCheck, Lock, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-safari-dark text-white pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-safari-orange">Simba Safari</h3>
            <p className="text-sm text-gray-400">
              SIMBA ADVENTURES LTDA
              <br />
              CNPJ: 00.000.000/0001-00
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4 mt-1 shrink-0" />
              <p>Av. do Cursino, 6338 - Vila Moraes, São Paulo - SP, 04169-000</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Atendimento</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="h-4 w-4" />
              <a href="mailto:suporte@simbasafari.com.br" className="hover:text-white">suporte@simbasafari.com.br</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Phone className="h-4 w-4" />
              <a href="https://wa.me/5511999999999" className="hover:text-white">(11) 99999-9999</a>
            </div>
            <Link href="/contato" className="text-sm text-safari-orange hover:underline">
              Fale Conosco
            </Link>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Informações Legais</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/termos-de-uso" className="hover:text-white">Termos de Uso</Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="/politica-de-reembolso" className="hover:text-white">Política de Reembolso</Link>
              </li>
            </ul>
          </div>

          {/* Security */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Segurança</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-green-400 bg-white/5 p-2 rounded">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm font-medium">Site 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 p-2 rounded">
                <Lock className="h-5 w-5" />
                <span className="text-sm font-medium">Dados Criptografados</span>
              </div>
              <div className="mt-2">
                <p className="text-xs text-gray-500 mb-1">Pagamento via:</p>
                <div className="flex items-center gap-2 bg-white px-2 py-1 rounded w-fit">
                   {/* PIX Logo Placeholder using text/icon */}
                   <span className="text-xs font-bold text-safari-dark">PIX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Simba Safari. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Imagens meramente ilustrativas. Preços sujeitos a alteração sem aviso prévio.
          </p>
        </div>
      </div>
    </footer>
  );
}
