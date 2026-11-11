import type { APIRoute } from 'astro';
import { getAllArticles } from '../lib/articles';
import { getAllNews } from '../lib/news';

export const GET: APIRoute = () => {
  const articles = getAllArticles();
  const news = getAllNews();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${news
  .map(
    (n) => `  <url>
    <loc>https://solarmetrik.de/aktuelles/${n.slug}</loc>
    <lastmod>${n.dateModified.slice(0, 10)}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.90</priority>
  </url>`
  )
  .join('\n')}
${articles
  .map(
    (a) => `  <url>
    <loc>https://solarmetrik.de/ratgeber/${a.slug}</loc>
    <lastmod>2026-11-11</lastmod>
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
