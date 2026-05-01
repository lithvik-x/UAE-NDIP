'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel, GlassCard } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  Shield,
  Search,
  CheckCircle,
  XCircle,
  AlertOctagon,
  Eye,
  Building2,
  Scale,
  FileQuestion,
  TrendingUp,
  Clock,
  Users,
  Bot,
  Image,
  Video,
  Globe,
  Newspaper,
  Database,
  Award,
  MessageSquare,
  Lock,
  EyeOff,
  Activity,
} from 'lucide-react'

// ============================================================================
// DATA FROM MD FILE 11-6
// ============================================================================

const kpiData = [
  { kpi: 'Miscaptioned Videos (March 2026)', value: '15+', trend: 'Active', source: 'Full Fact', relevance: 'Critical' },
  { kpi: 'AI-Generated Images Identified', value: '8+', trend: 'Active', source: 'Full Fact', relevance: 'Critical' },
  { kpi: 'Viral Posts Fact-Checked', value: '17+', trend: 'Active', source: 'Full Fact', relevance: 'Critical' },
  { kpi: 'Prison Term (Standard)', value: '1+ year', trend: 'Static', source: 'UAE Cybercrime Law', relevance: 'Critical' },
  { kpi: 'Prison Term (Aggravated)', value: '2+ years', trend: 'Static', source: 'UAE Cybercrime Law', relevance: 'Critical' },
  { kpi: 'Fine (Standard)', value: 'AED 100K+', trend: 'Static', source: 'UAE Cybercrime Law', relevance: 'Critical' },
  { kpi: 'Fine (Aggravated)', value: 'AED 200K', trend: 'Static', source: 'UAE Cybercrime Law', relevance: 'Critical' },
  { kpi: 'Arrests (Abu Dhabi)', value: '45', trend: 'March 2026', source: 'Abu Dhabi Police', relevance: 'Critical' },
  { kpi: 'Arrests (Dubai)', value: '25', trend: 'March 2026', source: 'Dubai Police', relevance: 'Critical' },
  { kpi: 'Ransomware Attacks (UAE 2024)', value: '+32% YoY', trend: '2024 Data', source: 'Khaleej Times', relevance: 'High' },
  { kpi: 'Fake Al Jazeera Video Views', value: '366,000+', trend: 'August 2024', source: 'Full Fact', relevance: 'High' },
  { kpi: 'Sudan Humanitarian Aid', value: 'USD $100M', trend: '2024', source: 'UAE MoFA', relevance: 'Medium' },
]

const governmentOrgs = [
  { org: 'TDRA', fullName: 'Telecommunications and Digital Government Regulatory Authority', role: 'Warns about fake content and accounts; encourages user verification', relevance: 'Critical' },
  { org: 'CSC', fullName: 'UAE Cybersecurity Council', role: 'Leads national efforts against digital threats; runs awareness campaigns', relevance: 'Critical' },
  { org: 'PP', fullName: 'Public Prosecution', role: 'Issues warnings against rumor spreading; enforces cyber crimes law', relevance: 'Critical' },
  { org: 'DMO', fullName: 'Dubai Media Office', role: 'Coordinates official responses; debunks false claims', relevance: 'Critical' },
  { org: 'NMA', fullName: 'National Media Authority', role: 'Urges public to avoid filming incident sites', relevance: 'High' },
]

const detectionMethods = [
  { method: 'Advanced AI tools', application: 'Detect unusual online activity' },
  { method: 'AI content detection', application: 'Identify misleading content early' },
  { method: 'Rapid-response teams', application: 'Cyber threat response' },
  { method: 'Electronic swarm identification', application: 'Detect coordinated fake accounts' },
  { method: 'Platform cooperation', application: 'Meta/X account removal' },
]

const threePillars = [
  { pillar: 'Technology', elements: 'AI detection tools' },
  { pillar: 'Laws', elements: 'Criminalization of false information' },
  { pillar: 'Public Awareness', elements: 'Campaigns building trust in official sources' },
]

const legalPenalties = [
  { violation: 'Standard rumor spreading', prison: '1+ year', fine: 'AED 100,000', basis: 'Article 52' },
  { violation: 'Aggravated (crisis)', prison: '2+ years', fine: 'AED 200,000', basis: 'Article 52' },
  { violation: 'Sharing war footage', prison: 'Up to 2 years', fine: 'Up to AED 200,000', basis: 'Cybercrime Law' },
]

