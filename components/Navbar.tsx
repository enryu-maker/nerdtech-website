
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Work", href: "/work" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/nerdtechin",
    icon: (
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
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nerdtech.in_",
    icon: (
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
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/nerdtech.in",
    icon: (
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
    ),
  },
];

const JOURNEY_STEPS = ["Design", "Develop", "Brand", "Market"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {/*HEADER */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-cardline bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-5 md:px-margin-desktop">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-xl font-bold lowercase text-ink"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full text-[10px] font-bold text-cream">
              <img
                src="https://www.nerdtech.in/nerdtech-hero-logo.png"
                alt="Nerdtech"
              />
            </span>

            nerdtech
          </Link>

          {/* Menu Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2 font-mono text-[11px] font-medium uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-cream"
            aria-label="Open menu"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            Menu

            <span className="material-symbols-outlined text-base leading-none">
              menu
            </span>
          </button>
        </div>
      </header>

      {/*DIMMED BACKDROP*/}
      <div
        className={`fixed inset-0 z-[55] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      {/*SLIDING MENU PANEL*/}
      <div
        className={`fixed inset-y-0 right-0 z-[60] flex w-[92%] flex-row overflow-hidden bg-cream shadow-[-20px_0_60px_rgba(18,18,18,0.18)] transition-transform duration-500 ease-out sm:w-4/5 lg:w-1/2 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        {/*JOURNEY DIAGRAM COLUMN */}
        <div
          className="hidden w-36 flex-shrink-0 flex-col items-center justify-center border-r border-ink/10 bg-ink/[0.03] py-10 sm:flex md:w-44"
          aria-hidden="true"
        >
          {JOURNEY_STEPS.map((step, i) => (
            <div
              key={step}
              className="flex flex-col items-center"
            >
              {/* Journey Button */}
              <span className="whitespace-nowrap rounded-full border border-ink/20 bg-cream px-5 py-2.5 font-mono text-xs font-semibold text-ink shadow-sm">
                {step}
              </span>

              {/*LONG STRAIGHT ARROW*/}
              {i < JOURNEY_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="relative my-2 h-40 w-px bg-ink/50"
                >
                  {/* Arrow Head */}
                  <span className="absolute -bottom-1 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-ink/60" />
                </span>
              )}
            </div>
          ))}
        </div>

        {/*MAIN MENU CONTENT*/}
        <div className="flex h-full w-full flex-1 flex-col overflow-y-auto px-margin-mobile py-6 sm:px-10 sm:py-8 md:px-12">
          {/*CLOSE BUTTON*/}
          <div className="flex justify-end">
            <button
              type="button"
              className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:text-accent"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              Close

              <span className="material-symbols-outlined text-lg leading-none">
                close
              </span>
            </button>
          </div>

          {/*MENU (LEFT) + GET IN TOUCH / SOCIAL MEDIA (RIGHT)*/}
          <div className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-[1fr_auto]">
            {/* MENU */}
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                Menu
              </p>

              <nav className="flex flex-col">
                {NAV_LINKS.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(link.href);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      tabIndex={open ? 0 : -1}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between py-2 font-display text-2xl font-bold leading-tight transition-colors sm:text-3xl md:text-4xl ${
                        active
                          ? "text-accent"
                          : "text-ink hover:text-accent"
                      }`}
                    >
                      {link.label}

                      {/* Hover arrow */}
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined hidden text-xl text-ink-faint opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:inline-block"
                      >
                        arrow_outward
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/*GET IN TOUCH + SOCIAL MEDIA*/}
            <div className="flex flex-col gap-6 sm:w-56">
              {/* Get In Touch */}
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  Get in touch
                </p>

                <div className="flex flex-row flex-wrap items-center gap-2.5">
                  {/* Phone */}
                  <a
                    href="tel:+919405649047"
                    tabIndex={open ? 0 : -1}
                    className="inline-flex w-full items-center gap-1.5 rounded-full border border-accent/60 px-4 py-2 font-body text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white sm:w-auto"
                  >
                    <span className="material-symbols-outlined text-sm leading-none">
                      call
                    </span>

                    +91 94056 49047
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@nerdtech.in"
                    tabIndex={open ? 0 : -1}
                    className="inline-flex w-full items-center gap-1.5 rounded-full border border-accent/60 px-4 py-2 font-body text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white sm:w-auto"
                  >
                    <span className="material-symbols-outlined text-sm leading-none">
                      mail
                    </span>

                    contact@nerdtech.in
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  Social Media
                </p>

                <nav className="flex flex-col gap-2.5">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={open ? 0 : -1}
                      className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors group-hover:border-accent group-hover:text-accent">
                        {s.icon}
                      </span>
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}