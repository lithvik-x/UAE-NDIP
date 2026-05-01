'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Scale,
  AlertTriangle,
  Shield,
  TrendingUp,
  TrendingDown,
  Users,
  Globe,
  FileCheck,
  DollarSign,
  Landmark,
  Lock,
  Unlock,
  CheckCircle,
  XCircle,
  Clock,
  ChevronRight,
  Building,
  Briefcase,
  Activity,
  Target,
  Award,
  AlertCircle,
  Zap,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useRegulatoryTrendsData,
} from '@/lib/data-loader'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

// Source credibility matrix
const sourceCredibilityMatrix = [
  { source: 'UAE Government (u.ae)', tier: 0, type: 'Official', reliability: '10/10' },
  { source: 'Chambers Practice Guides', tier: 1, type: 'Legal Directory', reliability: '9/10' },
  { source: 'Baker McKenzie / Global Compliance News', tier: 1, type: 'BigLaw', reliability: '9/10' },
  { source: 'White & Case', tier: 1, type: 'BigLaw', reliability: '9/10' },
  { source: 'KPMG', tier: 1, type: 'Big4', reliability: '9/10' },
  { source: 'EY', tier: 1, type: 'Big4', reliability: '9/10' },
  { source: 'Reed Smith', tier: 1, type: 'BigLaw', reliability: '8/10' },
  { source: 'BSA Law', tier: 2, type: 'Regional Law Firm', reliability: '7/10' },
  { source: 'CMS Law', tier: 2, type: 'Global Law Firm', reliability: '8/10' },
  { source: 'Meydan FZ', tier: 2, type: 'Free Zone Authority', reliability: '7/10' },
  { source: 'Cookie Script', tier: 3, type: 'Compliance Tool', reliability: '6/10' },
  { source: 'Data Privacy Manager', tier: 3, type: 'Privacy News', reliability: '6/10' },
  { source: 'Zevero', tier: 3, type: 'Climate Tech', reliability: '6/10' },
  { source: 'Arthur Mackenzy', tier: 4, type: 'Blog/News', reliability: '4/10' },
]

// Regulatory bodies
const regulatoryBodies = [
  { entity: 'Ministry of Climate Change and Environment', acronym: 'MOCCAE', jurisdiction: 'Federal', role: 'Climate law oversight, MRV platform administration' },
  { entity: 'UAE Data Office', acronym: '-', jurisdiction: 'Federal', role: 'Data protection regulation, PDPL enforcement' },
  { entity: 'Securities and Commodities Authority', acronym: 'SCA', jurisdiction: 'Federal', role: 'Corporate securities oversight' },
  { entity: 'Central Bank of the UAE', acronym: 'CBUAE', jurisdiction: 'Federal', role: 'Financial institution climate risk oversight' },
  { entity: 'Dubai Economic Development', acronym: 'DET', jurisdiction: 'Dubai', role: 'Business licensing, free zone coordination' },
  { entity: 'Dubai International Financial Centre', acronym: 'DIFC', jurisdiction: 'Dubai (Free Zone)', role: 'Financial centre regulation, data protection' },
  { entity: 'Abu Dhabi Global Market', acronym: 'ADGM', jurisdiction: 'Abu Dhabi (Free Zone)', role: 'Financial centre regulation' },
  { entity: 'Artificial Intelligence and Advanced Technology Council', acronym: 'AIATC', jurisdiction: 'Federal', role: 'AI policy, research strategy, investment coordination' },
  { entity: 'Global Market for Financial Assets', acronym: 'GMRA', jurisdiction: 'Financial', role: 'Carbon credit trading oversight' },
]

