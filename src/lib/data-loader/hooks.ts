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
  // Monitoring Data
  monitoringOverview,
  // Crisis Data
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
  // Social Media Data
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
  // Languages Data
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
} from './index'
import {
  // Entity Data
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
  transportationLogisticsData,
  legalRegulatoryData,
  laborEmploymentData,
  demographicsMigrationData,
  religionInterfaithData,
  topicsOverview,
} from './index'
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
 * useInfluencersData - Hook for Influencers entity data
 */
export function useInfluencersData() {
  const [data, setData] = useState(influencersData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(influencersData) }
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
 */
export function usePoliticsGovernanceData() {
  const [data, setData] = useState(politicsGovernanceData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(politicsGovernanceData) }
}

/**
 * useEconomyBusinessData - Hook for Economy & Business topic data
 */
export function useEconomyBusinessData() {
  const [data, setData] = useState(economyBusinessData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(economyBusinessData) }
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
 * useEnvironmentInfrastructureData - Hook for Environment & Infrastructure topic data
 */
export function useEnvironmentInfrastructureData() {
  const [data, setData] = useState(environmentInfrastructureData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(environmentInfrastructureData) }
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
  const [data, setData] = useState(transportationLogisticsData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(transportationLogisticsData) }
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
 * useCommunicationCrisisData - Hook for Communication Crisis data
 */
export function useCommunicationCrisisData() {
  const [data, setData] = useState(communicationCrisisData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(communicationCrisisData) }
}

/**
 * useTerrorismExtremismData - Hook for Terrorism & Extremism data
 */
export function useTerrorismExtremismData() {
  const [data, setData] = useState(terrorismExtremismData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(terrorismExtremismData) }
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
  const [data, setData] = useState(earlyWarningData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(earlyWarningData) }
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
  const [data, setData] = useState(twitterIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(twitterIntelligence) }
}

/**
 * useTiktokIntelligenceData - Hook for TikTok intelligence data
 */
export function useTiktokIntelligenceData() {
  const [data, setData] = useState(tiktokIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(tiktokIntelligence) }
}

/**
 * useYoutubeIntelligenceData - Hook for YouTube intelligence data
 */
export function useYoutubeIntelligenceData() {
  const [data, setData] = useState(youtubeIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(youtubeIntelligence) }
}

/**
 * useFacebookIntelligenceData - Hook for Facebook intelligence data
 */
export function useFacebookIntelligenceData() {
  const [data, setData] = useState(facebookIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(facebookIntelligence) }
}

/**
 * useInstagramIntelligenceData - Hook for Instagram intelligence data
 */
export function useInstagramIntelligenceData() {
  const [data, setData] = useState(instagramIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(instagramIntelligence) }
}

/**
 * useLinkedinIntelligenceData - Hook for LinkedIn intelligence data
 */
export function useLinkedinIntelligenceData() {
  const [data, setData] = useState(linkedinIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(linkedinIntelligence) }
}

/**
 * useRedditIntelligenceData - Hook for Reddit intelligence data
 */
export function useRedditIntelligenceData() {
  const [data, setData] = useState(redditIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(redditIntelligence) }
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
 * useThreadsIntelligenceData - Hook for Threads intelligence data
 */
export function useThreadsIntelligenceData() {
  const [data, setData] = useState(threadsIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(threadsIntelligence) }
}

/**
 * useSnapchatIntelligenceData - Hook for Snapchat intelligence data
 */
export function useSnapchatIntelligenceData() {
  const [data, setData] = useState(snapchatIntelligence)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  return { data, loading, error, refresh: () => setData(snapchatIntelligence) }
}

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

  // UAE NDIP — Verification / Fact-Check
  useVerificationOverviewData,

  // UAE NDIP — Monitoring / Real-Time Command
  useMonitoringOverviewData,

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
  useEventEntitiesData,
  useEntityOverviewData,

  // UAE NDIP — Topics / H-S-P-B-C Framework
  usePoliticsGovernanceData,
  useEconomyBusinessData,
  useSecurityDefenseData,
  useCultureSocietyData,
  useEnvironmentInfrastructureData,
  useInternationalRelationsData,
  useMediaCommunicationsData,
  useTechnologyInnovationData,
  useSportsIntelligenceData,
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
  useCommunicationCrisisData,
  useTerrorismExtremismData,
  useCyberThreatData,
  usePublicHealthData,
  useEarlyWarningData,
  useCrisisOverviewData,

  // UAE NDIP — Social Media Intelligence
  useTwitterIntelligenceData,
  useTiktokIntelligenceData,
  useYoutubeIntelligenceData,
  useFacebookIntelligenceData,
  useInstagramIntelligenceData,
  useLinkedinIntelligenceData,
  useRedditIntelligenceData,
  useTelegramIntelligenceData,
  useThreadsIntelligenceData,
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
