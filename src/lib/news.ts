export interface NewsSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface NewsItem {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string; // ISO 8601
  dateModified: string; // ISO 8601
  displayDate: string;
  readingTimeMin: number;
  heroImage: string;
  heroAlt: string;
  summary: string; // BLUF Lead for AI Agents & Google News
  keyTakeaways: { label: string; value: string; note: string }[];
  relatedToolHref: string;
  relatedToolLabel: string;
  sections: NewsSection[];
  sources: { name: string; reference: string }[];
}

export const newsItems: NewsItem[] = [
  {
    slug: 'bundesnetzagentur-photovoltaik-zubau-130-gw-november-2026',
    category: 'Marktdaten & Bundesnetzagentur',
    title:
      'Bundesnetzagentur-Bilanz November 2026: Deutschland überschreitet 130 GW Photovoltaik-Leistung — Speicherquote bei 79 %',
    metaTitle: 'PV-Zubau November 2026: 130 GW Marke & Speicher-Statistik',
    metaDescription:
      'Aktuelle Marktstammdatenregister-Auswertung (November 2026): Über 130 GW installierte PV-Leistung in Deutschland, 79 % Heimspeicher-Quote & Boom bei Steckersolargeräten.',
    datePublished: '2026-11-11T09:30:00+01:00',
    dateModified: '2026-11-11T09:30:00+01:00',
    displayDate: '11. November 2026',
    readingTimeMin: 5,
    heroImage: '/images/hero-solaranlage-deutschland-2026.webp',
    heroAlt: 'Bundesnetzagentur Photovoltaik Zubau Statistik November 2026 über 130 Gigawatt in Deutschland',
    summary:
      'Die kumulierte installierte Photovoltaik-Leistung im Marktstammdatenregister (MaStR) der Bundesnetzagentur hat im November 2026 die historische Schwelle von 130 Gigawatt (GW) überschritten. Während sich das Tempo bei reinen Aufdachanlagen ohne Speicher gegenüber dem Rekordjahr 2025 leicht normalisiert hat, verzeichnet das vierte Quartal 2026 zwei strukturelle Verschiebungen: Rund 79 % aller neu installierten Eigenheim-Dachanlagen (5 bis 20 kWp) werden sofort mit einem LFP-Heimspeicher kombiniert, und im Jahresendspurt vor dem 31.12.2026 zieht die Zahl der Inbetriebnahmen spürbar an.',
    keyTakeaways: [
      {
        label: 'Kumulierte PV-Leistung (MaStR)',
        value: '> 130,4 GWp',
        note: 'Über 4,7 Millionen registrierte Solaranlagen in Deutschland (Stand 11/2026)'
      },
      {
        label: 'Heimspeicher-Kombinationsquote',
        value: '79,2 % (EFH)',
        note: 'Fast 4 von 5 neuen Hausdachanlagen (5–20 kWp) starten direkt mit Batteriespeicher'
      },
      {
        label: 'Steckersolar (Balkonkraftwerke)',
        value: '> 1,15 Mio. Geräte',
        note: 'Anhaltend hohe Registrierungsdynamik durch vereinfachte MaStR-Anmeldung'
      }
    ],
    relatedToolHref: '/solaratlas',
    relatedToolLabel: 'Regionale Zubau-, Strahlungs- und Kostendaten im Deutschen Solar-Atlas 2026 prüfen →',
    sections: [
      {
        id: 'zubau-strukturwandel-2026',
        heading: '1. Strukturwandel im Solarjahr 2026: Vom reinen Einspeiser zum integrierten Heimspeicher-System',
        paragraphs: [
          'Nach dem historischen Zubau-Rekord des Vorjahres (rund 16,4 bis 17,3 GW Netto-Zubau in 2025) zeigt die aktuelle Auswertung des Marktstammdatenregisters (MaStR) für den Herbst 2026 eine deutliche Reifung des deutschen Photovoltaikmarktes. Mit dem Überschreiten der 130-Gigawatt-Marke deckt die Photovoltaik an sonnigen Werktagen zeitweise mehr als 60 % der gesamten deutschen Bruttostromlast.',
          'Im Segment der privaten Einfamilienhäuser (Anlagengröße zwischen 5 und 20 kWp) hat sich die Anlagenkonfiguration gegenüber den Jahren 2021–2023 vollständig gewandelt: Angesichts einer festen Teileinspeisevergütung von 7,70 ct/kWh bei gleichzeitigen Haushaltsstrompreisen von durchschnittlich 34,8 ct/kWh wird fast jede neue Dachanlage primär auf Eigenverbrauchsmaximierung und Sektorenkopplung (Wärmepumpe, Wallbox) ausgelegt.'
        ],
        table: {
          headers: ['Marktsegment in Deutschland', 'Status & Kennzahl (Stand November 2026)', 'Durchschnittliche Systemgröße', 'Dominierender Markttrend Q4 2026'],
          rows: [
            ['Eigenheim-Dachanlagen (EFH / ZFH)', '79,2 % Speicher-Kopplungsquote', '10,8 kWp PV + 10,4 kWh LFP-Speicher', 'Jahresendspurt wegen EEG-Stichtag 31.12.2026'],
            ['Steckersolargeräte (Balkonkraftwerke)', '> 1,15 Mio. registrierte Einheiten im MaStR', '800 VA Wechselrichter / 1.600–2.000 Wp', 'Über 65 % der Neukäufe inklusive 2-kWh-Kompaktspeicher'],
            ['Gewerbedach & Freifläche (> 100 kWp)', 'Über 58 % des gesamten Leistungszubaus (GW)', '150 kWp bis > 20 MWp', 'Starker Zuwachs bei Co-Location-Großspeichern']
          ]
        }
      },
      {
        id: 'bundeslaender-vergleich-zubau-2026',
        heading: '2. Bundesländer-Ranking im Herbst 2026: Süden führt beim Bestand, NRW und Niedersachsen holen auf',
        paragraphs: [
          'Bei der absolut installierten Photovoltaik-Leistung bleibt Bayern mit großem Abstand Spitzenreiter, gefolgt von Nordrhein-Westfalen, Baden-Württemberg und Niedersachsen. Bemerkenswert ist im laufenden Jahr 2026 jedoch die hohe Dynamik in den bevölkerungsreichen Kommunen Nordrhein-Westfalens sowie in Baden-Württemberg und Hessen, wo die gesetzliche Solarpflicht bei grundlegenden Dachsanierungen (§ 8a Klimaschutzgesetz BW bzw. § 42a BauO NRW) zunehmend als zusätzlicher Nachfragetreiber im Gebäudebestand wirkt.'
        ],
        bullets: [
          '<strong>Größere Modulleistung auf gleicher Fläche:</strong> Durch den Marktstandard von 450 bis 465 Wp pro Einzelmodul (N-Type TOPCon) steigt die durchschnittliche Anlagenleistung auf einem typischen Einfamilienhausdach von früher 8,2 kWp auf heute <strong>10,8 bis 12,4 kWp</strong>.',
          '<strong>Freie Handwerkerkapazitäten vor dem Jahreswechsel:</strong> Im Gegensatz zu den Lieferengpässen der Jahre 2022/2023 liegen die durchschnittlichen Vorlaufzeiten zwischen Auftragserteilung und Montage im November 2026 bei regionalen Fachbetrieben nur noch bei 3 bis 6 Wochen.'
        ]
      }
    ],
    sources: [
      { name: 'Bundesnetzagentur (BNetzA)', reference: 'Marktstammdatenregister (MaStR) — Monatsstatistik Photovoltaik & Stromspeicher (Stand 11/2026)' },
      { name: 'SOLARMETRIK Dateninstitut', reference: 'Regionaler Solar-Atlas SME-2026 (16 Bundesländer & 100 Großstädte)' }
    ]
  },
  {
    slug: 'eeg-2027-countdown-inbetriebnahme-stichtag-31-12-2026',
    category: 'EEG-Regulierung & Recht',
    title:
      'Endspurt vor dem EEG-Systemwechsel 2027: Warum das Inbetriebnahmeprotokoll (E.8) bis 31.12.2026 über 20 Jahre Festvergütung entscheidet',
    metaTitle: 'EEG 2027 Countdown: Frist 31.12.2026 & E.8 Inbetriebnahme',
    metaDescription:
      'So sichern Sie sich die 20-jährige EEG-Festvergütung (7,70 / 12,22 ct/kWh) vor dem 31.12.2026: Was rechtlich nach § 3 Nr. 30 EEG als Inbetriebnahme zählt — auch ohne Zählerwechsel.',
    datePublished: '2026-11-09T11:15:00+01:00',
    dateModified: '2026-11-11T08:00:00+01:00',
    displayDate: '09. November 2026',
    readingTimeMin: 6,
    heroImage: '/images/eeg-2026-2027-einspeiseverguetung.webp',
    heroAlt: 'EEG 2027 Stichtag 31.12.2026 und Inbetriebnahmeprotokoll E.8 für Photovoltaik Festvergütung',
    summary:
      'Für Bauherren und Eigenheimbesitzer, die noch im Jahr 2026 eine Photovoltaikanlage installieren lassen, rückt der entscheidende Stichtag 31. Dezember 2026 näher. Wer seine Anlage bis spätestens 31.12.2026 rechtssicher nach § 3 Nr. 30 EEG in Betrieb nimmt, sichert sich den gesetzlichen Bestandsschutz auf 20 Jahre feste Einspeisevergütung (7,70 ct/kWh Teileinspeisung bzw. 12,22 ct/kWh Volleinspeisung bis 10 kWp) und ist vom geplanten Systemwechsel des EEG 2027 dauerhaft befreit. Wichtigster Rechtsgrundsatz der Clearingstelle EEG|KWKG: Für die fristwahrende Inbetriebnahme muss der Netzbetreiber den Zweirichtungszähler noch NICHT physisch gewechselt haben.',
    keyTakeaways: [
      {
        label: 'Gesetzlicher Stichtag',
        value: '31. Dezember 2026',
        note: 'Sichert 20 Jahre + Inbetriebnahmejahr feste EEG-Vergütung nach geltendem Recht'
      },
      {
        label: 'Garantierter Vergütungssatz',
        value: '7,70 / 12,22 ct/kWh',
        note: 'Bis 10 kWp (10–40 kWp: 6,66 / 10,29 ct/kWh) für Inbetriebnahmen bis 31.01.2027'
      },
      {
        label: 'Zählerwechsel durch Stadtwerke',
        value: 'Nicht fristrelevant!',
        note: 'Entscheidend ist das unterschriebene E.8-Protokoll des Elektrikers & MaStR-Eintrag'
      }
    ],
    relatedToolHref: '/ratgeber/eeg-2026-vs-2027-einspeiseverguetung',
    relatedToolLabel: 'Vollständige Analyse zur EEG-Reform 2027 im großen Fachratgeber lesen →',
    sections: [
      {
        id: 'was-zaehlt-als-inbetriebnahme-3-nr-30-eeg',
        heading: '1. Rechtsklarheit im Jahresendspurt: Wann gilt eine PV-Anlage nach § 3 Nr. 30 EEG als „in Betrieb genommen"?',
        paragraphs: [
          'Jedes Jahr im November und Dezember entsteht bei Anlagenbetreibern dieselbe Sorge: Module und Wechselrichter sind fertig montiert, doch die lokalen Stadtwerke bzw. der Verteilnetzbetreiber haben vor Weihnachten keinen Termin mehr frei, um den Zweirichtungszähler oder das Smart Meter zu setzen. Verliert man dadurch das Inbetriebnahmejahr 2026?',
          'Die eindeutige Antwort des Gesetzgebers (§ 3 Nr. 30 EEG) und der Clearingstelle EEG|KWKG lautet: <strong>Nein.</strong> Die rechtliche Inbetriebnahme einer Photovoltaikanlage ist vollkommen unabhängig vom Zählerwechsel des Netzbetreibers. Sie ist exakt an dem Tag vollzogen, an dem die Anlage fest an dem für den dauerhaften Betrieb vorgesehenen Ort installiert wurde und erstmals regenerativen Gleichstrom erzeugt sowie über den Wechselrichter in Wechselstrom umgewandelt hat.'
        ],
        table: {
          headers: ['Prüfschritt für den Stichtag 31.12.2026', 'Zwingend bis 31.12.2026 erforderlich?', 'Verantwortlich', 'Rechtsgrundlage / Nachweisdokument'],
          rows: [
            ['1. Feste Montage der Module & des Wechselrichters', 'Ja (zwingend)', 'Solarteur / Montagebetrieb', 'Fotodokumentation mit Zeitstempel'],
            ['2. Erstmalige Stromerzeugung / Funktionstest AC', 'Ja (zwingend)', 'Eingetragener Elektroinstallateur', 'Inbetriebnahmeprotokoll VDE-AR-N 4105 (Formular E.8)'],
            ['3. Registrierung im Marktstammdatenregister (MaStR)', 'Innerhalb 1 Monats nach Inbetriebnahme', 'Anlagenbetreiber (oder Solarteur)', 'MaStR-Registrierungsbestätigung mit Datum ≤ 31.12.2026'],
            ['4. Physischer Zählerwechsel durch Stadtwerke / VNB', 'NEIN (darf auch erst 2027 erfolgen)', 'Grundzuständiger Messstellenbetreiber', 'Clearingstelle EEG Hinweis / § 3 Nr. 30 EEG']
          ]
        }
      },
      {
        id: 'checkliste-bauherren-november-dezember-2026',
        heading: '2. Drei-Punkte-Checkliste für Hausbesitzer im November und Dezember 2026',
        paragraphs: [
          'Damit Ihr Inbetriebnahmedatum im Jahr 2026 gegenüber dem Netzbetreiber zweifelsfrei dokumentiert ist, sollten Sie bei der Abnahme mit Ihrem Elektrofachbetrieb auf drei Details achten:'
        ],
        bullets: [
          '<strong>Formular E.8 (Inbetriebsetzungsprotokoll nach VDE-AR-N 4105):</strong> Lassen Sie sich noch am Tag der Elektro-Fertigstellung eine Kopie des vom eingetragenen Installateur und Ihnen unterschriebenen E.8-Protokolls mit dem exakten Datum (spätestens 31.12.2026) aushändigen.',
          '<strong>Foto von Wechselrichter-Display / App-Ertrag:</strong> Machen Sie am Tag der Inbetriebnahme ein kurzes Foto der Wechselrichter-Anzeige oder der Monitoring-App, aus dem hervorgeht, dass die Anlage erstmals Solarstrom (auch wenn es nur wenige Wattstunden im Eigenverbrauch sind) produziert hat.',
          '<strong>Eintragung im Marktstammdatenregister (MaStR):</strong> Tragen Sie genau dieses Datum aus dem E.8-Protokoll als offizielles Inbetriebnahmedatum unter <code>marktstammdatenregister.de</code> ein.'
        ]
      }
    ],
    sources: [
      { name: 'Erneuerbare-Energien-Gesetz (EEG)', reference: '§ 3 Nr. 30 EEG (Begriffsbestimmung Inbetriebnahme) & § 48 EEG (Vergütungssätze)' },
      { name: 'Clearingstelle EEG|KWKG', reference: 'Rechtsprechung und Hinweise zur kaufmännisch-technischen Inbetriebnahme unabhängig vom Zählersetzen' }
    ]
  },
  {
    slug: 'solarspitzengesetz-60-prozent-abregelung-smart-meter-steuerbox-2026',
    category: 'Smart Meter & Netzbetrieb',
    title:
      'Solarspitzengesetz (§ 9 EEG) in der Praxis: Wann die 60-%-Einspeisedrosselung nach Smart-Meter-Einbau entfällt',
    metaTitle: 'Solarspitzengesetz 60%-Regel: Smart Meter & Steuerbox 2026',
    metaDescription:
      'Wichtiges Praxis-Update zum Solarspitzengesetz (§ 9 EEG) im Herbst 2026: Warum die 60-%-Einspeisegrenze nur die Netzeinspeisung betrifft und wann das Smart Meter sie aufhebt.',
    datePublished: '2026-11-06T14:00:00+01:00',
    dateModified: '2026-11-06T14:00:00+01:00',
    displayDate: '06. November 2026',
    readingTimeMin: 6,
    heroImage: '/images/solarspitzengesetz-smart-meter-2026.webp',
    heroAlt: 'Solarspitzengesetz Paragraph 9 EEG 60 Prozent Einspeisebegrenzung und Smart Meter Steuerbox',
    summary:
      'Seit dem Inkrafttreten des Solarspitzengesetzes unterliegen neu in Betrieb genommene Photovoltaikanlagen ab 2 kWp einer temporären 60-%-Einspeisebegrenzung am Netzverknüpfungspunkt (§ 9 EEG), solange noch kein intelligentes Messsystem (iMSys) samt Steuerbox aktiv ist. Unsere aktuelle Auswertung zeigt zwei zentrale Punkte für Anlagenbetreiber im Herbst 2026: Erstens bezieht sich die 60-%-Grenze ausschließlich auf den ins öffentliche Netz eingespeisten Überschussstrom — Eigenverbrauch, Wärmepumpe, Wallbox und Batterieladung nutzen weiterhin 100 % der Dachleistung. Zweitens entfällt die 60-%-Abregelung erst dann, wenn neben dem Smart Meter auch die Steuerbox installiert und die Fernsteuerbarkeit durch den Netzbetreiber erfolgreich getestet wurde.',
    keyTakeaways: [
      {
        label: 'Wirkung der 60-%-Grenze',
        value: 'Nur am Netzanschlusspunkt!',
        note: '100 % Modulleistung bleibt für Haus, Speicher, Wärmepumpe & Wallbox nutzbar'
      },
      {
        label: 'Realer Jahresverlust (mit Speicher)',
        value: '0,8 % bis 2,4 % / Jahr',
        note: 'Mit HEMS (Mittags-Speicherladung) und Ost-West-Dach nahezu vernachlässigbar'
      },
      {
        label: 'Aufhebung der 60-%-Kappung',
        value: 'iMSys + Steuerbox + Test',
        note: 'Der reine Zählerwechsel ohne Steuerbox-Abnahme hebt die Grenze noch nicht auf'
      }
    ],
    relatedToolHref: '/ratgeber/solarspitzengesetz-negative-strompreise',
    relatedToolLabel: 'Detaillierte Simulation zu § 51 EEG und § 9 EEG im Ratgeber ansehen →',
    sections: [
      {
        id: 'unterschied-wirkleistungsbegrenzung-eigenverbrauch',
        heading: '1. Weiche vs. harte 60-%-Abregelung: Warum Ihr Wechselrichter an Sonnentagen trotzdem 100 % liefert',
        paragraphs: [
          'In Internetforen hält sich hartnäckig das Missverständnis, eine 10-kWp-Photovoltaikanlage dürfe durch das Solarspitzengesetz maximal 6,0 kW Strom erzeugen. Tatsächlich regelt § 9 EEG ausschließlich die <strong>maximale Wirkleistungseinspeisung in das öffentliche Verteilnetz</strong> am Hausanschlusspunkt (dynamische bzw. „weiche" 60-%-Regelung über den Energieflussrichtungssensor / Smart Meter des Wechselrichters).',
          'Erzeugt Ihre 10-kWp-Anlage an einem sonnigen Mittag 9,2 kW Leistung, dürfen davon maximal 6,0 kW ins öffentliche Stromnetz fließen. Die übrigen <strong>3,2 kW stehen zeitgleich zu 100 % für Ihren Haushalt, das Laden Ihres Batteriespeichers, die Warmwasserbereitung der Wärmepumpe oder das Elektroauto</strong> zur Verfügung. Bei einer Ost-West-Dachanlage wird die 60-%-Einspeiseschwelle selbst im Hochsommer fast nie überschritten.'
        ],
        table: {
          headers: ['Anlagenkonfiguration (10 kWp Referenz)', 'Spitzenleistung vom Dach im Sommer', 'Erlaubte Netzeinspeisung (60 %) + Eigenverbrauch', 'Jährlicher Abregelungsverlust in Euro'],
          rows: [
            ['Süddach (35°) ohne Speicher / ohne HEMS', 'ca. 8,8 – 9,5 kW', 'Max. 6,0 kW Netz + ~0,4 kW Hauslast', 'ca. 28 – 42 € / Jahr (380–550 kWh × 7,70 ct)'],
            ['Süddach (35°) mit 10 kWh Speicher + HEMS', 'ca. 8,8 – 9,5 kW', 'Max. 6,0 kW Netz + 3,5 kW Speicherladung mittags', 'ca. 4 – 11 € / Jahr (< 1,2 % des Jahresertrags)'],
            ['Ost-West-Dach (30°) mit Speicher', 'ca. 6,6 – 7,2 kW (geometrisch)', 'Max. 6,0 kW Netz + Hauslast / Speicher', '0 – 2 € / Jahr (technisch fast 0 % Abregelung)']
          ]
        }
      },
      {
        id: 'wann-entfaellt-die-60-prozent-drosselung',
        heading: '2. Wann darf der Elektriker die 60-%-Grenze im Wechselrichter auf 100 % aufheben?',
        paragraphs: [
          'Gemäß § 9 EEG gilt die 60-%-Einspeisebegrenzung als Übergangsregelung bis zur erfolgreichen Anbindung an ein intelligentes Messsystem (iMSys). In der Praxis des Herbstes 2026 verbauen viele grundzuständige Messstellenbetreiber beim ersten Termin zunächst nur den digitalen Zweirichtungszähler zusammen mit dem Smart-Meter-Gateway, während die separate <strong>FNN-Steuerbox</strong> (mit Relais-Kontakten oder digitaler EEBUS-Schnittstelle nach § 14a EnWG / § 9 EEG) erst in einem zweiten Schritt nachgerüstet wird.',
          'Rechtlich entfällt die 60-%-Kappung exakt zu dem Zeitpunkt, an dem der Messstellenbetreiber sowohl das Smart Meter als auch die Steuerbox installiert und die Fernsteuerbarkeit der Anlage erfolgreich geprüft hat.'
        ]
      }
    ],
    sources: [
      { name: 'Erneuerbare-Energien-Gesetz (EEG)', reference: '§ 9 EEG — Technische Vorgaben zur Wirkleistungsbegrenzung (60-%-Regelung) & Steuerbox-Anbindung' },
      { name: 'VDE FNN / Bundesnetzagentur', reference: 'Lastenheft FNN-Steuerbox & Rollout-Bericht intelligente Messsysteme (Stand Q4 2026)' }
    ]
  },
  {
    slug: 'modulpreise-speicherpreise-q4-2026-lfp-topcon-marktanalyse',
    category: 'Preise & Hardware-Markt',
    title:
      'PV-Preisindex November 2026 (Q4): N-Type-TOPCon-Module und 10-kWh-LFP-Speicher erreichen historisches Preis-Plateau',
    metaTitle: 'PV-Preisindex November 2026: Modul- & Speicherpreise (Q4)',
    metaDescription:
      'Aktuelle Photovoltaik- und Stromspeicher-Preise im November 2026 (Q4): Was kosten 10 kWp mit 10 kWh LFP-Speicher schlüsselfertig inkl. 0 % MwSt. in Deutschland?',
    datePublished: '2026-11-04T10:00:00+01:00',
    dateModified: '2026-11-10T16:20:00+01:00',
    displayDate: '04. November 2026',
    readingTimeMin: 6,
    heroImage: '/images/photovoltaik-kosten-2026-solarmetrik.webp',
    heroAlt: 'Photovoltaik Preisindex November 2026 für N-Type Glas-Glas Module und LFP Stromspeicher',
    summary:
      'Der SOLARMETRIK-Marktpreisindex für das vierte Quartal 2026 (Stand November 2026) zeigt eine klare Bodenbildung bei den Hardwarepreisen: Während bifaziale N-Type-TOPCon-Glas-Glas-Module (450–465 Wp) auf einem historischen Tiefstand verharren und Lithium-Eisenphosphat-Heimspeicher (LFP) im Hardware-Durchschnitt bei rund 410 bis 420 € pro Kilowattstunde liegen, kostet eine schlüsselfertige 10-kWp-Aufdachanlage inklusive 10-kWh-Speicher, Gerüst und VDE-konformer Elektroinstallation im Bundesdurchschnitt zwischen 17.400 € und 19.350 € (0 % MwSt.). Über 55 % der Gesamtkosten entfallen inzwischen auf Handwerk, Dachmontage und Elektrotechnik.',
    keyTakeaways: [
      {
        label: '10 kWp + 10 kWh Speicher (Turnkey)',
        value: '17.400 – 19.350 €',
        note: 'Bundesweiter Mittelwert inkl. Montage, Gerüst, Anmeldung & 0 % MwSt.'
      },
      {
        label: 'LFP-Heimspeicher (Hardware Ø)',
        value: '~ 410 – 420 € / kWh',
        note: 'Schlüsselfertiger Aufpreis für 10 kWh am Hybrid-WR: ca. 3.800 – 4.600 €'
      },
      {
        label: 'Anteil Handwerk & Montage',
        value: '> 55 % der Gesamtkosten',
        note: 'Reine Solarmodule machen nur noch ca. 11–14 % der Gesamtrechnung aus'
      }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Aktuellen Komplettpreis für Ihre Stadt und Anlagengröße im Rechner kalkulieren →',
    sections: [
      {
        id: 'kostenstruktur-10kwp-anlage-november-2026',
        heading: '1. Kostenaufschlüsselung im November 2026: Wohin fließt Ihr Geld bei einer 10-kWp-Anlage?',
        paragraphs: [
          'Viele Hausbesitzer wundern sich, warum einzelne 450-Wp-Solarmodule im Online-Handel für 65 bis 85 € angeboten werden, ein schlüsselfertiges Komplettangebot vom Fachbetrieb für 10 kWp mit 10-kWh-Speicher jedoch bei rund 18.200 € liegt. Der Grund liegt in der veränderten Kostenstruktur des Jahres 2026: Die reinen 22 Solarmodule kosten zusammen nur noch rund 1.650 bis 1.950 € — den Löwenanteil bilden das zertifizierte Dachdecker- und Elektrikerhandwerk, das Baugerüst nach BG-Bau-Vorschrift sowie die Zählerschrank-Ertüchtigung nach VDE-AR-N 4100.'
        ],
        table: {
          headers: ['Kostenposition (10 kWp N-Type + 10 kWh LFP-Speicher)', 'Typische Preisspanne (0 % MwSt.)', 'Anteil am Gesamtpreis', 'Preistrend Q4 2026'],
          rows: [
            ['22 × N-Type TOPCon Glas-Glas-Module (455 Wp, Full Black)', '1.650 – 2.050 €', 'ca. 10 %', 'Stabil auf historischem Tiefstand'],
            ['Dreiphasiger 10-kW-Hybridwechselrichter + Smart Meter', '1.850 – 2.450 €', 'ca. 12 %', 'Leicht sinkend (-4 % ggü. Q1/2026)'],
            ['10-kWh-Hochvolt-Batteriespeicher (LFP / LiFePO4)', '3.800 – 4.500 €', 'ca. 23 %', 'Bodenbildung (~415 €/kWh Hardware)'],
            ['Alu-/Edelstahl-Unterkonstruktion, Dachhaken & Solarkabel', '1.450 – 1.850 €', 'ca. 9 %', 'Stabil (abhängig von Schneelastzone)'],
            ['Baugerüst, Dachmontage & Kran-/Absturzsicherung', '3.600 – 4.500 €', 'ca. 22 %', 'Leicht steigend (Tariflöhne Handwerk)'],
            ['AC-Installation, VDE 4100 (SLS/ÜSS), Anmeldung E.8 & MaStR', '2.800 – 3.900 €', 'ca. 19 %', 'Stabil (Fixkostenblock unabhängig von kWp)'],
            ['Projektierung, Statikprüfung & Inbetriebnahme', '800 – 1.100 €', 'ca. 5 %', 'Stabil']
          ]
        }
      },
      {
        id: 'warum-15-kwp-statt-8-kwp-bauen',
        heading: '2. Ökonomische Konsequenz: Warum „Dach voll machen" im Herbst 2026 wichtiger ist als je zuvor',
        paragraphs: [
          'Da Gerüstbau, Anfahrt, Wechselrichter-Grundgerät, Zählerschrank-Nachrüstung und Netzanschlussanmeldung als <strong>Fixkostenblock von rund 6.500 bis 8.000 €</strong> unabhängig davon anfallen, ob 14 oder 32 Module aufs Dach geschraubt werden, kostet jedes zusätzliche Kilowatt-Peak über 10 kWp hinaus im Durchschnitt nur noch <strong>620 bis 750 €/kWp</strong>. Gerade für den Winterbetrieb einer Wärmepumpe ist diese zusätzliche Modulfläche die günstigste Versicherung gegen hohe Stromrechnungen.'
        ]
      }
    ],
    sources: [
      { name: 'SOLARMETRIK Marktpreis-Monitoring', reference: 'Auswertung von 1.400 Fachbetriebs-Angeboten in 16 Bundesländern (Q4 2026, 0 % USt.)' },
      { name: 'HTW Berlin / Fraunhofer ISE', reference: 'Systempreisentwicklung für Dachanlagen und LFP-Heimspeicher in Deutschland' }
    ]
  },
  {
    slug: 'netzentgelte-2027-paragraf-14a-enwg-modul-3-winter-boersenstrom',
    category: 'Netzentgelte & § 14a EnWG',
    title:
      'Neue Netzentgelte & § 14a EnWG Modul 3 ab Winter 2026/2027: Wie PV-Betreiber mit Speicher und Wärmepumpe bis zu 380 € sparen',
    metaTitle: 'Netzentgelte 2026/2027 & § 14a EnWG Modul 3 für PV-Kunden',
    metaDescription:
      'Vorläufige Netzentgelte 2027 & zeitvariable Tarife nach § 14a EnWG Modul 3: Wie Sie im Winter nachts bis zu 80 % Netzentgelt beim Laden von Speicher, E-Auto & Wärmepumpe sparen.',
    datePublished: '2026-11-02T08:45:00+01:00',
    dateModified: '2026-11-08T12:00:00+01:00',
    displayDate: '02. November 2026',
    readingTimeMin: 6,
    heroImage: '/images/dynamische-stromtarife-smart-meter-imsys-2026.webp',
    heroAlt: 'Zeitvariable Netzentgelte nach Paragraph 14a EnWG Modul 3 für Photovoltaik Speicher und Wärmepumpe',
    summary:
      'Mit der Veröffentlichung der neuen Preisblätter der deutschen Verteilnetzbetreiber für die Winterperiode 2026/2027 rückt § 14a EnWG Modul 3 (zeitvariable Netzentgelte) in den Mittelpunkt der intelligenten Haussteuerung. Wer eine steuerbare Verbrauchseinrichtung (Wärmepumpe, Wallbox oder netzladender Batteriespeicher > 4,2 kW) samt Smart Meter besitzt, kann Modul 1 (Pauschalprämie von 110–190 €/Jahr) mit Modul 3 kombinieren und bezieht Strom in den nächtlichen Niedriglast-Zeitfenstern (meist 00:00 bis 05:00 Uhr) mit einem um 60 bis 90 % reduzierten Netzentgelt.',
    keyTakeaways: [
      {
        label: 'Kombi-Vorteil (Modul 1 + Modul 3)',
        value: '180 bis 380 € / Jahr',
        note: 'Pauschalprämie (Modul 1) plus günstiges Nacht-Netzentgelt im Winter (Modul 3)'
      },
      {
        label: 'Niedriglast-Fenster (NT-Stufe)',
        value: 'ca. 1,2 – 3,8 ct/kWh',
        note: 'Reduziertes Netzentgelt nachts statt 8–12 ct/kWh Standard-Netzentgelt'
      },
      {
        label: 'Ideale Anwendung im Winter',
        value: 'Wärmepumpe, E-Auto & Speicher',
        note: 'Automatische Verschiebung des Winter-Netzbezugs in die günstige Nachtstufe'
      }
    ],
    relatedToolHref: '/speicher-rechner',
    relatedToolLabel: 'Ihren jährlichen § 14a EnWG Bonus im Speicher- & Autarkierechner prüfen →',
    sections: [
      {
        id: 'wie-funktioniert-modul-3-14a-enwg',
        heading: '1. So funktioniert § 14a EnWG Modul 3: Drei Preisstufen für das Stromnetz an jedem Tag',
        paragraphs: [
          'Während Modul 1 nach § 14a EnWG eine feste jährliche Gutschrift auf der Stromrechnung gewährt (je nach Netzgebiet 110 bis 190 € brutto pro Jahr) und keinen zweiten Zähler erfordert, lässt sich Modul 1 bei vorhandenem Smart Meter (iMSys) zusätzlich um <strong>Modul 3 (zeitvariables Netzentgelt)</strong> ergänzen.',
          'Beim zeitvariablen Netzentgelt legt Ihr lokaler Verteilnetzbetreiber drei feste Tageszeitfenster fest: Eine <strong>Standardstufe (ST)</strong>, eine teurere <strong>Hochlaststufe (HT)</strong> in den frühen Abendstunden (meist 17:00 bis 20:00 Uhr, wenn alle Haushalte kochen) und eine extrem günstige <strong>Niedriglaststufe (NT)</strong> in der Nacht (meist 00:00 bis 05:00 Uhr oder 23:00 bis 06:00 Uhr).'
        ],
        table: {
          headers: ['Tarifstufe nach § 14a EnWG Modul 3', 'Typisches Zeitfenster (je nach Netzbetreiber)', 'Netzentgelt-Arbeitspreis (Beispiel)', 'Optimale Strategie mit PV, Speicher & Wärmepumpe'],
          rows: [
            ['Niedriglast-Stufe (NT)', '00:00 – 05:00 Uhr (Nacht)', 'ca. 1,5 bis 3,5 ct/kWh (-70 %)', 'E-Auto laden, Wärmepumpen-Puffer vorheizen, ggf. Speicher-Winterladung'],
            ['Standard-Stufe (ST)', '05:00 – 17:00 Uhr & 20:00 – 24:00 Uhr', 'ca. 8,5 bis 11,5 ct/kWh (Normal)', 'Tagsüber Direktverbrauch von der eigenen Photovoltaikanlage'],
            ['Hochlast-Stufe (HT)', '17:00 – 20:00 Uhr (Abendspitze)', 'ca. 14,5 bis 19,0 ct/kWh (Aufschlag)', '100 % Überbrückung aus dem eigenen PV-Batteriespeicher (0 kWh Netzbezug!)']
          ]
        }
      },
      {
        id: 'synergie-pv-speicher-abendspitze',
        heading: '2. Warum PV-Betreiber mit Heimspeicher die teure Abend-Hochlaststufe (17–20 Uhr) komplett umgehen',
        paragraphs: [
          'Für Haushalte ohne Batteriespeicher birgt Modul 3 ein Risiko: Wer zwischen 17:00 und 20:00 Uhr den Backofen und das Induktionskochfeld einschaltet, zahlt in diesen drei Stunden das erhöhte Hochlast-Netzentgelt. Besitzt das Haus jedoch eine Photovoltaikanlage mit Batteriespeicher (oder ein Energiemanagementsystem, das den Speicher im Winter nachts im günstigen NT-Fenster vorlädt), übernimmt die Hausbatterie exakt das Zeitfenster von 17:00 bis 20:00 Uhr zu 100 %.',
          'Dadurch vermeidet der Haushalt die teure Hochlaststufe vollständig und nimmt ausschließlich den massiven Rabatt der nächtlichen Niedriglaststufe für das Elektroauto und die Wärmepumpe mit.'
        ]
      }
    ],
    sources: [
      { name: 'Bundesnetzagentur (BK8-22/010-A)', reference: 'Festlegung zur Integration steuerbarer Verbrauchseinrichtungen nach § 14a EnWG (Module 1, 2 und 3)' },
      { name: 'Preisblätter der Verteilnetzbetreiber', reference: 'Veröffentlichung der zeitvariablen Netzentgelt-Stufen (HT/ST/NT) für das Winterhalbjahr 2026/2027' }
    ]
  }
];

export function getAllNews(): NewsItem[] {
  return newsItems;
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
