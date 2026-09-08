import { fetchProducts } from "@/lib/api";
import { truncate } from "@/lib/text";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  excerpt: string;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Herdhelp",
    price: 0,
    description:
      "Herdhelp tracks any animals brought onto a farm — cattle, sheep, goats, rabbits, pigs, or horses — from Android, iPhone, or the web.",
    excerpt:
      "Track farm animals of any kind from Android, iPhone, or the web.",
    image: "",
  },
];

const EXCERPT_LENGTH = 140;

function mapProduct(
  data: NonNullable<Awaited<ReturnType<typeof fetchProducts>>>[number]
): Product {
  const description = data.description?.trim() ?? "";
  return {
    id: data.id,
    name: data.name ?? "",
    price: Number(data.price) || 0,
    description,
    excerpt: truncate(description, EXCERPT_LENGTH),
    image: data.image ?? "",
  };
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const products = await fetchProducts();
    if (Array.isArray(products) && products.length > 0) {
      return products.map(mapProduct);
    }
    return PRODUCTS;
  } catch {
    return PRODUCTS;
  }
}