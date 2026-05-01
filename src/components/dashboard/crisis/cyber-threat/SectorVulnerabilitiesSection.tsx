'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart } from '@/components/ui/chart-library'
import { HeartPulse, Banknote, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'
import type { CyberThreatData } from '@/lib/data/crisis/cyber-threat-data'

interface SectorVulnerabilitiesSectionProps {
  data: CyberThreatData['sectorVulnerabilities']
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

export function SectorVulnerabilitiesSection({ data }: SectorVulnerabilitiesSectionProps) {
  const protectedSectors = data?.protectedSectors || []
  const healthcareIncidents = data?.healthcareIncidents || []
  const financialIncidents = data?.financialIncidents || []

  const sectorData = protectedSectors.map((s, idx) => ({
    name: s.sector.length > 10 ? s.sector.substring(0, 10) + '...' : s.sector,
    value: s.priority === 'Critical' ? 95 : 75,
    color: s.priority === 'Critical' ? CHART_COLORS.rose : CHART_COLORS.orange,
  }))

  const healthcareIncidentsData = healthcareIncidents.map((h) => ({
    facility: h.facility.split(' ').slice(0, 2).join(' '),
    records: h.records === 'Unknown' ? 0 : parseInt(h.records.replace(/[^\d]/g, '')) || 0,
    color: CHART_COLORS.rose,
  }))

  const financialIncidentsData = financialIncidents.map((f) => ({
    institution: f.institution.split(' ').slice(0, 2).join(' '),
    amount: f.amount.includes('Alleged') ? 38 : f.amount.includes('Stolen') ? 1500 : parseFloat(f.amount.replace(/[^\d]/g, '')) || 0,
    color: CHART_COLORS.orange,
  }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Critical Sector Vulnerabilities" description="Threat assessment by industry">
        <div className="space-y-6">
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Impact by Sector</CardTitle>
              <CardDescription>Threat level assessment by industry</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={sectorData}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.purple }]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-rose-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-rose" />
                  Healthcare Incidents
                </CardTitle>
                <CardDescription>Major healthcare breaches</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={healthcareIncidentsData}
                  xAxisKey="facility"
                  bars={[{ dataKey: 'records', name: 'Records (millions)', color: CHART_COLORS.rose }]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Banknote className="h-5 w-5 text-orange" />
                  Financial Incidents
                </CardTitle>
                <CardDescription>Major financial sector breaches</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={financialIncidentsData}
                  xAxisKey="institution"
                  bars={[{ dataKey: 'amount', name: 'Impact ($M)', color: CHART_COLORS.orange }]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card border-amber-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-amber" />
                Bybit Hack - February 2025
              </CardTitle>
              <CardDescription>Largest cryptocurrency theft ever</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                  <p className="text-3xl font-bold text-amber">$1.5B</p>
                  <p className="text-xs text-platinum-400">Amount Stolen</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                  <p className="text-lg font-bold text-amber">400,000+ ETH</p>
                  <p className="text-xs text-platinum-400">Currency</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-amber-500/30 text-center">
                  <p className="text-lg font-bold text-amber">North Korea</p>
                  <p className="text-xs text-platinum-400">FBI Attribution</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}