/**
 * Data Loader for Dashboard Pages
 *
 * This module provides pre-parsed data exports for dashboard pages.
 * For server-side file parsing utilities, see server-loader.ts
 *
 * UAE National Digital Intelligence Platform — Data Coverage:
 * - Entity Intelligence (10 categories, 100+ entities)
 * - Topics / H-S-P-B-C Framework (20 topics across 5 sectors)
 * - Crisis Intelligence / Phoenix Protocol (10 crisis types)
 * - Social Media Intelligence (20 platforms)
 * - Multi-Lingual Intelligence (15 languages/dialects)
 * - Stakeholder Intelligence (9 government stakeholders)
 * - Historical Context (10 historical eras)
 * - Sentiment / Emotions (10 categories, Plutchik model)
 * - Trends Intelligence (10 trend categories)
 * - Verification / Fact-Check (10 verification types)
 * - Monitoring / Real-Time Command (8 monitoring types)
 */

// ============================================================================
// PARSED DATA MODULES — LEGACY ADPHC PLATFORM
// ============================================================================

export { clairvoyanceData } from './clairvoyance-data'
export { perceptionData } from './perception-data'
export { ricochetData } from './ricochet-data'

// ============================================================================
// PARSED DATA MODULES — UAE NDIP (NEW)
// ============================================================================

export {
  federalOfficialsData,
  royalFamilyData,
  emirateEntitiesData,
  mediaOrganizationsData,
  journalistsData,
  influencersData,
  corporateEntitiesData,
  internationalOrgsData,
  infrastructureEntitiesData,
  eventEntitiesData,
  entityOverview,
} from './entity-data'

export {
  politicsGovernanceData,
  economyBusinessData,
  securityDefenseData,
  cultureSocietyData,
  environmentInfrastructureData,
  internationalRelationsData,
  mediaCommunicationsData,
  technologyInnovationData,
  sportsIntelligenceData,
  healthcareData,
  educationYouthData,
  energySustainabilityData,
  tourismHospitalityData,
  realEstateData,
  foodSecurityData,
  transportationLogisticsData,
  legalRegulatoryData,
  laborEmploymentData,
  demographicsMigrationData,
  religionInterfaithData,
  topicsOverview,
} from './topics-data'

export {
  naturalDisasterData,
  geopoliticalCrisisData,
  socialCrisisData,
  economicCrisisData,
  reputationCrisisData,
  communicationCrisisData,
  terrorismExtremismData,
  cyberThreatData,
  publicHealthData,
  earlyWarningData,
  crisisOverview,
} from './crisis-data'

export {
  twitterIntelligence,
  tiktokIntelligence,
  youtubeIntelligence,
  facebookIntelligence,
  instagramIntelligence,
  linkedinIntelligence,
  redditIntelligence,
  telegramIntelligence,
  threadsIntelligence,
  snapchatIntelligence,
  discordIntelligence,
  whatsappIntelligence,
  googleSerpIntelligence,
  newsWebsitesIntelligence,
  forumsIntelligence,
  blogsIntelligence,
  darkWebIntelligence,
  gamingIntelligence,
  web3Intelligence,
  podcastIntelligence,
  darkSocialAggregate,
} from './social-media-data'

export {
  msaQueriesData,
  emiratiArabicData,
  gulfArabicData,
  levantineArabicData,
  egyptianArabicData,
  maghrebiArabicData,
  englishQueriesData,
  frenchQueriesData,
  urduHindiData,
  persianData,
  malayIndonesianData,
  russianData,
  chineseData,
  transliterationData,
  codeSwitchingData,
  languageOverview,
} from './languages-data'

export {
  namaData,
  nmcDubaiData,
  moiData,
  mofaData,
  ministryCultureData,
  ministryEconomyData,
  gcoData,
  prAgencyData,
  intlRelationsData,
  laborUnionsData,
  womenOrganizationsData,
  youthOrganizationsData,
  academicsData,
  tribalNetworksData,
  diasporaData,
  stakeholderOverview,
} from './stakeholder-data'

export {
  preFederationData,
  federationEarlyData,
  postGulfWarData,
  rapidDevelopmentData,
  arabSpringData,
  modernizationVisionData,
  postPandemicExpoData,
  recentEraData,
  eventHistoricalData,
  policyAnnouncementData,
  historicalOverview,
} from './historical-data'

export {
  trendsOverview,
  trendsDataArray,
} from './trends-data'

export {
  verificationOverview,
} from './verification-data'

export {
  monitoringOverview,
} from './monitoring-data'

// Re-export all types
export * from './types'

// Re-export all data hooks
export * from './hooks'

// ============================================================================
// CLIENT-SIDE DATA ACCESSORS
// ============================================================================

/**
 * Get pre-loaded dashboard data (client-side)
 *
 * This function returns the parsed data directly without server-side calls.
 * All data is pre-parsed from markdown files during build.
 */
export function getDashboardData() {
  const { clairvoyanceData } = require('./clairvoyance-data')
  const { perceptionData } = require('./perception-data')
  const { ricochetData } = require('./ricochet-data')

  return {
    clairvoyance: clairvoyanceData,
    perception: perceptionData,
    ricochet: ricochetData,
  }
}

/**
 * Get CLAIRVOYANCE-CX data for a specific module
 */
export function getClairvoyanceData(module?: keyof typeof import('./clairvoyance-data').clairvoyanceData) {
  const { clairvoyanceData } = require('./clairvoyance-data')
  if (module) {
    return clairvoyanceData[module]
  }
  return clairvoyanceData
}

/**
 * Get PERCEPTION-X2 data for a specific module
 */
export function getPerceptionData(module?: keyof typeof import('./perception-data').perceptionData) {
  const { perceptionData } = require('./perception-data')
  if (module) {
    return perceptionData[module]
  }
  return perceptionData
}

/**
 * Get RICOCHET-CATALYST-X data for a specific module
 */
export function getRicochetData(module?: keyof typeof import('./ricochet-data').ricochetData) {
  const { ricochetData } = require('./ricochet-data')
  if (module) {
    return ricochetData[module]
  }
  return ricochetData
}
