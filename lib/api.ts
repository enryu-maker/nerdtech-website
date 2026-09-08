
export const API_BASE_URL = "https://nerdtech.pythonanywhere.com";

export type ApiProject = {
  id: number;
  image: string;
  location: string;
  name: string;
  descrption: string;
};

export type ApiBlogPost = {
  id: number;
  description: string; // HTML
  title: string;
  image: string;
  date: string; // YYYY-MM-DD
  category: string;
};

export type ApiJob = {
  id: number;
  title: string;
  description: string; // HTML
  requirements: string; // HTML <ol>
  responsibilities: string; // HTML <ol>
  salary: string;
  location: string;
  is_active: boolean;
};

export type ApiExpertiseService = {
  name: string;
  image: string; // relative or absolute media path
  description: string;
};


export type ApiExpertiseCategory = {
  name: string;
  expertise: ApiExpertiseService[];
};

export type ApiClient = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type ApiTeamMember = {
  id: number;
  image: string;
  name: string;
  description: string;
};


export type ApiProduct = {
  id: number;
  name: string;
  price: string; // decimal serialised as a string, e.g. "0.00"
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
};

const REVALIDATE_SECONDS = 3600;

async function safeFetch(url: string): Promise<Response | null> {
  try {
    return await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
  } catch {

    return null;
  }
}

async function fetchJson<T>(path: string): Promise<T> {
  const res = await safeFetch(`${API_BASE_URL}${path}`);
  if (!res || !res.ok) {
    throw new Error(
      `NerdTech API: failed to fetch ${path} (${res ? res.status : "network error"})`
    );
  }
  return res.json() as Promise<T>;
}

export async function postForm(
  path: string,
  data: FormData
): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      body: data,
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function fetchProjects(): Promise<ApiProject[]> {
  return fetchJson<ApiProject[]>("/projects/");
}

export async function fetchProjectById(id: number): Promise<ApiProject | undefined> {
  const detailRes = await safeFetch(`${API_BASE_URL}/projects/${id}/`);
  if (detailRes && detailRes.ok) {
    return detailRes.json() as Promise<ApiProject>;
  }
  const all = await fetchProjects();
  return all.find((p) => p.id === id);
}

export async function fetchBlogPosts(): Promise<ApiBlogPost[]> {
  return fetchJson<ApiBlogPost[]>("/blog/blogposts/");
}

export async function fetchJobs(): Promise<ApiJob[]> {
  const jobs = await fetchJson<ApiJob[]>("/career/jobs/");
  return jobs.filter((job) => job.is_active);
}

export function submitApplication(data: FormData): Promise<boolean> {
  return postForm("/career/applications/", data);
}

export async function fetchExpertise(): Promise<ApiExpertiseCategory[]> {
  return fetchJson<ApiExpertiseCategory[]>("/expertise/");
}

export async function fetchClients(): Promise<ApiClient[]> {
  return fetchJson<ApiClient[]>("/client/view/");
}

export async function fetchTeam(): Promise<ApiTeamMember[]> {
  return fetchJson<ApiTeamMember[]>("/team/");
}

export async function fetchProducts(): Promise<ApiProduct[]> {
  return fetchJson<ApiProduct[]>("/product/view/");
}