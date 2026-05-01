'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart, BarChart, AreaChart } from '@/components/ui/chart-library'
import { Shield, AlertTriangle, Bug, Wifi, Database, Server, TrendingUp, Activity, Target, Globe, Clock, Binary } from 'lucide-react'
import { motion } from 'framer-motion'
import type { CyberThreatData } from '@/lib/data/crisis/cyber-threat-data'

interface ThreatOverviewSectionProps {
  data: CyberThreatData['executiveSummary'] & CyberThreatData['attackVolume']
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

export function ThreatOverviewSection({ data }: ThreatOverviewSectionProps) {
  const threatOverview = data.threatOverview || {
    dailyAttacks: '500,000-800,000',
    attackIncrease: 'Tripled since Iran war began',
    confirmedIncidents2026: 128,
    entitiesTargetedMarch2025: 634,
    ransomwareVictimsTracked: 145,
    aptGroupsOperating: '40+',
    countriesTargetingUAE: 20,
    organizationsHostile: '40+'
  }

  const keyStats = data.keyStatistics || []
  const attackComposition = data.attackComposition || {
    organizedGroups: 350,
    amateurHackers: 320,
    maliciousSoftwareEntities: 120,
    monitoredTelegramChannels: '~5,000',
    countriesTargetingUAE: '~20',
    hostileOrganizations: 'Over 40'
  }

  const officialQuote = data.officialQuote || {
    text: 'The threat is constant',
    author: 'Dr. Mohammed Al Kuwaiti',
    role: 'Head of UAE Cyber Security Council'
  }

  const threatDistribution = data.organizedThreatDistribution || [
    { category: 'State-linked groups', count: '40+', notes: 'Primarily Iran-linked' },
    { category: 'Organized criminal groups', count: '15+', notes: 'Ransomware-focused' },
    { category: 'Hacktivist collectives', count: '300+', notes: 'Various motivations' },
    { category: 'Nation-state APTs', count: '10+', notes: 'Multiple countries' }
  ]

  const sentimentData = [
    { name: 'Critical', value: 45, color: CHART_COLORS.rose },
    { name: 'Alarmed', value: 30, color: CHART_COLORS.orange },
    { name: 'Concerned', value: 20, color: CHART_COLORS.gold },
    { name: 'Strained', value: 5, color: CHART_COLORS.platinum },
  ]

  const attackTrendData = data.dailyStatistics || [
    { period: 'Pre-escalation', attacks: '~200,000/day', change: 'Baseline', source: 'Khaleej Times' },
    { period: 'Current (Apr 2026)', attacks: '600,000-800,000/day', change: '+200-300%', source: 'Gulf News, Khaleej Times' },
    { period: 'March 2026 (AI attack)', attacks: '~530,000/day', change: '+122%', source: 'Wired.me' },
    { period: 'January 2025', attacks: '~150,000-200,000/day', change: 'Baseline', source: 'GISEC Podcast' },
  ]

  const attackCompositionData = [
    { name: 'Organized Groups', value: attackComposition.organizedGroups, color: CHART_COLORS.rose },
    { name: 'Amateur Hackers', value: attackComposition.amateurHackers, color: CHART_COLORS.orange },
    { name: 'Malware Entities', value: attackComposition.maliciousSoftwareEntities, color: CHART_COLORS.purple },
  ]

  const threatDistributionData = threatDistribution.map((d, idx) => ({
    name: d.category.split(' ')[0],
    count: parseInt(d.count) || 0,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  const radarData = [
    { name: 'State-Sponsored', value: 95 },
    { name: 'Ransomware', value: 85 },
    { name: 'Phishing', value: 90 },
    { name: 'DDoS', value: 75 },
    { name: 'AI-Powered', value: 80 },
    { name: 'Zero-Day', value: 70 },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Cyber Threat Overview" description="UAE cybersecurity landscape and attack trends">
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple" />
                  Attack Volume Trend
                </CardTitle>
                <CardDescription>Daily cyberattacks (2025-2026)</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={attackTrendData.map((stat, idx) => ({
                    month: stat.period,
                    attacks: parseInt(stat.attacks.replace(/[~,\/]/g, '')) || 0,
                  }))}
                  xAxisKey="month"
                  areas={[{ dataKey: 'attacks', name: 'Daily Attacks', color: CHART_COLORS.purple }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-rose" />
                  Attack Vectors
                </CardTitle>
                <CardDescription>Distribution by attack type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Phishing', value: 75, color: CHART_COLORS.rose },
                    { name: 'Ransomware', value: 20, color: CHART_COLORS.orange },
                    { name: 'DDoS', value: 3, color: CHART_COLORS.purple },
                    { name: 'Other', value: 2, color: CHART_COLORS.platinum },
                  ]}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-orange" />
                  Threat Radar
                </CardTitle>
                <CardDescription>Multi-dimensional threat assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={radarData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.purple }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-gold" />
                  Sentiment Analysis
                </CardTitle>
                <CardDescription>Threat response sentiment</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sentimentData}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple" />
                  Threat Composition
                </CardTitle>
                <CardDescription>Actor categorization</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={attackCompositionData}
                  height={220}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Binary className="h-5 w-5 text-cyan" />
                  Organized Threats
                </CardTitle>
                <CardDescription>Distribution by type</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={threatDistributionData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'count', name: 'Count', color: CHART_COLORS.teal }]}
                  height={220}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  Official Quote
                </CardTitle>
                <CardDescription>UAE Cyber Security Council</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-center h-[220px]">
                <blockquote className="border-l-4 border-gold pl-4">
                  <p className="text-2xl font-serif italic text-gold">"{officialQuote.text}"</p>
                  <p className="mt-2 text-sm text-slate-400">- {officialQuote.author}</p>
                  <p className="text-xs text-slate-500">{officialQuote.role}</p>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}