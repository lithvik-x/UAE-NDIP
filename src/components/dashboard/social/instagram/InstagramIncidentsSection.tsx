'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { AlertTriangle, AlertOctagon, Users, Shield, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import type { instagramIntelligenceData } from '@/lib/data/instagram-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface InstagramIncidentsSectionProps {
  data: typeof instagramIntelligenceData
}

export function InstagramIncidentsSection({ data }: InstagramIncidentsSectionProps) {
  const { coordinatedBehaviorOverview, coordinatedBehaviorTimeline, enforcementActions } = data

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Coordinated Behavior Incidents"
        description="March 2026 Dubai safety posts incident and enforcement actions"
      >
        <div className="space-y-6">
          {/* Incident Overview */}
          <Card className="glass-card border-rose-500/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertOctagon className="h-5 w-5 text-rose-500" />
                    Dubai Safety Posts Incident
                  </CardTitle>
                  <CardDescription>{coordinatedBehaviorOverview.date}</CardDescription>
                </div>
                <Badge variant="destructive">~375 Arrested</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 rounded-lg bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-rose-500/20">
                <p className="text-sm text-platinum-200 mb-3">
                  {coordinatedBehaviorOverview.overview}
                </p>
                <div className="space-y-2 mb-3">
                  <p className="text-xs text-platinum-500/70 font-medium">Key Facts:</p>
                  {coordinatedBehaviorOverview.keyFacts.map((fact: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-platinum-300">
                      <span className="text-rose-400">•</span>
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-platinum-800/50">
                  <AlertCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
                  <span className="text-xs text-rose-300 italic">
                    "{coordinatedBehaviorOverview.quote}"
                    <span className="block mt-1 text-platinum-500/50">— {coordinatedBehaviorOverview.quoteAuthor}</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enforcement Timeline */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Enforcement Timeline
              </CardTitle>
              <CardDescription>March - April 2026 incident chronology</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500 via-orange-500 to-amber-500" />
                <div className="space-y-4">
                  {coordinatedBehaviorTimeline.map((event: { date: string; event: string; description: string }, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 pl-4">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-rose-500/30">
                        <span className="text-xs font-bold text-rose-400">{idx + 1}</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs border-platinum/30 text-platinum-500/70">
                            {event.date}
                          </Badge>
                          <Badge variant="outline" className="text-xs border-rose-500/30 text-rose-300">
                            {event.event}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-200 mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arrest Statistics */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-rose-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Arrest Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-rose-500/10 to-red-500/10 border border-rose-500/20">
                    <p className="text-xs text-platinum-500/50 uppercase">Total Arrested</p>
                    <p className="text-3xl font-bold text-rose-400">~375</p>
                    <p className="text-xs text-platinum-400 mt-1">For UAE conflict posts</p>
                  </div>
                  <div className="p-4 rounded-lg bg-platinum-800/30">
                    <p className="text-xs text-platinum-500/50 uppercase">Indian Nationals</p>
                    <p className="text-2xl font-bold text-gold-700">19</p>
                    <p className="text-xs text-platinum-400 mt-1">Caught in Gulf digital misinformation dragnet</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-rose-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Potential Penalties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-platinum-800/30">
                    <p className="text-xs text-platinum-500/50 uppercase">Prison Sentence</p>
                    <p className="text-2xl font-bold text-rose-400">Up to 2 years</p>
                  </div>
                  <div className="p-4 rounded-lg bg-platinum-800/30">
                    <p className="text-xs text-platinum-500/50 uppercase">Fine Potential</p>
                    <p className="text-2xl font-bold text-gold-700">$77,000</p>
                    <p className="text-xs text-platinum-400 mt-1">(£40,000-58,000)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charges Filed */}
          <Card className="glass-card border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-rose-500" />
                Charges Filed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  'Posting "rumours, misinformation"',
                  'Contradicting official announcements',
                  'Anything causing "public panic"',
                  'Misleading conflict-related content'
                ].map((charge, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <AlertTriangle className="h-4 w-4 text-rose-400 mb-2" />
                    <p className="text-sm text-platinum-200">{charge}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Historical Enforcement */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Historical Enforcement Cases</CardTitle>
              <CardDescription>Past enforcement actions (2024-2026)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {enforcementActions.map((action: { year: string; action: string; location: string; details: string }, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-platinum-800/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                      <Users className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-platinum/30">
                          {action.year}
                        </Badge>
                        <span className="text-sm font-medium text-white">{action.action}</span>
                      </div>
                      <p className="text-xs text-platinum-400 mt-1">
                        {action.location} — {action.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Narrative Themes */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Key Narrative Themes</CardTitle>
              <CardDescription>In coordinated safety posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                {coordinatedBehaviorOverview.keyNarrativeThemes.map((theme: string, idx: number) => (
                  <div key={idx} className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <p className="text-sm text-platinum-200">{theme}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
