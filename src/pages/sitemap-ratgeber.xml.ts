import type { APIRoute } from 'astro';
import { getAllArticles } from '../lib/articles';

export const GET: APIRoute = () => {
  const articles = getAllArticles();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${articles
  .map(
    (a) => `  <url>
    <loc>https://solarmetrik.de/ratgeber/${a.slug}</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
