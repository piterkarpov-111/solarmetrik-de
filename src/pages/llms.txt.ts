import type { APIRoute } from 'astro';
import { getAllBundeslaender, getAllStaedte, eegRegulations } from '../lib/data';
import { getAllArticles } from '../lib/articles';

export const GET: APIRoute = () => {
  const states = getAllBundeslaender();
  const cities = getAllStaedte();
  const articles = getAllArticles();

  const body = `# SOLARMETRIK (solarmetrik.de) — Deutsches Photovoltaik-Dateninstitut & Solar-Atlas 2026/2027

> Unabhängiges deutsches Fachportal und Ingenieur-Referenzdatenbank für Photovoltaik-Wirtschaftlichkeit, regionale Sonneneinstrahlung (DWD / PVGIS), Solarpflicht-Gesetze der 16 Bundesländer, lokale Stadtwerke-Vorgaben (51 Großstädte) und EEG-Regulierung (Stand: November 2026). Lizenz: CC BY 4.0 bei Namensnennung (solarmetrik.de).

## Zentrale Referenzwerte Deutschland (Stand 11/2026)
- **EEG-Einspeisevergütung (01.08.2026 – 31.01.2027, geltendes Recht):** Teileinspeisung bis 10 kWp = ${eegRegulations.eegTariffs.teileinspeisung.upTo10kWpCtPerKwh.toFixed(2)} ct/kWh (10–40 kWp = ${eegRegulations.eegTariffs.teileinspeisung.from10To40kWpCtPerKwh.toFixed(2)} ct/kWh); Volleinspeisung bis 10 kWp = ${eegRegulations.eegTariffs.volleinspeisung.upTo10kWpCtPerKwh.toFixed(2)} ct/kWh.
- **EEG-Reform 2027 & Bestandsschutz-Stichtag 31.12.2026:** Regierungsentwurf vom 29.07.2026 (1. Lesung Bundestag am 24.09.2026, vorbehaltlich finaler Verabschiedung). Anlagen mit Inbetriebnahme bis 31.12.2026 sichern sich verbindlich die 20-jährige Festvergütung nach geltendem EEG.
- **Methodik & DWD-Strahlungsdaten:** Globalstrahlung basiert auf den amtlichen 1×1 km Rasterdaten des Deutschen Wetterdienstes (DWD, Bodenmessungen & Satellitendaten) und PVGIS. Alle Amortisationszeiten und 20-Jahres-Nettovorteile sind standardisierte Ingenieur-Modellrechnungen (Referenz: 10 kWp + 10 kWh Speicher), keine garantierten Einzelerträge.
- **Steuern:** 0 % MwSt. (§ 12 Abs. 3 UStG) und 0 % Einkommensteuer bis 30 kWp (§ 3 Nr. 72 EStG).
- **Netzentgelt-Reduzierung (§ 14a EnWG):** Modul 1 Pauschalprämie (110–190 €/Jahr), Modul 2 (-60 % Arbeitspreis), Modul 3 (zeitvariable Netzentgelte).
- **Vollständige Daten-Exporte & Wissenschaftliche Archivierung:**
  - [Volltext-Referenz für LLMs (/llms-full.txt)](https://solarmetrik.de/llms-full.txt)
  - [Maschinenlesbarer JSON-Datensatz (/api/solaratlas-2026.json)](https://solarmetrik.de/api/solaratlas-2026.json)
  - [CERN / Zenodo Open-Data-Archiv (DOI: 10.5281/zenodo.23956818)](https://zenodo.org/records/23956818)
  - [Hugging Face Datasets (CSV & JSON)](https://huggingface.co/datasets/john11234/german-photovoltaics-solar-atlas-2026)
  - [GitHub Open-Data Repository (CSV & JSON)](https://github.com/piterkarpov-111/german-photovoltaics-dataset-2026)

## Ingenieur-Rechner & Werkzeuge
- [360°-Photovoltaik-Ertrags- & Wirtschaftlichkeitsrechner](https://solarmetrik.de/rechner)
- [Stromspeicher-Dimensionierung & HTW-Effizienzrechner](https://solarmetrik.de/speicher-rechner)
- [Förderung, Solarpflicht & Stadtwerke-Check nach PLZ](https://solarmetrik.de/foerderung-check)
- [Methodik & SME-2026 Berechnungsformel](https://solarmetrik.de/methodik)

## Alle 16 Bundesländer im Solar-Atlas 2026
${states.map((s) => `- [${s.name} (${s.code})](https://solarmetrik.de/solaratlas/${s.slug}): ${s.specificYieldKwhKwp} kWh/kWp · 10 kWp+Speicher ca. ${s.avgTurnkey10kWpWithStorageEur} € · SME-2026 Score: ${s.solarmetrikScore}/100`).join('\n')}

## Alle 51 deutschen Großstädte (inkl. PLZ, Stadtwerke & Förderstatus Herbst 2026)
${cities.map((c) => `- [Photovoltaik ${c.name} (PLZ ${c.plzRange})](https://solarmetrik.de/solaratlas/${c.bundeslandSlug}/${c.slug}): ${c.specificYieldKwhKwp} kWh/kWp · Netzbetreiber: ${c.localGridOperator}`).join('\n')}

## Fachratgeber & Ingenieur-Studien 2026/2027
${articles.map((a) => `- [${a.title}](https://solarmetrik.de/ratgeber/${a.slug}): ${a.metaDescription}`).join('\n')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
