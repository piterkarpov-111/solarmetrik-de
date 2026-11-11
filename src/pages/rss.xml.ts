import type { APIRoute } from 'astro';
import { getAllNews } from '../lib/news';
import { getAllArticles } from '../lib/articles';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const news = getAllNews();
  const articles = getAllArticles();

  const newsItemsXml = news
    .map((n) => {
      const pubDate = new Date(n.datePublished).toUTCString();
      const url = `https://solarmetrik.de/aktuelles/${n.slug}`;
      return `    <item>
      <title>${escapeXml(n.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(n.category)}</category>
      <description>${escapeXml(n.summary)}</description>
    </item>`;
    })
    .join('\n');

  const articleItemsXml = articles
    .map((a) => {
      const pubDate = new Date('2026-11-11T08:00:00+01:00').toUTCString();
      const url = `https://solarmetrik.de/ratgeber/${a.slug}`;
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(a.category)}</category>
      <description>${escapeXml(a.blufSummary)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SOLARMETRIK Deutschland — Photovoltaik Aktuelles, EEG-Ticker &amp; Ingenieur-Studien</title>
    <link>https://solarmetrik.de/aktuelles</link>
    <description>Unabhängiges deutsches Photovoltaik-Dateninstitut: Aktuelle Meldungen zu Bundesnetzagentur-Zubau, EEG 2027, Solarspitzengesetz, Modul- &amp; Speicherpreisen sowie DWD-Solar-Atlas für 100 Städte.</description>
    <language>de-DE</language>
    <lastBuildDate>${new Date('2026-11-11T10:00:00+01:00').toUTCString()}</lastBuildDate>
    <atom:link href="https://solarmetrik.de/rss.xml" rel="self" type="application/rss+xml" />
${newsItemsXml}
${articleItemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
};
