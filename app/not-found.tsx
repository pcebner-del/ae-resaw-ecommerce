import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-t border-line pt-40">
      <div className="mx-auto flex min-h-[60vh] max-w-[1600px] flex-col justify-center px-6 md:px-10">
        <p className="label text-ash">404</p>
        <h1 className="serif mt-6 text-display-lg text-bone">Nothing here.</h1>
        <p className="mt-6 max-w-md text-base text-bone/70">
          The page you requested has been removed or never existed.
        </p>
        <Link
          href="/"
          className="label mt-12 inline-flex items-center gap-4 border-b border-bone/40 pb-3 text-bone transition-colors hover:border-copper hover:text-copper self-start"
        >
          Return Home
          <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
