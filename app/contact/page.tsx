import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — A&E Resaw",
  description: "Inquiries, custom commissions, and visits — by appointment."
};

export default function ContactPage() {
  return (
    <section className="border-t border-line pt-32 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-6 pb-40 md:px-10 md:pb-56">
        <header className="md:grid md:grid-cols-12 md:gap-12">
          <div className="md:col-span-2">
            <FadeIn>
              <p className="label text-ash">Contact</p>
            </FadeIn>
          </div>
          <div className="md:col-span-9">
            <FadeIn delay={100}>
              <h1 className="serif text-display-lg text-bone">Make an inquiry.</h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
                For custom commissions, dimensions outside our standard range, or to arrange a workshop visit, write below. We respond personally to every message.
              </p>
            </FadeIn>
          </div>
        </header>

        <div className="mt-24 grid gap-16 md:mt-32 md:grid-cols-12 md:gap-12">
          <FadeIn className="md:col-span-2">
            <p className="label text-ash">Form</p>
          </FadeIn>
          <FadeIn className="md:col-span-7" delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
