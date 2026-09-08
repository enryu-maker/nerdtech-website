import { ApiProject, fetchProjectById, fetchProjects } from "@/lib/api";
import { truncate } from "@/lib/text";

export type WorkProject = {
  id: number;
  name: string; 
  title: string; 
  tagline: string;
  client: string;
  category: string;
  tags: string[];
  location: string;
  status: string;
  image: string;
  excerpt: string;
  about: string[];
  challenge: string[];
  solution: string[];
  results: string[];
};

type Enrichment = Partial<
  Pick<WorkProject, "category" | "tags" | "status" | "challenge" | "solution" | "results">
>;

const ENRICHMENT: Record<number, Enrichment> = {
  7: {

    category: "Healthcare",
    tags: ["Web & App", "Healthcare", "India"],
    status: "Completed",
    challenge: [
      "The client approached us with a need to modernize their digital presence and build trust with patients evaluating a highly specialized, unfamiliar surgical procedure. They required a robust, scalable platform that could handle detailed medical content while remaining approachable for a non-specialist audience.",
      "We had to rethink the entire information architecture so that clinical credibility and patient reassurance could coexist on the same page without either one undercutting the other.",
    ],
    solution: [
      "We developed a custom brand and web solution tailored to the practice's specific requirements, using a calming palette and clear visual hierarchy to guide anxious visitors toward the information they needed most.",
      "A modular content system lets the clinical team update procedure details and patient resources independently, keeping the site accurate as treatment protocols evolve.",
    ],
    results: [
      "Since launch, the practice has seen a marked increase in qualified consultation requests, with patients reporting that the site made a complex procedure easier to understand.",
    ],
  },
  5: {

    category: "Brand Identity",
    tags: ["Brand Identity", "Service", "India"],
    status: "Completed",
    challenge: [
      "The client needed a brand system flexible enough to cover vehicle wraps, uniforms, a booking app, and social content, without losing a consistent identity across all of them.",
    ],
    solution: [
      "We built a bold, high-contrast identity anchored by a friendly mascot and a repeatable wave motif, then extended it into a full asset library covering vehicles, uniforms, and the booking experience.",
    ],
    results: [
      "The rebrand led to a visible uptick in street-level recognition and repeat bookings within the first quarter.",
    ],
  },
  4: {
    // Laundry On Demand (LOD)
    category: "Brand Identity",
    tags: ["iOS & Android", "On-Demand", "India"],
    status: "Completed",
    challenge: [
      "The client approached us with a need to modernize their digital presence and streamline their operations, across a scalable solution that could handle high traffic while providing an exceptional experience on every device.",
    ],
    solution: [
      "We developed a custom solution utilizing the latest technologies in our stack, focused on high-performance architecture, accessibility, and a clean interface that reflects their brand identity.",
    ],
    results: [
      "Since launch, the project has seen significant improvements in user engagement and operational efficiency, with load times and conversion rates improving noticeably.",
    ],
  },
  8: {
    // At Ease Pest Control
    category: "Web Design",
    tags: ["Web Design", "Pest Control", "India"],
    status: "Completed",
    challenge: [
      "The client needed a site that could convert anxious, time-pressed visitors quickly, without resorting to aggressive sales tactics that feel out of place for a home-services brand.",
    ],
    solution: [
      "We designed a contact-first layout with persistent booking and call actions, paired with a calm visual language that reassures rather than alarms.",
    ],
    results: [
      "The redesign produced a clear lift in inbound calls and online bookings for the client.",
    ],
  },
};

const DEFAULT_CATEGORY = "Digital Product";
const DEFAULT_STATUS = "Completed";
const EXCERPT_LENGTH = 160;

function splitName(name: string): { client: string; tagline: string } {
  const [client, tagline] = name.split("|").map((part) => part.trim());
  return { client: client || name, tagline: tagline ?? "" };
}

export function toWorkProject(api: ApiProject): WorkProject {
  const { client, tagline } = splitName(api.name);
  const enrichment = ENRICHMENT[api.id] ?? {};
  const description = api.descrption?.trim() ?? "";

  return {
    id: api.id,
    name: client,
    title: api.name,
    tagline,
    client,
    category: enrichment.category ?? DEFAULT_CATEGORY,
    tags: enrichment.tags ?? [DEFAULT_CATEGORY, "India"],
    location: api.location,
    status: enrichment.status ?? DEFAULT_STATUS,
    image: api.image,
    excerpt: truncate(description, EXCERPT_LENGTH),
    about: description ? [description] : [],

    challenge: enrichment.challenge ?? [],
    solution: enrichment.solution ?? [],
    results: enrichment.results ?? [],
  };
}

/** (my note)All projects, freshest data from the live backend. */
export async function getAllProjects(): Promise<WorkProject[]> {
  const apiProjects = await fetchProjects();
  return apiProjects.map(toWorkProject);
}

/** A single project by id (matches the /work/[id] route param). */
export async function getProjectById(id: number): Promise<WorkProject | undefined> {
  const apiProject = await fetchProjectById(id);
  return apiProject ? toWorkProject(apiProject) : undefined;
}