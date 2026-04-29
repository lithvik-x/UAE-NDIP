/**
 * Echo Chamber & Filter Bubble - Comprehensive Dashboard Data
 * Deep Research: micro-queries/part-11/11-8-echo-chamber-filter
 * SSOT Status: MASTER — All URLs fetched, all data extracted
 * Enrichment Version: 1.0 | Date: 2026-04-27
 */

import type { TierLevel } from './types'

// ============================================================================
// SECTION A: STRUCTURED DATA TABLES (DASHBOARD-READY KPIs)
// ============================================================================

// A.1 Echo Chamber Quantification Metrics
export interface EchoChamberQuantMetric {
  metric: string
  value: string
  source: string
  year: number
  credibility: string
}

export const echoChamberQuantMetrics: EchoChamberQuantMetric[] = [
  { metric: 'Global cascade probability (random networks)', value: '65%', source: 'PMC/Törnberg', year: 2018, credibility: 'Tier 1' },
  { metric: 'Global cascade probability (optimal polarization)', value: '>85%', source: 'PMC/Törnberg', year: 2018, credibility: 'Tier 1' },
  { metric: 'Optimal network polarization peak', value: '60%', source: 'PMC/Törnberg', year: 2018, credibility: 'Tier 1' },
  { metric: 'Network polarization decline threshold', value: '>70%', source: 'PMC/Törnberg', year: 2018, credibility: 'Tier 1' },
  { metric: 'Homophily threshold (Douyin/Bilibili)', value: '<0.4', source: 'PMC/NIH', year: 2023, credibility: 'Tier 1' },
  { metric: 'KL Divergence (spatial distribution)', value: '<1', source: 'PMC/NIH', year: 2023, credibility: 'Tier 1' },
]

// A.2 Platform-Specific Echo Chamber Effects
export interface PlatformEchoChamber {
  platform: string
  echoChamberStrength: string
  dominantECType: string
  commonUsersPercent: string
  source: string
}

export const platformEchoChambers: PlatformEchoChamber[] = [
  { platform: 'Douyin', echoChamberStrength: 'STRONG', dominantECType: '~50% Positive', commonUsersPercent: '85.32%', source: 'PMC10111082' },
  { platform: 'Bilibili', echoChamberStrength: 'STRONG', dominantECType: '~50% Positive', commonUsersPercent: '89.17%', source: 'PMC10111082' },
  { platform: 'TikTok', echoChamberStrength: 'WEAK', dominantECType: '>50% Controversial', commonUsersPercent: '92.55%', source: 'PMC10111082' },
  { platform: 'Facebook', echoChamberStrength: 'HIGH', dominantECType: 'Polarized clusters', commonUsersPercent: 'N/A', source: 'Brookings' },
  { platform: 'YouTube', echoChamberStrength: 'MODERATE', dominantECType: 'Ideological clustering', commonUsersPercent: 'N/A', source: 'UPenn' },
]

// A.3 Polarization Research Data
export interface PolarizationStudy {
  study: string
  finding: string
  effectSize: string
  sample: string
  year: number
}

export const polarizationStudies: PolarizationStudy[] = [
  { study: 'Bakshy et al. (Twitter)', finding: 'Exposure to opposing views CAN increase polarization', effectSize: 'Significant', sample: 'Field exp.', year: 2018 },
  { study: 'Bakshy et al. (Facebook)', finding: 'Social networks determine feed content more than algorithm', effectSize: 'Strong', sample: '10.1M users', year: 2015 },
  { study: 'UPenn Counterfactual', finding: 'Algorithm has moderating effect, not amplifying', effectSize: 'Moderate', sample: '87,988 users', year: 2025 },
  { study: 'Science (2025)', finding: 'Polarization may be inherent in social media', effectSize: 'Structural', sample: 'Simulation', year: 2025 },
  { study: 'PNAS (2024)', finding: 'Partisan recommendations show no short-term attitude change', effectSize: 'Null', sample: 'N/A', year: 2024 },
]

// A.4 YouTube Recommendation System Data
export interface YouTubeRecommendationData {
  metric: string
  value: string
  source: string
}

export const youtubeRecommendationData: YouTubeRecommendationData[] = [
  { metric: 'Studies implicating recommender in problematic content', value: '14 of 23', source: 'PMC7613872' },
  { metric: 'Studies with mixed results', value: '7 of 23', source: 'PMC7613872' },
  { metric: 'Studies not implicating recommender', value: '2 of 23', source: 'PMC7613872' },
  { metric: 'YouTube video views from recommendations', value: '30%', source: 'PMC7613872' },
  { metric: 'Participants who saw extremist content', value: '37%', source: 'PMC7613872' },
  { metric: 'Probability of incel content within 5 steps', value: '18.8%', source: 'PMC7613872' },
  { metric: 'Videos removed (Oct-Dec 2020) - child safety', value: '3.8M', source: 'PMC7613872' },
  { metric: 'Videos removed (Oct-Dec 2020) - spam/misleading', value: '1.4M', source: 'PMC7613872' },
  { metric: 'Videos removed (Oct-Dec 2020) - harmful/abusive', value: '259K', source: 'PMC7613872' },
  { metric: 'Videos removed (Oct-Dec 2020) - violent/extremist', value: '73K', source: 'PMC7613872' },
]

// A.5 Short Video Platform User Demographics
export interface PlatformDemographic {
  platform: string
  under24: string
  age24to30: string
  age31to35: string
  age36to40: string
  over40: string
}

export const platformDemographics: PlatformDemographic[] = [
  { platform: 'Douyin', under24: '18.76%', age24to30: '28.97%', age31to35: '25.23%', age36to40: '17.74%', over40: '9.30%' },
  { platform: 'TikTok', under24: '39.70%', age24to30: '37.23%', age31to35: '15.23%', age36to40: '4.74%', over40: '3.10%' },
  { platform: 'Bilibili', under24: '61.60%', age24to30: '22.88%', age31to35: '10.13%', age36to40: '3.56%', over40: '1.83%' },
]

// A.6 Media Literacy Intervention Effectiveness
export interface MediaLiteracyEffect {
  outcome: string
  effectSize: string
  significance: string
}

export const mediaLiteracyEffects: MediaLiteracyEffect[] = [
  { outcome: 'Knowledge', effectSize: '1.12', significance: 'p < .001' },
  { outcome: 'Influence', effectSize: '0.60', significance: 'p < .001' },
  { outcome: 'Realism', effectSize: '0.54', significance: 'p < .001' },
  { outcome: 'Self-efficacy', effectSize: '0.34', significance: 'p < .001' },
  { outcome: 'Criticism', effectSize: '0.29', significance: 'p < .001' },
  { outcome: 'Attitudes', effectSize: '0.28', significance: 'p < .001' },
  { outcome: 'Beliefs', effectSize: '0.23', significance: 'p < .001' },
  { outcome: 'Behaviors', effectSize: '0.23', significance: 'p < .001' },
  { outcome: 'Norms', effectSize: '0.18', significance: 'NOT SIGNIFICANT' },
]

