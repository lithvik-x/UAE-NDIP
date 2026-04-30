'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bot,
  Brain,
  Shield,
  ShieldAlert,
  Globe,
  Users,
  Target,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Flag,
  MapPin,
  Network,
  Search,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Info,
  Lightbulb,
  Settings,
  Zap,
  Radio,
  Bug,
  EyeOff,
  Lock,
  Unlock,
  Globe2,
  BookOpen,
  MessageSquare,
  FileWarning,
} from 'lucide-react'
import {
  propagandaDisinformationData,
  executionMetadata,
  focusAreas,
  queryPatterns,
  uaeAsActorFindings,
  uaeAsTargetFindings,
  infrastructureData,
  deepfakeThreatData,
  qatarCrisisData,
  foreignDisinfoData,
  healthMisinfoData,
  organizations,
  keyIndividuals,
  statisticsSummary,
  timelineData,
  dashboardKPIs,
  threatMatrix,
  geographicHeatMap,
  sentimentAnalysis,
  verificationStatus,
  countSummary,
  sourceCredibilityMatrix,
  keySources,
} from '@/lib/data/perception/propaganda-disinformation-data'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

// Threat level badge
function ThreatBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    CRITICAL: 'bg-rose-500 text-white',
    HIGH: 'bg-amber-500 text-white',
    MEDIUM: 'bg-yellow-500 text-white',
  }
  return (
    <Badge className={colors[level] || 'bg-slate-500 text-white'}>
      {level}
    </Badge>
  )
}

// Priority badge
function PriorityBadge({ priority }: { priority: string }) {
  const colors: Record<string, string> = {
    P1: 'bg-rose-500/10 text-rose-600 border-rose-500',
    P2: 'bg-amber-500/10 text-amber-600 border-amber-500',
    P3: 'bg-blue-500/10 text-blue-600 border-blue-500',
    P4: 'bg-slate-500/10 text-slate-600 border-slate-500',
  }
  return (
    <Badge variant="outline" className={colors[priority] || 'bg-slate-500/10'}>
      {priority}
    </Badge>
  )
}

// Severity indicator
function SeverityIndicator({ severity }: { severity: string }) {
  const getColor = (s: string) => {
    switch (s) {
      case 'CRITICAL': return 'bg-rose-500'
      case 'HIGH': return 'bg-amber-500'
      case 'MODERATE': return 'bg-yellow-500'
      default: return 'bg-blue-500'
    }
  }
  return (
    <div className={`w-3 h-3 rounded-full ${getColor(severity)}`} />
  )
}

