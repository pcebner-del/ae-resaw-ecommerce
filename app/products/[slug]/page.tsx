import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import ProductPurchasePanel from "@/components/ProductPurchasePanel";
import FadeIn from "@/components/FadeIn";
import { getAllProducts, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "A&E Resaw" };
  return {
    title: `${product.name} — A&E Resaw`,
    description: product.description.slice(0, 160)
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <article className="border-t border-line pt-32 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <FadeIn>
          <Link href="/products" className="label text-ash transition-colors hover:text-copper">
            &larr; Collection
          </Link>
        </FadeIn>

        <div className="mt-12 grid gap-16 md:mt-20 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-7" delay={100}>
            <ProductGallery product={product} />
          </FadeIn>

          <FadeIn className="md:col-span-5 md:pt-8" delay={200}>
            <p className="label text-ash">{product.woodSpecies}</p>
            <h1 className="serif mt-4 text-display-lg text-bone">{product.name}</h1>

            <div className="mt-10 max-w-prose text-base leading-relaxed text-bone/75 md:text-lg">
              {product.description}
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-line py-6">
              <div>
                <dt className="label text-ash">Length</dt>
                <dd className="serif mt-2 text-xl text-bone">{product.dimensions.length}&Prime;</dd>
              </div>
              <div>
                <dt className="label text-ash">Width</dt>
                <dd className="serif mt-2 text-xl text-bone">{product.dimensions.width}&Prime;</dd>
              </div>
              <div>
                <dt className="label text-ash">Depth</dt>
                <dd className="serif mt-2 text-xl text-bone">{product.dimensions.height}&Prime;</dd>
              </div>
            </dl>

            <div className="mt-12">
              <ProductPurchasePanel product={product} />
            </div>
          </FadeIn>
        </div>

        <div className="mt-32 border-t border-line py-16 md:mt-48 md:py-20">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="label text-ash">Provenance</p>
            </div>
            <p className="md:col-span-7 max-w-prose text-bone/70">
              Sourced from reclaimed and sustainably-managed stock. Each piece is dried in Phoenix&rsquo;s natural climate for a minimum of eighteen months before resawing, then conditioned again post-cut to ensure dimensional stability for builders.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
