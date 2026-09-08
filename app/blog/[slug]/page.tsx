import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | NerdTech Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [post, all] = await Promise.all([
    getPostBySlug(params.slug),
    getAllPosts(),
  ]);
  if (!post) notFound();

  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white animate-page-enter">
        {/* Hero */}
        <section className="relative flex min-h-[460px] flex-col justify-end overflow-hidden bg-dark px-margin-mobile pb-12 pt-24 md:min-h-[560px] md:px-margin-desktop md:pb-16 lg:min-h-[600px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
          <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-20" />

          <div className="relative mx-auto w-full max-w-container-max">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-white/80 opacity-0 transition-colors animate-fade-up hover:text-white"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to blog
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up [animation-delay:0.1s]">
              <span className="rounded-full bg-accent px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white">
                {post.category}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                {post.displayDate} · {post.readTime}
              </span>
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white opacity-0 animate-fade-up [animation-delay:0.2s] sm:text-5xl md:text-6xl lg:text-7xl">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white px-margin-mobile py-16 md:px-margin-desktop md:py-20">
          <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {/* Article body */}
            <div className="md:col-span-8">
              <Reveal>
                <p className="font-body text-lg leading-relaxed text-ink-muted md:text-xl">
                  {post.excerpt}
                </p>
                <div className="mt-8 border-t border-cardline pt-8" />
              </Reveal>

              {post.content.map((block, i) => (
                <Reveal key={block.heading} delay={i * 0.05}>
                  <div className={i === 0 ? "" : "mt-10"}>
                    <h2 className="mb-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                      {block.heading}
                    </h2>
                    <div className="space-y-4 font-body text-base leading-relaxed text-ink-muted md:text-lg">
                      {block.paragraphs.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}

              <div className="mt-14 border-t border-cardline pt-8">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent transition-colors hover:text-ink"
                >
                  <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:-translate-x-1">
                    arrow_back
                  </span>
                  Back to all posts
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-cardline bg-white p-6 shadow-[0_4px_24px_rgba(18,18,18,0.04)]">
                  <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
                    Share article
                  </p>
                  <div className="mb-6 flex gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on X"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M18.9 2H22l-7.7 8.8L23.3 22h-7.2l-5.6-7.3L4 22H1l8.2-9.4L1 2h7.4l5 6.7L18.9 2zm-1.3 18h2L7 4H4.9l12.7 16z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://nerdtech.in/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 22 11 22 14.1V21h-4v-6.15c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.38 1.6-2.38 3.25V21h-4V9z" />
                      </svg>
                    </a>
                    <button
                      type="button"
                      aria-label="Copy link"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <span className="material-symbols-outlined text-lg leading-none">link</span>
                    </button>
                  </div>

                  <div className="space-y-4 border-t border-cardline pt-5">
                    <div>
                      <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                        Category
                      </p>
                      <p className="rounded-lg border border-cardline bg-cream px-3.5 py-2.5 font-body text-sm text-ink">
                        {post.category}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                        Published
                      </p>
                      <p className="flex items-center gap-2 rounded-lg border border-cardline bg-cream px-3.5 py-2.5 font-body text-sm text-ink">
                        <span className="h-1.5 w-1.5 rounded-full bg-success-green" />
                        {post.displayDate}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                        Read time
                      </p>
                      <p className="rounded-lg border border-cardline bg-cream px-3.5 py-2.5 font-body text-sm text-ink">
                        {post.readTime}
                      </p>
                    </div>
                  </div>

                  <a
                    href="mailto:contact@nerdtech.in"
                    className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(12,175,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(12,175,255,0.4)]"
                  >
                    Talk to us
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* More posts */}
        <section className="bg-white px-margin-mobile py-16 md:px-margin-desktop md:py-20">
          <div className="mx-auto max-w-container-max">
            <Reveal>
              <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                More{" "}
                <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                  articles
                </span>
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.1} distance={40}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_4px_24px_rgba(18,18,18,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(18,18,18,0.12)]"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-cream">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                      <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:-rotate-45">
                          arrow_outward
                        </span>
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                        {r.category}
                      </p>
                      <h3 className="font-display text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-accent">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}