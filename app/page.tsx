import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cream">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-white/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-7xl md:text-9xl mb-6 tracking-wider text-white drop-shadow-lg">
            A&E RESAW
          </h1>
          <p className="text-lg md:text-xl tracking-widest uppercase text-white/90 mb-12 drop-shadow-md">
            Quality blanks made in Phoenix, Arizona
          </p>
          <Link
            href="/products"
            className="inline-block px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300 tracking-widest text-sm uppercase"
          >
            View Collection
          </Link>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl mb-8 tracking-wide">
            Crafted with Precision
          </h2>
          <p className="text-lg leading-relaxed text-charcoal/80 max-w-2xl mx-auto">
            Every blank we produce is meticulously crafted in our Phoenix workshop. 
            We source premium materials and employ traditional techniques combined 
            with modern precision to deliver exceptional quality for discerning luthiers 
            and craftspeople.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-square bg-white flex items-center justify-center">
              <div className="text-center p-12">
                <h3 className="text-3xl mb-4">Guitar Bodies</h3>
                <p className="text-charcoal/70 mb-6">
                  Precision-cut blanks for electric and acoustic builds
                </p>
                <Link
                  href="/products"
                  className="text-sm tracking-widest uppercase underline underline-offset-4"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="aspect-square bg-white flex items-center justify-center">
              <div className="text-center p-12">
                <h3 className="text-3xl mb-4">Bass Bodies</h3>
                <p className="text-charcoal/70 mb-6">
                  Robust blanks designed for low-end clarity
                </p>
                <Link
                  href="/products"
                  className="text-sm tracking-widest uppercase underline underline-offset-4"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
