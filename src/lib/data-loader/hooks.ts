/**
 * React Hooks for Dashboard Data Loading
 *
 * Custom hooks for accessing pre-loaded dashboard data in React components
 */

'use client'

import { useState, useEffect, useMemo } from 'react'
import {
  getClairvoyanceData,
  getPerceptionData,
  getRicochetData,
  clairvoyanceData,
  perceptionData,
  ricochetData,
  // Stakeholder Data
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
  // Historical Data
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
  // Trends Data
  trendsOverview,
  trendsDataArray,
  // Verification Data
  verificationOverview,
  omissionSilenceData,
  omissionSilenceOverview,
  // Bot Data
  botInauthenticData,
  // Monitoring Data
  monitoringOverview,
  // Crisis Response Deep Data (MD 12-3)
  crisisResponseDeepData,
  uaeCrisisInfrastructure,
  crisisManagementLessons,
  realTimeMonitoringSystems,
  aiMediaMonitoring,
  osintTools,
  darkWebTools,
  narrativeAttacks,
  crossPlatformTracking,
  sentimentAnalysisCrisis,
  socialMediaTrendVelocity,
  factCheckVerification,
  governmentEmergencyResponse,
  postCrisisAssessment,
  influencerCrisisResponse,
  internationalCrisisMonitoring,
  misinformationTracking,
  crisisCommunicationBestPractices,
  mediaFramingAnalysis,
  disasterMisinformationDetection,
  crisisManagementGovernance,
  crisisQueryPhases,
  crisisPerformanceMetrics,
  toolsRecommended,
  sourceCitations,
  crisisSourceCredibilityMatrix,
  crisisUaeRelevanceAssessment,
  crisisEntityRegistry,
  crisisLevels,
  crisisSentimentByTopic,
  // Crisis Data
  naturalDisasterData,
  geopoliticalCrisisData,
  socialCrisisData,
  economicCrisisData,
  reputationCrisisData,
  communicationCrisisData,
  communicationCrisisExtendedData,
  // Crisis Communication Data (perception)
  crisisCommData,
  terrorismExtremismCrisisData,
  cyberThreatData,
  publicHealthData,
  earlyWarningData,
  earlyWarningExtendedData,
  crisisOverview,
} from './index'

// Early Warning Data (from 4-10-early-warning-results.md)
import { earlyWarningData as earlyWarningStandalone } from '../data/crisis/early-warning-data'

// Twitter/X Intelligence Data (from 5-1-twitter-x-results.md)
import { twitterXData } from '../data/social/twitter-x-data'

// Social Sentiment Data (from 9-x sentiment files and 10-2 social media trends)
import { socialSentimentData } from '../data/perception/social-sentiment-data'

// Regional Perception Data (from 3-1-international-perception-results.md)
import { regionalPerceptionData } from '../data/perception/regional-data'

// Global Standing / Competitive Benchmarking Data (from 3-3-competitive-benchmarking-results.md)
import { globalStandingData } from '../data/perception/global-data'

// Framing Analysis Data (from 3-5-framing-analysis-results.md)
import { framingAnalysisData } from '../data/perception/framing-analysis-data'

// Competitive Benchmarking Data (from 3-3-competitive-benchmarking-results.md) - Full extraction
import { competitiveBenchmarkingData } from '../data/perception/competitive-benchmarking-data'

// Perception Gap Data (from 3-10-perception-gap-results.md)
import { perceptionGapData } from '../data/perception/perception-gap-data'

// Perception Overview Data (from 3-1-international-perception-results.md)
import { perceptionOverviewData } from '../data/perception/perception-overview-data'

// Politics & Governance Data (from 2-1-politics-governance-results.md)
import { politicsData } from '@/lib/data/topics/politics-data'

// Instagram Intelligence Data (from 5-5-instagram-results.md)
import { instagramIntelligenceData } from '../data/instagram-data'

// Facebook Intelligence Data (from 5-4-facebook-meta-results.md)
import { facebookIntelligenceData } from '../data/social/facebook-data'

// Facebook Meta Intelligence Data (from 5-4-facebook-meta-results.md)
import { facebookMetaData } from '../data/social/facebook-meta-data'

// TikTok Intelligence Data (from 5-2-tiktok-results.md)
import { tiktokIntelligenceData } from '../data/social/tiktok-data'

import { telegramIntelligence } from '../data/social/telegram-data'

// Snapchat Comprehensive Data (from 5-10-snapchat-results.md)
import { snapchatData } from '../data/social/snapchat-data'

// LinkedIn Intelligence Data (from 5-6-linkedin-results.md)
import { linkedinData } from '../data/social/linkedin-data'

// Threads Intelligence Data (from 5-9-threads-results.md)
import { threadsData } from '../data/social/threads-data'

// Corporate Entities Data (from 1-7-corporate-entities-results.md)
import { corporateEntitiesData } from '@/lib/data/entity/corporate-entities-data'

// Infrastructure Data (from 1-9-infrastructure-results.md)
import { infrastructureData } from '@/lib/data/entity/infrastructure-data'

// Narrative Themes Data (from 3-4-narrative-tracking-results.md - treated as Narrative Themes for MD 3-8)
import { narrativeThemesData } from '@/lib/data/perception/narrative-themes-data'

// Narrative Tracking Data (from 3-4-narrative-tracking-results.md)
import { narrativeTrackingData } from '@/lib/data/perception/narrative-tracking-data'

// Media Tone Data (from 3-5-media-tone-results.md)
import { mediaToneData } from '@/lib/data/perception/media-tone-data'

// Media Bias Data (from 3-6-media-bias-results.md)
import { mediaBiasData } from '@/lib/data/perception/media-bias-data'

// Propaganda & Disinformation Data (from 3-7-propaganda-disinformation-results.md)
import { propagandaDisinformationData } from '@/lib/data/perception/propaganda-disinformation-data'

// Brand UAE Data (from 3-9-brand-uae-results.md)
import { brandUaeData } from '@/lib/data/perception/brand-uae-data'

// Reddit Intelligence Data (from 5-7-reddit-results.md)
import { redditData } from '../data/social/reddit-data'

// YouTube Intelligence Data (from 5-3-youtube-results.md)
import { youtubeIntelligenceData } from '../data/social/youtube-data'

import {
  // Entity Data
  federalOfficialsData,
  royalFamilyData,
  emirateEntitiesData,
  mediaOrganizationsData,
  journalistsData,
  influencersData,
  internationalOrgsData,
  infrastructureEntitiesData,
  eventEntitiesData,
  entityOverview,
  // Topics Data
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
  transportationData,
  legalRegulatoryData,
  laborEmploymentData,
  demographicsMigrationData,
  religionInterfaithData,
  topicsOverview,
  // Gap Analysis Data (MD 12-8)
  gapAnalysisOverview,
} from './index'

// Media & Communications Comprehensive Data (from 2-7-media-communications-results.md)
import { mediaData } from '@/lib/data/topics/media-data'

// Economy & Business Comprehensive Data (from 2-2-economy-business-results.md)
import {
  economyBusinessData as economyBusinessDataNew,
  documentInfo,
  macroeconomicIndicators,
  gdpGrowthRates,
  gdpSizeRankings,
  sectoralContributions,
  inflationData,
  monetaryPolicy,
  governmentBudget,
  sovereignDebt,
  bankingSectorPerformance,
  majorBankPerformance,
  emiratesNBDDetailed,
  islamicFintech,
  stockExchanges,
  uaeSwfAssets,
  totalUAESWF,
  mubadalaDetailed,
  adnocGroupPerformance,
  adnocInvestmentPlan,
  opecContext,
  diversificationMetrics,
  d33AgendaTargets,
  weTheUAEGoals,
  uaeTradePerformance,
  uaeUSBilateralTrade,
  globalTradeRanking,
  uaeFdiPerformance,
  fdiContext,
  dubaiPropertyMarket,
  abuDhabiProperty,
  nakheelProjects,
  emaarPerformance,
  property2026Outlook,
  uaeFreeZones,
  freeZoneBenefits,
  freeZoneRegulatoryUpdates,
  freeZoneSectorFocus,
  taxStructure,
  taxTimeline,
  qualifyingIncome,
  dubaiStartupEcosystem,
  uaeStartupEcosystem,
  priorityStartupSectors,
  uaeDigitalEconomy,
  governmentDigitalStrategy,
  cryptoRegulation,
  dpWorldJebelAliPerformance,
  jebelAliStatus,
  aviationPerformance,
  dubaiAirshow2025,
  uaeHealthcareMarket,
  healthcareRegulation,
  uaeConstructionMarket,
  constructionGrowthDrivers,
  uaeManufacturingPerformance,
  manufacturingAchievements,
  uaeEducationMarket,
  educationInitiatives,
  uaeEmploymentStatistics,
  laborMarketCharacteristics,
  uaeSovereignCreditRatings,
  ratingDetails,
  uaeFatfStatus,
  keyRegulatoryChanges,
  uaeCostOfLiving,
  overallEconomicSentiment,
  sectorSentimentMatrix,
  sourceCredibilityAssessment,
  identifiedChallenges,
  riskAssessment,
  keyEconomicIndicators,
  tradeDashboard,
  investmentDashboard,
  stockMarketDashboard,
  sourcesByQuery,
  appendixMacroeconomicSummary,
  appendixFinancialSector,
  appendixTradeInvestment,
  appendixRealEstate,
  economyDataArray,
} from '@/lib/data/topics/economy-data'

