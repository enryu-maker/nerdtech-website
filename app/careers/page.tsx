import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import CareersRoles from "@/components/CareersRoles";
import CareerPerks from "@/components/CareerPerks";
import { getAllJobs } from "@/lib/careers";

export const metadata = {
  title: "Careers | NerdTech",
  description:
    "Join the NerdTech team! Explore career opportunities in design, development, marketing, and more. Build impactful digital products with us.",
};

export const revalidate = 3600;

export default async function CareersPage() {
  const jobs = await getAllJobs();
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-[76px]">
        {/*MISSION HEADER (cream)*/}
        <section className="relative overflow-hidden px-margin-mobile pb-0 pt-16 md:px-margin-desktop md:pt-20">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_65%_65%_at_20%_15%,black,transparent)]" />
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-blob-drift" />

          <div className="relative mx-auto max-w-container-max">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <h1 className="opacity-0 animate-fade-up font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:col-span-6 lg:text-6xl">
                Come build. Stay for the mission.
              </h1>

              <div className="opacity-0 animate-fade-up [animation-delay:0.1s] lg:col-span-6 lg:col-start-7">
                <p className="max-w-lg font-body text-[15px] leading-relaxed text-ink-muted md:text-base">
                  Since 2020, we&apos;ve shipped 150+ digital products and
                  worked with 50+ clients across 8 countries — from
                  healthcare and on-demand services to hospitality and
                  retail. We partner with founders and established
                  businesses to build software that improves how people
                  live and work.
                </p>
                <p className="mt-4 max-w-lg font-body text-[15px] leading-relaxed text-ink-muted md:text-base">
                  Our team works across design, web, mobile, and branding,
                  solving real problems for the people who use these
                  products every day. If you&apos;re a curious mind who
                  asks good questions and thrives on meaningful work,
                  you&apos;ll fit right in.
                </p>
              </div>
            </div>

          </div>

          {/* Team photo — full-bleed */}
          <Reveal delay={0.15} distance={24}>
            <div className="relative left-1/2 mt-12 h-[320px] w-screen -translate-x-1/2 overflow-hidden md:mt-16 md:h-[480px]">
              <Image
                src="/images/team-img.jpg"
                alt="NerdTech team collaborating"
                fill
                className="object-cover object-[center_25%]"
                sizes="100vw"
                priority
              />
            </div>
          </Reveal>
        </section>

        {/*OPEN ROLES (cream)*/}
        <section className="relative overflow-hidden border-t border-ink/10 px-margin-mobile pb-16 pt-10 md:px-margin-desktop md:pb-20 md:pt-14">
          <div className="relative mx-auto max-w-container-max">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
              <div className="opacity-0 animate-fade-up lg:col-span-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  Open roles
                </h2>
                <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ink-muted">
                  We work with specialists across India and beyond. Our
                  teams work across the full product lifecycle — from
                  discovery and architecture through to release and
                  long-term evolution.
                </p>
              </div>

              <div className="lg:col-span-8">
                <Reveal distance={20}>
                  <CareersRoles jobs={jobs} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/*CTA (dark)*/}
        <section className="relative overflow-hidden bg-dark px-margin-mobile pb-28 pt-20 text-center md:px-margin-desktop">
          <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_40%,black,transparent)]" />

          <Reveal distance={30}>
            <p className="relative mb-5 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Don&apos;t see your role?
            </p>
            <h2 className="relative mx-auto max-w-xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              We&apos;d still love to hear from you
            </h2>
            <p className="relative mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-white/50">
              Send us your resume and tell us what you&apos;re great at —
              we&apos;re always open to meeting new talent.
            </p>
            <a
              href="mailto:contact@nerdtech.in?subject=Open%20Application"
              className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(12,175,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(12,175,255,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative transition-colors duration-300 group-hover:text-accent">
                Send your resume
              </span>
              <span
                aria-hidden="true"
                className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </a>
          </Reveal>
        </section>

        {/*WHAT WE OFFER (white, sits right before the footer)*/}
        <section className="relative overflow-hidden border-t border-ink/10 px-margin-mobile py-16 md:px-margin-desktop md:py-20">
          <div className="relative mx-auto max-w-container-max">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
              <div className="opacity-0 animate-fade-up lg:col-span-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  What we offer our specialists
                </h2>
                <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ink-muted">
                  Everything here is designed to help you do your best
                  work and live well outside of it. We think beyond
                  today to create valuable outlier products.
                </p>
              </div>

              <div className="lg:col-span-8">
                <Reveal distance={20}>
                  <CareerPerks />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />

      <Footer />
    </>
  );
}