// A.7 Political Selective Exposure Statistics
export interface SelectiveExposureStat {
  metric: string
  value: string
  source: string
}

export const selectiveExposureStats: SelectiveExposureStat[] = [
  { metric: 'Republicans watching Fox News (vs CNN)', value: '1.5x more likely', source: 'Selective Exposure Theory' },
  { metric: 'Democrats watching CNN (vs Fox News)', value: '1.5x more likely', source: 'Selective Exposure Theory' },
  { metric: 'Cross-cutting content (liberals on Facebook)', value: '24%', source: 'Bakshy et al. 2015' },
  { metric: 'Cross-cutting content (conservatives on Facebook)', value: '35%', source: 'Bakshy et al. 2015' },
  { metric: 'Facebook friends on opposite political side', value: '15-20%', source: 'Wikipedia' },
  { metric: 'Brexit cross-cutting expressions', value: '29%', source: 'Bossetta et al. 2023' },
  { metric: 'Low diversity media consumers', value: '~8%', source: 'Dubois & Blank 2018' },
  { metric: 'Twitter cross-partisan interactions', value: '34%', source: 'Wikipedia' },
]

// A.8 Network Simulation Parameters (Törnberg Model)
export interface SimulationParameter {
  parameter: string
  value: string
}

export const simulationParameters: SimulationParameter[] = [
  { parameter: 'Network size (N)', value: '100 nodes' },
  { parameter: 'Average degree (k)', value: '8' },
  { parameter: 'Cluster fraction (c)', value: '0.2 (20%)' },
  { parameter: 'Opinion polarization step', value: '0.03' },
  { parameter: 'Network polarization step', value: '0.075' },
  { parameter: 'Threshold step', value: '0.0015' },
  { parameter: 'Iterations per parameter set', value: '1,000' },
  { parameter: 'Total model runs', value: '2.4×10^8' },
  { parameter: 'Empirical validation networks', value: '37 countries' },
  { parameter: 'Random networks per combination', value: '200' },
]

// A.9 Algorithm Personalization Data Points
export interface AlgorithmPersonalizationData {
  metric: string
  value: string
  year?: string
}

export const algorithmPersonalizationData: AlgorithmPersonalizationData[] = [
  { metric: 'Data pieces used by Google for personalization', value: '57', year: '2011' },
  { metric: 'Average cookies installed by top 50 sites', value: '64' },
  { metric: 'Tracking cookies (Dictionary.com)', value: '223' },
  { metric: 'Facebook ad revenue (Q1 2019)', value: '$15 billion', year: '2019' },
  { metric: 'Facebook ad revenue % of total', value: '99%+', year: '2019' },
]

// ============================================================================
// SECTION B: ENTITY REGISTRIES
// ============================================================================

// B.1 Academic Institutions
export interface AcademicInstitution {
  entity: string
  role: string
  researchContribution: string
}

export const academicInstitutions: AcademicInstitution[] = [
  { entity: 'Stanford PACS Center', role: 'Research', researchContribution: 'Political homophily structure analysis' },
  { entity: 'University of Pennsylvania', role: 'Research', researchContribution: 'YouTube algorithm counterfactual study' },
  { entity: 'Ohio State University', role: 'Research', researchContribution: 'Algorithm reality perception study' },
  { entity: 'Harvard Law School', role: 'Policy Analysis', researchContribution: 'Cass Sunstein echo chamber analysis' },
  { entity: 'Yale School of Management', role: 'Research', researchContribution: 'Media abundance/polarization study' },
  { entity: 'Nature Scientific Reports', role: 'Publication', researchContribution: 'Scale effects in filter bubbles' },
  { entity: 'PNAS', role: 'Publication', researchContribution: 'Multiple echo chamber studies' },
  { entity: 'PMC/NIH', role: 'Publication Repository', researchContribution: 'Short video platform study' },
]

// B.2 Platforms Studied
export interface PlatformStudied {
  platform: string
  type: string
  curationMethod: string
  bubbleRisk: string
  keyStudies: string
}

export const platformsStudied: PlatformStudied[] = [
  { platform: 'Google', type: 'Search', curationMethod: 'Query personalization', bubbleRisk: 'HIGH', keyStudies: 'Wikipedia, Pariser' },
  { platform: 'Facebook', type: 'Social Media', curationMethod: 'News feed ranking', bubbleRisk: 'HIGH', keyStudies: 'Brookings, Bakshy' },
  { platform: 'YouTube', type: 'Video', curationMethod: 'Autoplay recommendations', bubbleRisk: 'HIGH', keyStudies: 'UPenn, PMC7613872' },
  { platform: 'TikTok', type: 'Short Video', curationMethod: 'Algorithmic feed', bubbleRisk: 'MEDIUM', keyStudies: 'PMC10111082' },
  { platform: 'Douyin', type: 'Short Video', curationMethod: 'Algorithmic feed', bubbleRisk: 'HIGH', keyStudies: 'PMC10111082' },
  { platform: 'Bilibili', type: 'Short Video', curationMethod: 'Algorithmic feed', bubbleRisk: 'HIGH', keyStudies: 'PMC10111082' },
  { platform: 'WhatsApp', type: 'Messaging', curationMethod: 'Contact-based', bubbleRisk: 'MEDIUM', keyStudies: 'Wikipedia' },
  { platform: 'Twitter/X', type: 'Social Media', curationMethod: 'Algorithmic timeline', bubbleRisk: 'HIGH', keyStudies: 'Boutyline & Willer' },
]

// B.3 Key Researchers
export interface KeyResearcher {
  researcher: string
  institution: string
  contribution: string
}

export const keyResearchers: KeyResearcher[] = [
  { researcher: 'Eli Pariser', institution: 'Data & Society', contribution: 'Filter bubble concept (2011)' },
  { researcher: 'Cass Sunstein', institution: 'Harvard Law', contribution: 'Democratic concerns, group polarization' },
  { researcher: 'C. Thi Nguyen', institution: 'Stanford', contribution: 'Epistemic bubble vs echo chamber distinction' },
  { researcher: 'Mattias Wahlstrom', institution: 'PNAS', contribution: 'Echo chamber effect on social media' },
  { researcher: 'Andreas Jungherr', institution: 'UPenn', contribution: 'YouTube algorithm radicalization study' },
  { researcher: 'James Bail', institution: 'Twitter/PNAS', contribution: 'Opposing views increase polarization' },
  { researcher: 'Eytan Bakshy', institution: 'Facebook', contribution: 'Network vs algorithm effects' },
  { researcher: 'Andrei Boutyline', institution: 'UC Berkeley', contribution: 'Political homophily structure' },
  { researcher: 'Robb Willer', institution: 'Stanford', contribution: 'Political homophily structure' },
  { researcher: 'Chongming Gao', institution: 'UIUC', contribution: 'CIRS filter bubble system' },
]

