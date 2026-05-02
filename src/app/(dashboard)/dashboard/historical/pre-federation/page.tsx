// @ts-nocheck
'use client'

import { usePreFederationData } from '@/lib/data-loader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  PieChart,
  BarChart,
  LineChart,
  AreaChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Shield,
  Star,
  Crown,
  Flag,
  Calendar,
  Handshake,
  Building,
  MapPin,
  Users,
  TrendingUp,
  AlertTriangle,
  Zap,
  BookOpen,
  Target,
  Award,
  Landmark,
  Anchor,
  Gem,
  UsersRound,
  Archive,
  ScrollText,
  LandmarkIcon,
  Scale,
  Crosshair,
  Eye,
  Mountain,
  Tent,
  Plane,
  Ship,
  DollarSign,
  Coins,
  Banknote,
  GemIcon,
  Flame,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// ============================================================================
// HEADER SECTION
// ============================================================================
const HeaderSection = ({ data }: { data: any }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex items-start justify-between"
  >
    <div>
      <Badge variant="gold" className="mb-2 font-rajdhani">H-ERA-1</Badge>
      <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">
        Pre-Federation Era
      </h1>
      <p className="mt-2 text-platinum-400 font-rajdhani max-w-2xl">
        {data.description}
      </p>
    </div>
    <div className="flex gap-3">
      <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10 font-rajdhani">
        <Archive className="h-4 w-4" />
        View Archive
      </Button>
      <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 font-rajdhani">
        <ScrollText className="h-4 w-4" />
        Historical Records
      </Button>
    </div>
  </motion.div>
)

