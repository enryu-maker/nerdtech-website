"use client";
import { useEffect, useRef } from "react";

export default function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    let raf = 0;
    let targetX = 0.5;
    let targetY = 0.35;
    let x = targetX;
    let y = targetY;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;
    };

    const tick = () => {
      x += (targetX - x) * 0.06;
      y += (targetY - y) * 0.06;
      el.style.setProperty("--x", `${x * 100}%`);
      el.style.setProperty("--y", `${y * 100}%`);
      raf = requestAnimationFrame(tick);
    };

    parent.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(560px circle at var(--x, 50%) var(--y, 35%), rgba(12,175,255,0.16), transparent 70%)",
      }}
    />
  );
}