export default function PropagandaDisinformationPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Propaganda & Disinformation</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive tracking of UAE-linked influence operations and disinformation campaigns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <ShieldAlert className="h-4 w-4" />
            Threat Analysis
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Disinfo Operations"
          value="10+"
          previousValue={8}
          icon={<Network className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Countries Affected"
          value="18+"
          previousValue={15}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Bot Accounts"
          value="100K+"
          icon={<Bot className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="AI Misinfo Arrests"
          value="35"
          previousValue={0}
          icon={<Lock className="h-6 w-6" />}
          gradient="cyan"
          status="success"
        />
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="actor">UAE as Actor</TabsTrigger>
          <TabsTrigger value="target">UAE as Target</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="threats">Threat Matrix</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Focus Areas */}
            <GlassPanel title="Focus Areas" description="Research priorities by threat level">
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <PriorityBadge priority={area.priority} />
                      <span className="font-medium text-sm">{area.area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Query Patterns */}
            <GlassPanel title="Query Patterns" description="13 search patterns executed">
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {queryPatterns.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50/50 text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">{q.number}</Badge>
                      <span className="font-mono text-xs text-indigo-600">{q.pattern}</span>
                    </div>
                    <div className="text-xs text-slate-500 ml-8">{q.intent}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Dashboard KPIs */}
          <GlassPanel title="Key Performance Indicators" description="Real-time threat metrics">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {dashboardKPIs.map((kpi, idx) => (
                <div key={idx} className="text-center p-4 rounded-lg bg-slate-50/50">
                  <div className="text-2xl font-bold text-rose-600">{kpi.value}</div>
                  <div className="text-xs text-slate-600 mt-1">{kpi.kpi}</div>
                  <Badge variant="outline" className={`mt-2 text-xs ${kpi.trend === 'Increasing' ? 'text-rose-600' : kpi.trend === 'New' ? 'text-emerald-600' : 'text-slate-500'}`}>
                    {kpi.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Threat Distribution */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Threat Distribution" description="By category">
              <div className="h-64">
                <PieChart
                  data={[
                    { name: 'State Disinfo', value: 35 },
                    { name: 'Bot/Troll Nets', value: 25 },
                    { name: 'Deepfake/AI', value: 20 },
                    { name: 'Russian', value: 10 },
                    { name: 'Iranian', value: 10 },
                  ]}
                  height={220}
                />
              </div>
            </GlassPanel>

            <GlassPanel title="UAE Role Distribution" description="Actor vs Target">
              <div className="h-64">
                <BarChart
                  data={[
                    { category: 'As Actor', count: 5 },
                    { category: 'As Target', count: 4 },
                    { category: 'Both', count: 2 },
                  ]}
                  xAxisKey="category"
                  bars={[{ dataKey: 'count', name: 'Categories', color: CHART_COLORS.indigo }]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </GlassPanel>
          </div>

          {/* Count Summary */}
          <GlassPanel title="Research Summary" description="Execution statistics">
            <div className="grid gap-4 md:grid-cols-5">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">{countSummary.queriesExecuted}</div>
                <div className="text-xs text-slate-500">Queries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">35+</div>
                <div className="text-xs text-slate-500">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{countSummary.organizationsIdentified}</div>
                <div className="text-xs text-slate-500">Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">{countSummary.individualsNamed}</div>
                <div className="text-xs text-slate-500">Individuals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">{countSummary.operationsDetailed}</div>
                <div className="text-xs text-slate-500">Operations</div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* UAE as Actor Tab */}
        <TabsContent value="actor" className="space-y-6">
          {/* ALP Services */}
          <GlassPanel title="ALP Services Operation" description="Swiss contractor for UAE disinformation - CONFIRMED BY EU PARLIAMENT" badge="CRITICAL">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-rose-50/50 text-center">
                    <div className="text-2xl font-bold text-rose-600">€5.7M</div>
                    <div className="text-xs text-slate-600">Contract Value</div>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-50/50 text-center">
                    <div className="text-2xl font-bold text-rose-600">2017-2020</div>
                    <div className="text-xs text-slate-600">Campaign Period</div>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-50/50 text-center">
                    <div className="text-2xl font-bold text-rose-600">18</div>
                    <div className="text-xs text-slate-600">Countries Targeted</div>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-50/50 text-center">
                    <div className="text-2xl font-bold text-rose-600">4 Years</div>
                    <div className="text-xs text-slate-600">Duration</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-rose-700">Targets</h4>
                <div className="space-y-2">
                  {['Muslims', 'Mosques', 'Journalists', 'Politicians'].map((target, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-rose-500" />
                      <span>{target}</span>
                    </div>
                  ))}
                </div>
                <h4 className="font-semibold text-rose-700 mt-4">Method</h4>
                <p className="text-sm text-slate-600">Anti-Muslim disinformation campaign across 18 European countries</p>
              </div>
            </div>
          </GlassPanel>

          {/* Meta Removals */}
          <GlassPanel title="Meta/Facebook Account Removals" description="Coordinated inauthentic behavior - AUGUST 2019" badge="CRITICAL">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-4">
                <h4 className="font-semibold text-rose-700">Removal Statistics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 rounded bg-slate-50/50">
                    <span className="text-sm">Facebook Accounts</span>
                    <span className="font-bold text-rose-600">259</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-50/50">
                    <span className="text-sm">Facebook Pages</span>
                    <span className="font-bold text-rose-600">102</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-50/50">
                    <span className="text-sm">Facebook Groups</span>
                    <span className="font-bold text-rose-600">5</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-50/50">
                    <span className="text-sm">Instagram Accounts</span>
                    <span className="font-bold text-rose-600">17</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-50/50">
                    <span className="text-sm">Total Followers</span>
                    <span className="font-bold text-rose-600">13.7M</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-50/50">
                    <span className="text-sm">Ad Spend</span>
                    <span className="font-bold text-rose-600">~$167K</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-rose-700">Marketing Firms Linked</h4>
                <div className="space-y-2">
                  <div className="p-3 rounded bg-rose-50/50">
                    <div className="font-medium">New Waves</div>
                    <div className="text-xs text-slate-500">Egypt - Administrative</div>
                  </div>
                  <div className="p-3 rounded bg-rose-50/50">
                    <div className="font-medium">Newave</div>
                    <div className="text-xs text-slate-500">UAE - Administrative</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-rose-700">Content Promoted</h4>
                <div className="space-y-2">
                  {['Pro-UAE narratives', 'Anti-Qatar content', 'Anti-Turkey content', 'Al-Jazeera questioning', 'Amnesty International questioning'].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4 text-rose-500 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Twitter Bots */}
          <GlassPanel title="Twitter Bot Networks" description="MBZ Tweet Engagement Manipulation" badge="CRITICAL">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-rose-50/50 text-center">
                    <div className="text-2xl font-bold text-rose-600">91%</div>
                    <div className="text-xs text-slate-600">Bot-generated likes</div>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-50/50 text-center">
                    <div className="text-2xl font-bold text-rose-600">11,000+</div>
                    <div className="text-xs text-slate-600">Bot accounts</div>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-50/50 text-center">
                    <div className="text-2xl font-bold text-rose-600">50%</div>
                    <div className="text-xs text-slate-600">Created in 25 days</div>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-50/50 text-center">
                    <div className="text-2xl font-bold text-rose-600">41%</div>
                    <div className="text-xs text-slate-600">June 2020 spike</div>
                  </div>
                </div>
                <div className="text-xs text-slate-500 text-center">
                  Analyst: Marc Owen Jones, Hamad bin Khalifa University, Doha
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-rose-700">Fake Personas Identified</h4>
                <div className="flex gap-2">
                  {['Kate Johnson', 'Jessica Anderson'].map((name, idx) => (
                    <Badge key={idx} variant="outline" className="bg-rose-50">{name}</Badge>
                  ))}
                </div>
                <h4 className="font-semibold text-rose-700 mt-4">Narratives Promoted</h4>
                <div className="space-y-2">
                  {['Normalization with Israel', 'Anti-Qatar messaging', 'Anti-Turkey messaging'].map((n, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span>{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Troll Infrastructure */}
          <GlassPanel title="Troll Infrastructure" description="Eritrea Cooperation - 200+ Operators" badge="CRITICAL">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="p-4 rounded-lg bg-rose-50/50">
                <h4 className="font-semibold text-rose-700 mb-3">UAE Operation</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Leader:</span> Hamad Al Mazrouei</div>
                  <div><span className="font-medium">Organization:</span> UAE Intelligence</div>
                  <div><span className="font-medium">Troll Count:</span> 200+</div>
                  <div><span className="font-medium">Start:</span> February 2018</div>
                  <div><span className="font-medium">Objective:</span> "Encircle Qatar"</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-rose-50/50">
                <h4 className="font-semibold text-rose-700 mb-3">Saudi Cooperation</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Leader:</span> Turki Al-Sheik</div>
                  <div><span className="font-medium">Organization:</span> Saudi Arabia</div>
                  <div><span className="font-medium">Type:</span> Similar troll network</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-rose-50/50">
                <h4 className="font-semibold text-rose-700 mb-3">Eritrea Training</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Host:</span> Yemane Gebremeskel</div>
                  <div><span className="font-medium">Role:</span> Eritrea Ministry of Information</div>
                  <div><span className="font-medium">Port:</span> Assab (deep-water)</div>
                  <div><span className="font-medium">Training intensified:</span> November 2017</div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Pseudo-Media Outlets */}
          <GlassPanel title="Pseudo-Media Outlets" description="Credential Laundering Ecosystem" badge="HIGH">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {uaeAsActorFindings.pseudoMediaOutlets.map((outlet, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50 border-l-4 border-l-indigo-400">
                  <div className="font-medium text-indigo-700">{outlet.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{outlet.type}</div>
                  <div className="text-sm text-slate-600 mt-2">{outlet.purpose}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Primary Narratives */}
          <GlassPanel title="Primary Narratives Promoted" description="Core themes in UAE-aligned influence operations">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {uaeAsActorFindings.primaryNarratives.map((n, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-indigo-50/50">
                  <div className="font-semibold text-indigo-700">{n.theme}</div>
                  <div className="text-sm text-slate-600 mt-1">{n.description}</div>
                  <Badge variant="outline" className="mt-2 text-xs">{n.target}</Badge>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* UAE as Target Tab */}
        <TabsContent value="target" className="space-y-6">
          {/* Campaigns Against UAE */}
          <GlassPanel title="Coordinated Campaigns Against UAE" description="Disinformation targeting UAE">
            <div className="space-y-4">
              {uaeAsTargetFindings.campaignsAgainstUAE.map((campaign, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-amber-50/50 border border-amber-200">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-amber-700">{campaign.campaign}</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                        <Badge variant="outline" className="text-xs">{campaign.date}</Badge>
                        <span>{campaign.platform}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-amber-50">{campaign.attribution || 'Attribution pending'}</Badge>
                  </div>
                  <div className="mt-3 p-3 rounded bg-white/50 text-sm">
                    <div className="text-rose-600 line-through">{campaign.claim}</div>
                    <div className="text-emerald-600 mt-1">{campaign.reality || `${campaign.arrests} arrests made`}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* UAE Response */}
          <GlassPanel title="UAE Response Metrics" description="Counter-disinformation enforcement actions">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              {uaeAsTargetFindings.uaeResponseMetrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-emerald-50/50 text-center">
                  <div className="text-2xl font-bold text-emerald-600">{metric.count}</div>
                  <div className="text-xs text-slate-600 mt-1">{metric.type}</div>
                  <div className="text-xs text-slate-400 mt-1">{metric.date}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Iranian Attacks */}
          <GlassPanel title="April 2026 Iranian Attacks" description="Misinformation spread during crisis">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="p-4 rounded-lg bg-rose-50/50">
                <h4 className="font-semibold text-rose-700 mb-3">Attack Scale</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded bg-white/50">
                    <div className="text-2xl font-bold text-rose-600">27</div>
                    <div className="text-xs text-slate-600">Drones</div>
                  </div>
                  <div className="text-center p-3 rounded bg-white/50">
                    <div className="text-2xl font-bold text-rose-600">7</div>
                    <div className="text-xs text-slate-600">Ballistic Missiles</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-500 text-center">
                  Total drones defended: 1,567 | Total missiles defended: 285
                </div>
              </div>
              <div className="p-4 rounded-lg bg-rose-50/50">
                <h4 className="font-semibold text-rose-700 mb-3">Oracle Data Centre False Reports</h4>
                <div className="space-y-2 text-sm">
                  <div className="p-2 rounded bg-white/50">
                    <div className="font-medium text-rose-600 line-through">False Claim:</div>
                    <div>Iran's IRGC struck Oracle data centre in Dubai</div>
                  </div>
                  <div className="p-2 rounded bg-white/50">
                    <div className="font-medium text-emerald-600">Reality:</div>
                    <div>Dubai Media Office denied reports</div>
                  </div>
                  <div className="p-2 rounded bg-white/50">
                    <div className="font-medium">Origin:</div>
                    <div>Users thousands of km from UAE, often different continents</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Enforcement Actions */}
          <GlassPanel title="Enforcement Actions" description="45 arrests for misinformation during Iranian attacks">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-rose-50/50">
                <div className="text-2xl font-bold text-rose-600 mb-2">45</div>
                <div className="text-sm">People arrested for filming locations and spreading misleading information</div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg bg-slate-50/50">
                  <h4 className="font-medium mb-2">Charge Basis</h4>
                  <div className="text-sm text-slate-600">Shared images, videos, and inaccurate reports that could "inflame public opinion and spread rumors"</div>
                  <div className="text-xs text-slate-500 mt-2">- Abu Dhabi Police</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-50/50">
                  <h4 className="font-medium mb-2">Notable Defendant</h4>
                  <div className="text-sm text-slate-600">60-year-old British man charged under Dubai cyber-crime laws for allegedly filming Iranian missiles</div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          {/* Scale Metrics */}
          <GlassPanel title="Bot/Troll Infrastructure Scale" description="Documented manipulation infrastructure">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {infrastructureData.scaleMetrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-purple-50/50 text-center">
                  <div className="text-2xl font-bold text-purple-600">{metric.count}</div>
                  <div className="text-sm text-slate-600 mt-1">{metric.metric}</div>
                  <div className="text-xs text-slate-400 mt-1">{metric.source}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Multi-Layer Method */}
          <GlassPanel title="Multi-Layer Manipulation Method" description="5-layer infrastructure for influence operations">
            <div className="space-y-4">
              {infrastructureData.multiLayerMethod.map((layer, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-sm">
                    {layer.layer}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-indigo-700">{layer.component}</span>
                    </div>
                    <div className="text-sm text-slate-600 mt-1">{layer.characteristics}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* LinkedIn Analysis */}
          <GlassPanel title="LinkedIn Social Media Machine" description="Multi-layered defense structure">
            <div className="space-y-4">
              {infrastructureData.linkedInAnalysis.layers.map((layer, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">Layer {idx + 1}</Badge>
                    <span className="font-semibold">{layer.component}</span>
                  </div>
                  <div className="text-sm text-slate-600">{layer.characteristics}</div>
                  {layer.example && (
                    <div className="mt-2 text-xs">
                      <span className="font-medium">Example:</span> {layer.example}
                    </div>
                  )}
                  {layer.incentives && (
                    <div className="mt-2 text-xs">
                      <span className="font-medium">Incentives:</span> {layer.incentives}
                    </div>
                  )}
                  {layer.motivation && (
                    <div className="mt-2 text-xs">
                      <span className="font-medium">Motivation:</span> {layer.motivation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Deepfake Threats */}
          <GlassPanel title="Deepfake/AI Content Threats" description="Emerging synthetic media threats" badge="HIGH">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-semibold text-rose-700">UAE Context Statistics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {deepfakeThreatData.uaeContextStats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50/50 text-center">
                      <div className="text-xl font-bold text-rose-600">{stat.value}</div>
                      <div className="text-xs text-slate-600">{stat.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-rose-700">Attack Methods</h4>
                <div className="space-y-2">
                  {deepfakeThreatData.attackMethods.map((method, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50/50">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{method.method}</span>
                        <Badge variant="outline" className={`text-xs ${method.difficulty === 'High' ? 'text-rose-600' : 'text-amber-600'}`}>
                          {method.difficulty} difficulty
                        </Badge>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{method.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Detection Tests */}
          <GlassPanel title="Deepfake Detection Tests" description="Three tests to spot synthetic media">
            <div className="grid gap-4 md:grid-cols-3">
              {deepfakeThreatData.detectionTests.map((test, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-indigo-50/50">
                  <div className="font-semibold text-indigo-700">{test.test}</div>
                  <div className="text-sm text-slate-600 mt-2">{test.method}</div>
                  <div className="mt-2 p-2 rounded bg-white/50 text-xs">
                    <span className="font-medium">Indicator:</span> {test.indicator}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Targeted Sectors */}
          <GlassPanel title="Most Targeted Sectors" description="AI-enabled attack priority sectors">
            <div className="grid gap-4 md:grid-cols-3">
              {deepfakeThreatData.targetedSectors.map((sector, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50 flex items-center justify-between">
                  <span className="font-medium">{sector.sector}</span>
                  <Badge variant="outline" className="bg-emerald-50">{sector.priority}</Badge>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Timeline of Operations" description="Key events 2017-2026">
            <div className="space-y-6">
              {timelineData.map((period, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white font-bold">
                      {period.year}
                    </div>
                    <div className="h-px flex-1 bg-indigo-200" />
                  </div>
                  <div className="ml-14 space-y-2">
                    {period.events.map((event, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-50/50 text-sm">
                        {event}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Qatar Crisis Timeline */}
          <GlassPanel title="Qatar-Gulf Crisis (2017-2021)" description="The first social media cold war">
            <div className="space-y-4">
              {qatarCrisisData.timeline.map((event, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-slate-50/50">
                  <div className="text-sm font-medium text-indigo-600 min-w-[100px]">{event.date}</div>
                  <div className="text-sm text-slate-700">{event.event}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg bg-amber-50/50">
              <h4 className="font-semibold text-amber-700 mb-2">The 13 Demands</h4>
              <div className="grid gap-2 md:grid-cols-2">
                {qatarCrisisData.thirteenDemands.slice(0, 6).map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <Badge variant="outline" className="text-xs shrink-0">{d.number}</Badge>
                    <span className={d.status.includes('Refused') || d.status.includes('Non-negotiable') ? 'text-rose-600' : 'text-slate-600'}>
                      {d.demand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Threat Matrix Tab */}
        <TabsContent value="threats" className="space-y-6">
          {/* Threat Matrix */}
          <GlassPanel title="Threat Matrix" description="Comprehensive threat assessment">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Category</th>
                    <th className="text-center p-3">Severity</th>
                    <th className="text-center p-3">Activity</th>
                    <th className="text-center p-3">UAE Role</th>
                  </tr>
                </thead>
                <tbody>
                  {threatMatrix.map((threat, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-3 font-medium">{threat.category}</td>
                      <td className="p-3 text-center">
                        <ThreatBadge level={threat.severity} />
                      </td>
                      <td className="p-3 text-center">
                        <Badge variant="outline" className={
                          threat.activityLevel === 'HIGH' || threat.activityLevel === 'INCREASING' ? 'text-rose-600' :
                          threat.activityLevel === 'MODERATE' ? 'text-amber-600' : 'text-slate-500'
                        }>
                          {threat.activityLevel}
                        </Badge>
                      </td>
                      <td className="p-3 text-center">
                        <Badge className={
                          threat.uaeRole === 'ACTOR' ? 'bg-rose-500' :
                          threat.uaeRole === 'TARGET' ? 'bg-amber-500' :
                          'bg-purple-500'
                        }>
                          {threat.uaeRole}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          {/* Geographic Heat Map */}
          <GlassPanel title="Geographic Heat Map" description="UAE role by region">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Region</th>
                    <th className="text-center p-3">UAE as Actor</th>
                    <th className="text-center p-3">UAE as Target</th>
                    <th className="text-left p-3">Primary Threat</th>
                  </tr>
                </thead>
                <tbody>
                  {geographicHeatMap.map((region, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-3 font-medium">{region.region}</td>
                      <td className="p-3 text-center">
                        {region.uaeAsActor === 'YES' && <CheckCircle2 className="h-5 w-5 text-rose-500 mx-auto" />}
                        {region.uaeAsActor === 'NO' && <XCircle className="h-5 w-5 text-slate-300 mx-auto" />}
                        {region.uaeAsActor === 'MODERATE' && <AlertCircle className="h-5 w-5 text-amber-500 mx-auto" />}
                      </td>
                      <td className="p-3 text-center">
                        {region.uaeAsTarget === 'YES' && <CheckCircle2 className="h-5 w-5 text-rose-500 mx-auto" />}
                        {region.uaeAsTarget === 'NO' && <XCircle className="h-5 w-5 text-slate-300 mx-auto" />}
                        {region.uaeAsTarget === 'MODERATE' && <AlertCircle className="h-5 w-5 text-amber-500 mx-auto" />}
                      </td>
                      <td className="p-3 text-slate-600">{region.primaryThreat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          {/* Sentiment Analysis */}
          <GlassPanel title="Sentiment Analysis" description="Narrative sentiment toward UAE">
            <div className="space-y-4">
              {sentimentAnalysis.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.narrative}</span>
                    <Badge variant="outline" className={
                      item.sentiment.includes('POSITIVE') ? 'bg-emerald-50 text-emerald-600' :
                      item.sentiment.includes('NEGATIVE') ? 'bg-rose-50 text-rose-600' :
                      'bg-amber-50 text-amber-600'
                    }>
                      {item.sentiment}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>Source: {item.sourceType}</span>
                    <span>Verification: {item.verification}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Financial Data */}
          <GlassPanel title="Financial Data" description="Documented payments for disinformation">
            <div className="space-y-4">
              {statisticsSummary.financialData.map((payment, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{payment.payment}</span>
                    <span className="text-xl font-bold text-rose-600">{payment.amount}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>{payment.period}</span>
                    <span>Recipient: {payment.recipient}</span>
                    <span>Confirmed by: {payment.confirmedBy}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          {/* Organizations */}
          <GlassPanel title="Organizations" description="Key entities in disinformation landscape">
            <div className="space-y-4">
              <Tabs defaultValue="threats">
                <TabsList>
                  <TabsTrigger value="threats">Confirmed Threats</TabsTrigger>
                  <TabsTrigger value="high">High Credibility</TabsTrigger>
                </TabsList>
                <TabsContent value="threats">
                  <div className="grid gap-3 md:grid-cols-2">
                    {organizations.filter(o => o.credibility === 'CONFIRMED THREAT' || o.credibility === 'SUSPECTED').map((org, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-rose-50/50 border border-rose-200">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium text-rose-700">{org.name}</div>
                            <div className="text-xs text-slate-500">{org.type} - {org.country}</div>
                          </div>
                          <Badge variant="destructive" className="text-xs">{org.credibility}</Badge>
                        </div>
                        <div className="text-sm text-slate-600 mt-2">{org.role}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="high">
                  <div className="grid gap-3 md:grid-cols-2">
                    {organizations.filter(o => o.credibility === 'HIGH').map((org, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-emerald-50/50">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium text-emerald-700">{org.name}</div>
                            <div className="text-xs text-slate-500">{org.type} - {org.country}</div>
                          </div>
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-600">{org.role}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </GlassPanel>

          {/* Key Individuals */}
          <GlassPanel title="Key Individuals" description="Named individuals in disinformation operations">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {keyIndividuals.map((person, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50">
                  <div className="font-medium">{person.name}</div>
                  <div className="text-xs text-indigo-600">{person.role}</div>
                  <div className="text-xs text-slate-500">{person.affiliation}</div>
                  <div className="text-sm text-slate-600 mt-2">{person.relevance}</div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Source Credibility */}
          <GlassPanel title="Source Credibility Matrix" description="Tiered source classification">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Tier 1: Mainstream Media
                </h4>
                <div className="grid gap-2 md:grid-cols-3">
                  {sourceCredibilityMatrix.tier1.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-emerald-50/50">
                      <div className="font-medium text-emerald-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type} - {source.angle}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Tier 2: NGOs & Think Tanks
                </h4>
                <div className="grid gap-2 md:grid-cols-3">
                  {sourceCredibilityMatrix.tier2.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-purple-50/50">
                      <div className="font-medium text-purple-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" /> Tier 3: Regional/Specialized
                </h4>
                <div className="grid gap-2 md:grid-cols-2">
                  {sourceCredibilityMatrix.tier3.map((source, idx) => (
                    <div key={idx} className="p-3 rounded bg-amber-50/50">
                      <div className="font-medium text-amber-700">{source.source}</div>
                      <div className="text-xs text-slate-500">{source.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Verification Status Footer */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50/50 border border-emerald-200">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          <span className="text-sm font-medium text-emerald-700">SSOT Status: CONFIRMED</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>Queries Executed: {verificationStatus.allQueriesExecuted ? '13/13' : 'Partial'}</span>
          <span>Pages Fetched: {verificationStatus.allPagesFetched ? '35+' : 'Partial'}</span>
          <span>Data Extracted: {verificationStatus.allDataExtracted ? '100%' : 'Partial'}</span>
          <span>No Fabrication: {verificationStatus.noFabrication ? 'Verified' : 'Review needed'}</span>
        </div>
      </div>
    </div>
  )
}
