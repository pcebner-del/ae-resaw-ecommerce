"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";

const views: { key: keyof Product["images"]; label: string }[] = [
  { key: "top", label: "Top" },
  { key: "bottom", label: "Bottom" },
  { key: "sideProfile", label: "Side Profile" }
];

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState<keyof Product["images"]>("top");

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-line md:aspect-[5/6]">
        {views.map((v) => (
          <Image
            key={v.key}
            src={product.images[v.key]}
            alt={`${product.name} body blank — ${v.label.toLowerCase()} view`}
            fill
            priority={v.key === "top"}
            sizes="(min-width: 768px) 60vw, 100vw"
            className={`object-cover transition-opacity duration-700 ease-editorial ${
              active === v.key ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
        {views.map((v, i) => (
          <button
            key={v.key}
            type="button"
            onClick={() => setActive(v.key)}
            className={`label transition-colors duration-300 ${
              active === v.key ? "text-copper" : "text-ash hover:text-bone"
            }`}
            aria-pressed={active === v.key}
          >
            <span className="mr-3 text-ash/60">{String(i + 1).padStart(2, "0")}</span>
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}
