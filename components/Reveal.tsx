"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
  variant?: "slide" | "tilt";
  rootMargin?: string;
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 100,
  duration = 1.1,
  once = true,
  variant = "slide",
  rootMargin = "0px 0px -18% 0px",
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const hiddenTransform =
    variant === "tilt"
      ? `perspective(1400px) translateY(${distance}px) rotateX(22deg) scale(0.9)`
      : `translateY(${distance}px)`;
  const visibleTransform =
    variant === "tilt"
      ? "perspective(1400px) translateY(0) rotateX(0deg) scale(1)"
      : "translateY(0)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? visibleTransform : hiddenTransform,
        transformOrigin: "bottom center",
        transformStyle: "preserve-3d",
        transition:
          `opacity ${duration * 0.6}s ease-out, transform ${duration}s cubic-bezier(0.16,1.2,0.3,1)`,
        transitionDelay: `${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}