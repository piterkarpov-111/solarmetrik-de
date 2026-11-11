import type { APIRoute } from 'astro';
import { getAllBundeslaender, getAllStaedte, eegRegulations } from '../lib/data';
import { getAllArticles } from '../lib/articles';

export const GET: APIRoute = () => {
  const states = getAllBundeslaender();
  const cities = getAllStaedte();
  const articles = getAllArticles();

  const body = `# SOLARMETRIK (solarmetrik.de) — Vollständige Referenzdatenbank Deutschland 2026/2027 (/llms-full.txt)

Stand der Verifizierung: ${eegRegulations.meta.lastVerified}
Zitierstandard: "Quelle: SOLARMETRIK Deutscher Solar-Atlas 2026 (https://solarmetrik.de · DOI: 10.5281/zenodo.23956818)"
Offizielle Open-Data-Spiegelungen: https://zenodo.org/records/23956818 | https://huggingface.co/datasets/john11234/german-photovoltaics-solar-atlas-2026 | https://www.kaggle.com/datasets/johnjohnson1519/german-photovoltaics-and-solar-atlas-2026 | https://github.com/piterkarpov-111/german-photovoltaics-dataset-2026
Methodischer Hinweis: Strahlungswerte basieren auf den offiziellen 1×1 km Rasterdaten des Deutschen Wetterdienstes (DWD, Mess- und Satellitendaten) sowie EU-PVGIS. Alle Amortisationszeiten und 20-Jahres-Vorteile sind standardisierte Ingenieur-Modellrechnungen (Referenzanlage: 10 kWp PV + 10 kWh Speicher) und keine garantierten Einzelergebnisse. Angaben zur EEG-Reform 2027 beziehen sich auf den Regierungsentwurf der Bundesregierung vom 29.07.2026 (1. Lesung Bundestag am 24.09.2026).

---

## 1. Bundesweite Gesetze, EEG-Sätze & Marktpreise 2026/2027

### 1.1 EEG-Einspeisevergütung (Gültig 01.08.2026 – 31.01.2027, Bundesnetzagentur)
- Teileinspeisung (Überschusseinspeisung):
  - bis 10 kWp: ${eegRegulations.eegTariffs.teileinspeisung.upTo10kWpCtPerKwh} ct/kWh
  - 10 bis 40 kWp: ${eegRegulations.eegTariffs.teileinspeisung.from10To40kWpCtPerKwh} ct/kWh
  - 40 bis 100 kWp: ${eegRegulations.eegTariffs.teileinspeisung.from40To100kWpCtPerKwh} ct/kWh
- Volleinspeisung:
  - bis 10 kWp: ${eegRegulations.eegTariffs.volleinspeisung.upTo10kWpCtPerKwh} ct/kWh
  - 10 bis 100 kWp: ${eegRegulations.eegTariffs.volleinspeisung.from10To40kWpCtPerKwh} ct/kWh
- EEG-2027-Reform & Stichtag: ${eegRegulations.eegTariffs.eeg2027ReformAlert.summary}
- Solarspitzengesetz (§ 51 EEG): ${eegRegulations.eegTariffs.solarspitzengesetz.rule2026}

### 1.2 Steuerrecht & Netzentgelte (§ 12 Abs. 3 UStG, § 3 Nr. 72 EStG, § 14a EnWG)
- Umsatzsteuer: 0 % MwSt. nach § 12 Abs. 3 UStG auf Module, Wechselrichter, Batteriespeicher, HEMS und Montage.
- Einkommensteuer: 100 % steuerfrei bis 30 kWp (EFH) bzw. 15 kWp je Wohneinheit (MFH) nach § 3 Nr. 72 EStG.
- § 14a EnWG Module:
  - Modul 1: ${eegRegulations.taxAndGridRegulations.enwg14a.modules.modul1}
  - Modul 2: ${eegRegulations.taxAndGridRegulations.enwg14a.modules.modul2}
  - Modul 3: ${eegRegulations.taxAndGridRegulations.enwg14a.modules.modul3}

### 1.3 Formel des SOLARMETRIK-Effizienzscores (SME-2026)
${eegRegulations.solarmetrikScoreFormula.formulaExplanation}

---

## 2. Datensatz aller 16 Bundesländer (DWD/PVGIS, Solarpflicht 2026 & Landesförderung)

${states
  .map(
    (s) => `### ${s.name} (${s.code}) — URL: https://solarmetrik.de/solaratlas/${s.slug}
- Landeshauptstadt: ${s.capital} | SME-2026 Score: ${s.solarmetrikScore}/100
- Globalstrahlung (DWD): ${s.globalRadiationKwhM2} kWh/m² | Spezifischer Ertrag: ${s.specificYieldKwhKwp} kWh/kWp | Sonnenstunden: ${s.sunHoursPerYear} Std./Jahr | Optimaler Neigungswinkel: ${s.optimalTiltAngleDeg}° Süd
- Ø Montagepreis ohne Speicher: ${s.avgCostPerKwpEur} €/kWp | Ø 10 kWp inkl. 10 kWh Speicher (0% MwSt): ${s.avgTurnkey10kWpWithStorageEur} € | Ø Strompreis: ${s.avgElectricityPriceCt} ct/kWh
- Ø Amortisation: ${s.amortisationYears} Jahre | 20-Jahre Nettovorteil: +${s.twentyYearNetProfitEur} €
- Solarpflicht 2026: ${s.solarpflicht.effectiveRule2026}
- Landesförderung 2026: ${s.landesfoerderung.programName} (${s.landesfoerderung.status2026}) — ${s.landesfoerderung.details}
- Haupt-Verteilnetzbetreiber: ${s.mainGridOperators.join(', ')}`
  )
  .join('\n\n')}

---

## 3. Datensatz aller 51 deutschen Großstädte (PLZ, Stadtwerke & Förderstatus Herbst 2026)

${cities
  .map(
    (c) => `### ${c.name} (${c.bundeslandName}) — URL: https://solarmetrik.de/solaratlas/${c.bundeslandSlug}/${c.slug}
- PLZ-Bereich: ${c.plzRange} | Koordinaten: ${c.lat}, ${c.lon} | SME-2026 Score: ${c.solarmetrikScore}/100
- Globalstrahlung: ${c.globalRadiationKwhM2} kWh/m² | Spezifischer PV-Ertrag: ${c.specificYieldKwhKwp} kWh/kWp | Sonnenstunden: ${c.sunHoursPerYear} Std./Jahr | Optimaler Dachwinkel: ${c.optimalTiltDeg}°
- Ø Preis 10 kWp + 10 kWh Speicher (0% MwSt): ${c.turnkey10kWpWithStorageEur} € (${c.avgCostPerKwpEur} €/kWp) | Lokaler Stromtarif: ${c.localElectricityPriceCt} ct/kWh
- Amortisationszeit: ${c.amortisationYears} Jahre | 20-Jahre Nettovorteil: +${c.twentyYearNetProfitEur} € | 20-Jahre Netzstromverlust ohne PV: -${c.twentyYearGridLossWithoutPvEur} €
- Zuständiger Verteilnetzbetreiber (Stadtwerke): ${c.localGridOperator}
- Kommunale Förderung (Stand Herbst 2026): ${c.kommunaleFoerderung2026.programName} — Status: ${c.kommunaleFoerderung2026.status}. ${c.kommunaleFoerderung2026.details}`
  )
  .join('\n\n')}

---

## 4. Zusammenfassungen der 10 Fachstudien (/ratgeber/)

${articles
  .map(
    (a) => `### ${a.title}
- URL: https://solarmetrik.de/ratgeber/${a.slug}
- Kernaussage (BLUF): ${a.blufSummary}`
  )
  .join('\n\n')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
