// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  TrendingUp,
  Building2,
  Users,
  DollarSign,
  Briefcase,
  Globe,
} from 'lucide-react'

interface BusinessSectionProps {
  businessKPIs: Array<{
    metric: string
    value: string
    ranking: string
    source: string
    tier: number
    uaeRelevance: string
  }>
  economicIndicators: Array<{
    indicator: string
    value: string
    change: string
    source: string
  }>
  investmentProjects: Array<{
    project: string
    investment: string
    details: string
  }>
}

export function BusinessSection({
  businessKPIs,
  economicIndicators,
  investmentProjects,
}: BusinessSectionProps) {
  return (
    <GlassPanel
      title="Business Excellence"
      description="Economic indicators and business environment metrics"
    >
      <div className="space-y-6">
        {/* Key Business Metrics */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="glass-card border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent">
            <CardContent className="p-6 text-center">
              <Building2 className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-emerald-400">72K</p>
              <p className="text-platinum-400 text-sm">New Companies (2025)</p>
              <p className="text-xs text-emerald-400 mt-1">+25% YoY</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-emerald-500/30">
            <CardContent className="p-6 text-center">
              <Globe className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-emerald-400">292K+</p>
              <p className="text-platinum-400 text-sm">Active Business Members</p>
              <p className="text-xs text-emerald-400 mt-1">+12% YoY</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-emerald-500/30">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-emerald-400">Top 3</p>
              <p className="text-platinum-400 text-sm">Tax Efficiency</p>
              <Badge variant="emerald" className="mt-2">Global Leader</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Economic Indicators */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Economic Indicators 2025</CardTitle>
            <CardDescription>GDP growth and trade performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {economicIndicators.map((indicator, idx) => (
                <div key={idx} className="bg-platinum-800/30 rounded-lg p-4">
                  <p className="text-xs text-platinum-400">{indicator.indicator}</p>
                  <p className="text-2xl font-bold text-emerald-400 mt-1">{indicator.value}</p>
                  <p className="text-xs text-emerald-400 mt-1">{indicator.change}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Investment Projects */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Major Investment Projects</CardTitle>
            <CardDescription>Strategic development initiatives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {investmentProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-platinum-800/30 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-platinum-200 text-sm">{project.project}</p>
                    <p className="text-xs text-platinum-400 mt-1">{project.details}</p>
                  </div>
                  <Badge variant="emerald" className="text-xs">
                    {project.investment}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Business Environment KPIs */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Business Environment Rankings</CardTitle>
            <CardDescription>UAE position in global indices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {businessKPIs.slice(0, 5).map((kpi, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-platinum-300">{kpi.metric}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="emerald" className="text-xs">
                      {kpi.ranking}
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
