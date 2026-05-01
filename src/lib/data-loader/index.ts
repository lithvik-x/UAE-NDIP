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
  transportationData,
  legalRegulatoryData,
  laborEmploymentData,
  demographicsMigrationData,
  religionInterfaithData,
  comprehensiveReligionData,
  topicsOverview,
} from './topics-data'

// Re-export transportationData as transportationLogisticsData for backward compatibility
export { transportationData as transportationLogisticsData } from './topics-data'

export {
  naturalDisasterData,
  naturalDisasterExtendedData,
  geopoliticalCrisisData,
  socialCrisisData,
  economicCrisisData,
  economicCrisisExtendedData,
  reputationCrisisData,
  communicationCrisisData,
  communicationCrisisExtendedData,
  // Alias for backward compatibility
  communicationCrisisData as crisisCommData,
  terrorismExtremismCrisisData,
  cyberThreatData,
  cyberThreatExtendedData,
  publicHealthData,
  publicHealthExtendedData,
  earlyWarningData,
  earlyWarningExtendedData,
  crisisOverview,
} from './crisis-data'

export {
  reputationCrisisEventData,
  reputationCrisisPageData,
  pressFreedomScores,
  freedomHouseScores,
  sudanGoldData,
  iranWarStats,
  politicalPrisonerStats,
  crisisIncidents,
  mediaCoverage,
  sentimentBreakdown,
  threatVectors,
  tortureMethods,
  reputationKeyQuotes,
  reputationKPI,
  reputationMetrics,
} from './reputation-crisis-data'

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
  mediaIndustryExtendedData,
} from './trends-data'

export {
  verificationOverview,
  mediaAboutMediaData,
  omissionSilenceData,
  omissionSilenceOverview,
  coordinatedInauthenticData,
  coordinatedInauthenticExtendedData,
  visualMultimediaExtendedData,
  visualMultimediaData,
  selfReferenceData,
  selfReferenceDeepData,
  comparativeRankingData,
  statisticalDatapointsData,
  statisticalKPIs,
  factCheckVerificationData,
  echoChamberFilterData,
  cibMetrics,
} from './verification-data'

export {
  botInauthenticData,
  botInauthenticExecutiveSummary,
  uaeRelevanceAssessmentMatrix,
  botSourceCredibilityMatrix,
  rsfBotsData,
  cop28BotsData,
  stcBotsData,
  twitterSuspensionData,
  freedomHouseData,
  trollFarmData,
  trollFarmAcademicData,
  diavoloNetworkData,
  globalTrollFarmData,
  pomepsData,
  defamationCompaniesData,
  fakeSudaneseAccountsData,
  bbcAfricaInvestigationData,
  redditCOPDiscussionData,
  botDetectionIndicators,
  botometerSpecs,
  botDetectionLimitations,
  dubaiBlingData,
  gccInfluencerData,
  cop29AzerbaijanData,
  globalWitnessCop29Data,
  openDemocracyData,
  entityRegistryCompanies,
  entityRegistryTargets,
  entityRegistryResearchers,
  entityRegistryGovernment,
  sentimentAnalysisByTopic,
  keySourceCitations,
  urlFetchStatusLog,
  researchNotes,
  fetchSummary,
  atomicQueriesExecuted,
  dashboardKPIsBotNetwork,
  dashboardKPIsEngagementFraud,
  dashboardKPIsImpact,
  dashboardKPIsDetectionConfidence,
  uaeTacklingMisinformationData,
  uaeDeepfakeWarningsData,
  aiInfluenceOperationsData,
} from './bot-data'