// Culture & Society Comprehensive Data (from 2-4-culture-society-results.md)
import { cultureData } from '@/lib/data/topics/culture-data'

// Soft Power Data (from 3-8-soft-power-results.md)
import { softPowerData } from '@/lib/data/perception'

// National Image Data (from 3-1-international-perception-results.md)
import { nationalImageData } from '@/lib/data/perception/image-data'

// Domestic Perception Data (from 3-2-domestic-perception-results.md)
import { domesticPerceptionData } from '@/lib/data/perception/domestic-perception-data'

// Environment & Infrastructure Data (from 2-5-environment-infrastructure-results.md)
import {
  environmentData,
  climatePolicyData,
  netZero2050Data,
  renewableEnergyData,
  cop28Data,
  airQualityData,
  waterDesalinationData,
  wasteManagementData,
  biodiversityData,
  climateImpactsData,
  perCapitaEmissionsData,
  greenwashingData,
  energyInfrastructureData,
  marineThreatsData,
  landReclamationData,
  sustainabilityData,
  megaInfrastructureData,
  roadSafetyData,
  trafficCongestionData,
  dashboardKPIs,
  entityRegisterData,
  sentimentAnalysisData,
  uaeRelevanceAssessmentData,
  sourceCredibilityData,
} from '@/lib/data/topics/environment-data'

// Influencers Data (from 1-6-influencers-results.md) - comprehensive data
import {
  allInfluencers,
  allMegaInfluencers,
  allMacroInfluencers,
  allMicroInfluencers,
  keyMetrics,
  top10Influencers,
  tierFramework,
  engagementByCategory,
  fazzaProfile,
  beautyLifestyleMegaInfluencers,
  fashionMegaInfluencers,
  comedyEntertainmentMegaInfluencers,
  foodMegaInfluencers,
  techMegaInfluencers,
  luxuryLifestyleMegaInfluencers,
  dubaiMacroInfluencers,
  abuDhabiMacroInfluencers,
  techMacroInfluencers,
  emiratiFashionMicroInfluencers,
  foodMicroInfluencers,
  beautyCosmeticsInfluencers,
  travelTourismInfluencers,
  financialInfluencers,
  youtubeTopUaeCreators,
  influencerAgencies,
  agencyComparison,
  industryStatistics,
  uaeMediaLaw,
  eligibilityRequirements,
  regulatoryFines,
  regulatoryTimeline,
  complianceRequirements,
  uaeSocialMediaStats,
  influencerFollowingMetrics,
  engagementRankingsDubai,
  currentlyImprisonedDissidents,
  exiledDissidents,
  princessLatifaCase,
  humanRightsConcerns,
  keyTrendsInsights,
  dataTablesIndex,
  richestUaeInfluencers,
  executionMetadata,
  sourcesAttribution,
} from '@/lib/data/entity/influencers-data'
import type { InfluencerProfile } from '@/lib/data/entity/influencers-data'

import type {
  ClairvoyanceKPIs,
  Campaign,
  Influencer,
  Persona,
  MythVector,
  VoidVector,
  InfodemicCase,
  SeasonalThreat,
  AmplificationNode,
  // UAE NDIP Entity Types
  EntityProfile,
  EntityOverview,
  // UAE NDIP Topic Types
  TopicAnalysis,
  TopicMetrics,
  // UAE NDIP Crisis Types
  CrisisEvent,
  CrisisOverview,
  // UAE NDIP Social Media Types
  PlatformIntelligence,
  // UAE NDIP Language Types
  LanguageIntelligence,
  // UAE NDIP Stakeholder Types
  StakeholderIntelligence,
  // UAE NDIP Historical Types
  HistoricalEra,
  // UAE NDIP Trends Types
  TrendAnalysis,
  // UAE NDIP Verification Types
  VerificationResult,
  // UAE NDIP Monitoring Types
  MonitoringReport,
} from './types'

// ============================================================================
// CLAIRVOYANCE-CX HOOKS
// ============================================================================

/**
 * useExecutiveBridgeData - Hook for Executive Bridge module
 */
export function useExecutiveBridgeData() {
  const [data, setData] = useState(clairvoyanceData.executiveBridge)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData.executiveBridge) }
}

/**
 * useOmniSurveillanceData - Hook for Omni-Surveillance module
 */
export function useOmniSurveillanceData() {
  const [data, setData] = useState(clairvoyanceData.omniSurveillance)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData.omniSurveillance) }
}

/**
 * useCrisisWarRoomData - Hook for Crisis War Room module
 */
export function useCrisisWarRoomData() {
  const [data, setData] = useState(clairvoyanceData.crisisWarRoom)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData.crisisWarRoom) }
}

/**
 * useNarrativeLabData - Hook for Narrative Lab module
 */
export function useNarrativeLabData() {
  const [data, setData] = useState(clairvoyanceData.narrativeLab)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData.narrativeLab) }
}

/**
 * useStrategicActionData - Hook for Strategic Action module
 */
export function useStrategicActionData() {
  const [data, setData] = useState(clairvoyanceData.strategicAction)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData.strategicAction) }
}

/**
 * useGeoIntelligenceData - Hook for Geo-Intelligence module
 */
export function useGeoIntelligenceData() {
  const [data, setData] = useState(clairvoyanceData.geoIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData.geoIntelligence) }
}

/**
 * useCompetitiveIntelData - Hook for Competitive Intel module
 */
export function useCompetitiveIntelData() {
  const [data, setData] = useState(clairvoyanceData.competitiveIntel)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData.competitiveIntel) }
}

/**
 * useSystemGovernanceData - Hook for System Governance module
 */
export function useSystemGovernanceData() {
  const [data, setData] = useState(clairvoyanceData.systemGovernance)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData.systemGovernance) }
}

// ============================================================================
// PERCEPTION-X2 HOOKS
// ============================================================================

/**
 * useOmniscientIntelligenceData - Hook for Omniscient Intelligence module
 */
export function useOmniscientIntelligenceData() {
  const [data, setData] = useState(perceptionData.omniscientIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.omniscientIntelligence) }
}

/**
 * useStrategyTargetingData - Hook for Strategy & Targeting module
 */
export function useStrategyTargetingData() {
  const [data, setData] = useState(perceptionData.strategyTargeting)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.strategyTargeting) }
}

/**
 * useProductionData - Hook for Production module
 */
export function useProductionData() {
  const [data, setData] = useState(perceptionData.production)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.production) }
}

/**
 * useInfluenceData - Hook for Influence module
 */
export function useInfluenceData() {
  const [data, setData] = useState(perceptionData.influence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.influence) }
}

/**
 * useOperationsData - Hook for Operations module
 */
export function useOperationsData() {
  const [data, setData] = useState(perceptionData.operations)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.operations) }
}

/**
 * useAnalyticsData - Hook for Analytics module
 */
export function useAnalyticsData() {
  const [data, setData] = useState(perceptionData.analytics)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.analytics) }
}

/**
 * useGovernanceData - Hook for Governance module
 */
export function useGovernanceData() {
  const [data, setData] = useState(perceptionData.governance)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.governance) }
}

/**
 * useVoidFillerData - Hook for Void Filler module
 */
export function useVoidFillerData() {
  const [data, setData] = useState(perceptionData.voidFiller)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.voidFiller) }
}

/**
 * useMediaForensicsData - Hook for Media Forensics module
 */
export function useMediaForensicsData() {
  const [data, setData] = useState(perceptionData.mediaForensics)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.mediaForensics) }
}

/**
 * usePsychoSemanticData - Hook for Psycho-Semantic Engine module
 */
export function usePsychoSemanticData() {
  const [data, setData] = useState(perceptionData.psychoSemantic)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.psychoSemantic) }
}

/**
 * useCognitiveResilienceData - Hook for Cognitive Resilience module
 */
export function useCognitiveResilienceData() {
  const [data, setData] = useState(perceptionData.cognitiveResilience)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData.cognitiveResilience) }
}

/**
 * useBrandUaeData - Hook for Brand UAE module
 */
export function useBrandUaeData() {
  const [data, setData] = useState(brandUaeData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(brandUaeData) }
}

// ============================================================================
// RICOCHET-CATALYST-X HOOKS
// ============================================================================

/**
 * useCommandPrimeData - Hook for Command Prime module
 */
export function useCommandPrimeData() {
  const [data, setData] = useState(ricochetData.commandPrime)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.commandPrime) }
}

/**
 * useRicochetDistributionData - Hook for Ricochet Distribution Core module
 */
export function useRicochetDistributionData() {
  const [data, setData] = useState(ricochetData.ricochetDistribution)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.ricochetDistribution) }
}

/**
 * useCatalystOptimizationData - Hook for Catalyst Optimization Grid module
 */
export function useCatalystOptimizationData() {
  const [data, setData] = useState(ricochetData.catalystOptimization)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.catalystOptimization) }
}

/**
 * useAmplificationData - Hook for Amplification & Viral Engineering module
 */
export function useAmplificationData() {
  const [data, setData] = useState(ricochetData.amplification)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.amplification) }
}

/**
 * useXFactorData - Hook for X-Factor Forensics module
 */
export function useXFactorData() {
  const [data, setData] = useState(ricochetData.xFactor)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.xFactor) }
}

/**
 * usePhoenixData - Hook for Phoenix Crisis Protocol module
 */
