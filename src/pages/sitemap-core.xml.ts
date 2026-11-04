import type { APIRoute } from 'astro';

const corePaths = [
  { path: '', priority: '1.0' },
  { path: '/rechner', priority: '0.95' },
  { path: '/speicher-rechner', priority: '0.9' },
  { path: '/foerderung-check', priority: '0.9' },
  { path: '/solaratlas', priority: '0.95' },
  { path: '/ratgeber', priority: '0.9' },
  { path: '/methodik', priority: '0.8' },
  { path: '/ueber-uns', priority: '0.7' },
  { path: '/impressum', priority: '0.4' },
  { path: '/datenschutz', priority: '0.4' },
  { path: '/llms.txt', priority: '0.8' },
  { path: '/llms-full.txt', priority: '0.8' },
  { path: '/api/solaratlas-2026.json', priority: '0.8' }
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${corePaths
  .map(
    (p) => `  <url>
    <loc>https://solarmetrik.de${p.path}</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