export {
  monitoringOverview,
  // MD 12-1 Daily Monitoring Data
  wamData,
  uaeGovernmentMediaEcosystem,
  mediaFreeZones,
  keyMediaEvents,
  officialMediaSources,
  md12LeadershipFigures,
  anomalyDetectionMethodologies,
  crisisDetectionCategories,
  crisisCommunicationTools,
  crisisResponseTiers,
  socialMediaPlatforms,
  enterprisePlatforms,
  openSourceTools,
  newsApis,
  monitoringCadence,
  keyMetricsCategories,
  alertTierSystem,
  md12GovernmentEntities,
  technologyPlatforms,
  crisisToolsRegistry,
  sentimentAnalysisMatrix,
  md12RelevanceAssessment,
  md12CredibilityMatrix,
  quantitativeMetrics,
  qualitativeInsights,
  sourcesIndex,
  dashboardKpiTables,
  dailyMonitoringPhases,
  geopoliticalRiskFramework,
  // Entity Investigation Data
  entityInvestigationPhaseMetrics,
  entityInvestigationKPIs,
  entityInvestigationTools,
  networkCentralityAlgorithms,
  influenceScoringModel,
  sentimentScoreRanges,
  amlRiskAssessment,
  weeklyDeepDiveExtendedData,
  weeklyDeepDiveData,
  crisisResponseData,
  historicalBaselineData,
  dailyMonitoringData,
  // Skytrax Rankings
  skytrax2025Rankings,
  skytraxSpecialAwards,
  // MD 12-2 Historical Baseline Data
  historicalEnrichmentMetadata,
  historicalKPIs,
  preModernNewspaperArchives,
  gulfNewsTimeline,
  academicDatabases,
  nlaData,
  nlaDigitalArchiveTopics,
  nlaAerialPhotography,
  oralHistoryPrograms,
  encyclopediaOfUAEHistory,
  historicalImageCollections,
  earlyInternetData,
  socialMediaEraData,
  dataReportal2024,
  platformReachDataReportal,
  platformYoYGrowth,
  globalMediaInsight2024,
  mostUsedPlatformsGMI,
  favoritePlatforms,
  timeSpentOnApps,
  socialMediaDemographics,
  reasonsForSocialMedia,
  recentEraData as monitoringRecentEraData,
  organizationsRegistry,
  mediaPersonRegistry,
  mediaEventRegistry,
  tierDefinitions,
  sourceRatingsTable,
  kpiSet1HistoricalArchiveCoverage,
  kpiSet2MediaEvolution,
  kpiSet3HistoricalEventsImpact,
  kpiSet4SourceReliabilityMatrix,
  uaeRelevanceAssessmentSummary,
  dataGaps,
  failedUrls,
  keySourceDomains,
  topicSentimentAnalysis,
} from './monitoring-data'

// Competitive Intelligence Data (MD 12-6)
export {
  executiveSummary,
  confidenceAssessment,
  uaeRankingsExtended,
  uaeSaudiDemographicsExtended,
  uaeSaudiFiscal,
  uaeSaudiBusiness,
  uaeSaudiRankings,
  uaeSaudiTradeSovereign,
  uaeSaudiRivalryAnalysis,
  uaeBahrainComparison,
  uaeKuwaitComparison,
  uaeOmanComparison,
  uaeIsraelTech,
  uaeTurkeyComparison,
  uaeEgyptComparison,
  dubaiLondonComparison,
  dubaiNyComparison,
  dubaiHkComparison,
  dubaiSwitzerlandComparison,
  dubaiMonacoComparison,
  dataFreshnessLog,
  ciSourceCredibilityMatrix,
  ciUaeRelevanceMatrix,
  ciRelevanceScoringCriteria,
  queryExecutionLog,
  webFetchEnrichmentMetrics,
  webFetchSuccessData,
  competitiveAdvantages,
  visionProgramsComparison,
  sovereignNations,
  organizations,
  keyIndices,
  ciSourceBySourceAssessment,
} from './competitive-intelligence-data'

// Crisis Response Deep Research Data (MD 12-3)
export {
  crisisResponseData as crisisResponseDeepData,
  uaeCrisisInfrastructure,
  crisisManagementLessons,
  realTimeMonitoringSystems,
  aiMediaMonitoring,
  osintTools,
  darkWebTools,
  darkWebStats,
  narrativeAttacks,
  narrativeStats,
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
  sourceCredibilityMatrix as crisisSourceCredibilityMatrix,
  uaeRelevanceAssessment as crisisUaeRelevanceAssessment,
  crisisEntityRegistry,
  crisisLevels,
  crisisSentimentByTopic,
  crisisStatistics,
  factCheckingStatistics,
  narrativeAttackStatistics,
  influencerImpactStatistics,
  emergencyManagementStatistics,
  digitalStatistics,
} from './crisis-response-data'

