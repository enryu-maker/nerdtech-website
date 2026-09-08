import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FactCard from "@/components/FactCard";

export const metadata = {
  title: "About the Founder — Akif Khan | NerdTech",
  description:
    "The journey of Akif Khan and the founding story of NerdTech Softwares LLC.",
};

const FACTS = [
  { value: "2020", label: "Founded" },
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Clients Served" },
  { value: "8+", label: "Countries Reached" },
];

const JOURNEY = [
  {
    year: "2020",
    title: "The idea takes shape",
    description:
      "Akif starts NerdTech from a simple conviction — software should feel effortless, not overwhelming.",
  },
  {
    year: "2021 – 2022",
    title: "First clients, first wins",
    description:
      "Early partnerships across hospitality and local services prove the model, and word starts to spread.",
  },
  {
    year: "2023 – 2024",
    title: "Scaling the studio",
    description:
      "NerdTech grows into a full-service team spanning design, development, branding, and marketing.",
  },
  {
    year: "Today",
    title: "A global digital partner",
    description:
      "150+ projects and clients across 8 countries later, Akif still reviews every brief personally.",
  },
];

const VALUES = [
  {
    icon: "auto_awesome",
    title: "Clarity over complexity",
    description:
      "Every product NerdTech ships is judged by one question: does it make life simpler for the person using it? Technology should reduce friction, not add to it.",
  },
  {
    icon: "handshake",
    title: "Trust as the foundation",
    description:
      "Long-term partnerships are built one honest conversation at a time. Akif's approach favours transparency about timelines, trade-offs, and outcomes over easy promises.",
  },
  {
    icon: "rocket_launch",
    title: "Built for the next decade",
    description:
      "NerdTech doesn't just deliver a website or an app — it builds the underlying infrastructure businesses will still rely on as they scale.",
  },
];

const PRINCIPLES = [
  {
    title: "Innovation First",
    description:
      "Constantly exploring emerging technologies to give our clients a competitive edge.",
  },
  {
    title: "Human-Centric",
    description:
      "Designing digital environments that people actually enjoy using every single day.",
  },
  {
    title: "Global Impact",
    description:
      "Scaling solutions that work across borders and help communities thrive worldwide.",
  },
];