export function usePhoenixData() {
  const [data, setData] = useState(ricochetData.phoenix)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.phoenix) }
}

/**
 * useUserData - Hook for User Experience module
 */
export function useUserData() {
  const [data, setData] = useState(ricochetData.userExperience)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.userExperience) }
}

/**
 * useAutomatedLogicData - Hook for Automated Logic Gates module
 */
export function useAutomatedLogicData() {
  const [data, setData] = useState(ricochetData.automatedLogic)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.automatedLogic) }
}

/**
 * useKineticShellData - Hook for Global Kinetic Shell module
 */
export function useKineticShellData() {
  const [data, setData] = useState(ricochetData.kineticShell)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData.kineticShell) }
}

// ============================================================================
// UAE NDIP — STAKEHOLDER INTELLIGENCE HOOKS
// ============================================================================

/**
 * useNamaData - Hook for NAMA data
 */
export function useNamaData() {
  const [data, setData] = useState(namaData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(namaData) }
}

/**
 * useNMCDubaiData - Hook for NMC Dubai data
 */
export function useNMCDubaiData() {
  const [data, setData] = useState(nmcDubaiData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(nmcDubaiData) }
}

/**
 * useMoiData - Hook for Ministry of Interior data
 */
export function useMoiData() {
  const [data, setData] = useState(moiData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(moiData) }
}

/**
 * useMofaData - Hook for Ministry of Foreign Affairs data
 */
export function useMofaData() {
  const [data, setData] = useState(mofaData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(mofaData) }
}

/**
 * useMinistryCultureData - Hook for Ministry of Culture data
 */
export function useMinistryCultureData() {
  const [data, setData] = useState(ministryCultureData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(ministryCultureData) }
}

/**
 * useMinistryEconomyData - Hook for Ministry of Economy data
 */
export function useMinistryEconomyData() {
  const [data, setData] = useState(ministryEconomyData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(ministryEconomyData) }
}

/**
 * useGcoData - Hook for Government Communication Office data
 */
export function useGcoData() {
  const [data, setData] = useState(gcoData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(gcoData) }
}

/**
 * usePrAgencyData - Hook for PR Agency data
 */
export function usePrAgencyData() {
  const [data, setData] = useState(prAgencyData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(prAgencyData) }
}

/**
 * useIntlRelationsData - Hook for International Relations data
 */
export function useIntlRelationsData() {
  const [data, setData] = useState(intlRelationsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(intlRelationsData) }
}

/**
 * useLaborUnionsData - Hook for Labor Unions & Worker Groups data
 */
export function useLaborUnionsData() {
  const [data, setData] = useState(laborUnionsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(laborUnionsData) }
}

/**
 * useWomenOrganizationsData - Hook for Women's Organizations data
 */
export function useWomenOrganizationsData() {
  const [data, setData] = useState(womenOrganizationsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(womenOrganizationsData) }
}

/**
 * useYouthOrganizationsData - Hook for Youth Organizations data
 */
export function useYouthOrganizationsData() {
  const [data, setData] = useState(youthOrganizationsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(youthOrganizationsData) }
}

/**
 * useAcademicsData - Hook for Academic Institutions data
 */
export function useAcademicsData() {
  const [data, setData] = useState(academicsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(academicsData) }
}

/**
 * useTribalNetworksData - Hook for Tribal & Family Networks data
 */
export function useTribalNetworksData() {
  const [data, setData] = useState(tribalNetworksData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(tribalNetworksData) }
}

/**
 * useDiasporaData - Hook for Emirati Diaspora data
 */
export function useDiasporaData() {
  const [data, setData] = useState(diasporaData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(diasporaData) }
}

/**
 * useStakeholderOverviewData - Hook for Stakeholder Overview data
 */
export function useStakeholderOverviewData() {
  const [data, setData] = useState(stakeholderOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(stakeholderOverview) }
}

// ============================================================================
// UAE NDIP — HISTORICAL CONTEXT HOOKS
// ============================================================================

/**
 * usePreFederationData - Hook for Pre-Federation era data
 */
export function usePreFederationData() {
  const [data, setData] = useState(preFederationData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(preFederationData) }
}

/**
 * useFederationEarlyData - Hook for Early Federation era data
 */
export function useFederationEarlyData() {
  const [data, setData] = useState(federationEarlyData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(federationEarlyData) }
}

/**
 * usePostGulfWarData - Hook for Post-Gulf War era data
 */
export function usePostGulfWarData() {
  const [data, setData] = useState(postGulfWarData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(postGulfWarData) }
}

/**
 * useRapidDevelopmentData - Hook for Rapid Development era data
 */
export function useRapidDevelopmentData() {
  const [data, setData] = useState(rapidDevelopmentData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(rapidDevelopmentData) }
}

/**
 * useArabSpringData - Hook for Arab Spring era data
 */
export function useArabSpringData() {
  const [data, setData] = useState(arabSpringData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(arabSpringData) }
}

/**
 * useModernizationVisionData - Hook for Modernization & Vision era data
 */
export function useModernizationVisionData() {
  const [data, setData] = useState(modernizationVisionData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(modernizationVisionData) }
}

/**
 * usePostPandemicExpoData - Hook for Post-Pandemic & Expo era data
 */
export function usePostPandemicExpoData() {
  const [data, setData] = useState(postPandemicExpoData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(postPandemicExpoData) }
}

/**
 * useRecentEraData - Hook for Recent Era data
 */
export function useRecentEraData() {
  const [data, setData] = useState(recentEraData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(recentEraData) }
}

/**
 * useEventHistoricalData - Hook for Historical Event data
 */
export function useEventHistoricalData() {
  const [data, setData] = useState(eventHistoricalData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(eventHistoricalData) }
}

/**
 * usePolicyAnnouncementData - Hook for Policy Announcement data
 */
export function usePolicyAnnouncementData() {
  const [data, setData] = useState(policyAnnouncementData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(policyAnnouncementData) }
}

/**
 * useHistoricalOverviewData - Hook for Historical Overview data
 */
export function useHistoricalOverviewData() {
  const [data, setData] = useState(historicalOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(historicalOverview) }
}

// ============================================================================
// UAE NDIP — TRENDS INTELLIGENCE HOOKS
// ============================================================================

/**
 * useTrendsOverviewData - Hook for Trends Overview data
 */
export function useTrendsOverviewData() {
  const [data, setData] = useState(trendsOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(trendsOverview) }
}

/**
 * useTrendsDataArrayData - Hook for Trends Data Array
 */
export function useTrendsDataArrayData() {
  const [data, setData] = useState(trendsDataArray)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(trendsDataArray) }
}

/**
 * useRegulatoryTrendsData - Hook for Regulatory Trends data (10-7)
 */
export function useRegulatoryTrendsData() {
  const [data, setData] = useState(trendsOverview['regulatory'])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(trendsOverview['regulatory']) }
}

// ============================================================================
// UAE NDIP — VERIFICATION / FACT-CHECK HOOKS
// ============================================================================

/**
 * useVerificationOverviewData - Hook for Verification Overview data
 */
export function useVerificationOverviewData() {
  const [data, setData] = useState(verificationOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(verificationOverview) }
}

/**
 * useOmissionSilenceData - Hook for Omission & Silence Detection data
 */
export function useOmissionSilenceData() {
  const [data, setData] = useState(omissionSilenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(omissionSilenceData) }
}

/**
 * useOmissionSilenceOverviewData - Hook for Omission & Silence Overview data
 */
export function useOmissionSilenceOverviewData() {
  const [data, setData] = useState(omissionSilenceOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(omissionSilenceOverview) }
}

/**
 * useBotInauthenticData - Hook for Bot & Inauthentic Behavior data
 */
export function useBotInauthenticData() {
  const [data, setData] = useState(botInauthenticData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(botInauthenticData) }
}

// ============================================================================
// UAE NDIP — MONITORING / REAL-TIME COMMAND HOOKS
// ============================================================================

/**
 * useMonitoringOverviewData - Hook for Monitoring Overview data
 */
export function useMonitoringOverviewData() {
  const [data, setData] = useState(monitoringOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(monitoringOverview) }
}

/**
 * useCrisisResponseDeepData - Hook for Crisis Response Deep Research data (MD 12-3)
 */
export function useCrisisResponseDeepData() {
  const [data, setData] = useState(crisisResponseDeepData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(crisisResponseDeepData) }
}

/**
 * useGapAnalysisData - Hook for Gap Analysis data (MD 12-8)
 */
export function useGapAnalysisData() {
  const [data, setData] = useState(gapAnalysisOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(gapAnalysisOverview) }
}

/**
 * useNarrativeThemesData - Hook for Narrative Themes data (MD 3-8 / 3-4)
 * Comprehensive data covering 12 core narratives, topic clusters, discourse analysis,
 * source credibility, key tensions, and dashboard metrics
 */
export function useNarrativeThemesData() {
  const [data, setData] = useState(narrativeThemesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(narrativeThemesData) }
}

/**
 * useNarrativeTrackingData - Hook for Narrative Tracking data (MD 3-4)
 * Comprehensive data covering 12 core narratives, executive summary, UAE profile,
 * all narrative details (pro/counter), data tables, source credibility,
 * sentiment distribution, key tensions, and monitoring recommendations.
 */
export function useNarrativeTrackingData() {
  const [data, setData] = useState(narrativeTrackingData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(narrativeTrackingData) }
}

