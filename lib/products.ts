import productsData from "@/data/products.json";

export type ProductDimensions = {
  length: number;
  width: number;
  height: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  woodSpecies: string;
  description: string;
  images: {
    top: string;
    bottom: string;
    sideProfile: string;
  };
  guitarBodyPrice: number;
  bassBodyPrice: number;
  weightLb: number;
  dimensions: ProductDimensions;
  inStock: boolean;
};

export type Variant = "guitar" | "bass";

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(count = 3): Product[] {
  return products.filter((p) => p.inStock).slice(0, count);
}

export function priceFor(product: Product, variant: Variant): number {
  return variant === "guitar" ? product.guitarBodyPrice : product.bassBodyPrice;
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(cents);
}
