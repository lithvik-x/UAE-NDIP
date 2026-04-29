'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  MapPin,
  Building2,
  ShieldAlert,
  TrendingUp,
  DollarSign,
  Users,
  Home,
  Banknote,
  AlertTriangle,
  Car,
  Heart,
  Coffee,
  Briefcase,
} from 'lucide-react'

interface UAERelevanceEntry {
  category: string
  relevance: 'CRITICAL' | 'HIGH' | 'MEDIUM'
  rationale: string
}

interface UAERelevanceSectionProps {
  uaeRelevanceAssessment: UAERelevanceEntry[]
}

const relevanceConfig: Record<string, { color: string; bgColor: string; icon: React.ElementType }> = {
  CRITICAL: { color: 'text-rose', bgColor: 'bg-rose-500/20', icon: ShieldAlert },
  HIGH: { color: 'text-gold', bgColor: 'bg-gold/20', icon: AlertTriangle },
  MEDIUM: { color: 'text-info', bgColor: 'bg-info/20', icon: MapPin },
}

const categoryIcons: Record<string, React.ElementType> = {
  'National Day Celebrations': Coffee,
  'Government Trust/Performance': Building2,
  'Regional Conflict/Missile Threats': ShieldAlert,
  'Economic Performance/GDP': TrendingUp,
  'Labour/Employment Issues': Users,
  'Real Estate/Housing': Home,
  'Banking/Financial Safety': Banknote,
  'Human Rights/Freedom of Expression': AlertTriangle,
  'Traffic/Road Safety': Car,
  'Corruption/Wasta': DollarSign,
  'Health/Pandemic Threats': Heart,
  'Cultural Heritage Preservation': MapPin,
  'Expat Loneliness/Integration': Users,
}

export function UAERelevanceSection({ uaeRelevanceAssessment }: UAERelevanceSectionProps) {
  const criticalItems = uaeRelevanceAssessment.filter((item) => item.relevance === 'CRITICAL')
  const highItems = uaeRelevanceAssessment.filter((item) => item.relevance === 'HIGH')
  const mediumItems = uaeRelevanceAssessment.filter((item) => item.relevance === 'MEDIUM')

  return (
    <GlassPanel
      title="UAE Relevance Assessment"
      description="Categorization of emotion research topics by strategic relevance"
      icon={<MapPin className="h-5 w-5 text-gold" />}
    >
      <div className="space-y-6">
        {/* Relevance Summary */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="glass-card border-rose-500/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20">
                  <ShieldAlert className="h-5 w-5 text-rose" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-rose">{criticalItems.length}</p>
                  <p className="text-xs text-slate-400">Critical Relevance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-gold/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <AlertTriangle className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">{highItems.length}</p>
                  <p className="text-xs text-slate-400">High Relevance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-info/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-info/20">
                  <MapPin className="h-5 w-5 text-info" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-info">{mediumItems.length}</p>
                  <p className="text-xs text-slate-400">Medium Relevance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Critical Relevance */}
        {criticalItems.length > 0 && (
          <Card className="glass-card border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg text-rose">Critical Relevance</CardTitle>
              <CardDescription>Core to UAE identity and strategic interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {criticalItems.map((item) => {
                  const Icon = categoryIcons[item.category] || MapPin
                  return (
                    <div
                      key={item.category}
                      className="flex items-start gap-3 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20"
                    >
                      <Icon className="h-5 w-5 text-rose mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-slate-200">{item.category}</p>
                        <p className="text-sm text-slate-400">{item.rationale}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* High Relevance */}
        {highItems.length > 0 && (
          <Card className="glass-card border-gold/30">
            <CardHeader>
              <CardTitle className="text-lg text-gold">High Relevance</CardTitle>
              <CardDescription>Significant impact on resident sentiment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {highItems.map((item) => {
                  const Icon = categoryIcons[item.category] || MapPin
                  return (
                    <div
                      key={item.category}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gold/10 border border-gold/20"
                    >
                      <Icon className="h-5 w-5 text-gold mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-slate-200">{item.category}</p>
                        <p className="text-sm text-slate-400">{item.rationale}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Medium Relevance */}
        {mediumItems.length > 0 && (
          <Card className="glass-card border-info/30">
            <CardHeader>
              <CardTitle className="text-lg text-info">Medium Relevance</CardTitle>
              <CardDescription>Notable but secondary concerns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {mediumItems.map((item) => {
                  const Icon = categoryIcons[item.category] || MapPin
                  return (
                    <div
                      key={item.category}
                      className="flex items-center gap-3 p-3 rounded-lg bg-info/10 border border-info/20"
                    >
                      <Icon className="h-4 w-4 text-info" />
                      <div>
                        <p className="font-medium text-slate-200 text-sm">{item.category}</p>
                        <p className="text-xs text-slate-400">{item.rationale}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </GlassPanel>
  )
}
