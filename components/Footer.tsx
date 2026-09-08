import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-dark px-margin-mobile pb-stack-lg pt-stack-lg text-cream md:px-margin-desktop">
      <div className="mx-auto mb-stack-lg grid max-w-container-max grid-cols-1 gap-gutter md:grid-cols-4">
        <div>
          <Link
            href="/"
            className="mb-4 flex items-center gap-2 font-display text-xl font-bold lowercase text-cream"
          >
            <span className="flex h-9 w-9 items-center justify-center">
              <img
                src="https://www.nerdtech.in/nerdtech-hero-logo.png"
                alt="Nerdtech"
                className="h-full w-full object-contain"
              />
            </span>
            nerdtech
          </Link>
          <p className="max-w-xs font-body text-sm text-white/50">
            Your partner in digital excellence. Designing, developing,
            branding &amp; marketing solutions that transform businesses and
            inspire people.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/40">
            Navigate
          </h4>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="font-body text-sm text-white/70 transition-colors hover:text-accent">Home</Link>
            <Link href="/expertise" className="font-body text-sm text-white/70 transition-colors hover:text-accent">Expertise</Link>
            <Link href="/work" className="font-body text-sm text-white/70 transition-colors hover:text-accent">Work</Link>
            <Link href="/products" className="font-body text-sm text-white/70 transition-colors hover:text-accent">Products</Link>
            <Link href="/team" className="font-body text-sm text-white/70 transition-colors hover:text-accent">Team</Link>
          </nav>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/40">
            More
          </h4>
          <nav className="flex flex-col gap-2">
            <Link href="/blog" className="font-body text-sm text-white/70 transition-colors hover:text-accent">Blog</Link>
            <Link href="/careers" className="font-body text-sm text-white/70 transition-colors hover:text-accent">Careers</Link>
            <Link href="/contact" className="font-body text-sm text-white/70 transition-colors hover:text-accent">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-white/40">
            Contact
          </h4>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <p>+91 94056 49047</p>
            <p>contact@nerdtech.in</p>
            <p>India</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 border-t border-dark-border pt-stack-md md:flex-row">
        <p className="font-body text-sm text-white/40">
          © {new Date().getFullYear()} NerdTech. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/nerdtech.in_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="https://facebook.com/nerdtech.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/company/nerdtechin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}