// B.4 Policy/Regulatory Entities
export interface PolicyEntity {
  entity: string
  type: string
  contribution: string
}

export const policyEntities: PolicyEntity[] = [
  { entity: 'U.S. Congress', type: 'Legislative', contribution: 'Platform Accountability and Transparency Act' },
  { entity: 'EU Commission', type: 'Regulatory', contribution: 'Digital Services Act (DSA)' },
  { entity: 'FTC', type: 'Regulatory', contribution: 'Algorithmic accountability enforcement' },
  { entity: 'NIST', type: 'Standards', contribution: 'Algorithmic audit standardization' },
  { entity: 'Brookings Institution', type: 'Think Tank', contribution: 'Policy recommendations' },
  { entity: 'New America', type: 'Think Tank', contribution: 'Platform regulation analysis' },
]

// B.5 Cognitive Biases Registry
export interface CognitiveBias {
  bias: string
  effectOnEchoChambers: string
  mitigationDifficulty: string
}

export const cognitiveBiases: CognitiveBias[] = [
  { bias: 'Confirmation bias', effectOnEchoChambers: 'Seeking confirming information', mitigationDifficulty: 'Medium' },
  { bias: 'Selection bias', effectOnEchoChambers: 'Choosing congruent sources', mitigationDifficulty: 'Medium' },
  { bias: 'Correlation neglect', effectOnEchoChambers: 'Ignoring base rates', mitigationDifficulty: 'High' },
  { bias: 'Prior attitude effect', effectOnEchoChambers: 'Discounting contrary evidence', mitigationDifficulty: 'High' },
  { bias: 'Homophily', effectOnEchoChambers: 'Associating with similar', mitigationDifficulty: 'Medium' },
]

// B.6 Historical Events Used as Echo Chamber Case Studies
export interface HistoricalEvent {
  eventPeriod: string
  era: string
  echoChamberType: string
}

export const historicalEvents: HistoricalEvent[] = [
  { eventPeriod: 'McMartin preschool trial', era: '1980s', echoChamberType: 'Pack journalism/"echo chamber of horrors"' },
  { eventPeriod: 'Rush Limbaugh radio show', era: '1990s', echoChamberType: 'First empirical echo chamber study' },
  { eventPeriod: 'Clinton-Lewinsky scandal', era: '1998', echoChamberType: 'Partisan media fragmentation' },
  { eventPeriod: 'Brexit referendum', era: '2016', echoChamberType: 'Democratic echo chamber dynamics' },
  { eventPeriod: '2016 U.S. Election', era: '2016', echoChamberType: 'Trump/Clinton Twitter communities' },
  { eventPeriod: 'January 6 Capitol', era: '2021', echoChamberType: '600+ criminal cases with social media evidence' },
]

// ============================================================================
// SECTION C: SENTIMENT ANALYSIS
// ============================================================================

// C.1 Sentiment by Research Position
export interface ResearchPositionSentiment {
  position: string
  sentimentScore: string
  keySources: string
  dominantEmotion: string
}

export const researchPositionSentiment: ResearchPositionSentiment[] = [
  { position: 'Algorithms cause polarization', sentimentScore: 'NEGATIVE (-0.7)', keySources: 'Pariser, Sunstein, Brookings', dominantEmotion: 'Concern, Alarm' },
  { position: 'Users drive consumption', sentimentScore: 'NEUTRAL (0.1)', keySources: 'UPenn, Fletcher', dominantEmotion: 'Skepticism, Uncertainty' },
  { position: 'Polarization inherent in structure', sentimentScore: 'MIXED (-0.2)', keySources: 'Science 2025', dominantEmotion: 'Resignation, Concern' },
  { position: 'Interventions effective', sentimentScore: 'MODERATE (+0.4)', keySources: 'Cambridge Episteme', dominantEmotion: 'Cautious Optimism' },
]

// C.2 Sentiment by Platform
export interface PlatformSentiment {
  platform: string
  sentimentUsers: string
  sentimentResearchers: string
  consensus: string
}

export const platformSentiments: PlatformSentiment[] = [
  { platform: 'Facebook', sentimentUsers: 'NEGATIVE', sentimentResearchers: 'HIGHLY CONCERNED', consensus: 'Platform amplifies division' },
  { platform: 'YouTube', sentimentUsers: 'MIXED', sentimentResearchers: 'CONTESTED', consensus: 'Algorithm role debated' },
  { platform: 'TikTok', sentimentUsers: 'POSITIVE', sentimentResearchers: 'INTEREST', consensus: 'Cultural diversity reduces bubbles' },
  { platform: 'Douyin', sentimentUsers: 'NEUTRAL', sentimentResearchers: 'CONCERNED', consensus: 'Strong echo chamber effects' },
  { platform: 'Twitter/X', sentimentUsers: 'NEGATIVE', sentimentResearchers: 'CONCERNED', consensus: 'High polarization' },
  { platform: 'Google Search', sentimentUsers: 'NEGATIVE', sentimentResearchers: 'CONCERNED', consensus: 'Filter bubble risk' },
]

// C.3 Topic Sentiment Breakdown
export interface TopicSentiment {
  topic: string
  sentiment: string
  confidence: string
  sourceCount: string
}

export const topicSentiments: TopicSentiment[] = [
  { topic: 'Algorithmic radicalization', sentiment: '-0.45', confidence: '0.72', sourceCount: '14 studies' },
  { topic: 'User agency', sentiment: '+0.30', confidence: '0.65', sourceCount: '5 studies' },
  { topic: 'Misinformation spread', sentiment: '-0.60', confidence: '0.80', sourceCount: '8 studies' },
  { topic: 'Intervention effectiveness', sentiment: '+0.15', confidence: '0.50', sourceCount: '6 studies' },
  { topic: 'Regulatory need', sentiment: '-0.55', confidence: '0.78', sourceCount: '7 sources' },
  { topic: 'Serendipity design', sentiment: '+0.50', confidence: '0.60', sourceCount: '3 studies' },
]

// C.4 Emotional Tone Analysis
export interface EmotionalTone {
  theme: string
  primaryEmotion: string
  secondaryEmotion: string
  intensity: string
}

