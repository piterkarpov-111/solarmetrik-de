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
  }
];

export function getAllArticles(): ArticleData[] {
  return articles;
}

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find((a) => a.slug === slug);
}
