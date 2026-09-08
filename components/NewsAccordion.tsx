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
    <>
      <div className="flex flex-col gap-4 md:hidden">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className="group/card relative block h-56 w-full cursor-pointer overflow-hidden rounded-2xl bg-ink shadow-[0_4px_24px_rgba(18,18,18,0.08)] outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-64"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-white/70">
                {item.date}
              </p>
              <h3 className="mb-1.5 font-display text-lg font-bold leading-snug text-white">
                {item.title}
              </h3>
              <p className="line-clamp-2 font-body text-sm text-white/80">
                {item.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent">
                Read more
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>

  
      <div className="hidden h-[480px] w-full gap-4 overflow-hidden md:flex">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className="group/card relative h-full flex-[1_1_0%] cursor-pointer overflow-hidden rounded-2xl bg-ink shadow-[0_4px_24px_rgba(18,18,18,0.08)] outline-none transition-[flex-grow] duration-500 ease-out hover:flex-[7_1_0%] focus-visible:flex-[7_1_0%] focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
              sizes="60vw"
            />

            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/90 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />


            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-8 opacity-0 transition-all duration-500 delay-100 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-visible/card:translate-y-0 group-focus-visible/card:opacity-100">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-white/70">
                {item.date}
              </p>
              <h3 className="mb-2 max-w-md font-display text-2xl font-bold leading-snug text-white">
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
    </>
  );
}