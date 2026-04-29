'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import {
  Sparkles,
  Award,
  Trash2,
  TreePine,
} from 'lucide-react'

interface CleanlinessSectionProps {
  cleanlinessKPIs: Array<{
    metric: string
    value: string
    previous: string
    change: string
    source: string
    tier: number
  }>
  wasteManagementInitiatives: Array<{
    initiative: string
    targetStatus: string
    timeline: string
  }>
}

export function CleanlinessSection({ cleanlinessKPIs, wasteManagementInitiatives }: CleanlinessSectionProps) {
  return (
    <GlassPanel
      title="Cleanliness Excellence"
      description="Dubai's 6-year streak as world's cleanest city"
    >
      <div className="space-y-6">
        {/* Key Cleanliness Achievement */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="glass-card border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent">
            <CardContent className="p-6 text-center">
              <Award className="h-10 w-10 text-cyan-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-cyan-400">6</p>
              <p className="text-slate-400 text-sm">Consecutive Years</p>
              <Badge variant="cyan" className="mt-2">World's Cleanest City</Badge>
            </CardContent>
          </Card>

          <Card className="glass-card border-cyan-500/30">
            <CardContent className="p-6 text-center">
              <Sparkles className="h-10 w-10 text-cyan-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-cyan-400">100%</p>
              <p className="text-slate-400 text-sm">Satisfaction Rate</p>
              <p className="text-xs text-slate-500 mt-1">Global Power City Index</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-cyan-500/30">
            <CardContent className="p-6 text-center">
              <Trash2 className="h-10 w-10 text-cyan-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-cyan-400">23,300+</p>
              <p className="text-slate-400 text-sm">Waste Storage Units</p>
              <p className="text-xs text-emerald-400 mt-1">+2,300 from last year</p>
            </CardContent>
          </Card>
        </div>

        {/* Operational Infrastructure */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Operational Infrastructure</CardTitle>
            <CardDescription>Dubai Municipality cleaning operations coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cleanlinessKPIs.slice(2, 7).map((kpi, idx) => (
                <div key={idx} className="bg-slate-800/30 rounded-lg p-3">
                  <p className="text-xs text-slate-400 truncate">{kpi.metric}</p>
                  <p className="text-2xl font-bold text-cyan-400">{kpi.value}</p>
                  <p className="text-xs text-emerald-400">{kpi.change}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Coverage Metrics */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Coverage Areas</CardTitle>
            <CardDescription>Infrastructure coverage in kilometers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cleanlinessKPIs.slice(6).map((kpi, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">{kpi.metric}</span>
                    <span className="font-bold text-cyan-400">{kpi.value}</span>
                  </div>
                  <Progress
                    value={parseFloat(kpi.value) / 30}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Initiatives */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Sustainability Initiatives</CardTitle>
            <CardDescription>Environmental and waste management programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {wasteManagementInitiatives.map((initiative, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg"
                >
                  <TreePine className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-200 text-sm">{initiative.initiative}</p>
                    <p className="text-xs text-emerald-400 mt-1">{initiative.targetStatus}</p>
                    <p className="text-xs text-slate-500">{initiative.timeline}</p>
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