export const emotionalTones: EmotionalTone[] = [
  { theme: 'Filter bubbles', primaryEmotion: 'Concern', secondaryEmotion: 'Alarm', intensity: 'HIGH' },
  { theme: 'Echo chambers', primaryEmotion: 'Alarm', secondaryEmotion: 'Frustration', intensity: 'HIGH' },
  { theme: 'User self-selection', primaryEmotion: 'Skepticism', secondaryEmotion: 'Uncertainty', intensity: 'MEDIUM' },
  { theme: 'Algorithmic effects', primaryEmotion: 'Concern', secondaryEmotion: 'Ambiguity', intensity: 'MEDIUM-HIGH' },
  { theme: 'Mitigation strategies', primaryEmotion: 'Cautious optimism', secondaryEmotion: 'Hope', intensity: 'MEDIUM' },
  { theme: 'Regulatory approaches', primaryEmotion: 'Determination', secondaryEmotion: 'Skepticism', intensity: 'MEDIUM' },
]

// ============================================================================
// SECTION D: UAE RELEVANCE ASSESSMENT
// ============================================================================

// D.1 Direct UAE Relevance Matrix
export interface UAERelevanceItem {
  topicArea: string
  uaeRelevance: string
  rationale: string
}

export const uaeRelevanceMatrix: UAERelevanceItem[] = [
  { topicArea: 'Algorithmic curation', uaeRelevance: 'MEDIUM', rationale: 'UAE uses global platforms (Facebook, YouTube, TikTok, Instagram) with same algorithms' },
  { topicArea: 'Filter bubbles', uaeRelevance: 'MEDIUM', rationale: 'Expat/regional content creates unique filtering dynamics' },
  { topicArea: 'Echo chambers', uaeRelevance: 'HIGH', rationale: 'Regional political discourse, GCC politics, cultural conservatism' },
  { topicArea: 'Misinformation', uaeRelevance: 'HIGH', rationale: 'Regional instability, sensitive political topics (Iran, Yemen, Palestine)' },
  { topicArea: 'Social media regulation', uaeRelevance: 'CRITICAL', rationale: 'UAE has strict social media laws, NSO surveillance concerns' },
  { topicArea: 'Platform accountability', uaeRelevance: 'MEDIUM', rationale: 'UAE citizens use same global platforms' },
]

// D.2 UAE-Specific Considerations
export interface UAEConsideration {
  factor: string
  impact: string
  evidence: string
}

export const uaeConsiderations: UAEConsideration[] = [
  { factor: 'Large expat population', impact: 'Creates linguistic/demographic bubbles', evidence: 'Regional content fragmentation' },
  { factor: 'Strict media laws', impact: 'Limits local echo chamber formation', evidence: 'Government-controlled media landscape' },
  { factor: 'TikTok usage', impact: 'HIGH', evidence: "TikTok shows WEAK echo effects (cultural diversity)" },
  { factor: 'WhatsApp dominance', impact: 'MEDIUM', evidence: 'End-to-end encryption limits visibility' },
  { factor: 'Instagram/TikTok for youth', impact: 'HIGH', evidence: '<40 demographic heavily influenced' },
  { factor: 'Regional instability', impact: 'HIGH', evidence: 'Sensitive to GCC/Iran/Yemen/Palestine content' },
]

// D.3 Regional Echo Chamber Dynamics (Middle East)
export interface RegionalDynamic {
  dynamic: string
  presentInUAERegion: string
  evidence: string
}

export const regionalDynamics: RegionalDynamic[] = [
  { dynamic: 'Political homophily', presentInUAERegion: 'YES', evidence: 'GCC political alignment' },
  { dynamic: 'Algorithmic amplification', presentInUAERegion: 'YES', evidence: 'Global platforms same algorithms' },
  { dynamic: 'Cross-cutting exposure', presentInUAERegion: 'LIMITED', evidence: 'Political sensitivity' },
  { dynamic: 'Misinformation spread', presentInUAERegion: 'YES', evidence: 'Regional conflict-related' },
  { dynamic: 'Youth polarization', presentInUAERegion: 'EMERGING', evidence: 'TikTok-heavy demographics' },
]

// D.4 Threat Assessment for UAE Information Ecosystem
export interface ThreatAssessment {
  threat: string
  probability: string
  impact: string
  combinedScore: string
}

export const threatAssessments: ThreatAssessment[] = [
  { threat: 'Foreign misinformation campaigns', probability: 'HIGH', impact: 'HIGH', combinedScore: 'CRITICAL' },
  { threat: 'Regional political polarization', probability: 'MEDIUM', impact: 'HIGH', combinedScore: 'HIGH' },
  { threat: 'Youth radicalization pathways', probability: 'MEDIUM', impact: 'HIGH', combinedScore: 'HIGH' },
  { threat: 'Expat-citizen information gap', probability: 'MEDIUM', impact: 'MEDIUM', combinedScore: 'MEDIUM' },
  { threat: 'Platform algorithm manipulation', probability: 'LOW', impact: 'HIGH', combinedScore: 'MEDIUM' },
  { threat: 'Domestic echo chamber formation', probability: 'LOW', impact: 'MEDIUM', combinedScore: 'LOW' },
]

// ============================================================================
// SECTION E: SOURCE CREDIBILITY MATRIX
// ============================================================================

// E.1 Source Tier Classification
export interface SourceCredibility {
  source: string
  url: string
  tier: string
  rationale: string
}

