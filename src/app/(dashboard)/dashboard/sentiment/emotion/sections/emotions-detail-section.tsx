'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { AreaChart } from '@/components/ui/chart-library'
import {
  Smile,
  Heart,
  AlertTriangle,
  AlertCircle,
  Frown,
  Feather,
  Angry,
  Clock,
  Trophy,
  Users,
  Building2,
  Plane,
  HeartHandshake,
  Banknote,
  Shield,
  TrendingUp,
  DollarSign,
  Briefcase,
  Home,
  ShieldAlert,
  Globe,
  Smartphone,
  TrafficCone,
  Car,
  AlertOctagon,
  HeartPulse,
  MessageSquare,
  GraduationCap,
  Mic,
  Scale,
  Activity,
} from 'lucide-react'

const emotionIcons: Record<string, React.ElementType> = {
  Joy: Smile,
  Trust: Heart,
  Fear: AlertTriangle,
  Surprise: AlertCircle,
  Sadness: Frown,
  Disgust: Feather,
  Anger: Angry,
  Anticipation: Clock,
}

const emotionColors: Record<string, string> = {
  Joy: CHART_COLORS.gold,
  Trust: CHART_COLORS.navy,
  Fear: CHART_COLORS.rose,
  Surprise: CHART_COLORS.platinum,
  Sadness: CHART_COLORS.info,
  Disgust: CHART_COLORS.emerald,
  Anger: CHART_COLORS.rose,
  Anticipation: CHART_COLORS.gold,
}

interface FearCategory {
  category: string
  keyFinding: string
  sentiment: number
  sources: string[]
}

