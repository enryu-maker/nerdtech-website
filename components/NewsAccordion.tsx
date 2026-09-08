"use client";

import Image from "next/image";
import Link from "next/link";

export type NewsAccordionItem = {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
};

export default function NewsAccordion({ items }: { items: NewsAccordionItem[] }) {
  return (
    <div className="flex h-[460px] w-full gap-3 overflow-hidden md:h-[480px] md:gap-4">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/blog/${item.slug}`}
          className="group/card relative h-full flex-[1_1_0%] cursor-pointer overflow-hidden rounded-2xl bg-ink shadow-[0_4px_24px_rgba(18,18,18,0.08)] outline-none transition-[flex-grow] duration-500 ease-out [@media(hover:hover)]:hover:flex-[7_1_0%] focus-visible:flex-[7_1_0%] focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover/card:scale-105"
            sizes="(min-width: 768px) 60vw, 100vw"
          />

          {/* Bottom gradient — only needed for the expanded caption's legibility */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/90 to-transparent opacity-0 transition-opacity duration-500 [@media(hover:hover)]:group-hover/card:opacity-100" />

          {/* Expanded state: date, title, excerpt, CTA */}
          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 delay-100 [@media(hover:hover)]:group-hover/card:translate-y-0 [@media(hover:hover)]:group-hover/card:opacity-100 group-focus-visible/card:translate-y-0 group-focus-visible/card:opacity-100 md:p-8">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-white/70">
              {item.date}
            </p>
            <h3 className="mb-2 max-w-md font-display text-xl font-bold leading-snug text-white md:text-2xl">
              {item.title}
            </h3>
            <p className="line-clamp-2 max-w-md font-body text-sm text-white/80">
              {item.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent">
              Read more
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}