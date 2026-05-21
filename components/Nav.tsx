"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/products", label: "Collection" },
  { href: "/about", label: "Atelier" },
  { href: "/contact", label: "Contact" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${
        scrolled ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <Link
          href="/"
          className="serif text-2xl tracking-tight text-bone md:text-3xl"
          aria-label="A&E Resaw home"
        >
          A<span className="text-ash">&amp;</span>E&nbsp;Resaw
        </Link>

        <nav className="hidden gap-10 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="label text-bone/70 transition-colors duration-300 hover:text-copper"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="label flex h-9 w-9 flex-col items-center justify-center gap-[5px] text-bone md:hidden"
        >
          <span className={`h-px w-5 bg-bone transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-bone transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-px w-5 bg-bone transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-ink">
          <nav className="flex flex-col gap-6 px-6 py-8" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="label text-bone/80 hover:text-copper"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
