'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { AreaChart, BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Shield,
  Heart,
  Lightbulb,
  TrendingUp,
  Users,
  Crown,
  Globe,
  Award,
  Zap,
  Target,
  DollarSign,
  Building2,
  Flag,
} from 'lucide-react'
import {
  safetyKPIData,
  humanitarianAidKPIData,
  innovationKPIData,
  economicKPIData,
  demographicsKPIData,
  leadershipKPIData,
  safetyMetrics,
  humanitarianMetrics,
  innovationMetrics,
  economicMetrics,
  demographicsMetrics,
  leadershipMetrics,
} from '@/lib/data-loader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const KPI_ICONS = {
  safety: Shield,
  humanitarian: Heart,
  innovation: Lightbulb,
  economic: TrendingUp,
  demographics: Users,
  leadership: Crown,
}

const KPI_GRADIENTS = {
  safety: 'emerald',
  humanitarian: 'rose',
  innovation: 'gold',
  economic: 'denim',
  demographics: 'purple',
  leadership: 'orange',
} as const

const KPI_COLORS = {
  safety: CHART_COLORS.emerald,
  humanitarian: CHART_COLORS.rose,
  innovation: CHART_COLORS.gold,
  economic: CHART_COLORS.denim,
  demographics: CHART_COLORS.purple,
  leadership: CHART_COLORS.orange,
}

