"use client";

import { useRef } from "react";

type SectionSpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionSpotlight({ children, className = "" }: SectionSpotlightProps) {
  const ref = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group/spot relative ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(680px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(12,175,255,0.10), transparent 60%)",
        }}
      />
      {children}
    </section>
  );
}