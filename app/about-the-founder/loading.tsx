import Navbar from "@/components/Navbar";

export default function LoadingFounder() {
  return (
    <>
      <Navbar />
      <main className="pt-[76px]">
        <div className="mx-auto max-w-container-max px-margin-mobile pt-8 md:px-margin-desktop">
          <div className="h-4 w-40 animate-pulse rounded-full bg-ink/10" />
        </div>

        <section className="px-margin-mobile pb-16 pt-10 md:px-margin-desktop md:pb-24 md:pt-16">
          <div className="mx-auto max-w-container-max">
            <div className="h-4 w-56 animate-pulse rounded-full bg-ink/10" />
            <div className="mt-6 h-14 w-3/4 animate-pulse rounded-2xl bg-ink/10 md:h-16" />
            <div className="mt-4 h-6 w-1/2 animate-pulse rounded-xl bg-ink/10" />
          </div>
        </section>

        <section className="mx-auto mb-16 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="aspect-[4/5] w-full animate-pulse rounded-[2rem] bg-ink/10" />
            </div>
            <div className="flex flex-col justify-center gap-4 md:col-span-7">
              <div className="h-4 w-full animate-pulse rounded-xl bg-ink/10" />
              <div className="h-4 w-11/12 animate-pulse rounded-xl bg-ink/10" />
              <div className="h-4 w-5/6 animate-pulse rounded-xl bg-ink/10" />
              <div className="mt-6 h-4 w-full animate-pulse rounded-xl bg-ink/10" />
              <div className="h-4 w-10/12 animate-pulse rounded-xl bg-ink/10" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}