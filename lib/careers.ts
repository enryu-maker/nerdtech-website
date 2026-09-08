import { fetchJobs } from "@/lib/api";
import { htmlListToItems, htmlToParagraphs, stripHtml } from "@/lib/html";

export type JobOpening = {
  slug: string;
  title: string;
  tags: string[];
  field: string;
  location: string;
  type: string;
  summary: string;
  description: string[];
  requirements: string[];
  niceToHave: string[];
  scopeOfWork: string[];
};


export const JOB_OPENINGS: JobOpening[] = [
  {
    slug: "1",
    title: "Django REST Framework (DRF) Developer",
    tags: ["Engineering", "Full-time"],
    field: "Engineering",
    location: "Nashik",
    type: "Full-time",
    summary:
      "NerdTech is looking for a DRF Developer who can design clean, scalable APIs and take ownership of backend architecture across client projects.",
    description: [
      "NerdTech is looking for a DRF Developer who combines hands-on backend execution with strong API design instincts and a proactive mindset for quality delivery.",
      "You'll own backend architecture across multiple client projects, design clean and scalable REST APIs, and collaborate closely with our design and frontend teams in a transparent, curiosity-driven company culture.",
    ],
    requirements: [
      "2+ years of experience with Django and Django REST Framework",
      "Strong understanding of relational databases (PostgreSQL/MySQL) and query optimization",
      "Experience designing and documenting RESTful APIs",
      "Familiarity with authentication patterns (JWT, OAuth, session-based auth)",
    ],
    niceToHave: [
      "Experience with Next.js or React frontend integration",
      "Familiarity with cloud deployment (AWS, Render, PythonAnywhere)",
    ],
    scopeOfWork: [
      "Design and build REST APIs for client web and mobile products",
      "Own database schema design and migrations for new features",
    ],
  },
  {
    slug: "3",
    title: "React Native Developer",
    tags: ["Engineering", "Full-time"],
    field: "Engineering",
    location: "Nashik",
    type: "Full-time",
    summary:
      "We're looking for a React Native Developer who's comfortable shipping polished, production-ready mobile apps for both iOS and Android.",
    description: [
      "We're looking for a React Native Developer who's comfortable shipping polished, production-ready mobile apps for both iOS and Android across a range of client industries.",
      "You'll work closely with our design team to translate UI concepts into smooth, native-feeling mobile experiences.",
    ],
    requirements: [
      "2+ years building and shipping React Native apps to the App Store and Play Store",
      "Strong grasp of native modules, navigation, and state management",
    ],
    niceToHave: [
      "Experience with Expo and EAS build/submit workflows",
      "Familiarity with push notifications and in-app payments",
    ],
    scopeOfWork: [
      "Build and ship cross-platform mobile apps from design handoff to release",
      "Integrate with backend APIs built by the NerdTech engineering team",
    ],
  },
];

function deriveTags(title: string): string[] {
  const lower = title.toLowerCase();
  const tags = ["Engineering"];
  if (lower.includes("react native") || lower.includes("mobile")) {
    tags.push("Mobile");
  } else if (lower.includes("django") || lower.includes("backend")) {
    tags.push("Backend");
  }
  if (lower.includes("intern") || lower.includes("trainee")) {
    tags.push("Internship");
  } else {
    tags.push("Full-time");
  }
  return tags;
}

function deriveField(title: string): string {
  return /react native|mobile|ios|android/i.test(title)
    ? "Engineering"
    : "Engineering";
}

function makeSummary(title: string, description: string): string {
  const plain = stripHtml(description).trim();
  if (plain.length <= 0) return `Open role at NerdTech: ${title}.`;
  const cap = 160;
  const short = plain.length > cap ? `${plain.slice(0, cap).trimEnd()}…` : plain;
  return short;
}

function mapJob(data: NonNullable<Awaited<ReturnType<typeof fetchJobs>>>[number]): JobOpening {
  const title = data.title ?? "";
  const description = htmlToParagraphs(data.description);
  return {
    slug: String(data.id),
    title,
    tags: deriveTags(title),
    field: deriveField(title),
    location: data.location || "Remote",
    type: "Full-time",
    summary: makeSummary(title, data.description),
    description: description.length > 0 ? description : [title],
    requirements: htmlListToItems(data.requirements).slice(0, 6),
    niceToHave: [],
    scopeOfWork: htmlListToItems(data.responsibilities).slice(0, 6),
  };
}

export async function getAllJobs(): Promise<JobOpening[]> {
  try {
    const jobs = await fetchJobs();
    if (Array.isArray(jobs) && jobs.length > 0) {
      return jobs.map(mapJob);
    }
    return JOB_OPENINGS;
  } catch {
    return JOB_OPENINGS;
  }
}

export async function getJobBySlug(slug: string): Promise<JobOpening | undefined> {
  const jobs = await getAllJobs();
  return jobs.find((job) => job.slug === slug);
}