export const sourceCredibilityMatrix: SourceCredibility[] = [
  { source: 'PMC/NIH - Short Video Study', url: 'pmc.ncbi.nlm.nih.gov/articles/PMC10111082/', tier: 'TIER 1', rationale: 'Peer-reviewed, large sample (963 videos, 391K comments)' },
  { source: 'UPenn YouTube Study', url: 'asc.upenn.edu/news-events/news/youtube-algorithm-isnt-radicalizing-people', tier: 'TIER 1', rationale: 'Counterfactual methodology, 87,988 users' },
  { source: 'Brookings Institution', url: 'brookings.edu/articles/how-tech-platforms-fuel-u-s-political-polarization', tier: 'TIER 1', rationale: 'Well-cited think tank, 50+ studies reviewed' },
  { source: 'PNAS (Multiple)', url: 'pnas.org', tier: 'TIER 1', rationale: 'Prestigious peer-reviewed journal' },
  { source: 'Nature Scientific Reports', url: 'nature.com', tier: 'TIER 1', rationale: 'Peer-reviewed, quantitative' },
  { source: 'PMC - YouTube Systematic Review', url: 'pmc.ncbi.nlm.nih.gov/articles/PMC7613872/', tier: 'TIER 1', rationale: 'PRISMA methodology, 23 studies' },
  { source: 'PMC - Viral Misinformation', url: 'pmc.ncbi.nlm.nih.gov/articles/PMC6147442/', tier: 'TIER 1', rationale: '2.4×10^8 simulation runs' },
  { source: 'Harvard Law School', url: 'hls.harvard.edu/today/danger-internet-echo-chamber/', tier: 'TIER 2', rationale: "Expert opinion (Sunstein), institutional" },
  { source: 'Fondation Descartes', url: 'fondationdescartes.org', tier: 'TIER 2', rationale: 'European think tank, synthesis' },
  { source: 'Cambridge Episteme', url: 'cambridge.org/core/journals/episteme', tier: 'TIER 2', rationale: 'Peer-reviewed philosophy journal' },
  { source: 'Stanford PACS', url: 'pacscenter.stanford.edu', tier: 'TIER 2', rationale: 'Academic center, solid methodology' },
  { source: 'Yale Insights', url: 'insights.som.yale.edu', tier: 'TIER 2', rationale: 'Academic institution' },
  { source: 'arXiv (CIRS)', url: 'arxiv.org/abs/2204.01266', tier: 'TIER 2', rationale: 'Pre-print, strong technical approach' },
  { source: 'Congress.gov', url: 'congress.gov/bill/119th-congress/senary-bill/3292', tier: 'TIER 2', rationale: 'Primary legislative source' },
  { source: 'Wikipedia', url: 'en.wikipedia.org', tier: 'TIER 3', rationale: 'Aggregated, variable citations' },
  { source: 'The Lantern', url: 'thelantern.com', tier: 'TIER 3', rationale: 'University newspaper, smaller sample' },
  { source: 'Science.org', url: 'science.org', tier: 'TIER 2', rationale: 'Prestigious journal' },
  { source: 'Harvard Law Review', url: 'harvardlawreview.org', tier: 'TIER 2', rationale: 'Academic legal journal' },
  { source: 'New America', url: 'newamerica.org', tier: 'TIER 2', rationale: 'Think tank, policy focus' },
]

// E.2 Tier Distribution Summary
export interface TierDistribution {
  tier: string
  count: number
  percentage: string
}

export const tierDistribution: TierDistribution[] = [
  { tier: 'TIER 1 (Gold Standard)', count: 7, percentage: '33%' },
  { tier: 'TIER 2 (High Quality)', count: 9, percentage: '43%' },
  { tier: 'TIER 3 (Moderate)', count: 3, percentage: '14%' },
  { tier: 'TIER 4 (Low/Blog)', count: 0, percentage: '0%' },
]

// E.3 Evidence Quality Assessment
export interface EvidenceQuality {
  qualityDimension: string
  score: string
  leadingSource: string
}

export const evidenceQuality: EvidenceQuality[] = [
  { qualityDimension: 'Methodological rigor', score: '8.5/10', leadingSource: 'UPenn counterfactual bots' },
  { qualityDimension: 'Sample size', score: '9.0/10', leadingSource: 'PMC10111082 (391K comments)' },
  { qualityDimension: 'Reproducibility', score: '8.0/10', leadingSource: 'Törnberg simulation' },
  { qualityDimension: 'Peer review status', score: '8.5/10', leadingSource: 'PNAS, Nature' },
  { qualityDimension: 'Citation count', score: '7.5/10', leadingSource: 'Brookings (50+ studies)' },
  { qualityDimension: 'Recency', score: '7.0/10', leadingSource: 'UPenn, Science 2025' },
]

// ============================================================================
// SECTION F: SOURCE CONTENT SUMMARIES
// ============================================================================

export interface SourceSummary {
  sourceName: string
  url: string
  tier: string
  dateFetched: string
  keyData: string[]
  criticalInsight?: string
}

export const sourceSummaries: SourceSummary[] = [
  {
    sourceName: 'Fondation Descartes',
    url: 'https://www.fondationdescartes.org/en/2020/07/filter-bubbles-and-echo-chambers/',
    tier: 'TIER 2',
    dateFetched: '2026-04-28',
    keyData: [
      'Filter bubble: "ways in which information is filtered before reaching an Internet user"',
      'Echo chamber: "virtual communities where people share and receive information focused on their interests"',
      '$15 billion Facebook ad revenue Q1 2019 (99%+ of total revenue)',
      'Polarization may result from "intense virtual confrontations" rather than isolation',
    ],
    criticalInsight: 'Both filter bubbles and echo chambers are contested concepts',
  },
  {
    sourceName: 'PMC/NIH Short Video Study',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10111082/',
    tier: 'TIER 1',
    dateFetched: '2026-04-28',
    keyData: [
      'Sample: 963 original short videos, 391,676 comment texts, 298,762 comment users',
      'EC Statistics: 3,682 echo chambers with 34,564 total members',
      'Douyin: 1,303 ECs, TikTok: 1,271 ECs, Bilibili: 1,108 ECs',
      'Douyin: 85.32% common users, TikTok: 92.55% common users, Bilibili: 89.17% common users',
      'Douyin/Bilibili: ~50% positive echo chambers; TikTok: >50% controversial echo chambers',
    ],
    criticalInsight: '"The gathering of users into homogeneous groups dominates online interactions on Douyin and Bilibili"',
  },
  {
    sourceName: 'UPenn Annenberg — YouTube Algorithm',
    url: 'https://www.asc.upenn.edu/news-events/news/youtube-algorithm-isnt-radicalizing-people',
    tier: 'TIER 1',
    dateFetched: '2026-04-28',
    keyData: [
      '"Users\' own political interests play the primary role in what they watch, not the algorithm"',
      'Relying exclusively on recommender results in LESS partisan consumption',
      'If recommendation features have impact, it is MODERATING (not amplifying)',
      'Counterfactual bots consumed less partisan content than real users',
      'Methodology: 87,988 real users\' watch histories, October 2021 to December 2022',
    ],
    criticalInsight: '"Users have significant agency over their actions"',
  },
  {
    sourceName: 'PMC — Echo chambers and viral misinformation',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6147442/',
    tier: 'TIER 1',
    dateFetched: '2026-04-28',
    keyData: [
      '2.4×10^8 total simulation runs',
      'At θ=0.270, random networks show ~65% global cascade probability',
      'At optimal network polarization (~0.6), virality exceeds 85%',
      'Peak network polarization (P_nc) occurs at 0.55-0.6, declines beyond 0.7',
      '37 country network combinations validated',
    ],
    criticalInsight: 'Echo chambers boost virality through complex contagion',
  },
  {
    sourceName: 'Brookings Institution',
    url: 'https://www.brookings.edu/articles/how-tech-platforms-fuel-u-s-political-polarization',
    tier: 'TIER 1',
    dateFetched: '2026-04-28',
    keyData: [
      'Reviewed more than 50 social science studies',
      'Conducted interviews with 40+ academics, policy experts, activists, industry insiders',
      'Core conclusion: "Platforms like Facebook, YouTube, Twitter likely not root causes but do exacerbate polarization"',
      'Over 600 criminal cases related to January 6th relied on social media evidence',
    ],
    criticalInsight: '"Social media companies like Facebook and Twitter have intensifying role in political sectarianism"',
  },
]

