import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");

function fail(message) {
  throw new Error(message);
}

function read(relativePath) {
  const fullPath = path.join(publicDir, relativePath);
  if (!fs.existsSync(fullPath)) fail(`Missing generated file: ${relativePath}`);
  return fs.readFileSync(fullPath, "utf8");
}

function structuredData(html, relativePath) {
  const match = html.match(/<script type=(?:"application\/ld\+json"|application\/ld\+json)>([\s\S]*?)<\/script>/);
  if (!match) fail(`Missing JSON-LD: ${relativePath}`);
  try {
    return JSON.parse(match[1]);
  } catch (error) {
    fail(`Invalid JSON-LD in ${relativePath}: ${error.message}`);
  }
}

function generatedHtmlFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...generatedHtmlFiles(fullPath));
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(fullPath);
  }
  return files;
}

const robots = read("robots.txt");
for (const agent of [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
]) {
  if (!robots.includes(`User-agent: ${agent}`)) fail(`robots.txt does not name ${agent}`);
}
if (!robots.includes("Sitemap: https://qbfang.ai/sitemap.xml")) {
  fail("robots.txt does not declare the canonical sitemap");
}

const aboutPath = "about/index.html";
const about = read(aboutPath);
const aboutData = structuredData(about, aboutPath);
if (aboutData["@type"] !== "ProfilePage") fail("About page is not a ProfilePage");
if (aboutData.mainEntity?.["@type"] !== "Person") fail("About page has no Person entity");
if (aboutData.mainEntity?.name !== "方奇兵") fail("Person entity has the wrong name");

const topicPath = "ai-agent/index.html";
const topic = read(topicPath);
const topicData = structuredData(topic, topicPath);
if (topicData["@type"] !== "CollectionPage") fail("AI Agent hub is not a CollectionPage");

const writingDir = path.join(publicDir, "writing");
const articlePaths = fs
  .readdirSync(writingDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => `writing/${entry.name}/index.html`)
  .sort();

if (articlePaths.length === 0) fail("No generated articles found");

for (const articlePath of articlePaths) {
  const html = read(articlePath);
  const data = structuredData(html, articlePath);
  if (data["@type"] !== "BlogPosting") fail(`${articlePath} is not a BlogPosting`);
  if (!data.headline || !data.datePublished || !data.dateModified) {
    fail(`${articlePath} is missing headline or dates`);
  }
  if (data.author?.name !== "方奇兵" || data.author?.url !== "https://qbfang.ai/about/") {
    fail(`${articlePath} has an incomplete author entity`);
  }
  if (!/rel=(?:"author"|author) href=(?:"\/about\/"|\/about\/)/.test(html)) {
    fail(`${articlePath} has no visible author link`);
  }
}

const sitemap = read("sitemap.xml");
if (!sitemap.includes("https://qbfang.ai/ai-agent/")) {
  fail("Sitemap does not include the AI Agent hub");
}

const htmlFiles = generatedHtmlFiles(publicDir);
for (const fullPath of htmlFiles) {
  const html = fs.readFileSync(fullPath, "utf8");
  for (const match of html.matchAll(/href=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/g)) {
    const href = match[1] || match[2] || match[3];
    if (!href.startsWith("/") || href.startsWith("//")) continue;

    let pathname;
    try {
      pathname = decodeURIComponent(href.split(/[?#]/)[0]);
    } catch {
      fail(`${path.relative(publicDir, fullPath)} has an invalid internal URL: ${href}`);
    }
    if (!pathname) continue;

    const target = pathname.endsWith("/")
      ? path.join(publicDir, pathname, "index.html")
      : path.join(publicDir, pathname);
    if (!fs.existsSync(target)) {
      fail(`${path.relative(publicDir, fullPath)} has a broken internal link: ${href}`);
    }
  }
}

console.log(
  `AI readiness validation passed for ${articlePaths.length} articles and ${htmlFiles.length} HTML files.`,
);
