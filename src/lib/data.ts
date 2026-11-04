import eegRegulationsRaw from '../../data/eeg-regulations-2026.json';
import bundeslaenderRaw from '../../data/bundeslaender-2026.json';
import staedteRaw from '../../data/staedte-2026.json';
import germanyGeoRaw from '../../data/germany-16-states-geo-svg.json';

export interface BundeslandData {
  slug: string;
  code: string;
  name: string;
  capital: string;
  globalRadiationKwhM2: number;
  specificYieldKwhKwp: number;
  sunHoursPerYear: number;
  optimalTiltAngleDeg: number;
  avgElectricityPriceCt: number;
  avgCostPerKwpEur: number;
  avgTurnkey10kWpWithStorageEur: number;
  amortisationYears: number;
  twentyYearNetProfitEur: number;
  solarmetrikScore: number;
  solarpflicht: {
    neubauWohngebaeude: boolean;
    dachsanierungBestand: boolean;
    effectiveRule2026: string;
  };
  landesfoerderung: {
    programName: string;
    status2026: string;
    details: string;
  };
  mainGridOperators: string[];
}

export interface StadtData {
  slug: string;
  name: string;
  bundeslandSlug: string;
  bundeslandName: string;
  population: number;
  plzRange: string;
  lat: number;
  lon: number;
  optimalTiltDeg: number;
  globalRadiationKwhM2: number;
  specificYieldKwhKwp: number;
  sunHoursPerYear: number;
  avgCostPerKwpEur: number;
  localElectricityPriceCt: number;
  turnkey10kWpWithStorageEur: number;
  amortisationYears: number;
  twentyYearNetProfitEur: number;
  twentyYearGridLossWithoutPvEur: number;
  solarmetrikScore: number;
  localGridOperator: string;
  kommunaleFoerderung2026: {
    programName: string;
    status: string;
    details: string;
  };
}

export interface GeoSvgState {
  name: string;
  slug: string;
  d: string;
}

export const eegRegulations = eegRegulationsRaw;
export const bundeslaender: BundeslandData[] = bundeslaenderRaw as BundeslandData[];
export const staedte: StadtData[] = staedteRaw as StadtData[];
export const germanyGeoPaths: GeoSvgState[] = germanyGeoRaw as GeoSvgState[];

export function getAllBundeslaender(): BundeslandData[] {
  return [...bundeslaender].sort((a, b) => b.solarmetrikScore - a.solarmetrikScore);
}

export function getBundeslandBySlug(slug: string): BundeslandData | undefined {
  return bundeslaender.find((b) => b.slug === slug);
}

export function getAllStaedte(): StadtData[] {
  return [...staedte].sort((a, b) => b.population - a.population);
}

export function getStaedteByBundesland(bundeslandSlug: string): StadtData[] {
  return staedte
    .filter((s) => s.bundeslandSlug === bundeslandSlug)
    .sort((a, b) => b.population - a.population);
}

