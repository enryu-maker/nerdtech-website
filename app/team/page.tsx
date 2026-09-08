import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getAllTeamMembers } from "@/lib/team";

export const metadata = {
  title: "Team | NerdTech",
  description:
    "Meet the people behind NerdTech — designers, engineers, and strategists building digital products for our clients.",
};

// Re-check the backend at most once an hour (see lib/api.ts).
export const revalidate = 3600;

export default async function TeamPage() {
  const team = await getAllTeamMembers();

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
            <span className="font-semibold text-ink">Team</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-margin-mobile pb-16 pt-10 md:px-margin-desktop md:pb-20 md:pt-16">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_30%,black,transparent)]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/15 blur-[110px] animate-blob-drift" />

          <div className="relative mx-auto max-w-container-max">
            <Reveal distance={40} duration={0.9}>
              <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                The people
              </p>
              <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
                The team behind{" "}
                <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                  the work
                </span>
              </h1>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-muted md:text-lg">
                Designers, engineers, and strategists who turn ideas into
                shipped products for our clients.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Team grid */}
        <section className="relative mx-auto mb-20 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.06} distance={40}>
                <div className="group flex flex-col overflow-hidden rounded-2xl border border-cardline bg-white transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(12,175,255,0.16)]">
                  <div className="relative aspect-square w-full overflow-hidden bg-cream-dim">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="material-symbols-outlined text-5xl text-ink-faint/40">
                          person
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-4 py-4">
                    <h3 className="font-display text-base font-bold leading-snug text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-body text-sm text-ink-muted">
                      {member.role}
                    </p>
                  </div>
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