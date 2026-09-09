"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Stage, slugify } from "@/lib/expertise";

export default function ExpertiseTabs({ stages }: { stages: Stage[] }) {
  const searchParams = useSearchParams();
  const stageParam = searchParams.get("stage");
  const serviceParam = searchParams.get("service");

  const [activeKey, setActiveKey] = useState(
    stages.find((s) => s.key === stageParam)?.key ?? stages[0]?.key
  );
  const activeStage = stages.find((s) => s.key === activeKey) ?? stages[0];
  const [highlighted, setHighlighted] = useState(serviceParam);

  useEffect(() => {
    if (!serviceParam) return;
    const timer = setTimeout(() => {
      document
        .getElementById(`service-${serviceParam}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(timer);
  }, [activeKey, serviceParam]);

  useEffect(() => {
    if (!highlighted) return;
    const timer = setTimeout(() => setHighlighted(null), 2200);
    return () => clearTimeout(timer);
  }, [highlighted]);

  return (
    <div className="scroll-mt-28 md:scroll-mt-32" id="our-expertise">
      <div className="mt-6 flex flex-col gap-8 md:mt-8 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[3.25rem]">
          Our Expertise
        </h2>
        <p className="max-w-sm font-body text-sm leading-relaxed text-white/50 md:text-right">
          We dedicate ourselves to our craft with great care and attention to
          detail. That is what characterizes our work.
        </p>
      </div>

      {/* Pill tabs */}
      <div className="mt-10 flex flex-wrap gap-3 md:mt-14">
        {stages.map((stage) => {
          const isActive = stage.key === activeKey;
          return (
            <button
              key={stage.key}
              type="button"
              onClick={() => setActiveKey(stage.key)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? "border-accent bg-accent text-white shadow-[0_8px_24px_rgba(12,175,255,0.35)]"
                  : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {stage.title}
            </button>
          );
        })}
      </div>

      {/* Service cards */}
      <div
        key={activeStage.key}
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {activeStage.services.map((service, i) => {
          const slug = slugify(service.title);
          const isHighlighted = highlighted === slug;
          return (
          <div
            key={service.title}
            id={`service-${slug}`}
            className={`group flex scroll-mt-28 flex-col rounded-2xl border bg-dark-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.04] hover:shadow-[0_20px_45px_rgba(12,175,255,0.14)] md:scroll-mt-32 ${
              isHighlighted
                ? "border-accent shadow-[0_0_0_3px_rgba(12,175,255,0.35),0_20px_45px_rgba(12,175,255,0.2)]"
                : "border-white/[0.08]"
            }`}
            style={{
              animation: "fade-up 0.55s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: `${i * 0.07}s`,
            }}
          >
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-accent">
              {activeStage.title}
            </p>
            <h3 className="mb-3 font-display text-lg font-bold leading-snug text-white">
              {service.title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-white/50">
              {service.description}
            </p>
          </div>
          );
        })}
      </div>
    </div>
  );
}