// Key legislation
const keyLegislation = [
  { lawName: 'Personal Data Protection Law', number: 'FDL 45/2021', effectiveDate: 'Jan 2, 2022', category: 'Data Protection', status: 'Active' },
  { lawName: 'Climate Change Reduction Law', number: 'FDL 11/2024', effectiveDate: 'May 30, 2025', category: 'Environmental', status: 'Active' },
  { lawName: 'Anti-Fronting Law Repeal', number: 'FDL 26/2024', effectiveDate: 'Sep 30, 2024', category: 'Deregulation', status: 'Active' },
  { lawName: 'New AML Law', number: 'FDL 10/2025', effectiveDate: 'Oct 14, 2025', category: 'Financial Crime', status: 'Active' },
  { lawName: 'Commercial Companies Law', number: 'FDL 32/2021', effectiveDate: 'Various', category: 'Corporate', status: 'Active' },
  { lawName: 'Companies Law Amendment', number: 'FDL 20/2025', effectiveDate: 'Jan 1, 2026', category: 'Corporate', status: 'Upcoming' },
  { lawName: 'Traffic Regulations', number: 'FDL 14/2024', effectiveDate: 'Mar 29, 2025', category: 'Transport', status: 'Active' },
  { lawName: 'Cabinet Resolution 67/2024', number: 'CR 67/2024', effectiveDate: 'Dec 28, 2024', category: 'Environmental', status: 'Active' },
  { lawName: 'DIFC Data Protection Amendment', number: 'DIFC Law 1/2025', effectiveDate: 'Jul 15, 2025', category: 'Data Protection', status: 'Active' },
  { lawName: 'CBUAE Climate Risk Regulation', number: 'Circular 8/2025', effectiveDate: 'Jul 8, 2025', category: 'Environmental', status: 'Active' },
  { lawName: 'Domestic Minimum Top-Up Tax', number: 'DMTT/Pillar Two', effectiveDate: 'Jan 1, 2025', category: 'Tax', status: 'Active' },
]

// Fine amounts
const fineAmounts = [
  { id: 'F001', regulation: 'Federal PDPL', minFine: 'AED 50,000', maxFine: 'AED 5,000,000', currency: 'AED', notes: 'Administrative fines' },
  { id: 'F002', regulation: 'Climate Law (First)', minFine: 'AED 50,000', maxFine: 'AED 2,000,000', currency: 'AED', notes: 'First offense' },
  { id: 'F003', regulation: 'Climate Law (Repeat)', minFine: '-', maxFine: 'AED 4,000,000', currency: 'AED', notes: '2x within 2 years' },
  { id: 'F004', regulation: 'Carbon Credit Registry', minFine: '-', maxFine: 'AED 1,000,000', currency: 'AED', notes: 'Non-registration/false reporting' },
  { id: 'F005', regulation: 'DIFC Annual Assessment', minFine: '-', maxFine: 'USD 25,000', currency: 'USD', notes: 'Category-dependent' },
  { id: 'F006', regulation: 'DIFC DPIA', minFine: '-', maxFine: 'USD 50,000', currency: 'USD', notes: 'Was USD 20,000, +150%' },
  { id: 'F007', regulation: 'DIFC Data Sharing', minFine: '-', maxFine: 'USD 50,000', currency: 'USD', notes: 'Was USD 10,000, +400%' },
  { id: 'F008', regulation: 'Traffic Violations', minFine: 'Variable', maxFine: 'Dh 200,000', currency: 'Dh', notes: 'Serious violations' },
]

// KPI Dashboard
const kpiDashboard = [
  { kpi: 'FDI Ranking', currentValue: '2nd Globally', targetThreshold: '#1', status: '+', trend: 'Improving (+48%)' },
  { kpi: 'Investment Target', currentValue: '-', targetThreshold: 'AED 1.3 Trillion (6 years)', status: '-', trend: 'Target Set' },
  { kpi: 'Climate Law Fine Range (First)', currentValue: 'AED 50K-2M', status: 'Active', trend: 'New' },
  { kpi: 'PDPL Fine Range', currentValue: 'AED 50K-5M', status: 'Active', trend: 'Unchanged' },
  { kpi: 'DIFC DPIA Fine', currentValue: 'Up to USD 50K', targetThreshold: 'Was USD 20K', status: 'Increased', trend: '+150%' },
  { kpi: 'DIFC Data Sharing Fine', currentValue: 'Up to USD 50K', targetThreshold: 'Was USD 10K', status: 'Increased', trend: '+400%' },
  { kpi: 'GDPR Cumulative Fines', currentValue: 'EUR 5.88 Billion', status: 'Global', trend: 'Growing' },
  { kpi: 'Data Breach Cost (Middle East)', currentValue: '$8.75 Million', status: 'IBM 2024', trend: 'Baseline' },
  { kpi: 'Golden Visa Investment', currentValue: 'AED 3,000,000', targetThreshold: 'Was AED 2M', status: 'Increased', trend: '+50%' },
  { kpi: 'VAT Rate', currentValue: '5%', status: 'Stable', trend: 'Unchanged' },
  { kpi: 'Corporate Tax (Standard)', currentValue: '9%', status: 'Active', trend: 'Unchanged' },
  { kpi: 'Corporate Tax (DMTT)', currentValue: '15%', targetThreshold: 'EUR 750M+ revenue', status: 'Active', trend: 'New' },
]

