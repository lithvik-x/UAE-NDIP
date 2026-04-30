'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import {
  dataQualityNotes,
  contradictoryInformationNotes,
  researchMethodologyNotes
} from '@/lib/data-loader/sentiment-data'
import {
  CheckCircle, AlertCircle, Info, FileSearch, Scale, Clock,
  Database, Search, Languages, Globe, Users
} from 'lucide-react'

interface DataQualitySectionProps {
  className?: string
}

const qualityIcons = {
  'Evidence base': CheckCircle,
  'Consistency': CheckCircle,
  'Temporal relevance': Clock,
  'Cross-linguistic': Languages,
  'Credibility range': Scale,
}

const qualityColors = {
  'Evidence base': 'text-emerald-400',
  'Consistency': 'text-emerald-400',
  'Temporal relevance': 'text-denim-400',
  'Cross-linguistic': 'text-purple-400',
  'Credibility range': 'text-amber-400',
}

export function DataQualitySection({ className }: DataQualitySectionProps) {
  return (
    <div className={className}>
      {/* Data Quality Notes */}
      <GlassPanel
        title="Data Quality Assessment"
        description="Evidence base evaluation across 60+ authoritative sources"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dataQualityNotes.map((note, idx) => {
            const Icon = qualityIcons[note.aspect as keyof typeof qualityIcons] || Info
            const colorClass = qualityColors[note.aspect as keyof typeof qualityColors] || 'text-slate-400'
            return (
              <motion.div
                key={note.aspect}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card border border-slate-500/30 p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`h-5 w-5 ${colorClass}`} />
                  <h4 className="font-semibold text-slate-200 font-rajdhani">
                    {note.aspect}
                  </h4>
                </div>
                <p className="text-sm text-slate-400">{note.assessment}</p>
              </motion.div>
            )
          })}
        </div>
      </GlassPanel>

      {/* Contradictory Information */}
      <GlassPanel
        title="Contradictory Information Notes"
        description="Claims with conflicting evidence requiring verification"
        className="mt-6"
      >
        <div className="space-y-4">
          {contradictoryInformationNotes.map((note, idx) => (
            <motion.div
              key={note.claim}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card border border-amber-500/30 p-4"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-400 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-200 font-rajdhani">
                      {note.claim}
                    </h4>
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50 text-xs">
                      {note.assessment}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Source: </span>
                      <span className="text-slate-400">{note.source}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Contradiction: </span>
                      <span className="text-slate-400">{note.contradiction}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Research Methodology */}
      <GlassPanel
        title="Research Methodology"
        description="Approach and limitations of negative sentiment research"
        className="mt-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {researchMethodologyNotes.map((note, idx) => {
            const icons = [Search, Database, Clock, Languages, Globe]
            const Icon = icons[idx % icons.length]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card border border-denim-500/30 p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-5 w-5 text-denim-400" />
                  <span className="text-xs text-denim-400 font-semibold font-rajdhani">
                    Method {idx + 1}
                  </span>
                </div>
                <p className="text-sm text-slate-400">{note}</p>
              </motion.div>
            )
          })}
        </div>
      </GlassPanel>

      {/* Extracted Statistics Summary - Key Metrics */}
      <GlassPanel
        title="Extracted Statistics Summary"
        description="Key metrics extracted from MD file 9-2"
        className="mt-6"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Demographics */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 flex items-center gap-2 font-rajdhani">
              <Users className="h-4 w-4 text-denim-400" />
              Demographics
            </h4>
            {[
              { label: 'UAE Population', value: '9,890,000 (2021)' },
              { label: 'Migrant workers', value: '8 million' },
              { label: 'Migrant % of workforce', value: '88-90%' },
              { label: 'Non-nationals', value: 'Vast majority' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between p-2 glass-card border border-slate-500/20">
                <span className="text-sm text-slate-400">{item.label}</span>
                <span className="text-sm font-mono text-slate-200">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Corruption */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 flex items-center gap-2 font-rajdhani">
              <Scale className="h-4 w-4 text-amber-400" />
              Corruption
            </h4>
            {[
              { label: 'CPI Score (2024)', value: '68/100' },
              { label: 'CPI Rank (2024)', value: '23rd of 180' },
              { label: 'MENA Average CPI', value: '39' },
              { label: 'Tamweel losses', value: '$12M+' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between p-2 glass-card border border-amber-500/20">
                <span className="text-sm text-slate-400">{item.label}</span>
                <span className="text-sm font-mono text-amber-400">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Human Rights */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 flex items-center gap-2 font-rajdhani">
              <AlertCircle className="h-4 w-4 text-rose-400" />
              Human Rights
            </h4>
            {[
              { label: 'Modern slavery victims', value: '132,000' },
              { label: 'Prevalence rate', value: '13.4 per 1,000' },
              { label: 'Global slavery rank', value: '7th of 160' },
              { label: 'Mass trial defendants', value: '84+' },
              { label: 'Life sentences (upheld)', value: '53' },
              { label: 'Torture methods', value: '16 documented' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between p-2 glass-card border border-rose-500/20">
                <span className="text-sm text-slate-400">{item.label}</span>
                <span className="text-sm font-mono text-rose-400">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Environment */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200 flex items-center gap-2 font-rajdhani">
              <Globe className="h-4 w-4 text-emerald-400" />
              Environment
            </h4>
            {[
              { label: 'PM2.5 vs WHO guideline', value: '3x higher' },
              { label: 'Annual pollution deaths', value: '~1,872' },
              { label: 'Global pollution rank', value: 'Top 10' },
              { label: 'AQI typical reading', value: '150+' },
              { label: 'Man-made PM2.5', value: '90%+' },
            ].map((item) => (
              <div key={item.label} className="flex justify-between p-2 glass-card border border-emerald-500/20">
                <span className="text-sm text-slate-400">{item.label}</span>
                <span className="text-sm font-mono text-emerald-400">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Labor */}
          <div className="space-y-3 lg:col-span-2">
            <h4 className="font-semibold text-slate-200 flex items-center gap-2 font-rajdhani">
              <Users className="h-4 w-4 text-orange-400" />
              Labor
            </h4>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Recruitment fees (max)', value: '$4,100-$5,000' },
                { label: 'Workers borrowing rate', value: 'Up to 50% annual' },
                { label: 'Average daily wage', value: '~$8' },
                { label: 'Yearly salary average', value: '$2,575' },
                { label: 'Work hours (typical)', value: 'Up to 12-16/day' },
                { label: 'Temperature', value: 'Exceeding 100°F/38°C' },
                { label: 'Labor inspectors', value: '48 total for UAE' },
                { label: 'Passport confiscation', value: 'Universal (per HRW)' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between p-2 glass-card border border-orange-500/20">
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className="text-sm font-mono text-orange-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </div>
  )
}
