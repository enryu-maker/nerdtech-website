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

      <main className="min-h-screen bg-white pt-[76px]">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-container-max px-margin-mobile pt-8 md:px-margin-desktop">
          <nav className="flex items-center gap-2 font-body text-sm text-ink-faint">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="text-ink-faint/50">/</span>
            <span className="font-semibold text-ink">Products</span>
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
                Built in-house
              </p>
              <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
                Products we&apos;ve{" "}
                <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                  built ourselves
                </span>
              </h1>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink-muted md:text-lg">
                Alongside client work, we build and maintain our own digital
                products.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Products grid */}
        <section className="relative mx-auto mb-32 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.08} distance={50}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cardline bg-white transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(12,175,255,0.16)]">
                  <div className="relative aspect-video w-full overflow-hidden bg-cream-dim">
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
                    <h3 className="font-display text-lg font-bold leading-snug text-ink">
                      {product.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 font-body text-sm text-ink-muted">
                      {product.excerpt}
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