import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import FactCard from "@/components/FactCard";
import ClientsCarousel from "@/components/ClientsCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ExpertisePreview from "@/components/ExpertisePreview";
import TechStackPreview from "@/components/TechStackPreview";
import NewsAccordion, { NewsAccordionItem } from "@/components/NewsAccordion";
import { getAllPosts } from "@/lib/posts";
import { getAllProjects } from "@/lib/projects";
import { fetchClients } from "@/lib/api";
import { getExpertise } from "@/lib/expertise";

const FEATURED_WORK_IDS = [7, 5, 4, 8];

const JOURNEY = [
  {
    title: "Design",
    subtitle: "Interfaces people love",
    x: "18.13%", // cx 290 / 1600
    cx: 290,
    cy: 404,
  },
  {
    title: "Develop",
    subtitle: "Robust, scalable builds",
    x: "42.5%", // cx 680 / 1600
    cx: 680,
    cy: 382,
  },
  {
    title: "Brand",
    subtitle: "Identity that connects",
    x: "66.88%", // cx 1070 / 1600
    cx: 1070,
    cy: 301,
  },
  {
    title: "Market",
    subtitle: "Reach that drives growth",
    x: "86.25%", // cx 1380 / 1600
    cx: 1380,
    cy: 179,
  },
];

const FACTS = [
  { value: "2020", label: "Founded", icon: "calendar_today" },
  { value: "200+", label: "Delivered", icon: "rocket_launch" },
  { value: "50+", label: "Clients", icon: "groups" },
  { value: "India", label: "Location", icon: "location_on" },
];

// Static fallback clients (used only if the live client API is down).
const CLIENTS = [
  { name: "Apni Mandi", logo: "https://nerdtech.pythonanywhere.com/media/client_images/Apnimandi.png" },
  { name: "Homeatz", logo: "https://nerdtech.pythonanywhere.com/media/client_images/he.png" },
  { name: "HerdHelp", logo: "https://nerdtech.pythonanywhere.com/media/client_images/Herdhelp.png" },
  { name: "EastPass", logo: "https://nerdtech.pythonanywhere.com/media/client_images/East.png" },
  { name: "Opera Group", logo: "https://nerdtech.pythonanywhere.com/media/client_images/og.png" },
  { name: "DevajNGO", logo: "https://nerdtech.pythonanywhere.com/media/client_images/Logo.png" },
  { name: "GFIC", logo: "https://nerdtech.pythonanywhere.com/media/client_images/WhatsApp_Image_2024-03-29_at_20.50.13.jpeg" },
  { name: "Rudra Hammam Spa", logo: "https://nerdtech.pythonanywhere.com/media/client_images/rs.png" },
  { name: "Pisara Sarees", logo: "https://nerdtech.pythonanywhere.com/media/client_images/ps.png" },
  { name: "FBBT", logo: "https://nerdtech.pythonanywhere.com/media/client_images/Fbbt.png" },
  { name: "ASA", logo: "https://nerdtech.pythonanywhere.com/media/client_images/Asa.png" },
  { name: "Gamma", logo: "https://nerdtech.pythonanywhere.com/media/client_images/Gamma.png"},
  { name: "Fittingswale", logo: "https://nerdtech.pythonanywhere.com/media/client_images/Picsart_23-10-30_13-34-19-709.png "},
  { name: "SSJ", logo: "https://nerdtech.pythonanywhere.com/media/client_images/appstore.png" },
  { name: "KBH", logo: "https://nerdtech.pythonanywhere.com/media/client_images/4.png" },
  { name: "DIGI", logo: "https://nerdtech.pythonanywhere.com/media/client_images/icon.9a39bb178a6b4d2529fd.png" },
  { name: "Swaroop", logo: "https://nerdtech.pythonanywhere.com/media/client_images/dxgz0bzvphr5ylwqc7pz.png"},
  { name: "P1", logo: "https://nerdtech.pythonanywhere.com/media/client_images/IMG_0060.png"},
  { name: "Suvidha",logo: "https://nerdtech.pythonanywhere.com/media/client_images/Academy_hello-2.png"},
  { name: "MMP ",logo: "https://nerdtech.pythonanywhere.com/media/client_images/MMP.png"},
  { name: "Manasmit",logo:"https://nerdtech.pythonanywhere.com/media/client_images/logo.png"},
  { name: "AEPC ",logo:"https://nerdtech.pythonanywhere.com/media/client_images/logo_wli2dz3.png"},
  { name: "Power Electronical",logo:"https://nerdtech.pythonanywhere.com/media/client_images/PE-NAME-LOGO.png"},
  { name: "Rua",logo:"https://nerdtech.pythonanywhere.com/media/client_images/Rua.png"},
  { name: "YCPL",logo:"https://nerdtech.pythonanywhere.com/media/client_images/Yajurveda_icon.png"},
  { name: "TBSC ",logo:"https://nerdtech.pythonanywhere.com/media/client_images/WhatsApp_Image_2026-02-24_at_14.45.59-removebg-preview.png"},
  { name: "Headache Surgery", logo:"https://nerdtech.pythonanywhere.com/media/client_images/logo.webp"},
  { name: "AI Asasyah", logo:"https://nerdtech.pythonanywhere.com/media/client_images/basic_electronics_company_logo.jpeg"},
  { name: "Mr Financial" ,logo:"https://nerdtech.pythonanywhere.com/media/client_images/MR_LOGO-2.png"},
  { name: "NK Plastic" ,logo:"https://nerdtech.pythonanywhere.com/media/client_images/logo_VAsPRkJ.png"},
  { name: "SS" ,logo:"https://nerdtech.pythonanywhere.com/media/client_images/logo_0vM7prh.webp"},
  { name: "Faiz ul Hasnain Foundation" ,logo:"https://nerdtech.pythonanywhere.com/media/client_images/bymer-logo.webp"},
  
];

