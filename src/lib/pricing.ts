import { isSameDay, isWeekend, startOfDay } from "date-fns";
import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "INGRESSO AVULSO SIMBA SAFÁRI",
    description: "Acesso ao Simba Safári. Viva uma experiência única!",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=800&auto=format&fit=crop",
    basePrice: 59.95,
    isCombo: false,
    pricingRules: {
      weekday: 59.95,
      weekend: 89.90,
      sameDay: 119.90,
    },
  },
  {
    id: "p2",
    title: "COMBÃO - 5 ATRAÇÕES",
    description: "Zoo, Mundo Dino, Acqua Zoo, Simba, Jardim Botânico",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=800&auto=format&fit=crop",
    basePrice: 119.90,
    isCombo: true,
    pricingRules: {
      weekday: 119.90, // Antecipado is same for weekday/weekend unless specified otherwise, assuming flat "Antecipado"
      weekend: 119.90,
      sameDay: 149.90,
    },
  },
  {
    id: "p3",
    title: "SUPER COMBO - 4 ATRAÇÕES",
    description: "Zoo, Mundo Dino, Jardim Botânico, Simba Safari",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=800&auto=format&fit=crop",
    basePrice: 129.90,
    isCombo: true,
    pricingRules: {
      weekday: 129.90,
      weekend: 129.90,
      sameDay: 139.90,
    },
  },
  {
    id: "p4",
    title: "MEIA ENTRADA",
    description: "PCD, Idosos, Crianças 4-13 anos, Estudantes e Professores SP",
    image: "https://plus.unsplash.com/premium_photo-1661815122504-981ab69804b1?q=80&w=1153&auto=format&fit=crop",
    basePrice: 59.90,
    isCombo: false,
    pricingRules: {
      fixed: 59.90,
    },
  },
];

export function calculatePrice(product: Product, selectedDate: Date): number {
  const today = startOfDay(new Date());
  const checkDate = startOfDay(selectedDate);
  const isToday = isSameDay(today, checkDate);
  const isWknd = isWeekend(checkDate);

  // Fixed price always overrides everything
  if (product.pricingRules.fixed) {
    return product.pricingRules.fixed;
  }

  // Same day price
  if (isToday && product.pricingRules.sameDay) {
    return product.pricingRules.sameDay;
  }

  // Future date logic
  if (isWknd && product.pricingRules.weekend) {
    return product.pricingRules.weekend;
  }

  if (!isWknd && product.pricingRules.weekday) {
    return product.pricingRules.weekday;
  }

  // Fallback to base price if no rule matches (shouldn't happen with correct config)
  return product.basePrice;
}
