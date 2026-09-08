import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Work | NerdTech",
  description:
    "Explore NerdTech's portfolio of brand identity, web, and app projects. See how we've helped clients across India build high-impact digital products.",
};

export const revalidate = 3600;

export default async function WorkIndexPage() {
  const projects = await getAllProjects().catch(() => []);

  const categoryCount = new Set(projects.map((p) => p.category)).size;

  const STATS = [
    { value: String(projects.length).padStart(2, "0"), label: "Projects" },
    { value: String(categoryCount).padStart(2, "0"), label: "Categories" },
    { value: "100%", label: "Client satisfaction" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-[76px]">
        {/* Hero */}
        <section className="relative overflow-hidden px-margin-mobile pb-16 pt-16 md:px-margin-desktop md:pb-20 md:pt-24">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_65%_65%_at_20%_15%,black,transparent)]" />
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-blob-drift" />
          <div className="pointer-events-none absolute right-[8%] top-[30%] h-64 w-64 rounded-full bg-accent/5 blur-[100px] animate-blob-drift [animation-delay:-6s]" />

          <div className="relative mx-auto max-w-container-max">
            <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint opacity-0 animate-fade-up">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Selected projects
            </p>

            <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink opacity-0 animate-fade-up [animation-delay:0.1s] sm:text-5xl md:text-6xl">
              Our{" "}
              <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                work
              </span>
            </h1>

            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-muted opacity-0 animate-fade-up [animation-delay:0.2s] md:text-lg">
              We dedicate ourselves to our projects with great care and
              attention to detail. That is what characterises our work.
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
        </section>

        {/* Projects grid */}
        <section className="mx-auto mb-32 max-w-container-max px-margin-mobile md:px-margin-desktop">
          {projects.length === 0 ? (
            <p className="font-body text-sm text-ink-muted">
              We couldn&apos;t load our projects right now. Please check back
              soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal key={project.id} delay={(i % 4) * 0.1} distance={70}>
                  <Link
                    href={`/work/${project.id}`}
                    className="group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl bg-cream-dim ring-1 ring-inset ring-ink/5"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    <div className="relative flex flex-col gap-5 p-6 md:p-8">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/70">
                        {project.category}
                      </p>
                      <h3 className="max-w-md font-display text-xl font-bold leading-snug text-white md:text-2xl">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white px-4 py-1.5 font-body text-xs font-semibold text-ink"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1.5 font-body text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                        Explore more
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}