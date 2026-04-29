'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  humanRightsDefenders,
  negativeGovernmentEntities,
  corporateEntities
} from '@/lib/data-loader/sentiment-data'
import {
  AlertTriangle, Shield, Building, Users, Lock, Eye, DollarSign,
  Globe, Ban, Plane, UserCheck, UserX, ScrollText, Scale, Activity
} from 'lucide-react'

interface EntitiesSectionProps {
  className?: string
}

export function EntitiesSection({ className }: EntitiesSectionProps) {
  return (
    <div className={className}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Human Rights Defenders */}
        <GlassPanel
          title="Human Rights Defenders & Political Prisoners"
          description="10 documented cases of detained activists"
        >
          <ScrollArea className="h-[400px]">
            <div className="space-y-3">
              {humanRightsDefenders.map((defender, idx) => (
                <motion.div
                  key={defender.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card border border-rose-500/30 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <UserX className="h-4 w-4 text-rose-400" />
                      <h4 className="font-semibold text-slate-200">{defender.name}</h4>
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      {defender.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-slate-500">Charges: </span>
                      <span className="text-slate-300">{defender.charges}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Source: </span>
                      <span className="text-slate-400">{defender.source}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </GlassPanel>

        {/* Government & Corporate Entities */}
        <div className="space-y-6">
          <GlassPanel
            title="Government & Institutional Entities"
            description="Entities implicated in negative sentiment"
          >
            <ScrollArea className="h-[250px]">
              <div className="space-y-3">
                {negativeGovernmentEntities.map((entity, idx) => (
                  <motion.div
                    key={entity.entity}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card border border-amber-500/30 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-amber-400" />
                        <h4 className="font-semibold text-slate-200">{entity.entity}</h4>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {entity.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-400">{entity.allegation}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          <GlassPanel
            title="Corporate Entities"
            description="Companies connected to negative sentiment"
          >
            <ScrollArea className="h-[150px]">
              <div className="space-y-3">
                {corporateEntities.map((company, idx) => (
                  <motion.div
                    key={company.company}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card border border-slate-500/30 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-slate-400" />
                        <h4 className="font-semibold text-slate-200">{company.company}</h4>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {company.connection}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-400">{company.issue}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </div>
      </div>

      {/* Arrest Cases */}
      <GlassPanel
        title="Documented Arrest Cases"
        description="Cases of arrests for online criticism under Federal Decree-Law No. 5 of 2012"
        className="mt-6"
      >
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {[
              { person: 'Craig Ballentine', nationality: 'Northern Ireland', reason: 'Negative Google review about former employer', consequence: 'Arrested at Abu Dhabi airport, detained weeks under slander charges' },
              { person: 'U.S. TikTok creator', nationality: 'American', reason: 'Satirical video deemed damaging to state\'s reputation', consequence: 'Detained' },
              { person: 'U.S. cryptocurrency entrepreneur', nationality: 'American', reason: 'Criticized local regulations online', consequence: 'Arrested and intimidated' },
              { person: 'Unnamed influencer', nationality: 'Unknown', reason: 'Video about company owned by UAE nationals (not UAE-based)', consequence: 'Arrested in transit' },
              { person: 'South Asian worker', nationality: 'South Asian', reason: 'WhatsApp complaint about unpaid wages', consequence: '6 months in detention' },
              { person: 'European tourist', nationality: 'European', reason: 'Criticized hotel on TripAdvisor', consequence: '2 weeks detention, $15,000 bail, 6-month trial delay' },
            ].map((arrest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card border border-red-500/30 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                    <Ban className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-slate-200">{arrest.person}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {arrest.nationality}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-400 mb-1">
                      <span className="text-slate-500">Reason: </span>{arrest.reason}
                    </p>
                    <p className="text-sm text-red-400">
                      <span className="text-slate-500">Consequence: </span>{arrest.consequence}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Military Interventions */}
      <GlassPanel
        title="Military Interventions"
        description="Documented UAE military interventions abroad"
        className="mt-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { operation: 'Afghanistan', location: '2001-2014', details: '1,200 soldiers alongside US vs Taliban', icon: Plane },
            { operation: 'Libya', location: '2014-present', details: 'Air support for Haftar, armed Syrian rebels', icon: Globe },
            { operation: 'Yemen', location: '2015-present', details: 'Joint campaign with Saudi Arabia vs Houthis', icon: AlertTriangle },
            { operation: 'Sudan', location: 'Present', details: 'Backing military leaders with billions', icon: DollarSign },
          ].map((intervention, idx) => {
            const Icon = intervention.icon
            return (
              <motion.div
                key={intervention.operation}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card border border-amber-500/30 p-4 text-center"
              >
                <Icon className="h-8 w-8 mx-auto mb-2 text-amber-400" />
                <h4 className="font-bold text-slate-200 mb-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {intervention.operation}
                </h4>
                <p className="text-sm text-slate-400 mb-2">{intervention.location}</p>
                <p className="text-xs text-slate-500">{intervention.details}</p>
              </motion.div>
            )
          })}
        </div>
      </GlassPanel>
    </div>
  )
}
