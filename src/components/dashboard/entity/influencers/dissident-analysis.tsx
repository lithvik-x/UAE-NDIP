'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AlertTriangle, Users, Globe, Frown } from 'lucide-react'
import type { DissidentProfile } from '@/lib/data/entity/influencers-data'

interface DissidentAnalysisProps {
  currentlyImprisonedDissidents: DissidentProfile[]
  exiledDissidents: DissidentProfile[]
  uaeFiveMembers: { name: string; background: string; status: string }[]
  uae94MassTrial: { field: string; value: string | number }[]
  princessLatifaCase: { field: string; value: string }[]
  humanRightsConcerns: { concern: string; details: string }[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Imprisoned':
      return <Badge variant="destructive" className="text-xs">Imprisoned</Badge>
    case 'Exiled':
      return <Badge variant="warning" className="text-xs">Exiled</Badge>
    case 'Deported':
      return <Badge variant="secondary" className="text-xs">Deported</Badge>
    case 'Died':
      return <Badge variant="destructive" className="text-xs bg-platinum-600">Died</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{status}</Badge>
  }
}

export function DissidentAnalysis({
  currentlyImprisonedDissidents,
  exiledDissidents,
  uaeFiveMembers,
  uae94MassTrial,
  princessLatifaCase,
  humanRightsConcerns,
}: DissidentAnalysisProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Currently Imprisoned */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card border-red-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Currently Imprisoned
            </CardTitle>
            <CardDescription>Dissidents currently detained in UAE prisons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentlyImprisonedDissidents.map((dissident) => (
                <div key={dissident.id} className="p-4 glass-subtle rounded-lg border border-red-500/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{dissident.name}</p>
                      <p className="text-xs text-platinum-500-500">{dissident.charges || dissident.notes?.join(', ')}</p>
                    </div>
                    {getStatusBadge(dissident.status)}
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs">
                      <span className="text-platinum-500-500">Sentence: </span>
                      <span className="text-sm font-medium text-red-600 dark:text-red-400">{dissident.sentence}</span>
                    </p>
                    {dissident.arrestDate && (
                      <p className="text-xs">
                        <span className="text-platinum-500-500">Arrested: </span>
                        <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{dissident.arrestDate}</span>
                      </p>
                    )}
                    {dissident.deathDate && (
                      <p className="text-xs">
                        <span className="text-platinum-500-500">Died: </span>
                        <span className="text-sm text-red-600 dark:text-red-400">{dissident.deathDate}</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Exiled Dissidents */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card border-orange-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-orange-500" />
              Exiled Dissidents
            </CardTitle>
            <CardDescription>Dissidents who fled UAE or were deported</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {exiledDissidents.map((dissident) => (
                <div key={dissident.id} className="p-4 glass-subtle rounded-lg border border-orange-500/10">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{dissident.name}</p>
                    {getStatusBadge(dissident.status)}
                  </div>
                  <div className="mt-2 space-y-1">
                    {dissident.location && (
                      <p className="text-xs">
                        <span className="text-platinum-500-500">Location: </span>
                        <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{dissident.location}</span>
                      </p>
                    )}
                    {dissident.notes && dissident.notes.length > 0 && (
                      <p className="text-xs text-platinum-500-500">{dissident.notes.join(' | ')}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* UAE Five & Mass Trial */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-indigo-500" />
              UAE Five & Mass Trial
            </CardTitle>
            <CardDescription>Landmark cases of political prisoners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* UAE 94 Mass Trial */}
              <div className="p-4 glass-subtle rounded-lg bg-red-500/5 border border-red-500/10">
                <p className="text-sm font-bold text-red-600 dark:text-red-400 mb-2">UAE 94 Mass Trial</p>
                <div className="grid grid-cols-2 gap-2">
                  {uae94MassTrial.map((item, idx) => (
                    <div key={idx}>
                      <p className="text-xs text-platinum-500-500">{item.field}</p>
                      <p className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* UAE Five Members */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-platinum-500-500 uppercase tracking-wider">UAE Five (2011)</p>
                {uaeFiveMembers.map((member, idx) => (
                  <div key={idx} className="p-3 glass-subtle rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-sm text-navy-500-900 dark:text-platinum-500-100">{member.name}</p>
                        <p className="text-xs text-platinum-500-500">{member.background}</p>
                      </div>
                    </div>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">{member.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Princess Latifa Case */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Frown className="h-5 w-5 text-platinum-500-500" />
              Princess Latifa Case
            </CardTitle>
            <CardDescription>Daughter of Dubai ruler seeking asylum</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {princessLatifaCase.map((item, idx) => (
                <div key={idx} className="flex justify-between p-3 glass-subtle rounded-lg">
                  <span className="text-sm text-platinum-500-500">{item.field}</span>
                  <span className="text-sm font-medium text-navy-500-900 dark:text-platinum-500-100 text-right max-w-[60%]">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Human Rights Concerns */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }} className="lg:col-span-2">
        <Card className="glass-card border-red-500/20">
          <CardHeader>
            <CardTitle className="text-lg">Human Rights Concerns</CardTitle>
            <CardDescription>Documented rights violations in UAE</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {humanRightsConcerns.map((concern, idx) => (
                <div key={idx} className="p-4 glass-subtle rounded-lg border border-red-500/10">
                  <p className="font-semibold text-sm text-red-600 dark:text-red-400 mb-1">{concern.concern}</p>
                  <p className="text-xs text-platinum-500-500">{concern.details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
