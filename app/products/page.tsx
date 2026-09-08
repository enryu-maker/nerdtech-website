import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getAllProducts } from "@/lib/products";

export const metadata = {
  title: "Products | NerdTech",
  description:
    "Digital products built in-house by NerdTech, alongside our client work.",
};

// Re-check the backend at most once an hour (see lib/api.ts).
export const revalidate = 3600;

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-cream pt-[76px]">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-container-max px-margin-mobile pt-6 md:px-margin-desktop">
          <nav className="flex items-center gap-2 font-body text-sm text-ink-faint">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="text-ink-faint/50">/</span>
            <span className="font-semibold text-ink">Products</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-margin-mobile pb-10 pt-6 md:px-margin-desktop md:pb-14 md:pt-8">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_30%,black,transparent)]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/15 blur-[110px] animate-blob-drift" />

          <div className="relative mx-auto max-w-container-max">
            <Reveal distance={40} duration={0.9}>
              <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Built in-house
              </p>
              <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
                Our{" "}
                <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                  products
                </span>
              </h1>
              <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink-muted md:text-lg">
                Alongside client work, we build and maintain our own digital
                products.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Products grid — dark section */}
        <section className="relative overflow-hidden bg-dark px-margin-mobile py-16 md:px-margin-desktop md:py-20">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
          <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />

          <div className="relative mx-auto max-w-container-max">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <Reveal distance={40} duration={0.9}>
                <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Our Products
                </h2>
              </Reveal>
              <Reveal distance={30} duration={0.8} delay={0.1}>
                <p className="max-w-xs font-body text-sm leading-relaxed text-ink-faint md:text-right">
                  In-house products built to solve real-world problems.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <Reveal key={product.id} delay={i * 0.08} distance={50}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark transition-all duration-500 ease-out hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_24px_60px_rgba(12,175,255,0.2)]">
                    <div className="relative aspect-video w-full overflow-hidden bg-white">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="material-symbols-outlined text-5xl text-ink-faint/40">
                            widgets
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col px-5 py-5">
                      <h3 className="font-display text-lg font-bold leading-snug text-white">
                        {product.name}
                      </h3>
                      <p className="mt-2 line-clamp-3 font-body text-sm text-ink-faint">
                        {product.excerpt}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}