import Navbar from "@/components/Navbar";

export default function LoadingWorkDetail() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-dark px-margin-mobile pb-12 pt-28 md:min-h-[480px] md:px-margin-desktop md:pb-16">
          <div className="absolute inset-0 animate-pulse bg-white/5" />
          <div className="relative h-4 w-32 animate-pulse rounded-full bg-white/15" />
          <div className="relative mt-6 h-10 w-2/3 animate-pulse rounded-2xl bg-white/15 md:h-14" />
          <div className="relative mt-4 h-5 w-1/2 animate-pulse rounded-xl bg-white/10" />
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="flex flex-col gap-4 md:col-span-8">
              <div className="h-4 w-full animate-pulse rounded-xl bg-ink/10" />
              <div className="h-4 w-11/12 animate-pulse rounded-xl bg-ink/10" />
              <div className="h-4 w-5/6 animate-pulse rounded-xl bg-ink/10" />
              <div className="mt-6 h-4 w-full animate-pulse rounded-xl bg-ink/10" />
              <div className="h-4 w-10/12 animate-pulse rounded-xl bg-ink/10" />
            </div>
            <div className="flex flex-col gap-4 md:col-span-4">
              <div className="h-32 animate-pulse rounded-2xl bg-ink/10" />
              <div className="h-32 animate-pulse rounded-2xl bg-ink/10" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