// Compliance timeline
const timelineEvents = [
  { id: 'T001', event: 'VAT Financial Services Update', date: 'Nov 15, 2024', status: 'Passed' },
  { id: 'T002', event: 'Carbon Credit Registry Effective', date: 'Dec 28, 2024', status: 'Passed' },
  { id: 'T003', event: 'DMTT Effective', date: 'Jan 1, 2025', status: 'Passed' },
  { id: 'T004', event: 'Women on Boards Mandate', date: 'Jan 1, 2025', status: 'Passed' },
  { id: 'T005', event: 'Emiratisation 20+ Employees', date: 'Jan 1, 2025', status: 'Passed' },
  { id: 'T006', event: 'Alcohol Tax Dubai', date: 'Jan 1, 2025', status: 'Passed' },
  { id: 'T007', event: 'Traffic Penalties Stricter', date: 'Mar 29, 2025', status: 'Passed' },
  { id: 'T008', event: 'Climate Law Force Date', date: 'May 30, 2025', status: 'Passed' },
  { id: 'T009', event: 'Large Emitter Registration', date: 'Jun 28, 2025', status: 'Passed' },
  { id: 'T010', event: 'DIFC Amendment Effective', date: 'Jul 15, 2025', status: 'Passed' },
  { id: 'T011', event: 'CBUAE Climate Risk Circular', date: 'Jul 8, 2025', status: 'Passed' },
  { id: 'T012', event: 'Golden Visa New Rules', date: 'Jul 1, 2025', status: 'Passed' },
  { id: 'T013', event: 'Health Insurance Mandatory', date: 'Jul 1, 2025', status: 'Passed' },
  { id: 'T014', event: 'E-Invoicing Large Enterprises', date: 'Jul 1, 2026', status: 'Upcoming' },
  { id: 'T015', event: 'Climate Law Full Compliance', date: 'May 30, 2026', status: 'Upcoming' },
  { id: 'T016', event: 'E-Invoicing All Businesses', date: 'Jul 1, 2027', status: 'Upcoming' },
]

// Sentiment analysis by topic
const sentimentTopics = [
  { topic: 'UAE New Regulations', sentiment: 'POSITIVE', analysis: 'Business-Friendly', color: 'emerald' },
  { topic: 'Deregulation/Liberalization', sentiment: 'VERY POSITIVE', analysis: 'Pro-Business', color: 'emerald' },
  { topic: 'Data Protection Enforcement', sentiment: 'NEUTRAL-CAUTIOUS', analysis: 'Compliance-Focused', color: 'yellow' },
  { topic: 'ESG Mandatory Reporting', sentiment: 'NEUTRAL', analysis: 'Transitioning', color: 'yellow' },
  { topic: 'AI Regulation', sentiment: 'POSITIVE', analysis: 'Innovation Focus', color: 'emerald' },
]

// UAE Relevance by category
const uaeRelevanceCategories = [
  { category: 'Climate Law (FDL 11/2024)', relevance: 'CRITICAL', priority: 'High' },
  { category: 'Corporate Tax (DMTT)', relevance: 'CRITICAL', priority: 'High' },
  { category: 'AML Law (FDL 10/2025)', relevance: 'CRITICAL', priority: 'High' },
  { category: 'Data Protection (PDPL)', relevance: 'HIGH', priority: 'Medium-High' },
  { category: 'DIFC Data Protection Amendment', relevance: 'HIGH', priority: 'Medium-High' },
  { category: 'CBUAE Climate Risk Regulation', relevance: 'HIGH', priority: 'Medium' },
  { category: 'E-Invoicing Mandate', relevance: 'HIGH', priority: 'High' },
  { category: 'Golden Visa Reforms', relevance: 'MEDIUM', priority: 'Medium' },
  { category: 'AI Governance', relevance: 'MEDIUM', priority: 'Medium' },
]

