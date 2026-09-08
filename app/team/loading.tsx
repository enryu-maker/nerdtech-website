import Navbar from "@/components/Navbar";

export default function LoadingTeam() {
  return (
    <>
      <Navbar />
      <main className="pt-[76px]">
        <section className="px-margin-mobile pb-10 pt-10 md:px-margin-desktop md:pt-16">
          <div className="mx-auto max-w-container-max">
            <div className="h-4 w-40 animate-pulse rounded-full bg-ink/10" />
            <div className="mt-6 h-12 w-1/2 animate-pulse rounded-2xl bg-ink/10 md:h-14" />
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile pb-24 md:px-margin-desktop">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-square w-full animate-pulse rounded-2xl bg-ink/10" />
                <div className="h-4 w-2/3 animate-pulse rounded-full bg-ink/10" />
                <div className="h-3 w-1/2 animate-pulse rounded-full bg-ink/10" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