const aiContentCases = [
  { content: 'Fake Burj Khalifa on fire', identification: 'SynthID watermark (Google AI)', status: 'Confirmed Fake' },
  { content: 'Ayatollah Khamenei in rubble', identification: 'No watermark mentioned', status: 'Fabricated' },
  { content: 'USS Abraham Lincoln on fire', identification: 'AI-generated characteristics', status: 'Fabricated' },
  { content: '"Captured US soldiers"', identification: 'Visual analysis', status: 'Fabricated' },
  { content: 'B-2 bomber "shot down"', identification: 'AI-generated characteristics', status: 'Fake' },
  { content: 'Iranian schoolchildren funeral', identification: 'AI image characteristics', status: 'Misleading' },
]

const miscaptionedVideos = [
  { claim: 'Dubai airport on fire', actual: 'August 2020 market fire in Ajman, UAE', misdirection: 'Geographic misattribution' },
  { claim: 'CIA base in Dubai struck by Iran', actual: 'October 2015 apartment fire in Sharjah, UAE', misdirection: 'Geographic misattribution' },
  { claim: 'Tel Aviv explosions', actual: '2015 warehouse fire in China', misdirection: 'Geographic misattribution' },
  { claim: 'Iran attacks on Gulf', actual: 'Football celebration in Algeria', misdirection: 'Event misattribution' },
  { claim: 'US base fire', actual: '2003 Iraq war footage', misdirection: 'Conflict misattribution' },
  { claim: 'Dubai restaurant fire', actual: 'Old unrelated fire footage', misdirection: 'Geographic misattribution' },
]

const factCheckCases = [
  { case: 'Dubai Airport Fire', source: 'Full Fact', date: 'March 24, 2026', verdict: 'FALSE', claim: 'Video shows Dubai International Airport on fire', actualFacts: 'Video shows August 2020 fire at public market in Ajman industrial area' },
  { case: 'CIA Base Dubai Attack', source: 'Full Fact', date: 'March 4, 2026', verdict: 'FALSE', claim: 'Video shows "CIA headquarters in Dubai" on fire', actualFacts: 'October 2015 fire at apartment building in Sharjah, UAE' },
  { case: 'Fake Burj Khalifa AI Image', source: 'Full Fact', date: 'March 2, 2026', verdict: 'FAKE', claim: 'Image shows Burj Khalifa engulfed in flames', actualFacts: 'Contains SynthID watermark from Google AI' },
  { case: 'UAE-France Fighter Jet Contract', source: 'Full Fact', date: 'August 29, 2024', verdict: 'FALSE', claim: 'UAE froze 80 fighter jet contracts with France', actualFacts: '80 Rafale contract signed in 2021; no evidence of freezing' },
]

const snopesCases = [
  { claim: 'Dubai fake rain (cloud seeding)', date: 'July 22, 2021', verdict: 'Debunked', type: 'Misunderstanding' },
  { claim: 'Two moons over Dubai', date: 'February 8, 2021', verdict: 'Debunked', type: 'Misinterpretation' },
  { claim: 'Admiral fired for exposing Obama\'s Dubai mansion', date: 'January 11, 2016', verdict: 'FALSE', type: 'Fabricated' },
  { claim: 'Sandy highway to Dubai during COVID', date: 'May 26, 2020', verdict: 'FALSE', type: 'Misinformation' },
  { claim: 'Dubai airport fire video', date: 'March 18, 2026', verdict: 'FALSE', type: 'Miscaptioned' },
]

const deepfakeRisks = [
  { risk: 'Impersonation', description: 'Using someone\'s likeness without consent' },
  { risk: 'Harassment', description: 'Creating harmful content targeting individuals' },
  { risk: 'Blackmail', description: 'Threatening to release deepfake content' },
  { risk: 'Fake explicit content', description: 'Non-consensual intimate imagery' },
  { risk: 'Identity fraud', description: 'Using deepfakes for financial or other gain' },
]

const expertQuotes = [
  { expert: 'Ben Colman', org: 'Reality Defender', quote: 'In our own studies, a Deepfake is more real than a screenshot from Zoom…which means Zoom looks fake and Deepfake looks real', context: 'Deepfake realism study' },
  { expert: 'Ben Colman', org: 'Reality Defender', quote: 'In Deepfake anyone can be anybody…very easy, very dangerous. So, now it\'s never trust and always verify', context: 'Trust paradigm shift' },
  { expert: 'Maha Abouelenein', org: 'Digital and Savvy', quote: 'A blue checkmark is no longer proof that someone should be believed', context: 'Paid verification criticism' },
  { expert: 'Maha Abouelenein', org: 'Digital and Savvy', quote: 'Trust comes from consistency, reputation and delivering on what you promise', context: 'Trust framework' },
  { expert: 'Damian Reilly', org: 'Arabian Business', quote: 'It feels a bit like a protection racket. You pay and the platform will then take the problem more seriously', context: 'Platform dynamics criticism' },
]

