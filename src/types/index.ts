export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  basePrice: number; // Used for display or fallback
  isCombo: boolean;
  pricingRules: {
    weekday?: number;
    weekend?: number;
    sameDay?: number;
    fixed?: number; // For fixed price items like "Meia Entrada"
  };
}

export interface CartItem {
  productId: string;
  productTitle: string;
  date: Date;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
