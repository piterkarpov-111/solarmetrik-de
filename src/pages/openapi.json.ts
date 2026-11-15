import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const spec = {
    openapi: '3.1.0',
    info: {
      title: 'SOLARMETRIK Deutscher Solar-Atlas & Photovoltaik-Referenz-API (SME-2026)',
      summary:
        'Offene Ingenieur- und Referenzdaten-API für Photovoltaik-Ertrag (DWD/PVGIS), Stromspeicher-Preise, Solarpflicht und EEG-Regulierung 2026/2027 in Deutschland.',
      description:
        'Maschinenlesbare Schnittstelle des unabhängigen deutschen Photovoltaik-Dateninstituts SOLARMETRIK (solarmetrik.de). Liefert verifizierte Solarertragsdaten (kWh/kWp), regionale Montagekosten (0 % MwSt. nach § 12 Abs. 3 UStG), EEG-Einspeisevergütungssätze, § 14a EnWG Netzentgelt-Parameter sowie kommunale Förderprogramme für alle 16 Bundesländer und 100 Großstädte.',
      version: '2026.11.0',
      termsOfService: 'https://solarmetrik.de/methodik',
      contact: {
        name: 'SOLARMETRIK Fachredaktion & Dateninstitut',
        url: 'https://solarmetrik.de/impressum',
        email: 'redaktion@solarmetrik.de'
      },
      license: {
        name: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
        url: 'https://creativecommons.org/licenses/by/4.0/'
      }
    },
    servers: [
      {
        url: 'https://solarmetrik.de',
        description: 'Production API & Open-Data Server (SOLARMETRIK Deutschland)'
      }
    ],
    paths: {
      '/api/solaratlas-2026.json': {
        get: {
          operationId: 'getSolarAtlasDataset2026',
          summary:
            'Vollständigen Deutschen Solar-Atlas 2026/2027 (16 Bundesländer, 100 Städte & EEG-Referenzwerte) abrufen',
          description:
            'Gibt den kompletten JSON-LD / Schema.org Dataset-Export (SME-2026) zurück: EEG-Vergütungssätze 2026/2027, 360°-Dachneigungs-Ertragsmatrix, alle 16 Bundesländer (inkl. Solarpflicht & Landesförderung) sowie alle 100 deutschen Großstädte (inkl. PLZ-Bereichen, Stadtwerken, kWh/kWp und kommunalen Zuschüssen).',
          tags: ['Solar-Atlas & Marktdaten'],
          parameters: [
            {
              name: 'bundesland',
              in: 'query',
              required: false,
              description:
                'Optionaler Filter-Slug des Bundeslandes für Client-seitige Auswertung (z. B. bayern, nordrhein-westfalen, baden-wuerttemberg).',
              schema: {
                type: 'string',
                example: 'bayern'
              }
            },
            {
              name: 'stadt',
              in: 'query',
              required: false,
              description:
                'Optionaler Filter-Slug einer deutschen Großstadt für Client-seitige Auswertung (z. B. muenchen, berlin-stadt, hamburg-stadt, koeln).',
              schema: {
                type: 'string',
                example: 'muenchen'
              }
            }
          ],
          responses: {
            '200': {
              description:
                'Erfolgreiche Rückgabe des vollständigen SOLARMETRIK SME-2026 Referenzdatensatzes.',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/SolarAtlasDataset'
                  }
                }
              }
            },
            '404': {
              description: 'Angeforderter Endpunkt oder Datensatz nicht gefunden.',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ApiError'
                  }
                }
              }
            }
          }
        }
      },
      '/llms.txt': {
        get: {
          operationId: 'getLlmsMarkdownIndex',
          summary: 'Strukturierten Markdown-Index (/llms.txt) für KI-Agenten und Sprachmodelle abrufen',
          description:
            'Liefert eine kompakte Markdown-Übersicht aller 16 Bundesländer, 100 Städte, aktuellen EEG-Regularien (Stand 11/2026), Ingenieur-Rechner und Fachstudien.',
          tags: ['AI & Agent Discovery'],
          responses: {
            '200': {
              description: 'Markdown-Übersicht erfolgreich geladen.',
              content: {
                'text/plain': {
                  schema: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      schemas: {
        SolarAtlasDataset: {
          type: 'object',
          required: [
            '@context',
            '@type',
            'name',
            'url',
            'license',
            'dateModified',
            'bundeslaender',
            'staedte'
          ],
          properties: {
            '@context': {
              type: 'string',
              example: 'https://schema.org'
            },
            '@type': {
              type: 'string',
              example: 'Dataset'
            },
            name: {
              type: 'string',
              description: 'Offizieller Titel des SOLARMETRIK Referenzdatensatzes.'
            },
            url: {
              type: 'string',
              format: 'uri',
              example: 'https://solarmetrik.de/api/solaratlas-2026.json'
            },
            license: {
              type: 'string',
              format: 'uri',
              example: 'https://creativecommons.org/licenses/by/4.0/'
            },
            dateModified: {
              type: 'string',
              format: 'date',
              example: '2026-11-12'
            },
            regulatoryAndMarketReference2026: {
              type: 'object',
              description:
                'Bundesweite EEG-Vergütungssätze 2026/2027, 0 % MwSt. (§ 12 Abs. 3 UStG), § 14a EnWG Parameter und 360°-Azimut-/Neigungsmatrix.'
            },
            bundeslaender: {
              type: 'array',
              description: 'Liste aller 16 deutschen Bundesländer mit PV-Kennzahlen.',
              items: {
                $ref: '#/components/schemas/BundeslandEntry'
              }
            },
            staedte: {
              type: 'array',
              description: 'Liste der 100 größten deutschen Städte mit PLZ, Ertrag und Stadtwerke-Daten.',
              items: {
                $ref: '#/components/schemas/StadtEntry'
              }
            }
          }
        },
        BundeslandEntry: {
          type: 'object',
          required: [
            'slug',
            'name',
            'code',
            'specificYieldKwhKwp',
            'avgCostPerKwpEur',
            'avgTurnkey10kWpWithStorageEur',
            'solarmetrikScore'
          ],
          properties: {
            slug: { type: 'string', example: 'bayern' },
            name: { type: 'string', example: 'Bayern' },
            code: { type: 'string', example: 'BY' },
            specificYieldKwhKwp: {
              type: 'number',
              description: 'Spezifischer Jahresertrag in kWh pro installiertem kWp (DWD/PVGIS).'
            },
            globalIrradiationKwhM2: {
              type: 'number',
              description: 'Globalstrahlung in kWh/m² pro Jahr.'
            },
            avgCostPerKwpEur: {
              type: 'number',
              description: 'Durchschnittlicher schlüsselfertiger Preis pro kWp ohne Speicher in Euro (0 % MwSt.).'
            },
            avgTurnkey10kWpWithStorageEur: {
              type: 'number',
              description: 'Komplettpreis für 10 kWp PV + 10 kWh LFP-Speicher in Euro (0 % MwSt.).'
            },
            solarmetrikScore: {
              type: 'number',
              description: 'SOLARMETRIK-Effizienzscore SME-2026 (0 bis 100 Punkte).'
            }
          }
        },
        StadtEntry: {
          type: 'object',
          required: [
            'slug',
            'name',
            'bundeslandSlug',
            'plzRange',
            'specificYieldKwhKwp',
            'avgCostPerKwpEur',
            'localGridOperator'
          ],
          properties: {
            slug: { type: 'string', example: 'muenchen' },
            name: { type: 'string', example: 'München' },
            bundeslandSlug: { type: 'string', example: 'bayern' },
            plzRange: { type: 'string', example: '80331–81929' },
            specificYieldKwhKwp: {
              type: 'number',
              description: 'Spezifischer Solarertrag der Stadt in kWh/kWp pro Jahr.'
            },
            avgCostPerKwpEur: {
              type: 'number',
              description: 'Lokales Handwerker-Preisniveau in Euro pro kWp (0 % MwSt.).'
            },
            localGridOperator: {
              type: 'string',
              description: 'Zuständiger Verteilnetzbetreiber / lokale Stadtwerke.'
            }
          }
        },
        ApiError: {
          type: 'object',
          required: ['code', 'message', 'resolution'],
          properties: {
            code: {
              type: 'string',
              example: 'ENDPOINT_NOT_FOUND'
            },
            message: {
              type: 'string',
              example: 'Der angeforderte API-Endpunkt existiert nicht.'
            },
            resolution: {
              type: 'string',
              example:
                'Nutzen Sie https://solarmetrik.de/api/solaratlas-2026.json oder prüfen Sie die OpenAPI-Spezifikation unter https://solarmetrik.de/openapi.json.'
            }
          }
        }
      }
    }
  };

  return new Response(JSON.stringify(spec, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
};
