"use client";

import { useState } from "react";
import Link from "next/link";
import { Stage, slugify } from "@/lib/expertise";

export default function ExpertisePreview({ stages }: { stages: Stage[] }) {
  const [activeKey, setActiveKey] = useState(stages[0]?.key);
  const activeStage = stages.find((s) => s.key === activeKey) ?? stages[0];
  const totalServices = stages.reduce((n, s) => n + s.services.length, 0);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink md:text-[2.75rem]">
          We dedicate ourselves to our craft
        </h2>
        <p className="mt-5 max-w-md font-body text-base leading-relaxed text-ink-muted">
          From brand strategy to app development, we bring expertise
          across every digital touchpoint.
        </p>
        <Link
          href="/expertise"
          className="group/cta mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-cardline px-6 py-3 font-body text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_rgba(12,175,255,0.18)]"
        >
          Explore all services
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          >
            →
          </span>
        </Link>

        <div className="mt-10 hidden max-w-sm grid-cols-3 gap-6 border-t border-cardline pt-8 md:grid">
          <div>
            <p className="font-display text-2xl font-bold text-ink">
              {stages.length}
            </p>
            <p className="mt-1 font-body text-xs leading-snug text-ink-faint">
              Core disciplines
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-ink">
              {totalServices}+
            </p>
            <p className="mt-1 font-body text-xs leading-snug text-ink-faint">
              Specialized services
            </p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-ink">1</p>
            <p className="mt-1 font-body text-xs leading-snug text-ink-faint">
              Dedicated team
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[auto,1fr]">
          {/* Category tabs */}
          <div className="flex shrink-0 flex-row gap-6 overflow-x-auto sm:w-[176px] sm:flex-col sm:gap-1 sm:overflow-visible sm:border-l sm:border-cardline">
            {stages.map((stage) => {
              const isActive = stage.key === activeKey;
              return (
                <button
                  key={stage.key}
                  type="button"
                  onClick={() => setActiveKey(stage.key)}
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
                    {stage.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Service cards */}
          <div
            key={activeStage.key}
            className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {activeStage.services.map((service, i) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-cardline bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(12,175,255,0.12)]"
                style={{
                  animation: `fade-up 0.55s cubic-bezier(0.16,1,0.3,1) both`,
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                <h3 className="mb-2 font-display text-lg font-bold leading-snug text-ink">
                  {service.title}
                </h3>
                <p
                  className="mb-4 flex-1 font-body text-sm leading-relaxed text-ink-muted"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                    overflow: "hidden",
                  }}
                >
                  {service.description}
                </p>
                <Link
                  href={`/expertise?stage=${activeStage.key}&service=${slugify(
                    service.title
                  )}`}
                  className="group/link mt-auto inline-flex w-fit items-center gap-1.5 font-body text-sm font-semibold text-ink transition-colors hover:text-accent"
                >
                  Explore more
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover/link:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}