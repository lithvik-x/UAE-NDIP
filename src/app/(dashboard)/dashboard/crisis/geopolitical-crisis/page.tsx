// @ts-nocheck
'use client'

import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  Globe,
  Database,
  Map,
  Heart,
  Siren,
  Search,
} from 'lucide-react'
import {
  useGeopoliticalCrisisData,
} from '@/lib/data-loader'
import { motion } from 'framer-motion'
import {
  OverviewSection,
  YemenSection,
  LibyaSudanSection,
  RegionalSection,
  GreatPowerSection,
  SentimentSection,
} from '@/components/dashboard/crisis/geopolitical-crisis'
import { statisticsDashboard } from '@/lib/data/crisis/geopolitical-crisis-data'

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function GeopoliticalCrisisPage() {
  const { data } = useGeopoliticalCrisisData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Geopolitical Crisis data...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="denim" className="mb-2 bg-gradient-to-r from-indigo-500/20 to-navy-600/20 text-navy-400 border-navy-500/50">
            <Globe className="w-3 h-3 mr-1" />
            GEOPOLITICAL
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-navy-100 via-navy-200 to-indigo-400 bg-clip-text text-transparent">
              Geopolitical Crisis
            </span>
          </h1>
          <p className="mt-2 text-navy-300/70">
            UAE involvement in regional conflicts, great power competition, and diplomatic dynamics (1971-2026)
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2 border-rose-500/50 text-rose-500 hover:bg-rose-500/10">
            <Search className="h-4 w-4" />
            {statisticsDashboard.totalQueriesExecuted} Queries Executed
          </Badge>
          <Badge variant="outline" className="gap-2 border-navy-500/50 text-blue hover:bg-navy-500/10">
            <Database className="h-4 w-4" />
            {statisticsDashboard.keyDataPointsExtracted} Data Points
          </Badge>
        </div>
      </motion.div>

      {/* KEY METRICS */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <MetricCard title="Queries Executed" value={statisticsDashboard.totalQueriesExecuted.toString()} icon={<Search className="h-5 w-5" />} gradient="navy" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
          <MetricCard title="Data Points" value={statisticsDashboard.keyDataPointsExtracted} icon={<Database className="h-5 w-5" />} gradient="navy" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <MetricCard title="Source Domains" value={statisticsDashboard.sourceDomainsHarvested} icon={<Globe className="h-5 w-5" />} gradient="blue" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }}>
          <MetricCard title="Conflict Zones" value="10+" icon={<Map className="h-5 w-5" />} gradient="cyan" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
          <MetricCard title="Total Aid Committed" value="$98B" icon={<Heart className="h-5 w-5" />} gradient="emerald" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 }}>
          <MetricCard title="Alert Level" value="RED" icon={<Siren className="h-5 w-5" />} gradient="rose" status="error" />
        </motion.div>
      </div>

      {/* TABS */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="yemen">Yemen</TabsTrigger>
          <TabsTrigger value="libya-sudan">Libya/Sudan</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
          <TabsTrigger value="greatpower">Great Power</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <OverviewSection />
        </TabsContent>

        {/* YEMEN TAB */}
        <TabsContent value="yemen" className="space-y-6">
          <YemenSection />
        </TabsContent>

        {/* LIBYA/SUDAN TAB */}
        <TabsContent value="libya-sudan" className="space-y-6">
          <LibyaSudanSection />
        </TabsContent>

        {/* REGIONAL TAB */}
        <TabsContent value="regional" className="space-y-6">
          <RegionalSection />
        </TabsContent>

        {/* GREAT POWER TAB */}
        <TabsContent value="greatpower" className="space-y-6">
          <GreatPowerSection />
        </TabsContent>

        {/* SENTIMENT TAB */}
        <TabsContent value="sentiment" className="space-y-6">
          <SentimentSection />
        </TabsContent>
      </Tabs>
    </div>
  )
}
