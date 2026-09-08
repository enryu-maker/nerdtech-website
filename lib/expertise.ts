import { fetchExpertise } from "@/lib/api";

export type Service = {
  icon: string;
  title: string;
  description: string;
  image?: string;
};

export type Stage = {
  key: string;
  title: string;
  services: Service[];
};

export const EXPERTISE_STAGES: Stage[] = [
  {
    key: "strategy",
    title: "Strategy",
    services: [
      {
        icon: "route",
        title: "Brand Strategy",
        description:
          "A brand strategy defines the 1H & 5Ws for your brand — how, what, when, where, why and whom to communicate your brand's message to.",
      },
      {
        icon: "my_location",
        title: "Brand Purpose & Positioning",
        description:
          "Brand positioning means the nature of estate that a brand occupies in the minds of the consumer, while brand purpose means the motive that is the driver of the brand.",
      },
      {
        icon: "record_voice_over",
        title: "Brand Voice",
        description:
          "Brand voice refers to the tone of your brand that is used to communicate to your audience.",
      },
      {
        icon: "query_stats",
        title: "Brand Research & Analysis",
        description:
          "Brand research & analysis is the in-depth study of every primary and related aspect that builds a brand, and the derivations drawn from this study.",
      },
      {
        icon: "account_tree",
        title: "Brand Architecture",
        description:
          "Brand architecture is a structure that defines the relation between a parent brand and its sub-brands, products or services, sister companies or subsidiaries.",
      },
    ],
  },
  {
    key: "identity",
    title: "Identity",
    services: [
      {
        icon: "draw",
        title: "Logo Design",
        description:
          "A distinctive, versatile mark that anchors every other visual decision — designed to work as well on a favicon as it does on a billboard.",
      },
      {
        icon: "palette",
        title: "Visual Identity Systems",
        description:
          "Color, typography, iconography and imagery brought together into one cohesive system, so the brand feels unmistakably itself across every surface.",
      },
      {
        icon: "menu_book",
        title: "Brand Guidelines",
        description:
          "The rulebook that codifies logo usage, spacing, color and tone — keeping the brand consistent no matter who's designing it next.",
      },
      {
        icon: "text_fields",
        title: "Typography & Colour Systems",
        description:
          "A considered type and colour palette that carries personality, meaning and legibility across print, product and screen.",
      },
      {
        icon: "inventory_2",
        title: "Packaging & Collateral",
        description:
          "Business cards, packaging, signage and print collateral designed as an extension of the brand, not an afterthought.",
      },
    ],
  },
  {
    key: "website",
    title: "Website",
    services: [
      {
        icon: "design_services",
        title: "Web Design (UI/UX)",
        description:
          "Interfaces built around how people actually browse — clear hierarchy, fast load, and layouts that convert visitors into customers.",
      },
      {
        icon: "code",
        title: "Web Development",
        description:
          "Modern, performant front-end and back-end engineering — from Next.js marketing sites to complex, data-driven web applications.",
      },
      {
        icon: "shopping_cart",
        title: "E-commerce Development",
        description:
          "Storefronts built for scale — catalog management, payments and checkout flows designed to remove friction from every purchase.",
      },
      {
        icon: "dns",
        title: "CMS & Web Platforms",
        description:
          "Flexible, editor-friendly content systems that let your team publish and update without waiting on a developer.",
      },
      {
        icon: "speed",
        title: "Performance & SEO Foundations",
        description:
          "Sites engineered for Core Web Vitals and search visibility from day one, not bolted on after launch.",
      },
    ],
  },
  {
    key: "storytelling",
    title: "Storytelling",
    services: [
      {
        icon: "auto_stories",
        title: "Content Strategy",
        description:
          "A plan for what your brand says, where, and how often — mapped to the audience and channels that actually move the needle.",
      },
      {
        icon: "edit_note",
        title: "Copywriting",
        description:
          "Sharp, on-voice writing for websites, campaigns and product — words that sound like the brand and read like a human wrote them.",
      },
      {
        icon: "videocam",
        title: "Video Production",
        description:
          "From concept to final cut — brand films, product demos and ad creative produced end-to-end for digital and broadcast.",
      },
      {
        icon: "photo_camera",
        title: "Social & Content Creation",
        description:
          "Photography, motion and short-form content designed for the feed — built to stop the scroll and hold the brand's tone.",
      },
      {
        icon: "campaign",
        title: "Campaign Creative",
        description:
          "A single idea, expressed consistently across every touchpoint of a campaign, from hero film to the smallest social cutdown.",
      },
    ],
  },
  {
    key: "digital",
    title: "Digital",
    services: [
      {
        icon: "search",
        title: "Search Engine Optimization",
        description:
          "Technical, on-page and content SEO that compounds — built to earn durable organic visibility, not short-lived ranking spikes.",
      },
      {
        icon: "ads_click",
        title: "Paid Advertising & PPC",
        description:
          "Search, social and display campaigns run and optimized against real business outcomes, not vanity metrics.",
      },
      {
        icon: "share",
        title: "Social Media Marketing",
        description:
          "Channel strategy, content calendars and community management that build an audience instead of just posting into the void.",
      },
      {
        icon: "mail",
        title: "Email Marketing",
        description:
          "Lifecycle and campaign emails designed to nurture, convert and retain — from welcome flows to full re-engagement sequences.",
      },
      {
        icon: "bolt",
        title: "Marketing Automation & Analytics",
        description:
          "Tracking, dashboards and automated workflows that turn scattered marketing data into decisions you can act on.",
      },
    ],
  },
  {
    key: "app-development",
    title: "App Development",
    services: [
      {
        icon: "smartphone",
        title: "iOS & Android App Development",
        description:
          "Native and cross-platform mobile apps engineered for performance, built to meet App Store and Play Store standards from day one.",
      },
      {
        icon: "devices",
        title: "Cross-Platform Development",
        description:
          "One codebase, every device — React Native and Flutter builds that ship faster without compromising on native feel.",
      },
      {
        icon: "touch_app",
        title: "App UI/UX Design",
        description:
          "Mobile-first interfaces designed around real usage patterns — thumb-friendly, fast, and intuitive from the first open.",
      },
      {
        icon: "terminal",
        title: "Custom Software Development",
        description:
          "Bespoke internal tools, dashboards and platforms built around how your business actually operates, not a generic template.",
      },
      {
        icon: "build",
        title: "App Support & Maintenance",
        description:
          "Ongoing updates, monitoring and OS-version support so the app keeps running smoothly long after launch day.",
      },
    ],
  },
];