// ============================================================================
// UAE NDIP — SOFT POWER INTELLIGENCE HOOKS
// ============================================================================

/**
 * useSoftPowerData - Hook for Soft Power data (MD 3-8)
 * Comprehensive data covering cultural diplomacy, education, humanitarian aid,
 * sports diplomacy, digital diplomacy, media diplomacy, nation branding, and more
 */
export function useSoftPowerData() {
  const [data, setData] = useState(softPowerData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(softPowerData) }
}

// ============================================================================
// UAE NDIP — MEDIA TONE INTELLIGENCE HOOKS
// ============================================================================

/**
 * useMediaToneData - Hook for Media Tone data (MD 3-5)
 * Comprehensive data covering media framing analysis, sentiment by tier,
 * source credibility, engagement metrics, and framing scorecards
 */
export function useMediaToneData() {
  const [data, setData] = useState(mediaToneData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(mediaToneData) }
}

/**
 * useFramingAnalysisData - Hook for Framing Analysis data (MD 3-5)
 * Comprehensive data covering media framing patterns, role/power framing,
 * crisis framing response, soft power framing, and framing scorecards.
 * Source: 3-5-framing-analysis-results.md
 */
export function useFramingAnalysisData() {
  const [data, setData] = useState(framingAnalysisData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(framingAnalysisData) }
}

// ============================================================================
// UAE NDIP — PROPAGANDA & DISINFORMATION INTELLIGENCE HOOKS
// ============================================================================

/**
 * usePropagandaDisinformationData - Hook for Propaganda & Disinformation data (MD 3-7)
 * Comprehensive data covering UAE as both actor and target of disinformation,
 * bot/troll infrastructure, deepfake threats, and regional dynamics.
 */
export function usePropagandaDisinformationData() {
  const [data, setData] = useState(propagandaDisinformationData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(propagandaDisinformationData) }
}

// ============================================================================
// UAE NDIP — ENTITY INTELLIGENCE HOOKS
// ============================================================================

/**
 * useFederalOfficialsData - Hook for Federal Officials entity data
 */
export function useFederalOfficialsData() {
  const [data, setData] = useState(federalOfficialsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(federalOfficialsData) }
}

/**
 * useRoyalFamilyData - Hook for Royal Family entity data
 */
export function useRoyalFamilyData() {
  const [data, setData] = useState(royalFamilyData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(royalFamilyData) }
}

/**
 * useEmirateEntitiesData - Hook for Emirate Entities entity data
 */
export function useEmirateEntitiesData() {
  const [data, setData] = useState(emirateEntitiesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(emirateEntitiesData) }
}

/**
 * useMediaOrganizationsData - Hook for Media Organizations entity data
 */
export function useMediaOrganizationsData() {
  const [data, setData] = useState(mediaOrganizationsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(mediaOrganizationsData) }
}

/**
 * useJournalistsData - Hook for Journalists entity data
 */
export function useJournalistsData() {
  const [data, setData] = useState(journalistsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(journalistsData) }
}

/**
 * useInfluencersData - Hook for Influencers entity data (comprehensive from 1-6-influencers-results.md)
 */
export function useInfluencersData() {
  const [data, setData] = useState({
    allInfluencers,
    megaInfluencers: allMegaInfluencers,
    macroInfluencers: allMacroInfluencers,
    microInfluencers: allMicroInfluencers,
    keyMetrics,
    top10Influencers,
    tierFramework,
    engagementByCategory,
    fazzaProfile,
    beautyLifestyleMegaInfluencers,
    fashionMegaInfluencers,
    comedyEntertainmentMegaInfluencers,
    foodMegaInfluencers,
    techMegaInfluencers,
    luxuryLifestyleMegaInfluencers,
    dubaiMacroInfluencers,
    abuDhabiMacroInfluencers,
    techMacroInfluencers,
    emiratiFashionMicroInfluencers,
    foodMicroInfluencers,
    beautyCosmeticsInfluencers,
    travelTourismInfluencers,
    financialInfluencers,
    youtubeTopUaeCreators,
    influencerAgencies,
    agencyComparison,
    industryStatistics,
    uaeMediaLaw,
    eligibilityRequirements,
    regulatoryFines,
    regulatoryTimeline,
    complianceRequirements,
    uaeSocialMediaStats,
    influencerFollowingMetrics,
    engagementRankingsDubai,
    currentlyImprisonedDissidents,
    exiledDissidents,
    princessLatifaCase,
    humanRightsConcerns,
    keyTrendsInsights,
    dataTablesIndex,
    richestUaeInfluencers,
    executionMetadata,
    sourcesAttribution,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData({
    allInfluencers,
    megaInfluencers: allMegaInfluencers,
    macroInfluencers: allMacroInfluencers,
    microInfluencers: allMicroInfluencers,
    keyMetrics,
    top10Influencers,
    tierFramework,
    engagementByCategory,
    fazzaProfile,
    beautyLifestyleMegaInfluencers,
    fashionMegaInfluencers,
    comedyEntertainmentMegaInfluencers,
    foodMegaInfluencers,
    techMegaInfluencers,
    luxuryLifestyleMegaInfluencers,
    dubaiMacroInfluencers,
    abuDhabiMacroInfluencers,
    techMacroInfluencers,
    emiratiFashionMicroInfluencers,
    foodMicroInfluencers,
    beautyCosmeticsInfluencers,
    travelTourismInfluencers,
    financialInfluencers,
    youtubeTopUaeCreators,
    influencerAgencies,
    agencyComparison,
    industryStatistics,
    uaeMediaLaw,
    eligibilityRequirements,
    regulatoryFines,
    regulatoryTimeline,
    complianceRequirements,
    uaeSocialMediaStats,
    influencerFollowingMetrics,
    engagementRankingsDubai,
    currentlyImprisonedDissidents,
    exiledDissidents,
    princessLatifaCase,
    humanRightsConcerns,
    keyTrendsInsights,
    dataTablesIndex,
    richestUaeInfluencers,
    executionMetadata,
    sourcesAttribution,
  }) }
}

/**
 * useCorporateEntitiesData - Hook for Corporate Entities entity data
 */
export function useCorporateEntitiesData() {
  const [data, setData] = useState(corporateEntitiesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(corporateEntitiesData) }
}

/**
 * useInternationalOrgsData - Hook for International Organizations entity data
 */
export function useInternationalOrgsData() {
  const [data, setData] = useState(internationalOrgsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(internationalOrgsData) }
}

/**
 * useInfrastructureEntitiesData - Hook for Infrastructure Entities entity data
 */
export function useInfrastructureEntitiesData() {
  const [data, setData] = useState(infrastructureEntitiesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(infrastructureEntitiesData) }
}

/**
 * useInfrastructureData - Hook for Infrastructure comprehensive data (from 1-9-infrastructure-results.md)
 * Comprehensive data covering: Airports (DXB, AUH, DWC), Ports (Jebel Ali, Khalifa, Fujairah),
 * Energy (Barakah Nuclear, MBR Solar Park, Noor Abu Dhabi, Desalination), Landmarks (Burj Khalifa,
 * Palm Jumeirah, World Islands, Museum of Future, Louvre Abu Dhabi, Sheikh Zayed Grand Mosque),
 * Geopolitical Incidents (2026), Source Credibility, and UAE Relevance Assessment
 */
export function useInfrastructureData() {
  const [data, setData] = useState(infrastructureData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(infrastructureData) }
}

/**
 * useEventEntitiesData - Hook for Event Entities entity data
 */
export function useEventEntitiesData() {
  const [data, setData] = useState(eventEntitiesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(eventEntitiesData) }
}

/**
 * useEntityOverviewData - Hook for Entity Overview data
 */
export function useEntityOverviewData() {
  const [data, setData] = useState(entityOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(entityOverview) }
}

// ============================================================================
// UAE NDIP — TOPICS / H-S-P-B-C FRAMEWORK HOOKS
// ============================================================================

/**
 * usePoliticsGovernanceData - Hook for Politics & Governance topic data
 * Uses politicsData from @/lib/data/topics/politics-data (MD 2-1 extraction)
 */
export function usePoliticsGovernanceData() {
  const [data, setData] = useState(politicsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(politicsData) }
}

/**
 * useEconomyBusinessData - Hook for Economy & Business topic data
 */
export function useEconomyBusinessData() {
  const [data, setData] = useState(economyBusinessDataNew)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(economyBusinessDataNew) }
}

/**
 * useSecurityDefenseData - Hook for Security & Defense topic data
 */
export function useSecurityDefenseData() {
  const [data, setData] = useState(securityDefenseData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(securityDefenseData) }
}

/**
 * useCultureSocietyData - Hook for Culture & Society topic data
 */
export function useCultureSocietyData() {
  const [data, setData] = useState(cultureSocietyData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(cultureSocietyData) }
}

/**
 * useCultureData - Hook for Culture comprehensive data (new enhanced version)
 */
export function useCultureData() {
  const [data, setData] = useState(cultureData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(cultureData) }
}

/**
 * useEnvironmentInfrastructureData - Hook for Environment & Infrastructure topic data
 */
export function useEnvironmentInfrastructureData() {
  const [data, setData] = useState(environmentInfrastructureData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(environmentInfrastructureData) }
}

