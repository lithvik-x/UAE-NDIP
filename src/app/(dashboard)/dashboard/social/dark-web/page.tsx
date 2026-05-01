// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Shield, Eye, Lock, AlertTriangle, Skull, EyeOff } from 'lucide-react'
import { useDarkWebIntelligenceData } from '@/lib/data-loader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function DarkWebSocialPage() {
  const { data } = useDarkWebIntelligenceData()

  const threatIndicators = 1284
  const compromisedCredentials = 23456
  const activeMarkets = 47
  const criticalAlerts = 18

  const mentionsData = [
    { source: 'Forums', mentions: 4521, listings: 234 },
    { source: 'Marketplaces', mentions: 3187, listings: 189 },
    { source: 'Paste Sites', mentions: 1654, listings: 67 },
    { source: 'IM Channels', mentions: 987, listings: 45 },
    { source: 'Social', mentions: 743, listings: 23 },
  ]

  const severityData = [
    { name: 'Critical', value: 18, color: '#dc2626' },
    { name: 'High', value: 34, color: '#ea580c' },
    { name: 'Medium', value: 29, color: '#d97706' },
    { name: 'Low', value: 19, color: '#65a30d' },
  ]

  const marketplaceData = [
    { name: 'DarkMarket Alpha', status: 'Active', listings: 1247, risk: 92 },
    { name: 'Shadow Exchange', status: 'Active', listings: 893, risk: 88 },
    { name: 'Underground Hub', status: 'Monitored', listings: 654, risk: 75 },
    { name: 'Breach Depot', status: 'Active', listings: 521, risk: 81 },
    { name: 'DataVault Forum', status: 'Monitored', listings: 412, risk: 68 },
  ]

  const riskFactors = [
    { factor: 'Credential Stuffing', level: 94, trend: 'up' },
    { factor: 'Ransomware Ops', level: 87, trend: 'up' },
    { factor: 'Data Exfiltration', level: 78, trend: 'stable' },
    { factor: 'Phishing Kits', level: 72, trend: 'down' },
    { factor: 'Exploit Sales', level: 65, trend: 'up' },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 p-8">
      {/* Hero */}
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-red-500/20 to-rose-600/20 text-red-400 border-red-500/50">
            DARK WEB INTEL
          </Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy-500">
            Dark Web Monitoring
          </h1>
          <p className="mt-2 text-platinum-500-400">
            Underground surveillance, threat actor tracking, and illicit marketplace intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2 border-red-500/50 text-red-400">
            <EyeOff className="h-3 w-3" /> {activeMarkets} Markets
          </Badge>
          <Badge variant="outline" className="gap-2 border-rose-500/50 text-rose-400">
            <Skull className="h-3 w-3" /> {criticalAlerts} Critical
          </Badge>
        </div>
      </motion.div>

      {/* Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Threat Indicators" value={threatIndicators.toLocaleString()} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Compromised Creds" value={compromisedCredentials.toLocaleString()} icon={<Lock className="h-6 w-6" />} gradient="gold" status="warning" />
        <MetricCard title="Active Markets" value={activeMarkets} icon={<Eye className="h-6 w-6" />} gradient="denim" status="info" />
        <MetricCard title="Critical Alerts" value={criticalAlerts} icon={<Skull className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      {/* Threat Landscape */}
      <motion.div variants={itemVariants}>
        <GlassPanel title="Threat Landscape" description="Active threats targeting UAE entities">
          <div className="grid gap-6 lg:grid-cols-2">
            {data?.metrics?.sentiment?.keyConcerns?.map((concern: string, idx: number) => (
              <div key={idx} className="flex items-center gap-4 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-platinum-500-200">{concern}</p>
                  <p className="text-xs text-platinum-500-400">Active threat vector</p>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Charts Row */}
      <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani">Dark Web Mentions</CardTitle>
            <CardDescription>Mentions and listings by source type</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={mentionsData}
              xAxisKey="source"
              bars={[
                { dataKey: 'mentions', name: 'Mentions', color: CHART_COLORS.rose },
                { dataKey: 'listings', name: 'Listings', color: CHART_COLORS.gold },
              ]}
              height={280}
              showGrid={true}
            />
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani">Threat Severity</CardTitle>
            <CardDescription>Alert distribution by severity level</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart data={severityData} height={280} showLegend={true} />
          </CardContent>
        </Card>
      </motion.div>

      {/* Marketplace Monitoring */}
      <motion.div variants={itemVariants}>
        <GlassPanel title="Marketplace Monitoring" description="Tracked underground marketplaces">
          <div className="space-y-3">
            {marketplaceData.map((market, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/10">
                    <Shield className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="font-medium text-platinum-500-200">{market.name}</p>
                    <p className="text-sm text-platinum-500-400">{market.listings.toLocaleString()} active listings</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={market.status === 'Active' ? 'destructive' : 'outline'} className="text-xs">
                    {market.status}
                  </Badge>
                  <div className="text-center">
                    <span className={`text-lg font-bold ${market.risk > 85 ? 'text-red-400' : market.risk > 70 ? 'text-amber-400' : 'text-amber-400'}`}>
                      {market.risk}
                    </span>
                    <p className="text-xs text-platinum-500-400">Risk</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Risk Assessment */}
      <motion.div variants={itemVariants}>
        <GlassPanel title="Risk Assessment" description="Current threat factor analysis">
          <div className="space-y-4">
            {riskFactors.map((factor, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-platinum-500-200">{factor.factor}</span>
                  <span className={`text-sm font-bold ${
                    factor.level > 85 ? 'text-red-400' : factor.level > 70 ? 'text-amber-400' : 'text-amber-400'
                  }`}>
                    {factor.level}%
                  </span>
                </div>
                <Progress value={factor.level} className="h-2" />
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