export default function AboutTheFounder() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-[76px]">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-container-max px-margin-mobile pt-8 md:px-margin-desktop">
          <nav className="flex items-center gap-2 font-body text-sm text-ink-faint">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="text-ink-faint/50">/</span>
            <span className="font-semibold text-ink">About The Founder</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-margin-mobile pb-16 pt-10 md:px-margin-desktop md:pb-24 md:pt-16">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_30%,black,transparent)]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/15 blur-[110px] animate-blob-drift" />

          <div className="relative mx-auto max-w-container-max">
            <Reveal distance={40} duration={0.9}>
              <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Founder &amp; CEO, NerdTech
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
                Leading with{" "}
                <span className="relative inline-flex items-center rounded-full border-2 border-ink px-6 py-1 text-accent">
                  
                  vision
                </span>
              </h1>
              <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink-muted">
                The journey of Akif Khan and the founding story of NerdTech
                Softwares LLC.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Portrait + intro */}
        <section className="mx-auto mb-28 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <Reveal distance={60} duration={0.9}>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
              <div className="relative md:col-span-5">
                {/* Decorative glow behind the photo */}
                <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-accent/20 blur-[80px] animate-blob-drift [animation-delay:-4s]" />

                <div className="group/photo relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent via-accent/60 to-accent/10 p-[3px] shadow-[0_24px_60px_rgba(12,175,255,0.25)]">
                  <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-3px)] bg-cream">
                    <Image
                      src="https://nerdtech.pythonanywhere.com/media/team/Flora_Haven-2.png"
                      alt="Akif Khan — CEO & Founder, NerdTech"
                      fill
                      className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
                      sizes="(min-width: 768px) 40vw, 90vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Top-left name chip */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-cream/95 px-4 py-2 shadow-[0_10px_24px_rgba(18,18,18,0.12)] backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                    CEO &amp; Founder
                  </span>
                </div>

                {/* Floating stat badge */}
                <div className="absolute bottom-6 right-[-1rem] w-[190px] rounded-2xl bg-cream p-5 shadow-[0_20px_48px_rgba(18,18,18,0.18)] sm:right-[-1.5rem]">
                  <span className="block font-display text-4xl font-bold leading-none text-accent">
                    5+
                  </span>
                  <span className="mt-2 block font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                    Years of Innovation
                  </span>
                </div>
              </div>

              <div className="md:col-span-7">
                <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  Meet Akif Khan
                </h2>

                <div className="space-y-5 font-body text-lg leading-relaxed text-ink-muted">
                  <p>
                    As the CEO and Founder of NerdTech Softwares LLC, Akif
                    Khan has dedicated his career to pushing the boundaries
                    of what&apos;s possible in the digital world. His
                    approach is simple yet profound: technology should be a
                    tool that empowers, not complicates.
                  </p>
                  <p>
                    Under his leadership, NerdTech has grown from a
                    visionary idea into a full-service digital powerhouse,
                    delivering high-impact solutions for global clients.
                    Akif&apos;s focus remains steadfast on quality, trust,
                    and long-term value.
                  </p>
                </div>

                <div className="relative my-8 overflow-hidden rounded-2xl border-l-4 border-accent bg-cream-dim/80 py-6 pl-7 pr-6 shadow-[0_4px_20px_rgba(18,18,18,0.05)]">
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-8xl leading-none text-accent/[0.1]">
                    &ldquo;
                  </span>
                  <blockquote className="relative font-display text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl">
                    &ldquo;We don&apos;t just build software; we build the
                    infrastructure for the next generation of digital
                    businesses. Our commitment is to turn complexity into
                    seamless user experiences.&rdquo;
                  </blockquote>
                </div>

                <p className="font-body text-lg leading-relaxed text-ink-muted">
                  Beyond technical expertise, Akif is a thought leader in
                  the software ecosystem, constantly looking for new ways to
                  solve real-world problems through innovative tech stacks
                  and user-centric design.
                </p>

                <a
                  href="https://in.linkedin.com/in/akif-khan-280b711ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mt-10 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3.5 font-body text-sm font-semibold text-white shadow-[0_10px_30px_rgba(12,175,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(12,175,255,0.4)] active:translate-y-0"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[#0592e0] transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative h-4 w-4"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 22 11 22 14.1V21h-4v-6.15c0-1.47-.03-3.36-2.05-3.36-2.06 0-2.38 1.6-2.38 3.25V21h-4V9z" />
                  </svg>
                  <span className="relative">Connect on LinkedIn</span>
                  <span className="material-symbols-outlined relative text-base transition-transform duration-300 group-hover:translate-x-1">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Facts strip */}
        <section className="relative overflow-hidden bg-dark px-margin-mobile py-20 md:px-margin-desktop">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="relative mx-auto max-w-container-max">
            <Reveal distance={40} duration={0.8}>
              <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                <span className="h-px w-8 bg-accent/60" />
                By the numbers
              </p>
              <h2 className="mb-10 max-w-xl font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Five years of momentum, still building.
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.label} distance={40} duration={0.8} delay={i * 0.1}>
                  <FactCard value={fact.value} label={fact.label} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Journey timeline */}
        <section className="mx-auto my-28 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <Reveal distance={50} duration={0.9}>
            <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
              <span className="h-px w-8 bg-accent/60" />
              The journey
            </p>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              From an idea to a digital studio
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute bottom-0 left-[15px] top-0 hidden w-px bg-gradient-to-b from-accent via-ink/15 to-transparent sm:block" />
            <div className="space-y-10 sm:space-y-12">
              {JOURNEY.map((item, i) => (
                <Reveal key={item.year} distance={40} duration={0.8} delay={i * 0.1}>
                  <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8 sm:pl-12">
                    <span className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-cream font-mono text-[10px] font-bold text-accent sm:flex">
                      {i + 1}
                    </span>
                    <span className="w-fit shrink-0 rounded-full bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-accent sm:w-32">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl font-body text-base leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Guiding principles */}
        <section className="mx-auto mb-28 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.title} distance={40} duration={0.8} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-cream-dim p-8 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-ink">
                    {principle.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-ink-muted">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto my-28 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <Reveal distance={50} duration={0.9}>
            <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
              <span className="h-px w-8 bg-accent/60" />
              What guides the work
            </p>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              Three principles, every project
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-muted">
              Akif holds the whole team to the same standard, on every
              project, at every stage.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} distance={50} duration={0.9} delay={i * 0.12}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/5 border-b-2 border-b-accent bg-cream-dim/70 p-8 shadow-[0_4px_24px_rgba(18,18,18,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/30 hover:bg-cream-dim hover:shadow-[0_20px_40px_rgba(12,175,255,0.18)]">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative mb-5 block font-display text-sm font-bold text-accent/30">
                    0{i + 1}
                  </span>
                  <h3 className="relative mb-3 mt-5 font-display text-xl font-bold tracking-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="relative font-body text-base leading-relaxed text-ink-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}