import Link from "next/link";
import { JobOpening } from "@/lib/careers";

export default function CareersRoles({ jobs }: { jobs: JobOpening[] }) {
  return (
    <div className="flex flex-col gap-5">
      {jobs.map((role) => (
        <Link
          key={role.slug}
          href={`/careers/${role.slug}`}
          className="block rounded-2xl border border-ink/10 bg-white px-7 py-6 shadow-[0_10px_30px_rgba(4,60,95,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_16px_40px_rgba(12,175,255,0.12)]"
        >
          <div className="flex flex-wrap items-center gap-2">
            {role.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent-dim px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="mt-3 font-display text-lg font-bold text-ink">
            {role.title}
          </h3>

          <p className="mt-1.5 flex items-center gap-1.5 font-body text-sm text-ink-muted">
            <span className="material-symbols-outlined text-[16px] text-ink-faint">
              location_on
            </span>
            {role.location}
          </p>

          <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-ink-muted">
            {role.summary}
          </p>

          <span className="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-ink">
            View role
          </span>
        </Link>
      ))}
    </div>
  );
}