export function KPISection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants}>
        <Badge variant="outline" className="mb-2 border-emerald-500/50 text-emerald-400">
          KEY PERFORMANCE INDICATORS
        </Badge>
        <h2 className="text-2xl font-bold font-rajdhani text-platinum-100">
          Six Pillars of UAE Positive Sentiment
        </h2>
        <p className="text-sm text-platinum-400 mt-1">
          Comprehensive KPI dashboards extracted from 14 atomic queries and 12 WebFetch retrievals
        </p>
      </motion.div>

      {/* Top Metric Cards */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <MetricCard
          title="Safety Index"
          value="86.0"
          previousValue={82}
          icon={<Shield className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Humanitarian Aid"
          value="$1.46B"
          previousValue={1.2}
          icon={<Heart className="h-5 w-5" />}
          gradient="rose"
          status="success"
        />
        <MetricCard
          title="AI Government"
          value="2027"
          icon={<Zap className="h-5 w-5" />}
          gradient="gold"
        />
        <MetricCard
          title="Nationalities"
          value="200+"
          icon={<Users className="h-5 w-5" />}
          gradient="purple"
          status="success"
        />
        <MetricCard
          title="Global Rankings"
          value="220+"
          icon={<Award className="h-5 w-5" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Entrepreneurship"
          value="#1"
          previousValue={2}
          icon={<Target className="h-5 w-5" />}
          gradient="orange"
          status="success"
        />
      </motion.div>

      {/* Safety KPIs */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Safety & Security KPIs"
          description="Numbeo Safety Index 2026 - World's Safest Country"
          badge="CRITICAL"
          className="border-emerald-500/30"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-emerald-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-emerald-400">Safety Index Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { country: 'UAE', score: 86.0, fill: CHART_COLORS.emerald },
                    { country: 'Japan', score: 77.4, fill: CHART_COLORS.denim },
                    { country: 'UK', score: 51.7, fill: CHART_COLORS.platinum },
                    { country: 'US', score: 50.8, fill: CHART_COLORS.rose },
                  ]}
                  bars={[{ dataKey: 'score', name: 'Safety Score', color: CHART_COLORS.emerald }]}
                  xAxisKey="country"
                  height={200}
                  showGrid={false}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-emerald-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-emerald-400">Safety Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-400">UAE Safety Index (Numbeo 2026)</span>
                    <span className="text-emerald-400 font-bold">86.0 / 100</span>
                  </div>
                  <Progress value={86} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-400">Perception of Security (2025)</span>
                    <span className="text-emerald-400 font-bold">94.8 / 100</span>
                  </div>
                  <Progress value={94.8} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-400">Abu Dhabi Safety Streak</span>
                    <span className="text-emerald-400 font-bold">9 Years #1</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-400">Fragile States Index (Rank)</span>
                    <span className="text-emerald-400 font-bold">156 / 179</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-card border-emerald-500/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Shield className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">#1</p>
                  <p className="text-xs text-platinum-500">Worldwide Safety</p>
                </div>
              </div>
            </Card>
            <Card className="glass-card border-emerald-500/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Globe className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">9th</p>
                  <p className="text-xs text-platinum-500">Consecutive Year</p>
                </div>
              </div>
            </Card>
            <Card className="glass-card border-emerald-500/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Target className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">94.8</p>
                  <p className="text-xs text-platinum-500">Perception Score</p>
                </div>
              </div>
            </Card>
            <Card className="glass-card border-emerald-500/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Award className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">156</p>
                  <p className="text-xs text-platinum-500">Fragile States Rank</p>
                </div>
              </div>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Humanitarian Aid KPIs */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Humanitarian Aid KPIs"
          description="UAE ranks 3rd globally for humanitarian assistance (2025)"
          badge="CRITICAL"
          className="border-rose-500/30"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card border-rose-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-rose-400">Global Ranking</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'UAE ($1.46B)', value: 7.2, color: CHART_COLORS.rose },
                    { name: 'Other Nations', value: 92.8, color: CHART_COLORS.platinum },
                  ]}
                  height={180}
                  showLegend={false}
                />
                <div className="text-center mt-2">
                  <p className="text-3xl font-bold text-rose-400">#3</p>
                  <p className="text-xs text-platinum-500">Globally</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-rose-500/30 lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-rose-400">Aid Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-sm text-platinum-300">2025 Humanitarian Aid</span>
                  <span className="text-lg font-bold text-rose-400">$1.46 Billion</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-sm text-platinum-300">Share of Global Aid</span>
                  <span className="text-lg font-bold text-rose-400">7.2%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-sm text-platinum-300">Cumulative Since 1971</span>
                  <span className="text-lg font-bold text-rose-400">Dh360 Billion</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <span className="text-sm text-platinum-300">Lives Impacted</span>
                  <span className="text-lg font-bold text-rose-400">1 Billion+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Innovation KPIs */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Innovation & Technology KPIs"
          description="UAE leads Arab world in innovation, aims for AI government by 2027"
          badge="CRITICAL"
          className="border-gold-500/30"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-gold-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gold-400">Rankings Achievement</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { rank: 'Global Innovation (Arab)', value: 1, color: CHART_COLORS.gold },
                    { rank: 'INSEAD (Middle East)', value: 1, color: CHART_COLORS.gold },
                    { rank: 'Entrepreneurship', value: 1, color: CHART_COLORS.gold },
                    { rank: 'IMD Talent 2025', value: 9, color: CHART_COLORS.denim },
                    { rank: 'Smart City (Global)', value: 4, color: CHART_COLORS.denim },
                  ]}
                  bars={[{ dataKey: 'value', name: 'Rank', color: CHART_COLORS.gold }]}
                  xAxisKey="rank"
                  height={220}
                  showGrid={false}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-gold-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gold-400">Investment & Targets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/20">
                  <p className="text-xs text-platinum-400 mb-1">Innovation Investment Budget</p>
                  <p className="text-2xl font-bold text-gold-400">AED 300+ Billion</p>
                  <p className="text-xs text-platinum-500">100 Science, Technology, Innovation Initiatives</p>
                </div>
                <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/20">
                  <p className="text-xs text-platinum-400 mb-1">AI Government Target</p>
                  <p className="text-2xl font-bold text-gold-400">2027</p>
                  <p className="text-xs text-platinum-500">World's First Fully AI-Powered Government</p>
                </div>
                <div className="p-4 rounded-lg bg-gold-500/10 border border-gold-500/20">
                  <p className="text-xs text-platinum-400 mb-1">Creative Economy GDP Target</p>
                  <p className="text-2xl font-bold text-gold-400">5% by 2031</p>
                  <p className="text-xs text-platinum-500">From National Strategy</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Economic KPIs */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Economic & Talent KPIs"
          description="#1 in entrepreneurship for 5 consecutive years, IMD Talent Ranking #9"
          badge="HIGH"
          className="border-deni-500/30"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-deni-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-deni-400">Key Economic Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-deni-500/10 border border-deni-500/20 text-center">
                    <p className="text-xl font-bold text-deni-400">#1</p>
                    <p className="text-xs text-platinum-500">Entrepreneurship</p>
                  </div>
                  <div className="p-3 rounded-lg bg-deni-500/10 border border-deni-500/20 text-center">
                    <p className="text-xl font-bold text-deni-400">#9</p>
                    <p className="text-xs text-platinum-500">IMD Talent</p>
                  </div>
                  <div className="p-3 rounded-lg bg-deni-500/10 border border-deni-500/20 text-center">
                    <p className="text-xl font-bold text-deni-400">#4</p>
                    <p className="text-xs text-platinum-500">Smart City</p>
                  </div>
                  <div className="p-3 rounded-lg bg-deni-500/10 border border-deni-500/20 text-center">
                    <p className="text-xl font-bold text-deni-400">220+</p>
                    <p className="text-xs text-platinum-500">Best in World</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-400">Oil Dependency (Dubai)</span>
                    <span className="text-deni-400 font-bold">&lt;5% GDP</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-platinum-400">Dubai GDP Growth 2023</span>
                    <span className="text-deni-400 font-bold">3.3%</span>
                  </div>
                  <Progress value={33} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-deni-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-deni-400">Dubai 2025 Projections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-deni-500/10 border border-deni-500/20">
                  <span className="text-sm text-platinum-300">Population</span>
                  <span className="font-bold text-deni-400">~4 Million</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-deni-500/10 border border-deni-500/20">
                  <span className="text-sm text-platinum-300">Expatriate Population</span>
                  <span className="font-bold text-deni-400">80%+</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-deni-500/10 border border-deni-500/20">
                  <span className="text-sm text-platinum-300">Property Sales 2023</span>
                  <span className="font-bold text-deni-400">Dh370 Billion</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-deni-500/10 border border-deni-500/20">
                  <span className="text-sm text-platinum-300">Expected Visitors 2025</span>
                  <span className="font-bold text-deni-400">5 Million</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Demographics KPIs */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Demographics & Diversity KPIs"
          description="200+ nationalities living in harmony - core national identity and economic model"
          badge="CRITICAL"
          className="border-purple-500/30"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-purple-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-400">Real Estate Buyers (2025)</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={[
                    { nationality: 'India', share: 22, fill: CHART_COLORS.purple },
                    { nationality: 'UK', share: 17, fill: CHART_COLORS.denim },
                    { nationality: 'China', share: 14, fill: CHART_COLORS.rose },
                    { nationality: 'Saudi', share: 11, fill: CHART_COLORS.gold },
                    { nationality: 'Russia', share: 9, fill: CHART_COLORS.emerald },
                  ]}
                  bars={[{ dataKey: 'share', name: 'Market Share %', color: CHART_COLORS.purple }]}
                  xAxisKey="nationality"
                  height={200}
                  showGrid={false}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-400">Nationalities Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center">
                  <p className="text-4xl font-bold text-purple-400">200+</p>
                  <p className="text-sm text-platinum-500">Nationalities in UAE</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center">
                    <p className="text-xl font-bold text-purple-400">80%+</p>
                    <p className="text-xs text-platinum-500">Expatriates</p>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center">
                    <p className="text-xl font-bold text-purple-400">204</p>
                    <p className="text-xs text-platinum-500">Often Quoted</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Leadership KPIs */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Leadership Achievement KPIs"
          description="Visionary initiatives: Ghadan 21, Masdar, Barakah Nuclear, Net Zero 2050"
          badge="HIGH"
          className="border-orange-500/30"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-card border-orange-500/30 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                  <Building2 className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-platinum-400">Ghadan 21 Program</p>
                  <p className="text-xl font-bold text-orange-400">AED 50B</p>
                </div>
              </div>
              <p className="text-xs text-platinum-500">2018 accelerator programme driving economic transformation</p>
            </Card>

            <Card className="glass-card border-orange-500/30 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                  <Globe className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-platinum-400">Masdar Investment</p>
                  <p className="text-xl font-bold text-orange-400">$15B</p>
                </div>
              </div>
              <p className="text-xs text-platinum-500">2008 renewable energy investment</p>
            </Card>

            <Card className="glass-card border-orange-500/30 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                  <Zap className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-platinum-400">Barakah Nuclear</p>
                  <p className="text-xl font-bold text-orange-400">FIRST</p>
                </div>
              </div>
              <p className="text-xs text-platinum-500">First nuclear plant in the Arab world</p>
            </Card>

            <Card className="glass-card border-orange-500/30 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                  <Flag className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-platinum-400">Net Zero Target</p>
                  <p className="text-xl font-bold text-orange-400">2050</p>
                </div>
              </div>
              <p className="text-xs text-platinum-500">National sustainability strategy</p>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
