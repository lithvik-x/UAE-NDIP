// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Heart,
  Building2,
  Shield,
  Users,
  Award,
  TrendingUp,
} from 'lucide-react'

interface HealthcareSectionProps {
  healthcareKPIs: Array<{
    metric: string
    value: string
    previous: string
    change: string
    source: string
    tier: number
    uaeRelevance: string
  }>
  healthcareTrustBreakdown: Array<{
    category: string
    uaeScore: string
    globalComparison: string
  }>
  healthcareInvestment: Array<{
    metric: string
    value: string
    source: string
  }>
}

export function HealthcareSection({
  healthcareKPIs,
  healthcareTrustBreakdown,
  healthcareInvestment,
}: HealthcareSectionProps) {
  return (
    <GlassPanel
      title="Healthcare Excellence"
      description="World-class healthcare infrastructure and trust metrics"
    >
      <div className="space-y-6">
        {/* Key Healthcare Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {healthcareKPIs.slice(0, 4).map((kpi, idx) => (
            <Card key={idx} className="glass-card border-pink-500/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-platinum-400 truncate">{kpi.metric}</span>
                  <Badge variant="rose" className="text-xs">
                    {kpi.change}
                  </Badge>
                </div>
                <p className="text-3xl font-bold text-pink-400">{kpi.value}</p>
                <p className="text-xs text-emerald-400 mt-1">Source: {kpi.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Breakdown */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Healthcare Trust Breakdown</CardTitle>
            <CardDescription>Edelman Trust in Healthcare 2026 - UAE scores among highest globally</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {healthcareTrustBreakdown.slice(0, 8).map((trust, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/30 rounded-lg">
                  <span className="text-sm text-platinum-300">{trust.category}</span>
                  <div className="text-right">
                    <p className="font-bold text-pink-400">{trust.uaeScore}</p>
                    <p className="text-xs text-emerald-400">{trust.globalComparison}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Stats */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Healthcare Investment & Infrastructure</CardTitle>
            <CardDescription>Federal healthcare budget and facility metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {healthcareInvestment.slice(0, 6).map((inv, idx) => (
                <div key={idx} className="bg-platinum-800/30 rounded-lg p-3">
                  <p className="text-xs text-platinum-400 truncate">{inv.metric}</p>
                  <p className="text-xl font-bold text-pink-400">{inv.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Healthcare Indicators */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="glass-card border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-transparent">
            <CardContent className="p-6 text-center">
              <Award className="h-10 w-10 text-pink-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-pink-400">235+</p>
              <p className="text-platinum-400 text-sm">JCI-Accredited Facilities</p>
              <p className="text-xs text-emerald-400 mt-1">+25 from last year</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-pink-500/30">
            <CardContent className="p-6 text-center">
              <Shield className="h-10 w-10 text-pink-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-pink-400">~90%</p>
              <p className="text-platinum-400 text-sm">Healthcare Trust Rating</p>
              <p className="text-xs text-emerald-400 mt-1">+5% from last year</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </GlassPanel>
  )
}
