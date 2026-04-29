'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Utensils,
  Star,
  Award,
  MapPin,
} from 'lucide-react'

interface CuisineSectionProps {
  restaurants: Array<{
    restaurant: string
    stars: string
    cuisine: string
    location: string
    priceLevel: string
    sourceVerified: boolean
  }>
  culinaryDiversity: Array<{
    cuisineType: string
    examples: string
    availability: string
    sentimentScore: string
  }>
}

export function CuisineSection({ restaurants, culinaryDiversity }: CuisineSectionProps) {
  const getStarColor = (stars: string) => {
    if (stars.includes('3')) return 'text-amber-400'
    if (stars.includes('2')) return 'text-amber-300'
    if (stars.includes('1') || stars.includes('Bib')) return 'text-amber-500'
    return 'text-slate-400'
  }

  return (
    <GlassPanel
      title="Culinary Excellence"
      description="Michelin-starred restaurants and diverse cuisine offerings"
      icon={<Utensils className="h-5 w-5 text-orange-400" />}
    >
      <div className="space-y-6">
        {/* Michelin Highlights */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="glass-card border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent">
            <CardContent className="p-6 text-center">
              <Star className="h-10 w-10 text-orange-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-orange-400">5</p>
              <p className="text-slate-400 text-sm">Michelin-Starred Restaurants</p>
              <p className="text-xs text-slate-500 mt-1">2 Three-Star, 2 Two-Star, 1 One-Star</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-orange-500/30">
            <CardContent className="p-6 text-center">
              <Utensils className="h-10 w-10 text-orange-400 mx-auto mb-3" />
              <p className="text-4xl font-bold text-orange-400">10+</p>
              <p className="text-slate-400 text-sm">Emirati Restaurants</p>
              <p className="text-xs text-emerald-400 mt-1">Including Bib Gourmand</p>
            </CardContent>
          </Card>
        </div>

        {/* Michelin Restaurant List */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Michelin Guide Dubai</CardTitle>
            <CardDescription>Star-rated and recommended restaurants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {restaurants.map((restaurant, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      restaurant.stars.includes('3') ? 'bg-amber-500/20' :
                      restaurant.stars.includes('2') ? 'bg-amber-400/20' :
                      'bg-slate-700/50'
                    }`}>
                      <Star className={`h-4 w-4 ${getStarColor(restaurant.stars)}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">{restaurant.restaurant}</p>
                      <p className="text-xs text-slate-400">{restaurant.cuisine} | {restaurant.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={restaurant.stars.includes('3') ? 'gold' : 'secondary'}
                      className="text-xs"
                    >
                      {restaurant.stars}
                    </Badge>
                    <p className="text-xs text-slate-500 mt-1">{restaurant.priceLevel}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cuisine Diversity */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Culinary Diversity</CardTitle>
            <CardDescription>Available cuisines and sentiment scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {culinaryDiversity.map((cuisine, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-200 text-sm">{cuisine.cuisineType}</p>
                    <p className="text-xs text-slate-400">{cuisine.examples}</p>
                    <p className="text-xs text-emerald-400 mt-1">{cuisine.availability}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-orange-400">{cuisine.sentimentScore}</p>
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
