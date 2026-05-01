'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Users, ExternalLink, Briefcase, Home, ShoppingBag, Heart, Church, Dumbbell } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  majorExpatGroups,
  dubaiExpatGroups,
  jobGroups,
  housingGroups,
  businessGroups,
  womenGroups,
  religiousGroups,
  fitnessGroups,
} from '@/lib/data/social/facebook-meta-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const groupIcons: Record<string, any> = {
  'Expat Groups': Users,
  'Jobs': Briefcase,
  'Housing': Home,
  'Business': ShoppingBag,
  'Women': Heart,
  'Religious': Church,
  'Fitness': Dumbbell,
}

const credibilityColors: Record<string, string> = {
  'High': 'border-emerald-500/50 text-emerald-400',
  'Medium': 'border-amber-500/50 text-amber-400',
  'Low': 'border-rose-500/50 text-rose-400',
}

interface GroupCardProps {
  group: any
  icon: any
  index: number
}

function GroupCard({ group, icon: Icon, index }: GroupCardProps) {
  return (
    <motion.a
      href={group.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-info/50 transition-colors"
    >
      <Icon className="h-5 w-5 text-info flex-shrink-0 mt-1" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-platinum-200 truncate">{group.name}</span>
          <Badge
            variant="outline"
            className={`text-xs shrink-0 ${credibilityColors[group.credibility] || credibilityColors['Medium']}`}
          >
            {group.credibility}
          </Badge>
        </div>
        <p className="text-xs text-slate-400 mb-2 line-clamp-2">{group.description || group.focus}</p>
        {group.members && (
          <div className="flex items-center gap-1 text-xs text-info">
            <Users className="h-3 w-3" />
            <span>{group.members}</span>
          </div>
        )}
        <div className="flex items-center gap-1 mt-2 text-xs text-info">
          <ExternalLink className="h-3 w-3" />
          <span>View Group</span>
        </div>
      </div>
    </motion.a>
  )
}

export function FacebookMetaExpatGroupsSection() {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Expat Communities & Groups"
        description="Major Facebook groups for UAE expats"
      >
        <div className="space-y-8">
          {/* Major Expat Groups */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-info" />
                Major Expat Community Groups
              </CardTitle>
              <CardDescription>Large international community groups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {majorExpatGroups.map((group, idx) => (
                  <GroupCard key={idx} group={group} icon={Users} index={idx} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dubai Expat Groups */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-gold" />
                Dubai Expat Groups
              </CardTitle>
              <CardDescription>Dubai-specific expat communities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dubaiExpatGroups.map((group, idx) => (
                  <GroupCard key={idx} group={group} icon={Users} index={idx} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Job Groups */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-emerald" />
                Job & Employment Groups
              </CardTitle>
              <CardDescription>Professional networking and job opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {jobGroups.map((group, idx) => (
                  <GroupCard key={idx} group={group} icon={Briefcase} index={idx} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Housing Groups */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Home className="h-5 w-5 text-rose" />
                Housing & Real Estate Groups
              </CardTitle>
              <CardDescription>Apartments, villas, and property discussions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {housingGroups.map((group, idx) => (
                  <GroupCard key={idx} group={group} icon={Home} index={idx} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Business Groups */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-platinum" />
                Business & Entrepreneurship Groups
              </CardTitle>
              <CardDescription>Business networking and startup communities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {businessGroups.map((group, idx) => (
                  <GroupCard key={idx} group={group} icon={ShoppingBag} index={idx} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Women Groups */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-rose" />
                Women & Family Groups
              </CardTitle>
              <CardDescription>Women-specific communities and family support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {womenGroups.map((group, idx) => (
                  <GroupCard key={idx} group={group} icon={Heart} index={idx} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Religious Groups */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Church className="h-5 w-5 text-gold" />
                Religious & Cultural Groups
              </CardTitle>
              <CardDescription>Interfaith and cultural community groups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {religiousGroups.map((group, idx) => (
                  <motion.a
                    key={idx}
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-gold/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Church className="h-5 w-5 text-gold" />
                      <div>
                        <span className="text-sm font-medium text-platinum-200">{group.name}</span>
                        <p className="text-xs text-slate-400 mt-0.5">{group.focus}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400">{group.members}</span>
                      <ExternalLink className="h-4 w-4 text-info" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fitness Groups */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-emerald" />
                Health & Fitness Groups
              </CardTitle>
              <CardDescription>Fitness communities and wellness groups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {fitnessGroups.map((group, idx) => (
                  <GroupCard key={idx} group={group} icon={Dumbbell} index={idx} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}