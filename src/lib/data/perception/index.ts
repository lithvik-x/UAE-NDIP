/**
 * Perception Data Index
 * Comprehensive exports for all perception-related data modules
 */

// Soft Power Data (3-8-soft-power-results.md)
export {
  softPowerData,
  executionMetadata,
  executiveSummary,
  coreMetricsDashboard,
  globalRankings,
  softPowerStrategy,
  culturalDiplomacy,
  educationDiplomacy,
  humanitarianHealthDiplomacy,
  sportsDiplomacy,
  digitalTechnologyDiplomacy,
  mediaDiplomacy,
  nationPlaceBranding,
  toleranceMigration,
  geopoliticalStrategy,
  challengesLimitations,
  statisticalAppendix,
  sourceRegistry,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  dataQualityNotes,
  dashboardMetrics,
} from './soft-power-data'

// Brand UAE Data (3-9-brand-uae-results.md)
export {
  brandUaeData,
  executionMetadata as brandExecutionMetadata,
  executiveSummary as brandExecutiveSummary,
  global500Rankings2026 as brandFinanceRankings,
  nationBrandValue as brandValuationMetrics,
  brandDifferentiationStrategies as brandStrategy,
  dubaiBrandIdentity as dubaiBrandStrategy,
  abuDhabiBrandIdentity as abuDhabiBrandStrategy,
  luxuryBrandsCrisis2026 as challengesBrand,
  otherUaeCities as regionalComparisonBrand,
  overallBrandSentiment as sentimentAnalysisBrand,
  uaeRelevanceAssessment as uaeRelevanceAssessmentBrand,
} from './brand-uae-data'

// Competitive Benchmarking Data (3-3-competitive-benchmarking-results.md)
export {
  competitiveBenchmarkingData,
  executiveSummary as cbExecutiveSummary,
  executiveSummary as benchmarkingOverview,
  uaeVsSaudi as regionalCompetitors,
  uaeVsSingapore as globalCompetitors,
  aviationSector as sectorAnalysis,
  uaeRankingsOverTime as metricComparisons,
  uaeCompetitiveAdvantages as strategicRecommendations,
  sourceTierDistribution as cbDataQualityNotes,
} from './competitive-benchmarking-data'

// Domestic Perception Data (3-2-domestic-perception-results.md)
export {
  domesticPerceptionData,
  executionMetadata as dpExecutionMetadata,
  focusAreas as domesticPerceptionOverview,
  emiratiSentiment as citizenSentiment,
  expatSentiment as expatriateSentiment,
  top10KeyTakeaways as keyFindingsDomestic,
  dataQualityMatrix as dpDataQualityNotes,
} from './domestic-perception-data'

// Framing Analysis Data (3-5-framing-analysis-results.md)
export {
  framingAnalysisData,
  executionMetadata as faExecutionMetadata,
  focusAreas as framingOverview,
  framingTypology as mainFrames,
  sentimentByTier as frameDistribution,
  sourceTierDistribution as faDataQualityNotes,
} from './framing-analysis-data'

// International Perception Data (3-1-international-perception-results.md)
export {
  internationalPerceptionData,
  executionMetadata as ipExecutionMetadata,
  queryPatternsExecuted as internationalPerceptionOverview,
  regionalPerception,
  dimensionPerception as globalPerception,
  keyFindings as keyDrivers,
} from './international-perception-data'

// Media Bias Data (3-6-media-bias-results.md)
export {
  mediaBiasData,
  executionMetadata as mbExecutionMetadata,
  synthesizedFindings as mediaBiasOverview,
  mediaOutlets as biasByOutlet,
  suppressedTopics as biasByTopic,
  sentimentAnalysis as sentimentAnalysisMediaBias,
  synthesizedFindings as keyFindingsMediaBias,
} from './media-bias-data'

// Narrative Tracking Data (3-4-narrative-tracking-results.md)
export {
  narrativeTrackingData,
  executionMetadata as ntExecutionMetadata,
  keyFindings as narrativeTrackingOverview,
  allNarratives as activeNarratives,
  sentimentDistributionByNarrative as sentimentByNarrative,
} from './narrative-tracking-data'

// Perception Gap Data (3-10-perception-gap-results.md)
export {
  perceptionGapData,
  executionMetadata as pgExecutionMetadata,
  focusAreas,
  keyQueryPatterns,
  primarySources,
  freedomScores,
  humanRightsStats,
  womenRightsIndicators,
  iranStrikes2026,
  migrantWorkerStats,
  surveillanceStats,
  politicalCivilLiberties,
  economicIndicators,
  politicalPrisoners,
  foreignPolicyFailures,
  perceptionGaps,
  sourceCredibilityMatrix,
  relevanceMatrix,
  verificationStatus as pgVerificationStatus,
  enrichmentMetadata,
  summaryMetrics,
  dashboardMetrics as pgDashboardMetrics,
} from './perception-gap-data'

// Propaganda and Disinformation Data (3-7-propaganda-disinformation-results.md)
export {
  propagandaDisinformationData as propagandaData,
  executionMetadata as pdExecutionMetadata,
  focusAreas as propagandaOverview,
  uaeAsTargetFindings as disinformationCampaigns,
  sourceCredibilityMatrix as pdDataQualityNotes,
} from './propaganda-disinformation-data'

// Strategic Narratives Data
export {
  strategicNarrativesData,
  executionMetadata as snExecutionMetadata,
  keyFindings as strategicNarrativesOverview,
  successStoryNarrative as coreNarratives,
  monitoringRecommendations as recommendationsStrategic,
  sourceCredibilityMatrix as snDataQualityNotes,
} from './strategic-narratives-data'

// UAE National Image Data (3-1-international-perception-results.md)
export {
  nationalImageData,
  executionMetadata as imageExecutionMetadata,
  queryPatternsExecuted,
  regionalPerception as imageRegionalPerception,
  dimensionPerception,
  perceptionScorecard,
  keyFindings,
  softPowerRankings,
  washingtonInstituteSurvey,
  economicData,
  sourceRegistry as imageSourceRegistry,
  verificationStatus as imageVerificationStatus,
  dashboardMetrics as imageDashboardMetrics,
  nationalImageOverview,
} from './image-data'
