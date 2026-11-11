export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface ArticleData {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  updatedDate: string;
  readingTimeMin: number;
  heroImage: string;
  heroAlt: string;
  blufSummary: string;
  svgDiagramTitle: string;
  svgDiagramCaption: string;
  svgKeyLabels: { label: string; value: string; sub: string }[];
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  relatedToolHref: string;
  relatedToolLabel: string;
}

export const articles: ArticleData[] = [
  {
    slug: 'photovoltaik-kosten-2026',
    category: 'Preisanalyse & Wirtschaftlichkeit',
    title: 'Photovoltaik Kosten 2026: Preistabellen für 5 bis 20 kWp, Speicher & Montage',
    metaTitle: 'Photovoltaik Kosten 2026: Preise pro kWp & Speicher',
    metaDescription:
      'Was kostet eine Solaranlage 2026? Verifizierte Preistabelle für 5, 8, 10, 12, 15 & 20 kWp inkl. Speicher, Montage & 0 % MwSt. im Vergleich zur Finanztip-Faustregel.',
    updatedDate: '04. November 2026',
    readingTimeMin: 7,
    heroImage:
      '/images/photovoltaik-kosten-2026-solarmetrik.webp',
    heroAlt: 'Photovoltaikanlage auf Einfamilienhausdach in Deutschland 2026',
    blufSummary:
      'Im November 2026 kostet eine schlüsselfertige 10-kWp-Photovoltaikanlage ohne Speicher in Deutschland durchschnittlich 12.900 € (1.290 €/kWp). Inklusive eines 10-kWh-Lithium-Eisenphosphat-Speichers (LFP), Hybrid-Wechselrichters, Energiemanagementsystems (HEMS) und kompletter Dachmontage liegt der Komplettpreis im Bundesschnitt bei 18.600 € (17.400 € in Sachsen-Anhalt bis 19.200 € in Hamburg auf Bundeslandebene bzw. bis 19.350 € in München auf Stadtebene). Dank § 12 Abs. 3 UStG fällt 0 % Mehrwertsteuer an; die modellierte Amortisationszeit beträgt 7,8 bis 9,5 Jahre.',
    svgDiagramTitle: 'Kostenstruktur einer schlüsselfertigen 10-kWp-Anlage mit 10-kWh-Speicher (18.600 €)',
    svgDiagramCaption:
      'Abb. 1: Prozentuale Aufteilung der Investitionskosten im deutschen Fachhandwerk (Q4/2026, inkl. 0 % MwSt. nach § 12 Abs. 3 UStG).',
    svgKeyLabels: [
      { label: 'PV-Module & Unterkonstruktion', value: '31 % (5.760 €)', sub: '22–23 Glas-Glas TOPCon Module (~440–455 Wp)' },
      { label: '10-kWh-LFP-Speicher & Hybrid-WR', value: '39 % (7.250 €)', sub: 'Effizienzklasse A inkl. Smart-Meter / HEMS' },
      { label: 'Dachmontage, Gerüst & Elektro/AC', value: '30 % (5.590 €)', sub: 'Gerüstbau, Zählerschrank & VDE-Anmeldung' }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Jetzt individuelle Kosten für Ihre Postleitzahl im 360°-Rechner prüfen →',
    sections: [
      {
        id: 'preistabelle-2026',
        heading: '1. Aktuelle Photovoltaik-Preistabelle 2026 nach Anlagengröße (5 bis 20 kWp)',
        paragraphs: [
          'Die Hardwarepreise für monokristalline N-Type-TOPCon-Solarmodule und Lithium-Eisenphosphat-Heimspeicher (LFP) haben sich im Verlauf des Jahres 2026 auf einem historisch günstigen Niveau stabilisiert. Gleichzeitig machen die Fixkosten der Baustelleneinrichtung — darunter Fassadengerüst, DC-Überspannungsschutz, Zählerschrank-Ertüchtigung nach VDE-AR-N 4100 und die Netzanmeldung beim Verteilnetzbetreiber — rund 2.450 € unabhängig von der Modulanzahl aus.',
          'Dadurch sinkt der spezifische Preis pro Kilowatt-Peak (€/kWp) mit zunehmender Anlagengröße deutlich ab. Während eine kleine 5-kWp-Anlage ohne Speicher bei durchschnittlich 1.520 €/kWp liegt, reduziert sich der Kilowatt-Peak-Preis bei einer 15-kWp-Anlage auf rund 1.170 €/kWp.'
        ],
        table: {
          headers: [
            'Anlagengröße',
            'Dachfläche & Module',
            'PV-Preis ohne Speicher',
            'Empfohlener Speicher',
            'Schlüsselfertig inkl. Speicher (0% MwSt)',
            'Ø Jahresertrag (DE)'
          ],
          rows: [
            ['5 kWp', '~22 m² (11–12 Module)', '7.600 € (1.520 €/kWp)', '5 kWh (3.400 €)', 'ca. 11.000 €', '4.800 – 5.550 kWh'],
            ['8 kWp', '~35 m² (18 Module)', '11.040 € (1.380 €/kWp)', '8 kWh (4.880 €)', 'ca. 15.920 €', '7.600 – 8.880 kWh'],
            ['10 kWp (Referenz)', '~44 m² (22–23 Module)', '12.900 € (1.290 €/kWp)', '10 kWh (5.700 €)', 'ca. 18.600 €', '9.500 – 11.100 kWh'],
            ['12 kWp', '~53 m² (27 Module)', '14.760 € (1.230 €/kWp)', '10 kWh (5.700 €)', 'ca. 20.460 €', '11.400 – 13.320 kWh'],
            ['15 kWp (inkl. WP)', '~66 m² (34 Module)', '17.550 € (1.170 €/kWp)', '15 kWh (7.950 €)', 'ca. 25.500 €', '14.250 – 16.650 kWh'],
            ['20 kWp (Vollausbau)', '~88 m² (45 Module)', '22.200 € (1.110 €/kWp)', '15 kWh (7.950 €)', 'ca. 30.150 €', '19.000 – 22.200 kWh']
          ]
        }
      },
      {
        id: 'finanztip-faustregel',
        heading: '2. Finanztip-Faustregel 2026 vs. Reale Angebote im Fachhandwerk',
        paragraphs: [
          'Unabhängige Verbraucherportale wie Finanztip und die Verbraucherzentralen definieren für das Jahr 2026 zwei klare Preisobergrenzen, ab denen eine Photovoltaikanlage als überteuert gilt: Erstens sollte die reine PV-Anlage inklusive Montage nicht mehr als 1.600 € pro kWp kosten; zweitens sollte der Batteriespeicher nicht teurer als 600 € pro kWh Speicherkapazität sein.',
          'Unsere Auswertung der regionalen Fachbetriebspreise in allen 16 Bundesländern zeigt, dass seriöse Meisterbetriebe vor Ort diese Obergrenzen im Herbst 2026 deutlich unterschreiten: Bei einer 10-kWp-Anlage liegt der Durchschnittspreis mit 1.290 €/kWp rund 19 % unter dem Limit, und ein 10-kWh-Markenspeicher (z. B. BYD, Fronius Reserva, Kostal oder SMA) kostet inklusive Installation durchschnittlich 570 €/kWh.'
        ],
        bullets: [
          'Warnzeichen bei Komplettangeboten: Liegt ein Angebot für 10 kWp + 10 kWh Speicher über 23.500 €, sind häufig hohe Vertriebsprovisionen oder überteuerte Zusatzpakete eingepreist.',
          'Regionale Preisunterschiede: In Ostdeutschland (Sachsen-Anhalt, Thüringen, Sachsen) liegen die Handwerkerkosten mit 1.225 bis 1.250 €/kWp am niedrigsten; in Metropolregionen wie München (1.365 €/kWp) oder Stuttgart (1.355 €/kWp) am höchsten.',
          'Nullsteuersatz (§ 12 Abs. 3 UStG): Alle genannten Preise sind Endkundenpreise (Netto = Brutto), da 0 % Mehrwertsteuer berechnet wird.'
        ]
      },
      {
        id: 'speicher-und-nebenkosten',
        heading: '3. Was kostet ein Stromspeicher 2026 und welche Zusatzkosten fallen an?',
        paragraphs: [
          'Über 82 % aller neuen Aufdachanlagen auf Ein- und Zweifamilienhäusern werden 2026 direkt mit einem DC-gekoppelten Hybrid-Wechselrichter und einem LFP-Heimspeicher installiert. Durch die Kombination in einem einzigen Wechselrichtergehäuse sparen Eigentümer rund 1.200 € gegenüber einer späteren AC-Nachrüstung.',
          'Bei Altbauten (Baujahr vor 1995) sollte zusätzlich ein Budget von 900 € bis 1.600 € für die Modernisierung des Zählerschranks nach der aktuellen Anwendungsregel VDE-AR-N 4100 (inklusive SLS-Schalter, Überspannungsschutz Typ 1/2 und APZ-Feld für das Smart-Meter-Gateway) eingeplant werden.'
        ]
      },
      {
        id: 'laufende-betriebskosten',
        heading: '4. Laufende Betriebskosten, Versicherung & Smart-Meter-Gebühren (iMSys)',
        paragraphs: [
          'Neben den einmaligen Anschaffungskosten betragen die laufenden Betriebskosten einer 10-kWp-Anlage durchschnittlich rund 160 € bis 220 € pro Jahr (ca. 0,9 % der Investitionssumme). Darin enthalten sind eine eigene Photovoltaik-Allgefahrenversicherung (oder der Einschluss in die Wohngebäudeversicherung für ca. 70–110 €/Jahr), die gesetzlich gedeckelte Jahresgebühr für das intelligente Messsystem (Smart Meter) sowie eine Rücklage für den Wechselrichtertausch nach 13 bis 15 Jahren.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Gilt der Nullsteuersatz (0 % MwSt.) auch Ende 2026 und 2027 weiter?',
        a: 'Ja. Der in § 12 Abs. 3 UStG verankerte Nullsteuersatz von 0 % Mehrwertsteuer auf Solarmodule, Batteriespeicher, Wechselrichter und die Dachmontage ist unbefristet im Gesetz festgeschrieben und gilt für alle Anlagen auf oder in der Nähe von Wohngebäuden (vereinfachte Prüfung bis 30 kWp).'
      },
      {
        q: 'Wie schnell amortisiert sich eine 18.600 € teure 10-kWp-Anlage mit Speicher?',
        a: 'Bei einem Haushaltsverbrauch von 4.500 kWh, 73 % Autarkiegrad und einem Strompreis von 36,8 ct/kWh spart die Anlage im ersten Jahr rund 1.210 € Strombezugskosten und erwirtschaftet zusätzlich ca. 515 € EEG-Einspeisevergütung (zusammen ca. 1.725 €/Jahr). Unter Berücksichtigung einer moderaten Strompreisinflation ist die Investition nach 8,1 bis 8,8 Jahren vollständig abbezahlt.'
      }
    ]
  },
  {
    slug: 'eeg-2026-vs-2027-einspeiseverguetung',
    category: 'Gesetzgebung & Förderung',
    title: 'EEG-Einspeisevergütung 2026 vs. 2027: Kabinettsbeschluss & Bestandsschutz bis 31.12.2026',
    metaTitle: 'Einspeisevergütung 2026 vs. EEG 2027: Stichtag 31.12.',
    metaDescription:
      'Aktuelle EEG-Einspeisevergütung ab August 2026 (7,70 / 12,22 ct/kWh) und Ausblick auf die EEG-Reform 2027 (Wegfall der Festvergütung unter 25 kWp). So sichern Sie den Bestandsschutz.',
    updatedDate: '04. November 2026',
    readingTimeMin: 6,
    heroImage:
      '/images/eeg-2026-2027-einspeiseverguetung.webp',
    heroAlt: 'EEG Einspeisevergütung 2026 und Reform 2027 Analyse',
    blufSummary:
      'Für alle Photovoltaikanlagen mit offizieller Inbetriebnahme zwischen dem 01.08.2026 und dem 31.12.2026 garantiert das Erneuerbare-Energien-Gesetz (EEG) feste Vergütungssätze für 20 volle Jahre plus Inbetriebnahmejahr: 7,70 ct/kWh (Teileinspeisung bis 10 kWp) bzw. 12,22 ct/kWh (Volleinspeisung bis 10 kWp). Mit der EEG-Reform ab dem 1. Januar 2027 steht für Neuanlagen unter 25 kWp das schrittweise Auslaufen der 20-jährigen Festvergütung bevor — der 31.12.2026 ist daher der entscheidende Stichtag für den gesetzlichen Bestandsschutz.',
    svgDiagramTitle: 'Zeitachse: 20-Jahre-Bestandsschutz (2026) vs. EEG-Systemwechsel (ab 2027)',
    svgDiagramCaption:
      'Abb. 2: Vergleich der gesetzlichen Vergütungsgarantie bei Inbetriebnahme bis 31.12.2026 gegenüber Neuanlagen ab 2027.',
    svgKeyLabels: [
      { label: 'Inbetriebnahme bis 31.12.2026', value: '20 Jahre Festpreis', sub: '7,70 ct/kWh (Teil) / 12,22 ct/kWh (Voll) bis Ende 2046' },
      { label: 'Inbetriebnahme ab 01.01.2027', value: 'EEG-2027-Umbruch', sub: 'Abbau fester Einspeisevergütung für Neuanlagen < 25 kWp' },
      { label: 'Wirtschaftlicher Haupthebel', value: 'Eigenverbrauch', sub: '36,8 ct/kWh gesparter Netzstrom + § 14a EnWG Bonus' }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Ihren 20-Jahre-EEG-Ertrag jetzt im Rechner simulieren →',
    sections: [
      {
        id: 'aktuelle-saetze-2026',
        heading: '1. Offizielle EEG-Vergütungssätze vom 01.08.2026 bis 31.01.2027 (Bundesnetzagentur)',
        paragraphs: [
          'Gemäß § 49 EEG reduziert sich die Einspeisevergütung für neu in Betrieb genommene Solaranlagen halbjährlich jeweils zum 1. Februar und zum 1. August um 1,0 % (halbjährliche Degression). Für das laufende Halbjahr vom 1. August 2026 bis zum 31. Januar 2027 gelten die folgenden von der Bundesnetzagentur veröffentlichten Festsätze:'
        ],
        table: {
          headers: [
            'Anlagenleistung (kWp)',
            'Teileinspeisung (Überschusseinspeisung)',
            'Volleinspeisung (100 % Netzeinspeisung)',
            'Garantiedauer (Bestandsschutz)'
          ],
          rows: [
            ['Bis 10 kWp', '7,70 ct/kWh', '12,22 ct/kWh', '20 Jahre + Inbetriebnahmejahr'],
            ['10 kWp bis 40 kWp (Anteil)', '6,66 ct/kWh', '10,24 ct/kWh', '20 Jahre + Inbetriebnahmejahr'],
            ['40 kWp bis 100 kWp (Anteil)', '5,48 ct/kWh', '10,24 ct/kWh', '20 Jahre + Inbetriebnahmejahr']
          ]
        }
      },
      {
        id: 'eeg-reform-2027',
        heading: '2. Was ändert sich mit der EEG-Reform ab dem 1. Januar 2027?',
        paragraphs: [
          'Die Bundesregierung hat im Sommer 2026 den grundlegenden Systemwechsel für das EEG 2027 eingeleitet: Da das deutsche Stromnetz an sonnigen Mittagen zunehmend hohe Solarstrom-Überschüsse verzeichnet, soll die pauschale 20-jährige Einspeisevergütung für neue kleine Dachanlagen unter 25 kW ab 2027 durch befristete Übergangsmodelle und eine stärkere Marktintegration abgelöst werden.',
          'Wichtig für alle Hausbesitzer: Im deutschen Energierecht gilt ein strikter verfassungsrechtlicher Bestandsschutz. Jede Anlage, die noch bis zum 31. Dezember 2026 technisch betriebsbereit installiert und im Marktstammdatenregister (MaStR) als in Betrieb genommen gemeldet wird, behält ihren festen Vergütungsanspruch nach dem geltenden EEG bis zum 31. Dezember 2046.'
        ],
        bullets: [
          'Maßgebliches Datum für den Bestandsschutz ist das offizielle Inbetriebnahmedatum nach EEG (erstmalige Stromerzeugung am fest installierten Ort), nicht das Datum des Zählerwechsels durch den Netzbetreiber.',
          'Kombinationsmodell: Wer ein großes Dach besitzt, kann auch 2026 eine Teileinspeise-Anlage (für den Hausverbrauch) mit einer separaten Volleinspeise-Anlage (12,22 ct/kWh) auf demselben Dach kombinieren.'
        ]
      },
      {
        id: 'anteilige-berechnung',
        heading: '3. Beispielrechnung: Wie wird die Vergütung bei einer 15-kWp-Anlage berechnet?',
        paragraphs: [
          'Bei Anlagen über 10 kWp fällt nicht die gesamte Anlage auf den niedrigeren Tarif zurück, sondern die Berechnung erfolgt leistungsanteilig: Für die ersten 10 kWp (66,7 % der Leistung) erhalten Sie 7,70 ct/kWh, und nur für die weiteren 5 kWp (33,3 % der Leistung) gelten 6,66 ct/kWh. Daraus ergibt sich für eine 15-kWp-Anlage im Herbst 2026 ein gewichteter Mischvergütungssatz von exakt 7,35 ct/kWh.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Zählt für die Frist 31.12.2026 die Montage oder der Zählertausch der Stadtwerke?',
        a: 'Entscheidend nach § 3 Nr. 30 EEG ist die technische Inbetriebnahme durch Ihren Elektrofachbetrieb (Inbetriebnahmeprotokoll E.8 und Registrierung im Marktstammdatenregister), sobald Module und Wechselrichter fest montiert sind und Strom erzeugen können — auch wenn der Netzbetreiber den Zweirichtungszähler erst einige Wochen später setzt.'
      }
    ]
  },
  {
    slug: 'solarspitzengesetz-negative-strompreise',
    category: 'Netztechnik & § 51 EEG',
    title: 'Solarspitzengesetz (§ 51 EEG): Negative Strompreise, 60-%-Begrenzung & Kompensationsformel',
    metaTitle: 'Solarspitzengesetz (§ 51 EEG) 2026: Negative Strompreise',
    metaDescription:
      'Alles zum Solarspitzengesetz (§ 51 EEG) 2026: Wegfall der Vergütung bei negativen Börsenstrompreisen, 60-%-Abregelung ohne Smart Meter und die 20-Jahre-Verlängerungsformel.',
    updatedDate: '04. November 2026',
    readingTimeMin: 6,
    heroImage:
      '/images/solarspitzengesetz-smart-meter-2026.webp',
    heroAlt: 'Smart Meter und Energiemanagement bei negativen Strompreisen nach § 51 EEG',
    blufSummary:
      'Nach dem Solarspitzengesetz (§ 51 EEG) entfällt für neue Photovoltaikanlagen in exakt jenen Viertelstunden die Einspeisevergütung, in denen der Day-Ahead- bzw. Intraday-Börsenstrompreis an der EPEX SPOT negativ ist. Solange noch kein intelligentes Messsystem (Smart Meter + Steuerbox) verbaut ist, muss die maximale Wirkleistungseinspeisung am Netzverknüpfungspunkt auf 60 % der installierten kWp-Leistung begrenzt werden. Ein per HEMS gesteuerter Heimspeicher fängt diese Mittagsspitzen vollständig für den Eigenverbrauch auf.',
    svgDiagramTitle: 'Funktionsweise von HEMS & Speicher bei negativen EPEX-Spot-Preisen (§ 51 EEG)',
    svgDiagramCaption:
      'Abb. 3: Intelligente Mittags-Beladung (Peak-Shaving) verhindert Abregelungsverluste und maximiert den Abend-Eigenverbrauch.',
    svgKeyLabels: [
      { label: 'Ohne Smart Meter (Übergang)', value: '60 % Limit am Netzpunkt', sub: '40 % Mittagsspitze fließt direkt in den Heimspeicher' },
      { label: 'Mit Smart Meter & Steuerbox', value: '0 ct bei < 0 €/MWh Börse', sub: 'HEMS verschiebt Speicherladung gezielt auf 11–15 Uhr' },
      { label: 'Gesetzlicher Ausgleich (§ 51a EEG)', value: '+ Zeitgutschrift nach 20 J.', sub: 'Abgeregelte Viertelstunden verlängern den Förderzeitraum' }
    ],
    relatedToolHref: '/speicher-rechner',
    relatedToolLabel: 'Speichergröße für Peak-Shaving im Speicher-Rechner bestimmen →',
    sections: [
      {
        id: 'inhalt-solarspitzengesetz',
        heading: '1. Was regelt das Solarspitzengesetz (§ 51 EEG & § 9 EEG) im Detail?',
        paragraphs: [
          'An sonnigen und gleichzeitig windreichen Wochenenden im Frühjahr und Sommer übersteigt die Stromerzeugung in Deutschland regelmäßig die Netzlast, sodass die Großhandelspreise an der Strombörse EPEX SPOT für einige Stunden unter null Euro fallen (im Jahr 2025/2026 rund 450 bis 520 Stunden pro Jahr). Um das Stromnetz zu entlasten, greifen für Neuanlagen zwei zentrale Regeln:',
          'Erstens wird für Strom, der während negativer Börsenpreise ins öffentliche Netz eingespeist wird, keine EEG-Vergütung gezahlt (sobald ein Smart Meter installiert ist). Zweitens gilt für alle Neuanlagen ab 2 kWp bis zum Einbau eines intelligenten Messsystems (iMSys) samt Steuerbox eine Begrenzung der Netzeinspeisung auf maximal 60 % der installierten Modulleistung.'
        ]
      },
      {
        id: 'warum-60-prozent-kaum-verlust',
        heading: '2. Warum die 60-%-Einspeisebegrenzung mit Speicher praktisch 0 % Verlust bedeutet',
        paragraphs: [
          'Wichtig zu verstehen: Die 60-%-Begrenzung gilt nicht für die Stromerzeugung auf dem Dach, sondern ausschließlich für den Teil, der ins öffentliche Straßennetz abfließt. Produziert Ihre 10-kWp-Anlage mittags bei klarem Himmel 8,5 kW Leistung, dürfen 6,0 kW ins Netz eingespeist werden, während die restlichen 2,5 kW gleichzeitig im Haus verbraucht oder in Ihren Batteriespeicher geladen werden.',
          'Wenn ein Energiemanagementsystem (HEMS) den Batteriespeicher nicht schon um 9 Uhr morgens volllädt, sondern die Beladung prognosebasiert auf die Mittagsstunden (11:30 bis 14:30 Uhr) legt, entstehen über das gesamte Jahr weniger als 1 % Abregelungsverluste.'
        ],
        table: {
          headers: ['Anlagenkonfiguration (10 kWp)', 'Jährlicher Ertragsverlust durch 60-%-Regel', 'Verlust bei negativen Strompreisen', 'Empfohlene Maßnahme'],
          rows: [
            ['Ohne Speicher (Süddach)', 'ca. 4,5 – 6,5 % pro Jahr', 'ca. 8 – 12 % der Einspeisung', 'Prognosebasiertes Lastmanagement (WP/Warmwasser mittags)'],
            ['Ohne Speicher (Ost-West-Dach)', 'ca. 0,8 – 1,5 % pro Jahr', 'ca. 6 – 9 % der Einspeisung', 'Natürliche Glättung der Mittagsspitze durch Ost/West'],
            ['Mit 10-kWh-Speicher + HEMS', '< 0,3 % pro Jahr', 'Nahe 0 % (Eigenverbrauch statt Netz)', 'Prognosebasiertes Laden aktivieren']
          ]
        }
      },
      {
        id: 'kompensationsformel-51a',
        heading: '3. Die gesetzliche Kompensationsformel (§ 51a EEG): Verlängerung über 20 Jahre hinaus',
        paragraphs: [
          'Die Stunden mit negativen Börsenstrompreisen gehen für Anlagenbetreiber nicht ersatzlos verloren: Nach § 51a EEG werden die betroffenen Viertelstunden über einen gewichteten Volllastviertelstunden-Faktor umgerechnet und an das reguläre Ende des 20-jährigen Vergütungszeitraums angehängt. Da eine Stunde im sonnenreichen Juni deutlich mehr Solarstrom liefert als eine Stunde im Dezember, berücksichtigt der gesetzliche Kompensationsmechanismus das saisonale Erzeugungsprofil.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Sind Bestandsanlagen vor Februar 2025 vom Solarspitzengesetz betroffen?',
        a: 'Nein, für ältere Bestandsanlagen gilt Bestandsschutz; sie können jedoch freiwillig gegen einen Bonus von 0,6 ct/kWh in die neue Regelung wechseln.'
      }
    ]
  },
  {
    slug: 'solarpflicht-deutschland-2026',
    category: 'Baurecht & Bundesländer',
    title: 'Solarpflicht Deutschland 2026: Alle 16 Bundesländer bei Neubau & Dachsanierung',
    metaTitle: 'Solarpflicht Deutschland 2026: Alle 16 Bundesländer',
    metaDescription:
      'Wo gilt 2026 die Solarpflicht für private Wohnhäuser? Vollständige Übersicht aller 16 Bundesländer für Neubau und Dachsanierung inklusive NRW-Pflicht seit 01.01.2026.',
    updatedDate: '04. November 2026',
    readingTimeMin: 6,
    heroImage:
      '/images/solarpflicht-deutschland-bundeslaender-2026.webp',
    heroAlt: 'Solarpflicht Deutschland 2026 bei Neubau und Dachsanierung',
    blufSummary:
      'Im Jahr 2026 gibt es in Deutschland kein bundeseinheitliches Solarpflicht-Gesetz für private Wohngebäude, jedoch verbindliche Landesgesetze in den meisten bevölkerungsreichen Bundesländern. Seit dem 1. Januar 2026 gilt auch in Nordrhein-Westfalen (NRW) die gesetzliche Photovoltaik-Pflicht bei grundlegenden Dachsanierungen von Bestandswohngebäuden. Insgesamt schreiben 2026 unter anderem Baden-Württemberg, Berlin, Bremen, Hamburg, Niedersachsen, NRW und Schleswig-Holstein eine PV-Installation bei Neubau und/oder Dachsanierung vor.',
    svgDiagramTitle: 'Solarpflicht-Kategorien im deutschen Landesbaurecht (Stand 11/2026)',
    svgDiagramCaption:
      'Abb. 4: Unterscheidung zwischen Wohn-Neubau, Bestands-Dachsanierung und Mindestbelegungsflächen.',
    svgKeyLabels: [
      { label: 'Neubau & Dachsanierung (Bestand)', value: 'BW, BE, HB, HH, NI, NRW, SH', sub: 'Pflicht bei Wohn-Neubau sowie kompletter Dacherneuerung' },
      { label: 'Mindest-Dachbelegung', value: '30 % bis 60 % Fläche', sub: 'Alternativ Pauschalvorgabe nach kWp pro m² Gebäudefläche' },
      { label: 'Freiwillig im privaten Wohnbau', value: 'BY (Soll), HE, MV, RP, SL, SN, ST, TH', sub: 'Dort meist nur für Gewerbe, öffentliche Bauten & Parkplätze' }
    ],
    relatedToolHref: '/foerderung-check',
    relatedToolLabel: 'Solarpflicht & Förderung für Ihre Stadt im PLZ-Check prüfen →',
    sections: [
      {
        id: 'uebersicht-16-laender',
        heading: '1. Komplett-Übersicht der Solarpflicht 2026 in allen 16 Bundesländern',
        paragraphs: [
          'Ob Sie beim Bau eines neuen Einfamilienhauses oder bei der Neueindeckung eines bestehenden Daches gesetzlich zur Installation einer Photovoltaikanlage verpflichtet sind, richtet sich nach der jeweiligen Landesbauordnung (LBO) bzw. dem Landesklimaschutzgesetz. Die folgende Tabelle zeigt den verbindlichen Rechtsstand im November 2026:'
        ],
        table: {
          headers: ['Bundesland', 'Wohn-Neubau (2026)', 'Dachsanierung Bestand (2026)', 'Mindestumfang / Besonderheit'],
          rows: [
            ['Baden-Württemberg', 'Ja (Pflicht)', 'Ja (Pflicht)', 'Mind. 60 % der solargeeigneten Dachfläche'],
            ['Bayern', 'Nein ("Soll"-Empfehlung)', 'Nein ("Soll"-Empfehlung)', 'Pflicht nur für Gewerbe & Nichtwohngebäude'],
            ['Berlin', 'Ja (Pflicht)', 'Ja (Pflicht)', 'Mind. 30 % der Bruttodachfläche (Solargesetz Berlin)'],
            ['Brandenburg', 'Nein (nur Gewerbe ≥ 50 m²)', 'Nein (nur Gewerbe/Öffentlich)', 'Wohngebäude bleiben freiwillig'],
            ['Bremen', 'Ja (Pflicht)', 'Ja (Pflicht)', 'Mind. 50 % der Dachfläche bei Neubau & Sanierung'],
            ['Hamburg', 'Ja (Pflicht)', 'Ja (Pflicht)', 'Mind. 30 % der Nettodachfläche'],
            ['Hessen', 'Nein (nur Öffentlich/Parkplätze)', 'Nein', 'Keine Pflicht für private Eigenheime'],
            ['Nordrhein-Westfalen (NRW)', 'Ja (Pflicht seit 2025)', 'Ja (Pflicht seit 01.01.2026)', 'Mind. 30 % der geeigneten Fläche bei Dachsanierung'],
            ['Niedersachsen', 'Ja (Pflicht seit 2025)', 'Ja (Pflicht bei Sanierung)', 'Mind. 50 % der Dachfläche (ab 50 m²)'],
            ['Rheinland-Pfalz / Saarland', 'Nein (nur Gewerbe)', 'Nein', 'Fokus auf Förderanreize statt Pflicht'],
            ['Sachsen / Sachsen-Anhalt / Thüringen', 'Nein', 'Nein', 'Keine gesetzliche Pflicht für Wohngebäude'],
            ['Schleswig-Holstein', 'Ja (Pflicht seit 2025)', 'Ja (Pflicht ab 2025/2026)', 'Mind. 30 % der geeigneten Dachfläche']
          ]
        }
      },
      {
        id: 'ausnahmen-wirtschaftlichkeit',
        heading: '2. Wann gilt eine Dachsanierung als „grundlegend“ und welche Ausnahmen gibt es?',
        paragraphs: [
          'Eine kleine Reparatur einzelner Dachziegel nach einem Sturm löst in keinem Bundesland die Solarpflicht aus. Erst wenn die wasserführende Schicht (Neueindeckung oder Abdichtung bei Flachdächern) auf einem wesentlichen Teil der Dachfläche erneuert wird, greift die Nachrüstpflicht.',
          'Ausnahmen bestehen überall dort, wo das Dach ausschließlich nach Norden geneigt ist, dauerhaft stark verschattet wird, unter Denkmalschutz steht oder die Installation technisch-statisch unzumutbar wäre.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Kann ich die Solarpflicht auch durch Solarthermie statt Photovoltaik erfüllen?',
        a: 'Ja, in nahezu allen Bundesländern (u. a. Baden-Württemberg, NRW, Berlin und Niedersachsen) wird eine solarthermische Anlage zur Warmwasserbereitung als gleichwertige Erfüllungsoption anerkannt; wirtschaftlich ist Photovoltaik durch den deutlich höheren Jahresertrag und die Kombinierbarkeit mit Wärmepumpen jedoch fast immer überlegen.'
      }
    ]
  },
  {
    slug: 'solaranlage-kaufen-oder-mieten-2026',
    category: 'Finanzvergleich & TCO',
    title: 'Solaranlage kaufen vs. mieten 2026: Der unabhängige 20-Jahre-Wirtschaftlichkeitsvergleich',
    metaTitle: 'Solaranlage kaufen oder mieten 2026? Kostenvergleich',
    metaDescription:
      'Lohnt sich das Mieten einer Solaranlage 2026 oder ist der Kauf (bzw. KfW-270-Kredit) günstiger? Vollkostenrechnung über 20 Jahre für 10 kWp mit 10 kWh Speicher.',
    updatedDate: '04. November 2026',
    readingTimeMin: 6,
    heroImage:
      '/images/solaranlage-kaufen-oder-mieten-2026.webp',
    heroAlt: 'Solaranlage kaufen oder mieten 2026 Finanzvergleich',
    blufSummary:
      'Über eine Laufzeit von 20 Jahren ist der Direktkauf einer 10-kWp-Photovoltaikanlage mit 10-kWh-Speicher (Anschaffung ca. 18.600 € inkl. 0 % MwSt., Gesamtkosten inkl. Wartung/Versicherung ca. 21.800 €) rund 17.800 € günstiger als ein typisches Mietmodell (monatlich ca. 165 € = 39.600 € Gesamtzahlung über 20 Jahre). Selbst wer kein Eigenkapital einsetzt und die Anlage zu 100 % über einen KfW-270- oder Hausbank-Solarkredit finanziert (Gesamtkosten inkl. Zinsen ca. 25.400 €), spart gegenüber der Miete rund 14.200 €.',
    svgDiagramTitle: '20-Jahre-Gesamtkosten (TCO): Direktkauf vs. Bankkredit vs. Mietmodell',
    svgDiagramCaption:
      'Abb. 5: Kumulierte Ausgaben über 20 Betriebsjahre für eine identische 10-kWp-Anlage mit 10-kWh-Speicher.',
    svgKeyLabels: [
      { label: '1. Direktkauf (Eigenkapital)', value: '21.800 € TCO', sub: '18.600 € Kaufpreis + 3.200 € Versicherung/Wartung (20 J.)' },
      { label: '2. Solarkredit (KfW 270 / Bank)', value: '25.400 € TCO', sub: '0 € Anzahlung · Volles Eigentum ab Tag 1' },
      { label: '3. Mietvertrag (240 Monate)', value: '39.600 € TCO', sub: '~165 €/Monat · Mehrkosten von +17.800 € gegenüber Kauf' }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Ihre persönliche Kauf-Rendite im PV-Rechner kalkulieren →',
    sections: [
      {
        id: 'vollkostenrechnung-tco',
        heading: '1. Die vollständige 20-Jahre-Rechnung: Kauf vs. Kredit vs. Miete',
        paragraphs: [
          'Mietanbieter werben häufig mit „0 Euro Anschaffungskosten“ und einem Rundum-Sorglos-Paket inklusive Wartung, Versicherung und eventuellem Speicher- oder Wechselrichtertausch. Um die tatsächliche Wirtschaftlichkeit objektiv zu beurteilen, müssen beim Direktkauf exakt dieselben Betriebs- und Rücklagekosten über 20 Jahre hinzugerechnet werden (Total Cost of Ownership, TCO):'
        ],
        table: {
          headers: ['Kostenblock (10 kWp + 10 kWh Speicher)', 'Direktkauf (0 % MwSt.)', '100-%-Finanzierung (Kredit)', 'Mietmodell (20 Jahre)'],
          rows: [
            ['Anschaffungspreis (Jahr 0)', '18.600 €', '0 € Eigenkapital (18.600 € Kredit)', '0 €'],
            ['Zinskosten (10 Jahre Laufzeit, ~4,4 %)', '0 €', 'ca. 3.600 €', 'In Mietrate eingepreist'],
            ['Versicherung, Smart Meter & Rücklage (20 J.)', 'ca. 3.200 €', 'ca. 3.200 €', 'Inklusive'],
            ['Summe aller Zahlungen (20 Jahre)', '21.800 €', '25.400 €', '39.600 € (bei 165 €/Monat)'],
            ['20-Jahre Netto-Vermögensvorteil', '+ 27.100 €', '+ 23.500 €', '+ 9.300 €']
          ]
        }
      },
      {
        id: 'warum-miete-teurer',
        heading: '2. Warum der frühere Steuervorteil von Mietmodellen seit § 12 Abs. 3 UStG entfallen ist',
        paragraphs: [
          'Bis Ende 2022 fiel auf den Kauf einer Solaranlage 19 % Umsatzsteuer an, während Mietmodelle teils steuerlich anders strukturiert wurden. Seit dem 1. Januar 2023 — und unverändert im Jahr 2026 — gilt nach § 12 Abs. 3 UStG auch beim Direktkauf von Anlage und Speicher sowie beim späteren Austausch defekter Komponenten ein Steuersatz von 0 % MwSt.',
          'Hinzu kommt ein wichtiger immobilienrechtlicher Aspekt: Viele Mietanbieter verlangen die Eintragung einer beschränkten persönlichen Dienstbarkeit im Grundbuch Ihres Hauses, was einen späteren Immobilienverkauf oder eine Anschlussfinanzierung verkomplizieren kann.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Für wen kann eine gemietete Solaranlage 2026 dennoch infrage kommen?',
        a: 'Lediglich für Eigentümer, die weder eigenes Kapital einsetzen noch ein Bankdarlehen aufnehmen möchten und bereit sind, für die Abgabe jeglicher Betreiberverantwortung über 20 Jahre einen Aufpreis von rund 14.000 bis 18.000 € zu zahlen.'
      }
    ]
  },
  {
    slug: 'photovoltaik-steuern-0-prozent-mwst',
    category: 'Steuerrecht & Bürokratie',
    title: 'Photovoltaik Steuern 2026: 0 % MwSt. (§ 12 Abs. 3 UStG) & Einkommensteuer (§ 3 Nr. 72 EStG)',
    metaTitle: 'Photovoltaik Steuern 2026: 0 % MwSt & Steuerbefreiung',
    metaDescription:
      'Steuerleitfaden 2026 für private Solaranlagen: Nullsteuersatz (0 % MwSt. nach § 12 Abs. 3 UStG), Einkommensteuerbefreiung (§ 3 Nr. 72 EStG) bis 30 kWp und Wegfall der EÜR.',
    updatedDate: '04. November 2026',
    readingTimeMin: 5,
    heroImage:
      '/images/photovoltaik-steuern-0-prozent-mwst-2026.webp',
    heroAlt: 'Photovoltaik Steuern 2026 Nullsteuersatz und Einkommensteuer',
    blufSummary:
      'Private Betreiber einer Photovoltaikanlage bis 30 kWp auf einem Einfamilienhaus (bzw. bis 15 kWp je Wohn-/Gewerbeeinheit bei Mehrfamilienhäusern, maximal 100 kWp pro Steuerpflichtigem) genießen auch 2026 völlige Steuerfreiheit: Beim Kauf und der Montage von Modulen, Wechselrichtern und Batteriespeichern gilt der Nullsteuersatz von 0 % Mehrwertsteuer (§ 12 Abs. 3 UStG). Gleichzeitig sind sämtliche Einnahmen aus der EEG-Einspeisevergütung und der Eigenverbrauch nach § 3 Nr. 72 EStG zu 100 % von der Einkommensteuer befreit — eine Anlage EÜR beim Finanzamt ist nicht mehr erforderlich.',
    svgDiagramTitle: 'Die zwei steuerlichen Freiheitsgrenzen für private PV-Anlagen 2026',
    svgDiagramCaption:
      'Abb. 6: Zusammenwirken von Umsatzsteuer-Nullsatz (§ 12 Abs. 3 UStG) und Einkommensteuerbefreiung (§ 3 Nr. 72 EStG).',
    svgKeyLabels: [
      { label: 'Umsatzsteuer (§ 12 Abs. 3 UStG)', value: '0 % MwSt. beim Kauf', sub: 'Gilt für Module, Speicher, HEMS, Zählerschrank & Montage' },
      { label: 'Einkommensteuer (§ 3 Nr. 72 EStG)', value: '0 € Steuer bis 30 kWp', sub: '15 kWp je Einheit bei MFH · Max. 100 kWp insgesamt' },
      { label: 'Finanzamt & Bürokratie', value: 'Keine EÜR nötig', sub: 'Kleinunternehmerregelung bleibt automatisch erhalten' }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Ihren 0-%-MwSt.-Preisvorteil im PV-Rechner berechnen →',
    sections: [
      {
        id: 'nullsteuersatz-12-ustg',
        heading: '1. Wann gilt der Nullsteuersatz von 0 % Mehrwertsteuer (§ 12 Abs. 3 UStG)?',
        paragraphs: [
          'Nach § 12 Abs. 3 des Umsatzsteuergesetzes (UStG) ermäßigt sich die Umsatzsteuer auf 0 %, wenn Solarmodule, wesentliche Komponenten (Wechselrichter, Dachhalterungen, Energiemanagementsysteme, Zählerschrank-Erweiterungen) sowie Batteriespeicher an den Betreiber einer Photovoltaikanlage geliefert und installiert werden, sofern die Anlage auf oder in der Nähe von Privatwohnungen, Wohnungen oder öffentlichen Gebäuden errichtet wird.',
          'Die Voraussetzungen gelten gesetzlich als pauschal erfüllt, wenn die installierte Bruttoleistung der Photovoltaikanlage laut Marktstammdatenregister (MaStR) nicht mehr als 30 Kilowatt-Peak (kWp) beträgt.'
        ],
        table: {
          headers: ['Leistung / Komponente', 'Steuersatz 2026 (§ 12 Abs. 3 UStG)', 'Ersparnis gegenüber 19 % Regelsteuersatz'],
          rows: [
            ['Solarmodule, Unterkonstruktion & Hybrid-WR', '0 % MwSt.', '19 % Direktabzug auf der Rechnung'],
            ['Batteriespeicher (Neukauf & Nachrüstung)', '0 % MwSt.', '19 % Direktabzug (auch bei Einzelkauf)'],
            ['Dachmontage, Gerüst & Zählerschrank-Umbau', '0 % MwSt.', '19 % Direktabzug bei schlüsselfertiger Vergabe'],
            ['Wallbox (separate Ladestation für E-Auto)', '19 % MwSt.', 'Gilt umsatzsteuerlich nicht als wesentliche PV-Komponente']
          ]
        }
      },
      {
        id: 'einkommensteuer-3-nr-72',
        heading: '2. Einkommensteuerbefreiung nach § 3 Nr. 72 EStG (Keine EÜR mehr nötig)',
        paragraphs: [
          'Gemäß § 3 Nr. 72 des Einkommensteuergesetzes (EStG) sind sämtliche Einnahmen und Entnahmen im Zusammenhang mit dem Betrieb von Photovoltaikanlagen bis 30 kWp auf Einfamilienhäusern (sowie Nebengebäuden wie Garagen und Carports) vollständig steuerfrei. Sie müssen weder die ausgezahlte EEG-Einspeisevergütung noch den geldwerten Vorteil des selbst verbrauchten Solarstroms in Ihrer Einkommensteuererklärung angeben.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Gilt 0 % MwSt. auch, wenn ich 2026 einen Batteriespeicher zu einer bestehenden Anlage nachrüste?',
        a: 'Ja, die Nachrüstung oder Erweiterung eines Batteriespeichers fällt ausdrücklich unter den Nullsteuersatz nach § 12 Abs. 3 Nr. 1 UStG.'
      }
    ]
  },
  {
    slug: 'stromspeicher-test-dimensionierung-2026',
    category: 'Speichertechnik & HTW Berlin',
    title: 'Stromspeicher-Test & Dimensionierung 2026: Erkenntnisse der HTW Berlin Stromspeicher-Inspektion',
    metaTitle: 'Stromspeicher Test 2026: HTW Inspektion & Dimensionierung',
    metaDescription:
      'Welche Batteriespeicher führen in der HTW Berlin Stromspeicher-Inspektion 2026? Vergleich von System Performance Index (SPI), Effizienzklasse A und optimaler Speichergröße.',
    updatedDate: '04. November 2026',
    readingTimeMin: 7,
    heroImage:
      '/images/stromspeicher-test-htw-berlin-2026.webp',
    heroAlt: 'Heimspeicher und Hybrid-Wechselrichter im HTW Berlin Effizienztest 2026',
    blufSummary:
      'Die unabhängige Stromspeicher-Inspektion der Hochschule für Technik und Wirtschaft (HTW) Berlin belegt für 2026: Zwischen einem Heimspeicher der höchsten Effizienzklasse A (System Performance Index SPI von 93 bis 95,5 %) und einem ineffizienten System der Klasse C (SPI um 82 %) liegen jährliche Umwandlungs- und Standby-Verluste von 500 bis 850 kWh — das entspricht einem finanziellen Verlust von bis zu 180 € pro Jahr bzw. über 3.000 € in 20 Jahren. Für ein Einfamilienhaus mit 4.500 kWh Jahresverbrauch und 10-kWp-Dachanlage liegt die optimale Speicherkapazität bei 8 bis 10 kWh.',
    svgDiagramTitle: 'HTW Berlin System Performance Index (SPI): Effizienzklasse A vs. Marktdurchschnitt',
    svgDiagramCaption:
      'Abb. 7: Einfluss von Umwandlungswirkungsgrad, Teillastverhalten und Standby-Verbrauch auf den Jahresertrag.',
    svgKeyLabels: [
      { label: 'Effizienzklasse A (SPI ≥ 93 %)', value: 'Top DC-Hybridsysteme', sub: 'Fronius Reserva/GEN24, Kostal+BYD, SMA, Fox ESS, SAX Power' },
      { label: 'Teillast-Wirkungsgrad (Nacht)', value: '100 – 300 W Hauslast', sub: 'Entscheidend für geringen Entladeverlust in der Nacht' },
      { label: 'Goldene Dimensionierungsregel', value: '1 kWp : 1 kWh Speicher', sub: 'Sichert 200 bis 250 wirtschaftliche Vollzyklen pro Jahr' }
    ],
    relatedToolHref: '/speicher-rechner',
    relatedToolLabel: 'Ihre optimale Speichergröße im Stromspeicher-Rechner berechnen →',
    sections: [
      {
        id: 'htw-berlin-spi-erklaert',
        heading: '1. Warum der System Performance Index (SPI) der HTW Berlin wichtiger ist als das Datenblatt',
        paragraphs: [
          'Hersteller werben auf Datenblättern häufig mit maximalen Batteriewirkungsgraden von 97 oder 98 %. In der Praxis eines Einfamilienhauses arbeitet ein Heimspeicher nachts jedoch meist im unteren Teillastbereich von lediglich 120 bis 280 Watt (Kühlschrank, Router, Heizungspumpe, Standby).',
          'Die Stromspeicher-Inspektion der HTW Berlin (in Kooperation mit aquu) bewertet das Gesamtsystem aus Wechselrichter, Batterie und Regelung anhand des System Performance Index (SPI) in den Referenzklassen 5 kW und 10 kW. In der 10-kW-Klasse erreichen DC-gekoppelte Hybridsysteme führender Hersteller wie Kostal (mit BYD Battery-Box), Fronius (GEN24 Plus mit Reserva bzw. BYD) und Fox ESS sowie in der 5-kW-Klasse SMA und SAX Power die Bestnote Effizienzklasse A.'
        ],
        table: {
          headers: ['HTW-Effizienzklasse', 'System Performance Index (SPI 10 kW)', 'Jährlicher Umwandlungsverlust', 'Mehrkosten über 15 Jahre'],
          rows: [
            ['Effizienzklasse A (Spitzengruppe)', '93,0 % bis 95,5 %', 'ca. 280 – 360 kWh / Jahr', 'Referenz (0 € Verlust)'],
            ['Effizienzklasse B (Solides Mittelfeld)', '89,0 % bis 92,9 %', 'ca. 480 – 620 kWh / Jahr', 'ca. − 950 € bis − 1.400 €'],
            ['Effizienzklasse C/D (Hoher Eigenverbrauch)', '81,0 % bis 88,9 %', 'ca. 750 – 1.050 kWh / Jahr', 'ca. − 2.100 € bis − 3.200 €']
          ]
        }
      },
      {
        id: 'richtige-speichergroesse',
        heading: '2. Wie groß sollte der Stromspeicher 2026 dimensioniert werden?',
        paragraphs: [
          'Ein zu kleiner Speicher ist an sonnigen Tagen bereits um 11 Uhr vormittags voll und reicht abends nur bis 22 Uhr; ein stark überdimensionierter Speicher wird von November bis Februar nicht voll und verursacht unnötige Kapitalkosten. Die folgende Matrix zeigt die optimale Abstimmung zwischen Jahresstromverbrauch, PV-Leistung und nutzbarer Speicherkapazität:'
        ],
        table: {
          headers: ['Jahresstromverbrauch', 'Empfohlene PV-Leistung', 'Optimale Speicherkapazität (LFP)', 'Erreichbarer Autarkiegrad'],
          rows: [
            ['2.500 – 3.200 kWh (2 Personen)', '5 bis 7 kWp', '5 bis 6 kWh', '68 – 74 %'],
            ['4.000 – 5.000 kWh (Familie 3–4 P.)', '8 bis 11 kWp', '8 bis 10 kWh', '72 – 78 %'],
            ['6.000 – 7.500 kWh (Haus + Wärmepumpe)', '12 bis 15 kWp', '10 bis 13 kWh', '69 – 76 %'],
            ['8.000 – 10.500 kWh (Haus + WP + E-Auto)', '15 bis 20 kWp', '13 bis 16 kWh', '71 – 80 %']
          ]
        }
      }
    ],
    faqs: [
      {
        q: 'Welcher Wirkungsgrad ist nötig, um im Winter günstigen Börsenstrom in den Speicher zu laden?',
        a: 'Laut Analyse der HTW Berlin muss der gesamte Systemwirkungsgrad beim Laden aus dem Stromnetz und Wiederentladen ins Haus mindestens über 71 % (ideal > 82 %) liegen, damit die Preisdifferenz dynamischer Stromtarife die Umwandlungsverluste wirtschaftlich übertrifft.'
      }
    ]
  },
  {
    slug: 'photovoltaik-waermepumpe-kombinieren-14a-enwg',
    category: 'Sektorenkopplung & § 14a EnWG',
    title: 'Photovoltaik mit Wärmepumpe & Wallbox kombinieren: SG-Ready & § 14a EnWG Netzentgelte',
    metaTitle: 'Photovoltaik & Wärmepumpe 2026: § 14a EnWG & Optimierung',
    metaDescription:
      'So kombinieren Sie Photovoltaik, Wärmepumpe (SG-Ready) und Wallbox optimal: Eigenverbrauch bis 82 % steigern und bis zu 190 €/Jahr Netzentgelte nach § 14a EnWG (Modul 1–3) sparen.',
    updatedDate: '04. November 2026',
    readingTimeMin: 6,
    heroImage:
      '/images/photovoltaik-waermepumpe-14a-enwg-2026.webp',
    heroAlt: 'Kombination aus Photovoltaikanlage, Wärmepumpe und Wallbox nach § 14a EnWG',
    blufSummary:
      'Die Kopplung einer 12- bis 15-kWp-Photovoltaikanlage mit einer SG-Ready-Wärmepumpe und einer überschussgesteuerten Wallbox senkt die jährlichen Heiz- und Mobilitätskosten eines Einfamilienhauses um bis zu 65 %. Zusätzlich erhalten Haushalte nach § 14a EnWG für steuerbare Verbrauchseinrichtungen (> 4,2 kW) reduzierte Netzentgelte: Wahlweise als pauschale Gutschrift von 110 bis 190 € pro Jahr (Modul 1), als 60-%-Rabatt auf den Netzarbeitspreis über einen zweiten Zähler (Modul 2) oder über zeitvariable Netzentgelte (Modul 3).',
    svgDiagramTitle: 'Kaskadensteuerung im Smart Home: PV-Überschuss & § 14a EnWG',
    svgDiagramCaption:
      'Abb. 8: Optimale Priorisierung des Solarstroms im Energiemanagementsystem (HEMS).',
    svgKeyLabels: [
      { label: 'Priorität 1: Haushalt & Speicher', value: '36,8 ct/kWh Substitution', sub: 'Deckt Direktverbrauch und lädt LFP-Heimspeicher' },
      { label: 'Priorität 2: Wallbox (PV-Überschuss)', value: '1,4 bis 11 kW dynamisch', sub: '1-phasig/3-phasig Umschaltung lädt E-Auto für ~7,7 ct/kWh' },
      { label: 'Priorität 3: Wärmepumpe (SG-Ready)', value: 'Thermischer Pufferspeicher', sub: 'Erhöht Warmwasser- & Vorlauftemperatur bei Mittagssonne' }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Kombi-Szenario (Haus + Wärmepumpe + E-Auto) im PV-Rechner testen →',
    sections: [
      {
        id: 'sg-ready-waermepumpe',
        heading: '1. Wie viel Solarstrom deckt eine Wärmepumpe im Sommer und im Winter ab?',
        paragraphs: [
          'Zwischen März und Oktober kann eine ausreichend dimensionierte Photovoltaikanlage (ab 10 bis 15 kWp) den Strombedarf der Wärmepumpe für die Warmwasserbereitung und die Übergangsheizung zu 70 bis 95 % direkt abdecken. Über die SG-Ready-Schnittstelle (bzw. EEBUS / Modbus TCP) gibt der Wechselrichter bei Solarüberschuss am Mittag den Befehl, den Warmwasser- und Heizungspufferspeicher um 3 bis 5 Kelvin höher aufzuheizen — das Haus nutzt den Estrich und den Wassertank als kostenlosen thermischen Speicher für die Nacht.',
          'Über das gesamte Kalenderjahr (inklusive der sonnenarmen Monate Dezember und Januar) erreicht eine Kombination aus 15-kWp-PV-Anlage, 12-kWh-Batteriespeicher und Wärmepumpe eine solare Deckungsrate des Wärmepumpenstroms von real 38 bis 48 %.'
        ]
      },
      {
        id: 'enwg-14a-module',
        heading: '2. § 14a EnWG im Jahr 2026: Welches Modul (1, 2 oder 3) lohnt sich für wen?',
        paragraphs: [
          'Jede neu installierte Wärmepumpe, Wallbox und jeder größere Stromspeicher (> 4,2 kW Netzbezugsleistung) fällt unter § 14a des Energiewirtschaftsgesetzes (EnWG). Im Gegenzug für die netzdienliche Steuerbarkeit durch den Verteilnetzbetreiber haben Sie Anspruch auf reduzierte Netzentgelte in drei wählbaren Modulen:'
        ],
        table: {
          headers: ['§ 14a EnWG Modul', 'Funktionsweise & Zähleranforderung', 'Typische Ersparnis pro Jahr', 'Ideal geeignet für...'],
          rows: [
            ['Modul 1 (Pauschalrabatt)', 'Nur 1 gemeinsamer Zähler für Haus, PV, Speicher & WP/Wallbox nötig', '110 € bis 190 € / Jahr pauschal', 'Häuser mit PV-Anlage + Speicher + Wallbox (kein 2. Zähler nötig!)'],
            ['Modul 2 (Prozentual -60 %)', 'Separater 2. Zähler (oder Kaskadenmessung) für WP/Wallbox Pflicht', 'ca. 180 € bis 340 € / Jahr', 'Hoher Wärmepumpen-Netzbezug (> 4.500 kWh) ohne eigene PV'],
            ['Modul 3 (Zeitvariabel, Zusatz zu Modul 1)', 'Intelligentes Messsystem (iMSys) mit 3 Tarifzeitfenstern pro Tag', 'Zusätzlich 80 € bis 160 € / Jahr', 'Haushalte mit PV-Speicher, E-Auto & dynamischem Stromtarif']
          ]
        }
      }
    ],
    faqs: [
      {
        q: 'Brauche ich für Photovoltaik und Wärmepumpe zwei getrennte Stromzähler?',
        a: 'Mit einer großen PV-Anlage und Heimspeicher ist in den meisten Fällen ein einziger Zweirichtungszähler in Kombination mit Modul 1 nach § 14a EnWG (110–190 € Pauschalprämie) günstiger und unkomplizierter als ein zweiter Wärmepumpenzähler mit doppelter Grundgebühr. Alternativ ermöglicht eine Kaskadenmessung beides.'
      }
    ]
  },
  {
    slug: 'balkonkraftwerk-2026-speicher-800w-2000w',
    category: 'Steckersolar & VDE-Norm',
    title: 'Balkonkraftwerk 2026 mit Speicher: 800W / 2000W Regeln (Solarpaket I) & VDE-Norm',
    metaTitle: 'Balkonkraftwerk 2026 mit Speicher: 800W & 2000Wp Norm',
    metaDescription:
      'Balkonkraftwerk 2026 Ratgeber: 2.000 Watt Modulleistung, 800 Watt Wechselrichter (Solarpaket I), Produktnorm DIN VDE V 0126-95, 2-kWh-Speicher und Anmeldung im MaStR.',
    updatedDate: '04. November 2026',
    readingTimeMin: 6,
    heroImage:
      '/images/balkonkraftwerk-2000w-speicher-vde-2026.webp',
    heroAlt: 'Balkonkraftwerk 2000 Watt mit 800 Watt Wechselrichter und 2 kWh Speicher 2026',
    blufSummary:
      'Für Steckersolargeräte (Balkonkraftwerke) gelten 2026 im Rahmen des Solarpakets I vereinfachte Regeln: Erlaubt sind bis zu 2.000 Watt installierte Solarmodulleistung (z. B. 4 Module à 500 Wp) an einem Wechselrichter mit maximal 800 Watt (800 VA) Ausgangsleistung. Die Anmeldung erfolgt in nur 5 Minuten online im Marktstammdatenregister (MaStR); eine separate Meldung beim Netzbetreiber entfällt. In Kombination mit einem kompakten 2-kWh-Balkonspeicher steigt der Eigenverbrauch von ca. 45 % auf über 80 %.',
    svgDiagramTitle: 'Rechtliche & Technische Grenzen für Steckersolargeräte 2026 (Solarpaket I)',
    svgDiagramCaption:
      'Abb. 9: Zusammenspiel aus 2.000 Wp Modulleistung, 2-kWh-DC-Speicher und 800 VA Wechselrichtergrenze.',
    svgKeyLabels: [
      { label: 'Maximale Modulleistung (EEG)', value: 'Bis 2.000 Wp erlaubt', sub: 'Beachten Sie die VDE-Empfehlung DIN VDE V 0126-95 für Schuko' },
      { label: 'Wechselrichter-Ausgang (AC)', value: 'Max. 800 Watt (VA)', sub: 'Direkte Einspeisung in den Endstromkreis der Wohnung' },
      { label: 'Balkonkraftwerk-Speicher', value: '1,6 bis 3,2 kWh LFP', sub: 'Speichert Mittagsüberschuss für die abendliche Grundlast' }
    ],
    relatedToolHref: '/foerderung-check',
    relatedToolLabel: 'Kommunale Balkonkraftwerk-Zuschüsse Ihrer Stadt im PLZ-Check prüfen →',
    sections: [
      {
        id: 'regeln-800w-2000w-vde',
        heading: '1. Gesetzliche 2.000-Watt-Grenze (EEG) vs. VDE-Produktnorm (DIN VDE V 0126-95)',
        paragraphs: [
          'Beim Kauf eines Balkonkraftwerks im Jahr 2026 muss zwischen dem Gesetz (EEG / Solarpaket I) und der technischen Sicherheitsnorm des VDE (DIN VDE V 0126-95) unterschieden werden: Gesetzlich sind im EEG bis zu 2.000 Watt Modulleistung und 800 Watt Wechselrichterleistung für die vereinfachte Anmeldung im Marktstammdatenregister freigegeben.',
          'Die Produktnorm DIN VDE V 0126-95 empfiehlt für den Betrieb an einer herkömmlichen Haushalts-Schukosteckdose ohne speziellen Energiestecker eine Modulleistung von bis zu 960 Watt. Wer vier Module mit zusammen 1.800 bis 2.000 Watt installiert, sollte diese zwingend über einen dazwischengeschalteten Balkonkraftwerk-Speicher (DC-Puffer) betreiben, der die Abgabe an den Wechselrichter kontinuierlich regelt, und die Herstellerzertifizierung beachten.'
        ],
        table: {
          headers: ['Konfiguration (Süd / West)', 'Anschaffungspreis 2026 (0% MwSt)', 'Jahresertrag (DE)', 'Eigenverbrauch im Haushalt', 'Jährliche Stromersparnis'],
          rows: [
            ['800 Wp (2 Module, ohne Speicher)', 'ca. 290 € – 420 €', '720 – 860 kWh', 'ca. 500 kWh (62 %)', 'ca. 185 € / Jahr (Amortisation ~2 J.)'],
            ['1.600 – 2.000 Wp (4 Module, ohne Speicher)', 'ca. 550 € – 750 €', '1.400 – 1.750 kWh', 'ca. 680 kWh (42 %)', 'ca. 250 € / Jahr'],
            ['1.800 Wp + 2-kWh-LFP-Speicher (Smart Meter)', 'ca. 1.050 € – 1.390 €', '1.500 – 1.750 kWh', 'ca. 1.280 kWh (80 %)', 'ca. 470 € / Jahr (Amortisation ~2,7 J.)']
          ]
        }
      },
      {
        id: 'mietrecht-privilegierung',
        heading: '2. Recht auf Balkonkraftwerk für Mieter & Wohnungseigentümer (§ 554 BGB / WEG)',
        paragraphs: [
          'Steckersolargeräte sind im Bürgerlichen Gesetzbuch (§ 554 BGB) und im Wohnungseigentumsgesetz (§ 20 Abs. 2 WEG) als privilegierte bauliche Maßnahme eingestuft. Vermieter und Eigentümergemeinschaften dürfen die Montage am Balkon nicht mehr pauschal ablehnen, sondern nur noch sachgerechte Vorgaben zur absturzsicheren Befestigung machen.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Muss ich mein Balkonkraftwerk 2026 noch beim Netzbetreiber (Stadtwerke) anmelden?',
        a: 'Nein. Seit dem Solarpaket I reicht die alleinige Online-Registrierung im Marktstammdatenregister (MaStR) der Bundesnetzagentur innerhalb eines Monats nach Inbetriebnahme vollkommen aus; die Bundesnetzagentur informiert den Netzbetreiber automatisch.'
      }
    ]
  },
  {
    slug: 'dynamische-stromtarife-smart-meter-photovoltaik-2026',
    category: 'Smart Meter & Börsenstrom',
    title: 'Dynamische Stromtarife & Smart-Meter-Pflicht (iMSys) 2026: Lohnt das Netz-Laden im Winter?',
    metaTitle: 'Dynamische Stromtarife & Photovoltaik 2026: Smart Meter',
    metaDescription:
      'Lohnt sich ein dynamischer Stromtarif (Tibber, Octopus, Awattar) mit PV-Anlage und Speicher 2026? Smart-Meter-Pflicht (iMSys), Preisobergrenzen & Winter-Netzladen.',
    updatedDate: '04. November 2026',
    readingTimeMin: 6,
    heroImage:
      '/images/dynamische-stromtarife-smart-meter-imsys-2026.webp',
    heroAlt: 'Dynamischer Stromtarif mit Smart Meter und Photovoltaik Speicher im Winter',
    blufSummary:
      'Ab 2025/2026 ist jeder Stromlieferant in Deutschland gesetzlich verpflichtet, einen dynamischen Stromtarif anzubieten; gleichzeitig läuft der verpflichtende Rollout intelligenter Messsysteme (Smart Meter / iMSys) für alle Haushalte mit einer PV-Anlage über 7 kWp, einem Stromverbrauch über 6.000 kWh oder einer steuerbaren Einrichtung nach § 14a EnWG. Ein dynamischer Börsentarif lohnt sich mit PV-Speicher vor allem dann, wenn im Winterhalbjahr zusätzlich ein Elektroauto oder eine Wärmepumpe vorhanden ist und der Speicher-Wirkungsgrad über 71 % liegt.',
    svgDiagramTitle: 'Wirtschaftlichkeit des Winter-Netzladens mit dynamischem Tarif & § 14a Modul 3',
    svgDiagramCaption:
      'Abb. 10: Wann sich das Zwischenspeichern von günstigem Nacht-Windstrom im Heimspeicher rechnet.',
    svgKeyLabels: [
      { label: 'Smart-Meter-Pflicht (iMSys)', value: 'Ab 7 kWp PV / § 14a EnWG', sub: 'Viertelstündliche Messung als Basis für dynamische Tarife' },
      { label: 'Mindest-Systemwirkungsgrad', value: '> 71 % (HTW Berlin)', sub: 'Darunter fressen Umwandlungsverluste den Börsenpreisvorteil auf' },
      { label: 'Kombination mit § 14a Modul 3', value: 'Zeitvariable Netzentgelte', sub: 'Senkt nachts sowohl Börsenpreis als auch Netzentgelt' }
    ],
    relatedToolHref: '/speicher-rechner',
    relatedToolLabel: 'Speicher-Effizienz und § 14a EnWG Vorteil im Speicher-Rechner prüfen →',
    sections: [
      {
        id: 'smart-meter-pflicht-2026',
        heading: '1. Wer bekommt 2026 verpflichtend ein Smart Meter (iMSys) und was kostet es?',
        paragraphs: [
          'Nach dem Messstellenbetriebsgesetz (MsbG) werden intelligente Messsysteme (bestehend aus digitalem Zweirichtungszähler und zertifiziertem Smart-Meter-Gateway) verpflichtend bei allen Anlagenbetreibern ab 7 kWp installierter PV-Leistung sowie bei allen Haushalten mit Wärmepumpe oder Wallbox nach § 14a EnWG eingebaut. Zudem haben alle Haushalte das Recht, den vorzeitigen Einbau eines Smart Meters bei ihrem Messstellenbetreiber aktiv anzufordern.',
          'Für den Verbraucher bleibt ein wichtiger Stolperstein zu beachten: Während ein normaler Haushalt zwischen März und Oktober dank Photovoltaikanlage und Speicher zu 80 bis 95 % autark ist, fällt fast der gesamte restliche Netzstrombezug in die dunklen Wintermonate November bis Februar. Ohne Elektroauto oder Wärmepumpe ist daher ein günstiger Festpreistarif für den geringen Reststrombezug oft kalkulierbarer als ein reiner Börsentarif.'
        ],
        table: {
          headers: ['Haushaltstyp mit 10 kWp PV + 10 kWh Speicher', 'Rest-Netzbezug pro Jahr (Nov–Feb)', 'Beste Tarifstrategie 2026', 'Geschätzter Vorteil durch dynamischen Tarif'],
          rows: [
            ['Klassischer Haushalt (ohne WP / ohne E-Auto)', 'ca. 900 – 1.200 kWh', 'Günstiger Festpreistarif mit niedriger Grundgebühr', 'Gering (ca. 0 bis 45 € / Jahr)'],
            ['Haushalt mit Elektroauto (Wallbox)', 'ca. 2.200 – 3.500 kWh', 'Dynamischer Tarif + § 14a Modul 1/3 (Nachtladen)', 'Hoch (+ 180 bis 320 € / Jahr)'],
            ['Haushalt mit Wärmepumpe + E-Auto', 'ca. 3.800 – 5.500 kWh', 'Dynamischer Tarif + § 14a Modul 3 + HEMS', 'Sehr hoch (+ 260 bis 480 € / Jahr)']
          ]
        }
      },
      {
        id: 'winter-netzladen-htw',
        heading: '2. Lohnt es sich, den Heimspeicher im Winter nachts mit Börsenstrom vollzuladen?',
        paragraphs: [
          'Wenn in stürmischen Winternächten viel Windstrom im deutschen Netz ist, sinkt der Börsenstrompreis inklusive Abgaben und zeitvariablem Netzentgelt (§ 14a Modul 3) häufig auf 16 bis 20 ct/kWh, während der Strom am darauffolgenden Abend 34 bis 38 ct/kWh kostet. Damit sich das Einspeichern dieses Netzstroms im Heimspeicher rechnet, muss die Preisdifferenz größer sein als die rund 10 bis 18 % Umwandlungsverluste beim Laden und Entladen (AC → DC → AC). Systeme der HTW-Effizienzklasse A meistern dies problemlos.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Kann ich ein Smart Meter auch selbst verlangen, wenn mein Netzbetreiber noch wartet?',
        a: 'Ja, nach dem Gesetz zum Neustart der Digitalisierung der Energiewende (GNDEW / MsbG) hat jeder Anschlussnutzer Anspruch auf den Einbau eines intelligenten Messsystems innerhalb von vier Monaten ab Bestellung beim grundzuständigen Messstellenbetreiber.'
      }
    ]
  },
  {
    slug: 'solarthermie-durch-photovoltaik-ersetzen-waermepumpe',
    category: 'Sektorenkopplung & Sanierung',
    title: 'Solarthermie durch Photovoltaik ersetzen 2026: Kosten, Wärmepumpen-Kopplung & Winterertrag im Vergleich',
    metaTitle: 'Solarthermie durch Photovoltaik ersetzen: Kosten & WP 2026',
    metaDescription:
      'Alte Solarthermie abbauen und durch Photovoltaik ersetzen? Ingenieur-Vergleich 2026: Flächenertrag pro m², Wärmepumpe, Rückbaukosten, Brauchwasser-WP & 0 % MwSt.',
    updatedDate: '11. November 2026',
    readingTimeMin: 9,
    heroImage: '/images/solarthermie-ersetzen-photovoltaik-2026.webp',
    heroAlt: 'Solarthermie durch moderne Photovoltaik Module ersetzen in Kombination mit Wärmepumpe',
    blufSummary:
      'Der Rückbau einer 15 bis 25 Jahre alten Solarthermie-Anlage zugunsten moderner N-Type-Photovoltaikmodule (450–460 Wp) ist 2026 energetisch und wirtschaftlich fast immer überlegen: Auf derselben Dachfläche von 10 m² (ca. 5 Module = 2,25 kWp) erzeugt Photovoltaik in Kombination mit einer Wärmepumpe oder Brauchwasser-Wärmepumpe (COP 3,2–4,0) über das Gesamtjahr bis zu 2,5-mal mehr nutzbare Wärmeäquivalente als ein alter thermischer Kollektor — ohne Stagnationsprobleme im Hochsommer, ohne Pumpenstrom-Dauerverbrauch und mit voller 0-%-Mehrwertsteuer-Begünstigung (§ 12 Abs. 3 UStG) auch auf den Rückbau im Zuge der PV-Montage.',
    svgDiagramTitle: 'Flächen- & Systemvergleich: 10 m² Solarthermie vs. 10 m² Photovoltaik + Wärmepumpe',
    svgDiagramCaption:
      'Abb. 11: Warum 10 m² PV-Module über eine Wärmepumpe (JAZ 3,5) mehr Nutzenergie liefern und im Sommer keinen Überschuss-Stillstand erleiden.',
    svgKeyLabels: [
      { label: '10 m² Solarthermie (Bestand)', value: '~ 3.200 kWh Wärme/Jahr', sub: 'Davon > 60 % ungenutzter Sommer-Überschuss (Stagnation ab 110 °C)' },
      { label: '10 m² Photovoltaik (2,25 kWp)', value: '~ 2.300 kWh Strom/Jahr', sub: 'Via Wärmepumpe (COP 3,5) = ca. 8.050 kWh Wärmeäquivalent oder Direktverbrauch' },
      { label: 'Rückbau & Dachverschluss', value: '650 – 1.400 € (0 % MwSt.)', sub: 'Entleerung Glykol, Demontage Kollektoren & Ziegel-Eindeckung mit PV-Gerüst' }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Zusätzlichen PV-Ertrag auf Ihrer freiwerdenden Dachfläche berechnen →',
    sections: [
      {
        id: 'flaechenertrag-solarthermie-vs-pv',
        heading: '1. Energetischer Systemvergleich: 1 m² Solarthermie vs. 1 m² Photovoltaik mit Wärmepumpe',
        paragraphs: [
          'In den 1990er- und 2000er-Jahren galt Solarthermie als Standardlösung zur Warmwasserbereitung, weil damalige Photovoltaikmodule nur Wirkungsgrade von 12 bis 14 % erreichten und sehr teuer waren. Im Jahr 2026 hat sich dieses Verhältnis physikalisch und ökonomisch umgekehrt: Moderne N-Type-TOPCon- oder HJT-Glas-Glas-Module erreichen Modulwirkungsgrade von 22,5 bis 23,2 % und reagieren bereits auf schwaches diffuses Streulicht an bewölkten Herbst- und Wintertagen sofort mit elektrischer Leistungsabgabe.',
          'Ein thermischer Flach- oder Röhrenkollektor muss dagegen im Winter erst die Differenztemperatur zum Warmwasserspeicher überwinden (z. B. über 45 °C Vorlauftemperatur), bevor die Umwälzpumpe überhaupt einschalten kann. Scheint im November oder Januar die Sonne nur schwach, erreicht der Kollektor auf dem Dach zwar 28 °C, liefert aber exakt 0 kWh nutzbare Wärme in den Pufferspeicher — während die Photovoltaikanlage jede einzelne Wattstunde verlustfrei in den Haushalt oder die Wärmepumpe einspeist.',
          'Hinzu kommt das Sommer-Paradoxon der Solarthermie: Sobald der 300-Liter-Warmwasserspeicher im Juni um 11:00 Uhr vormittags auf 80 °C aufgeheizt ist, geht die Solarthermieanlage in den thermischen Stillstand (Stagnation bei 120–160 °C), wodurch die Solarflüssigkeit (Propylenglykol) altert und verklumpt. Eine Photovoltaikanlage nutzt dagegen jede Sonnenstunde des Sommers produktiv: für Klimaanlage, Elektroauto, Haushaltsstrom, Batteriespeicher oder die gesetzlich garantierte EEG-Einspeisevergütung von 7,70 ct/kWh.'
        ],
        table: {
          headers: ['Bewertungskriterium (Referenzfläche 10 m² = ca. 5 PV-Module)', 'Alte Solarthermie (Flach-/Röhrenkollektor)', 'Moderne Photovoltaik (2,25 kWp) + Wärmepumpe'],
          rows: [
            ['Installierte Leistung auf 10 m² Dachfläche', 'ca. 6,5 kWth (thermische Spitzenleistung)', '2,25 kWp elektrisch (5 × 450 Wp Glas-Glas)'],
            ['Nutzbarer Jahresertrag im Einfamilienhaus', 'ca. 2.200 – 3.400 kWh Wärme (Rest: Sommer-Stagnation)', 'ca. 2.250 – 2.500 kWh Strom (100 % nutzbar / einspeisbar)'],
            ['Wärmeäquivalent über Wärmepumpe (COP / JAZ 3,5)', 'ca. 2.200 – 3.400 kWh thermisch', 'ca. 7.800 – 8.750 kWh thermisch (oder Direktstrom)'],
            ['Verhalten bei diffusem Winterlicht (Nov–Feb, 5 °C)', 'Meist 0 kWh (Kollektor zu kalt für Speicherladung)', 'Kontinuierliche Stromerzeugung ab 30 W/m² Einstrahlung'],
            ['Laufende Wartung & Hilfsstromkosten', '80–150 €/Jahr (Pumpenstrom, Glykol-Tausch, Membran)', '0 €/Jahr (wartungsfrei, keine beweglichen Teile)'],
            ['Sommer-Überschussverwertung', 'Keine (thermischer Stillstand / Überhitzung)', 'Haushaltsstrom, E-Auto, Klimagerät oder 7,70 ct/kWh EEG']
          ]
        }
      },
      {
        id: 'kosten-rueckbau-0-prozent-mwst',
        heading: '2. Was kostet der Rückbau der alten Solarthermie und gilt der 0 % MwSt.-Satz?',
        paragraphs: [
          'Wenn das Baugerüst für die Montage einer neuen Photovoltaikanlage ohnehin gestellt wird, sind die Zusatzkosten für die Demontage einer bestehenden Solarthermieanlage überraschend gering. Das Solarteur-Team lässt zunächst die Solarflüssigkeit fachgerecht ab, demontiert die 2 bis 5 Kollektoren samt Dachhaken, verschließt die beiden Rohrdurchführungen in der Dachhaut luft- und regendicht und deckt die Fehlstellen mit vorhandenen Reserveziegeln ein.',
          'Steuerlicher entscheidender Vorteil nach dem BMF-Anwendungsschreiben zu § 12 Abs. 3 UStG: Wird die Demontage der Altanlage als unselbstständige Nebenleistung im unmittelbaren Zusammenhang mit der Lieferung und Installation der neuen Photovoltaikanlage durch denselben Fachbetrieb ausgeführt, unterliegt auch der Rückbau dem Nullsteuersatz von 0 % Mehrwertsteuer.'
        ],
        bullets: [
          '<strong>Typische Rückbaukosten im Zuge der PV-Installation:</strong> Für eine Standard-Warmwasser-Solarthermie (2 bis 3 Kollektoren, ca. 5–7 m²) berechnen Fachbetriebe bei vorhandenem PV-Gerüst pauschal zwischen <strong>650 € und 1.150 € (0 % MwSt.)</strong> inklusive fachgerechter Glykol-Entsorgung.',
          '<strong>Weiternutzung des alten Rohrleitungsschachts (Steigleitung):</strong> Die gedämmten Vor- und Rücklaufleitungen vom Dach in den Heizungskeller müssen nicht aus der Wand gestemmt werden. Nach dem Entleeren eignen sich der bestehende Versorgungsschacht oder das Leerrohr hervorragend zur sauberen Verlegung der neuen DC-Solarkabel (6 mm²) und des Potentialausgleichsleiters (16 mm² Cu) vom Dach zum Wechselrichter im Keller.',
          '<strong>Homogene Dachoptik & ungestörte String-Planung:</strong> Da Solarthermie-Kollektoren fast immer auf der besten, unverschatteten Südfläche mitten im Dach sitzen, verhindert ihr Erhalt oft eine durchgehende, optisch ruhige Full-Black-Modulanordnung und zwingt zu gestückelten kurzen Modulstrings.'
        ]
      },
      {
        id: 'warmwasser-alternativen-bwwp-heizstab',
        heading: '3. Wie wird das Warmwasser nach dem Abbau der Solarthermie im Sommer erzeugt?',
        paragraphs: [
          'Hausbesitzer, die noch eine funktionierende Gas- oder Ölheizung (oder einen Pelletkessel) besitzen, befürchten beim Abbau der Solarthermie oft, dass der Heizkessel im Sommer wieder für die reine Warmwasserbereitung takten muss. Für dieses Szenario gibt es 2026 drei technisch ausgereifte Lösungen, die den Solarstrom vom Dach optimal nutzen:'
        ],
        table: {
          headers: ['Technische Lösung für Warmwasser mit PV', 'Investitionskosten (inkl. 0 % / Förderung)', 'Wirkungsgrad (COP)', 'Ideales Einsatzszenario im Bestandsbau'],
          rows: [
            ['1. Vorhandene / neue Heizungs-Wärmepumpe (SG-Ready)', '0 € Zusatzkosten (über HEMS / Modbus gesteuert)', 'COP 3,2 – 4,2 im Sommer', 'Beste Lösung bei Wärmepumpen-Heizung (Überhöhung mittags auf 55 °C)'],
            ['2. Brauchwasser-Wärmepumpe (BWWP, 250–300 L)', 'ca. 2.400 – 3.600 € inkl. Einbau', 'COP 3,0 – 3,6 (Kellerluft)', 'Ideal bei bestehender Gas-/Öl-/Pelletheizung (Kessel bleibt von April–Okt komplett aus)'],
            ['3. Stufenloser PV-Heizstab (z. B. my-PV / Fronius Ohmpilot)', 'ca. 650 – 1.100 € inkl. Einbau im Pufferspeicher', 'COP 1,0 (1 kWh Strom = 1 kWh Wärme)', 'Günstigste Nachrüstung bei großem PV-Überschuss (> 12 kWp) und vorhandenem Speicher']
          ]
        }
      },
      {
        id: 'wann-solarthermie-behalten',
        heading: '4. Entscheidungsmatrix: In welchen Ausnahmefällen sollte die Solarthermie auf dem Dach bleiben?',
        paragraphs: [
          'Trotz der klaren Systemvorteile der Photovoltaik gibt es zwei klar abgegrenzte Ausnahmen, in denen ein sofortiger Abriss der Solarthermie wirtschaftlich nicht zwingend ist:',
          'Erstens: Wenn das Hausdach so groß ist (z. B. über 90 m² freie Fläche), dass bereits ohne die Solarthermie-Fläche eine große Photovoltaikanlage von 15 bis 20 kWp problemlos Platz findet, und die Solarthermie erst <strong>weniger als 8 Jahre alt</strong> sowie technisch vollkommen dicht ist. Zweitens: Bei großen, modernisierten <strong>Heizungsunterstützungs-Anlagen mit Röhrenkollektoren</strong> in Kombination mit einem 1.000-Liter-Schichtenspeicher und einem Holzvergaser- oder Pelletkessel, sofern auf den übrigen Dachflächen (z. B. Ost/West) genügend Platz für mindestens 10 bis 12 kWp Photovoltaik vorhanden ist.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Gilt der 0 % Mehrwertsteuersatz (§ 12 Abs. 3 UStG) auch für den Abbau der alten Solarthermie?',
        a: 'Ja, sofern der Rückbau der alten Solarthermie-Kollektoren im selben Auftrag durch den Photovoltaik-Fachbetrieb erfolgt, um die Dachfläche unmittelbar für die neuen PV-Module freizumachen. In diesem Fall teilt die Demontage als unselbstständige Nebenleistung das steuerliche Schicksal der Hauptleistung (0 % USt.).'
      },
      {
        q: 'Kann ich die alten Kupferrohre der Solarthermie für die PV-Kabel nutzen?',
        a: 'In das Innere der dünnen Kupferrohre selbst sollten keine DC-Hochspannungskabel eingezogen werden. Wenn die gedämmten Solarthermie-Leitungen jedoch durch einen bestehenden Kaminschacht oder ein großes Leerrohr verlaufen, kann nach dem Ausbau der Rohre genau dieser Weg ohne Stemmarbeiten für die neuen 6-mm²-Solarkabel genutzt werden.'
      },
      {
        q: 'Lohnt sich ein Heizstab im Pufferspeicher als Ersatz für die Solarthermie?',
        a: 'Ein stufenlos geregelter PV-Heizstab (0 bis 3 kW) wandelt PV-Überschussstrom 1:1 in Wärme um. Da die entgangene EEG-Einspeisevergütung bei 7,70 ct/kWh liegt, kostet die Kilowattstunde Warmwasser über den Heizstab rechnerisch nur 7,7 Cent — das ist günstiger als Erdgas (ca. 10–12 ct/kWh inkl. Wirkungsgradverlusten im Sommerbetrieb). Noch effizienter arbeitet eine Brauchwasser-Wärmepumpe, die aus 1 kWh PV-Strom über 3 kWh Wärme erzeugt.'
      },
      {
        q: 'Darf ich meine funktionierende Solarthermie trotz Länder-Solarpflicht durch Photovoltaik ersetzen?',
        a: 'Ja. Alle Landesbauordnungen und Klimaschutzgesetze der Bundesländer (z. B. Baden-Württemberg, Bayern, NRW, Berlin) werten Photovoltaik als primäre Erfüllungsoption der Solarpflicht; der Ersatz einer Altanlage durch eine leistungsstärkere PV-Anlage ist uneingeschränkt zulässig.'
      }
    ]
  },
  {
    slug: 'photovoltaik-ost-west-nord-wechselrichter-dimensionierung',
    category: 'Dachplanung & Wechselrichter',
    title: 'Ost-West- & Norddach Photovoltaik 2026: Ertrag, String-Planung & Wechselrichter-Teillastwirkungsgrad',
    metaTitle: 'Ost-West- & Norddach PV 2026: Ertrag & Wechselrichter',
    metaDescription:
      'Lohnt sich eine Ost-West- oder Norddach-Photovoltaikanlage 2026? Spezifischer Ertrag nach Dachneigung, Wechselrichter-Überdimensionierung (130–150 %) & Teillast-Verluste.',
    updatedDate: '11. November 2026',
    readingTimeMin: 9,
    heroImage: '/images/photovoltaik-ost-west-norddach-2026.webp',
    heroAlt: 'Photovoltaik Ost-West und Norddach Belegung mit Wechselrichter Dimensionierung 2026',
    blufSummary:
      'Durch die seit 2023/2026 um über 50 % gefallenen Modulpreise (N-Type-TOPCon-Module kosten im Großhandel oft unter 65 € pro 450-Wp-Modul) hat sich die goldene Regel der Dachbelegung grundlegend geändert: Eine Ost-West-Anlage liefert bei 30° Dachneigung zwar rund 16 bis 18 % weniger Spitzenertrag pro kWp als ein reines Süddach, erhöht aber durch das breite Ertragsplateau von 07:00 bis 20:00 Uhr den direkten Eigenverbrauch und umgeht die Abregelungsspitzen des Solarspitzengesetzes (§ 51 EEG). Selbst ein Norddach bis 22° Dachneigung erreicht in Deutschland noch 640 bis 740 kWh/kWp und amortisiert sich als Grenzkosten-Erweiterung auf demselben Wechselrichter in unter 8 Jahren.',
    svgDiagramTitle: 'Tages-Leistungskurve & Wechselrichter-Auslegung: Süddach vs. Ost-West + Norddach',
    svgDiagramCaption:
      'Abb. 12: Warum bei Ost-West-Dächern ein kleinerer, effizienterer Wechselrichter (DC/AC-Faktor 1,35) den Jahresertrag maximiert.',
    svgKeyLabels: [
      { label: 'Ost-West-Ertrag (30° Neigung)', value: '82 – 86 % vom Süddach', sub: 'Gleichmäßiges Tagesprofil von morgens bis abends ideal für Wärmepumpe & Haushalt' },
      { label: 'Norddach-Grenze (wirtschaftlich)', value: 'Bis ca. 22° – 25° Neigung', sub: 'Ertrag 640–740 kWh/kWp; ideal für diffuses Winterlicht ohne eigenes Gerüst' },
      { label: 'Optimaler DC/AC-Faktor (Ost-West)', value: '1,30 bis 1,45 (Unterdimensionierung)', sub: 'Spart Wechselrichterkosten und verbessert den Nacht-Teillastwirkungsgrad' }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Ihren exakten Ost-, West- oder Norddach-Ertrag im 360°-Rechner simulieren →',
    sections: [
      {
        id: 'ertragstabelle-ost-west-norddach',
        heading: '1. Ertragsmatrix 2026: Wie viel Strom liefern Ost-, West- und Norddächer nach Dachneigung?',
        paragraphs: [
          'Während bei einem steilen Süddach (35° Neigung) die höchste Jahresstrommenge pro einzelnem Modul erzielt wird, konzentriert sich dieser Ertrag stark auf die Mittagsstunden zwischen 11:00 und 15:00 Uhr — genau in jenem Zeitfenster, in dem der eigene Haushalt oft wenig Strom benötigt und an der Strombörse zunehmend negative Preise (§ 51 EEG) auftreten.',
          'Bei einer symmetrischen Ost-West-Belegung (Azimut -90° und +90°) steigt die Kurve bereits ab Sonnenaufgang steil an und hält bis in den späten Feierabend an. Entscheidend ist dabei der Neigungswinkel des Daches: Je flacher das Dach geneigt ist, desto geringer wird der Abstand zum Süddach — und desto attraktiver wird sogar die Mitbelegung der Nordseite.'
        ],
        table: {
          headers: ['Dachausrichtung & Dachneigung', 'Relativer Ertrag (vs. Optimum 35° Süd)', 'Spezifischer Ertrag Mittel-/Süddeutschland', 'Wirtschaftliche Bewertung 2026 (bei Vollbelegung)'],
          rows: [
            ['Süddach (30° – 35° Neigung)', '100 % (Referenz)', '1.020 – 1.130 kWh / kWp', 'Maximaler Einzelmodulertrag, hohe Mittagsspitze'],
            ['Süd-Ost / Süd-West (±45°, 30° Neigung)', '94 – 96 %', '960 – 1.080 kWh / kWp', 'Exzellenter Kompromiss aus Gesamtertrag & Eigenverbrauch'],
            ['Ost-West-Dach (±90°, 15° – 20° Neigung)', '87 – 90 %', '890 – 1.010 kWh / kWp', 'Spitzenreiter für Eigenverbrauch & maximale Dachausnutzung'],
            ['Ost-West-Dach (±90°, 35° – 40° Neigung)', '79 – 83 %', '810 – 935 kWh / kWp', 'Sehr wirtschaftlich, da Ost und West denselben Wechselrichter teilen'],
            ['Norddach (180° Nord, 10° – 18° Neigung)', '70 – 77 %', '715 – 860 kWh / kWp', 'Klar rentabel bei Mitbelegung (Grenzkosten < 650 €/kWp)'],
            ['Norddach (180° Nord, 22° – 28° Neigung)', '61 – 67 %', '620 – 750 kWh / kWp', 'Lohnend bei Wärmepumpe (starker Beitrag bei diffusem Winterlicht)'],
            ['Norddach steil (180° Nord, > 35° Neigung)', '< 52 %', '480 – 570 kWh / kWp', 'Meist unwirtschaftlich (Eigenverschattung durch den Dachfirst)']
          ]
        }
      },
      {
        id: 'wechselrichter-dimensionierung-teillast',
        heading: '2. Wechselrichter-Überdimensionierung & das PV*SOL-Paradoxon bei großen Hybrid-Wechselrichtern',
        paragraphs: [
          'Ein häufiger Planungsfehler in Angeboten besteht darin, für eine 15-kWp-Ost-West-Anlage pauschal einen 15-kW-Hybridwechselrichter zu verbauen. Da die Sonne niemals gleichzeitig senkrecht im Osten und im Westen stehen kann, erreicht eine symmetrische 15-kWp-Ost-West-Anlage (7,5 kWp Ost + 7,5 kWp West bei 35° Dachneigung) geometrisch bedingt selbst an einem wolkenlosen Junitag maximal <strong>10,2 bis 11,0 kW gleichzeitige DC-Spitzenleistung</strong> (ca. 70 % der Nennleistung).',
          'Hier greift ein entscheidendes physikalisches Phänomen, das in Simulationsprogrammen wie PV*SOL oft für Überraschung sorgt: Wählt man einen zu großen Hybrid-Wechselrichter (z. B. 15 oder 20 kW statt 10 kW), steigt der interne Eigenverbrauch der Leistungselektronik im Nacht-Entladebetrieb drastisch an. Wenn das Haus nachts nur 180 Watt Grundlast (Kühlschrank, Router, Heizungspumpe) benötigt, arbeitet ein überdimensionierter 15-kW-Wechselrichter bei nur 1,2 % seiner Nennleistung. In diesem extremen Teillastbereich sinkt der Entladewirkungsgrad von 95 % auf oft unter 72 % — der Rest geht als Abwärme im Wechselrichter verloren.'
        ],
        bullets: [
          '<strong>Optimales DC/AC-Verhältnis bei Ost-West-Dächern (1,30 bis 1,45):</strong> Für eine 14-kWp-Ost-West-Anlage ist ein <strong>10-kW-Hybridwechselrichter</strong> technisch und wirtschaftlich das Optimum. Die Abregelungsverluste (Clipping) im Jahresverlauf liegen unter 0,4 %, während der Wechselrichter nachts im Entladebetrieb deutlich effizienter arbeitet.',
          '<strong>Parallelschaltung (Polystring) bei 2 MPPT-Eingängen:</strong> Hat ein Wechselrichter nur zwei MPP-Tracker, Sollen aber drei Dachflächen (z. B. Süd, Ost, West) oder Ost/West plus Speicher angeschlossen werden, können ein Ost-String und ein West-String mit exakt gleicher Modulanzahl (z. B. je 12 Module) problemlos parallel auf <strong>einen gemeinsamen MPPT</strong> geschaltet werden. Die Mismatching-Verluste betragen laut Fraunhofer ISE weniger als 0,6 % pro Jahr.',
          '<strong>Startspannung & String-Länge beachten:</strong> Dreiphasige Wechselrichter benötigen eine Startspannung von 160 bis 200 V und arbeiten im optimalen Wirkungsgradfenster um 600 V DC. Ein einzelner String sollte daher mit modernen 108-Halbzellen-Modulen (ca. 33 V MPP-Spannung) aus mindestens 8 bis 10 unverschatteten Modulen bestehen; bei kurzen Gauben-Strings sind 144-Halbzellen-Module (z. B. Trina Vertex S+ mit ~44 V MPP-Spannung) die technisch überlegene Wahl.'
        ]
      },
      {
        id: 'norddach-grenzkosten-rechnung',
        heading: '3. Warum sich das Norddach über die Grenzkosten-Kalkulation im Winter besonders rechnet',
        paragraphs: [
          'Wird ein Norddach (bis ca. 22° Neigung) separat betrachtet, wirkt ein Ertrag von 680 kWh/kWp zunächst mäßig. Doch in der Ingenieur-Kalkulation zählt bei einem bereits geplanten Süddach ausschließlich die <strong>Grenzkosten-Rechnung (Marginal Cost)</strong>: Gerüst, Zählerschrank-Umbau, Smart Meter, Netzanschlussanmeldung, Anfahrt und sogar der Hybrid-Wechselrichter sind durch das Süddach bereits vollständig bezahlt.',
          'Jedes zusätzliche Kilowatt-Peak auf der Nordseite kostet daher nur noch das reine Material (Module, Unterkonstruktion, DC-Kabel) plus wenige Stunden Montagezeit — also rund <strong>550 bis 680 € pro zusätzlichem kWp (0 % MwSt.)</strong>. Und noch wichtiger: Bei geschlossener Wolkendecke im Dezember und Januar gibt es keine direkte Sonnenstrahlung aus Süden, sondern nur isotropes diffuses Himmelslicht. An genau diesen kritischen Wintertagen liefert ein 20°-Norddach fast exakt genauso viel Strom für die Wärmepumpe wie das 20°-Süddach.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Brauche ich für Ost-West-Dächer zwingend Leistungsoptimierer unter jedem Modul?',
        a: 'Nein. Solange der Ost-String und der West-String auf getrennten MPP-Trackern liegen (oder bei exakt gleicher Modulanzahl ohne Teilverschattung parallel geschaltet sind), regelt das integrierte Schattenmanagement moderner String-Wechselrichter (über die Bypass-Dioden der Module) die Stränge hocheffizient. Optimierer sind nur bei komplexen Gauben, unterschiedlichen Neigungswinkeln innerhalb desselben Strings oder starker wandernder Kaminverschattung sinnvoll.'
      },
      {
        q: 'Wie groß sollte der Wechselrichter bei einer 15-kWp-Ost-West-Anlage gewählt werden?',
        a: 'Bei einer Dachneigung ab 25° reicht für 15 kWp Ost-West ein 10-kW- bis maximal 12-kW-Wechselrichter vollkommen aus (DC/AC-Faktor 1,25 bis 1,50). Das spart 400 bis 700 € Anschaffungskosten und steigert den Wirkungsgrad beim nächtlichen Entladen des Batteriespeichers.'
      },
      {
        q: 'Bis zu welcher Dachneigung lohnt sich eine Norddach-Belegung 2026?',
        a: 'Als Faustregel gilt in Deutschland: Bis 20° Dachneigung (z. B. Pultdach, Walmdach oder flaches Satteldach) ist das Norddach fast immer hochrentabel. Zwischen 21° und 25° lohnt es sich, wenn eine Wärmepumpe oder ein E-Auto im Haushalt vorhanden ist und die Grenzkosten für die Zusatzmodule unter 700 €/kWp liegen. Ab 30° Dachneigung aufwärts sollte die Nordseite frei bleiben.'
      },
      {
        q: 'Hat eine Ost-West-Anlage Vorteile beim neuen Solarspitzengesetz (§ 51 EEG)?',
        a: 'Ja, erhebliche. Da negative Börsenstrompreise fast immer zwischen 11:00 und 15:00 Uhr auftreten (wenn reine Südanlagen ihre Mittagsspitze einspeisen), erzeugt eine Ost-West-Anlage einen Großteil ihres Stroms bereits zwischen 07:00 und 11:00 Uhr sowie zwischen 15:00 und 20:00 Uhr zu positiven Börsenpreisen und höherer Eigenverbrauchsdeckung.'
      }
    ]
  },
  {
    slug: 'photovoltaik-winterertrag-speicher-grundlast',
    category: 'Winterertrag & Autarkie',
    title: 'Photovoltaik im Winter (Nov–Feb): Realer Ertrag bei diffusem Licht, Wärmepumpe & Speicher-Standby',
    metaTitle: 'Photovoltaik Ertrag im Winter: Strom für Wärmepumpe & Haus',
    metaDescription:
      'Wie viel Strom erzeugt eine 10 kWp oder 15 kWp Photovoltaikanlage im Winter (November, Dezember, Januar, Februar) wirklich? Monats-Tabelle, Wärmepumpe & Speicher-Ruhemodus.',
    updatedDate: '11. November 2026',
    readingTimeMin: 8,
    heroImage: '/images/photovoltaik-winterertrag-schnee-2026.webp',
    heroAlt: 'Photovoltaik Ertrag im Winter von November bis Februar mit Wärmepumpe und Stromspeicher',
    blufSummary:
      'In den vier Kernwintermonaten November, Dezember, Januar und Februar erzeugt eine Photovoltaikanlage in Deutschland zusammen nur rund 12 bis 14 % ihres gesamten Jahresertrags — im Dezember allein sind es bei einer 10-kWp-Anlage durchschnittlich nur 190 bis 260 kWh (ca. 6 bis 8,5 kWh pro Tag). Wer im Winter eine Wärmepumpe betreibt, sollte daher bei der Planung konsequent auf maximale Modulleistung (12 bis 20 kWp statt 8 kWp) setzen und einen Batteriespeicher wählen, der bei leeren Wintertagen automatisch in den Tiefschlaf-Standby (< 5 Watt Eigenverbrauch) wechselt, statt sich mit Netzstrom-Erhaltungsladungen selbst zu belasten.',
    svgDiagramTitle: 'Reale Monatsverteilung einer 10-kWp-PV-Anlage im Winterhalbjahr (DWD-Mittelwert)',
    svgDiagramCaption:
      'Abb. 13:Tagesdurchschnittlicher Solarertrag im Winter im Verhältnis zu Haushalts-Grundlast und Wärmepumpenbedarf.',
    svgKeyLabels: [
      { label: 'Anteil Nov – Feb am Jahresertrag', value: 'ca. 12,5 % (4 Monate)', sub: 'Ca. 1.250 kWh von 10.000 kWh Jahresertrag bei 10 kWp' },
      { label: 'Schwächster Monat (Dezember)', value: '190 – 260 kWh / Monat', sub: 'Ø 6,5 bis 8,4 kWh pro Tag bei 10 kWp (an Nebeltagen 1,5–3 kWh)' },
      { label: 'Übergangsmonate (März & Okt)', value: '1.550 – 1.850 kWh', sub: 'Bereits ab Ende Februar und im Oktober bis zu 75 % Heizungsdeckung' }
    ],
    relatedToolHref: '/speicher-rechner',
    relatedToolLabel: 'Ihre reale Winter- und Jahresautarkie im Speicher-Rechner berechnen →',
    sections: [
      {
        id: 'monatstabelle-winterertrag-10kwp-15kwp',
        heading: '1. Monatstabelle: Wie viel Strom liefert eine 10-kWp- und 15-kWp-Anlage von Oktober bis März?',
        paragraphs: [
          'In Verkaufsgesprächen wird der Jahresertrag einer 10-kWp-Anlage (z. B. 10.200 kWh/Jahr) häufig durch den Jahresverbrauch (z. B. 4.500 kWh Haushalt + 3.500 kWh Wärmepumpe = 8.000 kWh) geteilt und suggeriert, man habe „mehr Strom als man verbraucht". Physikalisch verteilt sich die deutsche Globalstrahlung jedoch im Verhältnis <strong>78 % Sommerhalbjahr (April bis September) zu 22 % Winterhalbjahr (Oktober bis März)</strong>.',
          'Die folgende Referenztabelle auf Basis der DWD-Strahlungsreihen zeigt den realen monatlichen und täglichen Ertrag einer modernen N-Type-Anlage (35° Süd bzw. Ost-West) in der Mitte Deutschlands:'
        ],
        table: {
          headers: ['Wintermonat', 'Anteil am Jahresertrag', 'Ertrag 10 kWp (kWh / Monat)', 'Ø pro Tag (10 kWp)', 'Ertrag 15 kWp (kWh / Monat)', 'Ø pro Tag (15 kWp)'],
          rows: [
            ['Oktober (Goldener Herbst)', '6,8 %', '690 kWh', '22,3 kWh / Tag', '1.035 kWh', '33,4 kWh / Tag'],
            ['November (Hochnebel-Phase)', '3,4 %', '345 kWh', '11,5 kWh / Tag', '518 kWh', '17,3 kWh / Tag'],
            ['Dezember (Sonnen-Tiefststand)', '2,1 %', '215 kWh', '6,9 kWh / Tag', '322 kWh', '10,4 kWh / Tag'],
            ['Januar (Kältester Heizmonat)', '2,6 %', '265 kWh', '8,5 kWh / Tag', '398 kWh', '12,8 kWh / Tag'],
            ['Februar (Steigender Sonnenwinkel)', '4,6 %', '470 kWh', '16,8 kWh / Tag', '705 kWh', '25,2 kWh / Tag'],
            ['März (Frühlings-Durchbruch)', '8,9 %', '910 kWh', '29,4 kWh / Tag', '1.365 kWh', '44,0 kWh / Tag']
          ]
        }
      },
      {
        id: 'diffuses-licht-schwachlichtverhalten',
        heading: '2. Schwachlichtverhalten im Winter: Warum 15 kWp statt 8 kWp für die Wärmepumpe entscheidend sind',
        paragraphs: [
          'An einem typischen trüben Dezembertag mit geschlossener Hochnebeldecke beträgt die Bestrahlungsstärke in Deutschland mittags oft nur <strong>50 bis 100 W/m²</strong> (statt 1.000 W/m² unter Sommersonne). Eine 10-kWp-Anlage liefert in diesen vier bis fünf hellen Stunden konstant rund 500 bis 950 Watt Leistung.',
          'Das hat eine klare Konsequenz für die Anlagenplanung: Im Dezember und Januar gibt es bei eingeschalteter Wärmepumpe (die im Heizbetrieb kontinuierlich 800 bis 1.800 Watt elektrisch aufnimmt) praktisch <strong>keinen Überschussstrom für den Batteriespeicher</strong> — jede erzeugte Kilowattstunde vom Dach fließt sofort zu 100 % direkt in die Wärmepumpe und die Haushaltsgrundlast. Deshalb bringt im tiefen Winter nicht ein größerer Batteriespeicher mehr Autarkie, sondern ausschließlich <strong>mehr Modulfläche auf dem Dach</strong> (auch auf Ost-, West- oder flachen Nordflächen).'
        ],
        bullets: [
          '<strong>Optimaler Neigungswinkel für den Winter:</strong> Da die Sonne am 21. Dezember in Deutschland mittags nur 15° bis 19° hoch über dem Horizont steht, erzielen steilere Süddächer (40° bis 55° Neigung) sowie vertikale Südfassaden (90°) bei klarem Frostwetter im Dezember und Januar bis zu 35 % höhere spezifische Tageserträge als flache 15°-Dächer.',
          '<strong>Schneeabrutsch & Halbzellen-Architektur:</strong> Moderne Glas-Glas-Module mit Halbzellen-Verschaltung (Upper/Lower Split) liefern bereits wieder 50 % ihrer Modulleistung, sobald nur die obere Modulhälfte vom Schnee befreit ist, während die untere Hälfte am Dachrinnenrand noch schneebedeckt ist.',
          '<strong>Starke Übergangsmonate (Oktober, Februar, März):</strong> Die eigentliche Stärke der Kombination aus Photovoltaik und Wärmepumpe liegt in den rund 120 Heiztagen im Oktober, November-Anfang, Februar, März und April. In diesen Monaten deckt eine 12- bis 15-kWp-Anlage bereits <strong>55 bis 80 % des gesamten Heiz- und Haushaltsstroms</strong>.'
        ]
      },
      {
        id: 'speicher-standby-notladung-winter',
        heading: '3. Warum verbraucht der Stromspeicher im Winter manchmal Strom? (Standby & Erhaltungsladung)',
        paragraphs: [
          'Viele Anlagenbetreiber wundern sich im Dezember beim Blick in ihre App: Obwohl tagelang kaum Sonne schien und der Speicher bei 5 % oder 10 % Mindest-Ladestand (Min-SoC) verharrt, zeigt das System einen geringen Strombezug des Speichers oder eine reduzierte Effizienz an. Die Ursache liegt im Batteriemanagementsystem (BMS) der LFP-Zellen: Bleibt der Wechselrichter samt DC-Zwischenkreis 24 Stunden am Tag im aktiven Bereitschaftsmodus, obwohl der Speicher leer ist, zieht die Elektronik dauerhaft 25 bis 60 Watt Eigenverbrauch (das entspricht 0,6 bis 1,4 kWh pro Tag).',
          'Fällt die Zellspannung dadurch unter die Sicherheitsgrenze, löst das BMS eine <strong>Not- bzw. Erhaltungsladung aus dem Stromnetz</strong> aus, um eine Tiefentladung zu verhindern. Unsere Ingenieur-Empfehlung für den Winterbetrieb (November bis Mitte Februar): Erhöhen Sie den unteren Entladegrenzwert (Min-SoC / Reservekapazität für Notstrom) in der App auf <strong>15 bis 20 %</strong> und aktivieren Sie den automatischen <strong>Tiefschlaf-Standby-Modus (Sleep Mode)</strong> Ihres Wechselrichters.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Sollte man den Batteriespeicher im Dezember und Januar komplett ausschalten?',
        a: 'Bei modernen Systemen der HTW-Effizienzklasse A (z. B. Fronius, Kostal, RCT, SMA, Sungrow mit aktuellem Firmware-Stand) ist ein manuelles Abschalten nicht nötig, da sie bei Erreichen des unteren Ladestands automatisch in einen echten Standby (< 3 bis 5 Watt) wechseln. Nur bei älteren Wechselrichtern ohne Schlafmodus, die im Leerlauf dauerhaft über 40 Watt ziehen, spart das Erhöhen des Min-SoC auf 20 % im Dezember und Januar spürbar Erhaltungsladungen.'
      },
      {
        q: 'Lohnt sich das Schneeräumen auf Photovoltaikmodulen im Winter?',
        a: 'In den meisten Regionen Deutschlands (außerhalb der Hochlagen ab 600 m ü. NN in Bayern, Schwarzwald, Erzgebirge oder Allgäu) lohnt sich gefährliches Schneeräumen auf dem Schrägdach wirtschaftlich kaum: Selbst wenn eine 10-kWp-Anlage im Dezember eine ganze Woche lang eingeschneit ist, entgehen Ihnen nur rund 35 bis 50 kWh Strom — das entspricht einem Gegenwert von etwa 12 bis 16 Euro.'
      },
      {
        q: 'Wie viel Autarkie erreicht man mit Wärmepumpe über das gesamte Jahr?',
        a: 'Über alle 12 Monate betrachtet erreicht ein gedämmtes Einfamilienhaus mit 12 bis 15 kWp Photovoltaik und einem 10-kWh-Speicher beim Haushaltsstrom rund 75 bis 82 % Autarkie und beim Wärmepumpenstrom (durch intelligente Tag-Anhebung der Vorlauftemperatur) rund 35 bis 48 % Autarkie — insgesamt ergibt sich eine Jahres-Gesamtautarkie von rund 58 bis 68 %.'
      }
    ]
  },
  {
    slug: 'zaehlerschrank-photovoltaik-erneuern-kosten-vde',
    category: 'VDE-Normen & Elektroinstallation',
    title: 'Zählerschrank für Photovoltaik erneuern 2026: VDE-AR-N 4100 Pflichten (ÜSS, SLS, APZ) & reale Kosten',
    metaTitle: 'Zählerschrank für PV erneuern 2026: VDE-Pflicht & Kosten',
    metaDescription:
      'Muss der Zählerschrank für die Photovoltaikanlage 2026 erneuert werden? VDE-AR-N 4100 Anforderungen (SLS-Schalter, Überspannungsschutz, APZ-Feld) & Kosten mit 0 % MwSt.',
    updatedDate: '11. November 2026',
    readingTimeMin: 8,
    heroImage: '/images/zaehlerschrank-vde-4100-photovoltaik-2026.webp',
    heroAlt: 'Moderner Zählerschrank nach VDE-AR-N 4100 für Photovoltaik mit SLS und Überspannungsschutz',
    blufSummary:
      'Die Inbetriebnahme einer Photovoltaikanlage gilt nach den Technischen Anschlussbedingungen (TAB) der Netzbetreiber und der Anwendungsregel VDE-AR-N 4100 rechtlich als Nutzungsänderung von „Aussetzbetrieb" auf „Dauerstrombetrieb". Deshalb verlangen die Stadtwerke im Vorzählerbereich zwingend einen selektiven Hauptleitungsschutzschalter (SLS, meist 35 A oder 50 A) sowie einen Kombi-Überspannungsschutz (ÜSS Typ 1+2). Während Zählerschränke ab Baujahr ca. 2000 meist für 450 bis 950 € nachgerüstet werden können, ist bei alten schwarzen Bakelit-Tafeln oder Schränken ohne unteren Anschlussraum (vor ca. 1995) ein neuer Zählerschrank (1.800 bis 3.200 € — komplett mit 0 % MwSt. nach § 12 Abs. 3 UStG) erforderlich.',
    svgDiagramTitle: 'VDE-AR-N 4100 Prüfschema: Nachrüstung im Bestand vs. Neuer Zählerschrank',
    svgDiagramCaption:
      'Abb. 14: Welche Bauteile im Zählerschrank für die PV-Abnahme durch den Netzbetreiber 2026 Pflicht sind.',
    svgKeyLabels: [
      { label: 'Nachrüstung (ab Bj. ~1998)', value: '450 – 950 € (0 % MwSt.)', sub: 'Einbau SLS-Schalter (35/50 A) + ÜSS Typ 1+2 auf vorhandenem Sammelschienensystem' },
      { label: 'Komplett-Tausch (vor Bj. ~1995)', value: '1.800 – 3.200 € (0 % MwSt.)', sub: 'Neuer Schrank (1.100 mm Höhe) inkl. APZ-Feld, SLS, ÜSS & FI-Schutzschaltern' },
      { label: 'Dauerstrom-Auslegung (TAB)', value: '10 mm² / 16 mm² Verdrahtung', sub: 'Bis 32 A (22 kW) 10 mm² Zählerfeld-Verdrahtung + SLS 35 A gegen Überhitzung' }
    ],
    relatedToolHref: '/foerderung-check',
    relatedToolLabel: 'Zuständigen Netzbetreiber (Stadtwerke) für Ihre PLZ im Förder-Check prüfen →',
    sections: [
      {
        id: 'warum-vde-ar-n-4100-dauerbetrieb',
        heading: '1. Warum stellt der Netzbetreiber bei Photovoltaik so strenge Anforderungen an den Zählerschrank?',
        paragraphs: [
          'In einem klassischen Haushalt ohne Solaranlage, Wärmepumpe oder Wallbox fließen hohe Ströme nur kurzzeitig (sogenannter <strong>Aussetzbetrieb</strong>), etwa wenn am Sonntagmittag Backofen und Herd gleichzeitig für 40 Minuten laufen. Sobald jedoch eine Photovoltaikanlage mit 10 bis 20 kWp angeschlossen wird, fließt an sonnigen Sommertagen über sechs bis acht Stunden hinweg ununterbrochen ein hoher Strom über den Zählerplatz (<strong>Dauerbetrieb nach VDE-AR-N 4100</strong>).',
          'Ältere Zählerschränke mit dünner 6-mm²-Innenverdrahtung oder ausgeleierten Schraubklemmen können sich unter dieser stundenlangen Dauerlast gefährlich erhitzen. Aus diesem Grund schreiben die Technischen Anschlussbedingungen (TAB) aller deutschen Verteilnetzbetreiber klare Sicherheitskomponenten vor, bevor der digitale Zweirichtungszähler (bzw. das Smart Meter) gesetzt wird.'
        ],
        table: {
          headers: ['Baujahr & Zustand des vorhandenen Zählerschranks', 'Technischer Befund vor Ort', 'Erforderliche Maßnahme nach VDE-AR-N 4100', 'Typische Kosten 2026 (inkl. 0 % MwSt.)'],
          rows: [
            ['Ab Baujahr 2016 (aktuelle Normhöhe 1.100 mm)', '5-poliges Sammelschienensystem (40 mm) vorhanden', 'Meist nur Kontrolle oder Ergänzung Kombi-Ableiter ÜSS', '0 – 450 €'],
            ['Baujahr ca. 1998 – 2015 (Unterer Anschlussraum mit Schienen)', 'Platz für Hutschienen-/Sammelschienen-Geräte vorhanden', 'Nachrüstung SLS-Schalter (35 A) + ÜSS Typ 1+2 im Vorzählerbereich', '450 – 950 €'],
            ['Baujahr ca. 1982 – 1997 (Schrank zu niedrig / kein Schienenraum)', 'Unterer Anschlussraum zu klein, 4-polig (TN-C), NH-Sicherungen', 'Vorschalt-Zählerschrank daneben setzen ODER Schrank-Austausch', '1.450 – 2.600 €'],
            ['Vor Baujahr 1980 (Schwarze Bakelit-Zählertafel / Nische)', 'Kein Berührungsschutz, kein Platz für Smart-Meter-Gateway', 'Zwingend neuer Zählerschrank nach VDE-AR-N 4100 an geeignetem Ort', '2.200 – 3.400 €']
          ]
        }
      },
      {
        id: 'pflichtbauteile-sls-uess-apz',
        heading: '2. Die 4 Pflichtbauteile erklärt: SLS-Schalter, Überspannungsschutz (ÜSS), APZ-Feld & Verdrahtung',
        paragraphs: [
          'Wenn ein Elektroinstallateur oder Solarteur Ihren Zählerschrank besichtigt, prüft er vier konkrete technische Kriterien, die über eine einfache Nachrüstung oder einen Schranktausch entscheiden:'
        ],
        bullets: [
          '<strong>1. Selektiver Hauptleitungsschutzschalter (SLS-Schalter, 35 A oder 50 A):</strong> Sitzt im plombierten unteren Anschlussraum direkt auf den Stromschienen vor dem Zähler. Er ersetzt alte Schraubsicherungen oder NH-Messer und ermöglicht das sichere Freischalten der Anlage sowie den Schutz des Zählerfeldes vor Überlast im Dauerbetrieb.',
          '<strong>2. Kombi-Überspannungsschutz (ÜSS Typ 1+2 im Vorzählerbereich):</strong> Schützt den Zähler, das Smart-Meter-Gateway und die Wechselrichter-Elektronik vor Blitzeinschlägen und Überspannungen aus dem öffentlichen Stromnetz. Zusätzlich wird auf der DC-Seite (Solarkabel vom Dach) ein DC-Überspannungsschutz Typ 2 (oft bereits im Wechselrichter integriert) benötigt.',
          '<strong>3. Zählerfeld-Verdrahtung (10 mm² statt 16 mm²) & Dauerstrombelastbarkeit:</strong> Bei Standard-Hausanlagen bis 30 kWp (Dauerstrom bis 32 A) reicht eine 10-mm²-Zählerfeldverdrahtung mit einem <strong>35-A-SLS-Schalter</strong> nach VDE-AR-N 4100 aus; bei höherem Dauerstrom (bis 44 A, z. B. große PV + Kaskadenmessung) ist eine 16-mm²-Verdrahtung mit 50-A-SLS erforderlich.',
          '<strong>4. APZ-Feld (Abschlusspunkt Zählerplatz):</strong> Bei einem <em>komplett neuen</em> Zählerschrank ist das geschottete Kommunikationsfeld (APZ) mit Spannungsversorgung für zukünftige Smart-Meter-Steuertechnik Pflicht. Wird hingegen ein gut erhaltener Bestandsschrank (z. B. aus 2008) lediglich mit SLS und ÜSS nachgerüstet, verzichten über 90 % der deutschen Netzbetreiber im Bestand kulant auf die Nachrüstung eines externen APZ-Kastens.'
        ]
      },
      {
        id: 'nullsteuersatz-zaehlerschrank-finanzamt',
        heading: '3. Steuer-Vorteil 2026: Warum der neue Zählerschrank komplett mit 0 % MwSt. abgerechnet wird',
        paragraphs: [
          'Für Hausbesitzer in Altbauten ist die Regelung in Abschnitt 12.18 des Umsatzsteuer-Anwendungserlasses (zu § 12 Abs. 3 UStG) bares Geld wert: Die Erneuerung oder Erweiterung des Zählerschranks unterliegt ausdrücklich dem <strong>Nullsteuersatz von 0 % Mehrwertsteuer</strong>, sofern die Maßnahme durch die Installation der Photovoltaikanlage technisch oder normativ bedingt ist und im Auftrag der PV-Anlage (oder durch den beauftragten Elektriker mit entsprechendem Nachweis) ausgeführt wird.',
          'Wer also seinen veralteten Zählerschrank aus den 1970er- oder 1980er-Jahren im Zuge der Photovoltaik-Installation für 2.600 € netto erneuern lässt, spart allein durch den Wegfall der 19 % Umsatzsteuer <strong>fast 500 €</strong> und erhält gleichzeitig eine moderne, zukunftssichere Elektro-Hauptverteilung für Wärmepumpe und Wallbox (§ 14a EnWG).'
        ]
      }
    ],
    faqs: [
      {
        q: 'Muss ein Zählerschrank von 2005 zwingend komplett ausgetauscht werden?',
        a: 'In aller Regel nein. Zählerschränke ab etwa Baujahr 1998/2000 verfügen bereits über ein 5-poliges Sammelschienensystem im unteren Anschlussraum. Dort lassen sich der geforderte SLS-Schalter und der Kombi-Überspannungsschutz (ÜSS Typ 1+2) innerhalb von 1 bis 2 Arbeitsstunden für rund 450 bis 850 € nachrüsten, ohne den Schrank aus der Wand zu reißen.'
      },
      {
        q: 'Was tun, wenn im alten Zählerschrank kein Platz mehr für Sicherungen und Smart Meter ist?',
        a: 'Wenn der bestehende Zählerschrank die technischen Grundanforderungen (SLS + ÜSS nachrüstbar) erfüllt, aber im oberen Anlagenteil kein Platz für die Sicherungsautomaten des Wechselrichters, den FI-Schutzschalter und das Energiemanagementsystem (Smart Meter / EnFluRi-Sensor) ist, muss der Hauptschrank nicht getauscht werden. Es genügt ein kompakter 2- oder 3-reihiger Kleinverteiler (Unterverteilung) direkt neben dem Zählerschrank (Kosten inkl. Montage ca. 350 bis 600 €).'
      },
      {
        q: 'Brauche ich für Photovoltaik und Wärmepumpe zwingend zwei getrennte Zählerfelder?',
        a: 'Nein. Im Jahr 2026 entscheiden sich die meisten Eigenheimbesitzer mit PV-Anlage für § 14a EnWG Modul 1 (Pauschalprämie von 110 bis 190 €/Jahr auf das Netzentgelt). Für Modul 1 ist kein zweiter Zählerplatz erforderlich — Haushalt, Wärmepumpe, Wallbox und PV-Anlage laufen über einen einzigen gemeinsamen Zweirichtungszähler. Nur für § 14a Modul 2 (60 % Rabatt auf den Netzentgelt-Arbeitspreis über Kaskadenmessung) wird ein zweiter Zähler benötigt.'
      }
    ]
  },
  {
    slug: 'kfw-270-solarkredit-photovoltaik-finanzierung-2026',
    category: 'Finanzierung & Förderkredite',
    title: 'Photovoltaik Finanzierung & KfW 270 Kredit 2026/2027: Effektivzins, Steuer-Hebel & Banken-Vergleich',
    metaTitle: 'Photovoltaik Finanzierung & KfW 270 Kredit 2026 im Vergleich',
    metaDescription:
      'Lohnt sich der KfW-Kredit 270 für Photovoltaik und Speicher 2026? Aktuelle Zinssätze nach Bonität, Hausbank-Hürden, Modernisierungskredit-Alternativen & Cashflow-Rechnung.',
    updatedDate: '11. November 2026',
    readingTimeMin: 8,
    heroImage: '/images/kfw-270-photovoltaik-finanzierung-2026.webp',
    heroAlt: 'Photovoltaik Finanzierung 2026 mit KfW 270 Solarkredit und Modernisierungskredit im Vergleich',
    blufSummary:
      'Über das bundesweite Förderprogramm KfW 270 („Erneuerbare Energien – Standard") lassen sich Photovoltaikanlagen und Batteriespeicher auch im Herbst 2026 zu 100 % der Netto-Investitionskosten finanzieren. Allerdings gilt das beworbene Einstiegszinsniveau der KfW (ab ca. 3,41 % bis 3,75 % effektiv) nur für die höchste Bonitäts- und Besicherungsklasse (Preisklasse A) — und viele Geschäftsbanken lehnen die Durchleitung bei Kleinkrediten unter 20.000 € wegen der geringen Bankmarge ab. In der Praxis ist für eine 15.000- bis 20.000-€-Hausdachanlage ein grundbuchfreier Wohn- bzw. Modernisierungskredit (ab 3,89 bis 4,69 % effektiv mit jederzeitiger kostenloser Sondertilgung) oft schneller, unbürokratischer und unterm Strich gleich günstig.',
    svgDiagramTitle: 'Finanzierungs-Vergleich 2026: KfW 270 vs. Wohn-/Modernisierungskredit vs. Eigenkapital',
    svgDiagramCaption:
      'Abb. 15: Wie die jährliche Stromkostenersparnis und EEG-Vergütung (ca. 1.750 €/Jahr) die Kreditrate einer 10-kWp-Anlage trägt.',
    svgKeyLabels: [
      { label: 'KfW 270 (ab Preisklasse A)', value: 'ca. 3,45 – 5,15 % eff. p.a.', sub: 'Bonitätsabhängig; Antrag zwingend VOR Auftragsvergabe über Hausbank' },
      { label: 'Wohn-/Modernisierungskredit', value: 'ca. 3,89 – 4,79 % eff. p.a.', sub: 'Ohne Grundbucheintrag für Eigentümer, Zusage in 24h, freie Sondertilgung' },
      { label: 'Steuer-Vorteil (§ 12 Abs. 3 UStG)', value: '0 % MwSt. senkt Kreditsumme', sub: 'Sie finanzieren nur den Nettopreis (ca. 17.800 € statt 21.180 € brutto)' }
    ],
    relatedToolHref: '/rechner',
    relatedToolLabel: 'Ihren jährlichen Cashflow zur Deckung der Kreditrate im PV-Rechner prüfen →',
    sections: [
      {
        id: 'kfw-270-konditionen-huerden-2026',
        heading: '1. KfW-Programm 270 („Erneuerbare Energien – Standard"): Konditionen, Preisklassen & die Hausbank-Hürde',
        paragraphs: [
          'Der KfW-Kredit 270 ist das zentrale Bundesförderprogramm zur Finanzierung von Photovoltaik-Dachanlagen, Batteriespeichern sowie der zugehörigen Energiemanagement- und Netzanschlusstechnik. Gefördert werden bis zu 100 % der Investitionskosten bei Laufzeiten zwischen 5 und 30 Jahren sowie bis zu 3 tilgungsfreien Anlaufjahren.',
          'In der realen Bankpraxis 2026 sollten Hausbesitzer jedoch zwei strukturelle Besonderheiten kennen: Erstens vergibt die KfW den Kredit nicht direkt, sondern ausschließlich über eine durchleitende Geschäftsbank (Hausbank, Sparkasse, Volksbank oder spezialisierte Direktbank). Da die Bank bei einem Darlehen über 17.500 € den vollen Prüfaufwand hat, aber nur eine minimale Durchleitungsmarge erhält, vergeben viele Banken den KfW-270-Kredit erst ab einer Mindestsumme von 25.000 bis 50.000 € (z. B. wenn gleichzeitig eine Wärmepumpe oder Dachsanierung finanziert wird).',
          'Zweitens nutzt die KfW das risikogerechte Zinssystem (RGZS): Den oft zitierten Top-Zins der Preisklasse A erhält nur, wer sowohl eine exzellente Bonität als auch eine erstrangige Grundschuld als Sicherheit stellt. Da allein die Notar- und Grundbuchkosten für eine Grundschuldeintragung rund 350 bis 600 € kosten, wird ein unbesicherter KfW-Kredit automatisch in Preisklasse C oder D eingestuft — womit der Zinsvorteil gegenüber einem freien Modernisierungskredit oft komplett schmilzt.'
        ],
        table: {
          headers: ['Finanzierungsweg (Beispiel: 18.000 € über 10 Jahre)', 'Effektivzins-Spanne (Q4 2026)', 'Grundbucheintrag / Notar nötig?', 'Sondertilgung & Antragstellung'],
          rows: [
            ['KfW 270 (mit Grundschuld, Preisklasse A/B)', 'ca. 3,41 % – 4,15 % p.a.', 'Ja (Notar-/Grundbuchkosten ca. 400 €)', 'Zwingend VOR Vertragsunterschrift beim Solarteur; keine freie Sondertilgung während Zinsbindung'],
            ['KfW 270 (blanko ohne Grundschuld, Preisklasse C/D)', 'ca. 4,35 % – 5,40 % p.a.', 'Nein (nur abgetretene Einspeisevergütung)', 'Antrag vor Vorhabensbeginn; oft schwer Durchleitungsbank unter 25.000 € zu finden'],
            ['Zweckgebundener Wohn-/Modernisierungskredit', 'ca. 3,89 % – 4,79 % p.a.', 'Nein (Grundbuchnachweis als Eigentümer reicht)', 'Auch nach Auftragsvergabe möglich; oft kostenlose Sondertilgung jederzeit'],
            ['Landesförderbanken (z.B. NRW.BANK, L-Bank, IBB)', 'ca. 2,50 % – 3,95 % p.a.', 'Je nach Programm ab 30.000 / 50.000 €', 'Sehr attraktiv bei Kombi-Sanierung (Dach + PV + Wärmepumpe)']
          ]
        }
      },
      {
        id: 'cashflow-rechnung-eigenfinanzierung-oder-kredit',
        heading: '2. Musterrechnung 2026: Trägt sich eine kreditfinanzierte 10-kWp-Anlage mit Speicher von selbst?',
        paragraphs: [
          'Dank des Nullsteuersatzes (§ 12 Abs. 3 UStG) müssen Sie 2026 keine Umsatzsteuer mehr mitfinanzieren — die Kreditsumme fällt also von vornherein um 19 % niedriger aus als noch vor wenigen Jahren. Kombiniert man eine realistische 50/50-Finanzierung (z. B. 8.000 € Eigenkapital + 10.000 € Modernisierungskredit) oder eine 100-%-Vollfinanzierung, bezahlt das eingesparte Stromgeld beim Energieversorger den größten Teil der monatlichen Kreditrate:',
          'Eine typische 10-kWp-Anlage mit 10-kWh-Speicher erwirtschaftet im ersten Betriebsjahr rund <strong>1.450 € bis 1.650 € durch eingesparten Netzstrom</strong> (bei 34,8 ct/kWh bzw. mit Wärmepumpe/E-Auto noch deutlich mehr) plus rund <strong>360 € bis 440 € steuerfreie EEG-Einspeisevergütung</strong> (7,70 ct/kWh) sowie bis zu <strong>150 € Netzentgelt-Erstattung nach § 14a EnWG</strong>. Diesem jährlichen Mittelzufluss von rund <strong>1.900 € bis 2.150 € pro Jahr (ca. 165 €/Monat)</strong> steht bei einem 10-jährigen Darlehen über 18.000 € (zu 4,2 % Zins) eine Kreditrate von rund 183 €/Monat gegenüber. Nach Tilgung des Kredits im 10. Jahr fließt der gesamte Ertrag der restlichen 10 bis 15 Betriebsjahre (über 22.000 €) vollständig steuerfrei in die eigene Kasse.'
        ],
        bullets: [
          '<strong>Goldene KfW-Fristenregel:</strong> Wenn Sie den KfW-270-Kredit oder ein Landesförderprogramm nutzen möchten, muss das Bankgespräch und die dokumentierte Kreditantragstellung <strong>zwingend erfolgen, bevor Sie das verbindliche Angebot Ihres Solarteurs unterschreiben</strong>. Ein Planungs- oder Beratungsgespräch vorab ist unschädlich.',
          '<strong>Absetzbarkeit der Kreditzinsen bei Vermietung / Denkmalschutz:</strong> Während bei selbstgenutzten Einfamilienhäusern durch die Steuerfreiheit nach § 3 Nr. 72 EStG (0 % Einkommensteuer auf PV-Erträge bis 30 kWp) im Gegenzug auch keine Kreditzinsen als Betriebsausgaben abgesetzt werden können (§ 3c Abs. 1 EStG), profitieren Sie davon, dass sämtliche Einnahmen und der Eigenverbrauch zu 100 % steuerfrei bleiben.',
          '<strong>Finger weg von überteuerten 20-Jahre-Mietmodellen:</strong> Selbst eine 100-%-Kreditfinanzierung zu 4,5 % Effektivzins kostet über 10 Jahre insgesamt nur rund 4.200 € an Zinsen — und damit rund <strong>12.000 bis 16.000 € weniger</strong> als ein klassisches 20-Jahre-Solar-Mietmodell.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Darf ich das Angebot des Solarteurs schon unterschreiben und danach den KfW-270-Kredit beantragen?',
        a: 'Nein! Beim KfW-Programm 270 gilt das strenge Verbot des vorzeitigen Maßnahmenbeginns. Der Kreditantrag (bzw. das dokumentierte Finanzierungsgespräch mit Ihrer durchleitenden Bank) muss vor Abschluss des Liefer- und Leistungsvertrags erfolgen. Haben Sie bereits unterschrieben, ist ein freier Wohn- oder Modernisierungskredit Ihre beste und unkomplizierte Lösung.'
      },
      {
        q: 'Kann ich die Kreditzinsen für meine Photovoltaikanlage 2026 von der Einkommensteuer absetzen?',
        a: 'Bei Anlagen bis 30 kWp auf Einfamilienhäusern sind seit § 3 Nr. 72 EStG sämtliche Einnahmen und Entnahmen steuerfrei. Da die Einnahmen steuerfrei sind, dürfen damit zusammenhängende Ausgaben — inklusive Abschreibung (AfA) und Schuldzinsen — nach § 3c Abs. 1 EStG steuerlich nicht mehr abgezogen werden. Für private Betreiber ist die Steuerfreiheit der Erträge über 20 Jahre jedoch weitaus lukrativer.'
      },
      {
        q: 'Welche Banken bieten 2026 gute Alternativen zum KfW-270-Kredit ohne Grundbucheintrag an?',
        a: 'Für Eigentümer einer selbstgenutzten Immobilie bieten viele Direkt- und Regionalbanken (z. B. ING Wohnkredit, DKB, Schwäbisch Hall, PSD Banken, EthikBank sowie regionale Sparkassen und Volksbanken) spezielle Klima- oder Wohnkredite zwischen 10.000 und 50.000 € an. Als Nachweis genügt meist ein aktueller Grundbuchauszug oder der letzte Grundsteuerbescheid — ohne Notartermin und ohne Grundschuldeintragung.'
      }
    ]
  }
];

export function getAllArticles(): ArticleData[] {
  return articles;
}

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find((a) => a.slug === slug);
}