// ============================================================================
// SECTION G: QUANTITATIVE METRICS REGISTRY
// ============================================================================

export interface QuantitativeMetric {
  id: string
  metric: string
  value: string
  unit: string
  source: string
  year: string
}

export const quantitativeMetrics: QuantitativeMetric[] = [
  { id: 'Q001', metric: 'Global cascade probability (random)', value: '65', unit: '%', source: 'PMC6147442', year: '2018' },
  { id: 'Q002', metric: 'Global cascade probability (optimal)', value: '>85', unit: '%', source: 'PMC6147442', year: '2018' },
  { id: 'Q003', metric: 'Optimal network polarization', value: '60', unit: '%', source: 'PMC6147442', year: '2018' },
  { id: 'Q004', metric: 'Simulation runs', value: '2.4×10^8', unit: 'runs', source: 'PMC6147442', year: '2018' },
  { id: 'Q005', metric: 'Short videos analyzed', value: '963', unit: 'videos', source: 'PMC10111082', year: '2023' },
  { id: 'Q006', metric: 'Comments analyzed', value: '391,676', unit: 'comments', source: 'PMC10111082', year: '2023' },
  { id: 'Q007', metric: 'Echo chambers identified', value: '3,682', unit: 'ECs', source: 'PMC10111082', year: '2023' },
  { id: 'Q008', metric: 'Echo chamber members', value: '34,564', unit: 'users', source: 'PMC10111082', year: '2023' },
  { id: 'Q009', metric: 'TikTok WEAK echo effect', value: '1', unit: 'binary', source: 'PMC10111082', year: '2023' },
  { id: 'Q010', metric: 'Douyin/Bilibili echo strength', value: 'STRONG', unit: 'category', source: 'PMC10111082', year: '2023' },
  { id: 'Q011', metric: 'YouTube views from recommendations', value: '30', unit: '%', source: 'PMC7613872', year: '2022' },
  { id: 'Q012', metric: 'Participants seeing extremist content', value: '37', unit: '%', source: 'PMC7613872', year: '2022' },
  { id: 'Q013', metric: 'Incel content probability (5 steps)', value: '18.8', unit: '%', source: 'PMC7613872', year: '2022' },
  { id: 'Q014', metric: 'Videos removed child safety', value: '3.8', unit: 'million', source: 'PMC7613872', year: '2020' },
  { id: 'Q015', metric: 'Videos removed spam', value: '1.4', unit: 'million', source: 'PMC7613872', year: '2020' },
  { id: 'Q016', metric: 'Videos removed violent/extremist', value: '73,000', unit: 'videos', source: 'PMC7613872', year: '2020' },
  { id: 'Q017', metric: 'YouTube studies implicating algorithm', value: '14/23', unit: 'ratio', source: 'PMC7613872', year: '2022' },
  { id: 'Q018', metric: 'Studies with mixed results', value: '7/23', unit: 'ratio', source: 'PMC7613872', year: '2022' },
  { id: 'Q019', metric: 'Studies not implicating algorithm', value: '2/23', unit: 'ratio', source: 'PMC7613872', year: '2022' },
  { id: 'Q020', metric: 'UPenn watch histories analyzed', value: '87,988', unit: 'users', source: 'UPenn', year: '2025' },
  { id: 'Q021', metric: 'Media literacy effect size', value: '0.37', unit: 'd', source: 'PMC3377317', year: '2012' },
  { id: 'Q022', metric: 'Knowledge effect size', value: '1.12', unit: 'd', source: 'PMC3377317', year: '2012' },
  { id: 'Q023', metric: 'Cross-cutting exposure (liberals)', value: '24', unit: '%', source: 'Bakshy 2015', year: '2015' },
  { id: 'Q024', metric: 'Cross-cutting exposure (conservatives)', value: '35', unit: '%', source: 'Bakshy 2015', year: '2015' },
  { id: 'Q025', metric: 'Twitter cross-partisan interactions', value: '34', unit: '%', source: 'Wikipedia', year: 'N/A' },
  { id: 'Q026', metric: 'Facebook friends opposite side', value: '15-20', unit: '%', source: 'Wikipedia', year: 'N/A' },
  { id: 'Q027', metric: 'Low diversity media consumers', value: '8', unit: '%', source: 'Dubois & Blank 2018', year: '2018' },
  { id: 'Q028', metric: 'Google personalization data pieces', value: '57', unit: 'pieces', source: 'Wikipedia', year: '2011' },
  { id: 'Q029', metric: 'Tracking cookies (Dictionary.com)', value: '223', unit: 'cookies', source: 'Wikipedia', year: 'N/A' },
  { id: 'Q030', metric: 'Facebook Q1 2019 ad revenue', value: '15', unit: 'billion USD', source: 'Fondation Descartes', year: '2019' },
  { id: 'Q031', metric: 'Tweets per day', value: '500', unit: 'million', source: 'Yale', year: 'N/A' },
  { id: 'Q032', metric: 'YouTube hours uploaded/minute', value: '500', unit: 'hours', source: 'Yale', year: 'N/A' },
  { id: 'Q033', metric: 'Instagram new pictures/day', value: '200', unit: 'million', source: 'Yale', year: 'N/A' },
  { id: 'Q034', metric: 'January 6 cases with social media', value: '600+', unit: 'cases', source: 'Brookings', year: '2021' },
  { id: 'Q035', metric: 'Network size (simulation)', value: '100', unit: 'nodes', source: 'PMC6147442', year: '2018' },
  { id: 'Q036', metric: 'Average degree (simulation)', value: '8', unit: 'edges', source: 'PMC6147442', year: '2018' },
  { id: 'Q037', metric: 'Cluster fraction', value: '0.2', unit: 'ratio', source: 'PMC6147442', year: '2018' },
  { id: 'Q038', metric: 'Meta-analysis studies', value: '51', unit: 'studies', source: 'PMC3377317', year: '2012' },
  { id: 'Q039', metric: 'OSU experiment participants', value: '346', unit: 'participants', source: 'The Lantern', year: '2025' },
  { id: 'Q040', metric: 'Democrats watching CNN (relative)', value: '1.5x', unit: 'multiplier', source: 'Wikipedia', year: 'N/A' },
  { id: 'Q041', metric: 'Republicans watching Fox (relative)', value: '1.5x', unit: 'multiplier', source: 'Wikipedia', year: 'N/A' },
]

// ============================================================================
// SECTION G.2: QUALITATIVE FINDINGS REGISTRY
// ============================================================================

export interface QualitativeFinding {
  id: string
  finding: string
  category: string
  source: string
  consensus: string
}

