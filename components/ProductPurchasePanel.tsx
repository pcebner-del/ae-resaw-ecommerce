"use client";

import { useState } from "react";
import type { Product, Variant } from "@/lib/products";
import VariantSelector from "@/components/VariantSelector";
import QuantitySelector from "@/components/QuantitySelector";
import ShippingCalculator from "@/components/ShippingCalculator";
import BuyButton from "@/components/BuyButton";

export default function ProductPurchasePanel({ product }: { product: Product }) {
  const [variant, setVariant] = useState<Variant>("guitar");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-10">
      <VariantSelector
        variant={variant}
        onChange={setVariant}
        guitarPrice={product.guitarBodyPrice}
        bassPrice={product.bassBodyPrice}
      />

      <div className="flex items-center justify-between">
        <p className="label text-ash">Quantity</p>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </div>

      <BuyButton slug={product.slug} variant={variant} quantity={quantity} disabled={!product.inStock} />

      <ShippingCalculator product={product} quantity={quantity} />
    </div>
  );
}
