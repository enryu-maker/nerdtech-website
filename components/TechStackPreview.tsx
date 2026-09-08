"use client";

import { useState } from "react";
import { TECH_STACK } from "@/lib/techStack";
import TechIcon from "@/components/TechIcon";

export default function TechStackPreview() {
  const [activeKey, setActiveKey] = useState(TECH_STACK[0].key);
  const activeCategory =
    TECH_STACK.find((c) => c.key === activeKey) ?? TECH_STACK[0];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Left: heading + blurb, pinned so it stays in view while the
          card grid scrolls past it. */}
      <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-[2.75rem]">
          Tech stack that stacks up
        </h2>
        <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink-muted">
          We use technologies that work best for your software product, no
          matter if it&rsquo;s a trending or a time-tested one.
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[auto,1fr]">
          {/* Category tabs */}
          <div className="flex shrink-0 flex-row gap-6 overflow-x-auto sm:w-[176px] sm:flex-col sm:gap-1 sm:overflow-visible sm:border-l sm:border-cardline">
            {TECH_STACK.map((category) => {
              const isActive = category.key === activeKey;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveKey(category.key)}
                  aria-pressed={isActive}
                  className="group relative shrink-0 rounded-r-lg py-2 pl-6 text-left transition-colors duration-300 hover:bg-cream-dim/60 sm:pl-6"
                >
                  <span
                    className="absolute -left-[1px] top-1/2 hidden h-5 w-[2px] origin-center rounded-full bg-accent transition-all duration-300 ease-out sm:block"
                    style={{
                      transform: `translateY(-50%) scaleY(${isActive ? 1 : 0})`,
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                  <span
                    className={`absolute -left-[27px] top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 sm:hidden ${
                      isActive ? "bg-accent" : "bg-cardline"
                    }`}
                  />
                  <h3
                    className={`whitespace-nowrap font-body text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? "translate-x-0.5 text-ink"
                        : "text-ink-faint group-hover:translate-x-0.5 group-hover:text-ink-muted"
                    }`}
                  >
                    {category.label}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Tech cards */}
          <div
            key={activeCategory.key}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {activeCategory.items.map((item, i) => (
              <div
                key={item.name}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-cardline bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(12,175,255,0.12)]"
                style={{
                  animation: "fade-up 0.55s cubic-bezier(0.16,1,0.3,1) both",
                  animationDelay: `${i * 0.06}s`,
                }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `#${item.color}14` }}
                >
                  <TechIcon icon={item.icon} color={item.color} className="h-6 w-6" />
                </span>
                <span className="font-body text-sm font-bold text-ink">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}