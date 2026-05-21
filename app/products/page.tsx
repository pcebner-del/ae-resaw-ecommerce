import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Collection — A&E Resaw",
  description: "Custom guitar and bass body blanks. Selected tonewoods, resawn in Phoenix, Arizona."
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="border-t border-line pt-32 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <header className="mb-20 md:mb-32 md:grid md:grid-cols-12 md:gap-12">
          <div className="md:col-span-2">
            <FadeIn>
              <p className="label text-ash">Collection</p>
            </FadeIn>
          </div>
          <div className="md:col-span-9">
            <FadeIn delay={100}>
              <h1 className="serif text-display-lg text-bone">Body Blanks</h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
                Each blank is dimensioned for guitar or bass construction, kiln-stabilized in our Phoenix workshop, and graded for tonal consistency before release. Inventory is limited and rotated as material is selected.
              </p>
            </FadeIn>
          </div>
        </header>

        <div className="grid gap-x-10 gap-y-28 pb-32 md:grid-cols-2 md:gap-x-16 md:gap-y-40 md:pb-48">
          {products.map((p, i) => (
            <FadeIn key={p.id} delay={(i % 2) * 120}>
              <div className={i % 2 === 1 ? "md:mt-24" : ""}>
                <ProductCard product={p} priority={i < 2} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
