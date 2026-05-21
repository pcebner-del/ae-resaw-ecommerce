"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import ImageGallery from "./ImageGallery";
import ShippingCalculator from "./ShippingCalculator";

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [sizeCategory, setSizeCategory] = useState<'guitarBody' | 'bassBody'>(
    product.sizeOptions.guitarBody ? 'guitarBody' : 'bassBody'
  );

  const handleAddToCart = () => {
    // Placeholder for Stripe integration
    alert("Cart functionality coming soon with Stripe integration");
  };

  return (
    <div className="pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="px-2 md:px-0">
            <div className="mb-8">
              <p className="text-sm tracking-widest uppercase text-charcoal/60 mb-3">
                {product.category === 'guitar' ? 'Guitar Body' : 'Bass Body'}
              </p>
              <h1 className="text-4xl md:text-5xl font-serif mb-6 tracking-wide">
                {product.name}
              </h1>
              <p className="text-3xl tracking-wide mb-8">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Description */}
            <div className="mb-10 pb-10 border-b border-charcoal/10">
              <p className="text-lg leading-relaxed text-charcoal/80">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-10 pb-10 border-b border-charcoal/10">
              <h3 className="text-sm tracking-widest uppercase mb-4">
                Specifications
              </h3>
              <div className="space-y-2 text-charcoal/70">
                <div className="flex justify-between">
                  <span>Wood Type</span>
                  <span className="font-medium text-charcoal">{product.wood}</span>
                </div>
                <div className="flex justify-between">
                  <span>Finish</span>
                  <span className="font-medium text-charcoal">{product.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span>Category</span>
                  <span className="font-medium text-charcoal">
                    {product.category === 'guitar' ? 'Guitar' : 'Bass'}
                  </span>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-10">
              <h3 className="text-sm tracking-widest uppercase mb-4">
                Size Category
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.sizeOptions.guitarBody && (
                  <button
                    onClick={() => setSizeCategory('guitarBody')}
                    className={`py-3 px-6 border transition-colors ${
                      sizeCategory === 'guitarBody'
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'border-charcoal/20 hover:border-charcoal'
                    }`}
                  >
                    <span className="text-sm tracking-widest uppercase">
                      Guitar Body
                    </span>
                  </button>
                )}
                {product.sizeOptions.bassBody && (
                  <button
                    onClick={() => setSizeCategory('bassBody')}
                    className={`py-3 px-6 border transition-colors ${
                      sizeCategory === 'bassBody'
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'border-charcoal/20 hover:border-charcoal'
                    }`}
                  >
                    <span className="text-sm tracking-widest uppercase">
                      Bass Body
                    </span>
                  </button>
                )}
              </div>

              {/* Size Options */}
              <div>
                <label className="text-sm tracking-widest uppercase block mb-3">
                  Select Size
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full py-3 px-4 border border-charcoal/20 bg-white focus:outline-none focus:border-charcoal"
                >
                  <option value="">Choose an option</option>
                  {product.sizeOptions[sizeCategory]?.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-charcoal text-white tracking-widest text-sm uppercase hover:bg-charcoal/90 transition-colors mb-8"
            >
              Add to Cart
            </button>

            {/* Shipping Calculator */}
            <div className="pt-10 border-t border-charcoal/10">
              <ShippingCalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
