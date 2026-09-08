import Navbar from "@/components/Navbar";

export default function LoadingCareers() {
  return (
    <>
      <Navbar />
      <main className="pt-[76px]">
        <section className="px-margin-mobile pb-10 pt-10 md:px-margin-desktop md:pt-16">
          <div className="mx-auto max-w-container-max">
            <div className="h-4 w-40 animate-pulse rounded-full bg-ink/10" />
            <div className="mt-6 h-12 w-2/3 animate-pulse rounded-2xl bg-ink/10 md:h-14" />
            <div className="mt-4 h-4 w-1/2 animate-pulse rounded-xl bg-ink/10" />
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile pb-24 md:px-margin-desktop">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-6 rounded-2xl border border-cardline p-6"
              >
                <div className="flex flex-1 flex-col gap-3">
                  <div className="h-5 w-1/3 animate-pulse rounded-full bg-ink/10" />
                  <div className="h-4 w-1/4 animate-pulse rounded-full bg-ink/10" />
                </div>
                <div className="h-10 w-28 animate-pulse rounded-full bg-ink/10" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