interface JoyData {
  nationalDayEvents: Array<{
    event: string
    location: string
    time: string
    date: string
  }>
  achievements: Array<{
    entity: string
    category: string
    metric: string
    source: string
  }>
  uaeTeamEmiratesStats: {
    totalVictories: number
    podiumFinishes: number
    winningRiders: number
    uciWorldTourBestTeam: string
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

interface TrustData {
  humanitarianInitiatives: Array<{
    initiative: string
    amount: string
    beneficiaries: string
    source: string
  }>
  bankingSector: {
    totalAssets: string
    capitalAdequacyRatio: string
    liquidityCoverageRatio: string
    foreignExchangeReserves: string
  }
  governanceIndices: {
    statusIndex: { score: number; rank: string }
    governanceIndex: { score: number; rank: string }
    politicalTransformation: { score: number; rank: string }
    economicTransformation: { score: number; rank: string }
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

interface FearData {
  regionalConflict: {
    warStart: string
    ballisticMissiles: number
    drones: number
    cruiseMissiles: number
    totalProjectiles: number
    interceptionRate: string
    deaths: number
  }
  defenseSystems: Array<{
    system: string
    origin: string
    notes: string
  }>
  economicImpact: Array<{
    impact: string
    metric: string
    source: string
  }>
  fearCategories: FearCategory[]
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

interface AngerData {
  censorship: {
    freedomHouseScore: string
    status: string
    accessObstacles: string
    limitsOnContent: string
    violationsOfUserRights: string
    wpfiRank: string
  }
  roadSafety: {
    totalRoadDeaths: number
    injuries: number
    change: string
    mostDangerousDay: string
    mostDangerousTime: string
  }
  rentInflation: {
    abuDhabiRentIncrease: string
    dubaiOfficeOccupancy: string
    annualRentIncrease: string
    bidAskSpread: string
  }
  sentimentAnalysis: Array<{
    source: string
    sentiment: number
    keyThemes: string
  }>
}

interface EmotionsDetailSectionProps {
  emotion: string
  data: JoyData | TrustData | FearData | AngerData | Record<string, unknown>
  type: 'joy' | 'trust' | 'fear' | 'anger'
}

export function EmotionsDetailSection({ emotion, data, type }: EmotionsDetailSectionProps) {
  const Icon = emotionIcons[emotion] || Heart
  const color = emotionColors[emotion] || CHART_COLORS.gold

  if (type === 'joy') {
    const joyData = data as JoyData
    return (
      <GlassPanel
        title={`${emotion} (UAE Context)`}
        description="National celebrations, achievements, and positive sentiment"
        icon={<Icon className={`h-5 w-5`} style={{ color }} />}
      >
        <div className="space-y-6">
          {/* UAE Team Emirates Stats */}
          <Card className="glass-card border-gold/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gold" />
                UAE Team Emirates 2025 Season
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-4">
                <div className="text-center p-3 rounded-lg bg-gold/10">
                  <p className="text-2xl font-bold text-gold">{joyData.uaeTeamEmiratesStats.totalVictories}</p>
                  <p className="text-xs text-slate-400">Total Victories</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-gold/10">
                  <p className="text-2xl font-bold text-gold">{joyData.uaeTeamEmiratesStats.podiumFinishes}</p>
                  <p className="text-xs text-slate-400">Podium Finishes</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-gold/10">
                  <p className="text-2xl font-bold text-gold">{joyData.uaeTeamEmiratesStats.winningRiders}</p>
                  <p className="text-xs text-slate-400">Winning Riders</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-gold/10">
                  <p className="text-lg font-bold text-gold">3rd</p>
                  <p className="text-xs text-slate-400">Consecutive UCI Best</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Key Achievements</CardTitle>
              <CardDescription>UAE global rankings and accomplishments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {joyData.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-4 w-4 text-gold" />
                      <div>
                        <p className="font-semibold text-slate-200">{achievement.entity}</p>
                        <p className="text-xs text-slate-400">{achievement.category}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-gold border-gold/50">
                      {achievement.metric}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* National Day Events */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">National Day 2025 Events</CardTitle>
              <CardDescription>54th Eid Al Etihad celebrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {joyData.nationalDayEvents.map((event, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Plane className="h-4 w-4 text-gold" />
                      <p className="font-semibold text-slate-200">{event.event}</p>
                    </div>
                    <p className="text-sm text-slate-400">{event.location}</p>
                    <p className="text-xs text-slate-500">{event.date} - {event.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sentiment Analysis */}
          <Card className="glass-card border-emerald-500/30">
            <CardHeader>
              <CardTitle className="text-lg text-emerald">Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {joyData.sentimentAnalysis.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">{item.source}</span>
                    <div className="flex items-center gap-2">
                      <Progress value={item.sentiment * 100} className="h-2 w-24" />
                      <Badge variant="success" className="text-xs">
                        +{(item.sentiment * 100).toFixed(0)}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    )
  }

  if (type === 'trust') {
    const trustData = data as TrustData
    return (
      <GlassPanel
        title={`${emotion} (UAE Context)`}
        description="Government trust, institutional confidence, and humanitarian efforts"
        icon={<Icon className={`h-5 w-5`} style={{ color }} />}
      >
        <div className="space-y-6">
          {/* Banking Sector */}
          <Card className="glass-card border-navy/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-navy" />
                UAE Banking Sector (March 2026)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-3 rounded-lg bg-navy/10">
                  <p className="text-xl font-bold text-navy">{trustData.bankingSector.totalAssets}</p>
                  <p className="text-xs text-slate-400">Total Assets</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-navy/10">
                  <p className="text-xl font-bold text-emerald">{trustData.bankingSector.capitalAdequacyRatio}</p>
                  <p className="text-xs text-slate-400">Capital Adequacy (Basel III: 10.5%)</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-navy/10">
                  <p className="text-xl font-bold text-emerald">{trustData.bankingSector.liquidityCoverageRatio}</p>
                  <p className="text-xs text-slate-400">Liquidity Coverage (Global: 100%)</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-navy/10">
                  <p className="text-xl font-bold text-navy">{trustData.bankingSector.foreignExchangeReserves}</p>
                  <p className="text-xs text-slate-400">Foreign Exchange Reserves</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Governance Indices */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">BTI 2026 Governance Indices</CardTitle>
              <CardDescription>UAE country report key index scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(trustData.governanceIndices).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                    <span className="text-sm text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <div className="text-right">
                      <p className="font-bold text-emerald">{value.score}/10</p>
                      <p className="text-xs text-slate-500">{value.rank}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Humanitarian Initiatives */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HeartHandshake className="h-5 w-5 text-emerald" />
                Humanitarian Initiatives 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trustData.humanitarianInitiatives.slice(0, 4).map((initiative, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                    <div>
                      <p className="font-semibold text-slate-200">{initiative.initiative}</p>
                      <p className="text-xs text-slate-400">{initiative.beneficiaries}</p>
                    </div>
                    <Badge variant="outline" className="text-emerald border-emerald/50">
                      {initiative.amount}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    )
  }

  if (type === 'fear') {
    const fearData = data as FearData
    return (
      <GlassPanel
        title={`${emotion} (UAE Context)`}
        description="Security threats, economic concerns, and social anxieties"
        icon={<Icon className={`h-5 w-5`} style={{ color }} />}
      >
        <div className="space-y-6">
          {/* Regional Conflict Data */}
          <Card className="glass-card border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-rose" />
                Iran Regional Conflict (February 2026)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <div className="text-center p-3 rounded-lg bg-rose-500/10">
                  <p className="text-2xl font-bold text-rose">{fearData.regionalConflict.ballisticMissiles}</p>
                  <p className="text-xs text-slate-400">Ballistic Missiles</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-rose-500/10">
                  <p className="text-2xl font-bold text-rose">{fearData.regionalConflict.drones}</p>
                  <p className="text-xs text-slate-400">Drones</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-rose-500/10">
                  <p className="text-2xl font-bold text-rose">{fearData.regionalConflict.cruiseMissiles}</p>
                  <p className="text-xs text-slate-400">Cruise Missiles</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-rose-500/10">
                  <p className="text-2xl font-bold text-rose">{fearData.regionalConflict.totalProjectiles}</p>
                  <p className="text-xs text-slate-400">Total Projectiles</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-emerald-500/10">
                  <p className="text-2xl font-bold text-emerald">{fearData.regionalConflict.interceptionRate}</p>
                  <p className="text-xs text-slate-400">Interception Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Defense Systems */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">UAE Defense Capabilities</CardTitle>
              <CardDescription>Multi-layered missile defense systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {fearData.defenseSystems.map((system, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
                    <p className="font-semibold text-slate-200">{system.system}</p>
                    <p className="text-xs text-slate-400">{system.origin}</p>
                    <p className="text-xs text-slate-500 mt-1">{system.notes}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fear Categories */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Fear Categories Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {fearData.fearCategories.map((category, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-800/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-200">{category.category}</span>
                      <Badge variant="destructive" className="text-xs">
                        {(category.sentiment * 100).toFixed(0)}%
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{category.keyFinding}</p>
                    <div className="flex flex-wrap gap-1">
                      {category.sources.map((source) => (
                        <Badge key={source} variant="outline" className="text-xs">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    )
  }

  if (type === 'anger') {
    const angerData = data as AngerData
    return (
      <GlassPanel
        title={`${emotion} (UAE Context)`}
        description="Censorship, road safety, rent inflation, and institutional concerns"
        icon={<Icon className={`h-5 w-5`} style={{ color }} />}
      >
        <div className="space-y-6">
          {/* Freedom House Data */}
          <Card className="glass-card border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-rose" />
                Freedom House 2024 - &quot;Not Free&quot;
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-3 rounded-lg bg-rose-500/10">
                  <p className="text-2xl font-bold text-rose">{angerData.censorship.freedomHouseScore}</p>
                  <p className="text-xs text-slate-400">Overall Score</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-rose-500/10">
                  <p className="text-2xl font-bold text-rose">{angerData.censorship.wpfiRank}</p>
                  <p className="text-xs text-slate-400">Press Freedom Index</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-rose-500/10">
                  <p className="text-2xl font-bold text-rose">{angerData.censorship.accessObstacles}</p>
                  <p className="text-xs text-slate-400">Access Obstacles /25</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-rose-500/10">
                  <p className="text-2xl font-bold text-rose">{angerData.censorship.violationsOfUserRights}</p>
                  <p className="text-xs text-slate-400">User Rights Violations /40</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Road Safety */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrafficCone className="h-5 w-5 text-gold" />
                Road Safety 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-3 rounded-lg bg-slate-800/30">
                  <p className="text-2xl font-bold text-rose">{angerData.roadSafety.totalRoadDeaths}</p>
                  <p className="text-xs text-slate-400">Road Deaths ({angerData.roadSafety.change})</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-slate-800/30">
                  <p className="text-2xl font-bold text-gold">{angerData.roadSafety.injuries.toLocaleString()}</p>
                  <p className="text-xs text-slate-400">Injuries</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-slate-800/30">
                  <p className="text-lg font-bold text-slate-200">{angerData.roadSafety.mostDangerousDay}</p>
                  <p className="text-xs text-slate-400">Most Dangerous Day</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-slate-800/30">
                  <p className="text-lg font-bold text-slate-200">{angerData.roadSafety.mostDangerousTime}</p>
                  <p className="text-xs text-slate-400">Most Dangerous Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rent Inflation */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Home className="h-5 w-5 text-gold" />
                Rent & Inflation Concerns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-3 rounded-lg bg-slate-800/30">
                  <p className="text-sm text-slate-400">Abu Dhabi Rent Increase</p>
                  <p className="text-xl font-bold text-rose">{angerData.rentInflation.abuDhabiRentIncrease}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/30">
                  <p className="text-sm text-slate-400">Dubai Office Occupancy</p>
                  <p className="text-xl font-bold text-gold">{angerData.rentInflation.dubaiOfficeOccupancy}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/30">
                  <p className="text-sm text-slate-400">Annual Rent Increase</p>
                  <p className="text-xl font-bold text-rose">{angerData.rentInflation.annualRentIncrease}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/30">
                  <p className="text-sm text-slate-400">Bid-Ask Spread</p>
                  <p className="text-xl font-bold text-rose">{angerData.rentInflation.bidAskSpread}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    )
  }

  // Default fallback
  return (
    <GlassPanel
      title={`${emotion} (UAE Context)`}
      description="Emotion-specific analysis"
      icon={<Icon className={`h-5 w-5`} style={{ color }} />}
    >
      <Card className="glass-card">
        <CardContent className="p-6 text-center text-slate-400">
          Data for {emotion} emotion analysis
        </CardContent>
      </Card>
    </GlassPanel>
  )
}
