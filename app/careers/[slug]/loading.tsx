import Navbar from "@/components/Navbar";

export default function LoadingJobDetail() {
  return (
    <>
      <Navbar />
      <main className="pt-[76px]">
        <section className="mx-auto max-w-3xl px-margin-mobile pt-10 md:px-margin-desktop md:pt-16">
          <div className="h-4 w-32 animate-pulse rounded-full bg-ink/10" />
          <div className="mt-6 h-10 w-2/3 animate-pulse rounded-2xl bg-ink/10 md:h-12" />
          <div className="mt-4 flex gap-3">
            <div className="h-6 w-24 animate-pulse rounded-full bg-ink/10" />
            <div className="h-6 w-24 animate-pulse rounded-full bg-ink/10" />
          </div>

          <div className="mt-10 flex flex-col gap-4">
            <div className="h-4 w-full animate-pulse rounded-xl bg-ink/10" />
            <div className="h-4 w-11/12 animate-pulse rounded-xl bg-ink/10" />
            <div className="h-4 w-5/6 animate-pulse rounded-xl bg-ink/10" />
          </div>

          <div className="mt-10 h-12 w-40 animate-pulse rounded-full bg-ink/10" />
        </section>
      </main>
    </>
  );
}
