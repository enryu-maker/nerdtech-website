"use client";

import { useRef } from "react";

type FactCardProps = {
  value: string;
  label: string;
};

export default function FactCard({ value, label }: FactCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-3xl border border-cardline bg-white p-7 shadow-[0_12px_32px_rgba(13,13,13,0.10)] transition-transform duration-300 ease-out [transform-style:preserve-3d] hover:shadow-[0_24px_56px_rgba(13,13,13,0.18)] md:p-8"
    >
      <span className="relative block font-display text-5xl font-bold leading-none tracking-tight text-black [transform:translateZ(30px)] md:text-6xl">
        {value}
      </span>

      <span className="relative mt-6 flex items-center gap-3">
        <span className="h-px w-8 origin-left bg-accent/40 transition-all duration-500 group-hover:w-12 group-hover:bg-accent" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          {label}
        </span>
      </span>
    </div>
  );
}