import type { APIRoute } from 'astro';
import { getAllBundeslaender } from '../lib/data';

export const GET: APIRoute = () => {
  const states = getAllBundeslaender();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${states
  .map(
    (s) => `  <url>
    <loc>https://solarmetrik.de/solaratlas/${s.slug}</loc>
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
