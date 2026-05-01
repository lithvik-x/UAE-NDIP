'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  Bluetooth,
  Globe,
  Heart,
  Laptop,
  Lock,
  MapPin,
  Phone,
  Smartphone,
  Thermometer,
  Watch,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface DigitalHealthProps {
  data: {
    alHosnApp: typeof import('@/lib/data/crisis/public-health-data').alHosnApp
    digitalHealthTools: typeof import('@/lib/data/crisis/public-health-data').digitalHealthTools
  }
}

export function DigitalHealth({ data }: DigitalHealthProps) {
  const { alHosnApp, digitalHealthTools } = data

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <GlassPanel title="Digital Health Infrastructure" description="Contact tracing apps and telemedicine platforms">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Al Hosn App */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald" />
                Al Hosn App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-lg font-bold text-platinum-100">{alHosnApp.officialName}</div>
              <div className="text-sm text-platinum-400">{alHosnApp.purpose}</div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-platinum-300">Features</div>
                {alHosnApp.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-platinum-300">
                    <Heart className="h-3 w-3 text-emerald" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-platinum-300">Color Codes</div>
                <div className="flex gap-2">
                  {alHosnApp.colorCodes.map((code, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className={
                        code.color === 'Green'
                          ? 'border-emerald-500/50 text-emerald'
                          : code.color === 'Grey'
                            ? 'border-platinum-500/50 text-platinum'
                            : 'border-rose-500/50 text-rose'
                      }
                    >
                      {code.color}: {code.meaning}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-platinum-400">
                  <Globe className="h-3 w-3" />
                  {alHosnApp.languages.join(', ')}
                </div>
                <div className="flex items-center gap-2 text-platinum-400">
                  <Phone className="h-3 w-3" />
                  {alHosnApp.supportLine}
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {alHosnApp.platforms.map((platform, idx) => (
                  <Badge key={idx} variant="outline" className="border-sky-500/50 text-sky text-xs">
                    {platform}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Other Digital Tools */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-sky" />
                Digital Health Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {digitalHealthTools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg bg-glass-surface/30 p-3 border border-glass-border"
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      {tool.function.includes('Bluetooth') ? (
                        <Bluetooth className="h-4 w-4 text-sky" />
                      ) : tool.function.includes('Thermal') ? (
                        <Thermometer className="h-4 w-4 text-rose" />
                      ) : tool.function.includes('Tele') ? (
                        <Laptop className="h-4 w-4 text-emerald" />
                      ) : tool.function.includes('Quarantine') ? (
                        <Watch className="h-4 w-4 text-gold" />
                      ) : (
                        <Smartphone className="h-4 w-4 text-sky" />
                      )}
                      <span className="text-sm font-medium text-platinum-200">{tool.tool}</span>
                    </div>
                    <Badge variant="outline" className="border-platinum-500/50 text-platinum text-xs">
                      {tool.authority}
                    </Badge>
                  </div>
                  <div className="text-xs text-platinum-500">{tool.function}</div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Key Features Summary */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Apps Deployed"
            value="6+"
            icon={<Smartphone className="h-5 w-5" />}
            gradient="cyan"
          />
          <MetricCard
            title="Tracing Tech"
            value="Bluetooth"
            icon={<Bluetooth className="h-5 w-5" />}
            gradient="emerald"
          />
          <MetricCard
            title="Languages"
            value="3"
            unit="Arabic, English, Hindi"
            icon={<Globe className="h-5 w-5" />}
            gradient="purple"
          />
          <MetricCard
            title="Admin Authority"
            value="NCEMA"
            icon={<Lock className="h-5 w-5" />}
            gradient="gold"
          />
        </div>
      </GlassPanel>
    </motion.div>
  )
}