// Gap Analysis Data (MD 12-8)
export {
  gapAnalysisOverview,
  gapQueryExecutions,
  gapSourceCredibilityMatrix,
  gapSentimentMatrix,
  gapUAERelevanceAssessment,
  uaeRegulatoryChanges2026,
  cybersecurityComplianceRequirements,
  uaeDigitalEconomyKPIs2026,
  digitalMarketingChannels,
  paymentTransformation2026,
  nonAITechTrendsME2026,
  mediaRelationsMetrics,
  mediaTierClassification,
  arabMediaSummit2026,
  dubaiPropertyMarketQ1_2026,
  gccConflictEconomicImpact,
  uaePopulation2026,
  populationByEmirates2026,
  ageDistribution2026,
  regionalStrainPoints,
  arabicAIGapMetrics,
  dictionaryGapsIdentified,
  childDigitalSafetyLaw,
  childDigitalSafetyCompliance,
  gracePeriodTimeline,
  visaFineStructure,
  april2026PolicyChanges,
  influencerPermitData,
  influencerPermitComplianceMatrix,
  uaeVisaPenaltyStructure,
  gapAnalysisOrganizations,
  gapAnalysisKeyIndividuals,
  gapAnalysisLaws,
  thematicSummary,
  gapEconomicKPIs,
  gapRegulatoryKPIs,
  gapDigitalEconomyKPIs,
  gapDemographicsKPIs,
  gapURLContentSummaries,
  gapAnalysisMetadata,
} from './gap-analysis-data'

// Positive Sentiment Data (MD 9-1)
export {
  positiveSentimentOverview,
  keyQuantitativeHighlights,
  safetyKPIData,
  humanitarianAidKPIData,
  innovationKPIData,
  economicKPIData,
  demographicsKPIData,
  leadershipKPIData,
  safetyMetrics,
  humanitarianMetrics,
  innovationMetrics,
  economicMetrics,
  demographicsMetrics,
  leadershipMetrics,
  topicSentimentMatrix,
  sourceSentimentAnalysis,
  narrativeThemeValidation,
  expertQuotes,
  governmentEntitiesPositive,
  leadershipFigures,
  expatriateCommunities,
  tourismEntities,
  positiveDrivers,
  monthlyPositiveTrend,
  keyPositiveIndicators,
  yearlyPositiveComparison,
  positiveSourceCredibilityMatrix,
  positiveUAERelevanceAssessment,
  positiveSentimentMetrics,
  positiveSentimentDistributionData,
  positiveTopicSentimentChartData,
  keyQuotes,
  positiveSentimentDataMeta,
  usePositiveSentimentData,
} from './positive-sentiment-data'

// Praise & Endorsement Data (MD 9-7)
export {
  praiseEndorsementOverview,
  queryCategories,
  dashboardKPIs,
  praisedAttractions,
  praiseSources,
  globalRankingAchievements,
  topResidenceIndexCountries,
  rankingFactors,
  cabinetAchievements,
  tributeQuotes,
  visitorExperienceThemes,
  hotelReviewAnalysis,
  eventDelegateReactions,
  safetyStatistics,
  safestCitiesRanking,
  uaeVsGlobalSafety,
  safetyDeepDive,
  dubaiCleanlinessKPIs,
  wasteManagementInitiatives,
  infrastructureRankings,
  topRoadQualityCountries,
  dubaiMetroMetrics,
  topDriverlessMetroSystems,
  michelinStarRestaurants,
  culinaryDiversity,
  businessEnvironmentKPIs,
  economicIndicators,
  investmentProjects,
  healthcareExcellenceKPIs,
  healthcareTrustBreakdown,
  healthcareInvestment,
  visionaryLeadershipMetrics,
  visionDocuments,
  governancePrinciples,
  keyAchievements,
  dubaiEconomicAgendaGoals,
  praiseCrossCategoryObservations,
  praiseSourceCredibilityMatrix,
  praiseUAERelevanceSummary,
  quantitativeDataSummary,
  praiseCategoryDistribution,
  praiseTrendData,
  sentimentDistributionData,
  uaeRelevanceChartData,
  praiseSentimentMetrics,
  usePraiseEndorsementData,
  praiseEndorsementDataMeta,
} from './praise-endorsement-data'

