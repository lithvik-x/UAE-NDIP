// @ts-nocheck
'use client'

/**
 * Narrative Themes Dashboard Page
 * MD 3-8 (using 3-4-narrative-tracking-results.md data)
 *
 * Comprehensive visualization of UAE's 12 core narrative themes,
 * topic clusters, discourse analysis, and sentiment patterns.
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Target,
  Shield,
  Scale,
  Brain,
  MessageSquare,
  BarChart3,
  PieChart as PieChartIcon,
  Radar,
  Activity,
  AlertCircle,
  BookOpen,
  Flag,
  Users,
  Zap,
  Award,
  Eye,
  Crosshair,
  Lightbulb,
  Timer,
  Network,
  Database,
} from 'lucide-react'
import {
  narrativeThemesData,
  metadata,
  overallSentiment,
  framework,
  findings,
  topicClusters,
  sourceCredibility,
  tensions,
  discourseAnalysis,
  chartData,
  metrics,
  summary,
} from '@/lib/data/perception/narrative-themes-data'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardHover = {
  rest: { scale: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  },
}

export default function NarrativeThemesPage() {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null)

  // Key metrics for MetricCards
  const keyMetrics = [
    {
      title: 'Total Narratives',
      value: '12',
      icon: <MessageSquare className="h-6 w-6" />,
      gradient: 'gold' as const,
      status: 'info' as const,
    },
    {
      title: 'Queries Executed',
      value: '45',
      icon: <Database className="h-6 w-6" />,
      gradient: 'navy' as const,
      status: 'info' as const,
    },
    {
      title: 'Sources Analyzed',
      value: '28',
      icon: <Globe className="h-6 w-6" />,
      gradient: 'emerald' as const,
      status: 'info' as const,
    },
    {
      title: 'Critical Tensions',
      value: '5',
      icon: <AlertTriangle className="h-6 w-6" />,
      gradient: 'rose' as const,
      status: 'warning' as const,
    },
  ]

  // Framing distribution data
  const framingData = [
    { name: 'Pro-Narrative', value: 3, color: CHART_COLORS.emerald },
    { name: 'Contested', value: 6, color: CHART_COLORS.gold },
    { name: 'Counter-Narrative', value: 3, color: CHART_COLORS.rose },
  ]

  // Relevance distribution data
  const relevanceData = [
    { name: 'Critical', value: 6, color: CHART_COLORS.rose },
    { name: 'High', value: 4, color: CHART_COLORS.gold },
    { name: 'Medium', value: 2, color: CHART_COLORS.emerald },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">NARRATIVE THEMES</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">
            UAE Narrative Themes Intelligence
          </h1>
          <p className="mt-2 text-slate-400 font-rajdhani">
            Comprehensive analysis of 12 core narratives, topic clusters, and discourse patterns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <BookOpen className="h-4 w-4" />
            Research Mode
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Threat Center
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <MetricCard
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              gradient={metric.gradient}
              status={metric.status}
            />
          </motion.div>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">Narratives</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="clusters">Clusters</TabsTrigger>
          <TabsTrigger value="tensions">Tensions</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Overall Sentiment Distribution */}
            <GlassPanel title="Overall Sentiment Distribution" description="Global coverage sentiment breakdown">
              <div className="flex items-center justify-center">
                <PieChart
                  data={chartData.sentimentPie}
                  height={250}
                  innerRadius={60}
                  outerRadius={100}
                />
              </div>
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-sm text-slate-400 font-rajdhani">Positive 38%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-platinum-400" />
                  <span className="text-sm text-slate-400 font-rajdhani">Neutral 24%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="text-sm text-slate-400 font-rajdhani">Negative 38%</span>
                </div>
              </div>
            </GlassPanel>

            {/* Framing Distribution */}
            <GlassPanel title="Narrative Framing Distribution" description="Pro-narrative vs contested vs counter-narrative">
              <BarChart
                data={framingData}
                horizontal={true}
                height={250}
                showGrid={true}
                bars={[
                  { dataKey: 'value', name: 'Gold', color: CHART_COLORS.gold },
                  { dataKey: 'value', name: 'Emerald', color: CHART_COLORS.emerald },
                ]}
              />
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-sm text-slate-400 font-rajdhani">Pro-Narrative: 3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gold-500" />
                  <span className="text-sm text-slate-400 font-rajdhani">Contested: 6</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="text-sm text-slate-400 font-rajdhani">Counter: 3</span>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Narrative Dominance Chart */}
          <GlassPanel title="Narrative Source Analysis" description="Pro vs counter sources by narrative">
            <BarChart
              data={chartData.narrativeDominance}
              height={350}
              showGrid={true}
              bars={[
                { dataKey: 'pro', name: 'Pro Sources', color: CHART_COLORS.emerald },
                { dataKey: 'counter', name: 'Counter Sources', color: CHART_COLORS.rose },
              ]}
            />
          </GlassPanel>

          {/* UAE Profile Summary */}
          <GlassPanel title="UAE Profile - Core Data" description="Basic facts and statistics">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              <div className="space-y-1">
                <p className="text-xs text-slate-500 font-rajdhani">Population</p>
                <p className="text-lg font-semibold font-rajdhani text-platinum-900">11M+</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 font-rajdhani">GDP (2025)</p>
                <p className="text-lg font-semibold font-rajdhani text-platinum-900">$569.1B</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 font-rajdhani">Nationalities</p>
                <p className="text-lg font-semibold font-rajdhani text-platinum-900">200+</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 font-rajdhani">Literacy Rate</p>
                <p className="text-lg font-semibold font-rajdhani text-platinum-900">95%</p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {findings.map((finding, idx) => (
              <motion.div
                key={idx}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <GlassCard hover className="h-full">
                  <div className="flex items-start justify-between mb-3">
                    <Badge
                      variant={
                        finding.dominantFraming === 'PRO-NARRATIVE' ? 'success' :
                        finding.dominantFraming === 'COUNTER-NARRATIVE' ? 'destructive' : 'warning'
                      }
                      className="font-rajdhani"
                    >
                      {finding.dominantFraming}
                    </Badge>
                    <Badge
                      variant={
                        finding.uaeRelevance === 'Critical' ? 'destructive' :
                        finding.uaeRelevance === 'High' ? 'warning' : 'secondary'
                      }
                      className="font-rajdhani"
                    >
                      {finding.uaeRelevance}
                    </Badge>
                  </div>
                  <h3 className="font-rajdhani font-semibold text-lg text-platinum-900 mb-2">
                    {finding.narrative}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                      <span className="text-slate-600 font-rajdhani">{finding.proSources} Pro</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4 text-rose-500" />
                      <span className="text-slate-600 font-rajdhani">{finding.counterSources} Counter</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment by Narrative */}
            <GlassPanel title="Sentiment by Narrative" description="Positive, neutral, negative distribution">
              <BarChart
                data={chartData.sentimentByNarrative || []}
                height={400}
                showGrid={true}
                horizontal={true}
                stacked={true}
                bars={[
                  { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                  { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                  { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                ]}
              />
            </GlassPanel>

            {/* Topic Clusters Radar */}
            <GlassPanel title="Topic Cluster Analysis" description="Pro vs counter narrative intensity">
              <RadarChart
                data={chartData.topicClusterRadar || []}
                height={400}
                metrics={[
                  { dataKey: 'proNarrative', name: 'Pro-Narrative Sources', color: CHART_COLORS.emerald },
                  { dataKey: 'counterNarrative', name: 'Counter-Narrative Sources', color: CHART_COLORS.rose },
                ]}
              />
            </GlassPanel>
          </div>

          {/* Discourse Analysis */}
          <GlassPanel title="Discourse Analysis" description="Framing patterns and dominant themes">
            <div className="space-y-4">
              {discourseAnalysis.framingPatterns.map((pattern, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Crosshair className="h-5 w-5 text-gold" />
                    <span className="font-rajdhani font-medium text-platinum-900">{pattern.pattern}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-rajdhani">{pattern.frequency}</Badge>
                    <span className="text-sm text-slate-500 font-rajdhani">
                      {pattern.narratives.length} narrative(s)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Clusters Tab */}
        <TabsContent value="clusters" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {topicClusters.map((cluster, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard hover className="h-full" gradient={
                  cluster.id === 'positive-narratives' ? 'emerald' :
                  cluster.id === 'contested-narratives' ? 'gold' : 'rose'
                }>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant={
                        cluster.dominantFraming === 'PRO-NARRATIVE' ? 'success' :
                        cluster.dominantFraming === 'COUNTER-NARRATIVE' ? 'destructive' : 'warning'
                      }
                      className="font-rajdhani"
                    >
                      {cluster.dominantFraming}
                    </Badge>
                  </div>
                  <h3 className="font-rajdhani font-semibold text-lg text-platinum-900 mb-3">
                    {cluster.name}
                  </h3>
                  <div className="space-y-2">
                    {cluster.narratives.map((narrative, nIdx) => (
                      <div key={nIdx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600 font-rajdhani">{narrative}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 font-rajdhani">Avg Pro Sources:</span>
                      <span className="font-semibold font-rajdhani text-emerald-600">{cluster.averageProSources}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-slate-500 font-rajdhani">Avg Counter:</span>
                      <span className="font-semibold font-rajdhani text-rose-600">{cluster.averageCounterSources}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Tensions Tab */}
        <TabsContent value="tensions" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {tensions.map((tension, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard hover className="h-full">
                  <div className="flex items-start justify-between mb-3">
                    <Badge
                      variant={tension.severity === 'Critical' ? 'destructive' : 'warning'}
                      className="font-rajdhani"
                    >
                      {tension.severity}
                    </Badge>
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                  </div>
                  <h3 className="font-rajdhani font-semibold text-lg text-platinum-900 mb-3">
                    {tension.contradiction}
                  </h3>
                  <div className="space-y-2">
                    {tension.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2" />
                        <span className="text-slate-600 font-rajdhani">{detail}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tier 1 - Government */}
            <GlassPanel title="Tier 1: Government & Official" description="High credibility sources">
              <div className="space-y-3">
                {sourceCredibility.tier1Government.map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-emerald-50 rounded">
                    <div>
                      <span className="font-rajdhani font-medium text-platinum-900">{source.source}</span>
                      <span className="text-xs text-slate-500 ml-2 font-rajdhani">({source.type})</span>
                    </div>
                    <Badge variant="success" className="font-rajdhani">High</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Tier 2 - NGOs */}
            <GlassPanel title="Tier 2: NGOs & Think Tanks" description="Human rights and policy organizations">
              <div className="space-y-3">
                {sourceCredibility.tier2NGO.slice(0, 6).map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-gold-50 rounded">
                    <div>
                      <span className="font-rajdhani font-medium text-platinum-900">{source.source}</span>
                      <span className="text-xs text-slate-500 ml-2 font-rajdhani">({source.type})</span>
                    </div>
                    <Badge variant="warning" className="font-rajdhani">{source.credibility}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Tier 3 - Academic */}
            <GlassPanel title="Tier 3: Academic & Social" description="Variable credibility">
              <div className="space-y-3">
                {sourceCredibility.tier3Academic.map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <div>
                      <span className="font-rajdhani font-medium text-platinum-900">{source.source}</span>
                      <span className="text-xs text-slate-500 ml-2 font-rajdhani">({source.type})</span>
                    </div>
                    <Badge variant="secondary" className="font-rajdhani">{source.credibility}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Tier 4 - Media */}
            <GlassPanel title="Tier 4: News Media" description="Media outlets and journalism">
              <div className="space-y-3">
                {sourceCredibility.tier4Media.map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="font-rajdhani font-medium text-platinum-900">{source.source}</span>
                    <Badge variant="outline" className="font-rajdhani">{source.credibility}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Source Statistics */}
          <GlassPanel title="Source Statistics" description="Summary of sources analyzed">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-emerald-600">12</p>
                <p className="text-xs text-slate-500 font-rajdhani">Government/Official</p>
              </div>
              <div className="text-center p-4 bg-gold-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-gold-600">15</p>
                <p className="text-xs text-slate-500 font-rajdhani">NGO/Human Rights</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-slate-600">10</p>
                <p className="text-xs text-slate-500 font-rajdhani">Media</p>
              </div>
              <div className="text-center p-4 bg-platinum-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-platinum-600">8</p>
                <p className="text-xs text-slate-500 font-rajdhani">Academic/Think Tank</p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span className="font-rajdhani">Data Source: 3-4-narrative-tracking-results.md</span>
        <span className="font-rajdhani">Last Updated: {metadata.dateExecuted}</span>
      </div>
    </div>
  )
}
