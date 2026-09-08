"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Client = { name: string; logo?: string };

type ClientsCarouselProps = {
  clients: Client[];

  perSlide?: number;

  interval?: number;
};

export default function ClientsCarousel({
  clients,
  perSlide = 8,
  interval = 3200,
}: ClientsCarouselProps) {
  const slides: Client[][] = [];
  for (let i = 0; i < clients.length; i += perSlide) {
    slides.push(clients.slice(i, i + perSlide));
  }

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, slides.length, interval]);

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
    if (Math.abs(touchDeltaX.current) > 40 && slides.length > 1) {
      setIndex((prev) =>
        (prev + (touchDeltaX.current < 0 ? 1 : -1) + slides.length) % slides.length
      );
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setPaused(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="touch-pan-y overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            transform: `translate3d(-${index * 100}%, 0px, 0px)`,
            transitionDuration: "800ms",
          }}
        >
          {slides.map((slide, si) => (
            <div key={si} className="grid w-full shrink-0 grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
              {slide.map((client) => (
                <div
                  key={client.name}
                  className="flex h-28 items-center justify-center p-2 sm:h-32"
                >
                  {client.logo ? (
                    <div className="relative h-full w-full grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                        sizes="180px"
                      />
                    </div>
                  ) : (
                    <span className="font-body text-[11px] font-medium text-ink-faint">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="mt-5 flex justify-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show clients ${i + 1} of ${slides.length}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-ink/15 hover:bg-ink/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}