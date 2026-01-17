import Image from "next/image";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
        {product.isCombo && (
          <div className="absolute right-2 top-2 rounded-full bg-safari-orange px-3 py-1 text-xs font-bold text-white shadow-sm">
            SUPER COMBO
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl font-bold text-safari-dark line-clamp-2">
          {product.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3 flex-1">
          {product.description}
        </p>
        <div className="mt-auto">
          <div className="mb-4">
            <span className="text-xs text-gray-500">A partir de</span>
            <div className="text-2xl font-bold text-safari-green">
              {formatCurrency(product.basePrice)}
            </div>
          </div>
          <Button 
            className="w-full bg-safari-green hover:bg-safari-green/90 font-bold uppercase tracking-wide"
            onClick={() => onSelect(product)}
          >
            Comprar Agora
          </Button>
        </div>
      </div>
    </div>
  );
}
