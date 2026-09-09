import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import CareersRoles from "@/components/CareersRoles";
import CareerPerks from "@/components/CareerPerks";
import ResumeCTA from "@/components/ResumeCTA";
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

        <ResumeCTA />

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