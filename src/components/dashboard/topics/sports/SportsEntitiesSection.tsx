'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Trophy, Flag, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import type {
  SportsIntelligenceData,
  CFGOwnershipDashboard,
  MancityFinancial,
  F1EconomicImpact,
  F1Top3Finisher,
  SportsKeyIndividual,
} from '@/lib/data/topics/sports-data'

interface SportsEntitiesSectionProps {
  cfgOwnership: CFGOwnershipDashboard[]
  mancityFinancials: MancityFinancial[]
  f1Impact: F1EconomicImpact[]
  f12024Top3: F1Top3Finisher[]
  f12025Top3: F1Top3Finisher[]
  sportsKeyIndividuals: SportsKeyIndividual[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export function SportsEntitiesSection({
  cfgOwnership,
  mancityFinancials,
  f1Impact,
  f12024Top3,
  f12025Top3,
  sportsKeyIndividuals,
}: SportsEntitiesSectionProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      {/* CFG Ownership */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Flag className="h-5 w-5 text-gold-700" />
              City Football Group Ownership
            </CardTitle>
            <CardDescription>Manchester City parent company stakeholding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {cfgOwnership.map((owner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50"
                >
                  <span className="text-sm text-platinum-500-300">{owner.owner}</span>
                  <span className="text-xl font-bold text-gold-700">{owner.share}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Man City Financials */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="h-5 w-5 text-gold-700" />
              Manchester City Financials
            </CardTitle>
            <CardDescription>Revenue growth post Abu Dhabi takeover</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {mancityFinancials.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg bg-platinum-800/50"
                >
                  <span className="text-sm text-platinum-500-300">{item.year}</span>
                  <span className="text-xl font-bold text-gold-700">{item.revenue}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* F1 Abu Dhabi Metrics */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5 text-gold-700" />
              F1 Abu Dhabi GP Metrics
            </CardTitle>
            <CardDescription>Event performance and economic impact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {f1Impact.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg bg-platinum-800/50"
                >
                  <span className="text-sm text-platinum-500-300">{item.metric}</span>
                  <span className="text-xl font-bold text-gold-700">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* F1 Top 3 Results */}
      <motion.div variants={fadeInUp}>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">2024 Abu Dhabi GP Top 3</CardTitle>
              <CardDescription>Final race results December 8, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {f12024Top3.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg bg-platinum-800/50"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-platinum-500-200">{result.driver}</p>
                      <p className="text-sm text-platinum-500-400">{result.team}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gold-700">{result.gap !== '—' ? result.gap : 'Winner'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">2025 Abu Dhabi GP Top 3</CardTitle>
              <CardDescription>Final race results December 7, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {f12025Top3.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg bg-platinum-800/50"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-platinum-500-200">{result.driver}</p>
                      <p className="text-sm text-platinum-500-400">{result.team}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gold-700">{result.gap !== '—' ? result.gap : 'Winner'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Key Individuals */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-gold-700" />
              Key Individuals
            </CardTitle>
            <CardDescription>Sports intelligence stakeholders</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-3">
                {sportsKeyIndividuals.slice(0, 10).map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                  >
                    <div>
                      <p className="font-semibold text-platinum-500-200">{person.name}</p>
                      <p className="text-sm text-platinum-500-400">{person.role}</p>
                    </div>
                    <Badge variant="outline" className="text-platinum-500 border-platinum/50 ml-2">
                      {person.affiliation.split(',')[0]}
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
