import { fetchBlogPosts } from "@/lib/api";
import { htmlToParagraphs, stripHtml } from "@/lib/html";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  displayDate: string;
  excerpt: string;
  image: string;
  readTime: string;
  content: { heading: string; paragraphs: string[] }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "1",
    title: "Mastering React Hooks: A Beginner's Guide",
    category: "Technology",
    date: "2024-04-06",
    displayDate: "April 6, 2024",
    excerpt:
      "React Hooks have revolutionized how we write components, providing a more concise, functional approach to state and side effects.",
    image:
      "https://nerdtech.pythonanywhere.com/media/blog_images/Things-You-Should-Know-About-React-Hooks.png",
    readTime: "6 min read",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "React Hooks changed the way developers think about components. Before Hooks, managing state and side effects meant reaching for class components, wiring up lifecycle methods, and often duplicating logic across a codebase. Hooks let you do all of that inside simple function components — with less boilerplate and more clarity.",
        ],
      },
    ],
  },
  {
    slug: "2",
    title: "Getting Started with Django: A Beginner's Guide",
    category: "Technology",
    date: "2024-04-06",
    displayDate: "April 6, 2024",
    excerpt:
      "Django is a powerful web framework for building dynamic web applications using Python — here's how to get started.",
    image: "https://nerdtech.pythonanywhere.com/media/blog_images/Python-web-framework-django.jpg",
    readTime: "5 min read",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Django has earned its reputation as one of the most productive web frameworks available, and it's built entirely in Python. It ships with the tools most projects eventually need — an ORM, an admin interface, authentication, and a templating engine.",
        ],
      },
    ],
  },
  {
    slug: "3",
    title: "The Art and Science of Color Theory",
    category: "Design",
    date: "2024-04-09",
    displayDate: "April 9, 2024",
    excerpt:
      "How the strategic use of color can transform your website, captivate your audience, and elevate your brand.",
    image: "https://nerdtech.pythonanywhere.com/media/blog_images/image.png",
    readTime: "4 min read",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Color is one of the fastest ways a website communicates with a visitor — often before they've read a single word. Used well, it builds trust, guides attention, and reinforces a brand's personality.",
        ],
      },
    ],
  },
  {
    slug: "4",
    title: "Next.js Explained: Building Faster, Smarter Web Applications",
    category: "Technology",
    date: "2026-04-20",
    displayDate: "April 20, 2026",
    excerpt:
      "Modern web development has evolved far beyond simple static pages — today's applications demand speed, scalability, SEO, and seamless UX all at once.",
    image: "https://nerdtech.pythonanywhere.com/media/blog_images/nextjs-logo.jpg",
    readTime: "7 min read",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Modern web applications are expected to do a lot: load fast, rank well in search, feel smooth to use, and scale under real traffic. Next.js has become one of the go-to frameworks for meeting all of those expectations at once.",
        ],
      },
    ],
  },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDisplayDate(date: string): string {
  if (!date) return "";
  const [y, m, d] = date.split("-").map(Number);
  if (!y || !m || !d) return date;
  return `${MONTHS[m - 1] ?? ""} ${d}, ${y}`.trim();
}

function parseContent(html: string): { heading: string; paragraphs: string[] }[] {
  if (!html) return [];
  const blocks: { heading: string; paragraphs: string[] }[] = [];
  let current: { heading: string; paragraphs: string[] } | null = null;

  const tokens = html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|ol|ul)>/gi, "\n")
    .split(/(<h[1-3][^>]*>[\s\S]*?<\/h[1-3]>)/gi);

  for (const token of tokens) {
    const trimmed = token.trim();
    if (!trimmed) continue;

    const headingMatch = trimmed.match(/^<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i);
    if (headingMatch) {
      const heading = stripHtml(headingMatch[1]).trim();
      if (heading) {
        if (current && current.paragraphs.length > 0) blocks.push(current);
        current = { heading, paragraphs: [] };
      }
      continue;
    }

    if (!current) {
      current = { heading: "Introduction", paragraphs: [] };
    }
    const lines = trimmed
      .split("\n")
      .map((line) => stripHtml(line).trim())
      .filter(Boolean);
    current.paragraphs.push(...lines);
  }

  if (current && current.paragraphs.length > 0) blocks.push(current);
  return blocks;
}

function countWords(html: string): number {
  return stripHtml(html).trim().split(/\s+/).filter(Boolean).length;
}

function makeReadTime(words: number): string {
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function makeExcerpt(paragraphs: { heading: string; paragraphs: string[] }[]): string {
  const first = paragraphs[0]?.paragraphs?.[0] ?? "";
  const cap = 160;
  const short = first.length > cap ? `${first.slice(0, cap).trimEnd()}…` : first;
  return short;
}

function mapPost(data: NonNullable<Awaited<ReturnType<typeof fetchBlogPosts>>>[number]): BlogPost {
  const content = parseContent(data.description);
  const words = countWords(data.description);
  return {
    slug: String(data.id),
    title: data.title ?? "",
    category: data.category ?? "News",
    date: data.date ?? "",
    displayDate: formatDisplayDate(data.date),
    excerpt: makeExcerpt(content),
    image: data.image ?? "",
    readTime: makeReadTime(words),
    content:
      content.length > 0
        ? content
        : [{ heading: "Introduction", paragraphs: [stripHtml(data.description).trim()] }],
  };
}


export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const posts = await fetchBlogPosts();
    if (Array.isArray(posts) && posts.length > 0) {
      return posts.map(mapPost);
    }
    return POSTS;
  } catch {
    return POSTS;
  }
}


export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
