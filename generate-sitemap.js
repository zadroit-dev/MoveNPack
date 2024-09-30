import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: "https://movenpack.ch" });

  const writeStream = createWriteStream(
    resolve("public", "sitemap.xml") // Adjusted path.resolve for ES modules
  );

  // Define your site's pages (add all relevant routes here)
  const pages = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.7 },
    // Add more pages as needed
  ];

  pages.forEach((page) => smStream.write(page));

  smStream.end();

  try {
    await streamToPromise(smStream);
    console.log("Sitemap generated successfully!");
  } catch (err) {
    console.error("Error generating sitemap:", err);
  }
}

// Run the script
generateSitemap();
