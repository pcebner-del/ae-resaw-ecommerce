"use client";

import type { Variant } from "@/lib/products";
import { formatPrice } from "@/lib/products";

type Props = {
  variant: Variant;
  onChange: (v: Variant) => void;
  guitarPrice: number;
  bassPrice: number;
};

export default function VariantSelector({ variant, onChange, guitarPrice, bassPrice }: Props) {
  const options: { key: Variant; label: string; price: number }[] = [
    { key: "guitar", label: "Guitar Body", price: guitarPrice },
    { key: "bass", label: "Bass Body", price: bassPrice }
  ];

  return (
    <div role="radiogroup" aria-label="Body size" className="grid grid-cols-2 border-y border-line">
      {options.map((o, i) => {
        const active = variant === o.key;
        return (
          <button
            key={o.key}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.key)}
            className={`group relative flex flex-col items-start gap-2 px-6 py-7 text-left transition-colors duration-300 ${
              i === 0 ? "border-r border-line" : ""
            } ${active ? "bg-line/40" : "hover:bg-line/20"}`}
          >
            <span className={`label transition-colors ${active ? "text-copper" : "text-ash"}`}>
              {o.label}
            </span>
            <span className="serif text-2xl text-bone">{formatPrice(o.price)}</span>
            {active && (
              <span aria-hidden className="absolute inset-x-6 bottom-3 h-px bg-copper/70" />
            )}
          </button>
        );
      })}
    </div>
  );
}
