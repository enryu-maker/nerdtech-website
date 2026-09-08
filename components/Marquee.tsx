"use client";
import { useEffect, useRef } from "react";
const WORDS = ["BRANDING", "DEVELOPMENT", "EXPERIENCE", "UI/UX"];





type RowProps = {
  words: string[];
  separator: string;
  direction: "left" | "right";
  normalSpeed: number;
  slowSpeed: number;
  trackClassName: string;
  outline?: boolean;
};

function Row({ words, separator, direction, normalSpeed, slowSpeed, trackClassName, outline }: RowProps) {
  const track = [...words, ...words, ...words, ...words];
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const sign = direction === "left" ? -1 : 1;
    let offset = 0;
    let currentSpeed = normalSpeed;
    let half = 0;
    let lastTime = performance.now();
    let raf = 0;

    function measure() {
      if (trackRef.current) half = trackRef.current.scrollWidth / 2;
    }
    measure();
    window.addEventListener("resize", measure);

    function tick(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const target = hoveredRef.current ? slowSpeed : normalSpeed;
      currentSpeed += (target - currentSpeed) * Math.min(dt * 3, 1);

      offset += sign * currentSpeed * dt;
      if (half > 0) {
        if (offset <= -half) offset += half;
        if (offset >= 0) offset -= half;
      }

      if (trackRef.current) trackRef.current.style.transform = `translateX(${offset}px)`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [direction, normalSpeed, slowSpeed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
      className="mask-fade-x relative flex w-full overflow-hidden"
    >
      <div ref={trackRef} className={`flex items-center whitespace-nowrap ${trackClassName}`}>
        {track.map((word, i) => {
          const isOutline = outline && i % 2 === 1;
          return (
            <span key={i} className="flex items-center gap-6 md:gap-8">
              <span
                className={
                  isOutline
                    ? "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)]"
                    : ""
                }
              >
                {word}
              </span>
              <span aria-hidden="true" className="text-accent/40">
                {separator}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="flex flex-col gap-2 py-8">
      <Row
        words={WORDS}
        separator="✦"
        direction="left"
        normalSpeed={45}
        slowSpeed={20}
        outline
        trackClassName="gap-6 font-display text-4xl font-bold text-white/20 md:gap-8 md:text-6xl"
      />
    </div>
  );
}