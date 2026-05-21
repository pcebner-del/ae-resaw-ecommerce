import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Order Confirmed — A&E Resaw",
  description: "Thank you for your order."
};

type SearchParams = { session_id?: string };

export default function OrderConfirmedPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <section className="border-t border-line pt-40 md:pt-48">
      <div className="mx-auto flex min-h-[60vh] max-w-[1600px] flex-col justify-between px-6 pb-32 md:px-10">
        <div className="md:grid md:grid-cols-12 md:gap-12">
          <div className="md:col-span-2">
            <FadeIn>
              <p className="label text-ash">Confirmation</p>
            </FadeIn>
          </div>
          <div className="md:col-span-9">
            <FadeIn delay={100}>
              <h1 className="serif text-display-lg text-bone">Thank you.</h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
                Your order has been received. A confirmation has been sent to the email on file. Each blank is prepared by hand before shipment; you will be notified when your order leaves our workshop in Phoenix.
              </p>
            </FadeIn>
            {searchParams.session_id && (
              <FadeIn delay={300}>
                <p className="label mt-12 text-ash">
                  Reference&nbsp;&middot;&nbsp;
                  <span className="text-bone/60">{searchParams.session_id.slice(0, 18)}&hellip;</span>
                </p>
              </FadeIn>
            )}
          </div>
        </div>

        <FadeIn className="mt-24" delay={300}>
          <Link
            href="/products"
            className="label inline-flex items-center gap-4 border-b border-bone/40 pb-3 text-bone transition-colors hover:border-copper hover:text-copper"
          >
            Return to the Collection
            <span aria-hidden>&rarr;</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
