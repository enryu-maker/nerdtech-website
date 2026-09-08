import Navbar from "@/components/Navbar";

export default function LoadingBlogList() {
  return (
    <>
      <Navbar />
      <main className="pt-[76px]">
        <section className="px-margin-mobile pb-10 pt-10 md:px-margin-desktop md:pt-16">
          <div className="mx-auto max-w-container-max">
            <div className="h-4 w-40 animate-pulse rounded-full bg-ink/10" />
            <div className="mt-6 h-12 w-2/3 animate-pulse rounded-2xl bg-ink/10 md:h-14" />
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile pb-24 md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="aspect-[4/3] w-full animate-pulse rounded-2xl bg-ink/10" />
                <div className="h-4 w-1/3 animate-pulse rounded-full bg-ink/10" />
                <div className="h-5 w-5/6 animate-pulse rounded-xl bg-ink/10" />
                <div className="h-4 w-2/3 animate-pulse rounded-xl bg-ink/10" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