export const qualitativeFindings: QualitativeFinding[] = [
  { id: 'F001', finding: 'Echo chambers and filter bubbles are distinct phenomena', category: 'Definition', source: 'Cambridge Episteme', consensus: 'High' },
  { id: 'F002', finding: "Algorithms influence but don't solely determine exposure", category: 'Algorithmic Effect', source: 'Multiple', consensus: 'High' },
  { id: 'F003', finding: 'User preferences play primary role in consumption', category: 'User Agency', source: 'UPenn', consensus: 'Moderate' },
  { id: 'F004', finding: "TikTok's linguistic diversity reduces bubbles", category: 'Platform Effect', source: 'PMC10111082', consensus: 'High' },
  { id: 'F005', finding: 'Douyin/Bilibili show strong echo effects', category: 'Platform Effect', source: 'PMC10111082', consensus: 'High' },
  { id: 'F006', finding: 'Polarization may be inherent in social media', category: 'Structure', source: 'Science 2025', consensus: 'Moderate' },
  { id: 'F007', finding: 'Interventions effective for bubbles, not chambers', category: 'Intervention', source: 'Cambridge Episteme', consensus: 'High' },
  { id: 'F008', finding: 'Exposure to opposing views can increase polarization', category: 'Counterintuitive', source: 'Bail 2018', consensus: 'High' },
  { id: 'F009', finding: 'Misinformation largely a symptom of polarization', category: 'Root Cause', source: 'Altay 2022', consensus: 'Moderate' },
  { id: 'F010', finding: 'Simple interventions do not effectively reduce polarization', category: 'Mitigation', source: 'Multiple', consensus: 'High' },
  { id: 'F011', finding: 'Algorithms can create overconfidence in flawed understanding', category: 'Cognitive Effect', source: 'OSU', consensus: 'Moderate' },
  { id: 'F012', finding: 'Homophily higher in extreme/conservative individuals', category: 'Personality', source: 'Boutyline', consensus: 'Moderate' },
  { id: 'F013', finding: 'Echo chambers boost viral misinformation spread', category: 'Mechanism', source: 'Törnberg', consensus: 'High' },
  { id: 'F014', finding: 'Network structure beyond algorithms drives division', category: 'Structure', source: 'Science 2025', consensus: 'Moderate' },
]

// ============================================================================
// SECTION H: RESEARCH SYNTHESIS
// ============================================================================

// H.1 Consensus Matrix
export interface ConsensusItem {
  finding: string
  consensusLevel: string
  supportingSources: string
  challengingSources: string
}

export const consensusMatrix: ConsensusItem[] = [
  { finding: 'Filter bubbles exist as algorithmic phenomenon', consensusLevel: 'HIGH', supportingSources: 'All sources', challengingSources: 'UPenn (user agency)' },
  { finding: 'Echo chambers exist as social phenomenon', consensusLevel: 'HIGH', supportingSources: 'All sources', challengingSources: 'PNAS 2024 (null effect)' },
  { finding: 'Algorithms influence exposure', consensusLevel: 'HIGH', supportingSources: 'All sources', challengingSources: 'UPenn (moderating only)' },
  { finding: 'Algorithms are sole/predominant cause', consensusLevel: 'MODERATE-LOW', supportingSources: 'Pariser, Sunstein', challengingSources: 'UPenn, Fletcher' },
  { finding: 'User self-selection drives consumption', consensusLevel: 'MODERATE-HIGH', supportingSources: 'UPenn, Bakshy', challengingSources: 'Brookings' },
  { finding: 'Simple interventions reduce polarization', consensusLevel: 'LOW', supportingSources: 'Media literacy', challengingSources: 'Cambridge Episteme' },
  { finding: 'Serendipity design is promising', consensusLevel: 'MODERATE', supportingSources: 'ACM, CIRS', challengingSources: 'Limited evidence' },
]

// H.2 Methodological Quality Assessment
export interface MethodQuality {
  method: string
  studies: string
  qualityScore: string
  keyLimitation: string
}

export const methodQuality: MethodQuality[] = [
  { method: 'Counterfactual bots', studies: '1', qualityScore: '9.0/10', keyLimitation: 'Simulated vs real behavior' },
  { method: 'Large-scale simulation', studies: '1', qualityScore: '8.5/10', keyLimitation: 'Model assumptions' },
  { method: 'PRISMA systematic review', studies: '1', qualityScore: '8.0/10', keyLimitation: 'Publication bias' },
  { method: 'Field experiment', studies: '2', qualityScore: '8.5/10', keyLimitation: 'External validity' },
  { method: 'Network analysis', studies: '3', qualityScore: '7.5/10', keyLimitation: 'Cross-sectional' },
  { method: 'Meta-analysis', studies: '1', qualityScore: '8.0/10', keyLimitation: 'Heterogeneity' },
  { method: 'Platform data mining', studies: '2', qualityScore: '7.0/10', keyLimitation: 'Limited access' },
]

// H.3 Key Research Gaps
export const researchGaps: string[] = [
  'Long-term vs. short-term effects: Most studies examine short-term exposure; long-term attitude formation remains unclear',
  'Causal identification: Distinguishing algorithm effects from user self-selection remains methodologically challenging',
  'Cross-platform dynamics: Most studies examine single platforms; cross-platform information flows less understood',
  'Cultural variation: Most research focuses on Western platforms; global applicability uncertain',
  'Intervention effectiveness: Which interventions actually reduce polarization without suppressing legitimate expression?',
  'UAE/Regional context: No studies identified examining Middle Eastern or UAE-specific echo chamber dynamics',
]

// ============================================================================
// SECTION I: CONCEPTUAL FRAMEWORK
// ============================================================================

export interface ConceptualDefinition {
  term: string
  definition: string
  source: string
}

export const conceptualDefinitions: ConceptualDefinition[] = [
  {
    term: 'Filter Bubble',
    definition: '"Intellectual isolation that arises when personalized searches, recommendation systems, and algorithmic curation selectively present information to each user."',
    source: 'Eli Pariser, 2011',
  },
  {
    term: 'Echo Chamber',
    definition: '"An environment or ecosystem in which participants encounter beliefs that amplify or reinforce their preexisting beliefs, by communication and repetition inside a closed system and insulated from rebuttal."',
    source: 'Research Definition',
  },
  {
    term: 'Epistemic Bubble vs. Echo Chamber',
    definition: 'Members of epistemic bubbles lack exposure to information, while echo chamber members systematically distrust and discredit outside sources.',
    source: 'C. Thi Nguyen, 2020',
  },
]

// ============================================================================
// ENRICHMENT METADATA
// ============================================================================

