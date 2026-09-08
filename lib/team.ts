import { fetchTeam } from "@/lib/api";

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export const TEAM: TeamMember[] = [
  { id: 1, name: "Akif Khan", role: "Founder & C.E.O", image: "" },
  { id: 2, name: "Aditya Bachawe", role: "Lead Designer", image: "" },
  { id: 3, name: "Akram Khan", role: "CMO", image: "" },
  { id: 4, name: "Rahul Hadpad", role: "System Architect", image: "" },
];

function mapTeamMember(
  data: NonNullable<Awaited<ReturnType<typeof fetchTeam>>>[number]
): TeamMember {
  return {
    id: data.id,
    name: data.name ?? "",

    role: (data.description ?? "").trim(),
    image: data.image ?? "",
  };
}


export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    const members = await fetchTeam();
    if (Array.isArray(members) && members.length > 0) {
      return members.map(mapTeamMember);
    }
    return TEAM;
  } catch {
    return TEAM;
  }
}