import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import JobApplicationForm from "@/components/JobApplicationForm";
import { getAllJobs, getJobBySlug } from "@/lib/careers";

const OFFERS = [
  {
    icon: "schedule",
    title: "Full autonomy over your time",
    description:
      "You organize your own working hours and plan your workload; we focus on outcomes, not hours.",
  },
  {
    icon: "home_work",
    title: "Work from anywhere",
    description:
      "No designated workplace — work from wherever suits you best.",
  },
  {
    icon: "dns",
    title: "Your setup",
    description:
      "The setup stays flexible and fits whatever each project needs.",
  },
  {
    icon: "diversity_3",
    title: "Referral rewards",
    description:
      "Bonuses for recommending specialists who start collaborating with us.",
  },
  {
    icon: "groups",
    title: "Project kickoff support",
    description:
      "Practical help to get up to speed on the project quickly, plus knowledge exchange with fellow specialists.",
  },
];

export async function generateStaticParams() {
  const jobs = await getAllJobs();
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const job = await getJobBySlug(params.slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers | NerdTech`,
    description: job.summary,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = await getJobBySlug(params.slug);
  if (!job) notFound();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-[76px] animate-page-enter">
        {/* JOB HEADER*/}
        <section className="px-margin-mobile pb-12 pt-12 md:px-margin-desktop md:pb-16 md:pt-16">
          <div className="mx-auto max-w-container-max">
            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/careers"
                className="transition-colors hover:text-accent"
              >
                Careers
              </Link>
              <span>/</span>
              <span className="text-ink-muted">{job.title}</span>
            </nav>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-8" distance={20}>
                <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
                  {job.title}
                </h1>

                <div className="mt-5 flex flex-col gap-3">
                  {job.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="max-w-2xl font-body text-[15px] leading-relaxed text-ink-muted md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal
                className="lg:col-span-4"
                delay={0.1}
                distance={20}
              >
                <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_30px_rgba(4,60,95,0.06)]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                        Field
                      </span>
                      <span className="font-body text-sm font-semibold text-ink">
                        {job.field}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                        Location
                      </span>
                      <span className="font-body text-sm font-semibold text-ink">
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#apply"
                    className="mt-6 flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-ink"
                  >
                    Get in touch
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/*REQUIREMENTS / NICE TO HAVE / SCOPE*/}
        <section className="px-margin-mobile pb-16 md:px-margin-desktop md:pb-20">
          <div className="mx-auto max-w-container-max">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-8">
              <div className="flex flex-col gap-10 lg:col-span-8">
                <Reveal distance={20}>
                  <h2 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                    Requirements
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {job.requirements.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-ink-muted md:text-[15px]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal distance={20}>
                  <h2 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                    Nice to have
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {job.niceToHave.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-ink-muted md:text-[15px]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal distance={20}>
                  <h2 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
                    Scope of work
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {job.scopeOfWork.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-ink-muted md:text-[15px]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/*WHAT WE OFFER OUR SPECIALISTS*/}
        <section className="bg-cream-dim px-margin-mobile py-16 md:px-margin-desktop md:py-20">
          <div className="mx-auto max-w-container-max">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
              <Reveal className="lg:col-span-4" distance={20}>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  What we offer our specialists
                </h2>
                <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ink-muted">
                  Everything here is designed to help you do your best work
                  and live well outside of it. We think beyond today to
                  create valuable outlier products.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {OFFERS.map((offer, i) => (
                  <Reveal
                    key={offer.title}
                    delay={0.05 * i}
                    distance={20}
                    className={
                      offer.title === "Project kickoff support"
                        ? "sm:col-span-2 sm:max-w-[calc(50%-0.625rem)]"
                        : ""
                    }
                  >
                    <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_30px_rgba(4,60,95,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_16px_40px_rgba(12,175,255,0.12)]">
                      <span className="material-symbols-outlined text-2xl text-accent">
                        {offer.icon}
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-ink">
                        {offer.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                        {offer.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*HOW DOES IT WORK + APPLICATION FORM (white)*/}
        <section
          id="apply"
          className="scroll-mt-[96px] border-t border-ink/10 px-margin-mobile py-16 md:px-margin-desktop md:py-20"
        >
          <div className="mx-auto max-w-container-max">
            <Reveal distance={20}>
              <JobApplicationForm roleTitle={job.title} jobId={Number(job.slug)} />
            </Reveal>
          </div>
        </section>
      </main>

      <WhatsAppButton />

      <Footer />
    </>
  );
}