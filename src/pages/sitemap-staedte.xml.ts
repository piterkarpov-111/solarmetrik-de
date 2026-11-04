import type { APIRoute } from 'astro';
import { getAllStaedte } from '../lib/data';

export const GET: APIRoute = () => {
  const cities = getAllStaedte();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cities
  .map(
    (c) => `  <url>
    <loc>https://solarmetrik.de/solaratlas/${c.bundeslandSlug}/${c.slug}</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
