
const ENTITY_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#x27;": "'",
  "&nbsp;": " ",
};

function decodeEntities(text: string): string {
  return text.replace(/&(amp|lt|gt|quot|#39|#x27|nbsp);/g, (match) => {
    return ENTITY_MAP[match] ?? match;
  });
}

export function stripHtml(html: string): string {
  if (!html) return "";
  return decodeEntities(html.replace(/<[^>]*>/g, " "));
}

export function htmlToParagraphs(html: string): string[] {
  if (!html) return [];
  const text = html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h1|h2|h3|h4|li|ol|ul)>/gi, "\n");
  return text
    .split("\n")
    .map((line) => stripHtml(line).trim())
    .filter(Boolean);
}

export function htmlListToItems(html: string): string[] {
  if (!html) return [];
  const items: string[] = [];
  const regex = /<li[^>]*>([\s\S]*?)<\/li>/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    const text = stripHtml(match[1]).trim();
    if (text) items.push(text);
  }
  return items;
}
