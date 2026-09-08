"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {

  value: string;
  duration?: number;
  className?: string;
};

export default function CountUp({ value, duration = 1.6, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value.replace(/\d/g, "0"));
  const match = value.match(/\d+/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const target = parseInt(match[0], 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(el);

          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            setDisplay(`${prefix}${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, match]);

  return (
    <span ref={ref} className={className}>
      {match ? display : value}
    </span>
  );
}