"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      aria-label={`${product.name} — view details`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-line">
        <Image
          src={product.images.top}
          alt={`${product.name} body blank, top view`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={priority}
          className={`object-cover transition-opacity duration-700 ease-editorial ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src={product.images.bottom}
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-700 ease-editorial ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
        {!product.inStock && (
          <span className="label absolute left-5 top-5 bg-ink/80 px-3 py-2 text-bone/80">Reserved</span>
        )}
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="serif text-2xl text-bone md:text-3xl">{product.name}</h3>
          <p className="label mt-2 text-ash">{product.woodSpecies}</p>
        </div>
        <div className="text-right">
          <p className="label text-ash">From</p>
          <p className="serif mt-1 text-2xl text-bone">{formatPrice(product.guitarBodyPrice)}</p>
        </div>
      </div>
    </Link>
  );
}
