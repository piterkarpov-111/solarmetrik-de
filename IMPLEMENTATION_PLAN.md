# Детальный Пошаговый План Разработки Сайта SOLARMETRIK (`solarmetrik.de`)

> **Концепция:** 100% чистый, независимый информационно-аналитический и инженерный портал по солнечной энергетике Германии (`Unabhängiges Fachportal & Dateninstitut für Photovoltaik in Deutschland`). Никаких продаж, рекламных баннеров, квизов или коммерческих тумблеров.  
> **Стек:** Astro 5 + TypeScript + Модульный CSS в утвержденном светлом стиле **Axopar.com**  
> **Что берется из `/Temp/`:** Только утвержденная светлая палитра/типографика CSS (`Barlow Condensed` + `Inter`), реальные географические контуры карты 16 земель Германии и механика калькулятора. Все страницы боевого сайта создаются с нуля в полном, развернутом объеме!

---

## 0. Полный Реестр Собранных Датасетов в `/data/` (Используются на 100% при генерации)

Все страницы, таблицы, графики, калькуляторы и ИИ-манифесты сайта обязаны выводить полный спектр данных из 4 верифицированных файлов в папке `/Users/dmitri/Desktop/Solar/data/`:

1. **[data/eeg-regulations-2026.json](file:///Users/dmitri/Desktop/Solar/data/eeg-regulations-2026.json) — Федеральные законы, тарифы и инженерные матрицы (2026/2027):**
   * **Тарифы EEG (`eegTariffs`, период 01.08.2026 – 31.01.2027, Bundesnetzagentur):**
     * *Teileinspeisung:* до 10 kWp = `7,70 ct/kWh`, 10–40 kWp = `6,66 ct/kWh`, 40–100 kWp = `5,48 ct/kWh`.
     * *Volleinspeisung:* до 10 kWp = `12,22 ct/kWh`, 10–40 kWp = `10,24 ct/kWh`.
     * Полугодовая дегрессия `1,0%`, срок гарантии `20 лет` и дедлайн `Bestandsschutz` до **31.12.2026** перед реформой EEG 2027.
   * **Закон `Solarspitzengesetz` (`§ 51 EEG`):** отмена выплат в часы отрицательных спотовых цен EPEX SPOT и компенсация через умные накопители (`HEMS`).
   * **Налоги и сетевые правила (`taxAndGridRegulations`):**
     * `§ 12 Abs. 3 UStG` (`0 % MwSt` — нулевой НДС на панели, инверторы, накопители и монтаж до 30 kWp, прямая экономия 19%).
     * `§ 3 Nr. 72 EStG` (`0 % Einkommensteuer` — освобождение от подоходного налога до 30 kWp для частных домов и до 15 kWp на квартиру в МКД).
     * `§ 14a EnWG` (скидки на сетевые тарифы `Netzentgeltreduzierung` для управляемых накопителей, тепловых насосов и Wallbox: **Модуль 1** — паушальный возврат 110–190 €/год, **Модуль 2** — скидка 60% на тариф, **Модуль 3** — динамические ночные/дневные тарифы).
     * Государственный кредит `KfW 270`.
   * **Рыночные бенчмарки цен 2026 (`marketCostBenchmarks2026`):**
     * Удельная цена 1 kWp без накопителя (`5 kWp: 1.520 €`, `8 kWp: 1.380 €`, `10 kWp: 1.290 €`, `12 kWp: 1.230 €`, `15 kWp: 1.170 €`, `20 kWp: 1.110 €`).
     * Удельная цена аккумулятора за 1 kWh (`5 kWh: 680 €`, `8 kWh: 610 €`, `10 kWh: 570 €`, `15 kWh: 530 €`).
     * Фиксированные базовые расходы на монтаж/электрощит (`2.450 €`), деградация модулей (`0,4%/год`), доля собственного потребления (`30%` без накопителя, `72%` с накопителем, `82%` с накопителем + тепловым насосом/электромобилем).
   * **Инженерная матрица ориентации и наклона крыши (`roofOrientationTiltMatrix`):**
     * КПД для `Süd (180°)`, `Süd-Ost / Süd-West (±45°)`, `Ost / West (±90°)`, `Nord-Ost / Nord-West (±135°)` и `Flachdach (10–15°)` при углах наклона `15°`, `30°`, `35°`, `45°`, `60°`.
     * Помесячное распределение годовой генерации с января (`2,6%`) по июнь (`14,6%`) и декабрь (`1,1%`).
   * **Математическая формула индекса `SOLARMETRIK-Effizienzscore (SME-2026)`:** веса `40%` инсоляция, `25%` цена монтажа в регионе, `20%` сетевой тариф города, `15%` локальные субсидии и синергия с `Solarpflicht`.

2. **[data/bundeslaender-2026.json](file:///Users/dmitri/Desktop/Solar/data/bundeslaender-2026.json) — Полные профили всех 16 Федеральных земель Германии:**
   * По каждой из 16 земель (`Baden-Württemberg`, `Bayern`, `Berlin`, `Brandenburg`, `Bremen`, `Hamburg`, `Hessen`, `Mecklenburg-Vorpommern`, `Niedersachsen`, `Nordrhein-Westfalen`, `Rheinland-Pfalz`, `Saarland`, `Sachsen`, `Sachsen-Anhalt`, `Schleswig-Holstein`, `Thüringen`):
     * `globalRadiationKwhM2` (DWD), `specificYieldKwhKwp`, `sunHoursPerYear`, `optimalTiltAngleDeg`.
     * `avgElectricityPriceCt`, `avgCostPerKwpEur`, `avgTurnkey10kWpWithStorageEur`, `amortisationYears`, `twentyYearNetProfitEur`, `solarmetrikScore`.
     * `solarpflicht`: флаги `neubauWohngebaeude`, `dachsanierungBestand` и полное юридическое описание правила 2026 года (`effectiveRule2026`).
     * `landesfoerderung`: название программы (`programName`), актуальный статус 2026 (`status2026`) и подробности (`details`).
     * `mainGridOperators`: список главных операторов распределительных сетей земли.

3. **[data/staedte-2026.json](file:///Users/dmitri/Desktop/Solar/data/staedte-2026.json) — Детальная база по 51 крупнейшему городу Германии:**
   * Для каждого из 51 города во всех 16 землях:
     * `name`, `slug`, `bundeslandSlug`, `bundeslandName`, `population`, `plzRange` (диапазон почтовых индексов), координаты `lat` / `lon`, `optimalTiltDeg`.
     * `globalRadiationKwhM2`, `specificYieldKwhKwp`, `sunHoursPerYear`, `avgCostPerKwpEur`, `localElectricityPriceCt`.
     * `turnkey10kWpWithStorageEur`, `amortisationYears`, `twentyYearNetProfitEur`, `twentyYearGridLossWithoutPvEur`, `solarmetrikScore`.
     * `localGridOperator` (точное название местных `Stadtwerke` / `Verteilnetzbetreiber`).
     * `kommunaleFoerderung2026`: точное название городской программы (`programName`), статус осени 2026 (`status`) и детальное описание (`details`).

4. **[data/germany-16-states-geo-svg.json](file:///Users/dmitri/Desktop/Solar/data/germany-16-states-geo-svg.json) — Реальные географические контуры (GeoJSON → SVG):**
   * Точные векторные координаты границ всех 16 федеральных земель Германии для интерактивной карты.

---

## Фаза 1: Инициализация боевого проекта Astro 5 и Слоя Данных

- [ ] **Шаг 1.1:** Развернуть проект **Astro 5 + TypeScript** в `/Users/dmitri/Desktop/Solar` (`output: 'static'`, `site: 'https://solarmetrik.de'`, автоматический `prefetch`).
- [ ] **Шаг 1.2:** Создать типизированный модуль `src/lib/data.ts`, который экспортирует:
  - Все 16 земель (`getAllBundeslaender`, `getBundeslandBySlug`),
  - Все 51 город (`getAllStaedte`, `getStadtBySlug`, `getStaedteByBundesland`, `getNearbyStaedte` для кольцевой перелинковки соседних городов),
  - Федеральные нормативы, таблицы цен, помесячный график генерации и матрицу азимута/наклона из `eeg-regulations-2026.json`,
  - Векторные пути карты из `germany-16-states-geo-svg.json`.

---

## Фаза 2: Светлая Дизайн-система Axopar и Базовая Архитектура

- [ ] **Шаг 2.1:** Создать полную дизайн-систему `src/styles/global.css` в утвержденном светлом стиле **Axopar.com** (100% белый `#FFFFFF` и светло-серый `#F6F7F9` фон, нулевой черный цвет, шрифты `Barlow Condensed` + `Inter`, карточки со скругленными углами `10px` без рамок, редакционная колонка `780px`, печатные стили `@media print` для PDF-паспорта).
- [ ] **Шаг 2.2:** Создать `src/layouts/BaseLayout.astro`:
  - Мета-директива для Google Discover (`max-image-preview:large, max-snippet:-1, max-video-preview:-1`), канонические URL, OpenGraph 16:9, гео-теги (`geo.region`, `geo.placename`).
  - Встроенный `Speculation Rules API` для переходов между страницами за `0 мс`.
  - Автоматический генератор `JSON-LD Schema.org` (`Organization`, `WebSite`, `BreadcrumbList`, `SoftwareApplication`, `Dataset`, `FAQPage`, `Article` с двойной верификацией `author` и `reviewedBy`).
- [ ] **Шаг 2.3:** Создать компоненты навигации и доверия:
  - `src/components/Header.astro` — шапка в стиле Axopar (прозрачная над главным видео-экраном и чисто белая на внутренних страницах), однострочное меню без переносов + выпадающее белое **Мега-меню (`Click Depth ≤ 2`)** со всеми 16 землями, топ-городами и поиском по городу/PLZ.
  - `src/components/Footer.astro` — развернутый светлый подвал с перелинковкой всех 16 земель, топ-городов, калькуляторов, статей и ИИ-манифестов.
  - `src/components/Breadcrumbs.astro` — семантические хлебные крошки.
  - `src/components/EeatVerifyBar.astro` — плашка экспертной проверки (*Autor: Lukas Hartmann, Fachredakteur* + *Geprüft durch: Dipl.-Ing. Markus Weber, Energietechnik*).

---

## Фаза 3: Развернутая Главная Страница (`src/pages/index.astro` — 7 полноценных секций)

В отличие от короткого демо в `Temp/`, боевая Главная страница будет полноценным, глубоким портальным хабом в чистом стиле Axopar из **7 секций**:
- [ ] **Секция 1 (Hero Axopar):** Полноэкранное солнечное фоновое видео (`Zero-LCP-Penalty` с `fetchpriority="high"` постером), заголовок `Barlow Condensed`, манифест независимой платформы и кнопка перехода к расчетам.
- [ ] **Секция 2 (Витрина направлений в стиле Axopar):** 3 крупные скругленные фото-карточки без рамок (*Solar-Konfigurator 2026*, *Deutscher Solar-Atlas (16 Länder)*, *EEG-Reform & Förderleitfaden*).
- [ ] **Секция 3 (Ключевые показатели рынка Германии 2026/2027):** Чистая светлая аналитическая сводка по данным `eeg-regulations-2026.json` (ставки `7,70` и `12,22 ct/kWh`, `0% MwSt`, освобождение от налога `§ 3 Nr. 72 EStG`, скидки `§ 14a EnWG` и дата `31.12.2026`).
- [ ] **Секция 4 (Интерактивная географическая карта всех 16 земель Германии):** Реальные контуры 16 земель + живая карточка выбранной земли + быстрый переход во все 16 регионов и 51 город.
- [ ] **Секция 5 (Полная матрица стоимости и окупаемости СЭС 2026):** Детальная таблица по всем типоразмерам из датасета (`5 kWp`, `8 kWp`, `10 kWp`, `12 kWp`, `15 kWp`, `20 kWp` с накопителями и без) + помесячный график выработки с января по декабрь.
- [ ] **Секция 6 (Витрина свежих аналитических статей `/ratgeber/`):** 3 крупные редакционные карточки в стиле медиа-раздела Axopar с переходом на полные гайды.
- [ ] **Секция 7 (Развернутый экспертный FAQ на 6 вопросов):** С нативными аккордеонами `<details>` и микроразметкой `FAQPage`.

---

## Фаза 4: Кластер из 3 Инженерных Калькуляторов

- [ ] **Шаг 4.1 (`src/pages/rechner.astro` — `/rechner/`):** Главный калькулятор окупаемости и выработки:
  - 1-клик профили домохозяйств (*2 Personen / Familie 3–4 P. / Haus + Wärmepumpe & E-Auto*).
  - Выбор любого из 16 регионов / 51 города (с автоматической подстановкой реальной инсоляции DWD, местного тарифа `ct/kWh` и региональной цены монтажа `€/kWp` из наших JSON-баз!).
  - Ползунки мощности (`4–20 kWp`), потребления (`2.000–12.000 kWh`), аккумулятора (`0–16 kWh`).
  - **360°-Компас крыши** (все 5 ориентаций и углы `15°–60°` строго по матрице `roofOrientationTiltMatrix` из `eeg-regulations-2026.json`) + **помесячный график генерации (Янв–Дек)**.
  - **20-летний счетчик потерь без СЭС** (`Stromkosten-Verlustrechner` с инфляцией 3%).
  - Поддержка URL-параметров (`/rechner?city=muenchen&kwp=10&speicher=10`) + печать 1-страничного **PDF-паспорта**.
  - Под калькулятором — полный аналитический разбор (500–700 слов): методология, таблица **Покупка против Аренды (`Kaufen vs. Mieten`)** и FAQ.
- [ ] **Шаг 4.2 (`src/pages/speicher-rechner.astro` — `/speicher-rechner/`):** Специализированный калькулятор емкости аккумулятора, степени автономии (`30% → 82%`) и выгоды от `Solarspitzengesetz (§ 51 EEG)` и `§ 14a EnWG`.
- [ ] **Шаг 4.3 (`src/pages/foerderung-check.astro` — `/foerderung-check/`):** Интерактивный поиск субсидий, статуса `Solarpflicht 2026` и оператора электросети по почтовому индексу (`PLZ`) или названию города из базы 51 города и 16 земель.

---

## Фаза 5: Programmatic SEO Атлас (Разводящая + 16 Земель + 51 Город Германии)

- [ ] **Шаг 5.1 (`src/pages/solaratlas/index.astro` — `/solaratlas/`):** Обзорная страница Солнечного Атласа Германии со сводной рейтинговой таблицей всех 16 земель по индексу `SME-2026`, картой и алфавитным указателем всех 51 города.
- [ ] **Шаг 5.2 (`src/pages/solaratlas/[bundesland]/index.astro` — 16 страниц Федеральных земель, по 750–950 слов):**
  - Полный вывод всех данных земли из `bundeslaender-2026.json`: инсоляция (`kWh/m²`), удельная выработка (`kWh/kWp`), солнечные часы, оптимальный угол наклона, цена за kWp, тариф сети, окупаемость, прибыль за 20 лет и `SME-2026 Score`.
  - Детальный разбор статуса **`Solarpflicht 2026`** (новостройки и капитальный ремонт крыши) и земельных программ (`landesfoerderung`).
  - Список главных операторов распределительных сетей (`mainGridOperators`).
  - Полная сравнительная таблица всех городов этой земли с переходом на страницу каждого города.
- [ ] **Шаг 5.3 (`src/pages/solaratlas/[bundesland]/[stadt].astro` — 51 страница Городов Германии, по 550–750 слов):**
  - Редакционная верстка Axopar (`780px`) с полным выводом всех полей из `staedte-2026.json`: диапазоны `PLZ`, координаты `lat`/`lon`, население, оптимальный угол наклона крыши, инсоляция, солнечные часы, индекс `SME-2026`.
  - Раздел по местному оператору сети (`localGridOperator` — *Stadtwerke / Verteilnetzbetreiber*) и точный статус муниципальной программы субсидий осени 2026 (`kommunaleFoerderung2026`).
  - Локальная таблица цен и доходности для домов 6 / 10 / 15 kWp в этом городе + расчет 20-летних потерь на местном тарифе (`twentyYearGridLossWithoutPvEur`).
  - Помесячный профиль выработки в этом городе, локальный FAQ из 4 вопросов, **кольцевая перелинковка соседних городов (`Nearby Cities Silo`)** и HTML-код виджета для цитирования.

---

## Фаза 6: Экспертный Журнал (`/ratgeber/`, 10 полных статей по 1 100–1 500 слов по анализу выдачи DE) и E-E-A-T

- [ ] **Шаг 6.1 (`src/pages/ratgeber/index.astro` и `src/pages/ratgeber/[slug].astro`):**
  Создание **10 фундаментальных статей** (отобранных по результатам анализа немецкой выдачи `Finanztip.de`, `Verbraucherzentrale.de`, `HTW Berlin`, `Solaranlagen-Portal.com` и `ADAC.de`) в редакционном стиле Axopar (`780px`, двойная верификация *Автор + Инженер Dipl.-Ing.*, оглавление с `#id` якорями `Jump Links`, блоки BLUF по 150–200 слов под каждым `H2`, широкоформатные скругленные фотографии, таблицы и индексируемые векторные SVG-схемы):
  1. `photovoltaik-kosten-2026` — *Photovoltaik Kosten 2026: Preistabellen für 5 bis 20 kWp, Speicher & Montage (inkl. 1.600 €/kWp Faustregel)*
  2. `eeg-2026-vs-2027-einspeiseverguetung` — *EEG-Einspeisevergütung 2026 vs. 2027: Kabinettsbeschluss, Wegfall unter 25 kWp & Bestandsschutz bis 31.12.2026*
  3. `solarspitzengesetz-negative-strompreise` — *Solarspitzengesetz (§ 51 EEG): Negative Strompreise, 60-%-Begrenzung & Kompensationsformel*
  4. `solarpflicht-deutschland-2026` — *Solarpflicht Deutschland 2026: Alle 16 Bundesländer bei Neubau & Dachsanierung (inkl. NRW-Gesetz)*
  5. `solaranlage-kaufen-oder-mieten-2026` — *Solaranlage kaufen vs. mieten 2026: Der unabhängige 20-Jahre-Wirtschaftlichkeitsvergleich*
  6. `photovoltaik-steuern-0-prozent-mwst` — *Photovoltaik Steuern 2026: 0 % MwSt. (§ 12 Abs. 3 UStG) & Einkommensteuerbefreiung (§ 3 Nr. 72 EStG)*
  7. `stromspeicher-test-dimensionierung-2026` — *Stromspeicher-Test & Dimensionierung 2026: Erkenntnisse der HTW Berlin Stromspeicher-Inspektion (SPI & Effizienzklasse A)*
  8. `photovoltaik-waermepumpe-kombinieren-14a-enwg` — *Photovoltaik mit Wärmepumpe & Wallbox kombinieren: SG-Ready & § 14a EnWG Netzentgelt-Rabatte (Modul 1–3)*
  9. `balkonkraftwerk-2026-speicher-800w-2000w` — *Balkonkraftwerk 2026 mit Speicher: 800W / 2000W Regeln (Solarpaket I), VDE-Norm DIN VDE V 0126-95 & Anmeldung*
  10. `dynamische-stromtarife-smart-meter-photovoltaik-2026` — *Dynamische Stromtarife & Smart-Meter-Pflicht (iMSys) 2026: Lohnt sich das Netz-Laden des Speichers im Winter?*
- [ ] **Шаг 6.2 (Страницы доверия и права):**
  - `src/pages/methodik.astro` (`/methodik/` — формулы `SME-2026`, источники DWD / PVGIS / Bundesnetzagentur / Fraunhofer ISE).
  - `src/pages/ueber-uns.astro` (`/ueber-uns/` — о проекте, экспертный совет, редакционные стандарты).
  - `src/pages/impressum.astro` (`/impressum/`) и `src/pages/datenschutz.astro` (`/datenschutz/`).

---

## Фаза 7: Инфраструктура для ИИ-агентов (GEO / RAG), Sitemaps и Сборка

- [ ] **Шаг 7.1:** Автогенерация `/llms.txt` и `/llms-full.txt` (включающих все 16 земель, 51 город, ставки EEG и формулы из `/data/`).
- [ ] **Шаг 7.2:** Автогенерация публичного датасета `/api/solaratlas-2026.json` с разметкой `Schema.org/Dataset`.
- [ ] **Шаг 7.3:** Генерация сегментированных XML-карт сайта (`sitemap-index.xml`, `sitemap-core.xml`, `sitemap-bundeslaender.xml`, `sitemap-staedte.xml`, `sitemap-ratgeber.xml`), `robots.txt` и ключа `IndexNow`.
- [ ] **Шаг 7.4:** Полная сборка проекта (`npm run build`), проверка всех ~80+ страниц и запуск локального сервера для обзора.
