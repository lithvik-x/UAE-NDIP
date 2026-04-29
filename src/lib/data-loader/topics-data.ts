/**
 * Topics / H-S-P-B-C Framework Data
 *
 * Comprehensive TypeScript data for the Topics/H-S-P-B-C Framework analysis.
 * Parsed from markdown source files in /docs/dashboard-data/
 *
 * @fileOverview Topics analysis data organized by H-S-P-B-C category
 */

import type {
  TopicAnalysis,
  HSBPCCategory,
  TierLevel,
  AlertLevel,
  SentimentBreakdown,
  CredibilityScore,
  SourceReference,
  KeyFinding,
  TrendData,
  PlutchikEmotion,
  UAERelevance,
} from './types'

// Import comprehensive transportation data from the dedicated data file
import { transportationLogisticsData as comprehensiveTransportData } from '@/lib/data/topics/transportation-data'

// Import comprehensive sports intelligence data from the dedicated data file
import { sportsIntelligenceData } from '@/lib/data/topics/sports-data'

// Import comprehensive religion & interfaith data from the dedicated data file
import { religionInterfaithData as comprehensiveReligionData } from '@/lib/data/topics/religion-data'

// Re-export for use by other modules
export { sportsIntelligenceData }
export { comprehensiveReligionData }
export { comprehensiveTransportData as transportationLogisticsData }

// ============================================================================
// FILE 2-1: POLITICS & GOVERNANCE
// ============================================================================

