'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Crown,
  FileText,
  Users,
  Briefcase,
  Building2,
  Target,
} from 'lucide-react'

interface LeadershipSectionProps {
  cabinetAchievements: Array<{
    metric: string
    value: string
    source: string
    verification: string
  }>
  tributeQuotes: Array<{
    speaker: string
    title: string
    quote: string
    source: string
  }>
  visionaryMetrics: Array<{
    metric: string
    value: string
    source: string
    verification: string
  }>
  visionDocuments: Array<{
    document: string
    launchYear: string
    targetYear: string
  }>
  keyAchievements: Array<{
    category: string
    achievement: string
    impact: string
  }>
  governancePrinciples: Array<{
    principle: string
    description: string
    evidence: string
  }>
}

export function LeadershipSection({
  cabinetAchievements,
  tributeQuotes,
  visionaryMetrics,
  visionDocuments,
  keyAchievements,
  governancePrinciples,
}: LeadershipSectionProps) {
  return (
    <GlassPanel
      title="Visionary Leadership"
      description="20 years of transformative governance achievements"
      icon={<Crown className="h-5 w-5 text-blue-400" />}
    >
      <div className="space-y-6">
        {/* Key Leadership Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="glass-card border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent">
            <CardContent className="p-6 text-center">
              <Crown className="h-10 w-10 text-blue-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-blue-400">20</p>
              <p className="text-slate-400 text-sm">Years of Leadership</p>
              <Badge variant="denim" className="mt-2">PM Tenure</Badge>
            </CardContent>
          </Card>

          <Card className="glass-card border-blue-500/30">
            <CardContent className="p-6 text-center">
              <FileText className="h-10 w-10 text-blue-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-blue-400">~16K</p>
              <p className="text-slate-400 text-sm">Resolutions Issued</p>
              <p className="text-xs text-slate-500 mt-1">558 Cabinet Meetings</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-blue-500/30">
            <CardContent className="p-6 text-center">
              <Users className="h-10 w-10 text-blue-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-blue-400">72</p>
              <p className="text-slate-400 text-sm">Ministers Led</p>
              <p className="text-xs text-slate-500 mt-1">9 Cabinet Formations</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-blue-500/30">
            <CardContent className="p-6 text-center">
              <Briefcase className="h-10 w-10 text-blue-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-blue-400">&gt;90%</p>
              <p className="text-slate-400 text-sm">Legal Framework Modernized</p>
            </CardContent>
          </Card>
        </div>

        {/* Vision Documents */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">National Vision Documents</CardTitle>
            <CardDescription>Long-term strategic planning frameworks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {visionDocuments.map((doc, idx) => (
                <div key={idx} className="bg-slate-800/30 rounded-lg p-4 text-center">
                  <Target className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="font-semibold text-slate-200">{doc.document}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {doc.launchYear} - {doc.targetYear}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Governance Principles */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Governance Principles</CardTitle>
            <CardDescription>Core principles driving UAE governance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {governancePrinciples.map((principle, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-200 text-sm">{principle.principle}</p>
                    <p className="text-xs text-slate-400 mt-1">{principle.description}</p>
                    <p className="text-xs text-emerald-400 mt-1">{principle.evidence}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Achievements */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Key Achievements (2006-2026)</CardTitle>
            <CardDescription>Major accomplishments across sectors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {keyAchievements.map((achievement, idx) => (
                <div key={idx} className="bg-slate-800/30 rounded-lg p-3">
                  <p className="text-xs text-slate-400">{achievement.category}</p>
                  <p className="font-medium text-slate-200 text-sm mt-1">{achievement.achievement}</p>
                  <p className="text-xs text-emerald-400 mt-1">{achievement.impact}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tribute Quotes */}
        <Card className="glass-card border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-lg">Leadership Tributes</CardTitle>
            <CardDescription>Official commendations for UAE leadership</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tributeQuotes.map((quote, idx) => (
                <div key={idx} className="border-l-2 border-blue-500 pl-4">
                  <p className="text-slate-300 italic text-sm">"{quote.quote}"</p>
                  <p className="text-slate-400 text-xs mt-2">
                    — {quote.speaker}, {quote.title}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}
