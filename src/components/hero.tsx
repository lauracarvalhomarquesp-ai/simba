import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden bg-safari-brown">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2000&auto=format&fit=crop"
          alt="Simba Safari Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>
      <div className="relative container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
          Reviva a magia do Simba Safári na <span className="text-safari-orange">MELHOR ÉPOCA</span> do ANO!
        </h1>
        <p className="mb-8 max-w-2xl text-lg sm:text-xl drop-shadow-md">
          Uma aventura inesquecível para toda a família. Garanta seus ingressos antecipados com desconto.
        </p>
        <Button size="lg" className="bg-safari-orange hover:bg-safari-orange/90 text-lg px-8">
          COMPRAR AGORA
        </Button>
      </div>
    </section>
  );
}
