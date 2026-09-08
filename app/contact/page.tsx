import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | NerdTech",
  description:
    "Let's talk about your project. See how NerdTech takes an idea from intro call to project planning.",
};

const STEPS = [
  {
    number: "1",
    title: "Intro call",
    description:
      "In a 30-minute call, one of our specialists learns about your business and outlines the steps for working together.",
  },
  {
    number: "2",
    title: "Free discovery workshop",
    description:
      "Together with you, our team maps out the user flow, feature list, and any risks the project might carry.",
  },
  {
    number: "3",
    title: "Project planning",
    description:
      "We hand over an implementation plan with timelines and estimates, so you know exactly what to expect.",
  },
];

const OFFICES = [
  {
    flag: "🇮🇳",
    city: "Nashik, India",
    address: "NerdTech Softwares LLC\nNashik, Maharashtra, India",
    phone: "+91 94056 49047",
  },
  {
    flag: "🇮🇳",
    city: "Remote — Pan India",
    address: "We deliver to clients across\nIndia, remote-first by design",
    phone: "+91 94056 49047",
  },
  {
    flag: "🌍",
    city: "International clients",
    address: "USA · Saudi Arabia · Yemen\nGhana · Cyprus · Germany · France",
    phone: "contact@nerdtech.in",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-[76px]">
        <section className="relative overflow-hidden px-margin-mobile pb-24 pt-16 md:px-margin-desktop md:pb-28 md:pt-20">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_65%_65%_at_20%_15%,black,transparent)]" />
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-blob-drift" />
          <div className="pointer-events-none absolute right-[6%] top-[20%] h-64 w-64 rounded-full bg-accent/5 blur-[100px] animate-blob-drift [animation-delay:-6s]" />

          <div className="relative mx-auto max-w-container-max">
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink opacity-0 animate-fade-up sm:text-5xl md:text-6xl">
              Let&apos;s talk about your project!
            </h1>

            <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
              {/* Left: how it works */}
              <div className="opacity-0 animate-fade-up [animation-delay:0.1s] lg:col-span-5">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  How does it work?
                </h2>

                <div className="relative mt-8 flex flex-col gap-10">
                  {STEPS.map((step, i) => (
                    <Reveal key={step.number} delay={i * 0.08} distance={16}>
                      <div className="relative flex gap-5">
                        <div className="relative flex flex-col items-center">
                          <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-accent shadow-[0_0_0_4px_rgba(12,175,255,0.15)]" />
                          {i < STEPS.length - 1 && (
                            <span className="mt-1 w-px flex-1 bg-ink/10" />
                          )}
                        </div>

                        <div className="pb-2">
                          <h3 className="font-display text-lg font-bold text-ink">
                            {step.number}. {step.title}
                          </h3>
                          <p className="mt-2 max-w-sm font-body text-[15px] leading-relaxed text-ink-muted">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Right: form card */}
              <div className="lg:col-span-7">
                <Reveal delay={0.15} distance={24}>
                  <ContactForm />
                </Reveal>
              </div>
            </div>

            {/*GET IN TOUCH*/}
            <div className="mt-24 grid grid-cols-1 gap-10 border-t border-ink/10 pt-16 lg:grid-cols-12 lg:gap-10">
              <Reveal distance={20} className="lg:col-span-5">
                <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl">
                  Get in touch
                  <br />
                  with NerdTech
                </h2>

                <div className="mt-8 flex flex-col gap-6">
                  <div>
                    <h3 className="font-body text-sm font-semibold text-ink">
                      General inquiries
                    </h3>
                    <a
                      href="mailto:contact@nerdtech.in"
                      className="font-body text-sm text-accent transition-colors hover:text-ink"
                    >
                      contact@nerdtech.in
                    </a>
                  </div>

                  <div>
                    <h3 className="font-body text-sm font-semibold text-ink">
                      Join our team
                    </h3>
                    <a
                      href="mailto:contact@nerdtech.in?subject=Job%20Application"
                      className="font-body text-sm text-accent transition-colors hover:text-ink"
                    >
                      contact@nerdtech.in
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-7">
                {OFFICES.map((office, i) => (
                  <Reveal key={office.city} delay={i * 0.06} distance={20}>
                    <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_10px_30px_rgba(4,60,95,0.06)]">
                      <span className="text-xl">{office.flag}</span>

                      <h3 className="mt-4 font-body text-base font-semibold text-ink">
                        {office.city}
                      </h3>
                      <p className="mt-2 whitespace-pre-line font-body text-sm leading-relaxed text-ink-muted">
                        {office.address}
                      </p>

                      <p className="mt-4 font-body text-sm text-ink">
                        {office.phone}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />

      <Footer />
    </>
  );
}