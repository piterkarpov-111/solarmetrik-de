import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://solarmetrik.de/sitemap-core.xml</loc>
    <lastmod>2026-11-04</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://solarmetrik.de/sitemap-bundeslaender.xml</loc>
    <lastmod>2026-11-04</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://solarmetrik.de/sitemap-staedte.xml</loc>
    <lastmod>2026-11-04</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://solarmetrik.de/sitemap-ratgeber.xml</loc>
    <lastmod>2026-11-04</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