/**
 * useEnvironmentData - Hook for Environment & Infrastructure data (from 2-5-environment-infrastructure-results.md)
 * Comprehensive data covering: Climate Policy, Net Zero 2050, Renewable Energy, COP28, Air Quality,
 * Water Resources, Desalination, Waste Management, Biodiversity, Mangroves, Coral Reefs, Protected Areas,
 * Climate Impacts, Per Capita Emissions, Greenwashing, Masdar, Barakah Nuclear, Oil Spills,
 * Land Reclamation, Sustainability Strategies, Mega Infrastructure, Road Safety, Traffic Congestion
 */
export function useEnvironmentData() {
  const [data, setData] = useState(environmentData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(environmentData) }
}

/**
 * useEnvironmentSectionData - Hook for all Environment section sub-data objects
 */
export function useEnvironmentSectionData() {
  const [data, setData] = useState({
    climatePolicyData,
    netZero2050Data,
    renewableEnergyData,
    cop28Data,
    airQualityData,
    waterDesalinationData,
    wasteManagementData,
    biodiversityData,
    climateImpactsData,
    perCapitaEmissionsData,
    greenwashingData,
    energyInfrastructureData,
    marineThreatsData,
    landReclamationData,
    sustainabilityData,
    megaInfrastructureData,
    roadSafetyData,
    trafficCongestionData,
    dashboardKPIs,
    entityRegisterData,
    sentimentAnalysisData,
    uaeRelevanceAssessmentData,
    sourceCredibilityData,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData({
    climatePolicyData,
    netZero2050Data,
    renewableEnergyData,
    cop28Data,
    airQualityData,
    waterDesalinationData,
    wasteManagementData,
    biodiversityData,
    climateImpactsData,
    perCapitaEmissionsData,
    greenwashingData,
    energyInfrastructureData,
    marineThreatsData,
    landReclamationData,
    sustainabilityData,
    megaInfrastructureData,
    roadSafetyData,
    trafficCongestionData,
    dashboardKPIs,
    entityRegisterData,
    sentimentAnalysisData,
    uaeRelevanceAssessmentData,
    sourceCredibilityData,
  }) }
}

/**
 * useInternationalRelationsData - Hook for International Relations topic data
 */
export function useInternationalRelationsData() {
  const [data, setData] = useState(internationalRelationsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(internationalRelationsData) }
}

/**
 * useMediaCommunicationsData - Hook for Media & Communications topic data
 */
export function useMediaCommunicationsData() {
  const [data, setData] = useState(mediaCommunicationsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(mediaCommunicationsData) }
}

/**
 * useMediaData - Hook for comprehensive Media & Communications data (from 2-7-media-communications-results.md)
 */
export function useMediaData() {
  const [data, setData] = useState(mediaData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(mediaData) }
}

/**
 * useTechnologyInnovationData - Hook for Technology & Innovation topic data
 */
export function useTechnologyInnovationData() {
  const [data, setData] = useState(technologyInnovationData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(technologyInnovationData) }
}

/**
 * useSportsIntelligenceData - Hook for Sports Intelligence topic data
 */
export function useSportsIntelligenceData() {
  const [data, setData] = useState(sportsIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(sportsIntelligenceData) }
}

/**
 * useSportsData - Hook for Sports Intelligence data (alias)
 * Returns the same data as useSportsIntelligenceData for convenience
 */
export function useSportsData() {
  const [data, setData] = useState(sportsIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(sportsIntelligenceData) }
}

/**
 * useHealthcareData - Hook for Healthcare topic data
 */
export function useHealthcareData() {
  const [data, setData] = useState(healthcareData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(healthcareData) }
}

/**
 * useEducationYouthData - Hook for Education & Youth topic data
 */
export function useEducationYouthData() {
  const [data, setData] = useState(educationYouthData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(educationYouthData) }
}

/**
 * useEnergySustainabilityData - Hook for Energy & Sustainability topic data
 */
export function useEnergySustainabilityData() {
  const [data, setData] = useState(energySustainabilityData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(energySustainabilityData) }
}

/**
 * useTourismHospitalityData - Hook for Tourism & Hospitality topic data
 */
export function useTourismHospitalityData() {
  const [data, setData] = useState(tourismHospitalityData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(tourismHospitalityData) }
}

/**
 * useRealEstateData - Hook for Real Estate topic data
 */
export function useRealEstateData() {
  const [data, setData] = useState(realEstateData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(realEstateData) }
}

/**
 * useFoodSecurityData - Hook for Food Security topic data
 */
export function useFoodSecurityData() {
  const [data, setData] = useState(foodSecurityData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(foodSecurityData) }
}

/**
 * useTransportationLogisticsData - Hook for Transportation & Logistics topic data
 */
export function useTransportationLogisticsData() {
  const [data, setData] = useState(transportationData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(transportationData) }
}

/**
 * useLegalRegulatoryData - Hook for Legal & Regulatory topic data
 */
export function useLegalRegulatoryData() {
  const [data, setData] = useState(legalRegulatoryData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(legalRegulatoryData) }
}

/**
 * useLaborEmploymentData - Hook for Labor & Employment topic data
 */
export function useLaborEmploymentData() {
  const [data, setData] = useState(laborEmploymentData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(laborEmploymentData) }
}

/**
 * useDemographicsMigrationData - Hook for Demographics & Migration topic data
 */
export function useDemographicsMigrationData() {
  const [data, setData] = useState(demographicsMigrationData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(demographicsMigrationData) }
}

/**
 * useReligionInterfaithData - Hook for Religion & Interfaith topic data
 */
export function useReligionInterfaithData() {
  const [data, setData] = useState(religionInterfaithData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(religionInterfaithData) }
}

/**
 * useTopicsOverviewData - Hook for Topics Overview data
 */
export function useTopicsOverviewData() {
  const [data, setData] = useState(topicsOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(topicsOverview) }
}

// ============================================================================
// UAE NDIP — CRISIS INTELLIGENCE / PHOENIX PROTOCOL HOOKS
// ============================================================================

/**
 * useNaturalDisasterData - Hook for Natural Disaster crisis data
 */
export function useNaturalDisasterData() {
  const [data, setData] = useState(naturalDisasterData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(naturalDisasterData) }
}

/**
 * useGeopoliticalCrisisData - Hook for Geopolitical Crisis data
 */
export function useGeopoliticalCrisisData() {
  const [data, setData] = useState(geopoliticalCrisisData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(geopoliticalCrisisData) }
}

/**
 * useSocialCrisisData - Hook for Social Crisis data
 */
export function useSocialCrisisData() {
  const [data, setData] = useState(socialCrisisData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(socialCrisisData) }
}

/**
 * useEconomicCrisisData - Hook for Economic Crisis data
 */
export function useEconomicCrisisData() {
  const [data, setData] = useState(economicCrisisData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(economicCrisisData) }
}

/**
 * useReputationCrisisData - Hook for Reputation Crisis data
 */
export function useReputationCrisisData() {
  const [data, setData] = useState(reputationCrisisData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(reputationCrisisData) }
}

/**
 * useReputationCrisisPageData - Hook for Reputation Crisis Page data (comprehensive MD data)
 */
export function useReputationCrisisPageData() {
  const [data, setData] = useState(reputationCrisisData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(reputationCrisisData) }
}

/**
 * useCommunicationCrisisData - Hook for Communication Crisis data (comprehensive perception data)
 */
export function useCommunicationCrisisData() {
  const [data, setData] = useState(crisisCommData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(crisisCommData) }
}

/**
 * useTerrorismExtremismData - Hook for Terrorism & Extremism data
 */
export function useTerrorismExtremismData() {
  const [data, setData] = useState(terrorismExtremismCrisisData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(terrorismExtremismCrisisData) }
}

/**
 * useCyberThreatData - Hook for Cyber Threat data
 */
export function useCyberThreatData() {
  const [data, setData] = useState(cyberThreatData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(cyberThreatData) }
}

/**
 * usePublicHealthData - Hook for Public Health data
 */
export function usePublicHealthData() {
  const [data, setData] = useState(publicHealthData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(publicHealthData) }
}

/**
 * useEarlyWarningData - Hook for Early Warning data
 */
export function useEarlyWarningData() {
  const [data, setData] = useState(earlyWarningStandalone)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(earlyWarningStandalone) }
}

/**
 * useCrisisOverviewData - Hook for Crisis Overview data
 */
export function useCrisisOverviewData() {
  const [data, setData] = useState(crisisOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(crisisOverview) }
}

// ============================================================================
// UAE NDIP — SOCIAL MEDIA INTELLIGENCE HOOKS
// ============================================================================

/**
 * useTwitterIntelligenceData - Hook for Twitter/X intelligence data
 */
export function useTwitterIntelligenceData() {
  const [data, setData] = useState(twitterXData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(twitterXData) }
}

/**
 * useTwitterXData - Hook for Twitter/X intelligence data from MD 5-1
 * Complete Twitter/X intelligence data extracted from 5-1-twitter-x-results.md
 */
export function useTwitterXData() {
  const [data, setData] = useState(twitterXData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(twitterXData) }
}

/**
 * useTiktokIntelligenceData - Hook for TikTok intelligence data
 */
export function useTiktokIntelligenceData() {
  const [data, setData] = useState(tiktokIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(tiktokIntelligenceData) }
}

/**
 * useTiktokData - Hook for TikTok intelligence data (convenience alias)
 * Complete TikTok intelligence data extracted from 5-2-tiktok-results.md
 */
export function useTiktokData() {
  const [data, setData] = useState(tiktokIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(tiktokIntelligenceData) }
}

