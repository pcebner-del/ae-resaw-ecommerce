import Link from "next/link";
import { products } from "@/lib/products";

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">Collection</h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Premium blanks meticulously crafted for discerning luthiers
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="aspect-square bg-cream mb-6 flex items-center justify-center group-hover:bg-charcoal transition-colors duration-300">
                <span className="text-sm tracking-widest uppercase text-charcoal/30 group-hover:text-white/30">
                  {product.wood}
                </span>
              </div>
              <h3 className="text-xl font-serif mb-2 tracking-wide">
                {product.name}
              </h3>
              <p className="text-sm text-charcoal/60 mb-3 uppercase tracking-widest">
                {product.category === 'guitar' ? 'Guitar Body' : 'Bass Body'}
              </p>
              <p className="text-lg tracking-wide">{formatPrice(product.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