const TESTIMONIALS = [
  {
    quote:
      "NerdTech truly outdid themselves! Our new website is clean, professional, and perfectly showcases our services. We've already seen an increase in inquiries thanks to the improved user experience. If you're looking for a web design partner who understands your vision, NerdTech is the way to go.",
    name: "CHARLES ROBBINS",
    role: "Client",
  },
  {
    quote:
      "Highly professional and efficient team at NerdTech helped bring my logistics website vision to life. Excellent communication and attention to detail. Highly recommended for top-notch software solutions.",
    name: "PRAKASH LOGISTICS",
    role: "Client",
  },
  {
    quote:
      "I had a great experience working with Nerd Tech Company for my project. The team provided clear guidance and explained technical concepts in a simple and practical way. Their support system was responsive and helpful throughout the process. CEO Akif is an excellent leader whose vision and support create a positive learning environment. His leadership reflects in the team's organized and student-friendly approach. Overall, Nerd Tech Company is a reliable choice for students looking for quality project guidance and practical learning.",
    name: "TRIPTI JADHAV",
    role: "Client",
  },
  {
    quote:
    "I had a great experience with NerdTech for my 3rd year final year project. The team was very supportive, professional, and guided me properly throughout the project development process. They completed the project on time with good quality work and explained the concepts clearly whenever I had doubts.The project UI, functionality, and documentation were well prepared, which helped me a lot during submission and viva. I really appreciate their quick response and technical support.Highly recommended for students looking for project development, guidance, and digital solutions.",
    name: "Harshit",
    role: "Client",
  },
  {
    quote:
    "NerdTech exceeded our expectations with a website that is modern, professional, and user-friendly. Their team understood our vision perfectly, offered innovative ideas, and ensured timely delivery throughout the project. Since launching the new website, we’ve noticed a significant increase in customer inquiries and engagement. Their dedication, creativity, and attention to detail truly set them apart. We highly recommend NerdTech to anyone looking for a reliable and talented web design partner.",
    name: "Tejaswini Khandbahale",
    role: "Client",
  },
  {
    quote:
    "NerdTech is a highly professional and well-organized software development and digital marketing agency. The team maintains excellent communication throughout the project and makes sure to understand client requirements in detail. Their work quality is impressive from clean website designs to effective digital marketing strategies.",
    name: "Subodh Sonawane",
    role: "Client",
  },
  {
    quote:
    "Had a great experience with Nerdtech. The work environment is friendly and supportive, and I learned a lot during my time here. It’s a good place for beginners to gain practical knowledge and improve skills. Looking forward to seeing the company grow.",
    name: "Prathmesh Deshmukh",
    role: "Client",
  },
  {
    quote:
    "I had a great experience with Nerdtech Software Developer Service. Their team provided excellent support and professional service throughout my project. They developed my project perfectly according to my requirements, and their communication was smooth and helpful at every step. I have been connected with them since my 10th standard for the last 6 years, and they have always delivered quality work on time. Highly recommended for software development, student projects, and technical support.",
    name: "Aditya Bhamare",
    role:"Client",
  },
  {
    quote:
    "The curriculum is meticulously designed to provide a thorough and engaging exploration of fundamental coding concepts, seamlessly bridging theory with practical application.The instructors possess an unparalleled depth of knowledge and expertise in their field, effectively communicating complex ideas in a clear and concise manner. They demonstrate a genuine passion for teaching, fostering a vibrant and collaborative learning environmentI have witnessed a remarkable transformation in my own coding abilities as a direct result of this course. I have gained a profound understanding of key programming concepts, developed a strong foundation for further exploration, and acquired the confidence to tackle coding challenges independently.",
     name: "Rishikesh Gaud",
     role: "Client",
  }
  
];