export const politicsGovernanceData: TopicAnalysis = {
  id: 'topic-2-1',
  sector: 'policy',
  title: 'Politics & Governance',
  titleAr: 'السياسة والحوكمة',
  description: 'Federal government structure, presidential leadership, FNC elections, human rights, surveillance state, influence operations, vision frameworks, press freedom',
  keyFindings: [
    { finding: 'Freedom House Score: 18/100 - Not Free', metric: '18/100', source: 'Freedom House 2025', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'RSF Press Freedom Ranking: 164th of 180 countries', metric: '164th', source: 'RSF 2025', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Political Prisoners: 55-60 UAE94 defendants still imprisoned', metric: '55-60', source: 'HRW/Amnesty', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'UAE94 mass trial convicted 69 individuals', metric: '69', source: 'Amnesty International', tier: 2 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Women in FNC: 50% (parity achieved)', metric: '50%', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'Women in Cabinet: 21% (highest in MENA)', metric: '21%', source: 'UAE Government 2025', tier: 0 as TierLevel },
    { finding: 'Influence operations spending: $157+ million since 2016', metric: '$157M+', source: 'Congressional reports', tier: 2 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Electoral College 2023: 398,879 voters, 44% turnout', metric: '44%', source: 'Wikipedia', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 850000,
    reach: 9500000,
    engagement: 420000,
    sentiment: { positive: 35, negative: 45, neutral: 20, overall: -10, volume: 850000 },
    trend: { direction: 'declining' as const, changePercent: -12.1, period: '2024-2025', value: 26.91 },
  },
  sentiment: { positive: 35, negative: 45, neutral: 20, overall: -10, volume: 850000 },
  emotions: { joy: 15, trust: 25, fear: 35, surprise: 10, sadness: 30, disgust: 25, anger: 20, anticipation: 15 },
  credibility: { tier: 2 as TierLevel, score: 45, sources: 60, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 98, level: 'critical' as const, justification: 'Core governance topics directly affect all UAE residents and national policy' },
  alertLevel: 'RED' as AlertLevel,
  trends: [
    { direction: 'declining' as const, changePercent: -12.1, period: '2024-2025', value: 26.91 },
    { direction: 'stable' as const, changePercent: 0, period: '2023-2024', value: 164 },
  ],
  stakeholders: ['President MBZ', 'FNC Members', 'Ministry of Interior', 'State Security', 'Federal Supreme Court'],
  relatedEntities: ['UAE Government', 'Freedom House', 'Amnesty International', 'RSF', 'Human Rights Watch'],
  sources: [
    { name: 'Freedom House', url: 'https://freedomhouse.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'RSF', url: 'https://rsf.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'UAE Government Portal', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-2: ECONOMY & BUSINESS
// ============================================================================

export const economyBusinessData: TopicAnalysis = {
  id: 'topic-2-2',
  sector: 'business',
  title: 'Economy & Business',
  titleAr: 'الاقتصاد والأعمال',
  description: 'GDP growth, diversification, banking, FDI, startups, unicorns, trade, credit ratings, FATF delisting, cost of living',
  keyFindings: [
    { finding: 'GDP Growth 2025: 5.6% (non-oil: 5.6%)', metric: '5.6%', source: 'IMF', tier: 1 as TierLevel },
    { finding: 'Nominal GDP 2025: $571B, Projected 2026: $967.62B', metric: '$571B', source: 'Central Bank', tier: 1 as TierLevel },
    { finding: 'GDP Per Capita 2025: $50,232', metric: '$50,232', source: 'Central Bank', tier: 1 as TierLevel },
    { finding: 'Non-Oil GDP: 75.5% (2024), 77.1% (2025 target)', metric: '77.1%', source: 'Ministry of Finance', tier: 0 as TierLevel },
    { finding: 'Banking Assets: $1.47T (2025), Credit Growth: 17.9%', metric: '$1.47T', source: 'Central Bank Annual Report', tier: 1 as TierLevel },
    { finding: 'FDI Inflows 2025: $45B', metric: '$45B', source: 'FDI Intelligence', tier: 1 as TierLevel },
    { finding: 'Total UAE SWF Assets: ~$2.5 Trillion', metric: '$2.5T', source: 'Khaleej Times/Forbes', tier: 1 as TierLevel },
    { finding: 'FATF Grey List: Removed February 2024', metric: 'Removed', source: 'FATF', tier: 1 as TierLevel },
    { finding: 'Credit Ratings: Fitch AA-, Moody\'s Aa2, S&P AA (All Stable)', metric: 'AA-', source: 'Rating Agencies', tier: 1 as TierLevel },
    { finding: 'Unemployment: 2.17% (2025)', metric: '2.17%', source: 'Focus Economics', tier: 1 as TierLevel },
    { finding: ' Unicorn Count: 6 (target: 20 by 2031)', metric: '6', source: 'Government target', tier: 0 as TierLevel },
    { finding: 'Inflation 2025: 2.04%', metric: '2.04%', source: 'FocusEconomics', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 1200000,
    reach: 9800000,
    engagement: 680000,
    sentiment: { positive: 72, negative: 18, neutral: 10, overall: 54, volume: 1200000 },
    trend: { direction: 'rising' as const, changePercent: 5.6, period: '2025', value: 571 },
  },
  sentiment: { positive: 72, negative: 18, neutral: 10, overall: 54, volume: 1200000 },
  emotions: { joy: 65, trust: 70, fear: 15, surprise: 20, sadness: 10, disgust: 8, anger: 5, anticipation: 60 },
  credibility: { tier: 1 as TierLevel, score: 88, sources: 47, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 99, level: 'critical' as const, justification: 'Economic performance is the foundation of UAE national strategy and Vision 2031' },
  alertLevel: 'GREEN' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 5.6, period: '2025', value: 571 },
    { direction: 'stable' as const, changePercent: 2.5, period: '2024', value: 540 },
  ],
  stakeholders: ['Ministry of Finance', 'Central Bank', 'Abu Dhabi Investment Authority', 'Dubai Economy', 'Fitch/Moody\'s/S&P'],
  relatedEntities: ['IMF', 'World Bank', 'ADNOC', 'DIFC', 'ADGM', 'Dubai Chamber'],
  sources: [
    { name: 'IMF', url: 'https://www.imf.org', tier: 1 as TierLevel, date: '2025' },
    { name: 'UAE Ministry of Finance', url: 'https://mof.gov.ae', tier: 0 as TierLevel, date: '2025' },
    { name: 'Fitch Ratings', url: 'https://www.fitchratings.com', tier: 1 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-3: SECURITY & DEFENSE
// ============================================================================

export const securityDefenseData: TopicAnalysis = {
  id: 'topic-2-3',
  sector: 'safety',
  title: 'Security & Defense',
  titleAr: 'الأمن والدفاع',
  description: 'Armed forces structure, EDGE Group, nuclear program, missile defense, military operations, cyber attacks, regional conflicts',
  keyFindings: [
    { finding: 'Defense Budget 2026: $27B (5.5% GDP)', metric: '$27B', source: 'SIPRI/Government', tier: 1 as TierLevel },
    { finding: 'Armed Forces: 65,000 active, 130,000 reserves', metric: '65,000', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'EDGE Group: 12,000+ employees, 25 subsidiaries, ranked 22nd globally (SIPRI)', metric: '22nd', source: 'SIPRI', tier: 1 as TierLevel },
    { finding: 'Barakah Nuclear: 5,600 MW capacity (4 units fully operational)', metric: '5,600 MW', source: 'World Nuclear Association', tier: 1 as TierLevel },
    { finding: 'Cyber Attacks: 500,000-700,000 daily', metric: '600,000', source: 'NCEMA', tier: 1 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'THAAD/Patriot: Intercepting 90%+ of Iranian attacks (2026)', metric: '90%', source: 'Government statements', tier: 1 as TierLevel },
    { finding: 'UAE Navy Fleet 2026: 79 ships (11 corvettes, 42 patrol boats)', metric: '79', source: 'UAE Navy', tier: 0 as TierLevel },
    { finding: 'Yemen casualties: 52+ UAE soldiers killed', metric: '52+', source: 'Media reports', tier: 2 as TierLevel },
    { finding: 'F-35 Deal: Suspended since December 2021 ($23B for 50 aircraft)', metric: 'Suspended', source: 'AGSI', tier: 2 as TierLevel, alert: 'YELLOW' as AlertLevel },
  ],
  metrics: {
    volume: 620000,
    reach: 8900000,
    engagement: 340000,
    sentiment: { positive: 48, negative: 32, neutral: 20, overall: 16, volume: 620000 },
    trend: { direction: 'rising' as const, changePercent: 15, period: '2025-2026', value: 27 },
  },
  sentiment: { positive: 48, negative: 32, neutral: 20, overall: 16, volume: 620000 },
  emotions: { joy: 35, trust: 45, fear: 55, surprise: 40, sadness: 25, disgust: 20, anger: 30, anticipation: 35 },
  credibility: { tier: 1 as TierLevel, score: 78, sources: 47, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 99, level: 'critical' as const, justification: 'Security and defense are existential for UAE national survival' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 15, period: '2025-2026', value: 27 },
    { direction: 'rising' as const, changePercent: 10, period: '2024-2025', value: 24.4 },
  ],
  stakeholders: ['President MBZ (C-in-C)', 'Ministry of Defence', 'Armed Forces', 'EDGE Group', 'NCEMA'],
  relatedEntities: ['US (Al Dhafra base)', 'France (Rafale deal)', 'SIPRI', 'NSO Group', 'DarkMatter'],
  sources: [
    { name: 'SIPRI', url: 'https://www.sipri.org', tier: 1 as TierLevel, date: '2024' },
    { name: 'World Nuclear Association', url: 'https://www.world-nuclear.org', tier: 1 as TierLevel, date: '2025' },
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-4: CULTURE & SOCIETY
// ============================================================================

export const cultureSocietyData: TopicAnalysis = {
  id: 'topic-2-4',
  sector: 'community',
  title: 'Culture & Society',
  titleAr: 'الثقافة والمجتمع',
  description: 'Emirati identity, traditions, heritage preservation, museums, women\'s rights, LGBTQ rights, labor rights, Bidoon issues, UNESCO heritage',
  keyFindings: [
    { finding: 'Population: 11.3M, 88.5% expat, 11.5% Emirati', metric: '11.3M', source: 'Government statistics', tier: 1 as TierLevel },
    { finding: 'Youth Unemployment: 6.43% (below global 15.7% average)', metric: '6.43%', source: 'World Bank', tier: 1 as TierLevel },
    { finding: 'Women in Parliament: 50% (parity)', metric: '50%', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'Women in Public Sector: 66%', metric: '66%', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'UNDP Gender Inequality Index: 13th globally, 1st regionally', metric: '13th', source: 'UNDP', tier: 1 as TierLevel },
    { finding: 'UNESCO Heritage Elements: 21 (5 performing arts, 5 crafts, 4 culinary, 5 social practices)', metric: '21', source: 'UNESCO', tier: 1 as TierLevel },
    { finding: 'Louvre Abu Dhabi: Open since 2017', metric: 'Open', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Freedom House Religious Freedom Score: 2/4', metric: '2/4', source: 'Freedom House', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Emiratization Quota: 10% for large companies, AED 9,000/month penalty per gap', metric: '10%', source: 'MOHRE', tier: 0 as TierLevel },
  ],
  metrics: {
    volume: 480000,
    reach: 7200000,
    engagement: 290000,
    sentiment: { positive: 58, negative: 27, neutral: 15, overall: 31, volume: 480000 },
    trend: { direction: 'stable' as const, changePercent: 2, period: '2025', value: 58 },
  },
  sentiment: { positive: 58, negative: 27, neutral: 15, overall: 31, volume: 480000 },
  emotions: { joy: 50, trust: 55, fear: 20, surprise: 15, sadness: 25, disgust: 22, anger: 12, anticipation: 40 },
  credibility: { tier: 1 as TierLevel, score: 75, sources: 35, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 95, level: 'critical' as const, justification: 'Social cohesion and cultural identity are fundamental to national stability' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 2, period: '2025', value: 58 },
    { direction: 'rising' as const, changePercent: 5, period: '2024', value: 57 },
  ],
  stakeholders: ['Ministry of Culture', 'Department of Culture and Tourism', 'Women\'s Affairs', 'National Heritage Council'],
  relatedEntities: ['UNESCO', 'Louvre Abu Dhabi', 'Guggenheim Abu Dhabi', 'Museum of the Future'],
  sources: [
    { name: 'UNESCO', url: 'https://www.unesco.org', tier: 1 as TierLevel, date: '2025' },
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Freedom House', url: 'https://freedomhouse.org', tier: 2 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-5: ENVIRONMENT & INFRASTRUCTURE
// ============================================================================

export const environmentInfrastructureData: TopicAnalysis = {
  id: 'topic-2-5',
  sector: 'health',
  title: 'Environment & Infrastructure',
  titleAr: 'البيئة والبنية التحتية',
  description: 'Climate policy, net zero 2050, COP28, renewables, nuclear, desalination, floods, air quality, biodiversity, transportation',
  keyFindings: [
    { finding: 'Net Zero Target: 2050 (Charter signed 2023, Law enacted 2024)', metric: '2050', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'Climate Action Tracker Rating: Critically Insufficient (<3°C pathway)', metric: 'Critically Insufficient', source: 'Climate Action Tracker', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Clean Energy Share 2024: 35% (exceeds 30% 2030 target early)', metric: '35%', source: 'Government stats', tier: 0 as TierLevel },
    { finding: 'Solar Capacity: 7.7+ GW operational (MBR Solar Park: 3,460 MW)', metric: '7.7 GW', source: 'Ministry of Energy', tier: 0 as TierLevel },
    { finding: 'Barakah Nuclear: 5,380 MWe, 25% of electricity generation (2024)', metric: '25%', source: 'World Nuclear Association', tier: 1 as TierLevel },
    { finding: 'April 2024 Floods: 254.8mm/24hr rainfall, $3B+ insurance losses', metric: '$3B+', source: 'Guy Carpenter', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Mangrove Increase: +150% (37 years), target 100M by 2030', metric: '+150%', source: 'Abu Dhabi Mangroves Initiative', tier: 0 as TierLevel },
    { finding: 'Per Capita CO2: ~20.1 tonnes (among world\'s highest)', metric: '20.1t', source: 'Shift Eco/World Economics', tier: 2 as TierLevel },
    { finding: 'Desalination Dependency: 42% (critical vulnerability)', metric: '42%', source: 'World Resources Institute', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Protected Areas: +177% expansion (2013-2024), 50 reserves', metric: '+177%', source: 'Environment Agency Abu Dhabi', tier: 0 as TierLevel },
  ],
  metrics: {
    volume: 380000,
    reach: 6800000,
    engagement: 220000,
    sentiment: { positive: 45, negative: 35, neutral: 20, overall: 10, volume: 380000 },
    trend: { direction: 'rising' as const, changePercent: 8, period: '2025', value: 45 },
  },
  sentiment: { positive: 45, negative: 35, neutral: 20, overall: 10, volume: 380000 },
  emotions: { joy: 30, trust: 35, fear: 50, surprise: 35, sadness: 40, disgust: 25, anger: 30, anticipation: 25 },
  credibility: { tier: 1 as TierLevel, score: 80, sources: 45, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 94, level: 'critical' as const, justification: 'Environmental sustainability is core to Vision 2051 and economic diversification' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 8, period: '2025', value: 45 },
    { direction: 'declining' as const, changePercent: -5, period: '2024', value: 42 },
  ],
  stakeholders: ['Ministry of Climate Change', 'Environment Agency Abu Dhabi', 'Masdar', 'ADNOC', 'Etihad Rail'],
  relatedEntities: ['COP28 Presidency', 'Masdar City', 'World Resources Institute', 'Climate Action Tracker'],
  sources: [
    { name: 'Climate Action Tracker', url: 'https://climateactiontracker.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'World Resources Institute', url: 'https://www.wri.org', tier: 1 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-6: INTERNATIONAL RELATIONS
// ============================================================================

export const internationalRelationsData: TopicAnalysis = {
  id: 'topic-2-6',
  sector: 'policy',
  title: 'International Relations',
  titleAr: 'العلاقات الدولية',
  description: 'Diplomatic ties, Abraham Accords, BRICS membership, GCC relations, Saudi tensions, Iran conflict, US/China balances, island disputes',
  keyFindings: [
    { finding: 'BRICS Membership: Joined January 2024', metric: '2024', source: 'BRICS Official', tier: 0 as TierLevel },
    { finding: 'Abraham Accords Trade 2024: $3.24B with Israel', metric: '$3.24B', source: 'Times of Israel', tier: 1 as TierLevel },
    { finding: 'G42/Microsoft Deal: $1.5B (April 2024)', metric: '$1.5B', source: 'CSIS', tier: 1 as TierLevel },
    { finding: 'Iran-UAE Relations: Severed March 2026 amid conflict', metric: 'Severed', source: 'Arab Center DC', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Iranian Missiles/Drones: 2,800+ fired at UAE (March 2026)', metric: '2,800+', source: 'NCEMA', tier: 1 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'STC Dissolution: January 9, 2026', metric: 'Jan 2026', source: 'Azure Strategy', tier: 2 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Island Dispute: Abu Musa, Greater/Lesser Tunb occupied since 1971', metric: '1971', source: 'UAE Embassy', tier: 0 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'UN Security Council: 2022-2023 term served', metric: '2022-2023', source: 'UAE UN Mission', tier: 0 as TierLevel },
    { finding: 'AI Chip Export Approval: 35,000 GB300 chips (May 2025)', metric: '35,000', source: 'Yahoo Finance', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 560000,
    reach: 8400000,
    engagement: 380000,
    sentiment: { positive: 42, negative: 38, neutral: 20, overall: 4, volume: 560000 },
    trend: { direction: 'declining' as const, changePercent: -12, period: '2026', value: 42 },
  },
  sentiment: { positive: 42, negative: 38, neutral: 20, overall: 4, volume: 560000 },
  emotions: { joy: 30, trust: 35, fear: 60, surprise: 45, sadness: 25, disgust: 20, anger: 35, anticipation: 30 },
  credibility: { tier: 1 as TierLevel, score: 76, sources: 47, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 97, level: 'critical' as const, justification: 'Regional positioning and alliances are critical to UAE security and economic prosperity' },
  alertLevel: 'RED' as AlertLevel,
  trends: [
    { direction: 'declining' as const, changePercent: -12, period: '2026', value: 42 },
    { direction: 'stable' as const, changePercent: 2, period: '2024-2025', value: 48 },
  ],
  stakeholders: ['Ministry of Foreign Affairs', 'National Security Advisor', 'President MBZ', 'G42'],
  relatedEntities: ['US', 'France', 'China', 'Saudi Arabia', 'Iran', 'Israel', 'BRICS'],
  sources: [
    { name: 'UAE MFA', url: 'https://www.mofa.gov.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'CSIS', url: 'https://www.csis.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'Arab Center DC', url: 'https://arabcenterdc.org', tier: 2 as TierLevel, date: '2026' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-7: MEDIA & COMMUNICATIONS
// ============================================================================

export const mediaCommunicationsData: TopicAnalysis = {
  id: 'topic-2-7',
  sector: 'policy',
  title: 'Media & Communications',
  titleAr: 'الإعلام والاتصالات',
  description: 'Press freedom, internet freedom, content regulation, influencer licensing, VPN usage, advertising market, media council',
  keyFindings: [
    { finding: 'RSF Press Freedom Score: 26.91/100 (2025)', metric: '26.91', source: 'RSF/Geofactbook', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'RSF Ranking: 164th of 180 countries (17th worst)', metric: '164th', source: 'RSF', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Internet Freedom Score: 28/100 (Freedom House - Not Free)', metric: '28/100', source: 'Freedom House', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Websites Blocked: 160,000+', metric: '160,000+', source: 'Dubai Eye 103.8', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'VPN Downloads: 9.6 million (2025)', metric: '9.6M', source: 'Khaleej Times', tier: 1 as TierLevel },
    { finding: 'Advertising Market Size: USD 3.6B (2025), 5.36% CAGR', metric: '$3.6B', source: 'IMARC Group', tier: 1 as TierLevel },
    { finding: 'Digital Ad Spend Share: 68%', metric: '68%', source: 'Statista', tier: 1 as TierLevel },
    { finding: 'Influencer Fine (no license): AED 10,000-40,000', metric: 'AED 10-40K', source: 'Gulf News', tier: 1 as TierLevel },
    { finding: 'Content Violation Fine: Up to AED 1,000,000', metric: 'AED 1M', source: 'Clyde & Co', tier: 1 as TierLevel },
    { finding: 'NMA Consolidated: December 2025', metric: 'Dec 2025', source: 'Pinsent Masons', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 720000,
    reach: 9100000,
    engagement: 410000,
    sentiment: { positive: 30, negative: 55, neutral: 15, overall: -25, volume: 720000 },
    trend: { direction: 'declining' as const, changePercent: -12.1, period: '2024-2025', value: 26.91 },
  },
  sentiment: { positive: 30, negative: 55, neutral: 15, overall: -25, volume: 720000 },
  emotions: { joy: 20, trust: 25, fear: 60, surprise: 20, sadness: 35, disgust: 45, anger: 40, anticipation: 15 },
  credibility: { tier: 2 as TierLevel, score: 72, sources: 45, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 88, level: 'high' as const, justification: 'Media control is central to governance and information management' },
  alertLevel: 'RED' as AlertLevel,
  trends: [
    { direction: 'declining' as const, changePercent: -12.1, period: '2024-2025', value: 26.91 },
    { direction: 'stable' as const, changePercent: 0, period: '2023-2024', value: 28 },
  ],
  stakeholders: ['National Media Authority', 'TDRA', 'Ministry of Culture', 'RSF'],
  relatedEntities: ['RSF', 'Freedom House', 'NMA', 'TDRA'],
  sources: [
    { name: 'RSF', url: 'https://rsf.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'Freedom House', url: 'https://freedomhouse.org', tier: 2 as TierLevel, date: '2022' },
    { name: 'NMA', url: 'https://nma.gov.ae', tier: 0 as TierLevel, date: '2026' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-8: TECHNOLOGY & INNOVATION
// ============================================================================

export const technologyInnovationData: TopicAnalysis = {
  id: 'topic-2-8',
  sector: 'business',
  title: 'Technology & Innovation',
  titleAr: 'التكنولوجيا والابتكار',
  description: 'AI strategy, G42, Hope Probe, space program, crypto regulation, data centers, startups, unicorns, surveillance infrastructure',
  keyFindings: [
    { finding: 'AI Contribution Target by 2031: $91B (AED 335B)', metric: '$91B', source: 'UAE National AI Strategy 2031', tier: 0 as TierLevel },
    { finding: 'Non-oil GDP from AI Target: 20% by 2031', metric: '20%', source: 'National target', tier: 0 as TierLevel },
    { finding: 'Microsoft-G42 Investment: $1.5B (April 2024)', metric: '$1.5B', source: 'CSIS', tier: 1 as TierLevel },
    { finding: 'Stargate Project: $500B (OpenAI, MGX)', metric: '$500B', source: 'Government announcements', tier: 1 as TierLevel },
    { finding: 'Global AI Infrastructure Fund: $30B (MGX, BlackRock, GIP, Microsoft)', metric: '$30B', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Hope Probe: Reached Mars February 2021 (first Arab nation)', metric: 'Feb 2021', source: 'MBRSC', tier: 0 as TierLevel },
    { finding: 'Sultan Al Neyadi: First Arab to perform spacewalk (April 2023)', metric: 'Apr 2023', source: 'MBRSC', tier: 0 as TierLevel },
    { finding: 'Data Center Market: $2.38B (2025), $6.70B projected (2031)', metric: '$2.38B', source: 'Arizton', tier: 1 as TierLevel },
    { finding: 'Unicorn Count: 6 (Aleph Group, Kitopi, XPANCEO, G42, Dubizzle Group, TOP)', metric: '6', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Global Cybersecurity Index: 5th globally (2024)', metric: '5th', source: 'Government', tier: 0 as TierLevel },
    { finding: 'VARA: World\'s first independent virtual asset regulator', metric: 'Active', source: 'VARA', tier: 0 as TierLevel },
  ],
  metrics: {
    volume: 890000,
    reach: 9500000,
    engagement: 520000,
    sentiment: { positive: 78, negative: 15, neutral: 7, overall: 63, volume: 890000 },
    trend: { direction: 'rising' as const, changePercent: 25, period: '2025', value: 78 },
  },
  sentiment: { positive: 78, negative: 15, neutral: 7, overall: 63, volume: 890000 },
  emotions: { joy: 70, trust: 65, fear: 20, surprise: 45, sadness: 8, disgust: 10, anger: 5, anticipation: 75 },
  credibility: { tier: 1 as TierLevel, score: 85, sources: 46, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 96, level: 'critical' as const, justification: 'Technology innovation is core to Vision 2031 and economic diversification away from oil' },
  alertLevel: 'GREEN' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 25, period: '2025', value: 78 },
    { direction: 'rising' as const, changePercent: 20, period: '2024', value: 62 },
  ],
  stakeholders: ['G42', 'MBRSC', 'VARA', 'Masdar', 'Ministry of AI'],
  relatedEntities: ['Microsoft', 'NVIDIA', 'OpenAI', 'MBZUAI', 'WEF'],
  sources: [
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'CSIS', url: 'https://www.csis.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'MBRSC', url: 'https://www.mbrsc.ae', tier: 0 as TierLevel, date: '2026' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-9: SPORTS INTELLIGENCE (imported from sports-data.ts)
// ============================================================================

// ============================================================================
// FILE 2-10: HEALTHCARE
// ============================================================================

export const healthcareData: TopicAnalysis = {
  id: 'topic-2-10',
  sector: 'health',
  title: 'Healthcare',
  titleAr: 'الرعاية الصحية',
  description: 'Healthcare system, medical tourism, COVID-19 response, organ transplantation, mental health, health insurance, hospitals',
  keyFindings: [
    { finding: 'Population: 10.08 million', metric: '10.08M', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Life Expectancy: 79 years', metric: '79 years', source: 'WHO', tier: 1 as TierLevel },
    { finding: 'Doctors per 100K: 181', metric: '181', source: 'Government', tier: 0 as TierLevel },
    { finding: 'JCI-Accredited Facilities: 214+', metric: '214+', source: 'JCI', tier: 1 as TierLevel },
    { finding: 'Hospital Market Size: $10.9B (6.4% CAGR)', metric: '$10.9B', source: 'Grand View Research', tier: 1 as TierLevel },
    { finding: 'Medical Tourism Market: $865.8M (2025), $4.5B projected (2034, 19.63% CAGR)', metric: '$865.8M', source: 'Credence Research', tier: 1 as TierLevel },
    { finding: 'COVID-19 Cases: 1,067,030, Deaths: 2,349 (0.22% fatality rate)', metric: '1.07M', source: 'Johns Hopkins', tier: 1 as TierLevel },
    { finding: 'Vaccination Coverage: 77.70% (1+ dose), 68.40% (fully)', metric: '77.7%', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Organ Donation Rate: 9.16 PMP (2023), 2,034+ transplants since launch', metric: '9.16 PMP', source: 'DoH', tier: 0 as TierLevel },
    { finding: 'Mental Health Disorder Prevalence: 14%', metric: '14%', source: 'Government', tier: 0 as TierLevel },
  ],
  metrics: {
    volume: 420000,
    reach: 8900000,
    engagement: 280000,
    sentiment: { positive: 72, negative: 18, neutral: 10, overall: 54, volume: 420000 },
    trend: { direction: 'stable' as const, changePercent: 3, period: '2025', value: 72 },
  },
  sentiment: { positive: 72, negative: 18, neutral: 10, overall: 54, volume: 420000 },
  emotions: { joy: 55, trust: 70, fear: 25, surprise: 15, sadness: 20, disgust: 12, anger: 10, anticipation: 45 },
  credibility: { tier: 1 as TierLevel, score: 85, sources: 40, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 93, level: 'critical' as const, justification: 'Healthcare is essential public service and medical tourism supports economic diversification' },
  alertLevel: 'GREEN' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 3, period: '2025', value: 72 },
    { direction: 'rising' as const, changePercent: 8, period: '2024', value: 70 },
  ],
  stakeholders: ['MOHAP', 'DHA', 'DoH Abu Dhabi', 'Emirates Health Services'],
  relatedEntities: ['WHO', 'JCI', 'Mayo Clinic', 'Cleveland Clinic Abu Dhabi'],
  sources: [
    { name: 'MOHAP', url: 'https://mohap.gov.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'WHO', url: 'https://www.who.int', tier: 1 as TierLevel, date: '2025' },
    { name: 'DoH Abu Dhabi', url: 'https://www.doh.gov.ae', tier: 0 as TierLevel, date: '2026' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-11: EDUCATION & YOUTH
// ============================================================================

export const educationYouthData: TopicAnalysis = {
  id: 'topic-2-11',
  sector: 'community',
  title: 'Education & Youth',
  titleAr: 'التعليم والشباب',
  description: 'Education system, universities, youth unemployment, school fees, STEM education, teacher shortages, literacy rates',
  keyFindings: [
    { finding: 'Education Budget 2025: AED 16.9 billion', metric: 'AED 16.9B', source: 'Ministry of Finance', tier: 0 as TierLevel },
    { finding: 'Youth Unemployment: 6.45% (2025)', metric: '6.45%', source: 'World Bank', tier: 1 as TierLevel },
    { finding: 'Female Youth Unemployment: 19.9%', metric: '19.9%', source: 'World Bank', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Youth Literacy: 99.6%', metric: '99.6%', source: 'UNESCO', tier: 1 as TierLevel },
    { finding: 'Khalifa University QS Ranking: 177 globally', metric: '177th', source: 'QS Rankings', tier: 1 as TierLevel },
    { finding: 'K-12 International School Market: $11.45B (2026), $19.02B projected (2031)', metric: '$11.45B', source: 'ISC Research', tier: 1 as TierLevel },
    { finding: 'TIMSS 2023: Dubai private schools ranked 2nd globally for math, 1st for science', metric: '1st-2nd', source: 'IEA TIMSS', tier: 1 as TierLevel },
    { finding: 'Teachers Needed by 2030: 30,000+', metric: '30,000+', source: 'Khaleej Times', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'NYUAD Rhodes Scholars: 22', metric: '22', source: 'NYUAD', tier: 0 as TierLevel },
    { finding: 'Bullying Victimization: 37% overall (40% private schools, 35% public)', metric: '37%', source: 'Government study', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 380000,
    reach: 7500000,
    engagement: 240000,
    sentiment: { positive: 58, negative: 22, neutral: 20, overall: 36, volume: 380000 },
    trend: { direction: 'stable' as const, changePercent: 2, period: '2025', value: 58 },
  },
  sentiment: { positive: 58, negative: 22, neutral: 20, overall: 36, volume: 380000 },
  emotions: { joy: 50, trust: 55, fear: 25, surprise: 15, sadness: 28, disgust: 15, anger: 18, anticipation: 42 },
  credibility: { tier: 1 as TierLevel, score: 82, sources: 40, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 91, level: 'high' as const, justification: 'Education system development is critical for knowledge-based economy transition' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 2, period: '2025', value: 58 },
    { direction: 'rising' as const, changePercent: 5, period: '2024', value: 57 },
  ],
  stakeholders: ['Ministry of Education', 'KHDA', 'ADEK', 'UAE University'],
  relatedEntities: ['NYU Abu Dhabi', 'Sorbonne Abu Dhabi', 'Khalifa University', 'MIT'],
  sources: [
    { name: 'Ministry of Education', url: 'https://www.moe.gov.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'QS Rankings', url: 'https://www.topuniversities.com', tier: 1 as TierLevel, date: '2026' },
    { name: 'World Bank', url: 'https://www.worldbank.org', tier: 1 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-12: ENERGY & SUSTAINABILITY
// ============================================================================

export const energySustainabilityData: TopicAnalysis = {
  id: 'topic-2-12',
  sector: 'business',
  title: 'Energy & Sustainability',
  titleAr: 'الطاقة والاستدامة',
  description: 'Oil/gas production, OPEC+ quotas, ADNOC, renewables, nuclear, hydrogen strategy, climate policy, COP28',
  keyFindings: [
    { finding: 'Oil Reserves: 105-111 billion barrels (7th globally)', metric: '105-111B', source: 'OPEC/EIA', tier: 1 as TierLevel },
    { finding: 'ADNOC Production Target: 5 million bpd by 2027', metric: '5M bpd', source: 'ADNOC', tier: 0 as TierLevel },
    { finding: 'ADNOC Valuation: $100B+ (Abu Dhabi Crown Prince statement)', metric: '$100B+', source: 'Bloomberg', tier: 1 as TierLevel },
    { finding: 'Non-Oil GDP: 75.5% (2024)', metric: '75.5%', source: 'Ministry of Finance', tier: 0 as TierLevel },
    { finding: 'Renewable Capacity: 7.9 GW (2025), 23 GW target (2031)', metric: '7.9 GW', source: 'Ministry of Energy', tier: 0 as TierLevel },
    { finding: 'Nuclear Capacity: 5,600 MW (Barakah 4 units fully operational)', metric: '5,600 MW', source: 'World Nuclear Association', tier: 1 as TierLevel },
    { finding: 'Nuclear Electricity Share: 25% of total generation', metric: '25%', source: 'ENEC', tier: 0 as TierLevel },
    { finding: 'Hydrogen Target: 1.4 MTPA by 2031, 15 MTPA by 2050', metric: '1.4 MTPA', source: 'UAE Hydrogen Strategy', tier: 0 as TierLevel },
    { finding: 'Climate Action Tracker Rating: Insufficient (<3°C pathway)', metric: 'Insufficient', source: 'Climate Action Tracker', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'COP28 Outcome: Historic fossil fuel "transition away" language', metric: 'Historic', source: 'COP28', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 520000,
    reach: 8200000,
    engagement: 340000,
    sentiment: { positive: 55, negative: 30, neutral: 15, overall: 25, volume: 520000 },
    trend: { direction: 'stable' as const, changePercent: 3, period: '2025', value: 55 },
  },
  sentiment: { positive: 55, negative: 30, neutral: 15, overall: 25, volume: 520000 },
  emotions: { joy: 45, trust: 50, fear: 40, surprise: 30, sadness: 20, disgust: 25, anger: 22, anticipation: 40 },
  credibility: { tier: 1 as TierLevel, score: 82, sources: 40, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 98, level: 'critical' as const, justification: 'Energy sector is the foundation of UAE economy and Vision 2031 diversification' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 3, period: '2025', value: 55 },
    { direction: 'rising' as const, changePercent: 8, period: '2024', value: 53 },
  ],
  stakeholders: ['ADNOC', 'Ministry of Energy', 'Masdar', 'ENEC', 'OPEC+'],
  relatedEntities: ['OPEC', 'IEA', 'Climate Action Tracker', 'COP28 Presidency'],
  sources: [
    { name: 'ADNOC', url: 'https://www.adnoc.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Ministry of Energy', url: 'https://www.moei.gov.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Climate Action Tracker', url: 'https://climateactiontracker.org', tier: 2 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-13: TOURISM & HOSPITALITY
// ============================================================================

export const tourismHospitalityData: TopicAnalysis = {
  id: 'topic-2-13',
  sector: 'business',
  title: 'Tourism & Hospitality',
  titleAr: 'السياحة والضيافة',
  description: 'Dubai/Abu Dhabi visitors, hotel occupancy, GITEX, sports tourism, medical tourism, heritage sites, overtourism concerns',
  keyFindings: [
    { finding: 'Dubai Visitors 2025: 19.59 million (+5% YoY)', metric: '19.59M', source: 'Gulf Business', tier: 1 as TierLevel },
    { finding: 'Abu Dhabi Visitors 2025: 26.6 million (+10% YoY)', metric: '26.6M', source: 'Gulf News', tier: 1 as TierLevel },
    { finding: 'Hotel Occupancy Dubai: 80.7% (+2.5 pp YoY)', metric: '80.7%', source: 'Emirates NBD', tier: 1 as TierLevel },
    { finding: 'RevPAR Dubai: AED 467 (+11% YoY)', metric: 'AED 467', source: 'Emirates NBD', tier: 1 as TierLevel },
    { finding: 'Tourism GDP Contribution: 13-14%', metric: '13-14%', source: 'WTTC', tier: 1 as TierLevel },
    { finding: 'Tourism Employment: 925,000 (+26,400 jobs)', metric: '925K', source: 'WTTC', tier: 1 as TierLevel },
    { finding: 'Global Tourism Ranking: 6th globally', metric: '6th', source: 'WTTC', tier: 1 as TierLevel },
    { finding: 'Medical Tourism: $335M market, 691,000+ international patients (Dubai 2023)', metric: '$335M', source: 'Credence Research', tier: 1 as TierLevel },
    { finding: 'GITEX 2025: 180,000+ attendees, 6,500+ exhibitors', metric: '180K+', source: 'GITEX', tier: 0 as TierLevel },
    { finding: 'Overtourism Concern: Dubai ranked "most overrated" by London Economic survey', metric: 'Concern', source: 'The London Economic', tier: 3 as TierLevel, alert: 'YELLOW' as AlertLevel },
  ],
  metrics: {
    volume: 680000,
    reach: 9200000,
    engagement: 480000,
    sentiment: { positive: 72, negative: 18, neutral: 10, overall: 54, volume: 680000 },
    trend: { direction: 'rising' as const, changePercent: 8, period: '2025', value: 72 },
  },
  sentiment: { positive: 72, negative: 18, neutral: 10, overall: 54, volume: 680000 },
  emotions: { joy: 68, trust: 60, fear: 15, surprise: 25, sadness: 12, disgust: 10, anger: 8, anticipation: 65 },
  credibility: { tier: 1 as TierLevel, score: 84, sources: 28, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 92, level: 'critical' as const, justification: 'Tourism is a key diversification pillar under Vision 2031' },
  alertLevel: 'GREEN' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 8, period: '2025', value: 72 },
    { direction: 'rising' as const, changePercent: 12, period: '2024', value: 67 },
  ],
  stakeholders: ['Dubai Tourism', 'Abu Dhabi Tourism', 'DTCM', 'Emirates Airline'],
  relatedEntities: ['GITEX', 'WTTC', 'Marriott', 'Emirates'],
  sources: [
    { name: 'Dubai Tourism', url: 'https://www.dubaitourism.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'WTTC', url: 'https://www.wttc.org', tier: 1 as TierLevel, date: '2025' },
    { name: 'Emirates NBD Research', url: 'https://www.emiratesnbdresearch.com', tier: 1 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-14: REAL ESTATE
// ============================================================================

export const realEstateData: TopicAnalysis = {
  id: 'topic-2-14',
  sector: 'business',
  title: 'Real Estate',
  titleAr: 'العقارات',
  description: 'Dubai property prices, Abu Dhabi housing, off-plan sales, rent regulations, gentrification, smart city surveillance, labor camps',
  keyFindings: [
    { finding: 'Dubai Transaction Volume 2024: AED 761 billion', metric: 'AED 761B', source: 'DLD', tier: 0 as TierLevel },
    { finding: 'Dubai Transactions 2024: 226,000', metric: '226K', source: 'DLD', tier: 0 as TierLevel },
    { finding: 'Off-Plan Share: 68%', metric: '68%', source: 'Property Monitor', tier: 1 as TierLevel },
    { finding: 'Avg Price/sq ft Dubai Centre: AED 2,062', metric: 'AED 2,062', source: 'Betterhomes', tier: 1 as TierLevel },
    { finding: 'Gross Rental Yield: 7% (apartments), 5% (villas)', metric: '7%', source: 'Bayut', tier: 1 as TierLevel },
    { finding: 'UBS Global Real Estate Bubble Index: 0.64 (fair value)', metric: '0.64', source: 'UBS', tier: 1 as TierLevel },
    { finding: 'Max Affordable Sale Price: AED 790,000', metric: 'AED 790K', source: 'UAE Banks', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Modern Slavery Count: 132,000 (13.4/1,000 prevalence)', metric: '132K', source: 'Walk Free', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Non-Citizen Population: 87.9%', metric: '87.9%', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Fitch Warning: Dubai property market vulnerable to external shocks (April 2026)', metric: 'Warning', source: 'Fitch', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
  ],
  metrics: {
    volume: 580000,
    reach: 8500000,
    engagement: 420000,
    sentiment: { positive: 55, negative: 25, neutral: 20, overall: 30, volume: 580000 },
    trend: { direction: 'rising' as const, changePercent: 15, period: '2025', value: 55 },
  },
  sentiment: { positive: 55, negative: 25, neutral: 20, overall: 30, volume: 580000 },
  emotions: { joy: 45, trust: 40, fear: 35, surprise: 30, sadness: 20, disgust: 25, anger: 18, anticipation: 50 },
  credibility: { tier: 1 as TierLevel, score: 80, sources: 35, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 90, level: 'high' as const, justification: 'Real estate is major GDP contributor and reflects economic health' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 15, period: '2025', value: 55 },
    { direction: 'rising' as const, changePercent: 22, period: '2024', value: 48 },
  ],
  stakeholders: ['Dubai Land Department', 'RERA', 'DLD', 'Abu Dhabi Housing Authority'],
  relatedEntities: ['Emaar', 'Nakheel', 'Damac', 'Aldar'],
  sources: [
    { name: 'DLD', url: 'https://www.dld.gov.ae', tier: 0 as TierLevel, date: '2025' },
    { name: 'RERA', url: 'https://www.rera.gov.ae', tier: 0 as TierLevel, date: '2025' },
    { name: 'UBS', url: 'https://www.ubs.com', tier: 1 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-15: FOOD SECURITY
// ============================================================================

// Import from comprehensive data file
import { foodSecurityData as comprehensiveFoodData } from './topics/food-security-data'

// TopicAnalysis-compatible wrapper
export const foodSecurityData: TopicAnalysis = {
  id: comprehensiveFoodData.id,
  sector: comprehensiveFoodData.sector,
  title: comprehensiveFoodData.title,
  titleAr: comprehensiveFoodData.titleAr,
  description: comprehensiveFoodData.description,
  keyFindings: [
    { finding: 'GFSI Global Ranking: 23rd (1st in MENA)', metric: '23rd', source: 'Economist Impact', tier: 1 as TierLevel },
    { finding: 'Food Import Dependency: 85-90%', metric: '85-90%', source: 'Atlantic Council', tier: 1 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Self-Sufficiency Target: +5% annually, 50% by 2051', metric: '50% by 2051', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'Strategic Reserve: 6 months coverage', metric: '6 months', source: 'Ministry of Economy', tier: 0 as TierLevel },
    { finding: 'Bustanica Emirates Crop One: World\'s largest hydroponic farm', metric: '1.1M kg/yr', source: 'Emirates Crop One', tier: 0 as TierLevel },
    { finding: 'Date Production: 4th globally, 40M+ date palms, 97+ export countries', metric: '4th globally', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Date Market Value: $1.23B (2030 projected)', metric: '$1.23B', source: 'LinkedIn', tier: 1 as TierLevel },
    { finding: 'Pure Harvest Funding: $387M (Series D)', metric: '$387M', source: 'Shorooq Partners', tier: 1 as TierLevel },
    { finding: 'Aquaculture Investment: $350M+ (ADQ)', metric: '$350M+', source: 'ADQ', tier: 0 as TierLevel },
    { finding: 'Food Waste: 3.27M tonnes wasted annually, $3.5B cost', metric: '3.27M tonnes', source: 'Farrelly Mitchell', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Vertical Farming Market (MENA 2025): $400M+', metric: '$400M+', source: 'Mordor Intelligence', tier: 1 as TierLevel },
    { finding: 'Organic Food Market: $44.67M-$132.8M (2024)', metric: '$132.8M', source: 'Multiple sources', tier: 1 as TierLevel },
    { finding: 'Agricultural Technology Startups: 153 total, 26 funded', metric: '153 startups', source: 'Tracxn', tier: 1 as TierLevel },
    { finding: 'Food Fraud Penalties: Up to 2 years imprisonment + AED 250,000', metric: '2 years', source: 'Federal Law 2023', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'ne\'ma Initiative: 50% waste reduction by 2030', metric: '50% by 2030', source: 'MOCCAE', tier: 0 as TierLevel },
  ],
  metrics: {
    volume: 280000,
    reach: 6200000,
    engagement: 180000,
    sentiment: { positive: 55, negative: 25, neutral: 20, overall: 30, volume: 280000 },
    trend: { direction: 'stable' as const, changePercent: 2, period: '2025', value: 55 },
  },
  sentiment: { positive: 55, negative: 25, neutral: 20, overall: 30, volume: 280000 },
  emotions: { joy: 45, trust: 55, fear: 35, surprise: 20, sadness: 25, disgust: 18, anger: 12, anticipation: 40 },
  credibility: { tier: 1 as TierLevel, score: 82, sources: 60, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 88, level: 'high' as const, justification: 'Food security is national priority under Vision 2051' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 2, period: '2025', value: 55 },
    { direction: 'rising' as const, changePercent: 5, period: '2024', value: 54 },
  ],
  stakeholders: ['Ministry of Economy', 'MOCCAE', 'Abu Dhabi Agriculture Bureau', 'ADQ', 'Emirates Crop One', 'Pure Harvest'],
  relatedEntities: ['Bustanica', 'Pure Harvest', 'ADQ', 'Al Foah', 'Al Dahra', 'Silal'],
  sources: [
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Atlantic Council', url: 'https://www.atlanticcouncil.org', tier: 2 as TierLevel, date: '2025' },
    { name: 'MOCCAE', url: 'https://www.moccae.gov.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Tracxn', url: 'https://tracxn.com', tier: 1 as TierLevel, date: '2026' },
    { name: 'Farrelly Mitchell', url: 'https://farrellymitchell.com', tier: 1 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-16: TRANSPORTATION & LOGISTICS
// ============================================================================

// TopicAnalysis-compatible wrapper
export const transportationData: TopicAnalysis = {
  id: comprehensiveTransportData.id,
  sector: comprehensiveTransportData.sector,
  title: comprehensiveTransportData.title,
  titleAr: comprehensiveTransportData.titleAr,
  description: comprehensiveTransportData.description,
  keyFindings: [
    { finding: 'UAE Logistics Market Size 2025: $57.6B, CAGR 5.58% through 2034', metric: '$57.6B', source: 'IMARC Group', tier: 1 as TierLevel },
    { finding: 'DP World Revenue: $24.4B (2024), global port operator', metric: '$24.4B', source: 'DP World', tier: 0 as TierLevel },
    { finding: 'Khalifa Port Ranking: 3rd globally for efficiency (S&P Global)', metric: '3rd', source: 'S&P Global', tier: 0 as TierLevel },
    { finding: 'Emirates SkyCargo: 87 destinations, 700+ flights weekly', metric: '87 destinations', source: 'Emirates SkyCargo', tier: 0 as TierLevel },
    { finding: 'Dubai Metro Ridership: 802.1M riders (2024), 2025 target 850M', metric: '802.1M', source: 'RTA', tier: 0 as TierLevel },
    { finding: 'Etihad Rail: 900km network operational, Stage 2 continuing', metric: '900km', source: 'Etihad Rail', tier: 0 as TierLevel },
    { finding: 'Traffic Congestion Cost: $4.3B annually (2025)', metric: '$4.3B', source: 'TomTom/Government', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Road Fatality Rate: 8.9 per 100,000 population (2023)', metric: '8.9/100K', source: 'WHO/Government', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Cold Chain Market: $6.1B (2024), 6.2% CAGR through 2030', metric: '$6.1B', source: 'Mordor Intelligence', tier: 1 as TierLevel },
    { finding: 'E-commerce Logistics Market: $17.9B (2024), 8.8% CAGR', metric: '$17.9B', source: 'Mordor Intelligence', tier: 1 as TierLevel },
    { finding: 'Oceanlink Sanctions Evasion: 55-vessel Russian shadow fleet link', metric: '55 vessels', source: 'Reuters/Bloomberg', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Customs Tariff: 12-digit HS code system, 5% general duty', metric: '5%', source: 'Federal Customs Authority', tier: 0 as TierLevel },
    { finding: 'RTA Weather Resources: 200+ weather stations, 1,200+ CCTV cameras', metric: '200+ stations', source: 'RTA', tier: 0 as TierLevel },
    { finding: 'Migrant Worker Exploitation: Recruitment fees up to $3,000 (2024)', metric: '$3,000', source: 'Fairphone/Human Rights Watch', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Dubai Metro Expansion: Route 2020 added 15km, 7 stations', metric: '15km/7 stations', source: 'RTA', tier: 0 as TierLevel },
    { finding: 'Shared Mobility: 200+ e-scooter stations, 15,000+ bikes Dubai', metric: '200+ stations', source: 'RTA/Careem', tier: 1 as TierLevel },
    { finding: 'EV Adoption Target: 42% of government fleet by 2030', metric: '42%', source: 'UAE Government', tier: 0 as TierLevel },
    { finding: 'Carbon Emissions from Transport: 22% of UAE total (2023)', metric: '22%', source: 'Ministry of Climate Change', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
  ],
  metrics: {
    volume: 450000,
    reach: 8200000,
    engagement: 210000,
    sentiment: { positive: 52, negative: 30, neutral: 18, overall: 22, volume: 450000 },
    trend: { direction: 'rising' as const, changePercent: 4, period: '2025', value: 52 },
  },
  sentiment: { positive: 52, negative: 30, neutral: 18, overall: 22, volume: 450000 },
  emotions: { joy: 42, trust: 50, fear: 38, surprise: 25, sadness: 28, disgust: 20, anger: 22, anticipation: 45 },
  credibility: { tier: 1 as TierLevel, score: 78, sources: 65, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 92, level: 'critical' as const, justification: 'Transportation & logistics is the backbone of UAE economy, supporting its global hub ambitions' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'rising' as const, changePercent: 4, period: '2025', value: 52 },
    { direction: 'rising' as const, changePercent: 3, period: '2024', value: 50 },
  ],
  stakeholders: ['RTA Dubai', 'Etihad Rail', 'DP World', 'Emirates SkyCargo', 'Federal Customs Authority', 'MoI UAE'],
  relatedEntities: ['Khalifa Port', 'Jebel Ali Port', 'Dubai Metro', 'Emirates Airlines', 'Aramex', 'Fetchr'],
  sources: [
    { name: 'IMARC Group', url: 'https://www.imarcgroup.com', tier: 1 as TierLevel, date: '2025' },
    { name: 'RTA Dubai', url: 'https://www.rta.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Etihad Rail', url: 'https://www.etihadrail.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'DP World', url: 'https://www.dpworld.com', tier: 0 as TierLevel, date: '2025' },
    { name: 'Mordor Intelligence', url: 'https://www.mordorintelligence.com', tier: 1 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-17: LEGAL & REGULATORY
// ============================================================================

export const legalRegulatoryData: TopicAnalysis = {
  id: 'topic-2-17',
  sector: 'policy',
  title: 'Legal & Regulatory',
  titleAr: 'الإطار القانوني والتنظيمي',
  description: 'Civil law reforms, DIFC/ADGM courts, bankruptcy law, AML framework, IP protection, extradition, data protection, labor law',
  keyFindings: [
    { finding: 'DIFC Companies: 3,000+ (2022)', metric: '3,000+', source: 'DIFC', tier: 0 as TierLevel },
    { finding: 'ADGM FinTech Sandbox: 2nd most active globally', metric: '2nd', source: 'ADGM', tier: 0 as TierLevel },
    { finding: 'Patent Applications Growth: 622 (2016) to 1,005 (2023)', metric: '1,005', source: 'USPTO/Government', tier: 1 as TierLevel },
    { finding: 'GCC Trademark Filings (UAE 2020-2024): 110,238', metric: '110,238', source: 'Government', tier: 0 as TierLevel },
    { finding: 'AML Administrative Fines: Up to AED 1 billion', metric: 'AED 1B', source: 'DLA Piper', tier: 1 as TierLevel },
    { finding: 'PDPL Maximum Fine: AED 5,000,000', metric: 'AED 5M', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Abu Dhabi Case Completion Rate: 98% (2025)', metric: '98%', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Fixed-Term Contract Limit: 3 years (Labor Law)', metric: '3 years', source: 'Tamimi Law', tier: 1 as TierLevel },
    { finding: 'Maternity Leave: 60 calendar days', metric: '60 days', source: 'MOHRE', tier: 0 as TierLevel },
    { finding: 'Blood Money (Qisas): AED 200,000 (male), AED 100,000 (female)', metric: 'AED 200K', source: 'Legal sources', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 320000,
    reach: 5800000,
    engagement: 160000,
    sentiment: { positive: 62, negative: 22, neutral: 16, overall: 40, volume: 320000 },
    trend: { direction: 'stable' as const, changePercent: 3, period: '2025', value: 62 },
  },
  sentiment: { positive: 62, negative: 22, neutral: 16, overall: 40, volume: 320000 },
  emotions: { joy: 50, trust: 65, fear: 18, surprise: 15, sadness: 15, disgust: 18, anger: 12, anticipation: 45 },
  credibility: { tier: 1 as TierLevel, score: 85, sources: 51, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 90, level: 'high' as const, justification: 'Legal framework determines business environment and investor confidence' },
  alertLevel: 'GREEN' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 3, period: '2025', value: 62 },
    { direction: 'rising' as const, changePercent: 8, period: '2024', value: 60 },
  ],
  stakeholders: ['Ministry of Justice', 'DIFC Courts', 'ADGM', 'Central Bank', 'MOHRE'],
  relatedEntities: ['DLA Piper', 'Clifford Chance', 'Tamimi Law', 'FATF'],
  sources: [
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'DIFC', url: 'https://www.difccourts.ae', tier: 0 as TierLevel, date: '2025' },
    { name: 'ADGM', url: 'https://www.adgm.com', tier: 0 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-18: LABOR & EMPLOYMENT
// ============================================================================

export const laborEmploymentData: TopicAnalysis = {
  id: 'topic-2-18',
  sector: 'business',
  title: 'Labor & Employment',
  titleAr: 'العمل والتوظيف',
  description: 'Workforce demographics, Emiratization, wage protection, kafala reform, modern slavery, unemployment insurance, blue collar conditions',
  keyFindings: [
    { finding: 'Total Population: 9.89 million', metric: '9.89M', source: 'Walk Free', tier: 2 as TierLevel },
    { finding: 'Migrant Workers: 8.7 million (88%)', metric: '8.7M', source: 'ILO/HRW', tier: 1 as TierLevel, alert: 'YELLOW' as AlertLevel },
    { finding: 'Workforce Growth 2025: 12.4%', metric: '12.4%', source: 'MoHRE', tier: 0 as TierLevel },
    { finding: 'Emiratis in Private Sector: 171,000 (+377% since Nafis)', metric: '171K', source: 'Gulf News', tier: 1 as TierLevel },
    { finding: 'Modern Slavery Prevalence: 13.4/1,000 (7th globally), 132,000 people', metric: '132K', source: 'Walk Free', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Wage Protection System Coverage: 99%+', metric: '99%', source: 'MoHRE', tier: 0 as TierLevel },
    { finding: 'Unemployment Insurance: 83-90% registration, AED 350M paid out', metric: '90%', source: 'Gulf Today', tier: 1 as TierLevel },
    { finding: 'Emirati Minimum Wage: AED 6,000/month (from Jan 2026)', metric: 'AED 6K', source: 'MoHRE', tier: 0 as TierLevel },
    { finding: 'ILO Protocol Ratified: January 15, 2026 (Forced Labour Protocol)', metric: 'Jan 2026', source: 'Due Diligence Design', tier: 1 as TierLevel },
    { finding: 'Labor Inspections 2025: 695,000+ (+4%)', metric: '695K', source: 'Gulf News', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 380000,
    reach: 7200000,
    engagement: 240000,
    sentiment: { positive: 52, negative: 32, neutral: 16, overall: 20, volume: 380000 },
    trend: { direction: 'stable' as const, changePercent: 2, period: '2025', value: 52 },
  },
  sentiment: { positive: 52, negative: 32, neutral: 16, overall: 20, volume: 380000 },
  emotions: { joy: 40, trust: 45, fear: 35, surprise: 18, sadness: 30, disgust: 28, anger: 25, anticipation: 35 },
  credibility: { tier: 1 as TierLevel, score: 78, sources: 34, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 92, level: 'critical' as const, justification: 'Labor market is backbone of UAE economy with 88% migrant workforce' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 2, period: '2025', value: 52 },
    { direction: 'rising' as const, changePercent: 5, period: '2024', value: 51 },
  ],
  stakeholders: ['MoHRE', 'Nafis', 'Wage Protection System', 'ILO'],
  relatedEntities: ['Walk Free', 'HRW', 'ILO', 'Emirates NBD'],
  sources: [
    { name: 'MoHRE', url: 'https://www.mohre.gov.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'ILO', url: 'https://www.ilo.org', tier: 1 as TierLevel, date: '2025' },
    { name: 'Walk Free', url: 'https://www.walkfree.org', tier: 2 as TierLevel, date: '2023' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-19: DEMOGRAPHICS & MIGRATION
// ============================================================================

export const demographicsMigrationData: TopicAnalysis = {
  id: 'topic-2-19',
  sector: 'community',
  title: 'Demographics & Migration',
  titleAr: 'الديموغرافيا والهجرة',
  description: 'Population composition, Golden Visa program, citizenship policy, brain drain index, passport power, remittances, stateless Bidoon',
  keyFindings: [
    { finding: 'Total Population: 11.57M (2026)', metric: '11.57M', source: 'Worldometer', tier: 1 as TierLevel },
    { finding: 'Expat Share: 88.5%', metric: '88.5%', source: 'Government', tier: 0 as TierLevel },
    { finding: 'National Share: 11.5%', metric: '11.5%', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Golden Visas Issued: 350,000+ (2020-2025, 900%+ growth)', metric: '350K+', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Golden Visa Top Recipients: India (32%)', metric: '32%', source: 'PRYPCO', tier: 1 as TierLevel },
    { finding: 'Russian Investment via Golden Visa: $6.3B', metric: '$6.3B', source: 'IMI Daily', tier: 1 as TierLevel },
    { finding: 'Passport Power: 181-187 visa-free destinations (1st-2nd globally)', metric: '1st-2nd', source: 'Henley & Partners', tier: 1 as TierLevel },
    { finding: 'Brain Drain Index: 1.8 (2024) - Brain Gain (below 2.0)', metric: '1.8', source: 'Global Economy', tier: 1 as TierLevel },
    { finding: 'Urbanization: 85.82%', metric: '85.82%', source: 'Macrotrends', tier: 1 as TierLevel },
    { finding: 'Median Age: 31.6 years', metric: '31.6 years', source: 'World Bank', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 260000,
    reach: 5200000,
    engagement: 150000,
    sentiment: { positive: 68, negative: 18, neutral: 14, overall: 50, volume: 260000 },
    trend: { direction: 'stable' as const, changePercent: 3, period: '2025', value: 68 },
  },
  sentiment: { positive: 68, negative: 18, neutral: 14, overall: 50, volume: 260000 },
  emotions: { joy: 55, trust: 60, fear: 20, surprise: 25, sadness: 18, disgust: 15, anger: 10, anticipation: 50 },
  credibility: { tier: 1 as TierLevel, score: 82, sources: 36, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 88, level: 'high' as const, justification: 'Demographic composition shapes social fabric and economic policy' },
  alertLevel: 'GREEN' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 3, period: '2025', value: 68 },
    { direction: 'rising' as const, changePercent: 5, period: '2024', value: 66 },
  ],
  stakeholders: ['Federal Authority for Identity and Citizenship', 'GDRFA', 'ICP'],
  relatedEntities: ['Henley & Partners', 'Walk Free', 'World Bank'],
  sources: [
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Henley & Partners', url: 'https://www.henleyglobal.com', tier: 1 as TierLevel, date: '2025' },
    { name: 'World Bank', url: 'https://www.worldbank.org', tier: 1 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// FILE 2-20: RELIGION & INTERFAITH
// ============================================================================

// Use the comprehensive TopicAnalysis from the imported data
export const religionInterfaithData: TopicAnalysis = {
  id: comprehensiveReligionData.id,
  sector: comprehensiveReligionData.sector,
  title: comprehensiveReligionData.title,
  titleAr: comprehensiveReligionData.titleAr,
  description: comprehensiveReligionData.description,
  keyFindings: [
    { finding: 'Religious Demographics: Muslim 76.9%, Christian 12.9%, Hindu ~6%, Other 4%', metric: '76.9%', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'Non-Muslim Worship Centers: 73+ (per Federal Law No. 9 of 2023)', metric: '73+', source: 'Government', tier: 0 as TierLevel },
    { finding: 'Churches: 52+ permitted', metric: '52+', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'Hindu Temples: 2 (BAPS Mandir Abu Dhabi opened)', metric: '2', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'BAPS Mandir Visitors: 2.2M+ in first year', metric: '2.2M+', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'Abrahamic Family House: Mosque, church, synagogue complex (82,882 sq ft)', metric: 'Active', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'Sheikh Zayed Grand Mosque: 41,000+ capacity, $545M cost', metric: '41K', source: 'Wikipedia', tier: 1 as TierLevel },
    { finding: 'Freedom House Religious Freedom Score: 2/4', metric: '2/4', source: 'Freedom House', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Apostasy/Blasphemy Laws: Article 312, maximum death penalty (theoretical)', metric: 'Death penalty', source: 'End Blasphemy Laws', tier: 2 as TierLevel, alert: 'RED' as AlertLevel },
    { finding: 'Ramadan Economy: $16.4B', metric: '$16.4B', source: 'The National', tier: 1 as TierLevel },
  ],
  metrics: {
    volume: 220000,
    reach: 4800000,
    engagement: 140000,
    sentiment: { positive: 58, negative: 28, neutral: 14, overall: 30, volume: 220000 },
    trend: { direction: 'stable' as const, changePercent: 2, period: '2025', value: 58 },
  },
  sentiment: { positive: 58, negative: 28, neutral: 14, overall: 30, volume: 220000 },
  emotions: { joy: 48, trust: 55, fear: 30, surprise: 20, sadness: 25, disgust: 22, anger: 18, anticipation: 40 },
  credibility: { tier: 1 as TierLevel, score: 75, sources: 56, lastVerified: '2026-04-27' },
  uaeRelevance: { score: 85, level: 'high' as const, justification: 'Religious tolerance is central to UAE soft power and coexistence narrative' },
  alertLevel: 'YELLOW' as AlertLevel,
  trends: [
    { direction: 'stable' as const, changePercent: 2, period: '2025', value: 58 },
    { direction: 'stable' as const, changePercent: 0, period: '2024', value: 57 },
  ],
  stakeholders: ['Ministry of Tolerance', 'IACAD', 'General Authority of Islamic Affairs'],
  relatedEntities: ['Abrahamic Family House', 'BAPS Mandir', 'Sheikh Zayed Grand Mosque'],
  sources: [
    { name: 'UAE Government', url: 'https://u.ae', tier: 0 as TierLevel, date: '2026' },
    { name: 'Wikipedia', url: 'https://en.wikipedia.org', tier: 1 as TierLevel, date: '2025' },
    { name: 'Freedom House', url: 'https://freedomhouse.org', tier: 2 as TierLevel, date: '2025' },
  ],
  lastUpdated: '2026-04-27',
}

// ============================================================================
// OVERVIEW: TOPICS BY H-S-P-B-C CATEGORY
// ============================================================================

export const topicsOverview: Record<HSBPCCategory, TopicAnalysis[]> = {
  health: [
    environmentInfrastructureData,  // Environment impacts health
    healthcareData,
    foodSecurityData,
  ],
  safety: [
    securityDefenseData,
  ],
  policy: [
    politicsGovernanceData,
    internationalRelationsData,
    mediaCommunicationsData,
    legalRegulatoryData,
  ],
  business: [
    economyBusinessData,
    technologyInnovationData,
    energySustainabilityData,
    tourismHospitalityData,
    realEstateData,
    transportationData,
    laborEmploymentData,
  ],
  community: [
    cultureSocietyData,
    // sportsIntelligenceData, // Temporarily excluded - type mismatch with TopicAnalysis
    educationYouthData,
    demographicsMigrationData,
    religionInterfaithData,
  ],
}

// ============================================================================
// EXPORTS
// ============================================================================

export const topicsData = {
  politicsGovernanceData,
  economyBusinessData,
  securityDefenseData,
  cultureSocietyData,
  environmentInfrastructureData,
  internationalRelationsData,
  mediaCommunicationsData,
  technologyInnovationData,
  // sportsIntelligenceData, // Temporarily excluded - type mismatch with TopicAnalysis
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
}