// Stakeholder relevance
const stakeholderRelevance = [
  { segment: 'Multinationals (Large)', regulations: ['DMTT 15% corporate tax', 'Climate Law FDL 11/2024', 'E-invoicing'], relevance: 'CRITICAL' },
  { segment: 'Financial Institutions', regulations: ['CBUAE Climate Risk Circular 8/2025', 'AML Law updates', 'ESG reporting'], relevance: 'CRITICAL' },
  { segment: 'SME/Small Business', regulations: ['Health insurance mandate', 'Rent cap', '4.5-day work week'], relevance: 'HIGH' },
  { segment: 'Tech/AI Companies', regulations: ['AI governance framework', 'Data protection compliance', 'DIFC AI Regulation 10'], relevance: 'MEDIUM-HIGH' },
  { segment: 'Investors', regulations: ['Golden Visa changes', '100% foreign ownership', 'Free zone reforms'], relevance: 'HIGH' },
  { segment: 'Data-Heavy Companies', regulations: ['PDPL compliance', 'DIFC amendments', 'Breach reporting'], relevance: 'CRITICAL' },
]

// Key regulatory trends
const regulatoryTrendsSummary = [
  {
    trendName: 'New Regulations Trend',
    keyPoints: [
      'Major 2025 reforms: Climate law, AML law, corporate tax, updated traffic rules',
      'Visa/Immigration: Stricter Golden Visa criteria (AED 3M), expanded categories',
      'Business: E-invoicing mandate (Jul 2026/2027), company law reforms, 100% foreign ownership',
      'Social: Mandatory health insurance, 4.5-day work week expansion, rent caps',
      'Financial: DMTT 15% for MNCs, increased alcohol taxes',
    ],
  },
  {
    trendName: 'Deregulation/Liberalization Trend',
    keyPoints: [
      'Repeal of anti-fronting law (FDL 26/2024)',
      'Free zone entities permitted to operate onshore Dubai (Resolution 11/2025)',
      '100% foreign ownership in most mainland sectors',
      'Greater contractual freedom in commercial companies law',
      'FATF grey list removal demonstrated AML/CFT commitment',
      'Dubai: 2nd globally for FDI with 48% increase',
    ],
  },
  {
    trendName: 'Data Protection Enforcement Trend',
    keyPoints: [
      'UAE PDPL (2021) with GDPR-like provisions',
      'DIFC Amendment Law (July 2025) increased fines and added private right of action',
      'Fines range from AED 50,000 to AED 5 million (federal); up to USD 50,000 (DIFC)',
      'Growing alignment with international data protection standards',
      'Mandatory breach reporting to UAE Data Office',
      'Data breach cost in Middle East: $8.75 million (IBM 2024)',
    ],
  },
  {
    trendName: 'ESG Mandatory Reporting Trend',
    keyPoints: [
      'Federal Decree-Law No. 11 of 2024 effective May 30, 2025',
      'Cabinet Resolution 67 of 2024 established carbon credit registry',
      'Mandatory GHG emissions reporting (Scope 1 & 2) by May 30, 2026',
      'Scope 3 anticipated mandatory 2027',
      'Fines: AED 50,000 to AED 2,000,000 (first offense), up to AED 4,000,000 (repeat)',
      'CBUAE Climate Risk Regulation (Circular 8/2025) binding for financial institutions',
    ],
  },
  {
    trendName: 'AI Regulation Trend',
    keyPoints: [
      'No dedicated AI law yet; governance via existing frameworks',
      'UAE leads in using AI for law drafting (first globally, April 2025)',
      'Regulatory Intelligence Office established for AI-driven legal analysis',
      'Alignment with OECD AI Principles, UNESCO ethics, ISO 42001',
      'DIFC has most developed AI-specific regulation (Regulation 10)',
      'UAE AI Charter (12 principles, June 2024) provides ethical framework',
    ],
  },
]

// Research quality assessment
const researchQuality = {
  sourceDiversity: { score: 8, notes: 'Mix of BigLaw, Big4, government, consultancies, blogs' },
  temporalCoverage: { score: 9, notes: '2024-2026 data current' },
  geographicCoverage: { score: 10, notes: 'Federal + Dubai + Abu Dhabi + DIFC + ADGM' },
  topicCoverage: { score: 10, notes: 'New regs, deregulation, data protection, ESG, AI' },
  dataExtractability: { score: 7, notes: 'Some PDFs inaccessible (KPMG)' },
  crossVerification: { score: 8, notes: 'Multiple sources confirm key facts' },
  officialSources: { score: 7, notes: 'Good government coverage, some gaps' },
}

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

