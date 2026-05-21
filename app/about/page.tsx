export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">About</h1>
          <p className="text-xl tracking-widest uppercase text-charcoal/70">
            Crafted in Phoenix, Arizona
          </p>
        </div>

        {/* Story Section */}
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-serif mb-6 tracking-wide">Our Story</h2>
            <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
              <p>
                A&E Resaw was founded on a simple principle: exceptional instruments 
                begin with exceptional materials. Located in the heart of Phoenix, Arizona, 
                our workshop combines traditional craftsmanship with modern precision to 
                produce premium guitar and bass body blanks.
              </p>
              <p>
                Every blank that leaves our facility has been meticulously inspected, 
                measured, and finished to exacting standards. We understand that luthiers 
                and instrument builders demand consistency, quality, and reliability—and 
                we deliver on all three.
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-charcoal/10">
            <h2 className="text-3xl font-serif mb-6 tracking-wide">Our Process</h2>
            <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
              <p>
                We source our materials from trusted suppliers who share our commitment 
                to sustainability and quality. Each piece of wood is carefully selected 
                for grain pattern, density, and tonal characteristics.
              </p>
              <p>
                Our cutting process combines precision CNC technology with hand-finishing 
                techniques. This hybrid approach ensures dimensional accuracy while 
                preserving the natural character of the wood. The result is a blank that's 
                ready for your vision—whether you're building a vintage-inspired instrument 
                or pushing the boundaries of modern design.
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-charcoal/10">
            <h2 className="text-3xl font-serif mb-6 tracking-wide">
              Phoenix Workshop
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
              <p>
                Based in Phoenix, Arizona, our workshop benefits from the region's 
                dry climate—ideal for wood stability and minimal moisture-related 
                movement. This environmental advantage, combined with our climate-controlled 
                storage, ensures your blanks arrive ready to work with.
              </p>
              <p>
                We're proud to contribute to the thriving community of luthiers, 
                builders, and musicians who demand the very best from their materials.
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-charcoal/10">
            <h2 className="text-3xl font-serif mb-6 tracking-wide">
              Quality Commitment
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-4">
              <p>
                Every blank is inspected before shipping. We stand behind our work 
                with a satisfaction guarantee. If a blank doesn't meet your expectations, 
                we'll make it right.
              </p>
              <p>
                Our goal isn't just to provide material—it's to be a trusted partner 
                in your craft.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
