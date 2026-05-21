import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Atelier — A&E Resaw",
  description:
    "On the craft of resawing tonewood in the Sonoran desert. A&E Resaw is a small Phoenix workshop producing guitar and bass body blanks for builders."
};

export default function AboutPage() {
  return (
    <article className="border-t border-line pt-32 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <header className="md:grid md:grid-cols-12 md:gap-12">
          <div className="md:col-span-2">
            <FadeIn>
              <p className="label text-ash">Atelier</p>
            </FadeIn>
          </div>
          <div className="md:col-span-9">
            <FadeIn delay={100}>
              <h1 className="serif text-display-lg text-bone">
                A small Phoenix workshop, devoted to a single thing.
              </h1>
            </FadeIn>
          </div>
        </header>

        <section className="mt-32 grid gap-16 md:mt-40 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-3">
            <p className="label text-ash">Practice</p>
          </FadeIn>
          <div className="space-y-8 md:col-span-7">
            <FadeIn delay={100}>
              <p className="text-lg leading-relaxed text-bone/80 md:text-xl">
                A&amp;E Resaw produces guitar and bass body blanks from selected tonewoods. We do not sell finished instruments. We do not produce inventory at scale. Each blank is cut, conditioned, and graded in a single workshop in Chandler, Arizona &mdash; the southeast edge of the Phoenix metropolitan area.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg leading-relaxed text-bone/70 md:text-xl">
                Our work is for builders. Luthiers, hobbyists, and small shops who recognise that a blank is the foundation of an instrument&rsquo;s voice and want material that has been handled with the same regard they will give it.
              </p>
            </FadeIn>
          </div>
        </section>
      </div>

      <FadeIn className="relative my-32 h-[60svh] md:my-48 md:h-[80svh]">
        <Image
          src="/images/editorial/atelier.svg"
          alt="A&E Resaw workshop interior, low light, raw wood on the bench"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </FadeIn>

      <div className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10 md:pb-48">
        <section className="grid gap-16 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-3">
            <p className="label text-ash">Material</p>
          </FadeIn>
          <div className="space-y-8 md:col-span-7">
            <FadeIn delay={100}>
              <p className="text-lg leading-relaxed text-bone/80 md:text-xl">
                Stock is selected from reclaimed lumber, salvage from architectural demolitions across the American Southwest, and sustainably managed mills. Each board is measured, weighed, and tapped before resawing &mdash; density and resonance, not appearance alone, decide its destiny.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg leading-relaxed text-bone/70 md:text-xl">
                The desert is our climate-controlled chamber. Phoenix&rsquo;s dry, stable conditions are extraordinary for slow drying; we accelerate nothing.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="mt-32 grid gap-16 md:mt-40 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-3">
            <p className="label text-ash">Location</p>
          </FadeIn>
          <div className="md:col-span-7">
            <FadeIn delay={100}>
              <p className="serif text-3xl leading-tight text-bone md:text-4xl">
                Chandler &middot; Arizona
                <br />
                <span className="text-ash">Visits by appointment only.</span>
              </p>
            </FadeIn>
          </div>
        </section>
      </div>
    </article>
  );
}