const dubaiFakeCases = [
  { claim: 'IRGC struck Oracle Data Centre in Dubai', verdict: 'FAKE NEWS', source: 'Dubai Media Office', date: 'April 3, 2026' },
  { claim: 'Mass evacuations', verdict: 'FALSE', source: 'Dubai Media Office' },
  { claim: 'Airport closures', verdict: 'FALSE', source: 'Dubai Media Office' },
  { claim: 'Empty supermarket shelves', verdict: 'FALSE', source: 'Dubai Media Office' },
  { claim: 'Frozen bank accounts', verdict: 'FALSE', source: 'Dubai Media Office' },
  { claim: 'Collapsing property market', verdict: 'FALSE', source: 'Dubai Media Office' },
]

const enforcementActions = [
  { action: 'Abu Dhabi Police arrests', count: '45 people', date: 'March 2026', charge: 'Filming locations during ongoing events' },
  { action: 'Dubai Police arrests', count: '25 people', date: 'March 2026', charge: 'Circulating inaccurate and misleading information' },
]

const incidentRestrictions = [
  { risk: 'Location exposure', description: 'Revealing sensitive locations' },
  { risk: 'Pattern analysis', description: 'Exposing movement patterns' },
  { risk: 'Routine identification', description: 'Identifying routines and neighborhoods' },
  { risk: 'Infrastructure mapping', description: 'Highlighting roads, entrances, exits' },
]

const factCheckOrgs = [
  { org: 'Full Fact', tier: 1, coverage: 'Extensive - Primary source for conflict misinformation' },
  { org: 'Snopes', tier: 1, coverage: 'Multiple fact-checks on Dubai/UAE claims' },
  { org: 'AFP Fact Check', tier: 1, coverage: 'Regional Middle East coverage' },
  { org: 'Reuters Fact Check', tier: 1, coverage: 'International fact-checking' },
  { org: 'FactCheck.org', tier: 1, coverage: 'Limited UAE-specific content' },
  { org: 'BBC Verify', tier: 1, coverage: 'Regional verification' },
  { org: 'PolitiFact', tier: 1, coverage: 'Limited Middle East coverage' },
]

const sourceCredibilityMatrix = [
  { source: 'Full Fact', tier: 1, type: 'Fact-checker (UK)', status: 'Success', reliability: 'High' },
  { source: 'Gulf News', tier: 1, type: 'Major UAE newspaper', status: 'Partial (403)', reliability: 'High' },
  { source: 'Snopes', tier: 1, type: 'Fact-checker (US)', status: 'Partial (errors)', reliability: 'High' },
  { source: 'Khaleej Times', tier: 1, type: 'Major UAE newspaper', status: 'Success', reliability: 'High' },
  { source: 'UAE MoFA', tier: 0, type: 'Government', status: 'Success', reliability: 'Very High' },
  { source: 'Dubai Media Office', tier: 0, type: 'Government', status: 'Success', reliability: 'Very High' },
]

const sentimentAnalysis = [
  { topic: 'UAE Government Response', sentiment: 'Positive', polarity: '+0.7', narrative: 'Proactive, comprehensive, protective' },
  { topic: 'Misinformation Threat', sentiment: 'Negative', polarity: '-0.8', narrative: 'Severe, ongoing, sophisticated' },
  { topic: 'International Fact-Checkers', sentiment: 'Positive', polarity: '+0.6', narrative: 'Effective, thorough, timely' },
  { topic: 'Legal Framework', sentiment: 'Positive', polarity: '+0.5', narrative: 'Strict, deterrent, comprehensive' },
  { topic: 'Sudan Allegations', sentiment: 'Negative', polarity: '-0.3', narrative: 'UAE responding defensively to false claims' },
]