// ============================================================================
// KEY METRICS SECTION
// ============================================================================
const MetricsSection = ({ data }: { data: any }) => {
  const criticalCount = data.keyEvents?.filter((e: any) => e.significance === 'critical').length || 0
  const majorCount = data.keyEvents?.filter((e: any) => e.significance === 'major').length || 0
  const treatiesCount = data.treaties?.length || 3
  const explorersCount = data.explorers?.length || 3

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-6"
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <MetricCard
            title="Critical Events"
            value={criticalCount}
            icon={<AlertTriangle className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <MetricCard
            title="Major Events"
            value={majorCount}
            icon={<Star className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <MetricCard
            title="Key Treaties"
            value={treatiesCount}
            icon={<ScrollText className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <MetricCard
            title="Western Explorers"
            value={explorersCount}
            icon={<MapPin className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <MetricCard
            title="Sheikhdoms"
            value="7"
            icon={<Building className="h-6 w-6" />}
            gradient="purple"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <MetricCard
            title="Data Points"
            value="350+"
            icon={<Target className="h-6 w-6" />}
            gradient="teal"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

// ============================================================================
// OVERVIEW TAB
// ============================================================================
const OverviewTab = ({ data }: { data: any }) => {
  const significanceData = [
    { name: 'Critical', value: data.keyEvents?.filter((e: any) => e.significance === 'critical').length || 0, color: CHART_COLORS.rose },
    { name: 'Major', value: data.keyEvents?.filter((e: any) => e.significance === 'major').length || 0, color: CHART_COLORS.gold },
    { name: 'Minor', value: data.keyEvents?.filter((e: any) => e.significance === 'minor').length || 0, color: CHART_COLORS.platinum },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Event Significance Chart */}
        <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
              <Target className="h-5 w-5 text-gold-700" />
              Event Significance Distribution
            </CardTitle>
            <CardDescription>Classification of pre-federation events</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart data={significanceData} height={250} showLegend={true} />
          </CardContent>
        </Card>

        {/* Relevance Matrix */}
        <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
              <Eye className="h-5 w-5 text-gold-700" />
              UAE Relevance Assessment
            </CardTitle>
            <CardDescription>Topic priority scores for Pre-Federation research</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[250px]">
              <div className="space-y-3">
                {data.relevanceMatrix?.slice(0, 8).map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
                  >
                    <span className="text-sm font-medium text-platinum-200 font-rajdhani">{item.topic}</span>
                    <Badge
                      variant={item.priority === 'CRITICAL' ? 'destructive' : item.priority === 'HIGH' ? 'warning' : 'outline'}
                      className="font-rajdhani"
                    >
                      {item.priority} ({item.score}/10)
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Historical Context */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-gold-700" />
            Era Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-platinum-300 leading-relaxed font-rajdhani">{data.description}</p>
        </CardContent>
      </Card>

      {/* Currency Evolution */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Coins className="h-5 w-5 text-gold-700" />
            Currency Evolution
          </CardTitle>
          <CardDescription>Currency changes in the Trucial States period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.currencyEvolution?.map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 shrink-0">
                  <Banknote className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gold-700 font-rajdhani">{item.period}</span>
                    <Badge variant="outline" className="text-xs font-rajdhani">{item.currency}</Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nation Building Timeline */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Landmark className="h-5 w-5 text-gold-700" />
            Nation Building Milestones
          </CardTitle>
          <CardDescription>Key milestones from Pre-Federation to Federation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.nationBuildingMilestones?.slice(0, 12).map((milestone: string, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2 rounded-lg bg-platinum-800/50 p-2 border border-[var(--glass-border)]"
              >
                <div className="h-2 w-2 rounded-full bg-gold mt-1.5 shrink-0" />
                <span className="text-sm text-platinum-300 font-rajdhani">{milestone}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ============================================================================
// TRUCIAL STATES TAB
// ============================================================================
const TrucialStatesTab = ({ data }: { data: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Sheikhdoms */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Building className="h-5 w-5 text-gold-700" />
            The Seven Sheikhdoms
          </CardTitle>
          <CardDescription>Emirates of the Trucial States (1820-1971)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.sheikhdoms?.map((sheikhdom: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-surface)] p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4 text-gold-700" />
                  <h4 className="font-bold text-platinum-100 font-rajdhani">{sheikhdom.emirate}</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-platinum-400 font-rajdhani">Duration: {sheikhdom.duration}</p>
                  <Badge variant="outline" className="text-xs font-rajdhani">{sheikhdom.entryMethod}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Treaties */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-gold-700" />
            Key Treaties
          </CardTitle>
          <CardDescription>Major treaties that shaped the region</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {data.treaties?.map((treaty: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-[var(--glass-border)] bg-platinum-800/50 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gold-700 font-rajdhani">{treaty.name}</h4>
                    <Badge variant="outline" className="font-rajdhani">{treaty.date}</Badge>
                  </div>
                  <p className="text-sm text-platinum-300 mb-2 font-rajdhani">{treaty.description}</p>
                  {treaty.articles && (
                    <div className="mt-2">
                      <span className="text-xs text-platinum-500 font-rajdhani">Articles: </span>
                      <span className="text-xs text-platinum-400 font-rajdhani">{treaty.articles}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Name Evolution */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Anchor className="h-5 w-5 text-gold-700" />
            From "Pirate Coast" to "Trucial Coast"
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-platinum-300 font-rajdhani">
              Before 1820, the region was known as the <span className="text-rose-400 font-bold">"Pirate Coast"</span> because privateers, smugglers, and soldiers of fortune would dart from hidden coves to attack merchant vessels passing through the Straits of Hormuz.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                <h5 className="text-sm font-bold text-rose-400 font-rajdhani mb-2">Before 1820</h5>
                <p className="text-lg font-bold text-platinum-100 font-rajdhani">"Pirate Coast"</p>
                <p className="text-xs text-platinum-400 font-rajdhani">Sahl al-Qirafa</p>
              </div>
              <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                <h5 className="text-sm font-bold text-emerald-400 font-rajdhani mb-2">After 1820</h5>
                <p className="text-lg font-bold text-platinum-100 font-rajdhani">"Trucial Coast"</p>
                <p className="text-xs text-platinum-400 font-rajdhani">Al-Imarat al-Mutasaliha</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* British Representatives */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Shield className="h-5 w-5 text-gold-700" />
            British Representatives
          </CardTitle>
          <CardDescription>Key British officials in the Trucial States</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.britishRepresentatives?.map((rep: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dijon/20 text-dijon shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-platinum-100 font-rajdhani">{rep.name}</p>
                  <p className="text-xs text-platinum-400 font-rajdhani">{rep.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ============================================================================
// PEARL DIVING TAB
// ============================================================================
const PearlDivingTab = ({ data }: { data: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Economic Importance */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Gem className="h-5 w-5 text-gold-700" />
            Pearl Diving Economy
          </CardTitle>
          <CardDescription>Economic significance of pearl diving</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)] text-center">
              <p className="text-3xl font-bold text-gold-700 font-rajdhani">{data.pearlingData?.peakBoats || '4,500'}</p>
              <p className="text-xs text-platinum-400 font-rajdhani">Pearling boats at peak</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)] text-center">
              <p className="text-3xl font-bold text-gold-700 font-rajdhani">{data.pearlingData?.peopleEmployed || '74,000+'}</p>
              <p className="text-xs text-platinum-400 font-rajdhani">People employed (1907)</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)] text-center">
              <p className="text-3xl font-bold text-gold-700 font-rajdhani">{data.pearlingData?.dubaiBoats1907 || '335'}</p>
              <p className="text-xs text-platinum-400 font-rajdhani">Boats out of Dubai (1907)</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)] text-center">
              <p className="text-3xl font-bold text-rose-400 font-rajdhani">{data.pearlingData?.boats1929 || '60'}</p>
              <p className="text-xs text-platinum-400 font-rajdhani">Boats remaining (1929)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Diving Equipment */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Anchor className="h-5 w-5 text-gold-700" />
            The Diving Process - Equipment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-3">
            {data.divingEquipment?.map((equipment: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-surface)] p-4"
              >
                <h4 className="text-lg font-bold text-gold-700 font-rajdhani mb-2">{equipment.name}</h4>
                <p className="text-sm text-platinum-300 font-rajdhani">{equipment.description}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Decline Factors */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-rose-400" />
            Decline Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.declineFactors?.map((factor: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
              >
                <div className="h-8 w-8 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                  <Flame className="h-4 w-4 text-rose-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-platinum-100 font-rajdhani">{factor.factor}</p>
                  <p className="text-xs text-platinum-400 font-rajdhani">{factor.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ============================================================================
// OIL DISCOVERY TAB
// ============================================================================
const OilDiscoveryTab = ({ data }: { data: any }) => {
  const productionData = data.oilTimeline?.map((item: any) => ({
    name: item.year,
    value: item.event.includes('discovery') || item.event.includes('on stream') ? 1 : 0,
    fullEvent: item.event
  })) || []

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Timeline Chart */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Flame className="h-5 w-5 text-gold-700" />
            Oil Discovery Timeline
          </CardTitle>
          <CardDescription>Key milestones in Gulf oil discovery</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {data.oilTimeline?.map((event: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 shrink-0 border border-gold-700/30">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="flex-1 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-surface)] p-4">
                    <span className="text-lg font-mono font-bold text-gold-700 font-rajdhani">{event.year}</span>
                    <h4 className="text-lg font-bold text-platinum-100 mt-1 font-rajdhani">{event.event}</h4>
                    <p className="text-sm text-platinum-400 mt-1 font-rajdhani">{event.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Concession Details */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-gold-700" />
            Concession Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)]">
              <p className="text-xs text-platinum-500 font-rajdhani">IPC Down Payment (1936)</p>
              <p className="text-xl font-bold text-gold-700 font-rajdhani">{data.concessionDetails?.ipcDownPayment || '7,000 rupees'}</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)]">
              <p className="text-xs text-platinum-500 font-rajdhani">Monthly Payment</p>
              <p className="text-xl font-bold text-gold-700 font-rajdhani">{data.concessionDetails?.monthlyPayment || '3,000 rupees'}</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)]">
              <p className="text-xs text-platinum-500 font-rajdhani">Concession Duration</p>
              <p className="text-xl font-bold text-gold-700 font-rajdhani">{data.concessionDetails?.concessionDuration || '75 years'}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Companies */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Building className="h-5 w-5 text-gold-700" />
            Organizations Involved
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-3">
              {data.companies?.map((company: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gold-700 font-rajdhani">{company.name}</span>
                    <Badge variant="outline" className="text-xs font-rajdhani">{company.acronym}</Badge>
                  </div>
                  <p className="text-xs text-platinum-400 font-rajdhani">{company.role}</p>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ============================================================================
// KEY FIGURES TAB
// ============================================================================
const KeyFiguresTab = ({ data }: { data: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Zayed bin Sultan */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Crown className="h-5 w-5 text-gold-700" />
            Zayed bin Sultan Al Nahyan
          </CardTitle>
          <CardDescription>Founder and First President of the UAE</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-rajdhani">Born</Badge>
                <span className="text-sm text-platinum-300 font-rajdhani">May 6, 1918 - Qasr Al Hosn, Abu Dhabi</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-rajdhani">Died</Badge>
                <span className="text-sm text-platinum-300 font-rajdhani">November 2, 2004 (aged 86)</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-rajdhani">Father</Badge>
                <span className="text-sm text-platinum-300 font-rajdhani">Sultan bin Zayed Al Nahyan (Ruler 1922-1926)</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-gold-700 font-rajdhani">Key Achievements</h4>
              {data.zayedAchievements?.slice(0, 5).map((achievement: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                  <span className="text-xs text-platinum-300 font-rajdhani">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rashid bin Saeed */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Crown className="h-5 w-5 text-gold-700" />
            Rashid bin Saeed Al Maktoum
          </CardTitle>
          <CardDescription>Vice President and Prime Minister of UAE</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-rajdhani">Born</Badge>
                <span className="text-sm text-platinum-300 font-rajdhani">June 11, 1912 - Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-rajdhani">Died</Badge>
                <span className="text-sm text-platinum-300 font-rajdhani">October 7, 1990 (aged 78)</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-rajdhani">Became Ruler</Badge>
                <span className="text-sm text-platinum-300 font-rajdhani">September 10, 1958</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-gold-700 font-rajdhani">Infrastructure Projects</h4>
              {data.rashidProjects?.slice(0, 5).map((project: any, idx: number) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span className="text-xs text-platinum-300 font-rajdhani">{project.project} ({project.date})</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Western Explorers */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gold-700" />
            Western Travelers and Accounts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 lg:grid-cols-3">
            {data.explorers?.map((explorer: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-surface)] p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Mountain className="h-4 w-4 text-gold-700" />
                  <h4 className="font-bold text-platinum-100 font-rajdhani">{explorer.name}</h4>
                </div>
                <p className="text-xs text-platinum-400 mb-2 font-rajdhani">{explorer.lifespan}</p>
                <p className="text-xs text-platinum-300 font-rajdhani">{explorer.background}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {explorer.books?.slice(0, 2).map((book: string, bIdx: number) => (
                    <Badge key={bIdx} variant="outline" className="text-xs font-rajdhani">{book}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ============================================================================
// BURAIMI DISPUTE TAB
// ============================================================================
const BuraimiTab = ({ data }: { data: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Geographic Data */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Crosshair className="h-5 w-5 text-gold-700" />
            Buraimi Dispute - Geographic Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)]">
              <p className="text-sm text-platinum-400 font-rajdhani">Total oasis villages</p>
              <p className="text-2xl font-bold text-gold-700 font-rajdhani">9</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)]">
              <p className="text-sm text-platinum-400 font-rajdhani">Villages owing to Sultan of Oman</p>
              <p className="text-2xl font-bold text-emerald-400 font-rajdhani">3</p>
              <p className="text-xs text-platinum-500 font-rajdhani">Buraimi, Hamasa, Saara</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)]">
              <p className="text-sm text-platinum-400 font-rajdhani">Villages owing to Abu Dhabi</p>
              <p className="text-2xl font-bold text-gold-700 font-rajdhani">6</p>
              <p className="text-xs text-platinum-500 font-rajdhani">Al Ain, Hili, Jimi, Murtiridh, Muwaiqi, Qattarah</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)]">
              <p className="text-sm text-platinum-400 font-rajdhani">Saudi bribe rejected by Zayed</p>
              <p className="text-2xl font-bold text-rose-400 font-rajdhani">~£30 million</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gold-700" />
            Dispute Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {data.buraimiTimeline?.map((event: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="flex-1 rounded-lg border border-[var(--glass-border)] bg-platinum-800/50 p-3">
                    <span className="text-sm font-mono font-bold text-gold-700 font-rajdhani">{event.year}</span>
                    <p className="text-sm text-platinum-300 mt-1 font-rajdhani">{event.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Resolution */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Scale className="h-5 w-5 text-gold-700" />
            Resolution - Treaty of 1974
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
              <p className="text-sm text-emerald-400 font-rajdhani">Agreement Signed</p>
              <p className="text-lg font-bold text-platinum-100 font-rajdhani">August 21, 1974</p>
            </div>
            <p className="text-sm text-platinum-300 font-rajdhani">
              {data.buraimiResolution || 'Boundary agreement between Kingdom of Saudi Arabia and United Arab Emirates on the Delimitation of Boundaries, including ownership of the giant Shaybah field.'}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ============================================================================
// BRITISH WITHDRAWAL TAB
// ============================================================================
const BritishWithdrawalTab = ({ data }: { data: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Statistics */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Globe className="h-5 w-5 text-gold-700" />
            British Empire Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)] text-center">
              <p className="text-xs text-platinum-500 font-rajdhani">British Empire Control (1918)</p>
              <p className="text-2xl font-bold text-gold-700 font-rajdhani">25%</p>
              <p className="text-xs text-platinum-400 font-rajdhani">of Earth's surface</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)] text-center">
              <p className="text-xs text-platinum-500 font-rajdhani">Foreigners Under British Rule (1945)</p>
              <p className="text-2xl font-bold text-gold-700 font-rajdhani">700M</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)] text-center">
              <p className="text-xs text-platinum-500 font-rajdhani">Foreigners Under British Rule (1965)</p>
              <p className="text-2xl font-bold text-rose-400 font-rajdhani">5M</p>
            </div>
            <div className="rounded-lg bg-platinum-800/50 p-4 border border-[var(--glass-border)] text-center">
              <p className="text-xs text-platinum-500 font-rajdhani">Troops to Withdraw from East of Suez</p>
              <p className="text-2xl font-bold text-rose-400 font-rajdhani">25,000</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Withdrawal Timeline */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gold-700" />
            Withdrawal Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-3">
              {data.withdrawalTimeline?.map((event: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
                >
                  <div className="h-8 w-8 rounded-full bg-gold-700/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-gold-700 font-rajdhani">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-mono text-gold-700 font-rajdhani">{event.date}</p>
                    <p className="text-sm text-platinum-300 font-rajdhani">{event.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Desert Meeting */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Tent className="h-5 w-5 text-gold-700" />
            The Desert Meeting - February 18, 1968
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-platinum-300 font-rajdhani">
              One month after Britain's announcement, Sheikh Zayed and Dubai's Sheikh Rashid met at a desert highland between Dubai and Abu Dhabi called <span className="text-gold-700 font-bold">Argoub Al Sedirah</span>. The two leaders "met in a tent erected in the desert and talked for hours." This handshake agreement established what became the UAE.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-gold-700/10 p-3 border border-gold-700/30 text-center">
                <MapPin className="h-5 w-5 text-gold-700 mx-auto mb-2" />
                <p className="text-xs text-platinum-400 font-rajdhani">Location</p>
                <p className="text-sm font-bold text-platinum-100 font-rajdhani">Argoub Al Sedirah</p>
              </div>
              <div className="rounded-lg bg-gold-700/10 p-3 border border-gold-700/30 text-center">
                <Calendar className="h-5 w-5 text-gold-700 mx-auto mb-2" />
                <p className="text-xs text-platinum-400 font-rajdhani">Date</p>
                <p className="text-sm font-bold text-platinum-100 font-rajdhani">February 18, 1968</p>
              </div>
              <div className="rounded-lg bg-gold-700/10 p-3 border border-gold-700/30 text-center">
                <Handshake className="h-5 w-5 text-gold-700 mx-auto mb-2" />
                <p className="text-xs text-platinum-400 font-rajdhani">Result</p>
                <p className="text-sm font-bold text-platinum-100 font-rajdhani">Handshake Agreement</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proposed Nine-Emirate Federation */}
      <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
        <CardHeader>
          <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
            <Building className="h-5 w-5 text-gold-700" />
            Proposed Nine-Emirate Federation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-platinum-300 mb-4 font-rajdhani">
            The proposed Federation of Arab Emirates would have included nine members:
          </p>
          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Fujairah', 'Umm Al Quwain', 'Ras Al Khaimah', 'Bahrain', 'Qatar'].map((emirate, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-lg bg-platinum-800/50 p-2 border border-[var(--glass-border)] text-center"
              >
                <span className="text-sm font-rajdhani text-platinum-200">{emirate}</span>
                {(emirate === 'Bahrain' || emirate === 'Qatar') && (
                  <Badge variant="destructive" className="block mt-1 text-xs font-rajdhani">Withdrew</Badge>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// ============================================================================
// TIMELINE TAB
// ============================================================================
const TimelineTab = ({ data }: { data: any }) => {
  const getSignificanceBadge = (significance?: string) => {
    switch (significance) {
      case 'critical':
        return <Badge variant="destructive" className="text-xs font-rajdhani">Critical</Badge>
      case 'major':
        return <Badge variant="warning" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50 font-rajdhani">Major</Badge>
      default:
        return <Badge variant="outline" className="text-xs font-rajdhani">Minor</Badge>
    }
  }

  const sortedEvents = [...(data.keyEvents || [])].sort((a, b) => {
    const yearA = parseInt(a.date.replace(/\D/g, '')) || 0
    const yearB = parseInt(b.date.replace(/\D/g, '')) || 0
    return yearA - yearB
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <GlassPanel title="Historical Timeline" description="Key events from Pre-Federation Era (1820-1971)">
        <ScrollArea className="h-[700px]">
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {sortedEvents.map((event: any, idx: number) => (
                <motion.div
                  key={`${event.date}-${idx}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{ scale: 1.02, borderColor: 'var(--gold)' }}
                  className="flex items-start gap-4 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-surface)] p-4 cursor-pointer"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 shrink-0 border border-gold-700/30">
                    <Calendar className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-mono font-bold text-gold-700 font-rajdhani">{event.date}</span>
                      {getSignificanceBadge(event.significance)}
                    </div>
                    <h3 className="text-xl font-bold text-platinum-100 mb-2 font-rajdhani">{event.title}</h3>
                    <p className="text-platinum-400 leading-relaxed font-rajdhani">{event.description}</p>
                    {event.entities && event.entities.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {event.entities.map((entity: string, eIdx: number) => (
                          <Badge key={eIdx} variant="outline" className="text-xs border-gold-700/30 text-gold-700 font-rajdhani">
                            {entity}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {event.outcome && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30"
                      >
                        <span className="text-xs text-emerald-400 font-medium font-rajdhani">Outcome: </span>
                        <span className="text-xs text-platinum-300 font-rajdhani">{event.outcome}</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </GlassPanel>
    </motion.div>
  )
}

// ============================================================================
// SOURCES TAB
// ============================================================================
const SourcesTab = ({ data }: { data: any }) => {
  const tierColors: Record<number, string> = {
    0: 'bg-emerald-500',
    1: 'bg-navy-500',
    2: 'bg-amber-500',
    3: 'bg-orange-500',
  }
  const tierLabels: Record<number, string> = {
    0: 'TIER-0 (Primary)',
    1: 'TIER-1 (Authoritative)',
    2: 'TIER-2 (Established)',
    3: 'TIER-3 (Secondary)',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <GlassPanel title="Source Credibility" description="Research sources for Pre-Federation data">
        <div className="space-y-6">
          {/* Credibility Score */}
          <div className="grid gap-6 sm:grid-cols-3">
            <MetricCard
              title="Credibility Score"
              value={`${data.credibility?.score || 85}%`}
              icon={<Shield className="h-6 w-6" />}
              gradient="emerald"
              status="success"
            />
            <MetricCard
              title="Source Count"
              value={data.sources?.length || 24}
              icon={<BookOpen className="h-6 w-6" />}
              gradient="denim"
            />
            <MetricCard
              title="Last Verified"
              value={data.lastUpdated || '2026-04-28'}
              icon={<Calendar className="h-6 w-6" />}
              gradient="gold"
            />
          </div>

          {/* Tier Distribution */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">Source Tier Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-4">
                {[0, 1, 2, 3].map((tier) => {
                  const count = data.sources?.filter((s: any) => s.tier === tier).length || 0
                  return (
                    <div key={tier} className="rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)] text-center">
                      <div className={`h-3 w-3 rounded-full mx-auto mb-2 ${tierColors[tier]}`} />
                      <p className="text-lg font-bold text-platinum-100 font-rajdhani">{count}</p>
                      <p className="text-xs text-platinum-400 font-rajdhani">{tierLabels[tier]}</p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Sources List */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-gold-700" />
                Research Sources ({data.sources?.length || 0})
              </CardTitle>
              <CardDescription>WebFetch content from authoritative sources</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {data.sources?.map((source: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
                    >
                      <div className={`h-3 w-3 rounded-full mt-1.5 shrink-0 ${tierColors[source.tier] || 'bg-platinum-500'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gold-700 font-rajdhani">{source.name}</span>
                          <Badge variant="outline" className="text-xs font-rajdhani">{tierLabels[source.tier] || `TIER-${source.tier}`}</Badge>
                        </div>
                        <p className="text-xs text-platinum-400 font-rajdhani">Date: {source.date}</p>
                        {source.url && (
                          <p className="text-xs text-navy-400 mt-1 font-rajdhani truncate">{source.url}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function PreFederationPage() {
  const { data } = usePreFederationData()

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-platinum-400 font-rajdhani text-lg">Loading Pre-Federation Era data...</div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 p-8"
    >
      {/* Header */}
      <HeaderSection data={data} />

      {/* Key Metrics */}
      <MetricsSection data={data} />

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview" className="font-rajdhani">Overview</TabsTrigger>
          <TabsTrigger value="trucial" className="font-rajdhani">Trucial States</TabsTrigger>
          <TabsTrigger value="pearl" className="font-rajdhani">Pearl Diving</TabsTrigger>
          <TabsTrigger value="oil" className="font-rajdhani">Oil Discovery</TabsTrigger>
          <TabsTrigger value="figures" className="font-rajdhani">Key Figures</TabsTrigger>
          <TabsTrigger value="buraimi" className="font-rajdhani">Buraimi Dispute</TabsTrigger>
          <TabsTrigger value="withdrawal" className="font-rajdhani">British Withdrawal</TabsTrigger>
          <TabsTrigger value="timeline" className="font-rajdhani">Timeline</TabsTrigger>
          <TabsTrigger value="sources" className="font-rajdhani">Sources</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="overview">
            <OverviewTab data={data} />
          </TabsContent>
          <TabsContent value="trucial">
            <TrucialStatesTab data={data} />
          </TabsContent>
          <TabsContent value="pearl">
            <PearlDivingTab data={data} />
          </TabsContent>
          <TabsContent value="oil">
            <OilDiscoveryTab data={data} />
          </TabsContent>
          <TabsContent value="figures">
            <KeyFiguresTab data={data} />
          </TabsContent>
          <TabsContent value="buraimi">
            <BuraimiTab data={data} />
          </TabsContent>
          <TabsContent value="withdrawal">
            <BritishWithdrawalTab data={data} />
          </TabsContent>
          <TabsContent value="timeline">
            <TimelineTab data={data} />
          </TabsContent>
          <TabsContent value="sources">
            <SourcesTab data={data} />
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}