const ICON_BY_NAME: Record<string, string> = {
  "Brand Strategy": "route",
  "Brand Purpose & Positioning": "my_location",
  "Brand Voice": "record_voice_over",
  "Brand Research & Analysis": "query_stats",
  "Brand Architecture": "account_tree",
  "Brand Identity": "draw",
  "Brand Name & Tagline": "text_fields",
  "Logo Design": "draw",
  "Brochure Design": "menu_book",
  "Packaging Design": "inventory_2",
  "Business/Corporate Websites": "design_services",
  "NGO /Non-Profit Websites": "volunteer_activism",
  "E-Commerce Website": "shopping_cart",
  "Educational Website": "school",
  "Social Media Websites": "share",
  "Brand Storytelling": "auto_stories",
  "Photography, Film & Animation": "photo_camera",
  "Public and Media Relation": "campaign",
  "Environmental Branding": "landscape",
  "Search Engine Optimization": "search",
  "Social Media Marketing": "share",
  "Email Marketing": "mail",
  "Search Engine Marketing": "ads_click",
  "Lifestyle Mobile Apps": "smartphone",
  "Social Media Mobile Apps": "groups",
  "Utility Mobile Apps": "build",
  "Productivity Mobile Apps": "bolt",
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function resolveMediaUrl(image: string): string {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `https://nerdtech.pythonanywhere.com${image.startsWith("/") ? "" : "/"}${image}`;
}

function mapExpertise(data: NonNullable<Awaited<ReturnType<typeof fetchExpertise>>>): Stage[] {
  return data.map((category) => ({
    key: slugify(category.name),
    title: category.name,
    services: (category.expertise ?? []).map((s) => ({
      icon: ICON_BY_NAME[s.name] ?? "design_services",
      title: s.name,
      description: s.description ?? "",
      image: resolveMediaUrl(s.image),
    })),
  }));
}

export async function getExpertise(): Promise<Stage[]> {
  try {
    const data = await fetchExpertise();
    if (Array.isArray(data) && data.length > 0) {
      return mapExpertise(data);
    }
    return EXPERTISE_STAGES;
  } catch {
    return EXPERTISE_STAGES;
  }
}