export {
  negativeSentimentOverview,
  negativeSourceCredibilityMatrix as negativeSentimentSourceCredibilityMatrix,
  uaeRelevanceAssessment as negativeSentimentUAERelevanceAssessment,
  negativeCategories,
  narrativeThemes,
  statisticsSummary,
  humanRightsDefenders,
  criticismGovernmentEntities,
  arrestCases,
  militaryInterventions,
  negativeSentimentMetrics,
  severityDistributionData,
  sentimentTrendData,
  categorySeverityData,
  useNegativeSentimentData,
  // Neutral Sentiment Data (MD 9-3)
  neutralSentimentOverview,
  populationKPIs,
  economicKPIs,
  governmentFinanceKPIs,
  internationalRelationKPIs,
  climatePolicyKPIs,
  educationKPIs,
  rankingKPIs,
  futureRoadmapKPIs,
  neutralSourcesConsulted,
  neutralSentimentMetrics,
  neutralSentimentDistributionData,
  categoryCoverageSummary,
  useNeutralSentimentData,
  // Sarcasm & Irony Detection Data (MD 9-8)
  sarcasmOverviewData,
  sarcasmSourceCredibilityMatrix,
  sarcasmPoliticalPrisoners,
  sarcasmGovernmentInitiatives,
  sarcasmDocumentedContradictions,
  sarcasmInternationalRankings,
  sarcasmKeyStatistics,
  sarcasmAdnocEnergyData,
  sarcasmClimateEnergyTargets,
  sarcasmYemenCrisisData,
  sarcasmSentimentByTopic,
  sarcasmSentimentBySourceType,
  sarcasmEnglishPatterns,
  sarcasmArabicPatterns,
  sarcasmIronyThemes,
  sarcasmCriticalKPIs,
  sarcasmKeyQuotations,
  sarcasmSentimentDistributionData,
  sarcasmIronyIntensityData,
  useSarcasmData,
  // Hope & Optimism Data (MD 9-10)
  hopeOptimismData,
  polyHopeDataset,
  emiratesMarsMission,
  hopeImpactStudies,
  mediaMonitoringKPIs,
  optimismMarketing,
  wgsnOptimismTrends,
  hopeOptimismKeywords,
  useHopeOptimismData,
  // Controversy & Debate Data (MD 9-5)
  controversySourceCredibilityMatrix,
  controversyTopicsData,
  controversySentimentSummary,
  controversyHumanRightsKPIs,
  controversyMilitaryKPIs,
  controversyFinancialKPIs,
  controversyClimateKPIs,
  alcoholRegulationsData,
  dressCodeData,
  emiratizationData,
  israelNormalizationData,
  militaryInterventionData,
  megaProjectsData,
  royalWealthData,
  surveillanceData,
  goldenVisaData,
  climateLeadershipData,
  humanRightsControversyData,
  useControversyData,
  // Praise & Endorsement Data (MD 9-7)
  praiseOverview,
  kpiSummaryData,
  safetyData,
  cleanlinessData,
  infrastructureData,
  healthcareExcellenceData,
  visionaryLeadershipData,
  bestRankingsData,
  thankYouLeadershipData,
  foodCuisineData,
  greatPlaceData,
  praiseRecommendationData,
  impressedData,
  positiveSentimentDataArray,
  praiseSentimentOverview,
  usePraiseData,
} from './sentiment-data'

// Criticism & Complaint Data (MD 9-6)
export {
  criticismOverview,
  riskIndicators,
  complaintVolumeMetrics,
  economicStressIndicators,
  serviceQualityMetrics,
  telecomMetrics,
  schoolFeeMetrics,
  legalPenalties,
  criticismGovEntities,
  telecomEntities,
  bankingEntities,
  schoolOperators,
  sentimentDistributionMatrix,
  platformSentiment,
  trendAnalysis,
  relevanceClassifications,
  issueClassifications,
  geopoliticalContext,
  credibilityTiers,
  sourceReliability,
  employmentLawProvisions,
  consumerProtectionViolations,
  landlordTenantProvisions,
  quantitativeDataRegistry,
  economicStressCompositeIndex,
  economicStressCompositeTotal,
  complaintMechanisms,
  geopoliticalImpacts,
  atomicQueries,
  keyFindingsByCategory,
  criticismCrossCategoryObservations,
  useCriticismComplaintData,
} from './criticism-data'

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