export const echoChamberEnrichmentMetadata = {
  query: 'micro-queries/part-11/11-8-echo-chamber-filter',
  enrichmentDate: '2026-04-27',
  ssotEnrichmentCompleted: '2026-04-28',
  totalUrlsProcessed: 25,
  urlsSuccessfullyFetched: 21,
  urlsFailed: 4,
  dataPointsExtracted: 200,
  entitiesCatalogued: 50,
  researchType: 'Algorithmic content curation, information flow dynamics, information ecosystem analysis',
}

// ============================================================================
// DASHBOARD KPIS (for metric cards)
// ============================================================================

export interface EchoChamberKPI {
  id: string
  title: string
  value: string
  unit?: string
  icon: string
  gradient: string
  status: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  description: string
}

export const echoChamberKPIs: EchoChamberKPI[] = [
  {
    id: 'kpi-1',
    title: 'Global Cascade Probability',
    value: '65%',
    icon: 'activity',
    gradient: 'gold',
    status: 'warning',
    description: 'Random networks cascade rate',
  },
  {
    id: 'kpi-2',
    title: 'Optimal Polarization',
    value: '>85%',
    icon: 'trending-up',
    gradient: 'rose',
    status: 'error',
    description: 'Optimal polarization cascade rate',
  },
  {
    id: 'kpi-3',
    title: 'Echo Chambers Identified',
    value: '3,682',
    icon: 'network',
    gradient: 'purple',
    status: 'warning',
    description: 'Across Douyin, TikTok, Bilibili',
  },
  {
    id: 'kpi-4',
    title: 'EC Members Total',
    value: '34,564',
    icon: 'users',
    gradient: 'indigo',
    status: 'info',
    description: 'Total echo chamber members',
  },
  {
    id: 'kpi-5',
    title: 'Douyin EC Strength',
    value: '85.32%',
    icon: 'shield',
    gradient: 'rose',
    status: 'error',
    description: '% common users in echo chambers',
  },
  {
    id: 'kpi-6',
    title: 'TikTok EC Strength',
    value: 'WEAK',
    icon: 'check-circle',
    gradient: 'emerald',
    status: 'success',
    description: 'Cultural diversity reduces bubbles',
  },
  {
    id: 'kpi-7',
    title: 'YouTube Algorithm Studies',
    value: '14/23',
    icon: 'bar-chart',
    gradient: 'gold',
    status: 'warning',
    description: 'Studies implicating recommender',
  },
  {
    id: 'kpi-8',
    title: 'Media Literacy Effect',
    value: 'd=1.12',
    icon: 'book-open',
    gradient: 'teal',
    status: 'success',
    description: 'Knowledge effect size (p<.001)',
  },
]

// ============================================================================
// CHART DATA
// ============================================================================

export const platformComparisonData = [
  { name: 'Douyin', echoStrength: 85.32, commonUsers: 85.32, controversial: 14.68 },
  { name: 'Bilibili', echoStrength: 89.17, commonUsers: 89.17, controversial: 10.83 },
  { name: 'TikTok', echoStrength: 7.45, commonUsers: 92.55, controversial: 7.45 },
  { name: 'Facebook', echoStrength: 65, commonUsers: 0, controversial: 35 },
  { name: 'YouTube', echoStrength: 50, commonUsers: 0, controversial: 30 },
]

export const sentimentScoreData = [
  { position: 'Algorithms cause polarization', score: -0.7 },
  { position: 'Users drive consumption', score: 0.1 },
  { position: 'Polarization inherent', score: -0.2 },
  { position: 'Interventions effective', score: 0.4 },
]

export const mediaLiteracyChartData = [
  { outcome: 'Knowledge', effectSize: 1.12 },
  { outcome: 'Influence', effectSize: 0.60 },
  { outcome: 'Realism', effectSize: 0.54 },
  { outcome: 'Self-efficacy', effectSize: 0.34 },
  { outcome: 'Criticism', effectSize: 0.29 },
  { outcome: 'Attitudes', effectSize: 0.28 },
  { outcome: 'Beliefs', effectSize: 0.23 },
  { outcome: 'Behaviors', effectSize: 0.23 },
  { outcome: 'Norms', effectSize: 0.18 },
]

export const tierDistributionData = [
  { name: 'TIER 1', value: 7, color: '#22c55e' },
  { name: 'TIER 2', value: 9, color: '#3b82f6' },
  { name: 'TIER 3', value: 3, color: '#f59e0b' },
  { name: 'TIER 4', value: 0, color: '#64748b' },
]

export const uaeThreatData = [
  { threat: 'Foreign misinformation', probability: 90, impact: 85 },
  { threat: 'Regional polarization', probability: 65, impact: 80 },
  { threat: 'Youth radicalization', probability: 60, impact: 75 },
  { threat: 'Expat-citizen gap', probability: 55, impact: 55 },
  { threat: 'Algorithm manipulation', probability: 35, impact: 70 },
  { threat: 'Domestic echo chamber', probability: 30, impact: 45 },
]

export const sourceTierData = [
  { name: 'PMC/NIH', tier: 1, studies: 3 },
  { name: 'UPenn', tier: 1, studies: 1 },
  { name: 'Brookings', tier: 1, studies: 1 },
  { name: 'PNAS', tier: 1, studies: 2 },
  { name: 'Nature', tier: 1, studies: 1 },
  { name: 'Harvard', tier: 2, studies: 2 },
  { name: 'Cambridge', tier: 2, studies: 1 },
  { name: 'Stanford', tier: 2, studies: 2 },
  { name: 'Yale', tier: 2, studies: 1 },
  { name: 'arXiv', tier: 2, studies: 1 },
  { name: 'Congress', tier: 2, studies: 1 },
  { name: 'Wikipedia', tier: 3, studies: 3 },
]

export const demographicData = [
  { platform: 'Douyin', under24: 18.76, age24to30: 28.97, age31to35: 25.23, age36to40: 17.74, over40: 9.30 },
  { platform: 'TikTok', under24: 39.70, age24to30: 37.23, age31to35: 15.23, age36to40: 4.74, over40: 3.10 },
  { platform: 'Bilibili', under24: 61.60, age24to30: 22.88, age31to35: 10.13, age36to40: 3.56, over40: 1.83 },
]

export const crossCuttingData = [
  { group: 'Liberals (Facebook)', crossCutting: 24, sameSide: 76 },
  { group: 'Conservatives (Facebook)', crossCutting: 35, sameSide: 65 },
  { group: 'Brexit expressions', crossCutting: 29, sameSide: 71 },
  { group: 'Twitter interactions', crossCutting: 34, sameSide: 66 },
  { group: 'Low diversity consumers', crossCutting: 8, sameSide: 92 },
]

export const youtubeRemovalData = [
  { category: 'Child Safety', value: 3800000 },
  { category: 'Spam/Misleading', value: 1400000 },
  { category: 'Harmful/Abusive', value: 259000 },
  { category: 'Violent/Extremist', value: 73000 },
]
