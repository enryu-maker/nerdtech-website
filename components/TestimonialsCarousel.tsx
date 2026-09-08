"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = { quote: string; name: string; role: string };

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  interval?: number;
};

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

function Stars({ dim = false }: { dim?: boolean }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-[17px] ${
            dim ? "text-ink/15" : "text-amber-400"
          }`}
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 500" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel({
  testimonials,
  interval = 7000,
}: TestimonialsCarouselProps) {
  const n = testimonials.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    function measure() {
      if (wrapperRef.current) setContainerWidth(wrapperRef.current.clientWidth);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + n) % n);
  };

  useEffect(() => {
    if (paused || n <= 1) return;
    timerRef.current = setInterval(() => go(1), interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };

  }, [paused, n, interval]);

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setPaused(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 40) {
      go(touchDeltaX.current < 0 ? 1 : -1);
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setPaused(false);
  };

  const peek =
    containerWidth === 0
      ? 0
      : containerWidth < 640
      ? Math.round(containerWidth * 0.12)
      : Math.min(260, Math.round(containerWidth * 0.22));
  const slideWidth = containerWidth === 0 ? 0 : containerWidth - peek;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto max-w-5xl">
        <span
          aria-hidden="true"
          className="material-symbols-outlined pointer-events-none absolute -left-4 -top-10 select-none text-[9rem] text-ink/[0.04]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </span>

        <div
          ref={wrapperRef}
          className="relative touch-pan-y overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * slideWidth}px)`,
              transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {testimonials.map((t, i) => {
              const isActive = i === index;
              return (
                <div
                  key={t.name + i}
                  className="shrink-0 pr-10 sm:pr-14"
                  style={{ width: slideWidth ? `${slideWidth}px` : "100%" }}
                >
                  <div
                    style={{
                      opacity: isActive ? 1 : 0.22,
                      transition: "opacity 0.65s ease",
                    }}
                  >
                    <p className="max-w-2xl font-poppins text-base leading-relaxed text-ink sm:text-lg sm:leading-[1.55]">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white ${
                            isActive
                              ? "bg-gradient-to-br from-accent to-[#0055FF]"
                              : "bg-ink/10 text-ink/30"
                          }`}
                        >
                          {initials(t.name)}
                        </div>
                        <div>
                          <p className="font-body text-sm font-semibold text-ink">
                            {t.name}
                          </p>
                          <p className="text-xs text-ink-faint">{t.role}</p>
                        </div>
                      </div>

                      <Stars dim={!isActive} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {n > 1 && (
        <div className="relative z-10 mt-6 flex justify-end gap-1.5 sm:absolute sm:right-0 sm:top-[42%] sm:mt-0 sm:-translate-y-1/2 sm:flex-col">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cardline bg-white text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:scale-90"
          >
            <span className="material-symbols-outlined text-xl">
              arrow_back
            </span>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cardline bg-white text-ink shadow-sm transition-all duration-300 hover:translate-y-0.5 hover:border-accent hover:text-accent active:scale-90"
          >
            <span className="material-symbols-outlined text-xl">
              arrow_forward
            </span>
          </button>
        </div>
      )}
    </div>
  );
}