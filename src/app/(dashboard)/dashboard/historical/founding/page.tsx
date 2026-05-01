// @ts-nocheck
'use client'

import { useFederationEarlyData } from '@/lib/data-loader'
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
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// ============================================================================
// ENHANCEMENT CYCLE A: HEADER SECTION WITH RAJADHANI FONT & GLASS SURFACE
// ============================================================================
const HeaderSection = ({ data }: { data: any }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex items-start justify-between"
  >
    <div>
      <Badge variant="gold" className="mb-2 font-rajdhani">H-ERA-2</Badge>
      <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold">
        Federation & Early Years
      </h1>
      <p className="mt-2 text-platinum-400 font-rajdhani">
        {data.description}
      </p>
    </div>
    <div className="flex gap-3">
      <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10 font-rajdhani">
        <Flag className="h-4 w-4" />
        View Archive
      </Button>
      <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 font-rajdhani">
        <Handshake className="h-4 w-4" />
        Founding Story
      </Button>
    </div>
  </motion.div>
)

// ============================================================================
// ENHANCEMENT CYCLE B: KEY METRICS WITH ANIMATED METRICCARDS
// ============================================================================
const MetricsSection = ({ data, events }: { data: any; events: any[] }) => {
  const criticalCount = events.filter(e => e.significance === 'critical').length
  const majorCount = events.filter(e => e.significance === 'major').length
  const jebelAliEvents = events.filter(e => e.title.toLowerCase().includes('jebel') || e.title.toLowerCase().includes('jafza')).length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
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
            title="Emirates United"
            value="7"
            icon={<Globe className="h-6 w-6" />}
            gradient="gold"
            status="success"
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
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <MetricCard
            title="Major Events"
            value={majorCount}
            icon={<Star className="h-6 w-6" />}
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
            title="Jebel Ali & JAFZA"
            value={jebelAliEvents}
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE C: OVERVIEW TAB WITH CHARTS AND DATA
// ============================================================================
const OverviewTab = ({ data, events }: { data: any; events: any[] }) => {
  const significanceData = [
    { name: 'Critical', value: events.filter(e => e.significance === 'critical').length, color: CHART_COLORS.rose },
    { name: 'Major', value: events.filter(e => e.significance === 'major').length, color: CHART_COLORS.gold },
    { name: 'Minor', value: events.filter(e => e.significance === 'minor').length, color: CHART_COLORS.platinum },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Era Description Card */}
      <GlassPanel title="Era Overview" description="Comprehensive analysis of Federation & Early Years (1971-1990)">
        <div className="space-y-4">
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-gold" />
                Historical Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-platinum-300 leading-relaxed font-rajdhani">{data.description}</p>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Event Significance Pie Chart */}
            <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                  <Target className="h-5 w-5 text-gold" />
                  Event Significance Distribution
                </CardTitle>
                <CardDescription>Classification of federation era events</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart data={significanceData} height={250} showLegend={true} />
              </CardContent>
            </Card>

            {/* Policy Outcomes */}
            <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold" />
                  Policy Outcomes
                </CardTitle>
                <CardDescription>Major policies from the founding era</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-3">
                    {data.policyOutcomes?.map((policy: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gold font-rajdhani">{policy.policy}</span>
                          <Badge variant="outline" className="text-xs font-rajdhani">{policy.year}</Badge>
                        </div>
                        <p className="text-xs text-platinum-400">{policy.impact}</p>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Nation Building Milestones */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                <Landmark className="h-5 w-5 text-gold" />
                Nation Building Milestones
              </CardTitle>
              <CardDescription>Key achievements during the founding era</CardDescription>
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
        </div>
      </GlassPanel>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE D: TIMELINE TAB WITH ANIMATED EVENTS
// ============================================================================
const TimelineTab = ({ events }: { events: any[] }) => {
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

  const sortedEvents = [...events].sort((a, b) => {
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
      <GlassPanel title="Historical Timeline" description="Key events from Federation & Early Years (1971-1990)">
        <ScrollArea className="h-[700px]">
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {sortedEvents.map((event: any, idx: number) => (
                <motion.div
                  key={`${event.date}-${idx}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02, borderColor: 'var(--gold)' }}
                  className="flex items-start gap-4 rounded-lg border border-[var(--glass-border)] bg-[var(--glass-surface)] p-4 cursor-pointer"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold shrink-0 border border-gold/30">
                    <Calendar className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-mono font-bold text-gold font-rajdhani">{event.date}</span>
                      {getSignificanceBadge(event.significance)}
                    </div>
                    <h3 className="text-xl font-bold text-platinum-100 mb-2 font-rajdhani">{event.title}</h3>
                    <p className="text-platinum-400 leading-relaxed font-rajdhani">{event.description}</p>
                    {event.entities && event.entities.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {event.entities.map((entity: string, eIdx: number) => (
                          <Badge key={eIdx} variant="outline" className="text-xs border-gold/30 text-gold font-rajdhani">
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
// ENHANCEMENT CYCLE E: MILESTONES & FIGURES TABS
// ============================================================================
const MilestonesTab = ({ data }: { data: any }) => {
  const criticalMilestones = [
    { date: 'December 2, 1971', event: 'UAE Federation Formation', detail: 'Six emirates declared independence and formed the UAE at Union House, Dubai. Sheikh Zayed elected first President.', icon: <Globe className="h-6 w-6" /> },
    { date: 'December 2, 1971', event: 'Flag Design & National Symbols', detail: '19-year-old Abdullah Mohammed Al Maainah designed the UAE flag. Colors: Green (vegetation), White (peace), Black (defeat of enemies), Red (sacrifices).', icon: <Flag className="h-6 w-6" /> },
    { date: 'December 9, 1971', event: 'UN Membership', detail: 'UAE became the 132nd UN member state. Security Council and General Assembly both approved membership.', icon: <Globe className="h-6 w-6" /> },
    { date: 'February 10, 1972', event: 'Ras Al Khaimah Joins Federation', detail: 'Seventh emirate joins completing the seven-emirate federation.', icon: <MapPin className="h-6 w-6" /> },
    { date: 'July 18, 1971', event: 'UAE Constitution Adopted', detail: 'Constitution signed by six emirates in Dubai. Author: Adi Bitar. Structure: 10 parts, 152 Articles.', icon: <BookOpen className="h-6 w-6" /> },
    { date: 'May 25, 1981', event: 'GCC Founded', detail: 'Gulf Cooperation Council founded in Abu Dhabi by Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and UAE.', icon: <Shield className="h-6 w-6" /> },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <GlassPanel title="Founding Milestones" description="Critical achievements in UAE's birth">
        <div className="space-y-4">
          {criticalMilestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-card border-gold/30">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-navy-950 font-bold text-xl shrink-0 border-2 border-gold/50">
                      {milestone.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-mono text-gold font-rajdhani">{milestone.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-platinum-100 mb-1 font-rajdhani">{milestone.event}</h3>
                      <p className="text-sm text-platinum-400 font-rajdhani">{milestone.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Entity Involvement */}
        <Card className="glass-card mt-6">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              Entity Involvement ({data.entityInvolvement?.length || 0} entities)
            </CardTitle>
            <CardDescription>Key persons, locations, and organizations from the era</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="flex flex-wrap gap-2">
                {data.entityInvolvement?.map((entity: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.02 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="outline" className="border-gold/50 text-gold font-rajdhani">{entity}</Badge>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </GlassPanel>
    </motion.div>
  )
}

const FiguresTab = ({ data }: { data: any }) => {
  const foundingFathers = [
    { name: 'Sheikh Zayed bin Sultan Al Nahyan', role: 'First President (1971-2004)', emirate: 'Abu Dhabi', detail: 'Born May 6, 1918. Served 33 years as President. Planted 12 million trees. Adopted 1,000+ orphans.', icon: <Crown className="h-12 w-12" /> },
    { name: 'Sheikh Rashid bin Saeed Al Maktoum', role: 'Vice President & Prime Minister', emirate: 'Dubai', detail: 'First visionary of modern UAE. Union accord with Sheikh Zayed February 18, 1968.', icon: <Crown className="h-12 w-12" /> },
    { name: 'Sheikh Saqr bin Mohammed Al Qasimi', role: 'Ruler of Ras Al Khaimah (1948-2010)', emirate: 'Ras Al Khaimah', detail: 'Last to join federation. Quote: "Nations are not sold by money... If they are taken, they are taken by blood."', icon: <Crown className="h-12 w-12" /> },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <GlassPanel title="Founding Fathers" description="Key figures in the UAE's establishment">
        <div className="grid gap-6 lg:grid-cols-3">
          {foundingFathers.map((figure, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, borderColor: 'var(--gold)' }}
              className="rounded-lg border border-[var(--glass-border)] bg-[var(--glass-surface)] p-6"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-gold text-navy-950 mb-4 border-2 border-gold/50"
                >
                  {figure.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-platinum-100 mb-1 font-rajdhani">{figure.name}</h3>
                <Badge variant="outline" className="mb-2 border-gold/50 text-gold font-rajdhani">{figure.role}</Badge>
                <div className="flex items-center gap-1 text-sm text-platinum-400 mb-2">
                  <MapPin className="h-4 w-4" />
                  {figure.emirate}
                </div>
                <p className="text-xs text-platinum-400 font-rajdhani">{figure.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Key Figures */}
        <Card className="glass-card mt-6">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              Additional Key Figures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: 'Sheikh Maktoum bin Rashid', role: 'First Prime Minister', emirate: 'Dubai' },
                { name: 'Sheikh Sultan bin Muhammad Al Qasimi', role: 'Ruler of Sharjah', emirate: 'Sharjah' },
                { name: 'King Faisal', role: 'King of Saudi Arabia', emirate: 'Saudi Arabia' },
                { name: 'Sultan Qaboos bin Said', role: 'Sultan of Oman', emirate: 'Oman' },
                { name: 'Adnan Pachachi', role: 'First UAE UN Delegation Head', emirate: 'UAE' },
                { name: 'Abdulla Y. Beshara', role: 'First GCC Secretary General', emirate: 'Kuwait' },
              ].map((figure, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-2 rounded-lg bg-platinum-800/50 p-2 border border-[var(--glass-border)]"
                >
                  <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <Users className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-platinum-200 font-rajdhani">{figure.name}</p>
                    <p className="text-xs text-platinum-400 font-rajdhani">{figure.role} - {figure.emirate}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </GlassPanel>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE F: SOURCES & CREDIBILITY TAB
// ============================================================================
const SourcesTab = ({ data }: { data: any }) => {
  const tierColors: Record<number, string> = {
    0: 'bg-emerald-500',
    1: 'bg-navy-500',
    2: 'bg-amber-500',
  }
  const tierLabels: Record<number, string> = {
    0: 'TIER-0 (Official)',
    1: 'TIER-1 (Authoritative)',
    2: 'TIER-2 (Established)',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <GlassPanel title="Source Credibility" description="Research sources for Federation & Early Years data">
        <div className="space-y-6">
          {/* Credibility Score */}
          <div className="grid gap-6 sm:grid-cols-3">
            <MetricCard
              title="Credibility Score"
              value={`${data.credibility?.score || 0}%`}
              icon={<Shield className="h-6 w-6" />}
              gradient="emerald"
              status="success"
            />
            <MetricCard
              title="Source Count"
              value={data.sources?.length || 0}
              icon={<BookOpen className="h-6 w-6" />}
              gradient="denim"
            />
            <MetricCard
              title="Last Verified"
              value={data.credibility?.lastVerified || 'N/A'}
              icon={<Calendar className="h-6 w-6" />}
              gradient="gold"
            />
          </div>

          {/* Sources List */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-gold" />
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
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3 border border-[var(--glass-border)]"
                    >
                      <div className={`h-3 w-3 rounded-full mt-1.5 shrink-0 ${tierColors[source.tier] || 'bg-platinum-500'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gold font-rajdhani">{source.name}</span>
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
export default function FoundingPage() {
  const { data } = useFederationEarlyData()

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-platinum-400 font-rajdhani text-lg">Loading Federation Era data...</div>
      </motion.div>
    )
  }

  // Get all events for comprehensive timeline
  const allEvents = data.keyEvents || []

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
      <MetricsSection data={data} events={allEvents} />

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview" className="font-rajdhani">Overview</TabsTrigger>
          <TabsTrigger value="timeline" className="font-rajdhani">Timeline</TabsTrigger>
          <TabsTrigger value="milestones" className="font-rajdhani">Milestones</TabsTrigger>
          <TabsTrigger value="figures" className="font-rajdhani">Key Figures</TabsTrigger>
          <TabsTrigger value="sources" className="font-rajdhani">Sources</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="overview">
            <OverviewTab data={data} events={allEvents} />
          </TabsContent>
          <TabsContent value="timeline">
            <TimelineTab events={allEvents} />
          </TabsContent>
          <TabsContent value="milestones">
            <MilestonesTab data={data} />
          </TabsContent>
          <TabsContent value="figures">
            <FiguresTab data={data} />
          </TabsContent>
          <TabsContent value="sources">
            <SourcesTab data={data} />
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}
