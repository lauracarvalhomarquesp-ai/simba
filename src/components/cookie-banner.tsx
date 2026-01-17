"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("simba-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("simba-cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-safari-dark text-white p-4 shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center md:text-left">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <a href="/politica-de-privacidade" className="underline hover:text-white">
            Política de Privacidade
          </a>.
        </p>
        <Button 
          onClick={handleAccept}
          className="bg-safari-green hover:bg-safari-green/90 whitespace-nowrap"
        >
          Aceitar e Fechar
        </Button>
      </div>
    </div>
  );
}