const entityPeople = [
  { name: 'Ben Colman', role: 'CEO', org: 'Reality Defender', type: 'Expert' },
  { name: 'Maha Abouelenein', role: 'Founder CEO', org: 'Digital and Savvy', type: 'Expert' },
  { name: 'Damian Reilly', role: 'Editor in Chief', org: 'Arabian Business', type: 'Expert' },
  { name: 'Hamad Saif Al Shamsi', role: 'Attorney-General', org: 'UAE', type: 'Government' },
  { name: 'Afra Al Hameli', role: 'Director of Strategic Communication', org: 'UAE MoFA', type: 'Government' },
  { name: 'Khalifa Al Mazrouei', role: 'Counselor', org: 'UAE Mission Geneva', type: 'Government' },
]

const entityOrgs = [
  { org: 'Telecommunications and Digital Government Regulatory Authority', acronym: 'TDRA', type: 'Government', role: 'Regulation' },
  { org: 'UAE Cybersecurity Council', acronym: 'CSC', type: 'Government', role: 'Security' },
  { org: 'Dubai Media Office', acronym: 'DMO', type: 'Government', role: 'Communications' },
  { org: 'Full Fact', acronym: '-', type: 'NGO', role: 'Fact-checking' },
  { org: 'Snopes', acronym: '-', type: 'NGO', role: 'Fact-checking' },
  { org: 'Reality Defender', acronym: '-', type: 'Private', role: 'Deepfake detection' },
  { org: 'Dubai Police', acronym: '-', type: 'Government', role: 'Law enforcement' },
  { org: 'Abu Dhabi Police', acronym: '-', type: 'Government', role: 'Law enforcement' },
]

const entityLaws = [
  { law: 'UAE Cybercrime and Rumours Law', article: 'Article 52', year: '-', provision: 'Criminalizes rumors' },
  { law: 'Federal Decree-Law', article: 'No. 34', year: '2021', provision: 'Manipulated images' },
  { law: 'Wadeema\'s Law', article: '-', year: '-', provision: 'Child protection' },
]

const detectionMethodsList = [
  { method: 'Reverse image search', application: 'Trace image origins' },
  { method: 'SynthID watermark detection', application: 'Identify Google AI images' },
  { method: 'Visible watermarks', application: 'Detect Sora, Gemini, Grok content' },
  { method: 'Satellite imagery comparison', application: 'Verify locations' },
  { method: 'Video detail analysis', application: 'Confirm buildings, dates' },
  { method: 'Geolocation', application: 'Match landmarks, street views' },
]

const reportingChannels = [
  { channel: 'Dubai Police eCrime portal', type: 'Online' },
  { channel: 'Abu Dhabi Aman service', type: 'Service' },
  { channel: 'MySafe app', type: 'Application' },
]

const verificationRecommendations = [
  { recommendation: 'Verify date of content' },
  { recommendation: 'Check context' },
  { recommendation: 'Confirm source' },
  { recommendation: 'Avoid reposting unreliable sources' },
  { recommendation: 'Follow official announcements only' },
]

const sudanResponse = [
  { official: 'Her Excellency Lana Zaki Nusseibeh', position: 'Assistant Minister of Foreign Affairs for Political Affairs' },
  { official: 'His Excellency Mohamed Abushahab', position: 'UAE Ambassador and Permanent Representative to the UN' },
  { official: 'Khalifa Al Mazrouei', position: 'Counselor at UAE Permanent Mission in Geneva' },
]

const sudanActions = [
  { action: 'Humanitarian Pledge', details: 'USD $100 million' },
  { action: 'Peace Talks', details: 'Jeddah and Manaba' },
  { action: 'Paris Conference', details: 'International Humanitarian Conference for Sudan' },
  { action: 'Diplomatic Engagement', details: 'IGAD and African Union' },
]

const dataCompleteness = [
  { category: 'Government organizations', completeness: '100%', notes: 'All major TDRA, CSC, DMO documented' },
  { category: 'Legal framework', completeness: '90%', notes: 'Partial fetch on Lexology' },
  { category: 'Full Fact cases', completeness: '100%', notes: 'All 4 major cases retrieved' },
  { category: 'Snopes cases', completeness: '70%', notes: 'Access issues, partial' },
  { category: 'Expert quotes', completeness: '100%', notes: 'All major quotes retrieved' },
  { category: 'Sudan allegations', completeness: '100%', notes: 'Full details from MoFA' },
  { category: 'Enforcement actions', completeness: '80%', notes: 'Daily Mail blocked' },
  { category: 'Statistics', completeness: '95%', notes: 'Key metrics captured' },
]

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

