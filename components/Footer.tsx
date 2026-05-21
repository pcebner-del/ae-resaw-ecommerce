import Link from "next/link";

const links = [
  { href: "/products", label: "Collection" },
  { href: "/about", label: "Atelier" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-3 md:px-10 md:py-20">
        <div>
          <p className="serif text-3xl text-bone">A&amp;E Resaw</p>
          <p className="label mt-6 text-ash">Quality blanks &nbsp;·&nbsp; Phoenix, AZ</p>
        </div>

        <nav className="flex flex-col gap-4" aria-label="Footer">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="label text-bone/70 transition-colors hover:text-copper"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
          <p className="label text-ash">Atelier</p>
          <p className="text-sm leading-relaxed text-bone/60">
            Chandler &middot; Arizona<br />
            By appointment only
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10">
          <p className="label text-ash">&copy; {new Date().getFullYear()} A&amp;E Resaw</p>
          <p className="label text-ash">Made in Phoenix</p>
        </div>
      </div>
    </footer>
  );
}
