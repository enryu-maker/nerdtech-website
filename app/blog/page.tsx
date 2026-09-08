import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | NerdTech",
  description:
    "News from NerdTech: We report on our projects, what new things we are trying out and where you can find us.",
};

export const revalidate = 3600;

export default async function BlogIndexPage() {
  const posts = (await getAllPosts()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = posts[0];
  const categoryCount = new Set(posts.map((p) => p.category)).size;

  const STATS = [
    { value: String(posts.length).padStart(2, "0"), label: "Articles" },
    { value: String(categoryCount).padStart(2, "0"), label: "Categories" },
    { value: featured.displayDate.split(" ")[0], label: "Last updated" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-[76px]">
        {/* Hero */}
        <section className="relative overflow-hidden px-margin-mobile pb-20 pt-16 md:px-margin-desktop md:pb-24 md:pt-24">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_65%_65%_at_20%_15%,black,transparent)]" />
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-blob-drift" />
          <div className="pointer-events-none absolute right-[8%] top-[30%] h-64 w-64 rounded-full bg-accent/5 blur-[100px] animate-blob-drift [animation-delay:-6s]" />

          <div className="relative mx-auto max-w-container-max">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
              {/* Left: headline + copy + stats */}
              <div className="lg:col-span-7">
                <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint opacity-0 animate-fade-up">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  From the blog
                </p>

                <h1 className="max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink opacity-0 animate-fade-up [animation-delay:0.1s] sm:text-5xl md:text-6xl">
                  Now something has happened{" "}
                  <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                    again
                  </span>
                </h1>

                <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-muted opacity-0 animate-fade-up [animation-delay:0.2s] md:text-lg">
                  News from NerdTech: We report on our projects, what new
                  things we are trying out and where you can find us.
                </p>

                {/* Quick stats */}
                <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-8 opacity-0 animate-fade-up [animation-delay:0.3s]">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-2xl font-bold text-ink md:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: featured latest post */}
              <div className="lg:col-span-5">
                <Reveal delay={0.2} distance={40}>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cardline bg-white shadow-[0_4px_24px_rgba(18,18,18,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_36px_70px_rgba(12,175,255,0.22)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-dim">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-accent px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white">
                        Latest
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/70">
                          {featured.category}
                          <span className="text-white/40">•</span>
                          {featured.readTime}
                        </p>
                        <h3 className="font-display text-xl font-bold leading-snug text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.4)] md:text-2xl">
                          {featured.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                      <span className="font-body text-sm text-ink-faint">
                        {featured.displayDate}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent transition-all duration-300 group-hover:translate-x-1">
                        Read article
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Recent news grid */}
        <section className="relative mx-auto mb-20 max-w-container-max overflow-hidden px-margin-mobile md:px-margin-desktop">
          <Reveal>
            <h2 className="mb-10 font-display text-4xl font-bold text-ink">
              Recent{" "}
              <span className="group/pill relative inline-block cursor-default rounded-full border-2 border-ink px-5 py-0.5 transition-colors duration-300 hover:bg-ink hover:text-cream">
                news
              </span>
            </h2>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08} distance={50}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative z-0 flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-cardline bg-white p-4 transition-all duration-500 ease-out hover:z-20 hover:-translate-y-5 hover:scale-[1.05] hover:border-accent/30 hover:shadow-[0_36px_70px_rgba(12,175,255,0.28)]"
                >
                  {/* Glow sweep on hover */}
                  <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(260px_circle_at_20%_0%,rgba(12,175,255,0.14),transparent_65%)]" />

                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-cream-dim">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ink-faint backdrop-blur-sm">
                      {post.category}
                    </span>
                    <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 shadow-sm backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:-rotate-45">
                        arrow_outward
                      </span>
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                      {post.date}
                    </p>
                    <h3 className="mb-2 font-display text-base font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 font-body text-sm text-ink-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      Read more
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}