const COUNTRIES = [
  { code: "US", name: "USA", region: "North America" },
  { code: "IN", name: "India", region: "South Asia" },
  { code: "SA", name: "Saudi Arabia", region: "Middle East" },
  { code: "YE", name: "Yemen", region: "Middle East" },
  { code: "GH", name: "Ghana", region: "Africa" },
  { code: "CY", name: "Cyprus", region: "Europe" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "FR", name: "France", region: "Europe" },
];

export const revalidate = 3600;

export default async function Home() {
  let featuredWork: Awaited<ReturnType<typeof getAllProjects>> = [];
  try {
    const allProjects = await getAllProjects();
    featuredWork = FEATURED_WORK_IDS.map((id) =>
      allProjects.find((project) => project.id === id)
    ).filter((project): project is NonNullable<typeof project> => Boolean(project));
  } catch (error) {
    console.error("Failed to load featured work from NerdTech API:", error);
  }

  let news: NewsAccordionItem[] = [];
  try {
    const posts = await getAllPosts();
    news = posts.slice(0, 6).map((post) => ({
      date: post.displayDate,
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      image: post.image,
    }));
  } catch (error) {
    console.error("Failed to load news from NerdTech API:", error);
  }

  let clients = CLIENTS;
  try {
    const apiClients = await fetchClients();
    if (Array.isArray(apiClients) && apiClients.length > 0) {
      clients = apiClients.map((c) => ({ name: c.name, logo: c.image }));
    }
  } catch (error) {
    console.error("Failed to load clients from NerdTech API:", error);
  }

  const expertiseStages = await getExpertise();

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#fafafa] pt-[76px] text-[#080808]">
        {/*HERO*/}
        <section className="relative mb-16 min-h-[680px] overflow-hidden md:mb-20">
          {/* Dotted background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(40,80,120,0.28) 0.8px, transparent 0.8px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Soft blue glow */}
          <div className="pointer-events-none absolute left-[-180px] top-[280px] h-[430px] w-[620px] rounded-full bg-[#dff4ff] opacity-40 blur-[120px]" />

          {/*HERO CONTENT*/}
          <div className="relative z-20 mx-auto max-w-[1400px] px-8 pb-0 pt-16 sm:px-10 lg:px-14 lg:pt-14">
            <div className="max-w-[850px]">
              {/* Eyebrow */}
              <p className="mb-7 text-[13px] font-semibold uppercase tracking-[0.34em] text-[#1683ff] sm:text-[14px]">
                Software Solutions
              </p>

              {/*MAIN HEADING*/}
              <h1
                className="
                  font-sans
                  text-[48px]
                  font-bold
                  leading-[0.96]
                  tracking-[-0.055em]
                  sm:text-[56px]
                  md:text-[64px]
                  lg:text-[72px]
                  xl:text-[78px]
                "
              >
                {/* First line */}
                <span className="block whitespace-nowrap">
                  We turn ideas
                </span>

                {/* Second line */}
                <span className="block whitespace-nowrap">
                  <span>into </span>

                  {/* Blue box ONLY behind software */}
                  <span className="relative inline-block">
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -bottom-[5px]
                        -left-[18px]
                        -right-[18px]
                        top-[4px]
                        -z-10
                        rounded-[30px]
                        bg-gradient-to-r
                        from-[#d9f3ff]
                        via-[#69c8f7]
                        to-[#2188f7]
                      "
                    />

                    software
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-[710px] text-[17px] leading-[1.6] text-[#59616b] sm:text-[18px] lg:text-[19px]">
                End-to-end software solutions that help startups and
                businesses build, grow, and scale with confidence.
              </p>
            </div>
          </div>

          {/*CURVE AREA */}
          <div className="pointer-events-none absolute left-0 right-0 top-[280px] z-10 h-[320px]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1600 520"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Curve fill */}
                <linearGradient
                  id="curveAreaGradient"
                  x1="0"
                  y1="80"
                  x2="1600"
                  y2="80"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#CFE3FF" stopOpacity="0.15" />
                  <stop offset="0.55" stopColor="#6EA8FF" stopOpacity="0.16" />
                  <stop offset="1" stopColor="#1466FF" stopOpacity="0.24" />
                </linearGradient>

                {/* Curve stroke — pale sky blue to deep blue */}
                <linearGradient
                  id="curveLineGradient"
                  x1="0"
                  y1="0"
                  x2="1600"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#BFDBFF" />
                  <stop offset="0.35" stopColor="#8BB9FF" />
                  <stop offset="0.68" stopColor="#4D93FF" />
                  <stop offset="1" stopColor="#1466FF" />
                </linearGradient>

                {/* Curve blur */}
                <filter
                  id="curveBlur"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="9" />
                </filter>
              </defs>

              {/*CURVE FILLED AREA*/}
              <path
                d="
                  M 0 405
                  C 308 405, 516 407, 756 372
                  C 1006 336, 1240 260, 1600 70
                  L 1600 520
                  L 0 520
                  Z
                "
                fill="url(#curveAreaGradient)"
              />

              {/*SOFT BLURRED GLOW CURVE*/}
              <path
                d="
                  M 0 405
                  C 308 405, 516 407, 756 372
                  C 1006 336, 1240 260, 1600 70
                "
                stroke="url(#curveLineGradient)"
                strokeWidth="16"
                strokeLinecap="round"
                opacity="0.45"
                filter="url(#curveBlur)"
              />

              {/*MAIN GRADIENT CURVE */}
              <path
                d="
                  M 0 405
                  C 308 405, 516 407, 756 372
                  C 1006 336, 1240 260, 1600 70
                "
                stroke="url(#curveLineGradient)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/*JOURNEY DOTS + DASHED CONNECTORS */}
              {JOURNEY.map((item) => (
                <g key={item.title}>
                  <line
                    x1={item.cx}
                    y1={item.cy}
                    x2={item.cx}
                    y2="520"
                    stroke="#1466FF"
                    strokeOpacity="0.35"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                  />
                  <circle
                    cx={item.cx}
                    cy={item.cy}
                    r="5"
                    fill="#ffffff"
                    stroke="#1466FF"
                    strokeWidth="2.5"
                  />
                </g>
              ))}

            </svg>

            {/*JOURNEY LABELS*/}
            <div className="absolute inset-x-0 bottom-[8px] hidden md:block">
              {JOURNEY.map((item) => (
                <div
                  key={item.title}
                  className="
                    absolute
                    w-[220px]
                    -translate-x-1/2
                    text-center
                  "
                  style={{
                    left: item.x,
                  }}
                >
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#111]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] text-[#8a8d91]">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/*MOBILE JOURNEY LABELS*/}
          <div className="relative z-20 mt-[280px] grid grid-cols-2 gap-8 px-6 pb-12 md:hidden">
            {JOURNEY.map((item) => (
              <div key={item.title}>
                <h3 className="text-[15px] font-semibold text-[#111]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[13px] text-[#8a8d91]">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Full-cycle services */}
        <section className="relative mx-auto mb-32 mt-2 max-w-container-max overflow-hidden px-margin-mobile md:mt-4 md:px-margin-desktop">
          <Reveal>
            <ExpertisePreview stages={expertiseStages} />
          </Reveal>
        </section>

        {/* Founder note */}
        <section className="relative mx-auto mb-32 mt-2 max-w-container-max overflow-hidden px-margin-mobile [perspective:1600px] md:mt-4 md:px-margin-desktop">
          <Reveal distance={70} duration={0.9} rootMargin="0px 0px 10% 0px" threshold={0}>
          <div className="group/card relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_1px_0_rgba(18,18,18,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(18,18,18,0.1)] md:p-16">
            {/* Decorative background layers */}
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_15%_20%,black,transparent)]" />
            <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[100px] animate-blob-drift transition-all duration-700 group-hover/card:bg-accent/25 group-hover/card:blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 right-[10%] h-64 w-64 rounded-full bg-accent/10 blur-[90px] animate-blob-drift [animation-delay:-7s] transition-all duration-700 group-hover/card:bg-accent/20" />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-ink/[0.06] transition-colors duration-500 group-hover/card:ring-accent/20" />

            <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
              {/* Photo + name */}
              <div className="relative flex flex-row items-center gap-4 md:col-span-3 md:flex-col md:items-start md:justify-center md:gap-0">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full shadow-[0_10px_30px_rgba(18,18,18,0.12)] md:h-40 md:w-40">
                  <Image
                    src="https://nerdtech.pythonanywhere.com/media/team/Flora_Haven-2.png"
                    alt="Akif Khan"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div className="md:mt-5">
                  <p className="font-body text-base font-semibold text-ink">
                    Akif Khan
                  </p>
                  <p className="font-body text-xs text-ink-faint">CEO &amp; Founder, NerdTech</p>
                </div>
              </div>

              {/* Heading + quote + philosophy */}
              <div className="relative md:col-span-9">
                <h2 className="mb-8 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  A note from the founder
                </h2>

                <span className="pointer-events-none block select-none font-display text-6xl leading-none text-ink/10">
                  &ldquo;
                </span>

                <blockquote className="relative -mt-4 font-body text-xl leading-relaxed text-ink md:text-2xl">
                  At NerdTech, we don&apos;t just build software — we{" "}
                  <span className="text-accent">architect the future</span> of
                  digital innovation with a human-centric approach.
                </blockquote>

                <p className="mt-8 max-w-2xl font-body text-base leading-relaxed text-ink-muted">
                  Our philosophy is rooted in the belief that digital solutions
                  should be as intuitive as they are powerful. Under Akif
                  Khan&apos;s leadership, NerdTech has consistently delivered
                  products that redefine industry standards and drive
                  meaningful impact for our partners.
                </p>

                <Link
                  href="/about-the-founder"
                  className="group relative mt-8 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(18,18,18,0.25)] active:translate-y-0"
                >
                  <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative">The Founder&apos;s Story</span>
                  <span aria-hidden="true" className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                </Link>
              </div>
            </div>
          </div>
          </Reveal>
        </section>

        {/* Marquee + "what we do" — black section */}
        <section className="relative overflow-hidden bg-dark mt-10">
          <Marquee />
          <div className="w-full border-t-2 border-white/25" />

          <div className="relative h-[420px] w-full overflow-hidden md:h-[560px]">
            <Image
              src="/images/what-we-do.jpg"
              alt="The NerdTech team collaborating"
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end pb-10 pl-margin-mobile pr-margin-mobile md:pb-14 md:pl-margin-desktop md:pr-margin-desktop">
              <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <span className="mb-4 inline-block rounded-md bg-accent px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-dark">
                    What we do
                  </span>
                  <p className="max-w-2xl font-display text-2xl font-medium leading-snug text-white md:text-4xl">
                    We specialise in web technologies — when it comes to
                    sophisticated business logic, interaction, rendering or
                    performance, you&apos;ve come to the right place.
                  </p>
                </div>
                <Link
                  href="/expertise"
                  className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-dark transition-colors hover:bg-accent hover:text-white"
                >
                  See our expertise
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key facts — white section, white cards, kept separate from the black marquee section above */}
        <section className="relative overflow-hidden bg-white">
          <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop md:py-14">
            <Reveal>
              <h2 className="mb-8 font-display text-3xl font-bold text-black md:mb-10 md:text-5xl">
                A few key facts about us:
              </h2>
            </Reveal>

            <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 0.12} distance={30}>
                  <FactCard value={fact.value} label={fact.label} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Recent news */}
        <section className="relative mx-auto mb-32 mt-20 max-w-container-max overflow-hidden px-margin-mobile md:mt-28 md:px-margin-desktop">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-blob-drift" />

          <Reveal>
            <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              From the blog
            </p>
            <h2 className="mb-10 font-display text-4xl font-bold text-ink">
              Recent{" "}
              <span className="group/pill relative inline-block cursor-default rounded-full border-2 border-ink px-5 py-0.5 transition-colors duration-300 hover:bg-ink hover:text-cream">
                news
              </span>
            </h2>
          </Reveal>

          {/* Desktop: hover-expanding panel gallery */}
          <div className="relative hidden md:block">
            <Reveal distance={40}>
              <NewsAccordion items={news} />
            </Reveal>
          </div>

          {/* Mobile: simple stacked cards (no hover on touch) */}
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:hidden">
            {news.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.1} distance={60}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="group relative z-0 flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-cardline bg-white p-4 transition-all duration-500 ease-out hover:z-20 hover:-translate-y-5 hover:scale-[1.08] hover:border-accent/30 hover:shadow-[0_36px_70px_rgba(12,175,255,0.28)]"
                >
                  {/* Glow sweep on hover */}
                  <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(260px_circle_at_20%_0%,rgba(12,175,255,0.14),transparent_65%)]" />

                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-cream-dim">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 shadow-sm backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:-rotate-45">
                        arrow_outward
                      </span>
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                      {item.date}
                    </p>
                    <h3 className="mb-2 font-display text-base font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 font-body text-sm text-ink-muted">
                      {item.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      Read more
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/blog"
                className="group relative overflow-hidden rounded-full bg-ink px-8 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(18,18,18,0.25)]"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-ink">
                  Show all news
                </span>
                <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-400 ease-out group-hover:translate-x-0" />
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Featured work */}
        <section className="mx-auto mb-32 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Selected projects
            </p>
            <h2 className="font-display text-4xl font-bold text-ink">
              Featured{" "}
              <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                work
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-lg font-body text-sm text-ink-muted">
              We dedicate ourselves to our projects with great care and
              attention to detail. That is what characterises our work.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mb-10 mt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-cardline pt-8">
              <div>
                <p className="font-display text-3xl font-bold text-ink">
                  200+
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  Projects
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ink">04</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  Categories
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ink">
                  100%
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  Client
                  <br />
                  Satisfaction
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {featuredWork.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1} distance={70}>
                <Link
                  href={`/work/${project.id}`}
                  className="group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl bg-cream-dim ring-1 ring-inset ring-ink/5"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="relative flex flex-col gap-5 p-6 md:p-8">
                    <h3 className="max-w-md font-display text-xl font-bold leading-snug text-white md:text-2xl">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white px-4 py-1.5 font-body text-xs font-semibold text-ink"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1.5 font-body text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                      Explore more
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="relative mx-auto mb-32 max-w-container-max overflow-hidden px-margin-mobile md:px-margin-desktop">
          <Reveal>
            <TechStackPreview />
          </Reveal>
        </section>

        {/* Our clients */}
        <section className="mx-auto mb-32 max-w-container-max px-margin-mobile md:px-margin-desktop">
          <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Trusted by
          </p>
          <h2 className="font-display text-4xl font-bold text-ink">
            Our{" "}
            <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
              clients
            </span>
          </h2>
          <p className="mb-10 mt-4 max-w-lg font-body text-sm text-ink-muted">
            By working with our partners, we create unique projects that
            excite and inspire people.
          </p>

          <div className="mb-16">
            <ClientsCarousel clients={clients} />
          </div>

          <div className="mb-10 mt-16">
            <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What clients say
            </p>
            <h2 className="font-display text-4xl font-bold text-ink">
              Words that{" "}
              <span className="inline-block rounded-full border-2 border-ink px-5 py-0.5">
                drive us
              </span>
            </h2>
          </div>

          <Reveal distance={40}>
            <TestimonialsCarousel testimonials={TESTIMONIALS} />
          </Reveal>
        </section>

        {/* Global presence (dark) */}
        <section className="relative overflow-hidden bg-dark px-margin-mobile py-24 md:px-margin-desktop">
          <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]" />
          <div className="pointer-events-none absolute -right-[10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
          <div className="pointer-events-none absolute -left-[8%] bottom-[-15%] h-[320px] w-[320px] rounded-full bg-accent/5 blur-[110px]" />

          <div className="relative mx-auto max-w-container-max">
            <div className="flex flex-col gap-12 pb-12 md:flex-row md:items-end md:justify-between">
              <Reveal distance={20}>
                <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Where we work
                </p>
                <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                  Global{" "}
                  <span className="inline-block rounded-full border-2 border-white/30 px-5 py-0.5">
                    presence
                  </span>
                </h2>
                <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-white/50">
                  We serve clients across continents — building digital products
                  that transcend borders.
                </p>
              </Reveal>

              <Reveal delay={0.1} distance={20}>
                <div className="flex gap-10 sm:gap-14">
                  {[
                    { value: "8", label: "Countries", icon: "public" },
                    { value: "4", label: "Continents", icon: "language" },
                    { value: "∞", label: "Possibilities", icon: "auto_awesome" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
                        <span className="material-symbols-outlined text-[18px] text-accent">
                          {stat.icon}
                        </span>
                      </div>
                      <span className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                        {stat.value}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-dark-border to-transparent" />

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {COUNTRIES.map((c, i) => (
                <Reveal key={c.code} delay={i * 0.06} distance={20} duration={0.7}>
                  <div className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-dark-card px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.04] hover:shadow-[0_20px_45px_rgba(12,175,255,0.14)]">
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-colors duration-300 group-hover:bg-accent/25" />
                    <div className="relative flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/25 bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                        <img
                          src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w160/${c.code.toLowerCase()}.png 2x`}
                          alt={`${c.name} flag`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-body text-[15px] font-semibold leading-tight text-white">
                          {c.name}
                        </p>
                        <p className="mt-0.5 text-xs text-white/40">{c.region}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined relative text-base text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                      chevron_right
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA (white, flows into footer) */}
        <section className="relative overflow-hidden bg-white px-margin-mobile pb-28 pt-20 text-center md:px-margin-desktop">
          <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_40%,black,transparent)]" />

          <Reveal distance={30}>
            <p className="relative mb-5 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-ink/40">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Let&apos;s talk
            </p>
            <h2 className="relative mx-auto max-w-xl font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              You have a project idea?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-ink-muted">
              Tell us where you want to go — we&apos;ll help you map out the build,
              the stack, and the timeline.
            </p>
            <a
              href="mailto:contact@nerdtech.in"
              className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(12,175,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(12,175,255,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative transition-colors duration-300 group-hover:text-white">
                Tell us about it!
              </span>
              <span
                aria-hidden="true"
                className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
              >
                →
              </span>
            </a>
          </Reveal>
        </section>
      </main>

      <WhatsAppButton />

      <Footer />
    </>
  );
}