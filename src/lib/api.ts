const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type FetchOptions = {
  cache?: "no-store" | "force-cache";
};

export async function strapiGet(path: string, options: FetchOptions = {}) {
  if (!STRAPI_URL) {
    throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined in .env.local");
  }

  const res = await fetch(`${STRAPI_URL}${path}`, {
    cache: options.cache ?? "no-store",
  });

  if (!res.ok) {
    throw new Error(`Strapi error: ${res.status} on ${path}`);
  }

  return res.json();
}
