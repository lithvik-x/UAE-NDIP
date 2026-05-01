'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Star,
  MapPin,
  Heart,
  ThumbsUp,
} from 'lucide-react'

interface AttractionsSectionProps {
  attractions: Array<{
    entityName: string
    emirate: string
    category: string
    mentionFrequency: string
    sentiment: string
  }>
  sources: Array<{
    source: string
    link: string
    evidenceQuality: string
    tier: number
    uaeRelevance: string
  }>
  visitorThemes: Array<{
    theme: string
    frequency: string
    sentimentScore: string
    sourceType: string
  }>
}

export function AttractionsSection({ attractions, sources, visitorThemes }: AttractionsSectionProps) {
  return (
    <GlassPanel
      title="Praised Attractions & Experiences"
      description="Most mentioned landmarks and visitor sentiments"
    >
      <div className="space-y-6">
        {/* Top Attractions Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.slice(0, 6).map((attraction, idx) => (
            <Card
              key={idx}
              className="glass-card border-amber-500/30 hover:border-amber-500/50 transition-colors"
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="warning" className="text-xs">
                    {attraction.emirate}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    <span className="text-amber-400 font-bold text-sm">{attraction.sentiment}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-platinum-200 mb-1">{attraction.entityName}</h4>
                <p className="text-xs text-platinum-400">{attraction.category}</p>
                <p className="text-xs text-emerald-400 mt-2">{attraction.mentionFrequency}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visitor Experience Themes */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Visitor Experience Themes</CardTitle>
            <CardDescription>Common phrases and sentiments from visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {visitorThemes.map((theme, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-platinum-800/30 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <ThumbsUp className="h-5 w-5 text-emerald-400" />
                    <div>
                      <p className="font-medium text-platinum-200 text-sm italic">"{theme.theme}"</p>
                      <p className="text-xs text-platinum-400">{theme.sourceType}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="emerald" className="text-xs">
                      {theme.sentimentScore}
                    </Badge>
                    <p className="text-xs text-platinum-400 mt-1">{theme.frequency}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* More Attractions */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">All Praised Attractions</CardTitle>
            <CardDescription>Complete list with sentiment scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {attractions.map((attraction, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 bg-platinum-800/30 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-platinum-400" />
                    <span className="text-sm text-platinum-200 truncate">{attraction.entityName}</span>
                  </div>
                  <span className="text-amber-400 font-bold text-sm">{attraction.sentiment}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Source Credibility */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Source Credibility</CardTitle>
            <CardDescription>Key sources for praise and recommendation data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {sources.map((source, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-platinum-800/30 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-platinum-200 text-sm">{source.source}</p>
                    <p className="text-xs text-platinum-400">{source.evidenceQuality}</p>
                  </div>
                  <Badge
                    variant={source.tier === 1 ? 'emerald' : source.tier === 2 ? 'denim' : 'secondary'}
                    className="text-xs"
                  >
                    T{source.tier}
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