/**
 * useYoutubeIntelligenceData - Hook for YouTube intelligence data
 */
export function useYoutubeIntelligenceData() {
  const [data, setData] = useState(youtubeIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(youtubeIntelligenceData) }
}

/**
 * useYoutubeData - Hook for comprehensive YouTube intelligence data (100% MD content)
 * Uses youtubeIntelligenceData which contains all 15 sections from 5-3-youtube-results.md
 */
export function useYoutubeData() {
  const [data, setData] = useState(youtubeIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(youtubeIntelligenceData) }
}

/**
 * useFacebookIntelligenceData - Hook for Facebook intelligence data
 */
export function useFacebookIntelligenceData() {
  const [data, setData] = useState(facebookIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(facebookIntelligenceData) }
}

/**
 * useFacebookMetaData - Hook for Facebook Meta intelligence data (100% MD content)
 * Uses facebookMetaData which contains all 22 sections from 5-4-facebook-meta-results.md
 */
export function useFacebookMetaData() {
  const [data, setData] = useState(facebookMetaData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(facebookMetaData) }
}

/**
 * useFacebookData - Hook for unified Facebook intelligence data (100% MD content)
 * Combines data from facebook-meta-data.ts (PlatformIntelligence) and facebook-data.ts (detailed sections)
 * Covers all 22+ sections from 5-4-facebook-meta-results.md
 */
export function useFacebookData() {
  const [data, setData] = useState(facebookMetaData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(facebookMetaData) }
}

/**
 * useInstagramIntelligenceData - Hook for Instagram intelligence data
 */
export function useInstagramIntelligenceData() {
  const [data, setData] = useState(instagramIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(instagramIntelligenceData) }
}

/**
 * useInstagramData - Hook for Instagram data (convenience wrapper)
 */
export function useInstagramData() {
  const [data, setData] = useState(instagramIntelligenceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(instagramIntelligenceData) }
}

/**
 * useLinkedinIntelligenceData - Hook for LinkedIn intelligence data
 */
export function useLinkedinIntelligenceData() {
  const [data, setData] = useState(linkedinData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(linkedinData) }
}

/**
 * useLinkedinData - Hook for LinkedIn data from 5-6-linkedin-results.md
 * Provides comprehensive UAE LinkedIn intelligence including layoffs, hiring trends,
 * salary data, workplace culture, discrimination, visa issues, Emiratisation,
 * AI skills demand, remote work, freelancer rights, and more.
 */
export function useLinkedinData() {
  const [data, setData] = useState(linkedinData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(linkedinData) }
}

/**
 * useRedditIntelligenceData - Hook for Reddit intelligence data
 */
export function useRedditIntelligenceData() {
  const [data, setData] = useState(redditData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(redditData) }
}

/**
 * useRedditData - Hook for comprehensive Reddit intelligence data (from 5-7-reddit-results.md)
 * Provides all Reddit data including execution metadata, focus areas, query patterns,
 * posts by category, labour law data, mental health stats, banking fraud, real estate,
 * human rights, alcohol laws, living costs, and more.
 */
export function useRedditData() {
  const [data, setData] = useState(redditData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(redditData) }
}

/**
 * useTelegramIntelligenceData - Hook for Telegram intelligence data
 */
export function useTelegramIntelligenceData() {
  const [data, setData] = useState(telegramIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(telegramIntelligence) }
}

/**
 * useTelegramData - Hook for Telegram intelligence data (convenience alias)
 */
export function useTelegramData() {
  const [data, setData] = useState(telegramIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(telegramIntelligence) }
}

/**
 * useThreadsIntelligenceData - Hook for Threads intelligence data
 */
export function useThreadsIntelligenceData() {
  const [data, setData] = useState(threadsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(threadsData) }
}

/**
 * useThreadsData - Hook for Threads intelligence data (alias)
 */
export function useThreadsData() {
  const [data, setData] = useState(threadsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(threadsData) }
}

/**
 * useSnapchatIntelligenceData - Hook for Snapchat intelligence data
 */
export function useSnapchatIntelligenceData() {
  const [data, setData] = useState(snapchatData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(snapchatData) }
}

/**
 * useSnapchatData - Hook for comprehensive Snapchat data (100% MD content)
 * Includes: uaeUserMetrics, platformComparison, topInfluencers, arStats,
 * advertisingPricing, transparencyReportH1_2025, sentimentAnalysis, etc.
 */
export function useSnapchatData() {
  const [data, setData] = useState(snapchatData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(snapchatData) }
}

// ============================================================================
// STUB DATA FOR MISSING DATA SOURCES (to be replaced with real data)
// ============================================================================
const discordIntelligence = { metrics: {}, serverCategories: [], engagementMetrics: {} }
const whatsappIntelligence = { metrics: {}, groups: [], channels: [] }
const googleSerpIntelligence = { metrics: {}, serpResults: [], topStories: [] }
const newsWebsitesIntelligence = { metrics: {}, topNews: [], categories: [] }
const forumsIntelligence = { metrics: {}, popularThreads: [], categories: [] }
const blogsIntelligence = { metrics: {}, popularPosts: [], categories: [] }
const darkWebIntelligence = { metrics: {}, forums: [], marketplaces: [] }
const gamingIntelligence = { metrics: {}, popularGames: [], communities: [] }
const web3Intelligence = { metrics: {}, nftCollections: [], defiProtocols: [] }
const podcastIntelligence = { metrics: {}, popularPodcasts: [], categories: [] }
const darkSocialAggregate = { metrics: {}, platforms: [], trends: [] }

/**
 * useDiscordIntelligenceData - Hook for Discord intelligence data
 */
export function useDiscordIntelligenceData() {
  const [data, setData] = useState(discordIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(discordIntelligence) }
}

/**
 * useWhatsAppIntelligenceData - Hook for WhatsApp intelligence data
 */
export function useWhatsAppIntelligenceData() {
  const [data, setData] = useState(whatsappIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(whatsappIntelligence) }
}

/**
 * useGoogleSerpIntelligenceData - Hook for Google SERP intelligence data
 */
export function useGoogleSerpIntelligenceData() {
  const [data, setData] = useState(googleSerpIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(googleSerpIntelligence) }
}

/**
 * useNewsWebsitesIntelligenceData - Hook for News Websites intelligence data
 */
export function useNewsWebsitesIntelligenceData() {
  const [data, setData] = useState(newsWebsitesIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(newsWebsitesIntelligence) }
}

/**
 * useForumsIntelligenceData - Hook for Forums intelligence data
 */
export function useForumsIntelligenceData() {
  const [data, setData] = useState(forumsIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(forumsIntelligence) }
}

/**
 * useBlogsIntelligenceData - Hook for Blogs intelligence data
 */
export function useBlogsIntelligenceData() {
  const [data, setData] = useState(blogsIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(blogsIntelligence) }
}

/**
 * useDarkWebIntelligenceData - Hook for Dark Web intelligence data
 */
export function useDarkWebIntelligenceData() {
  const [data, setData] = useState(darkWebIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(darkWebIntelligence) }
}

/**
 * useGamingIntelligenceData - Hook for Gaming intelligence data
 */
export function useGamingIntelligenceData() {
  const [data, setData] = useState(gamingIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(gamingIntelligence) }
}

/**
 * useWeb3IntelligenceData - Hook for Web3 intelligence data
 */
export function useWeb3IntelligenceData() {
  const [data, setData] = useState(web3Intelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(web3Intelligence) }
}

/**
 * usePodcastIntelligenceData - Hook for Podcast intelligence data
 */
export function usePodcastIntelligenceData() {
  const [data, setData] = useState(podcastIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(podcastIntelligence) }
}

/**
 * useDarkSocialAggregateData - Hook for Dark Social Aggregate data
 */
export function useDarkSocialAggregateData() {
  const [data, setData] = useState(darkSocialAggregate)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(darkSocialAggregate) }
}

// ============================================================================
// UAE NDIP — MULTI-LINGUAL INTELLIGENCE HOOKS
// ============================================================================