function KPISection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="FDI Ranking"
        value="2nd"
        unit="Globally"
        previousValue={3}
        icon={<Globe className="h-5 w-5" />}
        gradient="emerald"
        status="success"
      />
      <MetricCard
        title="Climate Law Fines"
        value="AED 50K-4M"
        icon={<AlertTriangle className="h-5 w-5" />}
        gradient="rose"
        status="success"
      />
      <MetricCard
        title="PDPL Fines"
        value="AED 50K-5M"
        icon={<Lock className="h-5 w-5" />}
        gradient="orange"
        status="success"
      />
      <MetricCard
        title="Corporate Tax (DMTT)"
        value="15%"
        unit="for MNCs"
        icon={<DollarSign className="h-5 w-5" />}
        gradient="denim"
        status="success"
      />
    </div>
  )
}

function LegislationSection() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {keyLegislation.map((law, idx) => (
          <motion.div
            key={law.lawName}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg border border-platinum-700/50 bg-[var(--glass-surface)] p-4 hover:border-emerald-500/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <Badge
                variant={law.status === 'Active' ? 'success' : law.status === 'Upcoming' ? 'warning' : 'secondary'}
                className="text-xs"
              >
                {law.status}
              </Badge>
              <span className="text-xs text-platinum-500">{law.number}</span>
            </div>
            <h4 className="font-medium text-platinum-200 text-sm mb-1 line-clamp-2">{law.lawName}</h4>
            <p className="text-xs text-platinum-400">{law.effectiveDate}</p>
            <Badge variant="outline" className="mt-2 text-xs border-emerald-500/30 text-emerald">
              {law.category}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function FinesSection() {
  return (
    <div className="space-y-4">
      <BarChart
        data={fineAmounts.slice(0, 6).map(f => ({
          name: f.regulation.split(' ')[0],
          maxFine: parseInt(f.maxFine.replace(/[^0-9]/g, '')) || 0,
          minFine: parseInt(f.minFine.replace(/[^0-9]/g, '')) || 0,
        }))}
        xAxisKey="name"
        bars={[
          { dataKey: 'maxFine', name: 'Max Fine', color: CHART_COLORS.rose },
          { dataKey: 'minFine', name: 'Min Fine', color: CHART_COLORS.emerald },
        ]}
        height={300}
        showGrid={true}
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {fineAmounts.slice(0, 4).map((fine) => (
          <motion.div
            key={fine.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg border border-platinum-700/50 bg-[var(--glass-surface)] p-3"
          >
            <p className="text-xs text-platinum-400 mb-1">{fine.regulation}</p>
            <p className="text-lg font-bold text-rose-400">{fine.maxFine}</p>
            <p className="text-xs text-platinum-500">Max fine</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function TimelineSection() {
  const passedEvents = timelineEvents.filter(e => e.status === 'Passed')
  const upcomingEvents = timelineEvents.filter(e => e.status === 'Upcoming')

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="glass-card border-emerald-500/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-400" />
            Passed Regulations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-3">
              {passedEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/20"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-platinum-200 truncate">{event.event}</p>
                    <p className="text-xs text-platinum-400">{event.date}</p>
                  </div>
                  <Badge variant="success" className="shrink-0 ml-2">Passed</Badge>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card className="glass-card border-gold-500/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" />
            Upcoming Regulations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between rounded-lg bg-gold-500/10 p-3 border border-gold-500/20"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-platinum-200 truncate">{event.event}</p>
                    <p className="text-xs text-platinum-400">{event.date}</p>
                  </div>
                  <Badge variant="warning" className="shrink-0 ml-2">Upcoming</Badge>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

function SentimentSection() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sentimentTopics.map((topic, idx) => (
          <motion.div
            key={topic.topic}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className={`rounded-lg border p-4 ${
              topic.color === 'emerald'
                ? 'border-emerald-500/30 bg-emerald-500/5'
                : 'border-amber-500/30 bg-amber-500/5'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Badge
                variant={topic.color === 'emerald' ? 'success' : 'warning'}
                className="text-xs"
              >
                {topic.sentiment}
              </Badge>
            </div>
            <h4 className="font-medium text-platinum-200 text-sm mb-1">{topic.topic}</h4>
            <p className="text-xs text-platinum-400">{topic.analysis}</p>
          </motion.div>
        ))}
      </div>
      <PieChart
        data={[
          { name: 'Business-Friendly', value: 40, color: CHART_COLORS.emerald },
          { name: 'Pro-Business', value: 25, color: CHART_COLORS.gold },
          { name: 'Compliance-Focused', value: 20, color: CHART_COLORS.gold },
          { name: 'Transitioning', value: 15, color: CHART_COLORS.orange },
        ]}
        height={250}
        showLegend={true}
      />
    </div>
  )
}

function RelevanceSection() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {uaeRelevanceCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.03 }}
            whileHover={{ scale: 1.02 }}
            className={`rounded-lg border p-4 ${
              cat.relevance === 'CRITICAL'
                ? 'border-rose-500/30 bg-rose-500/5'
                : cat.relevance === 'HIGH'
                ? 'border-emerald-500/30 bg-emerald-500/5'
                : 'border-amber-500/30 bg-amber-500/5'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Badge
                variant={cat.relevance === 'CRITICAL' ? 'destructive' : cat.relevance === 'HIGH' ? 'success' : 'warning'}
                className="text-xs"
              >
                {cat.relevance}
              </Badge>
              <Badge variant="outline" className="text-xs">{cat.priority}</Badge>
            </div>
            <p className="text-sm font-medium text-platinum-200">{cat.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StakeholderSection() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stakeholderRelevance.map((item, idx) => (
          <motion.div
            key={item.segment}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className={`rounded-lg border p-4 ${
              item.relevance === 'CRITICAL'
                ? 'border-rose-500/30 bg-rose-500/5'
                : item.relevance === 'HIGH'
                ? 'border-emerald-500/30 bg-emerald-500/5'
                : 'border-amber-500/30 bg-amber-500/5'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-platinum-200 text-sm">{item.segment}</h4>
              <Badge
                variant={item.relevance === 'CRITICAL' ? 'destructive' : item.relevance === 'HIGH' ? 'success' : 'warning'}
                className="text-xs"
              >
                {item.relevance}
              </Badge>
            </div>
            <div className="space-y-1">
              {item.regulations.map((reg, i) => (
                <p key={i} className="text-xs text-platinum-400 flex items-start gap-2">
                  <span className="text-emerald-400 shrink-0">•</span>
                  {reg}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function RegulatoryBodiesSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {regulatoryBodies.map((body, idx) => (
        <motion.div
          key={body.entity}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.03 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-lg border border-platinum-700/50 bg-[var(--glass-surface)] p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <Building className="h-4 w-4 text-emerald-400" />
            <h4 className="font-medium text-platinum-200 text-sm line-clamp-1">{body.entity}</h4>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-platinum-400">
              <span className="text-platinum-500">Acronym:</span> {body.acronym}
            </p>
            <p className="text-xs text-platinum-400">
              <span className="text-platinum-500">Jurisdiction:</span> {body.jurisdiction}
            </p>
            <p className="text-xs text-platinum-400 line-clamp-2">
              <span className="text-platinum-500">Role:</span> {body.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function TrendsSummarySection() {
  return (
    <div className="space-y-6">
      {regulatoryTrendsSummary.map((trend, idx) => (
        <motion.div
          key={trend.trendName}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="rounded-lg border border-platinum-700/50 bg-[var(--glass-surface)] p-5"
        >
          <h4 className="font-semibold text-platinum-200 mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
            {trend.trendName}
          </h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {trend.keyPoints.map((point, i) => (
              <p key={i} className="text-xs text-platinum-400 flex items-start gap-2">
                <span className="text-emerald-400 shrink-0">•</span>
                {point}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function SourceCredibilitySection() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {sourceCredibilityMatrix.slice(0, 8).map((source, idx) => (
          <motion.div
            key={source.source}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.03 }}
            className="rounded-lg border border-platinum-700/50 bg-[var(--glass-surface)] p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <Badge
                variant={source.tier === 0 ? 'success' : source.tier === 1 ? 'default' : source.tier === 2 ? 'secondary' : 'outline'}
                className="text-xs"
              >
                Tier {source.tier}
              </Badge>
              <span className="text-xs text-platinum-500">{source.reliability}</span>
            </div>
            <p className="text-sm font-medium text-platinum-200 line-clamp-2">{source.source}</p>
            <p className="text-xs text-platinum-500 mt-1">{source.type}</p>
          </motion.div>
        ))}
      </div>
      <BarChart
        data={sourceCredibilityMatrix.map(s => ({
          name: s.source.split(' ')[0],
          tier: s.tier,
        }))}
        xAxisKey="name"
        bars={[{ dataKey: 'tier', name: 'Tier Level', color: CHART_COLORS.navy }]}
        height={200}
        showGrid={false}
      />
    </div>
  )
}

function ResearchQualitySection() {
  const qualityData = [
    { metric: 'Source Diversity', ...researchQuality.sourceDiversity },
    { metric: 'Temporal Coverage', ...researchQuality.temporalCoverage },
    { metric: 'Geographic Coverage', ...researchQuality.geographicCoverage },
    { metric: 'Topic Coverage', ...researchQuality.topicCoverage },
    { metric: 'Data Extractability', ...researchQuality.dataExtractability },
    { metric: 'Cross-Verification', ...researchQuality.crossVerification },
    { metric: 'Official Sources', ...researchQuality.officialSources },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {qualityData.map((item, idx) => (
          <motion.div
            key={item.metric}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.03 }}
            className="rounded-lg border border-platinum-700/50 bg-[var(--glass-surface)] p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-platinum-200">{item.metric}</span>
              <span className="text-lg font-bold text-gold">{item.score}/10</span>
            </div>
            <Progress value={item.score * 10} className="h-1 mb-2" />
            <p className="text-xs text-platinum-400">{item.notes}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function RegulatoryTrendsPage() {
  const { data: regulatoryData } = useRegulatoryTrendsData()

  if (!regulatoryData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Regulatory Trends data...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">REGULATORY INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Regulatory Trends</h1>
          <p className="mt-2 text-platinum-400 max-w-2xl">
            Comprehensive analysis of UAE regulatory environment 2025-2026: Climate law, AML enforcement,
            PDPL compliance, ESG mandates, and AI governance frameworks.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <FileCheck className="h-4 w-4" />
            Compliance Report
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Activity className="h-4 w-4" />
            Monitor Changes
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <KPISection />

      {/* Alert Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-yellow-900/20 via-yellow-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20">
            <AlertTriangle className="h-6 w-6 text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-amber-400">YELLOW Alert Status</h3>
            <p className="text-sm text-platinum-400">
              Multiple CRITICAL regulatory changes active/enforcing. Monitor compliance deadlines: May 30, 2026 (Climate Law) and July 2026 (E-invoicing).
            </p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="legislation">Legislation</TabsTrigger>
          <TabsTrigger value="fines">Fines & Penalties</TabsTrigger>
          <TabsTrigger value="timeline">Compliance Timeline</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
          <TabsTrigger value="bodies">Regulatory Bodies</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Regulatory Trends Overview" description="Key regulatory trends and their business impact">
            <div className="space-y-6">
              <TrendsSummarySection />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Legislation Tab */}
        <TabsContent value="legislation" className="space-y-6">
          <GlassPanel title="Key Legislation" description="Major UAE regulatory laws and their effective dates">
            <div className="space-y-6">
              <LegislationSection />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Fines Tab */}
        <TabsContent value="fines" className="space-y-6">
          <GlassPanel title="Fines & Penalties" description="Regulatory fine ranges across UAE jurisdictions">
            <div className="space-y-6">
              <FinesSection />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Compliance Timeline" description="Key regulatory deadlines and effective dates">
            <div className="space-y-6">
              <TimelineSection />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis by Topic" description="Overall sentiment across regulatory categories">
            <div className="space-y-6">
              <SentimentSection />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Stakeholders Tab */}
        <TabsContent value="stakeholders" className="space-y-6">
          <GlassPanel title="UAE Relevance by Category" description="Regulatory priority by topic area">
            <div className="space-y-6">
              <RelevanceSection />
            </div>
          </GlassPanel>
          <GlassPanel title="Stakeholder Impact" description="Regulatory priorities by business segment">
            <div className="space-y-6">
              <StakeholderSection />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Regulatory Bodies Tab */}
        <TabsContent value="bodies" className="space-y-6">
          <GlassPanel title="Regulatory Bodies" description="Key regulatory authorities in the UAE">
            <div className="space-y-6">
              <RegulatoryBodiesSection />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Credibility Matrix" description="Source reliability tiers for regulatory data">
            <div className="space-y-6">
              <SourceCredibilitySection />
            </div>
          </GlassPanel>
          <GlassPanel title="Research Quality Assessment" description="Data quality metrics for this analysis">
            <div className="space-y-6">
              <ResearchQualitySection />
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
