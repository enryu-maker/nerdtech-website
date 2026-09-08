import { mkdir, writeFile } from "node:fs/promises";

const BASE = "https://nerdtech.pythonanywhere.com";
const OUT_DIR = "./probe-output";

async function probe(method, path, filename) {
  const url = BASE + path;
  try {
    const res = await fetch(url, { method });
    const contentType = res.headers.get("content-type") || "";
    let body;
    if (contentType.includes("application/json")) {
      body = await res.json();
    } else {
      body = await res.text();
    }
    const record = { method, path, status: res.status, contentType, body };
    await writeFile(
      `${OUT_DIR}/${filename}.json`,
      JSON.stringify(record, null, 2),
      "utf-8"
    );
    console.log(`OK   ${method} ${path} -> ${res.status}  (saved ${filename}.json)`);
  } catch (err) {
    console.log(`ERR  ${method} ${path}  ${err.message}`);
  }
}

const TARGETS = [
  ["GET", "/career/jobs/", "career-jobs-get"],
  ["OPTIONS", "/career/jobs/", "career-jobs-options"],
  ["GET", "/career/jobs/1/", "career-jobs-detail-1"],
  ["OPTIONS", "/career/applications/", "career-applications-options"],
  ["GET", "/blog/blogposts/", "blog-blogposts-get"],
  ["OPTIONS", "/blog/blogposts/", "blog-blogposts-options"],
  ["GET", "/blog/blogposts/1/", "blog-blogposts-detail-1"],
  ["GET", "/team/", "team-get"],
  ["OPTIONS", "/team/", "team-options"],
  ["GET", "/client/view/", "client-view-get"],
  ["GET", "/product/view/", "product-view-get"],
  ["GET", "/expertise/", "expertise-get"],
  ["OPTIONS", "/expertise/", "expertise-options"],
];

await mkdir(OUT_DIR, { recursive: true });
for (const [method, path, filename] of TARGETS) {
  await probe(method, path, filename);
}
console.log(`\nDone. Zip the "${OUT_DIR}" folder and share it back.`);
