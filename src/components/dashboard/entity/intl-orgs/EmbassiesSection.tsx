'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Flag,
  Building,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react'
import type { UAEEmbassiesData, ForeignEmbassiesData } from '@/lib/data/entity/international-orgs-data'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

interface EmbassiesSectionProps {
  uaeEmbassies: UAEEmbassiesData
  foreignEmbassies: ForeignEmbassiesData
}

export function EmbassiesSection({ uaeEmbassies, foreignEmbassies }: EmbassiesSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="UAE Diplomatic Network" description="UAE embassies abroad and foreign embassies in UAE">
        <Tabs defaultValue="uae-abroad" className="space-y-4">
          <TabsList className="glass-panel">
            <TabsTrigger value="uae-abroad">UAE Embassies Abroad</TabsTrigger>
            <TabsTrigger value="foreign-uae">Foreign Embassies in UAE</TabsTrigger>
          </TabsList>

          <TabsContent value="uae-abroad">
            <div className="grid gap-4 lg:grid-cols-2">
              {uaeEmbassies.embassies.map((embassy) => (
                <Card key={embassy.country} className="glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{embassy.country}</CardTitle>
                      {embassy.since && (
                        <Badge variant="outline" size="sm">Since {embassy.since}</Badge>
                      )}
                    </div>
                    <CardDescription>{embassy.city}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Flag className="h-3 w-3 text-platinum-400" />
                        <span className="text-sm font-medium">{embassy.ambassador}</span>
                      </div>
                      {embassy.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-platinum-400" />
                          <span className="text-xs text-platinum-500">{embassy.phone}</span>
                        </div>
                      )}
                      {embassy.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3 text-platinum-400" />
                          <span className="text-xs text-platinum-500">{embassy.email}</span>
                        </div>
                      )}
                      {embassy.additionalInfo?.metric && (
                        <div className="mt-3 p-2 rounded bg-white/40 dark:bg-white/5">
                          <p className="text-xs text-platinum-500">{embassy.additionalInfo.metric}</p>
                          <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                            {embassy.additionalInfo.value}
                          </p>
                          {embassy.additionalInfo.target && (
                            <p className="text-xs text-platinum-500">Target: {embassy.additionalInfo.target}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="foreign-uae">
            <div className="grid gap-4 lg:grid-cols-2">
              {foreignEmbassies.embassies.map((embassy) => (
                <Card key={embassy.country} className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{embassy.country}</CardTitle>
                    {embassy.partnershipFramework && (
                      <CardDescription>{embassy.partnershipFramework}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-3 w-3 text-platinum-400" />
                        <span className="text-sm font-medium">{embassy.currentHead}</span>
                      </div>
                      {embassy.since && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3 text-platinum-400" />
                          <span className="text-xs text-platinum-500">Since {embassy.since}</span>
                        </div>
                      )}
                      {embassy.services && (
                        <div className="mt-3">
                          <p className="text-xs font-medium text-platinum-700 dark:text-platinum-300 mb-1">Services</p>
                          <div className="flex flex-wrap gap-1">
                            {embassy.services.map((service) => (
                              <Badge key={service} variant="outline" size="sm">{service}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </GlassPanel>
    </motion.div>
  )
}

export default EmbassiesSection