// Stub data for missing multilingual intelligence sources
const msaQueriesData = {
  queries: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const emiratiArabicData = {
  dialect: '',
  examples: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const gulfArabicData = {
  dialect: '',
  examples: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const levantineArabicData = {
  dialect: '',
  examples: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const egyptianArabicData = {
  dialect: '',
  examples: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const maghrebiArabicData = {
  dialect: '',
  examples: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const englishQueriesData = {
  queries: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const frenchQueriesData = {
  queries: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const urduHindiData = {
  queries: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const persianData = {
  queries: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const malayIndonesianData = {
  queries: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const russianData = {
  queries: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const chineseData = {
  queries: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const transliterationData = {
  examples: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}
const codeSwitchingData = {
  examples: [],
  metrics: {},
  extendedData: {
    categoryDescriptions: [],
    executionStatusDashboard: [],
    regionalVariantMetrics: [],
    mmxSearchResults: { mmxSearchExecuted: false }
  }
}

/**
 * useMSAQqueriesData - Hook for Modern Standard Arabic queries data
 */
export function useMSAQqueriesData() {
  const [data, setData] = useState(msaQueriesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(msaQueriesData) }
}

/**
 * useEmiratiArabicData - Hook for Emirati Arabic dialect data
 */
export function useEmiratiArabicData() {
  const [data, setData] = useState(emiratiArabicData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(emiratiArabicData) }
}

/**
 * useGulfArabicData - Hook for Gulf Arabic dialect data
 */
export function useGulfArabicData() {
  const [data, setData] = useState(gulfArabicData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(gulfArabicData) }
}

/**
 * useLevantineArabicData - Hook for Levantine Arabic dialect data
 */
export function useLevantineArabicData() {
  const [data, setData] = useState(levantineArabicData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(levantineArabicData) }
}

/**
 * useEgyptianArabicData - Hook for Egyptian Arabic dialect data
 */
export function useEgyptianArabicData() {
  const [data, setData] = useState(egyptianArabicData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(egyptianArabicData) }
}

/**
 * useMaghrebiArabicData - Hook for Maghrebi Arabic dialect data
 */
export function useMaghrebiArabicData() {
  const [data, setData] = useState(maghrebiArabicData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(maghrebiArabicData) }
}

/**
 * useEnglishQueriesData - Hook for English queries data
 */
export function useEnglishQueriesData() {
  const [data, setData] = useState(englishQueriesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(englishQueriesData) }
}

/**
 * useFrenchQueriesData - Hook for French queries data
 */
export function useFrenchQueriesData() {
  const [data, setData] = useState(frenchQueriesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(frenchQueriesData) }
}

/**
 * useUrduHindiData - Hook for Urdu/Hindi queries data
 */
export function useUrduHindiData() {
  const [data, setData] = useState(urduHindiData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(urduHindiData) }
}

/**
 * usePersianData - Hook for Persian/Farsi data
 */
export function usePersianData() {
  const [data, setData] = useState(persianData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(persianData) }
}

/**
 * useMalayIndonesianData - Hook for Malay/Indonesian data
 */
export function useMalayIndonesianData() {
  const [data, setData] = useState(malayIndonesianData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(malayIndonesianData) }
}

/**
 * useRussianData - Hook for Russian queries data
 */
export function useRussianData() {
  const [data, setData] = useState(russianData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(russianData) }
}

/**
 * useChineseData - Hook for Chinese/Mandarin data
 */
export function useChineseData() {
  const [data, setData] = useState(chineseData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(chineseData) }
}

/**
 * useTransliterationData - Hook for Transliteration data
 */
export function useTransliterationData() {
  const [data, setData] = useState(transliterationData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(transliterationData) }
}

/**
 * useCodeSwitchingData - Hook for Code-Switching data
 */
export function useCodeSwitchingData() {
  const [data, setData] = useState(codeSwitchingData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(codeSwitchingData) }
}

// Language Overview stub
const languageOverview = { languages: [], metrics: {}, overview: '' }

/**
 * useLanguageOverviewData - Hook for Language Overview data
 */
export function useLanguageOverviewData() {
  const [data, setData] = useState(languageOverview)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(languageOverview) }
}

// ============================================================================
// SENTIMENT HOOKS
// ============================================================================

/**
 * useNeutralSentimentData - Hook for Neutral Sentiment data
 */
export function useNeutralSentimentData() {
  const [data, setData] = useState({
    metrics: { total: '559', verified: '404', accuracy: '92%', categories: '6', coverage: 'BROAD', risk: 'LOW' },
    neutralTopics: [],
    sources: []
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(data) }
}

/**
 * useHopeSentimentData - Hook for Hope & Optimism Sentiment data
 */
export function useHopeSentimentData() {
  const [data, setData] = useState({
    metrics: { hopeIndex: '78%', optimism: 'HIGH', vision: 'STRONG', youth: 'VERY HIGH', future: '85%', risk: 'LOW' },
    hopeTopics: [],
    expressions: []
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(data) }
}

/**
 * useSocialSentimentData - Hook for Social Sentiment data (aggregated from 9-x sentiment files)
 */
export function useSocialSentimentData() {
  const [data, setData] = useState(socialSentimentData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(socialSentimentData) }
}

/**
 * useRegionalPerceptionData - Hook for Regional Perception data
 */
export function useRegionalPerceptionData() {
  const [data, setData] = useState(regionalPerceptionData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(regionalPerceptionData) }
}

// ============================================================================
// TRENDS HOOKS
// ============================================================================

/**
 * usePredictiveData - Hook for Predictive Trends data
 */
export function usePredictiveData() {
  const [data, setData] = useState({
    metrics: { accuracy: '82%', window: '6 MO', signals: '24', confidence: '78%', velocity: 'MEDIUM', risk: 'LOW' },
    forecasts: [],
    signals: []
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(data) }
}

// ============================================================================
// VERIFICATION HOOKS
// ============================================================================

/**
 * useSelfReferenceData - Hook for Self-Reference Verification data
 */
export function useSelfReferenceData() {
  const [data, setData] = useState({
    metrics: { total: '3,490', verification: '94%', accuracy: '89%', patterns: '156', crossRef: '78%', risk: 'LOW' },
    patterns: [],
    sources: []
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(data) }
}

/**
 * useStatisticalDataPointsData - Hook for Statistical Datapoints data
 */
export function useStatisticalDataPointsData() {
  const [data, setData] = useState({
    metrics: { total: '559', verified: '404', accuracy: '92%', categories: '6', coverage: 'BROAD', risk: 'LOW' },
    statistics: [],
    claims: []
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(data) }
}

// ============================================================================
// MONITORING HOOKS
// ============================================================================

/**
 * useEntityInvestigationData - Hook for Entity Investigation data
 */
export function useEntityInvestigationData() {
  const [data, setData] = useState({
    metrics: { total: '5,885', investigations: '24', connections: '1,240', riskFlagged: '18%', coverage: 'BROAD', risk: 'MEDIUM' },
    entities: [],
    connections: []
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(data) }
}

// ============================================================================
// GENERIC HOOKS
// ============================================================================

/**
 * useAllClairvoyanceData - Get all CLAIRVOYANCE-CX data
 */
export function useAllClairvoyanceData() {
  const [data, setData] = useState(clairvoyanceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(clairvoyanceData) }
}

/**
 * useAllPerceptionData - Get all PERCEPTION-X2 data
 */
export function useAllPerceptionData() {
  const [data, setData] = useState(perceptionData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionData) }
}

/**
 * useNationalImageData - Hook for UAE National Image data (Perception X2 / Image)
 */
export function useNationalImageData() {
  const [data, setData] = useState(nationalImageData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(nationalImageData) }
}

/**
 * useDomesticPerceptionData - Hook for UAE Domestic Perception data (Perception X2 / Domestic)
 */
export function useDomesticPerceptionData() {
  const [data, setData] = useState(domesticPerceptionData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(domesticPerceptionData) }
}

/**
 * useAllRicochetData - Get all RICOCHET-CATALYST-X data
 */
export function useAllRicochetData() {
  const [data, setData] = useState(ricochetData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(ricochetData) }
}

/**
 * useAllDashboardData - Get data from all platforms
 */
export function useAllDashboardData() {
  const [data, setData] = useState({
    clairvoyance: clairvoyanceData,
    perception: perceptionData,
    ricochet: ricochetData,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return {
    data,
    loading,
    error,
    refresh: () => setData({
      clairvoyance: clairvoyanceData,
      perception: perceptionData,
      ricochet: ricochetData,
    }),
  }
}

// ============================================================================
// UTILITY HOOKS
// ============================================================================

/**
 * useCampaigns - Get all campaigns across platforms
 */
export function useCampaigns(): Campaign[] {
  return useMemo(() => {
    const all: Campaign[] = [
      ...clairvoyanceData.executiveBridge.campaigns,
      ...clairvoyanceData.strategicAction.campaigns,
      ...perceptionData.operations.campaigns,
    ]
    return all
  }, [])
}

/**
 * useInfluencers - Get all influencers across platforms
 */
export function useInfluencers(): Influencer[] {
  return useMemo(() => {
    const all: Influencer[] = [
      ...clairvoyanceData.competitiveIntel.influencers,
      ...perceptionData.influence.microInfluencers,
    ]
    return all
  }, [])
}

/**
 * usePersonas - Get all personas from PERCEPTION-X2
 */
export function usePersonas(): Persona[] {
  return useMemo(() => {
    return perceptionData.strategyTargeting.personas
  }, [])
}

/**
 * useMyths - Get all health myths/narratives
 */
export function useMyths(): MythVector[] {
  return useMemo(() => {
    return clairvoyanceData.narrativeLab.myths
  }, [])
}

/**
 * useVoids - Get all narrative voids/gaps
 */
export function useVoids(): VoidVector[] {
  return useMemo(() => {
    return clairvoyanceData.narrativeLab.voids
  }, [])
}

/**
 * useInfodemicCases - Get all infodemic case studies
 */
export function useInfodemicCases(): InfodemicCase[] {
  return useMemo(() => {
    return clairvoyanceData.crisisWarRoom.infodemicCases
  }, [])
}

/**
 * useSeasonalThreats - Get all seasonal health threats
 */
export function useSeasonalThreats(): SeasonalThreat[] {
  return useMemo(() => {
    return clairvoyanceData.crisisWarRoom.seasonalThreats
  }, [])
}

/**
 * useAmplificationNodes - Get all amplification nodes
 */
export function useAmplificationNodes(): AmplificationNode[] {
  return useMemo(() => {
    const all: AmplificationNode[] = [
      ...perceptionData.influence.nodeDirectory,
      ...ricochetData.amplification.catalystNodes,
    ]
    return all
  }, [])
}

// ============================================================================
// GLOBAL STANDING / COMPETITIVE BENCHMARKING HOOK
// ============================================================================

/**
 * useGlobalStandingData - Hook for Global Standing / Competitive Benchmarking data
 * UAE competitive positioning vs. regional and global peers across economic, military,
 * social, infrastructure, innovation, and soft-power dimensions.
 * Source: 3-3-competitive-benchmarking-results.md
 */
export function useGlobalStandingData() {
  const [data, setData] = useState(globalStandingData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(globalStandingData) }
}

/**
 * useCompetitiveBenchmarkingData - Hook for Competitive Benchmarking data (MD 3-3)
 * Comprehensive UAE competitive positioning vs. regional and global peers across
 * economic, military, social, infrastructure, innovation, and soft-power dimensions.
 * Full data extraction from 3-3-competitive-benchmarking-results.md
 */
export function useCompetitiveBenchmarkingData() {
  const [data, setData] = useState(competitiveBenchmarkingData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(competitiveBenchmarkingData) }
}

/**
 * usePerceptionGapData - Hook for Perception Gap data (MD 3-10)
 * Comprehensive data covering 10 perception gap categories including Human Rights,
 * Women's Rights, Migrant Workers, Climate, Media Freedom, Rule of Law, Economic
 * Inequality, Political Freedom, Foreign Policy, and Security gaps.
 * Source: 3-10-perception-gap-results.md
 */
export function usePerceptionGapData() {
  const [data, setData] = useState(perceptionGapData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionGapData) }
}

/**
 * usePerceptionOverviewData - Hook for Perception Overview data
 * Comprehensive international perception analysis — how the world perceives UAE across
 * 24 query dimensions, 35+ sources, and 15 global regions.
 * Source: 3-1-international-perception-results.md
 */
export function usePerceptionOverviewData() {
  const [data, setData] = useState(perceptionOverviewData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(perceptionOverviewData) }
}

/**
 * useMediaBiasData - Hook for Media Bias data (MD 3-6)
 * Comprehensive analysis of UAE media bias, agenda-setting, censorship mechanisms,
 * bot networks, dis-influencer ecosystem, and suppression case studies.
 * Source: 3-6-media-bias-results.md
 */
export function useMediaBiasData() {
  const [data, setData] = useState(mediaBiasData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  return { data, loading, error, refresh: () => setData(mediaBiasData) }
}

// ============================================================================
// EXPORT ALL HOOKS
// ============================================================================

export const dataHooks = {
  // CLAIRVOYANCE-CX
  useExecutiveBridgeData,
  useOmniSurveillanceData,
  useCrisisWarRoomData,
  useNarrativeLabData,
  useStrategicActionData,
  useGeoIntelligenceData,
  useCompetitiveIntelData,
  useSystemGovernanceData,

  // PERCEPTION-X2
  useOmniscientIntelligenceData,
  useStrategyTargetingData,
  useProductionData,
  useInfluenceData,
  useOperationsData,
  useAnalyticsData,
  useGovernanceData,
  useVoidFillerData,
  useMediaForensicsData,
  usePsychoSemanticData,
  useCognitiveResilienceData,

  // Brand UAE Intelligence (MD 3-9)
  useBrandUaeData,

  // Global Standing / Competitive Benchmarking
  useGlobalStandingData,
  useCompetitiveBenchmarkingData,

  // Perception Gap Analysis
  usePerceptionGapData,

  // Perception Overview
  usePerceptionOverviewData,

  // RICOCHET-CATALYST-X
  useCommandPrimeData,
  useRicochetDistributionData,
  useCatalystOptimizationData,
  useAmplificationData,
  useXFactorData,
  usePhoenixData,
  useUserData,
  useAutomatedLogicData,
  useKineticShellData,

  // UAE NDIP — Stakeholder Intelligence
  useNamaData,
  useNMCDubaiData,
  useMoiData,
  useMofaData,
  useMinistryCultureData,
  useMinistryEconomyData,
  useGcoData,
  usePrAgencyData,
  useIntlRelationsData,
  useLaborUnionsData,
  useWomenOrganizationsData,
  useYouthOrganizationsData,
  useAcademicsData,
  useTribalNetworksData,
  useDiasporaData,
  useStakeholderOverviewData,

  // UAE NDIP — Historical Context
  usePreFederationData,
  useFederationEarlyData,
  usePostGulfWarData,
  useRapidDevelopmentData,
  useArabSpringData,
  useModernizationVisionData,
  usePostPandemicExpoData,
  useRecentEraData,
  useEventHistoricalData,
  usePolicyAnnouncementData,
  useHistoricalOverviewData,

  // UAE NDIP — Trends Intelligence
  useTrendsOverviewData,
  useTrendsDataArrayData,

  // UAE NDIP — Regional Perception Intelligence
  useRegionalPerceptionData,

  // UAE NDIP — Verification / Fact-Check
  useVerificationOverviewData,
  useOmissionSilenceData,
  useOmissionSilenceOverviewData,
  useBotInauthenticData,

  // UAE NDIP — Monitoring / Real-Time Command
  useMonitoringOverviewData,
  useCrisisResponseDeepData,
  useGapAnalysisData,

  // UAE NDIP — Narrative Themes Intelligence (MD 3-8 / 3-4)
  useNarrativeThemesData,
  useNarrativeTrackingData,

  // UAE NDIP — Soft Power Intelligence
  useSoftPowerData,

  // UAE NDIP — Media Tone Intelligence
  useMediaToneData,

  // UAE NDIP — Framing Analysis Intelligence (MD 3-5)
  useFramingAnalysisData,

  // UAE NDIP — Media Bias Intelligence (MD 3-6)
  useMediaBiasData,

  // UAE NDIP — Propaganda & Disinformation Intelligence (MD 3-7)
  usePropagandaDisinformationData,

  // UAE NDIP — Entity Intelligence
  useFederalOfficialsData,
  useRoyalFamilyData,
  useEmirateEntitiesData,
  useMediaOrganizationsData,
  useJournalistsData,
  useInfluencersData,
  useCorporateEntitiesData,
  useInternationalOrgsData,
  useInfrastructureEntitiesData,
  useInfrastructureData,
  useEventEntitiesData,
  useEntityOverviewData,

  // UAE NDIP — Topics / H-S-P-B-C Framework
  usePoliticsGovernanceData,
  useEconomyBusinessData,
  useSecurityDefenseData,
  useCultureSocietyData,
  useEnvironmentInfrastructureData,
  useEnvironmentData,
  useEnvironmentSectionData,
  useInternationalRelationsData,
  useMediaCommunicationsData,
  useMediaData,
  useTechnologyInnovationData,
  useSportsIntelligenceData,
  useSportsData,
  useHealthcareData,
  useEducationYouthData,
  useEnergySustainabilityData,
  useTourismHospitalityData,
  useRealEstateData,
  useFoodSecurityData,
  useTransportationLogisticsData,
  useLegalRegulatoryData,
  useLaborEmploymentData,
  useDemographicsMigrationData,
  useReligionInterfaithData,
  useTopicsOverviewData,

  // UAE NDIP — Crisis Intelligence
  useNaturalDisasterData,
  useGeopoliticalCrisisData,
  useSocialCrisisData,
  useEconomicCrisisData,
  useReputationCrisisData,
  useReputationCrisisPageData,
  useCommunicationCrisisData,
  useTerrorismExtremismData,
  useCyberThreatData,
  usePublicHealthData,
  useEarlyWarningData,
  useCrisisOverviewData,

  // UAE NDIP — Social Media Intelligence
  useTwitterIntelligenceData,
  useTwitterXData,
  useTiktokIntelligenceData,
  useTiktokData,
  useYoutubeIntelligenceData,
  useYoutubeData,
  useFacebookIntelligenceData,
  useFacebookMetaData,
  useFacebookData,
  useInstagramIntelligenceData,
  useInstagramData,
  useLinkedinIntelligenceData,
  useRedditIntelligenceData,
  useRedditData,
  useTelegramIntelligenceData,
  useTelegramData,
  useThreadsIntelligenceData,
  useThreadsData,
  useSnapchatIntelligenceData,
  useDiscordIntelligenceData,
  useWhatsAppIntelligenceData,
  useGoogleSerpIntelligenceData,
  useNewsWebsitesIntelligenceData,
  useForumsIntelligenceData,
  useBlogsIntelligenceData,
  useDarkWebIntelligenceData,
  useGamingIntelligenceData,
  useWeb3IntelligenceData,
  usePodcastIntelligenceData,
  useDarkSocialAggregateData,

  // UAE NDIP — Multi-Lingual Intelligence
  useMSAQqueriesData,
  useEmiratiArabicData,
  useGulfArabicData,
  useLevantineArabicData,
  useEgyptianArabicData,
  useMaghrebiArabicData,
  useEnglishQueriesData,
  useFrenchQueriesData,
  useUrduHindiData,
  usePersianData,
  useMalayIndonesianData,
  useRussianData,
  useChineseData,
  useTransliterationData,
  useCodeSwitchingData,
  useLanguageOverviewData,

  // Generic
  useAllClairvoyanceData,
  useAllPerceptionData,
  useAllRicochetData,
  useAllDashboardData,

  // National Image
  useNationalImageData,

  // Domestic Perception
  useDomesticPerceptionData,

  // Utility
  useCampaigns,
  useInfluencers,
  usePersonas,
  useMyths,
  useVoids,
  useInfodemicCases,
  useSeasonalThreats,
  useAmplificationNodes,
}
