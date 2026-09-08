const BASE = "https://nerdtech.pythonanywhere.com";

const CANDIDATES = [
  "/",
  "/api/",
  "/projects/",
  "/project/",
  "/contact/",
  "/contacts/",
  "/career/",
  "/careers/",
  "/job/",
  "/jobs/",
  "/blog/",
  "/blogs/",
  "/post/",
  "/posts/",
  "/expertise/",
  "/service/",
  "/services/",
  "/team/",
  "/client/",
  "/clients/",
  "/testimonial/",
  "/testimonials/",
  "/product/",
  "/products/",
];

function truncate(str, n = 300) {
  return str.length > n ? str.slice(0, n) + "…" : str;
}

for (const path of CANDIDATES) {
  const url = BASE + path;
  try {
    const res = await fetch(url, { method: "GET" });
    const contentType = res.headers.get("content-type") || "";
    let bodyPreview = "";
    if (contentType.includes("application/json")) {
      const json = await res.json();
      bodyPreview = truncate(JSON.stringify(json));
    } else {
      const text = await res.text();
      bodyPreview = truncate(text.replace(/\s+/g, " "));
    }
    console.log(`\n${res.status} ${path}\n  content-type: ${contentType}\n  body: ${bodyPreview}`);
  } catch (err) {
    console.log(`\nERR  ${path}\n  ${err.message}`);
  }
}
