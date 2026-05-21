import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts(3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <Image
          src="/images/editorial/hero.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink" aria-hidden />

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
          <FadeIn>
            <p className="label text-ash">Est. Phoenix — Arizona</p>
          </FadeIn>

          <div className="max-w-4xl">
            <FadeIn delay={150}>
              <h1 className="serif text-display-xl text-bone">
                A<span className="text-ash">&amp;</span>E
                <br />
                Resaw
              </h1>
            </FadeIn>
            <FadeIn delay={350}>
              <p className="label mt-10 text-bone/80">Quality blanks made in Phoenix Arizona</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1600px] px-6 py-32 md:grid md:grid-cols-12 md:gap-12 md:px-10 md:py-48">
          <div className="md:col-span-2">
            <FadeIn>
              <p className="label text-ash">Manifesto</p>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={100}>
              <p className="serif text-3xl leading-tight text-bone md:text-5xl md:leading-[1.15]">
                Tonewood, resawn by hand in the Sonoran desert. Each blank is selected for grain, density, and voice — then dried slowly, patiently, until it is ready to become an instrument.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 flex items-end justify-between md:mb-24">
            <FadeIn>
              <div>
                <p className="label text-ash">Selected</p>
                <h2 className="serif mt-4 text-display-lg text-bone">The Collection</h2>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <Link href="/products" className="label text-bone/80 transition-colors hover:text-copper">
                View All
              </Link>
            </FadeIn>
          </div>

          <div className="grid gap-x-8 gap-y-20 md:grid-cols-3 md:gap-x-10">
            {featured.map((p, i) => (
              <FadeIn key={p.id} delay={i * 120}>
                <ProductCard product={p} priority={i === 0} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
