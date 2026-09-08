import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ExpertiseTabs from "@/components/ExpertiseTabs";
import { getExpertise } from "@/lib/expertise";

export const metadata = {
  title: "Expertise | NerdTech",
  description:
    "From brand strategy to app development, NerdTech brings expertise across every digital touchpoint — Strategy, Identity, Website, Storytelling, Digital and App Development.",
};

export const revalidate = 3600;

export default async function ExpertisePage() {
  const EXPERTISE_STAGES = await getExpertise();
  const totalServices = EXPERTISE_STAGES.reduce(
    (n, s) => n + s.services.length,
    0
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-[76px]">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-container-max px-margin-mobile pt-8 md:px-margin-desktop">
          <nav className="flex items-center gap-2 font-body text-sm text-ink-faint">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="text-ink-faint/50">/</span>
            <span className="font-semibold text-ink">Expertise</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-margin-mobile pb-16 pt-10 md:px-margin-desktop md:pb-24 md:pt-16">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_30%,black,transparent)]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/15 blur-[110px] animate-blob-drift" />

          <div className="relative mx-auto max-w-container-max">
            <Reveal distance={40} duration={0.9}>
              <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
                We dedicate ourselves to our{" "}
                <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                  craft
                </span>
              </h1>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-muted md:text-lg">
                That is what characterizes our work. From brand strategy to
                app development, we bring expertise across every digital
                touchpoint.
              </p>

              <div className="mt-10 grid max-w-sm grid-cols-3 gap-6 border-t border-cardline pt-8">
                <div>
                  <p className="font-display text-2xl font-bold text-ink md:text-3xl">
                    {EXPERTISE_STAGES.length}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                    Core disciplines
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-ink md:text-3xl">
                    {totalServices}+
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                    Services
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-ink md:text-3xl">
                    1
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                    Dedicated team
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Our Expertise (dark, pill tabs) */}
        <section className="relative overflow-hidden bg-dark px-margin-mobile py-20 md:px-margin-desktop md:py-28">
          <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" />
          <div className="pointer-events-none absolute -right-[10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
          <div className="pointer-events-none absolute -left-[8%] bottom-[-15%] h-[320px] w-[320px] rounded-full bg-accent/5 blur-[110px]" />

          <div className="relative mx-auto max-w-container-max">
            <Reveal distance={30}>
              <ExpertiseTabs stages={EXPERTISE_STAGES} />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-white px-margin-mobile py-24 text-center md:px-margin-desktop">
          <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-[0.04]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />

          <Reveal distance={30}>
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[28px] border border-ink/10 bg-white px-8 py-14 shadow-[0_25px_70px_rgba(4,60,95,0.12)] md:px-16 md:py-16">
              <h2 className="relative mb-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Ready to put this{" "}
                <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                  to work
                </span>
                ?
              </h2>
              <p className="relative mx-auto max-w-sm font-body text-sm leading-relaxed text-ink-muted">
                Tell us what you&apos;re building and we&apos;ll map it to the
                right mix of expertise.
              </p>
              <Link
                href="/contact"
                className="group/cta relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-body text-sm font-semibold text-cream transition-all duration-300 hover:bg-accent hover:text-white"
              >
                Get in touch
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/cta:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}