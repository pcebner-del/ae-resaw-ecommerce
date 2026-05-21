"use client";

import { useState } from "react";
import type { Variant } from "@/lib/products";

type Props = {
  slug: string;
  variant: Variant;
  quantity: number;
  disabled?: boolean;
};

export default function BuyButton({ slug, variant, quantity, disabled }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onClick() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, variant, quantity })
      });
      const data = await res.json();
      if (!res.ok || !data?.url) {
        throw new Error(data?.error || "Unable to start checkout.");
      }
      window.location.href = data.url as string;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        disabled={loading || disabled}
        className="group relative inline-flex w-full items-center justify-between border border-bone/40 px-6 py-5 transition-colors duration-300 hover:border-copper disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="label text-bone group-hover:text-copper">
          {disabled ? "Reserved" : loading ? "Preparing" : "Reserve · Stripe Checkout"}
        </span>
        <span aria-hidden className="label text-bone/60 transition-transform group-hover:translate-x-1 group-hover:text-copper">
          &rarr;
        </span>
      </button>
      {error && <p className="mt-3 text-sm text-copper">{error}</p>}
    </div>
  );
}
