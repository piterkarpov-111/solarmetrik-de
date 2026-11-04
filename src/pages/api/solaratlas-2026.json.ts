import type { APIRoute } from 'astro';
import { eegRegulations, getAllBundeslaender, getAllStaedte } from '../../lib/data';

export const GET: APIRoute = () => {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'SOLARMETRIK Deutscher Solar-Atlas & Photovoltaik-Referenzdatensatz 2026/2027 (SME-2026)',
    url: 'https://solarmetrik.de/api/solaratlas-2026.json',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    dateModified: '2026-11-04',
    creator: {
      '@type': 'Organization',
      name: 'SOLARMETRIK Deutschland',
      url: 'https://solarmetrik.de'
    },
    regulatoryAndMarketReference2026: eegRegulations,
    bundeslaender: getAllBundeslaender(),
    staedte: getAllStaedte()
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
};