export function getStadtBySlug(bundeslandSlug: string, stadtSlug: string): StadtData | undefined {
  return staedte.find((s) => s.bundeslandSlug === bundeslandSlug && s.slug === stadtSlug);
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function getNearbyStaedte(currentStadt: StadtData, count = 5): (StadtData & { distanceKm: number })[] {
  return staedte
    .filter((s) => s.slug !== currentStadt.slug)
    .map((s) => ({
      ...s,
      distanceKm: Math.round(haversineKm(currentStadt.lat, currentStadt.lon, s.lat, s.lon))
    }))
    .sort((a, b) => {
      // Prioritize same state slightly, then physical distance
      const stateBonusA = a.bundeslandSlug === currentStadt.bundeslandSlug ? -40 : 0;
      const stateBonusB = b.bundeslandSlug === currentStadt.bundeslandSlug ? -40 : 0;
      return a.distanceKm + stateBonusA - (b.distanceKm + stateBonusB);
    })
    .slice(0, count);
}

export interface SystemScenarioResult {
  kWp: number;
  storageKwh: number;
  householdLabel: string;
  annualConsumptionKwh: number;
  annualYieldKwh: number;
  selfConsumptionRatePercent: number;
  selfConsumedKwh: number;
  gridFeedInKwh: number;
  turnkeyCostEur: number;
  vatSavedEur: number;
  annualSavingsGridEur: number;
  annualEegRevenueEur: number;
  totalAnnualBenefitYear1Eur: number;
  amortisationYears: number;
  twentyYearNetProfitEur: number;
}

export function calculateLocalSystemScenario(
  specificYieldKwhKwp: number,
  avgCostPerKwpEur: number,
  localElectricityPriceCt: number,
  kWp: number,
  storageKwh: number,
  annualConsumptionKwh: number,
  householdLabel: string
): SystemScenarioResult {
  const annualYieldKwh = Math.round(kWp * specificYieldKwhKwp);
  const scaleDiscount = kWp <= 6 ? 1.09 : kWp >= 15 ? 0.91 : 1.0;
  const pvCostEur = Math.round(kWp * avgCostPerKwpEur * scaleDiscount);
  const storageUnitCost =
    storageKwh === 0 ? 0 : storageKwh <= 6 ? 640 : storageKwh <= 10 ? 550 : 510;
  const storageCostEur = Math.round(storageKwh * storageUnitCost);
  const turnkeyCostEur = Math.round((pvCostEur + storageCostEur) / 50) * 50;
  const vatSavedEur = Math.round(turnkeyCostEur * 0.19);

  const selfConsumptionRatePercent =
    storageKwh === 0 ? 30 : storageKwh <= 6 ? 66 : storageKwh <= 10 ? 73 : 79;
  const maxSelfKwh = Math.round(annualYieldKwh * (selfConsumptionRatePercent / 100));
  const selfConsumedKwh = Math.min(maxSelfKwh, Math.round(annualConsumptionKwh * 0.84));
  const gridFeedInKwh = Math.max(0, annualYieldKwh - selfConsumedKwh);

  const eegRateCt =
    kWp <= 10
      ? eegRegulations.eegTariffs.teileinspeisung.upTo10kWpCtPerKwh
      : (10 * eegRegulations.eegTariffs.teileinspeisung.upTo10kWpCtPerKwh +
          (kWp - 10) * eegRegulations.eegTariffs.teileinspeisung.from10To40kWpCtPerKwh) /
        kWp;

  const annualSavingsGridEur = Math.round(selfConsumedKwh * (localElectricityPriceCt / 100));
  const annualEegRevenueEur = Math.round(gridFeedInKwh * (eegRateCt / 100));
  const totalAnnualBenefitYear1Eur = annualSavingsGridEur + annualEegRevenueEur;

  // 20-year calculation with 2.5% electricity price inflation & 1% annual maintenance
  const annualMaintenance = Math.round(turnkeyCostEur * 0.008);
  let cumulativeCashflow = -turnkeyCostEur;
  let amortisationYears = 9.0;
  let paybackReached = false;

  for (let yr = 1; yr <= 20; yr++) {
    const inflationFactor = Math.pow(1.025, yr - 1);
    const degradationFactor = Math.pow(0.996, yr - 1);
    const yrSavings = annualSavingsGridEur * inflationFactor * degradationFactor;
    const yrEeg = annualEegRevenueEur * degradationFactor;
    const yrNet = yrSavings + yrEeg - annualMaintenance;
    const prev = cumulativeCashflow;
    cumulativeCashflow += yrNet;
    if (!paybackReached && cumulativeCashflow >= 0) {
      amortisationYears = Number((yr - 1 + Math.abs(prev) / yrNet).toFixed(1));
      paybackReached = true;
    }
  }

  return {
    kWp,
    storageKwh,
    householdLabel,
    annualConsumptionKwh,
    annualYieldKwh,
    selfConsumptionRatePercent,
    selfConsumedKwh,
    gridFeedInKwh,
    turnkeyCostEur,
    vatSavedEur,
    annualSavingsGridEur,
    annualEegRevenueEur,
    totalAnnualBenefitYear1Eur,
    amortisationYears,
    twentyYearNetProfitEur: Math.round(cumulativeCashflow / 100) * 100
  };
}

export function getMonthlyYieldBreakdown(annualYieldKwh: number): { month: string; sharePercent: number; kwh: number }[] {
  return eegRegulations.roofOrientationTiltMatrix.monthlyYieldDistributionPercent.map((m) => ({
    month: m.month,
    sharePercent: m.sharePercent,
    kwh: Math.round((annualYieldKwh * m.sharePercent) / 100)
  }));
}

export function formatEur(val: number): string {
  return val.toLocaleString('de-DE') + ' €';
}

export function formatNumber(val: number, decimals = 0): string {
  return val.toLocaleString('de-DE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}
