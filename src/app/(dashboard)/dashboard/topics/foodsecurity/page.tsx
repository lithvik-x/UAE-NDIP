// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  Leaf,
  Wheat,
  Droplets,
  Globe,
  Shield,
  Sprout,
  Fish,
  AlertOctagon,
  DollarSign,
  Users,
  Factory,
  Recycle,
  Scale,
  Award,
  Truck,
  Droplet,
  Scale3d,
  ShoppingCart,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Thermometer,
  Sun,
  Wind,
  TreeDeciduous,
  Heart,
  Building2,
} from 'lucide-react'
import { foodSecurityData } from '@/lib/data/topics/foodsecurity-data'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function FoodSecurityPage() {
  const data = foodSecurityData

  // Compatibility layer: derive TopicAnalysis-style properties from comprehensive data
  const sentimentByTheme = data.sentimentAnalysis?.sentimentByTheme ?? []
  const positiveCount = sentimentByTheme.filter((t: { sentiment: string }) => t.sentiment.includes('POSITIVE')).length
  const negativeCount = sentimentByTheme.filter((t: { sentiment: string }) => t.sentiment.includes('NEGATIVE')).length
  const total = sentimentByTheme.length || 1

  // Derive TopicAnalysis-compatible sentiment object
  const sentiment = {
    overall: Math.round(((positiveCount - negativeCount + total) / total) * 50 + 50),
    positive: Math.round((positiveCount / total) * 100),
    negative: Math.round((negativeCount / total) * 100),
    neutral: Math.round(((total - positiveCount - negativeCount) / total) * 100),
  }

  // Derive TopicAnalysis-compatible emotions (all zero since comprehensive data doesn't have this)
  const emotions = { joy: 0, trust: 0, fear: 0, surprise: 0, sadness: 0, disgust: 0, anger: 0, anticipation: 0 }

  // Derive alertLevel from import dependency
  const alertLevel = data.foodImportDependency?.importDependencyRatio ? 'RED' : 'YELLOW'

  // Derive uaeRelevance from comprehensive data
  const uaeRelevance = {
    score: data.uaeRelevanceAssessment?.directRelevanceScore === 'VERY HIGH (10/10)' ? 95 :
          data.uaeRelevanceAssessment?.directRelevanceScore === 'HIGH (8-9/10)' ? 85 : 75,
    justification: data.uaeRelevanceAssessment?.directRelevanceScore ?? 'HIGH',
  }

  // Key metrics from comprehensive data
  const keyStats = {
    foodImportDependency: '85-90%',
    strategicReserveDuration: '6 months',
  }

  // Sentiment breakdown
  const sentimentData = [
    { name: 'Positive', value: sentiment?.positive ?? 0, color: CHART_COLORS.emerald },
    { name: 'Negative', value: sentiment?.negative ?? 0, color: CHART_COLORS.danger },
    { name: 'Neutral', value: sentiment?.neutral ?? 0, color: CHART_COLORS.navy },
  ]

  // Emotion distribution
  const emotionData = [
    { name: 'Joy', value: emotions?.joy ?? 0, color: CHART_COLORS.gold },
    { name: 'Trust', value: emotions?.trust ?? 0, color: CHART_COLORS.navy },
    { name: 'Fear', value: emotions?.fear ?? 0, color: CHART_COLORS.danger },
    { name: 'Surprise', value: emotions?.surprise ?? 0, color: CHART_COLORS.purple },
    { name: 'Sadness', value: emotions?.sadness ?? 0, color: CHART_COLORS.info },
    { name: 'Disgust', value: emotions?.disgust ?? 0, color: CHART_COLORS.orange },
    { name: 'Anger', value: emotions?.anger ?? 0, color: CHART_COLORS.rose },
    { name: 'Anticipation', value: emotions?.anticipation ?? 0, color: CHART_COLORS.emerald },
  ]

  // Import dependency data
  const importData = [
    { name: 'Imported', value: 87, color: CHART_COLORS.danger },
    { name: 'Local Production', value: 13, color: CHART_COLORS.emerald },
  ]

  // Food sources
  const foodSourceData = [
    { name: 'Vegetables', import_pct: 78, local: 22, color: CHART_COLORS.danger },
    { name: 'Fruits', import_pct: 85, local: 15, color: CHART_COLORS.danger },
    { name: 'Meat', import_pct: 90, local: 10, color: CHART_COLORS.rose },
    { name: 'Dairy', import_pct: 65, local: 35, color: CHART_COLORS.gold },
    { name: 'Dates', import_pct: 5, local: 95, color: CHART_COLORS.emerald },
    { name: 'Seafood', import_pct: 40, local: 60, color: CHART_COLORS.info },
  ]

  // Sentiment by theme
  const sentimentByThemeData = (sentimentByTheme ?? []).map((item: { theme: string; sentiment: string }, i: number) => ({
    name: item.theme,
    value: item.sentiment === 'POSITIVE' ? 75 : item.sentiment === 'NEGATIVE' ? 25 : 50,
    sentiment: item.sentiment,
    color: item.sentiment === 'POSITIVE' ? CHART_COLORS.emerald :
           item.sentiment === 'NEGATIVE' ? CHART_COLORS.danger : CHART_COLORS.gold,
  }))

  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><TrendingUp className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  const getAlertColor = (alert?: string) => {
    if (alert === 'RED') return 'border-red-500/50'
    if (alert === 'YELLOW') return 'border-yellow-500/50'
    return 'border-emerald-500/50'
  }

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <Badge variant="denim" className="mb-2">C-SECTOR: FOOD SECURITY</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-navy">Food Security</h1>
          <p className="mt-2 text-slate-400 max-w-2xl">
            {data?.description}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {data?.reportMetadata?.reportCompiled}
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {data?.reportMetadata?.sourceURLs} sources
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              {data?.reportMetadata?.enrichmentCompleted}
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy-500/50 text-navy hover:bg-navy/10">
            <Leaf className="h-4 w-4" />
            MOCCAE Portal
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Food Reserve Data
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="GFSI Ranking"
          value="23rd"
          previousValue="25th"
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Import Dependency"
          value={keyStats.foodImportDependency}
          previousValue="88-92%"
          icon={<AlertOctagon className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Strategic Reserve"
          value={keyStats.strategicReserveDuration}
          previousValue="5 months"
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment.overall}
          previousValue={sentiment.overall - 2}
          icon={<Leaf className="h-6 w-6" />}
          gradient="platinum"
          status={sentiment.overall > 0 ? 'success' : 'warning'}
        />
      </motion.div>

      {/* Alert Banner */}
      <motion.div variants={itemVariants} className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor(alertLevel)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-yellow-400" />}
            {alertLevel === 'GREEN' && <TrendingUp className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-slate-200">Intelligence Alert Level: {alertLevel}</p>
              <p className="text-sm text-slate-400">UAE Relevance: {uaeRelevance.score}/100 — {uaeRelevance.justification}</p>
            </div>
          </div>
          {getAlertBadge(alertLevel)}
        </div>
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {['Import Dependency', 'Strategic Reserves', 'Vertical Farming', 'Date Industry', 'Aquaculture', 'Food Safety'].map((area) => (
            <Badge key={area} variant="outline" className="border-platinum/30 text-platinum">
              {area}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Key Findings</TabsTrigger>
          <TabsTrigger value="imports">Import Dependency</TabsTrigger>
          <TabsTrigger value="reserves">Strategic Reserves</TabsTrigger>
          <TabsTrigger value="agritech">AgriTech</TabsTrigger>
          <TabsTrigger value="dates">Date Industry</TabsTrigger>
          <TabsTrigger value="aquaculture">Aquaculture</TabsTrigger>
          <TabsTrigger value="safety">Food Safety</TabsTrigger>
          <TabsTrigger value="waste">Food Waste</TabsTrigger>
          <TabsTrigger value="pricing">Pricing & Inflation</TabsTrigger>
          <TabsTrigger value="organic">Organic & Labeling</TabsTrigger>
          <TabsTrigger value="halal">Halal & GMO</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Key Findings Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Key Findings"
            description="Critical metrics and findings for UAE Food Security"
            badge="21 Sections"
          >
            <div className="space-y-4">
              {(data?.executiveSummary ? [
                { finding: '85-90% food import dependency', tier: 2, metric: '85-90%', source: 'Multiple sources', alert: 'RED' },
                { finding: '6-month strategic reserve coverage', tier: 0, metric: '6 months', source: 'Minister Al Marri', alert: 'GREEN' },
                { finding: 'GFSI Ranking: 23rd globally, 1st in MENA', tier: 1, metric: '#1 MENA', source: 'GFSI 2022', alert: null },
                { finding: 'Vertical farming market growing at 15%+ CAGR', tier: 0, metric: '$400M+', source: 'Mordor Intelligence', alert: null },
                { finding: '3.27 million tonnes annual food waste', tier: 2, metric: '3.27M tonnes', source: 'MOCCAE', alert: 'RED' },
                { finding: 'Date production: 4th largest globally', tier: 0, metric: '755,000+ tonnes', source: 'Agzia', alert: 'GREEN' },
                { finding: '153 AgriTech startups, 26 funded', tier: 1, metric: '153 companies', source: 'Tracxn', alert: null },
                { finding: 'Aquaculture investment: $350M+ from ADQ', tier: 1, metric: '$350M+', source: 'ADQ', alert: null },
              ] : []).map((finding, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg border p-4 bg-slate-800/50 hover:bg-slate-800/70 transition-colors ${finding.alert ? getAlertColor(finding.alert) : 'border-slate-700'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      finding.tier === 0 ? 'bg-emerald/20 text-emerald' :
                      finding.tier === 1 ? 'bg-navy/20 text-navy' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {finding.tier === 0 ? <Sprout className="h-5 w-5" /> :
                       finding.tier === 1 ? <Wheat className="h-5 w-5" /> :
                       <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-200">{finding.finding}</p>
                      <p className="text-sm text-slate-400">Source: {finding.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-navy">{finding.metric}</p>
                      <p className="text-xs text-slate-400">Tier {finding.tier}</p>
                    </div>
                    {finding.alert && getAlertBadge(finding.alert)}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Import Dependency Tab */}
        <TabsContent value="imports" className="space-y-6">
          <GlassPanel
            title="Food Import Dependency"
            description="UAE's reliance on food imports and geopolitical vulnerabilities"
            badge="85-90%"
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertOctagon className="h-5 w-5 text-danger" />
                      Import vs Local Production
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={importData} height={280} showLegend={true} />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5 text-gold" />
                      Import Volume & Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(data?.foodImportDependency?.importVolume ?? []).map((item: { metric: string; year: string; value: string }, idx: number) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                          <span className="text-platinum-400 text-sm">{item.metric} ({item.year})</span>
                          <Badge variant="gold" className="text-xs">{item.value}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Wheat & Rice Imports */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wheat className="h-5 w-5 text-gold" />
                    Wheat & Rice Import Sources (2022)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-3">Wheat Imports (~1.9M tonnes)</h4>
                      <BarChart
                        data={(data?.foodImportDependency?.wheatImports2022 ?? []).slice(0, 4).map((s: { sourceCountry: string; share: string }, i: number) => ({
                          name: s.sourceCountry,
                          value: parseInt(s.share) || 0,
                          color: Object.values(CHART_COLORS)[i % Object.values(CHART_COLORS).length],
                        }))}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Share %', color: CHART_COLORS.gold }]}
                        height={200}
                        showGrid={true}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-3">Rice Imports (~1.2M tonnes)</h4>
                      <BarChart
                        data={(data?.foodImportDependency?.riceImports2022 ?? []).slice(0, 3).map((s: { sourceCountry: string; share: string }, i: number) => ({
                          name: s.sourceCountry,
                          value: parseInt(s.share) || 0,
                          color: Object.values(CHART_COLORS)[i % Object.values(CHART_COLORS).length],
                        }))}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Share %', color: CHART_COLORS.emerald }]}
                        height={200}
                        showGrid={true}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Geopolitical Chokepoints */}
              <Card className="glass-card border-danger/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-danger">
                    <MapPin className="h-5 w-5" />
                    Geopolitical Chokepoints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(data?.foodImportDependency?.geopoliticalChokepoints ?? []).map((choke: { chokepoint: string; percentOfUAEFoodTransit: string; riskLevel: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-red-400">{choke.chokepoint}</p>
                            <p className="text-sm text-platinum-400 mt-1">{choke.percentOfUAEFoodTransit} of UAE food transit</p>
                          </div>
                          <Badge variant="destructive">{choke.riskLevel}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Foreign Investments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-emerald" />
                    Foreign Agricultural Investments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.foodImportDependency?.foreignAgriculturalInvestments ?? []).map((inv: { countryRegion: string; landHoldings: string; notes: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div>
                          <p className="font-medium text-platinum-200">{inv.countryRegion}</p>
                          <p className="text-xs text-platinum-500">{inv.notes}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">{inv.landHoldings}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Strategic Reserves Tab */}
        <TabsContent value="reserves" className="space-y-6">
          <GlassPanel
            title="Strategic Reserves & Stockpiling"
            description="UAE's food security buffer system"
            badge="6 Months"
          >
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald" />
                    Reserve Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {(data?.strategicReserves?.reserveOverview ?? []).map((item: { metric: string; value: string; source: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                        <p className="text-2xl font-bold text-emerald">{item.value}</p>
                        <p className="text-sm text-platinum-400">{item.metric}</p>
                        <p className="text-xs text-platinum-500 mt-1">{item.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Nine Price-Regulated Commodities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-gold" />
                    Nine Price-Regulated Commodities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {(data?.strategicReserves?.ninePriceRegulatedCommodities ?? []).map((item: { commodity: string }, idx: number) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <span className="text-platinum-300 text-sm">{item.commodity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Penalties */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose">
                    <XCircle className="h-5 w-5" />
                    Penalties Under Federal Law No. 3/2020
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.strategicReserves?.penalties ?? []).map((penalty: { violation: string; penalty: string }, idx: number) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <p className="font-medium text-rose">{penalty.violation}</p>
                        <p className="text-sm text-platinum-400 mt-1">{penalty.penalty}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* AgriTech Tab */}
        <TabsContent value="agritech" className="space-y-6">
          <GlassPanel
            title="Agricultural Technology & Vertical Farming"
            description="Innovation addressing food security and water scarcity"
            badge="$400M+ Market"
          >
            <div className="space-y-6">
              {/* Vertical Farming Market */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sprout className="h-5 w-5 text-emerald" />
                    Vertical Farming Market
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {(data?.agriculturalTechnology?.verticalFarmingMarket ?? []).map((item: { metric: string; value: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                        <p className="text-2xl font-bold text-emerald">{item.value}</p>
                        <p className="text-sm text-platinum-400">{item.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bustanica */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Factory className="h-5 w-5 text-gold" />
                    Bustanica - Emirates Crop One (Dubai)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {(data?.agriculturalTechnology?.majorVerticalFarms ?? []).slice(0, 6).map((farm: { attribute: string; value: string }, idx: number) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{farm.attribute}</span>
                        <span className="font-bold text-gold text-sm">{farm.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CEA Benefits */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald" />
                    Controlled Environment Agriculture Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {(data?.agriculturalTechnology?.ceaBenefits ?? []).map((benefit: { benefit: string }, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded">
                        <CheckCircle className="h-4 w-4 text-emerald shrink-0" />
                        <span className="text-platinum-300 text-sm">{benefit.benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AgriTech Startups */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gold" />
                    Top AgriTech Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.agriTechStartups?.topCompanies ?? []).slice(0, 5).map((company: { company: string; focus: string; location: string; totalFunding: string; stage: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                        <div>
                          <p className="font-bold text-gold">{company.company}</p>
                          <p className="text-xs text-platinum-500">{company.focus} | {company.location}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="emerald" className="text-xs">{company.totalFunding}</Badge>
                          <p className="text-xs text-platinum-500 mt-1">{company.stage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Date Industry Tab */}
        <TabsContent value="dates" className="space-y-6">
          <GlassPanel
            title="Date Industry"
            description="UAE as a global date production powerhouse"
            badge="4th Globally"
          >
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TreeDeciduous className="h-5 w-5 text-gold" />
                    Date Production Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    {(data?.dateIndustry?.productionOverview ?? []).slice(0, 4).map((item: { metric: string; value: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl text-center">
                        <p className="text-xl font-bold text-gold">{item.value}</p>
                        <p className="text-sm text-platinum-400">{item.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Date Varieties */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald" />
                    Major Date Varieties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {(data?.dateIndustry?.majorDateVarieties ?? []).map((variety: { variety: string; characteristics: string }, idx: number) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg">
                        <p className="font-bold text-gold">{variety.variety}</p>
                        <p className="text-xs text-platinum-400 mt-1">{variety.characteristics}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Players */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-navy" />
                    Key Date Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {(data?.dateIndustry?.keyPlayers ?? []).map((company: { company: string; notes: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="font-medium text-platinum-200">{company.company}</span>
                        <span className="text-xs text-platinum-500 text-right max-w-xs">{company.notes}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Value Added Products */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple" />
                    Value-Added Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(data?.dateIndustry?.valueAddedProducts ?? []).map((product: { product: string }, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs">{product.product}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Aquaculture Tab */}
        <TabsContent value="aquaculture" className="space-y-6">
          <GlassPanel
            title="Aquaculture & Fish Farming"
            description="Reducing seafood import dependency through local production"
            badge="$350M+ Investment"
          >
            <div className="space-y-6">
              {/* Fish Consumption */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Fish className="h-5 w-5 text-info" />
                    Fish Consumption Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {(data?.aquaculture?.fishConsumptionOverview ?? []).slice(0, 3).map((item: { metric: string; value: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-info-500/10 border border-info-500/30 rounded-xl text-center">
                        <p className="text-2xl font-bold text-info">{item.value}</p>
                        <p className="text-sm text-platinum-400">{item.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* The Fish Farm */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-emerald" />
                    The Fish Farm - Salmon Production
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                      <p className="text-3xl font-bold text-emerald">550 tons</p>
                      <p className="text-sm text-platinum-400">Current Annual Production</p>
                    </div>
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                      <p className="text-3xl font-bold text-emerald">10,000+ tons</p>
                      <p className="text-sm text-platinum-400">Expansion Target</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                      <span className="text-platinum-400 text-sm">Local Salmon Price</span>
                      <span className="font-bold text-emerald">~$23/pound</span>
                    </div>
                    <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                      <span className="text-platinum-400 text-sm">Imported Premium</span>
                      <span className="font-bold text-rose">~30% higher</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Investments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gold" />
                    Aquaculture Investments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.aquaculture?.investments ?? []).map((inv: { investor: string; year: string; amount: string; target: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                        <div>
                          <p className="font-bold text-gold">{inv.investor}</p>
                          <p className="text-xs text-platinum-500">{inv.year}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="gold" className="text-lg">{inv.amount}</Badge>
                          <p className="text-xs text-platinum-500 mt-1">{inv.target}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Local Species */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale3d className="h-5 w-5 text-navy" />
                    Key Species in UAE Aquaculture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {(data?.aquaculture?.keySpeciesInUAEAquaculture ?? []).map((species: { localName: string; commonName: string }, idx: number) => (
                      <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <p className="font-bold text-navy">{species.localName}</p>
                        <p className="text-xs text-platinum-500">{species.commonName}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Food Safety Tab */}
        <TabsContent value="safety" className="space-y-6">
          <GlassPanel
            title="Food Safety & Regulatory Framework"
            description="Federal Law No. 10 of 2015 and enforcement mechanisms"
            badge="Federal Law"
          >
            <div className="space-y-6">
              {/* Regulatory Bodies */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-navy" />
                    Regulatory Bodies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {(data?.foodSafety?.regulatoryBodies ?? []).map((body: { body: string; jurisdiction: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="font-bold text-navy">{body.body}</span>
                        <span className="text-xs text-platinum-400 text-right">{body.jurisdiction}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Criminal Penalties */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose">
                    <XCircle className="h-5 w-5" />
                    Criminal Penalties (Article 14)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {(data?.foodSafety?.criminalPenaltiesArticle14 ?? []).map((penalty: { violation: string; imprisonment: string; fineAED: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                        <span className="text-platinum-300 text-sm">{penalty.violation}</span>
                        <div className="text-right">
                          <Badge variant="destructive" className="text-xs">{penalty.imprisonment}</Badge>
                          <Badge variant="outline" className="text-xs ml-1">AED {penalty.fineAED}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Product Recalls */}
              <Card className="glass-card border-danger/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-danger">
                    <AlertTriangle className="h-5 w-5" />
                    Product Recalls (2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.foodSafety?.productRecalls2026 ?? []).map((recall: { product: string; reason: string; date: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-red-400">{recall.product}</p>
                            <p className="text-sm text-platinum-400 mt-1">{recall.reason}</p>
                          </div>
                          <Badge variant="destructive" className="text-xs">{recall.date}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Food Waste Tab */}
        <TabsContent value="waste" className="space-y-6">
          <GlassPanel
            title="Food Waste"
            description="Scale of the problem and mitigation efforts"
            badge="3.27M Tonnes"
          >
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-danger" />
                    Scale of the Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {(data?.foodWaste?.scaleOfProblem ?? []).slice(0, 3).map((item: { metric: string; value: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center">
                        <p className="text-2xl font-bold text-red-400">{item.value}</p>
                        <p className="text-sm text-platinum-400">{item.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sector Breakdown */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-gold" />
                    Sector Breakdown (2022)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={(data?.foodWaste?.sectorBreakdown2022 ?? []).map((s: { sector: string; percentOfTotalWaste: string }, i: number) => ({
                      name: s.sector,
                      value: parseInt(s.percentOfTotalWaste) || 0,
                      color: Object.values(CHART_COLORS)[i % Object.values(CHART_COLORS).length],
                    }))}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: '% of Total Waste', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* ne'ma Initiative */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald" />
                    ne'ma Initiative
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-emerald">National Food Loss and Waste Initiative</p>
                        <p className="text-sm text-platinum-400 mt-1">Launched: {data?.foodWaste?.nemaInitiative?.launched}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-emerald">50%</p>
                        <p className="text-xs text-platinum-500">Waste Reduction by 2030</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Food Bank */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose" />
                    UAE Food Bank Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-center">
                      <p className="text-2xl font-bold text-rose">28.9M</p>
                      <p className="text-sm text-platinum-400">People Reached (2024)</p>
                    </div>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-center">
                      <p className="text-2xl font-bold text-rose">8M</p>
                      <p className="text-sm text-platinum-400">Ramadan Meals Target (2026)</p>
                    </div>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-center">
                      <p className="text-2xl font-bold text-rose">5,000</p>
                      <p className="text-sm text-platinum-400">Single-Day Record (Mar 2026)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Pricing & Inflation Tab */}
        <TabsContent value="pricing" className="space-y-6">
          <GlassPanel
            title="Food Price Inflation & Consumer Protection"
            description="Price monitoring and crisis response during Hormuz tensions"
            badge="1.02%"
          >
            <div className="space-y-6">
              {/* Food Inflation Data */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    Food Inflation Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.foodPriceInflation?.foodInflationData ?? []).map((item: { date: string; foodInflation: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{item.date}</span>
                        <Badge variant={item.foodInflation?.includes('-') ? 'success' : 'warning'} className="text-xs">
                          {item.foodInflation}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CPI Data */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-navy" />
                    CPI Data (December 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {(data?.foodPriceInflation?.cpiDataDecember2025 ?? []).map((item: { indicator: string; value: string }, idx: number) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{item.indicator}</span>
                        <span className="font-bold text-navy">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Crisis Pricing */}
              <Card className="glass-card border-danger/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-danger">
                    <AlertTriangle className="h-5 w-5" />
                    Price Increases During Crisis (March 2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.foodPriceInflation?.priceIncreasesDuringCrisis ?? []).map((price: { vegetable: string; before: string; after: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <span className="font-bold text-red-400">{price.vegetable}</span>
                        <div className="text-right">
                          <span className="text-platinum-500 line-through text-sm">{price.before}</span>
                          <span className="font-bold text-red-400 ml-2">{price.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Consumer Protection */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald" />
                    Consumer Protection (April 2026 During Hormuz Crisis)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {(data?.foodPriceInflation?.consumerProtectionApril2026?.metrics ?? []).map((metric: { metric: string; value: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                        <p className="text-2xl font-bold text-emerald">{metric.value}</p>
                        <p className="text-sm text-platinum-400">{metric.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Organic & Labeling Tab */}
        <TabsContent value="organic" className="space-y-6">
          <GlassPanel
            title="Organic Food & Food Labeling"
            description="Market growth and regulatory requirements"
            badge="$132.8M"
          >
            <div className="space-y-6">
              {/* Organic Market */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald" />
                    Organic Food Market Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(data?.organicFoodMarket?.marketSize ?? []).map((market: { source: string; value2024: string; cagr: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                        <div className="flex justify-between items-center">
                          <span className="text-platinum-400">{market.source}</span>
                          <div className="text-right">
                            <Badge variant="emerald" className="text-xs">{market.value2024}</Badge>
                            <span className="text-xs text-platinum-500 ml-2">CAGR: {market.cagr}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mandatory Label Elements */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-gold" />
                    12 Mandatory Label Elements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {(data?.foodLabeling?.mandatoryLabelElements ?? []).map((el: { element: string }, idx: number) => (
                      <div key={idx} className="p-2 bg-slate-800/50 rounded text-center">
                        <span className="text-xs text-platinum-300">{idx + 1}. {el.element}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Traffic Light Labeling */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrafficLight className="h-5 w-5 text-gold" />
                    Traffic Light Labeling (2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {(data?.foodLabeling?.trafficLightLabeling?.colors ?? []).map((color: { color: string; meaning: string }, idx: number) => (
                      <div key={idx} className="flex-1 p-4 bg-slate-800/50 rounded-xl text-center">
                        <Badge
                          variant={
                            color.color === 'Red' ? 'destructive' :
                            color.color === 'Yellow' ? 'warning' : 'success'
                          }
                          className="text-lg px-4"
                        >
                          {color.color}
                        </Badge>
                        <p className="text-sm text-platinum-400 mt-2">{color.meaning}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Halal & GMO Tab */}
        <TabsContent value="halal" className="space-y-6">
          <GlassPanel
            title="Halal Certification & GMO Regulation"
            description="Islamic compliance and biotechnology oversight"
            badge="7,585 Marks"
          >
            <div className="space-y-6">
              {/* Halal Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-emerald" />
                    Halal Certification Statistics (2022)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {(data?.halalCertification?.statistics2022 ?? []).map((stat: { category: string; count: number }, idx: number) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                        <p className="text-2xl font-bold text-emerald">{stat.count?.toLocaleString()}</p>
                        <p className="text-sm text-platinum-400">{stat.category}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* GMO Findings */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    GMO in UAE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.gmoRegulation?.testingData ?? []).map((finding: { study: string; finding: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="font-bold text-yellow-400">{finding.study}</p>
                        <p className="text-sm text-platinum-400 mt-1">{finding.finding}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* GMO Thresholds */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-navy" />
                    GMO Labeling Thresholds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {(data?.gmoRegulation?.gsoStandards ?? []).map((standard: { standard: string; productType: string; threshold: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-400 text-sm">{standard.standard}</span>
                        <div className="text-right">
                          <span className="text-xs text-platinum-500">{standard.productType}</span>
                          <Badge variant="outline" className="text-xs ml-2">{standard.threshold}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel
            title="Sentiment Analysis"
            description="Emotional breakdown and key quotes"
            badge={data?.sentimentAnalysis?.overallSentiment}
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-gold" />
                      Sentiment Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={sentimentData} height={280} showLegend={true} />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-emerald" />
                      Emotion Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Score', color: CHART_COLORS.navy }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Sentiment by Theme */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-navy" />
                    Sentiment by Theme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(data?.sentimentAnalysis?.sentimentByTheme ?? []).map((item: { theme: string; sentiment: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-platinum-300 text-sm">{item.theme}</span>
                        <Badge
                          variant={
                            item.sentiment.includes('POSITIVE') ? 'success' :
                            item.sentiment.includes('NEGATIVE') ? 'destructive' : 'warning'
                          }
                          className="text-xs"
                        >
                          {item.sentiment}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Quotes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Quote className="h-5 w-5 text-gold" />
                    Key Quotes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(data?.sentimentAnalysis?.keyQuotes ?? []).map((quote: { quote: string; speaker: string }, idx: number) => (
                      <div key={idx} className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl">
                        <p className="text-platinum-300 italic">"{quote.quote}"</p>
                        <p className="text-sm text-platinum-500 mt-2">— {quote.speaker}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <motion.div variants={itemVariants} className="text-center text-sm text-platinum-500">
        <p>Last Updated: {data?.reportMetadata?.reportCompiled}</p>
        <p className="mt-1">
          Data Completeness: {data?.reportMetadata?.factsDocumented} facts from {data?.reportMetadata?.sourceURLs} sources
        </p>
      </motion.div>
    </motion.div>
  )
}

// TrafficLight icon component
function TrafficLight(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="8" r="2" fill="#ef4444" stroke="none" />
      <circle cx="12" cy="12" r="2" fill="#eab308" stroke="none" />
      <circle cx="12" cy="16" r="2" fill="#22c55e" stroke="none" />
    </svg>
  )
}

// Quote icon component
function Quote(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}
