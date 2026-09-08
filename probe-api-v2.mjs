
const BASE = "https://nerdtech.pythonanywhere.com";

function truncate(str, n = 800) {
  return str.length > n ? str.slice(0, n) + "…" : str;
}

async function probe(method, path) {
  const url = BASE + path;
  try {
    const res = await fetch(url, { method });
    const contentType = res.headers.get("content-type") || "";
    let bodyPreview = "";
    if (contentType.includes("application/json")) {
      const json = await res.json();
      bodyPreview = truncate(JSON.stringify(json, null, 2));
    } else {
      const text = await res.text();
      bodyPreview = truncate(text.replace(/\s+/g, " "));
    }
    console.log(`\n${method} ${res.status} ${path}\n  content-type: ${contentType}\n  body: ${bodyPreview}`);
  } catch (err) {
    console.log(`\n${method} ERR  ${path}\n  ${err.message}`);
  }
}

const GET_TARGETS = [
  // nested list/detail endpoints found by the first probe
  "/career/jobs/",
  "/career/applications/",
  "/blog/blogposts/",
  "/client/view/",
  "/product/view/",
  // detail route guess for projects
  "/projects/1/",
  "/team/",
  "/expertise/",
];

const OPTIONS_TARGETS = [
  "/career/applications/",
  "/client/view/",
  "/product/view/",
  "/projects/",
];

const CONTACT_GUESSES = [
  "/contact-us/",
  "/enquiry/",
  "/enquiries/",
  "/lead/",
  "/leads/",
  "/newsletter/",
  "/subscribe/",
];

for (const path of GET_TARGETS) await probe("GET", path);
for (const path of CONTACT_GUESSES) await probe("GET", path);
for (const path of OPTIONS_TARGETS) await probe("OPTIONS", path);
