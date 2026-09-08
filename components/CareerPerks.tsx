"use client";

const PERKS = [
  {
    //icon: "schedule",
    title: "Flexible working hours",
    description:
      "Organize your own schedule and plan your workload — we focus on outcomes, not hours logged.",
  },
  {
    //icon: "home_work",
    title: "Remote-friendly setup",
    description:
      "No fixed desk required — work from wherever helps you do your best work.",
  },
  {
    //icon: "laptop_mac",
    title: "Your own setup",
    description:
      "We equip you with the tools and hardware that fit the project, not a one-size-fits-all kit.",
  },
  {
    //icon: "diversity_3",
    title: "Referral rewards",
    description:
      "Get rewarded for bringing skilled people into the team who go on to join us.",
  },
  {
    //icon: "rocket_launch",
    title: "Project kickoff support",
    description:
      "Hands-on onboarding to get you up to speed fast — briefs, context, and a warm handoff from day one.",
  },
];

export default function CareerPerks() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {PERKS.map((perk) => (
        <div
          key={perk.title}
          className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_30px_rgba(4,60,95,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30"
        >
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-dim text-accent"> */}
            <span className="material-symbols-outlined text-[20px]">
              
            </span>
          {/* </span> */}

          <h3 className="mt-4 font-display text-base font-bold text-ink">
            {perk.title}
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
            {perk.description}
          </p>
        </div>
      ))}
    </div>
  );
}