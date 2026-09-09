"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import JobApplicationForm from "@/components/JobApplicationForm";

export default function ResumeCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Once the form mounts, scroll it into view below the fixed navbar.
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <>
      {/*CTA (dark)*/}
      <section className="relative overflow-hidden bg-dark px-margin-mobile pb-20 pt-16 text-center md:px-margin-desktop">
        <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_40%,black,transparent)]" />

        <Reveal distance={30}>
          <p className="relative mb-5 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Don&apos;t see your role?
          </p>
          <h2 className="relative mx-auto max-w-xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            We&apos;d still love to hear from you
          </h2>
          <p className="relative mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-white/50">
            Send us your resume and tell us what you&apos;re great at —
            we&apos;re always open to meeting new talent.
          </p>
          {!isOpen && (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(12,175,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(12,175,255,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative transition-colors duration-300 group-hover:text-accent">
                Send your resume
              </span>
              <span
                aria-hidden="true"
                className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </button>
          )}
        </Reveal>
      </section>

      {/*OPEN APPLICATION FORM (white) — only rendered once the button is tapped*/}
      {isOpen && (
        <section
          ref={formRef}
          className="scroll-mt-[96px] border-t border-ink/10 px-margin-mobile py-16 md:px-margin-desktop md:py-20"
        >
          <div className="mx-auto max-w-container-max">
            <Reveal distance={20}>
              <JobApplicationForm roleTitle="Open Application" />
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}