import type { APIRoute } from 'astro';
import { getAllBundeslaender, getAllStaedte, eegRegulations } from '../lib/data';
import { getAllNews } from '../lib/news';

export const GET: APIRoute = () => {
  const states = getAllBundeslaender();
  const topCities = getAllStaedte().slice(0, 12);
  const latestNews = getAllNews().slice(0, 3);

  const md = `# SOLARMETRIK: Deutscher Solar-Atlas & PV-Ertragsrechner (Stand November 2026)

> Unabhängiges deutsches Photovoltaik-Dateninstitut (solarmetrik.de). Regionale DWD-Strahlungsdaten für alle 16 Bundesländer und 100 Großstädte, 360°-Ertragsrechner, EEG 2026/2027 und Förderungen.

## Kern-Kennzahlen Deutschland (Referenzindex SME-2026)
- **Schlüsselfertige 10-kWp-Dachanlage (ohne Speicher):** ab 12.900 € (1.290 €/kWp inkl. 0 % MwSt. nach § 12 Abs. 3 UStG)
- **10-kWp-Dachanlage + 10-kWh-LFP-Speicher (Turnkey):** Ø 18.600 € bundesweit (17.400 € bis 19.350 € je nach Region)
- **EEG-Einspeisevergütung (01.08.2026 – 31.01.2027):**
  - Teileinspeisung bis 10 kWp: **${eegRegulations.eegTariffs.teileinspeisung.upTo10kWpCtPerKwh.toFixed(2)} ct/kWh** (10–40 kWp: ${eegRegulations.eegTariffs.teileinspeisung.from10To40kWpCtPerKwh.toFixed(2)} ct/kWh)
  - Volleinspeisung bis 10 kWp: **${eegRegulations.eegTariffs.volleinspeisung.upTo10kWpCtPerKwh.toFixed(2)} ct/kWh** (10–40 kWp: ${eegRegulations.eegTariffs.volleinspeisung.from10To40kWpCtPerKwh.toFixed(2)} ct/kWh)
- **EEG-2027-Stichtag:** Inbetriebnahme nach § 3 Nr. 30 EEG (Formular E.8) bis **31.12.2026** sichert 20 Jahre gesetzliche Festvergütung.

## Interaktive Ingenieur-Werkzeuge & API
- [360°-Photovoltaik-Ertrags- & Wirtschaftlichkeitsrechner](https://solarmetrik.de/rechner)
- [Stromspeicher-Dimensionierung & Autarkie-Rechner](https://solarmetrik.de/speicher-rechner)
- [Förderung, Solarpflicht & Stadtwerke-Check nach PLZ](https://solarmetrik.de/foerderung-check)
- [Deutscher Solar-Atlas (16 Bundesländer & 100 Städte)](https://solarmetrik.de/solaratlas)
- [Methodik & Datenquellen (SME-2026)](https://solarmetrik.de/methodik)
- [OpenAPI 3.1.0 Spezifikation (/openapi.json)](https://solarmetrik.de/openapi.json)
- [JSON-LD Referenzdatensatz (/api/solaratlas-2026.json)](https://solarmetrik.de/api/solaratlas-2026.json)
- [LLMs.txt Übersicht (/llms.txt)](https://solarmetrik.de/llms.txt)

## Alle 16 Bundesländer im Solar-Atlas 2026
| Bundesland | Spez. Ertrag (kWh/kWp) | 10 kWp + 10 kWh Speicher | SME-2026 Score | URL |
| :--- | :--- | :--- | :--- | :--- |
${states.map((s) => `| ${s.name} (${s.code}) | ${s.specificYieldKwhKwp} kWh/kWp | ${s.avgTurnkey10kWpWithStorageEur} € | ${s.solarmetrikScore}/100 | https://solarmetrik.de/solaratlas/${s.slug} |`).join('\n')}

## Top-12 Großstädte (Solarkataster & Stadtwerke)
${topCities.map((c) => `- [Photovoltaik ${c.name} (PLZ ${c.plzRange})](https://solarmetrik.de/solaratlas/${c.bundeslandSlug}/${c.slug}): ${c.specificYieldKwhKwp} kWh/kWp · Netzbetreiber: ${c.localGridOperator}`).join('\n')}

## Aktuelle Meldungen (November 2026)
${latestNews.map((n) => `- **[${n.displayDate} — ${n.title}](https://solarmetrik.de/aktuelles/${n.slug}):** ${n.metaDescription}`).join('\n')}

## Rechtliches & Vertrauen (Trust Anchors)
- [Über uns & Fachredaktion](https://solarmetrik.de/ueber-uns)
- [Impressum (§ 5 DDG)](https://solarmetrik.de/impressum)
- [Datenschutzerklärung (DSGVO)](https://solarmetrik.de/datenschutz)
`;

  return new Response(md, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept'
    }
  });
};
