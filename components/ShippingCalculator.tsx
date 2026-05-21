"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

type Rate = {
  carrier: string;
  service: string;
  amount: number;
  estimatedDays?: number | null;
};

type Props = {
  product: Product;
  quantity: number;
};

export default function ShippingCalculator({ product, quantity }: Props) {
  const [zip, setZip] = useState("");
  const [rates, setRates] = useState<Rate[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setRates(null);

    if (!/^\d{5}(-\d{4})?$/.test(zip.trim())) {
      setError("Enter a valid US ZIP code.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destinationZip: zip.trim(),
          productSlug: product.slug,
          quantity
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Unable to fetch shipping rates.");
      }
      setRates(data.rates as Rate[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to fetch shipping rates.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border-t border-line pt-8">
      <p className="label text-ash">Shipping</p>
      <form onSubmit={onSubmit} className="mt-5 flex items-end gap-4">
        <label className="flex-1">
          <span className="sr-only">ZIP code</span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="ZIP code"
            className="w-full border-b border-line bg-transparent px-0 py-3 text-lg text-bone placeholder:text-ash/60 focus:border-copper focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="label border-b border-bone/40 pb-3 text-bone transition-colors hover:border-copper hover:text-copper disabled:opacity-50"
        >
          {loading ? "Calculating" : "Calculate"}
        </button>
      </form>

      {error && <p className="mt-4 text-sm text-copper">{error}</p>}

      {rates && rates.length > 0 && (
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {rates.map((r, i) => (
            <li key={i} className="flex items-baseline justify-between py-4">
              <div>
                <p className="label text-bone">{r.service}</p>
                <p className="mt-1 text-xs text-ash">
                  {r.carrier}
                  {r.estimatedDays ? ` · ${r.estimatedDays} business day${r.estimatedDays === 1 ? "" : "s"}` : ""}
                </p>
              </div>
              <p className="serif text-xl text-bone">{formatPrice(r.amount)}</p>
            </li>
          ))}
        </ul>
      )}

      {rates && rates.length === 0 && (
        <p className="mt-4 text-sm text-ash">No rates available for that destination.</p>
      )}
    </div>
  );
}