const getVerdictBadge = (verdict: string) => {
  switch (verdict) {
    case 'TRUE': return <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{verdict}</Badge>
    case 'FALSE': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">{verdict}</Badge>
    case 'FAKE': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">{verdict}</Badge>
    case 'FAKE NEWS': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">{verdict}</Badge>
    case 'MISLEADING': return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">{verdict}</Badge>
    case 'Debunked': return <Badge variant="warning" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">{verdict}</Badge>
    case 'Not Rated': return <Badge variant="outline" className="text-xs">{verdict}</Badge>
    default: return <Badge variant="outline" className="text-xs">{verdict}</Badge>
  }
}

const getRelevanceBadge = (relevance: string) => {
  switch (relevance) {
    case 'Critical': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">{relevance}</Badge>
    case 'High': return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">{relevance}</Badge>
    case 'Medium': return <Badge variant="info" className="text-xs bg-navy-500/20 text-navy-500-400 border-navy-500/50">{relevance}</Badge>
    default: return <Badge variant="outline" className="text-xs">{relevance}</Badge>
  }
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function FactCheckVerificationPage() {
  const [selectedTab, setSelectedTab] = useState('overview')

  return (
    <div className="min-h-screen bg-navy-950 p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald-500 font-rajdhani">
            Fact-Check & Verification
          </h1>
          <p className="mt-2 text-platinum-500-400">
            Comprehensive fact-checking ecosystem and misinformation tracking for UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="border-emerald-500/50 text-emerald-500">
            <Database className="h-3 w-3 mr-1" />
            11-6 Module
          </Badge>
        </div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
      >
        <MetricCard title="Miscaptioned Videos" value="15+" icon={<Video className="h-5 w-5" />} gradient="rose" status="error" />
        <MetricCard title="AI Images Found" value="8+" icon={<Image className="h-5 w-5" />} gradient="purple" status="error" />
        <MetricCard title="Posts Fact-Checked" value="17+" icon={<CheckCircle className="h-5 w-5" />} gradient="emerald" status="success" />
        <MetricCard title="Prison Term (Std)" value="1+ yr" icon={<Lock className="h-5 w-5" />} gradient="gold" />
        <MetricCard title="Prison Term (Agg)" value="2+ yrs" icon={<AlertOctagon className="h-5 w-5" />} gradient="rose" />
        <MetricCard title="Fine (Max)" value="AED 200K" icon={<Scale className="h-5 w-5" />} gradient="gold" />
      </motion.div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="government">Government</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
          <TabsTrigger value="misinformation">Misinformation</TabsTrigger>
          <TabsTrigger value="deepfakes">Deepfakes</TabsTrigger>
          <TabsTrigger value="enforcement">Enforcement</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Executive Summary */}
            <GlassPanel title="Executive Summary" description="Key findings from MD 11-6">
              <div className="space-y-4">
                <p className="text-sm text-platinum-500-300">
                  The UAE operates a comprehensive fact-checking and verification ecosystem involving government agencies, international fact-checkers, and legal frameworks.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-emerald-400">Key Insight:</p>
                  <p className="text-sm text-platinum-500-400">
                    During March-April 2026 regional tensions, <span className="text-rose-400 font-semibold">15+ miscaptioned videos</span> and <span className="text-rose-400 font-semibold">8+ AI-generated images</span> were documented by Full Fact alone.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-platinum-500-400">Data Completeness</p>
                    <p className="text-lg font-bold text-emerald-400">~85%</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-platinum-500-400">Research Date</p>
                    <p className="text-lg font-bold text-emerald-400">2026-04-27</p>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Three Pillars Strategy */}
            <GlassPanel title="Three-Pillar Strategy" description="UAE's approach to misinformation">
              <div className="space-y-4">
                {threePillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.pillar}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-emerald text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-platinum-500-200">{pillar.pillar}</p>
                      <p className="text-sm text-platinum-500-400">{pillar.elements}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Sentiment Analysis */}
          <GlassPanel title="Sentiment Analysis by Topic" description="Emotional tone and polarity of information landscape">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {sentimentAnalysis.map((item, idx) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`rounded-lg border p-4 ${
                    item.sentiment === 'Positive'
                      ? 'border-emerald-500/30 bg-emerald-500/10'
                      : 'border-red-500/30 bg-red-500/10'
                  }`}
                >
                  <p className="text-xs text-platinum-500-400 truncate">{item.topic}</p>
                  <p className={`text-lg font-bold ${item.sentiment === 'Positive' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {item.polarity}
                  </p>
                  <p className="text-xs text-platinum-500-500 mt-1">{item.narrative}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Data Completeness */}
          <GlassPanel title="Data Completeness Assessment" description="Coverage metrics by category">
            <div className="space-y-3">
              {dataCompleteness.map((item, idx) => (
                <div key={item.category} className="flex items-center justify-between">
                  <span className="text-sm text-platinum-500-300">{item.category}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${
                      item.completeness === '100%' ? 'text-emerald-400' :
                      item.completeness === '90%' ? 'text-emerald-400' :
                      item.completeness === '80%' ? 'text-amber-400' :
                      'text-platinum-500-400'
                    }`}>{item.completeness}</span>
                    <Badge variant="outline" className="text-xs">{item.notes}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Government Tab */}
        <TabsContent value="government" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Government Organizations */}
            <GlassPanel title="Government Organizations" description="Key entities in UAE's verification ecosystem">
              <div className="space-y-3">
                {governmentOrgs.map((org, idx) => (
                  <motion.div
                    key={org.org}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start justify-between rounded-lg border border-white/10 bg-white/5 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-white">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-platinum-500-200">{org.org}</p>
                        <p className="text-xs text-platinum-500-400">{org.fullName}</p>
                        <p className="text-xs text-platinum-500-500 mt-1">{org.role}</p>
                      </div>
                    </div>
                    {getRelevanceBadge(org.relevance)}
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Detection Methods */}
            <GlassPanel title="Detection Methods" description="Technical approaches used for identifying misinformation">
              <div className="space-y-3">
                {detectionMethods.map((method, idx) => (
                  <motion.div
                    key={method.method}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-teal text-white">
                      <Search className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-platinum-500-200">{method.method}</p>
                      <p className="text-sm text-platinum-500-400">{method.application}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Reporting Channels */}
          <GlassPanel title="Official Reporting Channels" description="How to report misinformation or cyber threats">
            <div className="grid gap-4 sm:grid-cols-3">
              {reportingChannels.map((channel, idx) => (
                <motion.div
                  key={channel.channel}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"
                >
                  <Shield className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
                  <p className="font-semibold text-platinum-500-200">{channel.channel}</p>
                  <Badge variant="outline" className="mt-2">{channel.type}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Verification Recommendations */}
          <GlassPanel title="Verification Recommendations" description="Before sharing, users should:">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {verificationRecommendations.map((rec, idx) => (
                <motion.div
                  key={rec.recommendation}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-platinum-500-300">{rec.recommendation}</span>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Legal Tab */}
        <TabsContent value="legal" className="space-y-6">
          {/* Legal Penalties */}
          <GlassPanel title="Legal Penalties Framework" description="UAE Cybercrime Law consequences">
            <div className="space-y-4">
              {legalPenalties.map((penalty, idx) => (
                <motion.div
                  key={penalty.violation}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-platinum-500-200">{penalty.violation}</p>
                      <p className="text-sm text-platinum-500-500">Legal basis: {penalty.basis}</p>
                    </div>
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                      {penalty.prison} / {penalty.fine}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Laws Registry */}
          <GlassPanel title="Key Legislation" description="Laws governing misinformation">
            <div className="space-y-3">
              {entityLaws.map((law, idx) => (
                <motion.div
                  key={law.law}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <Scale className="h-5 w-5 text-gold-400" />
                  <div className="flex-1">
                    <p className="font-medium text-platinum-500-200">{law.law}</p>
                    <p className="text-sm text-platinum-500-400">{law.article} {law.year && `(${law.year})`}</p>
                  </div>
                  <Badge variant="outline">{law.provision}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Detection Methods for Fact-Checking */}
          <GlassPanel title="Fact-Check Detection Methods" description="Techniques used by fact-checkers">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {detectionMethodsList.map((method, idx) => (
                <motion.div
                  key={method.method}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-teal-400" />
                    <p className="font-medium text-platinum-500-200">{method.method}</p>
                  </div>
                  <p className="text-sm text-platinum-500-400">{method.application}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Misinformation Tab */}
        <TabsContent value="misinformation" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* AI Content Cases */}
            <GlassPanel title="AI-Generated Content Circulating" description="Documented AI-generated images and videos">
              <div className="space-y-3">
                {aiContentCases.map((item, idx) => (
                  <motion.div
                    key={item.content}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start justify-between rounded-lg border border-white/10 bg-white/5 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <Bot className="h-5 w-5 text-purple-400" />
                      <div>
                        <p className="font-medium text-platinum-500-200">{item.content}</p>
                        <p className="text-xs text-platinum-500-400">{item.identification}</p>
                      </div>
                    </div>
                    {getVerdictBadge(item.status)}
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Miscaptioned Videos */}
            <GlassPanel title="Miscaptioned Videos" description="Videos falsely presented as current events">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3 pr-4">
                  {miscaptionedVideos.map((video, idx) => (
                    <motion.div
                      key={video.claim}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="rounded-lg border border-white/10 bg-white/5 p-3"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <Video className="h-4 w-4 text-rose-400 mt-1" />
                        <p className="text-sm font-medium text-rose-400">{video.claim}</p>
                      </div>
                      <div className="ml-6 space-y-1">
                        <p className="text-xs text-platinum-500-500">Actual: <span className="text-platinum-500-300">{video.actual}</span></p>
                        <Badge variant="outline" className="text-xs">{video.misdirection}</Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </div>

          {/* Fact-Checked Cases */}
          <GlassPanel title="Documented Fact-Check Cases" description="Full Fact and Snopes verified claims">
            <ScrollArea className="h-[400px]">
              <div className="space-y-4 pr-4">
                {factCheckCases.map((fcCase, idx) => (
                  <motion.div
                    key={fcCase.case}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-lg border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-platinum-500-200">{fcCase.case}</p>
                        <p className="text-xs text-platinum-500-500">{fcCase.source} - {fcCase.date}</p>
                      </div>
                      {getVerdictBadge(fcCase.verdict)}
                    </div>
                    <div className="space-y-2 ml-4">
                      <p className="text-sm"><span className="text-rose-400">Claim:</span> {fcCase.claim}</p>
                      <p className="text-sm"><span className="text-emerald-400">Fact:</span> {fcCase.actualFacts}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Snopes Cases */}
          <GlassPanel title="Snopes UAE Fact-Checks" description="Verified claims from Snopes database">
            <div className="space-y-3">
              {snopesCases.map((snopes, idx) => (
                <motion.div
                  key={snopes.claim}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex-1">
                    <p className="font-medium text-platinum-500-200">{snopes.claim}</p>
                    <p className="text-xs text-platinum-500-500">{snopes.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{snopes.type}</Badge>
                    {getVerdictBadge(snopes.verdict)}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Deepfakes Tab */}
        <TabsContent value="deepfakes" className="space-y-6">
          {/* Deepfake Risks */}
          <GlassPanel title="Deepfake Risks" description="Common deepfake threat categories">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {deepfakeRisks.map((risk, idx) => (
                <motion.div
                  key={risk.risk}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4 text-center"
                >
                  <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-purple-400" />
                  <p className="font-semibold text-platinum-500-200">{risk.risk}</p>
                  <p className="text-xs text-platinum-500-400 mt-1">{risk.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Expert Quotes */}
          <GlassPanel title="Expert Warnings" description="Insights from industry experts">
            <div className="space-y-4">
              {expertQuotes.map((quote, idx) => (
                <motion.div
                  key={`${quote.expert}-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-indigo text-white">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-platinum-500-200">{quote.expert}</p>
                        <Badge variant="outline" className="text-xs">{quote.org}</Badge>
                      </div>
                      <p className="text-sm text-platinum-500-300 italic">"{quote.quote}"</p>
                      <p className="text-xs text-platinum-500-500 mt-1">Context: {quote.context}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Sudan Response */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="UAE Sudan Response Officials" description="Key officials responding to allegations">
              <div className="space-y-3">
                {sudanResponse.map((official, idx) => (
                  <motion.div
                    key={official.official}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                  >
                    <Users className="h-5 w-5 text-emerald-400" />
                    <div>
                      <p className="font-medium text-platinum-500-200">{official.official}</p>
                      <p className="text-xs text-platinum-500-400">{official.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="UAE Actions Supporting Sudan" description="Humanitarian and diplomatic efforts">
              <div className="space-y-3">
                {sudanActions.map((action, idx) => (
                  <motion.div
                    key={action.action}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3"
                  >
                    <Award className="h-5 w-5 text-emerald-400" />
                    <div>
                      <p className="font-medium text-platinum-500-200">{action.action}</p>
                      <p className="text-sm text-emerald-400">{action.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Enforcement Tab */}
        <TabsContent value="enforcement" className="space-y-6">
          {/* Enforcement Actions */}
          <GlassPanel title="Enforcement Actions" description="Recent arrests for misinformation">
            <div className="grid gap-4 sm:grid-cols-2">
              {enforcementActions.map((action, idx) => (
                <motion.div
                  key={action.action}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/10 p-4"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-red text-white">
                      <XCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-400">{action.count}</p>
                      <p className="text-sm text-platinum-500-400">{action.action}</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-platinum-500-500">Date:</span> <span className="text-platinum-500-300">{action.date}</span></p>
                    <p><span className="text-platinum-500-500">Charge:</span> <span className="text-platinum-500-300">{action.charge}</span></p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Incident Site Restrictions */}
          <GlassPanel title="Incident Site Photography Restrictions" description="Security risks from documenting incident sites">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {incidentRestrictions.map((restriction, idx) => (
                <motion.div
                  key={restriction.risk}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"
                >
                  <EyeOff className="h-6 w-6 mx-auto mb-2 text-rose-400" />
                  <p className="font-semibold text-platinum-500-200">{restriction.risk}</p>
                  <p className="text-xs text-platinum-500-400 mt-1">{restriction.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Dubai Fake News Cases */}
          <GlassPanel title="Dubai Operations Fake News" description="Recent fabricated claims about Dubai">
            <div className="space-y-3">
              {dubaiFakeCases.map((dubaiCase, idx) => (
                <motion.div
                  key={dubaiCase.claim}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="font-medium text-platinum-500-200">{dubaiCase.claim}</p>
                      <p className="text-xs text-platinum-500-500">{dubaiCase.source} - {dubaiCase.date}</p>
                    </div>
                  </div>
                  {getVerdictBadge(dubaiCase.verdict)}
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Entity People */}
            <GlassPanel title="Key People" description="Experts and officials in the verification ecosystem">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3 pr-4">
                  {entityPeople.map((person, idx) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-denim text-white">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-platinum-500-200">{person.name}</p>
                        <p className="text-xs text-platinum-500-400">{person.role} - {person.org}</p>
                      </div>
                      <Badge variant={person.type === 'Government' ? 'info' : 'secondary'} className="text-xs">
                        {person.type}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Entity Organizations */}
            <GlassPanel title="Organizations" description="Entities involved in verification and enforcement">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3 pr-4">
                  {entityOrgs.map((org, idx) => (
                    <motion.div
                      key={org.org}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                    >
                      <Building2 className="h-5 w-5 text-emerald-400" />
                      <div className="flex-1">
                        <p className="font-medium text-platinum-500-200">{org.acronym || org.org}</p>
                        <p className="text-xs text-platinum-500-400 truncate">{org.org}</p>
                        <p className="text-xs text-platinum-500-500">{org.role}</p>
                      </div>
                      <Badge variant={org.type === 'Government' ? 'info' : 'secondary'} className="text-xs">
                        {org.type}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          {/* Fact-Check Organizations */}
          <GlassPanel title="Fact-Check Organizations" description="International organizations monitoring UAE misinformation">
            <div className="space-y-3">
              {factCheckOrgs.map((org, idx) => (
                <motion.div
                  key={org.org}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-white">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-platinum-500-200">{org.org}</p>
                    <p className="text-sm text-platinum-500-400">{org.coverage}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Tier {org.tier}</Badge>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Source Credibility Matrix */}
          <GlassPanel title="Source Credibility Matrix" description="Reliability assessment of information sources">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-3 text-platinum-500-400">Source</th>
                    <th className="text-left py-2 px-3 text-platinum-500-400">Type</th>
                    <th className="text-left py-2 px-3 text-platinum-500-400">Tier</th>
                    <th className="text-left py-2 px-3 text-platinum-500-400">Status</th>
                    <th className="text-left py-2 px-3 text-platinum-500-400">Reliability</th>
                  </tr>
                </thead>
                <tbody>
                  {sourceCredibilityMatrix.map((source, idx) => (
                    <motion.tr
                      key={source.source}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      className="border-b border-white/5"
                    >
                      <td className="py-2 px-3 text-platinum-500-200">{source.source}</td>
                      <td className="py-2 px-3 text-platinum-500-400">{source.type}</td>
                      <td className="py-2 px-3">
                        <Badge variant={source.tier === 0 ? 'success' : source.tier === 1 ? 'info' : 'secondary'} className="text-xs">
                          Tier {source.tier}
                        </Badge>
                      </td>
                      <td className="py-2 px-3">
                        <Badge variant={
                          source.status === 'Success' ? 'success' :
                          source.status.includes('Partial') ? 'warning' : 'destructive'
                        } className="text-xs">
                          {source.status}
                        </Badge>
                      </td>
                      <td className="py-2 px-3 text-emerald-400">{source.reliability}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
