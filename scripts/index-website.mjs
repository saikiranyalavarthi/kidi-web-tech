import { XMLParser } from "fast-xml-parser";
import * as cheerio from "cheerio";
import fs from "node:fs/promises";
import path from "node:path";

const SITE_URL = (
  process.env.WEBSITE_URL || "https://www.kidiwebtech.com"
).replace(/\/$/, "");

const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const MAX_PAGES = 500;

const parser = new XMLParser();

function toArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "KidiWebTechSiteIndexer/1.0" },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${url}`);
  }

  return response.text();
}

async function discoverUrls(sitemapUrl, visited = new Set()) {
  if (visited.has(sitemapUrl)) return [];
  visited.add(sitemapUrl);

  const xml = await fetchText(sitemapUrl);
  const parsed = parser.parse(xml);

  if (parsed.sitemapindex) {
    const sitemaps = toArray(parsed.sitemapindex.sitemap);

    const nestedResults = await Promise.all(
      sitemaps.map(async (item) => {
        try {
          return await discoverUrls(item.loc, visited);
        } catch (error) {
          console.error("Sitemap error:", item.loc, error.message);
          return [];
        }
      }),
    );

    return nestedResults.flat();
  }

  return toArray(parsed.urlset?.url)
    .map((item) => item.loc)
    .filter(Boolean);
}

async function readPage(url) {
  try {
    const html = await fetchText(url);
    const $ = cheerio.load(html);

    const title = $("title").first().text().trim();
    const description = $('meta[name="description"]').attr("content") || "";

    $("script, style, noscript, svg, iframe").remove();

    const mainText = $("main").text().trim();
    const bodyText = $("body").text().trim();

    const content = (mainText || bodyText)
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 12000);

    if (!content) {
      console.warn("No readable content:", url);
      return null;
    }

    return {
      url,
      title,
      description,
      content,
    };
  } catch (error) {
    console.error("Page error:", url, error.message);
    return null;
  }
}

async function main() {
  console.log("Reading sitemap:", SITEMAP_URL);

  const urls = await discoverUrls(SITEMAP_URL);
  const uniqueUrls = [
    ...new Set(
      urls.filter((url) => {
        try {
          return new URL(url).origin === new URL(SITE_URL).origin;
        } catch {
          return false;
        }
      }),
    ),
  ].slice(0, MAX_PAGES);

  console.log(`Found ${uniqueUrls.length} website pages.`);

  const pages = [];

  // Process pages in small batches to avoid overloading the website.
  for (let i = 0; i < uniqueUrls.length; i += 5) {
    const batch = uniqueUrls.slice(i, i + 5);
    const results = await Promise.all(batch.map(readPage));

    pages.push(...results.filter(Boolean));

    console.log(
      `Indexed ${Math.min(i + 5, uniqueUrls.length)} / ${uniqueUrls.length}`,
    );
  }

  const outputPath = path.join(process.cwd(), "data", "website-content.json");

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(pages, null, 2));

  console.log(`Successfully indexed ${pages.length} pages.`);
  console.log("Saved to:", outputPath);
}

main().catch((error) => {
  console.error("Indexing failed:", error);
  process.exitCode = 1;
});
